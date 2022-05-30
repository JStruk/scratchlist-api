import { db } from "../database/firebase.js";

export async function CreateList() {
   const listRef = await db.collection('lists').add({ listItems: [] })
   const newList = await listRef.get()
   const data = await newList.data()
   return {
      id: listRef.id,
      ...data
   }
}