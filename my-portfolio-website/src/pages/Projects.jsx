import {useState} from "react";
import {projects} from "../data/index.js";
import {Button} from "../components/Button.jsx";

export const Projects = () => {
    let [currentProjectType, setCurrentProjectType] = useState("frontend");
    const handleSetCurrentProject = (newProjectType) => {
        setCurrentProjectType(newProjectType)
    }
    return (<div className={"p-8"}>
        <div className={"flex flex-row sm:flex-col md:flex-row"}>
            <div className={"text-neutral-400 font-bold text-6xl"}>
                BEST PROJECTS.
            </div>
            <div className={"text-neutral-600"}>
                Creative fuels design, design fuels creativity, be here for more, are you in love with a creative?
            </div>
        </div>
        <div>
            <div
                className={"flex flex-row child:m-4 child:border-2 child:rounded-3xl child:p-0.5 child:border-gray-500 text-gray-500 child:text-sm child-hover:text-white child-hover:border-white"}>
                <Button onClick={()=>(handleSetCurrentProject("frontend"))}>
                    Frontend
                </Button >
                <Button onClick={()=>(handleSetCurrentProject("backend"))}>
                    Backend
                </Button>
                <Button onClick={()=>(handleSetCurrentProject("blockchain"))}>
                    Blockchain
                </Button>
                <Button onClick={()=>(handleSetCurrentProject("android"))}>
                    Android
                </Button>
            </div>
        </div>
        <div>
            {
                projects.filter((projectType)=>projectType.type===currentProjectType).map((projectType,_)=> (
                    projectType.data.map((project,pid)=> (
                        <div
                            className={"text-white"}
                            key={pid}>
                            {project.name}
                        </div>
                    ))
                ))
            }
        </div>
    </div>)
}