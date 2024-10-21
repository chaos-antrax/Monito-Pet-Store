import React from "react";
import pawHand from "../../../assets/hands.png";
import playIco from "../../../assets/playIco.svg";
import pawIco from "../../../assets/paw.svg";

const BannerAdopt = () => {
  return (
    <div className="h-[378px] w-full bg-[#ffb775] rounded-3xl mt-10 relative overflow-clip hidden md:block">
      <div className="h-[635px] w-[782.29px] bg-main-t rounded-[99px] rotate-[154.77deg] top-[-240px] left-[-16%] absolute " />
      <div className="h-[787.54px] w-[787.54px] bg-main-t/30 rounded-[99px] rotate-[151.75deg] top-[170px] left-[600px] absolute " />
      <img src={pawHand} className="absolute bottom-0 h-full right-0" />

      <div className="z-10 ml-20 items-start justify-center h-full flex flex-col text-[#002a48] relative">
        <div className="items-center mt-[-25px] justify-center flex">
          <span className="text-[52px] md:text-[52px] font-bold mr-4">
            Adoption
          </span>
          <img src={pawIco} />
        </div>
        <span className="text-[36px] md:text-[36px] font-bold">
          We Need Help. So Do They.
        </span>
        <span className="text-[12px] text-left mt-4 md:max-w-[200px]">
          Adopt a pet and give it a home, it will be love you back
          unconditionally.
        </span>
        <div className="flex justify-center mt-6">
          <button className="btn-primary mr-4">Explore Now</button>
          <button className="btn-secondary flex items-center justify-between">
            View Intro
            <img
              src={playIco}
              className="ml-3 border-[1.5px] border-main-blue rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerAdopt;
