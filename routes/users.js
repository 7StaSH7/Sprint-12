const usersRouter = require('express').Router();
const users = require('../data/users.json');

usersRouter.get('/', (req, res) => {
  res.send(users);
});

usersRouter.get('/:id', (req, res) => {
  const desiredUser = users.find((user) => user._id === req.params.id);
  if (!desiredUser) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  } else {
    res.send(desiredUser);
  }
});

module.exports = usersRouter;
