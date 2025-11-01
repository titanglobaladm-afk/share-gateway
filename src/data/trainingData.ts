export const trainingData = {
  meta: { bundle: "GATEWAY_LMS_BILINGUAL_FULL_SEED", version: "1.0", languages: ["en", "fr"] },
  i18n: {
    en: {
      "app.title": "Gateway — Onboarding & Training",
      "nav.dashboard": "Dashboard",
      "nav.courses": "Courses",
      "nav.my_courses": "My Courses",
      "nav.onboarding": "Onboarding",
      "nav.documents": "Documents",
      "nav.agreements": "Agreements",
      "nav.admin": "Admin",
      "auth.sign_in": "Sign in",
      "auth.sign_out": "Sign out",
      "auth.sign_up": "Create account",
      "auth.continue": "Continue",
      "auth.verify_code": "Enter verification code",
      "auth.sent": "We sent a sign-in link or code to your email.",
      "onb.title": "Welcome — Choose your role",
      "onb.sub": "This sets up your dashboard and training plan.",
      "onb.select_role": "Select your role",
      "onb.roles.investor": "Investor",
      "onb.roles.doctor": "Doctor (MD)",
      "onb.roles.nurse": "Nurse / CHW",
      "onb.roles.driver": "Driver",
      "onb.roles.manager": "Manager",
      "onb.roles.security": "Security",
      "onb.profile.title": "Basic profile",
      "onb.submit": "Finish setup",
      "onb.done": "All set! We've assigned your courses.",
      "lang.toggle": "Français",
      "quiz.start": "Start quiz",
      "quiz.submit": "Submit",
      "quiz.passed": "Passed",
      "quiz.failed": "Failed",
      "evaluation.final": "Final Evaluation",
      "certificate.download": "Download Certificate",
      "notice.fr_fallback": "Content currently available in English.",
      "dashboard.subtitle": "Track your learning progress and continue your training",
      "dashboard.active_courses": "Active Courses",
      "dashboard.in_progress": "In progress",
      "dashboard.completed": "Completed",
      "dashboard.courses_finished": "Courses finished",
      "dashboard.study_time": "Study Time",
      "dashboard.this_week": "This week",
      "dashboard.continue_learning": "Continue Learning",
      "dashboard.continue": "Continue",
      "dashboard.take_test": "Take Aptitude Test",
      "dashboard.unlock_title": "Unlock Your Full Training",
      "dashboard.unlock_msg": "Complete your role aptitude test to unlock all course materials.",

      // Landing page
      "landing.welcome": "Welcome to SHARE Gateway",
      "landing.tagline": "Empowering Healthcare Excellence in Haiti",
      "landing.mission": "Professional training and onboarding for SHARE mobile clinic staff, investors, and partners.",
      "landing.explore_roles": "Explore Your Role",
      "landing.cta": "Ready to get started?",
      "landing.sign_up": "Sign Up",
      "landing.sign_in": "Already have an account? Sign In",

      // Role descriptions
      "role.investor.desc": "Fund and oversee SHARE's mission",
      "role.doctor.desc": "Provide primary care in mobile clinics",
      "role.nurse.desc": "Deliver community health services",
      "role.driver.desc": "Operate vehicles and manage logistics",
      "role.manager.desc": "Oversee teams and compliance",
      "role.security.desc": "Protect staff and maintain order",

      // Role explorer
      "role_explorer.title": "Explore Your Role",
      "role_explorer.subtitle": "Learn what each role involves before choosing",
      "role_explorer.description": "Description",
      "role_explorer.training": "Training Courses",
      "role_explorer.test_preview": "Sample Test Questions",
      "role_explorer.select": "Select This Role",
      "role_explorer.no_test": "No aptitude test required",

      // Journey progress
      "journey.title": "Your Journey",
      "journey.step1": "Profile Complete",
      "journey.step2": "Role Selected",
      "journey.step3": "Aptitude Test",
      "journey.step3_kyc": "KYC Verification",
      "journey.step4": "Training Courses",
      "journey.step5": "Legal Documents",
      "journey.step6": "Onboarding Complete",
      "journey.current": "You are here",
      "journey.locked": "Locked",

      // Next actions
      "next_action.test": "Take Your Aptitude Test",
      "next_action.test_desc": "Complete the role assessment to unlock your training courses.",
      "next_action.kyc": "Complete KYC Verification",
      "next_action.kyc_desc": "Identity and accreditation verification required before accessing investor materials.",
      "next_action.training": "Continue Your Training",
      "next_action.training_desc": "Complete your assigned courses to progress.",
      "next_action.documents": "Review Legal Documents",
      "next_action.documents_desc": "Sign all required documents to complete onboarding.",
      "next_action.complete": "Congratulations!",
      "next_action.complete_desc": "All onboarding steps complete. Browse additional courses or access your documents.",

      // Documents
      "documents.title": "Legal Documents",
      "documents.subtitle": "Review and sign all required documents",
      "documents.signed": "Signed",
      "documents.pending": "Pending Review",
      "documents.view_sign": "View & Sign",
      "documents.view": "View Document",
      "documents.agree": "I have read and agree to the terms",
      "documents.signature": "Full Name (electronic signature)",
      "documents.signature_placeholder": "Enter your full name",
      "documents.sign_button": "Sign Document",
      "documents.all_signed": "All documents signed",
      "documents.signed_at": "Signed on",
      "documents.signed_success": "Document signed successfully",
      "documents.signed_success_desc": "Your signature has been recorded",
      "documents.error": "Failed to sign document",
      "documents.error_desc": "Please try again or contact support",
      "documents.cancel": "Cancel",
      "documents.close": "Close",
      "documents.signing": "Signing...",
      "documents.already_signed": "Document already signed",

      // KYC
      "kyc.title": "KYC / AML Verification",
      "kyc.subtitle": "Complete identity and accreditation checks before accessing investor materials",
      "kyc.full_name": "Full Name",
      "kyc.dob": "Date of Birth",
      "kyc.country": "Country",
      "kyc.accredited": "Accredited Investor",
      "kyc.pep": "Politically Exposed Person (PEP)",
      "kyc.id_upload": "Government ID Upload",
      "kyc.select": "Select...",
      "kyc.yes": "Yes",
      "kyc.no": "No",
      "kyc.agree": "I certify that all information provided is accurate",
      "kyc.submit": "Submit Verification",
      "kyc.submitting": "Submitting...",
      "kyc.success": "KYC verification complete",
      "kyc.success_desc": "You can now access investor materials",
      "kyc.error": "Verification failed",
      "kyc.error_desc": "Please check your information and try again",

      // Test results
      "test.your_score": "Your Score",
      "test.passed": "Passed",
      "test.failed": "Failed",
      "test.passed_message": "Congratulations! You've demonstrated the skills needed for this role.",
      "test.failed_message": "Keep learning! Review the material and try again. Passing score: 60%",
      "test.start_training": "Start Training",
      "test.try_again": "Try Again",

      // Navigation updates
      "nav.my_training": "My Training",

      // Onboarding updates
      "onb.back": "Back",
      "onb.confirm_role": "Confirm Your Role",
      "onb.submitting": "Submitting...",
      "onb.start": "Start Training",

      // Errors
      "error.unauthorized": "Unauthorized",
      "error.reset_admin_only": "Reset is restricted to admins",

      "courses.subtitle": "Browse and enroll in training courses",
      "courses.view_course": "View Course",
      "courses.lesson": "lesson",
      "courses.lessons": "lessons",
      "courses.quiz": "quiz",
      "courses.quizzes": "quizzes",
      "courses.no_courses": "No courses assigned yet.",
      "course.not_found": "Course not found",
      "course.back": "Back to Courses",
      "course.subtitle": "Complete all lessons and pass the quiz to finish this course",
      "course.lessons": "Lessons",
      "course.assessments": "Assessments",
      "course.questions": "questions",
      "course.min": "min",
      "course.pass": "Pass",
      "quiz.not_found": "Quiz not found",
      "quiz.question": "Question",
      "quiz.of": "of",
      "quiz.previous": "Previous",
      "quiz.next": "Next",
      "quiz.true": "True",
      "quiz.false": "False",
      "quiz.correct": "correct",
      "quiz.short_answer": "Your answer:",
      "quiz.type_answer": "Type your answer here...",
      "quiz.essay_answer": "Your essay:",
      "quiz.type_essay": "Write your essay here (500-700 words recommended)...",
      "my_courses.subtitle": "Track your enrolled courses and progress",
      "my_courses.role": "Role",
      "my_courses.version": "Version",
      "my_courses.progress": "Progress",
      "my_courses.no_courses": "No courses assigned yet.",
      "rubric.cognitive": "Cognitive Abilities",
      "rubric.critical": "Critical Thinking",
      "rubric.technical": "Technical Skills",
      "rubric.communication": "Communication/Professionalism",
      "rubric.situational": "Situational Judgment",
      "rubric.scale.1": "1",
      "rubric.scale.3": "3",
      "rubric.scale.5": "5",
      "rubric.recommendation": "Recommendation",
      "rubric.not_recommended": "Not Recommended",
      "rubric.recommended": "Recommended",
      "rubric.highly_recommended": "Highly Recommended",
      "eval.aptitude": "Aptitude Test Results",
      "eval.interview": "Interview Performance",
      "eval.overall": "Overall Evaluation",
      "eval.comments": "Final Comments",
      "eval.view_full": "View Full Results",
      "lesson.notice.empty": "This lesson has no content. Please contact your admin.",
      "lesson.notice.draft": "Draft — content under review",
      "aptitude.title": "Aptitude Test",
      "aptitude.subtitle": "Complete this assessment to demonstrate your skills and abilities",
      "aptitude.instructions": "You have 60 minutes to complete 32 questions covering cognitive abilities, critical thinking, technical skills, communication, and situational judgment.",
      "aptitude.begin": "Begin Assessment",
      "aptitude.time_remaining": "Time Remaining",
      "aptitude.evaluating": "Evaluating your responses...",
      "aptitude.results": "Your Results",
      "aptitude.score": "Overall Score",
      "aptitude.recommendation": "Recommendation",
      "role_test.title": "Complete Your {role} Aptitude Test",
      "role_test.subtitle": "Pass this role-specific assessment to unlock your {role} training courses",
      "role_test.alert_message": "You have courses waiting to be unlocked. Pass the {role} aptitude test to begin your training.",
      "role_test.locked": "This course requires passing the {role} aptitude test",
      "role_test.take_test": "Take {role} Test",
      "role_test.passed": "Test Passed - Course Unlocked",
      "role_test.failed": "Test Failed - Retake Available",
      "role_test.complete_message": "Congratulations! You can now access your {role} courses.",
      "role_test.locked_courses": "Locked Courses (Test Required)",
      "role_test.available_courses": "Available Courses",
      "role_test.unlock": "Unlock Course"
    },
    fr: {
      "app.title": "Gateway — Intégration & Formation",
      "nav.dashboard": "Tableau de bord",
      "nav.courses": "Cours",
      "nav.my_courses": "Mes cours",
      "nav.onboarding": "Parcours d'intégration",
      "nav.documents": "Documents",
      "nav.agreements": "Accords",
      "nav.admin": "Administration",
      "auth.sign_in": "Se connecter",
      "auth.sign_out": "Se déconnecter",
      "auth.sign_up": "Créer un compte",
      "auth.continue": "Continuer",
      "auth.verify_code": "Saisir le code",
      "auth.sent": "Nous avons envoyé un lien ou code à votre e-mail.",
      "onb.title": "Bienvenue — Choisissez votre rôle",
      "onb.sub": "Cela configure votre tableau de bord et votre plan de formation.",
      "onb.select_role": "Sélectionnez votre rôle",
      "onb.roles.investor": "Investisseur",
      "onb.roles.doctor": "Médecin",
      "onb.roles.nurse": "Infirmier/ère / ASC",
      "onb.roles.driver": "Chauffeur",
      "onb.roles.manager": "Manager",
      "onb.roles.security": "Sécurité",
      "onb.profile.title": "Profil de base",
      "onb.submit": "Terminer",
      "onb.done": "C'est prêt ! Vos cours ont été attribués.",
      "lang.toggle": "English",
      "quiz.start": "Commencer le quiz",
      "quiz.submit": "Soumettre",
      "quiz.passed": "Réussi",
      "quiz.failed": "Échoué",
      "evaluation.final": "Évaluation finale",
      "certificate.download": "Télécharger le certificat",
      "notice.fr_fallback": "Contenu disponible actuellement en anglais.",
      "dashboard.subtitle": "Suivez votre progression et continuez votre formation",
      "dashboard.active_courses": "Cours actifs",
      "dashboard.in_progress": "En cours",
      "dashboard.completed": "Terminés",
      "dashboard.courses_finished": "Cours terminés",
      "dashboard.study_time": "Temps d'étude",
      "dashboard.this_week": "Cette semaine",
      "dashboard.continue_learning": "Continuer l'apprentissage",
      "dashboard.continue": "Continuer",
      "dashboard.take_test": "Passer le test d'aptitude",
      "dashboard.unlock_title": "Débloquez votre formation complète",
      "dashboard.unlock_msg": "Complétez votre test d'aptitude pour débloquer tous les supports de formation.",

      // Landing page
      "landing.welcome": "Bienvenue sur SHARE Gateway",
      "landing.tagline": "Excellence en santé en Haïti",
      "landing.mission": "Formation professionnelle et intégration pour le personnel des cliniques mobiles SHARE, les investisseurs et les partenaires.",
      "landing.explore_roles": "Explorez votre rôle",
      "landing.cta": "Prêt à commencer ?",
      "landing.sign_up": "S'inscrire",
      "landing.sign_in": "Vous avez déjà un compte ? Connexion",

      "role.investor.desc": "Financer et superviser la mission de SHARE",
      "role.doctor.desc": "Fournir des soins primaires",
      "role.nurse.desc": "Offrir des services de santé communautaires",
      "role.driver.desc": "Gérer la logistique",
      "role.manager.desc": "Superviser les équipes",
      "role.security.desc": "Protéger le personnel",

      "role_explorer.title": "Explorez votre rôle",
      "role_explorer.subtitle": "Découvrez ce que chaque rôle implique",
      "role_explorer.description": "Description",
      "role_explorer.training": "Cours de formation",
      "role_explorer.test_preview": "Questions d'exemple",
      "role_explorer.select": "Sélectionner ce rôle",
      "role_explorer.no_test": "Aucun test requis",

      "journey.title": "Votre parcours",
      "journey.step1": "Profil complété",
      "journey.step2": "Rôle sélectionné",
      "journey.step3": "Test d'aptitude",
      "journey.step3_kyc": "Vérification KYC",
      "journey.step4": "Cours de formation",
      "journey.step5": "Documents légaux",
      "journey.step6": "Intégration terminée",
      "journey.current": "Vous êtes ici",
      "journey.locked": "Verrouillé",

      "next_action.test": "Passez votre test d'aptitude",
      "next_action.test_desc": "Complétez l'évaluation du rôle pour débloquer vos cours de formation.",
      "next_action.kyc": "Complétez la vérification KYC",
      "next_action.kyc_desc": "Vérification d'identité et d'accréditation requise avant d'accéder aux documents investisseurs.",
      "next_action.training": "Continuez votre formation",
      "next_action.training_desc": "Terminez vos cours assignés pour progresser.",
      "next_action.documents": "Examinez les documents légaux",
      "next_action.documents_desc": "Signez tous les documents requis pour terminer l'intégration.",
      "next_action.complete": "Félicitations !",
      "next_action.complete_desc": "Toutes les étapes d'intégration sont terminées.",

      "documents.title": "Documents légaux",
      "documents.subtitle": "Examiner et signer tous les documents requis",
      "documents.signed": "Signé",
      "documents.pending": "En attente",
      "documents.view_sign": "Voir et signer",
      "documents.view": "Voir le document",
      "documents.agree": "J'ai lu et j'accepte les conditions",
      "documents.signature": "Nom complet (signature électronique)",
      "documents.signature_placeholder": "Entrez votre nom complet",
      "documents.sign_button": "Signer le document",
      "documents.all_signed": "Tous les documents signés",
      "documents.signed_at": "Signé le",
      "documents.signed_success": "Document signé avec succès",
      "documents.signed_success_desc": "Votre signature a été enregistrée",
      "documents.error": "Échec de la signature du document",
      "documents.error_desc": "Veuillez réessayer ou contacter le support",
      "documents.cancel": "Annuler",
      "documents.close": "Fermer",
      "documents.signing": "Signature en cours...",
      "documents.already_signed": "Document déjà signé",

      "kyc.title": "Vérification KYC / LBA",
      "kyc.subtitle": "Complétez les vérifications d'identité et d'accréditation",
      "kyc.full_name": "Nom complet",
      "kyc.dob": "Date de naissance",
      "kyc.country": "Pays",
      "kyc.accredited": "Investisseur accrédité",
      "kyc.pep": "Personne politiquement exposée (PPE)",
      "kyc.id_upload": "Téléchargement de pièce d'identité",
      "kyc.select": "Sélectionner...",
      "kyc.yes": "Oui",
      "kyc.no": "Non",
      "kyc.agree": "Je certifie que toutes les informations sont exactes",
      "kyc.submit": "Soumettre la vérification",
      "kyc.submitting": "Soumission...",
      "kyc.success": "Vérification KYC terminée",
      "kyc.success_desc": "Vous pouvez maintenant accéder aux documents investisseurs",
      "kyc.error": "Échec de la vérification",
      "kyc.error_desc": "Veuillez vérifier vos informations",

      "test.your_score": "Votre score",
      "test.passed": "Réussi",
      "test.failed": "Échoué",
      "test.passed_message": "Félicitations ! Vous avez démontré les compétences nécessaires.",
      "test.failed_message": "Continuez à apprendre ! Révisez et réessayez. Score requis : 60%",
      "test.start_training": "Commencer la formation",
      "test.try_again": "Réessayer",

      "nav.my_training": "Ma formation",

      "onb.back": "Retour",
      "onb.confirm_role": "Confirmez votre rôle",
      "onb.submitting": "Soumission...",
      "onb.start": "Commencer la formation",

      "error.unauthorized": "Non autorisé",
      "error.reset_admin_only": "La réinitialisation est réservée aux administrateurs",

      "courses.subtitle": "Parcourir et s'inscrire aux cours de formation",
      "courses.view_course": "Voir le cours",
      "courses.lesson": "leçon",
      "courses.lessons": "leçons",
      "courses.quiz": "quiz",
      "courses.quizzes": "quiz",
      "courses.no_courses": "Aucun cours attribué pour le moment.",
      "course.not_found": "Cours non trouvé",
      "course.back": "Retour aux cours",
      "course.subtitle": "Complétez toutes les leçons et réussissez le quiz pour terminer ce cours",
      "course.lessons": "Leçons",
      "course.assessments": "Évaluations",
      "course.questions": "questions",
      "course.min": "min",
      "course.pass": "Réussite",
      "quiz.not_found": "Quiz non trouvé",
      "quiz.question": "Question",
      "quiz.of": "de",
      "quiz.previous": "Précédent",
      "quiz.next": "Suivant",
      "quiz.true": "Vrai",
      "quiz.false": "Faux",
      "quiz.correct": "correct",
      "quiz.short_answer": "Votre réponse :",
      "quiz.type_answer": "Tapez votre réponse ici...",
      "quiz.essay_answer": "Votre essai :",
      "quiz.type_essay": "Rédigez votre essai ici (500-700 mots recommandés)...",
      "my_courses.subtitle": "Suivez vos cours inscrits et votre progression",
      "my_courses.role": "Rôle",
      "my_courses.version": "Version",
      "my_courses.progress": "Progression",
      "my_courses.no_courses": "Aucun cours attribué pour le moment.",
      "rubric.cognitive": "Capacités cognitives",
      "rubric.critical": "Esprit critique",
      "rubric.technical": "Compétences techniques",
      "rubric.communication": "Communication/Professionnalisme",
      "rubric.situational": "Jugement situationnel",
      "rubric.scale.1": "1",
      "rubric.scale.3": "3",
      "rubric.scale.5": "5",
      "rubric.recommendation": "Recommandation",
      "rubric.not_recommended": "Non recommandé",
      "rubric.recommended": "Recommandé",
      "rubric.highly_recommended": "Fortement recommandé",
      "eval.aptitude": "Résultats du test d'aptitude",
      "eval.interview": "Performance à l'entretien",
      "eval.overall": "Évaluation globale",
      "eval.comments": "Commentaires finaux",
      "eval.view_full": "Voir les résultats complets",
      "lesson.notice.empty": "Cette leçon n'a pas de contenu. Veuillez contacter votre administrateur.",
      "lesson.notice.draft": "Brouillon — contenu en révision",
      "aptitude.title": "Test d'aptitude",
      "aptitude.subtitle": "Complétez cette évaluation pour démontrer vos compétences et capacités",
      "aptitude.instructions": "Vous avez 60 minutes pour compléter 32 questions couvrant les capacités cognitives, la pensée critique, les compétences techniques, la communication et le jugement situationnel.",
      "aptitude.begin": "Commencer l'évaluation",
      "aptitude.time_remaining": "Temps restant",
      "aptitude.evaluating": "Évaluation de vos réponses...",
      "aptitude.results": "Vos résultats",
      "aptitude.score": "Score global",
      "aptitude.recommendation": "Recommandation",
      "role_test.title": "Complétez votre test d'aptitude {role}",
      "role_test.subtitle": "Réussissez cette évaluation spécifique au rôle pour débloquer vos cours {role}",
      "role_test.alert_message": "Des cours attendent d'être débloqués. Réussissez le test d'aptitude {role} pour commencer votre formation.",
      "role_test.locked": "Ce cours nécessite de réussir le test d'aptitude {role}",
      "role_test.take_test": "Passer le test {role}",
      "role_test.passed": "Test réussi - Cours débloqué",
      "role_test.failed": "Test échoué - Nouvelle tentative disponible",
      "role_test.complete_message": "Félicitations ! Vous pouvez maintenant accéder à vos cours {role}.",
      "role_test.locked_courses": "Cours verrouillés (test requis)",
      "role_test.available_courses": "Cours disponibles",
      "role_test.unlock": "Débloquer le cours"
    }
  },
  settings: {
    lessonMinContentChars: 0,
    hideEmptyLessons: false,
    preferLessonSuffix: "_v2"
  },
  courses: [
    {
      id: "orientation_common",
      title_en: "SHARE Orientation: Mission, Model, Governance",
      title_fr: "Orientation SHARE : Mission, Modèle, Gouvernance",
      role_required: "all",
      version: "1.0"
    },
    {
      id: "doctor_track",
      title_en: "Clinical Excellence — Physicians",
      title_fr: "Excellence clinique — Médecins",
      role_required: "doctor",
      version: "1.0"
    },
    {
      id: "nurse_track",
      title_en: "Essential Nursing Skills",
      title_fr: "Compétences infirmières essentielles",
      role_required: "nurse",
      version: "1.0"
    },
    {
      id: "driver_track",
      title_en: "Field Logistics & Road Safety",
      title_fr: "Logistique terrain & sécurité routière",
      role_required: "driver",
      version: "1.0"
    },
    {
      id: "manager_track",
      title_en: "Leadership & Operational Governance",
      title_fr: "Leadership & Gouvernance opérationnelle",
      role_required: "manager",
      version: "1.0"
    },
    {
      id: "security_track",
      title_en: "Security & Risk Management",
      title_fr: "Sécurité & Gestion des risques",
      role_required: "security",
      version: "1.0"
    },
    {
      id: "share_clinical_guide",
      title_en: "SHARE Clinical Reference Guide",
      title_fr: "Guide de Référence Clinique SHARE",
      role_required: "all",
      version: "1.0"
    }
  ],
  lessons: [
    /* ---------- ORIENTATION (3) ---------- */
    {
      id: "ori_l1_en",
      course_id: "orientation_common",
      locale: "en",
      order: 1,
      title: "Mission, Vision, Values",
      contentType: "html",
      htmlBody: "<h2>Learning Objectives</h2><ul><li>State SHARE's mission and how mobile clinics extend access to care in Haiti.</li><li>Describe core values (equity, safety, dignity, accountability) and how they show up on deployments.</li><li>Understand the historical context and current healthcare landscape in Haiti.</li></ul><h2>Context</h2><p>SHARE operates mobile clinics to reach underserved communities with primary care, diagnostics, and health education, aligned with MSPP (Ministère de la Santé Publique et de la Population) and local partners. Haiti faces significant healthcare challenges including limited infrastructure in rural areas, shortage of healthcare professionals, and barriers to accessing basic medical services.</p><h2>Our Mission</h2><p>Sustainable Health Acquired by Research and Education (SHARE) is committed to providing sustainable, community-rooted healthcare informed by research and evidence-based practices. We believe that quality healthcare is a fundamental right and work tirelessly to bridge the gap between urban medical centers and rural communities.</p><h2>The Mobile Clinic Model</h2><p>Our mobile clinics serve as healthcare bridges, bringing essential services directly to communities that would otherwise have limited or no access to care. The model operates through:</p><ul><li><strong>Triage:</strong> Initial assessment and prioritization of patients</li><li><strong>Consultation:</strong> Comprehensive examination by qualified medical professionals</li><li><strong>Pharmacy & Education:</strong> Provision of medications and health education</li><li><strong>Referral:</strong> Coordination with fixed facilities for complex cases</li><li><strong>Data Capture:</strong> Documentation in Electronic Health Records (EHR) for continuity of care</li></ul><h2>Core Values in Action</h2><ol><li><b>Equity:</b> We serve all community members regardless of their ability to pay, ensuring equal access to quality healthcare.</li><li><b>Safety:</b> All procedures follow strict safety protocols to protect both patients and staff.</li><li><b>Dignity:</b> We respect local beliefs, cultural practices, and treat every patient with respect and compassion.</li><li><b>Accountability:</b> We maintain accurate documentation, transparent operations, and are accountable to the communities we serve and our partners.</li><li><b>Confidentiality:</b> Patient information is strictly protected according to medical ethics and Haitian law.</li></ol><h2>Practical Application</h2><p>As a SHARE team member, you will embody these values daily by:</p><ul><li>Greeting patients warmly in their preferred language (Kreyòl/French)</li><li>Listening actively to their concerns without judgment</li><li>Maintaining patient privacy during consultations</li><li>Documenting all interactions accurately and objectively</li><li>Reporting any concerns or incidents through proper channels</li></ul>",
      sourceUrlEn: "sandbox:/mnt/data/Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE) (2).docx",
      sourceUrlFr: "sandbox:/mnt/data/Translated French copy of Copy of Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE).pdf"
    },
    {
      id: "ori_l1_fr",
      course_id: "orientation_common",
      locale: "fr",
      order: 1,
      title: "Mission, vision, valeurs",
      contentType: "html",
      htmlBody: "<h2>Objectifs</h2><ul><li>Expliquer la mission de SHARE et le rôle des cliniques mobiles en Haïti.</li><li>Décrire les valeurs (équité, sécurité, dignité, responsabilité) et leur application sur le terrain.</li><li>Comprendre le contexte historique et le paysage actuel des soins de santé en Haïti.</li></ul><h2>Contexte</h2><p>SHARE déploie des cliniques mobiles pour desservir des communautés éloignées, en conformité avec le MSPP (Ministère de la Santé Publique et de la Population) et en partenariat local. Haïti fait face à des défis importants en matière de santé, notamment une infrastructure limitée dans les zones rurales, une pénurie de professionnels de la santé et des obstacles à l'accès aux services médicaux de base.</p><h2>Notre Mission</h2><p>Santé Durable Acquise par la Recherche et l'Éducation (SHARE) s'engage à fournir des soins de santé durables, ancrés dans la communauté et guidés par la recherche et les pratiques fondées sur des preuves. Nous croyons que les soins de santé de qualité sont un droit fondamental et travaillons sans relâche pour combler le fossé entre les centres médicaux urbains et les communautés rurales.</p><h2>Le Modèle de Clinique Mobile</h2><p>Nos cliniques mobiles servent de ponts de santé, apportant des services essentiels directement aux communautés qui auraient autrement un accès limité ou inexistant aux soins. Le modèle fonctionne à travers:</p><ul><li><strong>Triage:</strong> Évaluation initiale et priorisation des patients</li><li><strong>Consultation:</strong> Examen complet par des professionnels médicaux qualifiés</li><li><strong>Pharmacie et Éducation:</strong> Fourniture de médicaments et éducation sanitaire</li><li><strong>Orientation:</strong> Coordination avec les établissements fixes pour les cas complexes</li><li><strong>Saisie des Données:</strong> Documentation dans les Dossiers de Santé Électroniques (DSE) pour la continuité des soins</li></ul><h2>Valeurs Fondamentales en Action</h2><ol><li><b>Équité:</b> Nous servons tous les membres de la communauté, quelle que soit leur capacité de payer, garantissant un accès égal à des soins de santé de qualité.</li><li><b>Sécurité:</b> Toutes les procédures suivent des protocoles de sécurité stricts pour protéger les patients et le personnel.</li><li><b>Dignité:</b> Nous respectons les croyances locales, les pratiques culturelles et traitons chaque patient avec respect et compassion.</li><li><b>Responsabilité:</b> Nous maintenons une documentation précise, des opérations transparentes et sommes responsables envers les communautés que nous servons et nos partenaires.</li><li><b>Confidentialité:</b> Les informations des patients sont strictement protégées conformément à l'éthique médicale et au droit haïtien.</li></ol><h2>Application Pratique</h2><p>En tant que membre de l'équipe SHARE, vous incarnerez ces valeurs quotidiennement en:</p><ul><li>Accueillant chaleureusement les patients dans leur langue préférée (Kreyòl/Français)</li><li>Écoutant activement leurs préoccupations sans jugement</li><li>Maintenant la confidentialité des patients pendant les consultations</li><li>Documentant toutes les interactions avec précision et objectivité</li><li>Signalant toute préoccupation ou incident par les canaux appropriés</li></ul>",
      sourceUrlEn: "sandbox:/mnt/data/Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE) (2).docx",
      sourceUrlFr: "sandbox:/mnt/data/Translated French copy of Copy of Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE).pdf"
    },
    {
      id: "ori_l2_en",
      course_id: "orientation_common",
      locale: "en",
      order: 2,
      title: "Mobile Clinic Model in Haiti",
      contentType: "html",
      htmlBody: "<h2>Objectives</h2><ul><li>Explain the complete outreach flow and care pathways in SHARE mobile clinics.</li><li>Identify referral criteria and understand the roles of partner organizations.</li><li>Describe the logistics and planning required for successful mobile clinic operations.</li></ul><h2>Planning & Logistics</h2><p>Mobile clinic operations require careful coordination and planning:</p><ul><li><strong>Community Engagement:</strong> Working with local leaders to schedule clinic days and communicate with residents</li><li><strong>Site Selection:</strong> Choosing safe, accessible locations with adequate space for patient flow</li><li><strong>Supply Management:</strong> Ensuring adequate medications, supplies, and equipment are available</li><li><strong>Team Coordination:</strong> Briefing all team members on their roles and responsibilities</li><li><strong>Safety Assessment:</strong> Evaluating security conditions and establishing emergency protocols</li></ul><h2>Patient Flow & Service Model</h2><p>Our mobile clinics follow a structured patient flow designed for efficiency and quality care:</p><ol><li><strong>Registration:</strong> Patient check-in, basic information collection, and creation/update of medical records</li><li><strong>Triage & Vitals:</strong> Initial assessment by nurses/CHWs including vital signs (blood pressure, temperature, pulse, respiratory rate, weight)</li><li><strong>Consultation:</strong> Comprehensive medical examination by doctors, diagnosis, and treatment planning</li><li><strong>Pharmacy:</strong> Medication dispensing with clear instructions on usage and potential side effects</li><li><strong>Health Education:</strong> Counseling on preventive care, hygiene, nutrition, and disease management</li><li><strong>Referral (when needed):</strong> Coordination with partner facilities for cases requiring advanced care</li></ol><h2>Referral Criteria</h2><p>Patients should be referred to fixed healthcare facilities when they present with:</p><ul><li>Severe acute conditions requiring hospitalization (respiratory distress, severe dehydration, acute abdomen)</li><li>Pregnancy complications or high-risk pregnancies</li><li>Suspected surgical conditions</li><li>Conditions requiring diagnostic imaging or advanced laboratory tests</li><li>Chronic diseases requiring specialist management</li><li>Any condition beyond the scope of mobile clinic capabilities</li></ul><h2>Partner Roles</h2><p>SHARE collaborates with several key partners:</p><ul><li><strong>MSPP:</strong> Provides regulatory oversight and technical guidance</li><li><strong>Local Health Centers:</strong> Serve as referral destinations and coordination points</li><li><strong>Community Health Workers:</strong> Support patient follow-up and health education</li><li><strong>NGO Partners:</strong> Provide specialized services and additional resources</li></ul><h2>Data Management</h2><p>Accurate data collection is essential for:</p><ul><li>Patient continuity of care across visits and referrals</li><li>Monitoring health trends in served communities</li><li>Reporting to MSPP and donor organizations</li><li>Quality improvement and program evaluation</li></ul><p><strong>EHR Documentation:</strong> Record all patient encounters, including chief complaint, examination findings, diagnosis, treatment provided, medications dispensed, and follow-up plans. Always protect patient confidentiality and ensure secure data storage.</p>",
      sourceUrlEn: "sandbox:/mnt/data/Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE) (2).docx",
      sourceUrlFr: "sandbox:/mnt/data/Translated French copy of Copy of Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE).pdf"
    },
    {
      id: "ori_l2_fr",
      course_id: "orientation_common",
      locale: "fr",
      order: 2,
      title: "Modèle de clinique mobile en Haïti",
      contentType: "html",
      htmlBody: "<h2>Objectifs</h2><ul><li>Expliquer le flux complet de prise en charge et les parcours de soins dans les cliniques mobiles SHARE.</li><li>Identifier les critères d'orientation et comprendre les rôles des organisations partenaires.</li><li>Décrire la logistique et la planification nécessaires pour des opérations réussies de cliniques mobiles.</li></ul><h2>Planification & Logistique</h2><p>Les opérations de cliniques mobiles nécessitent une coordination et une planification minutieuses:</p><ul><li><strong>Engagement Communautaire:</strong> Travailler avec les leaders locaux pour planifier les journées de clinique et communiquer avec les résidents</li><li><strong>Sélection du Site:</strong> Choisir des emplacements sûrs et accessibles avec un espace adéquat pour le flux de patients</li><li><strong>Gestion des Approvisionnements:</strong> S'assurer que des médicaments, fournitures et équipements adéquats sont disponibles</li><li><strong>Coordination de l'Équipe:</strong> Briefing de tous les membres de l'équipe sur leurs rôles et responsabilités</li><li><strong>Évaluation de la Sécurité:</strong> Évaluer les conditions de sécurité et établir des protocoles d'urgence</li></ul><h2>Flux des Patients & Modèle de Service</h2><p>Nos cliniques mobiles suivent un flux de patients structuré conçu pour l'efficacité et la qualité des soins:</p><ol><li><strong>Enregistrement:</strong> Accueil du patient, collecte d'informations de base et création/mise à jour des dossiers médicaux</li><li><strong>Triage & Constantes:</strong> Évaluation initiale par les infirmier(ère)s/ASC incluant les signes vitaux (pression artérielle, température, pouls, fréquence respiratoire, poids)</li><li><strong>Consultation:</strong> Examen médical complet par les médecins, diagnostic et planification du traitement</li><li><strong>Pharmacie:</strong> Distribution de médicaments avec des instructions claires sur l'utilisation et les effets secondaires potentiels</li><li><strong>Éducation Sanitaire:</strong> Conseil sur les soins préventifs, l'hygiène, la nutrition et la gestion des maladies</li><li><strong>Orientation (si nécessaire):</strong> Coordination avec les établissements partenaires pour les cas nécessitant des soins avancés</li></ol><h2>Critères d'Orientation</h2><p>Les patients doivent être orientés vers des établissements de santé fixes lorsqu'ils présentent:</p><ul><li>Des conditions aiguës graves nécessitant une hospitalisation (détresse respiratoire, déshydratation sévère, abdomen aigu)</li><li>Des complications de grossesse ou des grossesses à haut risque</li><li>Des conditions chirurgicales suspectées</li><li>Des conditions nécessitant une imagerie diagnostique ou des tests de laboratoire avancés</li><li>Des maladies chroniques nécessitant une gestion par un spécialiste</li><li>Toute condition au-delà de la portée des capacités de la clinique mobile</li></ul><h2>Rôles des Partenaires</h2><p>SHARE collabore avec plusieurs partenaires clés:</p><ul><li><strong>MSPP:</strong> Fournit une supervision réglementaire et des orientations techniques</li><li><strong>Centres de Santé Locaux:</strong> Servent de destinations d'orientation et de points de coordination</li><li><strong>Agents de Santé Communautaire:</strong> Soutiennent le suivi des patients et l'éducation sanitaire</li><li><strong>Partenaires ONG:</strong> Fournissent des services spécialisés et des ressources supplémentaires</li></ul><h2>Gestion des Données</h2><p>La collecte de données précises est essentielle pour:</p><ul><li>La continuité des soins aux patients à travers les visites et les orientations</li><li>Le suivi des tendances sanitaires dans les communautés desservies</li><li>Le reporting au MSPP et aux organisations donatrices</li><li>L'amélioration de la qualité et l'évaluation du programme</li></ul><p><strong>Documentation DSE:</strong> Enregistrer toutes les rencontres avec les patients, y compris la plainte principale, les résultats de l'examen, le diagnostic, le traitement fourni, les médicaments distribués et les plans de suivi. Toujours protéger la confidentialité des patients et assurer un stockage sécurisé des données.</p>",
      sourceUrlEn: "sandbox:/mnt/data/Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE) (2).docx",
      sourceUrlFr: "sandbox:/mnt/data/Translated French copy of Copy of Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE).pdf"
    },
    {
      id: "ori_l3_en",
      course_id: "orientation_common",
      locale: "en",
      order: 3,
      title: "Governance & MSPP Alignment",
      contentType: "html",
      htmlBody: "<h2>Objectives</h2><ul><li>Understand licensing requirements and reporting obligations to MSPP.</li><li>Apply ethical standards in field operations and patient care.</li><li>Recognize the importance of regulatory compliance and quality assurance.</li></ul><h2>Legal Framework</h2><p>SHARE operates within Haiti's legal and regulatory framework for healthcare delivery:</p><ul><li><strong>MSPP Licensing:</strong> All healthcare activities must be authorized by the Ministry of Health (MSPP)</li><li><strong>Healthcare Provider Credentials:</strong> All clinical staff must hold valid licenses recognized in Haiti</li><li><strong>Facility Standards:</strong> Mobile clinics must meet minimum standards for safety, sanitation, and equipment</li><li><strong>Medication Management:</strong> Controlled substances and pharmacy operations must comply with Haitian pharmaceutical regulations</li></ul><h2>Reporting Requirements</h2><p>SHARE maintains transparency and accountability through regular reporting:</p><ul><li><strong>Monthly Activity Reports:</strong> Number of patients served, diagnoses, treatments provided, and referrals made</li><li><strong>Disease Surveillance:</strong> Immediate notification of suspected outbreaks or reportable diseases (cholera, measles, TB, etc.)</li><li><strong>Adverse Events:</strong> Documentation of medical errors, complications, or patient safety incidents</li><li><strong>Quality Metrics:</strong> Patient satisfaction, wait times, treatment outcomes, and referral completion rates</li></ul><h2>Ethical Standards in Practice</h2><p>All SHARE team members must uphold the highest ethical standards:</p><h3>Informed Consent</h3><ul><li>Explain all procedures and treatments in language the patient understands</li><li>Obtain verbal or written consent before any intervention</li><li>Document consent in patient records</li><li>Respect patient's right to refuse treatment</li></ul><h3>Confidentiality & Privacy</h3><ul><li>Conduct consultations in private spaces whenever possible</li><li>Do not discuss patient cases in public or with unauthorized individuals</li><li>Secure all medical records and data</li><li>Only share patient information with healthcare providers involved in their care</li></ul><h3>Non-Discrimination</h3><ul><li>Provide care to all patients regardless of age, gender, ethnicity, religion, or ability to pay</li><li>Respect cultural beliefs and practices</li><li>Challenge any discriminatory behavior within the team</li></ul><h3>Professional Boundaries</h3><ul><li>Maintain appropriate professional relationships with patients</li><li>Avoid conflicts of interest</li><li>Do not accept gifts or favors that could compromise care</li><li>Report any concerns about unprofessional conduct</li></ul><h2>Incident Reporting & Escalation</h2><p>When issues arise, follow these escalation procedures:</p><ol><li><strong>Medical Emergencies:</strong> Immediate notification to team lead and activation of emergency protocols</li><li><strong>Patient Safety Concerns:</strong> Report to supervising clinician within 24 hours</li><li><strong>Ethical Violations:</strong> Confidential reporting to SHARE leadership</li><li><strong>Security Incidents:</strong> Immediate notification to security coordinator and team lead</li><li><strong>Supply or Equipment Issues:</strong> Report to logistics coordinator</li></ol><h2>Quality Assurance</h2><p>SHARE is committed to continuous improvement through:</p><ul><li>Regular case reviews and clinical audits</li><li>Peer feedback and mentorship</li><li>Training updates based on identified gaps</li><li>Patient feedback mechanisms</li><li>Compliance monitoring and corrective action plans</li></ul>",
      sourceUrlEn: "sandbox:/mnt/data/Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE) (2).docx",
      sourceUrlFr: "sandbox:/mnt/data/Translated French copy of Copy of Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE).pdf"
    },
    {
      id: "ori_l3_fr",
      course_id: "orientation_common",
      locale: "fr",
      order: 3,
      title: "Gouvernance & alignement MSPP",
      contentType: "html",
      htmlBody: "<h2>Objectifs</h2><ul><li>Comprendre les exigences en matière de licences et les obligations de reporting au MSPP.</li><li>Appliquer les normes éthiques dans les opérations sur le terrain et les soins aux patients.</li><li>Reconnaître l'importance de la conformité réglementaire et de l'assurance qualité.</li></ul><h2>Cadre Juridique</h2><p>SHARE opère dans le cadre juridique et réglementaire d'Haïti pour la prestation de soins de santé:</p><ul><li><strong>Licence MSPP:</strong> Toutes les activités de soins de santé doivent être autorisées par le Ministère de la Santé (MSPP)</li><li><strong>Accréditation des Prestataires:</strong> Tout le personnel clinique doit détenir des licences valides reconnues en Haïti</li><li><strong>Normes des Établissements:</strong> Les cliniques mobiles doivent répondre aux normes minimales de sécurité, d'assainissement et d'équipement</li><li><strong>Gestion des Médicaments:</strong> Les substances contrôlées et les opérations pharmaceutiques doivent se conformer aux réglementations pharmaceutiques haïtiennes</li></ul><h2>Exigences de Reporting</h2><p>SHARE maintient la transparence et la responsabilité par le biais de rapports réguliers:</p><ul><li><strong>Rapports d'Activités Mensuels:</strong> Nombre de patients servis, diagnostics, traitements fournis et orientations effectuées</li><li><strong>Surveillance des Maladies:</strong> Notification immédiate des épidémies suspectées ou des maladies à déclaration obligatoire (choléra, rougeole, TB, etc.)</li><li><strong>Événements Indésirables:</strong> Documentation des erreurs médicales, complications ou incidents de sécurité des patients</li><li><strong>Métriques de Qualité:</strong> Satisfaction des patients, temps d'attente, résultats des traitements et taux de réalisation des orientations</li></ul><h2>Normes Éthiques en Pratique</h2><p>Tous les membres de l'équipe SHARE doivent respecter les normes éthiques les plus élevées:</p><h3>Consentement Éclairé</h3><ul><li>Expliquer toutes les procédures et traitements dans une langue que le patient comprend</li><li>Obtenir un consentement verbal ou écrit avant toute intervention</li><li>Documenter le consentement dans les dossiers des patients</li><li>Respecter le droit du patient de refuser un traitement</li></ul><h3>Confidentialité & Vie Privée</h3><ul><li>Mener les consultations dans des espaces privés autant que possible</li><li>Ne pas discuter des cas de patients en public ou avec des personnes non autorisées</li><li>Sécuriser tous les dossiers médicaux et données</li><li>Partager les informations des patients uniquement avec les prestataires de soins impliqués dans leurs soins</li></ul><h3>Non-Discrimination</h3><ul><li>Fournir des soins à tous les patients indépendamment de l'âge, du sexe, de l'ethnicité, de la religion ou de la capacité de payer</li><li>Respecter les croyances et pratiques culturelles</li><li>Contester tout comportement discriminatoire au sein de l'équipe</li></ul><h3>Limites Professionnelles</h3><ul><li>Maintenir des relations professionnelles appropriées avec les patients</li><li>Éviter les conflits d'intérêts</li><li>Ne pas accepter de cadeaux ou de faveurs qui pourraient compromettre les soins</li><li>Signaler toute préoccupation concernant un comportement non professionnel</li></ul><h2>Signalement et Escalade des Incidents</h2><p>Lorsque des problèmes surviennent, suivez ces procédures d'escalade:</p><ol><li><strong>Urgences Médicales:</strong> Notification immédiate au chef d'équipe et activation des protocoles d'urgence</li><li><strong>Préoccupations de Sécurité des Patients:</strong> Signaler au clinicien superviseur dans les 24 heures</li><li><strong>Violations Éthiques:</strong> Signalement confidentiel à la direction de SHARE</li><li><strong>Incidents de Sécurité:</strong> Notification immédiate au coordinateur de sécurité et au chef d'équipe</li><li><strong>Problèmes d'Approvisionnement ou d'Équipement:</strong> Signaler au coordinateur logistique</li></ol><h2>Assurance Qualité</h2><p>SHARE s'engage à une amélioration continue à travers:</p><ul><li>Des examens de cas réguliers et des audits cliniques</li><li>Des retours de pairs et du mentorat</li><li>Des mises à jour de formation basées sur les lacunes identifiées</li><li>Des mécanismes de retour d'information des patients</li><li>Une surveillance de la conformité et des plans d'action correctifs</li></ul>",
      sourceUrlEn: "sandbox:/mnt/data/Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE) (2).docx",
      sourceUrlFr: "sandbox:/mnt/data/Translated French copy of Copy of Comprehensive Guide to Mobile Clinic Operations in Haiti_ Sustainable Health Acquired by Research and Education (SHARE).pdf"
    },

    /* ---------- DOCTORS (4) ---------- */
    {
      id: "doc_l1_en",
      course_id: "doctor_track",
      locale: "en",
      order: 1,
      title: "Diagnostic Reasoning in Mobile Clinics",
      contentType: "html",
      htmlBody: "<h2>Objectives</h2><ul><li>Structure differentials with limited labs.</li><li>Use RDTs appropriately.</li><li>Escalate when red flags present.</li></ul><h2>Field Flow</h2><p>Focused history → vitals/exam → POCT → stabilize → EHR → referral if criteria met.</p><h2>Red Flags</h2><ul><li>Airway compromise, severe dehydration, AMS.</li><li>Pregnancy complications, active bleed, sepsis suspicion.</li></ul>"
    },
    {
      id: "doc_l1_fr",
      course_id: "doctor_track",
      locale: "fr",
      order: 1,
      title: "Raisonnement diagnostique en clinique mobile",
      contentType: "html",
      htmlBody: "<h2>Objectifs</h2><ul><li>Structurer les diagnostics avec peu d'examens.</li><li>Utiliser les TDR correctement.</li><li>Escalader en présence de signes d'alarme.</li></ul><h2>Parcours terrain</h2><p>Anamnèse ciblée → constantes/examen → tests au lit → stabiliser → DSE → orientation si critères.</p><h2>Signes d'alarme</h2><ul><li>Voies aériennes, déshydratation sévère, altération de conscience.</li><li>Grossesse compliquée, hémorragie active, sepsis suspect.</li></ul>"
    },
    {
      id: "doc_l2_en",
      course_id: "doctor_track",
      locale: "en",
      order: 2,
      title: "Chronic Disease (HTN/DM/HIV)",
      contentType: "html",
      htmlBody: "<h2>Protocols</h2><p>Follow HTN/DM/HIV field algorithms; titrate safely; monitor side-effects; reinforce adherence; refer per thresholds.</p><h2>Follow-up</h2><p>Schedule returns; coordinate with community health workers for adherence checks.</p>"
    },
    {
      id: "doc_l2_fr",
      course_id: "doctor_track",
      locale: "fr",
      order: 2,
      title: "Maladies chroniques (HTA/Diabète/VIH)",
      contentType: "html",
      htmlBody: "<h2>Protocoles</h2><p>Appliquer les algorithmes HTA/Diabète/VIH; titrer prudemment; surveiller les effets; renforcer l'observance; orienter selon seuils.</p><h2>Suivi</h2><p>Planifier les retours; coordonner avec les ASCs pour l'observance.</p>"
    },
    {
      id: "doc_l3_en",
      course_id: "doctor_track",
      locale: "en",
      order: 3,
      title: "BLS & Trauma Triage",
      contentType: "html",
      htmlBody: "<h2>Primary Survey</h2><p>Airway → Breathing → Circulation → Disability → Exposure; stabilize and prep for transport.</p><h2>Documentation</h2><p>Record times, interventions, vitals; handoff clearly at referral site.</p>"
    },
    {
      id: "doc_l3_fr",
      course_id: "doctor_track",
      locale: "fr",
      order: 3,
      title: "RCR de base & triage traumatologique",
      contentType: "html",
      htmlBody: "<h2>Examen primaire</h2><p>Voies aériennes → Respiration → Circulation → Neurologique → Exposition; stabiliser et préparer le transport.</p><h2>Documentation</h2><p>Consigner heures, gestes, constantes; transmettre clairement au site d'orientation.</p>"
    },
    {
      id: "doc_l4_en",
      course_id: "doctor_track",
      locale: "en",
      order: 4,
      title: "Legal/Ethical Duties",
      contentType: "html",
      htmlBody: "<h2>Consent & Confidentiality</h2><p>Obtain and document consent; respect privacy; report per policy; avoid conflicts of interest.</p>"
    },
    {
      id: "doc_l4_fr",
      course_id: "doctor_track",
      locale: "fr",
      order: 4,
      title: "Devoirs juridiques/éthiques",
      contentType: "html",
      htmlBody: "<h2>Consentement & confidentialité</h2><p>Recueillir et consigner le consentement; respecter la vie privée; signaler selon la politique; éviter les conflits d'intérêts.</p>"
    },

    /* ---------- NURSES (3) ---------- */
    {
      id: "nrs_l1_en",
      course_id: "nurse_track",
      locale: "en",
      order: 1,
      title: "Clinical Skills in Resource-Limited Settings",
      contentType: "html",
      htmlBody: "<h2>Objectives</h2><ul><li>Measure and interpret vital signs.</li><li>Perform injections and wound care safely.</li><li>Escalate per triage rules.</li></ul><h2>Notes</h2><p>Always verify allergies; use clean technique; document care in EHR.</p>"
    },
    {
      id: "nrs_l1_fr",
      course_id: "nurse_track",
      locale: "fr",
      order: 1,
      title: "Compétences cliniques — milieux à faibles ressources",
      contentType: "html",
      htmlBody: "<h2>Objectifs</h2><ul><li>Mesurer et interpréter les constantes.</li><li>Pratiquer injections et soins de plaies en sécurité.</li><li>Escalader selon triage.</li></ul><h2>Notes</h2><p>Toujours vérifier les allergies; technique propre; documenter dans le DSE.</p>"
    },
    {
      id: "nrs_l2_en",
      course_id: "nurse_track",
      locale: "en",
      order: 2,
      title: "Infection Control & Patient Safety",
      contentType: "html",
      htmlBody: "<h2>PPE</h2><p>Donning: hand hygiene → gown → mask/respirator → eye protection → gloves. Doffing reverse with hand hygiene between steps.</p><h2>Waste</h2><p>Sharps to rigid container; red bag for biohazard; black for non-infectious.</p>"
    },
    {
      id: "nrs_l2_fr",
      course_id: "nurse_track",
      locale: "fr",
      order: 2,
      title: "Prévention des infections & sécurité des patients",
      contentType: "html",
      htmlBody: "<h2>EPI</h2><p>Enfilage : hygiène des mains → blouse → masque/respirateur → protection oculaire → gants. Retrait en sens inverse avec hygiène des mains.</p><h2>Déchets</h2><p>Objets piquants: conteneur rigide; sac rouge pour biohazard; sac noir pour non infectieux.</p>"
    },
    {
      id: "nrs_l3_en",
      course_id: "nurse_track",
      locale: "en",
      order: 3,
      title: "Maternal/Child & Home Visits",
      contentType: "html",
      htmlBody: "<h2>Red Flags</h2><p>Neonatal fever, lethargy, poor feeding; maternal hemorrhage, severe headache, seizures. Plan home follow-ups and escalation.</p>"
    },
    {
      id: "nrs_l3_fr",
      course_id: "nurse_track",
      locale: "fr",
      order: 3,
      title: "Santé maternelle/infantile & visites à domicile",
      contentType: "html",
      htmlBody: "<h2>Signaux d'alerte</h2><p>Fièvre néonatale, léthargie, mauvaise alimentation; hémorragie maternelle, céphalées sévères, convulsions. Planifier les suivis et l'escalade.</p>"
    },

    /* ---------- DRIVERS (3) ---------- */
    {
      id: "drv_l1_en",
      course_id: "driver_track",
      locale: "en",
      order: 1,
      title: "Safe Navigation & Route Planning",
      contentType: "html",
      htmlBody: "<h2>Pre-trip</h2><ul><li>Tires, brakes, lights, fluids, spares, straps.</li><li>Route plan + alternates; weather and road advisories.</li></ul><h2>Comms</h2><p>Radio check; contact tree; log departure and ETA.</p>"
    },
    {
      id: "drv_l1_fr",
      course_id: "driver_track",
      locale: "fr",
      order: 1,
      title: "Navigation sûre & planification d'itinéraires",
      contentType: "html",
      htmlBody: "<h2>Avant départ</h2><ul><li>Pneus, freins, feux, fluides, pièces, sangles.</li><li>Itinéraire + alternatives; météo et état des routes.</li></ul><h2>Comms</h2><p>Test radio; arbre de contacts; journal départ/ETA.</p>"
    },
    {
      id: "drv_l2_en",
      course_id: "driver_track",
      locale: "en",
      order: 2,
      title: "Emergency Response on the Road",
      contentType: "html",
      htmlBody: "<h2>Protocol</h2><ol><li>Stop in safe area; hazards on.</li><li>Assess risks (water, slope, traffic).</li><li>Notify ops; request guidance.</li><li>Choose alternate route; document in log.</li></ol>"
    },
    {
      id: "drv_l2_fr",
      course_id: "driver_track",
      locale: "fr",
      order: 2,
      title: "Réponse d'urgence sur la route",
      contentType: "html",
      htmlBody: "<h2>Protocole</h2><ol><li>Se ranger en zone sûre; feux de détresse.</li><li>Évaluer risques (eau, pente, trafic).</li><li>Avertir l'équipe; demander directives.</li><li>Choisir un détour; consigner au journal.</li></ol>"
    },
    {
      id: "drv_l3_en",
      course_id: "driver_track",
      locale: "en",
      order: 3,
      title: "Field Comms & Passenger Care",
      contentType: "html",
      htmlBody: "<h2>Passenger Care</h2><p>Calm, predictable driving; check on patient comfort; report changes.</p><h2>Incidents</h2><p>Document near-misses and report weekly.</p>"
    },
    {
      id: "drv_l3_fr",
      course_id: "driver_track",
      locale: "fr",
      order: 3,
      title: "Communications & prise en charge des passagers",
      contentType: "html",
      htmlBody: "<h2>Prise en charge</h2><p>Conduite calme et prévisible; confort des passagers; signaler tout changement.</p><h2>Incidents</h2><p>Consigner les quasi-accidents et les signaler chaque semaine.</p>"
    },

    /* ---------- MANAGERS (3) ---------- */
    {
      id: "mgr_l1_en",
      course_id: "manager_track",
      locale: "en",
      order: 1,
      title: "Leadership & Team Management",
      contentType: "html",
      htmlBody: "<h2>Focus</h2><p>Conflict resolution, coaching, role clarity, feedback loops. Set expectations and document 1:1s.</p>"
    },
    {
      id: "mgr_l1_fr",
      course_id: "manager_track",
      locale: "fr",
      order: 1,
      title: "Leadership & gestion d'équipe",
      contentType: "html",
      htmlBody: "<h2>Focus</h2><p>Résolution de conflits, accompagnement, clarté des rôles, boucles de feedback. Documenter les entretiens individuels.</p>"
    },
    {
      id: "mgr_l2_en",
      course_id: "manager_track",
      locale: "en",
      order: 2,
      title: "Ops & Resource Allocation",
      contentType: "html",
      htmlBody: "<h2>Inventory</h2><p>Forecast demand; prevent stockouts; maintain supplier backups.</p><h2>Scheduling</h2><p>Balance teams and routes; monitor costs.</p>"
    },
    {
      id: "mgr_l2_fr",
      course_id: "manager_track",
      locale: "fr",
      order: 2,
      title: "Opérations & allocation des ressources",
      contentType: "html",
      htmlBody: "<h2>Inventaire</h2><p>Prévoir la demande; éviter les ruptures; fournisseurs de secours.</p><h2>Planification</h2><p>Équilibrer équipes et circuits; suivre les coûts.</p>"
    },
    {
      id: "mgr_l3_en",
      course_id: "manager_track",
      locale: "en",
      order: 3,
      title: "Governance, KPIs & Reporting",
      contentType: "html",
      htmlBody: "<h2>KPIs</h2><p>Visits/day, referral rate, stockout rate, incident count, training completion.</p><h2>Reporting</h2><p>Monthly summary: trends, outliers, corrective actions; keep an immutable audit trail.</p>"
    },
    {
      id: "mgr_l3_fr",
      course_id: "manager_track",
      locale: "fr",
      order: 3,
      title: "Gouvernance, ICP & rapports",
      contentType: "html",
      htmlBody: "<h2>ICP</h2><p>Visites/jour, taux d'orientation, ruptures, incidents, achèvement des formations.</p><h2>Rapports</h2><p>Résumé mensuel : tendances, écarts, mesures correctives; piste d'audit immuable.</p>"
    },

    /* ---------- SECURITY (3) ---------- */
    {
      id: "sec_l1_en",
      course_id: "security_track",
      locale: "en",
      order: 1,
      title: "Security Protocols in Mobile Clinics",
      contentType: "html",
      htmlBody: "<h2>Access Control</h2><p>Visitor sign-in, ID badges, perimeter checks, controlled chokepoints, daily review.</p><h2>Posture</h2><p>Normal → Heightened → Lockdown: define triggers and comms.</p>"
    },
    {
      id: "sec_l1_fr",
      course_id: "security_track",
      locale: "fr",
      order: 1,
      title: "Protocoles de sécurité en clinique mobile",
      contentType: "html",
      htmlBody: "<h2>Contrôle d'accès</h2><p>Enregistrement visiteurs, badges, périmètre, points de passage, revue quotidienne.</p><h2>Posture</h2><p>Normale → Renforcée → Confinement : déclencheurs et communications.</p>"
    },
    {
      id: "sec_l2_en",
      course_id: "security_track",
      locale: "en",
      order: 2,
      title: "Emergency Response & De-escalation",
      contentType: "html",
      htmlBody: "<h2>Response</h2><p>Protect staff & patients first; call for support; isolate the area; document and escalate.</p>"
    },
    {
      id: "sec_l2_fr",
      course_id: "security_track",
      locale: "fr",
      order: 2,
      title: "Réponse d'urgence & désescalade",
      contentType: "html",
      htmlBody: "<h2>Réponse</h2><p>Priorité à la sécurité du personnel et des patients; demander du renfort; isoler; documenter et escalader.</p>"
    },
    {
      id: "sec_l3_en",
      course_id: "security_track",
      locale: "en",
      order: 3,
      title: "Access Control & Site Hardening",
      contentType: "html",
      htmlBody: "<h2>Perimeter</h2><p>Clear lines of sight, lighting, locks, camera coverage; weekly inspection log.</p>"
    },
    {
      id: "sec_l3_fr",
      course_id: "security_track",
      locale: "fr",
      order: 3,
      title: "Contrôle d'accès & durcissement du site",
      contentType: "html",
      htmlBody: "<h2>Périmètre</h2><p>Lignes de visibilité, éclairage, serrures, couverture caméras; registre d'inspection hebdomadaire.</p>"
    },
    /* ---------- SHARE CLINICAL REFERENCE GUIDE (18) ---------- */
    {
      id: "share_ch1_en",
      course_id: "share_clinical_guide",
      locale: "en",
      order: 1,
      title: "Chapter 1: Introduction to SHARE and Mobile Clinic Operations",
      contentType: "html",
      htmlBody: `<h2>1.1 SHARE's Mission, Vision, and Values</h2>
<h3>Mission</h3>
<p>SHARE (Sustainable Health Acquired by Research and Education) is committed to transforming global healthcare by combining research-driven, evidence-based solutions with comprehensive education programs. We empower underserved populations, particularly in Haiti, by delivering high-quality, sustainable healthcare through mobile clinics that address both immediate medical needs and provide long-term health education.</p>
<p>The healthcare crisis in Haiti presents unique challenges where a significant portion of the population lacks access to regular, reliable medical services. SHARE's mobile clinics bridge this gap, bringing healthcare directly to communities and offering preventive services that foster healthier populations.</p>
<h3>Vision</h3>
<p>Our vision is a future where every community, regardless of geography or socioeconomic status, has equitable access to healthcare that is sustainable, reliable, and driven by local research and education. In Haiti, this translates into building a robust healthcare framework that integrates local healthcare providers, international best practices, and patient education programs.</p>
<h3>Core Values</h3>
<ul>
<li><strong>Sustainability:</strong> Building health systems that communities can sustain independently through local capacity building and preventive care</li>
<li><strong>Community Empowerment:</strong> Healthcare should be participatory, promoting ownership and accountability for health outcomes</li>
<li><strong>Equity:</strong> Healthcare services must be accessible to all, especially vulnerable or marginalized communities</li>
<li><strong>Education:</strong> Empowering individuals with knowledge necessary to improve their long-term health</li>
</ul>
<h2>1.2 Mobile Clinics: A Sustainable Healthcare Model</h2>
<p>Mobile clinics provide a flexible and scalable solution for delivering healthcare to communities with limited or no access to traditional facilities. They are especially critical in Haiti, where healthcare infrastructure is weak and rural populations may be hours away from the nearest hospital.</p>
<h3>Services Provided</h3>
<ul>
<li><strong>Preventive services:</strong> Vaccinations, maternal health services, education on nutrition and hygiene</li>
<li><strong>Emergency services:</strong> Immediate care for injuries, illness outbreaks, and post-disaster trauma</li>
<li><strong>Chronic disease management:</strong> Care for diabetes, hypertension, and HIV/AIDS</li>
</ul>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-en.pdf" download class="underline">Download full guide (PDF)</a></p>`
    },
    {
      id: "share_ch1_fr",
      course_id: "share_clinical_guide",
      locale: "fr",
      order: 1,
      title: "Chapitre 1 : Introduction à SHARE et aux opérations de clinique mobile",
      contentType: "html",
      htmlBody: `<h2>1.1 Mission, vision et valeurs de SHARE</h2>
<h3>Mission</h3>
<p>SHARE (Santé durable acquise par la recherche et l'éducation) s'engage à transformer les soins de santé mondiaux en combinant des solutions fondées sur la recherche avec des programmes d'éducation complets. Nous responsabilisons les populations mal desservies, en particulier en Haïti, en offrant des soins de santé durables et de qualité via des cliniques mobiles.</p>
<h3>Vision</h3>
<p>Notre vision est un avenir où chaque communauté, indépendamment de la géographie ou du statut socioéconomique, a un accès équitable à des soins de santé durables, fiables et guidés par la recherche locale et l'éducation.</p>
<h3>Valeurs fondamentales</h3>
<ul>
<li><strong>Durabilité:</strong> Construire des systèmes de santé que les communautés peuvent maintenir de manière indépendante</li>
<li><strong>Autonomisation communautaire:</strong> Les soins de santé doivent être participatifs</li>
<li><strong>Équité:</strong> Accessibilité pour tous, en particulier les communautés vulnérables</li>
<li><strong>Éducation:</strong> Autonomiser les individus avec les connaissances nécessaires</li>
</ul>
<h2>1.2 Cliniques mobiles : Un modèle de soins de santé durable</h2>
<p>Les cliniques mobiles fournissent une solution flexible et évolutive pour offrir des soins de santé aux communautés ayant un accès limité ou inexistant aux établissements traditionnels.</p>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-fr.pdf" download class="underline">Télécharger le guide complet (PDF)</a></p>`
    },
    {
      id: "share_ch2_en",
      course_id: "share_clinical_guide",
      locale: "en",
      order: 2,
      title: "Chapter 2: Ensuring Safety and Compliance in Mobile Clinics",
      contentType: "html",
      htmlBody: `<h2>2.1 Workplace Safety Protocols</h2>
<p>Safety protocols are essential in mobile clinics, where risks are often higher due to working in non-standard environments. Ensuring the safety of healthcare workers and patients is paramount in Haiti, where health threats such as cholera, dengue fever, and malaria are common.</p>
<h3>Infection Control</h3>
<ul>
<li><strong>Hand Hygiene:</strong> Frequent handwashing or sanitizing for all staff, especially before and after patient contact</li>
<li><strong>PPE (Personal Protective Equipment):</strong> Proper use of gloves, masks, and gowns</li>
<li><strong>Sterilization of Equipment:</strong> All medical tools must be sterilized after each use using portable autoclaves</li>
<li><strong>Waste Management:</strong> Medical waste must be handled according to CDC guidelines</li>
</ul>
<h3>Emergency Preparedness</h3>
<p>Haiti is prone to natural disasters. Each clinic must have:</p>
<ul>
<li>Evacuation plans with clear routes and procedures</li>
<li>Supply backups including emergency medical supplies, water, and food</li>
<li>Communication plans with satellite phones for emergencies</li>
</ul>
<h3>Staff Training</h3>
<p>All staff undergo comprehensive training including:</p>
<ul>
<li>Initial training in infection control, waste management, and emergency procedures</li>
<li>Ongoing refresher courses</li>
<li>Monthly safety drills</li>
</ul>
<h2>2.2 Compliance with Health Regulations</h2>
<h3>Key Legal Frameworks in Haiti</h3>
<ul>
<li><strong>Medical Licensure:</strong> All healthcare providers must be licensed by the MSPP</li>
<li><strong>Patient Confidentiality:</strong> Strict data protection protocols similar to HIPAA standards</li>
<li><strong>Public Health Reporting:</strong> Timely reporting of disease outbreaks to local authorities</li>
</ul>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-en.pdf" download class="underline">Download full guide (PDF)</a></p>`
    },
    {
      id: "share_ch2_fr",
      course_id: "share_clinical_guide",
      locale: "fr",
      order: 2,
      title: "Chapitre 2 : Assurer la sécurité et la conformité dans les cliniques mobiles",
      contentType: "html",
      htmlBody: `<h2>2.1 Protocoles de sécurité au travail</h2>
<p>Les protocoles de sécurité sont essentiels dans les cliniques mobiles, où les risques sont souvent plus élevés en raison du travail dans des environnements non standard.</p>
<h3>Contrôle des infections</h3>
<ul>
<li><strong>Hygiène des mains:</strong> Lavage fréquent des mains ou désinfection</li>
<li><strong>EPI (Équipement de protection individuelle):</strong> Utilisation appropriée des gants, masques et blouses</li>
<li><strong>Stérilisation de l'équipement:</strong> Tous les outils médicaux doivent être stérilisés</li>
<li><strong>Gestion des déchets:</strong> Manipulation selon les directives du CDC</li>
</ul>
<h2>2.2 Conformité aux réglementations sanitaires</h2>
<h3>Cadres juridiques clés en Haïti</h3>
<ul>
<li><strong>Licence médicale:</strong> Tous les prestataires doivent être autorisés par le MSPP</li>
<li><strong>Confidentialité des patients:</strong> Protocoles stricts de protection des données</li>
<li><strong>Rapport de santé publique:</strong> Déclaration rapide des épidémies</li>
</ul>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-fr.pdf" download class="underline">Télécharger le guide complet (PDF)</a></p>`
    },
    {
      id: "share_ch3_en",
      course_id: "share_clinical_guide",
      locale: "en",
      order: 3,
      title: "Chapter 3: Role-Specific Training in Mobile Clinics",
      contentType: "html",
      htmlBody: `<h2>3.1 Healthcare Professionals: Physicians</h2>
<h3>Diagnostics in Resource-Limited Settings</h3>
<p>Physicians working in mobile clinics face unique challenges. In resource-limited environments, reliance on basic clinical skills is paramount.</p>
<h4>Critical Clinical Skills</h4>
<ol>
<li><strong>Physical Examination Skills:</strong> Thorough physical exams including palpation, percussion, auscultation, and observation are critical when advanced diagnostic tools are unavailable</li>
<li><strong>History-Taking Skills:</strong> Detailed patient histories are essential when medical records are unavailable</li>
<li><strong>Use of Basic Diagnostic Tools:</strong> Stethoscopes, blood pressure monitors, thermometers, and rapid diagnostic tests (RDTs) become key assets</li>
</ol>
<h3>Managing Chronic Diseases</h3>
<p>Chronic diseases such as hypertension, diabetes, and HIV/AIDS require long-term management strategies adapted to mobile clinic settings.</p>
<h3>Emergency and Trauma Care</h3>
<p>Mobile clinics often serve as the first point of contact for emergency care. Physicians must be prepared to:</p>
<ul>
<li>Stabilize trauma patients</li>
<li>Manage acute conditions</li>
<li>Make rapid referral decisions</li>
</ul>
<h2>3.2 Nurses and Community Health Workers</h2>
<h3>Clinical Skills for Nurses</h3>
<ul>
<li>Wound care and infection prevention</li>
<li>Vaccination and cold-chain management</li>
<li>Maternal and child health services</li>
<li>Patient education and follow-up</li>
</ul>
<h3>Role of Community Health Workers (CHWs)</h3>
<p>CHWs serve as vital links between communities and the healthcare system:</p>
<ul>
<li>First point of contact for many rural communities</li>
<li>Health education and disease prevention</li>
<li>Basic diagnostics and referrals</li>
<li>Follow-up care and patient tracking</li>
</ul>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-en.pdf" download class="underline">Download full guide (PDF)</a></p>`
    },
    {
      id: "share_ch3_fr",
      course_id: "share_clinical_guide",
      locale: "fr",
      order: 3,
      title: "Chapitre 3 : Formation spécifique au rôle dans les cliniques mobiles",
      contentType: "html",
      htmlBody: `<h2>3.1 Professionnels de la santé : Médecins</h2>
<h3>Diagnostics dans des contextes à ressources limitées</h3>
<p>Les médecins travaillant dans les cliniques mobiles font face à des défis uniques. La dépendance aux compétences cliniques de base est primordiale.</p>
<h2>3.2 Infirmières et agents de santé communautaire</h2>
<h3>Compétences cliniques pour les infirmières</h3>
<ul>
<li>Soins des plaies et prévention des infections</li>
<li>Vaccination et gestion de la chaîne du froid</li>
<li>Services de santé maternelle et infantile</li>
</ul>
<h3>Rôle des agents de santé communautaire (ASC)</h3>
<p>Les ASC servent de liens vitaux entre les communautés et le système de santé.</p>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-fr.pdf" download class="underline">Télécharger le guide complet (PDF)</a></p>`
    },
    {
      id: "share_ch4_en",
      course_id: "share_clinical_guide",
      locale: "en",
      order: 4,
      title: "Chapter 4: Patient Interaction and Cultural Competency",
      contentType: "html",
      htmlBody: `<h2>4.1 Culturally Sensitive Care in Haiti</h2>
<h3>Respect for Traditional Healing Methods</h3>
<p>Many Haitians rely on traditional healers and herbal remedies alongside modern medicine. Healthcare providers must:</p>
<ul>
<li>Acknowledge and respect traditional practices</li>
<li>Build bridges between traditional and modern medicine</li>
<li>Avoid dismissing cultural beliefs</li>
</ul>
<h3>Religious Beliefs and Cultural Practices</h3>
<p>Vodou and Christianity play significant roles in Haitian culture. Healthcare providers should:</p>
<ul>
<li>Understand religious and cultural contexts</li>
<li>Respect spiritual beliefs in healthcare decisions</li>
<li>Integrate cultural sensitivity into care delivery</li>
</ul>
<h3>Building Trust and Rapport</h3>
<p>Trust is essential for effective healthcare delivery. Strategies include:</p>
<ul>
<li>Consistent presence in communities</li>
<li>Employing local healthcare workers</li>
<li>Transparent communication</li>
<li>Community engagement and participation</li>
</ul>
<h2>4.2 Effective Communication with Patients</h2>
<h3>Language Barriers and Clear Explanations</h3>
<p>Haiti is a bilingual nation (French and Haitian Creole). Healthcare providers must:</p>
<ul>
<li>Use interpreters when necessary</li>
<li>Communicate in simple, clear language</li>
<li>Verify patient understanding</li>
</ul>
<h3>Addressing Health Literacy</h3>
<p>Many patients may have limited health literacy. Effective strategies include:</p>
<ul>
<li>Visual aids and demonstrations</li>
<li>Simplified explanations</li>
<li>Teach-back methods to confirm understanding</li>
<li>Written materials in appropriate languages</li>
</ul>
<h3>Family Involvement and Gender Sensitivity</h3>
<ul>
<li>Recognize the importance of family in healthcare decisions</li>
<li>Respect gender dynamics and cultural norms</li>
<li>Provide appropriate privacy and same-gender providers when requested</li>
</ul>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-en.pdf" download class="underline">Download full guide (PDF)</a></p>`
    },
    {
      id: "share_ch4_fr",
      course_id: "share_clinical_guide",
      locale: "fr",
      order: 4,
      title: "Chapitre 4 : Interaction avec les patients et compétence culturelle",
      contentType: "html",
      htmlBody: `<h2>4.1 Soins culturellement sensibles en Haïti</h2>
<h3>Respect des méthodes de guérison traditionnelles</h3>
<p>De nombreux Haïtiens s'appuient sur des guérisseurs traditionnels et des remèdes à base de plantes parallèlement à la médecine moderne.</p>
<h3>Croyances religieuses et pratiques culturelles</h3>
<p>Le Vodou et le christianisme jouent des rôles importants dans la culture haïtienne.</p>
<h2>4.2 Communication efficace avec les patients</h2>
<h3>Barrières linguistiques</h3>
<p>Haïti est une nation bilingue (français et créole haïtien). Les prestataires doivent utiliser des interprètes si nécessaire.</p>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-fr.pdf" download class="underline">Télécharger le guide complet (PDF)</a></p>`
    },
    {
      id: "share_ch5_en",
      course_id: "share_clinical_guide",
      locale: "en",
      order: 5,
      title: "Chapter 5: Technology and Tools in Mobile Clinics",
      contentType: "html",
      htmlBody: `<h2>5.1 Integrating Telemedicine in Haiti</h2>
<h3>Remote Consultations and Access to Specialists</h3>
<p>Telemedicine allows mobile clinics to connect with specialists in urban centers or internationally, providing:</p>
<ul>
<li>Expert consultations for complex cases</li>
<li>Second opinions and diagnostic support</li>
<li>Continuing education for local providers</li>
</ul>
<h3>Telemedicine in Disaster Response</h3>
<p>During natural disasters, telemedicine becomes critical for:</p>
<ul>
<li>Rapid assessment of medical needs</li>
<li>Coordination of emergency response</li>
<li>Mental health support</li>
</ul>
<h3>Overcoming Telemedicine Challenges</h3>
<p>Challenges in Haiti include:</p>
<ul>
<li>Limited internet connectivity</li>
<li>Power supply issues</li>
<li>Equipment maintenance</li>
</ul>
<p>Solutions: Satellite internet, solar power, robust equipment selection</p>
<h2>5.2 Electronic Health Records (EHR) and Data Management</h2>
<h3>Mobile-Friendly EHR Platforms</h3>
<p>EHR systems for mobile clinics must be:</p>
<ul>
<li>Accessible on tablets and smartphones</li>
<li>Functional offline with synchronization capabilities</li>
<li>User-friendly for staff with varying technical skills</li>
<li>Compliant with data protection standards</li>
</ul>
<h3>Data Security and Confidentiality</h3>
<p>Critical considerations:</p>
<ul>
<li>Encryption of patient data</li>
<li>Access controls and authentication</li>
<li>Regular backups</li>
<li>Compliance with local and international privacy laws</li>
</ul>
<h2>5.3 Diagnostic Tools in Mobile Clinics</h2>
<h3>Portable Diagnostic Equipment</h3>
<ul>
<li>Portable ultrasound machines</li>
<li>Point-of-care testing devices</li>
<li>Rapid diagnostic tests (RDTs)</li>
<li>Portable X-ray equipment</li>
</ul>
<h3>Maintenance and Power Solutions</h3>
<p>Ensuring equipment reliability through:</p>
<ul>
<li>Regular preventive maintenance</li>
<li>Solar power systems</li>
<li>Battery backup solutions</li>
<li>Training staff in basic troubleshooting</li>
</ul>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-en.pdf" download class="underline">Download full guide (PDF)</a></p>`
    },
    {
      id: "share_ch5_fr",
      course_id: "share_clinical_guide",
      locale: "fr",
      order: 5,
      title: "Chapitre 5 : Technologie et outils dans les cliniques mobiles",
      contentType: "html",
      htmlBody: `<h2>5.1 Intégration de la télémédecine en Haïti</h2>
<p>La télémédecine permet aux cliniques mobiles de se connecter avec des spécialistes dans les centres urbains ou à l'international.</p>
<h2>5.2 Dossiers de santé électroniques (DSE) et gestion des données</h2>
<p>Les systèmes DSE pour les cliniques mobiles doivent être accessibles sur tablettes et smartphones, fonctionnels hors ligne.</p>
<h2>5.3 Outils de diagnostic dans les cliniques mobiles</h2>
<ul>
<li>Machines à ultrasons portables</li>
<li>Dispositifs de test au point de service</li>
<li>Tests de diagnostic rapide (TDR)</li>
</ul>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-fr.pdf" download class="underline">Télécharger le guide complet (PDF)</a></p>`
    },
    {
      id: "share_ch6_en",
      course_id: "share_clinical_guide",
      locale: "en",
      order: 6,
      title: "Chapter 6: Sustainable Health Practices in Mobile Clinics",
      contentType: "html",
      htmlBody: `<h2>6.1 Implementing Sustainable Healthcare Solutions</h2>
<h3>Long-Term Health Education</h3>
<p>Sustainable healthcare requires empowering communities with knowledge:</p>
<ul>
<li>Preventive health education programs</li>
<li>Nutrition and hygiene training</li>
<li>Disease prevention strategies</li>
<li>Family planning and reproductive health</li>
</ul>
<h3>Preventive Care</h3>
<p>Focus on prevention rather than just treatment:</p>
<ul>
<li>Vaccination programs</li>
<li>Maternal and child health services</li>
<li>Screening for chronic diseases</li>
<li>Health promotion campaigns</li>
</ul>
<h2>6.2 Sustainable Practices in Resource Management</h2>
<h3>Local Sourcing of Supplies</h3>
<p>Benefits of local sourcing:</p>
<ul>
<li>Reduced transportation costs and carbon footprint</li>
<li>Support for local economy</li>
<li>Better supply chain reliability</li>
<li>Cultural appropriateness of materials</li>
</ul>
<h3>Reducing Waste and Energy Use</h3>
<ul>
<li>Proper waste segregation and disposal</li>
<li>Reusable medical equipment when appropriate</li>
<li>Solar power and renewable energy</li>
<li>Water conservation and purification</li>
</ul>
<h2>6.3 Building Local Capacity for Long-Term Health Management</h2>
<h3>Training Healthcare Workers</h3>
<p>Key components:</p>
<ul>
<li>On-the-job training for medical professionals</li>
<li>Specialized training for Community Health Workers</li>
<li>Leadership and management training</li>
<li>Continuous professional development</li>
</ul>
<h2>6.4 Sustainability and Health Outcomes</h2>
<h3>Key Health Outcome Indicators</h3>
<ol>
<li><strong>Reduction in Infectious Diseases:</strong> Tracking cholera, tuberculosis, malaria, HIV/AIDS</li>
<li><strong>Improved Maternal and Child Health:</strong> Reduced mortality rates, better nutrition</li>
<li><strong>Increased Vaccination Coverage:</strong> Meeting WHO targets</li>
<li><strong>Chronic Disease Management:</strong> Better control of hypertension, diabetes</li>
</ol>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-en.pdf" download class="underline">Download full guide (PDF)</a></p>`
    },
    {
      id: "share_ch6_fr",
      course_id: "share_clinical_guide",
      locale: "fr",
      order: 6,
      title: "Chapitre 6 : Pratiques de santé durable dans les cliniques mobiles",
      contentType: "html",
      htmlBody: `<h2>6.1 Mise en œuvre de solutions de soins de santé durables</h2>
<h3>Éducation sanitaire à long terme</h3>
<p>Des soins de santé durables nécessitent l'autonomisation des communautés par le savoir.</p>
<h2>6.2 Pratiques durables dans la gestion des ressources</h2>
<ul>
<li>Approvisionnement local des fournitures</li>
<li>Réduction des déchets et de la consommation d'énergie</li>
</ul>
<h2>6.3 Renforcement des capacités locales</h2>
<p>Formation des agents de santé et développement du leadership.</p>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-fr.pdf" download class="underline">Télécharger le guide complet (PDF)</a></p>`
    },
    {
      id: "share_ch7_en",
      course_id: "share_clinical_guide",
      locale: "en",
      order: 7,
      title: "Chapter 7: Governance and Legal Framework",
      contentType: "html",
      htmlBody: `<h2>7.1 Legal Compliance in Healthcare Delivery</h2>
<p>Healthcare delivery in mobile settings must comply with local and international laws and standards. SHARE operates within Haiti's legal framework, adhering to MSPP regulations and international guidelines from WHO and CDC.</p>
<h3>Key Legal Considerations</h3>
<h4>Informed Consent</h4>
<ul>
<li>Patients must understand treatments and procedures</li>
<li>Consent must be voluntary and documented</li>
<li>Special considerations for minors and vulnerable populations</li>
<li>Cultural sensitivity in consent processes</li>
</ul>
<h4>Medical Licensing</h4>
<ul>
<li>All providers must be properly licensed by MSPP</li>
<li>International volunteers require appropriate authorization</li>
<li>Maintenance of professional credentials</li>
</ul>
<h4>Patient Confidentiality</h4>
<ul>
<li>Strict data protection protocols</li>
<li>Secure storage of medical records</li>
<li>Limited access to patient information</li>
<li>Compliance with privacy laws</li>
</ul>
<h2>7.2 Governance and Accountability in Mobile Clinics</h2>
<h3>Financial Accountability</h3>
<ul>
<li>Transparent budgeting and reporting</li>
<li>Regular financial audits</li>
<li>Efficient resource allocation</li>
<li>Donor accountability</li>
</ul>
<h3>Monitoring and Evaluation (M&E) Framework</h3>
<p>Essential components:</p>
<ul>
<li>Regular data collection and analysis</li>
<li>Performance indicators tracking</li>
<li>Quality improvement initiatives</li>
<li>Impact assessments</li>
</ul>
<h2>7.3 Risk Management and Emergency Preparedness</h2>
<h3>Natural Disasters</h3>
<p>Haiti faces hurricanes, earthquakes, and floods. Preparedness includes:</p>
<ul>
<li>Emergency response plans</li>
<li>Supply stockpiles</li>
<li>Evacuation procedures</li>
<li>Communication protocols</li>
</ul>
<h3>Contingency Planning for Disease Outbreaks</h3>
<ul>
<li>Surveillance systems</li>
<li>Rapid response capabilities</li>
<li>Infection control protocols</li>
<li>Coordination with health authorities</li>
</ul>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-en.pdf" download class="underline">Download full guide (PDF)</a></p>`
    },
    {
      id: "share_ch7_fr",
      course_id: "share_clinical_guide",
      locale: "fr",
      order: 7,
      title: "Chapitre 7 : Gouvernance et cadre juridique",
      contentType: "html",
      htmlBody: `<h2>7.1 Conformité juridique dans la prestation de soins de santé</h2>
<p>SHARE opère dans le cadre juridique haïtien, en respectant les réglementations du MSPP et les directives internationales.</p>
<h3>Considérations juridiques clés</h3>
<ul>
<li>Consentement éclairé</li>
<li>Licence médicale</li>
<li>Confidentialité des patients</li>
</ul>
<h2>7.2 Gouvernance et responsabilité</h2>
<ul>
<li>Responsabilité financière</li>
<li>Cadre de suivi et évaluation</li>
</ul>
<h2>7.3 Gestion des risques et préparation aux urgences</h2>
<p>Haïti fait face aux ouragans, tremblements de terre et inondations.</p>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-fr.pdf" download class="underline">Télécharger le guide complet (PDF)</a></p>`
    },
    {
      id: "share_ch8_en",
      course_id: "share_clinical_guide",
      locale: "en",
      order: 8,
      title: "Chapter 8: Training and Capacity Building",
      contentType: "html",
      htmlBody: `<h2>8.1 Developing Healthcare Workforce through Training</h2>
<h3>Clinical Skills Development</h3>
<p>Comprehensive training programs covering:</p>
<ul>
<li>Basic and advanced clinical procedures</li>
<li>Emergency and trauma care</li>
<li>Maternal and child health</li>
<li>Chronic disease management</li>
<li>Infection prevention and control</li>
</ul>
<h3>Leadership and Management Training</h3>
<p>Preparing local leaders to manage healthcare operations:</p>
<ul>
<li>Team management and supervision</li>
<li>Resource allocation and budgeting</li>
<li>Quality assurance and improvement</li>
<li>Strategic planning</li>
<li>Community engagement</li>
</ul>
<h2>8.2 Continuous Professional Development (CPD)</h2>
<h3>Workshops, Seminars, and E-learning</h3>
<ul>
<li>Regular training sessions on new techniques and protocols</li>
<li>Online learning platforms for flexible education</li>
<li>Certification programs</li>
<li>Specialty training opportunities</li>
</ul>
<h3>Peer Learning and Mentorship</h3>
<p>Building a culture of continuous learning:</p>
<ul>
<li>Experienced practitioners mentoring newer staff</li>
<li>Case study discussions</li>
<li>Inter-professional learning</li>
<li>Knowledge sharing forums</li>
</ul>
<h2>8.3 Building Local Leadership for Sustainable Healthcare Delivery</h2>
<h3>Identifying and Nurturing Leaders</h3>
<ul>
<li>Leadership assessment and development programs</li>
<li>Succession planning</li>
<li>Empowering local decision-making</li>
<li>Creating pathways for advancement</li>
</ul>
<h3>Community Health Worker Programs</h3>
<p>CHWs are essential for sustainable healthcare:</p>
<ul>
<li>Recruitment from local communities</li>
<li>Comprehensive training programs</li>
<li>Ongoing support and supervision</li>
<li>Integration with formal healthcare system</li>
</ul>
<h3>Building Institutional Capacity</h3>
<ul>
<li>Strengthening local health institutions</li>
<li>Developing training facilities</li>
<li>Creating sustainable funding mechanisms</li>
<li>Establishing quality standards and protocols</li>
</ul>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-en.pdf" download class="underline">Download full guide (PDF)</a></p>`
    },
    {
      id: "share_ch8_fr",
      course_id: "share_clinical_guide",
      locale: "fr",
      order: 8,
      title: "Chapitre 8 : Formation et renforcement des capacités",
      contentType: "html",
      htmlBody: `<h2>8.1 Développement du personnel de santé par la formation</h2>
<h3>Développement des compétences cliniques</h3>
<p>Programmes de formation complets couvrant les procédures cliniques de base et avancées.</p>
<h3>Formation en leadership et gestion</h3>
<p>Préparation des leaders locaux à gérer les opérations de soins de santé.</p>
<h2>8.2 Développement professionnel continu (DPC)</h2>
<ul>
<li>Ateliers, séminaires et apprentissage en ligne</li>
<li>Apprentissage par les pairs et mentorat</li>
</ul>
<h2>8.3 Renforcement du leadership local</h2>
<p>Programmes de développement du leadership et des agents de santé communautaire.</p>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-fr.pdf" download class="underline">Télécharger le guide complet (PDF)</a></p>`
    },
    {
      id: "share_ch9_en",
      course_id: "share_clinical_guide",
      locale: "en",
      order: 9,
      title: "Chapter 9: Conclusion and Future Directions",
      contentType: "html",
      htmlBody: `<h2>9.1 Conclusion: Achieving Sustainable Healthcare in Haiti</h2>
<p>SHARE's approach to mobile clinic operations represents a comprehensive model for delivering sustainable healthcare in resource-limited settings. Through a combination of direct service delivery, education, capacity building, and community engagement, SHARE is working to create lasting improvements in health outcomes across Haiti.</p>
<h3>Key Achievements</h3>
<ul>
<li>Expanded access to healthcare in underserved communities</li>
<li>Strengthened local healthcare workforce capacity</li>
<li>Improved health indicators in target populations</li>
<li>Built sustainable healthcare infrastructure</li>
<li>Fostered community ownership of health programs</li>
</ul>
<h2>9.2 Future Directions: Expanding the Impact of Mobile Clinics</h2>
<h3>Expanding Geographic Reach</h3>
<p>Plans for growth include:</p>
<ul>
<li>Increasing number of mobile clinic units</li>
<li>Reaching more remote and isolated communities</li>
<li>Establishing permanent satellite health posts</li>
<li>Creating regional hubs for specialized services</li>
</ul>
<h3>Telemedicine and Diagnostic Innovations</h3>
<p>Leveraging technology for greater impact:</p>
<ul>
<li>Advanced telemedicine platforms</li>
<li>Artificial intelligence for diagnostics</li>
<li>Mobile health (mHealth) applications</li>
<li>Improved data analytics for program planning</li>
</ul>
<h3>Global Partnerships</h3>
<p>Strengthening international collaboration:</p>
<ul>
<li>Academic partnerships for research and training</li>
<li>Technology transfer from global health leaders</li>
<li>Sustainable funding mechanisms</li>
<li>Knowledge exchange with other mobile clinic programs</li>
</ul>
<h2>9.3 Ensuring the Future of Sustainable Healthcare Delivery</h2>
<h3>Long-Term Sustainability Strategies</h3>
<ul>
<li>Transitioning leadership to local professionals</li>
<li>Developing local funding sources</li>
<li>Integrating with national health systems</li>
<li>Building resilient supply chains</li>
<li>Creating measurable impact frameworks</li>
</ul>
<h3>Call to Action</h3>
<p>Achieving sustainable healthcare in Haiti requires continued commitment from all stakeholders:</p>
<ul>
<li>Healthcare professionals: Continue your dedication to excellence and compassion</li>
<li>Community members: Take ownership of your health and support local health initiatives</li>
<li>Partners and donors: Maintain long-term commitments to sustainable development</li>
<li>Policy makers: Create enabling environments for mobile health programs</li>
</ul>
<p>Together, we can transform healthcare delivery in Haiti and create a model for sustainable health systems worldwide.</p>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-en.pdf" download class="underline">Download full guide (PDF)</a></p>`
    },
    {
      id: "share_ch9_fr",
      course_id: "share_clinical_guide",
      locale: "fr",
      order: 9,
      title: "Chapitre 9 : Conclusion et directions futures",
      contentType: "html",
      htmlBody: `<h2>9.1 Conclusion : Atteindre des soins de santé durables en Haïti</h2>
<p>L'approche de SHARE en matière d'opérations de clinique mobile représente un modèle complet pour offrir des soins de santé durables dans des contextes à ressources limitées.</p>
<h3>Réalisations clés</h3>
<ul>
<li>Accès élargi aux soins de santé dans les communautés mal desservies</li>
<li>Renforcement des capacités du personnel de santé local</li>
<li>Amélioration des indicateurs de santé</li>
</ul>
<h2>9.2 Directions futures : Élargir l'impact des cliniques mobiles</h2>
<h3>Élargissement de la portée géographique</h3>
<p>Plans de croissance incluant l'augmentation du nombre d'unités de clinique mobile.</p>
<h3>Innovations en télémédecine et diagnostic</h3>
<p>Exploitation de la technologie pour un impact plus grand.</p>
<h3>Partenariats mondiaux</h3>
<p>Renforcement de la collaboration internationale.</p>
<h2>9.3 Assurer l'avenir de la prestation de soins de santé durables</h2>
<p>Ensemble, nous pouvons transformer la prestation de soins de santé en Haïti et créer un modèle pour des systèmes de santé durables dans le monde entier.</p>
<p class="text-sm text-muted-foreground mt-6"><a href="/documents/share-guide-fr.pdf" download class="underline">Télécharger le guide complet (PDF)</a></p>`
    }
  ],
  quizzes: [
    {
      id: "aptitude_test_general",
      course_id: null,
      title_en: "General Aptitude Assessment",
      title_fr: "Évaluation générale d'aptitude",
      timeLimitSec: 3600,
      passingScore: 60
    },
    {
      id: "ori_qz_main",
      course_id: "orientation_common",
      title_en: "Orientation Knowledge Check",
      title_fr: "Vérification des connaissances — Orientation",
      timeLimitSec: 900,
      passingScore: 70
    },
    {
      id: "doctor_qz_main",
      course_id: "doctor_track",
      title_en: "Physician Aptitude & Scenarios",
      title_fr: "Aptitude & scénarios — Médecins",
      timeLimitSec: 3000,
      passingScore: 70
    },
    {
      id: "nurse_qz_main",
      course_id: "nurse_track",
      title_en: "Nursing Aptitude & Scenarios",
      title_fr: "Aptitude & scénarios — Infirmiers/ères",
      timeLimitSec: 2400,
      passingScore: 70
    },
    {
      id: "driver_qz_main",
      course_id: "driver_track",
      title_en: "Driver Knowledge & Safety",
      title_fr: "Connaissances & sécurité — Chauffeurs",
      timeLimitSec: 2400,
      passingScore: 70
    },
    {
      id: "manager_qz_main",
      course_id: "manager_track",
      title_en: "Leadership, Finance & Ops",
      title_fr: "Leadership, finances & opérations",
      timeLimitSec: 3000,
      passingScore: 70
    },
    {
      id: "security_qz_main",
      course_id: "security_track",
      title_en: "Security Protocols & Judgment",
      title_fr: "Protocoles de sécurité & jugement",
      timeLimitSec: 2400,
      passingScore: 70
    }
  ],
  questions: [
    // ========== APTITUDE TEST QUESTIONS (32 total) ==========
    // Cognitive Abilities - Pattern Recognition & Memory (5 MCQ)
    {
      id: "apt_q1",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "Complete the sequence: 2, 4, 8, 16, ___",
      prompt_fr: "Complétez la séquence : 2, 4, 8, 16, ___",
      options_en: ["20", "24", "32", "64"],
      options_fr: ["20", "24", "32", "64"],
      answer_index: 2
    },
    {
      id: "apt_q2",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "Which word does NOT belong? Apple, Banana, Carrot, Orange",
      prompt_fr: "Quel mot ne convient pas ? Pomme, Banane, Carotte, Orange",
      options_en: ["Apple", "Banana", "Carrot", "Orange"],
      options_fr: ["Pomme", "Banane", "Carotte", "Orange"],
      answer_index: 2
    },
    {
      id: "apt_q3",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "If 'MOBILE' is coded as 'OQFKNG', what is 'CLINIC' coded as?",
      prompt_fr: "Si 'MOBILE' est codé 'OQFKNG', comment est codé 'CLINIC' ?",
      options_en: ["ENKPKE", "FNKPKE", "ENKOKG", "DNKOKE"],
      options_fr: ["ENKPKE", "FNKPKE", "ENKOKG", "DNKOKE"],
      answer_index: 1
    },
    {
      id: "apt_q4",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "A patient list has 5 names. After adding 3 and removing 2, how many remain?",
      prompt_fr: "Une liste de patients a 5 noms. Après en ajouter 3 et en retirer 2, combien reste-t-il ?",
      options_en: ["4", "5", "6", "8"],
      options_fr: ["4", "5", "6", "8"],
      answer_index: 2
    },
    {
      id: "apt_q5",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "Read this once: 'Patient X needs medication at 8 AM, 2 PM, 8 PM daily.' When is the second dose?",
      prompt_fr: "Lisez une fois : 'Patient X a besoin de médicaments à 8h, 14h, 20h par jour.' Quand est la deuxième dose ?",
      options_en: ["8 AM", "2 PM", "8 PM", "Next day 8 AM"],
      options_fr: ["8h", "14h", "20h", "8h le lendemain"],
      answer_index: 1
    },

    // Critical Thinking - Problem Analysis & Logic (5 MCQ + 2 T/F + 1 Short)
    {
      id: "apt_q6",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "Two clinics serve 200 patients total. Clinic A serves 60 more than Clinic B. How many does B serve?",
      prompt_fr: "Deux cliniques servent 200 patients au total. Clinique A sert 60 de plus que B. Combien B sert-elle ?",
      options_en: ["60", "70", "80", "140"],
      options_fr: ["60", "70", "80", "140"],
      answer_index: 1
    },
    {
      id: "apt_q7",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "If all doctors are trained and some trained people are nurses, which MUST be true?",
      prompt_fr: "Si tous les médecins sont formés et certaines personnes formées sont infirmières, lequel est VRAI ?",
      options_en: ["All nurses are doctors", "Some nurses are doctors", "All trained people are doctors", "Some doctors might not be trained"],
      options_fr: ["Tous les infirmiers sont médecins", "Certains infirmiers sont médecins", "Toutes les personnes formées sont médecins", "Certains médecins peuvent ne pas être formés"],
      answer_index: 1
    },
    {
      id: "apt_q8",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "You have 3 urgent tasks: restocking (15 min), patient call (5 min), report due in 10 min. Best order?",
      prompt_fr: "3 tâches urgentes : réapprovisionnement (15 min), appel patient (5 min), rapport dû dans 10 min. Meilleur ordre ?",
      options_en: ["Restock → Call → Report", "Call → Report → Restock", "Report → Restock → Call", "Call → Restock → Report"],
      options_fr: ["Réappro → Appel → Rapport", "Appel → Rapport → Réappro", "Rapport → Réappro → Appel", "Appel → Réappro → Rapport"],
      answer_index: 1
    },
    {
      id: "apt_q9",
      quiz_id: "aptitude_test_general",
      type: "truefalse",
      prompt_en: "When facing multiple emergencies, always address the loudest person first.",
      prompt_fr: "Face à plusieurs urgences, toujours traiter d'abord la personne la plus bruyante.",
      answer: false
    },
    {
      id: "apt_q10",
      quiz_id: "aptitude_test_general",
      type: "truefalse",
      prompt_en: "Good decision-making requires considering both immediate and long-term consequences.",
      prompt_fr: "Une bonne prise de décision nécessite de considérer les conséquences immédiates et à long terme.",
      answer: true
    },
    {
      id: "apt_q11",
      quiz_id: "aptitude_test_general",
      type: "short",
      prompt_en: "A mobile clinic has limited vaccine doses. Describe how you would prioritize distribution among different age groups.",
      prompt_fr: "Une clinique mobile a des doses limitées de vaccin. Décrivez comment vous prioriseriez la distribution entre différents groupes d'âge."
    },

    // Technical Skills - Healthcare & Safety (3 MCQ + 3 T/F + 1 Short)
    {
      id: "apt_q12",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "What is the correct order for handwashing in a clinical setting?",
      prompt_fr: "Quel est l'ordre correct pour le lavage des mains en milieu clinique ?",
      options_en: [
        "Wet → Soap → Rinse → Dry",
        "Soap → Wet → Rinse → Dry",
        "Wet → Soap → Scrub 20 sec → Rinse → Dry",
        "Dry → Wet → Soap → Rinse"
      ],
      options_fr: [
        "Mouiller → Savon → Rincer → Sécher",
        "Savon → Mouiller → Rincer → Sécher",
        "Mouiller → Savon → Frotter 20 sec → Rincer → Sécher",
        "Sécher → Mouiller → Savon → Rincer"
      ],
      answer_index: 2
    },
    {
      id: "apt_q13",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "A patient shows signs of severe dehydration. What is the FIRST priority?",
      prompt_fr: "Un patient montre des signes de déshydratation sévère. Quelle est la PREMIÈRE priorité ?",
      options_en: ["Document in chart", "Start oral rehydration", "Assess vital signs and consciousness", "Call family"],
      options_fr: ["Documenter dans le dossier", "Commencer réhydratation orale", "Évaluer constantes et conscience", "Appeler la famille"],
      answer_index: 2
    },
    {
      id: "apt_q14",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "What does PPE stand for in healthcare?",
      prompt_fr: "Que signifie EPI dans le domaine de la santé ?",
      options_en: ["Personal Protection Equipment", "Patient Privacy Enforcement", "Prescribed Pharmaceutical Entry", "Public Protection Environment"],
      options_fr: ["Équipement de Protection Individuelle", "Protection de la vie privée du patient", "Entrée pharmaceutique prescrite", "Environnement de protection publique"],
      answer_index: 0
    },
    {
      id: "apt_q15",
      quiz_id: "aptitude_test_general",
      type: "truefalse",
      prompt_en: "Patient confidentiality must be maintained even when discussing cases with colleagues.",
      prompt_fr: "La confidentialité du patient doit être maintenue même lors de discussions avec des collègues.",
      answer: true
    },
    {
      id: "apt_q16",
      quiz_id: "aptitude_test_general",
      type: "truefalse",
      prompt_en: "It's acceptable to skip safety protocols when time is limited.",
      prompt_fr: "Il est acceptable de sauter les protocoles de sécurité quand le temps est limité.",
      answer: false
    },
    {
      id: "apt_q17",
      quiz_id: "aptitude_test_general",
      type: "truefalse",
      prompt_en: "All medical waste should be disposed of in regular trash bins.",
      prompt_fr: "Tous les déchets médicaux doivent être jetés dans les poubelles ordinaires.",
      answer: false
    },
    {
      id: "apt_q18",
      quiz_id: "aptitude_test_general",
      type: "short",
      prompt_en: "List three essential items that should be checked before starting a mobile clinic day.",
      prompt_fr: "Énumérez trois éléments essentiels qui doivent être vérifiés avant de commencer une journée de clinique mobile."
    },

    // Communication & Professionalism (2 MCQ + 2 T/F + 2 Short)
    {
      id: "apt_q19",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "A patient is upset about wait times. Best response?",
      prompt_fr: "Un patient est contrarié par les temps d'attente. Meilleure réponse ?",
      options_en: [
        "Ignore them",
        "Tell them to wait like everyone else",
        "Acknowledge concern, explain process, provide timeline",
        "Send them away"
      ],
      options_fr: [
        "Les ignorer",
        "Leur dire d'attendre comme tout le monde",
        "Reconnaître leur préoccupation, expliquer le processus, donner un délai",
        "Les renvoyer"
      ],
      answer_index: 2
    },
    {
      id: "apt_q20",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "When communicating with a team member who made an error, you should:",
      prompt_fr: "Lors de la communication avec un membre de l'équipe qui a fait une erreur, vous devez :",
      options_en: [
        "Call them out publicly",
        "Discuss privately and constructively",
        "Report to management immediately",
        "Ignore the error"
      ],
      options_fr: [
        "Le dénoncer publiquement",
        "Discuter en privé et de manière constructive",
        "Signaler à la direction immédiatement",
        "Ignorer l'erreur"
      ],
      answer_index: 1
    },
    {
      id: "apt_q21",
      quiz_id: "aptitude_test_general",
      type: "truefalse",
      prompt_en: "Professional communication includes active listening and confirming understanding.",
      prompt_fr: "La communication professionnelle inclut l'écoute active et la confirmation de la compréhension.",
      answer: true
    },
    {
      id: "apt_q22",
      quiz_id: "aptitude_test_general",
      type: "truefalse",
      prompt_en: "It's appropriate to use social media to discuss interesting patient cases.",
      prompt_fr: "Il est approprié d'utiliser les réseaux sociaux pour discuter de cas de patients intéressants.",
      answer: false
    },
    {
      id: "apt_q23",
      quiz_id: "aptitude_test_general",
      type: "short",
      prompt_en: "Explain how you would communicate bad news to a patient's family member.",
      prompt_fr: "Expliquez comment vous communiqueriez une mauvaise nouvelle à un membre de la famille d'un patient."
    },
    {
      id: "apt_q24",
      quiz_id: "aptitude_test_general",
      type: "short",
      prompt_en: "Describe a professional way to disagree with a supervisor's decision.",
      prompt_fr: "Décrivez une manière professionnelle de ne pas être d'accord avec la décision d'un superviseur."
    },

    // Situational Judgment - Ethics & Teamwork (3 MCQ + 3 T/F + 2 Essay)
    {
      id: "apt_q25",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "You witness a colleague violating patient confidentiality. What do you do?",
      prompt_fr: "Vous voyez un collègue violer la confidentialité d'un patient. Que faites-vous ?",
      options_en: [
        "Ignore it; not my problem",
        "Report to supervisor immediately",
        "Confront the colleague privately first, then report if continues",
        "Discuss with other staff first"
      ],
      options_fr: [
        "L'ignorer ; ce n'est pas mon problème",
        "Signaler au superviseur immédiatement",
        "Confronter le collègue en privé d'abord, puis signaler si cela continue",
        "En discuter d'abord avec d'autres membres du personnel"
      ],
      answer_index: 2
    },
    {
      id: "apt_q26",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "Two team members are in conflict affecting patient care. As a peer, you should:",
      prompt_fr: "Deux membres de l'équipe sont en conflit, affectant les soins aux patients. En tant que pair, vous devez :",
      options_en: [
        "Take sides",
        "Facilitate discussion or escalate to supervisor",
        "Ignore it",
        "Spread gossip"
      ],
      options_fr: [
        "Prendre parti",
        "Faciliter la discussion ou escalader au superviseur",
        "L'ignorer",
        "Propager des ragots"
      ],
      answer_index: 1
    },
    {
      id: "apt_q27",
      quiz_id: "aptitude_test_general",
      type: "mcq",
      prompt_en: "You're offered a gift by a patient's family. The ethical response is:",
      prompt_fr: "La famille d'un patient vous offre un cadeau. La réponse éthique est :",
      options_en: [
        "Always accept to be polite",
        "Refuse all gifts",
        "Follow organization policy; politely decline if inappropriate",
        "Accept and hide it"
      ],
      options_fr: [
        "Toujours accepter pour être poli",
        "Refuser tous les cadeaux",
        "Suivre la politique de l'organisation ; refuser poliment si inapproprié",
        "Accepter et le cacher"
      ],
      answer_index: 2
    },
    {
      id: "apt_q28",
      quiz_id: "aptitude_test_general",
      type: "truefalse",
      prompt_en: "Teamwork requires putting organizational goals above personal preferences.",
      prompt_fr: "Le travail d'équipe nécessite de mettre les objectifs organisationnels au-dessus des préférences personnelles.",
      answer: true
    },
    {
      id: "apt_q29",
      quiz_id: "aptitude_test_general",
      type: "truefalse",
      prompt_en: "It's acceptable to cover up a minor mistake to avoid conflict.",
      prompt_fr: "Il est acceptable de cacher une petite erreur pour éviter un conflit.",
      answer: false
    },
    {
      id: "apt_q30",
      quiz_id: "aptitude_test_general",
      type: "truefalse",
      prompt_en: "Professional integrity means doing the right thing even when no one is watching.",
      prompt_fr: "L'intégrité professionnelle signifie faire ce qui est juste même quand personne ne regarde.",
      answer: true
    },
    {
      id: "apt_q31",
      quiz_id: "aptitude_test_general",
      type: "essay",
      prompt_en: "Describe a challenging situation you faced (work, school, or personal life) and explain how you resolved it. What did you learn? (500-700 words)",
      prompt_fr: "Décrivez une situation difficile que vous avez rencontrée (travail, école ou vie personnelle) et expliquez comment vous l'avez résolue. Qu'avez-vous appris ? (500-700 mots)"
    },
    {
      id: "apt_q32",
      quiz_id: "aptitude_test_general",
      type: "essay",
      prompt_en: "Why do you want to work in mobile healthcare in Haiti? What skills and values would you bring to the team? (500-700 words)",
      prompt_fr: "Pourquoi souhaitez-vous travailler dans les soins de santé mobiles en Haïti ? Quelles compétences et valeurs apporteriez-vous à l'équipe ? (500-700 mots)"
    },

    // ========== ORIGINAL COURSE QUESTIONS ==========
    // Orientation questions
    {
      id: "ori_q1",
      quiz_id: "ori_qz_main",
      type: "mcq",
      prompt_en: "Which ministry oversees licensing/reporting in Haiti?",
      prompt_fr: "Quel ministère supervise les licences/rapports en Haïti ?",
      options_en: ["MSPP", "MENFP", "MAST", "MARNDR"],
      options_fr: ["MSPP", "MENFP", "MAST", "MARNDR"],
      answer_index: 0
    },
    {
      id: "ori_q2",
      quiz_id: "ori_qz_main",
      type: "truefalse",
      prompt_en: "Patient consent can be verbal if appropriately documented.",
      prompt_fr: "Le consentement du patient peut être verbal s'il est correctement consigné.",
      answer: true
    },
    {
      id: "ori_q3",
      quiz_id: "ori_qz_main",
      type: "mcq",
      prompt_en: "What is the correct patient flow in SHARE mobile clinics?",
      prompt_fr: "Quel est le flux correct des patients dans les cliniques mobiles SHARE ?",
      options_en: ["Registration → Pharmacy → Consultation → Triage", "Triage → Registration → Consultation → Pharmacy", "Registration → Triage → Consultation → Pharmacy", "Consultation → Triage → Registration → Pharmacy"],
      options_fr: ["Enregistrement → Pharmacie → Consultation → Triage", "Triage → Enregistrement → Consultation → Pharmacie", "Enregistrement → Triage → Consultation → Pharmacie", "Consultation → Triage → Enregistrement → Pharmacie"],
      answer_index: 2
    },
    {
      id: "ori_q4",
      quiz_id: "ori_qz_main",
      type: "mcq",
      prompt_en: "Which of the following is NOT one of SHARE's core values?",
      prompt_fr: "Laquelle des suivantes N'EST PAS une des valeurs fondamentales de SHARE ?",
      options_en: ["Equity", "Profitability", "Dignity", "Accountability"],
      options_fr: ["Équité", "Rentabilité", "Dignité", "Responsabilité"],
      answer_index: 1
    },
    {
      id: "ori_q5",
      quiz_id: "ori_qz_main",
      type: "truefalse",
      prompt_en: "All patient information must be kept confidential and only shared with authorized healthcare providers involved in their care.",
      prompt_fr: "Toutes les informations des patients doivent être gardées confidentielles et partagées uniquement avec les prestataires de soins autorisés impliqués dans leurs soins.",
      answer: true
    },
    {
      id: "ori_q6",
      quiz_id: "ori_qz_main",
      type: "mcq",
      prompt_en: "When should a patient be referred to a fixed healthcare facility?",
      prompt_fr: "Quand un patient devrait-il être orienté vers un établissement de santé fixe ?",
      options_en: ["Only for surgical conditions", "For any condition requiring hospitalization or advanced diagnostics", "Only if they request it", "Never - mobile clinics handle all cases"],
      options_fr: ["Uniquement pour les conditions chirurgicales", "Pour toute condition nécessitant une hospitalisation ou des diagnostics avancés", "Uniquement s'ils le demandent", "Jamais - les cliniques mobiles traitent tous les cas"],
      answer_index: 1
    },
    {
      id: "ori_q7",
      quiz_id: "ori_qz_main",
      type: "truefalse",
      prompt_en: "Disease surveillance reporting to MSPP is only required on a yearly basis.",
      prompt_fr: "Le rapport de surveillance des maladies au MSPP n'est requis que sur une base annuelle.",
      answer: false
    },
    {
      id: "ori_q8",
      quiz_id: "ori_qz_main",
      type: "mcq",
      prompt_en: "What should you do if you witness unethical behavior by a team member?",
      prompt_fr: "Que devriez-vous faire si vous êtes témoin d'un comportement non éthique d'un membre de l'équipe ?",
      options_en: ["Ignore it if it doesn't affect you directly", "Confront the person publicly", "Report it confidentially to SHARE leadership", "Discuss it with patients"],
      options_fr: ["L'ignorer si cela ne vous affecte pas directement", "Confronter la personne publiquement", "Le signaler confidentiellement à la direction de SHARE", "En discuter avec les patients"],
      answer_index: 2
    },
    {
      id: "ori_q9",
      quiz_id: "ori_qz_main",
      type: "short",
      prompt_en: "Name two types of reports that SHARE regularly submits to MSPP.",
      prompt_fr: "Nommez deux types de rapports que SHARE soumet régulièrement au MSPP."
    },
    {
      id: "ori_q10",
      quiz_id: "ori_qz_main",
      type: "mcq",
      prompt_en: "What is the primary purpose of documenting patient encounters in the Electronic Health Record (EHR)?",
      prompt_fr: "Quel est l'objectif principal de documenter les rencontres avec les patients dans le Dossier de Santé Électronique (DSE) ?",
      options_en: ["To bill patients for services", "To ensure continuity of care and support quality improvement", "To share on social media", "To create paperwork"],
      options_fr: ["Facturer les patients pour les services", "Assurer la continuité des soins et soutenir l'amélioration de la qualité", "Partager sur les réseaux sociaux", "Créer de la paperasse"],
      answer_index: 1
    },

    // Doctor questions
    {
      id: "doc_q1",
      quiz_id: "doctor_qz_main",
      type: "mcq",
      prompt_en: "First-line antihypertensive in a diabetic adult (no CKD/pregnancy)?",
      prompt_fr: "Antihypertenseur de 1re intention chez un adulte diabétique (sans MRC/grossesse) ?",
      options_en: ["Thiazide", "ACE inhibitor", "Non-selective beta-blocker", "Alpha-agonist"],
      options_fr: ["Thiazidique", "IECA", "Bêta-bloquant non sélectif", "Alpha-agoniste"],
      answer_index: 1
    },
    {
      id: "doc_q2",
      quiz_id: "doctor_qz_main",
      type: "short",
      prompt_en: "Fever + rash in a child; unknown immunization. Immediate steps?",
      prompt_fr: "Fièvre + éruption chez un enfant; vaccination inconnue. Étapes immédiates ?"
    },
    {
      id: "doc_q3",
      quiz_id: "doctor_qz_main",
      type: "short",
      prompt_en: "Suspected TB non-adherence. Plan to ensure treatment completion.",
      prompt_fr: "Suspicion de non-observance TB. Plan pour assurer l'achèvement du traitement."
    },
    {
      id: "doc_q4",
      quiz_id: "doctor_qz_main",
      type: "short",
      prompt_en: "Limited budget: prioritize dengue vs leptospirosis tests — justify.",
      prompt_fr: "Budget limité : prioriser test dengue vs leptospirose — justifiez."
    },
    {
      id: "doc_q5",
      quiz_id: "doctor_qz_main",
      type: "truefalse",
      prompt_en: "Give antibiotics immediately to all febrile patients.",
      prompt_fr: "Administrer immédiatement des antibiotiques à tous les patients fébriles.",
      answer: false
    },
    {
      id: "doc_q6",
      quiz_id: "doctor_qz_main",
      type: "mcq",
      prompt_en: "Most useful initial lab in suspected DKA (field)?",
      prompt_fr: "Examen initial le plus utile en suspicion d'ACD (terrain) ?",
      options_en: ["Serum lactate", "Urine ketones", "D-dimer", "Troponin"],
      options_fr: ["Lactate", "Cétones urinaires", "D-dimères", "Troponine"],
      answer_index: 1
    },

    // Nurse questions
    {
      id: "nrs_q1",
      quiz_id: "nurse_qz_main",
      type: "mcq",
      prompt_en: "Normal adult blood pressure is closest to:",
      prompt_fr: "La pression artérielle normale chez l'adulte est proche de :",
      options_en: ["<90/60", "~120/80", ">160/100", "No standard range"],
      options_fr: ["<90/60", "~120/80", ">160/100", "Pas de plage standard"],
      answer_index: 1
    },
    {
      id: "nrs_q2",
      quiz_id: "nurse_qz_main",
      type: "truefalse",
      prompt_en: "Always check allergies before medications.",
      prompt_fr: "Toujours vérifier les allergies avant les médicaments.",
      answer: true
    },
    {
      id: "nrs_q3",
      quiz_id: "nurse_qz_main",
      type: "short",
      prompt_en: "Key steps for IM injection during mass immunization.",
      prompt_fr: "Étapes clés pour l'injection IM en campagne de vaccination."
    },
    {
      id: "nrs_q4",
      quiz_id: "nurse_qz_main",
      type: "short",
      prompt_en: "Non-responsive patient — immediate actions.",
      prompt_fr: "Patient non réactif — actions immédiates."
    },
    {
      id: "nrs_q5",
      quiz_id: "nurse_qz_main",
      type: "short",
      prompt_en: "Prioritize: bleeding wound vs severe abdominal pain — justify.",
      prompt_fr: "Prioriser : plaie hémorragique vs douleur abdominale sévère — justifiez."
    },

    // Driver questions
    {
      id: "drv_q1",
      quiz_id: "driver_qz_main",
      type: "mcq",
      prompt_en: "Pre-trip: which is NOT required?",
      prompt_fr: "Avant départ : lequel n'est PAS requis ?",
      options_en: ["Tire pressure check", "Brake lights check", "Clean windshield", "Engine oil change"],
      options_fr: ["Pression des pneus", "Feux de freinage", "Pare-brise propre", "Vidange moteur"],
      answer_index: 3
    },
    {
      id: "drv_q2",
      quiz_id: "driver_qz_main",
      type: "mcq",
      prompt_en: "Flooded bridge on route. First action?",
      prompt_fr: "Pont inondé sur l'itinéraire. Première action ?",
      options_en: ["Attempt crossing slowly", "Wait for water to recede", "Find alternative route and inform ops", "Turn back silently"],
      options_fr: ["Traverser lentement", "Attendre la décrue", "Trouver un détour et informer l'équipe", "Revenir sans prévenir"],
      answer_index: 2
    },
    {
      id: "drv_q3",
      quiz_id: "driver_qz_main",
      type: "mcq",
      prompt_en: "Passenger shows distress. You should:",
      prompt_fr: "Passager en détresse. Vous devez :",
      options_en: ["Keep driving", "Pull over and assess", "Call clinic first", "Give meds immediately"],
      options_fr: ["Continuer à conduire", "Se ranger et évaluer", "Appeler la clinique d'abord", "Administrer immédiatement des médicaments"],
      answer_index: 1
    },
    {
      id: "drv_q4",
      quiz_id: "driver_qz_main",
      type: "mcq",
      prompt_en: "Rough terrain prep includes:",
      prompt_fr: "Préparation terrain difficile :",
      options_en: ["Lower tire pressure moderately", "Increase speed", "Disable seatbelts", "Ignore cargo straps"],
      options_fr: ["Baisser modérément la pression", "Augmenter la vitesse", "Désactiver les ceintures", "Ignorer les sangles"],
      answer_index: 0
    },
    {
      id: "drv_q5",
      quiz_id: "driver_qz_main",
      type: "truefalse",
      prompt_en: "Secure equipment with straps and padding.",
      prompt_fr: "Sécuriser le matériel avec sangles et rembourrage.",
      answer: true
    },
    {
      id: "drv_q6",
      quiz_id: "driver_qz_main",
      type: "short",
      prompt_en: "List core pre-trip checks before remote travel.",
      prompt_fr: "Énumérez les vérifications clés avant un trajet en zone isolée."
    },
    {
      id: "drv_q7",
      quiz_id: "driver_qz_main",
      type: "short",
      prompt_en: "Radio outage in a canyon. Outline comms fallback.",
      prompt_fr: "Panne radio dans un canyon. Décrivez le repli de communication."
    },

    // Manager questions
    {
      id: "mgr_q1",
      quiz_id: "manager_qz_main",
      type: "essay",
      prompt_en: "Plan a mobile clinic deployment in a region with limited resources (500–700 words).",
      prompt_fr: "Planifiez le déploiement d'une clinique mobile en zone à faibles ressources (500–700 mots)."
    },
    {
      id: "mgr_q2",
      quiz_id: "manager_qz_main",
      type: "mcq",
      prompt_en: "Budget: $15k total; $5k supplies, $3k staffing. Remaining for ops:",
      prompt_fr: "Budget : 15 000 $ ; 5 000 $ fournitures, 3 000 $ personnel. Reste pour opérations :",
      options_en: ["$6,000", "$7,000", "$8,000", "$9,000"],
      options_fr: ["6 000 $", "7 000 $", "8 000 $", "9 000 $"],
      answer_index: 2
    },
    {
      id: "mgr_q3",
      quiz_id: "manager_qz_main",
      type: "short",
      prompt_en: "Clinics run out of essentials each trip — fix the supply chain.",
      prompt_fr: "Ruptures récurrentes d'essentiels — corrigez la chaîne d'approvisionnement."
    },
    {
      id: "mgr_q4",
      quiz_id: "manager_qz_main",
      type: "short",
      prompt_en: "Cut ops costs by 10% from $12,000/month. New budget & where to cut.",
      prompt_fr: "Réduire de 10 % les coûts (12 000 $/mois). Nouveau budget et postes à réduire."
    },

    // Security questions
    {
      id: "sec_q1",
      quiz_id: "security_qz_main",
      type: "mcq",
      prompt_en: "Top priority in a security breach?",
      prompt_fr: "Priorité absolue lors d'une brèche de sécurité ?",
      options_en: ["Call police", "Protect staff & patients", "Chase intruder", "Lock all doors"],
      options_fr: ["Appeler la police", "Protéger le personnel et les patients", "Poursuivre l'intrus", "Tout verrouiller"],
      answer_index: 1
    },
    {
      id: "sec_q2",
      quiz_id: "security_qz_main",
      type: "short",
      prompt_en: "Protest forms near clinic site. Describe lockdown posture & comms.",
      prompt_fr: "Manifestation près du site. Décrivez la posture de confinement et les communications."
    },
    {
      id: "sec_q3",
      quiz_id: "security_qz_main",
      type: "short",
      prompt_en: "Access control standards for visitors & badges (busy clinic).",
      prompt_fr: "Normes de contrôle d'accès pour visiteurs et badges (clinique fréquentée)."
    },
    {
      id: "sec_q4",
      quiz_id: "security_qz_main",
      type: "truefalse",
      prompt_en: "Log and review access incidents weekly.",
      prompt_fr: "Consigner et revoir les incidents d'accès chaque semaine.",
      answer: true
    },
    {
      id: "nq1",
      quiz_id: "nurse_qz_smoke",
      type: "mcq",
      prompt_en: "Most important factor when prioritizing care?",
      prompt_fr: "Facteur le plus important pour prioriser les soins ?",
      options_en: ["Supply availability", "Patient request", "Severity of condition", "Time of day"],
      options_fr: ["Disponibilité des fournitures", "Demande du patient", "Gravité de l'état", "Heure de la journée"],
      answer_index: 2
    },
    {
      id: "nq2",
      quiz_id: "nurse_qz_smoke",
      type: "truefalse",
      prompt_en: "Always check allergies before meds.",
      prompt_fr: "Toujours vérifier les allergies avant d'administrer des médicaments.",
      answer: true
    },
    {
      id: "nrs_q1",
      quiz_id: "nurse_qz_main",
      type: "mcq",
      prompt_en: "Normal adult BP is closest to:",
      prompt_fr: "TA normale adulte :",
      options_en: ["<90/60", "~120/80", ">160/100", "No range"],
      options_fr: ["<90/60", "~120/80", ">160/100", "Aucune plage"],
      answer_index: 1
    },
    {
      id: "nrs_q2",
      quiz_id: "nurse_qz_main",
      type: "truefalse",
      prompt_en: "Always check allergies before meds.",
      prompt_fr: "Toujours vérifier les allergies avant médicaments.",
      answer: true
    },
    {
      id: "nrs_q3",
      quiz_id: "nurse_qz_main",
      type: "short",
      prompt_en: "Steps for IM injection during mass immunization.",
      prompt_fr: "Étapes de l'injection IM en campagne de vaccination."
    },
    {
      id: "nrs_q4",
      quiz_id: "nurse_qz_main",
      type: "short",
      prompt_en: "Non-responsive patient — immediate actions.",
      prompt_fr: "Patient non réactif — actions immédiates."
    },
    {
      id: "nrs_q5",
      quiz_id: "nurse_qz_main",
      type: "short",
      prompt_en: "Prioritize: bleeding wound vs severe abdominal pain — justify.",
      prompt_fr: "Prioriser : plaie hémorragique vs douleur abdominale sévère — justifiez."
    },
    {
      id: "drv_q1",
      quiz_id: "driver_qz_main",
      type: "mcq",
      prompt_en: "Pre-trip: which is NOT required?",
      prompt_fr: "Avant départ : lequel n'est PAS requis ?",
      options_en: ["Tire pressure check", "Brake lights check", "Clean windshield", "Engine oil change"],
      options_fr: ["Pression des pneus", "Feux de freinage", "Pare-brise propre", "Vidange moteur"],
      answer_index: 3
    },
    {
      id: "drv_q2",
      quiz_id: "driver_qz_main",
      type: "mcq",
      prompt_en: "Flooded bridge on route. First action?",
      prompt_fr: "Pont inondé sur l'itinéraire. Première action ?",
      options_en: ["Attempt crossing slowly", "Wait for water to recede", "Find alternative route and inform ops", "Turn back silently"],
      options_fr: ["Traverser lentement", "Attendre la décrue", "Trouver un détour et informer l'équipe", "Revenir sans prévenir"],
      answer_index: 2
    },
    {
      id: "drv_q3",
      quiz_id: "driver_qz_main",
      type: "mcq",
      prompt_en: "Passenger shows distress. You should:",
      prompt_fr: "Passager en détresse. Vous devez :",
      options_en: ["Keep driving", "Pull over and assess", "Call clinic first", "Give meds immediately"],
      options_fr: ["Continuer", "Se ranger et évaluer", "Appeler la clinique d'abord", "Donner des médicaments"],
      answer_index: 1
    },
    {
      id: "drv_q4",
      quiz_id: "driver_qz_main",
      type: "mcq",
      prompt_en: "Rough terrain prep includes:",
      prompt_fr: "Préparation terrain difficile :",
      options_en: ["Lower tire pressure moderately", "Increase speed", "Disable seatbelts", "Ignore cargo straps"],
      options_fr: ["Baisser modérément la pression", "Augmenter la vitesse", "Désactiver ceintures", "Ignorer les sangles"],
      answer_index: 0
    },
    {
      id: "drv_q5",
      quiz_id: "driver_qz_main",
      type: "truefalse",
      prompt_en: "Secure equipment with straps and padding.",
      prompt_fr: "Sécuriser le matériel avec sangles et rembourrage.",
      answer: true
    },
    {
      id: "drv_q6",
      quiz_id: "driver_qz_main",
      type: "short",
      prompt_en: "List the core pre-trip checks before remote travel.",
      prompt_fr: "Énumérez les vérifications avant départ en zone isolée."
    },
    {
      id: "drv_q7",
      quiz_id: "driver_qz_main",
      type: "short",
      prompt_en: "Radio outage in a canyon. Outline your comms fallback.",
      prompt_fr: "Panne radio dans un canyon. Décrivez le repli communication."
    },
    {
      id: "drv_q8",
      quiz_id: "driver_qz_main",
      type: "mcq",
      prompt_en: "When escorting medical staff, priority is:",
      prompt_fr: "En escortant le personnel médical, la priorité est :",
      options_en: ["Speed", "Comfort", "Safety and predictable driving", "Shortest route"],
      options_fr: ["Vitesse", "Confort", "Sécurité et conduite prévisible", "Itinéraire le plus court"],
      answer_index: 2
    },
    {
      id: "drv_q9",
      quiz_id: "driver_qz_main",
      type: "truefalse",
      prompt_en: "Document near-miss incidents in the daily log.",
      prompt_fr: "Consigner les quasi-accidents dans le journal quotidien.",
      answer: true
    },
    {
      id: "drv_q10",
      quiz_id: "driver_qz_main",
      type: "mcq",
      prompt_en: "Heat management for vehicle:",
      prompt_fr: "Gestion de la chaleur du véhicule :",
      options_en: ["Overfill coolant", "Check coolant level & belts", "Block radiator for speed", "Ignore temp light"],
      options_fr: ["Surremplir liquide", "Vérifier liquide et courroies", "Bloquer radiateur", "Ignorer témoin"],
      answer_index: 1
    },
    {
      id: "doc_q1",
      quiz_id: "doctor_qz_main",
      type: "mcq",
      prompt_en: "First-line antihypertensive in diabetic adult (no CKD/pregnancy)?",
      prompt_fr: "Antihypertenseur de 1re intention chez un diabétique (sans MRC/grossesse) ?",
      options_en: ["Thiazide", "ACE inhibitor", "Non-selective beta-blocker", "Alpha-agonist"],
      options_fr: ["Thiazidique", "IECA", "Bêta-bloquant non sélectif", "Alpha-agoniste"],
      answer_index: 1
    },
    {
      id: "doc_q2",
      quiz_id: "doctor_qz_main",
      type: "short",
      prompt_en: "Fever + rash in child; unknown immunization. Immediate steps?",
      prompt_fr: "Fièvre + éruption chez enfant; vaccination inconnue. Étapes immédiates ?"
    },
    {
      id: "doc_q3",
      quiz_id: "doctor_qz_main",
      type: "short",
      prompt_en: "Suspected TB non-adherence. Ensure treatment completion plan.",
      prompt_fr: "Suspicion de non-observance TB. Plan pour assurer l'achèvement."
    },
    {
      id: "doc_q4",
      quiz_id: "doctor_qz_main",
      type: "short",
      prompt_en: "Limited budget: prioritize dengue vs leptospirosis tests — justify.",
      prompt_fr: "Budget limité : prioriser test dengue vs leptospirose — justifiez."
    },
    {
      id: "doc_q5",
      quiz_id: "doctor_qz_main",
      type: "short",
      prompt_en: "Stabilize a severely dehydrated patient before 3-hour transport.",
      prompt_fr: "Stabiliser un patient sévèrement déshydraté avant 3 h de transport."
    },
    {
      id: "doc_q6",
      quiz_id: "doctor_qz_main",
      type: "truefalse",
      prompt_en: "Give antibiotics immediately for all febrile patients.",
      prompt_fr: "Antibiotiques immédiats pour tous les fébriles.",
      answer: false
    },
    {
      id: "doc_q7",
      quiz_id: "doctor_qz_main",
      type: "mcq",
      prompt_en: "Most useful initial lab in suspected DKA (field)?",
      prompt_fr: "Examen initial utile en suspicion d'ACD (terrain) ?",
      options_en: ["Serum lactate", "Urine ketones", "D-dimer", "Troponin"],
      options_fr: ["Lactate", "Cétones urinaires", "D-dimères", "Troponine"],
      answer_index: 1
    },
    {
      id: "doc_q8",
      quiz_id: "doctor_qz_main",
      type: "short",
      prompt_en: "Counsel a patient refusing HIV test due to stigma.",
      prompt_fr: "Conseiller un patient refusant le test VIH (stigmatisation)."
    },
    {
      id: "mgr_q1",
      quiz_id: "manager_qz_main",
      type: "essay",
      prompt_en: "Plan a mobile clinic deployment in a region with limited resources (500–700 words).",
      prompt_fr: "Planifiez un déploiement de cliniques mobiles en zone à faibles ressources (500–700 mots)."
    },
    {
      id: "mgr_q2",
      quiz_id: "manager_qz_main",
      type: "mcq",
      prompt_en: "Budget: $15k total; $5k supplies, $3k staffing. Remaining for ops:",
      prompt_fr: "Budget : 15 000 $; 5 000 $ fournitures, 3 000 $ personnel. Reste opérations :",
      options_en: ["$6,000", "$7,000", "$8,000", "$9,000"],
      options_fr: ["6 000 $", "7 000 $", "8 000 $", "9 000 $"],
      answer_index: 2
    },
    {
      id: "mgr_q3",
      quiz_id: "manager_qz_main",
      type: "short",
      prompt_en: "Clinics run out of essentials each trip — fix the supply chain.",
      prompt_fr: "Ruptures récurrentes d'essentiels — corrigez la chaîne d'approvisionnement."
    },
    {
      id: "mgr_q4",
      quiz_id: "manager_qz_main",
      type: "short",
      prompt_en: "Cut ops costs by 10% from $12,000/month. New budget & where to cut.",
      prompt_fr: "Réduire de 10 % des coûts (12 000 $/mois). Nouveau budget et postes à réduire."
    },
    {
      id: "mgr2_q01",
      quiz_id: "manager_qz_bank_v2",
      type: "essay",
      prompt_en: "Plan a mobile clinic rollout for 3 communes (500–700 words).",
      prompt_fr: "Planifiez un déploiement de cliniques mobiles pour 3 communes (500–700 mots)."
    },
    {
      id: "mgr2_q02",
      quiz_id: "manager_qz_bank_v2",
      type: "mcq",
      prompt_en: "Budget: $20k total; $6k supplies, $5k transport. Remaining for staffing & ops:",
      prompt_fr: "Budget : 20 000 $ ; 6 000 $ fournitures, 5 000 $ transport. Reste pour personnel & opérations :",
      options_en: ["$7,000", "$8,000", "$9,000", "$10,000"],
      options_fr: ["7 000 $", "8 000 $", "9 000 $", "10 000 $"],
      answer_index: 2
    },
    {
      id: "mgr2_q03",
      quiz_id: "manager_qz_bank_v2",
      type: "short",
      prompt_en: "Fix recurring stockouts with basic M&E cycle.",
      prompt_fr: "Corriger les ruptures récurrentes avec un cycle S&E de base."
    },
    {
      id: "mgr2_q04",
      quiz_id: "manager_qz_bank_v2",
      type: "mcq",
      prompt_en: "Best KPI trio for maternal/child program:",
      prompt_fr: "Meilleur trio d'ICP pour programme maternel/infantile :",
      options_en: ["#Visitors, #Staff, #Vehicles", "ANC coverage, PNC follow-up, Immunization rate", "Fuel cost, tire wear, travel time", "Email opens, likes, shares"],
      options_fr: ["#Visiteurs, #Personnel, #Véhicules", "Couverture CPN, suivi postnatal, taux de vaccination", "Coût carburant, usure pneus, temps trajet", "Ouvertures email, likes, partages"],
      answer_index: 1
    },
    {
      id: "mgr2_q05",
      quiz_id: "manager_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Donor reports should tie directly to KPIs and audit trails.",
      prompt_fr: "Les rapports aux donateurs doivent se relier aux ICP et pistes d'audit.",
      answer: true
    },
    {
      id: "mgr2_q06",
      quiz_id: "manager_qz_bank_v2",
      type: "short",
      prompt_en: "Incident reporting workflow for staff safety.",
      prompt_fr: "Flux de signalement d'incident pour la sécurité du personnel."
    },
    {
      id: "mgr2_q07",
      quiz_id: "manager_qz_bank_v2",
      type: "mcq",
      prompt_en: "When to escalate to executive board?",
      prompt_fr: "Quand escalader au conseil exécutif ?",
      options_en: ["Any complaint", "Budget variance >10% with risk to delivery", "One late truck", "Minor conflict"],
      options_fr: ["Toute plainte", "Écart budgétaire >10% avec risque pour la mission", "Un camion en retard", "Conflit mineur"],
      answer_index: 1
    },
    {
      id: "mgr2_q08",
      quiz_id: "manager_qz_bank_v2",
      type: "short",
      prompt_en: "Create a fair staff scheduling policy for remote rotations.",
      prompt_fr: "Créer une politique équitable de planning pour rotations éloignées."
    },
    {
      id: "mgr2_q09",
      quiz_id: "manager_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Keep at least two pre-vetted suppliers for critical items.",
      prompt_fr: "Garder au moins deux fournisseurs pré-validés pour les articles critiques.",
      answer: true
    },
    {
      id: "mgr2_q10",
      quiz_id: "manager_qz_bank_v2",
      type: "mcq",
      prompt_en: "Best way to lift team morale quickly:",
      prompt_fr: "Meilleure façon de remonter rapidement le moral :",
      options_en: ["Mandatory party", "Anonymous feedback + 1:1s + quick wins", "Ignore the issue", "Replace staff"],
      options_fr: ["Fête obligatoire", "Retours anonymes + entretiens + quick wins", "Ignorer le problème", "Remplacer le personnel"],
      answer_index: 1
    },
    {
      id: "mgr2_q11",
      quiz_id: "manager_qz_bank_v2",
      type: "short",
      prompt_en: "Design a monthly dashboard structure (3–5 widgets).",
      prompt_fr: "Concevoir un tableau de bord mensuel (3–5 widgets)."
    },
    {
      id: "mgr2_q12",
      quiz_id: "manager_qz_bank_v2",
      type: "mcq",
      prompt_en: "Choose a valid internal control for petty cash:",
      prompt_fr: "Choisir un contrôle interne valide pour la petite caisse :",
      options_en: ["Single custodian + no logs", "Dual sign-off + receipts + surprise counts", "No receipts", "Self-approval"],
      options_fr: ["Un seul dépositaire + pas de journaux", "Double signature + reçus + contrôles surprises", "Pas de reçus", "Auto-approbation"],
      answer_index: 1
    },
    {
      id: "mgr2_q13",
      quiz_id: "manager_qz_bank_v2",
      type: "short",
      prompt_en: "Escalation matrix for data breach (roles & timing).",
      prompt_fr: "Matrice d'escalade pour violation de données (rôles & délais)."
    },
    {
      id: "mgr2_q14",
      quiz_id: "manager_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Operational audits should include random field spot-checks.",
      prompt_fr: "Les audits opérationnels devraient inclure des contrôles aléatoires sur le terrain.",
      answer: true
    },
    {
      id: "mgr2_q15",
      quiz_id: "manager_qz_bank_v2",
      type: "mcq",
      prompt_en: "Which belongs in a donor packet?",
      prompt_fr: "Que doit contenir un dossier donateur ?",
      options_en: ["Meme campaign", "Quarterly KPIs, spend report, impact stories", "Raw staff chats", "Private HR cases"],
      options_fr: ["Mèmes", "ICP trimestriels, rapport de dépenses, récits d'impact", "Discussions brutes du personnel", "Dossiers RH privés"],
      answer_index: 1
    },
    {
      id: "sec2_q01",
      quiz_id: "security_qz_bank_v2",
      type: "mcq",
      prompt_en: "Top priority during a breach:",
      prompt_fr: "Priorité absolue lors d'une brèche :",
      options_en: ["Call police", "Protect staff & patients", "Chase intruder", "Lock all doors immediately without assessment"],
      options_fr: ["Appeler la police", "Protéger personnel & patients", "Poursuivre l'intrus", "Tout verrouiller sans évaluer"],
      answer_index: 1
    },
    {
      id: "sec2_q02",
      quiz_id: "security_qz_bank_v2",
      type: "short",
      prompt_en: "Protest approaches clinic—describe posture levels and comms.",
      prompt_fr: "Manifestation proche — décrire niveaux de posture et communications."
    },
    {
      id: "sec2_q03",
      quiz_id: "security_qz_bank_v2",
      type: "truefalse",
      prompt_en: "All visitors must sign in and wear visible badges.",
      prompt_fr: "Tous les visiteurs doivent s'enregistrer et porter des badges visibles.",
      answer: true
    },
    {
      id: "sec2_q04",
      quiz_id: "security_qz_bank_v2",
      type: "mcq",
      prompt_en: "Which is part of access control?",
      prompt_fr: "Lequel fait partie du contrôle d'accès ?",
      options_en: ["Unlocked side gate", "Visitor log + badges + escort", "No logs", "Public social media check-ins"],
      options_fr: ["Porte latérale déverrouillée", "Registre visiteurs + badges + escorte", "Aucun registre", "Check-ins sur réseaux sociaux"],
      answer_index: 1
    },
    {
      id: "sec2_q05",
      quiz_id: "security_qz_bank_v2",
      type: "short",
      prompt_en: "Weekly incident review—what minimum data fields?",
      prompt_fr: "Revue hebdo des incidents — champs minimaux ?"
    },
    {
      id: "sec2_q06",
      quiz_id: "security_qz_bank_v2",
      type: "mcq",
      prompt_en: "Radio etiquette during emergencies:",
      prompt_fr: "Étiquette radio en urgence :",
      options_en: ["Long narratives", "Brevity codes & confirmations", "Silence until arrival", "Music to calm"],
      options_fr: ["Longs récits", "Codes brefs & confirmations", "Silence jusqu'à l'arrivée", "Musique pour calmer"],
      answer_index: 1
    },
    {
      id: "sec2_q07",
      quiz_id: "security_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Security should coordinate with medical lead before evacuation.",
      prompt_fr: "La sécurité doit coordonner avec le responsable médical avant évacuation.",
      answer: true
    },
    {
      id: "sec2_q08",
      quiz_id: "security_qz_bank_v2",
      type: "short",
      prompt_en: "Design a lockdown drill outline for a mobile clinic.",
      prompt_fr: "Concevoir un plan d'exercice de confinement pour une clinique mobile."
    },
    {
      id: "sec2_q09",
      quiz_id: "security_qz_bank_v2",
      type: "mcq",
      prompt_en: "What indicates posture escalation?",
      prompt_fr: "Qu'indique une escalade de posture ?",
      options_en: ["Rumor only", "Credible threat indicators", "Single complaint", "Bad weather"],
      options_fr: ["Rumeur seule", "Indicateurs de menace crédibles", "Plainte isolée", "Mauvais temps"],
      answer_index: 1
    },
    {
      id: "sec2_q10",
      quiz_id: "security_qz_bank_v2",
      type: "short",
      prompt_en: "Visitor badge policy for vendors and press.",
      prompt_fr: "Politique de badges visiteurs pour fournisseurs et presse."
    },
    {
      id: "sec_q1",
      quiz_id: "security_qz_main",
      type: "mcq",
      prompt_en: "Top priority in a security breach?",
      prompt_fr: "Priorité en cas de brèche de sécurité ?",
      options_en: ["Call police", "Protect staff & patients", "Chase intruder", "Lock all doors"],
      options_fr: ["Appeler la police", "Protéger personnel & patients", "Poursuivre l'intrus", "Tout verrouiller"],
      answer_index: 1
    },
    {
      id: "sec_q2",
      quiz_id: "security_qz_main",
      type: "short",
      prompt_en: "Protest forms near clinic site. Describe lockdown posture + comms.",
      prompt_fr: "Manifestation près du site. Décrivez posture de confinement + communications."
    },
    {
      id: "sec_q3",
      quiz_id: "security_qz_main",
      type: "short",
      prompt_en: "Access control standards for visitors & badges (busy clinic).",
      prompt_fr: "Normes de contrôle d'accès pour visiteurs & badges (clinique fréquentée)."
    },
    {
      id: "sec_q4",
      quiz_id: "security_qz_main",
      type: "truefalse",
      prompt_en: "Log and review access incidents weekly.",
      prompt_fr: "Consigner et revoir les incidents d'accès chaque semaine.",
      answer: true
    },
    {
      id: "doc2_q01",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "First-line antihypertensive in adult with diabetes (no CKD/pregnancy)?",
      prompt_fr: "Antihypertenseur de 1re intention chez adulte diabétique (sans MRC/grossesse) ?",
      options_en: ["Thiazide", "ACE inhibitor", "Non-selective beta-blocker", "Alpha-agonist"],
      options_fr: ["Thiazidique", "IECA", "Bêta-bloquant non sélectif", "Alpha-agoniste"],
      answer_index: 1
    },
    {
      id: "doc2_q02",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "Most appropriate initial test for suspected DKA (field setting).",
      prompt_fr: "Examen initial le plus approprié pour suspicion d'ACD (terrain).",
      options_en: ["Serum lactate", "Urine/serum ketones", "D-dimer", "Troponin"],
      options_fr: ["Lactate sérique", "Cétones urine/sérum", "D-dimères", "Troponine"],
      answer_index: 1
    },
    {
      id: "doc2_q03",
      quiz_id: "doctor_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Empiric antibiotics are indicated for all febrile patients in the field.",
      prompt_fr: "Des antibiotiques empiriques sont indiqués pour tous les patients fébriles sur le terrain.",
      answer: false
    },
    {
      id: "doc2_q04",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Stabilize a severely dehydrated patient prior to 3-hour transport—outline steps.",
      prompt_fr: "Stabiliser un patient sévèrement déshydraté avant 3 h de transport — étapes clés."
    },
    {
      id: "doc2_q05",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Child with fever + rash; unknown immunization. Immediate actions.",
      prompt_fr: "Enfant avec fièvre + éruption; vaccination inconnue. Actions immédiates."
    },
    {
      id: "doc2_q06",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "TB non-adherence suspected. Ensuring completion plan.",
      prompt_fr: "Suspicion de non-observance TB. Plan pour assurer l'achèvement."
    },
    {
      id: "doc2_q07",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "Preferred oral rehydration composition for severe diarrhea (adult).",
      prompt_fr: "Composition de réhydratation orale préférée pour diarrhée sévère (adulte).",
      options_en: ["Water + sugar only", "ORS (WHO)", "Juice + salt", "IV fluids only"],
      options_fr: ["Eau + sucre", "SRO (OMS)", "Jus + sel", "Perfusion uniquement"],
      answer_index: 1
    },
    {
      id: "doc2_q08",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Explain shared decision-making to a patient refusing HIV test due to stigma.",
      prompt_fr: "Expliquer la décision partagée à un patient refusant le test VIH (stigmatisation)."
    },
    {
      id: "doc2_q09",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "In trauma with compromised airway, first maneuver?",
      prompt_fr: "Traumatisme avec voie aérienne compromise, première manœuvre ?",
      options_en: ["Jaw-thrust", "Head-tilt chin-lift", "Oropharyngeal airway", "Bag-mask ventilation"],
      options_fr: ["Soulèvement mandibulaire", "Basculer la tête + menton", "Canule oropharyngée", "Ventilation au masque"],
      answer_index: 0
    },
    {
      id: "doc2_q10",
      quiz_id: "doctor_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Verbal consent may be acceptable if documented appropriately.",
      prompt_fr: "Le consentement verbal peut être acceptable s'il est correctement documenté.",
      answer: true
    },
    {
      id: "doc2_q11",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "Preferred malaria RDT when microscopy unavailable.",
      prompt_fr: "TDR paludisme préféré si microscopie indisponible.",
      options_en: ["HRP2-only", "pLDH-only", "Combo HRP2/pLDH", "No RDT"],
      options_fr: ["HRP2 seul", "pLDH seul", "Combo HRP2/pLDH", "Pas de TDR"],
      answer_index: 2
    },
    {
      id: "doc2_q12",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Budget constraint: prioritize dengue vs leptospirosis tests—justify.",
      prompt_fr: "Budget limité : prioriser test dengue vs leptospirose — justifiez."
    },
    {
      id: "doc2_q13",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "Most likely cause of wide-complex tachycardia in adult.",
      prompt_fr: "Cause la plus probable de tachycardie à QRS larges chez l'adulte.",
      options_en: ["SVT with aberrancy", "VT", "Atrial flutter", "Sinus tachycardia"],
      options_fr: ["TSV avec aberration", "TV", "Flutter auriculaire", "Tachycardie sinusale"],
      answer_index: 1
    },
    {
      id: "doc2_q14",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Outline immediate management for severe asthma exacerbation (field).",
      prompt_fr: "Conduite immédiate d'une crise d'asthme sévère (terrain)."
    },
    {
      id: "doc2_q15",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "First step in anaphylaxis treatment.",
      prompt_fr: "Première étape du traitement de l'anaphylaxie.",
      options_en: ["IV steroids", "Antihistamines", "IM epinephrine", "Nebulized albuterol"],
      options_fr: ["Corticoïdes IV", "Antihistaminiques", "Adrénaline IM", "Salbutamol nébulisé"],
      answer_index: 2
    },
    {
      id: "doc2_q16",
      quiz_id: "doctor_qz_bank_v2",
      type: "truefalse",
      prompt_en: "A single negative HIV test rules out acute HIV infection.",
      prompt_fr: "Un test VIH négatif unique exclut l'infection VIH aiguë.",
      answer: false
    },
    {
      id: "doc2_q17",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Counsel a pregnant patient on malaria prophylaxis trade-offs.",
      prompt_fr: "Conseiller une patiente enceinte sur la prophylaxie antipaludique — compromis."
    },
    {
      id: "doc2_q18",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "Best initial step for suspected cholera outbreak at clinic.",
      prompt_fr: "Meilleure première étape en cas de suspicion d'épidémie de choléra à la clinique.",
      options_en: ["Close clinic", "Notify authorities & implement ORT/IPC", "Give antibiotics to all", "Evacuate all staff"],
      options_fr: ["Fermer la clinique", "Avertir autorités & mettre en place SRO/PCI", "Antibiotiques pour tous", "Évacuer tout le personnel"],
      answer_index: 1
    },
    {
      id: "doc2_q19",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Design an algorithm for fever workup with limited labs.",
      prompt_fr: "Concevoir un algorithme de fièvre avec examens limités."
    },
    {
      id: "doc2_q20",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "In suspected meningitis, first antibiotic choice (adult, community).",
      prompt_fr: "En méningite suspectée, premier antibiotique (adulte, communautaire).",
      options_en: ["Amoxicillin", "Ceftriaxone", "Azithromycin", "Metronidazole"],
      options_fr: ["Amoxicilline", "Ceftriaxone", "Azithromycine", "Métronidazole"],
      answer_index: 1
    },
    {
      id: "doc2_q21",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Explain confidentiality exceptions for public health reporting.",
      prompt_fr: "Expliquer les exceptions à la confidentialité pour la déclaration de santé publique."
    },
    {
      id: "doc2_q22",
      quiz_id: "doctor_qz_bank_v2",
      type: "truefalse",
      prompt_en: "IV fluids are always preferred over ORS for moderate dehydration.",
      prompt_fr: "Les perfusions IV sont toujours préférées à la SRO pour déshydratation modérée.",
      answer: false
    },
    {
      id: "doc2_q23",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Field triage during multi-casualty event—outline priorities (START).",
      prompt_fr: "Triage sur le terrain lors d'un événement à victimes multiples — priorités (START)."
    },
    {
      id: "doc2_q24",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "Diabetic with neuropathic ulcer: first wound-care step.",
      prompt_fr: "Diabétique avec ulcère neuropathique : première étape de prise en charge des plaies.",
      options_en: ["Systemic antibiotics", "Debridement & off-loading", "Immediate grafting", "No treatment"],
      options_fr: ["Antibiotiques systémiques", "Débridement & décharge", "Greffe immédiate", "Aucun traitement"],
      answer_index: 1
    },
    {
      id: "doc2_q25",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Craft a rational antibiotic policy with local resistance unknowns.",
      prompt_fr: "Élaborer une politique antibiotique avec résistances locales inconnues."
    },
    {
      id: "doc2_q26",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "Most appropriate first test for suspected pregnancy complications.",
      prompt_fr: "Premier test le plus approprié pour complications de grossesse suspectées.",
      options_en: ["Serum hCG", "Urinalysis", "Ultrasound", "CRP"],
      options_fr: ["hCG sérique", "ECBU", "Échographie", "CRP"],
      answer_index: 2
    },
    {
      id: "doc2_q27",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Counseling script for ART adherence with travel barriers.",
      prompt_fr: "Script de conseil pour l'observance TAR avec contraintes de déplacement."
    },
    {
      id: "doc2_q28",
      quiz_id: "doctor_qz_bank_v2",
      type: "truefalse",
      prompt_en: "All febrile children require malaria testing in endemic regions.",
      prompt_fr: "Tous les enfants fébriles doivent être testés pour le paludisme en zone endémique.",
      answer: true
    },
    {
      id: "doc2_q29",
      quiz_id: "doctor_qz_bank_v2",
      type: "short",
      prompt_en: "Outline safe referral criteria for suspected ectopic pregnancy.",
      prompt_fr: "Critères d'orientation sécurisée pour suspicion de grossesse extra-utérine."
    },
    {
      id: "doc2_q30",
      quiz_id: "doctor_qz_bank_v2",
      type: "mcq",
      prompt_en: "Most useful first imaging for abdominal trauma (field).",
      prompt_fr: "Imagerie de première intention pour traumatisme abdominal (terrain).",
      options_en: ["X-ray", "FAST ultrasound", "CT", "MRI"],
      options_fr: ["Radiographie", "Écho FAST", "TDM", "IRM"],
      answer_index: 1
    },
    {
      id: "nrs2_q01",
      quiz_id: "nurse_qz_bank_v2",
      type: "mcq",
      prompt_en: "Normal adult BP is closest to:",
      prompt_fr: "TA normale adulte :",
      options_en: ["<90/60", "~120/80", ">160/100", "No range"],
      options_fr: ["<90/60", "~120/80", ">160/100", "Aucune plage"],
      answer_index: 1
    },
    {
      id: "nrs2_q02",
      quiz_id: "nurse_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Always check allergies before medication administration.",
      prompt_fr: "Toujours vérifier les allergies avant l'administration des médicaments.",
      answer: true
    },
    {
      id: "nrs2_q03",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "List key steps for IM injection during mass immunization.",
      prompt_fr: "Énumérez les étapes clés d'une injection IM en campagne de vaccination."
    },
    {
      id: "nrs2_q04",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Non-responsive patient—immediate actions (ABCs).",
      prompt_fr: "Patient non réactif — actions immédiates (ABC)."
    },
    {
      id: "nrs2_q05",
      quiz_id: "nurse_qz_bank_v2",
      type: "mcq",
      prompt_en: "Capillary blood glucose: when to recalibrate glucometer?",
      prompt_fr: "Glycémie capillaire : quand recalibrer le glucomètre ?",
      options_en: ["Never", "Per manufacturer schedule", "Only after error", "Only with new patient"],
      options_fr: ["Jamais", "Selon calendrier fabricant", "Après erreur uniquement", "Avec nouveau patient seulement"],
      answer_index: 1
    },
    {
      id: "nrs2_q06",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Sharps disposal protocol in a mobile setting.",
      prompt_fr: "Protocole d'élimination des objets piquants/coupants en mobilité."
    },
    {
      id: "nrs2_q07",
      quiz_id: "nurse_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Teach-back confirms patient understanding.",
      prompt_fr: "Le teach-back confirme la compréhension du patient.",
      answer: true
    },
    {
      id: "nrs2_q08",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Prioritize: bleeding wound vs severe abdominal pain—justify.",
      prompt_fr: "Prioriser : plaie hémorragique vs douleur abdominale sévère — justifiez."
    },
    {
      id: "nrs2_q09",
      quiz_id: "nurse_qz_bank_v2",
      type: "mcq",
      prompt_en: "Cold chain broken. Immediate action:",
      prompt_fr: "Rupture de la chaîne du froid. Action immédiate :",
      options_en: ["Use anyway if <4h", "Quarantine and report", "Warm and retry", "Mix with good stock"],
      options_fr: ["Utiliser si <4h", "Mettre en quarantaine et signaler", "Réchauffer et réessayer", "Mélanger avec stock sain"],
      answer_index: 1
    },
    {
      id: "nrs2_q10",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Postnatal danger signs to teach caregivers.",
      prompt_fr: "Signes de danger postnataux à enseigner aux aidants."
    },
    {
      id: "nrs2_q11",
      quiz_id: "nurse_qz_bank_v2",
      type: "mcq",
      prompt_en: "Best PPE sequence for donning.",
      prompt_fr: "Meilleur ordre pour l'enfilage des EPI.",
      options_en: ["Gown→Gloves→Mask→Goggles", "Gown→Mask→Goggles→Gloves", "Mask→Gown→Gloves→Goggles", "Gloves→Mask→Gown→Goggles"],
      options_fr: ["Blouse→Gants→Masque→Lunettes", "Blouse→Masque→Lunettes→Gants", "Masque→Blouse→Gants→Lunettes", "Gants→Masque→Blouse→Lunettes"],
      answer_index: 1
    },
    {
      id: "nrs2_q12",
      quiz_id: "nurse_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Hand hygiene before and after every patient contact.",
      prompt_fr: "Hygiène des mains avant et après tout contact patient.",
      answer: true
    },
    {
      id: "nrs2_q13",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Triage approach in mass clinic with limited staff.",
      prompt_fr: "Approche de triage en clinique de masse avec personnel limité."
    },
    {
      id: "nrs2_q14",
      quiz_id: "nurse_qz_bank_v2",
      type: "mcq",
      prompt_en: "Correct needle size for adult IM deltoid.",
      prompt_fr: "Taille d'aiguille IM deltoïde adulte.",
      options_en: ["18G 1.5\"", "21–23G 1–1.5\"", "25G 5/8\"", "30G 1/2\""],
      options_fr: ["18G 1,5\"", "21–23G 1–1,5\"", "25G 5/8\"", "30G 1/2\""],
      answer_index: 1
    },
    {
      id: "nrs2_q15",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Patient refuses injection due to fear; de-escalation script.",
      prompt_fr: "Patient refuse l'injection par peur ; script de désescalade."
    },
    {
      id: "nrs2_q16",
      quiz_id: "nurse_qz_bank_v2",
      type: "mcq",
      prompt_en: "Which is NOT biomedical waste?",
      prompt_fr: "Lequel n'est PAS un déchet biomédical ?",
      options_en: ["Used syringe", "Blood-soaked gauze", "Unopened saline bag", "Body tissue"],
      options_fr: ["Seringue usagée", "Gaze imbibée de sang", "Poche de sérum non ouverte", "Tissu organique"],
      answer_index: 2
    },
    {
      id: "nrs2_q17",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Explain isolation precautions to a patient's family.",
      prompt_fr: "Expliquer les précautions d'isolement à la famille d'un patient."
    },
    {
      id: "nrs2_q18",
      quiz_id: "nurse_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Vital signs should be rechecked after any intervention.",
      prompt_fr: "Les signes vitaux doivent être revérifiés après toute intervention.",
      answer: true
    },
    {
      id: "nrs2_q19",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Home visit checklist essentials for a CHW.",
      prompt_fr: "Éléments essentiels d'une visite à domicile pour un ASC."
    },
    {
      id: "nrs2_q20",
      quiz_id: "nurse_qz_bank_v2",
      type: "mcq",
      prompt_en: "Indication to stop an IM injection immediately.",
      prompt_fr: "Indication d'arrêter immédiatement une injection IM.",
      options_en: ["Mild pain", "Patient anxiety", "Sudden resistance/blood aspiration", "Cough"],
      options_fr: ["Douleur légère", "Anxiété", "Résistance brutale/aspiration de sang", "Toux"],
      answer_index: 2
    },
    {
      id: "nrs2_q21",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Counsel caregiver on ORS preparation and use.",
      prompt_fr: "Conseiller un aidant sur la préparation et l'utilisation de la SRO."
    },
    {
      id: "nrs2_q22",
      quiz_id: "nurse_qz_bank_v2",
      type: "mcq",
      prompt_en: "Best first aid for deep laceration in field.",
      prompt_fr: "Premier secours pour lacération profonde sur le terrain.",
      options_en: ["Remove embedded object", "Apply direct pressure and dress", "Apply tourniquet immediately", "Irrigate with river water"],
      options_fr: ["Retirer l'objet", "Pression directe et pansement", "Garrot immédiat", "Irrigation à l'eau de rivière"],
      answer_index: 1
    },
    {
      id: "nrs2_q23",
      quiz_id: "nurse_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Cold chain temperature logs are optional.",
      prompt_fr: "Les relevés de température de la chaîne du froid sont facultatifs.",
      answer: false
    },
    {
      id: "nrs2_q24",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Escalation pathway when home-visit red flags are identified.",
      prompt_fr: "Voie d'escalade lorsque des signes d'alerte sont identifiés en visite à domicile."
    },
    {
      id: "nrs2_q25",
      quiz_id: "nurse_qz_bank_v2",
      type: "mcq",
      prompt_en: "Which step comes first in wound care?",
      prompt_fr: "Quelle étape vient en premier dans le soin des plaies ?",
      options_en: ["Dress wound", "Assess & control bleeding", "Apply antibiotic", "Close wound"],
      options_fr: ["Pansement", "Évaluer & contrôler saignement", "Antibiotique", "Suture"],
      answer_index: 1
    },
    {
      id: "nrs2_q26",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Documenting adverse events—minimum fields.",
      prompt_fr: "Déclarer un effet indésirable — champs minimaux."
    },
    {
      id: "nrs2_q27",
      quiz_id: "nurse_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Teach-back is unnecessary if the patient nods yes.",
      prompt_fr: "Le teach-back est inutile si le patient hoche la tête.",
      answer: false
    },
    {
      id: "nrs2_q28",
      quiz_id: "nurse_qz_bank_v2",
      type: "mcq",
      prompt_en: "When is N95 preferred over surgical mask?",
      prompt_fr: "Quand préférer le N95 au masque chirurgical ?",
      options_en: ["Any cough", "Aerosol-generating procedures", "Outdoor triage", "Short consults"],
      options_fr: ["Toute toux", "Procédures générant des aérosols", "Triage extérieur", "Consultations courtes"],
      answer_index: 1
    },
    {
      id: "nrs2_q29",
      quiz_id: "nurse_qz_bank_v2",
      type: "short",
      prompt_en: "Create a quick teaching script for medication adherence.",
      prompt_fr: "Créer un script d'éducation pour l'observance médicamenteuse."
    },
    {
      id: "nrs2_q30",
      quiz_id: "nurse_qz_bank_v2",
      type: "mcq",
      prompt_en: "Which is a postnatal emergency?",
      prompt_fr: "Quel est une urgence postnatale ?",
      options_en: ["Mild lochia", "Severe headache with vision changes", "Breast engorgement", "Mild perineal pain"],
      options_fr: ["Lochies légères", "Céphalée sévère avec troubles visuels", "Engorgement mammaire", "Douleur périnéale légère"],
      answer_index: 1
    },
    {
      id: "drv2_q01",
      quiz_id: "driver_qz_bank_v2",
      type: "mcq",
      prompt_en: "Pre-trip: which is NOT required?",
      prompt_fr: "Avant départ : lequel n'est PAS requis ?",
      options_en: ["Tire pressure", "Brake lights", "Clean windshield", "Engine oil change"],
      options_fr: ["Pression pneus", "Feux stop", "Pare-brise propre", "Vidange moteur"],
      answer_index: 3
    },
    {
      id: "drv2_q02",
      quiz_id: "driver_qz_bank_v2",
      type: "mcq",
      prompt_en: "Flooded bridge. First action?",
      prompt_fr: "Pont inondé. Première action ?",
      options_en: ["Attempt crossing slowly", "Wait silently", "Find alternate route & inform ops", "Turn back without notice"],
      options_fr: ["Traverser lentement", "Attendre en silence", "Détour & informer l'équipe", "Revenir sans prévenir"],
      answer_index: 2
    },
    {
      id: "drv2_q03",
      quiz_id: "driver_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Always secure equipment with straps and padding.",
      prompt_fr: "Toujours sécuriser le matériel avec sangles et rembourrage.",
      answer: true
    },
    {
      id: "drv2_q04",
      quiz_id: "driver_qz_bank_v2",
      type: "mcq",
      prompt_en: "Rough terrain prep includes:",
      prompt_fr: "Préparation terrain difficile :",
      options_en: ["Lower tire pressure moderately", "Increase speed", "Disable seatbelts", "Ignore cargo straps"],
      options_fr: ["Baisser modérément la pression", "Augmenter la vitesse", "Désactiver ceintures", "Ignorer les sangles"],
      answer_index: 0
    },
    {
      id: "drv2_q05",
      quiz_id: "driver_qz_bank_v2",
      type: "short",
      prompt_en: "List core pre-trip checks for remote travel.",
      prompt_fr: "Vérifications clés avant trajet en zone isolée."
    },
    {
      id: "drv2_q06",
      quiz_id: "driver_qz_bank_v2",
      type: "short",
      prompt_en: "Radio outage in canyon: comms fallback plan.",
      prompt_fr: "Panne radio dans un canyon : plan de repli communication."
    },
    {
      id: "drv2_q07",
      quiz_id: "driver_qz_bank_v2",
      type: "mcq",
      prompt_en: "Priority when escorting medical staff:",
      prompt_fr: "Priorité en escortant du personnel médical :",
      options_en: ["Speed", "Comfort", "Safety & predictable driving", "Shortest route"],
      options_fr: ["Vitesse", "Confort", "Sécurité & conduite prévisible", "Itinéraire le plus court"],
      answer_index: 2
    },
    {
      id: "drv2_q08",
      quiz_id: "driver_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Log near-miss incidents in daily log.",
      prompt_fr: "Consigner les quasi-accidents dans le journal quotidien.",
      answer: true
    },
    {
      id: "drv2_q09",
      quiz_id: "driver_qz_bank_v2",
      type: "mcq",
      prompt_en: "Heat management best practice:",
      prompt_fr: "Bonne pratique de gestion de la chaleur :",
      options_en: ["Overfill coolant", "Check coolant & belts", "Block radiator", "Ignore temp light"],
      options_fr: ["Surremplir liquide", "Vérifier liquide & courroies", "Bloquer radiateur", "Ignorer témoin"],
      answer_index: 1
    },
    {
      id: "drv2_q10",
      quiz_id: "driver_qz_bank_v2",
      type: "mcq",
      prompt_en: "When to stop and rest legally/clinically:",
      prompt_fr: "Quand s'arrêter légalement/clinique :",
      options_en: ["Any yawn", "At legal maximum or fatigue signs", "At passenger request only", "Never"],
      options_fr: ["Au premier bâillement", "Au maximum légal ou signes de fatigue", "À la demande du passager seulement", "Jamais"],
      answer_index: 1
    },
    {
      id: "drv2_q11",
      quiz_id: "driver_qz_bank_v2",
      type: "short",
      prompt_en: "Passenger motion sickness protocol.",
      prompt_fr: "Protocole pour le mal des transports du passager."
    },
    {
      id: "drv2_q12",
      quiz_id: "driver_qz_bank_v2",
      type: "mcq",
      prompt_en: "Best practice for night convoy.",
      prompt_fr: "Bonne pratique pour convoi de nuit.",
      options_en: ["High beams always", "Staggered spacing & radios", "Tight bumper-to-bumper", "No lights"],
      options_fr: ["Phares forts toujours", "Espacement en quinconce & radios", "Collé-serré", "Sans éclairage"],
      answer_index: 1
    },
    {
      id: "drv2_q13",
      quiz_id: "driver_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Document passenger transfers with time and signatures.",
      prompt_fr: "Documenter les transferts de passagers avec heure et signatures.",
      answer: true
    },
    {
      id: "drv2_q14",
      quiz_id: "driver_qz_bank_v2",
      type: "mcq",
      prompt_en: "After minor collision, first step:",
      prompt_fr: "Après collision mineure, première étape :",
      options_en: ["Leave area", "Check for injuries & secure scene", "Argue fault", "Continue route"],
      options_fr: ["Quitter la zone", "Vérifier blessures & sécuriser", "Discuter de la faute", "Continuer"],
      answer_index: 1
    },
    {
      id: "drv2_q15",
      quiz_id: "driver_qz_bank_v2",
      type: "short",
      prompt_en: "Checklist for securing oxygen cylinders in vehicle.",
      prompt_fr: "Checklist pour sécuriser des bouteilles d'oxygène en véhicule."
    },
    {
      id: "drv2_q16",
      quiz_id: "driver_qz_bank_v2",
      type: "mcq",
      prompt_en: "Tire blowout response:",
      prompt_fr: "Réponse à l'éclatement d'un pneu :",
      options_en: ["Brake hard immediately", "Steer straight, ease off accelerator, then brake", "Accelerate to stabilize", "Turn sharply to shoulder"],
      options_fr: ["Freiner fort immédiatement", "Garder droit, lever l'accélérateur puis freiner", "Accélérer", "Virer brusquement"],
      answer_index: 1
    },
    {
      id: "drv2_q17",
      quiz_id: "driver_qz_bank_v2",
      type: "truefalse",
      prompt_en: "Never drive through moving water if depth is unknown.",
      prompt_fr: "Ne jamais traverser une eau en mouvement si la profondeur est inconnue.",
      answer: true
    },
    {
      id: "drv2_q18",
      quiz_id: "driver_qz_bank_v2",
      type: "mcq",
      prompt_en: "Satellite phone etiquette:",
      prompt_fr: "Étiquette du téléphone satellite :",
      options_en: ["Leave open line", "Short, essential messages only", "Chat for updates", "Avoid logs"],
      options_fr: ["Ligne ouverte", "Messages courts et essentiels", "Bavarder", "Éviter les journaux"],
      answer_index: 1
    },
    {
      id: "drv2_q19",
      quiz_id: "driver_qz_bank_v2",
      type: "short",
      prompt_en: "Daily vehicle log—minimum required fields.",
      prompt_fr: "Journal du véhicule — champs minimaux requis."
    },
    {
      id: "drv2_q20",
      quiz_id: "driver_qz_bank_v2",
      type: "mcq",
      prompt_en: "Cargo placement priority:",
      prompt_fr: "Priorité de placement du chargement :",
      options_en: ["Heavy items high", "Heavy items low/forward", "All light items forward", "Random"],
      options_fr: ["Objets lourds en haut", "Objets lourds bas/avant", "Objets légers à l'avant", "Aléatoire"],
      answer_index: 1
    },

    // Doctor Aptitude Test Questions
    {
      id: "apt_doc_cog_01",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "A study shows a correlation between high blood pressure and increased risk of stroke. How would you explain the importance of controlling blood pressure to a patient?",
      prompt_fr: "Une étude montre une corrélation entre l'hypertension artérielle et un risque accru d'AVC. Comment expliqueriez-vous l'importance du contrôle de la pression artérielle à un patient ?"
    },
    {
      id: "apt_doc_cog_02",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "In a community with a high prevalence of malaria, a patient presents with symptoms that could indicate several different conditions. Which is the most important first step?",
      prompt_fr: "Dans une communauté à forte prévalence de paludisme, un patient présente des symptômes pouvant indiquer plusieurs conditions différentes. Quelle est la première étape la plus importante ?"
    },
    {
      id: "apt_doc_cog_03",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "You receive a report that the incidence of tuberculosis is increasing in the area. How would you prioritize screening in the mobile clinic?",
      prompt_fr: "Vous recevez un rapport indiquant que l'incidence de la tuberculose augmente dans la région. Comment prioriseriez-vous le dépistage dans la clinique mobile ?"
    },
    {
      id: "apt_doc_cog_04",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "A new health policy is introduced that affects patient care in mobile clinics. How would you communicate this change to your team?",
      prompt_fr: "Une nouvelle politique de santé est introduite qui affecte les soins aux patients dans les cliniques mobiles. Comment communiqueriez-vous ce changement à votre équipe ?"
    },
    {
      id: "apt_doc_cog_05",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "Explain how you would inform a patient about the risks and benefits of a treatment option they are hesitant to take.",
      prompt_fr: "Expliquez comment vous informeriez un patient des risques et des avantages d'une option de traitement qu'il hésite à prendre."
    },
    {
      id: "apt_doc_crit_01",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "A patient in your mobile clinic exhibits symptoms that could indicate either dengue fever or leptospirosis, but both tests are expensive. How do you determine which test to prioritize?",
      prompt_fr: "Un patient dans votre clinique mobile présente des symptômes pouvant indiquer soit la dengue soit la leptospirose, mais les deux tests sont coûteux. Comment déterminez-vous quel test prioriser ?"
    },
    {
      id: "apt_doc_crit_02",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "You suspect that a patient is not adhering to their tuberculosis treatment regimen. How would you approach this situation to ensure the patient completes the course?",
      prompt_fr: "Vous soupçonnez qu'un patient ne suit pas son régime de traitement de la tuberculose. Comment aborderiez-vous cette situation pour vous assurer que le patient termine le traitement ?"
    },
    {
      id: "apt_doc_crit_03",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "A child presents with a high fever and rash, and the parent is unsure of vaccination history. How do you proceed?",
      prompt_fr: "Un enfant présente une forte fièvre et une éruption cutanée, et le parent n'est pas sûr de l'historique de vaccination. Comment procédez-vous ?"
    },
    {
      id: "apt_doc_crit_04",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "While examining a patient, you find conflicting symptoms that could indicate multiple diagnoses. How do you decide on the next steps?",
      prompt_fr: "En examinant un patient, vous trouvez des symptômes contradictoires qui pourraient indiquer plusieurs diagnostics. Comment décidez-vous des prochaines étapes ?"
    },
    {
      id: "apt_doc_crit_05",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "A patient refuses a recommended treatment due to fear of side effects. How do you address their concerns?",
      prompt_fr: "Un patient refuse un traitement recommandé par crainte d'effets secondaires. Comment répondez-vous à ses préoccupations ?"
    },
    {
      id: "apt_doc_pers_01",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "How do you typically react under pressure when making decisions that impact patient outcomes?",
      prompt_fr: "Comment réagissez-vous généralement sous pression lorsque vous prenez des décisions qui affectent les résultats des patients ?"
    },
    {
      id: "apt_doc_pers_02",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "In a team setting, do you prefer to lead discussions or listen to others' opinions first?",
      prompt_fr: "Dans un cadre d'équipe, préférez-vous diriger les discussions ou écouter d'abord les opinions des autres ?"
    },
    {
      id: "apt_doc_pers_03",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "How do you handle situations where a patient disagrees with your treatment plan?",
      prompt_fr: "Comment gérez-vous les situations où un patient n'est pas d'accord avec votre plan de traitement ?"
    },
    {
      id: "apt_doc_pers_04",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "When faced with a difficult decision that could have negative consequences, how do you proceed?",
      prompt_fr: "Face à une décision difficile qui pourrait avoir des conséquences négatives, comment procédez-vous ?"
    },
    {
      id: "apt_doc_pers_05",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "Do you prefer to follow established protocols strictly, or do you adapt them based on the situation?",
      prompt_fr: "Préférez-vous suivre strictement les protocoles établis ou les adapter en fonction de la situation ?"
    },
    {
      id: "apt_doc_tech_01",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "Describe the steps you would take to diagnose and manage a patient with suspected malaria in a mobile clinic with limited diagnostic tools.",
      prompt_fr: "Décrivez les étapes que vous prendriez pour diagnostiquer et gérer un patient suspecté de paludisme dans une clinique mobile avec des outils de diagnostic limités."
    },
    {
      id: "apt_doc_tech_02",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "What are the key considerations when setting up a temporary treatment area in a mobile clinic for an outbreak of infectious disease?",
      prompt_fr: "Quelles sont les considérations clés lors de la mise en place d'une zone de traitement temporaire dans une clinique mobile pour une épidémie de maladie infectieuse ?"
    },
    {
      id: "apt_doc_tech_03",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "How would you manage a patient with severe dehydration and hypovolemic shock in a resource-limited environment?",
      prompt_fr: "Comment géreriez-vous un patient souffrant de déshydratation sévère et de choc hypovolémique dans un environnement aux ressources limitées ?"
    },
    {
      id: "apt_doc_tech_04",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "Explain the protocol for treating a patient with a suspected snakebite in a remote area.",
      prompt_fr: "Expliquez le protocole de traitement d'un patient avec une morsure de serpent suspectée dans une zone reculée."
    },
    {
      id: "apt_doc_tech_05",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "What steps would you take to ensure the sterility of medical equipment in a mobile clinic setting?",
      prompt_fr: "Quelles mesures prendriez-vous pour assurer la stérilité de l'équipement médical dans un cadre de clinique mobile ?"
    },
    {
      id: "apt_doc_sit_01",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "During a routine visit to a remote village, a patient presents with severe dehydration and confusion. The nearest hospital is 3 hours away. How do you stabilize the patient before transport?",
      prompt_fr: "Lors d'une visite de routine dans un village éloigné, un patient présente une déshydratation sévère et de la confusion. L'hôpital le plus proche est à 3 heures de route. Comment stabilisez-vous le patient avant le transport ?"
    },
    {
      id: "apt_doc_sit_02",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "A mother brings her child to the mobile clinic with a high fever and a rash. You suspect measles, but the child has not been vaccinated. What steps do you take to manage the case and prevent the spread of infection?",
      prompt_fr: "Une mère amène son enfant à la clinique mobile avec une forte fièvre et une éruption cutanée. Vous suspectez la rougeole, mais l'enfant n'a pas été vacciné. Quelles mesures prenez-vous pour gérer le cas et prévenir la propagation de l'infection ?"
    },
    {
      id: "apt_doc_sit_03",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "You encounter a patient who has been non-compliant with their medication. What steps do you take to ensure adherence going forward?",
      prompt_fr: "Vous rencontrez un patient qui n'a pas respecté son traitement médicamenteux. Quelles mesures prenez-vous pour assurer l'observance à l'avenir ?"
    },
    {
      id: "apt_doc_sit_04",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "A major donor is visiting the mobile clinic, and during the visit, a medical emergency occurs. How do you manage the situation to ensure both the patient's needs and the donor's experience are addressed?",
      prompt_fr: "Un donateur majeur visite la clinique mobile et, pendant la visite, une urgence médicale se produit. Comment gérez-vous la situation pour répondre aux besoins du patient et à l'expérience du donateur ?"
    },
    {
      id: "apt_doc_sit_05",
      quiz_id: "aptitude_test_doctor",
      type: "essay",
      prompt_en: "You are the only doctor available, and two patients need immediate attention—one with severe chest pain and another with a traumatic injury. How do you prioritize care?",
      prompt_fr: "Vous êtes le seul médecin disponible et deux patients ont besoin d'une attention immédiate : l'un avec une douleur thoracique sévère et l'autre avec une blessure traumatique. Comment priorisez-vous les soins ?"
    },

    // Nurse Aptitude Test Questions
    {
      id: "apt_nrs_cog_01",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "You are tasked with explaining a new wound care protocol to a group of community health workers. How do you ensure they understand the importance of each step?",
      prompt_fr: "Vous êtes chargé d'expliquer un nouveau protocole de soins des plaies à un groupe d'agents de santé communautaires. Comment vous assurez-vous qu'ils comprennent l'importance de chaque étape ?"
    },
    {
      id: "apt_nrs_cog_02",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "You receive a patient's history that is unclear and lacks detail. How do you proceed with gathering the necessary information?",
      prompt_fr: "Vous recevez l'historique d'un patient qui n'est pas clair et manque de détails. Comment procédez-vous pour recueillir les informations nécessaires ?"
    },
    {
      id: "apt_nrs_cog_03",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "A patient is worried about the side effects of a medication you're about to administer. How do you address their concerns?",
      prompt_fr: "Un patient s'inquiète des effets secondaires d'un médicament que vous êtes sur le point d'administrer. Comment répondez-vous à ses préoccupations ?"
    },
    {
      id: "apt_nrs_cog_04",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "The mobile clinic has received new guidelines on infection control. How do you ensure that all team members understand and implement these guidelines?",
      prompt_fr: "La clinique mobile a reçu de nouvelles directives sur le contrôle des infections. Comment vous assurez-vous que tous les membres de l'équipe comprennent et mettent en œuvre ces directives ?"
    },
    {
      id: "apt_nrs_cog_05",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "Explain how you would communicate with a non-English-speaking patient who needs to understand their treatment plan.",
      prompt_fr: "Expliquez comment vous communiqueriez avec un patient non anglophone qui doit comprendre son plan de traitement."
    },
    {
      id: "apt_nrs_crit_01",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "You notice that a patient's wound is not healing as expected. What are the possible reasons, and what steps would you take to address the issue?",
      prompt_fr: "Vous remarquez que la plaie d'un patient ne guérit pas comme prévu. Quelles sont les raisons possibles et quelles mesures prendriez-vous pour résoudre le problème ?"
    },
    {
      id: "apt_nrs_crit_02",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "A patient in the mobile clinic shows signs of an allergic reaction after receiving medication. What are your immediate actions?",
      prompt_fr: "Un patient de la clinique mobile présente des signes de réaction allergique après avoir reçu un médicament. Quelles sont vos actions immédiates ?"
    },
    {
      id: "apt_nrs_crit_03",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "A patient is in pain and requests more medication than prescribed. How do you handle this situation?",
      prompt_fr: "Un patient souffre et demande plus de médicaments que ce qui a été prescrit. Comment gérez-vous cette situation ?"
    },
    {
      id: "apt_nrs_crit_04",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "You are the only nurse available, and two patients need immediate attention—one with a bleeding wound and another with severe abdominal pain. How do you prioritize care?",
      prompt_fr: "Vous êtes la seule infirmière disponible et deux patients ont besoin d'une attention immédiate : l'un avec une plaie qui saigne et l'autre avec une douleur abdominale sévère. Comment priorisez-vous les soins ?"
    },
    {
      id: "apt_nrs_crit_05",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "A patient refuses a necessary procedure due to fear of pain. How do you manage their anxiety and ensure they receive the care they need?",
      prompt_fr: "Un patient refuse une procédure nécessaire par peur de la douleur. Comment gérez-vous son anxiété et vous assurez-vous qu'il reçoive les soins dont il a besoin ?"
    },
    {
      id: "apt_nrs_pers_01",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "How do you handle multiple urgent tasks that require your attention at the same time?",
      prompt_fr: "Comment gérez-vous plusieurs tâches urgentes qui nécessitent votre attention en même temps ?"
    },
    {
      id: "apt_nrs_pers_02",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "Do you prefer to follow established protocols strictly, or do you adapt them based on the situation?",
      prompt_fr: "Préférez-vous suivre strictement les protocoles établis ou les adapter en fonction de la situation ?"
    },
    {
      id: "apt_nrs_pers_03",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "How do you typically react to unexpected changes in patient conditions?",
      prompt_fr: "Comment réagissez-vous généralement aux changements inattendus dans l'état des patients ?"
    },
    {
      id: "apt_nrs_pers_04",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "When working under pressure, do you prefer to work independently or as part of a team?",
      prompt_fr: "Lorsque vous travaillez sous pression, préférez-vous travailler de manière indépendante ou en équipe ?"
    },
    {
      id: "apt_nrs_pers_05",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "How do you maintain a calm and reassuring demeanor when dealing with anxious patients?",
      prompt_fr: "Comment maintenez-vous une attitude calme et rassurante face à des patients anxieux ?"
    },
    {
      id: "apt_nrs_tech_01",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "What are the key signs of sepsis in a patient with an infected wound, and how would you manage the condition in a mobile clinic setting?",
      prompt_fr: "Quels sont les signes clés de septicémie chez un patient avec une plaie infectée, et comment géreriez-vous la condition dans un cadre de clinique mobile ?"
    },
    {
      id: "apt_nrs_tech_02",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "Describe how you would prepare and administer a vaccine during a mass immunization campaign in a rural area.",
      prompt_fr: "Décrivez comment vous prépareriez et administreriez un vaccin lors d'une campagne de vaccination de masse dans une zone rurale."
    },
    {
      id: "apt_nrs_tech_03",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "Explain the correct procedure for administering an intramuscular injection in a mobile clinic setting.",
      prompt_fr: "Expliquez la procédure correcte pour administrer une injection intramusculaire dans un cadre de clinique mobile."
    },
    {
      id: "apt_nrs_tech_04",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "How would you manage a patient who presents with signs of dehydration and low blood pressure in a resource-limited environment?",
      prompt_fr: "Comment géreriez-vous un patient qui présente des signes de déshydratation et de tension artérielle basse dans un environnement aux ressources limitées ?"
    },
    {
      id: "apt_nrs_tech_05",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "Describe the steps you would take to manage a patient with suspected tetanus in a remote area.",
      prompt_fr: "Décrivez les étapes que vous prendriez pour gérer un patient avec un tétanos suspecté dans une zone reculée."
    },
    {
      id: "apt_nrs_sit_01",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "A patient in the mobile clinic suddenly becomes non-responsive. You are the only healthcare provider on site. What immediate actions do you take?",
      prompt_fr: "Un patient de la clinique mobile devient soudainement non réactif. Vous êtes le seul fournisseur de soins de santé sur place. Quelles actions immédiates prenez-vous ?"
    },
    {
      id: "apt_nrs_sit_02",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "You are responsible for training new community health workers. How do you ensure they are adequately prepared to handle patient care in the field?",
      prompt_fr: "Vous êtes responsable de la formation de nouveaux agents de santé communautaires. Comment vous assurez-vous qu'ils sont adéquatement préparés à gérer les soins aux patients sur le terrain ?"
    },
    {
      id: "apt_nrs_sit_03",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "A patient expresses concern about the quality of care they received in a previous visit. How do you address their concerns and ensure their trust in the clinic?",
      prompt_fr: "Un patient exprime des préoccupations concernant la qualité des soins qu'il a reçus lors d'une visite précédente. Comment répondez-vous à ses préoccupations et assurez-vous sa confiance dans la clinique ?"
    },
    {
      id: "apt_nrs_sit_04",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "A colleague is handling a medical situation incorrectly, putting the patient at risk. How do you intervene without escalating the situation?",
      prompt_fr: "Un collègue gère incorrectement une situation médicale, mettant le patient en danger. Comment intervenez-vous sans aggraver la situation ?"
    },
    {
      id: "apt_nrs_sit_05",
      quiz_id: "aptitude_test_nurse",
      type: "essay",
      prompt_en: "During a busy clinic day, a patient with a minor complaint insists on being seen immediately. How do you manage the situation?",
      prompt_fr: "Lors d'une journée de clinique chargée, un patient avec une plainte mineure insiste pour être vu immédiatement. Comment gérez-vous la situation ?"
    },

    // Driver Aptitude Test Questions
    {
      id: "apt_drv_cog_01",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "You are given instructions to reach a remote village with limited road access. How do you ensure that you fully understand the route before starting the journey?",
      prompt_fr: "On vous donne des instructions pour atteindre un village éloigné avec un accès routier limité. Comment vous assurez-vous de bien comprendre l'itinéraire avant de commencer le voyage ?"
    },
    {
      id: "apt_drv_cog_02",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "The clinic team gives you a list of supplies to be delivered. How do you confirm that all the necessary items are packed and ready for transport?",
      prompt_fr: "L'équipe de la clinique vous donne une liste de fournitures à livrer. Comment confirmez-vous que tous les articles nécessaires sont emballés et prêts pour le transport ?"
    },
    {
      id: "apt_drv_cog_03",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "While driving, you receive a message that the destination has changed due to an emergency. How do you adjust your route?",
      prompt_fr: "En conduisant, vous recevez un message indiquant que la destination a changé en raison d'une urgence. Comment ajustez-vous votre itinéraire ?"
    },
    {
      id: "apt_drv_cog_04",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "You encounter a road sign indicating a potential hazard ahead. How do you interpret and respond to the warning?",
      prompt_fr: "Vous rencontrez un panneau routier indiquant un danger potentiel à venir. Comment interprétez-vous et répondez-vous à l'avertissement ?"
    },
    {
      id: "apt_drv_cog_05",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "Explain how you would communicate with the clinic team if you encounter unexpected delays during the journey.",
      prompt_fr: "Expliquez comment vous communiqueriez avec l'équipe de la clinique si vous rencontrez des retards inattendus pendant le voyage."
    },
    {
      id: "apt_drv_crit_01",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "You encounter a bridge that is flooded and impassable. What are your immediate actions, and how do you communicate with the clinic team?",
      prompt_fr: "Vous rencontrez un pont inondé et impraticable. Quelles sont vos actions immédiates et comment communiquez-vous avec l'équipe de la clinique ?"
    },
    {
      id: "apt_drv_crit_02",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "During a long journey, the vehicle's engine starts overheating. How do you ensure the safety of the passengers and the vehicle while addressing the issue?",
      prompt_fr: "Pendant un long voyage, le moteur du véhicule commence à surchauffer. Comment assurez-vous la sécurité des passagers et du véhicule tout en résolvant le problème ?"
    },
    {
      id: "apt_drv_crit_03",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "You notice that the vehicle's fuel gauge is faulty during the trip. How do you manage the situation to avoid running out of fuel?",
      prompt_fr: "Vous remarquez que la jauge de carburant du véhicule est défectueuse pendant le voyage. Comment gérez-vous la situation pour éviter de manquer de carburant ?"
    },
    {
      id: "apt_drv_crit_04",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "While transporting medical supplies, you are informed of a roadblock due to civil unrest. How do you ensure the safe delivery of the supplies?",
      prompt_fr: "Lors du transport de fournitures médicales, vous êtes informé d'un barrage routier dû à des troubles civils. Comment assurez-vous la livraison sécurisée des fournitures ?"
    },
    {
      id: "apt_drv_crit_05",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "You are asked to deliver urgent medical supplies to a remote area with no clear road access. How do you plan and execute the delivery?",
      prompt_fr: "On vous demande de livrer des fournitures médicales urgentes dans une zone reculée sans accès routier clair. Comment planifiez-vous et exécutez-vous la livraison ?"
    },
    {
      id: "apt_drv_pers_01",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "How do you manage stress during long, challenging drives?",
      prompt_fr: "Comment gérez-vous le stress lors de longs trajets difficiles ?"
    },
    {
      id: "apt_drv_pers_02",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "Do you prefer to work with clear instructions, or do you like having flexibility to make decisions on your own?",
      prompt_fr: "Préférez-vous travailler avec des instructions claires ou aimez-vous avoir la flexibilité de prendre des décisions par vous-même ?"
    },
    {
      id: "apt_drv_pers_03",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "How do you handle unexpected changes in your route or schedule?",
      prompt_fr: "Comment gérez-vous les changements inattendus dans votre itinéraire ou votre horaire ?"
    },
    {
      id: "apt_drv_pers_04",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "Describe a situation where you had to make a quick decision while driving. How did you ensure safety?",
      prompt_fr: "Décrivez une situation où vous avez dû prendre une décision rapide en conduisant. Comment avez-vous assuré la sécurité ?"
    },
    {
      id: "apt_drv_pers_05",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "How do you maintain a positive attitude during long periods of driving, especially in difficult conditions?",
      prompt_fr: "Comment maintenez-vous une attitude positive lors de longues périodes de conduite, surtout dans des conditions difficiles ?"
    },
    {
      id: "apt_drv_tech_01",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "List the steps you would take to conduct a safety check on the vehicle before starting a journey to a remote clinic.",
      prompt_fr: "Énumérez les étapes que vous prendriez pour effectuer une vérification de sécurité sur le véhicule avant de commencer un voyage vers une clinique éloignée."
    },
    {
      id: "apt_drv_tech_02",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "How would you handle a situation where the vehicle's tire bursts while driving on a remote road?",
      prompt_fr: "Comment géreriez-vous une situation où le pneu du véhicule éclate en conduisant sur une route éloignée ?"
    },
    {
      id: "apt_drv_tech_03",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "Explain how you would perform basic maintenance on the vehicle, such as checking oil levels, tire pressure, and coolant.",
      prompt_fr: "Expliquez comment vous effectueriez l'entretien de base du véhicule, comme la vérification des niveaux d'huile, de la pression des pneus et du liquide de refroidissement."
    },
    {
      id: "apt_drv_tech_04",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "Describe the procedures for securing medical supplies in the vehicle to prevent damage during transport.",
      prompt_fr: "Décrivez les procédures pour sécuriser les fournitures médicales dans le véhicule pour éviter les dommages pendant le transport."
    },
    {
      id: "apt_drv_tech_05",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "What steps would you take if the vehicle breaks down in a remote area with limited access to assistance?",
      prompt_fr: "Quelles mesures prendriez-vous si le véhicule tombe en panne dans une zone reculée avec un accès limité à l'assistance ?"
    },
    {
      id: "apt_drv_sit_01",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "You are transporting medical supplies to a clinic when a tire bursts. How do you ensure the safety of the passengers and the security of the supplies while resolving the issue?",
      prompt_fr: "Vous transportez des fournitures médicales vers une clinique lorsqu'un pneu éclate. Comment assurez-vous la sécurité des passagers et la sécurité des fournitures tout en résolvant le problème ?"
    },
    {
      id: "apt_drv_sit_02",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "On a narrow mountain road, you encounter another vehicle coming from the opposite direction. How do you safely navigate the situation?",
      prompt_fr: "Sur une route de montagne étroite, vous rencontrez un autre véhicule venant dans la direction opposée. Comment gérez-vous la situation en toute sécurité ?"
    },
    {
      id: "apt_drv_sit_03",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "You are running late to deliver critical supplies due to heavy traffic. How do you communicate with the clinic team, and what steps do you take to ensure timely delivery?",
      prompt_fr: "Vous êtes en retard pour livrer des fournitures critiques en raison d'un trafic dense. Comment communiquez-vous avec l'équipe de la clinique et quelles mesures prenez-vous pour assurer une livraison en temps opportun ?"
    },
    {
      id: "apt_drv_sit_04",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "During the journey, a passenger becomes ill and needs immediate attention. How do you manage the situation while continuing to drive safely?",
      prompt_fr: "Pendant le voyage, un passager tombe malade et a besoin d'une attention immédiate. Comment gérez-vous la situation tout en continuant à conduire en toute sécurité ?"
    },
    {
      id: "apt_drv_sit_05",
      quiz_id: "aptitude_test_driver",
      type: "essay",
      prompt_en: "You are informed of a severe weather warning while on the road. How do you decide whether to continue the journey or seek shelter?",
      prompt_fr: "Vous êtes informé d'un avertissement météorologique sévère alors que vous êtes sur la route. Comment décidez-vous de continuer le voyage ou de chercher un abri ?"
    },

    // Manager Aptitude Test Questions
    {
      id: "apt_mgr_cog_01",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "You receive a report showing a decline in patient satisfaction at one of the mobile clinics. What steps do you take to investigate and address the issue?",
      prompt_fr: "Vous recevez un rapport montrant une baisse de la satisfaction des patients dans l'une des cliniques mobiles. Quelles mesures prenez-vous pour enquêter et résoudre le problème ?"
    },
    {
      id: "apt_mgr_cog_02",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "You are tasked with creating a plan to improve the efficiency of clinic operations. How do you gather the necessary information and develop the plan?",
      prompt_fr: "Vous êtes chargé de créer un plan pour améliorer l'efficacité des opérations de la clinique. Comment recueillez-vous les informations nécessaires et développez-vous le plan ?"
    },
    {
      id: "apt_mgr_cog_03",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "A new health regulation is introduced that affects mobile clinics. How do you ensure that all team members are aware of and comply with the new regulation?",
      prompt_fr: "Une nouvelle réglementation sanitaire est introduite qui affecte les cliniques mobiles. Comment vous assurez-vous que tous les membres de l'équipe sont conscients de la nouvelle réglementation et la respectent ?"
    },
    {
      id: "apt_mgr_cog_04",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "Explain how you would communicate a critical change in clinic procedures to a diverse team of healthcare workers.",
      prompt_fr: "Expliquez comment vous communiqueriez un changement critique dans les procédures de la clinique à une équipe diversifiée de travailleurs de la santé."
    },
    {
      id: "apt_mgr_cog_05",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "A patient files a complaint about their care experience. How do you handle the situation to resolve the issue and improve future care?",
      prompt_fr: "Un patient dépose une plainte concernant son expérience de soins. Comment gérez-vous la situation pour résoudre le problème et améliorer les soins futurs ?"
    },
    {
      id: "apt_mgr_num_01",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "You are responsible for a budget of $15,000 for the month. If you allocate $5,000 for medical supplies and $3,000 for staffing, how much remains for operational costs?",
      prompt_fr: "Vous êtes responsable d'un budget de 15 000 $ pour le mois. Si vous allouez 5 000 $ pour les fournitures médicales et 3 000 $ pour le personnel, combien reste-t-il pour les coûts opérationnels ?"
    },
    {
      id: "apt_mgr_num_02",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "The clinic sees an average of 30 patients per day. If the cost per patient is $20, what is the total cost for one week?",
      prompt_fr: "La clinique reçoit en moyenne 30 patients par jour. Si le coût par patient est de 20 $, quel est le coût total pour une semaine ?"
    },
    {
      id: "apt_mgr_crit_01",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "You notice that the mobile clinics are consistently running out of essential supplies before the end of each trip. How do you address this issue to ensure better resource management?",
      prompt_fr: "Vous remarquez que les cliniques mobiles manquent constamment de fournitures essentielles avant la fin de chaque voyage. Comment résolvez-vous ce problème pour assurer une meilleure gestion des ressources ?"
    },
    {
      id: "apt_mgr_crit_02",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "A new health policy requires changes in the clinic's operational procedures. How do you implement these changes effectively across all mobile clinics?",
      prompt_fr: "Une nouvelle politique de santé nécessite des changements dans les procédures opérationnelles de la clinique. Comment mettez-vous en œuvre ces changements efficacement dans toutes les cliniques mobiles ?"
    },
    {
      id: "apt_mgr_crit_03",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "You are faced with a decision to allocate limited resources between two high-need areas. How do you prioritize the allocation?",
      prompt_fr: "Vous êtes confronté à une décision d'allouer des ressources limitées entre deux zones à besoins élevés. Comment priorisez-vous l'allocation ?"
    },
    {
      id: "apt_mgr_crit_04",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "A conflict arises between two staff members regarding patient care. How do you mediate the situation to ensure a positive outcome?",
      prompt_fr: "Un conflit survient entre deux membres du personnel concernant les soins aux patients. Comment médiez-vous la situation pour assurer un résultat positif ?"
    },
    {
      id: "apt_mgr_crit_05",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "You receive reports of inconsistent care quality across different mobile clinics under your supervision. How do you assess the situation and ensure that care standards are uniform across all clinics?",
      prompt_fr: "Vous recevez des rapports sur une qualité de soins incohérente dans différentes cliniques mobiles sous votre supervision. Comment évaluez-vous la situation et assurez-vous que les normes de soins sont uniformes dans toutes les cliniques ?"
    },
    {
      id: "apt_mgr_pers_01",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "How do you prioritize tasks when managing multiple clinic teams?",
      prompt_fr: "Comment priorisez-vous les tâches lors de la gestion de plusieurs équipes de clinique ?"
    },
    {
      id: "apt_mgr_pers_02",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "Do you prefer to lead by example or delegate responsibilities?",
      prompt_fr: "Préférez-vous diriger par l'exemple ou déléguer des responsabilités ?"
    },
    {
      id: "apt_mgr_pers_03",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "How do you handle stress when faced with tight deadlines and high-pressure situations?",
      prompt_fr: "Comment gérez-vous le stress face à des délais serrés et des situations de haute pression ?"
    },
    {
      id: "apt_mgr_pers_04",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "Describe a time when you had to make a difficult decision that impacted your team. How did you manage the situation?",
      prompt_fr: "Décrivez une situation où vous avez dû prendre une décision difficile qui a impacté votre équipe. Comment avez-vous géré la situation ?"
    },
    {
      id: "apt_mgr_pers_05",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "How do you motivate and support your team during challenging times?",
      prompt_fr: "Comment motivez-vous et soutenez-vous votre équipe pendant les périodes difficiles ?"
    },
    {
      id: "apt_mgr_tech_01",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "Explain how you would allocate limited resources during a crisis, ensuring that all clinics have the essentials they need.",
      prompt_fr: "Expliquez comment vous alloueriez des ressources limitées pendant une crise, en vous assurant que toutes les cliniques disposent de l'essentiel dont elles ont besoin."
    },
    {
      id: "apt_mgr_tech_02",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "Describe the steps you would take to improve efficiency in clinic operations, particularly focusing on reducing downtime and improving patient flow.",
      prompt_fr: "Décrivez les étapes que vous prendriez pour améliorer l'efficacité des opérations de la clinique, en vous concentrant particulièrement sur la réduction des temps d'arrêt et l'amélioration du flux de patients."
    },
    {
      id: "apt_mgr_tech_03",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "What strategies would you implement to ensure that all mobile clinics maintain high standards of patient care?",
      prompt_fr: "Quelles stratégies mettriez-vous en œuvre pour vous assurer que toutes les cliniques mobiles maintiennent des normes élevées de soins aux patients ?"
    },
    {
      id: "apt_mgr_tech_04",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "How would you handle a situation where a key staff member is unavailable at short notice, affecting clinic operations?",
      prompt_fr: "Comment géreriez-vous une situation où un membre clé du personnel n'est pas disponible à court préavis, affectant les opérations de la clinique ?"
    },
    {
      id: "apt_mgr_tech_05",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "Describe the process of creating a budget for a mobile clinic, including how you would manage unforeseen expenses.",
      prompt_fr: "Décrivez le processus de création d'un budget pour une clinique mobile, y compris comment vous géreriez les dépenses imprévues."
    },
    {
      id: "apt_mgr_sit_01",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "A major donor is visiting one of the mobile clinics. During the visit, a conflict arises among the staff about patient management. How do you handle the situation to ensure the donor's experience is positive and the conflict is resolved?",
      prompt_fr: "Un donateur majeur visite l'une des cliniques mobiles. Pendant la visite, un conflit survient parmi le personnel concernant la gestion des patients. Comment gérez-vous la situation pour vous assurer que l'expérience du donateur est positive et que le conflit est résolu ?"
    },
    {
      id: "apt_mgr_sit_02",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "A natural disaster has affected several communities served by your mobile clinics. Resources are stretched thin, and some areas are inaccessible. How do you prioritize which areas to serve first, and what steps do you take to manage the crisis?",
      prompt_fr: "Une catastrophe naturelle a affecté plusieurs communautés desservies par vos cliniques mobiles. Les ressources sont limitées et certaines zones sont inaccessibles. Comment priorisez-vous les zones à desservir en premier et quelles mesures prenez-vous pour gérer la crise ?"
    },
    {
      id: "apt_mgr_sit_03",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "You receive a request from a community that has not been previously served by the mobile clinics. How do you assess the need and decide whether to extend services to this area?",
      prompt_fr: "Vous recevez une demande d'une communauté qui n'a pas été précédemment desservie par les cliniques mobiles. Comment évaluez-vous le besoin et décidez-vous d'étendre les services à cette zone ?"
    },
    {
      id: "apt_mgr_sit_04",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "A staff member reports that a critical piece of equipment has malfunctioned, impacting clinic operations. How do you address the issue to minimize disruption?",
      prompt_fr: "Un membre du personnel signale qu'un équipement critique a mal fonctionné, impactant les opérations de la clinique. Comment résolvez-vous le problème pour minimiser les perturbations ?"
    },
    {
      id: "apt_mgr_sit_05",
      quiz_id: "aptitude_test_manager",
      type: "essay",
      prompt_en: "You are tasked with expanding the mobile clinic services to a new region. What steps do you take to ensure a smooth and successful expansion?",
      prompt_fr: "Vous êtes chargé d'étendre les services de la clinique mobile à une nouvelle région. Quelles mesures prenez-vous pour assurer une expansion fluide et réussie ?"
    },

    // Security Aptitude Test Questions
    {
      id: "apt_sec_cog_01",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "You receive a security briefing about potential threats in the area where the mobile clinic operates. How do you communicate these risks to the clinic team?",
      prompt_fr: "Vous recevez un briefing de sécurité concernant des menaces potentielles dans la zone où la clinique mobile opère. Comment communiquez-vous ces risques à l'équipe de la clinique ?"
    },
    {
      id: "apt_sec_cog_02",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "Explain how you would assess the security situation before the clinic team arrives at a new location.",
      prompt_fr: "Expliquez comment vous évalueriez la situation de sécurité avant que l'équipe de la clinique n'arrive dans un nouvel emplacement."
    },
    {
      id: "apt_sec_cog_03",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "A new security protocol is implemented for mobile clinics. How do you ensure all team members understand and follow these procedures?",
      prompt_fr: "Un nouveau protocole de sécurité est mis en place pour les cliniques mobiles. Comment vous assurez-vous que tous les membres de l'équipe comprennent et suivent ces procédures ?"
    },
    {
      id: "apt_sec_cog_04",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "Describe how you would document and report a security incident that occurred during a clinic visit.",
      prompt_fr: "Décrivez comment vous documenteriez et signaleriez un incident de sécurité survenu lors d'une visite à la clinique."
    },
    {
      id: "apt_sec_cog_05",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "How would you brief the clinic staff about emergency evacuation procedures for different types of threats?",
      prompt_fr: "Comment brieferiez-vous le personnel de la clinique sur les procédures d'évacuation d'urgence pour différents types de menaces ?"
    },
    {
      id: "apt_sec_crit_01",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "You notice suspicious activity near the mobile clinic site. What immediate steps do you take to assess and respond to the potential threat?",
      prompt_fr: "Vous remarquez une activité suspecte près du site de la clinique mobile. Quelles mesures immédiates prenez-vous pour évaluer et répondre à la menace potentielle ?"
    },
    {
      id: "apt_sec_crit_02",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "During a clinic operation, you receive intelligence about civil unrest in the area. How do you evaluate the situation and decide on appropriate actions?",
      prompt_fr: "Pendant une opération de clinique, vous recevez des renseignements sur des troubles civils dans la région. Comment évaluez-vous la situation et décidez-vous des actions appropriées ?"
    },
    {
      id: "apt_sec_crit_03",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "An unauthorized person attempts to enter a restricted area of the clinic. How do you handle this situation while maintaining patient safety?",
      prompt_fr: "Une personne non autorisée tente d'entrer dans une zone restreinte de la clinique. Comment gérez-vous cette situation tout en maintenant la sécurité des patients ?"
    },
    {
      id: "apt_sec_crit_04",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "You identify a vulnerability in the clinic's security setup. How do you prioritize addressing this issue while maintaining current operations?",
      prompt_fr: "Vous identifiez une vulnérabilité dans la configuration de sécurité de la clinique. Comment priorisez-vous la résolution de ce problème tout en maintenant les opérations actuelles ?"
    },
    {
      id: "apt_sec_crit_05",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "Medical supplies go missing from the secured storage area. How do you investigate and prevent future incidents?",
      prompt_fr: "Des fournitures médicales disparaissent de la zone de stockage sécurisée. Comment enquêtez-vous et prévenez-vous de futurs incidents ?"
    },
    {
      id: "apt_sec_pers_01",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "How do you maintain alertness and vigilance during long shifts at the clinic?",
      prompt_fr: "Comment maintenez-vous la vigilance et l'attention lors de longs quarts de travail à la clinique ?"
    },
    {
      id: "apt_sec_pers_02",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "Describe your approach to balancing firm security enforcement with maintaining a welcoming environment for patients.",
      prompt_fr: "Décrivez votre approche pour équilibrer l'application ferme de la sécurité tout en maintenant un environnement accueillant pour les patients."
    },
    {
      id: "apt_sec_pers_03",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "How do you handle situations where you must enforce rules that others may find inconvenient?",
      prompt_fr: "Comment gérez-vous les situations où vous devez appliquer des règles que d'autres peuvent trouver gênantes ?"
    },
    {
      id: "apt_sec_pers_04",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "When working under stress, do you prefer to make decisions independently or consult with team members?",
      prompt_fr: "Lorsque vous travaillez sous pression, préférez-vous prendre des décisions de manière indépendante ou consulter les membres de l'équipe ?"
    },
    {
      id: "apt_sec_pers_05",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "How do you maintain professionalism when dealing with difficult or confrontational individuals?",
      prompt_fr: "Comment maintenez-vous le professionnalisme face à des personnes difficiles ou conflictuelles ?"
    },
    {
      id: "apt_sec_tech_01",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "Describe the key elements of conducting a security perimeter check before the clinic opens.",
      prompt_fr: "Décrivez les éléments clés de la réalisation d'une vérification du périmètre de sécurité avant l'ouverture de la clinique."
    },
    {
      id: "apt_sec_tech_02",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "What procedures would you follow to secure and monitor access points during clinic operations?",
      prompt_fr: "Quelles procédures suivriez-vous pour sécuriser et surveiller les points d'accès pendant les opérations de la clinique ?"
    },
    {
      id: "apt_sec_tech_03",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "Explain how you would coordinate with local security forces or authorities when operating in a new area.",
      prompt_fr: "Expliquez comment vous vous coordonneriez avec les forces de sécurité locales ou les autorités lors d'opérations dans une nouvelle zone."
    },
    {
      id: "apt_sec_tech_04",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "What steps would you take to secure valuable medical equipment and supplies overnight in a mobile clinic setting?",
      prompt_fr: "Quelles mesures prendriez-vous pour sécuriser l'équipement médical et les fournitures précieuses pendant la nuit dans un cadre de clinique mobile ?"
    },
    {
      id: "apt_sec_tech_05",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "Describe your approach to conducting security briefings and debriefings with the clinic team.",
      prompt_fr: "Décrivez votre approche pour mener des briefings et débriefings de sécurité avec l'équipe de la clinique."
    },
    {
      id: "apt_sec_sit_01",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "A crowd gathers outside the mobile clinic, and tensions begin to rise. How do you manage the situation to ensure patient and staff safety?",
      prompt_fr: "Une foule se rassemble à l'extérieur de la clinique mobile et les tensions commencent à monter. Comment gérez-vous la situation pour assurer la sécurité des patients et du personnel ?"
    },
    {
      id: "apt_sec_sit_02",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "You witness a theft of medical supplies by someone claiming to be in desperate need. How do you respond while balancing security and compassion?",
      prompt_fr: "Vous êtes témoin d'un vol de fournitures médicales par quelqu'un qui prétend être dans un besoin désespéré. Comment répondez-vous en équilibrant sécurité et compassion ?"
    },
    {
      id: "apt_sec_sit_03",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "During clinic hours, you must evacuate the facility due to an imminent threat. Describe your evacuation plan and priorities.",
      prompt_fr: "Pendant les heures de clinique, vous devez évacuer l'établissement en raison d'une menace imminente. Décrivez votre plan d'évacuation et vos priorités."
    },
    {
      id: "apt_sec_sit_04",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "A staff member reports feeling threatened by an individual near the clinic. How do you investigate and address this concern?",
      prompt_fr: "Un membre du personnel signale se sentir menacé par un individu près de la clinique. Comment enquêtez-vous et traitez-vous cette préoccupation ?"
    },
    {
      id: "apt_sec_sit_05",
      quiz_id: "aptitude_test_security",
      type: "essay",
      prompt_en: "You discover that security protocols were not followed during the previous shift, creating a vulnerability. How do you address this with the team?",
      prompt_fr: "Vous découvrez que les protocoles de sécurité n'ont pas été suivis lors du quart précédent, créant une vulnérabilité. Comment abordez-vous cela avec l'équipe ?"
    }
  ]
};

