import React from "react";
import SubscriptionForm from "./SubscriptionForm";

const Newsletter = () => {
  return (
    <section className="flex flex-col p-4 w-full rounded-2xl bg-sky-950">
      <h2 className="text-xl font-bold leading-8 text-white capitalize">
        Register now so you don't miss our programs
      </h2>
      <SubscriptionForm />
    </section>
  );
};

export default Newsletter;
