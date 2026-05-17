export type Lang = 'fr' | 'en';

export type Localized<T = string> = { fr: T; en: T };

export interface Experience {
  co: string;
  role: Localized;
  period: string;
  loc: string;
  desc: Localized;
  current?: boolean;
}

export interface SkillGroup {
  label: Localized;
  items: string[];
}

export const CV = {
  meta: {
    name: 'Bryan Boulé',
    handle: '@bryanboule',
    email: 'bryanboule@gmail.com',
    linkedin: 'https://www.linkedin.com/in/bryan-boule',
    company: 'https://huvy.fr/',
    location: { fr: 'France', en: 'France' } as Localized,
  },

  hero: {
    role: { fr: 'Co-fondateur & CTO', en: 'Co-founder & CTO' } as Localized,
    at: 'HUVY',
    tagline: {
      fr: ['Je construis une IA médicale', 'qui détecte le mélanome', "avant qu'il ne soit trop tard."],
      en: ['I build a medical AI', 'that catches melanoma', "before it's too late."],
    } as Localized<string[]>,
  },

  about: {
    title: { fr: 'À propos', en: 'About' } as Localized,
    body: {
      fr: `En tant que co-fondateur & CTO de HUVY, je dirige le développement d'un dispositif médical IA certifié CE Classe IIb pour l'évaluation du risque de mélanome, conçu pour les professionnels de santé en première ligne.

Mon travail se situe à l'intersection de la vision par ordinateur, de la validation clinique, et de la régulation des dispositifs médicaux. Je m'attache à construire des systèmes qui ne soient pas seulement à la pointe techniquement, mais cliniquement sûrs et conformes aux exigences réglementaires.

Avant HUVY, j'ai construit une expertise en traitement d'image et machine learning appliquée à de nombreux domaines.`,
      en: `As co-founder & CTO of HUVY, I lead the development of a CE Class IIb certified AI medical device for melanoma risk assessment, designed for frontline healthcare professionals.

My work sits at the intersection of computer vision, clinical validation, and medical device regulation. I care about building systems that are not just technically SOTA, but clinically safe and regulatory-proof.

Before HUVY, I built expertise in image processing and machine learning applied to many domains.`,
    } as Localized,
  },

  huvy: {
    title: { fr: "Cas d'étude", en: 'Case study' } as Localized,
    name: 'HUVY',
    mission: {
      fr: "Accélérer l'accès à la dermatologie via une IA de détection du mélanome cutané, à destination des professionnels de santé de première ligne.",
      en: 'Accelerate access to dermatology through an AI for cutaneous melanoma detection, designed for frontline healthcare professionals.',
    } as Localized,
    role: { fr: 'Co-fondateur & CTO', en: 'Co-founder & CTO' } as Localized,
    since: 'sept. 2021',
    tech: ['Computer Vision', 'CE Class IIb', 'Clinical Validation', 'MLOps'],
    impact: [
      { fr: 'Label garantissant la conformité aux normes européennes et autorisant la mise sur le marché.', en: 'Label certifying compliance with European standards and authorizing market access.', metric: 'Dispositif Médical CE IIb' },
      { fr: 'Brevet obtenu le 9 février 2024 (2401304).', en: 'Granted on February 9, 2024 (2401304).', metric: 'Solution brevetée' },
      { fr: '4 études cliniques sur plus de 3000 patients.', en: '4 clinical studies on more than 3000 patients.', metric: 'Testé cliniquement' },
      { fr: 'Performances cliniques de détection du mélanome.', en: 'Clinical performance for melanoma detection.', metric: '96% de sensibilité, 72% de spécificité' },
    ] as ({ metric: string } & Localized)[],
  },

  experience: [
    { co: 'HUVY', role: { fr: 'Co-fondateur & CTO', en: 'Co-founder & CTO' }, period: '09.2021 - ●', loc: 'France',
      desc: { fr: "Direction technique d'un dispositif médical IA pour la détection du mélanome.", en: 'Technical lead of an AI medical device for melanoma detection.' }, current: true },
    { co: 'Solocal', role: { fr: 'ML Specialist', en: 'ML Specialist' }, period: '09.2022 - 02.2023', loc: 'Paris',
      desc: { fr: "OCR & R&D - extraction d'information sur documents hétérogènes.", en: 'OCR & R&D - information extraction across heterogeneous documents.' } },
    { co: 'Solocal', role: { fr: 'Senior Data Scientist', en: 'Senior Data Scientist' }, period: '07.2021 - 12.2021', loc: 'Paris',
      desc: { fr: 'SEO ranking, CI/CD, ML design patterns, mentorat.', en: 'SEO ranking, CI/CD, ML design patterns, mentoring.' } },
    { co: 'BENEXT (OCTO)', role: { fr: 'Data Scientist', en: 'Data Scientist' }, period: '07.2020 - 06.2021', loc: 'Paris',
      desc: { fr: 'Scoring client, NLP/BERT, OCR sinistres auto, workshops IA.', en: 'Client scoring, NLP/BERT, OCR for car accident forms, AI workshops.' } },
    { co: 'Virtuo', role: { fr: 'Data Scientist', en: 'Data Scientist' }, period: '10.2019 - 03.2020', loc: 'Paris',
      desc: { fr: 'Pricing dégressif, détection de fraude, data lake RGPD.', en: 'Degressive pricing, fraud detection, GDPR-compliant data lake.' } },
    { co: 'SCOR', role: { fr: 'Data Scientist R&D', en: 'Data Scientist R&D' }, period: '06.2019 - 09.2019', loc: 'Singapour',
      desc: { fr: "Library ML survie, modèle d'âge biologique, dashboards REST.", en: 'Survival data ML library, biological age model, REST dashboards.' } },
    { co: 'SingularityNET', role: { fr: 'AI Consultant', en: 'AI Consultant' }, period: '03.2019 - 04.2019', loc: 'Paris',
      desc: { fr: "Marketplace décentralisée d'IA - conseil.", en: 'Decentralized AI marketplace - consulting.' } },
    { co: 'Universiti Teknologi PETRONAS', role: { fr: 'ML Researcher', en: 'ML Researcher' }, period: '03.2018 - 08.2018', loc: 'Malaisie',
      desc: { fr: 'GA pour TSP, calcul parallèle CUDA/OpenMP, supercalculateur ROMEO.', en: 'GA for TSP, parallel computing CUDA/OpenMP, ROMEO supercomputer.' } },
  ] as Experience[],

  skills: {
    title: { fr: 'Stack & compétences', en: 'Stack & skills' } as Localized,
    groups: [
      { label: { fr: 'IA & Vision', en: 'AI & Vision' }, items: ['Computer Vision', 'Deep Learning', 'PyTorch'] },
      { label: { fr: 'Medtech / Régulation', en: 'Medtech / Regulation' }, items: ['SaMD', 'CE Class IIb', 'Clinical Validation', 'ISO/GDPR Compliance'] },
      { label: { fr: 'Tech', en: 'Tech' }, items: ['Python', 'CUDA', 'CI/CD', 'MLOps', 'REST APIs'] },
      { label: { fr: 'Leadership', en: 'Leadership' }, items: ['AI Product Strategy', 'Team Building', 'Mentorat'] },
    ] as SkillGroup[],
  },

  education: {
    title: { fr: 'Formation', en: 'Education' } as Localized,
    items: [
      { school: 'ENSAE ParisTech', degree: { fr: 'MSc Data Science - Mathématiques & Statistiques', en: 'MSc Data Science - Math. & Statistics' }, period: '2018 - 2019' },
      { school: 'Télécom SudParis', degree: { fr: 'Ingénieur - Mathématiques & Statistiques Appliquées', en: 'Engineering - Applied Math. & Statistics' }, period: '2015 - 2018' },
      { school: 'Lycée Henri Poincaré', degree: { fr: 'Classe préparatoire', en: 'Preparatory school' }, period: '2013 - 2015' },
    ] as { school: string; degree: Localized; period: string }[],
  },

  honors: {
    title: { fr: 'Brevets & distinctions', en: 'Patents & honors' } as Localized,
    items: [
      { kind: 'patent', fr: 'Détection du mélanome cutané par intelligence artificielle', en: 'Detection of cutaneous melanoma by artificial intelligence' },
      { kind: 'award', fr: 'Vainqueur Hackathon Fintech Machine Learning 2019', en: 'Winner - Fintech Machine Learning Hackathon 2019' },
      { kind: 'award', fr: 'BSPP - Meilleur projet de développement IT (Serious Game)', en: 'BSPP - Best IT development project (Serious Game)' },
      { kind: 'cert', fr: 'Stanford - Machine Learning · 98.8%', en: 'Stanford - Machine Learning · 98.8%' },
      { kind: 'cert', fr: 'Career Track - Data Science', en: 'Career Track - Data Science' },
    ] as ({ kind: 'patent' | 'award' | 'cert' } & Localized)[],
  },

  languages: {
    title: { fr: 'Langues', en: 'Languages' } as Localized,
    items: [
      { fr: 'Français', en: 'French', level: { fr: 'Natif', en: 'Native' }, value: 5 },
      { fr: 'Anglais', en: 'English', level: { fr: 'Professionnel', en: 'Professional' }, value: 4 },
      { fr: 'Allemand', en: 'German', level: { fr: 'Limité', en: 'Limited' }, value: 2 },
      { fr: 'Chinois', en: 'Chinese', level: { fr: 'Notions', en: 'Elementary' }, value: 1 },
    ] as ({ level: Localized; value: number } & Localized)[],
  },

  contact: {
    title: { fr: 'Contact', en: 'Get in touch' } as Localized,
    locked: {
      fr: "Résous le puzzle d'échecs du jour pour débloquer mon email.",
      en: "Solve today's chess puzzle to unlock my email.",
    } as Localized,
    unlocked: {
      fr: "Tu l'as eu. Bien joué.",
      en: 'Got it. Nicely played.',
    } as Localized,
  },

  ui: {
    cta_work: { fr: 'Mes projets', en: 'My work' } as Localized,
    cta_contact: { fr: 'Me contacter', en: 'Contact me' } as Localized,
    today: { fr: "Aujourd'hui", en: 'Today' } as Localized,
    chess_hint: { fr: 'Les Blancs jouent et matent en 1', en: 'White to play, mate in 1' } as Localized,
    chess_solved: { fr: 'Échec et mat - email débloqué', en: 'Checkmate - email unlocked' } as Localized,
    chess_try: { fr: 'Pas tout à fait. Essaie encore.', en: 'Not quite. Try again.' } as Localized,
    chess_reset: { fr: 'Recommencer', en: 'Reset' } as Localized,
    send_email: { fr: 'Envoyer un email', en: 'Send an email' } as Localized,
    copy_email: { fr: 'Copier', en: 'Copy' } as Localized,
    copied: { fr: 'Copié !', en: 'Copied!' } as Localized,
  },
};
