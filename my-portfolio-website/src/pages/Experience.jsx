import { Button } from "../components";
import { ExperienceAccordian } from "../components";

export const Experience = () => (
  <div className={"bg-neutral-900  p-8"}>
    <div className={"min-w-full text-yellow-300"}>
      <div className={"flex flex-row sm:flex-col lg:flex-row justify-evenly"}>
        <div>
          <div className={"flex flex-row text-7xl font-black text-neutral-300"}>
            EXPERIENCES <div className={"text-yellow-300"}>.</div>
          </div>
          <div className={"text-gray-400"}>
            There is a reason why I say I am a god knows what stack developer
          </div>
        </div>
        <div
          className={
            "grid grid-cols-2 lg:grid-cols-3 child:m-4 child:border-gray-500 child:text-gray-500 child:text-sm child-hover:text-neutral-300 child-hover:border-neutral-300"
          }
        >
          <Button>🌐 Android Development</Button>
          <Button>🌐 Web Development</Button>

          <Button>🌐 Design</Button>
          <Button>🌐 Blockchain</Button>
          <Button>🌐 Rust</Button>
        </div>
      </div>
      <div className={"px-2 text-3xl divide-y divide-gray-500"}>
        <ExperienceAccordian />
      </div>
    </div>
  </div>
);
