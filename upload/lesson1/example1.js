const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('../../assets/images/kitten.jpg')
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));