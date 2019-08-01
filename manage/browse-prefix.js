require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.resources({
    type: 'upload',
    prefix: 'kitten'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));