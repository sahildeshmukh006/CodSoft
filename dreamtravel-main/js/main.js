$(function(){

  $('.gallery-slider__inner').slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    fade: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        slidesToShow: 4,
        centerMode: true,
        centerPadding: '50px',
        }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '50px',
        }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px',
      }
    },
    
  ],
    prevArrow: '<div class="arrow arrow--prev"><svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292896 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292896 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292896 8.70711ZM36 9H1V7H36V9Z" fill="#B0B0B0"/></svg></div>',
    nextArrow: '<div class="arrow arrow--next"><svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292896 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292896 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292896 8.70711ZM36 9H1V7H36V9Z" fill="#B0B0B0"/></svg></div>',
  });

  $('.select-slider__inner').slick({
    dots: true,
    arrows: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        slidesToShow: 2,
        }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px',
      }
    },
    
  ],
    prevArrow: '<div class="arrow arrow--prev"><svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292896 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292896 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292896 8.70711ZM36 9H1V7H36V9Z" fill="#B0B0B0"/></svg></div>',
    nextArrow: '<div class="arrow arrow--next"><svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292896 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292896 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292896 8.70711ZM36 9H1V7H36V9Z" fill="#B0B0B0"/></svg></div>',
  });

  $('.tours-slider__inner').slick({
    dots: true,
    arrows: true,
    // infinite: true,
    // slidesToShow: 6,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        slidesToShow: 2,
        }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '40px',
        }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px',
      }
    },
  ],
    prevArrow: '<div class="arrow arrow--prev"><svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292896 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292896 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292896 8.70711ZM36 9H1V7H36V9Z" fill="#B0B0B0"/></svg></div>',
    nextArrow: '<div class="arrow arrow--next"><svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292896 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292896 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292896 8.70711ZM36 9H1V7H36V9Z" fill="#B0B0B0"/></svg></div>',
  });

  $(".button.rus_lang").click(function(){
    //alert("Нажата кнопка АНГЛИЙСКИЙ");
    var rusLang = document.getElementsByClassName("rus_lang");
    var enLang = document.getElementsByClassName("en_lang");
    for (i = 0; i < enLang.length; i++) {
      enLang[i].style.position = "static";
      rusLang[i].style.position = "absolute";
      rusLang[i].style.top = "-9999px";
      rusLang[i].style.left = "-9999px";
    }
  });

    $(".button.en_lang").click(function(){
      //alert("Нажата кнопка АНГЛИЙСКИЙ");
      var rusLang = document.getElementsByClassName("rus_lang");
      var enLang = document.getElementsByClassName("en_lang");
      for (i = 0; i < enLang.length; i++) {
        rusLang[i].style.position = "static";
        enLang[i].style.position = "absolute";
        enLang[i].style.top = "-9999px";
        enLang[i].style.left = "-9999px";
      }
  });
  
  $('.menu__button, .menu__link').on('click', function(){
    $('.header__top').toggleClass('header__top--active');
    $('body').toggleClass('lock');
  });

  $('.menu__link, .header__link, .logo').on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr('href');
    let scrollPoint = $(scrollAnchor).offset().top;

    if(scrollAnchor === '#about') {
      scrollPoint = scrollPoint - 90;
    } 
    if(scrollAnchor === '#select') {
      scrollPoint = scrollPoint - 90;
    } 

    if(scrollAnchor === '#contacts') {
      scrollPoint = scrollPoint - 90;
    }

    $('html, body').animate({scrollTop: scrollPoint}, 3500);
    return false;
  });

  $window = $(window);
    $window.scroll(function() {
      $scrollPosition = $window.scrollTop();
      if ($scrollPosition > 50) {
        $('.header__top').addClass('header__top--bg');
      } else {
        $('.header__top').removeClass('header__top--bg');
      }
    });


});



// var mixer = mixitup('.gallery__content');