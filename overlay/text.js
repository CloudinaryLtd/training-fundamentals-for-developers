require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const url = cloudinary.url('cute_animals/kitten', {
  secure: true,
  transformation: [{
    width: 500,
    crop: 'scale'
  }, {
    overlay: {
      font_family: 'Times',
      font_size: 90,
      font_weight: 'bold',
      text: 'CAT!'
    },
    gravity: 'south',
    y: 80,
    color: '#FFFF0080'
  }]
});
console.log(url);