import Image from "next/image";
import React from "react";
import HeroImg from "@/assets/imgs/HeroImg.png";

const Hero = () => {
  return (
    <div className="lg:mt-8 px-2 md:px-6 md:py-4 lg:px-32 lg:py-6">
      <section className="">
        {/* Top */}
          <div className="mt-8 lg:mt-16 flex-1">
            <h2 className="herotxt text-3xl lg:text-4xl text-center uppercase py-6 eading-normal font-bold">
            a great  {" "}
            <span className="span-text">
             BLOCKCHAIN ECOSYSTEM{" "}
            </span>{" "} building <br /> web3 infrastructures and solutions
            </h2>
          </div>
       <div className="mt-8 lg:mt-16 flex-1">
          {/*<h1 className="scroll-m-20 text-4xl font-extrabold text-white tracking-tight lg:text-5xl">
                A GREAT {" "}
            <span className="span-text">
           BLOCKCHAIN ECOSYSTEM{" "}
            </span>{" "}
                BUILDING WEB3 INFRASTRUCTURES AND SOLUTIONS
          </h1>*/} 
          <p className="leading-7 tagline-text [&:not(:first-child)]:mt-6">
          We are making it easier for everyone  to access web3 products, and solve real-life problems 
          with Blockchain technology by integrating institutions, people, groups, and businesses into 
          the blockchain economy.
          </p>
          <div className="mt-8 flex flex-col md:flex-row lg:flex-row  md:space-x-4 lg:space-x-8 items-center justify-center">
            <a
              className="button flex px-2 mb-2 h-16 text-xl w-full text-white md:w-40 lg:w-40 justify-center items-center cursor-pointer"
              href={"/"}
            >
              Buy now
              <div className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                  <path d="M6.33322 0.60395C6.23056 0.222482 5.83728 -0.00458203 5.45559 0.0972505L0.569986 1.40071C0.188298 1.50254 -0.0382774 1.89498 0.0643772 2.27644C0.167032 2.65791 0.560318 2.88498 0.942006 2.78314L4.16151 1.92256L0.737216 7.85362C0.53966 8.19579 0.657097 8.63219 1.00001 8.83018C1.34293 9.02816 1.77958 8.91166 1.97713 8.56948L5.40143 2.63843L6.26701 5.85496C6.36967 6.23643 6.76295 6.46349 7.14464 6.36166C7.52633 6.25983 7.75291 5.86739 7.65025 5.48592L6.33627 0.603135L6.33322 0.60395Z" fill="white"/>
                </svg>
              </div>
            </a>
            <a
              className="button flex px-2 mb-2 h-16 text-xl text-white lg:w-40 rounded-full justify-center items-center cursor-pointer"
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
                className="mt-11"
                src={HeroImg}
                width="323"
                height="461"
                alt="HeroImg"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="hero-img-text ">
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
