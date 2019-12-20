require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.restore(['kitten', 'giraffe'])
.then(restoreResult => console.log(restoreResult))
.catch(error => console.error(error));
