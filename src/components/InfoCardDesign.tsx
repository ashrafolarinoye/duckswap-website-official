import React from "react";

const InfoCardDesign = (props: {
  id: number;
  title: string;
  desc: string;
}) => {
  return (
    <div className="info-card-design">
      <p className="infocard-header">
        {props.title}
      </p>
      <p className="infocard-tagline">{props.desc}</p>
    </div>
  );
};

export default InfoCardDesign;
