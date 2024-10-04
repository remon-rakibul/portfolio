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
          <h2 className="mb-6 text-4xl font-bold dark:text-white">
            Why hire me?
          </h2>
          <p className="mb-8 dark:text-gray-400">
          I am a dedicated AI Engineer with a strong passion for developing intelligent systems. My focus is on machine learning and natural language processing, combined with a problem-solving mindset and a commitment to driving innovation and excellence in AI solutions.
          </p>
          <div className="grid grid-cols-2 items-center gap-4 lg:grid-cols-1">
            {options.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`w-full whitespace-nowrap rounded-md px-4 py-2 text-center text-xs font-semibold lg:text-left lg:text-lg ${
                  activeTab === tab.toLowerCase()
                    ? "bg-teal-400 text-black"
                    : "bg-gray-500 text-white hover:bg-gray-600 dark:bg-gray-700"
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
            <h2 className="mb-6 text-center text-4xl font-bold text-teal-500 lg:text-start">
              My Experience
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <ExperienceCard
              // @ts-ignore
                year="April 2022 - Present"
                title="Jr AI Enginerer"
                platform="AriSaf Tech Ltd."
              />
            </div>
          </TabContent>
          <TabContent isActive={activeTab === "education"}>
            <h2 className="mb-6 text-center text-4xl font-bold text-teal-500 lg:text-start">
              My education
            </h2>
            <p className="mb-8 text-center text-black dark:text-gray-400 lg:text-start">
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
            <h2 className="mb-6 text-center text-4xl font-bold text-teal-500 lg:text-start">
              My Skills
            </h2>
            <p className="mb-8 text-center text-black dark:text-gray-400 lg:text-start">
            As an AI engineer, I specialize in developing intelligent systems that solve complex problems, leveraging cutting-edge technologies such as:
            </p>
            <Skills />
          </TabContent>

          <TabContent isActive={activeTab === "about me"}>
            <h2 className="mb-6 text-4xl font-bold text-teal-500">About Me</h2>

            <p className="rounded-lg bg-slate-400 p-4 text-black dark:bg-gray-800 dark:text-white/70">
              I’m Md Rakibul Haque, an AI engineer with a solid background in machine learning, natural language processing (NLP), and AI automation. With hands-on experience in building sophisticated models, I’ve contributed to a wide array of projects, including the development of ARChat, AutoHR, and AI-driven solutions for resume categorization and chatbot backend systems.
              <br /> <br />
I hold a BSc in Computer Science from the European University of Bangladesh and have completed a Data Foundation Nanodegree from Udacity. I have worked at AriSaf Tech Ltd as a Jr AI Engineer, engaging in projects that involve LLM chatbot optimization, NLP R&D, and API development using FastAPI and Django Rest Framework.
              <br /> <br />
My expertise spans technologies like Langchain, Keras, TensorFlow, Scikit-learn, and OpenCV, alongside a deep understanding of AI-based systems and frameworks. I have also collaborated on machine learning initiatives such as resume sorting with NER models and the creation of autonomous multi-agent systems for HR automation.
              <br />
Let’s connect and collaborate to bring AI-driven innovation to your projects!
            </p>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
