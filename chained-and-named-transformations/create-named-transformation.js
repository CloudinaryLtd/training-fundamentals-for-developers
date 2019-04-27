require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.create_transformation('small_fill2', {
  width: 150,
  height: 100,
  crop: 'fill'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));