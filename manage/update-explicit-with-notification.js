require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.explicit("kitten", {
  type: "upload",
  eager_async	: true,
  eager_notification_url: "https://webhook.site/a11dfa23-422d-4d0a-af8a-ce691ad25954",
  eager: [{
    width: 100,
    height: 100,
    crop: "crop",
    gravity: "auto"
  },
  {
    width: 660,
    height: 400,
    crop: "pad",
    background: "blue"
  }
  ]
})
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));