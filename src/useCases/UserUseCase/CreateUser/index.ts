import {CreateUserUseCase} from './CreateUserUseCase';
import {User} from '../../../entity/User'
import { CreateUserController } from './CreateUserController';

const user = new User();
const useCase = new CreateUserUseCase(user);
const userController = new CreateUserController(useCase);

export { useCase, userController };