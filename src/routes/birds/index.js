const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/birds', (req, res) => {
  res.send('Birds home page');
});

router.get('/birds/about', (req, res) => {
  res.send('About birds');
});

module.exports = router;
