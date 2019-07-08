const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { secretAccessKey, accessKeyId } = require("../config/keys");

aws.config.update({
  region: "us-west-1",
  accessKeyId,
  secretAccessKey
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "closet-x-dev",
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA!" });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
