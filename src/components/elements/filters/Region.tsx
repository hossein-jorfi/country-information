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
        <div className="pt-1" onMouseEnter={() => setIsHover(true)}>
          <div
            className="w-fit p-2 rounded-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-300"
            onMouseLeave={() => setIsHover(false)}
          >
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
