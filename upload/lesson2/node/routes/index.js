const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const path = require('path');
const applicationDirectory = path.dirname(require.main.filename);

const uploadImage = async filename => {
  filename = `${applicationDirectory}/uploads/${filename}`;
  try {
    const photo = await cloudinary.uploader.upload(filename, {
      use_filename: true,
      unique_filename: false
    });
    // return the "raw" asset (uncomment the return statement below)
    // return photo;
    // return transformed img (uncomment the return statement below)
    return await cloudinary.url(photo.public_id, {
      width: 400,
      quality: 'auto',
      fetch_format: 'auto',
      secure: true
    });

  } catch (error) {
    throw new Error(error);
  }
};

const index = (req, res) => {
  return res.render('index', {
    intro: 'Welcome :)',
    photo: req.app.get('photo')
  });
};

const upload = async (req, res) => {
  const uploadedFile = req.files.file[0];
  const filename = uploadedFile.filename;
  try {
    const photo = await uploadImage(filename);
    req.app.set('photo', photo);
    return res.redirect(req.get('referer'));
  } catch(error) {
    throw new Error(error);
  }
};

module.exports = {
  index,
  upload
};