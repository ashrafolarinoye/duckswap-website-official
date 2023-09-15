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
    </section>
  );

  
};

export default HowToBuyCard;