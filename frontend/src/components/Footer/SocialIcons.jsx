import React from "react";
import fb from "../../assets/socials/facebook.svg";
import tweet from "../../assets/socials/twitter.svg";
import insta from "../../assets/socials/instagram.svg";
import yt from "../../assets/socials/youtube.svg";

const SocialIcons = () => {
  const icons = [
    {
      src: [fb],
      alt: "Sm 1",
    },
    {
      src: [tweet],
      alt: "Sm 2",
    },
    {
      src: [insta],
      alt: "Sm 3",
    },
    {
      src: [yt],
      alt: "Sm 4",
    },
  ];

  return (
    <div className="flex gap-10 items-start self-center mt-5 md:mt-0">
      {icons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className="object-contain shrink-0 w-5 aspect-square"
        />
      ))}
    </div>
  );
};

export default SocialIcons;
