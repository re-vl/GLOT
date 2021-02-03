$(document).ready(function () {
   $(".slider").slick({
      arrows: true,
      slidesToShow: 1,
      autoplay: false,
      speed: 600,
      autoplaySpeed: 800,
      adaptiveHeight: true,
      centerMode: false,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
            },
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });

   // Модальные окна

   $("[data-modal=general]").on("click", function () {
      $(".overlay, #form1").fadeIn("slow"); // появление формы
   });
   //сокрытие всех форм по крестику
   $(".modal__close").on("click", function () {
      $(".overlay, #form1, #thanks").fadeOut("slow");
   });

   //валидация форм
   function validateForms(form) {
      $(form).validate({
         rules: {
            name: {
               required: true,
               minlength: 2,
            },
            phone: "required",
            email: {
               required: true,
               email: true,
            },
         },
         messages: {
            name: {
               required: "Введите ваше имя",
               minlength: jQuery.validator.format(
                  "Введите {0} или более символа!"
               ),
            },
            phone: "Введите номер вашего телефона",
            email: {
               required: "Введите вашу почту",
               email: "Неправильно введен адрес почты",
            },
         },
      });
   }
   validateForms("#form1 form");
   validateForms("#consultForm form");
   validateForms("#questForm form");

   $("input[name=phone]").mask("+7 (999) 999-99-99");

   // форма подтверждения и отправка почты
   /* $("form").submit(function (e) {
      e.preventDefault(); //отменяем стандарт поведение броузера, будет без перезагрузки
      $.ajax({
         //type: "POST",
         //url: "mailer/smart.php",
         //data: $(this).serialize(),
      }).done(function () {
         $(this).find("input").val("");
         $("#form1").fadeOut();
         $(".overlay, #thanks").fadeIn("slow"); //показываем форму благодарности
         $("form").trigger("reset");
      });
      return false;
   });
*/
   // Скролл в начало по иконке pageup

   $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
         $(".pageup").fadeIn();
      } else {
         $(".pageup").fadeOut();
      }
   });

   $("a[href^='#up']").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
   });
});
