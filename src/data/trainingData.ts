export const trainingData = {
  meta: { bundle: "SMOKE_SEED", version: "1.0", languages: ["en", "fr"] },
  i18n: {
    en: {
      "app.title": "Gateway — Onboarding & Training",
      "nav.dashboard": "Dashboard",
      "nav.courses": "Courses",
      "nav.my_courses": "My Courses",
      "quiz.start": "Start quiz",
      "quiz.submit": "Submit",
      "quiz.passed": "Passed",
      "quiz.failed": "Failed",
      "lang.toggle": "Français",
      "dashboard.subtitle": "Track your learning progress and continue your training",
      "dashboard.active_courses": "Active Courses",
      "dashboard.in_progress": "In progress",
      "dashboard.completed": "Completed",
      "dashboard.courses_finished": "Courses finished",
      "dashboard.study_time": "Study Time",
      "dashboard.this_week": "This week",
      "dashboard.continue_learning": "Continue Learning",
      "dashboard.continue": "Continue",
      "courses.subtitle": "Browse and enroll in training courses",
      "courses.view_course": "View Course",
      "courses.lesson": "lesson",
      "courses.lessons": "lessons",
      "courses.quiz": "quiz",
      "courses.quizzes": "quizzes",
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
      "my_courses.subtitle": "Track your enrolled courses and progress",
      "my_courses.role": "Role",
      "my_courses.version": "Version",
      "my_courses.progress": "Progress"
    },
    fr: {
      "app.title": "Gateway — Intégration & Formation",
      "nav.dashboard": "Tableau de bord",
      "nav.courses": "Cours",
      "nav.my_courses": "Mes cours",
      "quiz.start": "Commencer le quiz",
      "quiz.submit": "Soumettre",
      "quiz.passed": "Réussi",
      "quiz.failed": "Échoué",
      "lang.toggle": "English",
      "dashboard.subtitle": "Suivez votre progression et continuez votre formation",
      "dashboard.active_courses": "Cours actifs",
      "dashboard.in_progress": "En cours",
      "dashboard.completed": "Terminés",
      "dashboard.courses_finished": "Cours terminés",
      "dashboard.study_time": "Temps d'étude",
      "dashboard.this_week": "Cette semaine",
      "dashboard.continue_learning": "Continuer l'apprentissage",
      "dashboard.continue": "Continuer",
      "courses.subtitle": "Parcourir et s'inscrire aux cours de formation",
      "courses.view_course": "Voir le cours",
      "courses.lesson": "leçon",
      "courses.lessons": "leçons",
      "courses.quiz": "quiz",
      "courses.quizzes": "quiz",
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
      "my_courses.subtitle": "Suivez vos cours inscrits et votre progression",
      "my_courses.role": "Rôle",
      "my_courses.version": "Version",
      "my_courses.progress": "Progression"
    }
  },
  courses: [
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
    }
  ],
  lessons: [
    {
      id: "doc_l1_en",
      course_id: "doctor_track",
      locale: "en",
      order: 1,
      title: "Diagnostic Reasoning in Mobile Clinics",
      content: "<p>Approach to diagnosis with limited tools; RDT prioritization; differential narrowing.</p>"
    },
    {
      id: "doc_l2_en",
      course_id: "doctor_track",
      locale: "en",
      order: 2,
      title: "Chronic Disease (HTN/DM/HIV)",
      content: "<p>Protocols, monitoring, adherence strategies.</p>"
    },
    {
      id: "doc_l3_en",
      course_id: "doctor_track",
      locale: "en",
      order: 3,
      title: "BLS & Trauma Triage",
      content: "<p>Primary survey, stabilization, transport.</p>"
    },
    {
      id: "doc_l4_en",
      course_id: "doctor_track",
      locale: "en",
      order: 4,
      title: "Legal/Ethical Duties",
      content: "<p>Consent, confidentiality, reporting.</p>"
    },
    {
      id: "doc_l1_fr",
      course_id: "doctor_track",
      locale: "fr",
      order: 1,
      title: "Raisonnement diagnostique en clinique mobile",
      content: "<p>Démarche diagnostique, TDR, différentiels.</p>"
    },
    {
      id: "nrs_l1_en",
      course_id: "nurse_track",
      locale: "en",
      order: 1,
      title: "Clinical Skills in Resource-Limited Settings",
      content: "<p>Vitals, injections, wound care, triage.</p>"
    },
    {
      id: "nrs_l2_en",
      course_id: "nurse_track",
      locale: "en",
      order: 2,
      title: "Infection Control & Patient Safety",
      content: "<p>PPE, sterilization, sharps, isolation.</p>"
    },
    {
      id: "nrs_l3_en",
      course_id: "nurse_track",
      locale: "en",
      order: 3,
      title: "Maternal/Child & Home Visits",
      content: "<p>Red flags, home follow-up, escalation.</p>"
    },
    {
      id: "nrs_l1_fr",
      course_id: "nurse_track",
      locale: "fr",
      order: 1,
      title: "Compétences cliniques — milieux à faibles ressources",
      content: "<p>Signes vitaux, injections, plaies, triage.</p>"
    },
    {
      id: "drv_l1_en",
      course_id: "driver_track",
      locale: "en",
      order: 1,
      title: "Safe Navigation & Route Planning",
      content: "<p>Pre-trip checks, route planning, comms.</p>"
    },
    {
      id: "drv_l2_en",
      course_id: "driver_track",
      locale: "en",
      order: 2,
      title: "Emergency Response on the Road",
      content: "<p>Breakdowns, floods, detours, med transport.</p>"
    },
    {
      id: "drv_l3_en",
      course_id: "driver_track",
      locale: "en",
      order: 3,
      title: "Field Comms & Passenger Care",
      content: "<p>Protocols, de-escalation, documentation.</p>"
    },
    {
      id: "drv_l1_fr",
      course_id: "driver_track",
      locale: "fr",
      order: 1,
      title: "Navigation sûre & planification d'itinéraires",
      content: "<p>Contrôles, planification, communications.</p>"
    },
    {
      id: "mgr_l1_en",
      course_id: "manager_track",
      locale: "en",
      order: 1,
      title: "Leadership & Team Management",
      content: "<p>Supervision, conflict resolution, coaching.</p>"
    },
    {
      id: "mgr_l2_en",
      course_id: "manager_track",
      locale: "en",
      order: 2,
      title: "Ops & Resource Allocation",
      content: "<p>Inventory, logistics, scheduling.</p>"
    },
    {
      id: "mgr_l3_en",
      course_id: "manager_track",
      locale: "en",
      order: 3,
      title: "Governance, KPIs & Reporting",
      content: "<p>Dashboards, donor packets, audits.</p>"
    },
    {
      id: "mgr_l1_fr",
      course_id: "manager_track",
      locale: "fr",
      order: 1,
      title: "Leadership & gestion d'équipe",
      content: "<p>Supervision, résolution de conflits.</p>"
    },
    {
      id: "sec_l1_en",
      course_id: "security_track",
      locale: "en",
      order: 1,
      title: "Security Protocols in Mobile Clinics",
      content: "<p>Access control, incident reporting, posture.</p>"
    },
    {
      id: "sec_l2_en",
      course_id: "security_track",
      locale: "en",
      order: 2,
      title: "Emergency Response & De-escalation",
      content: "<p>Breaches, drills, coordination.</p>"
    },
    {
      id: "sec_l3_en",
      course_id: "security_track",
      locale: "en",
      order: 3,
      title: "Access Control & Site Hardening",
      content: "<p>Perimeter, chokepoints, visitor mgmt.</p>"
    },
    {
      id: "sec_l1_fr",
      course_id: "security_track",
      locale: "fr",
      order: 1,
      title: "Protocoles de sécurité en clinique mobile",
      content: "<p>Contrôle d'accès, incidents, posture.</p>"
    }
  ],
  quizzes: [
    {
      id: "nurse_qz_smoke",
      course_id: "nurse_track",
      title_en: "Nursing Quick Check",
      title_fr: "Vérification rapide — Infirmiers/ères",
      timeLimitSec: 300,
      passingScore: 50
    }
  ],
  questions: [
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
    }
  ]
};
