import React from "react";

const Checks = ({ title, options }) => {
  return (
    <div className="mt-4 flex flex-col pb-4 w-full whitespace-nowrap border-b border-solid border-b-gray-200 text-slate-900">
      <h2 className="text-base font-bold">{title}</h2>
      <div className="flex flex-col self-start mt-2.5 text-sm font-medium leading-none">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex gap-2.5 items-center mt-2 first:mt-0"
          >
            <input
              type="checkbox"
              id={`${title.toLowerCase()}-${option.toLowerCase()}`}
              className="w-4 h-4 bg-white rounded border border-solid border-neutral-300"
            />
            <label
              htmlFor={`${title.toLowerCase()}-${option.toLowerCase()}`}
              className="self-stretch my-auto"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checks;
