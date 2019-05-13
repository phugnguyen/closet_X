const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the items route" }));

// router.post('/upload', (req, res) => {

// })

module.exports = router;
