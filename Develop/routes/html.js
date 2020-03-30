const router = require("express").Router();
const path = require("path");

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"), function(err) {
      if (err) throw err;
    });
  });
  
  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"), function(err) {
      if (err) throw err;
    });
  });
  
  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"), function(err) {
      if (err) throw err;
    });
  });
  
  
  module.exports = router;