const express = require('express');
const path = require('path');
const app = express();

const birds = require('./routes/birds');
const books = require('./routes/books');

app.use(express.static(path.resolve(__dirname, './public')));
app.use('/static', express.static(path.resolve(__dirname, './public/assets')));

app.use(birds);
app.use(books);

const myLogger = function(req, res, next) {
  console.log('LOGGED');
  next();
}

app.use(myLogger);

app.get('/', (req, res) => {
  res.send('Hello world!');
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000');
});
