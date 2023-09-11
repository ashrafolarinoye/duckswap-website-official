import Image from "next/image";
import React from "react";
import HeroImg from "@/assets/imgs/HeroImg.png";

const Hero = () => {
  return (
    <div className="lg:mt-8 ">
      <section className="">
        {/* Top */}
        <div className=" mt-8  lg:mt-16 flex-1 ">
          <h1 className="scroll-m-20 text-4xl  font-extrabold text-white tracking-tight lg:text-5xl">
                A GREAT {" "}
            <span className="span-text">
           BLOCKCHAIN ECOSYSTEM{" "}
            </span>{" "}
                BUILDING WEB3 INFRASTRUCTURES AND SOLUTIONS
          </h1>
          <p className="leading-7 tagline-text [&:not(:first-child)]:mt-6">
          We are making it easier for everyone  to access web3 products, and solve real-life problems 
          with Blockchain technology by integrating institutions, people, groups, and businesses into 
          the blockchain economy.
          </p>
          <div className="mt-8 flex flex-col   md:flex-row lg:flex-row  md:space-x-4 lg:space-x-8 items-center justify-center bottom">
            <a
              className="button flex px-2 mb-2 h-16 text-xl font-bold w-full text-white md:w-40 lg:w-40 justify-center items-center cursor-pointer"
              href={"/"}
            >
              Buy now
            </a>
            <a
              className="button flex px-2 h-16 text-xl font-bold text-white lg:w-40 rounded-full justify-center items-center cursor-pointer"
              href={"/"}
            >
              Chart
            </a>
          </div>
        </div>
        {/* Bottom */}
        <div className="relative">
          <div className="flex flex-1 items-center justify-center">
            <div className="flex">
              <Image
                className="rounded-xl"
                src={HeroImg}
                width="269"
                height="318"
                alt="HeroImg"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="hero-img-text">
          Duckcoin embodies the friendly, curious, <br />
          and intelligent nature of Duckies, fostering a <br />
          vibrant DeFi ecosystem
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
