const express = require('express');

const api = require('./api');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API is running',
  });
});

router.use('/api', api);

module.exports = router;
