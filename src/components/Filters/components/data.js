export const _getDialogRoles = [
  {
    description: "Administration",
    displayName: "Administrator",
    displayNameLanguageKey: "ADMINISTRATOR_DIALOG_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "ADMINISTRATOR_DIALOG_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "Administration",
        displayName: "Administrator",
        language: "en"
      },
      { description: "מנהלן", displayName: "מנהלן", language: "he" }
    ],
    notes: "",
    systemName: "administrator_dialog",
    baseRole: { key: "ADMINISTRATOR", value: "6" },
    clientId: null,
    createdBy: null,
    dateCreated: 1328012179730,
    dateModified: 1535618967000,
    modifiedBy: null,
    workspaceId: "Administrator",
    color: "gray",
    icon: "fa-cog",
    productSN: "administration",
    deleted: false,
    licenseRole: 1,
    helixRole: 1,
    id: "6",
    newInstance: false,
    outOfTheBox: true,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Solution Designer",
    displayNameLanguageKey: "ADMINISTRATOR_SOLUTIONDESIGNER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "ADMINISTRATOR_SOLUTIONDESIGNER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Solution Designer",
        language: "en"
      },
      { description: "", displayName: "מעצב הפתרון", language: "he" }
    ],
    notes: "",
    systemName: "administrator_solutiondesigner",
    baseRole: { key: "ADMINISTRATOR", value: "6" },
    clientId: null,
    createdBy: null,
    dateCreated: 1332924715257,
    dateModified: 1332924715000,
    modifiedBy: null,
    workspaceId: "Solution Designer",
    color: null,
    icon: "fa-wrench",
    productSN: "solution_designer",
    deleted: false,
    licenseRole: 0,
    helixRole: 1,
    id: "18",
    newInstance: false,
    outOfTheBox: true,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "SUPER_USER_DIALOG_ROLE_DISPLAY_NAME",
    displayNameLanguageKey: "SUPER_USER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "SUPER_USER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "SUPER_USER_DIALOG_ROLE_DISPLAY_NAME",
        language: "en"
      },
      {
        description: "",
        displayName: "SUPER_USER_DIALOG_ROLE_DISPLAY_NAME",
        language: "he"
      }
    ],
    notes: "",
    systemName: "super_user",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1518326399110,
    dateModified: 1518326399000,
    modifiedBy: null,
    workspaceId: "Employee",
    color: null,
    icon: null,
    productSN: null,
    deleted: false,
    licenseRole: 3,
    helixRole: 2,
    id: "28",
    newInstance: false,
    outOfTheBox: true,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "VIEW_ONLY_DIALOG_ROLE_DISPLAY_NAME",
    displayNameLanguageKey: "VIEW_ONLY_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "VIEW_ONLY_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "VIEW_ONLY_DIALOG_ROLE_DISPLAY_NAME",
        language: "en"
      },
      {
        description: "",
        displayName: "VIEW_ONLY_DIALOG_ROLE_DISPLAY_NAME",
        language: "he"
      }
    ],
    notes: "",
    systemName: "view_only",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1518326399207,
    dateModified: 1518326399000,
    modifiedBy: null,
    workspaceId: "Employee",
    color: null,
    icon: null,
    productSN: null,
    deleted: false,
    licenseRole: 3,
    helixRole: 2,
    id: "29",
    newInstance: false,
    outOfTheBox: true,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Budget Plan Owner",
    displayNameLanguageKey: "CSE_ROLE_BUDGETPLANOWNER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_BUDGETPLANOWNER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Budget Plan Owner",
        language: "en"
      },
      {
        description: "",
        displayName: "אחראי תכנון תקציב",
        language: "he"
      }
    ],
    notes: "",
    systemName: "cse_role_BudgetPlanOwner",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1518634060330,
    dateModified: 1535617953000,
    modifiedBy: null,
    workspaceId: "budgetPlanOwner",
    color: "blue",
    icon: "fa-dollar-sign",
    productSN: "cse_product_BudgetPlanning",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "30",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Budget Referent",
    displayNameLanguageKey: "CSE_ROLE_BUDGETREFERENT_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_BUDGETREFERENT_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      { description: "", displayName: "Budget Referent", language: "en" },
      { description: "", displayName: "רפרנט תקציב", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_BudgetReferent",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1518776624027,
    dateModified: 1535617708000,
    modifiedBy: null,
    workspaceId: "budgetReferent",
    color: "blue",
    icon: "fa-dollar-sign",
    productSN: "cse_product_BudgetPlanning",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "31",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Project Manager",
    displayNameLanguageKey: "CSE_ROLE_PROJECTMANAGER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_PROJECTMANAGER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      { description: "", displayName: "Project Manager", language: "en" },
      { description: "", displayName: "מנהל פרוייקט", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_ProjectManager",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1522599626797,
    dateModified: 1535617775000,
    modifiedBy: null,
    workspaceId: "projectManager",
    color: "teal",
    icon: "fa-project-diagram",
    productSN: "cse_product_ProjectManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "32",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Innovation Manager",
    displayNameLanguageKey: "CSE_ROLE_INNOVATIONMANAGER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_INNOVATIONMANAGER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Innovation Manager",
        language: "en"
      },
      { description: "", displayName: "מנהל חדשנות", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_InnovationManager",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1525337173193,
    dateModified: 1535617708000,
    modifiedBy: null,
    workspaceId: "innovationManager",
    color: "purple",
    icon: "fa-lightbulb",
    productSN: "cse_product_Innovation",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "33",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "Innovation Management for Employee",
    displayName: "Innovation Employee",
    displayNameLanguageKey: "CSE_ROLE_INNOVATIONEMPLOYEE_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_INNOVATIONEMPLOYEE_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "Innovation Management for Employee",
        displayName: "Innovation Employee",
        language: "en"
      },
      {
        description: "מערכת ניהול חדשנות",
        displayName: "עובד חדשנות",
        language: "he"
      }
    ],
    notes: "",
    systemName: "cse_role_InnovationEmployee",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1525338866220,
    dateModified: 1537097717000,
    modifiedBy: null,
    workspaceId: "innovationEmployee",
    color: "purple",
    icon: "fa-lightbulb",
    productSN: "cse_product_Innovation",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "34",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Resource Manager",
    displayNameLanguageKey: "CSE_ROLE_RESOURCEMANAGER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_RESOURCEMANAGER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Resource Manager",
        language: "en"
      },
      { description: "", displayName: "מנהל משאבים", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_ResourceManager",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1525848030250,
    dateModified: 1535617775000,
    modifiedBy: null,
    workspaceId: "resourceManager",
    color: "teal",
    icon: "fa-users",
    productSN: "cse_product_ResourceManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "35",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Procurement Referent",
    displayNameLanguageKey: "CSE_ROLE_PROCUREMENTREFERENT_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_PROCUREMENTREFERENT_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Procurement Referent",
        language: "en"
      },
      { description: "", displayName: "רפרנט רכש", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_ProcurementReferent",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1525960774360,
    dateModified: 1535617708000,
    modifiedBy: null,
    workspaceId: "procurementReferent",
    color: "green",
    icon: "fa-hand-holding-usd",
    productSN: "cse_product_Procurement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "36",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Procurement Manager",
    displayNameLanguageKey: "CSE_ROLE_PROCUREMENTMANAGER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_PROCUREMENTMANAGER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Procurement Manager",
        language: "en"
      },
      { description: "", displayName: "מנהל רכש", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_ProcurementManager",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1525960774360,
    dateModified: 1535617953000,
    modifiedBy: null,
    workspaceId: "procurementManager",
    color: "green",
    icon: "fa-hand-holding-usd",
    productSN: "cse_product_Procurement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "37",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "Strategy & Goal management for C-Level executives and VPs",
    displayName: "C-Level executives",
    displayNameLanguageKey: "CSE_ROLE_CFO_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_CFO_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "Strategy & Goal management for C-Level executives and VPs",
        displayName: "C-Level executives",
        language: "en"
      },
      {
        description: "ניהול אסטרטגיה ומטרות ארגוניות להנהלה בכירה",
        displayName: "מנהלים בכירים",
        language: "he"
      }
    ],
    notes: "",
    systemName: "cse_role_CFO",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1526547437437,
    dateModified: 1535617708000,
    modifiedBy: null,
    workspaceId: "ClevelStrategy",
    color: "turquoise",
    icon: "fa-bullseye",
    productSN: "cse_product_ExecutionPanel",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "39",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "Strategy & Goal Management for the CEO",
    displayName: "CEO",
    displayNameLanguageKey: "CSE_ROLE_CEO_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_CEO_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "Strategy & Goal Management for the CEO",
        displayName: "CEO",
        language: "en"
      },
      {
        description: "ניהול אסטרטגיה ומטרות ארגוניות למנכ\"ל",
        displayName: "מנכ\"ל",
        language: "he"
      }
    ],
    notes: "",
    systemName: "cse_role_CEO",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1526547452200,
    dateModified: 1535617953000,
    modifiedBy: null,
    workspaceId: "strategyGoalManagement",
    color: "turquoise",
    icon: "fa-bullseye",
    productSN: "cse_product_StrategyGoals",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "40",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "PMO",
    displayNameLanguageKey: "CSE_ROLE_PMO_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_PMO_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      { description: "", displayName: "PMO", language: "en" },
      { description: "", displayName: "PMO", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_PMO",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1527497750990,
    dateModified: 1535617775000,
    modifiedBy: null,
    workspaceId: "pmo",
    color: "teal",
    icon: "fa-project-diagram",
    productSN: "cse_product_ProjectManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "41",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Vendor Manager",
    displayNameLanguageKey: "CSE_ROLE_VENDORMANAGEMENT_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_VENDORMANAGEMENT_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      { description: "", displayName: "Vendor Manager", language: "en" },
      { description: "", displayName: "מנהל יצרנים", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_VendorManagement",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1528967693107,
    dateModified: 1535617953000,
    modifiedBy: null,
    workspaceId: "vendorManagement",
    color: "green",
    icon: "fa-industry",
    productSN: "cse_product_VendorManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "43",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "Time and Attendance for Employees",
    displayName: "Employee",
    displayNameLanguageKey: "CSE_ROLE_TIMEANDATTENDANCE_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_TIMEANDATTENDANCE_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "Time and Attendance for Employees",
        displayName: "Employee",
        language: "en"
      },
      {
        description: "מערכת דיווח שעות לעובדים",
        displayName: "עובד",
        language: "he"
      }
    ],
    notes: "",
    systemName: "cse_role_TimeandAttendance",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1529927267217,
    dateModified: 1545800970000,
    modifiedBy: null,
    workspaceId: "TimeAndAttendance",
    color: "teal",
    icon: "fa-clock",
    productSN: "my_work",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "44",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Requirement Manager",
    displayNameLanguageKey: "CSE_ROLE_REQUIREMENTMANAGER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_REQUIREMENTMANAGER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Requirement Manager",
        language: "en"
      },
      { description: "", displayName: "מנהל דרישה", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_RequirementManager",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1536225390330,
    dateModified: 1537097717000,
    modifiedBy: null,
    workspaceId: "RequirementManager",
    color: null,
    icon: "fa-list",
    productSN: "cse_product_RequirementManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "45",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Onboarding Manager",
    displayNameLanguageKey: "CSE_ROLE_HRMANAGER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_HRMANAGER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Onboarding Manager",
        language: "en"
      },
      {
        description: "",
        displayName: "מנהל כניסה לתפקיד",
        language: "he"
      }
    ],
    notes: "",
    systemName: "cse_role_HRManager",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1543900623167,
    dateModified: 1583389290417,
    modifiedBy: null,
    workspaceId: "HRManager",
    color: null,
    icon: "fa-user-circle",
    productSN: "cse_product_Onboarding",
    deleted: false,
    licenseRole: 3,
    helixRole: 2,
    id: "46",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "VP HR",
    displayNameLanguageKey: "CSE_ROLE_VPHR_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_VPHR_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      { description: "", displayName: "VP HR", language: "en" },
      { description: "", displayName: "סמנכ\"ל כוח אדם", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_VPHR",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1544444033063,
    dateModified: 1544444033000,
    modifiedBy: null,
    workspaceId: "VPHR",
    color: null,
    icon: "fa-user-circle",
    productSN: "cse_product_Onboarding",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "47",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Requirement Customer",
    displayNameLanguageKey: "CSE_ROLE_REQUIREMENTCUSTOMER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_REQUIREMENTCUSTOMER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Requirement Customer",
        language: "en"
      },
      { description: "", displayName: "לקוח הדרישה", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_RequirementCustomer",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1544685575037,
    dateModified: 1544709605000,
    modifiedBy: null,
    workspaceId: "RequirementCustomer",
    color: null,
    icon: "fa-list",
    productSN: "cse_product_RequirementManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "48",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Business Representative",
    displayNameLanguageKey: "CSE_ROLE_BUSINESSREPRESENTATIVE_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_BUSINESSREPRESENTATIVE_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Business Representative",
        language: "en"
      },
      { description: "", displayName: "נציג הלקוח", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_BusinessRepresentative",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1544690143803,
    dateModified: 1550126507000,
    modifiedBy: null,
    workspaceId: "RequirementsBusinessRepresentative",
    color: null,
    icon: "fa-list",
    productSN: "cse_product_RequirementManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "49",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Implementation Lead",
    displayNameLanguageKey: "CSE_ROLE_IMPLEMENTATIONLEAD_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_IMPLEMENTATIONLEAD_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Implementation Lead",
        language: "en"
      },
      { description: "", displayName: "מנהל צוות", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_ImplementationLead",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1544695633170,
    dateModified: 1550126437000,
    modifiedBy: null,
    workspaceId: "RequirementsImplementationLead",
    color: null,
    icon: "fa-list",
    productSN: "cse_product_RequirementManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "50",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "Business Relationship Manager",
    displayName: "BRM",
    displayNameLanguageKey: "CSE_ROLE_BRM_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_BRM_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "Business Relationship Manager",
        displayName: "BRM",
        language: "en"
      },
      { description: "מנהל קשר עסקי", displayName: "BRM", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_BRM",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1545291292997,
    dateModified: 1545291292000,
    modifiedBy: null,
    workspaceId: "BRM",
    color: null,
    icon: "fa-list",
    productSN: "cse_product_RequirementManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "51",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Onboarding Employee",
    displayNameLanguageKey: "CSE_ROLE_HREMPLOYEE_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_HREMPLOYEE_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Onboarding Employee",
        language: "en"
      },
      {
        description: "",
        displayName: "משתמש כניסה לתפקיד",
        language: "he"
      }
    ],
    notes: "",
    systemName: "cse_role_HREmployee",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1546845206867,
    dateModified: 1546923035000,
    modifiedBy: null,
    workspaceId: "HREmployee",
    color: null,
    icon: "fa-user-circle",
    productSN: "cse_product_Onboarding",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "52",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Projects Employee",
    displayNameLanguageKey: "CSE_ROLE_PROJECTEMPLOYEE_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_PROJECTEMPLOYEE_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Projects Employee",
        language: "en"
      },
      { description: "", displayName: "עובד פרויקטים", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_ProjectEmployee",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1551005451030,
    dateModified: 1551604186000,
    modifiedBy: null,
    workspaceId: "ProjectsEmployee",
    color: null,
    icon: "fa-project-diagram",
    productSN: "cse_product_ProjectManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "53",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Requirements Employee",
    displayNameLanguageKey: "CSE_ROLE_REQUIREMENTEMPLOYEE_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_REQUIREMENTEMPLOYEE_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Requirements Employee",
        language: "en"
      },
      { description: "", displayName: "עובד דרישות", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_RequirementEmployee",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1551005487890,
    dateModified: 1551604186000,
    modifiedBy: null,
    workspaceId: "RequirementsEmployee",
    color: null,
    icon: "fa-list",
    productSN: "cse_product_RequirementManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "54",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "Task Manager",
    displayName: "Manager",
    displayNameLanguageKey: "CSE_ROLE_MANAGER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_MANAGER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "Task Manager",
        displayName: "Manager",
        language: "en"
      },
      { description: "", displayName: "מנהל", language: "he" }
    ],
    notes: "",
    systemName: "cse_role_Manager",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1571808331923,
    dateModified: 1577004064197,
    modifiedBy: null,
    workspaceId: "TaskManager",
    color: null,
    icon: "fa-tasks",
    productSN: "cse_product_TaskManagement",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "55",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  },
  {
    description: "",
    displayName: "Release Deployment Owner",
    displayNameLanguageKey: "CSE_ROLE_RELEASEDEPLOYMENTOWNER_DIALOG_ROLE_DISPLAY_NAME",
    descriptionLanguageKey: "CSE_ROLE_RELEASEDEPLOYMENTOWNER_DIALOG_ROLE_DESCRIPTION",
    languageTranslations: [
      {
        description: "",
        displayName: "Release Deployment Owner",
        language: "en"
      },
      {
        description: "",
        displayName: "מנהל העברה לייצור",
        language: "he"
      }
    ],
    notes: "",
    systemName: "cse_role_ReleaseDeploymentOwner",
    baseRole: { key: "EMPLOYEE", value: "1" },
    clientId: null,
    createdBy: null,
    dateCreated: 1574303003473,
    dateModified: 1581481672813,
    modifiedBy: null,
    workspaceId: "ReleaseDeploymentOwner",
    color: null,
    icon: "fa-user",
    productSN: "cse_product_ReleaseDeployment",
    deleted: false,
    licenseRole: 2,
    helixRole: 2,
    id: "56",
    newInstance: false,
    outOfTheBox: false,
    entityName: null,
    itemType: 0
  }
]

export const _selectDefaultOptions = [
  {
    value: "Option1",
    label: "Option1"
  },
  {
    value: "Option2",
    label: "Option2"
  },
  {
    value: "Option3",
    label: "Option3"
  },
  {
    value: "Option4",
    label: "Option4"
  },
  {
    value: "Option5",
    label: "Option5"
  }
]
