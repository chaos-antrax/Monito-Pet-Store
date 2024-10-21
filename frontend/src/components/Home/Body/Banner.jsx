import React from "react";
import BannerText from "./BannerText";
import image from "../../../assets/gkd.png";

const Banner = () => {
  return (
    <div className="h-[640px] md:h-[378px] w-full bg-[#003459] rounded-3xl mt-10 relative overflow-clip">
      <div className="h-[635px] w-[605.03px] md:w-[776.67px] bg-main-t rounded-[75px] md:rounded-[99px] rotate-[11.41deg] md:rotate-[25.23deg] top-[-300px] md:top-[-240px] left-[-158px] md:left-[50%] absolute " />
      <div className="absolute md:right-0 md:h-full">
        <BannerText />
      </div>
      <div className="h-[787.54px] w-[787.54px] bg-[#002a48] absolute rounded-[99px] rotate-[28.25deg] top-[540px] md:top-[165px] left-[-200px] md:left-[-200px]"></div>
      <img
        src={image}
        className="absolute bottom-0 md:h-[342px] md:left-[86.5px]"
      />
    </div>
  );
};

export default Banner;
