const express = require("express");
const router = express.Router();
const Item = require("../../models/Item");
const upload = require("../../services/file-upload");

router.get("/test", (req, res) => res.json({ msg: "This is the items route" }));

router.get("/", (req, res) => {
  Item.all()
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noitemsfound: "No items found" }));
});

router.post("/", upload.single("image"), (req, res) => {
  console.log("hehe");

  const newItem = new Item({
    title: req.body.title,
    category: req.body.category,
    color: req.body.color,
    imageURL: req.file.location
    // user: req.user.id
  });

  newItem.save().then(item => res.json(item));
});

module.exports = router;