export const rubrics = {
  doctor_rubric_v1: {
    id: "doctor_rubric_v1",
    role: "doctor",
    criteria: [
      {
        key: "cognitive",
        label_en: "Cognitive Abilities",
        label_fr: "Capacités cognitives",
        scale: {
          "1": "Limited understanding",
          "3": "Adequate reasoning",
          "5": "Excellent analysis"
        }
      },
      {
        key: "critical",
        label_en: "Critical Thinking",
        label_fr: "Esprit critique",
        scale: {
          "1": "Weak judgment",
          "3": "Reasonable approach",
          "5": "Sound, proactive decisions"
        }
      },
      {
        key: "technical",
        label_en: "Technical Skills",
        label_fr: "Compétences techniques",
        scale: {
          "1": "Needs significant training",
          "3": "Meets baseline",
          "5": "Operates independently"
        }
      },
      {
        key: "communication",
        label_en: "Communication/Professionalism",
        label_fr: "Communication/Professionnalisme",
        scale: {
          "1": "Unclear/inappropriate",
          "3": "Generally professional",
          "5": "Consistently clear & professional"
        }
      },
      {
        key: "situational",
        label_en: "Situational Judgment",
        label_fr: "Jugement situationnel",
        scale: {
          "1": "Poor prioritization",
          "3": "Some guidance needed",
          "5": "Effective under pressure"
        }
      }
    ],
    recommendation_scale: ["Not Recommended", "Recommended", "Highly Recommended"]
  }
};

