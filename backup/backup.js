require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('assets/images/giraffe.jpg', {
    backup: true
  })
  .then(restoreResult => console.log(restoreResult))
  .catch(error => console.error(error));
