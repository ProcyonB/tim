$(".slider").slick({
  // dots: true,
  cssEase: "ease",
  arrows: true,
  swipeToSlide: true,
});
new WOW().init();

$(document).on("click", ".logo", function () {
  var linkID = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(linkID).offset().top,
    },
    "slow"
  );
  return false;
});

$(".cont_btn").on("click", function () {
  $(".popup").fadeIn();
  return false;
});
$(".close").on("click", function () {
  $(".popup").fadeOut();
  return false;
});
