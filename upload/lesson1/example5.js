const cloudinary = require('cloudinary');

cloudinary.v2.uploader.upload('../../assets/images/kitten.jpg', {
    public_id: 'cute_animals/kitten'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));