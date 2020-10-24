import { User } from "../../../models/UserModel";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor (
        private usersRepository: IUserRepository
    ) {}

    async create(params: ICreateUserRequestDTO) {
        
            const userAlredyExists = await this.usersRepository.findByUsername(params.userName);

            if (userAlredyExists) {
                throw new Error('User exists!');
            }

            const user = new User(params.name, params.email, params.password, params.permission);
    }
}