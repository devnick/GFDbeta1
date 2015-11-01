// Instantiate Lity plugin
var lightbox = lity();

// Fire the Lity plugin whenever an element with the data attribute of 'lightbox' is clicked
$(document).on('click', '[data-lightbox]', lightbox);