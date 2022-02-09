$(document).ready(function () {
    console.log("로딩");
    AOS.init();

    //메인 슬라이드 스와이퍼
    var swiper = new Swiper('.first_swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1000,
        parallax: true,
        effect: 'fade',
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });




    //page5 스와이퍼
    var swiper = new Swiper(".second_swiper", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // breakpoints: { //반응형 조건 속성
        //     768: {
        //       slidesPerView: 3,
        //     },
        //     1024: {
        //       slidesPerView: 4,
        //     },
        //   }
    });



    // about 5페이지 말풍선 조건문
    swiper.on('transitionEnd', function () {
        console.log('now index :', swiper.realIndex);
        if (swiper.realIndex == 1) {
            $(".icon_ul_02 .balloon").addClass("balloon01");
        } else {
            $(".icon_ul_02 .balloon").removeClass("balloon01");
        }

        if (swiper.realIndex == 2) {
            $(".icon_ul_03 .balloon").addClass("balloon01");
        } else {
            $(".icon_ul_03 .balloon").removeClass("balloon01");
        }

        if (swiper.realIndex == 3) {
            $(".icon_ul_04 .balloon").addClass("balloon01");
        } else {
            $(".icon_ul_04 .balloon").removeClass("balloon01");
        }

        if (swiper.realIndex == 4) {
            $(".icon_ul_05 .balloon").addClass("balloon01");
        } else {
            $(".icon_ul_05 .balloon").removeClass("balloon01");
        }

        if (swiper.realIndex == 0) {
            $(".icon_ul_01 .balloon").addClass("balloon01");
        } else {
            $(".icon_ul_01 .balloon").removeClass("balloon01");
        }
    });




    // 햄버거 메뉴 클릭하면 GNB나오게하기
    $(".all_menu").click(function (e) {

        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(".header").removeClass("open");
        } else {
            $(this).addClass("on");
            $(".header").addClass("open");
        }
        e.preventDefault();
    });



    // 마우스모양 클릭하면 2번째 이미지로 이동
    $('.mouse').click(function () {
        var offset = $('#about_page2').offset(); //선택한 태그의 위치를 반환
        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

        $('html').animate({
            scrollTop: offset.top
        }, 400);
    });



    // 사이드 버튼 클릭시 최상단, 최하단으로기이동하기
    $('.bt_top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $('.bt_btm').click(function () {
        $('html, body').animate({
            scrollTop: ($(".footer_area").offset().top)
        }, 400);
        return false;
    });



    // 사이드 버튼 스크롤에 방향에 따른 show / hide
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 10);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (st < 150) return;
        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop && st > navbarHeight) {
            $('.side_bnr_wrap').hide();
        } else {
            $('.side_bnr_wrap').show();
        }
        lastScrollTop = st;
    }







    // work 메인top 이미지
    $(window).resize(function () {
        console.log("리사이즈");
        if ($(window).width() < 768) {
            $('.top_visual').removeClass('pc').addClass('mo')
        } else {
            $('.top_visual').removeClass('mo').addClass('pc')
        }
    });




}); //////////////제이쿼리 블럭///////////////////////