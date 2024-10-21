import React from "react";

const Price = () => {
  return (
    <div className="flex flex-col py-4 w-full border-b border-solid border-b-gray-200">
      <h2 className="text-base font-bold text-slate-900">Price</h2>
      <div className="flex gap-2.5 justify-between text-sm font-normal items-start mt-2.5 w-full">
        <div className="flex flex-col justify-center p-2.5 w-[135px]">
          <input
            type="number"
            id="min-price"
            placeholder="Min"
            aria-label="Minimum price"
            className="pl-4 border-b border-solid border-b-gray-200 bg-transparent"
          />
        </div>
        <div className="flex flex-col justify-center p-2.5 w-[135px]">
          <input
            type="number"
            id="max-price"
            aria-label="Maximum price"
            placeholder="Max"
            className="pl-4 border-b border-solid border-b-gray-200 bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
