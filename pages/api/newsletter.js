import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://cosovicnenad14:arsenal95@cluster0.0rzttmk.mongodb.net/events?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("emails").insertOne({ email: userEmail });
    client.close();

    res.status(200).json({ message: "Successfully entered email" });
    return;
  }
};

export default handler;
