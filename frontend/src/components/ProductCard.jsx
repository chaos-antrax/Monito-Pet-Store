import React from "react";

const ProductCard = ({ image, breed, gender, age, price }) => {
  return (
    <div className="flex flex-col p-2 m-2 bg-white rounded-xl max-w-[185px]">
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
          <dl className="flex flex-col mt-1 w-full text-xs text-gray-500 max-w-[161px]">
            <div className="flex gap-1 items-start w-full whitespace-nowrap">
              <dt className="font-medium">gender:</dt>
              <dd className="font-bold">{gender}</dd>
            </div>
            <div className="flex gap-1 items-start self-start mt-1">
              <dt className="font-medium">Age:</dt>
              <dd className="font-bold">{age}</dd>
            </div>
          </dl>
        </div>
        <div className="mt-2 text-base font-bold text-slate-900">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
