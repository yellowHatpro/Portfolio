import {BiSolidUpArrow} from "react-icons/bi";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.scrollY > 300 ? setShowButton(true) : setShowButton(false)
        }
        window.addEventListener('scroll', handleScrollButtonVisibility)
        return () => window.removeEventListener('scroll', handleScrollButtonVisibility)
    }, []);

    const handleScrollToSection = (section) => window.scrollTo({
        behavior: "smooth",
        top:document.getElementById(section).getBoundingClientRect().top -
            document.body.getBoundingClientRect().top
    })

   return (<>
        <div className={"bg-yellow-400 flex flex-row justify-between py-4 px-8 "}>
            <h1 className={"font-extralight text-2xl"}>yellowhatpro</h1>
            <div className={"child:px-4 flex flex-row child-hover:underline child-hover:animate-bounce"}>
                <div
                    onClick={()=>handleScrollToSection("projects")}
                    ><h1>PROJECTS</h1></div>
                <div
                    onClick={()=>handleScrollToSection("education")}><h1>EDUCATION</h1></div>
                <div
                onClick={()=>handleScrollToSection("connect")}><h1>LET&apos;S CONNECT</h1></div>
            </div>
        </div>
        {children}
       {showButton && <button
           onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}
           className={"sticky float-right bg-yellow-50 bottom-0 p-2"}><BiSolidUpArrow/></button>}    </>)
}
export default Layout
