"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { RightArrow, LeftArrow } from "@/components/shared/icons";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

interface ImageContainer {
    heading: string;
    subHeading: string;
}

function SampleNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <button
        className={`flex justify-center items-center select-none bg-white border-2  text-xl font-bold  rounded-full -mx-5  ${className}`}
        style={style}
        onClick={onClick}
      >
        <RightArrow className="w-8 h-8" />
      </button>
    );
  }
  
function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <button
        className={`flex justify-center items-center select-none bg-white border-2  text-xl font-bold  rounded-full -mx-6  ${className}`}
        style={style}
        onClick={onClick}
      >
        <LeftArrow className="w-8 h-8" />
      </button>
    );
  }
  

function ImageContainer(props: ImageContainer) {
    const sliderRef = useRef<Slider | null>(null);

    const sliderSettings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, 
        slidesToScroll: 1,
    };

    const renderArrows = () => {
        return (
          <div className="absolute top-11 z-50 flex justify-between  w-full">
            <SamplePrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <SampleNextArrow  onClick={() => sliderRef.current?.slickNext()} />
          </div>
        );
    };

  return (
    <div className="z-10 px-7 py-4 w-full max-w-screen-xl animate-fade-up">
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-lg font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>{props.heading}</Balancer>
      </h1>
      <p
        className="mt-2 animate-fade-up text-gray-500 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
            {props.subHeading}
        </Balancer>
      </p>
      <div className="relative mt-5">
        {renderArrows()}
        <Slider ref={sliderRef} {...sliderSettings} className="animate-fade-up">
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200}  className="rounded-md" />
                <p>Kampala, Uganda</p>
            </div>
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200} className="rounded-md" />
                <p>Entebbe, Uganda</p>
            </div>
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200} className="rounded-md" />
                <p>Jinja, Uganda</p>
            </div>
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200} className="rounded-md" />
                <p>Kampala, Uganda</p>
            </div>
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200} className="rounded-md" />
                <p>Jinja, Uganda</p>
            </div>
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200} className="rounded-md" />
                <p>Jinja, Uganda</p>
            
            </div>
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200} className="rounded-md" />
                <p>Jinja, Uganda</p>
            </div>
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200} className="rounded-md" />
                <p>Jinja, Uganda</p>
            </div>
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200} className="rounded-md"  />
                <p>Jinja, Uganda</p>
            </div>
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200} className="rounded-md" />
                <p>Jinja, Uganda</p>
            </div>
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200} className="rounded-md" />
                <p>Jinja, Uganda</p>
            </div>
            <div>
                <Image src="/lake.jpeg" alt="lake" width={200} height={200} className="rounded-md" />
                <p>Jinja, Uganda</p>
            </div>
        </Slider>
      </div>
    </div>
  );
}

export default ImageContainer;

