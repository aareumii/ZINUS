$(function () {
  $("header .side .btn").on("click", function (e) {
    e.preventDefault();
    $("header").toggleClass("open");
  });

  /* side */
  function slide_on() {
    $(".header .side").on("mouseover", function (e) {
      // $('header').css('background', '#F0F0F0');

      $("header").addClass("on");
      $(".header_all_btn").addClass("change");
      $(".header_menu").show();
    });
  }

  // scroll event

  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    var scrollBottom = $(this).scrollTop() + $(this).height() - 60;

    $(".animate-scroll")
      .filter(function () {
        return !$(this).hasClass("do");
      })
      .each(function () {
        if ($(this).offset().top < scrollBottom) {
          $(this).delay(100).addClass("do").removeClass("animate-scroll");
          animateStatus = false;
          //console.log('yes  '+$(this).offset().top ,scrollBottom )
        } else {
          animateStatus = true;
          //console.log("2  "+$(this).offset().top ,scrollBottom )
        }
      });

    if ($(this).scrollTop() > 10) {
      $("header").addClass("on");
    } else {
      $("header").removeClass("on");
    }

    if (scrollTop > before_scrollTop && window.scrollDirection != "down") {
      window.scrollDirection = "down";
      $("header").addClass("invisible");
    } else if (scrollTop < before_scrollTop && window.scrollDirection != "up") {
      window.scrollDirection = "up";
      $("header").removeClass("invisible");
    }
    before_scrollTop = scrollTop;
  });

  // $('header').on('mouseout', function(){
  //     // $('header').css('background', '');
  //     $('header').removeClass('on');
  //     $('.header_all_btn').removeClass('change');
  //     $(".header_menu").hide();
  // });

  //search toggle
  $(".hd_search_btn").click(function () {
    if ($(".header_search").hasClass("on")) {
      $(".header_search").removeClass("on");
    } else {
      $(".header_search").addClass("on");
    }
  });

  //search close
  $(".btn_top_search_close").click(function () {
    $(".header_search").removeClass("on");
  });

  $(".header .header_top li").on("mouseover", function () {
    // $('header').css('background', '#F0F0F0');
    $("header").addClass("on");
    $(".header_all_btn").addClass("change");
  });

  $(".header .header_top li").on("mouseover", function (e) {
    // $('header').css('background', '#F0F0F0');
    $("header").addClass("on");
    $(".header_all_btn").addClass("change");
  });

  /* header_bg */
  $(".header_menu").on("mouseover", function () {
    $("header").addClass("on");
    $(".header_all_btn").addClass("change");
    $(".header_menu").show();
  });

  /* menu */
  $(".header nav li").on("mouseenter", function (e) {
    console.log($(e.target).hasClass("not"));
    if (!$(e.target).hasClass("not")) {
      $(".header_menu").show();
    } else {
      $(".header_menu").hide();
    }
  });

  $("header .header").on("mouseleave", function () {
    // $('header').css('background', '#F0F0F0');
    $("header").removeClass("on");
    $(".header_all_btn").removeClass("change");
  });

  /* header_all_btn*/
  $(".header_all_btn").on("click", function () {
    if ($("header").is(".on") === true) {
      // $('header').css('background', '');
      $("header").removeClass("on");
      $(".header_all_btn").removeClass("change");
      $(".header_menu").hide();
    } else {
      // $('header').css('background', '#F0F0F0');
      $("header").addClass("on");
      $(".header_all_btn").addClass("change");
      $(".header_menu").show();
    }
  });

  //url - product
});
