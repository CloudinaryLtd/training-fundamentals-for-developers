require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.update("kitten", {
    tags: "baby",
    categorization: "google_tagging",
    auto_tagging: 0.9
  })
  .then(updateResult => console.log(updateResult))
  .catch(error => console.error(error));
