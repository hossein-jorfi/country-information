import Image from "next/image";

type CountryCardProps = {
  region: string;
  name: {
    common: string;
    official: string;
    native: {
      common: string;
      official: string;
    };
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  flag: string;
};

const CountryCard = ({ name, flag, flags, region }: CountryCardProps) => {
  return (
    <div
      className="p-5 w-80 h-44 !border-opacity-50 rounded-lg 
    bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-gray-300"
    >
      <div className="flex items-center text-2xl">
        <p>{flag}</p>
        <p className="ml-1">{name?.common}</p>
      </div>

      <div>
        <p>{name?.official}</p>
        <p>{region}</p>
      </div>

      <div dir="auto">
        <p>{name?.native?.common}</p>
        <p>{name?.native?.official}</p>
      </div>

      {/* <div>
        <Image width={32} height={20} src={flags?.svg} alt={flags?.alt} />
      </div> */}
    </div>
  );
};

export default CountryCard;
