const db = require("./db");
const { student } = require("./index");

const seed = async () => {
  db.logging = false;
  await db.sync({ force: true }); // Drop and recreate tables
  const students = await Duck.bulkCreate([
    { name: "James Pond" },
    { name: "Quakie Chan" },
    { name: "Goose" },
  ]);

  console.log(`🦆 Created ${ducks.length} ducks`);

  console.log("🌱 Seeded the database");
  db.close();
};

seed();
