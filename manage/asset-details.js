require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.resource('kitten')
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));
