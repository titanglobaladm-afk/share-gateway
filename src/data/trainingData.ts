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
      "lang.toggle": "Français"
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
      "lang.toggle": "English"
    }
  },
  courses: [
    {
      id: "nurse_track",
      title_en: "Essential Nursing Skills",
      title_fr: "Compétences infirmières essentielles",
      role_required: "nurse",
      version: "1.0"
    }
  ],
  lessons: [
    {
      id: "nurse_l1_en",
      course_id: "nurse_track",
      locale: "en",
      order: 1,
      title: "Clinical Skills in Resource-Limited Settings",
      content: "<p>Vitals, injections, wound care, triage.</p>"
    },
    {
      id: "nurse_l1_fr",
      course_id: "nurse_track",
      locale: "fr",
      order: 1,
      title: "Compétences cliniques en milieux à ressources limitées",
      content: "<p>Signes vitaux, injections, plaies, triage.</p>"
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
