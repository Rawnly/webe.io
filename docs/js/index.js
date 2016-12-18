$(document).ready(function() {
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 900);
        return false;
    });

    var bg = new Image();

    bg.onload = function(){
        $("#page1").css("background-image", "url(" + bg.src + ")");
    }

    bg.src = "../css/res/wp.jpg";
});

(function( $ ) {
  $.fn.isVisible = function () {
    if ( this.is(':visible') ) {
      return true
    } else {
      return false
    }
  }
} ( jQuery ) );
