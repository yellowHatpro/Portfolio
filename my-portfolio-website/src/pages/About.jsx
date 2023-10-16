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
                       <text className={"text-blue-500"}>󰣇  </text>Linux User
                   </Button>
               </div>
           </div>
            <div>
                <text>People ask me what can you create, I just say nothing and move on.</text>
            </div>
        </div>
    </div>
    <div className={"bg-yellow-400 "}>
        <div className={"flex justify-center items-center px-4 pt-4"}>
            <img className={"h-[560px] rounded-t-[40px]"} src={yellowhatproDP} alt={"yellowhatpro"}/>
        </div>
    </div>
</>
)