const express = require("express");
const { createBook, getBooks } = require("../controllers/bookController");
const router = express.Router();

router.get("/", getBooks);
router.post("/create", createBook);

module.exports = router;
