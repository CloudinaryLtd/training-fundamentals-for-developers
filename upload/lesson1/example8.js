require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg')
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));