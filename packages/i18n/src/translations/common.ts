export const commonTranslations = {
  en: {
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    create: "Create",
    search: "Search",
    settings: "Settings",
    loading: "Loading...",
    logout: "Logout",

    home: "Home",
    governmentJobs: "Government Jobs",
    governmentSchemes: "Government Schemes",
    results: "Results",
    admitCards: "Admit Cards",
    guides: "Articles & Guides",
    videos: "Videos",
    contact: "Contact",
  },

  mr: {
    save: "जतन करा",
    cancel: "रद्द करा",
    delete: "हटवा",
    edit: "संपादित करा",
    create: "तयार करा",
    search: "शोधा",
    settings: "सेटिंग्ज",
    loading: "लोड होत आहे...",
    logout: "बाहेर पडा",

    home: "मुख्यपृष्ठ",
    governmentJobs: "सरकारी नोकरी",
    governmentSchemes: "शासकीय योजना",
    results: "निकाल",
    admitCards: "प्रवेशपत्र",
    guides: "लेख आणि मार्गदर्शक",
    videos: "व्हिडिओ",
    contact: "संपर्क",
  },

  hi: {
    save: "सेव करें",
    cancel: "रद्द करें",
    delete: "हटाएं",
    edit: "संपादित करें",
    create: "बनाएं",
    search: "खोजें",
    settings: "सेटिंग्स",
    loading: "लोड हो रहा है...",
    logout: "लॉग आउट",

    home: "मुखपृष्ठ",
    governmentJobs: "सरकारी नौकरी",
    governmentSchemes: "सरकारी योजनाएँ",
    results: "परिणाम",
    admitCards: "प्रवेश पत्र",
    guides: "लेख और मार्गदर्शक",
    videos: "वीडियो",
    contact: "संपर्क",
  },
} as const;

export type CommonTranslationKey =
  keyof typeof commonTranslations.en;