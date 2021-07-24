/*--------------sticky header------------*/
 $(window).on("scroll", function() {
 	if ($(document).scrollTop() > 50) {
 	  $('header').addClass('shrink');
    } else {
      $('header').removeClass('shrink');
    }
  }); 
    

 /* ------------------ ANIMACTION -----------------*/
  var wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  ).init();


  /*-----------------signup js-------------*/

  $(document).ready(function(){
    $("#hide").click(function(){
      $(".signup").hide();
    });
    $("#show").click(function(){
      $(".signup").show();
    });
  });


/* ------------------ list SLIDER-----------------*/
	
var owl = $('#slider1');
owl.owlCarousel({
loop:true,
margin: 15,
// center:true,
autoplayTimeout:5000,
smartSpeed:450,
dots:true,
nav: true,
navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
responsive: {
  0: {
  items: 1
  },
  600: {
  items: 2
  },
  1000: {
  items: 2
  },
  1200: {
    items: 3
  }
}
})
