const db = require("../config/mysql");

const getTodos = (req, res) => {
  const sql = "SELECT * FROM todos ORDER BY id DESC";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: "Error", error: err });
    if (result.length > 0)
      res.status(200).json({ message: "Success", val: result });
    else res.status(200).json({ message: "No Data", val: [] });
  });
};

const addTodo = (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ message: "Task is required" });

  db.query("INSERT INTO todos (task) VALUES (?)", [task], (err, result) => {
    if (err) return res.status(500).json({ message: "Error", error: err });
    res.status(200).json({
      message: "Success",
      val: { id: result.insertId, task, status: 0 },
    });
  });
};

const updateTodo = (req, res) => {
  const { id, task, status } = req.body;

  if (task !== undefined) {
    db.query("UPDATE todos SET task = ? WHERE id = ?", [task, id], (err, result) => {
      if (err) return res.status(500).json({ message: "Error", error: err });
      res.status(200).json({ message: "Success", val: result });
    });
  } else if (status !== undefined) {
    db.query("UPDATE todos SET status = ? WHERE id = ?", [status, id], (err, result) => {
      if (err) return res.status(500).json({ message: "Error", error: err });
      res.status(200).json({ message: "Status updated", val: result });
    });
  } else {
    res.status(400).json({ message: "No valid data provided" });
  }
};

const deleteTodo = (req, res) => {
  const { id } = req.body;
  db.query("DELETE FROM todos WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ message: "Error", error: err });
    res.status(200).json({ message: "Todo deleted", val: result });
  });
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
