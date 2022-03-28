import { innerWidth } from './script.js';

import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin.js";

gsap.registerPlugin(CSSRulePlugin);

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
	showPecentLoad = document.querySelector('.preloader__load-percent');
	// videos = document.querySelectorAll('video'),
	// videosTottalCount = videos.length,
	// videosLoadedCount = 0;



for (let i = 0; i < imagesTotalCount; i++) {
	const imgClone = document.createElement('img');
	imgClone.onload = imageLoaded;
	imgClone.onerror = imageLoaded;
	imgClone.src = images[i].dataset.src;
}

// for (let i = 0; i < videosTottalCount; i++) {
// 	const vidClone = document.createElement('video');
// 	vidClone.onloadeddata = videoLoaded;
// 	vidClone.onerror=videoLoaded;
// 	vidClone.src = videos[i].dataset.src;
// }
	imagesLoadedCount++;
	showPecentLoad.innerText = Math.round((100 / imagesTotalCount) * imagesLoadedCount) + '%';
	imagesLoadedCount == images.length ? addLoadedClass() : '';
}
// function videoLoaded() {
	// 	++videosLoadedCount;
	// 	videosLoadedCount <= videos.length ? mediaLoaded() : '';
	// }
	
	// function mediaLoaded() {
		// const mediaTotalCount = imagesTotalCount + videosTottalCount;
		// const mediaLoadedCount = imagesLoadedCount + videosLoadedCount;
		// showPecentLoad.innerText = Math.round((100 / mediaTotalCount) * mediaLoadedCount) + '%';
		// imagesLoadedCount == imagesTotalCount ? addLoadedClass() : '';
		// imagesLoadedCount == imagesTotalCount ? addLoadedClass() : '';
// }
function addLoadedClass() {
	const htmlDucument = document.documentElement;
	setTimeout(() => {
		htmlDucument.classList.add('loaded');

		if (htmlDucument.closest('.loaded')) {
			const headerContainerBefore = CSSRulePlugin.getRule('.header__container:before');
			const headerButtonsrBefore = CSSRulePlugin.getRule('.header__buttons:before');
			if (innerWidth >= 767.98) {
				gsap.timeline()
					.to('.wrapper', { duration: .7, opacity: 1 })
					.to(headerContainerBefore, {
						duration: 0.3, cssRule: {
							width: '96.5%',
						}
					})
					.to(headerButtonsrBefore, {
						duration: 0.3, cssRule: {
							height: '100%',
						}
					}, '-=0.3')
					.from('.header__logo', { opacity: 0, stagger: 0.02, x: -20, duration: 0.3 })
					.from('.header__buttons', { opacity: 0, x: 20, stagger: 0.02 }, '-=0.2')
					.from('.menu__list li', { opacity: 0, y: 20, stagger: 0.02 }, '-=0.3')
					.from('.header__contacts a', { opacity: 0, y: 20, stagger: 0.02 }, '-=0.3')
			} else {
				gsap.to('.wrapper', { duration: .7, opacity: 1 })
			}
		}
	}, 1500);
}
