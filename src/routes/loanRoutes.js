const express = require("express");
const { createLoan, returnBook } = require("../controllers/loanController");
const router = express.Router();

// router.get("/", getBooks);
router.post("/create", createLoan);
router.post("/return", returnBook);

module.exports = router;
