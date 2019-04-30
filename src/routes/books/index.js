const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Books', Date.now());
  next();
});

router.get('/books', (req, res) => {
  res.send('This is Book list!');
});

router.get('/books/:id', (req, res) => {
  res.send(req.params);
});

module.exports = router;