import Image from "next/image";
import React from "react";
import howtobuy from "@/assets/imgs/duckcoin.png";

const HowToBuy = () => {
  return (
    <div className="lg:mt-8 px-2 md:px-6 md:py-4 lg:px-32 lg:py-6">
      <section 
        className=""
        id="howtobuy"
      >
        {/* Top */}
        <div className="how-to-buy-header mt-8  lg:mt-16 flex-1 ">
            <Image
                className="htbimg"
                src={howtobuy}
                width="150"
                height="182"
                alt="howtobuy"
            />
            <h1 className="scroll-m-20 text-4xl  font-extrabold text-white tracking-tight lg:text-5xl">
                HOW TO BUY{" "}
                <span className="span-text">
                     DUCKCOIN{" "}
                </span>
          </h1>
          <Image
                className="htbimg-two"
                src={howtobuy}
                width="150"
                height="182"
                alt="howtobuy"
            />
        </div>
      </section>
    </div>

  );
};

export default HowToBuy;