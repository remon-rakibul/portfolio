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
    <div className="mb-4 rounded-lg bg-white/30 p-4 shadow-md dark:bg-gray-800">
      <h3 className="text-sm text-teal-500 dark:text-teal-400">{year}</h3>
      <h2 className="text-xl font-semibold text-black dark:text-white">
        {title}
      </h2>
      <p className="text-sm text-sky-500 dark:text-sky-300">{location}</p>

      <ul className="my-4 flex list-inside list-disc flex-col gap-4 text-sm text-black/70 dark:text-white/50">
        {bulletPoints.map((point, index) => (
          <li key={index}>
            <b className="text-base text-black dark:text-white/80">
              {point}
            </b>
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
        year="11 2024 – 12 2024"
        title="Software Engineer"
        location="Appsinception, Remote"
        bulletPoints={[
          "Developed RESTful APIs with Django Rest Framework (DRF) for seamless backend functionality.",
          "Implemented multi-agent systems with Agency-Swarm for tool and team management.",
          "Collaborated with the frontend team to ensure accurate API integration.",
          "Conducted rigorous debugging and testing for reliability and performance.",
        ]}
      />
      <ExperienceCard
        year="04 2023 – 10 2024"
        title="Jr AI Engineer"
        location="AriSaf Tech Ltd, Dhaka, Bangladesh"
        bulletPoints={[
          "Engaged with ARChat, contributing to its development and optimization.",
          "Worked on AI-based projects such as CV-Sorting and AutoHR.",
          "Performed Proof of Concept (PoC) initiatives to showcase technology feasibility.",
          "Conducted extensive R&D in Natural Language Processing (NLP).",
          "Built and managed APIs using DRF and FastAPI for backend services.",
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
          "Worked on a team project AI scoring system with Watson Knowledge Studio under the supervision of IBM",
        ]}
      />
    </div>
  );
};

export default ExperienceSection;
