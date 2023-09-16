import { BuyData } from "@/Data/BuyData";
import React from "react";
import HowToBuyCardDesign from "./HowToBuyCardDesign";

const HowToBuyCard = () => {
  return (
    
    <section className="bottom mt-8 px-2 gap-29">
        <div className="card px-4 md:flex-col lg:flex-row lg:flex ">
          {BuyData.map((buyitem) => (
            <HowToBuyCardDesign
              key={buyitem.id}
              id={buyitem.id}
              title={buyitem.title}
              desc={buyitem.desc}
            />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center">
            <a
              className="mt-8 button flex px-2 h-16 text-xl text-white lg:w-40 rounded-full justify-center items-center cursor-pointer"
              href={"/"}
            >
              Buy Now
              <div className="ml-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                  <path d="M6.33322 0.60395C6.23056 0.222482 5.83728 -0.00458203 5.45559 0.0972505L0.569986 1.40071C0.188298 1.50254 -0.0382774 1.89498 0.0643772 2.27644C0.167032 2.65791 0.560318 2.88498 0.942006 2.78314L4.16151 1.92256L0.737216 7.85362C0.53966 8.19579 0.657097 8.63219 1.00001 8.83018C1.34293 9.02816 1.77958 8.91166 1.97713 8.56948L5.40143 2.63843L6.26701 5.85496C6.36967 6.23643 6.76295 6.46349 7.14464 6.36166C7.52633 6.25983 7.75291 5.86739 7.65025 5.48592L6.33627 0.603135L6.33322 0.60395Z" fill="white"/>
                </svg>
              </div>
            </a>
        </div>
    </section>
  );

  
};

export default HowToBuyCard;