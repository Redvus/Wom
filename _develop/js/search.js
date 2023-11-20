/*===================================================
=                   Mobile Search                   =
===================================================*/

const searchButtonMobile = document.getElementById('headerButtonSearch'),
    sidebarLogoMobile = document.querySelector('.sidebar__logo'),
    sidebarSearchMobile = document.querySelector('.sidebar__search'),
    sidebarSearchWrapper = document.querySelector('.wrapper'),
    searchBack = document.getElementById('searchBack')
;

function searchOpenMobile() {

    var tl = new gsap.timeline({reversed: true});

    tl
        .to([sidebarLogoMobile, navButtonMobile, searchButtonMobile], {
            duration: 0.1,
            delay: -1,
            autoAlpha: 0,
            visibility: 'hidden',
            ease: 'power1'
        })
        .to(sidebarSearchMobile, {
            duration: 0.3,
            delay: -0.7,
            y: '0%',
            visibility: 'visible',
            autoAlpha: 1,
            ease: 'power2'
        })
        .to(searchBack, {
            duration: 0.3,
            delay: -0.6,
            autoAlpha: 1,
            // y: '3rem',
            visibility: 'visible',
            // zIndex: 9000,
            ease: 'power1'
        })
    ;

    searchButtonMobile.addEventListener('click', function () {
        tl.reversed() ? tl.restart() : tl.reverse();
    });
    searchBack.addEventListener('click', function () {
        tl.reverse();
    });

}

/*============  End of Mobile Search  =============*/