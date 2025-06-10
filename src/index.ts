import express from "express";
import itemsRouter from "./routes/items";
import globalErrorHandler from "./middleware/errorHandlerMiddleware";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/items", itemsRouter);

app.get("/validate-and-fail", (req, res, next) => {
  //This endpoint is only for testing the global error handling middleware
  const isValid = false;
  if (!isValid) {
    throw new Error("Validation failed for the request!");
  }
  res.status(200).json({ message: "Validation passed!" });
});

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
