// import SkillImg1 from "../assets/skills/html.svg";
// import SkillImg2 from "../assets/skills/css.svg";
// import SkillImg3 from "../assets/skills/js.svg";
// import SkillImg4 from "../assets/skills/ts.svg";
// import SkillImg5 from "../assets/skills/react.svg";
// import SkillImg6 from "../assets/skills/nextJS.svg";
// import SkillImg7 from "../assets/skills/alpineJS.svg";
// import SkillImg8 from "../assets/skills/tailwind.svg";
// import SkillImg9 from "../assets/skills/bootstrap.svg";
// import SkillImg10 from "../assets/skills/redux.svg";
// // import SkillImg11 from "../assets/skills/tailwind.svg";
// import SkillImg12 from "../assets/skills/git.svg";

// const SkillCard = ({ icon, altText }: { icon: string; altText: string }) => (
//   <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-800 p-8 shadow-md duration-300 ease-in-out hover:bg-teal-600">
//     <img src={icon} alt={altText} className="h-12 w-12 hover:text-teal-500" />
//     <p>{altText}</p>
//   </div>
// );

// const Skills = () => {
//   const skills = [
//     { icon: SkillImg1, altText: "Langchain" },
//     { icon: SkillImg2, altText: "CrewAI" },
//     { icon: SkillImg3, altText: "LLM Prompt Engineering" },
//     { icon: SkillImg4, altText: "VectorDB" },
//     { icon: SkillImg5, altText: "Scikit-learn" },
//     { icon: SkillImg6, altText: "Keras" },
//     { icon: SkillImg7, altText: "TensorFlow" },
//     { icon: SkillImg8, altText: "Django Rest Framework" },
//     { icon: SkillImg9, altText: "FastAPI" },
//     { icon: SkillImg10, altText: "NLTK" },
//     // { icon: SkillImg11, altText: "spaCy" },
//     { icon: SkillImg12, altText: "OpenCV" },
//     // { icon: SkillImg13, altText: "NumPy" },
//     // { icon: SkillImg14, altText: "Pandas" },
//     // { icon: SkillImg15, altText: "Matplotlib" },
//     // { icon: SkillImg16, altText: "Seaborn" },
//     // { icon: SkillImg17, altText: "CSS" },
//     // { icon: SkillImg18, altText: "Bootstrap" },
//     // { icon: SkillImg19, altText: "Git" },
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
//       {skills.map((skill, index) => (
//         <SkillCard key={index} icon={skill.icon} altText={skill.altText} />
//       ))}
//     </div>
//   );
// };

// export default Skills;

const SkillCard = ({ skill }: { skill: string }) => (
  <div className="group flex h-24 w-full items-center justify-center rounded-xl bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm ring-1 ring-gray-300 dark:ring-white/10 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-cyan-500/20 hover:ring-teal-500/50 hover:shadow-lg hover:shadow-teal-500/20">
    <p className="text-center text-base font-semibold text-gray-800 dark:text-white transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-300 md:text-lg">
      {skill}
    </p>
  </div>
);

const Skills = () => {
  const skills = [
    // Languages
    "Python",
    "JavaScript",
    "SQL",
    // Frontend
    "HTML",
    "CSS",
    "Bootstrap",
    "React",
    // Backend
    "Django Rest Framework",
    "FastAPI",
    // Database
    "PostgreSQL",
    "PGvector",
    "Pinecone",
    "ChromaDB",
    "Supabase",
    // Generative AI
    "LangGraph",
    "Langchain",
    "CrewAI",
    "Agency-Swarm",
    "RAG",
    "Context Engineering",
    // ML/DL
    "Scikit-learn",
    "Keras",
    "TensorFlow",
    "NLTK",
    "spaCy",
    "OpenCV",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    // Developer Tools
    "Git",
    "Docker",
    "AWS EC2",
    "Postman",
  ];

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
