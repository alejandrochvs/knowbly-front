const express = require('express'),
  router = express.Router();

router.post('/', (req,res) => {
  res.send('C');
});
router.get('/', (req,res) => {
  res.send('R');
});
router.put('/', (req,res) => {
  res.send('U');
});
router.delete('/', (req,res) => {
  res.send('D');
});

module.exports = router;
