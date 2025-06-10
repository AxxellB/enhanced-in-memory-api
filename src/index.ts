import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3000;

type Item = {
  id: string;
  name: string;
};

const storage: Item[] = [];

app.use(express.json());

app.get("/items", (_req, res) => {
  res.status(200).json(storage);
});

app.post("/items", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ error: "Name is required" });
    return;
  }

  const newItem: Item = {
    id: uuidv4(),
    name: name,
  };

  storage.push(newItem);
  res.status(201).json(newItem);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
