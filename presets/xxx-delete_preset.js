require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.delete_upload_preset('training_preset')
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));