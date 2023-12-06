import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const eventId = req.query.eventId;
  const client = await MongoClient.connect(
    "mongodb+srv://cosovicnenad14:arsenal95@cluster0.0rzttmk.mongodb.net/comments?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !text ||
      name.trim().length === 0 ||
      text.trim().length === 0
    ) {
      res.status(422).json({ message: "Invalid comment!" });
      return;
    }

    const comment = {
      email,
      name,
      text,
      eventId,
    };

    console.log(comment);
    const db = client.db();
    const result = await db.collection("comment").insertOne(comment);

    res.status(200).json({ message: "Successfully added comment!", result });
  }

  client.close();
};

export default handler;
