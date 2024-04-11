"use client";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const data = useSelector((state: RootState) => state.main);
  console.log(data);

  return (
    <div
      className="
      p-5
      border-opacity-50 rounded-lg border-gray-100 border-2
      flex flex-col justify-between
      bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-300
      mb-6 space-y-3"
    >
      <div>Detail</div>
    </div>
  );
};

export default DetailPage;
