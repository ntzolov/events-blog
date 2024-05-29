export type EventsDataTypes = {
  title: string;
  description: string;
  image_url: string;
  date: string;
  user?: string;
  id?: string;
};

export type EventsHandlerType<T> = {
  T: () => void;
};
