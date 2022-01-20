import {
    EntityRepository,
    Like,
    Repository,
    CollectionDistinctOptions,
} from "typeorm";

import GunsEntity from "../entities/GunsEntity";

@EntityRepository(GunsEntity)
class GunsRepository extends Repository<GunsEntity> {
    public async findByName(name: string): Promise<GunsEntity[]> {
        const gun = await this.find({
            where: {
                name: Like(`%${name}%`),
            },
        });

        return gun;
    }

    public async findById(gunId: string): Promise<GunsEntity | undefined> {
        const gun = await this.findOne({
            where: {
                id: gunId,
            },
            order: {
                type: "ASC",
                id: "DESC",
            },
        });

        return gun;
    }

    public async findByType(type: string): Promise<GunsEntity[] | undefined> {
        const gun = await this.find({
            where: {
                type: Like(`%${type}%`),
            },
            order: {
                name: "ASC",
                id: "DESC",
            },
        });

        return gun;
    }

    public async findBySide(side: string): Promise<GunsEntity[] | undefined> {
        const gun = await this.find({
            where: {
                side: Like(`%${side}%`),
            },
            order: {
                type: "ASC",
                id: "DESC",
            },
        });

        return gun;
    }
}

export default GunsRepository;
