import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server"

const uri = "mongodb+srv://kanbanAppTask:NJ7PMZW0i6ye71nZ@cluster0.c8viahs.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const database = client.db("kanbanAppTask");
const taskCollection = database.collection("task");

export async function DELETE(request, content) {
    let id = content.params.id
    try {
        const query = { _id: new ObjectId(id) };
        const result = await taskCollection.deleteOne(query);
        if (result.deletedCount === 1) {
            return NextResponse.json({ result })
        }
    } catch (error) {
        console.log(error);
    }
}