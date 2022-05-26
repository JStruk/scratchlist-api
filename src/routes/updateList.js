import { Router } from "express";
import { createOrUpdateListWithId } from "../utils/createOrUpdateListWithId";

export const updateListRouter = Router()

updateListRouter.post('/updateList', async (req, res) => {
    res.status(204).send(await createOrUpdateListWithId(req))
})