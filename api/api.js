const express = require('express'),
  router = express.Router(),
  widget = require('./widget/widget'),
  hotspot = require('./hotspot/hotspot');

router.use('/widget',widget);
router.use('/hotspot',hotspot);

module.exports = router;
