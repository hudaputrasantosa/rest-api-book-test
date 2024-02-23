const express = require("express");
const {
  createLoan,
  returnBook,
  getLoans,
} = require("../controllers/loanController");
const router = express.Router();

router.get("/", getLoans);
router.post("/create", createLoan);
router.post("/return", returnBook);

module.exports = router;
