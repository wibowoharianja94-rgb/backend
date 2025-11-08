const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const todolistRoutes = require("./routes/todo")

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/todo", todolistRoutes);

app.get("/", (req, res) => {
  res.send("Server backend");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} `);
});