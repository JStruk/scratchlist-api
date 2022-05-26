import express from 'express';
import { db } from './database/firebase.js'
import cors from 'cors'
import { config } from 'dotenv'
import { createOrUpdateListWithId } from "./utils/createOrUpdateListWithId.js";
import { listRouter } from "./routes/list.js";

config()

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(listRouter);

app.post('/updateList', async (req, res) => {
    res.status(204).send(await createOrUpdateListWithId(req))
})

app.listen(port, () => {
    console.log(`api listening at http://localhost:${ port }`)
})
