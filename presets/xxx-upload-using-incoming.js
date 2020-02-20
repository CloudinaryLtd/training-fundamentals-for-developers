require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.create_upload_preset({
  name: "training_incoming_example_2",
  unsigned: false,
  transformation: [{
    width: 400,
    height: 300,
    crop: "fill",
    gravity: "face"
  }]
})

  .then(uploadResult => {
    console.log(uploadResult)
    cloudinary.uploader.upload('https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg', {
      public_id: 'pexels-baby-2',
      upload_preset: 'training_incoming_example_2'
    })
      .then(uploadResult => console.log(uploadResult))
      .catch(error => console.error(error));


  })
  .catch(error => console.error(error));
