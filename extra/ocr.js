require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://res.cloudinary.com/demo/image/upload/black_car.jpg', {
    public_id: 'black_car',
    ocr: 'adv_ocr'
  })
  .then(uploadResult => {
    console.log(JSON.stringify(uploadResult, null, 2))
  })
  .then(error=>{
    console.log(error)
  })