import { useState } from "react";
import { projects } from "../data";
import { Button } from "../components";
import { Card } from "../components";

export const Projects = () => {
    let [currentProjectType, setCurrentProjectType] = useState("web");

    return (
        <div id={"projects"} className={"p-8"}>
            <div className={"flex flex-row sm:flex-col md:flex-row justify-evenly"}>
                <div className={"flex flex-row text-7xl font-black text-neutral-300"}>
                    BEST PROJECTS.
                </div>
                <div className={"text-neutral-400 font-light m-4 text-justify text-lg"}>
                    {"Experienced in building different apps of different kinds. Worked on multiple personal and open source projects, enjoying my time building stuff.\n" +
                        "Here are \"some\" of my personal and open source projects I have worked on. Do visit my github profile for more 😋."}
                </div>
            </div>
            <div>
                <div
                    className={
                        "flex flex-row child:m-4 child:border-2 child:rounded-3xl child:p-0.5 text-gray-500 child:text-sm child-hover:text-white child-hover:border-white"
                    }
                >
                    <Button
                        onClick={() => setCurrentProjectType("web")}
                        text={"text-gray-500"}
                        border={"border-gray-500"}
                        isSelected={currentProjectType === "web"}>
                        Web
                    </Button>
                    <Button
                        onClick={() => setCurrentProjectType("blockchain")}
                        text={"text-gray-500"}
                        border={"border-gray-500"}
                        isSelected={currentProjectType==="blockchain"}>
                        Blockchain
                    </Button>
                    <Button
                        onClick={() => setCurrentProjectType("android")}
                        text={"text-gray-500"}
                        border={"border-gray-500"}
                        isSelected={currentProjectType==="android"}>
                        Android
                    </Button>
                    <Button
                        onClick={() => setCurrentProjectType("rust")}
                        text={"text-gray-500"}
                        border={"border-gray-500"}
                        isSelected={currentProjectType==="rust"}>
                        Rust
                    </Button>
                </div>
            </div>
            <div className={"grid md:grid-cols-2 sm:grid-cols-1"}>
                {projects
                    .filter((projectType) => projectType.type === currentProjectType)
                    .map((projectType) =>
                        projectType.data.map((project, pid) => (
                            <div className={"p-2"} key={pid}>
                                    <Card
                                        dp={project.img}
                                        link={project.link}
                                        title={project.name}
                                    />
                            </div>
                        )),
                    )}
            </div>
        </div>
    );
};
