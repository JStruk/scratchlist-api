import express from 'express';
import { db } from "../database/firebase.js";
import { createOrUpdateListWithId } from "../utils/createOrUpdateListWithId.js";
import { CreateList } from "../utils/CreateList.js";

export const listRouter = express.Router();

listRouter.get('/list', async (req, res) => {
    try {
        const list = await db.collection('lists').doc('/' + req.query.listId + '/').get()
        return res.status(200).send({ id: list.id, ...list.data() });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

listRouter.post('/list', async (req, res) => {
    try {
        if (req.body.id) {
            console.log('creating list: id:', req.body.id, 'items:', req.body.items)
            return res.status(201).send(await createOrUpdateListWithId(req.body.id, req.body.items));
        }
        console.log('creating new list');
        return res.status(201).send(await CreateList())
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

