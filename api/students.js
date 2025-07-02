const express = require("express");
const router = express.Router();
const { Student } = require("../database");

// GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).send(students);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

// GET student by ID
router.get("/:id", async (req, res) => {
  try {
    const studentID = Number(req.params.id);
    const student = await Student.findByPk(studentID);
    if (student === null)
      return res.sendStatus(404);
    
    res.status(200).send(student);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

// POST new student
router.post("/", async (req, res) => {
  try {
    const student = req.body;
    await Student.create(student);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

// DELETE student by ID
router.delete("/:id", async (req, res) => {
  try {
    const studentID = Number(req.params.id);
    const student = await Student.findByPk(studentID);
    if (student === null)
      return res.sendStatus(404);
    
    await student.destroy();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

module.exports = router;
