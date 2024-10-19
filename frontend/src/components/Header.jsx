import React from "react";
import hamIco from "../assets/hamIco.svg";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import square from "../assets/shapes/square.svg";
import square2 from "../assets/shapes/square2.svg";
import square3 from "../assets/shapes/square3.svg";
import wDog from "../assets/woman_wDog.png";
import sq1 from "../assets/shapes/sq1.svg";
import sq2 from "../assets/shapes/sq2.svg";
import sq3 from "../assets/shapes/sq3.svg";
import Banner from "./Banner.jsx";

const Header = () => {
  return (
    <div className="h-[794px] bg-main-t rounded-b-[20px]">
      <div className="h-[139px] relative">
        {/* <div className="absolute h-[635px] w-[635px] top-[-600px] left-[-136.83px] rounded-[61px] rotate-[-58.26deg] bg-main-blue" /> */}
        <img src={square} className="absolute" />
        <img src={sq1} className="absolute top-[215.29px] left-[302px] z-10" />
        <img
          src={sq2}
          className="absolute top-[207.66px] left-[304.41px] z-1"
        />
        <img src={sq3} className="absolute top-[180px] left-[354.19px] z-1" />
        <div className="h-[57px] w-full justify-between items-center flex pt-[2px] pr-[14px] pl-[10px] mt-[47px] absolute">
          <img src={hamIco} alt="hamburger" />
          <img src={logo} alt="logo" />
          <img src={search} alt="search" />
        </div>
      </div>
      <div className="h-[655px] relative">
        <Banner />
        <div>
          <img
            src={square2}
            className="absolute bottom-0 ml-4 rounded-b-[20px]"
          />
          <img
            src={square3}
            className="absolute bottom-0 ml-4 rounded-b-[20px]"
          />
          <img src={wDog} className="absolute bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default Header;
