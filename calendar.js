
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
