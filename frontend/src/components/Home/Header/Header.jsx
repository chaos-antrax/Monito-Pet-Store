import React from "react";
import Navbar from "../../NavBar.jsx";
import square from "../../../assets/shapes/square.svg";
import BotSqDog from "./BotSqDog.jsx";
import SmallSq from "./SmallSq.jsx";
import BannerContent from "../../BannerContent.jsx";

const Header = () => {
  return (
    <div className="h-[794px] w-full max-w-full bg-main-t rounded-b-[20px]">
      <div className="h-[139px] relative">
        <img src={square} className="absolute" />
        <SmallSq />
        <Navbar />
      </div>
      <div className="h-[655px] relative">
        <BannerContent />
        <BotSqDog />
      </div>
    </div>
  );
};

export default Header;
