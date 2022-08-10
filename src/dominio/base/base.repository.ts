export interface IRepository<T, U> {
  create: (domain: T) => Promise<T>;
  getAll: () => Promise<T[]>;
  getById: (id: U) => Promise<T>;
}
