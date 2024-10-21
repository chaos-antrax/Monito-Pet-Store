import React from "react";

const Color = ({ title, options }) => {
  return (
    <div className="flex flex-col py-4 w-full border-b border-solid border-b-gray-200 text-slate-900">
      <h2 className="text-base font-bold">{title}</h2>
      <div className="flex flex-col items-start self-start mt-2.5 text-sm font-medium leading-none">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex gap-2.5 items-center mt-2 first:mt-0"
          >
            <input
              type="checkbox"
              id={`color-${option.name}`}
              className="w-4 h-4 bg-white"
            />
            <div
              className={`flex shrink-0 self-stretch my-auto rounded-xl h-[15px] w-[15px] ${option.color}`}
            />
            <label className="self-stretch my-auto">{option.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Color;
