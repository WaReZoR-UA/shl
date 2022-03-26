import gsap from "gsap";
const indexes = document.querySelectorAll('.preloader__subtitle svg > path')
if (indexes) {
	const tl = gsap.timeline({ defaults: { opacity: 1, ease: 'linear', autoAlpha: 0 } });
	tl.from('.preloader__subtitle svg > path', { stagger: .04 })
}
//===================================================================Preloader persent logic=====================================================================================
let
images 				= document.images,
imagesTotalCount 	= images.length,
imagesLoadedCount 	= 0,
showPecentLoad 		= document.querySelector('.preloader__load-percent'),
videos 				= document.querySelectorAll('video'),
videosTottalCount 	= videos.length,
videosLoadedCount 	= 0;
const mediaTotalCount = imagesTotalCount + videosTottalCount;
const mediaLoadedCount = imagesLoadedCount + videosLoadedCount

for (let i = 0; i < imagesTotalCount; i++) {
	const imgClone = new Image();
	imgClone.onload 	= mediaLoaded;
	imgClone.onerror 	= mediaLoaded;
	imgClone.src 		= images[i].src;
}

for (let i = 0; i < videosTottalCount; i++) {
	let vidClone= document.createElement('Video');
	vidClone.onload = mediaLoaded;
	vidClone.onerorr= mediaLoaded;
	vidClone.src = videos[i].src;
}

function mediaLoaded() {
	imagesLoadedCount++;
	videosLoadedCount++;
	showPecentLoad.innerText = Math.round((100 / mediaTotalCount) * mediaLoadedCount) + '%';
	
	if (mediaLoadedCount >= mediaTotalCount) {
		document.documentElement.classList.add('loaded');
	}
}