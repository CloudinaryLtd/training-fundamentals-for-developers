require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const url = cloudinary.utils.download_zip_url({
  public_ids: 'dog,cat,lion',
  resource_type: 'image'
});

console.log(url);