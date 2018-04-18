$(document).ready(function(){
  console.log('I am ready to show!');
});

$( document ).ready(function() {
$(".dropdown-nav").click(function(){
    $(this).children(".dropdown-content").slideToggle("200");
  });
});
