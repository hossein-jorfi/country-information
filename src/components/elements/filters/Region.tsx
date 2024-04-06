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
  const [isHover, setIsHover] = useState(true);
  return (
    <div className="mt-4 ">
      <button
        data-tooltip-target="tooltip-no-arrow"
        type="button"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="
          p-2 w-fit cursor-default
          bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-300
          rounded-md
          flex flex-wrap
          "
      >
        {isHover
          ? regionsMock.map((item, index) => (
              <RegionItem onClick={() => setIsHover(false)} region={item} key={index} />
            ))
          : <RegionItem onClick={() => setIsHover(false)} region={"Region"} />}
      </button>
    </div>
  );
};

export default Region;
