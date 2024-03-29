import CountryCard from "../elements/CountryCard";

const HomePage = () => {
  return (
    <div className="flex justify-between w-full">
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
};

export default HomePage;
