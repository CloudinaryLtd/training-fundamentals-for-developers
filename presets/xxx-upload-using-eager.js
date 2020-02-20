require('dotenv').config();
const cloudinary = require('cloudinary').v2;




cloudinary.api.create_upload_preset({
  name: "training_transformation_apply_1",
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
  .then(uploadResult => {
    console.log(uploadResult)
    cloudinary.uploader.upload('https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg', {
      public_id: 'pexels-cat-2',
      upload_preset: 'training_transformation_apply_1'
    })
      .then(uploadResult => console.log(uploadResult))
      .catch(error => console.error(error));


  })
  .catch(error => console.error(error));
