import React from "react";

const SubscriptionForm = () => {
  return (
    <form className="flex flex-col justify-center p-3 mt-4 w-full font-medium bg-white rounded-2xl">
      <label htmlFor="email" className="sr-only">
        Enter your Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your Email"
        className="flex-1 shrink gap-2.5 self-stretch px-7 py-3.5 w-full text-sm leading-none bg-white rounded-lg border border-solid border-zinc-400 text-zinc-400"
      />
      <button
        type="submit"
        className="gap-2.5 self-stretch px-7 pt-3.5 pb-2.5 mt-3 w-full text-base text-white rounded-lg bg-sky-950"
      >
        Subscribe Now
      </button>
    </form>
  );
};

export default SubscriptionForm;
