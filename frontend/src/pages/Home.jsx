import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Home/Header/Header";
import Banner from "../components/Home/Body/Banner";
import Sellers from "@/components/Home/Body/Sellers";
import Customers from "@/components/Home/Body/Customers";
import PetsContainer from "@/components/Home/Body/PetsContainer";
import Products from "@/components/Home/Body/Products";
import BannerAdopt from "@/components/Home/Body/BannerAdopt";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <div className="font-gilroy text-main-blue bg-[#f6f6f6] px-4 py-8 md:px-[250px]">
        <div>
          <PetsContainer />
          <Banner />
          <Customers />
          <Products />
          <Sellers />
          <BannerAdopt />
          <div className="mt-8" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
