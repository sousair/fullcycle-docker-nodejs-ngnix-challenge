const { connection } = require('../database');

async function getAllPeople() {
  const sql = `SELECT id, name FROM people;`

  const result = await connection.promise().query(sql);
  const people = result[0];
  const fields = result[1]?.map(c => c.name);

  return { people, fields };
}

module.exports = {
  getAllPeople,
}