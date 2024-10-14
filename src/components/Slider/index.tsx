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
    <div className="carousel w-full h-[220px]">
      <div className="carousel-item relative w-full">
        <img src={slides[currentIndex].src} className="w-full object-cover" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 items-center transform justify-between">
          <a onClick={goToPrevSlide}>
            <LeftIcon />
          </a>
          <span className="text-[24px] text-white [filter:drop-shadow(0_0_10px_#000000BF)]">Welcome to ICD VIETNAM</span>
          <a onClick={goToNextSlide}>
            <RightIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderThumbnail;
