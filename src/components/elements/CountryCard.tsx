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
  return <div></div>;
};

export default CountryCard;
