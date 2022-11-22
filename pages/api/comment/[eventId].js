import { MongoClient } from "mongodb";


export default async function handler(req, res){
    const {eventId} = req.query;

    const client = await MongoClient.connect("mongodb://localhost:27017/ciippus-api");
    const db = client.db();

    if(req.method === "POST"){
        const {name, email, comment} = req.body;
        if(name.trim() === "" || email.trim() === "" || comment.trim() === "" || !email.includes("@")){
            return res.status(400).json({message: "Invalid Input"});
        }
        const newComment = {
            id: new Date().toISOString(),
            name: name,
            email: email,
            comment: comment,
            eventId: eventId
        }
        
        // save this newComment in database
        await db.collection("comments").insertOne(newComment);

        res.status(200).json({message: "successfully added comment", comment: newComment});

    }
    else if(req.method === "GET"){
        const comments = await db.collection("comments").find({eventId: eventId}).sort({_id: -1}).toArray();
        res.status(200).json({message: "Successfully retrieved all comments", comment: comments});
    }
    client.close();
}