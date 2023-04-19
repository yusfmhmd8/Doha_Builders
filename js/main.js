(function ($) {

    'use strict';

    // bootstrap dropdown hover

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();


    $('nav .dropdown').hover(function () {
        var $this = $(this);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        $this.find('.dropdown-menu').addClass('show');


    }, function () {
        var $this = $(this);
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        $this.find('.dropdown-menu').removeClass('show');
    });


    $('#dropdown04').on('show.bs.dropdown', function () {
        console.log('show');
    });
    /*('body').niceScroll({
        cursorcolor: "#4267b2",
        cursorwidth: "15px",
        cursorborder: "1px solid #4267b2",
        autohidemode:false,
    });*/
    // home slider
    $('.home-slider').owlCarousel(    {
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: ' fadeOut ',
        animateIn: 'fadeIn',
        nav: true,
        autoplayHoverPause: true,
        items: 1,
        dragTouch: false,
        navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    });



    $('.nonloop-block-11').owlCarousel({
        center: false,
        items: 1,
        loop: false,
        stagePadding: 20,
        margin: 50,
        nav: true,
        smartSpeed: 1000,
        navText: ['<span class="ion-chevron-left">', '<span class="ion-chevron-right">'],
        responsive: {
            600: {
                stagePadding: 20,
                items: 1
            },
            800: {
                stagePadding: 20,
                items: 1
            },
            1000: {
                // stagePadding: 200,
                items: 1
            }
        }
    });

    // owl carousel
    var majorCarousel = $('.js-carousel-1');
    majorCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        stagePadding: 7,
        margin: 20,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        autoplayHoverPause: true,
        items: 3,
        navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    // owl carousel
    var major2Carousel = $('.js-carousel-2');
    major2Carousel.owlCarousel({
        loop: true,
        autoplay: true,
        stagePadding: 7,
        margin: 20,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        autoplayHoverPause: true,
        items: 4,
        navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });


    var contentWayPoint = function () {
        var i = 0;
        $('.element-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('element-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .element-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn element-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft element-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight element-animated');
                            } else {
                                el.addClass('fadeInUp element-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 100);
                    });

                }, 100);

            }

        }, {
            offset: '95%'
        });
    };
    contentWayPoint();

    $('.navbar .dropdown > a').click(function () {
        location.href = this.href;
    });
    /* Start Dynamic Tabs */
    $(".tab-list li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".content-list > div").hide();
        $($(this).attr("data-content")).fadeIn(300);
    });
    /* End Dynamic Tabs */
    $(".navbar-toggler").click(function () {
        $(this).css("border-color", "red")
    });
    /* $(".nav-toggler").click(function(){
        $(".n-toggler").show();
          $(this).hide();
    });
       $(".n-toggler").click(function(){
        $(".nav-toggler").show();
          $(this).hide();
    });*/

    var $myCarousel = $('#carouselExampleControls');

    // Initialize carousel
    $myCarousel.carousel();

    function doAnimations(elems) {
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');

            // Add animate.css classes to
            // the elements to be animated
            // Remove animate.css classes
            // once the animation event has ended
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    // Select the elements to be animated
    // in the first slide on page load
    var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
        .find('[data-animation ^= "animated"]');

    // Apply the animation using the doAnimations()function
    doAnimations($firstAnimatingElems);

    // Attach the doAnimations() function to the
    // carousel's slide.bs.carousel event
    $myCarousel.on('slide.bs.carousel', function (e) {
        // Select the elements to be animated inside the active slide
        var $animatingElems = $(e.relatedTarget)
            .find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });
    $(window).each(function () {
        if ($(window).scrollTop() > 250) {
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut(-3000);
        }
    });
    /* Screen To Top */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut(-3000);
        }
    });
    $(".scroll-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600)
    })
    $(".ul-list li").on("click", function () {
        $(this).addClass("ul-active").siblings().removeClass("ul-active");
        $(".con-gallery>div").hide();
        $($(this).attr("data-gall")).fadeIn(1000);
    });
   $('form').submit(function(e){
        var name=document.getElementById('one'),
            email = document.getElementById('two'),
            phone = document.getElementById('three'),
            message=document.getElementById('four');
        if(!name.value || !email.value || !message.value || !phone.value ){
            alertify.error('Please Check ')
        }
         
        else{
            $.ajax({
            url: "https://formspree.io/moqwzjvo" ,
			method:'POST',
			data:$('form').serialize(),
			dataType:"json",
			 

		});		
            e.preventDefault()
            $(this).get(0).reset()
            alertify.success('Message Sent ')
        }
      
    });
     
     
 /*var carouselHight =$("#carouselExampleControls ").innerHeight(),
     captionHight = $(".carousel-caption").innerHight();
    $(".carousel-caption").each(function(){
        $(this).css({
            top:(carouselHight-captionHight)/2
        });
    });*/
 

})(jQuery);
