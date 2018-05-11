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
  for (var i = 0; i < 100; i++) {
    $(".sample-content").html($(".sample-content").html()+'<div class="card" style="width: 100%;"><img class="card-img-top" src="https://dummyimage.com/800x200/000/fff" alt=""><div class="card-body"><h5 class="card-title">Sample Title</h5><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><a href="#" class="btn btn-primary">Sample Button</a></div></div><br>');
  }
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
          if (sc<$(document).height()-2000) {
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
