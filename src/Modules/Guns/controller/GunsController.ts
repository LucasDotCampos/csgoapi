import { Request, Response } from "express";

import CreateGunsService from "../services/CreateGunsService";
import GetGunByIdService from "../services/GetGunByIdService";
import GunNameService from "../services/GunNameService";
import ListGunsService from "../services/ListGunsService";
import UpdateGunsService from "../services/UpdateGunsService";

export default class GunsController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const {
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
            } = request.body;

            const createGunsService = new CreateGunsService();
            const gun = await createGunsService.execute({
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
            });

            return response.status(200).json(gun);
        } catch (err) {
            return response.status(409).json(err.message);
        }
    }

    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        const listGunsServices = new ListGunsService();

        const guns = await listGunsServices.execute();
        return response.json(guns);
    }

    public async GetByName(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const name = request.params.name.toUpperCase();
            const gunNameService = new GunNameService();

            const guns = await gunNameService.execute({ name });

            return response.status(200).json(guns);
        } catch (err) {
            return response.json(err.message);
        }
    }

    public async GetByType(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const type = request.params.type.toUpperCase();

            const getGunByIdService = new GetGunByIdService();

            const guns = await getGunByIdService.getByType({ type });

            return response.status(200).json(guns);
        } catch (err) {
            return response.json(err.message);
        }
    }

    public async GetBySide(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const side = request.params.side.toUpperCase();
            const getGunByIdService = new GetGunByIdService();

            const guns = await getGunByIdService.getBySide({ side });

            return response.status(200).json(guns);
        } catch (err) {
            return response.json(err.message);
        }
    }

    public async GetById(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { gunId } = request.params;
            const getGunByIdService = new GetGunByIdService();

            const guns = await getGunByIdService.execute({ gunId });

            return response.status(200).json(guns);
        } catch (err) {
            return response.json(err.message);
        }
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { gunId } = request.params;
            const {
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
                picture,
            } = request.body;

            const updateGunsService = new UpdateGunsService();

            const gun = await updateGunsService.execute({
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
            });
            return response.json(gun);
        } catch (err) {
            return response.status(404).json(err);
        }
    }
}
