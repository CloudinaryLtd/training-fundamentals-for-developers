require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.search
  .expression('cat')
  .with_field('context')
  .with_field('tags')
  .max_results(10)
  .execute().then(result => console.log(result));
