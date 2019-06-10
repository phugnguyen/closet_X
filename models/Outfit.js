const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OutfitSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: false
  },
  items: {
    type: [{ type: Schema.Types.ObjectId, ref: "items" }],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Outfit = mongoose.model("outfits", OutfitSchema);
