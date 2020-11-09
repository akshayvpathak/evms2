Drupal.behaviors.views_vmsit = {
    attach: function (context,settings) {
      var id = drupalSettings.slick_var_id;
      var count = drupalSettings.slick_var_count;
      var arrow1 = drupalSettings.slick_var_arrow;
      var speed1 = drupalSettings.slick_var_speed;
      var dots1 = drupalSettings.slick_var_dots;
      var infinite1 = drupalSettings.slick_var_infinite;
      var id2 = drupalSettings.slick_var_id2;
      var arrow2 = drupalSettings.slick_var_arrow2;
      var speed2 = drupalSettings.slick_var_speed2;
      var dots2 = drupalSettings.slick_var_dots2;
      var infinite2 = drupalSettings.slick_var_infinite2;
      var options = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: dots1,
        arrows: arrow1,
        autoplay: false,
        autoplayspeed: 1000,
        variableWidth: false,
        speed: speed1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
      var options2 = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: dots2,
        arrows: arrow2,
        autoplay: false,
        autoplayspeed: 1000,
        variableWidth: false,
        speed: speed2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
      jQuery('#' + id).not('.slick-initialized').slick(options);
      jQuery('#' + id2).not('.slick-initialized').slick(options2);
    }
  };
