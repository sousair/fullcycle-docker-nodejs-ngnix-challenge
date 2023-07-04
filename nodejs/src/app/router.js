const { Router } = require('express');
const { addPeople, getAllPeople } = require('./services');
const { formatToTable } = require('./helpers');

const router = Router();

router.get('/', async (req, res) => {
  const { fields, people } = await getAllPeople();
  const table = formatToTable(fields, people);
  res.send('<h1>Full Cycle Rocks!</h1>\n' + table);
});

router.post('/peoples', async (req, res) => {
  const { name } = req.body;

  await addPeople(name);

  res.status(201).json({ message: 'user successfully inserted' });
});

module.exports = {
  router,
};
