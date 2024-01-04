import { Suspense, useState } from "react";
import { projects } from "../data/index.js";
import { Button } from "../components/Button.jsx";
import { Card } from "../components/Card.jsx";
import { FiLoader } from "react-icons/fi";

export const Projects = () => {
  let [currentProjectType, setCurrentProjectType] = useState("frontend");
  const handleSetCurrentProject = (newProjectType) => {
    setCurrentProjectType(newProjectType);
  };
  return (
    <div id={"projects"} className={"p-8"}>
      <div className={"flex flex-row sm:flex-col md:flex-row justify-evenly"}>
        <div className={"flex flex-row text-7xl font-black text-neutral-300"}>
          BEST PROJECTS <h1>.</h1>
        </div>
        <div className={"text-neutral-600"}>
          Creative fuels design, design fuels creativity, be here for more, are
          you in love with a creative?
        </div>
      </div>
      <div>
        <div
          className={
            "flex flex-row child:m-4 child:border-2 child:rounded-3xl child:p-0.5 child:border-gray-500 text-gray-500 child:text-sm child-hover:text-white child-hover:border-white"
          }
        >
          <Button onClick={() => handleSetCurrentProject("frontend")}>
            Frontend
          </Button>
          <Button onClick={() => handleSetCurrentProject("backend")}>
            Backend
          </Button>
          <Button onClick={() => handleSetCurrentProject("blockchain")}>
            Blockchain
          </Button>
          <Button onClick={() => handleSetCurrentProject("android")}>
            Android
          </Button>
        </div>
      </div>
      <div className={"grid md:grid-cols-2 sm:grid-cols-1"}>
        {projects
          .filter((projectType) => projectType.type === currentProjectType)
          .map((projectType) =>
            projectType.data.map((project, pid) => (
              <div className={"p-2"} key={pid}>
                <Suspense
                  fallback={<FiLoader className={"indefinite-rotate"} />}
                >
                  <Card
                    dp={project.img}
                    link={project.link}
                    title={project.name}
                  />
                </Suspense>
              </div>
            )),
          )}
      </div>
    </div>
  );
};
