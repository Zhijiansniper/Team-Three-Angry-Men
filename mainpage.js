
$(document).ready(function(){
  $('table').click();
})


$('.clean').on('click', function(){
  $('.wrap').toggleClass('active');
  return false;
});

function myFunction() {
document.getElementById("userName1").innerHTML = "You login as: " + localStorage.getItem("userName");

document.getElementById("zipcode1").innerHTML = "Your current zipcode: " + localStorage.getItem("zipcode");

document.getElementById("hours1").innerHTML = "Total time of workout: " + localStorage.getItem("hour");

document.getElementById("days1").innerHTML = "Days of workout: " + localStorage.getItem("day");

document.getElementById("zipcode2").innerHTML = "According to your location zipcode " + localStorage.getItem("zipcode");
}
window.onload=myFunction;
