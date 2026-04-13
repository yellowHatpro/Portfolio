import { chasma, yellowhatproDP } from "../assets";
import { Button } from "../components";
import { useEffect, useState, useRef } from "react";

export const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shouldShowAnimation, setShouldShowAnimation] = useState(true);
  /** pending: loading; loaded: show portrait + chasma; failed: hide both */
  const [profileImageStatus, setProfileImageStatus] = useState("pending");
  const [specAnchors, setSpecAnchors] = useState(null);
  const aboutRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const clampProgress = (value) => Math.max(0, Math.min(1, value));

    const handleScroll = () => {
      if (!imageRef.current) return;

      const imageRect = imageRef.current.getBoundingClientRect();
      const imageTop = imageRect.top;
      const imageBottom = imageRect.bottom;

      // Only animate when the image is at least partially visible
      if (imageBottom < 0 || imageTop > window.innerHeight) {
        setShouldShowAnimation(false);
        return;
      }

      // Keep specs on eyes when image is in hero position, then move to pocket while scrolling down.
      const startY = window.innerHeight * 0.45;
      const endY = window.innerHeight * 0.05;
      const progress = clampProgress((startY - imageTop) / (startY - endY));

      setScrollProgress(progress);
      setShouldShowAnimation(true);
    };

    const updateAnchors = () => {
      if (!imageRef.current || !imageWrapperRef.current) return;

      const imageRect = imageRef.current.getBoundingClientRect();
      const wrapperRect = imageWrapperRef.current.getBoundingClientRect();

      const imageOffsetX = imageRect.left - wrapperRect.left;
      const imageOffsetY = imageRect.top - wrapperRect.top;

      // Anchor points are ratios of the profile image, making placement responsive.
      const eyes = {
        x: imageOffsetX + imageRect.width * 0.71,
        y: imageOffsetY + imageRect.height * 0.31,
      };
      const pocket = {
        x: imageOffsetX + imageRect.width * 0.62,
        y: imageOffsetY + imageRect.height * 0.72,
      };

      setSpecAnchors({ eyes, pocket });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateAnchors);
    handleScroll();
    updateAnchors();

    const resizeObserver = new ResizeObserver(() => {
      updateAnchors();
      handleScroll();
    });

    if (imageRef.current) {
      resizeObserver.observe(imageRef.current);
    }

    const onImageLoad = () => {
      const img = imageRef.current;
      if (!img || img.naturalWidth === 0) return;
      setProfileImageStatus("loaded");
      updateAnchors();
      handleScroll();
    };

    const currentImage = imageRef.current;
    currentImage?.addEventListener("load", onImageLoad);

    if (currentImage?.complete && currentImage.naturalWidth > 0) {
      onImageLoad();
    }

    // Initial calculation
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateAnchors);
      currentImage?.removeEventListener("load", onImageLoad);
      resizeObserver.disconnect();
    };
  }, []);

  const getSpecsStyle = () => {
    if (!specAnchors) {
      return { opacity: 0 };
    }

    const eyesRotation = 20;
    const pocketRotation = 92;

    const currentRotation =
      eyesRotation + (pocketRotation - eyesRotation) * scrollProgress;
    const currentLeft =
      specAnchors.eyes.x + (specAnchors.pocket.x - specAnchors.eyes.x) * scrollProgress;
    const currentTop =
      specAnchors.eyes.y + (specAnchors.pocket.y - specAnchors.eyes.y) * scrollProgress;

    return {
      left: `${currentLeft}px`,
      top: `${currentTop}px`,
      transform: `translate(-50%, -50%) rotate(${currentRotation}deg)`,
      transition: "left 0.2s ease-out, top 0.2s ease-out, transform 0.2s ease-out",
    };
  };

  return (
    <div ref={aboutRef} className="max-w-full overflow-x-hidden">
      <div className={"bg-[#fbf1c7] p-4 sm:p-6 md:p-8"}>
        <div
          className={
            "flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center"
          }
        >
          <div
            className={
              "flex flex-col max-w-full text-center md:text-center lg:text-left"
            }
          >
            <div>
              <h1
                className={
                  "font-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-wrap"
                }
              >
                GOD KNOWS WHAT <br />
                STACK DEVELOPER
              </h1>
            </div>
            <div
              className={
                "flex flex-col sm:flex-col md:flex-col lg:flex-row w-full items-center justify-center gap-4"
              }
            >
              <Button>🌐 Full Stack Developer</Button>
              <Button>🤖 Android Lunatic</Button>
              <Button>🐧 Open Source Fanboi</Button>
            </div>
          </div>
          <div className={"flex flex-col p-2 items-center"}>
            <h1
              className={
                "text-4xl sm:text-6xl md:text-7xl lg:text-8xl p-4 sm:p-6 md:p-8"
              }
            >
              (≧∇≦)/
            </h1>
            <h1
              className={
                "text-base sm:text-lg font-light text-justify p-2 sm:p-4"
              }
            >
              Hello everyone, I am Ashutosh Aswal, aka yellowhatpro.
              <br /> Experienced Backend Developer, well versed with frontend
              and android technologies. I take great interest in open source
              projects, anime, computer science fundamentals, including Data
              Structures, Computer Networks, Operating Systems, Computer
              Architecture etc. In my free time, I spend time ricing my arch
              configs, or flashing custom ROMs on my smartphone and modding it.
              I love exploring new tech fields, programming languages, and
              frameworks.
              <br />
              <div className={"font-bold"}>DTC (Down To Code),</div>
              probably coding while you are reading this.
            </h1>
          </div>
        </div>
      </div>
      <div className={"bg-[#fbf1c7] relative"}>
        <div
          ref={imageWrapperRef}
          className="relative flex justify-center items-center px-4 pt-4"
        >
          {profileImageStatus !== "failed" && (
            <img
              ref={imageRef}
              className={`h-auto max-h-[560px] w-auto max-w-full rounded-t-[40px] transition-opacity duration-200 ${
                profileImageStatus === "loaded" ? "opacity-100" : "opacity-0"
              }`}
              src={yellowhatproDP}
              alt={"yellowhatpro"}
              decoding="async"
              onError={() => setProfileImageStatus("failed")}
            />
          )}

          {shouldShowAnimation &&
            specAnchors &&
            profileImageStatus === "loaded" && (
            <div
              style={getSpecsStyle()}
              className={"absolute z-10 pointer-events-none"}
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
          "flex text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-black text-[#f2e5bc] p-4 sm:p-6 md:p-8 font-bold justify-center items-center text-center"
        }
      >
        YELLOWHATPRO ✨ OPEN FOR COLLABORATION
      </div>
    </div>
  );
};
