import {Button} from "../components/Button.jsx";
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";
import {BsDiscord} from "react-icons/bs";

export const ConnectMe = () => (
    <div id={"connect"} className={"flex flex-col items-center justify-center text-center bg-yellow-400 rounded-b-[40px] mx-8 p-24"}>
        <div className={"text-6xl font-bold "}>
            LETS CONNECT
        </div>
        <div className={"flex flex-row child:text-4xl child:m-2"}>
            <a target={"_blank"} href={"https://twitter.com/yellowhatpro"} rel="noreferrer"> <AiFillTwitterCircle/></a>
            <a target={"_blank"} href={"https://www.linkedin.com/in/ashutoshaswal/"} rel="noreferrer"> <AiFillLinkedin/></a>
            <a target={"_blank"} href={"https://discord.com/users/787332879054536704"} rel="noreferrer">  <BsDiscord/></a>
            <a target={"_blank"} href={"https://github.com/yellowHatpro"} rel="noreferrer"><AiFillGithub/></a>
        </div>
       <div className={"flex flex-row justify-center items-center child:m-2"}>
           <a target={"_blank"} href={"https://linktr.ee/yellowhatpro"} rel="noreferrer"><Button>LINKTREE</Button></a>
           <a target={"_blank"} href={"mailto:yellowhatpro3119@gmail.com"} rel="noreferrer"><Button>EMAIL</Button></a>
       </div>
    </div>
)
