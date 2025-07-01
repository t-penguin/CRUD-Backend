const express = require("express");
const router = express.Router();
const { Duck } = require("../database");

// GET all ducks
router.get("/", async (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
