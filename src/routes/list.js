import express from 'express';
import { db } from "../database/firebase.js";
import { createOrUpdateListWithId } from "../utils/createOrUpdateListWithId.js";

export const listRouter = express.Router();

listRouter.get('/list', async (req, res) => {
    try {
        const list = await db.collection('lists').doc('/' + req.query.listId + '/').get()
        return res.status(200).send(list.data());
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

listRouter.post('/list', async (req, res) => {
    try {
        console.log('creating list: id:', req.body.id, 'items:', req.body.items)
        return res.status(201).send(await createOrUpdateListWithId(req));
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

