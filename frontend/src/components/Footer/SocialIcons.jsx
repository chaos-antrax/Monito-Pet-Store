import React from "react";

const SocialIcons = () => {
  const icons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4693d4df148c97a3360b1cf7a8547500c52675030121cea907b872579e1ebb4?placeholderIfAbsent=true&apiKey=dac3aaf0d27842ffa268a1bab5c3557d",
      alt: "Social media icon 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2827d0c6a7e73b5cf1bac628ffed90701c67c52d707fabcdde462390c68ca4e8?placeholderIfAbsent=true&apiKey=dac3aaf0d27842ffa268a1bab5c3557d",
      alt: "Social media icon 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/026325689149f8ec3636fc2307fdde66d56008013736e5f8eb3602954c399ddd?placeholderIfAbsent=true&apiKey=dac3aaf0d27842ffa268a1bab5c3557d",
      alt: "Social media icon 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ef90e4b289b215d475830b8def18cc864707914d15a861af68569d8ec2d34fe?placeholderIfAbsent=true&apiKey=dac3aaf0d27842ffa268a1bab5c3557d",
      alt: "Social media icon 4",
    },
  ];

  return (
    <div className="flex gap-10 items-start self-center mt-5">
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
