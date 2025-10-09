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
      "quiz.short_answer": "Your answer:",
      "quiz.type_answer": "Type your answer here...",
      "quiz.essay_answer": "Your essay:",
      "quiz.type_essay": "Write your essay here (500-700 words recommended)...",
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
      "quiz.short_answer": "Votre réponse :",
      "quiz.type_answer": "Tapez votre réponse ici...",
      "quiz.essay_answer": "Votre essai :",
      "quiz.type_essay": "Rédigez votre essai ici (500-700 mots recommandés)...",
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
      id: "doctor_qz_main",
      course_id: "doctor_track",
      title_en: "Physician Aptitude & Scenarios",
      title_fr: "Aptitude & scénarios — Médecins",
      timeLimitSec: 3000,
      passingScore: 70
    },
    {
      id: "manager_qz_main",
      course_id: "manager_track",
      title_en: "Leadership, Finance & Ops",
      title_fr: "Leadership, finances & opérations",
      timeLimitSec: 3000,
      passingScore: 70
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
    }
  ]
};
