import GunsEntity from "../entities/GunsEntity";
import { EntityRepository, Repository } from "typeorm";

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

    public async findById(id: string): Promise<GunsEntity> {
        const gun = await this.findOne({
            where: {
                id: id,
            },
        });

        return gun;
    }
}

export default GunsRepository;
