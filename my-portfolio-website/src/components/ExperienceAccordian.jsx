import { TfiArrowDown, TfiArrowTopRight } from "react-icons/tfi";
import { useState } from "react";
import { experienceContent } from "../data/index.js";

const ExperienceAccordian = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      {experienceContent.map((item, i) => (
        <div key={item.title}>
          <div
            onClick={() => setOpenIndex(i)}
            className="cursor-pointer px-2 group flex child:px-4 child:py-8 flex-row items-center align-middle justify-between text-neutral-500 child-hover:text-neutral-300 font-bold hover:bg-neutral-800"
          >
            <div>{item.title}</div>
            <div
              className={
                "max-h-0 group-hover:bg-yellow-300 transition-all duration-500 group-hover:text-black flex flex-row justify-center items-center "
              }
            >
              {openIndex === i ? (
                <a target={"_blank"} href={item.link} rel="noreferrer">
                  <TfiArrowTopRight className={"transition-all duration-200"} />
                </a>
              ) : (
                <TfiArrowDown className={"transition-all duration-200"} />
              )}
            </div>
          </div>
          <div
            className={`font-extralight transition-all overflow-hidden duration-500 px-8 mb-2 text-justify text-gray-200 text-lg ${
              openIndex === i ? "max-h-screen" : "max-h-0"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceAccordian;
