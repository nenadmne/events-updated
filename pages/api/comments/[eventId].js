const handler = (req, res) => {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const text = req.body.text;
  }

  if (req.method === "GET") {
  }
};

export default handler;
