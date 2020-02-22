require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('assets/images/woman.jpg', {
  public_id: 'woman',
  upload_preset: 'training_transformation_apply'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));
