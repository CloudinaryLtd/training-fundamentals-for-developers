require('dotenv').config();
const cloudinary = require('cloudinary').v2;
console.log(require('dotenv').config());
cloudinary.uploader.upload('assets/images/kitten.jpg')
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error));