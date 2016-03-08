// Javascript Entry Point
import $ from 'jquery';

$('.accordian1').on('click', function() {
  $('.accordian2').toggleClass('up');
});

$('.accordian2').on('click',function(){
	$('.accordian2').addClass('up');
})

$('.accordian3').on('click', function() {
  $('.accordian3').toggleClass('up2');
});

$('.accordian2').on('click', function() {
  $('.accordian3').removeClass('up2');
});

