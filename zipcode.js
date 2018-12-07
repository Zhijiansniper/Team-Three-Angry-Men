function myFunction() {
  var x2=document.getElementById('zipcode').value;
  localStorage.setItem("zipcode", x2);
  window.location = "calender.html";
}

function myFunction2() {
  window.location = "mainpage.html";
}

function myFunction3() {
  var x2=document.getElementById('zipcode').value;
  localStorage.setItem("zipcode", x2);
  window.location = "load.html";
}
