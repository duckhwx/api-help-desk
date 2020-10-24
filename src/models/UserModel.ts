import { v4 as uuidv4 } from 'uuid';

export class User {
    private readonly id!: string;

    private name: string;
    private email: string;
    private password: string;
    private permission: number;

    constructor(name: string, email: string, password: string, permission: number, id?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.permission = permission;
        if (!id) {
            this.id = uuidv4();
        }
    }
}