import React from "react";
import square2 from "../../../assets/shapes/square2.svg";
import square3 from "../../../assets/shapes/square3.svg";
import wDog from "../../../assets/woman_wDog.png";

const BotSqDog = () => {
  return (
    <div className="md:ml-[699.22px]">
      <img src={square2} className="absolute bottom-0 ml-4 rounded-b-[20px]" />
      <img src={square3} className="absolute bottom-0 ml-4 rounded-b-[20px]" />
      <div className="hidden md:block bg-main-blue rotate-[9.35deg] h-[635px] w-[635px] rounded-[99px] top-[190px] absolute" />
      <div className="hidden md:block bg-secondary-t rotate-[25.23deg] h-[635px] w-[635px] rounded-[99px] top-[160px] right-[300px] absolute" />
      <div className="hidden md:block bg-secondary-t w-[635px] h-[635px] rotate-[57.47deg] rounded-[99px] left-[40px] top-[550px] absolute" />
      <img src={wDog} className="absolute bottom-0 md:h-[693px]" />
    </div>
  );
};

export default BotSqDog;
