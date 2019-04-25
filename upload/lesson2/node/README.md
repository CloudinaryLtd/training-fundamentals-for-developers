# Installation
In the root folder execute `npm i`

# Configuration
Open `.env` and add the appropriate Cloudinary details

# Run
To start the application execute `npm start` (by default the app will start on *localhost:3000* - change this in `app.js` if required)

## Options for uploading
`uploadImage` under `routes/index.js` can either return information about the upload plus the original image or a transformed image. Comment / uncomment the appropriate parts