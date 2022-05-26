import express from 'express';
import { db } from './database/firebase.js'
import cors from 'cors'
import { config } from 'dotenv'
config()

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/hello-world', (req, res) => {
    return res.status(200).send('Hello World!');
});

app.get('/list', async (req, res) => {
    try {
        const list = await db.collection('lists').doc('/' + req.query.listId + '/').get()
        return res.status(200).send(list.data());
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

async function createOrUpdateListWithId(req) {
    if (req.body.id) {
        await db.collection('lists').doc('/' + req.body.id + '/').set({listItems: req.body.items});
        const updatedListRef = await db.collection('lists').doc(req.body.id)
        return (await updatedListRef.get()).data()
    }
}

app.post('/list', async (req, res) => {
    try {
        console.log('creating list: id:', req.body.id, 'items:', req.body.items)
        return res.status(201).send(await createOrUpdateListWithId(req));
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

app.post('/updateList', async (req, res) => {
    res.status(204).send(await createOrUpdateListWithId(req))
})

app.listen(port, () => {
    console.log(`api listening at http://localhost:${ port }`)
})
