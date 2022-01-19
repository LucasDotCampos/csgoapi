import { EntityRepository, Like, Repository } from "typeorm";

import GunsEntity from "../entities/GunsEntity";

@EntityRepository(GunsEntity)
class GunsRepository extends Repository<GunsEntity> {
    public async findByName(name: string): Promise<GunsEntity> {
        const gun = await this.findOne({
            where: {
                name,
            },
        });

        return gun;
    }

    public async findById(gunId: string): Promise<GunsEntity | undefined> {
        const gun = await this.findOne({
            where: {
                id: gunId,
            },
        });

        return gun;
    }

    public async findByType(type: string): Promise<GunsEntity[] | undefined> {
        const gun = await this.find({
            where: {
                type: type,
            },
        });

        return gun;
    }

    public async findBySide(side: string): Promise<GunsEntity[] | undefined> {
        const gun = await this.find({
            where: {
                side: side,
            },
            order: {
                name: "ASC",
                id: "DESC",
            },
        });

        return gun;
    }

    public async findByLetter(any: string): Promise<GunsEntity[] | undefined> {
        const gun = await this.find({
            name: Like(`%${any}%`),
        });

        return gun;
    }
}

export default GunsRepository;
