// import { title } from "framer-motion/client";
import Card from "./card";
// import projectImg1 from "../assets/projects/projectImg1.png";

const Projects = () => {
  const workProjects = [
    {
      title: "Individual Development Plan Agent",
      description:
        "A full-stack agentic system that helps users advance from their current role to their desired position. Built with OpenAI API, Langgraph, FastAPI, PostgreSQL, Angular, and AWS.",
      primaryUrl: "#",
      secondaryUrl: "https://drive.google.com/file/d/1mMW5MFTh5xIr36VLWU8HJ61wQ5U9PpK2/view?usp=sharing",
    },
    {
      title: "Job Description Agent",
      description:
        "An AI platform that automates and standardizes company-specific job descriptions. Built with OpenAI API, Langgraph, FastAPI, PostgreSQL, Angular, and AWS.",
      primaryUrl: "#",
      secondaryUrl: "https://drive.google.com/file/d/1JuB0WDGrPiNgLekQAky6ojGO3qBvrLW0/view?usp=sharing",
    },
    {
      title: "AI Agent Widget",
      description:
        "An Agentic platform enabling users to sign up, create tools, agents, teams, and widgets, integrate payment systems, and generate embed codes for deploying chatbots seamlessly.",
      primaryUrl: "https://www.codester.com/items/53232/ai-agent-widget-chat-support-platform-python",
      secondaryUrl: "https://chatbot.appsinception.com/",
    },
    {
      title: "ARChat",
      description:
        "A RAG-based platform enabling users to create multiple chatbots, each with its own dedicated knowledge base for enhanced functionality and customization.",
      primaryUrl: "#",
      secondaryUrl: "https://arc-chat.vercel.app/",
    },
  ];

  const openSourceProjects = [
    {
      title: "LangGraph Node-Level Streamer",
      description:
        "A PyPi package that streams at node level at langgraph. Supports tool calling while streaming.",
      primaryUrl: "https://pypi.org/project/langgraph-node-streamer/",
      secondaryUrl: "https://pypi.org/project/langgraph-node-streamer/",
    },
    {
      title: "SQL-RAG Combined Agent FastAPI Backend",
      description:
        "A production ready SQL combined agentic RAG with FastAPI backend. Built with Langgraph, FastAPI, PostgreSQL, PGvector, and Docker.",
      primaryUrl: "https://github.com/remon-rakibul/sql-rag-fastapi-backend",
      secondaryUrl: "#",
    },
    {
      title: "SQL Agent FastAPI Backend",
      description:
        "A production ready SQL Agent with FastAPI backend. Built with Langgraph, FastAPI, PostgreSQL, SQLite, and Docker.",
      primaryUrl: "https://github.com/remon-rakibul/agentic-rag-fastapi-backend",
      secondaryUrl: "#",
    },
    {
      title: "Agentic RAG FastAPI Backend",
      description:
        "A production ready Agentic RAG with FastAPI backend. Built with Langgraph, FastAPI, PostgreSQL, PGvector, and Docker.",
      primaryUrl: "https://github.com/remon-rakibul/agentic-rag-fastapi-backend",
      secondaryUrl: "#",
    },
    {
      title: "AutoHR",
      description:
        "An autonomous multi-agent system to automate most of the workflow of an HR Persona. Can automatically pull, research, and draft email responses in Gmail.",
      primaryUrl: "https://github.com/remon-rakibul/autonomous-hr",
      secondaryUrl: "#",
    },
    {
      title: "AI Study Buddy",
      description:
        "A Question Generation and answering platform for students and teachers. Given any number of PDF, AI will generate questions based on the documents provided. Users can submit URL, Youtube video link, along with PDF documents.",
      primaryUrl: "https://github.com/remon-rakibul/AI-Study-Buddy",
      secondaryUrl: "https://ai-study-buddy-qxb2jcy4zaqmzcuuryedhl.streamlit.app/",
    },
    {
      title: "Chatbot AI Backend",
      description:
        "An API for the backend of a RAG chatbot. Users can upload docx, pdf, pptx documents and chat with them.",
      primaryUrl: "https://github.com/remon-rakibul/chatbot-demo-api",
      secondaryUrl: "#",
    },
    {
      title: "Resume Categorizer",
      description:
        "A machine learning model that can categorize resumes to different sub-domains (ex. HR, ARTS, etc).",
      primaryUrl: "https://github.com/remon-rakibul/resume-categorization-ml",
      secondaryUrl: "#",
    },
    {
      title: "AriSaf Chatbot",
      description:
        "A chatbot for the AriSaf Tech website using the knowledgebase from the site URLs.",
      primaryUrl: "https://github.com/remon-rakibul/AriSaf-ChatBot",
      secondaryUrl: "#",
    },
    {
      title: "RealEstate Backend",
      description:
        "An API for the backend of a real estate website. Built with Django Rest Framework.",
      primaryUrl: "https://github.com/remon-rakibul/real-estate-backend",
      secondaryUrl: "#",
    },
    {
      title: "Book Recommender System",
      description:
        "Users can select a book name from a drop-down list and the model will recommend 5 books.",
      primaryUrl: "https://github.com/remon-rakibul/books-recommender-system",
      secondaryUrl: "https://books-recommender-system-jad3vmkvta8qd8vc8bzzmm.streamlit.app/",
    },
    {
      title: "Movie Dataset 2023",
      description:
        "A dataset of all movies till 2023. Can be used for EDA, Recommendation Systems, Data Analysis, etc.",
      primaryUrl: "https://github.com/remon-rakibul/movie-dataset-2023",
      secondaryUrl: "#",
    },
    {
      title: "Covid 19 Detector",
      description:
        "Given a chest X-ray image of a person, the system will detect COVID-19. Model built and trained using Deep Learning architecture. UI built with Python Django framework.",
      primaryUrl: "https://github.com/remon-rakibul/covid-19_django_app",
      secondaryUrl: "#",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Work Projects Section */}
      <div>
        <h2 className="mb-6 text-3xl font-bold text-teal-400 dark:text-teal-300">
          Work Projects
        </h2>
        <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-2">
          {workProjects.map((project, index) => (
            <Card
              key={`work-${index}`}
              title={project.title}
              description={project.description}
              primaryUrl={project.primaryUrl}
              secondaryUrl={project.secondaryUrl}
            />
          ))}
        </div>
      </div>

      {/* Open Source Projects Section */}
      <div>
        <h2 className="mb-6 text-3xl font-bold text-teal-400 dark:text-teal-300">
          Open Source Projects
        </h2>
        <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {openSourceProjects.map((project, index) => (
            <Card
              key={`opensource-${index}`}
              title={project.title}
              description={project.description}
              primaryUrl={project.primaryUrl}
              secondaryUrl={project.secondaryUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
