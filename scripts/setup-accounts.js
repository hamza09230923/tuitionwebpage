#!/usr/bin/env node

/**
 * Firebase Account Setup Script
 * 
 * This script creates Firebase Auth users and Firestore documents
 * for students, teachers, and admins.
 * 
 * Usage:
 *   node scripts/setup-accounts.js
 * 
 * Or with custom config:
 *   node scripts/setup-accounts.js --config custom-config.json
 */

import admin from 'firebase-admin';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Question helper
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// Check if service account file exists
let serviceAccount;
const serviceAccountPath = join(process.cwd(), 'serviceAccountKey.json');

if (existsSync(serviceAccountPath)) {
  serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
  console.log('✅ Found serviceAccountKey.json');
} else {
  console.log('⚠️  serviceAccountKey.json not found. Please provide Firebase credentials.');
  console.log('\nYou can either:');
  console.log('1. Download serviceAccountKey.json from Firebase Console');
  console.log('   Project Settings > Service Accounts > Generate New Private Key');
  console.log('2. Or provide credentials interactively\n');
  
  const useEnv = await question('Do you want to use environment variables? (y/n): ');
  if (useEnv.toLowerCase() === 'y') {
    const projectId = await question('Firebase Project ID: ');
    const clientEmail = await question('Client Email: ');
    const privateKey = await question('Private Key (paste full key): ');
    
    serviceAccount = {
      projectId,
      clientEmail,
      privateKey: privateKey.replace(/\\n/g, '\n')
    };
  } else {
    console.log('\n❌ Please add serviceAccountKey.json to the scripts folder');
    process.exit(1);
  }
}

// Initialize Firebase Admin
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log('✅ Firebase Admin initialized\n');
} catch (error) {
  console.error('❌ Error initializing Firebase Admin:', error.message);
  process.exit(1);
}

const db = admin.firestore();
const auth = admin.auth();

// Default accounts to create
const defaultAccounts = {
  student: {
    name: 'Test Student',
    email: 'student@myschola.com',
    password: 'Student123!',
    schoolYear: 'Year 11',
    subjects: [], // Will be populated with created subjects
    subjectSettings: {}
  },
  teacher: {
    name: 'Test Teacher',
    email: 'teacher@myschola.com',
    password: 'Teacher123!',
    subjects: [], // Will be populated with created subjects
    role: 'teacher'
  },
  admin: {
    name: 'Admin User',
    email: 'admin@myschola.com',
    password: 'Admin123!',
    role: 'admin',
    permissions: ['approve_recordings', 'manage_students', 'manage_subjects']
  }
};

// Default subjects to create
const defaultSubjects = [
  {
    id: 'maths_001',
    name: 'Maths',
    description: 'GCSE Mathematics',
    zoomLink: ''
  },
  {
    id: 'english_lang_001',
    name: 'English Language',
    description: 'GCSE English Language',
    zoomLink: ''
  },
  {
    id: 'english_lit_001',
    name: 'English Literature',
    description: 'GCSE English Literature',
    zoomLink: ''
  },
  {
    id: 'combined_science_001',
    name: 'Combined Science',
    description: 'GCSE Combined Science',
    zoomLink: ''
  },
  {
    id: 'triple_science_001',
    name: 'Triple Science',
    description: 'GCSE Triple Science (Biology, Chemistry, Physics)',
    zoomLink: ''
  }
];

