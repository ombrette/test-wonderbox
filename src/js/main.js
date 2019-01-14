const
  wrapper = document.querySelectorAll('#wrapper')

$( document ).ready(function() {
    $('.wb-slider-content').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
    });

    $('.wb-comments-container').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
    });

    $('.js-scrollTo').on('click', function() {
      var page = $(this).attr('href');
      var speed = 750;
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
      return false;
    });

    $('.wb-quote').each(function(){
      var text = $(this)
      var content = text.text();
      var shortText = jQuery.trim(content).substring(0, 60)
      .split(" ").slice(0, -1).join(" ") + "...";

      text.html(shortText);
    });

});
