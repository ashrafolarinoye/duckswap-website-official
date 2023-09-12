import { InfoData } from "@/Data/InfoData";
import React from "react";
import InfoCardDesign from "./InfoCardDesign";

const InfoCard = () => {
  return (
    
    <section className="mt-8 px-2 gap-29">
        <h2 className="infocard-header px-2 md:px-6 md:py-4 lg:px-20 lg:py-6">
            Experience a world of entertainment and wealth by joining the Duckie's community today! Duckcoin offers incredible utilities that will
            leave you amazed:
        </h2>
        <div className="card px-4 md:flex-col lg:flex-row lg:flex ">
          {InfoData.map((infoitem) => (
            <InfoCardDesign
              key={infoitem.id}
              id={infoitem.id}
              title={infoitem.title}
              desc={infoitem.desc}
            />
          ))}
        </div>
    </section>
  );

  
};

export default InfoCard;
