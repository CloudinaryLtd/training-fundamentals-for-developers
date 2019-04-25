require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

cloudinary.api.create_upload_preset({
  name: 'training_preset',
  unsigned: false,
  tags: 'cat',
  folder: 'cute_animals',
  allowed_formats: 'jpg, png'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));