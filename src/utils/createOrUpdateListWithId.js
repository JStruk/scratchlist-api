import { db } from "../database/firebase.js";

export async function createOrUpdateListWithId(req) {
    if (req.body.id) {
        await db.collection('lists').doc('/' + req.body.id + '/').set({listItems: req.body.items});
        const updatedListRef = await db.collection('lists').doc(req.body.id)
        return (await updatedListRef.get()).data()
    }
}