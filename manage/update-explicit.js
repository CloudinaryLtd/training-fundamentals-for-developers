require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.explicit("kitten", {
    type: "upload",
    eager: [{
        width: 400,
        height: 400,
        crop: "fill",
        gravity: "face"
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
