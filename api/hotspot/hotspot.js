const express = require('express'),
  db = require('../db'),
  router = express.Router();

router.post('/', (req,res) => {
  db.hotspot.post(req.body).then((dbRes) => {
    res.send({"res": dbRes});
  }, (err) => {
    res.send({"err" : err});
  });
});
router.get('/:id', (req,res) => {
  db.hotspot.get(req.params.id).then((dbRes) => {
    res.send({"res": dbRes});
  }, (err) => {
    res.send({"err" : err});
  });
});
router.put('/:id', (req,res) => {
  db.widget.put(req.params.id,req.body).then((dbRes) => {
    res.send({"res": dbRes});
  }, (err) => {
    res.send({"err" : err});
  });
});
router.delete('/:id', (req,res) => {
  db.hotspot.delete(req.params.id).then((dbRes) => {
    res.send({"res": dbRes});
  }, (err) => {
    res.send({"err" : err});
  });
});

module.exports = router;
