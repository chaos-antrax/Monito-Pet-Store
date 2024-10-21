import React from "react";
import giftIco from "../assets/gift.svg";

const ItemCard = ({ name, product, price, size, description, image }) => {
  return (
    <div className="flex flex-col p-2 m-2 bg-white rounded-xl max-w-[185px] md:max-w-[280px] md:h-[440px]">
      <img
        src={image}
        alt="product-image"
        loading="lazy"
        className="object-contain w-full aspect-square rounded-xl"
      />
      <div className="flex flex-col p-1 mt-2 w-full h-full relative">
        <div className="flex flex-col w-full h-[50%]">
          <h2 className="text-sm font-bold leading-5 text-slate-900">{name}</h2>
          <div className="flex mt-1 w-full text-xs text-gray-500 max-w-[161px] md:max-w-[260px] relative">
            <div className="md:flex md:items-center w-full">
              <div className="flex mt-1">
                <span>
                  Product: <b>{product}</b>
                </span>
              </div>
              <div className="hidden md:block ml-5 mr-5 h-[3px] w-[3px] bg-gray-500 rounded-full mt-1" />
              <div className="flex gap-1 items-start self-start mt-1">
                <span>
                  Size: <b>{size}</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[60%]">
          <div className="mt-2 text-base font-bold text-slate-900">{price}</div>
          <div className="bg-main-t px-4 py-2 rounded-xl mt-2 flex items-center justify-center">
            <img src={giftIco} alt="offer" className="h-[20px] w-[20px]" />
            <div className=" ml-3 mr-3 h-[3px] w-[3px] bg-main-blue rounded-full mt-1" />
            <span className="text-main-blue text-sm font-bold">
              {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
