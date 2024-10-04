import CountUp from "react-countup";

const stats = [
  { num: 4, text: "Years of experience" },
  { num: 12, text: "Projects completed" },
  { num: 20, text: "technologies mastered" },
  { num: 350, text: "Code commits" },
];
const Stats = () => {
  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={0.5}
                  className="text-4xl font-extrabold text-black dark:text-white xl:text-6xl"
                />
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} text-sm leading-snug text-black dark:text-white/80 xl:text-base`}
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
