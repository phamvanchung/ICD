import { Slide_1, Slide_2, Slide_3 } from "../../assets";
import { LeftIcon } from "../../assets/icons/Left";
import { RightIcon } from "../../assets/icons/Right";
import { useState } from "react";

const SliderThumbnail = () => {
  const slides = [
    { id: "slide1", src: Slide_1 },
    { id: "slide2", src: Slide_2 },
    { id: "slide3", src: Slide_3 },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel w-full h-[60vw] lg:h-[30vw]">
      <div className="carousel-item relative w-full">
        <img src={slides[currentIndex].src} className="w-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 items-center transform justify-between">
          <LeftIcon
            onClick={goToPrevSlide}
            className="w-[5vw] h-[5vw] lg:w-[3vw] lg:h-[3vw] cursor-pointer"
          />
          <span className="text-[5.6vw] lg:text-[4vw] font-medium text-white [filter:drop-shadow(0_0_10px_#000000BF)]">
            Welcome to ICD VIETNAM
          </span>
          <RightIcon
            onClick={goToNextSlide}
            className="w-[5vw] h-[5vw] lg:w-[3vw] lg:h-[3vw] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderThumbnail;
