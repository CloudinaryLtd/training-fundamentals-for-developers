require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://i0.wp.com/metalinjection.net/wp-content/uploads/2019/03/metallica.jpg', {
        detection: 'aws_rek_face',
        auto_tagging: 0.7
    })
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error))