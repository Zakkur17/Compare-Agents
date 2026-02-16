export const platformsData = [
  {
    id: "openclaw",
    name: "OpenClaw",
    logo: "🦞",
    tagline: "Open-source automation with AI agents",
    deployment: "Self-hosted",
    autonomyLevel: "High",
    technicalKnowledge: "Advanced",
    monthlyPrice: 0,
    selfHostedCost: 150,
    priceNote: "Free (hosting costs apply)",
    features: {
      naturalLanguageProcessing: "present",
      multiAgentOrchestration: "present",
      prebuiltIntegrations: "partial",
      customWorkflows: "present",
      apiAccess: "present",
      noCodeInterface: "absent",
      realTimeMonitoring: "present",
      errorHandling: "present",
      scheduling: "present",
      dataTransformation: "present",
      conditionalLogic: "present",
      humanInTheLoop: "partial",
      learningCapability: "present",
      documentProcessing: "present",
      webScraping: "present"
    },
    integrations: ["APIs", "Databases", "Cloud providers", "Custom connectors"],
    useCases: [
      { name: "Data pipeline automation", complexity: "High" },
      { name: "Custom AI workflows", complexity: "High" },
      { name: "Research automation", complexity: "Medium" }
    ],
    security: {
      localData: true,
      compliance: "Self-managed",
      governance: "Full control",
      encryption: "User-configured"
    },
    pros: ["Full control", "No vendor lock-in", "Customizable", "Cost-effective at scale"],
    cons: ["Requires technical expertise", "Self-maintenance", "Longer setup time"]
  },
  {
    id: "copilot-studio",
    name: "Microsoft Copilot Studio",
    logo: "🤖",
    tagline: "Enterprise-ready AI automation",
    deployment: "Cloud/Hybrid",
    autonomyLevel: "Medium",
    technicalKnowledge: "Beginner-Intermediate",
    monthlyPrice: 200,
    selfHostedCost: 0,
    priceNote: "$200/month per tenant + usage",
    features: {
      naturalLanguageProcessing: "present",
      multiAgentOrchestration: "present",
      prebuiltIntegrations: "present",
      customWorkflows: "present",
      apiAccess: "present",
      noCodeInterface: "present",
      realTimeMonitoring: "present",
      errorHandling: "present",
      scheduling: "present",
      dataTransformation: "present",
      conditionalLogic: "present",
      humanInTheLoop: "present",
      learningCapability: "partial",
      documentProcessing: "present",
      webScraping: "absent"
    },
    integrations: ["Microsoft 365", "Teams", "Dynamics 365", "Power Platform", "Azure services"],
    useCases: [
      { name: "Customer support automation", complexity: "Low" },
      { name: "Employee productivity tools", complexity: "Low" },
      { name: "Document processing", complexity: "Medium" }
    ],
    security: {
      localData: false,
      compliance: "SOC 2, ISO 27001, GDPR",
      governance: "Microsoft managed",
      encryption: "End-to-end"
    },
    pros: ["Easy integration with Microsoft ecosystem", "Enterprise support", "Low-code", "Comprehensive"],
    cons: ["Expensive", "Vendor lock-in", "Limited customization outside Microsoft stack"]
  },
  {
    id: "amazon-bedrock",
    name: "Amazon Bedrock + Step Functions",
    logo: "☁️",
    tagline: "Serverless AI orchestration on AWS",
    deployment: "Cloud",
    autonomyLevel: "Medium-High",
    technicalKnowledge: "Intermediate-Advanced",
    monthlyPrice: 0,
    selfHostedCost: 0,
    priceNote: "Pay-per-use (varies by model/usage)",
    features: {
      naturalLanguageProcessing: "present",
      multiAgentOrchestration: "present",
      prebuiltIntegrations: "present",
      customWorkflows: "present",
      apiAccess: "present",
      noCodeInterface: "partial",
      realTimeMonitoring: "present",
      errorHandling: "present",
      scheduling: "present",
      dataTransformation: "present",
      conditionalLogic: "present",
      humanInTheLoop: "partial",
      learningCapability: "present",
      documentProcessing: "present",
      webScraping: "partial"
    },
    integrations: ["AWS services", "S3", "Lambda", "DynamoDB", "EventBridge", "SageMaker"],
    useCases: [
      { name: "Serverless AI pipelines", complexity: "High" },
      { name: "Document analysis at scale", complexity: "Medium" },
      { name: "Multi-model workflows", complexity: "High" }
    ],
    security: {
      localData: false,
      compliance: "SOC 2, ISO 27001, HIPAA, PCI DSS",
      governance: "AWS managed",
      encryption: "AWS KMS"
    },
    pros: ["Scalable", "Multiple AI models", "AWS integration", "Pay-per-use"],
    cons: ["Complex setup", "AWS expertise required", "Costs can escalate", "Vendor lock-in"]
  },
  {
    id: "google-gemini",
    name: "Google Gemini / Vertex AI",
    logo: "🔷",
    tagline: "Google's multimodal AI platform",
    deployment: "Cloud",
    autonomyLevel: "Medium-High",
    technicalKnowledge: "Intermediate-Advanced",
    monthlyPrice: 0,
    selfHostedCost: 0,
    priceNote: "Pay-per-use (varies by model/usage)",
    features: {
      naturalLanguageProcessing: "present",
      multiAgentOrchestration: "present",
      prebuiltIntegrations: "present",
      customWorkflows: "present",
      apiAccess: "present",
      noCodeInterface: "partial",
      realTimeMonitoring: "present",
      errorHandling: "present",
      scheduling: "present",
      dataTransformation: "present",
      conditionalLogic: "present",
      humanInTheLoop: "partial",
      learningCapability: "present",
      documentProcessing: "present",
      webScraping: "partial"
    },
    integrations: ["Google Cloud Platform", "BigQuery", "Cloud Functions", "Workspace", "Firebase"],
    useCases: [
      { name: "Multimodal content analysis", complexity: "Medium" },
      { name: "Enterprise search", complexity: "Medium" },
      { name: "AI-powered analytics", complexity: "High" }
    ],
    security: {
      localData: false,
      compliance: "SOC 2, ISO 27001, GDPR",
      governance: "Google managed",
      encryption: "Google-managed keys"
    },
    pros: ["Advanced multimodal capabilities", "Google Cloud integration", "Cutting-edge AI models"],
    cons: ["GCP expertise needed", "Pricing complexity", "Limited documentation for enterprise features"]
  },
  {
    id: "claude-ai",
    name: "Claude AI (Anthropic)",
    logo: "🧠",
    tagline: "Constitutional AI for safe automation",
    deployment: "Cloud/API",
    autonomyLevel: "Medium",
    technicalKnowledge: "Intermediate",
    monthlyPrice: 20,
    selfHostedCost: 0,
    priceNote: "$20/month Pro + API usage",
    features: {
      naturalLanguageProcessing: "present",
      multiAgentOrchestration: "partial",
      prebuiltIntegrations: "absent",
      customWorkflows: "partial",
      apiAccess: "present",
      noCodeInterface: "absent",
      realTimeMonitoring: "absent",
      errorHandling: "partial",
      scheduling: "absent",
      dataTransformation: "partial",
      conditionalLogic: "partial",
      humanInTheLoop: "present",
      learningCapability: "present",
      documentProcessing: "present",
      webScraping: "absent"
    },
    integrations: ["API integration", "Custom development required"],
    useCases: [
      { name: "Conversational AI", complexity: "Low" },
      { name: "Content generation", complexity: "Low" },
      { name: "Code assistance", complexity: "Medium" }
    ],
    security: {
      localData: false,
      compliance: "SOC 2",
      governance: "Anthropic managed",
      encryption: "In-transit and at-rest"
    },
    pros: ["Strong reasoning capabilities", "Safety-focused", "Good documentation", "Long context window"],
    cons: ["Limited automation features", "Requires custom integration", "Not a full platform"]
  },
  {
    id: "langchain-autogen",
    name: "LangChain / AutoGen",
    logo: "🔗",
    tagline: "Framework for AI agent development",
    deployment: "Self-hosted/Custom",
    autonomyLevel: "High",
    technicalKnowledge: "Advanced",
    monthlyPrice: 0,
    selfHostedCost: 200,
    priceNote: "Free (hosting + LLM API costs)",
    features: {
      naturalLanguageProcessing: "present",
      multiAgentOrchestration: "present",
      prebuiltIntegrations: "present",
      customWorkflows: "present",
      apiAccess: "present",
      noCodeInterface: "absent",
      realTimeMonitoring: "partial",
      errorHandling: "partial",
      scheduling: "partial",
      dataTransformation: "present",
      conditionalLogic: "present",
      humanInTheLoop: "partial",
      learningCapability: "present",
      documentProcessing: "present",
      webScraping: "present"
    },
    integrations: ["Any API", "Vector databases", "LLM providers", "Tools & plugins"],
    useCases: [
      { name: "Custom AI agent systems", complexity: "High" },
      { name: "Research automation", complexity: "High" },
      { name: "RAG applications", complexity: "Medium" }
    ],
    security: {
      localData: true,
      compliance: "Self-managed",
      governance: "Full control",
      encryption: "User-configured"
    },
    pros: ["Highly flexible", "Active community", "Modular design", "Framework-agnostic"],
    cons: ["Requires coding", "Complex setup", "Maintenance overhead", "Steep learning curve"]
  },
  {
    id: "n8n-zapier-make",
    name: "n8n / Zapier / Make",
    logo: "⚡",
    tagline: "No-code workflow automation",
    deployment: "Cloud/Self-hosted",
    autonomyLevel: "Low-Medium",
    technicalKnowledge: "Beginner",
    monthlyPrice: 20,
    selfHostedCost: 50,
    priceNote: "$20-$99/month or self-host",
    features: {
      naturalLanguageProcessing: "partial",
      multiAgentOrchestration: "absent",
      prebuiltIntegrations: "present",
      customWorkflows: "present",
      apiAccess: "present",
      noCodeInterface: "present",
      realTimeMonitoring: "present",
      errorHandling: "present",
      scheduling: "present",
      dataTransformation: "present",
      conditionalLogic: "present",
      humanInTheLoop: "present",
      learningCapability: "absent",
      documentProcessing: "partial",
      webScraping: "present"
    },
    integrations: ["1000+ apps", "SaaS tools", "APIs", "Webhooks", "Databases"],
    useCases: [
      { name: "Simple task automation", complexity: "Low" },
      { name: "Data sync between apps", complexity: "Low" },
      { name: "Marketing automation", complexity: "Medium" }
    ],
    security: {
      localData: "Optional (n8n self-hosted)",
      compliance: "SOC 2, GDPR (cloud versions)",
      governance: "Platform managed or self-hosted",
      encryption: "Standard encryption"
    },
    pros: ["Easy to use", "Many integrations", "Visual workflow builder", "Quick setup"],
    cons: ["Limited AI capabilities", "Can get expensive", "Not suitable for complex AI tasks"]
  }
];

