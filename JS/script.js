$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            // autoplay:true,
            nav:true,
            dots:true,
            loop:true,
            margin:10,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        }
    );
  });
  $(document).ready(function(){
    //   clic events
    $(".menus li a").click(function(e){
        // how to proceed
        let target= $(this.attr("href"));
        $("html,body").animate({
            scrollTop:$(target).offset().top - 110
        },1000)  

        e.preventDefault()
    })
})
  