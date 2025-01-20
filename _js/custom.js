(function($) {
  'use strict';

  // jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
      $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
      $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
  });

  // Page anchor scroll.
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 800, 'easeInOutExpo');
    event.preventDefault();
  });

  $('.collapse').on('shown.bs.collapse', function() {
    $(this).parent().find('.glyphicon-plus').removeClass('glyphicon-plus').addClass('glyphicon-minus');
  }).on('hidden.bs.collapse', function() {
    $(this).parent().find('.glyphicon-minus').removeClass('glyphicon-minus').addClass('glyphicon-plus');
  });

  $('#owl-actors').owlCarousel({
    itemsCustom: [
      [0, 1],
      [450, 2],
      [600, 2],
      [700, 2],
      [1000, 3],
      [1200, 3],
      [1400, 3],
      [1600, 3]
    ],
    navigation: true,
    pagination: true,
    mouseDrag: true
  });

  var $counters = $('#counters');
  $counters.waypoint(function() {
    $counters.find('span').each(function() {
      var $this = $(this);
      $this.animateNumber({
        number: $this.data('amount')
      }, 2000);
    });
    this.destroy();
  }, {
    offset: '100%'
  });

  var $features = $('.features-wrap');
  $features.waypoint(function() {
    $features.find('li').each(function() {
      var $this = $(this).find('div');
      $this.find('span').css('width', $this.data('amount') + '%');
      $this.find('b').animateNumber({
        number: $this.data('amount')
      }, 3000);
    });
    this.destroy();
  }, {
    offset: '100%'
  });


  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInDown');
    this.destroy();
  }, {
    offset: '75%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
    this.destroy();
  }, {
    offset: '75%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInDown');
    this.destroy();
  }, {
    offset: '55%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInUp');
    this.destroy();
  }, {
    offset: '75%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
    this.destroy();
  }, {
    offset: '75%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInUp');
    this.destroy();
  }, {
    offset: '75%'
  });
})(jQuery);
