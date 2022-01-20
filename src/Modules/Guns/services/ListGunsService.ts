import { getRepository } from "typeorm";
import GunsEntity from "../typeorm/entities/GunsEntity";

class ListUsersService {
    public async execute(): Promise<GunsEntity[]> {
        const gunsRepository = getRepository(GunsEntity);

        const guns = await gunsRepository.find({
            order: {
                type: "ASC",
                id: "DESC",
            },
        });

        return guns;
    }
}

export default ListUsersService;
