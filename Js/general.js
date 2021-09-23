$("#introVideo").trigger("play");
$("#introVideo").click(function () {
  if ($("#introVideo").get(0).paused) {
    $("#introVideo").trigger("play");
    $(".introVideo").fadeOut(500);
  } else {
    $("#introVideo").trigger("pause");
    $(".introVideo").fadeIn(500);
  }
});
