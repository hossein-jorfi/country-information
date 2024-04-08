"use client";
import { CountryType } from "@/constants/types";
import { isRTL } from "@/utils/helpers";
import Image from "next/image";
import PersonIcon from "@/icons/person.png";

const CountryCard = ({
  name,
  flag,
  flags,
  region,
  population,
}: CountryType) => {
  return (
    <div
      className="
      p-5
      border-opacity-50 rounded-lg border-gray-100 border-2
      flex flex-col justify-between
      bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-300
      hover:border-opacity-70 hover:bg-opacity-15
      cursor-pointer
    "
    >
      <div>
        <div className="flex items-center text-2xl">
          <p>{flag}</p>
          <p className="ml-1">{name?.common}</p>
        </div>
        <div className="flex items-center mt-2">
          <p className="p-1 border text-xs w-fit rounded-xl bg-gray-400 bg-opacity-50">
            {region}
          </p>
          <p className="ml-1 text-sm">{name?.official}</p>
        </div>
        <div className="flex items-center mt-2 space-x-1">
          <Image src={PersonIcon} alt="population" width={14} />
          {/* <p className="text-sm">{commafy(population)}</p> */}
          <p className="text-sm">{population.toLocaleString()}</p>
        </div>
      </div>

      <div dir="auto" className="mt-5">
        <p className={`${isRTL(name?.native?.common) && "rtl-font"}`}>
          {name?.native?.common}
        </p>
        <p className={`${isRTL(name?.native?.common) && "rtl-font"}`}>
          {name?.native?.official}
        </p>
      </div>

      {/* <div>
        <Image width={32} height={20} src={flags?.svg} alt={flags?.alt} />
      </div> */}
    </div>
  );
};

export default CountryCard;
