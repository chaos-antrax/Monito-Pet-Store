import React from "react";

import playIco from "../../../assets/playIco.svg";

const BannerText = () => {
  return (
    <div className="px-4 pt-6 z-10 items-center justify-center flex flex-col text-[#002a48]">
      <span className="text-[36px] font-bold">One More Friend</span>
      <span className="text-[24px] font-bold mt-1">Thousands More Fun!</span>
      <span className="text-[12px] text-center mt-4">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </span>
      <div className="flex justify-center mt-6">
        <button className="btn-secondary flex items-center justify-between">
          View Intro
          <img
            src={playIco}
            className="ml-3 border-[1.5px] border-main-blue rounded-full"
          />
        </button>
        <button className="btn-primary ml-4">Explore Now</button>
      </div>
    </div>
  );
};

export default BannerText;
