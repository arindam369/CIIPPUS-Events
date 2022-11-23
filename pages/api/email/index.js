import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      res.status(400).json({ message: "Invalid email input", type:"error" });
    }
    
    try {
      // const client = await MongoClient.connect("mongodb://localhost:27017/ciippus-api");
      const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.hspwrdh.mongodb.net/ciippus-api?retryWrites=true&w=majority`);
      const db = client.db();
      await db
        .collection("emails")
        .insertOne({ email: email })
        .then((response) => {
            // console.log(response);
        })
        .catch((err) => {
          throw new Error({error: err});
        });
      client.close();
    } catch (err) {
      res.status(400).json({ message: "Database is not working", type:"error" });
    }

    res.status(200).json({ message: "Email subscribed successfully", type:"success" });
  }
  res.status(403).json({ message: "This Method is not allowed", type:"error" });
}
