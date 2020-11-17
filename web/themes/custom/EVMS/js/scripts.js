jQuery(".viewless").hide();
jQuery(window).on('load',function(){
  jQuery('.loader').fadeIn(250);
});
jQuery(document).ready(function(){
  jQuery('.loader').fadeOut(250);
  jQuery(".productfeatures").hide(1000);
  jQuery(".viewmore").click(function(){
  jQuery(".productfeatures").show(1000);
  jQuery(".viewless").show(1000);
  jQuery(".viewmore").hide();
  }
  );
  jQuery(".viewless").click(function(){
    jQuery(".productfeatures").hide(1000);
    jQuery(".viewless").hide(1000);
    jQuery(".viewmore").show();
  });
  jQuery('.product-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplayspeed: 1000,
    variableWidth: false,
    speed: 1000
  });
  jQuery('.slick-banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplayspeed: 1000,
    variableWidth: false,
    speed: 500,
  });
  jQuery('.slick-categories').slick({
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 8,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplayspeed: 1000,
    variableWidth: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        }
      }
    ]
  });
  jQuery('.accordionitem').click(function (){
  if(jQuery(this).find('span').hasClass('fa-angle-down'))
  {
    jQuery('.accordionitem').find('span').addClass('fa-angle-down');
    jQuery(this).find('span').removeClass('fa-angle-down');
    jQuery(this).find('span').addClass('fa-angle-up');
  }
  else if(jQuery(this).find('span').hasClass('fa-angle-up'))
  {   
    jQuery(this).find('span').removeClass('fa-angle-up');
    jQuery(this).find('span').addClass('fa-angle-down');
  }
  if(jQuery(this).children().children().hasClass('collapsed')){
    jQuery('.accordionitem').css('background-color','white');
    jQuery(this).css('background-color','#fffbc7');
  }
  else
  {
    jQuery(this).css('background-color','white');
  }
});
});
jQuery('.commerce-order-item-variation-cart-form-form').submit(function(event){
  event.preventDefault(); //prevent default action 
  var post_url = jQuery(this).attr("action"); //get form action url
	var request_method = jQuery(this).attr("method"); //get form GET/POST method
	var form_data = jQuery(this).serialize(); //Encode form elements for submission
	jQuery.ajax({
		url : post_url,
		type: request_method,
		data : form_data
	}).done(function(response){
    Drupal.cartFlyout.fetchCarts();
    Drupal.cartFlyout.flyoutOffcanvasToggle();
	});
});
jQuery(document).ajaxSend(function(){
  jQuery('.loader').fadeIn(250);
});
jQuery(document).ajaxComplete(function(){
  jQuery('.loader').fadeOut(250);
});
