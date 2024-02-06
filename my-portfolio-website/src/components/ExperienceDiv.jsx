import {TfiArrowDown, TfiArrowUp} from "react-icons/tfi";
import {useState} from "react";

const ExperienceDiv = ({children, content}) => {
    const [isOpen, setIsOpen] = useState(false)
    return <div className={""}>
        <div
            className={"px-2 group flex child:px-4 child:py-8 flex-row items-center align-middle justify-between text-neutral-500 child-hover:text-neutral-300 font-bold hover:bg-neutral-800"}>
            <div>{children}</div>
            <div
                className={" max-h-0 group-hover:bg-yellow-300 group-hover:text-black flex flex-row justify-center items-center "}
                onClick={() => setIsOpen((val)=>!val)}>
                {isOpen ? <TfiArrowUp/> : <TfiArrowDown/>}</div>
        </div>
        {isOpen && <div className={"px-8 pb-4 text-justify text-gray-200 text-xl transition transform motion-reduce:transition-none motion-reduce:hover:transform-none"}>{content}</div>}
    </div>
};

export default ExperienceDiv;
