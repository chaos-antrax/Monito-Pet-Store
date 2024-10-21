import React, { useEffect, useState } from "react";
import { Wrapper } from "@/components/Index";
import Banner from "@/components/Categories/Banner";
import Filter from "@/components/Categories/Filter/Filter";

const Categories = () => {
  return (
    <Wrapper>
      <div className="font-gilroy text-main-blue bg-[#f6f6f6] px-4 py-8 ">
        <div className="md:mx-[250px]">
          <Banner />
          <Filter />
        </div>
      </div>
    </Wrapper>
  );
};

export default Categories;
