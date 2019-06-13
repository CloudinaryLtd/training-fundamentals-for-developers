require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.destroy('cute_animals/kitten', {
    invalidate: true
  })
  .then(result => console.log(result))
  .catch(error => console.error(error));
