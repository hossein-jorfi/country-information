"use client";

import { setSearch } from "@/lib/features/mainSlice";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const search = useSelector((state: RootState) => state.main.search);

  const dispatch = useDispatch();

  return (
    <div>
      <input
        onChange={(e) => dispatch(setSearch(e.target.value))}
        value={search}
        type="text"
        placeholder="Search"
        className="
        w-full h-10 p-5
        bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-300
        rounded-md
        focus:outline-none
        placeholder:text-gray-300
        placeholder:text-opacity-50
        "
      />
    </div>
  );
};

export default Search;
