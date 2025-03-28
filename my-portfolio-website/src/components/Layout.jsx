import { BiSolidUpArrow } from "react-icons/bi";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () =>
      window.removeEventListener("scroll", handleScrollButtonVisibility);
  }, []);

  const handleScrollToSection = (section) =>
    window.scrollTo({
      behavior: "smooth",
      top:
        document.getElementById(section).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top,
    });

  return (
    <div className="max-w-full overflow-x-hidden">
      <div
        className={
          "bg-[#fbf1c7] flex flex-col sm:flex-col md:flex-row w-full justify-between py-4 px-4 sm:px-6 md:px-8 sm:items-center mx-auto"
        }
      >
        <h1 className={"font-extralight text-2xl mb-2 md:mb-0"}>
          yellowhatpro
        </h1>
        <div
          className={
            "child:px-2 md:child:px-4 flex flex-row sm:flex-row flex-wrap justify-center md:flex-row child-hover:underline child-hover:animate-bounce"
          }
        >
          <div>
            <a
              href="https://hashnode.yellowhatpro.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>BLOGS</h1>
            </a>
          </div>
          <div onClick={() => handleScrollToSection("projects")}>
            <h1>PROJECTS</h1>
          </div>
          <div onClick={() => handleScrollToSection("education")}>
            <h1>EDUCATION</h1>
          </div>
          <div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <h1>RESUME</h1>
            </a>
          </div>
          <div onClick={() => handleScrollToSection("connect")}>
            <h1>CONNECT?</h1>
          </div>
        </div>
      </div>
      <div className="max-w-full">{children}</div>
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={"sticky float-right bg-[#f2e5bc] bottom-0 p-2"}
        >
          <BiSolidUpArrow />
        </button>
      )}{" "}
    </div>
  );
};
export default Layout;
