require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

cloudinary.search
  .expression('cat')
  .with_field('context')
  .with_field('tags')
  .max_results(10)
  .execute().then(result => console.log(result));
