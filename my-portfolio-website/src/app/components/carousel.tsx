'use client';

import { useState } from "react";
import gsoc_img from '../../../public/gsoc.png';
import atomei_img from '../../../public/atomei.jpg';
import fossoverflow_img from '../../../public/fossoverflow.png';

const carouselItems = [
  {
    title: "Google Summer of Code'22 @MetaBrainz",
    color: "bg-orange-200",
    body: "Contributed to MusicBrainz android app. Added BrainzPlayer, a local music playback feature into the app.",
    imgsrc: gsoc_img
  },
  {
    title: "Android Developer Intern @Atom EI",
    color: "bg-gray-300",
    body: "Worked on Atom android app, which is a beautiful app to develop a habit of meditation and mindfulness.",
    imgsrc: atomei_img
  },
  {
    title: "Mentee @Foss Overflow",
    color: "bg-blue-300",
    body: 'Got selected for the project "Sampoorna", a women priority app in Foss Overflow 2021',
    imgsrc: fossoverflow_img
  }
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex) % carouselItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1);
  };

  return (
    <div className="">
      <div className="flex">
        {carouselItems.map((item, index) => {
          return (<div
            key={index}
            className={`${index === currentIndex ? "block" : "hidden"
              } absolute top-0 left-0 w-full h-full transition-opacity duration-300`}
          >
            <div className={"h-full"}>
              {item.title}
            </div>

          </div>
          )
        })}
      </div>
      {/* Clickable overlays in the corners */}
      <div
        className="flex top-0 left-0 w-1/4 h-1/4 cursor-pointer"
        onClick={prevItem}
      >
        1
      </div>
      <div
        className="absolute top-0 right-0 w-1/4 h-1/4 cursor-pointer"
        onClick={nextItem}
      >
        2
      </div>
      <div
        className="absolute bottom-0 left-0 w-1/4 h-1/4 cursor-pointer"
        onClick={prevItem}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-1/4 h-1/4 cursor-pointer"
        onClick={nextItem}
      ></div>
    </div>
  );
}

export default Carousel;
