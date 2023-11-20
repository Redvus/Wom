(function ($) {

    $('.wrapper').imagesLoaded({
        background: true
    });

    /*==================================================
    =                   SmoothScroll                   =
    ==================================================*/

    gsap.registerPlugin(ScrollTrigger);

    const wrapperLine = document.querySelector('.wrapper-line');

    function scrollSmooth() {
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector('.wrapper'),
            smooth: true,
            // multiplier: 1.2
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(".wrapper", {
            scrollTop(value) {
              return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },

            getBoundingClientRect() {
              return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            }
            // pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
        });

        gsap.from(".wrapper-line", {
            scrollTrigger: {
                trigger: wrapperLine,
                scroller: ".wrapper",
                scrub: true,
                start: "0 0",
                end: () => `+=${document.querySelector(".wrapper").offsetHeight - window.innerHeight}`
                // markers: {
                // 	startColor: "#fff",
                // 	endColor: "#fff"
                // }
            },
            scaleY: 0,
            transformOrigin: "0 0",
            ease: "none"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
    }

    /*============  End of SmoothScroll  =============*/

    function initPage() {
        // scrollSmooth();
        document.body.removeChild(headerBack);
        document.body.removeChild(searchBack);
    }

    function initPageMobile() {
        navMenuOpenMobile();
        searchOpenMobile();

    }

    if (document.body.clientWidth > 768 || screen.width > 768) {
        initPage();
    } else {
        initPageMobile();
    }

})(jQuery);