// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { _slideUp, _slideDown } from "./functions.js";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

//========================================================================================================================================================



// 	gsap.fromTo(sections[i], {
// 		// opacity: () => sec.classList.contains('visible') ? 0 : 1
// 	}, {
// 		// opacity: () => sec.classList.contains('visible') ? 1 : 0,
// 		ease: "none",

// 	});

// 	window.addEventListener("scroll", e => {
// 		if (sec.classList.contains('visible')) {
// 			console.log(sec.id);
// 			if (sec.id) {

// 			}
// 		}
// 	});



const sections = gsap.utils.toArray('.page [data-fullscreen]')
// sections.forEach((sec, i) => {
// 	sections[sections.length - 1].classList.add('last-section');
// 	ScrollTrigger.create({
// 		trigger: sections[i],
// 		start: "top top",
// 		end: `bottom 0%`,
// 		// pin: sections[i],
// 		// invalidateOnRefresh: true,
// 		//anticipatePin: 1,
// 		// toggleClass: 'visible',
// 		// scrub: true,
// 		markers: true,
// 		onUpdate: (self) => {
// 			const progress = self.progress;
// 			console.log(progress);
// 			document.querySelector('.pagination-main').style.opacity = progress
// 			// if (progress == 1 && !self.trigger.closest('.last-section')) {
// 			// 	scrollBy(0, sections[i].offsetHeight)
// 			// 	console.log('scroll-down');

// 			// } else if (progress == 0) {
// 			// 	scrollBy(0, -sections[i].offsetHeight);
// 			// 	console.log('scroll-up');
// 			// }
// 		}
// 	}) 
// 	});
// gsap.set('.page', {height: () => (window.innerHeight * sections.length - window.innerHeight) * 2 + document.querySelector('footer').offsetHeight})

export const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } });

