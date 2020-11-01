import {MigrationInterface, QueryRunner} from "typeorm";

export class addPasswordColumn1604183733414 implements MigrationInterface {
    name = 'addPasswordColumn1604183733414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" nvarchar(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
