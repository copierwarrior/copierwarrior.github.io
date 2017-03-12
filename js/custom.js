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

  $('#counters').waypoint(function() {
    $('#counter-1').animateNumber({
      number: 10000
    }, 2000);
    $('#counter-2').animateNumber({
      number: 3
    }, 2000);
    $('#counter-3').animateNumber({
      number: 999
    }, 2000);
    this.destroy()
  }, {
    offset: '100%'
  });

  $('#expand-counters').waypoint(function() {
    $('#expand-counter-1').animateNumber({
      number: 98
    }, 3000);
    $('#expand-counter-2').animateNumber({
      number: 72
    }, 3000);
    $('#expand-counter-3').animateNumber({
      number: 84
    }, 3000);
    $('#expand-counter-4').animateNumber({
      number: 67
    }, 3000);
    this.destroy()
  }, {
    offset: '100%'
  });

  $('.features-wrap').waypoint(function() {
    $('.expand-1').css('width', '94%');
    $('.expand-2').css('width', '72%');
    $('.expand-3').css('width', '86%');
    $('.expand-4').css('width', '64%');
    this.destroy()
  }, {
    offset: '100%'
  });

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInDown');
    this.destroy()
  }, {
    offset: '75%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
    this.destroy()
  }, {
    offset: '75%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInDown');
    this.destroy()
  }, {
    offset: '55%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInUp');
    this.destroy()
  }, {
    offset: '75%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
    this.destroy()
  }, {
    offset: '75%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInUp');
    this.destroy()
  }, {
    offset: '75%'
  });
  $('.wp7').waypoint(function() {
    $('.wp7').addClass('animated fadeInDown');
    this.destroy()
  }, {
    offset: '75%'
  });
  $('.wp8').waypoint(function() {
    $('.wp8').addClass('animated fadeInUp');
    this.destroy()
  }, {
    offset: '100%'
  });
  $('.wp9').waypoint(function() {
    $('.wp9').addClass('animated fadeInDown');
    this.destroy()
  }, {
    offset: '100%'
  });
  $('.wp10').waypoint(function() {
    $('.wp10').addClass('animated fadeInLeft');
    this.destroy()
  }, {
    offset: '100%'
  });
  $('.wp11').waypoint(function() {
    $('.wp11').addClass('animated fadeInUp');
    this.destroy()
  }, {
    offset: '75%'
  });
})(jQuery);
