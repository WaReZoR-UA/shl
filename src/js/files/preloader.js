import { innerWidth } from './script.js';

import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin.js";

gsap.registerPlugin(CSSRulePlugin);

// const indexes = document.querySelectorAll('.preloader__subtitle svg > path')
// if (indexes) {
// 	const tl = gsap.timeline({ defaults: { opacity: 1, ease: 'linear', autoAlpha: 0, duration: 1 } });
// 	tl.from('.preloader__subtitle svg > path', { stagger: .04 })
// }
// //===================================================================Preloader persent logic=====================================================================================
// let
// 	images = document.querySelectorAll('.wrapper img'),
// 	imagesTotalCount = images.length,
// 	imagesLoadedCount = 0,
// 	showPecentLoad = document.querySelector('.preloader__load-percent');

// for (let i = 0; i < imagesTotalCount; i++) {
// 	const imgClone = new Image();
// 	imgClone.onload = imageLoaded;
// 	imgClone.onerror = imageLoaded;
// 	if (images[i].dataset.src) {
// 		imgClone.src = images[i].dataset.src;
// 	} else {
// 		imgClone.src = images[i].src;
// 	}
// }

// function imageLoaded() {
// 	imagesLoadedCount++;
// 	showPecentLoad.innerText = Math.round((100 / imagesTotalCount) * imagesLoadedCount) + '%';
// 	imagesLoadedCount == images.length ? addLoadedClass() : '';
// }
// const headerContainerBefore = CSSRulePlugin.getRule('.header__container:before');
// const headerButtonsrBefore = CSSRulePlugin.getRule('.header__buttons:before');

// function addLoadedClass() {
// 	const htmlDucument = document.documentElement;
// 	setTimeout(() => {
// 		htmlDucument.classList.add('loaded');

// 		if (htmlDucument.closest('.loaded')) {
// 			window.scrollY > 0 ? window.scrollTo(0, 0) : '';
// 			if (innerWidth >= 767.98) {
// 				gsap.timeline()
// 					.to('.wrapper', { duration: .7, opacity: 1 })
// 					.to(headerContainerBefore, {
// 						duration: 0.3, cssRule: {
// 							width: '96.5%',
// 						}
// 					})
// 					.to(headerButtonsrBefore, {
// 						duration: 0.3, cssRule: {
// 							height: '100%',
// 						}
// 					}, '-=0.3')
// 					.from('.header__logo', { opacity: 0, stagger: 0.02, x: -20, duration: 0.3 })
// 					.from('.header__buttons', { opacity: 0, x: 20, stagger: 0.02 }, '-=0.2')
// 					.from('.menu__list li', { opacity: 0, y: 20, stagger: 0.02 }, '-=0.3')
// 					.from('.header__contacts a', { opacity: 0, y: 20, stagger: 0.02 }, '-=0.3')
// 			} else {
// 				gsap.to('.wrapper', { duration: .7, opacity: 1 })
// 			}
// 		}
// 	}, 1500);
// }
