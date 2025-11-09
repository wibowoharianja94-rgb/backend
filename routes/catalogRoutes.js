const express = require("express");
const router = express.Router();
const {
  getCatalogs,
  addCatalog,
  editCatalog,
  deleteCatalog,
} = require("../controllers/catalogController");

router.post("/get", getCatalogs);
router.post("/add", addCatalog);
router.post("/edit", editCatalog);
router.post("/delete", deleteCatalog);

module.exports = router;