// Section 1
tl.to('#sc1', { autoAlpha: 0 })
	.to('.pagination-main', { autoAlpha: 0 }, '<')
	.to('#sc1', { x: "-100vw", duration: 0 })

	// Section 2
	.to('#sc2', { y: "-100vh", duration: 0 }, '<')
	.from('.introduction__title', { y: '50vh', autoAlpha: 0, duration: 0.2 }, '<')
	.to('.pagination-main', { autoAlpha: 1 }, '<')
	.from('.introduction__description', { y: '50vh', autoAlpha: 0, duration: 0.3 }, '<+=0.2')
	.from('.introduction__btn-box', { y: '50vh', autoAlpha: 0, duration: 0.3 }, '<+=0.02')
	.to('.introduction__description', { visibility: 'hidden' })
	.to('.pagination-main', { autoAlpha: 0, duration: 0.1 }, '<')
	.to('.introduction__btn-box', { visibility: 'hidden' }, '<')
	.to('.introduction__title', { scale: 50, transformOrigin: '37.37% 50%', duration: 0.5 }, '<')
	.to('#sc2', { autoAlpha: 0 }, '<+=0.05')

	// Section 3
	.to('#sc3', { y: "-200vh", duration: 0 }, '<')
	.fromTo('#sc3', { autoAlpha: 0 }, { autoAlpha: 1 }, '<')
	.to('.pagination-main', { autoAlpha: 1 }, '<')
	.to('#sc2', { y: "0", duration: 0 })
	// .add("test")
	.fromTo('#sc3', { webkitFilter: "brightness(1)", filter: "brightness(1)" }, { webkitFilter: "brightness(0)", filter: "brightness(0)", })
	.to('.pagination-main', { autoAlpha: 0 }, '<')
	.to('#sc3', { y: "0", duration: 0 })

	// Section 4
	.to('#sc4', { y: "-300vh", duration: 0 }, '<')
	.fromTo("#sc4", { webkitFilter: "brightness(0.1)", filter: "brightness(0.1)" }, { webkitFilter: "brightness(1)", filter: "brightness(1)", duration: 0.1 })
	.to('.pagination-main', { autoAlpha: 1 }, '<')
	.fromTo("#sc4 > *", { yPercent: '150' }, { yPercent: '-150' }, '<')
	.fromTo("#sc4 .promise__pragraph", { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.02, duration: 0.1 }, '<=+0.05')
	.fromTo("#sc4 .promise__pragraph", { autoAlpha: 1 }, { autoAlpha: 0, stagger: 0.03, duration: 0.1 }, '<+=0.20')
	.fromTo("#sc4", { webkitFilter: "brightness(1)", filter: "brightness(1)" }, { webkitFilter: "brightness(0)", filter: "brightness(0)" }, '<')
	.to('.pagination-main', { autoAlpha: 0 }, '<')
	.to('#sc4', { y: "0", duration: 0 })

	// Section 5
	.to('#sc5', { y: "-400vh", duration: 0 }, '<')
	.fromTo('#sc5', { webkitFilter: "brightness(0.1)", filter: "brightness(0.1)" }, { webkitFilter: "brightness(1)", filter: "brightness(1)" }, '<')
	.to('.pagination-main', { autoAlpha: 1 }, '<')
	.fromTo('#sc5', { autoAlpha: 1 }, { autoAlpha: 0 })
	.to('.pagination-main', { autoAlpha: 0 }, '<')
	.to('#sc5', { y: "0", duration: 0 })

	// Section 6
	.to('#sc6', { y: "-500vh", duration: 0 }, '<')
	.fromTo('#sc6', { autoAlpha: 0 }, { autoAlpha: 1 }, '<')
	.to('.pagination-main', { autoAlpha: 1 }, '<')
	.from('.advantages__container .advantages__box img', { xPercent: -100, opacity: 0, stagger: 0.15 })
	.from('.advantages__container .advantages__description', { opacity: 0, stagger: 0.15 }, '<+=0.3')
	.fromTo('#sc6', { webkitFilter: "brightness(1)", filter: "brightness(1)" }, { webkitFilter: "brightness(0.1)", filter: "brightness(0.1)" })
	.to('.pagination-main', { autoAlpha: 0 }, '<')
	.to('#sc6', { y: "0", duration: 0 })

	// Section 7
	.to('#sc7', { y: "-600vh", duration: 0 }, '<')
	.fromTo('#sc7', { webkitFilter: "brightness(0.1)", filter: "brightness(0.1)" }, { webkitFilter: "brightness(1)", filter: "brightness(1)" }, '<')
	.to('.pagination-main', { autoAlpha: 1 }, '<')
	.fromTo('#sc7', { autoAlpha: 1 }, { autoAlpha: 0 })
	.to('.pagination-main', { autoAlpha: 0 }, '<')
	.to('#sc7', { y: "0", duration: 0 })

	// Section 8
	.to('#sc8', { y: "-700vh", duration: 0 }, '<')
	.fromTo('#sc8', { autoAlpha: 0 }, { autoAlpha: 1 }, '<')
	.to('.pagination-main', { autoAlpha: 1 }, '<')
	.from('.team__content', { y: 60, opacity: 0, duration: 0.1 })
	.fromTo('#sc8', { autoAlpha: 1 }, { autoAlpha: 0 })
	.to('.pagination-main', { autoAlpha: 0 }, '<')
	.to('#sc8', { y: "0", duration: 0 })

	// Section 9
	.to('#sc9', { y: "-800vh", duration: 0 }, '<')
	.fromTo('#sc9', { autoAlpha: 0 }, { autoAlpha: 1 }, '<')
	.to('.pagination-main', { autoAlpha: 1 }, '<')

ScrollTrigger.create({
	animation: tl,
	trigger: '.page',
	start: () => "top top",
	end: () => "+=" + (window.innerHeight * sections.length - window.innerHeight),
	// markers: true,
	pin: true,
	scrub: 0.5,
	onUpdate: (self) => {
		const progress = self.progress;
		// document.querySelector('.pagination-main').style.opacity = progress
		// 	console.log(progress)
	}
})

