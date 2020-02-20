require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg', {
  public_id: 'pexels-cat',
  upload_preset: 'mzobmzsm'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));


cloudinary.api.create_upload_preset({
  name: "training_transformation_apply",
  unsigned: false,
  eager: [{
      width: 400,
      height: 300,
      crop: "fill",
      gravity: "face",
    },
    {
      width: 260,
      height: 200,
      crop: "crop",
      gravity: "north"
    }
  ]
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));
