const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const db = require("./db");
const { toDefaultValue } = require("sequelize/lib/utils");

const Campus = db.define("campus", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  imageURL: {
    type: DataTypes.BLOB,
    defaultValue:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.highereddive.com%2Fnews%2Fharvard-university-rejects-trump-demands%2F745331%2F&psig=AOvVaw2pnishPOzpbZ0_yp8Xhz43&ust=1751519725413000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPC2v8y1nY4DFQAAAAAdAAAAABAM",
    allowNull: false,
  },

  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
  },
});
module.exports = Campus;
