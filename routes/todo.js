const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");

router.post("/get", todoController.getTodos);
router.post("/add", todoController.addTodo);
router.post("/edit", todoController.updateTodo);
router.post("/delete", todoController.deleteTodo);

module.exports = router;