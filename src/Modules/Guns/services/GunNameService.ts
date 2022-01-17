import { getCustomRepository } from "typeorm";
import GunsEntity from "../typeorm/entities/GunsEntity";
import GunRepository from "../typeorm/repository/GunsRepository";

interface IUser {
    name: string;
}

class GunNameService {
    public async execute({ name }: IUser): Promise<GunsEntity> {
        const gunRepository = getCustomRepository(GunRepository);

        const gun = await gunRepository.findByName(name);

        return gun;
    }
}

export default GunNameService;
