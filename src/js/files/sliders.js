/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }

import Swiper, { Navigation, Autoplay, Lazy, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

function setNumberPagination() {
	const paginationCurrent = document.querySelector('[data-pagination-fraction] .swiper-pagination-current');
	const paginationTotal = document.querySelector('[data-pagination-fraction] .swiper-pagination-total');
	if (paginationCurrent) {
		+paginationCurrent.innerText.length < 2 ? paginationCurrent.innerText = "0" + paginationCurrent.innerText : '';
	}
	if (paginationTotal) {
		+paginationTotal.innerText.length < 2 ? paginationTotal.innerText = "0" + paginationTotal.innerText : '';
	}
}

// Инициализация слайдеров
function initSliders() {
	if (document.querySelector('.main-slides__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		let mainSilder = new Swiper('.main-slides__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay, Lazy, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			lazy: {
				loadPrevNext: true,
			},
			/*
			// Эффекты
			effect: 'fade',
			*/
			autoplay: {
				delay: 6000,
				disableOnInteraction: false,
			},
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.controll__prev',
				nextEl: '.controll__next',
			},
			// Пагинация
			pagination: {
				el: '.controll__fractions',
				type: 'fraction',
			},
			// События
			on: {
				slideChange: function () {
					setNumberPagination();
				},
				init: function () {
					setNumberPagination();
				},
			}
		});
	}
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.history__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		let historySlider = new Swiper('.history__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 70,
			autoHeight: true,
			speed: 800,
			// simulateTouch: false,
			grabCursor: true,
			//touchRatio: 0,
			//loop: true,
			//preloadImages: false,
			lazy: {
				loadPrevNext: true,
			},


			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.years-history__pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
		const inputRange = document.querySelector('.years-history__range');
		const paginationYears = document.querySelectorAll('.years-history__pagination .swiper-pagination-bullet');
		if (paginationYears) {
			for (let index = 0; index < paginationYears.length; index++) {
				const pagination = paginationYears[index];
				pagination.setAttribute(`data-history-index`, `${index}`);
				paginationYears[index].innerHTML = `${2015 + index}`;
			}
		}
		if (inputRange) {
			inputRange.setAttribute(`max`, `${(historySlider.slides.length - 1) * 100}`);
			inputRange.oninput = () => {
				historySlider.slideTo(inputRange.value / 100);
			};
			historySlider.on('slideChange', function () {
				inputRange.value = historySlider.realIndex * 100;
			});
		}
	}
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.reviews-about__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		let reviewsSliderAbout = new Swiper('.reviews-about__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 70,
			autoHeight: true,
			speed: 800,
			// simulateTouch: false,
			grabCursor: true,
			//touchRatio: 0,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.reviews-about__pagination',
				type: 'fraction',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.reviews-about__arrow_prev',
				nextEl: '.reviews-about__arrow_next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {
				slideChange: function () {
					setNumberPagination();
				},
				init: function () {
					setNumberPagination();
				},
			}
		});
	}
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.insurance-safety__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		let insuranceSliderAbout = new Swiper('.insurance-safety__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Lazy, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
			speed: 800,
			// simulateTouch: false,
			grabCursor: true,
			//touchRatio: 0,
			loop: true,
			//preloadImages: false,
			lazy: {
				loadPrevNext: true,
			},

			/*
			// Эффекты
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			

			// Пагинация

			pagination: {
				el: '.insurance-safety__pagination',
				type: 'fraction',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.insurance-safety__arrow_prev',
				nextEl: '.insurance-safety__arrow_next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {
				slideChange: function () {
					setNumberPagination();
				},
				init: function () {
					setNumberPagination();
				},
			}
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});