import React from "react";

import playIco from "../assets/playIco.svg";

const Banner = () => {
  return (
    <div className="px-[16px] z-10 items-center justify-center text-[#002a48]">
      <span className="text-[46px] font-bold">One More Friend</span>
      <br />
      <span className="text-[28px] font-bold">Thousands More Fun!</span>
      <br />
      <span className="text-[12px]">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </span>
      <div className="flex justify-between mt-6 px-4">
        <button className="btn-secondary flex items-center justify-between">
          View Intro
          <img
            src={playIco}
            className="ml-3 border-[1.5px] border-main-blue rounded-full"
          />
        </button>
        <button className="btn-primary">Explore Now</button>
      </div>
    </div>
  );
};

export default Banner;
