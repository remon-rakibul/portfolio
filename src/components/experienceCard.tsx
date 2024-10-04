const ExperienceCard = ({
  year,
  title,
  location,
}: {
  year: string;
  title: string;
  location: string;
}) => {
  return (
    <div className="mb-4 rounded-lg bg-white/30 p-4 shadow-md dark:bg-gray-800">
      <h3 className="text-sm text-teal-500 dark:text-teal-400">{year}</h3>
      <h2 className="text-xl font-semibold text-black dark:text-white">
        {title}
      </h2>
      <p className="text-sm text-sky-500 dark:text-sky-300">{location}</p>

      <ul className="my-4 flex list-inside list-disc flex-col gap-4 text-sm text-black/70 dark:text-white/50">
        <li>
          <b className="text-base text-black dark:text-white/80">
            ARChat Development:
          </b>{" "}
          Engaged with ARChat, a sophisticated LLM chatbot, contributing to its
          development and optimization.
        </li>
        <li>
          <b className="text-base text-black dark:text-white/80">
            AI-Based Projects:
          </b>{" "}
          Worked on notable AI projects such as cv-sorting and AutoHR.
        </li>
        <li>
          <b className="text-base text-black dark:text-white/80">
            Proof of Concept (PoC) Initiatives:
          </b>{" "}
          Performed AI PoC initiatives to explore and showcase cutting-edge
          technology feasibility.
        </li>
        <li>
          <b className="text-base text-black dark:text-white/80">
            Natural Language Processing (NLP) R&D:
          </b>{" "}
          Conducted extensive R&D focusing on NLP for AI projects, driving
          innovation.
        </li>
        <li>
          <b className="text-base text-black dark:text-white/80">
            API Development:
          </b>{" "}
          Built and managed APIs using DRF and FastAPI for optimized backend
          services.
        </li>
      </ul>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div>
      <ExperienceCard
        year="04 2023 – Present"
        title="Jr AI Engineer"
        location="AriSaf Tech Ltd, Dhaka, Bangladesh"
      />
      <ExperienceCard
        year="01 2022 – 01 2023"
        title="Teaching Assistant"
        location="Poridhi, Dhaka, Bangladesh"
      />
      <ExperienceCard
        year="04 2019 – 05 2020"
        title="Junior Machine Learning Engineer"
        location="Headblocks, Dhaka, Bangladesh"
      />
    </div>
  );
};

export default ExperienceSection;
