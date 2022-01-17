import { getCustomRepository } from "typeorm";

import GunsEntity from "../typeorm/entities/GunsEntity";
import GunsRepository from "../typeorm/repository/GunsRepository";

interface IGuns {
    name: string;
    ammo: string;
    killAward: string;
    damage: number;
    firerate: number;
    recoilControl: number;
    accurateRange: string;
    armorPenetration: number;
    type: string;
    side: string;
    price: string;
}

class CreateGunsService {
    public async execute({
        name,
        ammo,
        killAward,
        damage,
        firerate,
        recoilControl,
        accurateRange,
        armorPenetration,
        type,
        side,
        price,
    }: IGuns): Promise<GunsEntity> {
        const gunsRepository = getCustomRepository(GunsRepository);
        const nameExists = await gunsRepository.findByName(name);

        if (nameExists) {
            throw new Error("The gun is registered already");
        }

        const gun = gunsRepository.create({
            name,
            ammo,
            killAward,
            accurateRange,
            armorPenetration,
            damage,
            firerate,
            price,
            side,
            type,
            recoilControl,
        });

        await gunsRepository.save(gun);
        return gun;
    }
}

export default CreateGunsService;
