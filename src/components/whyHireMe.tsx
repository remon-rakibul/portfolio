import { useState } from "react";
import TabContent from "./tabContent";
import EducationCard from "./educationCard";
import Skills from "./skills";
import ExperienceCard from "./experienceCard";

const WhyHireMe = () => {
  const options = ["Skills", "Experience", "Education", "About me"];
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="flex w-full items-center px-4">
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        {/* Left Section (Tabs) */}
        <div className="lg:w-2/6">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            Why hire me?
          </h2>
          <p className="mb-8 text-gray-700 dark:text-gray-400">
          I am a dedicated AI Engineer with a strong passion for developing intelligent systems. My focus is on machine learning, natural language processing, and agentic AI systems, combined with a problem-solving mindset and a commitment to driving innovation and excellence in AI solutions.
          </p>
          <div className="grid grid-cols-2 items-center gap-4 lg:grid-cols-1">
            {options.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`w-full whitespace-nowrap rounded-lg px-4 py-3 text-center text-xs font-semibold transition-all duration-300 lg:text-left lg:text-base ${
                  activeTab === tab.toLowerCase()
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/50"
                    : "bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700/70 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section (Content) */}
        <div className="lg:w-4/6">
          {/* Add similar TabContent for other sections (Experience, Skills, About me) */}
          <TabContent isActive={activeTab === "experience"}>
            <h2 className="mb-6 text-center text-4xl font-bold text-teal-600 dark:text-teal-500 lg:text-start">
              My Experience
            </h2>
            <ExperienceCard />
          </TabContent>
          <TabContent isActive={activeTab === "education"}>
            <h2 className="mb-6 text-center text-4xl font-bold text-teal-600 dark:text-teal-500 lg:text-start">
              My education
            </h2>
            <p className="mb-8 text-center text-gray-700 dark:text-gray-400 lg:text-start">
              I have developed a strong foundation in Computer Science, driven
              by my commitment and passion for learning, preparing me for
              success in the tech industry.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <EducationCard
                year="2022"
                title="Bachelor of Science"
                department="Department of CSE"
                platform="European University of Bangladesh"
                // cgpa="CGPA: 3.47 (In the scale of 4.00)"
              />
                <EducationCard
                  year="2018"
                  title="Nanodegree"
                  department="Data Foundation"
                  platform="Udacity"
                  // cgpa="GPA: 5.00 (In the scale of 5.00)"
                />
              <EducationCard
                year="2018"
                title="Diploma In Engineering"
                department="Department of CSE"
                platform="Satkhira Polytech Institute"
                // cgpa="GPA: 2.75 (In the scale of 4.00)"
              />
            </div>
          </TabContent>

          <TabContent isActive={activeTab === "skills"}>
            <h2 className="mb-6 text-center text-4xl font-bold text-teal-600 dark:text-teal-500 lg:text-start">
              My Skills
            </h2>
            <p className="mb-8 text-center text-gray-700 dark:text-gray-400 lg:text-start">
            As an AI engineer, I specialize in developing intelligent systems that solve complex problems, leveraging cutting-edge technologies including Generative AI frameworks, Machine Learning libraries, and modern backend architectures:
            </p>
            <Skills />
          </TabContent>

          <TabContent isActive={activeTab === "about me"}>
            <h2 className="mb-6 text-4xl font-bold text-teal-600 dark:text-teal-500">About Me</h2>

            <p className="rounded-xl bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/50 dark:to-gray-900/50 p-6 text-gray-800 dark:text-white/90 backdrop-blur-sm ring-1 ring-gray-300 dark:ring-white/10">
              I'm Md Rakibul Haque, an AI Engineer currently working at Recom, where I design and deploy full-stack agentic systems for HR technology solutions. With a solid background in machine learning, natural language processing (NLP), and AI automation, I've contributed to a wide array of projects including Individual Development Plan Agent, Job Description Agent, ARChat, AutoHR, and various AI-driven solutions.
              <br /> <br />
              I hold a BSc in Computer Science from the European University of Bangladesh and have completed a Data Foundation Nanodegree from Udacity. My professional journey includes working at Recom as an AI Engineer, Appsinception as a Software Engineer, AriSaf Tech Ltd as a Jr AI Engineer, and serving as a Teaching Assistant at Poridhi.
              <br /> <br />
              My expertise spans technologies like LangGraph, Langchain, CrewAI, Agency-Swarm, Keras, TensorFlow, Scikit-learn, FastAPI, Django Rest Framework, and various vector databases. I specialize in building production-ready agentic systems, RAG implementations, and deploying scalable AI solutions on AWS. I'm passionate about creating intelligent systems that solve real-world problems and drive innovation.
              <br /> <br />
              Let's connect and collaborate to bring AI-driven innovation to your projects!
            </p>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
