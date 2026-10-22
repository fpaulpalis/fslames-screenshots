<p align="center">
  <img src="logo.png" width="120" alt="FSLAMES logo">
</p>

<h1 align="center">FSLAMES</h1>

<p align="center">
  <b>Filipino Sign Language Automated Mobile Education System</b><br>
  An offline-first, gamified Flutter app that teaches foundational Filipino Sign
  Language (FSL) and checks your signing with the phone camera.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.0.0-2e7d32" alt="Version 2.0.0">
  <img src="https://img.shields.io/badge/Flutter-%E2%89%A53.47-02569B?logo=flutter&logoColor=white" alt="Flutter">
  <img src="https://img.shields.io/badge/Dart-%E2%89%A53.12-0175C2?logo=dart&logoColor=white" alt="Dart">
  <img src="https://img.shields.io/badge/Android-10%2B%20(API%2029)-3DDC84?logo=android&logoColor=white" alt="Android 10+">
  <img src="https://img.shields.io/badge/iOS-15%2B-000000?logo=apple&logoColor=white" alt="iOS 15+">
  <br>
  <img src="https://img.shields.io/badge/MediaPipe-Tasks%20Vision-0097A7?logo=google&logoColor=white" alt="MediaPipe Tasks Vision">
  <img src="https://img.shields.io/badge/TensorFlow%20Lite-on--device-FF6F00?logo=tensorflow&logoColor=white" alt="TensorFlow Lite">
  <img src="https://img.shields.io/badge/SQLite-local%20storage-003B57?logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/works-offline-c9a227" alt="Works offline">
</p>

<p align="center">
  <a href="#what-it-does">What it does</a> ·
  <a href="#screenshots">Screenshots</a> ·
  <a href="#availability">Availability</a> ·
  <a href="#questions">Questions</a> ·
  <a href="#maintainers-and-contributors">Maintainers</a>
</p>

## What it does

FSLAMES is a mobile learning system for Bachelor of Elementary Education
(BEEd) students of PHINMA University of Pangasinan. It covers foundational
K–3 FSL content and runs entirely on the device:

- **Practice learning path**: modules (Basic Signs, Filipino Gestures,
  Numbers, Colors, …) laid out as a path of units, each with expert-validated
  sign demonstrations and step-by-step instructions.
- **Camera-guided assessment**: MediaPipe Hand Landmarker grades static
  one-handed signs; MediaPipe Holistic grades dynamic and two-handed signs
  using hand and upper-body pose landmarks.
- **Outcome-based feedback**: instead of raw scores, learners see *Correct*,
  *Needs correction, try again*, or *Couldn't read clearly, recapture*, with
  sign-specific hints on handshape, orientation, position, and movement,
  delivered by a frog coach.
- **Quizzes**: Easy, Hard, and Very Hard quizzes per module with mixed
  question types (multiple choice, yes/no, pick-the-video).
- **Gamification**: XP, levels, badges, daily streaks, and energy.
- **Progress tracking**: profile stats, a learning-ability radar chart, a
  downloadable PDF learner report, and local backup/restore.

## Why it's useful

- **Learn without an instructor in the room.** The camera tells you whether
  your sign is right and what to fix, which a video or picture dictionary
  cannot do.
- **Works offline.** Recognition, lessons, quizzes, and progress all run on
  the phone, so it works in classrooms and homes with unreliable internet.
- **Private by design.** Camera frames are processed on-device; learner data
  stays in a local SQLite database and is never sent to a server.
- **Built on validated content.** Sign labels, descriptions, and
  demonstrations were reviewed by SPED/FSL experts.

## Screenshots

