const express = require("express");
const router = express.Router();
const { Campus } = require("../database");

// GET all campuses
router.get("/", async (req, res) => {
  try {
    const campuses = await Campus.findAll();
    res.send(campuses);
    res.sendStatus(200);
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
    if (campus === null) {
      res.sendStatus(404);
      return;
    }
    res.send(campus);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

// POST new campuses
router.get("/", async (req, res) => {
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
router.get("/:id", async (req, res) => {
  try {
    const campusID = Number(req.params.id);
    const campus = await Campus.findByPk(campusID);
    if (campus === null) {
      res.sendStatus(404);
      return;
    }
    await campus.destroy();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

module.exports = router;
