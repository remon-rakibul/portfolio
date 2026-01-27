const ExperienceCard = ({
  year,
  title,
  location,
  bulletPoints,
}: {
  year: string;
  title: string;
  location: string;
  bulletPoints: string[];
}) => {
  return (
    <div className="group mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/50 dark:to-gray-900/50 p-6 backdrop-blur-sm ring-1 ring-gray-300 dark:ring-white/10 transition-all duration-300 hover:ring-teal-500/50 hover:shadow-lg hover:shadow-teal-500/20">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-teal-600 dark:text-teal-400">{year}</h3>
      </div>
      <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="mb-4 text-sm font-medium text-cyan-600 dark:text-cyan-400">{location}</p>

      <ul className="flex list-inside list-disc flex-col gap-3 text-sm text-gray-700 dark:text-gray-300">
        {bulletPoints.map((point, index) => (
          <li key={index} className="leading-relaxed">
            <span className="text-gray-700 dark:text-gray-300">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div>
      <ExperienceCard
        year="01 2025 – Present"
        title="AI Engineer"
        location="Recom, Dhaka, Bangladesh"
        bulletPoints={[
          "Designed and deployed Agentic Rag and tool calling Agent for HRMS software.",
          "Designed and deployed full-stack agentic systems for HR technology solutions.",
          "Developed AI-driven payroll automation systems, integrating gen AI to streamline payroll management.",
          "Deployed and maintained end-to-end agentic platforms on AWS, ensuring scalability and high availability.",
        ]}
      />
      <ExperienceCard
        year="11 2024 – 12 2024"
        title="Software Engineer"
        location="Appsinception, Remote"
        bulletPoints={[
          "Developed RESTful APIs with Django Rest Framework (DRF) for seamless backend functionality.",
          "Implemented multi-agent systems with Agency-Swarm, enabling efficient creation and management of tools, agents, multi-agent teams, and widgets via the API.",
          "Conducted rigorous debugging and testing to ensure API reliability, performance, and smooth deployment.",
        ]}
      />
      <ExperienceCard
        year="04 2023 – 10 2024"
        title="Jr AI Engineer"
        location="AriSaf Tech Ltd, Dhaka, Bangladesh"
        bulletPoints={[
          "Engaged with ARChat, a sophisticated LLM chatbot, contributing to its development and optimization.",
          "Performed various AI Proof of Concept (PoC) initiatives to explore and showcase cutting-edge tech feasibility.",
          "Engaged in research and development focusing on Natural Language Processing (NLP) for AI projects.",
          "Conducting extensive R&D to integrate emerging technologies and drive product innovation.",
          "Building and managing APIs with DRF and FastAPI for optimized backend services.",
        ]}
      />
      <ExperienceCard
        year="01 2022 – 01 2023"
        title="Teaching Assistant"
        location="Poridhi, Dhaka, Bangladesh"
        bulletPoints={[
          "Wrote blogs about various technological topics",
          "Assisted Teachers in various courses",
          "Assisted Students in coding assignments",
        ]}
      />
      <ExperienceCard
        year="04 2019 – 05 2020"
        title="Junior Machine Learning Engineer"
        location="Headblocks, Dhaka, Bangladesh"
        bulletPoints={[
          "Collaborated on a team project leveraging IBM's WKS, under the supervision of IBM professionals.",
          "Led research and development for Named Entity Recognition (NER) tailored for resumes.",
          "Developed a sophisticated model capable of identifying various entities within resumes.",
          "Processed and annotated a large resume corpus to train and refine the NER model.",
        ]}
      />
    </div>
  );
};

export default ExperienceSection;
