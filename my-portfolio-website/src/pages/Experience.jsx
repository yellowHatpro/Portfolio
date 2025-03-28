import { Button } from "../components";
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
            There is a reason why I say I am a god knows what stack developer
          </div>
        </div>
        <div
          className={
            "grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 child:m-2 sm:child:m-3 md:child:m-4 child:border-gray-500 child:text-gray-500 child:text-xs sm:child:text-sm child-hover:text-neutral-300 child-hover:border-neutral-300 mt-4 lg:mt-0"
          }
        >
          <Button>🌐 Android Development</Button>
          <Button>🌐 Web Development</Button>
          <Button>🌐 Design</Button>
          <Button>🌐 Blockchain</Button>
          <Button>🌐 Rust</Button>
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
