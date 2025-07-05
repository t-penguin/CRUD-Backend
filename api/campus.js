const express = require("express");
const router = express.Router();
const { Student, Campus, Campus } = require("../database");

// get all campaus
router.get("/", async (req, res) => {
  try {
    const campus = await Campus.findAll(); //it looks through the table and and checks all the rows
    res.status(200).send(campus); //returns a sucessfull
  } catch (error) {
    //if the condtion is not met return error
    console.log("error has accrued ");
  }
  console.log(campus);
});

// req' (request) object in Express JS which is used to represent the incoming HTTP request that consists of data like
//  res' (response) which is used to send the HTTP response to the client which allows the modification of headers and
// consists of status codes, and resources.

// GET campus by ID
router.get("/id", async (req, res) => {
  const userId = req.params.id; //Acess the primary key from the user URL
  try {
    const ID = await Campus.findByPk(id); //find a entry from a table using provied key
    if()
  } catch (error) {
    console.log("error has accrued");
  }
});

// POST new campuses

// PUT campus by ID

// DELETE campus by ID
