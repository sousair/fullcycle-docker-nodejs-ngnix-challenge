const { connection } = require('../database');

async function addPeople(name) {
  const sql = `INSERT INTO people (name) VALUES ('${name}');`;

  await connection.promise().query(sql).catch(err => {
    console.log(err);
  }) 
}

module.exports = {
  addPeople,
};