// document.querySelector('.sc2').onclick = () => {
// tl.play('sc2');
// tl.pause('sc2');
// };
//========================================================================================================================================================

//======================================================Video Play Pouse Function==================================================================================================
const player = document.querySelector('.video-service__wrapper');
if (player) {
	const video = player.querySelector('.video-service__video');
	const videoButton = player.querySelector('.video-service__button');
	videoButton.addEventListener('click', (e) => {
		if (video.paused) {
			video.play();
			e.target.classList.add('video-service__button_played');
		} else if (!video.paused) {
			video.pause();
			e.target.classList.remove('video-service__button_played');
		} else if (video.onended) {
			e.target.classList.remove('video-service__button_played');
		}
	});
}
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
const mobileMenuCallback = document.querySelector('.mobile-menu__button');
const mobileFormSummon = document.querySelector('.callback');
const mobileMenuForm = document.querySelector('.mobile-menu__form');
const formButton = document.querySelector('.form__button');

//========================================================================================================================================================

export let innerWidth = window.innerWidth;
window.addEventListener("load", () => {

	//Copy text media inquiry
	if (innerWidth <= 767.98) {
		const projectsCardCity = document.querySelectorAll('.block-main-projects__city');
		if (projectsCardCity) {
			projectsCardCity.forEach(el => {
				el.innerHTML = '<span>' + el.closest('.block-main-projects__row').querySelector('.block-main-projects__where').innerText + '</span>' + el.innerHTML;
			});
		}
	}

	//========================================================================================================================================================

	// counter textarea value
	const charMaxCol = document.querySelectorAll('.form__char-max');
	if (charMaxCol.length) {
		charMaxCol.forEach(charMax => {
			let maxValue = charMax.parentElement.querySelector('textarea').getAttribute('maxlength');
			let textarea = charMax.parentElement.querySelector('textarea');
			textarea.oninput = () => {
				textarea.value ? charMax.innerHTML = textarea.value.length + '/' + maxValue : charMax.innerHTML = '1000 char max';
			};
		});
	}

	//========================================================================================================================================================

	// Real time in New-York
	const blockCurrentDate = document.querySelector("#time");
	if (blockCurrentDate) {
		setInterval(() => {
			date();
		}, 1000);
		date();
		function date() {
			const date = new Date;
			let currentHourse, currentMinutes, prepand;
			currentHourse = date.getUTCHours() - 4;
			currentMinutes = date.getMinutes();
			prepand = (currentHourse >= 12) ? " pm " : " am ";

			currentHourse > 12 ? currentHourse = currentHourse - 12 : '';
			currentHourse < 10 ? currentHourse = "0" + currentHourse : '';
			currentMinutes < 10 ? currentMinutes = "0" + currentMinutes : '';

			blockCurrentDate.innerText = currentHourse + ':' + currentMinutes + prepand;
		}
	}

	//========================================================================================================================================================

	// contacts Click and animation form
	const contsctsPage = document.querySelector('.contacts');
	if (contsctsPage) {
		const startForm = document.querySelector('#start-form');
		const formClients = document.querySelector('#form-clients');
		const formVendors = document.querySelector('#form-vendors');

		_slideUp(formClients, 0);
		_slideUp(formVendors, 0);

		contsctsPage.addEventListener("click", e => {
			const target = e.target;

			if (target.closest('.form__checkbox-label_select')) {
				const buttons = target.closest('.form__radio-box').querySelectorAll('.form__checkbox-label_select');
				if (buttons.length) {
					buttons.forEach(button => {
						if (target.closest('.form__checkbox-label_select')) {
							button.classList.remove('active');
							target.classList.add('active');
							const input = target.closest('.form__input').querySelector('input');
							input.value = target.querySelector('.form__checkbox-text').innerText;
							input.value !== '' ? input.classList.add('active') : input.classList.remove('active');
						}
					});
				}
			}

			if (target.closest('.form__close')) {
				_slideUp(target.closest('.form'));
				_slideDown(startForm);
			}

			if (target.closest('.form__select-all')) {
				const checkboxAll = target.closest('.form').querySelectorAll('.form__checkbox-input_checkbox');
				checkboxAll.forEach(checkbox => {
					checkbox.setAttribute('checked', '');
				});
			}
			if (target.closest('#clients')) {
				_slideUp(startForm);
				_slideDown(formClients);
			}
			if (target.closest('#vendors')) {
				_slideUp(startForm);
				_slideDown(formVendors);
			}
		});
	}
});

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

