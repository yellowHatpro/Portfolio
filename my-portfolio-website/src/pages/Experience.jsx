import { ExperienceAccordian } from "../components";

export const Experience = () => (
  <div
    className={"bg-neutral-900 p-4 sm:p-6 md:p-8 max-w-full overflow-x-hidden"}
  >
    <div className={"w-full text-[#f2e5bc]"}>
      <div
        className={
          "flex flex-col sm:flex-col lg:flex-row justify-evenly gap-4 md:gap-6 lg:gap-8"
        }
      >
        <div className="w-full lg:w-auto text-center lg:text-left">
          <div
            className={
              "flex flex-row justify-center lg:justify-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-neutral-300 flex-wrap"
            }
          >
            EXPERIENCE
          </div>
          <div className={"text-gray-400 text-sm sm:text-base mt-2"}>
            Experience in working with various tech stacks and languages.
          </div>
        </div>
      </div>
      <div
        className={
          "px-0 sm:px-2 text-xl sm:text-2xl md:text-3xl divide-y divide-gray-500 mt-6 sm:mt-8"
        }
      >
        <ExperienceAccordian />
      </div>
    </div>
  </div>
);
