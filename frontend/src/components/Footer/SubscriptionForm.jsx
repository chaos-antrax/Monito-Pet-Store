import React from "react";

const SubscriptionForm = () => {
  return (
    <div className="md:w-full md:ml-10 md:my-4">
      <form className="flex flex-col md:flex-row justify-center md:items-center p-3 mt-4 md:mt-0 w-full font-medium bg-white rounded-2xl">
        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          className="px-6 py-4 w-full md:max-h-[48px] text-sm md:text-base leading-none bg-white rounded-lg border border-solid border-zinc-400 text-zinc-400"
        />
        <button
          type="submit"
          className=" px-7 md:ml-4 md:px-[28px] md:py-[14px] pt-3.5 pb-2.5 mt-3 md:mt-0 w-full md:max-w-[175px] md:max-h-[48px] text-base md:text-[16px] text-white rounded-lg bg-sky-950"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
