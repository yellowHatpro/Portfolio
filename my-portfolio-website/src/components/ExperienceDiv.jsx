import {TfiArrowTopRight} from "react-icons/tfi";

const ExperienceDiv = ({children}) => (
<div className={"px-2 group flex child:px-4 child:py-8 flex-row items-center align-middle justify-between text-neutral-500 child-hover:text-neutral-300 font-bold hover:bg-neutral-800"}>
    <div >{children}</div>
    <div className={" max-h-0 group-hover:bg-yellow-300 group-hover:text-black flex flex-row justify-center items-center "}><TfiArrowTopRight/></div>
</div>
);

export default ExperienceDiv;