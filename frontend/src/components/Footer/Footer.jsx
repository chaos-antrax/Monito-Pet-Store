import React from "react";
import Logo from "../../assets/logo.svg";
import Newsletter from "../Footer/Newsletter";
import SocialIcons from "../Footer/SocialIcons";
import FooterLinks from "../Footer/FooterLinks";

const Footer = () => {
  const links = ["Home", "Category", "About", "Contact"];

  return (
    <main className="flex overflow-hidden flex-col items-center px-4 pt-10 pb-5 rounded-t-3xl max-w-[414px] bg-main-t">
      <div className="flex flex-col self-stretch ">
        <Newsletter />
      </div>
      <footer className="flex overflow-hidden flex-col items-center px-4 pt-10 pb-5 rounded-3xl max-w-[414px]">
        <div className="flex flex-col self-stretch pb-10 border-b border-solid border-b-neutral-300">
          <FooterLinks />
          <SocialIcons />
        </div>
        <img
          src={Logo}
          className="object-contain mt-9 max-w-full aspect-[2.87] w-[115px]"
          alt="logo"
        />
        <div className="flex gap-3 mt-8 max-w-full text-xs font-medium text-gray-500 w-[178px]">
          <div className="grow">Terms of Service</div>
          <div>Privacy Policy</div>
        </div>
        <div className="mt-2 text-xs leading-relaxed text-gray-500">
          © 2022 Monito. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default Footer;
