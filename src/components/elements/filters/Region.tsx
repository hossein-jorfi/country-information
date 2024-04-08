"use client";

import { useState } from "react";
import RegionItem from "./FilterItem";
import { useDispatch } from "react-redux";
import { setRegionFilter } from "@/lib/features/mainSlice";

const regionsMock = [
  "Europe",
  "Africa",
  "Americas",
  "Oceania",
  "Asia",
  "Antarctic",
];

const Region = () => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);

  const clickHandler = (value: string) => {
    dispatch(setRegionFilter(value?.toLowerCase()));
    setIsHover(false);
  };

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
        {isHover ? (
          regionsMock.map((item, index) => (
            <RegionItem onClick={() => clickHandler(item)} key={index}>
              {item}
            </RegionItem>
          ))
        ) : (
          <RegionItem onClick={() => setIsHover(false)}>{"Region"}</RegionItem>
        )}
      </button>
    </div>
  );
};

export default Region;
