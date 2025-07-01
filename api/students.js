const express = require("express");
const router = express.Router();
const { Students } = require("../database");

// GET all students
router.get("/", async (req, res) => {
  
});

// GET student by ID
router.get("/:id", async (req, res) => {
  
});

// POST new student
router.post("/", async (req, res) => {

});

// DELETE student by ID
router.delete("/:id", async (req, res) => {

});

module.exports = router;
