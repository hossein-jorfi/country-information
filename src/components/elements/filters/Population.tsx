"use client";
import { ChangeEventHandler, useState } from "react";
import CrossIcon from "@/icons/icons8-cross-50.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { setPopulationFilter } from "@/lib/features/mainSlice";

const Population = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const populationValues = useSelector(
    (state: RootState) => state.main.population
  );

  const clearHandler = () => {
    dispatch(setPopulationFilter({ prop: "clear", value: "" }));
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
            <Input
              onChange={(e) =>
                dispatch(
                  setPopulationFilter({ prop: "from", value: e.target.value })
                )
              }
              value={populationValues.from}
            />
            <span>to</span>
            <Input
              onChange={(e) =>
                dispatch(
                  setPopulationFilter({ prop: "to", value: e.target.value })
                )
              }
              value={populationValues.to}
            />
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

const Input = ({
  onChange,
  value,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type="number"
      className="rounded-lg bg-white bg-opacity-30 px-3 py-1 outline-none text-sm w-full"
    />
  );
};
