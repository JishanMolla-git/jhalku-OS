$(document).ready(function () {
  // Create the window element in advance and initially hide it
  var windowElement = $("<div>")
    .addClass("window draggable win-wrapper")
    .html(
      '<div class="menu" autofocus><button class="close button"></button><button class="min button"></button><button class="max button"></button></div>'
    )
    .hide();

  // Append the window to the body
  $("body").append(windowElement);

  // Make the window draggable
  windowElement.draggable({ handle: ".menu" });

  // Hide the window when clicking the "Close" button
  windowElement.find(".close").on("click", function () {
    windowElement.hide();
  });

  // Show or hide the pre-created window when the "app" button is clicked
  $(".appB").on("click", function () {
    windowElement.toggle();
  });
});
