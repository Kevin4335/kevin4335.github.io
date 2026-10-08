// All site copy lives here.
import headshot from '../assets/me.jpg';
import uofmLogo from '../assets/uofmlogo.png';
import rocketLogo from '../assets/rocket_logo.png';
import uwmLogo from '../assets/UWMlogo.jpg';
import upCancerLogo from '../assets/upcancerlogo.png';

export const profile = {
  name: 'Kevin Chang',
  role: 'Software Engineer & Developer',
  headshot,
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const about = [
  'Graduate student at the University of Michigan pursuing a Master of Science in Electrical and Computer Engineering (expected December 2026), after earning a B.S.E. in Computer Science in December 2025. My work focuses on systems, full-stack development, and applied machine learning, using technologies such as React, Angular, .NET Core, Flask, Docker, AWS, Azure, and Python-based ML libraries.',
  'I am currently a researcher at the Liu Lab at the University of Michigan, where I focus on agentic AI systems, large language models, applied machine learning, and full-stack web development to support biomedical research workflows. Most recently, I interned as a Software Engineer at Rocket Close (Rocket Companies), building full-stack metadata management tooling across .NET Core, PostgreSQL, and Angular.',
];

export const education = [
  {
    school: 'University of Michigan – Rackham Graduate School',
    degree: 'Master of Science in Engineering, Electrical and Computer Engineering',
    detail: 'Focus: Computer Vision • GPA: 4.0/4.0 • Expected Graduation: December 2026',
    logo: uofmLogo,
  },
  {
    school: 'University of Michigan – College of Engineering',
    degree: 'Bachelor of Science in Engineering, Computer Science',
    detail: 'Minor: User Experience Design • Summa Cum Laude • GPA: 3.778/4.00 (Dean’s List) • Graduated: December 2025',
    logo: uofmLogo,
  },
];

export const experience = [
  {
    role: 'Software Developer / Researcher',
    org: 'University of Michigan, Liu Lab',
    dates: 'March 2025 - Present',
    logo: uofmLogo,
    logoAlt: 'University of Michigan logo',
    description:
      'Designed and implemented a multi-agent reinforcement learning system that trains LLM Cypher-generation agents through execution-feedback rewards, enabling a 14B-parameter model to reach parity with 200B+ parameter models on knowledge graph query accuracy benchmarks. Led deployment and development of research web tools in collaboration with Dr. Shuibing Chen’s lab at Weill Cornell Medicine, transitioning legacy research platforms to modern containerized systems using Docker, React, and Flask, and integrating R-based visualizations for data analysis. Built benchmarking pipelines and custom MCP tools to evaluate LLM performance, and integrated the GLKB LLM agent into an automated biomedical literature synthesis pipeline, achieving a 36% improvement in extraction accuracy and precision over prior baseline systems.',
    publications: [
      {
        heading: 'Publications',
        items: [
          {
            authors: 'Huang, Y., Han, Z., Chang, K., Jiao, T., Liu, J.',
            title:
              "Enhancing Biomedical AI Foundations: Genomic Literature Knowledge Base Boosts LLMs' Mastery of Biomedical Literature",
            venue:
              "In Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD '26), Vol. 2, 9149–9158. ACM, 2026.",
            url: 'https://doi.org/10.1145/3770855.3817461',
          },
        ],
      },
      {
        heading: 'Publications (under review)',
        items: [
          {
            title: 'Unraveling Human Sinoatrial Node Development Using Fetal Heart and SAN-Paced Cardioid Models',
          },
        ],
      },
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Rocket Close (Rocket Companies)',
    dates: 'May 2026 - August 2026',
    logo: rocketLogo,
    logoAlt: 'Rocket Companies logo',
    description:
      'I worked on a full-stack rewrite of Inquire, an internal Power BI/Data Explorer reporting tool used by thousands of people across Rocket. I built most of the admin screens and metadata features for tagging, ownership, security groups, banner notices, and report search, using .NET Core, PostgreSQL, and Angular (across a few Angular versions while the team upgraded the framework). For report tagging, I moved tags from plain strings on legacy reports into their own database tables: I designed the PostgreSQL schema and migrations, wrote the .NET Core API, and updated the AWS Lambda sync job so tags stay consistent between the old SQL Server data and the new PostgreSQL model. Day to day I worked across .NET Core, Angular, and Dapper/PostgreSQL, ran deployments through Azure DevOps, and made Terraform changes for related AWS infrastructure. I also gave a live demo of Inquire to Rocket Close’s Data Engineering team.',
  },
  {
    role: 'Software Development Intern',
    org: 'United Wholesale Mortgage',
    dates: 'May 2025 - August 2025',
    logo: uwmLogo,
    logoAlt: 'United Wholesale Mortgage logo',
    description:
      'I contributed to the migration of legacy CRON jobs to Azure Functions in C#, completing several job pipelines while designing scalable replacements for scheduling logic. On the backend, I worked with distributed technologies including Kafka and Redis, and used Dynatrace for system monitoring. I wrote comprehensive unit tests in xUnit to ensure code reliability. Over six Agile sprints, I rotated through Developer, QA, Business Analyst, and Product Owner roles to understand full-stack development and team dynamics. My internship culminated in a live demo of a completed enterprise platform to over 1,000 internal employees.',
  },
  {
    role: 'Frontend Development Intern',
    org: 'Up Cancer',
    dates: 'November 2023 - June 2024',
    logo: upCancerLogo,
    logoAlt: 'Up Cancer logo',
    description:
      'I helped develop Hatching Sparrow, a CRM tool designed to improve workflow and task management for non-profits. My primary focus was building accessible and responsive React components that supported user interaction and data visualization. I implemented a Trello-style drag-and-drop task system and collaborated on streamlining the app’s state management to ensure smooth performance and usability.',
  },
];

export const coursework = [
  {
    group: 'Graduate',
    courses: [
      { code: 'EECS 568', name: 'Mobile Robotics' },
      { code: 'EECS 542', name: 'Advanced Topics in Computer Vision' },
      { code: 'ECE 598', name: 'Quantum Computing, Information and Probability' },
      { code: 'CSE 592', name: 'Foundations of Artificial Intelligence', inProgress: true },
      { code: 'CSE 595', name: 'Natural Language Processing', inProgress: true },
      { code: 'ROB 535', name: 'Self-Driving Cars', inProgress: true },
    ],
  },
  {
    group: 'Undergraduate: Systems & Software',
    courses: [
      { code: 'EECS 485', name: 'Web Systems' },
      { code: 'EECS 482', name: 'Introduction to Operating Systems' },
      { code: 'EECS 481', name: 'Software Engineering' },
      { code: 'EECS 370', name: 'Introduction to Computer Organization' },
      { code: 'EECS 388', name: 'Introduction to Computer Security' },
      { code: 'EECS 497', name: 'Human-Centered Software Design and Development' },
    ],
  },
  {
    group: 'Undergraduate: Algorithms & Theory',
    courses: [
      { code: 'EECS 376', name: 'Foundations of Computer Science' },
      { code: 'EECS 281', name: 'Data Structures and Algorithms' },
      { code: 'EECS 203', name: 'Discrete Mathematics' },
    ],
  },
  {
    group: 'Undergraduate: ML, Vision & Data',
    courses: [
      { code: 'EECS 442', name: 'Computer Vision' },
      { code: 'SI 364', name: 'Building Data-Driven Applications' },
      { code: 'SI 206', name: 'Data-Oriented Programming' },
      { code: 'STATS 412', name: 'Introduction to Probability and Statistics' },
    ],
  },
];

// Projects from the Liu Lab work. Optional `links` render as secondary links on the card.
export const projects = [
  {
    name: 'GLKB (Genomic Literature Knowledge Base)',
    url: 'https://glkb.org',
    featured: true,
    links: [{ label: 'KDD ‘26 paper', url: 'https://doi.org/10.1145/3770855.3817461' }],
    context: 'Liu Lab',
    description:
      'GLKB is an AI research tool that answers complex biomedical questions from published literature with transparent citations, built on a knowledge graph of 33 million PubMed abstracts. I contributed to the KDD ‘26 paper behind it, building the MCP server integration, the deep-research pipeline, and the benchmarking across eight LLMs that showed graph-structured retrieval improves accuracy.',
    tags: ['Python', 'React', 'Neo4j', 'Cypher', 'MCP', 'LLM Agents', 'LLM Benchmarking', 'Knowledge Graphs', 'Git'],
  },
  {
    name: 'GutOmicsAtlas',
    url: 'http://gutomicsatlas.com',
    context: 'Liu Lab',
    description:
      'I designed, built, and maintain GutOmicsAtlas, a bioinformatics platform for exploring human fetal gut data. Researchers visualize gene expression across scRNA, snATAC, and spatial transcriptomics data, and an integrated AI assistant interprets the data and generates graphs in chat. The assistant is connected to GLKB, so it can also answer research questions. I own the full stack.',
    tags: ['GLKB Integration', 'React', 'FastAPI', 'Python', 'Claude API', 'LLM Integration', 'REST API Design', 'Git'],
  },
  {
    name: 'HeartOmicsAtlas',
    url: 'http://heartomicsdb.com',
    context: 'Liu Lab',
    description:
      'I designed, built, and maintain HeartOmicsAtlas, a bioinformatics platform for exploring heart data. Researchers visualize gene expression across scRNA, spatial, and scMultiomics data, and an integrated AI assistant interprets the data and generates graphs in chat. The assistant is built on a RAG system over the associated paper. I own the full stack.',
    tags: ['RAG', 'React', 'FastAPI', 'Python', 'Claude API', 'LLM Integration', 'REST API Design', 'Git'],
  },
  {
    name: 'T1DSpatial',
    url: 'http://t1dspatialomics.com',
    context: 'Liu Lab',
    description:
      'I designed, built, and maintain T1DSpatial, a bioinformatics platform for exploring type 1 diabetes spatial transcriptomics data. Researchers visualize gene expression by cell type and browse spatial data by field of view, and an integrated AI assistant interprets the data and generates graphs in chat. The platform is containerized with Docker. I own the full stack.',
    tags: ['Docker', 'React', 'FastAPI', 'Python', 'Claude API', 'LLM Integration', 'REST API Design', 'Git'],
  },
  {
    name: 'PanKbase',
    url: 'https://pankbase.org',
    context: 'Liu Lab',
    description:
      'PanKbase is a pancreas-focused knowledge base with an AI agent that answers questions by writing Cypher queries against a Neo4j graph. I built and deployed the agent layer: the Cypher-writing agent, the vLLM model serving behind it, the AWS deployment, and the tooling around it, including startup scripts and an internal React testing app.',
    tags: ['Python', 'Neo4j', 'Cypher', 'vLLM', 'LLM Agents', 'AWS EC2', 'Linux', 'Bash', 'tmux', 'Conda', 'React', 'Git'],
  },
];

export const skills = [
  {
    title: 'Languages',
    items: [
      'C++',
      'C#',
      'Python',
      'JavaScript',
      'TypeScript',
      'SQL',
      'Cypher',
      'R',
      'C',
      'Bash',
      'Verilog',
    ],
  },
  {
    title: 'Frontend',
    items: [
      'React',
      'Angular',
      'HTML',
      'CSS',
      'TailwindCSS',
      'Vite',
      'MUI',
      'Responsive Design',
      'UX Design',
    ],
  },
  {
    title: 'Backend and APIs',
    items: [
      'FastAPI',
      'Flask',
      '.NET Core',
      'Dapper',
      'REST API Design',
      'nginx',
      'Kafka',
      'Redis',
      'Azure Functions',
    ],
  },
  {
    title: 'Databases',
    items: [
      'PostgreSQL',
      'SQL Server',
      'Neo4j',
    ],
  },
  {
    title: 'AI/ML',
    items: [
      'LLM Agents',
      'RAG',
      'MCP',
      'Claude API',
      'Prompt Engineering',
      'Knowledge Graphs',
      'vLLM',
      'PyTorch',
      'LoRA',
      'GRPO',
      'FSDP',
      'Multi-Agent Reinforcement Learning',
      'LLM Benchmarking',
      'Agent Evaluation',
      'LiteLLM',
      'NumPy',
      'Pandas',
      'Matplotlib',
    ],
  },
  {
    title: 'Cloud and DevOps',
    items: [
      'AWS (EC2, Lambda)',
      'Azure',
      'Azure DevOps',
      'Terraform',
      'Docker',
      'CI/CD',
      'Linux',
      'Slurm',
      'HPC Clusters',
      'tmux',
      'Conda',
      'Dynatrace',
    ],
  },
  {
    title: 'Tools and practices',
    items: [
      'Git',
      'xUnit',
      'Unit Testing',
      'Code Reviews',
      'Agile/Scrum',
      'Technical Documentation',
      'Live Technical Demos',
      'Cursor',
      'Claude Code',
      'AI-Assisted Development',
    ],
  },
  {
    title: 'Systems and coursework',
    items: [
      'Operating Systems',
      'Multithreading',
      'Distributed Systems',
      'Web Systems',
      'Data Structures and Algorithms',
      'Computer Vision',
    ],
  },
];

// Served from /public so it keeps a stable URL.
export const resume = {
  href: `${process.env.PUBLIC_URL}/kevin-chang-resume.pdf`,
  filename: 'Kevin-Chang-Resume.pdf',
};

export const contacts = [
  { id: 'email', label: 'Email', value: 'kvchang@umich.edu', href: 'mailto:kvchang@umich.edu' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/kevinchangumich/',
    href: 'https://www.linkedin.com/in/kevinchangumich/',
    external: true,
  },
  { id: 'github', label: 'GitHub', value: 'https://github.com/Kevin4335', href: 'https://github.com/Kevin4335', external: true },
];
