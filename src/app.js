import express from "express";

const app = express();

const books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

export default app;
