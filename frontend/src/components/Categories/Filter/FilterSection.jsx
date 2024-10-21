import React from "react";
import Color from "./Color";
import Price from "./Price";
import Checks from "./Gender";

const FilterSection = () => {
  const genderOptions = ["Male", "Female"];
  const colorOptions = [
    { name: "Red", color: "bg-red-500" },
    { name: "Apricot", color: "bg-orange-300" },
    { name: "Black", color: "bg-gray-800" },
    { name: "Black & White", color: "" },
    { name: "Silver", color: "bg-stone-300" },
    { name: "Tan", color: "bg-amber-100" },
  ];
  const breedSizes = ["Small", "Medium", "Large"];

  return (
    <div className="flex flex-col max-w-[280px]">
      <Checks title="Gender" options={genderOptions} />
      <Color title="Color" options={colorOptions} />
      <Price />
      <Checks title="Breed" options={breedSizes} />
    </div>
  );
};

export default FilterSection;
