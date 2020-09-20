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
  $(".contact-form").fadeIn();
  return false;
});
$(".close").on("click", function () {
  $(".contact-form").fadeOut();
  return false;
});

$(".rus").on("click", () => {
  $("#name").html("Тимофей <br/> &#8195; Вахрушев ");
  $("#session").html("сессионный барабанщик");
  $("#about").html("О себе");
  $("#about_text").html(
    "Привет, меня зовут Тимофей! Я очень люблю играть на барабанах и занимаюсь этим последние 15 лет. Регулярно выступаю на концертах и мероприятиях. Являюсь выпускником музыкального училища им. М.П. Мусоргского (Санкт-Петербург). Исполняю музыку в различных стилях, таких как джаз, рок, фьюжн, латина, поп музыка. Сотрудничал с такими коллективами и артистмами как: Mussorgsky Jazz Orchestra, Театр им. Ленсовета, Юлия Чжен, Дмитрий Носков, Гасан Багиров, группа Квинтэссенция, FSBand и многими другими."
  );
  $("#service").html("Услуги");
  $("#show").html("Тур и выступление");
  $("#show_text").html("Сыграю концерт (или несколько) с вами и вашей группой");
  $("#record").html("Запись в студии");
  $("#record_text").html("Запишу живые барабаны в ваш трек или песню");
  $("#lessons").html("Уроки");
  $("#lessons_text").html(
    "Уроки ударных для начинающих и для продвинутых барабанщиков"
  );
  $(".contact_btn").html("Написать");
  $("#contact").html("Контакты");
  $("#contact_me").html("Связаться");
  $("input[name=name]").attr("placeholder", "Имя");
  $("input[name=email]").attr("placeholder", "Email");
  $("textarea[name=comment]").attr("placeholder", "Сообщение");
  $("#or").html("или");
  return false;
});

$(".eng").on("click", () => {
  $("#name").html("Tim <br />&#8195; Vakhrushev");
  $("#session").html("session drummer");
  $("#about").html("About me");
  $("#about_text").html(
    "Hi! My name's Tim & I'm an a session drummer. I really like to play drums. I've been doing this for the past 15 years. I regularlyperform at concerts and events. I am a graduate of a Mussorgsky Music College (Saint-Petersburg). I perform music in various stylessuch as jazz, rock, fusion, latin, pop music. I've played with various bands and artists, such as: Mussorgsky Jazz Orchestra,Lensoviet Theater, Julia Jen, Dmitry Noskov, Gasan Bagirov, Quintessence Band, FSBand and many others."
  );
  $("#service").html("My Services");
  $("#show").html("Touring & Live Show");
  $("#show_text").html("Ready to offer my best on the road and stage");
  $("#record").html("Studio Sessions");
  $("#record_text").html("Remote recording drums in a wide variety of styles");
  $("#lessons").html("Lessons");
  $("#lessons_text").html("Drum Lessons for beginners and advenced drummers");
  $(".contact_btn").html("Contact");
  $("#contact").html("Contacts");
  $("#contact_me").html("Contact me");
  $("input[name=name]").attr("placeholder", "Your name");
  $("input[name=email]").attr("placeholder", "Your email");
  $("textarea[name=comment]").attr("placeholder", "Your message");
  $("#or").html("or");
  return false;
});

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const csrftoken = getCookie("csrftoken");

$(".form").submit(function (e) {
  // e.preventDefault();
  name = $("input[name=name]").val();
  email = $("input[name=email]").val();
  message = $("textarea[name=comment]").val();

  $.ajax({
    headers: { "X-CSRFToken": csrftoken },
    type: "POST",
    dataType: "text",
    url: "../telegram.php",
    data: {
      name: $("input[name=name]").val(),
      email: $("input[name=email]").val(),
      message: $("textarea[name=comment]").val(),
    },
    cache: false,
    success: function (result) {
      $("input[name=name]").val("");
      $("input[name=email]").val("");
      $("textarea[name=comment]").val("");
      // alert("данные отправлены");

      $(".send-popup").fadeIn();
      $(".close").on("click", function () {
        $(".send-popup").fadeOut();
        return false;
      });
    },
    error: function (result) {
      alert("Произошла ошибка. Попробуйте позже.");
      $(".error-popup").fadeIn();
      $(".close").click(function (e) {
        e.preventDefault();
        $(".error-popup").fadeOut();
      });
    },
  });
});
