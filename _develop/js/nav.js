/*===================================
=            Menu Mobile            =
===================================*/

const navButtonMobile = document.getElementById('navButtonMobile'),
    navMainMobile = document.getElementById('navMobile'),
    navButtonLineTop = document.querySelector('.nav-button-line__top'),
    navButtonLineMiddle = document.querySelector('.nav-button-line__middle'),
    navButtonLineBottom = document.querySelector('.nav-button-line__bottom'),
    headerBack = document.getElementById('headerBack')
;

function navMenuOpenMobile() {

    let tl = new gsap.timeline({reversed: true});

    tl
        .to(headerBack, {
            duration: 0.4,
            delay: -1,
            autoAlpha: 1,
            visibility: 'visible',
            // xPercent: -100,
            ease: 'power1'
        })
        .to(navMainMobile, {
            duration: 0.4,
            delay: -1.2,
            x: 0,
            visibility: 'visible',
            // autoAlpha: 1,
            ease: 'power2'
        })
        .to(navButtonLineMiddle, {
            duration: 0.3,
            delay: -0.6,
            rotation: '180deg',
            ease: 'power2'
        })
        .to(navButtonLineTop, {
            duration: 0.3,
            delay: -0.6,
            rotation: '135deg',
            x: '30%',
            y: '200%',
            scaleX: 0.6,
            ease: 'power2'
        })
        .to(navButtonLineBottom, {
            duration: 0.3,
            delay: -0.6,
            rotation: '-135deg',
            x: '30%',
            y: '-200%',
            scaleX: 0.6,
            ease: 'power2'
        })
    ;

    /*jshint -W030 */
    navButtonMobile.addEventListener('click', function () {
        tl.reversed() ? tl.restart() : tl.reverse();
    });
    headerBack.addEventListener("click", function () {
        tl.reverse();
    });

}

$('.item-has-children').children('a').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('submenu-open').next('.submenu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.submenu').slideUp(200);
});

/*=====  End of Menu Mobile  ======*/
