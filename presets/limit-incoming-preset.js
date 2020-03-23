require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.create_upload_preset({
  name: 'limit_incoming_preset',
  unsigned: false,
  tags: 'limited',
  folder: 'cute_animals',
  allowed_formats: 'jpg, png',
  transformation: {
    width: 1000,
    height: 1000,
    crop: 'limit' }
})

.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));
