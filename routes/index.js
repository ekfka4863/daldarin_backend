const express = require('express');
const router = express.Router();
const memberRouter = require('./memberRouter');

router.use('/member', memberRouter);

module.exports = router;
