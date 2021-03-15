const express = require('express');
const router = express.Router();

const { Todo } = require("../../models");

// GET all todos
router.get('/', (req, res) => {
  Todo.findAll()
    .then(todos => res.json(todos))
});

module.exports = router;
