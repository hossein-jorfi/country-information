import { useSelector } from "react-redux";
import Region from "../elements/filters/Region";
import Search from "../elements/filters/Search";
import { RootState } from "@/lib/store";

const Filter = () => {
  const count = useSelector((state: RootState) => state.main);
  return (
    <div
      className="
      p-5
      border-opacity-50 rounded-lg border-gray-100 border-2
      flex flex-col justify-between
      bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-300
      mb-6
    "
    >
      <Search />
      <Region />
    </div>
  );
};

export default Filter;
