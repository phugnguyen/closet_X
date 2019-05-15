const express = require("express");
const router = express.Router();
const Item = require("../../models/Item");
const upload = require("../../services/file-upload");

router.get("/test", (req, res) => res.json({ msg: "This is the items route" }));

router.get("/", (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noitemsfound: "No items found" }));
});

router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(404).json({ noitemfound: "no item found" }));
});

router.post("/", upload.single("image"), (req, res) => {
  console.log("hey");
  console.log(req);
  let imageURL = "";
  const newItem = new Item({
    user: req.body.user,
    title: req.body.title,
    category: req.body.category,
    color: req.body.color,
    imageURL: "nuri"
  });
  if (req.file) newItem.imageURL = req.file.location;

  newItem.save().then(item => res.json(item));
});

// router.post("/update/:itemId", upload.single("image"), (req, res) => {
//   Item.findByIdAndUpdate(req.params.itemId, {
//     user: req.body.user,
//     title: req.body.title,
//     category: req.body.category,
//     color: req.body.color,
//     imageURL: req.body.imageURL
//   });
// });

// upload.single("image")

router.post("/update/:itemId", upload.single("image"), (req, res) => {
  debugger;
  let imageURL;
  if (req.file) {
    imageURL = req.file.location;
  } else {
    imageURL = req.body.imageURL;
  }
  Item.findByIdAndUpdate(req.params.itemId, {
    user: req.body.user,
    title: req.body.title,
    category: req.body.category,
    color: req.body.color,
    imageURL: imageURL
  }).then(item => res.send(item));
});

module.exports = router;
