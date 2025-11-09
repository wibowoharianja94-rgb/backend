const db = require("../config/mysql");

// 🔹 Ambil semua data katalog
const getCatalogs = (req, res) => {
  const sql = "SELECT * FROM cataloglist ORDER BY id DESC";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: "Error", error: err });
    if (result.length > 0)
      res.status(200).json({ message: "Success", val: result });
    else res.status(200).json({ message: "No Data", val: [] });
  });
};

// 🔹 Tambah catatan baru
const addCatalog = (req, res) => {
  const { title, catatan, tanggal } = req.body;
  if (!title || !catatan || !tanggal)
    return res.status(400).json({ message: "All fields are required" });

  const sql =
    "INSERT INTO cataloglist (title, catatan, tanggal) VALUES (?, ?, ?)";
  db.query(sql, [title, catatan, tanggal], (err, result) => {
    if (err) return res.status(500).json({ message: "Error", error: err });
    res.status(200).json({
      message: "Success",
      val: { id: result.insertId, title, catatan, tanggal },
    });
  });
};

// 🔹 Edit catatan
const editCatalog = (req, res) => {
  const { id, title, catatan, tanggal } = req.body;
  if (!id)
    return res.status(400).json({ message: "ID is required for editing" });

  const sql =
    "UPDATE cataloglist SET title = ?, catatan = ?, tanggal = ? WHERE id = ?";
  db.query(sql, [title, catatan, tanggal, id], (err, result) => {
    if (err) return res.status(500).json({ message: "Error", error: err });
    res.status(200).json({ message: "Success", val: result });
  });
};

// 🔹 Hapus catatan
const deleteCatalog = (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: "ID is required" });

  const sql = "DELETE FROM cataloglist WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ message: "Error", error: err });
    res.status(200).json({ message: "Success", val: result });
  });
};

module.exports = {
  getCatalogs,
  addCatalog,
  editCatalog,
  deleteCatalog,
};
