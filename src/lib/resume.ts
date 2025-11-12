export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  techStack: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  location: string;
  year?: string;
  score?: string;
  notes?: string[];
};

export const contact = {
  name: "Rakshit Kumar",
  title: "Associate Consultant",
  email: "k.rakshit2001@gmail.com",
  phone: "+917289872638",
  location: "Gurgaon, India",
  linkedin: "https://www.linkedin.com/in/rakshit-kumar-1b0228222/",
  github: "https://github.com/Rakshit1006",
};

export const summary =
  "Senior Full Stack Developer with 4 years of experience building scalable web applications using Angular, React, Spring Boot, and Django. Proven track record of improving system efficiency, user engagement, and deployment reliability in agile environments.";

export const skills = {
  languages: ["Java", "Python", "JavaScript", "HTML", "CSS", "TypeScript"],
  frameworks: [
    "Spring Boot",
    "Node.js",
    "AngularJS",
    "React.js",
    "Next.js",
    "Django",
    "Flask",
    "Groovy on Grails",
  ],
  databases: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
  tools: [
    "Docker",
    "Jira",
    "AWS",
    "Apache Kafka",
    "Swagger (API documentation)",
  ],
  apiTech: ["REST", "GraphQL", "SOAP"],
  soft: [
    "Problem Solving",
    "Critical Thinking",
    "Leadership",
    "Communication",
    "Fluent English",
  ],
};

export const experiences: ExperienceItem[] = [
  {
    company: "Skillnet Solutions Pvt Ltd",
    role: "Associate Consultant",
    location: "Remote, Noida",
    start: "Jan 2023",
    end: "Present",
    bullets: [
      "Developed 5+ Node.js BFF APIs for order management and payment status updates, improving system reliability and data flow efficiency",
      "Designed and implemented digital payment integration using SAP Hana and Stripe, reducing API response time by 22%",
      "Optimized React components, driving a 13% increase in interaction and a 17% boost in conversion over 4 months",
      "Managed VTEX platform integration and consulted teams on integration solutions",
      "Led workshops for Mirakl onboarding and training clients on platform capabilities, decreasing project completion time by 8%",
      "Developed Mirakl-SAP payment confirmation connectors and facilitated environment migration",
      "Led Angular.js training sessions for internal teams and implemented HTTP interceptors to enhance API communications",
      "Developed a dynamic front-end using Next.js and Tailwind CSS for interactive GenAI prompt workflows",
      "Integrated OpenAI GPT models and LangChain for context-driven responses and RAG functionality",
      "Optimized API calls and caching layers to reduce latency and cost during high traffic loads",
      "Collaborated in a team of 3 to deliver a working MVP within 48 hours",
      "Developed document ingestion and vectorization pipeline using FAISS and LangChain",
      "Integrated OpenAI GPT-4 for adaptive answer explanations and analytical feedback",
      "Designed and implemented feature extraction logic using Python, regex, URL parsing, and TLD analysis",
      "Developed an end-to-end prediction function to classify new URLs in real time",
    ],
    techStack: [
      "Angular",
      "TypeScript",
      "React",
      "Redux",
      "Graphql",
      "Node.js",
      "Python",
      "OpenAI",
      "Generative Google",
      "Pytorch",
      "Tensorflow.keras",
      "NGRX",
      "RXJS",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Express.js",
      "LangChain",
      "OpenAI GPT-4",
      "FAISS",
      "TensorFlow",
      "Scikit-learn",
      "Random Forest",
      "Neural Networks",
    ],
  },
  {
    company: "Dminc Pvt Ltd.",
    role: "Full Stack Developer",
    location: "Remote, Delhi",
    start: "Nov 2020",
    end: "May 2022",
    bullets: [
      "Led workshops and provided Mirakl platform training for business analysts and development teams",
      "Designed and implemented integration solutions for catalogue, order, credit limits, and business customer flow between Eniteo ERP, SAP CC, and Mirakl",
      "Drafted solution architecture documents, payment workflows, and integration specifications",
      "Guided SAP-Mirakl connector implementation and API integration for clients",
      "Engineered custom API flows for catalogue sync and automated order status updates",
      "Facilitated environment migration and readiness for Mirakl connectors",
      "Integrated Hyperwallet and Postman for payment status and workflow testing",
      "Enabled seamless onboarding and client enablement in complex B2B environments",
    ],
    techStack: [
      "React.js",
      "Redux",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "VTEX IO",
      "VTEX Framework",
      "Mirakl",
      "SAP CC",
      "Eniteo ERP",
      "GraphQL",
      "RESTful APIs",
      "Webhook Integration",
      "Hyperwallet",
      "Postman",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "Bharati Vidyapeeth College of Engineering",
    degree: "B.Tech. in Information and Technology",
    location: "Delhi, India",
    year: "2023",
    score: "9.02 CGPA/10",
    notes: ["Part of the music society."],
  },
  {
    school: "Rotary Public School",
    degree: "10th Grade, CBSE",
    location: "Gurgaon, India",
    year: "2017",
    score: "10 CGPA",
  },
  {
    school: "The Maurya School",
    degree: "10+2, CBSE",
    location: "Gurgaon, India",
    year: "2019",
    score: "95.2%",
    notes: ["School Topper, Awarded Scholarship."],
  },
];
