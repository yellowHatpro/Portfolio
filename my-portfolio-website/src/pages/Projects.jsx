import { useState } from "react";
import { projects } from "../data";
import { Button } from "../components";
import { Card } from "../components";

export const Projects = () => {
  let [currentProjectType, setCurrentProjectType] = useState("web");

  return (
    <div
      id={"projects"}
      className={"p-4 sm:p-6 md:p-8 max-w-full overflow-x-hidden"}
    >
      <div
        className={"flex flex-col md:flex-row justify-evenly gap-4 md:gap-6"}
      >
        <div
          className={
            "flex flex-row text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-neutral-300 flex-wrap justify-center md:justify-start"
          }
        >
          PROJECTS.
        </div>
        <div
          className={
            "text-neutral-400 font-light my-2 sm:m-4 text-justify text-sm sm:text-base md:text-lg"
          }
        >
          Experienced in building different apps of different kinds. Worked on
          multiple personal and open source projects, enjoying my time building
          stuff. Do visit my github profile for more 😋. <br /> P.S. I am mostly
          busy working on private projects and open source projects, and testing
          and reading stuff. I am terrible at deploying my projects, so you
          might not be able to see them live. I know, I am lazy.
        </div>
      </div>
      <div className="mt-4 md:mt-6 flex justify-center">
        <div
          className={
            "flex flex-row flex-wrap justify-center child:m-2 sm:child:m-3 md:child:m-4 child:border-2 child:rounded-3xl child:p-0.5 text-gray-500 child:text-xs sm:child:text-sm child-hover:text-white child-hover:border-white"
          }
        >
          <Button
            onClick={() => setCurrentProjectType("web")}
            text={"text-gray-500"}
            border={"border-gray-500"}
            isSelected={currentProjectType === "web"}
          >
            Web
          </Button>
          <Button
            onClick={() => setCurrentProjectType("blockchain")}
            text={"text-gray-500"}
            border={"border-gray-500"}
            isSelected={currentProjectType === "blockchain"}
          >
            Blockchain
          </Button>
          <Button
            onClick={() => setCurrentProjectType("android")}
            text={"text-gray-500"}
            border={"border-gray-500"}
            isSelected={currentProjectType === "android"}
          >
            Android
          </Button>
          <Button
            onClick={() => setCurrentProjectType("rust")}
            text={"text-gray-500"}
            border={"border-gray-500"}
            isSelected={currentProjectType === "rust"}
          >
            Rust
          </Button>
        </div>
      </div>
      <div
        className={
          "grid md:grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3 md:gap-4 mt-4"
        }
      >
        {projects
          .filter((projectType) => projectType.type === currentProjectType)
          .map((projectType) =>
            projectType.data.map((project, pid) => (
              <div className={"p-1 sm:p-2"} key={pid}>
                <Card
                  dp={project.img}
                  link={project.link}
                  title={project.name}
                  about={project.about}
                />
              </div>
            ))
          )}
      </div>
    </div>
  );
};
