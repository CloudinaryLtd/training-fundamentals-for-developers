require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.search
  .expression('kitten')
  .with_field('tags')
  .max_results(10)
  .execute()
  .then(result => console.log(result))
  .catch(error => console.error(error));
