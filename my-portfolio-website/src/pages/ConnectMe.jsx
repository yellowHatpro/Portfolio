import {Button} from "../components/Button.jsx";

export const ConnectMe = () => (
    <div className={"flex flex-col items-center justify-center text-center bg-yellow-400 rounded-b-[40px] m-8 p-24"}>
        <div className={"text-6xl font-bold "}>
            LETS CONNECT
        </div>
       <div className={"flex flex-row justify-center items-center child:m-2"}>
           <Button>
               LINKTREE
           </Button>
           <Button>
               EMAIL
           </Button>
       </div>
    </div>
)