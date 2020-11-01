import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    constructor (
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handleRequest(request: Request, response: Response): Promise<Response> {

        const {username, name, email, permission} = request.body;

        try {
            await this.createUserUseCase.create({
                username,
                name,
                email,
                permission
            })
            return response.status(201).send('');
        } catch (err) {
            return response.status(400).send('Error');
        }
    }
}