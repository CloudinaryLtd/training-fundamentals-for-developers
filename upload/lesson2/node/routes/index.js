const cloudinary = require('cloudinary').v2;


const path = require('path');
const applicationDirectory = path.dirname(require.main.filename);
console.log("applicationDirectory",applicationDirectory)

//cloudinary returns a promise
//this function returns a URL string 
const uploadImage = async filename => {
  filename = `${applicationDirectory}/uploads/${filename}`;
  try {
    const photo = await cloudinary.uploader.upload(filename, {
      use_filename: true,
      unique_filename: false
    });
    console.log('after cloudinary upload',photo)
    
    //return the "raw" asset (uncomment the return statement below)
    // return photo;

    // return transformed img (uncomment the return statement below)
    return await cloudinary.url(photo.public_id, {
      width: 400,
      quality: 'auto',
      fetch_format: 'auto',
      secure: true
    });

  } catch (error) {
    console.log('uploadImage error',JSON.stringify(error))
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
  const uploadedFile = req.files.file[0]; //use the file that multer attached to the request
  const filename = uploadedFile.filename;
  console.log('filename',filename)
  try {
    const photo = await uploadImage(filename);
    console.log('photo',photo)
    req.app.set('photo', photo);
    return res.redirect(req.get('referer'));
  } catch(error) {
    console.log('upload error',JSON.stringify(error))
  }
};

module.exports = {
  index,
  upload
};