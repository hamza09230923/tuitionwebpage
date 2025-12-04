import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
import * as firebaseAuth from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore';

// Mock the firebase modules
vi.mock('./firebase', () => ({
  auth: {},
  db: {}
}));

vi.mock('firebase/auth', async () => {
  const actual = await vi.importActual('firebase/auth');
  return {
    ...actual,
    signInWithEmailAndPassword: vi.fn(),
    createUserWithEmailAndPassword: vi.fn(),
    getAuth: vi.fn(),
  };
});

vi.mock('firebase/firestore', async () => {
  const actual = await vi.importActual('firebase/firestore');
  return {
    ...actual,
    doc: vi.fn(),
    setDoc: vi.fn(),
    getFirestore: vi.fn(),
    serverTimestamp: vi.fn(),
  };
});

describe('Login Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders login form by default', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /sign in to your account/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('toggles to sign up form', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const toggleButton = screen.getByText(/sign up for a new account/i);
    fireEvent.click(toggleButton);

    expect(screen.getByRole('heading', { name: /create your account/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByText(/i am a.../i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
  });

  it('handles login submission', async () => {
    firebaseAuth.signInWithEmailAndPassword.mockResolvedValue({ user: { uid: '123' } });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(expect.anything(), 'test@example.com', 'password123');
    });
  });

  it('handles registration submission', async () => {
    firebaseAuth.createUserWithEmailAndPassword.mockResolvedValue({ user: { uid: '123' } });
    firebaseFirestore.doc.mockReturnValue('mockDocRef');
    firebaseFirestore.setDoc.mockResolvedValue();

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Switch to sign up
    fireEvent.click(screen.getByText(/sign up for a new account/i));

    // Fill form
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'new@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });

    // Select student (optional, checks default or click)
    const studentBtn = screen.getByRole('button', { name: /student/i });
    fireEvent.click(studentBtn);

    fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => {
      expect(firebaseAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(expect.anything(), 'new@example.com', 'password123');
      expect(firebaseFirestore.setDoc).toHaveBeenCalledWith('mockDocRef', expect.objectContaining({
        name: 'John Doe',
        email: 'new@example.com',
        userType: 'student'
      }));
    });
  });

  it('displays error message on failure', async () => {
    const errorMsg = 'Invalid credentials';
    firebaseAuth.signInWithEmailAndPassword.mockRejectedValue(new Error(errorMsg));

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'wrong@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpass' } });

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(screen.getByText(errorMsg)).toBeInTheDocument();
    });
  });
});
