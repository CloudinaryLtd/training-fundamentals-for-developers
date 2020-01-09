require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.resources({
    resource_type: 'image',
    type: 'upload',
    prefix: 'cute_animals'
  })
  .then(result => console.log(result))
  .catch(error => console.error(error));
