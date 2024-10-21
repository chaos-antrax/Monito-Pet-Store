import React from "react";
import sq1 from "../../../assets/shapes/sq1.svg";
import sq2 from "../../../assets/shapes/sq2.svg";
import sq3 from "../../../assets/shapes/sq3.svg";

const SmallSq = () => {
  return (
    <div>
      <img
        src={sq1}
        className="absolute top-[215.29px] left-[302px] md:top-[255px] md:left-[800px] z-10"
      />
      <img
        src={sq2}
        className="absolute top-[207.66px] left-[304.41px] md:top-[247px] md:left-[804px] z-1"
      />
      <img
        src={sq3}
        className="absolute top-[180px] left-[354.19px] md:top-[170px] md:left-[820px] z-1"
      />
    </div>
  );
};

export default SmallSq;
