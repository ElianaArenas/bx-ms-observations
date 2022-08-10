import { IRepository } from '../base.repository';
import { IDomainService } from '../base.service';

export class DomainService<T, U> implements IDomainService<T, U> {
  constructor(private readonly _baseRepo: IRepository<T, U>) {}

  async getAll(): Promise<T[]> {
    return await this._baseRepo.getAll();
  }

  async getById(id: U): Promise<T> {
    return await this._baseRepo.getById(id);
  }
}
