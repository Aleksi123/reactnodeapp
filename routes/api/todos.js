const express = require("express");
const router = express.Router();

const { Todo } = require("../../models");

// GET all todos
router.get("/", (req, res) => {
  Todo.findAll().then((todos) => res.json(todos));
});

// POST new todo
router.post("/", async (req, res) => {
  const { title, content } = req.body;

  try {
    const todo = await Todo.create({
      title,
      content,
    });
    return res.json(todo);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
