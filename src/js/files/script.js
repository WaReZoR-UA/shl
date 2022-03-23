// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { TextPlugin } from "gsap/TextPlugin.js";
import { _slideUp, _slideDown } from "./functions.js";

gsap.registerPlugin(ScrollTrigger, TextPlugin);
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
window.addEventListener("load", function (e) {

	//Copy text media inquiry
	let innerWidth = window.innerWidth;
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
	const startForm = document.querySelector('#start-form');
	const formClients = document.querySelector('#form-clients');
	const formVendors = document.querySelector('#form-vendors');
	_slideUp(formClients, 0);
	_slideUp(formVendors, 0);
	window.addEventListener("click", function (e) {
		const target = e.target;

		const buttons = document.querySelectorAll('#radio-select .form__checkbox-label_select');
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