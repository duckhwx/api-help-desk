import { ICreateUserRequestDTO } from './CreateUserDTO';

export interface IUserRepository {
    findByUsername(id: string): Promise<string>;
    create(user: ICreateUserRequestDTO): Promise<void>;
}