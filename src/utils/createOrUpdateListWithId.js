import { db } from "../database/firebase.js";

export async function createOrUpdateListWithId(id, items) {
    await db.collection('lists').doc('/' + id + '/').update("listItems", items);
    const updatedListRef = await db.collection('lists').doc(id)
    return (await updatedListRef.get()).data()
}

export async function createOrUpdateListTitle(id, title) {
    await db.collection('lists').doc('/' + id + '/').update("title", title);
    const updatedListRef = await db.collection('lists').doc(id)
    return (await updatedListRef.get()).data()
}
