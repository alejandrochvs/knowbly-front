const express = require('express'),
  router = express.Router();

router.post('/', (req,res) => {
  res.send({res:'C'});
});
router.get('/', (req,res) => {
  res.send({res:'R'});
});
router.put('/', (req,res) => {
  res.send({res: 'U'});
});
router.delete('/', (req,res) => {
  res.send({res: 'D'});
});

module.exports = router;
