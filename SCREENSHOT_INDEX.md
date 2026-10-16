# Screenshot Index

Browse these in the [screenshot website](https://fpaulpalis.github.io/fslames-screenshots/) with search, feature filters, and full-size viewing. This file is the detailed reference.

Screenshots come from the FSLAMES Flutter app (source: `lib/` in the app repository). Files are grouped in folders by feature and named `{feature}_{screen}_{section}_{NN}.png`. Rows are in user-journey order. Continuation images (`_02`, `_03`, ...) follow their first image.

## Notes on the columns

- **Route:** the app uses no named routes. Navigation is `MaterialPageRoute`, `showDialog`, or modal presentation, so each row says where the screen is opened from.
- **Source file:** verified by reading the code that builds the screen. Rows marked UNVERIFIED are best guesses; check them before relying on them.
- Tab numbers refer to the bottom navigation in `AppShell` (`lib/features/home/app_shell.dart`): 0 Home, 1 Practice, 2 Quiz, 3 Profile.
- Dark-mode images reuse the same screen files under `AppTheme.dark`; no separate dark widgets exist.

## Screenshots

| Screenshot | Feature | Screen/Tab | Route | Main Component | Source File |
|---|---|---|---|---|---|
| [splash_loading_main_01.png](splash/splash_loading_main_01.png) | splash | Loading screen | Startup (MaterialApp home) | SplashScreen | `lib/features/splash/splash_screen.dart` |
| [onboarding_intro_main_01.png](onboarding/onboarding_intro_main_01.png) | onboarding | Onboarding · Page 1 | Startup (MaterialApp home) | OnboardingScreen | `lib/features/onboarding/onboarding_screen.dart` |
| [onboarding_intro_main_02.png](onboarding/onboarding_intro_main_02.png) | onboarding | Onboarding · Page 2 | Startup (MaterialApp home) | OnboardingScreen | `lib/features/onboarding/onboarding_screen.dart` |
| [onboarding_intro_main_03.png](onboarding/onboarding_intro_main_03.png) | onboarding | Onboarding · Page 3 | Startup (MaterialApp home) | OnboardingScreen | `lib/features/onboarding/onboarding_screen.dart` |
| [home_logged-out_main_01.png](home/home_logged-out_main_01.png) | home | Home (signed out) | Tab 0 when signed out (AppShell) | LoggedOutHomeScreen | `lib/features/home/logged_out_home_screen.dart` |
| [practice_login-gate_main_01.png](practice/practice_login-gate_main_01.png) | practice | Practice (signed out) | Tab 1 when signed out (AppShell) | _LoginGate ('Practice') | `lib/features/home/app_shell.dart` |
| [quiz_login-gate_main_01.png](quiz/quiz_login-gate_main_01.png) | quiz | Quiz (signed out) | Tab 2 when signed out (AppShell) | _LoginGate ('Quiz') | `lib/features/home/app_shell.dart` |
| [profile_login-gate_main_01.png](profile/profile_login-gate_main_01.png) | profile | Profile (signed out) | Tab 3 when signed out (AppShell) | _LoginGate ('Profile') | `lib/features/home/app_shell.dart` |
| [auth_register_main_01.png](auth/auth_register_main_01.png) | auth | Register | Modal from AppShell or logged-out home | RegisterScreen | `lib/features/auth/register_screen.dart` |
| [auth_register_terms_01.png](auth/auth_register_terms_01.png) | auth | Register · Terms | Dialog from RegisterScreen | PolicyDialog | `lib/widgets/policy_dialog.dart` |
| [auth_register_privacy_01.png](auth/auth_register_privacy_01.png) | auth | Register · Privacy | Dialog from RegisterScreen | PolicyDialog | `lib/widgets/policy_dialog.dart` |
| [auth_login_main_01.png](auth/auth_login_main_01.png) | auth | Login | Modal from AppShell or logged-out home | LoginScreen | `lib/features/auth/login_screen.dart` |
| [auth_forgot-password_main_01.png](auth/auth_forgot-password_main_01.png) | auth | Forgot password | Pushed from LoginScreen | ForgotPasswordScreen | `lib/features/auth/forgot_password_screen.dart` |
| [auth_forgot-password_security-check_01.png](auth/auth_forgot-password_security-check_01.png) | auth | Forgot password · Security check | Pushed from ForgotPasswordScreen | LocalSecurityResetScreen | `lib/features/auth/local_security_reset_screen.dart` |
| [home_shell_reminder-prompt_01.png](home/home_shell_reminder-prompt_01.png) | home | Streak reminder prompt | Dialog over AppShell | ReminderPrompt / _ReminderDialog | `lib/widgets/reminder_prompt.dart` |
| [home_dashboard_empty_01.png](home/home_dashboard_empty_01.png) | home | Dashboard · No data yet | Tab 0 (AppShell) | DashboardScreen | `lib/features/home/dashboard_screen.dart` — UNVERIFIED: no 'No data yet' text in code; likely the empty-activity branch |
| [home_dashboard_main_01.png](home/home_dashboard_main_01.png) | home | Dashboard · Page 1 | Tab 0 (AppShell) | DashboardScreen | `lib/features/home/dashboard_screen.dart` |
| [home_dashboard_main_02.png](home/home_dashboard_main_02.png) | home | Dashboard · Page 2 | Tab 0 (AppShell) | DashboardScreen | `lib/features/home/dashboard_screen.dart` |
| [home_dashboard_main_03.png](home/home_dashboard_main_03.png) | home | Dashboard · Page 3 | Tab 0 (AppShell) | DashboardScreen | `lib/features/home/dashboard_screen.dart` |
| [badges_achievement-badge_main_01.png](badges/badges_achievement-badge_main_01.png) | badges | Achievement badge | Pushed from Dashboard, Profile, or Achievements | BadgeDetailScreen | `lib/features/badges/badge_detail_screen.dart` — UNVERIFIED: 'Achievement badge' title not in code; _CelebrationDialog in lib/features/badges/badge_celebration.dart is the alternative |
| [progress_learning-ability_main_01.png](progress/progress_learning-ability_main_01.png) | progress | Learning ability overview · Page 1 | Pushed from Dashboard or Profile | XpDetailsScreen | `lib/features/progress/xp_details_screen.dart` |
| [progress_learning-ability_main_02.png](progress/progress_learning-ability_main_02.png) | progress | Learning ability overview · Page 2 | Pushed from Dashboard or Profile | XpDetailsScreen | `lib/features/progress/xp_details_screen.dart` |
| [progress_learning-ability_main_03.png](progress/progress_learning-ability_main_03.png) | progress | Learning ability overview · Page 3 | Pushed from Dashboard or Profile | XpDetailsScreen | `lib/features/progress/xp_details_screen.dart` |
| [progress_learning-ability_main_04.png](progress/progress_learning-ability_main_04.png) | progress | Learning ability overview · Page 4 | Pushed from Dashboard or Profile | XpDetailsScreen | `lib/features/progress/xp_details_screen.dart` |
| [progress_streak_main_01.png](progress/progress_streak_main_01.png) | progress | Streak | Pushed from Dashboard or Profile | StreakScreen | `lib/features/progress/streak_screen.dart` |
| [practice_modules_main_01.png](practice/practice_modules_main_01.png) | practice | Practice · Page 1 | Tab 1 (AppShell) | PracticeScreen | `lib/features/practice/practice_screen.dart` |
| [practice_modules_main_02.png](practice/practice_modules_main_02.png) | practice | Practice · Page 2 | Tab 1 (AppShell) | PracticeScreen | `lib/features/practice/practice_screen.dart` |
| [practice_modules_main_03.png](practice/practice_modules_main_03.png) | practice | Practice · Page 3 | Tab 1 (AppShell) | PracticeScreen | `lib/features/practice/practice_screen.dart` |
| [practice_modules_main_04.png](practice/practice_modules_main_04.png) | practice | Practice · Page 4 | Tab 1 (AppShell) | PracticeScreen | `lib/features/practice/practice_screen.dart` |
| [practice_modules-list_main_01.png](practice/practice_modules-list_main_01.png) | practice | Module list | Tab 1 (AppShell) | PracticeScreen | `lib/features/practice/practice_screen.dart` — UNVERIFIED: no 'Module list' heading in code; ModulePicker in lib/widgets/module_picker.dart is the alternative |
| [learn_sign-detail_main_01.png](learn/learn_sign-detail_main_01.png) | learn | Sign detail | Pushed from ModuleDetailScreen | SignDetailScreen | `lib/features/learn/sign_detail_screen.dart` |
| [learn_sign-detail_how-to-practice_01.png](learn/learn_sign-detail_how-to-practice_01.png) | learn | Sign detail · How to practice | Pushed from ModuleDetailScreen | SignDetailScreen ('How to practice' card) | `lib/features/learn/sign_detail_screen.dart` |
| [learn_reference-frames_main_01.png](learn/learn_reference-frames_main_01.png) | learn | Reference frames | Pushed from SignDetailScreen (debug builds only) | ReferenceFramesScreen | `lib/features/learn/reference_frames_screen.dart` |
| [practice_gesture-drill_camera-permission_01.png](practice/practice_gesture-drill_camera-permission_01.png) | practice | Gesture drill · Camera permission | Sheet from GestureDrillScreen | CameraConsentSheet | `lib/widgets/camera_consent.dart` |
| [practice_gesture-drill_camera-preview_01.png](practice/practice_gesture-drill_camera-preview_01.png) | practice | Gesture drill · Camera preview | Presented from SignDetailScreen | AssessmentViewfinder (hosted by GestureDrillScreen) | `lib/features/practice/sign_assessment.dart` |
| [practice_gesture-drill_clip-review_01.png](practice/practice_gesture-drill_clip-review_01.png) | practice | Gesture drill · Clip review | Dialog from GestureDrillScreen | ClipReviewDialog | `lib/features/practice/sign_assessment.dart` |
| [practice_attempt-result_main_01.png](practice/practice_attempt-result_main_01.png) | practice | Attempt result | Pushed from GestureDrillScreen | AttemptResultScreen | `lib/features/practice/attempt_result_screen.dart` |
| [quiz_modules_main_01.png](quiz/quiz_modules_main_01.png) | quiz | Quiz · Page 1 | Tab 2 (AppShell) | QuizScreen | `lib/features/quiz/quiz_screen.dart` |
| [quiz_modules_main_02.png](quiz/quiz_modules_main_02.png) | quiz | Quiz · Page 2 | Tab 2 (AppShell) | QuizScreen | `lib/features/quiz/quiz_screen.dart` |
| [quiz_tier_main_01.png](quiz/quiz_tier_main_01.png) | quiz | Quiz tiers · Page 1 | Pushed from QuizScreen | QuizTierScreen | `lib/features/quiz/quiz_tier_screen.dart` |
| [quiz_tier_main_02.png](quiz/quiz_tier_main_02.png) | quiz | Quiz tiers · Page 2 | Pushed from QuizScreen | QuizTierScreen | `lib/features/quiz/quiz_tier_screen.dart` |
| [quiz_session_true-or-false_01.png](quiz/quiz_session_true-or-false_01.png) | quiz | Quiz session · True or false | Pushed from QuizTierScreen | QuizSessionScreen | `lib/features/quiz/quiz_session_screen.dart` |
| [quiz_history_main_01.png](quiz/quiz_history_main_01.png) | quiz | Quiz history | Pushed from QuizScreen | QuizHistoryScreen | `lib/features/quiz/quiz_history_screen.dart` |
| [quiz_result_main_01.png](quiz/quiz_result_main_01.png) | quiz | Quiz result | Pushed from QuizSessionScreen | QuizResultScreen | `lib/features/quiz/quiz_result_screen.dart` |
| [profile_overview_main_01.png](profile/profile_overview_main_01.png) | profile | Profile · Page 1 | Tab 3 (AppShell) | ProfileScreen | `lib/features/profile/profile_screen.dart` |
| [profile_overview_main_02.png](profile/profile_overview_main_02.png) | profile | Profile · Page 2 | Tab 3 (AppShell) | ProfileScreen | `lib/features/profile/profile_screen.dart` |
| [profile_detailed-report_main_01.png](profile/profile_detailed-report_main_01.png) | profile | Detailed progress report | Inline section of ProfileScreen | ProgressReportSection | `lib/features/profile/progress_report_section.dart` |
| [progress_breakdown_main_01.png](progress/progress_breakdown_main_01.png) | progress | Progress | Pushed from Dashboard or Profile | ProgressBreakdownScreen | `lib/features/progress/progress_breakdown_screen.dart` |
| [badges_achievements_main_01.png](badges/badges_achievements_main_01.png) | badges | Badges · Page 1 | Pushed from Dashboard or Profile | AchievementsScreen | `lib/features/badges/achievements_screen.dart` |
| [badges_achievements_main_02.png](badges/badges_achievements_main_02.png) | badges | Badges · Page 2 | Pushed from Dashboard or Profile | AchievementsScreen | `lib/features/badges/achievements_screen.dart` |
| [energy_detail_main_01.png](energy/energy_detail_main_01.png) | energy | Energy | Pushed from the energy chip | EnergyScreen | `lib/widgets/energy_chip.dart` |
| [settings_overview_main_01.png](settings/settings_overview_main_01.png) | settings | Settings · Page 1 | Pushed from TabPageHeader | SettingsScreen | `lib/features/settings/settings_screen.dart` |
| [settings_overview_main_02.png](settings/settings_overview_main_02.png) | settings | Settings · Page 2 | Pushed from TabPageHeader | SettingsScreen | `lib/features/settings/settings_screen.dart` |
| [settings_overview_main_03.png](settings/settings_overview_main_03.png) | settings | Settings · Page 3 | Pushed from TabPageHeader | SettingsScreen | `lib/features/settings/settings_screen.dart` |
| [settings_about_main_01.png](settings/settings_about_main_01.png) | settings | About | Pushed from SettingsScreen | AboutScreen | `lib/features/settings/about_screen.dart` |
| [settings_about_privacy_01.png](settings/settings_about_privacy_01.png) | settings | About · Privacy policy | Pushed from AboutScreen | _PolicyScreen ('Privacy policy') | `lib/features/settings/about_screen.dart` |
| [settings_about_terms_01.png](settings/settings_about_terms_01.png) | settings | About · Terms | Pushed from AboutScreen | _PolicyScreen ('Terms of Service') | `lib/features/settings/about_screen.dart` |
| [settings_about_licenses_01.png](settings/settings_about_licenses_01.png) | settings | About · Licenses | Pushed from AboutScreen | Flutter LicensePage (showLicensePage) | `lib/features/settings/about_screen.dart` |
| [home_dashboard_dark_01.png](home/home_dashboard_dark_01.png) | home | Home (dark) | Tab 0 (AppShell), dark theme | DashboardScreen | `lib/features/home/dashboard_screen.dart` |
| [practice_modules_dark_01.png](practice/practice_modules_dark_01.png) | practice | Practice (dark) | Tab 1 (AppShell), dark theme | PracticeScreen | `lib/features/practice/practice_screen.dart` |
| [quiz_modules_dark_01.png](quiz/quiz_modules_dark_01.png) | quiz | Quiz (dark) | Tab 2 (AppShell), dark theme | QuizScreen | `lib/features/quiz/quiz_screen.dart` |
| [profile_overview_dark_01.png](profile/profile_overview_dark_01.png) | profile | Profile (dark) | Tab 3 (AppShell), dark theme | ProfileScreen | `lib/features/profile/profile_screen.dart` |
| [settings_overview_dark_01.png](settings/settings_overview_dark_01.png) | settings | Settings (dark) | Pushed from TabPageHeader, dark theme | SettingsScreen | `lib/features/settings/settings_screen.dart` |
