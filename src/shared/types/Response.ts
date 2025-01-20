export interface Response<T> {
    items: T[];
    total: number;
    skip: number;
    limit: number;
  }
  