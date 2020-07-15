// fr-CA.js with French translations
export default {
  hello: 'Bonjour',
  dts: 'dts-rmpFrench',
  welcome: 'preuve de concept du portail de gestion des relations!',
  getstarted: 'Commencer',
  form: {
    required: 'Champs Obligatoires'
  },

  // header
  header: {
    logoAlt: 'Gouvernement du Canada',
    linkAlt: 'Lien vers le site du gouvernement du Canada',
    homeAlt: "Lien vers la page d'acceuil RMP",
    link: 'https://www.canada.ca/fr.html',
    dashboard: 'Tableau de bord',
    logout: 'Se déconnecter',
    personIcon: "icône d'utilisateur"
  },

  // footer
  footer: {
    date: 'Date de dernière modification:',
    site: 'À propos de ce site',
    social: 'Médias sociaux',
    mobile: 'Applications mobiles',
    about: 'À propos de Canada.ca',
    terms: 'Avis',
    privacy: 'Confidentialité',
    dts: 'Solutions technologiques numériques',
    symbol: 'Symbole du gouvernement du Canada',
    top: 'Haut de page'
  },

  // app
  app: {
    dts: 'Portail de Gestion des Relations',
    welcome: 'relationship management portal proof of concept!',
    search: 'Recherche',
    add: 'Ajouter'
  },

  // error pages
  error: {
    fourofour: 'Erreur 404',
    fourofourmessage: 'Oops! Nous ne pouvons trouver cette page Web',
    fivehundred: 'Erreur 500',
    fivehundredmessage:
      'Désoler...Quelque chose s’est mal passé. S’il vous plaît essayer à nouveau plus tard.',
    buttontext: "Aller à la page d'accueil"
  },
  // contact
  contact: {
    fetching: 'FR-Fetching Information',
    fetcherror: 'FR-Error while getting information',
    // titles
    contact: 'FR-Contact Information',
    organization: 'FR-Organisation',
    information: 'FR-information',
    engagements: 'FR-Engagements',
    // fields
    create: 'FR-Create new contact',
    type: 'FR-Contact Type',
    keyContactName: 'FR-Full Name',
    keyContactTitle: 'FR-Title',
    keyContactEmail: 'FR-Email',
    keyContactAddress: 'FR-Address',
    keyContactPhone: 'FR-Phone',
    address2: 'FR-Apt / suite / etc.',
    city: 'FR-City',
    provState: 'FR-Prov. / State / Territory',
    country: 'FR-Country',
    postal: 'FR-Postal Code',
    orgEmail: 'FR-Organization Email',
    orgAddress: 'FR-Organization Address',
    orgPhone: 'FR-Organization phone',
    orgWebsite: 'FR-Organization Website',
    department: 'FR-Department',
    branch: 'FR-Branch',
    directorate: 'FR-Directorate',
    provTerritory: 'FR-Province / Territory / Indigenous',
    orgName: 'FR-Oranization Name',
    orgSector: 'FR-Organization Sector',
    contrib: 'FR-Contribution Agreement Reference',
    service: 'FR-Service Contract',
    standing: 'FR-On standing offer list',
    name: 'FR-Contact Name',
    phone: 'FR-Contact Phone',
    email: 'FR-Contact Email',
    address: 'FR-Contact Address',
    // Options
    federal: 'FR-Federal',
    external: 'FR-External',
    provincial: 'FR-Provincial',
    international: 'FR-International',
    selCountry: 'FR-Select a country',
    canada: 'FR-Canada',
    mexico: 'FR-Mexico',
    england: 'FR-England',
    selProvince: 'FR-Select a country',
    ab: 'Alberta',
    bc: 'fr-British Columbia',
    mb: 'fr-Manitoba',
    nb: 'fr-New Brunswick',
    nfl: 'fr-Newfoundland and Labrador',
    ns: 'fr-Nova Scotia',
    on: 'fr-Ontario',
    pei: 'fr-Prince Edward Island',
    qc: 'fr-Quebec',
    sk: 'fr-Saskatchewan',
    nwt: 'fr-Northwest Territories',
    nu: 'fr-Nunavut',
    yk: 'fr-Yukon',
    true: 'FR-True',
    false: 'FR-False',
    // buttons
    cancel: 'FR-Cancel',
    save: 'Sauvegarder',
    back: 'Retour', // We can say Retourner as well
    edit: 'Modifier',
    // view contact
    otherpeople: 'FR-other participants'
  },

  contactValidation: {
    errorListTitle: 'FR-The following fields have errors:',
    required: 'FR-This field is required',
    invalidEmail: 'FR-Not a valid email address'
  },

  // Navigation search Component
  NavBtn: {
    AddConEn: 'Ajouter des contacts et des engagements',
    SearchConEn: 'Rechercher des contacts et des engagements'
  },
  // engagement
  engagement: {
    engagment: 'Engagement',
    contactName: 'Nom du contact',
    subject: 'Matière',
    type: "Type d'engagement",
    date: 'Date',
    numParticipants: 'Nombre de participants',
    description:
      'Description (1000 caractères maximum. Les caractères supplémentaires ne seront pas enregistrés.)',
    policy: 'Politique / programme',
    tags: 'Mots clés:',
    tagLabel: 'Commencez à taper et sélectionnez la balise existante ou appuyez sur Entrée pour ajouter de nouvelles balises',
    comments:
      'Commentaires (140 caractères maximum. Les caractères supplémentaires ne seront pas enregistrés.)',
    cancel: 'Annuler',
    save: 'Sauver',
    edit: 'Modifier',
    typing: 'Commencez par taper',
    // view contact card
    engagement: 'FR-Engagement :',
    contacts: 'FR-Contact(s) :',
    numpeople: 'FR-Number of participants :',
    otherParticipants: 'autres participants',
    selectContact: 'Sélectionnez un contact'
  },
  engagementValidation: {
    messageTitle: 'Les champs suivants contiennent des erreurs',
    required: 'Ce champ est requis',
    maxTags: 'Vous ne pouvez pas créer plus de 3 balises',
    maxTagLength: 'La longueur du texte ne doit pas dépasser 10 caractères',
    minParticipant: 'Vous ne pouvez pas avoir moins de 1 participant',
    validDate: 'Veuillez choisir une date',
    duplicateTags: 'La balise existe déjà, veuillez entrer un autre nom de balise',
    duplicateContacts: 'Le contact existe déjà, veuillez sélectionner un autre nom de contact'
  },
  // EngSelectContact component
  engSelect: {
    engagement: 'Nouvel engagement',
    contact: 'Contact',
    contact2: 'Numéro de contact 2',
    remove: 'Retirer',
    add: 'Ajouter plus de contacts'
  }
}
