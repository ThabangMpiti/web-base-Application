

  // For web animation

  $(function(){

    $("#show-case").hide();
    
  });

  $(function(){

    var state=$("#show-case").hide();
    var getNavBar=$(".navbar").hide();


    if(state){

      state.show(1000);
      getNavBar.show("fast");
     
    }

  });


  $(function(){

    $(".card").mouseenter(function(){

      $(this).animate({

        opacity: "80%",
        width: "80%",
      
      },"fast")

    });

  });

  $(function(){

    $(".card").mouseleave(function(){

      $(this).animate({

        opacity: "100%",
        width: "100%"
      })

    });
    
  });

  $(function(){

    var getstate=$(".Service-Section").hide();

    if(getstate){
      getstate.show(500);

    }

  });




  // Page Scrolling

  $("#Service").click(function() {
    $('html,body').animate({
        scrollTop: $("#goService").offset().top
    }, 800);
  });


  $("#about").click(function() {
    $('html,body').animate({
        scrollTop: $("#GoAbout").offset().top
    }, 800);
  });


  $("#Contacts").click(function() {
    $('html,body').animate({
        scrollTop: $("#GoContacts").offset().top
    }, 800);
  });





















