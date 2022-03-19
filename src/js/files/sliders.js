/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Lazy } from 'swiper';
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

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main-slides__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-slides__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 1400,

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
				delay: 4000,
				disableOnInteraction: false,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.controll__prev',
				nextEl: '.controll__next',
			},
			// События
			on: {
				slideChange: function (swiper) {
					const curentSlideNumber = document.querySelector('.controll__fraction-curent');
					curentSlideNumber.innerText = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex +1}` : swiper.realIndex + 1;
				},

				init: function (swiper) {
					const totlaNumberOfSlides = document.querySelector('.controll__fraction-all');
					const totalNumberOfRealSlides = document.querySelectorAll('.main-slides__slide:not(.swiper-slide-duplicate)')
					totlaNumberOfSlides.innerText = totalNumberOfRealSlides.length < 10 ? `0${totalNumberOfRealSlides.length}` : totalNumberOfRealSlides.length;
					
				}

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