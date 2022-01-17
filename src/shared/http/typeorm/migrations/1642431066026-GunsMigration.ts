import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class GunsMigration1642431066026 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: "guns",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "ammo",
                        type: "varchar",
                    },
                    {
                        name: "killAward",
                        type: "varchar",
                    },
                    {
                        name: "damage",
                        type: "int",
                    },
                    {
                        name: "firerate",
                        type: "int",
                    },
                    {
                        name: "recoilControl",
                        type: "int",
                    },
                    {
                        name: "accurateRange",
                        type: "varchar",
                    },
                    {
                        name: "armorPenetration",
                        type: "int",
                    },
                    {
                        name: "type",
                        type: "varchar",
                    },
                    {
                        name: "side",
                        type: "varchar",
                    },
                    {
                        name: "price",
                        type: "int",
                    },
                    {
                        name: "created_at",
                        type: "timestamp with time zone",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp with time zone",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("guns");
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }
}
