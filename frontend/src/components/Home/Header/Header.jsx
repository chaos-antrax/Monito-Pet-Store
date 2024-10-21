import React from "react";
import Navbar from "../../NavBar.jsx";
import square from "../../../assets/shapes/square.svg";
import BotSqDog from "./BotSqDog.jsx";
import SmallSq from "./SmallSq.jsx";
import BannerContent from "../../BannerContent.jsx";

const Header = () => {
  return (
    <div className="h-[794px] md:h-[695px] w-full max-w-full bg-main-t rounded-b-[20px] md:overflow-hidden relative">
      <div className="h-[139px] relative">
        <img src={square} className="absolute" />
        <SmallSq />
        <Navbar />
      </div>
      <div className="h-[655px] relative">
        <div className="md:left-[130px] md:max-w-[465px] relative">
          <div className="hidden md:block h-[60px] w-[60px] rounded-[20px] rotate-[25.23deg] top-[0px] z-5 bg-secondary-t absolute" />
          <BannerContent />
        </div>
        <BotSqDog />
      </div>
    </div>
  );
};

export default Header;
