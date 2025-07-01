const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const db = require("./db");

const Student = db.define("student", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true, // somthing
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  gpa: {
    //gpa - decimal between 0.0 and 4.0
    type: DataTypes.FLOAT,
    allowNull: false, //the coloum has some sort of value
    validate: {
      max: 4.0,
      min: 0.0,
    },
  },

  Image: {
    type: DataTypes.BLOB,
    allowNull: false, //wont allow a coloum to be left blank
  },

  email: {
    type: DataTypes.FLOAT,
    validate: {
      isEmail: true,
    },
  },
});
