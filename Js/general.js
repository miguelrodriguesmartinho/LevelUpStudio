// document.getElementById("introVideo").play();

// $("#introVideo").click(function () {
//   if ($("#introVideo").get(0).paused) {
//     $("#introVideo").trigger("play");
//   } else {
//     $("#introVideo").trigger("pause");
//   }
// });

$("#introVideo").prop("muted", true);

$("#introVideo").click(function () {
  if ($("#introVideo").prop("muted")) {
    $("#introVideo").prop("muted", false);
  } else {
    $("#introVideo").prop("muted", true);
  }
});
