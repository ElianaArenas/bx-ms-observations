export interface IDomainService<T, U> {
  create: (domain: T) => Promise<T>;
  delete: (id: U) => Promise<boolean>;
  update: (domain: T) => Promise<boolean>;
  getAll: () => Promise<T[]>;
  getById: (id: U) => Promise<T>;
}
