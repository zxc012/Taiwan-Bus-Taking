declare type stopInfo = {
  id: string;
  name: string;
  position: position;
  routes: Array<routeInfo>;
};

declare type position = {
  latitude: number;
  longitude: number;
};

declare type routeInfo = {
  name: string;
  id: string;
};
