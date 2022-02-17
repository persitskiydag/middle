/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_modalService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalService */ \"./src/modules/modalService.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_modalService__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('20 february 2022')\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n    formId: 'form1',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'calc-total'\r\n        }\r\n    ]\r\n})\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n    if (document.body.className == 'balkony') {\r\n       const calcBlock = document.getElementById('calc')\r\n        const calcType = document.getElementById('calc-type')\r\n        const calcMaterial = document.getElementById('calc-type-material')\r\n        const calcInput = document.getElementById('calc-input')\r\n        const total = document.getElementById('calc-total')\r\n\r\n        const countCalc = () => {\r\n            const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n            const calcInputValue = calcInput.value\r\n\r\n            let totalValue = 0\r\n\r\n            if (calcType.value && calcInput.value) {\r\n                totalValue = price * calcTypeValue * calcInputValue\r\n            } else {\r\n                totalValue = 0\r\n            }\r\n\r\n            total.textContent = totalValue\r\n        }\r\n\r\n\r\n        calcBlock.addEventListener('input', (e) => {\r\n            if (e.target === calcType || e.target === calcMaterial ||\r\n                e.target === calcInput) {\r\n                    countCalc()\r\n                }\r\n        }) \r\n    }\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.btn-block')\r\n    const modal = document.querySelector('.header-modal')\r\n    const closeBtn = modal.querySelector('.header-modal__close')\r\n    const ovelray = document.querySelector('.overlay')\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = 'block'\r\n            ovelray.style.display = 'block'\r\n        })\r\n    })\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none'\r\n        ovelray.style.display = 'none'\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/modalService.js":
/*!*************************************!*\
  !*** ./src/modules/modalService.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalService = () => {\r\n    const buttons = document.querySelectorAll('.btn-sm')\r\n    const modalService = document.querySelector('.services-modal')\r\n    const closeBtn = modalService.querySelector('.services-modal__close')\r\n    const ovelray = document.querySelector('.overlay')\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modalService.style.display = 'block'\r\n            ovelray.style.display = 'block'\r\n        })\r\n    })\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modalService.style.display = 'none'\r\n        ovelray.style.display = 'none'\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalService);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalService.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const btnToTop = document.querySelector('.smooth-scroll__img')\r\n\r\n\r\n    btnToTop.style.cursor = 'pointer'\r\n    btnToTop.style.display = 'none'\r\n\r\n    const trackScroll = () => {\r\n        let scrolled = window.pageYOffset;\r\n        \r\n        if (scrolled > 2) {\r\n            btnToTop.style.display = 'block'\r\n        }\r\n        if (!scrolled) {\r\n            btnToTop.style.display = 'none'\r\n        }\r\n    }\r\n\r\n    const backToTop = () => {\r\n        if (window.pageYOffset > 0) {\r\n            window.scrollBy(0, -30);\r\n            setTimeout(backToTop, 0);\r\n          }\r\n    }\r\n\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n        if (window.pageYOffset < 300) {\r\n            window.addEventListener('scroll', trackScroll);\r\n        }\r\n    })\r\n    \r\n    btnToTop.addEventListener('click', backToTop);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId)\r\n    const statusBlock = document.createElement('div')\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка...'\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется!'\r\n\r\n    const validate = (list) => {\r\n        let success = true\r\n\r\n\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n\r\n        statusBlock.textContent = loadText\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val\r\n        })\r\n\r\n        someElem.forEach(elem => {\r\n            if (document.body.className == 'balkony') {\r\n                const element = document.getElementById(elem.id)\r\n\r\n                if (elem.type === 'block') {\r\n                    formBody[elem.id] = element.textContent\r\n                } else if (elem.type === 'input') {\r\n                    formBody[elem.id] = element.value\r\n                }\r\n            }\r\n            \r\n        })\r\n\r\n        console.log('submit')\r\n        \r\n        if (validate(formElements)) {\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    statusBlock.textContent = successText\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = ''\r\n                    })\r\n                })\r\n                .catch(error => {\r\n                    statusBlock.textContent = errorText\r\n                })\r\n        } else {\r\n            alert('Данные не валидны!!!')\r\n        }\r\n    }\r\n    \r\n    try {\r\n        if (!form) {\r\n            throw new Error('Верните форму на место, пожалуйста))')\r\n        }\r\n\r\n        form.addEventListener('submit', (event) => {\r\n            event.preventDefault()\r\n    \r\n            submitForm()\r\n        })\r\n    } catch(error) {\r\n        console.log(error.message)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlocks = document.querySelectorAll('.slider')\r\n    // функция получения слайдов\r\n    const getToSlide = (sliderBlock) => {\r\n        const sliderAll = document.querySelectorAll(`.${sliderBlock.id}__item`);\r\n            let slides = []\r\n            let slide1 = []\r\n            let slide2 = []\r\n\r\n            sliderAll.forEach(slide => {\r\n                if (slide.classList.contains('not-active')) {\r\n                    slide2.push(slide)\r\n                } else slide1.push(slide)\r\n            })\r\n            slides.push(slide1)\r\n            slides.push(slide2)\r\n            return {slides}\r\n\r\n    }\r\n    // предыдущий слайд выключаем\r\n    const prevSlide = (slides, index, strClass) => {\r\n        slides[index].forEach(slide => {\r\n            slide.classList.add(strClass)\r\n        })\r\n    };\r\n    // следующий слайд включаем\r\n    const nextSlide = (slides, index, strClass) => {\r\n        slides[index].forEach(slide => {\r\n            slide.classList.remove(strClass)\r\n        })\r\n    };\r\n    // события в блоках со слайдерами\r\n    sliderBlocks.forEach((sliderBlock) => {\r\n        sliderBlock.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            // получение слайдов\r\n            let slides = getToSlide(sliderBlock).slides\r\n            let currentSlide = 0;\r\n\r\n            if (!e.target.closest('.arrow')) {\r\n                return\r\n            }\r\n            \r\n            prevSlide(slides, currentSlide, 'not-active')\r\n            if (e.target.closest('.benefits__arrow--right') || e.target.closest('.services__arrow--right')) {\r\n                currentSlide++;\r\n            } else if (e.target.closest('.benefits__arrow--left') || e.target.closest('.services__arrow--left')) {\r\n                currentSlide--;\r\n            }\r\n            if (currentSlide >= slides.length) {\r\n                currentSlide = 0\r\n            }\r\n            if (currentSlide < 0) {\r\n                currentSlide = slides.length - 1\r\n            }\r\n            nextSlide(slides, currentSlide, 'not-active')\r\n        })\r\n    })\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.querySelector('.count_day')\r\n    const timerHours = document.querySelector('.count_hours')\r\n    const timerMinutes = document.querySelector('.count_minute')\r\n    const timerSeconds = document.querySelector('.count_second')\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        if (days > 0) {\r\n            days--;\r\n            if (days < 10) {\r\n                days = '0' + days;\r\n            }\r\n          }\r\n        if (hours > 0) {\r\n            hours--;\r\n            if (hours < 10) {\r\n                hours = '0' + hours;\r\n            }\r\n          } else {\r\n            hours = 24;\r\n          }\r\n          if (minutes > 0) {\r\n            minutes--;\r\n            if (minutes < 10) {\r\n                minutes = '0' + minutes;\r\n            }\r\n          } else {\r\n            minutes = 60;\r\n          }\r\n          if (seconds > 0) {\r\n            seconds--;\r\n            if (seconds < 10) {\r\n                seconds = '0' + seconds;\r\n            }\r\n          } else {\r\n            seconds = 60;\r\n          }\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining()\r\n\r\n        timerDays.textContent = getTime.days\r\n        timerHours.textContent = getTime.hours\r\n        timerMinutes.textContent = getTime.minutes\r\n        timerSeconds.textContent = getTime.seconds\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            setTimeout(updateClock, 1000)\r\n        }\r\n\r\n    }\r\n    updateClock()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;