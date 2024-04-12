export type CountryType = {
  region: string;
  navigateString: string;
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
  population: number;
  capital: string;
};
