import React from "react";
import BannerText from "./BannerText";
import dogs from "../../assets/dgroup.png";

const Banner = () => {
  return (
    <div className="mt-24">
      <div className="h-[410px] md:h-[378px] w-full bg-main-t rounded-3xl relative overflow-clip">
        <div className="h-[799.52px] w-[816.4px] bg-main-blue rounded-[99px] rotate-[-175.16deg] md:rotate-[70.22deg] top-[322px] md:top-[-50px] left-[-158px] md:left-[535px] absolute " />
        <div className="absolute md:right-0 md:h-full md:invert">
          <BannerText />
        </div>
        <img
          src={dogs}
          className="absolute bottom-0 md:h-[301px] md:left-[86.5px]"
        />
      </div>
    </div>
  );
};

export default Banner;
