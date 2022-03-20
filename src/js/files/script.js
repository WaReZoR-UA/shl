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
const mobileMenuCallback = document.querySelector('.mobile-menu__button');
const mobileFormSummon = document.querySelector('.callback');
const mobileMenuForm = document.querySelector('.mobile-menu__form');
const formButton = document.querySelector('.form__button');
//========================================================================================================================================================
window.addEventListener("load", function (e) {


	function filterCards() {
		const cards = document.querySelectorAll('[data-filter-card]');
		console.log(cards.length);
		function filter(category, items) {
			items.forEach(item => {
				const isItemFiltered = item.dataset.filterCard;
				const isShowAll = category.toLowerCase() === 'all';

				if (isItemFiltered !== category && !isShowAll) {
					item.classList.add('anime-filter')
				} else {
					item.classList.remove('anime-filter', 'hide-filter');
				}
			});
		}

		document.querySelector('[data-filter-nav]').addEventListener('click', (e) => {
			if (e.target.tagName !== 'A') return false;

			const buttons = document.querySelectorAll('[data-filter-nav] a');

			buttons.forEach(button => {
				button.classList.remove('active');
				e.target.classList.add('active');
				const currentCategory = e.target.dataset.filter;
				filter(currentCategory, cards);

				if (button.classList.contains(`active`)) {
					cards.forEach(card => {
						if (button.dataset.filter === 'commercial') {
							if (cards.length % 2 == 0) {
								card.closest('.block-main-projects__row').classList.remove('under-construction');
								card.closest('.block-main-projects__row').classList.remove('all-filter');
								card.closest('.block-main-projects__row').classList.remove('residential-filter');
								card.closest('.block-main-projects__row').classList.remove('under-construction-odd');
								card.closest('.block-main-projects__row').classList.remove('commercial-filter-odd');
								card.closest('.block-main-projects__row').classList.add('commercial-filter');
							} else {
								card.closest('.block-main-projects__row').classList.remove('under-construction');
								card.closest('.block-main-projects__row').classList.remove('all-filter');
								card.closest('.block-main-projects__row').classList.remove('residential-filter');
								card.closest('.block-main-projects__row').classList.remove('commercial-filter');
								card.closest('.block-main-projects__row').classList.remove('under-construction-odd');
								card.closest('.block-main-projects__row').classList.add('commercial-filter-odd');
							}
						} else if (button.dataset.filter === 'residential') {
							card.closest('.block-main-projects__row').classList.remove('commercial-filter');
							card.closest('.block-main-projects__row').classList.remove('all-filter');
							card.closest('.block-main-projects__row').classList.remove('under-construction');
							card.closest('.block-main-projects__row').classList.remove('under-construction-odd');
							card.closest('.block-main-projects__row').classList.remove('commercial-filter-odd');
							card.closest('.block-main-projects__row').classList.add('residential-filter');
						} else if (button.dataset.filter === 'under-construction') {
							if (cards.length % 2 == 0) {
								card.closest('.block-main-projects__row').classList.remove('residential-filter');
								card.closest('.block-main-projects__row').classList.remove('all-filter');
								card.closest('.block-main-projects__row').classList.remove('commercial-filter');
								card.closest('.block-main-projects__row').classList.remove('under-construction');
								card.closest('.block-main-projects__row').classList.remove('commercial-filter-odd');
								card.closest('.block-main-projects__row').classList.add('under-construction-odd');
							} else {
								card.closest('.block-main-projects__row').classList.remove('residential-filter');
								card.closest('.block-main-projects__row').classList.remove('all-filter');
								card.closest('.block-main-projects__row').classList.remove('commercial-filter');
								card.closest('.block-main-projects__row').classList.remove('commercial-filter-odd');
								card.closest('.block-main-projects__row').classList.remove('under-construction-odd');
								card.closest('.block-main-projects__row').classList.add('under-construction');
							}
						} else {
							card.closest('.block-main-projects__row').classList.remove('residential-filter');
							card.closest('.block-main-projects__row').classList.remove('commercial-filter');
							card.closest('.block-main-projects__row').classList.remove('under-construction');
							card.closest('.block-main-projects__row').classList.remove('under-construction-odd');
							card.closest('.block-main-projects__row').classList.remove('commercial-filter-odd');
							card.closest('.block-main-projects__row').classList.add('all-filter');
						}
					});
				}
			});
			setClassesFilter();
		});

		function setClassesFilter() {
			cards.forEach((card, index) => {
				if (card.classList.contains('anime-filter')) {
					card.classList.add('hide-filter');
				}
			});
		}
		setClassesFilter();



	}
	filterCards();
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

