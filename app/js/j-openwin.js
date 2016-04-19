//     Zepto.js
//     (c) 2010-2015 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

Zepto(function($){

  var menu = $('.aui-menu');
  var menuClose = $('.j-close');
  // var openw = $('div.aui-openwin');
  // var opens = $('div.aui-openwin-shadow');
  var openm = $('div.j-menu-open');

  var sideBar = $('.aui-sidebar');
  var subNav = $('.aui-subnav').children('dd');

  var sortTag = $('.aui-sort-line').children('.aui-sort-tag');
  var sortDown = $('.icon-sort');


  $('.j-sidebar').tap(function() {
    sideBar.addClass('aui-sidebar-show');
  })

  subNav.tap(function() {
    subNav.removeClass('current');
    $(this).addClass('current');
    sideBar.removeClass('aui-sidebar-show');
  })

  

  sortDown.tap(function() {
    $('.aui-sort').addClass('aui-sort-show')
  })

  sortTag.tap(function() {
    sortTag.removeClass('current');
    $(this).addClass('current');
    $('.aui-sort').removeClass('aui-sort-show');
  })

  menu.tap(function() {

    if ($(this).hasClass('j-open')) {
      $(this).addClass('j-close').removeClass('j-open');
      // $(this).addClass('overturn2');
      $(this).addClass('turn');
      openm.removeClass('none');
    }else{
      $(this).addClass('j-open').removeClass('j-close');
      // $(this).removeClass('overturn2');
      $(this).removeClass('turn');
      openm.addClass('none');
    };
    
  });
  

})