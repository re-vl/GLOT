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
            breakpoint: 576,
            settings: {
               arrows: false,
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
               minlength: jQuery.validator.format("Введите {0} или более символа!"),
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

   // Скролл в начало по иконке pageup

   $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
         $(".pageup").fadeIn();
      } else {
         $(".pageup").fadeOut();
      }
   });

   $("a[href^='#']").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
   });
   //анимации скролла
   const animItems = document.querySelectorAll(".anim-items");

   if (animItems.length > 0) {
      window.addEventListener("scroll", animOnScroll);
      function animOnScroll() {
         for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (
               window.pageYOffset > animItemOffset - animItemPoint &&
               window.pageYOffset < animItemOffset + animItemHeight
            ) {
               animItem.classList.add("active");
            } else {
               if (!animItem.classList.contains("anim-no-hide")) {
                  animItem.classList.remove("active");
               }
            }
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }
      setTimeout(() => {
         animOnScroll();
      }, 300);
   }
});
