function hello () {

  return 'world';
}

function addUp (num) {
  return num + num;
}

$(document).ready(function () {

  var paint = "white"

  $(".color")white.on("click", function () {
    paint = $(this).css('background-color');
          })

          $('.row').on('click', function () {

            $(this).css("background-coloror", paint );
          });

});
