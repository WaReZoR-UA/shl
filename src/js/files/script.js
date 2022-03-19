// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { TextPlugin } from "gsap/TextPlugin.js";

gsap.registerPlugin(ScrollTrigger, TextPlugin);


//=====================================================margin on last child menu item big on mobile===================================================================================================
if (document.querySelector('.mobile-menu__item_big')) {
	const menuBigItems = document.querySelectorAll('.mobile-menu__item_big');
	menuBigItems[menuBigItems.length - 1].classList.add('mobile-menu__item_last')
}


//===============================================mobile menu actions=========================================================================================================
const menuBtn = document.querySelector('.header__burger')
const menuClose = document.querySelector('.mobile-menu__burger')
const headerContainer = document.querySelector('.header__container');
const headerMenu = document.querySelector('.header__menu');
const headerButtons = document.querySelector('.header__buttons');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuBtn) {
	menuBtn.addEventListener("click", function (e) {
		if (e) {
			headerContainer.classList.add('_active-menu')
			headerMenu.classList.add('_active-menu')
			headerButtons.classList.add('_active-menu')
			mobileMenu.classList.add('_active-menu')
		}
	});
}

if (menuClose) {
	menuClose.addEventListener("click", function (e) {
		if (e) {
			headerContainer.classList.remove('_active-menu')
			headerMenu.classList.remove('_active-menu')
			headerButtons.classList.remove('_active-menu')
			mobileMenu.classList.remove('_active-menu')
		}
	});
}


