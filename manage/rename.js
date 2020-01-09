require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.rename('kitten', 'super-cute-kitten')
  .then(result => console.log(result))
  .catch(error => console.error(error));
