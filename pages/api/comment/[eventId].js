import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { eventId } = req.query;

  try {
    const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.hspwrdh.mongodb.net/ciippus-api?retryWrites=true&w=majority`);
    const db = client.db();

    if (req.method === "POST") {
      const { name, email, comment } = req.body;
      if (name.trim() === "" || email.trim() === "" || comment.trim() === "" || !email.includes("@")) {
        return res.status(400).json({ message: "Invalid Input", type: "error" });
      }
      const newComment = {
        id: new Date().toISOString(),
        name: name,
        email: email,
        comment: comment,
        eventId: eventId,
      };

      // save this newComment in database
      await db
        .collection("comments")
        .insertOne(newComment)
        .then((response) => {
            console.log(response);
            res.status(200).json({
          message: "successfully added comment",
          comment: newComment,
          type: "success",
        });
        })
        .catch((err) => {
          throw new Error({error: err});
        });
      
    } else if (req.method === "GET") {
      const comments = await db
        .collection("comments")
        .find({ eventId: eventId })
        .sort({ _id: -1 })
        .toArray();
      res
        .status(200)
        .json({
          message: "Successfully retrieved all comments",
          comment: comments,
          type: "success",
        });
    }
    client.close();
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "Unable to add your comment", type: "error" });
  }
}
