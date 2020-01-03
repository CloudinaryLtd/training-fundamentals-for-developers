require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// A couple of ways to register env variables:

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// });

if (typeof (process.env.CLOUDINARY_URL) === 'undefined') {
  console.warn('!! cloudinary config is undefined !!');
  console.warn('export CLOUDINARY_URL or set dotenv file');
} else {
  // Must call config() to register env variables 
  // don't log config in production environment
  console.log('cloudinary config:',cloudinary.config());
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

// set up routes
app.get('/', routes.index);
// upload.fields is middleware that will add an array named 'file' to req 
// to the request such that req.files['file'][0] would reference 1 file
app.post('/upload', upload.fields([{ name: 'file' }]), routes.upload);

app.listen(port, () => console.info(`Server is up on http://localhost:${port}`));
