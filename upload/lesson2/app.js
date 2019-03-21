$(document).ready(() => {
  /*
  *
  * change these values
  * 
  */
  const cloud_name = '';
  const unsignedUploadPreset = '';
  
  const fileuploadProgress = $('#fileuploadProgress');
  const cloudinaryuploadProgress = $('#cloudinaryuploadProgress');

  const fileuploadBar = $('#fileuploadBar');
  const cloudinaryuploadBar = $('#cloudinaryuploadBar');
  fileuploadProgress.hide();
  cloudinaryuploadProgress.hide();

  $.cloudinary.config({
    cloud_name
  })

  $('.cloudinary_fileupload').unsigned_cloudinary_upload(unsignedUploadPreset, {
      cloud_name,
    }, {
      multiple: true
    }
    )
    .bind('fileuploaddone', function(e, data) {
      console.log(`data.loaded: ${data.loaded},
    data.total: ${data.total}`)
      fileuploadProgress.hide();
    })
    .bind('fileuploadprogress', function(e, data) {
      fileuploadProgress.show();
      let width = (data.loaded / data.total) * 100;
      const id = setInterval(frame, data.loaded);
      function frame() {
        if (width >= data.total) {
          clearInterval(id);
        } else {
          width = (data.loaded / data.total) * 100;
          fileuploadBar.css('width', `${width}%`);
        }
      }
      console.log(`fileuploadprogress data.loaded: ${data.loaded},
    data.total: ${data.total}`);
    })
    .bind('cloudinaryprogress', function(e, data) {
      cloudinaryuploadProgress.show();
      let width = (data.loaded / data.total) * 100;
      const id = setInterval(frame, data.loaded);
      function frame() {
        if (width >= data.total) {
          clearInterval(id);
        } else {
          width = (data.loaded / data.total) * 100;
          cloudinaryuploadBar.css('width', `${width}%`);
        }
      }
      console.log(`cloudinaryprogress data.loaded: ${data.loaded},
    data.total: ${data.total}`);
    })
    .bind('cloudinarydone', function(e, data) {
      cloudinaryuploadProgress.hide();
      console.log('Upload result', data.result);
      const image = $.cloudinary.image(
          data.result.public_id, {
            secure: true,
            width: 150,
            crop: 'scale'
          });
      $('.gallery').prepend(image);
  });
});