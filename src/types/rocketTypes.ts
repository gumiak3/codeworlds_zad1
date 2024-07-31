export type RocketType = {
  id: string;
  name: string;
  imageUrl: string;
  firstFlightDate: string;
  country: string;
  active: boolean;
};

export type RocketDetailType = {
  active: boolean;
  country: string;
  description: string;
  firstFlight: string;
  images: string[];
  name: string;
};
