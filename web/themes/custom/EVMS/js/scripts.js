jQuery(".viewless").hide();
//preloader
jQuery(window).on('load', function() {
  if (jQuery('#preloader').length) {
    jQuery('#preloader').delay(100).fadeOut('slow', function() {
      jQuery(this).remove();
    });
  }
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
jQuery(window).scroll(function() {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.back-to-top').fadeIn('slow');
  } else {
    jQuery('.back-to-top').fadeOut('slow');
  }
});
//autocomplete
jQuery( "#template-custom" ).on( "focus", function() {
  console.log("here");
  jQuery(this).css("background-image","none");
});
jQuery("#template-custom").focusout(function(){
  jQuery(this).css("background-image","url(https://master-7rqtwti-apsxsjiaatmum.us-2.platformsh.site/sites/default/files/2020-11/icon_search.png)");
});
var options = {
  data: [ {name: "Onion",description: "vegetables", icon: "https://master-7rqtwti-apsxsjiaatmum.us-2.platformsh.site/sites/default/files/2020-11/product1.jpg", websitelink: "/categories?product=onion",},
    {name: "Rice" ,description: "Grocery & Staples", icon: "https://master-7rqtwti-apsxsjiaatmum.us-2.platformsh.site/sites/default/files/2020-11/product21.jpg", websitelink: "/categories?product=rice"},
    {name: "Tomato",description: "vegetables", icon: "https://master-7rqtwti-apsxsjiaatmum.us-2.platformsh.site/sites/default/files/2020-11/tomato2.png", websitelink: "/categories?product=tomato"},
    {name: "Ginger",description: "vegetables", icon: "https://master-7rqtwti-apsxsjiaatmum.us-2.platformsh.site/sites/default/files/2020-11/ginger2.png",websitelink: "/categories?product=ginger"},
    {name: "Lemon",description: "vegetables", icon: "https://master-7rqtwti-apsxsjiaatmum.us-2.platformsh.site/sites/default/files/2020-11/lemon2%20copy.png",websitelink: "/categories?product=lemon"},
    {name: "Cucumber",description: "vegetables", icon: "https://master-7rqtwti-apsxsjiaatmum.us-2.platformsh.site/sites/default/files/2020-11/cucumber2.png",websitelink: "/categories?product=cucumber"},
    {name: "Vegetables & Fruits",description: "Categories", icon: "https://master-7rqtwti-apsxsjiaatmum.us-2.platformsh.site/sites/default/files/2020-11/tomato2.png",websitelink: "/categories/cid/vegetables-fruits-2"},
    {name: "Grocery & Staples",description: "Categories", icon: "https://master-7rqtwti-apsxsjiaatmum.us-2.platformsh.site/sites/default/files/2020-11/product21.jpg",websitelink: "/categories/cid/grocery-staples-5"},],
  getValue: "name",
  list: {
    match: {
      enabled: true
    }
  },
  template: {
    type: "custom",
    method: function(value, item) {
      return "<a class='text-left' href='" + item.websitelink+ "'> <img src='" + item.icon + "' height='45' width='45' /><p class='d-inline prod-name'>  "+ value +" in </p><p class='d-inline prod-cat'>  "+ item.description +" </p></a>";
    }
  }
};
jQuery("#template-custom").easyAutocomplete(options);

jQuery(document).ready(function(){
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
  jQuery('.back-to-top').click(function() {
    console.log('back to top clicked');
    jQuery('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
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
  jQuery('.more-like-this').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: false,
        autoplayspeed: 1000,
        variableWidth: false,
        speed: 500,
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
  jQuery('.loader').fadeIn(250);
	jQuery.ajax({
		url : post_url,
		type: request_method,
		data : form_data
	}).done(function(response){
    Drupal.cartFlyout.fetchCarts();
    Drupal.cartFlyout.flyoutOffcanvasToggle();
    jQuery('.loader').fadeOut(250);
	});
});
jQuery(document).ajaxSend(function(){
  console.log('AJAX SEND');
});
jQuery(document).ajaxComplete(function(){
  console.log('AJAX Complete');
});
