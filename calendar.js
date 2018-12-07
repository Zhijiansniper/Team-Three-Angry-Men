
$(document).ready(function(){
  $('table').click();
})
$('.clean2').click(function(){
  $('.select').removeClass('select');
  $('.wrap').toggleClass('active');
  $('table').click();
})

$('.clean').on('click', function(){
  $('.wrap').toggleClass('active');
  return false;
});

$('td').click(function(){
  if($(this).hasClass('select')){
    $(this).removeClass('select');
  }else{
    $(this).addClass('select');
  }
});

function myFunction() {
    window.location = "zipcode.html";
}

function myFunction2() {
    window.location = "question.html";
}

function myFunction3() {
    window.location = "mainpage.html";
}

function myFunction4() {
    window.location = "load.html";
}
