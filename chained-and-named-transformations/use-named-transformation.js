require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const url = cloudinary.url('cute_animals/kitten', {
  secure: true,
  transformation: ['small_fill2']
});

console.log(url);