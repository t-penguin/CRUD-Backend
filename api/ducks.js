const express = require("express");
const router = express.Router();
const { Student } = require("../database"); //for handling requests related to students

// students
router.get("/", async (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
