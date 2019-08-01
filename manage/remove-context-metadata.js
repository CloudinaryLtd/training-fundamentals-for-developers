require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.remove_all_context(['kitten', 'giraffe'])
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));