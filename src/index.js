import express from 'express';
import cors from 'cors'
import { config } from 'dotenv'
import { listRouter } from "./routes/list.js";
import { updateListRouter } from "./routes/updateList";

config()

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(listRouter);
app.use(updateListRouter)

app.listen(port, () => {
    console.log(`api listening at http://localhost:${ port }`)
})
