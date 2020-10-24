import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    constructor (
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handleRequest(request: Request, response: Response): Promise<Response> {
        const {userName, name, email, password, permission} = request.body;

        try {
            await this.createUserUseCase.create({
                userName,
                name,
                email,
                password,
                permission
            })
            return response.status(201).send();
        } catch (err) {
            return response.status(400).send('Error');
        }
    }
}