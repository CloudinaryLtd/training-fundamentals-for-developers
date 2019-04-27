require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://res.cloudinary.com/demo/image/upload/black_car.jpg', {
    public_id: 'black_car',
    ocr: 'adv_ocr'
  })
  .then(uploadResult => {
    console.log(JSON.stringify(uploadResult, null, 2))
    console.log(cloudinary.url('black_car', {
      transformation: [{
          width: 1520,
          height: 1440,
          gravity: 'west',
          x: 50,
          crop: 'crop'
        },
        {
          effect: 'pixelate_region:15',
          gravity: 'ocr_text'
        }
      ]
    }));
  })
  .catch(error => console.error(error));