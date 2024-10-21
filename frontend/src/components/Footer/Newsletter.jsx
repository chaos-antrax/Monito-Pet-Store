import React from "react";
import SubscriptionForm from "./SubscriptionForm";

const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 w-full rounded-2xl bg-main-blue md:items-center">
      <h2 className="text-xl md:text-[22px] md:leading-[36px] text-center md:text-left font-bold leading-8 text-white capitalize md:ml-10">
        Register now so you don't miss our programs
      </h2>
      <SubscriptionForm />
    </div>
  );
};

export default Newsletter;
