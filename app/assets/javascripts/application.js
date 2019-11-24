// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
$(function() {
  var gnav = $('.gnav');
  gnav.css('display','none');
  $('.gnav-btn').on('click', function() {
    gnav.slideToggle(500);
    if ($(this).hasClass('is-open')) {
      $(this).removeClass('is-open');
    } else {
      $(this).addClass('is-open');
    }
  });
});
   

       $(window).scroll(function (){
         $('.fadein').each(function(){
             var elemPos = $(this).offset().top,
                 scroll = $(window).scrollTop(),
                 windowHeight = $(window).height();
               if (scroll > elemPos - windowHeight + 100){
                   $(this).addClass('scrollin');
                 }
             });
         });
  
          $(window).scroll(function (){
            $('.fadein2').each(function(){
                var elemPos = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
                  if (scroll > elemPos - windowHeight + 100){
                      $(this).addClass('scrollin2');
                    }
                });
            });
  
  