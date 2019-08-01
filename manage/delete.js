require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.delete_resources(['kitten', 'giraffe'])
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));