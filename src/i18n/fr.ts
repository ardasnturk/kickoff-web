import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    title: "Kickoff – Scores de foot en direct et prévisions IA pour iPhone",
    description:
      "Kickoff apporte gratuitement sur iPhone et iPad les scores de football en direct, les compositions, les statistiques et les alertes de milliers de compétitions. Kickoff Pro ajoute des prévisions IA pour chaque match et vous laisse diriger l'équipe vous-même.",
  },
  nav: { features: "Fonctionnalités", pro: "Pro", fair: "Fair-play", faq: "FAQ", language: "Langue", skip: "Aller au contenu" },
  hero: {
    eyebrow: "Scores de foot en direct pour iPhone",
    title: "Chaque match, chaque but,",
    highlight: "à l'instant où il se produit.",
    subtitle:
      "Scores en direct, événements minute par minute, compositions, statistiques et alertes de milliers de compétitions, gratuitement. Kickoff Pro ajoute des prévisions IA et vous laisse diriger l'équipe vous-même.",
    badges: ["Scores en direct gratuits", "Sans compte", "Activités en direct"],
    screenshotAlt: "L'écran Matchs de Kickoff avec les scores en direct",
  },
  appStore: { small: "Télécharger dans l'", large: "App Store", soon: "Bientôt sur l'App Store" },
  trust: [
    { title: "Des milliers de compétitions", text: "Les grands championnats et coupes du monde entier." },
    { title: "Sans compte", text: "Suivez vos équipes sans inscription." },
    { title: "Sans pub ni pistage", text: "Rien ne vous gêne pendant le match." },
    { title: "iPhone, iPad et iPhone Duo", text: "Conçu pour chaque écran, sous iOS 26.1 ou version ultérieure." },
  ],
  features: {
    title: "Tout le match dans votre poche",
    subtitle: "Tout ce qu'il faut pour suivre le football, gratuitement.",
    items: [
      {
        title: "Minute par minute",
        text: "Buts, cartons et remplacements à l'instant où ils se produisent, sur une chronologie claire du match.",
        points: ["Scores en direct de milliers de compétitions", "Les événements en temps réel", "Les matchs et résultats du jour en un coup d'œil"],
        alt: "Page du match avec le score et la chronologie des événements",
      },
      {
        title: "Les compositions sur le terrain",
        text: "Voyez les deux équipes alignées dans leur schéma tactique, avec les remplaçants et les entraîneurs.",
        points: ["Schémas tactiques dessinés sur le terrain", "Remplaçants et entraîneurs", "Les onze de départ dès leur annonce"],
        alt: "Les deux compositions dessinées sur un terrain de football",
      },
      {
        title: "Statistiques, classements et confrontations",
        text: "Possession, tirs et tous les autres chiffres, le classement en direct et l'historique des rencontres entre les deux équipes.",
        points: ["Statistiques du match côte à côte", "Classements mis à jour en direct", "Les précédentes confrontations des deux équipes"],
        alt: "Statistiques du match comparant les deux équipes",
      },
    ],
  },
  everywhere: {
    title: "Sur votre iPhone, pas seulement dans l'app",
    subtitle: "Kickoff vous tient informé, où que vous regardiez.",
    items: [
      { title: "Des alertes qui comptent", text: "Buts, cartons rouges, coup d'envoi et coup de sifflet final pour les équipes et matchs que vous suivez." },
      { title: "Activités en direct", text: "Le score sur l'écran verrouillé et dans la Dynamic Island pendant le match." },
      { title: "Widgets de l'écran d'accueil", text: "Le score en direct, le prochain match ou le dernier résultat de votre équipe en un coup d'œil." },
      { title: "Centre de contrôle et Siri", text: "Accédez aux matchs en direct depuis le centre de contrôle ou demandez à Siri le score de votre équipe." },
      { title: "Aucun compte nécessaire", text: "Suivez équipes et championnats tout de suite ; ils se synchronisent avec vos autres appareils via iCloud." },
      { title: "Chaque écran", text: "iPhone, iPad et les deux écrans de l'iPhone Duo, en portrait comme en paysage." },
    ],
  },
  pro: {
    eyebrow: "Kickoff Pro",
    title: "L'IA pour chaque match",
    subtitle: "Les scores en direct restent gratuits. Kickoff Pro est un abonnement facultatif pour ceux qui veulent voir plus loin.",
    cards: [
      {
        title: "Prévision IA",
        text: "Probabilités de victoire, de nul et de défaite, buts attendus et scores les plus probables, issus d'un modèle statistique testé sur plus de 12 000 matchs.",
        alt: "Prévision IA avec probabilités de victoire, buts attendus et scores les plus probables",
      },
      {
        title: "Diriger l'équipe",
        text: "La composition ne vous convient pas ? Choisissez le schéma et votre propre onze, et regardez les probabilités évoluer.",
        alt: "Écran Diriger l'équipe avec votre propre onze sur le terrain",
      },
      {
        title: "Jouer le match",
        text: "Jouez-le minute par minute contre le vrai adversaire, puis comparez votre résultat avec la réalité.",
        alt: "Simulation du match minute par minute avec commentaires",
      },
    ],
    freeTitle: "Toujours gratuit",
    free: [
      "Scores en direct et événements minute par minute",
      "Compositions, statistiques, classements et confrontations",
      "Alertes de buts, cartons rouges, coup d'envoi et fin de match",
      "Activités en direct et Dynamic Island",
      "Widgets, centre de contrôle et raccourcis Siri",
      "Suivi d'équipes et de championnats, synchronisé avec iCloud",
    ],
    proTitle: "Kickoff Pro",
    proItems: [
      "Prévision IA pour chaque match",
      "Analyse rédigée sur votre appareil par Apple Intelligence",
      "Diriger l'équipe : votre onze contre le vrai adversaire",
      "Vos simulations enregistrées et comparées au vrai résultat",
    ],
    note: "Abonnement hebdomadaire, mensuel ou annuel ; les prix sont indiqués dans l'app. Sans Pro, un match par semaine peut être ouvert gratuitement. Les analyses sont rédigées sur votre appareil par Apple Intelligence sur les appareils compatibles ; rien de ce que vous faites n'est envoyé à un service d'IA.",
  },
  fair: {
    eyebrow: "Fair-play",
    title: "Le football d'abord. Rien d'autre.",
    text: "Kickoff n'a ni compte, ni publicité, ni pistage. L'app ne garde que ce qu'il faut pour envoyer les alertes que vous demandez.",
    points: [
      { title: "Sans compte", text: "Chaque appareil se connecte de façon anonyme. Ni nom, ni e-mail, ni compte Apple requis." },
      { title: "Ni pub ni pistage", text: "Aucune publicité et aucun pistage. Vos données ne sont jamais vendues." },
      { title: "Pour le plaisir, pas pour parier", text: "Les prévisions et simulations sont des estimations statistiques à des fins de divertissement, pas des conseils de paris." },
      { title: "Uniquement des jetons gratuits", text: "Le jeu de pronostics facultatif utilise des jetons gratuits : pas d'argent réel et rien à gagner." },
    ],
    link: "Lire la politique de confidentialité",
  },
  faq: {
    title: "Questions",
    items: [
      { q: "Kickoff est-il gratuit ?", a: "Oui. Les scores en direct, les événements, les compositions, les statistiques, les classements, les alertes, les Activités en direct et les widgets sont gratuits. Kickoff Pro est un abonnement facultatif pour les fonctionnalités d'IA." },
      { q: "Faut-il un compte ?", a: "Non. Chaque appareil se connecte de façon anonyme, et les équipes que vous suivez se synchronisent avec vos autres appareils via votre iCloud." },
      { q: "Les prévisions sont-elles fiables ?", a: "Elles proviennent d'un modèle statistique testé sur plus de 12 000 matchs. Ce sont des estimations, pas des certitudes, conçues pour le divertissement et non pour parier." },
      { q: "Pourquoi n'y a-t-il pas de prévision pour un match ?", a: "Le modèle a besoin de quelques matchs de championnat des deux équipes ; les matchs de coupe et les premières semaines d'une saison n'en ont souvent pas encore assez." },
      { q: "Le jeu de pronostics implique-t-il de l'argent ?", a: "Non. Les jetons sont gratuits, ne peuvent pas être achetés et n'ont aucune valeur en dehors du jeu." },
      { q: "Quels appareils sont compatibles ?", a: "iPhone et iPad sous iOS 26.1 ou version ultérieure, y compris les deux écrans de l'iPhone Duo. Les analyses d'Apple Intelligence nécessitent un appareil compatible." },
    ],
  },
  cta: { title: "Ne manquez plus jamais un but", text: "Téléchargez Kickoff et suivez votre équipe en quelques secondes, sans compte." },
  footer: {
    tagline: "Scores de foot en direct et prévisions IA pour iPhone.",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    support: "Assistance",
    disclaimer: "Les prévisions et simulations sont des estimations statistiques à des fins de divertissement et ne constituent pas des conseils de paris. Kickoff n'est affilié à aucun championnat, club ou fédération.",
    data: "Données des matchs fournies par API-Football.",
  },
  legal: { updated: "Dernière mise à jour", back: "Retour à l'accueil", contact: "Contact" },
  terms: {
    title: "Conditions d'utilisation",
    intro: [
      { p: "Kickoff est développé par {developer}. Votre utilisation de l'app est régie par le contrat de licence utilisateur final standard d'Apple pour les applications sous licence (EULA) : https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" },
      { p: "Cette page en résume les points principaux et ajoute ce qui s'applique à Kickoff Pro. En cas de divergence avec l'EULA, c'est l'EULA qui prévaut." },
    ],
    sections: [
      {
        title: "Licence",
        blocks: [
          { p: "Vous recevez une licence personnelle et non transférable pour utiliser Kickoff sur les appareils Apple que vous possédez ou contrôlez, dans les limites des règles d'utilisation de l'App Store. Vous ne pouvez pas copier, modifier, revendre ni rétroconcevoir l'app." },
        ],
      },
      {
        title: "Abonnement Kickoff Pro",
        blocks: [
          {
            ul: [
              "Kickoff Pro est proposé sous forme d'abonnement hebdomadaire, mensuel ou annuel à renouvellement automatique. Les prix sont indiqués dans l'app avant l'achat.",
              "Le paiement est débité de votre compte Apple à la confirmation de l'achat.",
              "L'abonnement se renouvelle automatiquement, sauf s'il est résilié au moins 24 heures avant la fin de la période en cours. Le renouvellement est facturé dans les 24 heures précédant la fin de la période.",
              "Vous pouvez gérer ou résilier l'abonnement dans les réglages de votre compte App Store.",
              "Si un essai gratuit est proposé, la partie non utilisée est perdue lorsque vous vous abonnez.",
              "Sans Pro, un match par semaine peut être ouvert gratuitement.",
            ],
          },
        ],
      },
      {
        title: "Prévisions et jeu de pronostics",
        blocks: [
          { p: "Les prévisions, analyses et simulations sont des estimations statistiques à des fins de divertissement. Elles ne constituent pas des conseils de paris et rien ne garantit leur exactitude." },
          { p: "Le jeu de pronostics facultatif utilise uniquement des jetons virtuels gratuits. Les jetons ne peuvent pas être achetés, n'ont aucune valeur en dehors du jeu et il n'y a rien à gagner." },
        ],
      },
      {
        title: "Données des matchs",
        blocks: [
          { p: "Les scores, compositions et statistiques proviennent d'API-Football. Ils peuvent parfois être retardés, incomplets ou erronés. Kickoff n'est affilié à aucun championnat, club ou fédération." },
        ],
      },
      {
        title: "Achats et remboursements",
        blocks: [
          { p: "Les achats sont traités par Apple. Les demandes de remboursement sont gérées par Apple : https://reportaproblem.apple.com" },
        ],
      },
      {
        title: "Modifications et responsabilité",
        blocks: [
          { p: "Les fonctionnalités peuvent évoluer avec le temps. L'app est fournie comme décrit dans l'EULA, qui fixe également les limites de notre responsabilité dans la mesure permise par la loi." },
        ],
      },
      {
        title: "Contact",
        blocks: [{ p: "Questions sur ces conditions : {email}" }],
      },
    ],
  },
};
