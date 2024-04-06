"use client";

import { useState } from "react";
import RegionItem from "./RegionItem";

const regionsMock = [
  "Europe",
  "Africa",
  "Americas",
  "Oceania",
  "Asia",
  "Antarctic",
];

const Region = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="mt-4">
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="
          p-3 w-fit cursor-default
          bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-300
          rounded-md
          
          "
      >
        Region
      </div>
      {isHover && (
        <div onMouseEnter={() => setIsHover(true)}>
          <div onMouseLeave={() => setIsHover(false)} className="border w-fit">
            {regionsMock.map((item, index) => (
              <RegionItem region={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Region;
