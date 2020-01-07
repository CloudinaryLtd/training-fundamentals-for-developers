require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.create_zip({
    tags: 'animal',
    resource_type: 'image'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));
