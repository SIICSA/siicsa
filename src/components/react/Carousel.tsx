import React, { useState, useEffect, type FC } from "react";
import axios from "axios";
import "./Carousel.css";

interface Props {
  idCarousel: number;
}

const Carousel = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { idCarousel = 1 } = props;
  useEffect(() => {
    axios
      .get(
        `https://iwxyocvgdvubcautbnxr.supabase.co/rest/v1/carousel?carousel=eq.${idCarousel}&select=id,proyectos(*)`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3eHlvY3ZnZHZ1YmNhdXRibnhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwNjEyOTQsImV4cCI6MjAxNjYzNzI5NH0.xRnt7zKc_lqOiMB1wG7JWZ_ojeqj39FNQ5BOJ8Owrpo",
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3eHlvY3ZnZHZ1YmNhdXRibnhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwNjEyOTQsImV4cCI6MjAxNjYzNzI5NH0.xRnt7zKc_lqOiMB1wG7JWZ_ojeqj39FNQ5BOJ8Owrpo",
          },
        }
      )
      .then(({ data }) => {
        setImages(data);
        setIsLoaded(true);
      });
  }, []);

  const [images, setImages] = useState<any[]>([]);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="pb-14 2xl:pb-20 px-6">
      <h2 className="text-2xl md:text-4xl font-bold text-center py-10 md:py-20 uppercase">
        Algunos de nuestros proyectos
      </h2>
      {isLoaded ? (
        <div>
          <div className="carousel-container flex justify-center gap-10 items-center w-fit">
            <button
              className="z-[99] left-[-40px] md:left-[-80px] carousel-btn"
              onClick={goToPrevious}
            >
              <img
                src="/siicsa/iamges/chevron-left.svg"
                className="md:w-[64px]"
                alt=""
              />
            </button>
            <div className="hidden md:block md:h-[250px] md:w-[250px] 2xl:h-[400px] 2xl:w-[400px]">
              <img
                src={
                  images[
                    currentIndex != 0 ? currentIndex - 1 : images.length - 1
                  ].proyectos.image_url
                }
                alt={`Slide ${currentIndex}`}
                className="grayscale object-cover h-full"
              />
            </div>
            <div className="h-[200px] w-[280px] md:h-[350px] md:w-[350px] 2xl:h-[500px] 2xl:w-[500px] flex justify-center">
              <img
                src={images[currentIndex].proyectos.image_url}
                alt={`Slide ${currentIndex}`}
                className="object-cover h-full"
              />
            </div>
            <div className="hidden md:block md:h-[250px] md:w-[250px] 2xl:h-[400px] 2xl:w-[400px]">
              <img
                src={
                  images[
                    currentIndex + 1 == images.length ? 0 : currentIndex + 1
                  ].proyectos.image_url
                }
                alt={`Slide ${currentIndex}`}
                className="grayscale object-cover h-full"
              />
            </div>
            <button
              className="z-[99] right-[-40px] md:right-[-80px] carousel-btn"
              onClick={goToNext}
            >
              <img
                src="/siicsa/iamges/chevron-right.svg"
                className="2xl:w-[64px]"
                alt=""
              />
            </button>
          </div>
          <div className="text-center 2xl:w-[500px] md:max-w-[500px] mx-auto mt-14 2xl:mt-20">
            <h2 className="text-2xl font-bold">
              {images[currentIndex].proyectos.name}
            </h2>
            <p className="text-red-600">
              {images[currentIndex].proyectos.tipo}
            </p>
            <p>{images[currentIndex].proyectos.location}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
