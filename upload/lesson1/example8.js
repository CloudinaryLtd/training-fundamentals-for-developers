require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg')
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));