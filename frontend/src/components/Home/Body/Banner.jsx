import React from "react";
import BannerText from "./BannerText";
import image from "../../../assets/gkd.png";

import bansq from "../../../assets/shapes/bansq.svg";
import bansq2 from "../../../assets/shapes/bansq2.svg";

const Banner = () => {
  return (
    <div className="h-[640px] w-full bg-[#003459] rounded-3xl mt-10 relative overflow-clip">
      <div className="h-[635px] w-[605.03px] bg-main-t rounded-[75px] rotate-[11.41deg] top-[-300px] left-[-158px] absolute " />
      <div className="absolute">
        <BannerText />
      </div>
      <div className="h-[787.54px] w-[787.54px] bg-[#002a48] absolute rounded-[99px] rotate-[28.25deg] top-[540px] left-[-200px]"></div>
      <img src={image} className="absolute bottom-0" />
    </div>
  );
};

export default Banner;
