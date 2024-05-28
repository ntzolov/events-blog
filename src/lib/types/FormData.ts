export type FormDataTypes = {
  title: string;
  description: string;
  image_url: string;
  date: string;
};

export type FormHandlerType<T> = {
  T: () => void;
};
