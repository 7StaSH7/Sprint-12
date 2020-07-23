const usersRouter = require('express').Router();
const users = require('../data/users.json');

usersRouter.get('/', (req, res) => {
  res.send(users);
});

usersRouter.get('/:id', (req, res) => {
  const userIndex = users.findIndex((user) => user._id === req.params.id);
  if (userIndex < 0) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  } else {
    res.send(users[userIndex]);
  }
});

module.exports = usersRouter;
