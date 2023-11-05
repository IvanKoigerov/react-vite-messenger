export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type AnyObjectWithError<T> = {
  [P in keyof T]: T[P];
} & {
  error: unknown;
  isLoading?: boolean | null;
};
