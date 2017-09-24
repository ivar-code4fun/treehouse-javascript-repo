
// Add an overlay
  var $overlay = $('<div id="overlay"></div>');
  $("body").append($overlay);
// Add an image
  // a caption

// Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
  // Show the overlay
  // Update overlay with image linked in the link
  // Get child's alt attribute and set caption
  event.preventDefault();
  var href = $(this).attr("href");
  $overlay.show();
});

//3 When overlay is clicked , hide overlay