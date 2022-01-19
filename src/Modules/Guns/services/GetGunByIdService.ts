import { getCustomRepository } from "typeorm";

import GunsEntity from "../typeorm/entities/GunsEntity";
import GunRepository from "../typeorm/repository/GunsRepository";

interface IGunById {
    gunId: string;
}
interface IGunByType {
    type: string;
}
interface IGetBySide {
    side: string;
}

class GetGunByIdService {
    public async execute({ gunId }: IGunById): Promise<GunsEntity[]> {
        const gunRepository = getCustomRepository(GunRepository);

        const gun = await gunRepository.findById(gunId);

        return gun;
    }

    public async getByType({ type }: IGunByType): Promise<GunsEntity[]> {
        const gunRepository = getCustomRepository(GunRepository);
        const gun = await gunRepository.findByType(type);
        return gun;
    }

    public async getBySide({ side }: IGetBySide): Promise<GunsEntity[]> {
        const gunRepository = getCustomRepository(GunRepository);
        const gun = await gunRepository.findBySide(side);
        return gun;
    }
}

export default GetGunByIdService;
