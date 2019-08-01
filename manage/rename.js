require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.rename('kitten', 'super-cute-kitten')
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));