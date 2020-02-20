require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload("https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", {
  responsive_breakpoints: {
    create_derived: true,
    bytes_step: 20000,
    min_width: 200,
    max_width: 1400,
    transformation: {
      crop: 'fill',
      aspect_ratio: '16:9',
      gravity: 'auto'
    }
  }
})
.then(uploadResult => {
  console.log(uploadResult)
  console.log(uploadResult.responsive_breakpoints[0].breakpoints)
})
.catch(error => console.error(error));