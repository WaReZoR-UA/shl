import gsap from "gsap";
const indexes = document.querySelectorAll('.preloader__subtitle svg > path')
if (indexes) {
	const tl = gsap.timeline({ defaults: { opacity: 1, ease: 'linear', autoAlpha: 0, duration: 1 } });
	tl.from('.preloader__subtitle svg > path', { stagger: .04 })
}
//===================================================================Preloader persent logic=====================================================================================
let
	images = document.images,
	imagesTotalCount = images.length,
	imagesLoadedCount = 0,
	showPecentLoad = document.querySelector('.preloader__load-percent'),
	videos = document.querySelectorAll('video'),
	videosTottalCount = videos.length,
	videosLoadedCount = 0;



for (let i = 0; i < imagesTotalCount; i++) {
	const imgClone = new Image();
	imgClone.onload = imageLoaded;
	imgClone.onerror = imageLoaded;
	imgClone.src = images[i].dataset.src;
}

for (let i = 0; i < videosTottalCount; i++) {
	const vidClone = document.createElement('video');
	vidClone.onloadeddata = videoLoaded;
	vidClone.onerror = videoLoaded;
	vidClone.src = videos[i].dataset.src;
}

function imageLoaded() {
	++imagesLoadedCount;
	imagesLoadedCount <= images.length ? mediaLoaded() : '';
}
function videoLoaded() {
	++videosLoadedCount;
	videosLoadedCount <= videos.length ? mediaLoaded() : '';
}

function mediaLoaded() {
	const mediaTotalCount = imagesTotalCount + videosTottalCount;
	const mediaLoadedCount = imagesLoadedCount + videosLoadedCount;
	showPecentLoad.innerText = Math.round((100 / mediaTotalCount) * mediaLoadedCount) + '%';
	if (mediaLoadedCount >= mediaTotalCount) {
		addLoadedClass()
	}
}
function addLoadedClass() {
	window.addEventListener("load", function () {
		setTimeout(function () {
			document.documentElement.classList.add('loaded');
		}, 1000);
	});
}
