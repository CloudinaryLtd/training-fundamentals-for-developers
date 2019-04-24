require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

cloudinary.uploader.upload('../../assets/images/kitten.jpg', {
        public_id: 'kitten'
    })
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));