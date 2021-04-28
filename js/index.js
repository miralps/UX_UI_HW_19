$(document).ready(function(){
    $(".study1").hover(function(){
      $(this).width(1.25*$(this).width());
      $(this).height(1.25*$(this).height());
    
    },function(){
        $(this).width(0.8*$(this).width());
        $(this).height(0.8*$(this).height());

    });


    // $('.study1').hover(function(){
    //     $(this).css("transform", "scale(1.1, 1.1)");
    //  }, function(){
    //     $(this).css("transform", "none");
    //  });


  

});

