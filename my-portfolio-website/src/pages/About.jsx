import { chasma, yellowhatproDP } from "../assets";
import { Button } from "../components";
import { useEffect, useState, useRef } from "react";

export const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shouldShowAnimation, setShouldShowAnimation] = useState(true);
  const aboutRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      // Get the image's boundaries
      const imageRect = imageRef.current.getBoundingClientRect();
      const imageTop = imageRect.top;
      const imageHeight = imageRect.height;
      const imageBottom = imageTop + imageHeight;

      // Only animate when the image is at least partially visible
      if (imageBottom < 0 || imageTop > window.innerHeight) {
        setShouldShowAnimation(false);
        return;
      }

      // Calculate progress based on image position in viewport
      // 0 = image just entered viewport from bottom (glasses at pocket)
      // 1 = image is centered in viewport (glasses on eyes)
      let progress = 0;

      // Calculate the center point of the viewport
      const viewportCenter = window.innerHeight / 2;

      // Calculate how far the image center is from viewport center
      const imageCenterY = imageTop + imageHeight / 2;
      const distanceFromCenter = viewportCenter - imageCenterY;

      // Normalize to 0-1 range
      // When image center is at bottom of viewport: progress = 0
      // When image center is at center of viewport: progress = 1
      // When image center is at top of viewport: progress = 0
      progress = Math.max(
        0,
        Math.min(1, (distanceFromCenter + imageHeight / 4) / (imageHeight / 2))
      );

      setScrollProgress(progress);
      setShouldShowAnimation(true);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getSpecsStyle = () => {
    // Calculate position based on scroll progress
    // 1 = at pocket (bottom)
    // 0 = at eyes (top)

    // Get screen width for responsive positioning
    const screenWidth = window.innerWidth;

    // Define positions based on screen size
    let eyesTop, eyesLeft, pocketTop, pocketLeft;

    if (screenWidth < 720) {
      // sm and smaller
      eyesTop = "calc(30% - 2rem)";
      eyesLeft = "calc(53% + 2.5rem)";
      pocketTop = "calc(70% - 1.5rem)";
      pocketLeft = "calc(50% + 2rem)";
    } else if (screenWidth < 1000) {
      // md
      eyesTop = "calc(30% - 3rem)";
      eyesLeft = "calc(53% + 1rem)";
      pocketTop = "calc(70% - 1.75rem)";
      pocketLeft = "calc(50% + 1.1rem)";
    } else {
      // lg
      eyesTop = "calc(30% - 3rem)";
      eyesLeft = "calc(53% - 0.7rem)";
      pocketTop = "calc(70% - 2rem)";
      pocketLeft = "calc(50% + 1.25rem)";
    }

    const eyesRotation = 30; // Slight tilt at eyes
    const pocketRotation = 90; // Vertical position

    // Interpolate between eyes (30 degrees) and pocket (90 degrees) based on progress
    const currentRotation =
      eyesRotation + (pocketRotation - eyesRotation) * scrollProgress;

    //Responsive horizontal position that works on all screen sizes
    const leftPosition =
      scrollProgress === 1
        ? pocketLeft
        : scrollProgress === 0
        ? eyesLeft
        : `calc(${eyesLeft} + ${scrollProgress * 2.5}rem)`;

    return {
      transform: `rotate(${currentRotation}deg)`,
      top:
        scrollProgress === 1
          ? pocketTop
          : scrollProgress === 0
          ? eyesTop
          : `calc(${eyesTop} + ${scrollProgress * 40}%)`,
      left: leftPosition,
      transition: "all 0.2s ease-out",
    };
  };

  return (
    <div ref={aboutRef}>
      <div className={"bg-yellow-400 p-8"}>
        <div
          className={
            "flex sm:flex-col md-flex-row lg:flex-row justify-center items-center"
          }
        >
          <div className={"flex flex-col"}>
            <div>
              <h1 className={"font-black text-8xl"}>
                GOD KNOWS WHAT <br />
                STACK DEVELOPER
              </h1>
            </div>
            <div className={"flex sm:flex-col md:flex-row child:m-2"}>
              <Button>🤖 Android Developer</Button>
              <Button>🌐 Web Developer</Button>
              <Button>🐧 Open Source Fanboi</Button>
            </div>
          </div>
          <div className={"flex flex-col p-2 items-center"}>
            <h1 className={"text-8xl p-8"}>(≧∇≦)/</h1>
            <h1 className={"text-lg font-light text-justify p-4"}>
              Hello everyone, I am Ashutosh Aswal, aka yellowhatpro. A BTech CSE
              graduate from PEC, Chandigarh.
              <br /> Experienced android developer, well versed with web
              technologies. I am interested in open source, anime, computer
              science fundamentals, including Data Structures, Computer
              Networks, Operating Systems, Computer Architecture etc. I love
              ricing my arch configs and exploring new tech fields, programming
              languages, and frameworks.
              <br />
              <div className={"font-bold"}>DTC (Down To Code),</div>
              probably coding while you are reading this.
            </h1>
          </div>
        </div>
      </div>
      <div className={"bg-yellow-400 relative"}>
        <div className="relative flex justify-center items-center px-4 pt-4">
          <img
            ref={imageRef}
            className={"h-[560px] w-auto rounded-t-[40px]"}
            src={yellowhatproDP}
            alt={"yellowhatpro"}
          />

          {shouldShowAnimation && (
            <div
              style={getSpecsStyle()}
              className={"absolute z-10 transform -translate-x-1/2"}
            >
              <img
                className={
                  "sm:w-[6.25rem] sm:h-[6.25rem] md:w-[7.5rem] md:h-[7.5rem] lg:w-[8.75rem] lg:h-[8.75rem]"
                }
                src={chasma}
                alt={"chasma"}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          "flex text-4xl bg-black text-yellow-300 p-8 font-bold justify-center items-center"
        }
      >
        YELLOWHATPRO ✨ OPEN FOR COLLABORATION
      </div>
    </div>
  );
};
