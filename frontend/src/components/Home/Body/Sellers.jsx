import React from "react";
import arrow from "../../../assets/arrow.svg";

import bakers from "../../../assets/sellers/bakers.png";
import butchers from "../../../assets/sellers/butchers.png";
import felix from "../../../assets/sellers/felix.png";
import goodBoy from "../../../assets/sellers/good-boy.png";
import pedigree from "../../../assets/sellers/pedigree.png";
import sheba from "../../../assets/sellers/sheba.png";
import whiskas from "../../../assets/sellers/whiskas.png";

const Sellers = () => {
  const SellersList = [
    {
      src: [bakers],
      alt: "Seller 1",
    },
    {
      src: [butchers],
      alt: "Seller 2",
    },
    {
      src: [felix],
      alt: "Seller 3",
    },
    {
      src: [goodBoy],
      alt: "Seller 4",
    },
    {
      src: [pedigree],
      alt: "Seller 4",
    },
    {
      src: [sheba],
      alt: "Seller 4",
    },
    {
      src: [whiskas],
      alt: "Seller 4",
    },
  ];

  return (
    <div className="hidden md:block mt-8">
      <div className="md:flex md:h-full items-center md:justify-between">
        <div>
          Proud to be a part of
          <span className="text-[24px] ml-2 md:text-[24px] font-bold">
            Pet Sellers
          </span>
        </div>
        <div>
          <button className=" btn-secondary max-w-[240px] mt-2 flex items-center justify-center">
            View all our sellers <img src={arrow} />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center h-[120px]">
        {SellersList.map((icon, index) => (
          <div className=" w-[150px] h-full p-5">
            <img
              key={index}
              loading="lazy"
              src={icon.src}
              alt={icon.alt}
              className="object-contain h-[100px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sellers;
