export type Restaurants = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  image: string;
  price_range: number;
  open: boolean;
  description: string;
  map: string;
  createdAt: string;
};

export type Cuisines = {
  id: string;
  name: string;
};

export type Reviews = {
  name: string;
  rating: number;
  description: string;
};
