require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('assets/images/giraffe.jpg', {
        use_filename: true,
        unique_filename: false
    })
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));