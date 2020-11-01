import { ICreateUserRequestDTO } from "@repositories/userRepository/CreateUserDTO";
import { IUserRepository } from "@repositories/userRepository/IUserRepository";
import {Entity, PrimaryGeneratedColumn, Column, getRepository} from "typeorm";
import db from '../database/database';

@Entity()
export class User implements IUserRepository{

    @PrimaryGeneratedColumn()
    readonly id!: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column({ nullable: true })
    password: string;

    @Column()
    permission: number;

    async create (params: ICreateUserRequestDTO) {

        try {
            const connection = await db.connection();
            const repository = getRepository(User);
    
            await repository.save(params);
            await connection.close();

        } catch (error) {

            throw new Error(error);
        }
    }

    async findByUsername () {
        return '';
    }
}
