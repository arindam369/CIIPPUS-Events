import { MongoClient } from "mongodb";

export default async function handler(req, res){
    if(req.method === "POST"){
        const {email} = req.body;
        console.log(email);
        if(!email || !email.includes("@")){
            res.status(400).json({message: "Invalid email input"});
        }
        console.log(email);
        const client = await MongoClient.connect("mongodb://localhost:27017/ciippus-api");
        const db = client.db();
        await db.collection("emails").insertOne({email: email}).then((response)=>{
            // console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
        client.close();

        res.status(200).json({message: "Email subscribed successfully"});
    }
    res.status(403).json({message: "This Method is not allowed"})
}