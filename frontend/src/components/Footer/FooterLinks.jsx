import React from "react";

const FooterLinks = () => {
  const links = ["Home", "Category", "About", "Contact"];

  return (
    <nav className="flex gap-10 items-start w-full md:w-fit text-base font-medium whitespace-nowrap text-slate-900">
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className={index === 1 || index === 2 ? "flex-1 shrink basis-0" : ""}
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default FooterLinks;
