const handler = (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    console.log(userEmail);
    res.status(200).json({ message: "Successfully entered email" });
    return;
  }
};

export default handler;