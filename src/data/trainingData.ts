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
      "my_courses.progress": "Progress",
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
      "eval.comments": "Final Comments"
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
      "my_courses.progress": "Progression",
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
      "eval.comments": "Commentaires finaux"
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
      id: "nurse_qz_bank_v2",
      course_id: "nurse_track",
      title_en: "Nursing Master Bank — Skills & Scenarios",
      title_fr: "Banque maîtresse — Compétences & scénarios (Infirmiers/ères)",
      timeLimitSec: 3000,
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
    },
    {
      id: "security_qz_main",
      course_id: "security_track",
      title_en: "Security Protocols & Judgment",
      title_fr: "Protocoles de sécurité & jugement",
      timeLimitSec: 2400,
      passingScore: 70
    },
    {
      id: "doctor_qz_bank_v2",
      course_id: "doctor_track",
      title_en: "Physician Master Bank — Clinical & Scenarios",
      title_fr: "Banque maîtresse — Clinique & scénarios (Médecins)",
      timeLimitSec: 3600,
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
