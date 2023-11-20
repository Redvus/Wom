;(function() {



	function initPage() {
		initPhotoSwipeFromDOM('.post-gallery');
	}

	function initPageMobile() {
		initPhotoSwipeFromDOM('.post-gallery');
	}

	if (document.body.clientWidth > 1024 || screen.width > 1024) {

		initPage();

	} else {

		initPageMobile();
	}

}(jQuery));