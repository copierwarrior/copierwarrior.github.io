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

  if (document.getElementsByClassName('owl-actor').length > 0) {
    tns({
      container: '.owl-actor',
      items: 1,
      responsive: {
        750: { items: 2 },
        1000: { items: 3 },
      },
      controls: false,
      mouseDrag: true,
      nav: false,
    });
  }

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
