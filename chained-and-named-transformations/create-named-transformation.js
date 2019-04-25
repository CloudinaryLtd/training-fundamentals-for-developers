require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

cloudinary.api.create_transformation('small_fill2', {
  width: 150,
  height: 100,
  crop: 'fill'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));