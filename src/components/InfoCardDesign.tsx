import React from "react";
import Link from "next/link";

const InfoCardDesign = (props: {
  id: number;
  title: string;
  desc: string;
  link?: string;
  linkTitle?:string;
}) => {
  return (
    <div className="info-card-design">
      <p className="infocard-header">
        {props.title}
      </p>
      <p className="infocard-tagline">{props.desc}</p>
      {props.link && (<Link href={props.link} target="_blank" className="text-white bg-[#FDB833] px-3 py-2 rounded-md hover:text-[#FDB833] hover:bg-white duration-500 hover:border-[#FDB833]">{props.linkTitle}</Link>)}
    </div>
  );
};

export default InfoCardDesign;