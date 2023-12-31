import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

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

export async function GET(request) {
    try {
        const result = await taskCollection.find({}).toArray();
        // console.log(result);
        return NextResponse.json(result)
    }
    finally { }
}

export async function POST(request) {
    try {
        const body = await request.json()
        console.log(body);
        const result = await taskCollection.insertOne(body);
        return NextResponse.json(result)
    } catch (error) {
        console.log(error);
    }
}

