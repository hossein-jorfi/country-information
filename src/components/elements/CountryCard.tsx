type CountryCardProps = {
  name: {
    common: string;
    official: string;
    region: string;
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    //     native: {
    //       common: string;
    //       official: string;
    //     };
  };
};

const CountryCard = ({ name }: CountryCardProps) => {
  return (
    <div
      className="p-5 w-80 h-44 !border-opacity-50 rounded-lg 
    bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
    "
    >
      <div>card</div>
    </div>
  );
};

export default CountryCard;
