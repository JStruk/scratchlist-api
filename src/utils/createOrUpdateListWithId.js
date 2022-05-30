import { db } from "../database/firebase.js";

export async function createOrUpdateListWithId(id, items) {
    await db.collection('lists').doc('/' + id + '/').set({listItems: items});
    const updatedListRef = await db.collection('lists').doc(id)
    return (await updatedListRef.get()).data()
}