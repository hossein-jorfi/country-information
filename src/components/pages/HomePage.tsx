"use client";
import CountryCard from "../elements/CountryCard";
import { CountryType } from "@/constants/types";
import Filter from "../modules/Filter";

type HomePageProps = {
  data: CountryType[];
};

const HomePage = ({ data }: HomePageProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
      {data?.map((item: any, index) => {
        return (
          <CountryCard
            key={item?.name?.common || index}
            // flags={{
            //   png: "https://flagcdn.com/w320/ir.png",
            //   svg: "https://flagcdn.com/ir.svg",
            //   alt: "The flag of Iran is composed of three equal horizontal bands of green, white and red. A red emblem of Iran is centered in the white band and Arabic inscriptions in white span the bottom edge of the green band and the top edge of the red band.",
            // }}
            // name={{
            //   common: "Iran",
            //   official: "Islamic Republic of Iran",
            //   native: {
            //     official: "جمهوری اسلامی ایران",
            //     common: "ایران",
            //   },
            // }}
            // region="Asia"
            // flag="🇮🇷"
            {...item}
            name={{
              ...item.name,
              native: {
                official: item?.name?.nativeName
                  ? item?.name?.nativeName[
                      Object?.keys(item?.name?.nativeName || {})[0]
                    ].official
                  : "-",
                common: item?.name?.nativeName
                  ? item?.name?.nativeName[
                      Object?.keys(item?.name?.nativeName || {})[0]
                    ].common
                  : "-",
              },
            }}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
