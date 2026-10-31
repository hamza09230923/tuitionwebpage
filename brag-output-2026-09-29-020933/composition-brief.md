# Hyperframes Composition Brief: MySchola

## Objective
Create a 60-second cinematic launch film for MySchola, an online GCSE tutoring platform. Use the actual website language and UI structure from the source project as the visual foundation.

## Output
- Composition directory: `brag-output-2026-09-29-020933/composition/`
- Rendered video: `brag-output-2026-09-29-020933/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 60 seconds (explicit user request; extended beyond the default short-form brag duration)

## Source Material
- Project root: `C:/fastpush/tuitionwebpage`
- Primary files read: `index.html`, `src/Home.jsx`, `src/index.css`, `src/pages/Courses.jsx`, `src/pages/StudentDashboard.jsx`, `src/pages/Timetable.jsx`, `src/pages/Recordings.jsx`, `src/pages/Booking.jsx`, `src/components/SiteHeader.jsx`
- Product name: MySchola
- Tagline / strongest claim: `GCSE Tuition That Helps Students Close Gaps, Build Confidence and Improve Grades`
- Key UI moments: homepage hero progress card, subject and year course cards, weekly timetable grid, student dashboard, recordings / homework actions, parent progress language, free consultation CTA
- Copy that must appear verbatim:
  - `Close Gaps. Build Confidence. Improve Grades.`
  - `Your GCSE Learning Timetable`
  - `MySchola Student Dashboard`
  - `Book a Free Consultation`
  - `No card required.`

## Creative Direction
- Tone preset: cinematic
- Creative direction: cinematic premium edtech startup launch; Apple-style product restraint; emotional professional British voiceover
- Angle: GCSE confidence is not a single breakthrough. MySchola makes progress visible as a dependable weekly loop of live teaching, practice, recordings, feedback and parent communication.
- Hook: `GCSE success is built week by week.` over a dark navy, product-derived opening
- Outro: `MySchola. Close gaps. Build confidence. Improve grades. Book a free consultation.`
- Avoid: generic stock education imagery, invented student photography, generic AI visuals, ungrounded grade promises, abstract filler motion

## Visual Identity
- Background: `#ffffff`, `#f8fafc`, and project trust navy `#0d2b52`
- Text: `#111827` / `#0d2b52`
- Accent: `#2563eb`, `#145dff`, `#10a56a`, with subject colours from the timetable
- Display font: `Bricolage Grotesque`
- Body font: system UI stack used by the project
- Visual references: homepage hero, blue keyword typography, timetable calendar, dashboard panels, course cards, green contact / support actions

## Storyboard
Use `brag-plan.md` as the creative contract.

1. The starting point — 6s — navy opening, homepage fragment, hook
2. The promise — 8s — actual homepage hero and CTA
3. The right subjects — 9s — Maths, English and Science course panels
4. Live learning — 9s — actual weekly timetable and selected lesson detail
5. The student loop — 10s — actual dashboard and actions
6. Support between lessons — 8s — recordings, homework, feedback, parent communication
7. Progress you can see — 6s — trust language and visible next steps
8. The next step — 4s — logo, tagline and free consultation CTA

## Audio
- Audio role: cinematic support with voice-led clarity
- Audio arc: restrained swell → confident pulse → warm emotional lift → clean final resolution
- Music: `assets/music/happy-beats-business-moves-vol-12-by-ende-dot-app.mp3`
- Music treatment: 0.18 under voiceover; 0.30 in visual-only moments; fade under final CTA
- Music cue guidance: `.agents/skills/brag/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json`; use nearby strong cues around 12s, 31s and 53s if they preserve readability
- Audio-reactive treatment: subtle breathing in navy background warmth and UI glow only
- Audio-coupled moments: headline settle, subject-card sequence, timetable selection, dashboard expansion, progress reveal, final logo
- SFX selection guidance: soft click for pointer / CTA, restrained card placement for subjects, low glass / bell for major reveals, one final impact
- Voiceover: generate with Hyperframes TTS using a professional English voice; narration text is in `brag-plan.md`

## Hyperframes Instructions
- Use the current Hyperframes composition contract and runtime conventions.
- Recreate actual source UI patterns and copy; do not use generic stock or AI imagery.
- Keep every visible line readable at 1920x1080.
- Use cinematic camera moves through product panels: slow push-ins, parallax depth, controlled wipes and crossfades.
- Make the composition seek-safe and render-safe across the full 60-second timeline.
- Run `hyperframes check` before render and fix all errors.
