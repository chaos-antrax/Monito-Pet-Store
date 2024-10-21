import React from "react";
import BannerText from "../Home/Body/BannerText";
import rectangle from "../../assets/shapes/rect.svg";
import dogs from "../../assets/dgroup.png";

const Banner = () => {
  return (
    <div className="h-[441px] w-[382px] mt-24 bg-main-t rounded-2xl relative">
      <BannerText />
      <img src={rectangle} className="mt-8 bottom-0 absolute rounded-b-2xl" />
      <img src={dogs} className="absolute bottom-0 rounded-b-2xl" />
    </div>
  );
};

export default Banner;