mobileMenuCallback.addEventListener('click', function (e) {
	if (e) {
		function summonMobileMenuForm() {
			mobileMenuForm.classList.add('_form-active');
		}
		summonMobileMenuForm();
	};
});

formButton.addEventListener('click', function (e) {
	if (e) {
		mobileMenuForm.classList.remove('_form-active');
	}
});

mobileFormSummon.addEventListener("click", function (e) {
	if (e) {
		headerContainer.classList.add('_active-menu');
		headerMenu.classList.add('_active-menu');
		headerButtons.classList.add('_active-menu');
		mobileMenu.classList.add('_active-menu');
		mobileMenuForm.classList.add('_form-active');
	}
});

//====================================================Phone mask====================================================================================================
let phoneInputs = document.querySelectorAll('input[data-tel]');

if (phoneInputs.length) {

	let getInputNumberOnly = function (input) {
		return input.value.replace(/\D/g, '');
	}

	let onPhoneIntup = function (e) {
		let input = e.target;
		let inputNumberValue = getInputNumberOnly(input);
		let formattedInpuValue = '';
		let selectionStart = input.selectionStart;


		if (!inputNumberValue) {
			return input.value = '';
		}

		if (input.value.length != selectionStart) {
			if (e.data && /\D/g.test(e.data)) {
				input.value = inputNumberValue;
			}
			return;
		}

		if (inputNumberValue > -1) {
			let firstSimbols = inputNumberValue[0] == '1' ? '+1 ' : ('+1 (' + inputNumberValue);
			formattedInpuValue = firstSimbols;
			if (inputNumberValue.length > 1) {
				formattedInpuValue += '(' + inputNumberValue.substring(1, 4);
			}
			if (inputNumberValue.length >= 5) {
				formattedInpuValue += ') ' + inputNumberValue.substring(4, 7);
			}
			if (inputNumberValue.length >= 8) {
				formattedInpuValue += '-' + inputNumberValue.substring(7, 11);
			}
		} else {
			formattedInpuValue.substring();
		}
		input.value = formattedInpuValue;
	}

	let onPhoneKeyDown = function (e) {
		let input = e.target;
		if (e.keyCode == 8 && getInputNumberOnly(input).length == 1) {
			input.value = '';
		}
	}


	let onPhonePaste = function (e) {
		let pasted = e.clipboardData || window.clipboardData;
		let input = e.target;
		let inputNumberValue = getInputNumberOnly(input);

		if (pasted) {
			let pastedText = pasted.getData('Text');
			if (/\D/g.test(pastedText)) {
				input.value = inputNumberValue;
			}
		}
	}

	for (let i = 0; i < phoneInputs.length; i++) {
		let input = phoneInputs[i];
		input.addEventListener('input', onPhoneIntup);
		input.addEventListener('keydown', onPhoneKeyDown);
		input.addEventListener('paste', onPhonePaste);
	}
}

//======================================================Form Button change text==================================================================================================

document.addEventListener("formSent", function (e) {
	const currentForm = e.detail.form;
	if (currentForm) {
		const formButton = document.querySelector('.form__btn');
		formButton.innerText = 'Request has been Sent'
	}
});