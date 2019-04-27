require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://i0.wp.com/metro.co.uk/wp-content/uploads/2019/04/SEI_59793697-e1555334390108.jpg', {
        detection: 'adv_face',
        public_id: 'arya-stark'
    })
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error))

cloudinary.uploader.upload('http://pluspng.com/img-png/aviator-20sunglasses-20vector-2048.png', {
        public_id: 'sunglass'
    })
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error))


    // https://res.cloudinary.com/<cloud_name>/image/upload/fl_region_relative,g_adv_eyes,l_sunglass,w_1.7/arya-stark