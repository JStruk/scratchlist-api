import { Router } from "express";
import { createOrUpdateListWithId } from "../utils/createOrUpdateListWithId.js";
import { db } from "../database/firebase.js";

export const updateListRouter = Router()

updateListRouter.post('/updateList', async (req, res) => {
    const listRef = await db.collection('lists').doc('/' + req.body.id + '/')
    const list = await listRef.get()
    if(list.exists) {
        res.status(204).send(await createOrUpdateListWithId(req))
    }
    res.status(404)
})