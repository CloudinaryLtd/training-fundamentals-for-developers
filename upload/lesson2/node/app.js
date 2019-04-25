require('dotenv').config();
const express = require('express');
const app = express();
const multer = require('multer');
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
app.set('views', `${__dirname}/views`);
app.set('photo', '');

app.get('/', routes.index);
app.post('/upload', upload.fields([{ name: 'file' }]), routes.upload);

app.listen(port, () => console.info(`Server is up on ${port}`));