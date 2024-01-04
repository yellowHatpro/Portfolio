import { Button } from "../components/Button.jsx";
import ExperienceDiv from "../components/ExperienceDiv.jsx";

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
            "grid grid-cols-2 lg:grid-cols-3 child:m-4 child:border-gray-500 text-gray-500 child:text-sm child-hover:text-neutral-300 child-hover:border-neutral-300"
          }
        >
          <Button>🌐 Android Development</Button>
          <Button>🌐 Frontend Development</Button>

          <Button>🌐 Backend Development</Button>
          <Button>🌐 Design</Button>
          <Button>🌐 Blockchain</Button>
        </div>
      </div>
      <div className={"px-2 text-3xl divide-y divide-gray-500"}>
        <ExperienceDiv content={"Did Google Summer of Code"}>
          Google Summer of Code 2022 @ MetaBrainz
        </ExperienceDiv>
        <ExperienceDiv content={"Android Development Internship with Atom Ei"}>
          Atom EI | Android Developer
        </ExperienceDiv>
        <ExperienceDiv
          content={
            "Got selected in Foss Overflow 2021 as the mentee for the project Sampoorna"
          }
        >
          FOSS Overflow 2021 Mentee
        </ExperienceDiv>
        <ExperienceDiv content={"Mentored project Sampoorna"}>
          GirlScript Summer of Code 2021 Mentor
        </ExperienceDiv>
      </div>
    </div>
  </div>
);
