import React from "react";
import { Wrapper } from "@/components/Index";
import Banner from "@/components/Categories/Banner";

const Categories = () => {
  return (
    <Wrapper>
      <div className=" text-main-blue bg-[#f6f6f6] px-4 py-8">
        <Banner />
      </div>
    </Wrapper>
  );
};

export default Categories;
