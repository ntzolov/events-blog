export type FormDataTypes = {
  title: string;
  description: string;
  image_url: string;
  date: string;
  user?: string;
};

export type FormHandlerType<T> = {
  T: () => void;
};
