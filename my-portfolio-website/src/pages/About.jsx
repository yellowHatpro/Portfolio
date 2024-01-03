import {chasma, yellowhatproDP} from "../assets";
import { Button } from "../components/Button.jsx";
import {useEffect, useState} from "react";
export const About = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [shouldShowAnimation, setShouldShowAnimation] = useState(true)

    useEffect(() => {
        console.log(window.outerWidth)
        if (scrollPosition > window.outerWidth || scrollPosition < 0) {
            setShouldShowAnimation(false)
        }
        window.addEventListener('scroll', ()=>setScrollPosition(window.scrollY*2))
        return () => {
            setShouldShowAnimation(true)
            window.removeEventListener('scroll', ()=>setScrollPosition(window.scrollY*2))
        }
    }, [scrollPosition]);
    return <>
        <div className={"bg-yellow-400 p-8"}>
            <div
                className={
                    "flex sm:flex-col md-flex-row lg:flex-row justify-center items-center"
                }
            >
                <div className={"flex flex-col"}>
                    <div>
                        <h1 className={"font-black text-8xl"}>
                            GOD KNOWS WHAT <br/>
                            STACK DEVELOPER
                        </h1>
                    </div>
                    <div className={"flex sm:flex-col md:flex-row child:m-2"}>
                        <Button>🤖 Android Developer</Button>
                        <Button>🌐 Web Developer</Button>
                        <Button>
                            🐧 Open Source Fanboi
                        </Button>
                    </div>
                </div>
                <div className={"flex flex-col p-2 items-center"}>
                    <h1 className={"text-8xl p-8"}>(≧∇≦)/</h1>
                    <h1 className={"text-lg font-light text-justify"}>
                        Hello everyone, I am Ashutosh Aswal, aka yellowhatpro. A final year
                        BTech student from PEC, Chandigarh, graduating in 2024.
                        <br/> Experienced android developer, well versed with web
                        technologies. I am interested in open source, anime, computer
                        science fundamentals, including Data Structures, Computer Networks,
                        Operating Systems, Computer Architecture etc. I love ricing my arch
                        configs and exploring new tech fields, programming languages, and
                        frameworks.
                        <br/>
                        <div className={"font-bold"}>DTC (Down To Code),</div>
                        probably coding while you are reading this.
                    </h1>
                </div>
            </div>
        </div>
        <div className={"bg-yellow-400 relative"}>
            {shouldShowAnimation && <div
                style={{transform: `translateX(${scrollPosition}px)`}}
                className={"max-w-screen-md absolute left-0 top-40 z-10 transition-transform transform translate-x-[-50%]"}>
                <img
                    className={"rotate-[20deg]"}
                    height={150}
                    width={150}
                    src={chasma}
                    alt={"chasma"}
                />
            </div>}
            {shouldShowAnimation && <div
                style={{transform: `translateX(-${scrollPosition}px)`}}
                className={"max-w-screen-md absolute right-0 top-1/2 z-20 transition-transform duration-500 transform translate-x-[-50%]"}>Hire
                me too</div>}
            <div>
                <div className={"flex justify-center items-center px-4 pt-4"}>
                    <img
                        className={"h-[560px] rounded-t-[40px]"}
                        src={yellowhatproDP}
                        alt={"yellowhatpro"}
                    />
                </div>
            </div>
        </div>
        <div
            className={
                "flex text-4xl bg-black text-yellow-300 p-8 font-bold justify-center items-center"
            }
        >
            YELLOWHATPRO ✨ OPEN FOR COLLABORATION
        </div>
    </>
};
