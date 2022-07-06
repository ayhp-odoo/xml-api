const express = require('express');
const builder = require('xmlbuilder')

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API is running',
  });
});

// post xml data to the server
router.post('/xml', (req, res) => {
  const xml = req.body;
  //const formattedXml = builder.create(xml).end({ pretty: true });
  console.log(xml);
  res.json({
   "recived data": xml
  })
});

module.exports = router;
