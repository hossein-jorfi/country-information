import CountryCard from "../elements/CountryCard";

const HomePage = () => {
  return (
    <div className="flex justify-between w-full">
      <CountryCard
        flags={{
          png: "https://flagcdn.com/w320/ir.png",
          svg: "https://flagcdn.com/ir.svg",
          alt: "The flag of Iran is composed of three equal horizontal bands of green, white and red. A red emblem of Iran is centered in the white band and Arabic inscriptions in white span the bottom edge of the green band and the top edge of the red band.",
        }}
        name={{
          common: "Iran",
          official: "Islamic Republic of Iran",
          native: {
            official: "جمهوری اسلامی ایران",
            common: "ایران",
          },
        }}
        region="Asia"
        flag="🇮🇷"
      />
    </div>
  );
};

export default HomePage;
