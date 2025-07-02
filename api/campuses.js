const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../database");

// GET all campuses
router.get("/", async (req, res) => {
  try {
    const campuses = await Campus.findAll();
    res.status(200).send(campuses);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

// GET campus by ID
router.get("/:id", async (req, res) => {
  try {
    const campusID = Number(req.params.id);
    const campus = await Campus.findByPk(campusID);
    if (campus === null)
      return res.sendStatus(404);

    const students = await Student.findAll({where: {campusId: campusID}});
    const campusDetails = {
      campus: campus,
      students: students,
    }
    res.status(200).send(campusDetails);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

// POST new campuses
router.post("/", async (req, res) => {
  try {
    const campus = req.body;
    await Campus.create(campus);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

// DELETE campus by ID
router.delete("/:id", async (req, res) => {
  try {
    const campusID = Number(req.params.id);
    const campus = await Campus.findByPk(campusID);
    if (campus === null) 
      return res.sendStatus(404);

    await campus.destroy();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

module.exports = router;
