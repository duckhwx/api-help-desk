import { User } from '../models/UserModel';
export interface IUserRepository {
    findByUsername(id: string): Promise<User>;
    create(user: User): Promise<void>;
}