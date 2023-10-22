import {yellowhatproDP} from "../assets"
import {Button} from "../components/Button.jsx";
export const About = () => (
<>
    <div className={"bg-yellow-400 p-8"}>
        <div className={"flex sm:flex-col md-flex-row lg:flex-row "}>
           <div className={"flex flex-col"}>
               <div>
                   <text className={"font-black text-8xl"}>GOD KNOWS WHAT <br/>STACK DEVELOPER</text>
               </div>
               <div className={"flex sm:flex-col md:flex-row child:m-2"}>

                   <Button>
                       🤖 Android Developer
                   </Button>

                   <Button>
                       🌐 Web Developer
                   </Button>
                   <Button>
                       <text className={"text-blue-500"}>󰣇</text>Linux User
                   </Button>
               </div>
           </div>
            <div className={"flex flex-col"}>
               <h1 className={"text-8xl p-8"}>(≧∇≦)/</h1>
                <h1 className={"text-lg font-light"}>Hello everyone, I am Ashutosh Aswal, aka yellowhatpro.
                    A final year BTech student from PEC, Chandigarh, graduating in 2024.
                    <br/> Experienced android developer, well versed with web technologies.
                    I am interested in open source, computer science fundamentals, including Data Structures, Computer Networks, Operating Systems, Computer Architecture and
                    love exploring new tech fields, programming languages, and frameworks.

                </h1>
            </div>
        </div>
    </div>
    <div className={"bg-yellow-400 "}>
        <div className={"flex justify-center items-center px-4 pt-4"}>
            <img className={"h-[560px] rounded-t-[40px]"} src={yellowhatproDP} alt={"yellowhatpro"}/>
        </div>
    </div>
    <div className={"flex text-4xl bg-black text-yellow-300 p-8 font-bold justify-center items-center"}>
        YELLOWHATPRO ✨ OPEN FOR COLLABORATION
    </div>
</>
)