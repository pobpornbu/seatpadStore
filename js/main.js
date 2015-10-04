$(document).ready(function() {
    $(".js-gallery-main").lightSlider({
      item: 1
    });
});

function printImg() {
  popup = window.open();
  popup.document.write("<img src='images/map.png' />");
  popup.print();
}