// Helper to get rubric with shared criteria
export const getRubric = (rubricId: string) => {
  const baseRubric = rubrics.doctor_rubric_v1;
  
  const rubricMap: Record<string, any> = {
    doctor_rubric_v1: baseRubric,
    nurse_rubric_v1: { id: "nurse_rubric_v1", role: "nurse", criteria: baseRubric.criteria, recommendation_scale: baseRubric.recommendation_scale },
    driver_rubric_v1: { id: "driver_rubric_v1", role: "driver", criteria: baseRubric.criteria, recommendation_scale: baseRubric.recommendation_scale },
    manager_rubric_v1: { id: "manager_rubric_v1", role: "manager", criteria: baseRubric.criteria, recommendation_scale: baseRubric.recommendation_scale },
    security_rubric_v1: { id: "security_rubric_v1", role: "security", criteria: baseRubric.criteria, recommendation_scale: baseRubric.recommendation_scale }
  };
  
  return rubricMap[rubricId] || baseRubric;
};

export const evaluations = {
  doctor_final_eval_v1: {
    id: "doctor_final_eval_v1",
    role: "doctor",
    sections: [
      {
        name_en: "Aptitude Test Results",
        name_fr: "Résultats du test d'aptitude",
        fields: ["Cognitive", "Critical Thinking", "Personality", "Technical", "Situational"]
      },
      {
        name_en: "Interview Performance",
        name_fr: "Performance à l'entretien",
        fields: ["Communication", "Clinical Knowledge", "Problem-Solving", "Empathy/Patient Care", "Professionalism"]
      },
      {
        name_en: "Overall Evaluation",
        name_fr: "Évaluation globale",
        fields: ["Test Performance", "Interview Performance", "Fit for Role", "Recommendation"]
      },
      {
        name_en: "Final Comments",
        name_fr: "Commentaires finaux",
        fields: ["Comments"]
      }
    ]
  },
  driver_final_eval_v1: {
    id: "driver_final_eval_v1",
    role: "driver",
    sections: [
      {
        name_en: "Aptitude Test Results",
        name_fr: "Résultats du test d'aptitude",
        fields: ["Cognitive", "Critical Thinking", "Personality", "Technical", "Situational"]
      },
      {
        name_en: "Interview Performance",
        name_fr: "Performance à l'entretien",
        fields: ["Communication", "Problem-Solving", "Stress Management", "Professionalism"]
      },
      {
        name_en: "Overall Evaluation",
        name_fr: "Évaluation globale",
        fields: ["Test Performance", "Interview Performance", "Fit for Role", "Recommendation"]
      },
      {
        name_en: "Final Comments",
        name_fr: "Commentaires finaux",
        fields: ["Comments"]
      }
    ]
  }
};

// Helper to get evaluation with shared sections
export const getEvaluation = (evalId: string) => {
  const doctorEval = evaluations.doctor_final_eval_v1;
  const driverEval = evaluations.driver_final_eval_v1;
  
  const evalMap: Record<string, any> = {
    doctor_final_eval_v1: doctorEval,
    nurse_final_eval_v1: { id: "nurse_final_eval_v1", role: "nurse", sections: doctorEval.sections },
    driver_final_eval_v1: driverEval,
    manager_final_eval_v1: { id: "manager_final_eval_v1", role: "manager", sections: doctorEval.sections },
    security_final_eval_v1: { id: "security_final_eval_v1", role: "security", sections: driverEval.sections }
  };
  
  return evalMap[evalId] || doctorEval;
};
