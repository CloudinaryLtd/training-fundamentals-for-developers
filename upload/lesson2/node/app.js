require('dotenv').config();

if (typeof (process.env.CLOUDINARY_URL) === 'undefined') {
  console.warn('!! cloudinary config is undefined !!');
  console.warn('export CLOUDINARY_URL or set dotenv file');
} else {
  console.log('cloudinary config:');
}

const express = require('express');
const app = express();
const multer = require('multer');

//using the storage option
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage });
const routes = require('./routes');
const port = 3000;

app.set('view engine', 'pug');
//don't need this anymore with latest express
// app.set('views', `${__dirname}/views`);

// the photo comes off of req.app so this not needed
// app.set('photo', '');

app.get('/', routes.index);
// upload.fields will add an array named 'file' to the request such that req.files['file'][0] would reference 1 file
// syntax like chaining middleware app.use(upload)
app.post('/upload', upload.fields([{ name: 'file' }]), routes.upload);

app.listen(port, () => console.info(`Server is up on ${port}`));