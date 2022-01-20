import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddPictureColumnToGuns1642701863869 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "guns",
            new TableColumn({
                name: "picture",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("guns", "picture");
    }
}
