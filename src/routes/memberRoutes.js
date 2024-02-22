const express = require("express");
const {
  getMembers,
  getBookByMember,
} = require("../controllers/memberController");
const router = express.Router();

router.get("/", getMembers);
router.post("/getBookByMember", getBookByMember);

module.exports = router;
