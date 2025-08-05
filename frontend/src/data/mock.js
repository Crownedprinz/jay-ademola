// Mock data for John Ademola's portfolio
export const profileData = {
  // Personal Information
  name: "John Ademola",
  title: "AI/ML Software Engineer & Master's Student",
  tagline: "Specializing in Prompt Engineering, NLP, and RAG Systems",
  location: "Fort Wayne, IN",
  email: "ademolajhon@gmail.com",
  phone: "+1 (682) 372-6624",
  quote: "If you can't explain it simply, you don't understand it well enough — Albert Einstein",
  
  // Hero Section
  heroDescription: "AI/ML-focused Software Engineer with a 4.0 GPA at Purdue University, passionate about creating intuitive, human-sounding AI interactions and contributing to innovative AI applications.",
  
  // About Section
  aboutTitle: "I'm John Ademola, an AI/ML Engineer & Graduate Student at Purdue University",
  aboutDescription: `My journey into AI/ML began with a fascination for making complex systems intuitive and human-friendly. With experience spanning prompt engineering, NLP, and RAG systems, I specialize in bridging the gap between cutting-edge AI research and practical applications.

Currently pursuing my Master's degree with a perfect 4.0 GPA while serving as a Graduate Teaching Assistant, I've had the privilege of working on transformative projects like Somalens, an AI-powered health prediction platform, and developing bias-mitigated ML models for real-world applications.

From architecting cloud-native solutions that reduced infrastructure costs by 25% to building neural networks achieving 85% F1 scores, I'm passionate about creating AI solutions that are both technically robust and genuinely helpful to users.`,
  
  personalDetails: {
    name: "John Ademola",
    age: "Graduate Student",
    from: "Fort Wayne, IN",
    email: "ademolajhon@gmail.com"
  },

  // Education & Experience
  education: [
    {
      institution: "Purdue University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/1200px-Purdue_Boilermakers_logo.svg.png",
      degree: "Master of Science in Computer Science",
      focus: "Focus: Artificial Intelligence",
      period: "2024 - 2026",
      details: "GPA: 4.0/4.0",
      additional: "Graduate Teaching Assistant"
    },
    {
      institution: "Kogi State University",
      logo: "https://via.placeholder.com/100x100/4A90E2/FFFFFF?text=KSU",
      degree: "Bachelor of Science in Computer Science",
      focus: "Honors",
      period: "2011 - 2015",
      details: "GPA: 3.42/4.0",
      additional: "Computer Science Graduate"
    }
  ],

  experience: [
    {
      company: "Smarterforms",
      logo: "https://via.placeholder.com/100x100/2ECC71/FFFFFF?text=SF",
      position: "Senior Backend Engineer",
      period: "Mar 2024 - Aug 2024",
      location: "London, UK",
      description: "Designed automated workflows and optimized data pipelines for AI-driven e-forms processing, improving efficiency by 20%. Led sprint planning and technical architecture for data-driven AI projects."
    },
    {
      company: "Sterling Bank",
      logo: "https://via.placeholder.com/100x100/E74C3C/FFFFFF?text=SB",
      position: "Backend Engineer", 
      period: "Sept 2018 - June 2021",
      location: "Lagos, Nigeria",
      description: "Architected cloud-native solutions on Azure, reducing infrastructure costs by 25%. Optimized SQL queries, boosting performance by 30%. Streamlined CI/CD processes, cutting deployment times by 40%."
    },
    {
      company: "Purdue University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/1200px-Purdue_Boilermakers_logo.svg.png",
      position: "Graduate Teaching Assistant",
      period: "2024 - Present",
      location: "Fort Wayne, IN",
      description: "Developed clear, concise lesson plans and explained complex CS concepts to undergraduates. Specialized in Machine Learning and Natural Language Processing coursework."
    }
  ],

  // Technical Skills
  skills: [
    { name: "Python", category: "programming" },
    { name: "SQL", category: "programming" },  
    { name: "GraphQL", category: "programming" },
    { name: "C", category: "programming" },
    { name: "LangChain", category: "ai" },
    { name: "Hugging Face", category: "ai" },
    { name: "PyTorch", category: "ai" },
    { name: "Scikit-learn", category: "ai" },
    { name: "FastAPI", category: "backend" },
    { name: "REST", category: "backend" },
    { name: "Azure", category: "cloud" },
    { name: "Docker", category: "cloud" },
    { name: "MongoDB", category: "database" },
    { name: "MSSQL", category: "database" },
    { name: "Git", category: "tools" },
    { name: "RabbitMQ", category: "tools" }
  ],

  // Projects
  projects: [
    {
      title: "Somalens: AI-Powered Health Platform",
      image: "https://somalens.com/assets/images/phone_image.png",
      description: "Developed and deployed a neural-network-based ML model for real-time health predictions, integrated with a REST API. Designed prompt templates using Cursor, optimizing token usage and response quality for a RAG-based chatbot.",
      technologies: ["Python", "FastAPI", "LangChain", "RAG", "Neural Networks"],
      liveUrl: "https://somalens.com",
      githubUrl: "#"
    },
    {
      title: "Toxic Comment Detection Pipeline",
      image: "https://via.placeholder.com/400x200/8E44AD/FFFFFF?text=BERT+Pipeline",
      description: "Built a two-stage BERT/RoBERTa pipeline for toxic comment detection, achieving 85% F1 score. Applied AIF360 for bias mitigation and SHAP for interpretability.",
      technologies: ["Python", "BERT", "RoBERTa", "AIF360", "SHAP"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Based Symptom Checking System", 
      image: "https://via.placeholder.com/400x200/3498DB/FFFFFF?text=Symptom+Checker",
      description: "Designed 'expert persona' prompts for a healthcare chatbot, improving diagnostic confidence by 15%. Managed asynchronous API calls for intuitive, human-sounding responses.",
      technologies: ["Python", "NLP", "Prompt Engineering", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "RAG-based Chatbot with DeepSeek",
      image: "https://via.placeholder.com/400x200/27AE60/FFFFFF?text=RAG+Chatbot",
      description: "Developed a RAG-based chatbot with DeepSeek embeddings, improving response accuracy by 25%. Created structured API documentation and prompt libraries.",
      technologies: ["Python", "RAG", "DeepSeek", "Vector Databases"],
      liveUrl: "#", 
      githubUrl: "#"
    }
  ],

  // Achievements
  achievements: [
    "Maintained a 4.0 GPA while specializing in AI/ML and serving as a Graduate Teaching Assistant",
    "Developed a RAG-based chatbot with DeepSeek embeddings, improving response accuracy by 25%",
    "Created structured API documentation and prompt libraries for reusable, scalable AI workflows",
    "Architected cloud-native solutions reducing infrastructure costs by 25%"
  ],

  // Testimonials
  testimonials: [
    {
      name: "Dr. Sarah Johnson",
      title: "AI Research Supervisor", 
      company: "Purdue University",
      image: "https://via.placeholder.com/80x80/34495E/FFFFFF?text=SJ",
      testimonial: "John consistently demonstrates exceptional technical skills in AI/ML development. His work on prompt engineering and RAG systems has been outstanding, and his ability to explain complex concepts makes him an excellent teaching assistant."
    },
    {
      name: "Michael Chen",
      title: "Senior Engineering Manager",
      company: "Smarterforms",
      image: "https://via.placeholder.com/80x80/2C3E50/FFFFFF?text=MC", 
      testimonial: "John's expertise in AI-driven workflows and data pipeline optimization was instrumental in improving our system efficiency by 20%. His proactive approach and technical leadership made him a valuable team member."
    }
  ],

  // Contact Info
  contact: {
    email: "ademolajhon@gmail.com",
    phone: "+1 (682) 372-6624", 
    address: "Fort Wayne, Indiana",
    linkedin: "http://linkedin.com/in/ademolajhon",
    github: "http://github.com/crownedprinz",
    resume: "https://drive.google.com/file/d/19viiL_95Q_Vs8MFqedSIFBplOq2cwkO9/view?usp=share_link"
  }
};

export default profileData;