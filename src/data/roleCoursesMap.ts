export type AppRole = 'investor' | 'doctor' | 'nurse' | 'driver' | 'manager' | 'security';

export const roleToCoursesMap: Record<AppRole, string[]> = {
  investor: ['orientation_common'],
  doctor: ['orientation_common', 'doctor_track'],
  nurse: ['orientation_common', 'nurse_track'],
  driver: ['orientation_common', 'driver_track'],
  manager: ['orientation_common', 'manager_track'],
  security: ['orientation_common', 'security_track'],
};

// Map roles to their specific aptitude test quiz IDs
export const roleToAptitudeTestMap: Record<AppRole, string | null> = {
  investor: null, // No role-specific test needed
  doctor: 'aptitude_test_doctor',
  nurse: 'aptitude_test_nurse',
  driver: 'aptitude_test_driver',
  manager: 'aptitude_test_manager',
  security: 'aptitude_test_security',
};

export const roleDescriptions: Record<AppRole, { en: string; fr: string }> = {
  investor: {
    en: "Responsible for funding and oversight; completes KYC/AML onboarding and reviews investor-safe materials.",
    fr: "Responsable du financement et de la supervision ; complète l'intégration KYC/AML et consulte les documents réservés aux investisseurs."
  },
  doctor: {
    en: "Provides primary and emergency care in mobile clinics; ensures quality and compliance with MSPP standards.",
    fr: "Fournit des soins primaires et d'urgence dans les cliniques mobiles ; veille à la qualité et à la conformité aux normes du MSPP."
  },
  nurse: {
    en: "Delivers nursing and community health services; supports vaccination, triage, and patient education.",
    fr: "Assure les soins infirmiers et communautaires ; soutient la vaccination, le triage et l'éducation des patients."
  },
  driver: {
    en: "Operates clinic vehicles, manages logistics, and supports field operations safely and efficiently.",
    fr: "Conduit les véhicules de la clinique, gère la logistique et soutient les opérations de terrain en toute sécurité."
  },
  manager: {
    en: "Oversees clinic teams, reporting, and compliance; ensures resources and data flow align with program goals.",
    fr: "Supervise les équipes de la clinique, le reporting et la conformité ; veille à ce que les ressources et les données soutiennent les objectifs du programme."
  },
  security: {
    en: "Protects staff, patients, and assets; maintains order, access control, and emergency response readiness.",
    fr: "Protège le personnel, les patients et les biens ; assure l'ordre, le contrôle d'accès et la préparation aux urgences."
  }
};

export const courseOutlines: Record<AppRole, { en: string[]; fr: string[] }> = {
  investor: {
    en: [
      "Overview of TGAM & SHARE mission and governance",
      "KYC/AML and ethical investing standards",
      "ESG reporting and impact metrics",
      "Accessing investor documents and updates"
    ],
    fr: [
      "Présentation de la mission et de la gouvernance TGAM & SHARE",
      "Normes KYC/AML et investissement éthique",
      "Rapports ESG et indicateurs d'impact",
      "Accès aux documents et mises à jour investisseurs"
    ]
  },
  doctor: {
    en: [
      "Mobile-clinic clinical protocols and MSPP alignment",
      "Emergency response and triage",
      "Chronic-disease management in low-resource settings",
      "Data confidentiality and reporting"
    ],
    fr: [
      "Protocoles cliniques des cliniques mobiles et alignement MSPP",
      "Réponse d'urgence et triage",
      "Gestion des maladies chroniques en milieu à ressources limitées",
      "Confidentialité et transmission des données"
    ]
  },
  nurse: {
    en: [
      "Infection prevention and wound care",
      "Vaccination and cold-chain management",
      "Maternal and child health",
      "Home-visit follow-up procedures"
    ],
    fr: [
      "Prévention des infections et soins des plaies",
      "Vaccination et gestion de la chaîne du froid",
      "Santé maternelle et infantile",
      "Suivi des visites à domicile"
    ]
  },
  driver: {
    en: [
      "Vehicle inspection and maintenance",
      "Safety and emergency procedures",
      "Route planning and fuel management",
      "Coordination with medical and security teams"
    ],
    fr: [
      "Inspection et entretien du véhicule",
      "Sécurité et procédures d'urgence",
      "Planification des itinéraires et gestion du carburant",
      "Coordination avec les équipes médicales et de sécurité"
    ]
  },
  manager: {
    en: [
      "Governance and reporting frameworks",
      "Staff scheduling and performance monitoring",
      "Budgeting and logistics management",
      "Risk assessment and audit compliance"
    ],
    fr: [
      "Cadres de gouvernance et de reporting",
      "Planification et suivi du personnel",
      "Budgétisation et gestion logistique",
      "Évaluation des risques et conformité aux audits"
    ]
  },
  security: {
    en: [
      "Access control and perimeter management",
      "Conflict de-escalation and first aid",
      "Emergency evacuation procedures",
      "Communication and incident reporting"
    ],
    fr: [
      "Contrôle d'accès et gestion du périmètre",
      "Désescalade des conflits et premiers secours",
      "Procédures d'évacuation d'urgence",
      "Communication et rapport d'incident"
    ]
  }
};

export const aptitudeTestPreviews: Record<AppRole, { en: string[]; fr: string[] }> = {
  investor: {
    en: [
      "Which policy governs ethical investment and transparency?",
      "What is the primary purpose of AML verification?"
    ],
    fr: [
      "Quelle politique régit l'investissement éthique et la transparence ?",
      "Quel est l'objectif principal de la vérification AML ?"
    ]
  },
  doctor: {
    en: [
      "What is the first priority in the ABCs of emergency care?",
      "True/False – Patient consent may be verbal if properly documented."
    ],
    fr: [
      "Quelle est la première priorité dans l'ABC des soins d'urgence ?",
      "Vrai/Faux – Le consentement du patient peut être verbal s'il est correctement documenté."
    ]
  },
  nurse: {
    en: [
      "What action should be taken if the cold chain is broken?",
      "Which of the following is a red flag in a postnatal visit?"
    ],
    fr: [
      "Quelle action doit être prise si la chaîne du froid est rompue ?",
      "Lequel des éléments suivants est un signal d'alarme lors d'une visite postnatale ?"
    ]
  },
  driver: {
    en: [
      "Before departure, what three checks must be completed?",
      "True/False – Only medical staff must know evacuation routes."
    ],
    fr: [
      "Avant le départ, quelles trois vérifications doivent être effectuées ?",
      "Vrai/Faux – Seul le personnel médical doit connaître les itinéraires d'évacuation."
    ]
  },
  manager: {
    en: [
      "Which key performance indicators track clinic efficiency?",
      "Who can access investor data?"
    ],
    fr: [
      "Quels indicateurs de performance clés suivent l'efficacité de la clinique ?",
      "Qui peut accéder aux données des investisseurs ?"
    ]
  },
  security: {
    en: [
      "What is the first action when a threat is identified?",
      "How often must communication checks occur during patrols?"
    ],
    fr: [
      "Quelle est la première action lorsqu'une menace est identifiée ?",
      "À quelle fréquence les contrôles de communication doivent-ils avoir lieu pendant les patrouilles ?"
    ]
  }
};
