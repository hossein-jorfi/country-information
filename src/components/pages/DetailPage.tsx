"use client";
import { CountryType } from "@/constants/types";
import { RootState } from "@/lib/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import backIcon from "@/icons/back.png";
import { useRouter } from "next/navigation";
import { isRTL } from "@/utils/helpers";

const DetailPage = ({ urlName }: { urlName: string }) => {
  const countries = useSelector((state: RootState) => state.main.allCountries);
  const [country, setCountry] = useState<CountryType | undefined | null>(null);
  const router = useRouter();

  useEffect(() => {
    const countryData = countries.find(
      (item) => item.navigateString === urlName.toLowerCase()
    );
    setCountry(countryData);
    // console.log(country)
  }, [countries, urlName, country]);

  const handleBack = () => {
    router.push("/");
  };

  return (
    <>
      <div
        className="
            backdrop-blur-sm text-gray-300
            mb-3
          "
      >
        <Image
          priority={true}
          onClick={handleBack}
          className="
          cursor-pointer
          rounded-full
          hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-50
          "
          src={backIcon}
          alt="back"
        />
      </div>
      <div
        className="
          p-5
          border-opacity-50 rounded-lg border-gray-100 border-2
          flex flex-col justify-between
          bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-300
          mb-6 space-y-3"
      >
        {country === undefined && <p>Country Not Found</p>}
        {country && (
          <div className="flex justify-between">
            <div className="flex flex-col justify-between w-full">
              <div>
                <h2 className="text-4xl">{country?.name?.common}</h2>
                <p className="text-2xl">{country?.name?.official}</p>
              </div>
              <div className="mt-3">
                <p>native:</p>
                <p
                  dir={`${
                    isRTL(country?.name?.native?.common) ? "rtl" : "ltr"
                  }`}
                  className={`text-2xl ${
                    isRTL(country?.name?.native?.common) && "rtl-font"
                  }`}
                >
                  {country?.name?.native?.common}
                </p>
                <p
                  dir={`${
                    isRTL(country?.name?.native?.official) ? "rtl" : "ltr"
                  }`}
                  className={`text-2xl ${
                    isRTL(country?.name?.native?.official) && "rtl-font"
                  }`}
                >
                  {country?.name?.native?.official}
                </p>
              </div>
            </div>
            <div className="w-2/3 h-auto relative">
              <Image
                priority={true}
                src={country.flags.png}
                fill={true}
                sizes="100vw 100vw"
                alt={country.flags.alt}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailPage;
