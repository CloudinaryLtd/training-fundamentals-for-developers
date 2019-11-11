# Installation
Execute `npm i` in this directory.

# Configuration
Open `.env` and add the appropriate Cloudinary details

# Run
To start the application execute `npm start` in this folder (by default the app will start on *localhost:3000* - change this in `app.js` if required).  Open browser at [http://localhost:3000](http://localhost:3000)

## Options for uploading
`uploadImage` under `routes/index.js` can either return information about the upload plus the original image or a transformed image. Comment / uncomment the appropriate parts. Requires server restart.