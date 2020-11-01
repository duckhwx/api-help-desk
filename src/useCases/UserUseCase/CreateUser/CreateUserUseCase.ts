import { IUserRepository } from "@repositories/userRepository/IUserRepository";
import { ICreateUserRequestDTO } from "@repositories/userRepository/CreateUserDTO";

export class CreateUserUseCase {
    constructor (
        private usersRepository: IUserRepository
    ) {}

    async create(params: ICreateUserRequestDTO) {
        
            const userAlredyExists = await this.usersRepository.findByUsername(params.username);

            // if (userAlredyExists) {
            //     throw new Error('User exists!');
            // }

            this.usersRepository.create({
                email: params.email, 
                name: params.name, 
                username: params.username, 
                permission: params.permission
            });
    }
}