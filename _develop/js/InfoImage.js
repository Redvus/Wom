class InfoImage {

    infoImageStory(infoImageStoryID, infoImageStoryLink) {
        const postGalleryDescription = document.createElement('div'),
            postGallery = document.querySelector('.post-gallery'),
            postGalleryImages = document.querySelector('.post-gallery__images'),
            iframeEl = document.createElement('iframe'),
            buttonClose = document.createElement('a'),
            postTopButton = document.querySelector('.post__top_buttons'),
            wrapper = document.querySelector('.wrapper'),
            currentPosition = wrapper.pageY;
        ;

        function postGalleryText() {
            let tl = gsap.timeline({
                reversed: true,
                onStart: () => {
                    postGallery.appendChild(postGalleryDescription);
                    postTopButton.appendChild(buttonClose);
                    buttonClose.innerHTML = '<i class="fa-solid fa-close"></i>';
                    postGalleryDescription.className = 'post-gallery__description';
                    buttonClose.className = 'post__top_close';
                    postGalleryDescription.innerHTML = infoImageStoryLink;
                    // postGalleryDescription.appendChild(iframeEl);
                    // iframeEl.src = `${infoImageStoryLink}`;
                    // iframeEl.onload = () => {
                    //     iframeEl.contentDocument;
                    // };
                }
            });

            tl
                .to(postGalleryImages, {
                    duration: 0.3,
                    delay: "-0.3",
                    display: "none",
                    autoAlpha: 0
                })
                .to(postGalleryDescription, {
                    duration: 0.3,
                    delay: "-0.1",
                    display: "flex",
                    autoAlpha: 1
                })
            ;

            /*jshint -W030 */
            infoImageStoryID.addEventListener("click", () => {
                tl.reversed() ? tl.restart() : tl.reverse();
                // if (currentPosition > 0) {
                //     wrapper.scrollTop = 0;
                // }
            });

            buttonClose.addEventListener("click", () => {
                tl.reverse();
                postTopButton.removeChild(buttonClose);
                postGalleryDescription.innerHTML = '';
                postGallery.removeChild(postGalleryDescription);
            });
        }
        postGalleryText();
    }
}