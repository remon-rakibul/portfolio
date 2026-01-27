import CountUp from "react-countup";

const stats = [
  { num: 4, text: "Years of experience" },
  { num: 12, text: "Projects completed" },
  { num: 20, text: "technologies mastered" },
  { num: 350, text: "Code commits" },
];
const Stats = () => {
  return (
    <section className="pb-12 pt-8 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="group flex flex-1 items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/50 dark:to-gray-900/50 p-6 backdrop-blur-sm ring-1 ring-gray-300 dark:ring-white/10 transition-all duration-300 hover:ring-teal-500/50 hover:shadow-lg hover:shadow-teal-500/20 xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={0.5}
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent xl:text-6xl"
                />
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} text-sm leading-snug text-gray-700 dark:text-gray-300 transition-colors group-hover:text-gray-900 dark:group-hover:text-white xl:text-base`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
