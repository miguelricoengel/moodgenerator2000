const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/feed", (req, res, next) => {
  res.render("auth/feed");
});

module.exports = router;
