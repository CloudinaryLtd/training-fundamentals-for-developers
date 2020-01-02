require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('assets/images/mrwhiskers.jpg', {
  public_id: 'mrwhiskers',
  upload_preset: 'training_preset'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));
