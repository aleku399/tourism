"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import Balancer from "react-wrap-balancer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { RightArrow, LeftArrow } from "@/components/shared/icons";
import Post from "../../interfaces/post";

import "./styles.css";
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

interface ImageContainer {
    heading: string;
    subHeading: string;
    allPosts: any[];
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
      className: "slider variable-width",
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4, 
      slidesToScroll: 3,
      initialSlide: 0,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };



    const renderArrows = () => {
        return (
          <div className="absolute top-11 z-10 flex justify-between  w-full">
            <SamplePrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <SampleNextArrow  onClick={() => sliderRef.current?.slickNext()} />
          </div>
        );
    };

  return (
    <div className="mt-3.5 px-7 py-4 w-full max-w-screen-xl animate-fade-up">
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
            {
              props.allPosts.map(post => (
                <div key={post.slug} className="space-x-2">
                  <Link
                    as={`/posts/${post.slug}`}
                    href="/posts/[slug]"
                  >
                      <Image src={post.image} alt="lake" width={200} height={200}  className="rounded-md" />
                      <p>{post.heading}</p>
                  </Link>
                </div>
              ))
            }
        </Slider>
      </div>
    </div>
  );
}

export default ImageContainer;

