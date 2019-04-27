require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://www.telegraph.co.uk/content/dam/tv/2018/12/05/TELEMMGLPICT000137757215_trans_NvBQzQNjv4BqaRL1kC4G7DT9ZsZm6Pe3PehAFAI_f6ud569StXyOKH0.jpeg', {
    moderation: 'manual'
  })
  .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
  .catch(error => console.error(error));