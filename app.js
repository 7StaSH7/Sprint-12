const express = require('express');
const path = require('path');

const app = express();
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;
app.use(express.static(path.join(__dirname, '/public')));

app.use('/cards', cardsRouter);
app.use('/users', usersRouter);
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);