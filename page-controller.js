$(".up").click(function() {
    $("html,body").animate({
        scrollTop: 0
    }, 800, function() {
      $("html, body").animate({
          scrollTop: 0
      }, 800);
    });
});

$(".down").click(function() {
  $("html,body").animate({
      scrollTop: $(document).height()
  }, 800, function() {
    $("html, body").animate({
        scrollTop: $(document).height()
    }, 800);
  });
});

$(document).ready(function(){
    if ($(window).scrollTop()<700) {
      $(".up").fadeOut(0);
    }
    $(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        if (sc<700) {
          $(".up").fadeOut(0);
          $(".down").fadeIn(0);
          $(".fixed-bar").css("bottom","20px");
        }else{
          if (sc<$(document).height()-1000) {
            $(".up").fadeIn(0);
            $(".down").fadeIn(0);
            $(".fixed-bar").css("bottom","20px");
          }else{
            $(".down").fadeOut(0);
            $(".up").fadeIn(0);
            $(".fixed-bar").css("bottom","68px");
          }
        }
    });
});

$("#send-message").click(function(){
  alert("Mesajınız gönderildi!");
});
