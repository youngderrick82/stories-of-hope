"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import carouselData from "./sampleData/carouselData";
import {
  Play,
  Pause,
} from "lucide-react";

export const VideoCarousel: React.FunctionComponent = () => {
  const [activeSlideContent, setActiveSlideContent] = React.useState(
    carouselData[0]
  );
  const [padding, setPadding] = React.useState({ right: '0rem' })
  const splideRef = React.useRef<Splide | null>(null);

  const updatePadding = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1280 && padding.right !== '0rem') {
      setPadding({ right: '0rem' });
    } else if (screenWidth >= 1280 && padding.right !== '5rem') {
      setPadding({ right: '5rem' });
    } 
  };

  React.useEffect(() => {
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  })

  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "1rem",
    focus: "center" as const,
    padding: padding,
  };


  React.useEffect(() => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.on("pagination:mounted", (data: { list: HTMLElement; items: { button: HTMLElement}[] }) => {
        data.list.classList.add("splide__pagination--custom");
        data.items.forEach((item) => {
          item.button.classList.add("custom-pagination-dot");
        });
      });
    }
  }, []);


  const handleSplideChange = (splide: unknown, index: number,) => {
    setActiveSlideContent(carouselData[index]);
  };

  return (
    <div className="wrapper lg:flex">
      <div className="hidden lg:block md:w-[300px] pt-96 ml-36 mr-16">
        <h2 className="text-[46px] leading-[43px] font-[700] font-roboto mb-4">{activeSlideContent.header}</h2>
        <p className="font-roboto font-[400] text-[16px] leading-[23px]">{activeSlideContent.description}</p>
        <button className="block  m-auto font-[600] mt-8 rounded-full h-[43px] w-full min-w-[300px] text-xl leading-[18px] [word-spacing:5px] font-roboto_mono text-[#262861] text-[16px] bg-[#FFC840]">
          {activeSlideContent.linkText}
          <div className="absolute">
          <img src="Group 14.png" className="relative align-center ml-4 left-72 bottom-[17px] lg:left-60 md:left-[38rem] " />
          </div>
        </button>
      </div>
      <Splide
        onMove={handleSplideChange}
        hasTrack={false}
        options={options}
        aria-labelledby="autoplay-example-heading"
        className="lg:full"
        ref={splideRef}
      >
        <div className="lg:pt-72">
          <SplideTrack className="w-full h-72 md:h-96 lg:w-full lg:h-[35rem] lg:max-w-[850px] lg:max-h-[500px]">
            {carouselData.map((slide, index) => (
              <SplideSlide className="" key={index}>
                <img
                  src={slide.image}
                  alt={slide.image || `Slide ${index + 1}`}
                  className="lg:h-[35rem] min-h-[300px] w-full"
                />
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>

        <div className="splide__progress lg:w-4/5 max-w-[850px]">
          <div className="splide__progress__bar bg-blue" />
        </div>

        <div className="splide__arrows hidden md:block ">
            <div className="lg:absolute top-80 lg:left-[-376px]">
          <button className="splide__arrow splide__arrow--prev">
            <img src="Group 13 (1).png" />
          </button>
          <button className="splide__arrow splide__arrow--next lg:left-20">
            <img src="Group 12.png" />
          </button>
          </div>
        </div>

        <button className="splide__toggle bg-[#FFC840] bg-opacity-70 absolute top-52 md:top-72 md:left-4 border-2 border-[#282861] rounded-full h-20 w-20 lg:top-[50rem] lg:left-[25rem]">
          <span className="splide__toggle__play">
            <Play
              strokeWidth={1}
              color="#282861"
              className="h-16 w-16 m-auto"
            />
          </span>
          <span className="splide__toggle__pause">
            <Pause
              strokeWidth={1}
              color="#282861"
              className="h-16 w-16 m-auto"
            />
          </span>
        </button>
      </Splide>

      <div className="lg:hidden mt-16">
        <h2 className="font-bold text-3xl text-center font-roboto">
          {activeSlideContent.header}
        </h2>
        <p className="text-center w-4/5 m-auto mt-2 font-roboto">
          {activeSlideContent.description}
        </p>
        <button className="block  m-auto font-[600] mt-8 rounded-full h-[43px] w-3/4 min-w-[300px] text-xl leading-[18px] [word-spacing:5px] font-roboto_mono text-[#262861] text-[16px] bg-[#FFC840]">
          {activeSlideContent.linkText}
          <div className="absolute">
          <img src="Group 14.png" className="relative align-center ml-4 left-[16rem] bottom-[17px] lg:left-60 md:left-[38rem] " />
          </div>
        </button>
      </div>

      
    </div>
  );
};

export default VideoCarousel;
