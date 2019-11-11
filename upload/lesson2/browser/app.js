$(document).ready(() => {
  /*
  * change these values
  */
  const cloud_name = '';
  const unsignedUploadPreset = '';
  /**  **/

  const fileuploadBar = $('#fileuploadBar');
  const cloudinaryuploadBar = $('#cloudinaryuploadBar');

  $.cloudinary.config({
    cloud_name
  })

  $('.cloudinary_fileupload').unsigned_cloudinary_upload(unsignedUploadPreset, {
    cloud_name,
  }, {
    multiple: true
  })
    .bind('fileuploadprogress', function (e, data) {
      console.log(`fileuploadprogress data.loaded: ${data.loaded},data.total: ${data.total}`)
      fileuploadBar.css('width', `${Math.round((data.loaded * 100.0) / data.total)}%`);
    })
    .bind('cloudinaryprogress', function (e, data) {
      console.log(`cloudinaryprogress data.loaded: ${data.loaded},data.total: ${data.total}`)
      cloudinaryuploadBar.css('width', `${Math.round((data.loaded * 100.0) / data.total)}%`);
    })
    .bind('fileuploaddone', function (e, data) {
      console.log(`fileuploaddone data.loaded: ${data.loaded},data.total: ${data.total}`)
    })
    .bind('cloudinarydone', function (e, data) {
      console.log('Upload result', data.result);
      const image = $.cloudinary.image(
        data.result.public_id, {
        secure: true,
        width: 150,
        crop: 'scale',
      });
      $('.gallery').prepend(image);
    });
});
