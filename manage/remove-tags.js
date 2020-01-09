require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.remove_tag('wild', ['kitten', 'giraffe'])
  .then(result => console.log(result))
  .catch(error => console.error(error));
