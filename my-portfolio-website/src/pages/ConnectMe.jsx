import { Button } from "../components";
import { AiFillGithub, AiFillLinkedin, AiOutlineX } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export const ConnectMe = () => (
  <div
    id={"connect"}
    className={
      "flex flex-col items-center justify-center text-center bg-[#fbf1c7] rounded-b-[40px] mx-2 sm:mx-4 md:mx-8 p-6 sm:p-12 md:p-16 lg:p-24 max-w-full overflow-x-hidden"
    }
  >
    <div
      className={"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"}
    >
      LETS CONNECT
    </div>
    <div
      className={
        "flex flex-row child:text-2xl sm:child:text-3xl md:child:text-4xl child:m-2 sm:child:m-3 md:child:m-4 mb-4 sm:mb-6"
      }
    >
      <a target={"_blank"} href={"https://x.com/yellowhatpro"} rel="noreferrer">
        {" "}
        <AiOutlineX className="hover:scale-110 transition-transform" />
      </a>
      <a
        target={"_blank"}
        href={"https://www.linkedin.com/in/ashutoshaswal/"}
        rel="noreferrer"
      >
        {" "}
        <AiFillLinkedin className="hover:scale-110 transition-transform" />
      </a>
      <a
        target={"_blank"}
        href={"https://discord.com/users/787332879054536704"}
        rel="noreferrer"
      >
        {" "}
        <BsDiscord className="hover:scale-110 transition-transform" />
      </a>
      <a
        target={"_blank"}
        href={"https://github.com/yellowHatpro"}
        rel="noreferrer"
      >
        <AiFillGithub className="hover:scale-110 transition-transform" />
      </a>
    </div>
    <div
      className={
        "flex flex-row flex-wrap justify-center items-center child:m-2 gap-2 sm:gap-3"
      }
    >
      <a
        target={"_blank"}
        href={"https://linktr.ee/yellowhatpro"}
        rel="noreferrer"
      >
        <Button>LINKTREE</Button>
      </a>
      <a
        target={"_blank"}
        href={"mailto:yellowhatpro3119@gmail.com"}
        rel="noreferrer"
      >
        <Button>EMAIL</Button>
      </a>
    </div>
  </div>
);
