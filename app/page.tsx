import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Search  from "@/components/search";
import CarouselContainer from "@/components/carousel";
import { getAllPosts } from "@/lib/api";

export default async function Home() {


  const allPosts  = getAllPosts([
    'heading',
    'title',
    'date',
    'slug',
    'image',
    'trending',
  ]);

  const trendingPosts = allPosts.filter(post => post.trending);

  return (
    <>
      <div
      className="z-10 w-full  px-5 xl:px-0"
      style={{
      backgroundImage: "url('/gor.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "400px"
    }}>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem] text-white"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Explore Uganda</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl text-white"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Search deals on resorts, hotels, and much more...
          </Balancer>
        </p>
        <Search locations={allPosts}  />
      </div>
        <CarouselContainer heading="Trending Destinations" subHeading="Travelers searching for Uganda also booked these" allPosts={trendingPosts}  />
        <CarouselContainer heading="Explore Uganda" subHeading="These popular destinations have a lot to offer" allPosts={allPosts} />
    </>
  );
}

