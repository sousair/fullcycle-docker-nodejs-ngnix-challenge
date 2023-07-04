const { Router } = require('express');
const { addPeople } = require('./services');

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ ok: true })
});


router.post('/peoples', async (req, res) => {
  const { name } = req.body;

  await addPeople(name);

  res.status(201).json({ message: 'user successfully inserted' });
});

module.exports = {
  router,
};
