import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

type Item = {
  id: string;
  name: string;
};

const storage: Item[] = [];

const itemsRouter = Router();

itemsRouter.get("/", (_req, res) => {
  res.status(200).json(storage);
});

itemsRouter.get("/:id", (req, res) => {
  const storageItem = storage.find((item) => item.id === req.params.id);

  if (!storageItem) {
    res.status(404).json({ error: "Invalid id" });
    return;
  }
  res.status(200).json(storageItem);
});

itemsRouter.post("/", (req, res) => {
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

itemsRouter.put("/:id", (req, res) => {
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

itemsRouter.delete("/:id", (req, res) => {
  const reqId = req.params.id;
  const indexToDelete = storage.findIndex((item) => item.id === reqId);

  if (indexToDelete === -1) {
    res.status(404).json({ error: "Invalid id" });
    return;
  }
  storage.splice(indexToDelete, 1);
  res.status(200).json({ message: "Item deleted successfully", id: reqId });
});

export default itemsRouter;
