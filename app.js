const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const CatalogRoutes = require("./routes/catalogRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/catalog", CatalogRoutes);

app.get("/", (req, res) => {
  res.send("Backend My Catalog");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} `);
});