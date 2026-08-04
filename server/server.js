const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Our database for this assignment
let notes = [];
let nextId = 1;

// TODO 1: GET /api/notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// TODO 2: POST /api/notes
app.post("/api/notes", (req, res) => {
  const newNote = {
    id: nextId++,
    title: req.body.title,
    content: req.body.content,
    createdAt: new Date(),
  };

  notes.push(newNote);

  res.status(201).json(newNote);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});