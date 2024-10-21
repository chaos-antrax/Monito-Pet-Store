import React, { useState } from "react";
import hamIco from "../assets/hamIco.svg";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const navbar = () => {
  const nav = [
    { label: "HOME", path: "/" },
    { label: "CATEGORIES", path: "/categories" },
    { label: "ABOUT", path: "/" },
    { label: "CONTACT", path: "/" },
  ];
  return (
    <div className="h-[57px] w-full justify-between items-center flex pt-[2px] pr-[14px] pl-[10px] mt-[47px] absolute">
      <Sheet>
        <SheetTrigger>
          <img src={hamIco} alt="hamburger" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-main-t">
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
      <img src={logo} alt="logo" />
      <img src={search} alt="search" />
    </div>
  );
};

export default navbar;
