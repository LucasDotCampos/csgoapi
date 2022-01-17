import { getRepository } from "typeorm";
import GunsEntity from "../typeorm/entities/GunsEntity";

class ListUsersService {
    public async execute(): Promise<GunsEntity[]> {
        const gunsRepository = getRepository(GunsEntity);

        const guns = await gunsRepository.find();

        return guns;
    }
}

export default ListUsersService;
