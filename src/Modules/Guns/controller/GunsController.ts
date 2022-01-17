import { Request, Response } from "express";

import CreateGunsService from "../services/CreateGunsService";
import ListGunsService from "../services/ListGunsService";

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
}