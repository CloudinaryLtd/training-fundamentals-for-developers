require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.resource('kitten')
  .then(result => console.log(result))
  .catch(error => console.error(error));
