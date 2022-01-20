import { getCustomRepository } from "typeorm";

import GunsEntity from "../typeorm/entities/GunsEntity";
import GunsRepository from "../typeorm/repository/GunsRepository";

interface IRequest {
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
    gunId: string;
    picture: string;
}

class UpdateGunsService {
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
        gunId,
        picture,
    }: IRequest): Promise<GunsEntity> {
        const gunRepository = getCustomRepository(GunsRepository);
        const gun = await gunRepository.findById(gunId);

        if (!gun) {
            throw new Error("Gun not found.");
        }

        const gunUpdateName = await gunRepository.findBySpecificName(name);

        if (gunUpdateName && gunUpdateName.name !== name) {
            throw new Error("This gun is already registered");
        }

        gun.ammo = ammo;
        gun.killAward = killAward;
        gun.accurateRange = accurateRange;
        gun.armorPenetration = armorPenetration;
        gun.damage = damage;
        gun.firerate = firerate;
        gun.name = name;
        gun.side = side;
        gun.type = type;
        gun.recoilControl = recoilControl;
        gun.price = price;
        gun.picture = picture;

        await gunRepository.save(gun);
        return gun;
    }
}

export default UpdateGunsService;
