const EducationCard = ({
  year,
  title,
  department,
  platform,
  // cgpa,
}: {
  year: string;
  title: string;
  department: string;
  platform: string;
  // cgpa: string;
}) => {
  return (
    <div className="group mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/50 dark:to-gray-900/50 p-6 backdrop-blur-sm ring-1 ring-gray-300 dark:ring-white/10 transition-all duration-300 hover:ring-teal-500/50 hover:shadow-lg hover:shadow-teal-500/20">
      <h3 className="mb-2 text-sm font-semibold text-teal-600 dark:text-teal-400">{year}</h3>
      <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <h2 className="mb-2 text-base font-medium text-gray-700 dark:text-gray-300">{department}</h2>
      <p className="text-sm text-cyan-600 dark:text-cyan-400">{platform}</p>
    </div>
  );
};

export default EducationCard;
