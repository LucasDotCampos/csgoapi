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

    public async findById(gunId: string): Promise<GunsEntity | undefined> {
        const gun = await this.findOne({
            where: {
                id: gunId,
            },
        });

        return gun;
    }
}

export default GunsRepository;
