$(document).ready(function() {
    $('.nav__icon').click(function(){
      $(this).toggleClass('open');
    });
});

function printImg() {
  popup = window.open();
  popup.document.write("<img src='images/map.png' />");
  popup.print();
}