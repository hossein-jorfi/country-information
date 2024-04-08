"use client";

import { useState } from "react";
import RegionItem from "./FilterItem";
import { useDispatch, useSelector } from "react-redux";
import { setRegionFilter } from "@/lib/features/mainSlice";
import { RootState } from "@/lib/store";
import SelectedFilterItem from "./SelectedFilterItem";

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

  const deleteItemHandler = (value: string) => {
    dispatch(setRegionFilter(`delete ${value}`));
  };

  return (
    <div className="flex items-center space-x-5">
      <button
        data-tooltip-target="tooltip-no-arrow"
        type="button"
        onMouseEnter={() => setIsHover(true)}
        onClick={() => setIsHover(!isHover)}
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
      {selectedRegions.length > 0 && (
        <div className="flex flex-wrap space-x-2">
          {selectedRegions.map((item) => (
            <SelectedFilterItem
              key={item}
              onClick={() => deleteItemHandler(item)}
            >
              {item}
            </SelectedFilterItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default Region;
