import Image from "next/image";
import React from "react";
import Duck from "@/assets/imgs/duck.png";

const InfoSec = () => {
  return (
      <section className="infosec flex flex-col items-center lg:justify-between lg:flex-row gap-y-10 py-6 px-6 ">
        {/* Left Side */}
        <div className=" mt-8 lg:mt-16 flex-1 ">
          <h1 className="scroll-m-20 text-4xl  font-extrabold text-white tracking-tight lg:text-3xl">
           SAY HELLO TO{" "}
            <span className="span-text">
              DUCKCOIN -  {" "}
            </span>{" "}
            THE PREMIER MEME <br /> BASED COIN FOR ALL YOUR PAYMENT <br /> NEEDS!
          </h1>
          <p className="infosec-tagline leading-7 [&:not(:first-child)]:mt-6">
            Join the Duckies worldwide in embracing the people's cryptocurrency, Duckcoin! As a decentralized, 
            open-source peer-to-peer digital currency, Duckcoin embodies the friendly, curious, and intelligent 
            nature of Duckies, creating a vibrant DeFi community.
          </p>
        </div>
        {/* Right Side */}
        <div className="relative">
          <div className="lg:w-[336px] flex flex-1 items-center justify-center">
            <div className="flex">
              <Image
                src={Duck}
                width="336"
                height="352"
                alt="duckimg"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default InfoSec;
