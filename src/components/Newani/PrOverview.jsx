import { siteData } from "./Data";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("./CarouselPart"));

const carouselImages = [
  "/assets/home/sliderpart/slider1.jpg",
  "/assets/home/sliderpart/slider2.jpg",
  "/assets/home/sliderpart/slider3.jpg",
  "/assets/home/sliderpart/slider4.jpg",
  "/assets/home/sliderpart/slider5.jpg",
  "/assets/home/sliderpart/slider6.jpg",
];

export const GreenLine = () => {
  return (
    <>
      <div className="my-4 h-[3px] w-20 bg-yellow-500 md:my-8"></div>
    </>
  );
};

export default function PrOverview() {
  return (
    <div
      id="about-section"
      className="my-4 font-montserrat flex w-full flex-col items-center justify-center p-4 2xl:px-14 3xl:px-14"
    >
      <div className="about-content  md:flex md:flex-row lg:mb-6 lg:w-full lg:items-center lg:justify-between  ">
        <div className=" title-container">
          <span className=" font-semibold text-yellow-500">
            {siteData.about.upperText}
          </span>
          <h2 className=" py-4 font-montserrat font-bold text-2xl md:text-3xl lg:max-w-[800px] 2xl:text-5xl">
            {siteData.about.title}
          </h2>
          <div className="h-[3px] w-14 bg-yellow-500"></div>
        </div>

        <div className="description-container md:max-w-sm  2xl:my-28 2xl:max-w-xl">
          <p className="pb-2 pt-4 text-sm md:text-sm lg:text-lg md:leading-8 2xl:my-4">
            {siteData.about.description}
          </p>
          <Link
            href={"/mservices"}
            className="flex flex-row items-center gap-1 py-2 font-bold text-yellow-600 "
          >
            <IoIosArrowForward />
            <span>Our Services</span>
          </Link>
        </div>
      </div>

      <Carousel
        key={"01"}
        images={carouselImages}
        arrowsPosition="bottom-0 right-0"
        aspectRatio="aspect-video"
      ></Carousel>
    </div>
  );
}
