const cloudinary = require('cloudinary');

cloudinary.v2.uploader.upload('../../assets/images/kitten.jpg', {
    folder: 'cute_animals',
    public_id: 'kitten'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));
  