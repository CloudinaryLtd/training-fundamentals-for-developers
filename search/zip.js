require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const url = cloudinary.utils.download_zip_url({
  public_ids: 'dog,cat,lion',
  resource_type: 'image'
});

console.log(url);