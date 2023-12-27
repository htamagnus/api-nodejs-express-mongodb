import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

connection.on("error", (error) => {
  console.error("Connection error", error);
});

connection.once("open", () => {
  console.log("Connection to the database successful");
});

const app = express();
routes(app);

app.delete("/books/:id", (req, res) => {
  const index = findBook(req.params.id);
  books.splice(index, 1);
  res.status(200).send("Book removed successfully");
});

export default app;
