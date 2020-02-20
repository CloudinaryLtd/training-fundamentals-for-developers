require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.create_upload_preset({
  name: 'training_transformation_apply_async',
  eager_async: true,
  notification_url: "https://webhook.site/a11dfa23-422d-4d0a-af8a-ce691ad25954",
  unsigned: false,
  eager: [{
    width: 400,
    height: 300,
    crop: 'fill',
    gravity: 'face'
  }, {
    width: 260,
    height: 200,
    crop: "crop",
    gravity: "north"
  }]
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));
