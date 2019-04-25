require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// add your Public IDs
// Note that in the transformation array, if you want to use folders you need to use the ':' notation, i.e. 'folder:public_id'
const url = cloudinary.url('', {
  transformation: [
    { width: 100, height: 100, crop: 'fill' },
    { overlay: '', width: 100, height: 100, x: 100, crop: 'fill' },
    { overlay: '', width: 100, height: 100, y: 100, x: -50, crop: 'fill' },
    { overlay: '', width: 100, height: 100, y: 50, x: 50, crop: 'fill' },
    { radius: 'max' },
    { effect: 'shadow' }
  ]
});

console.log(url);