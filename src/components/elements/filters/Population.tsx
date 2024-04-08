"use client";
import { useState } from "react";
import CrossIcon from "@/icons/icons8-cross-50.png";
import Image from "next/image";

const Population = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clearHandler = () => {
    // todo : clear filter from reducer
    setIsClicked(false);
  };

  return (
    <div
      className="
          p-2 w-fit
          bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-300
          rounded-md
          flex flex-wrap
          cursor-pointer
          "
    >
      {!isClicked ? (
        <p onClick={() => setIsClicked(!isClicked)}>Population</p>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Input />
            <span>to</span>
            <Input />
          </div>
          <span
            onClick={clearHandler}
            className="p-[1px] ml-2 hover:bg-white hover:bg-opacity-10 rounded-full"
          >
            {<Image src={CrossIcon} alt="cross icon" width={25} />}
          </span>
        </div>
      )}
    </div>
  );
};

export default Population;

const Input = () => {
  return (
    <input
      type="number"
      className="rounded-lg bg-white bg-opacity-30 px-3 py-1 outline-none text-sm"
    />
  );
};
