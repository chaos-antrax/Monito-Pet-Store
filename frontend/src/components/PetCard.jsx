import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, breed, gender, age, price }) => {
  return (
    <div className="flex flex-col p-2 m-2 bg-white rounded-xl max-w-[185px] md:max-w-[280px] md:min-h-[340px]">
      <img
        src={image}
        alt="product-image"
        loading="lazy"
        className="object-contain w-full aspect-square rounded-xl"
      />
      <div className="flex flex-col p-1 mt-2 w-full">
        <div className="flex flex-col w-full">
          <h2 className="text-sm font-bold leading-5 text-slate-900">
            {breed}
          </h2>
          <div className="flex mt-1 w-full text-xs text-gray-500 max-w-[161px] md:max-w-[260px] relative">
            <div className="md:flex md:items-center w-full">
              <div className="flex mt-1">
                <span>
                  Gene: <b>{gender}</b>
                </span>
              </div>
              <div className="hidden md:block ml-5 mr-5 h-[3px] w-[3px] bg-gray-500 rounded-full mt-1" />
              <div className="flex gap-1 items-start self-start mt-1">
                <span>
                  Age: <b>{age}</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-base font-bold text-slate-900">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