export const featureDescriptions = {
  naturalLanguageProcessing: "Ability to understand and process natural language commands",
  multiAgentOrchestration: "Coordinate multiple AI agents working together",
  prebuiltIntegrations: "Ready-to-use connectors for popular services",
  customWorkflows: "Create custom automation workflows",
  apiAccess: "Programmatic access via API",
  noCodeInterface: "Visual, no-code workflow builder",
  realTimeMonitoring: "Monitor automation runs in real-time",
  errorHandling: "Automatic error detection and recovery",
  scheduling: "Schedule automated tasks",
  dataTransformation: "Transform and manipulate data between steps",
  conditionalLogic: "If-then logic for dynamic workflows",
  humanInTheLoop: "Request human approval or input when needed",
  learningCapability: "Learn and improve from interactions",
  documentProcessing: "Extract and process document content",
  webScraping: "Extract data from websites"
};

export const deploymentTypes = ["Cloud", "Self-hosted", "Hybrid", "Cloud/Hybrid", "Cloud/API", "Self-hosted/Custom"];
export const autonomyLevels = ["Low", "Low-Medium", "Medium", "Medium-High", "High"];
export const technicalLevels = ["Beginner", "Beginner-Intermediate", "Intermediate", "Intermediate-Advanced", "Advanced"];