<p align="center"><b>Onboarding</b><br><img src="screenshots/01-onboarding-1.png" width="180" alt="Onboarding 1"> <img src="screenshots/01-onboarding-2.png" width="180" alt="Onboarding 2"> <img src="screenshots/01-onboarding-3.png" width="180" alt="Onboarding 3"></p>
<p align="center"><b>Login and registration</b><br><img src="screenshots/02-login-1.png" width="180" alt="Login and registration 1"> <img src="screenshots/02-login-2.png" width="180" alt="Login and registration 2"> <img src="screenshots/02-login-3.png" width="180" alt="Login and registration 3"></p>
<p align="center"><b>Home dashboard</b><br><img src="screenshots/03-home-1.png" width="180" alt="Home dashboard 1"> <img src="screenshots/03-home-2.png" width="180" alt="Home dashboard 2"> <img src="screenshots/03-home-3.png" width="180" alt="Home dashboard 3"></p>
<p align="center"><b>Practice learning path</b><br><img src="screenshots/04-practice-path-1.png" width="180" alt="Practice learning path 1"> <img src="screenshots/04-practice-path-2.png" width="180" alt="Practice learning path 2"> <img src="screenshots/04-practice-path-3.png" width="180" alt="Practice learning path 3"></p>
<p align="center"><b>Sign demonstration</b><br><img src="screenshots/05-sign-demo-1.png" width="180" alt="Sign demonstration 1"> <img src="screenshots/05-sign-demo-2.png" width="180" alt="Sign demonstration 2"> <img src="screenshots/05-sign-demo-3.png" width="180" alt="Sign demonstration 3"></p>
<p align="center"><b>Camera-guided assessment</b><br><img src="screenshots/06-assessment-1.png" width="180" alt="Camera-guided assessment 1"> <img src="screenshots/06-assessment-2.png" width="180" alt="Camera-guided assessment 2"> <img src="screenshots/06-assessment-3.png" width="180" alt="Camera-guided assessment 3"></p>
<p align="center"><b>Outcome and frog-mascot feedback</b><br><img src="screenshots/07-feedback-1.png" width="180" alt="Outcome and frog-mascot feedback 1"> <img src="screenshots/07-feedback-2.png" width="180" alt="Outcome and frog-mascot feedback 2"> <img src="screenshots/07-feedback-3.png" width="180" alt="Outcome and frog-mascot feedback 3"></p>
<p align="center"><b>Quiz and difficulty selection</b><br><img src="screenshots/08-quiz-select-1.png" width="180" alt="Quiz and difficulty selection 1"> <img src="screenshots/08-quiz-select-2.png" width="180" alt="Quiz and difficulty selection 2"> <img src="screenshots/08-quiz-select-3.png" width="180" alt="Quiz and difficulty selection 3"></p>
<p align="center"><b>Quiz session</b><br><img src="screenshots/09-quiz-session-1.png" width="180" alt="Quiz session 1"> <img src="screenshots/09-quiz-session-2.png" width="180" alt="Quiz session 2"> <img src="screenshots/09-quiz-session-3.png" width="180" alt="Quiz session 3"></p>

<details>
<summary><b>More screens</b>: profile, learning ability, badges, settings, legal</summary>

<p align="center"><b>Profile</b><br><img src="screenshots/10-profile-1.png" width="180" alt="Profile 1"> <img src="screenshots/10-profile-2.png" width="180" alt="Profile 2"> <img src="screenshots/10-profile-3.png" width="180" alt="Profile 3"></p>
<p align="center"><b>Learning ability overview</b><br><img src="screenshots/11-learning-ability-1.png" width="180" alt="Learning ability overview 1"> <img src="screenshots/11-learning-ability-2.png" width="180" alt="Learning ability overview 2"> <img src="screenshots/11-learning-ability-3.png" width="180" alt="Learning ability overview 3"></p>
<p align="center"><b>Badges, energy, and streak calendar</b><br><img src="screenshots/12-badges-energy-streak-1.png" width="180" alt="Badges, energy, and streak calendar 1"> <img src="screenshots/12-badges-energy-streak-2.png" width="180" alt="Badges, energy, and streak calendar 2"> <img src="screenshots/12-badges-energy-streak-3.png" width="180" alt="Badges, energy, and streak calendar 3"></p>
<p align="center"><b>Settings</b><br><img src="screenshots/13-settings-1.png" width="180" alt="Settings 1"> <img src="screenshots/13-settings-2.png" width="180" alt="Settings 2"> <img src="screenshots/13-settings-3.png" width="180" alt="Settings 3"></p>
<p align="center"><b>Privacy, terms, and licenses</b><br><img src="screenshots/14-legal-1.png" width="180" alt="Privacy, terms, and licenses 1"> <img src="screenshots/14-legal-2.png" width="180" alt="Privacy, terms, and licenses 2"> <img src="screenshots/14-legal-3.png" width="180" alt="Privacy, terms, and licenses 3"></p>

</details>

## Architecture

```mermaid
flowchart TD
    A["Flutter / Dart app<br/>presentation + camera layer"] --> B[MediaPipe Tasks Vision]
    B --> C["Hand Landmarker<br/>static one-handed signs"]
    B --> D["Holistic Landmarker<br/>dynamic and two-handed signs"]
    C --> E["On-device recognition engine<br/>TFLite + reference comparison + sign rules"]
    D --> E
    E --> F[Scoring and feedback layer]
    F --> G[(SQLite local data)]
```

## Availability

FSLAMES is a thesis project. **This repository is a public showcase only**:
the source code, recognition models, and FSL dataset are kept private and are
not distributed here.


## Research team

FSLAMES was developed as an undergraduate thesis for the BS Computer Science
program, College of Information Technology Education, PHINMA UPang College
Urdaneta.

| Researchers |
| --- |
| Don Jasper A. Deodora |
| Charm Azeneth T. Estonilo |
| Mikael Vladimir M. Neri |
| Francis Paul A. Palis |
| Kimberly D. Yu |