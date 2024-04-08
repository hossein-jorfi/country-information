"use client";

import { useState } from "react";
import RegionItem from "./FilterItem";
import { useDispatch, useSelector } from "react-redux";
import { setRegionFilter } from "@/lib/features/mainSlice";
import { RootState } from "@/lib/store";

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

  const selectedRegions = useSelector((state: RootState) => state.main.region);

  const clickHandler = (value: string) => {
    dispatch(setRegionFilter(value?.toLowerCase()));
    setIsHover(false);
  };

  return (
    <div className="mt-4 flex items-center space-x-5">
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
      {selectedRegions.length && (
        <div className="flex space-x-2">
          {selectedRegions.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Region;
