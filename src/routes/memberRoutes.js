const express = require("express");
const {
  getMembers,
  getBookByMember,
  createMember,
} = require("../controllers/memberController");
const router = express.Router();

router.get("/", getMembers);
router.get("/getBookByMember", getBookByMember);
router.post("/create", createMember);

module.exports = router;
