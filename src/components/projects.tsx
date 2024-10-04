import Card from "./card";
// import projectImg1 from "../assets/projects/projectImg1.png";

const Projects = () => {
  const projects = [
    {
      title: "ARChat",
      description:
        "Custom chatbot creation with multiple knowledge bases, optimized for retrieval-augmented generation (RAG) based question answering.",
      primaryUrl: "https://arc-chat.vercel.app/",
      secondaryUrl: "https://github.com/remon-rakibul/autonomous-hr", // Optional, if applicable
    },
    {
      title: "AutoHR",
      description:
        "An autonomous multi-agent system that automates most workflows for an HR persona, including the ability to pull, research, and draft email responses.",
      primaryUrl: "https://github.com/remon-rakibul/autonomous-hr",
      secondaryUrl: "https://github.com/remon-rakibul/autonomous-hr", // Optional, if applicable
    },
    {
      title: "CV-Sorting",
      description:
        "A Proof of Concept (PoC) project that sorts resumes against job descriptions using relevance scoring.",
      primaryUrl: "https://github.com/remon-rakibul/resume-categorization-ml",
      secondaryUrl: "https://github.com/remon-rakibul/resume-categorization-ml", // Optional, if applicable
    },
    {
      title: "AI Study Buddy",
      description:
        "A question generation and answering platform for students and teachers, capable of generating questions and answers based on provided documents.",
      primaryUrl: "https://ai-study-buddy-qxb2jcy4zaqmzcuuryedhl.streamlit.app/",
      secondaryUrl: "https://github.com/remon-rakibul/AI-Study-Buddy", // Optional, if applicable
    },
    {
      title: "Chatbot AI Backend",
      description:
        "An API backend for a retrieval-augmented generation (RAG) chatbot, allowing users to upload documents and chat with them.",
      primaryUrl: "https://github.com/remon-rakibul/chatbot-demo-api",
      secondaryUrl: "https://github.com/remon-rakibul/chatbot-demo-api", // Optional, if applicable
    },
    {
      title: "Resume Categorizer",
      description:
        "A machine learning model that categorizes resumes into different sub-domains (e.g., HR, Arts, etc.).",
      primaryUrl: "https://github.com/remon-rakibul/resume-categorization-ml",
      secondaryUrl: "https://github.com/remon-rakibul/resume-categorization-ml", // Optional, if applicable
    },
    {
      title: "AriSaf Chatbot",
      description:
        "A chatbot for the AriSaf Tech website that utilizes the knowledge base from the site URLs.",
      primaryUrl: "https://github.com/remon-rakibul/AriSaf-ChatBot",
      secondaryUrl: "https://github.com/remon-rakibul/AriSaf-ChatBot", // Optional, if applicable
    },
    {
      title: "RealEstate Backend",
      description:
        "An API for the backend of a real estate website, developed using Django Rest Framework.",
      primaryUrl: "https://github.com/remon-rakibul/real-estate-backend",
      secondaryUrl: "https://github.com/remon-rakibul/real-estate-backend", // Optional, if applicable
    },
    {
      title: "Book Recommender System",
      description:
        "A system where users can select a book name and receive recommendations for five similar books.",
      primaryUrl: "https://github.com/remon-rakibul/books-recommender-system",
      secondaryUrl: "https://github.com/remon-rakibul/books-recommender-system", // Optional, if applicable
    },
    {
      title: "Covid 19 Detector",
      description:
        "A deep learning application that detects COVID-19 from chest X-ray images, built using the Django framework.",
      primaryUrl: "https://github.com/remon-rakibul/covid-19_django_app",
      secondaryUrl: "https://github.com/remon-rakibul/covid-19_django_app", // Optional, if applicable
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            // imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            primaryUrl={project.primaryUrl}
            secondaryUrl={project.secondaryUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
