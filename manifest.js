// Screenshot manifest: one entry per PNG in this folder, in display order.
// Add a new screenshot here (and in SCREENSHOT_INDEX.md) when you capture it.
// Fields: file (relative to this folder), feature (folder name), title (screen or tab),
// section (optional), desc (one short sentence shown under the card).
window.SCREENSHOT_GROUPS = [
  {
    title: "Launch and onboarding",
    items: [
      { file: "splash/splash_loading_main_01.png", feature: "splash", title: "Loading screen", desc: "Shown while the app restores your session on launch." },
      { file: "onboarding/onboarding_intro_main_01.png", feature: "onboarding", title: "Onboarding", section: "Page 1", desc: "First-run introduction, page 1 of 3." },
      { file: "onboarding/onboarding_intro_main_02.png", feature: "onboarding", title: "Onboarding", section: "Page 2", desc: "First-run introduction, page 2 of 3." },
      { file: "onboarding/onboarding_intro_main_03.png", feature: "onboarding", title: "Onboarding", section: "Page 3", desc: "First-run introduction, page 3 of 3." },
    ],
  },
  {
    title: "Signed-out home and login gates",
    items: [
      { file: "home/home_logged-out_main_01.png", feature: "home", title: "Home (signed out)", desc: "Home tab for visitors, with links to sign in or create an account." },
      { file: "practice/practice_login-gate_main_01.png", feature: "practice", title: "Practice (signed out)", desc: "Practice tab before sign-in, asking the visitor to sign in first." },
      { file: "quiz/quiz_login-gate_main_01.png", feature: "quiz", title: "Quiz (signed out)", desc: "Quiz tab before sign-in, asking the visitor to sign in first." },
      { file: "profile/profile_login-gate_main_01.png", feature: "profile", title: "Profile (signed out)", desc: "Profile tab before sign-in, asking the visitor to sign in first." },
    ],
  },
  {
    title: "Account",
    items: [
      { file: "auth/auth_register_main_01.png", feature: "auth", title: "Register", desc: "Form to create a new learner account." },
      { file: "auth/auth_register_terms_01.png", feature: "auth", title: "Register", section: "Terms", desc: "Terms of use shown during registration." },
      { file: "auth/auth_register_privacy_01.png", feature: "auth", title: "Register", section: "Privacy", desc: "Privacy notice shown during registration." },
      { file: "auth/auth_login_main_01.png", feature: "auth", title: "Login", desc: "Sign-in form for an existing account." },
      { file: "auth/auth_forgot-password_main_01.png", feature: "auth", title: "Forgot password", desc: "Starts account recovery using your email or username." },
      { file: "auth/auth_forgot-password_security-check_01.png", feature: "auth", title: "Forgot password", section: "Security check", desc: "Security-question step of account recovery." },
    ],
  },
  {
    title: "Home and progress",
    items: [
      { file: "home/home_shell_reminder-prompt_01.png", feature: "home", title: "Streak reminder prompt", desc: "One-time prompt to turn on the daily streak reminder." },
      { file: "home/home_dashboard_empty_01.png", feature: "home", title: "Dashboard", section: "No data yet", desc: "Home dashboard before any progress has been recorded." },
      { file: "home/home_dashboard_main_01.png", feature: "home", title: "Dashboard", section: "Page 1", desc: "Home dashboard with your daily goal and progress." },
      { file: "home/home_dashboard_main_02.png", feature: "home", title: "Dashboard", section: "Page 2", desc: "Home dashboard, continued." },
      { file: "home/home_dashboard_main_03.png", feature: "home", title: "Dashboard", section: "Page 3", desc: "Home dashboard, continued (lower part of the page)." },
      { file: "badges/badges_achievement-badge_main_01.png", feature: "badges", title: "Achievement badge", desc: "A badge shown as an achievement." },
      { file: "progress/progress_learning-ability_main_01.png", feature: "progress", title: "Learning ability overview", section: "Page 1", desc: "Your XP, level, and signing-skill chart." },
      { file: "progress/progress_learning-ability_main_02.png", feature: "progress", title: "Learning ability overview", section: "Page 2", desc: "Skill breakdown, continued." },
      { file: "progress/progress_learning-ability_main_03.png", feature: "progress", title: "Learning ability overview", section: "Page 3", desc: "Skill breakdown, continued." },
      { file: "progress/progress_learning-ability_main_04.png", feature: "progress", title: "Learning ability overview", section: "Page 4", desc: "Skill breakdown, continued." },
      { file: "progress/progress_streak_main_01.png", feature: "progress", title: "Streak", desc: "Current and longest streak, with a calendar of active days." },
    ],
  },
  {
    title: "Practice",
    items: [
      { file: "practice/practice_modules_main_01.png", feature: "practice", title: "Practice", section: "Page 1", desc: "Practice tab listing the modules and your progress in each." },
      { file: "practice/practice_modules_main_02.png", feature: "practice", title: "Practice", section: "Page 2", desc: "Practice tab, continued." },
      { file: "practice/practice_modules_main_03.png", feature: "practice", title: "Practice", section: "Page 3", desc: "Practice tab, continued." },
      { file: "practice/practice_modules_main_04.png", feature: "practice", title: "Practice", section: "Page 4", desc: "Practice tab, continued." },
      { file: "practice/practice_modules-list_main_01.png", feature: "practice", title: "Module list", desc: "Practice modules and their status." },
      { file: "learn/learn_sign-detail_main_01.png", feature: "learn", title: "Sign detail", desc: "Details for one sign, with a way to practice it." },
      { file: "learn/learn_sign-detail_how-to-practice_01.png", feature: "learn", title: "Sign detail", section: "How to practice", desc: "Steps for practicing this sign." },
      { file: "learn/learn_reference-frames_main_01.png", feature: "learn", title: "Reference frames", desc: "The reference frames for a sign, to compare your own signing against." },
      { file: "practice/practice_gesture-drill_camera-permission_01.png", feature: "practice", title: "Gesture drill", section: "Camera permission", desc: "Asks for camera access before a practice attempt." },
      { file: "practice/practice_gesture-drill_camera-preview_01.png", feature: "practice", title: "Gesture drill", section: "Camera preview", desc: "Live camera preview while you sign." },
      { file: "practice/practice_gesture-drill_clip-review_01.png", feature: "practice", title: "Gesture drill", section: "Clip review", desc: "Review of your recorded attempt before it is scored." },
      { file: "practice/practice_attempt-result_main_01.png", feature: "practice", title: "Attempt result", desc: "Result and feedback for one practice attempt." },
    ],
  },
  {
    title: "Quiz",
    items: [
      { file: "quiz/quiz_modules_main_01.png", feature: "quiz", title: "Quiz", section: "Page 1", desc: "Quiz tab listing the modules you can take as quizzes." },
      { file: "quiz/quiz_modules_main_02.png", feature: "quiz", title: "Quiz", section: "Page 2", desc: "Quiz tab, continued." },
      { file: "quiz/quiz_tier_main_01.png", feature: "quiz", title: "Quiz tiers", section: "Page 1", desc: "Difficulty choices for a quiz module." },
      { file: "quiz/quiz_tier_main_02.png", feature: "quiz", title: "Quiz tiers", section: "Page 2", desc: "Difficulty choices, continued." },
      { file: "quiz/quiz_session_true-or-false_01.png", feature: "quiz", title: "Quiz session", section: "True or false", desc: "A true-or-false question during a quiz." },
      { file: "quiz/quiz_history_main_01.png", feature: "quiz", title: "Quiz history", desc: "Your past quiz attempts and scores." },
      { file: "quiz/quiz_result_main_01.png", feature: "quiz", title: "Quiz result", desc: "Score and summary when a quiz is finished." },
    ],
  },
  {
    title: "Profile",
    items: [
      { file: "profile/profile_overview_main_01.png", feature: "profile", title: "Profile", section: "Page 1", desc: "Your streak, learning progress, and achievements." },
      { file: "profile/profile_overview_main_02.png", feature: "profile", title: "Profile", section: "Page 2", desc: "Achievements and streak, continued." },
      { file: "profile/profile_detailed-report_main_01.png", feature: "profile", title: "Detailed progress report", desc: "A detailed report of your learning progress." },
    ],
  },
  {
    title: "Progress and badges",
    items: [
      { file: "progress/progress_breakdown_main_01.png", feature: "progress", title: "Progress", desc: "Overall progress, with the modules listed in learning order." },
      { file: "badges/badges_achievements_main_01.png", feature: "badges", title: "Badges", section: "Page 1", desc: "All achievements and badges, unlocked and locked." },
      { file: "badges/badges_achievements_main_02.png", feature: "badges", title: "Badges", section: "Page 2", desc: "Achievements and badges, continued." },
      { file: "energy/energy_detail_main_01.png", feature: "energy", title: "Energy", desc: "Your energy balance and how it recharges." },
    ],
  },
  {
    title: "Settings and About",
    items: [
      { file: "settings/settings_overview_main_01.png", feature: "settings", title: "Settings", section: "Page 1", desc: "Account and learning options." },
      { file: "settings/settings_overview_main_02.png", feature: "settings", title: "Settings", section: "Page 2", desc: "Preference options, continued." },
      { file: "settings/settings_overview_main_03.png", feature: "settings", title: "Settings", section: "Page 3", desc: "Remaining options, including log out." },
      { file: "settings/settings_about_main_01.png", feature: "settings", title: "About", desc: "App version, with links to privacy, terms, and licenses." },
      { file: "settings/settings_about_privacy_01.png", feature: "settings", title: "About", section: "Privacy policy", desc: "The app's privacy policy." },
      { file: "settings/settings_about_terms_01.png", feature: "settings", title: "About", section: "Terms", desc: "The app's terms of use." },
      { file: "settings/settings_about_licenses_01.png", feature: "settings", title: "About", section: "Licenses", desc: "Open-source licenses used by the app." },
    ],
  },
  {
    title: "Dark mode",
    items: [
      { file: "home/home_dashboard_dark_01.png", feature: "home", title: "Home (dark)", desc: "Home dashboard in dark mode." },
      { file: "practice/practice_modules_dark_01.png", feature: "practice", title: "Practice (dark)", desc: "Practice tab in dark mode." },
      { file: "quiz/quiz_modules_dark_01.png", feature: "quiz", title: "Quiz (dark)", desc: "Quiz tab in dark mode." },
      { file: "profile/profile_overview_dark_01.png", feature: "profile", title: "Profile (dark)", desc: "Profile in dark mode." },
      { file: "settings/settings_overview_dark_01.png", feature: "settings", title: "Settings (dark)", desc: "Settings in dark mode." },
    ],
  },
];
