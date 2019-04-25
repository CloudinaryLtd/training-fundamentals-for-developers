require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

cloudinary.api.create_upload_preset({
  name: 'training_incoming_example',
  unsigned: false,
  transformation: {
      width: 400,
      height: 300,
      crop: 'fill',
      gravity: 'face'
  }
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));
