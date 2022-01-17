import { getCustomRepository } from "typeorm";
import GunsEntity from "../typeorm/entities/GunsEntity";
import GunRepository from "../typeorm/repository/GunsRepository";

interface IUser {
    gunId: string;
}
class GetGunByIdService {
    public async execute({ gunId }: IUser): Promise<GunsEntity> {
        const gunRepository = getCustomRepository(GunRepository);

        const gun = await gunRepository.findById(gunId);

        return gun;
    }
}

export default GetGunByIdService;
