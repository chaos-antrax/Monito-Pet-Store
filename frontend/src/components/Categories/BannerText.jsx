import React from "react";

import playIco from "../../assets/playIco.svg";

const BannerText = () => {
  return (
    <div className="px-4 pt-6 md:pr-16 md:mt-[-25px] z-10 items-start md:items-end justify-center h-full flex flex-col text-[#002a48] relative">
      <span className="text-[36px] md:text-[52px] font-bold">
        One More Friend
      </span>
      <span className="text-[24px] font-bold mt-1">Thousands More Fun!</span>
      <span className="text-[12px] text-start md:text-right mt-4 md:max-w-[375px]">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </span>
      <div className="flex justify-center mt-6">
        <button className="btn-secondary flex items-center justify-between">
          View Intro
          <img
            src={playIco}
            className="ml-1 border-[1.5px] border-main-blue rounded-full"
          />
        </button>
        <button className="btn-primary ml-4">Explore Now</button>
      </div>
    </div>
  );
};

export default BannerText;
