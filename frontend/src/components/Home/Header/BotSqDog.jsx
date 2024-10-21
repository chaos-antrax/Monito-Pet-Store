import React from "react";
import square2 from "../../../assets/shapes/square2.svg";
import square3 from "../../../assets/shapes/square3.svg";
import wDog from "../../../assets/woman_wDog.png";

const BotSqDog = () => {
  return (
    <div>
      <img src={square2} className="absolute bottom-0 ml-4 rounded-b-[20px]" />
      <img src={square3} className="absolute bottom-0 ml-4 rounded-b-[20px]" />
      <img src={wDog} className="absolute bottom-0" />
    </div>
  );
};

export default BotSqDog;