// Create subject in Firestore
async function createSubject(subject) {
  try {
    const subjectRef = db.collection('subjects').doc(subject.id);
    await subjectRef.set({
      name: subject.name,
      description: subject.description,
      zoomLink: subject.zoomLink || '',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log(`  ✅ Created subject: ${subject.name} (${subject.id})`);
    return subject.id;
  } catch (error) {
    console.error(`  ❌ Error creating subject ${subject.name}:`, error.message);
    throw error;
  }
}

// Create Firebase Auth user
async function createAuthUser(email, password, displayName) {
  try {
    const userRecord = await auth.createUser({
      email,
      password,
      displayName,
      emailVerified: false
    });
    console.log(`  ✅ Created Auth user: ${email} (UID: ${userRecord.uid})`);
    return userRecord.uid;
  } catch (error) {
    if (error.code === 'auth/email-already-exists') {
      console.log(`  ⚠️  User ${email} already exists, fetching UID...`);
      const user = await auth.getUserByEmail(email);
      return user.uid;
    }
    throw error;
  }
}

// Create student document
async function createStudent(uid, studentData, subjectIds) {
  try {
    const studentRef = db.collection('students').doc(uid);
    
    // Build subjectSettings based on enrolled subjects
    const subjectSettings = {};
    subjectIds.forEach(subjectId => {
      // Default settings - you can customize these
      const subject = defaultSubjects.find(s => s.id === subjectId);
      const isEnglish = subject?.name.toLowerCase().includes('english');
      
      subjectSettings[subjectId] = {
        examBoard: 'AQA', // Default to AQA, can be changed later
        tier: isEnglish ? null : 'Higher' // Default to Higher, null for English
      };
    });
    
    await studentRef.set({
      name: studentData.name,
      email: studentData.email,
      subjects: subjectIds,
      subjectSettings: subjectSettings,
      schoolYear: studentData.schoolYear || 'Year 11',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log(`  ✅ Created student document for ${studentData.name}`);
    return studentRef.id;
  } catch (error) {
    console.error(`  ❌ Error creating student document:`, error.message);
    throw error;
  }
}

// Create teacher document
async function createTeacher(uid, teacherData, subjectIds) {
  try {
    const teacherRef = db.collection('teachers').doc(uid);
    await teacherRef.set({
      name: teacherData.name,
      email: teacherData.email,
      subjects: subjectIds,
      role: 'teacher',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log(`  ✅ Created teacher document for ${teacherData.name}`);
    return teacherRef.id;
  } catch (error) {
    console.error(`  ❌ Error creating teacher document:`, error.message);
    throw error;
  }
}

// Create admin document
async function createAdmin(uid, adminData) {
  try {
    const adminRef = db.collection('admins').doc(uid);
    await adminRef.set({
      name: adminData.name,
      email: adminData.email,
      role: 'admin',
      permissions: adminData.permissions || ['approve_recordings', 'manage_students', 'manage_subjects'],
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log(`  ✅ Created admin document for ${adminData.name}`);
    return adminRef.id;
  } catch (error) {
    console.error(`  ❌ Error creating admin document:`, error.message);
    throw error;
  }
}

// Main setup function
async function setupAccounts() {
  console.log('\n🚀 Starting Firebase Account Setup...\n');
  
  try {
    // Step 1: Create subjects
    console.log('📚 Step 1: Creating subjects...');
    const subjectIds = [];
    for (const subject of defaultSubjects) {
      try {
        await createSubject(subject);
        subjectIds.push(subject.id);
      } catch (error) {
        // Subject might already exist
        if (error.code === 6) { // Already exists
          console.log(`  ⚠️  Subject ${subject.name} already exists`);
          subjectIds.push(subject.id);
        }
      }
    }
    console.log(`\n✅ Created ${subjectIds.length} subjects\n`);

    // Step 2: Create student account
    console.log('👨‍🎓 Step 2: Creating student account...');
    const studentUid = await createAuthUser(
      defaultAccounts.student.email,
      defaultAccounts.student.password,
      defaultAccounts.student.name
    );
    
    // Enroll student in all subjects (you can customize this)
    await createStudent(studentUid, defaultAccounts.student, subjectIds);
    console.log(`\n✅ Student account created!\n`);
    console.log(`   Email: ${defaultAccounts.student.email}`);
    console.log(`   Password: ${defaultAccounts.student.password}`);
    console.log(`   Enrolled in: ${subjectIds.length} subjects\n`);

    // Step 3: Create teacher account
    console.log('👨‍🏫 Step 3: Creating teacher account...');
    const teacherUid = await createAuthUser(
      defaultAccounts.teacher.email,
      defaultAccounts.teacher.password,
      defaultAccounts.teacher.name
    );
    
    // Assign teacher to all subjects (you can customize this)
    await createTeacher(teacherUid, defaultAccounts.teacher, subjectIds);
    console.log(`\n✅ Teacher account created!\n`);
    console.log(`   Email: ${defaultAccounts.teacher.email}`);
    console.log(`   Password: ${defaultAccounts.teacher.password}`);
    console.log(`   Teaching: ${subjectIds.length} subjects\n`);

    // Step 4: Create admin account
    console.log('👑 Step 4: Creating admin account...');
    const adminUid = await createAuthUser(
      defaultAccounts.admin.email,
      defaultAccounts.admin.password,
      defaultAccounts.admin.name
    );
    
    await createAdmin(adminUid, defaultAccounts.admin);
    console.log(`\n✅ Admin account created!\n`);
    console.log(`   Email: ${defaultAccounts.admin.email}`);
    console.log(`   Password: ${defaultAccounts.admin.password}\n`);

    // Summary
    console.log('═══════════════════════════════════════════════════════');
    console.log('✅ Setup Complete!');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('📋 Account Summary:\n');
    console.log('STUDENT:');
    console.log(`  Email: ${defaultAccounts.student.email}`);
    console.log(`  Password: ${defaultAccounts.student.password}`);
    console.log(`  Subjects: ${subjectIds.join(', ')}\n`);
    
    console.log('TEACHER:');
    console.log(`  Email: ${defaultAccounts.teacher.email}`);
    console.log(`  Password: ${defaultAccounts.teacher.password}\n`);
    
    console.log('ADMIN:');
    console.log(`  Email: ${defaultAccounts.admin.email}`);
    console.log(`  Password: ${defaultAccounts.admin.password}\n`);
    
    console.log('⚠️  IMPORTANT: Change these passwords after first login!\n');
    
  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    console.error(error);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run setup
setupAccounts().catch(console.error);

