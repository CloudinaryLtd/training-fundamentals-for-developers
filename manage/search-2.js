require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.search
  .expression('resource_type:image AND uploaded_at>1w')
  .sort_by('public_id', 'desc')
  .max_results(30)
  .execute()
  .then(result => console.log(result))
  .catch(error => console.error(error));
