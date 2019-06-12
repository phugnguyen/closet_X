const express = require("express");
const router = express.Router();
const Outfit = require("../../models/Outfit");
const upload = require("../../services/file-upload");

router.get("/test", (req, res) =>
  res.json({ msg: "This is the outfits route" })
);

router.post("/", upload.single("image"), (req, res) => {
  let imageURL = "";
  const newOutfit = new Outfit({
    user: req.body.user,
    title: req.body.title,
    imageURL: "nuri"
  });
  console.log(req.file);
  if (req.file) newOutfit.imageURL = req.file.location;
  newOutfit.save().then(outfit => res.json(outfit));
});

module.exports = router;
