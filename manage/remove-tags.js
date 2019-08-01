require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.remove_tag('animal', ['kitten', 'giraffe'])
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));