import React, { useState } from "react";
import hamIco from "../assets/hamIco.svg";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import coin from "../assets/coin.svg";
import arrowd from "../assets/arrowd.svg";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const navbar = () => {
  const nav = [
    { label: "HOME", path: "/" },
    { label: "CATEGORIES", path: "/categories" },
    { label: "ABOUT", path: "/" },
    { label: "CONTACT", path: "/" },
  ];
  return (
    <div className="absolute h-[57px] md:h-[100px] w-full justify-between items-center flex pt-[2px] pr-[14px] pl-[10px] mt-[47px] md:mt-0 md:px-[10%] md:py-10 font-bold">
      <Sheet>
        <SheetTrigger className="md:hidden">
          <SheetTitle className="hidden" />
          <img src={hamIco} alt="hamburger" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-main-t">
          <SheetDescription className="hidden" />
          <div className="w-full items-center justify-center flex">
            <img src={logo} alt="logo" />
          </div>
          <div className="text-[20px] font-bold text-main-blue">
            <ul className="mt-10">
              {nav.map((item, index) => (
                <li key={index} className="pt-5">
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="hidden md:block w-[366px] text-main-blue">
        <div className=" justify-between items-center flex">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/categories">
            <span>Categories</span>
          </Link>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      <img src={search} alt="search" className="md:hidden" />
      <div className="w-[360px] bg-white hidden md:block h-[44px] rounded-full items-center justify-center">
        <div className="h-full w-full items-center flex relative rounded-full">
          <img
            src={search}
            alt="search"
            className="w-[20px] fill-slate-400 absolute ml-4 z-10"
          />
          <input
            type="text"
            className="w-full h-full absolute rounded-full pl-14 font-light"
          />
        </div>
      </div>

      <button className="hidden md:block bg-main-blue h-[44px] text-[16px] px-5 rounded-full text-white font-medium">
        Join the Community
      </button>
      <div className="hidden md:block font-extralight">
        <div className="flex">
          <img src={coin} className="mr-2" />
          VND
          <img src={arrowd} className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default navbar;
