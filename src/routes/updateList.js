import { Router } from "express";
import { createOrUpdateListWithId, createOrUpdateListTitle } from "../utils/createOrUpdateListWithId.js";
import { db } from "../database/firebase.js";

export const updateListRouter = Router()

updateListRouter.post('/updateList', async (req, res) => {
    const listRef = await db.collection('lists').doc('/' + req.body.id + '/')
    const list = await listRef.get()
    if (list.exists) {
        res.status(204).send(await createOrUpdateListWithId(req.body.id, req.body.items))
    }
    res.status(404)
})

updateListRouter.post('/updateList/title', async (req, res) => {
    console.log('id: ', req.body.id)
    const listRef = await db.collection('lists').doc('/' + req.body.id + '/')
    const list = await listRef.get()
    if (list.exists) {
        res.status(204).send(await createOrUpdateListTitle(req.body.id, req.body.title))
    }
    res.status(404)
})