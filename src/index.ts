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

app.get("/items/:id", (req, res) => {
  const storageItem = storage.find((item) => item.id === req.params.id);

  if (!storageItem) {
    res.status(404).json({ error: "Invalid id" });
    return;
  }

  res.status(200).json(storageItem);
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

app.put("/items/:id", (req, res) => {
  const reqId = req.params.id;
  const reqName = req.body.name;
  const storageItem = storage.find((item) => item.id === reqId);

  if (!storageItem) {
    res.status(404).json({ error: "Invalid id" });
    return;
  }

  if (!reqName) {
    res.status(400).json({ error: "Name is required" });
    return;
  }

  storageItem.name = reqName;

  res.status(200).json(storageItem);
});

app.delete("/items/:id", (req, res) => {
  const reqId = req.params.id;
  const indexToDelete = storage.findIndex((item) => item.id === reqId);

  if (indexToDelete === -1) {
    res.status(404).json({ error: "Invalid id" });
    return;
  }

  storage.splice(indexToDelete, 1);

  res.status(200).json({ message: "Item deleted successfully", id: reqId });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
