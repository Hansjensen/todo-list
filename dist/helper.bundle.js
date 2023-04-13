"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["helper"],{

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isTomorrow/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isTomorrow/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */

function isTomorrow(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now(), 1));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/DOMmodule.js":
/*!**************************!*\
  !*** ./src/DOMmodule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentList": () => (/* binding */ currentList),
/* harmony export */   "pageTemplate": () => (/* binding */ pageTemplate),
/* harmony export */   "projectListRender": () => (/* binding */ projectListRender),
/* harmony export */   "todoItemRender": () => (/* binding */ todoItemRender)
/* harmony export */ });
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



let currentList = []


function elementBuild (type, attributes, ...children) {

    const element = document.createElement(type)
    
    for (let key in attributes) {

        element.setAttribute(key, attributes[key])
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child))
        }  else{
            element.appendChild(child)
        }
    })

    return element;
}

function pageTemplate() {
    const body = document.querySelector('body')
    const popProject =  popUpBuilder('project');
    const popTodo = popUpBuilder('todo');
    const popEdit = popUpBuilder();
    const overlay = elementBuild('div', {'id' : 'overlay'})
    const template =
    
    elementBuild('div', {'id' : 'wrapper'},
        elementBuild('header', {'id': 'header'}, 
            elementBuild('div', {'id': 'logoDiv'},
                elementBuild('h1', {'id': 'logo'}, "ODIN'S TODO")
            ),
            elementBuild('div', {'id': 'headerAddDiv'},
                elementBuild('button', {'id': 'headerAdd'}, '+'
                ),
                elementBuild('div', {'id': 'dropdown'},
                    elementBuild('a', {'class': 'dropdownLink', 'id' : 'todoAdd'}, 'ADD TODO'),
                    elementBuild('a', {'class': 'dropdownLink', 'id' : 'projectAdd'}, 'ADD PROJECT')
                )
            )
        ),
        elementBuild('div', {'id' : 'sidebar'},
            elementBuild('div', {'id': 'staticLinks'},
                elementBuild('ul', {'id': 'staticList'},
                    elementBuild('li', {'id' : 'listHome'}, 
                        elementBuild('a', {'id' : 'linkHome'}, 'All Tasks')
                    ),
                    elementBuild('li', {'id' : 'listToday'}, 
                        elementBuild('a', {'id' : 'linkToday'}, 'Today')
                    ),
                    elementBuild('li', {'id' : 'listTomorrow'}, 
                        elementBuild('a', {'id' : 'linkTomorrow'}, 'Tomorrow')
                    ),
                    elementBuild('li', {'id' : 'listThisWeek'}, 
                        elementBuild('a', {'id' : 'linkThisWeek'}, 'This Week')
                    ),
                )
            ),
            elementBuild('p', {'id': 'projectsTitle'}, 'PROJECTS'),
            elementBuild('div', {'id': 'projectLinks'})
        ),
        elementBuild('div', {'id' : 'content'},
            elementBuild('div', {'id' : 'contentContainer'},
            )
        ),
    );
    body.appendChild(popEdit)
    body.appendChild(popProject)
    body.appendChild(popTodo)
    body.appendChild(template)
    body.appendChild(overlay)

}


function todoItemRender(list) {
    let container = document.getElementById('contentContainer')
    container.textContent = ''
    currentList = list
  
    for (let i = 0 ; i < list.length; i++) {
        

        let build =
        elementBuild('div', {'class':'todoItem'}, 
                    checkboxBuilder(list[i]),
                    elementBuild('h2', {'class' : 'title', 'id' : 'title_' + list[i].id}, list[i].title),
                    elementBuild('h3', {'class' : 'todoDate'}, list[i].dueDate),
                    selectPriorityBuilder(list[i]),
                    elementBuild('button', {'class' : 'todoEdit', 'id' : 'edit_' + list[i].id}, 'Edit'),
                    elementBuild('button', {'class' : 'todoDelete', 'id' : 'delete_' + list[i].id}, 'Delete')
                )
         let build2 = elementBuild('div', {'class' : 'todoItemLower'},
                    elementBuild('h2', {'class' : 'todoDescription'}, list[i].description),
                    elementBuild('div', {'class':'proListTodoItem'},
                        elementBuild('label', {'for': 'projectPop'}, 'PROJECT'),
                        projectListTodo(list[i].projectId, list[i].id)
                    )
                )


        
        
        container.appendChild(build)
        container.appendChild(build2)
        
        
        
    }

    (0,_listeners__WEBPACK_IMPORTED_MODULE_0__.todoDeleteButtonListener)()
    ;(0,_listeners__WEBPACK_IMPORTED_MODULE_0__.expandTodoItemListener)()
    ;(0,_listeners__WEBPACK_IMPORTED_MODULE_0__.prioritySelectDropdown)()
    ;(0,_listeners__WEBPACK_IMPORTED_MODULE_0__.checkboxListener)()
    ;(0,_listeners__WEBPACK_IMPORTED_MODULE_0__.projectSelectorTodoListener)()
    ;(0,_listeners__WEBPACK_IMPORTED_MODULE_0__.editFormPopUpListener)()
}

function checkboxBuilder(todo) {
    let checkbox = elementBuild('input', {'type' : 'checkbox', 'class' : 'checkBox', 'id' : 'check_' + todo.id})
    if (todo.checked) {
        checkbox.checked = true;
        return checkbox;
    } else {
        checkbox.checked = false;
        return checkbox;
    }
}

function selectPriorityBuilder(todo) {

    let build = elementBuild('select', {'name' : 'priority', 'class' : 'prioritySelect', 'id' : 'priority_' + todo.id},
                        elementBuild('option', {'value' : 'Low', 'id': 'Low'}, 'Low'),
                        elementBuild('option', {'value' : 'Medium', 'id' : 'Medium'}, 'Medium'),
                        elementBuild('option', {'value' : 'High', 'id' : 'High'}, 'High')
                    )
    build.value = todo.priority
    return build

}



function projectListRender(x) {

    let container = document.getElementById('projectLinks')
    let list = elementBuild('ul', {'id': 'projectList'},)
    container.textContent = ""

    for (let i = 0; i < _logic__WEBPACK_IMPORTED_MODULE_1__.projectList.length; i++) {
        let build =
        elementBuild('li', {'class' : 'projectListItem'}, 
                        elementBuild('a', {'class' : 'linkProject', 'id' : 'p' + _logic__WEBPACK_IMPORTED_MODULE_1__.projectList[i].id}, _logic__WEBPACK_IMPORTED_MODULE_1__.projectList[i].title)
                    )
        list.appendChild(build)
    }
    container.appendChild(list)
    ;(0,_listeners__WEBPACK_IMPORTED_MODULE_0__.projectListener)()

}




function popUpBuilder(x) {

    if (x === 'project') {
        let popUpForm = elementBuild('div', {'id' : 'popUpProject'},
        elementBuild('div', {'id' : 'popUpHeader'}, 
            elementBuild('h1', {'id' : 'popUpTitle'}, 'Add Project'),
            elementBuild('button', {'id' : 'popUpProjectClose'}, 'X' )),
        elementBuild('form', {'id' : 'popUpFormP', }, 
        elementBuild('label', {'for' : 'titlePop',"class" : 'popLabel' }, 'TITLE'),
        elementBuild('input', {'type' : 'text', 'id' : 'titlePopP', 'name' : 'titlePop'}),
        elementBuild('label', {'for' : 'descriptionPop', "class" : 'popLabel'}, 'DESCRIPTION'),
        elementBuild('textarea', {'type' : 'text', 'id' : 'descriptionPopP', 'name' : 'descriptionPop'}),
        elementBuild('label', {'for' : 'datePop',"class" : 'popLabel' }, 'DATE'),
        elementBuild('input', {'type' : 'date', 'id' : 'datePopP', 'name' : 'datePop'}),
        elementBuild('label', {'for' : 'priorityPop',"class" : 'popLabel' }, 'PRIORITY'),
        elementBuild('select', {'name' : 'priorityPop', 'id' : 'priorityPopP'},
                        elementBuild('option', {'value' : 'Low', }, 'Low'),
                        elementBuild('option', {'value' : 'Medium', }, 'Medium'),
                        elementBuild('option', {'value' : 'High', }, 'High')
                    ),
        elementBuild('input', {'type' : 'submit' , 'value': 'ADD', 'rows' : '10', 'id' : 'submitProjectAdd'}, 'ADD'))

        


    )
    return popUpForm;

    } else if (x === 'todo') {
        let popUpForm = elementBuild('div', {'id' : 'popUpTodo'},
        elementBuild('div', {'id' : 'popUpHeader'}, 
            elementBuild('h1', {'id' : 'popUpTitle'}, 'Add Todo'),
            elementBuild('button', {'id' : 'popUpTodoClose'}, 'X' )),
        elementBuild('form', {'id' : 'popUpFormT' }, 
        elementBuild('label', {'for' : 'titlePop',"class" : 'popLabel' }, 'TITLE'),
        elementBuild('input', {'type' : 'text', 'id' : 'titlePopT', 'name' : 'titlePop'}),
        elementBuild('label', {'for' : 'descriptionPop', "class" : 'popLabel'}, 'DESCRIPTION'),
        elementBuild('textarea', {'type' : 'text', 'id' : 'descriptionPopT', 'name' : 'descriptionPop'}),
        elementBuild('label', {'for' : 'datePop',"class" : 'popLabel' }, 'DATE'),
        elementBuild('input', {'type' : 'date', 'id' : 'datePopT', 'name' : 'datePop'}),
        elementBuild('label', {'for' : 'priorityPop',"class" : 'popLabel' }, 'PRIORITY'),
        elementBuild('select', {'name' : 'priorityPop', 'id' : 'priorityPopT'},
                        elementBuild('option', {'value' : 'Low', }, 'Low'),
                        elementBuild('option', {'value' : 'Medium', }, 'Medium'),
                        elementBuild('option', {'value' : 'High', }, 'High')
                    ),
                    elementBuild('label', {'for' : 'priorityPop',"class" : 'popLabel' }, 'PROJECT'),
        projectListPopUp(),
        elementBuild('input', {'type' : 'submit' , 'value': 'ADD', 'rows' : '10', 'id' : 'submitTodoAdd'}, 'ADD'))

        


    )
    return popUpForm;
    } else {
        let popUpForm = elementBuild('div', {'id' : 'popUpEdit'},
        elementBuild('div', {'id' : 'popUpHeader'}, 
            elementBuild('h1', {'id' : 'popUpTitle'}, 'Edit'),
            elementBuild('button', {'id' : 'popUpEditClose'}, 'X' )),
        elementBuild('form', {'id' : 'editForm'},
            elementBuild('label', {'for' : 'title', 'class' : 'popLabel'}, 'TITLE'),
            elementBuild('input', {'id' :'editTitle', 'name' : 'title', 'type' : 'text'} ),
            elementBuild('label', {'for' : 'description', 'class' : 'popLabel'}, 'DESCRIPTION'),
            elementBuild('input', {'id' :'editDescription', 'name' : 'description', 'type' : 'text'} ),
            elementBuild('label', {'for' : 'date',"class" : 'popLabel' }, 'DATE'),
            elementBuild('input', {'type' : 'date', 'id' : 'editDate', 'name' : 'date'}), 
            elementBuild('input', {'type' : 'submit' , 'value': 'EDIT', 'rows' : '10', 'id' : 'submitEdit'}, 'EDIT')
            )
        )
        return popUpForm;

    }

    

}

function projectListPopUp() {
    
    let element = elementBuild('select', {'name' : 'projectPop', 'id' : 'projectPopT'})
    element.appendChild(elementBuild('option', {'value' : 0}, 'None'))
    for (let i = 0; i < _logic__WEBPACK_IMPORTED_MODULE_1__.projectList.length; i++) {
        let title = _logic__WEBPACK_IMPORTED_MODULE_1__.projectList[i].title
        let id = _logic__WEBPACK_IMPORTED_MODULE_1__.projectList[i].id
        let option = elementBuild('option', {'value' : id}, title)
        element.appendChild(option)
    }
   
    return element
}

function projectListTodo(x, y) {
    
    let element = elementBuild('select', {'name' : 'projectPop', 'class' : 'projectTodoItem', 'id' : 'pro_' + y})
    element.appendChild(elementBuild('option', {'value' : 0}, 'None'))
    for (let i = 0; i < _logic__WEBPACK_IMPORTED_MODULE_1__.projectList.length; i++) {
        let title = _logic__WEBPACK_IMPORTED_MODULE_1__.projectList[i].title
        let id = _logic__WEBPACK_IMPORTED_MODULE_1__.projectList[i].id
        let option = elementBuild('option', {'value' : id}, title)
        element.appendChild(option)
    }
    element.value = x
    
    
    return element
}




/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
let idNum = 0

function todoItem(title, description, dueDate, priority, project) {
    
    
    let todo = {
        id: idNum,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        checked: false,
        projectId: 0
    }
    if (project) {
        
        todo.projectId = project

    } else {
        todo.projectId = 0
    }
    idNum++
    return todo

}
let projId = 1
function project(title, description, dueDate, priority) {
    const project = {
        id: projId,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }
    projId++;
    return project
}


/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTodoListener": () => (/* binding */ allTodoListener),
/* harmony export */   "checkboxListener": () => (/* binding */ checkboxListener),
/* harmony export */   "editFormPopUpListener": () => (/* binding */ editFormPopUpListener),
/* harmony export */   "expandTodoItemListener": () => (/* binding */ expandTodoItemListener),
/* harmony export */   "popUpCloseEditListener": () => (/* binding */ popUpCloseEditListener),
/* harmony export */   "popUpCloseProjectListener": () => (/* binding */ popUpCloseProjectListener),
/* harmony export */   "popUpCloseTodoListener": () => (/* binding */ popUpCloseTodoListener),
/* harmony export */   "popUpDropdown": () => (/* binding */ popUpDropdown),
/* harmony export */   "popUpListenerProject": () => (/* binding */ popUpListenerProject),
/* harmony export */   "popUpListenerTodo": () => (/* binding */ popUpListenerTodo),
/* harmony export */   "prioritySelectDropdown": () => (/* binding */ prioritySelectDropdown),
/* harmony export */   "projectListener": () => (/* binding */ projectListener),
/* harmony export */   "projectSelectorTodoListener": () => (/* binding */ projectSelectorTodoListener),
/* harmony export */   "stopFormRefresh": () => (/* binding */ stopFormRefresh),
/* harmony export */   "submitEditForm": () => (/* binding */ submitEditForm),
/* harmony export */   "submitProjectButton": () => (/* binding */ submitProjectButton),
/* harmony export */   "submitTodoButton": () => (/* binding */ submitTodoButton),
/* harmony export */   "thisWeekListener": () => (/* binding */ thisWeekListener),
/* harmony export */   "todayListener": () => (/* binding */ todayListener),
/* harmony export */   "todoDeleteButtonListener": () => (/* binding */ todoDeleteButtonListener),
/* harmony export */   "tomorrowListener": () => (/* binding */ tomorrowListener)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _DOMmodule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMmodule */ "./src/DOMmodule.js");



function projectListener() {

    document.querySelectorAll('.linkProject').forEach(item =>
        item.addEventListener('click', e =>{
            
            //slice ID number from element ID
            let id = e.target.id.slice(1)
            
            //Create a list of all projects with that projects ID number.
            ;(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.todoItemRender)(_logic__WEBPACK_IMPORTED_MODULE_0__.listByProject(id))
       
        }))


}

function allTodoListener() {

    let listener = document.getElementById('linkHome');

    listener.addEventListener('click', e => {
        (0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.todoItemRender)(_logic__WEBPACK_IMPORTED_MODULE_0__.todoList);
    })
}

function todayListener() {

    let today = document.getElementById('linkToday')
    today.addEventListener('click', e => {
        ;(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.todoItemRender)(_logic__WEBPACK_IMPORTED_MODULE_0__.listByToday())
    } )
}

function tomorrowListener() {

    let today = document.getElementById('linkTomorrow')
    today.addEventListener('click', e => {
        ;(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.todoItemRender)(_logic__WEBPACK_IMPORTED_MODULE_0__.listByTomorrow())
    } )
}

function thisWeekListener() {

    let today = document.getElementById('linkThisWeek')
    today.addEventListener('click', e => {
        ;(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.todoItemRender)(_logic__WEBPACK_IMPORTED_MODULE_0__.listByThisWeek())
    } )
}

function popUpDropdown() {

    let listen = document.getElementById('headerAdd')

    listen.addEventListener('click', e => {

        _logic__WEBPACK_IMPORTED_MODULE_0__.dropdownClass()
        console.log('hey')
      
    } )   
}

window.onclick = function(event) {
    if (!event.target.matches('#headerAdd')) {
  
      var dropdown = document.getElementById("dropdown");
   
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      }
    
  }

function popUpListenerTodo() {

    let listen = document.getElementById('todoAdd')

    listen.addEventListener('click', e => {
        
        _logic__WEBPACK_IMPORTED_MODULE_0__.popUpClass('todo')
       

    })

}

function popUpListenerProject() {

    let listen = document.getElementById('projectAdd')

    listen.addEventListener('click', e => {
       
        _logic__WEBPACK_IMPORTED_MODULE_0__.popUpClass('project');
       

    })

}


function submitTodoButton() {

    let button = document.getElementById('submitTodoAdd')
    button.addEventListener('click', e => {
        let title = document.getElementById('titlePopT').value
        let description = document.getElementById('descriptionPopT').value
        let dueDate = document.getElementById('datePopT').value
        let priority = document.getElementById('priorityPopT').value
        let project = document.getElementById('projectPopT').value
        console.log('hey')
        _logic__WEBPACK_IMPORTED_MODULE_0__.addTodo(title, description,dueDate,priority, project)
        _logic__WEBPACK_IMPORTED_MODULE_0__.popUpClass('todo');
        (0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.todoItemRender)(_logic__WEBPACK_IMPORTED_MODULE_0__.todoList)
        document.getElementById('popUpFormT').reset();
    })

}

function submitProjectButton() {

    let button = document.getElementById('submitProjectAdd')
    button.addEventListener('click', e => {
        let title = document.getElementById('titlePopP').value
        let description = document.getElementById('descriptionPopP').value
        let dueDate = document.getElementById('datePopP').value
        let priority = document.getElementById('priorityPopP').value
        _logic__WEBPACK_IMPORTED_MODULE_0__.addProject(title, description,dueDate,priority)
        _logic__WEBPACK_IMPORTED_MODULE_0__.popUpClass('project');
        (0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.todoItemRender)(_logic__WEBPACK_IMPORTED_MODULE_0__.todoList)
        ;(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.projectListRender)()
        document.getElementById('popUpFormP').reset();
    })

}

function stopFormRefresh() {
    var form = document.getElementById("popUpFormP");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

var formT = document.getElementById("popUpFormT");
function handleForm(event) { event.preventDefault(); } 
formT.addEventListener('submit', handleForm);
var formE = document.getElementById("editForm");
function handleForm(event) { event.preventDefault(); } 
formE.addEventListener('submit', handleForm);
}

function popUpCloseEditListener() {

    let close = document.getElementById('popUpEditClose')
    close.addEventListener('click', e => {
        _logic__WEBPACK_IMPORTED_MODULE_0__.popUpClass('edit');
    })

}

function popUpCloseProjectListener() {
    let close = document.getElementById('popUpProjectClose')
    close.addEventListener('click', e => {
        _logic__WEBPACK_IMPORTED_MODULE_0__.popUpClass('project');
    })
}

function popUpCloseTodoListener() {
    let close = document.getElementById('popUpTodoClose')
    close.addEventListener('click', e => {
        _logic__WEBPACK_IMPORTED_MODULE_0__.popUpClass('todo');
    })
}

function todoDeleteButtonListener() {
    
    let deleteButt = document.querySelectorAll('.todoDelete')
    deleteButt.forEach(item => {
        item.addEventListener('click', e => {
            let todo = e.target.id
            todo = todo.slice(7)
            _logic__WEBPACK_IMPORTED_MODULE_0__.removeTodo(todo);
            (0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.todoItemRender)(_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.currentList);
            console.log(_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.currentList)
        })
    })

}

function expandTodoItemListener() {

    let titletodo = document.querySelectorAll('.title');
    

    titletodo.forEach(item => {
        let parent = item.parentElement
        let drop = parent.nextElementSibling
        item.addEventListener('click', e => {
            
            if (drop.style.display == 'flex') {
                drop.style.display = 'none'
            } else {
                drop.style.display = 'flex'
            }
        })
    })
}

function prioritySelectDropdown() {

    let priority = document.querySelectorAll('.prioritySelect')

    priority.forEach(item => {
        item.addEventListener('change', e => {
            let todoId = item.id.slice(9)
            _logic__WEBPACK_IMPORTED_MODULE_0__.changePriority(todoId, item.value)
            
        })
    })
}

function checkboxListener() {

    let checkbox = document.querySelectorAll('.checkBox')

    checkbox.forEach( item => {
        item.addEventListener('click', e => {
           let id = e.target.id.slice(6)
           _logic__WEBPACK_IMPORTED_MODULE_0__.checkMarkTodo(id)
        })
    })

}

function projectSelectorTodoListener() {

    let project = document.querySelectorAll('.projectTodoItem')

    project.forEach(item => {
        item.addEventListener('change', e => {
            let proId = item.value
            let id = item.id.slice(4)
            _logic__WEBPACK_IMPORTED_MODULE_0__.changeProjectId(id, proId)
            
        })
    })
}

function editFormPopUpListener() {
    let edit = document.querySelectorAll('.todoEdit')
    let title = document.getElementById('editTitle')
    let description = document.getElementById('editDescription')
    let date = document.getElementById('editDate')
    let submit = document.getElementById('submitEdit')
    edit.forEach(item => {
        item.addEventListener('click', e => {
            let todo = _logic__WEBPACK_IMPORTED_MODULE_0__.todoList.find(x => x.id == e.target.id.slice(5))
            title.value = todo.title
            description.value = todo.description
            date.value = todo.dueDate
            submit.setAttribute('data-id', e.target.id.slice(5))
            _logic__WEBPACK_IMPORTED_MODULE_0__.popUpClass('edit')
        })
    })
}

function submitEditForm() {
    let title = document.getElementById('editTitle')
    let description = document.getElementById('editDescription')
    let date = document.getElementById('editDate')
    let submit = document.getElementById('submitEdit')

    submit.addEventListener('click', e => {
       
        _logic__WEBPACK_IMPORTED_MODULE_0__.changeDescription(parseInt(submit.dataset.id), description.value )
        _logic__WEBPACK_IMPORTED_MODULE_0__.changeTitle(parseInt(submit.dataset.id), title.value )
        _logic__WEBPACK_IMPORTED_MODULE_0__.changeDueDate(parseInt(submit.dataset.id), date.value)
        _logic__WEBPACK_IMPORTED_MODULE_0__.popUpClass('edit');
        (0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.todoItemRender)(_logic__WEBPACK_IMPORTED_MODULE_0__.todoList)
        ;(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.projectListRender)()

    })
}


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "changeDescription": () => (/* binding */ changeDescription),
/* harmony export */   "changeDescriptionProject": () => (/* binding */ changeDescriptionProject),
/* harmony export */   "changeDueDate": () => (/* binding */ changeDueDate),
/* harmony export */   "changePriority": () => (/* binding */ changePriority),
/* harmony export */   "changePriorityProject": () => (/* binding */ changePriorityProject),
/* harmony export */   "changeProjectId": () => (/* binding */ changeProjectId),
/* harmony export */   "changeTitle": () => (/* binding */ changeTitle),
/* harmony export */   "changeTitleProject": () => (/* binding */ changeTitleProject),
/* harmony export */   "checkMarkTodo": () => (/* binding */ checkMarkTodo),
/* harmony export */   "dropdownClass": () => (/* binding */ dropdownClass),
/* harmony export */   "listByProject": () => (/* binding */ listByProject),
/* harmony export */   "listByThisWeek": () => (/* binding */ listByThisWeek),
/* harmony export */   "listByToday": () => (/* binding */ listByToday),
/* harmony export */   "listByTomorrow": () => (/* binding */ listByTomorrow),
/* harmony export */   "loadUp": () => (/* binding */ loadUp),
/* harmony export */   "newUserLoad": () => (/* binding */ newUserLoad),
/* harmony export */   "popUpClass": () => (/* binding */ popUpClass),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _DOMmodule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMmodule */ "./src/DOMmodule.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isTomorrow/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");



const todoList = []
const projectList = []
;


function loadUp() {
    if (!localStorage.getItem('todoList')) {
        newUserLoad()
    } else {
       existingUserLoad()
    }
}

function newUserLoad() {
const running = new addTodo('Running', 'Run 45 minutes', '2023-03-01', 'High', 1);
const swimming = new addTodo('swimming', 'swim swim swim', '2023-03-02', 'Medium', 2)
const swimef = new addTodo('swimming', 'swim swim swim', '2023-04-02', 'Medium', 2)
const swimmfdfing = new addTodo('swimming', 'swim swim swim', 'tomorrow', 'Medium', 1)
const workout = new addProject('Workouts', 'my daily workouts', 'this week', 'Medium');
const worke = new addProject('neato', 'my daily workouts', 'this week', 'Medium');
const workdut = new addProject('Longer Title', 'my daily workouts', 'this week', 'Medium');
const wor33out = new addProject('shitts', 'my daily workouts', 'this week', 'Medium');

(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.pageTemplate)();
(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.todoItemRender)(todoList)
;(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.projectListRender)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.allTodoListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.projectListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.todayListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.tomorrowListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.thisWeekListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpListenerTodo)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpListenerProject)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.submitTodoButton)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.submitProjectButton)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.submitEditForm)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.stopFormRefresh)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpDropdown)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpCloseProjectListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpCloseTodoListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpCloseEditListener)()
}

function existingUserLoad() {
todoList = JSON.parse(localStorage.getItem('todoList'))
projectList = JSON.parse(localStorage.getItem('projectList'))
;(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.pageTemplate)();
(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.todoItemRender)(todoList)
;(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.projectListRender)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.allTodoListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.projectListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.todayListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.tomorrowListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.thisWeekListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpListenerTodo)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpListenerProject)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.submitTodoButton)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.submitProjectButton)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.submitEditForm)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.stopFormRefresh)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpDropdown)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpCloseProjectListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpCloseTodoListener)()
;(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.popUpCloseEditListener)()
}


function addTodo(title, description, dueDate, priority, project) {

    let todo = new _factory__WEBPACK_IMPORTED_MODULE_0__.todoItem(title, description, dueDate, priority, project)
    todoList.push(todo)

}

function checkMarkTodo(id) {
    let change = todoList.find(x => x.id == id)

    change.checked = !change.checked;
}


function removeTodo(todo) {
    
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == todo) {
            todoList.splice(i, 1);
            
        }
    }    
    
    for (let i = 0; i < _DOMmodule__WEBPACK_IMPORTED_MODULE_1__.currentList.length; i++) {
        if (_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.currentList[i].id == todo) {
            _DOMmodule__WEBPACK_IMPORTED_MODULE_1__.currentList.splice(i, 1);
            return;
        }
    }
}

function changePriority(id, priority) {

    let change = todoList.find(x => x.id == id)
    
    change.priority = priority;

}

function changeDescription(id, description) {

    let change = todoList.find(x => x.id === id)
    
    change.description = description;
    

}

function changeTitle(todo, title) {

    let change = todoList.find(x => x.id === todo)
    
    change.title = title;
    

}

function changeDueDate(id, date) {
    let change = todoList.find(x => x.id === id)
    change.dueDate = date;
    
}

function changeProjectId(id, proId) {
    let change = todoList.find(x => x.id == id)
    change.projectId = proId

}



function addProject(title, description, dueDate, priority) {

    let project = new _factory__WEBPACK_IMPORTED_MODULE_0__.project(title, description, dueDate, priority)
    projectList.push(project)
}

function removeProject(project) {
    
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].id === project.id) {
            projectList.splice(i, 1);
            return
        }
    }    
}

function changePriorityProject(project, priority) {

    let change = projectList.find(x => x.id === project.id)
    
    change.priority = priority;

}

function changeDescriptionProject(project, description) {

    let change = projectList.find(x => x.id === project.id)
    change.description = description;

}

function changeTitleProject(project, title) {

    let change = todoList.find(x => x.id === project.id)
    change.title = title;

}

function listByToday() {

    let today = todoList.filter(y => (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(y.dueDate))) 
    return today

}

function listByTomorrow() {
    let tomorrow = todoList.filter(y => (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(y.dueDate))) 
    return tomorrow
}

function listByThisWeek() {
    let tomorrow = todoList.filter(y => (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(y.dueDate))) 
    return tomorrow
}

function listByProject(x) {

    let list = todoList.filter(y => y.projectId == x)
    return list
    
}

function popUpClass(x) {
    let popUp;
    let overlay = document.getElementById('overlay')
    if (x === 'project'){
        popUp = document.getElementById('popUpProject')
    } else if (x === 'todo'){
        popUp = document.getElementById('popUpTodo')
    }  else if (x === 'edit') {
        popUp = document.getElementById('popUpEdit')
    }
    

    overlay.classList.toggle('active')
    popUp.classList.toggle('active')

}

function dropdownClass() {
    let dropdown = document.getElementById('dropdown')

    dropdown.classList.toggle('show');

}





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/logic.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUNBOztBQUVPO0FBQ1Asd0NBQXdDLG9EQUFVLENBQUMsb0RBQVE7QUFDM0Q7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9tb3Jyb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NbW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvbW9ycm93XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvbW9ycm93P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvbW9ycm93P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b21vcnJvd1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA3IE9jdG9iZXIgMTQ6MDA6MDAgdG9tb3Jyb3c/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvbW9ycm93KG5ldyBEYXRlKDIwMTQsIDksIDcsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9tb3Jyb3coZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgYWRkRGF5cyhEYXRlLm5vdygpLCAxKSk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHsgcHJvamVjdExpc3RlbmVyLCB0b2RvRGVsZXRlQnV0dG9uTGlzdGVuZXIsIGV4cGFuZFRvZG9JdGVtTGlzdGVuZXIsIHByaW9yaXR5U2VsZWN0RHJvcGRvd24sIGNoZWNrYm94TGlzdGVuZXIsIHByb2plY3RTZWxlY3RvclRvZG9MaXN0ZW5lciwgZWRpdEZvcm1Qb3BVcExpc3RlbmVyIH0gZnJvbSBcIi4vbGlzdGVuZXJzXCJcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vbG9naWNcIlxuXG5sZXQgY3VycmVudExpc3QgPSBbXVxuXG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZCAodHlwZSwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pIHtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcblxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSlcbiAgICB9XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKVxuICAgICAgICB9ICBlbHNle1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgcG9wUHJvamVjdCA9ICBwb3BVcEJ1aWxkZXIoJ3Byb2plY3QnKTtcbiAgICBjb25zdCBwb3BUb2RvID0gcG9wVXBCdWlsZGVyKCd0b2RvJyk7XG4gICAgY29uc3QgcG9wRWRpdCA9IHBvcFVwQnVpbGRlcigpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ292ZXJsYXknfSlcbiAgICBjb25zdCB0ZW1wbGF0ZSA9XG4gICAgXG4gICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICd3cmFwcGVyJ30sXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaGVhZGVyJywgeydpZCc6ICdoZWFkZXInfSwgXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAnbG9nb0Rpdid9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaDEnLCB7J2lkJzogJ2xvZ28nfSwgXCJPRElOJ1MgVE9ET1wiKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCc6ICdoZWFkZXJBZGREaXYnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2J1dHRvbicsIHsnaWQnOiAnaGVhZGVyQWRkJ30sICcrJ1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJzogJ2Ryb3Bkb3duJ30sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnY2xhc3MnOiAnZHJvcGRvd25MaW5rJywgJ2lkJyA6ICd0b2RvQWRkJ30sICdBREQgVE9ETycpLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2EnLCB7J2NsYXNzJzogJ2Ryb3Bkb3duTGluaycsICdpZCcgOiAncHJvamVjdEFkZCd9LCAnQUREIFBST0pFQ1QnKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICdzaWRlYmFyJ30sXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAnc3RhdGljTGlua3MnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ3VsJywgeydpZCc6ICdzdGF0aWNMaXN0J30sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGknLCB7J2lkJyA6ICdsaXN0SG9tZSd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnaWQnIDogJ2xpbmtIb21lJ30sICdBbGwgVGFza3MnKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xpJywgeydpZCcgOiAnbGlzdFRvZGF5J30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdhJywgeydpZCcgOiAnbGlua1RvZGF5J30sICdUb2RheScpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGknLCB7J2lkJyA6ICdsaXN0VG9tb3Jyb3cnfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2EnLCB7J2lkJyA6ICdsaW5rVG9tb3Jyb3cnfSwgJ1RvbW9ycm93JylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsaScsIHsnaWQnIDogJ2xpc3RUaGlzV2Vlayd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnaWQnIDogJ2xpbmtUaGlzV2Vlayd9LCAnVGhpcyBXZWVrJylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdwJywgeydpZCc6ICdwcm9qZWN0c1RpdGxlJ30sICdQUk9KRUNUUycpLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJzogJ3Byb2plY3RMaW5rcyd9KVxuICAgICAgICApLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ2NvbnRlbnQnfSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAnY29udGVudENvbnRhaW5lcid9LFxuICAgICAgICAgICAgKVxuICAgICAgICApLFxuICAgICk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3BFZGl0KVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocG9wUHJvamVjdClcbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcFRvZG8pXG4gICAgYm9keS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSlcbiAgICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0l0ZW1SZW5kZXIobGlzdCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudENvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJydcbiAgICBjdXJyZW50TGlzdCA9IGxpc3RcbiAgXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBcblxuICAgICAgICBsZXQgYnVpbGQgPVxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnY2xhc3MnOid0b2RvSXRlbSd9LCBcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hCdWlsZGVyKGxpc3RbaV0pLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2gyJywgeydjbGFzcycgOiAndGl0bGUnLCAnaWQnIDogJ3RpdGxlXycgKyBsaXN0W2ldLmlkfSwgbGlzdFtpXS50aXRsZSksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaDMnLCB7J2NsYXNzJyA6ICd0b2RvRGF0ZSd9LCBsaXN0W2ldLmR1ZURhdGUpLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RQcmlvcml0eUJ1aWxkZXIobGlzdFtpXSksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYnV0dG9uJywgeydjbGFzcycgOiAndG9kb0VkaXQnLCAnaWQnIDogJ2VkaXRfJyArIGxpc3RbaV0uaWR9LCAnRWRpdCcpLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2J1dHRvbicsIHsnY2xhc3MnIDogJ3RvZG9EZWxldGUnLCAnaWQnIDogJ2RlbGV0ZV8nICsgbGlzdFtpXS5pZH0sICdEZWxldGUnKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgIGxldCBidWlsZDIgPSBlbGVtZW50QnVpbGQoJ2RpdicsIHsnY2xhc3MnIDogJ3RvZG9JdGVtTG93ZXInfSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdoMicsIHsnY2xhc3MnIDogJ3RvZG9EZXNjcmlwdGlvbid9LCBsaXN0W2ldLmRlc2NyaXB0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2NsYXNzJzoncHJvTGlzdFRvZG9JdGVtJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InOiAncHJvamVjdFBvcCd9LCAnUFJPSkVDVCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdExpc3RUb2RvKGxpc3RbaV0ucHJvamVjdElkLCBsaXN0W2ldLmlkKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGQpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZDIpXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdG9kb0RlbGV0ZUJ1dHRvbkxpc3RlbmVyKClcbiAgICBleHBhbmRUb2RvSXRlbUxpc3RlbmVyKClcbiAgICBwcmlvcml0eVNlbGVjdERyb3Bkb3duKClcbiAgICBjaGVja2JveExpc3RlbmVyKClcbiAgICBwcm9qZWN0U2VsZWN0b3JUb2RvTGlzdGVuZXIoKVxuICAgIGVkaXRGb3JtUG9wVXBMaXN0ZW5lcigpXG59XG5cbmZ1bmN0aW9uIGNoZWNrYm94QnVpbGRlcih0b2RvKSB7XG4gICAgbGV0IGNoZWNrYm94ID0gZWxlbWVudEJ1aWxkKCdpbnB1dCcsIHsndHlwZScgOiAnY2hlY2tib3gnLCAnY2xhc3MnIDogJ2NoZWNrQm94JywgJ2lkJyA6ICdjaGVja18nICsgdG9kby5pZH0pXG4gICAgaWYgKHRvZG8uY2hlY2tlZCkge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGNoZWNrYm94O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGNoZWNrYm94O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0UHJpb3JpdHlCdWlsZGVyKHRvZG8pIHtcblxuICAgIGxldCBidWlsZCA9IGVsZW1lbnRCdWlsZCgnc2VsZWN0JywgeyduYW1lJyA6ICdwcmlvcml0eScsICdjbGFzcycgOiAncHJpb3JpdHlTZWxlY3QnLCAnaWQnIDogJ3ByaW9yaXR5XycgKyB0b2RvLmlkfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnTG93JywgJ2lkJzogJ0xvdyd9LCAnTG93JyksXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogJ01lZGl1bScsICdpZCcgOiAnTWVkaXVtJ30sICdNZWRpdW0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnSGlnaCcsICdpZCcgOiAnSGlnaCd9LCAnSGlnaCcpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICBidWlsZC52YWx1ZSA9IHRvZG8ucHJpb3JpdHlcbiAgICByZXR1cm4gYnVpbGRcblxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RMaXN0UmVuZGVyKHgpIHtcblxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpbmtzJylcbiAgICBsZXQgbGlzdCA9IGVsZW1lbnRCdWlsZCgndWwnLCB7J2lkJzogJ3Byb2plY3RMaXN0J30sKVxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCJcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJ1aWxkID1cbiAgICAgICAgZWxlbWVudEJ1aWxkKCdsaScsIHsnY2xhc3MnIDogJ3Byb2plY3RMaXN0SXRlbSd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnY2xhc3MnIDogJ2xpbmtQcm9qZWN0JywgJ2lkJyA6ICdwJyArIHByb2plY3RMaXN0W2ldLmlkfSwgcHJvamVjdExpc3RbaV0udGl0bGUpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChidWlsZClcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXG4gICAgcHJvamVjdExpc3RlbmVyKClcblxufVxuXG5cblxuXG5mdW5jdGlvbiBwb3BVcEJ1aWxkZXIoeCkge1xuXG4gICAgaWYgKHggPT09ICdwcm9qZWN0Jykge1xuICAgICAgICBsZXQgcG9wVXBGb3JtID0gZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICdwb3BVcFByb2plY3QnfSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICdwb3BVcEhlYWRlcid9LCBcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaDEnLCB7J2lkJyA6ICdwb3BVcFRpdGxlJ30sICdBZGQgUHJvamVjdCcpLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdidXR0b24nLCB7J2lkJyA6ICdwb3BVcFByb2plY3RDbG9zZSd9LCAnWCcgKSksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnZm9ybScsIHsnaWQnIDogJ3BvcFVwRm9ybVAnLCB9LCBcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICd0aXRsZVBvcCcsXCJjbGFzc1wiIDogJ3BvcExhYmVsJyB9LCAnVElUTEUnKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdpbnB1dCcsIHsndHlwZScgOiAndGV4dCcsICdpZCcgOiAndGl0bGVQb3BQJywgJ25hbWUnIDogJ3RpdGxlUG9wJ30pLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ2Rlc2NyaXB0aW9uUG9wJywgXCJjbGFzc1wiIDogJ3BvcExhYmVsJ30sICdERVNDUklQVElPTicpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3RleHRhcmVhJywgeyd0eXBlJyA6ICd0ZXh0JywgJ2lkJyA6ICdkZXNjcmlwdGlvblBvcFAnLCAnbmFtZScgOiAnZGVzY3JpcHRpb25Qb3AnfSksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAnZGF0ZVBvcCcsXCJjbGFzc1wiIDogJ3BvcExhYmVsJyB9LCAnREFURScpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdkYXRlJywgJ2lkJyA6ICdkYXRlUG9wUCcsICduYW1lJyA6ICdkYXRlUG9wJ30pLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ3ByaW9yaXR5UG9wJyxcImNsYXNzXCIgOiAncG9wTGFiZWwnIH0sICdQUklPUklUWScpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3NlbGVjdCcsIHsnbmFtZScgOiAncHJpb3JpdHlQb3AnLCAnaWQnIDogJ3ByaW9yaXR5UG9wUCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdMb3cnLCB9LCAnTG93JyksXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogJ01lZGl1bScsIH0sICdNZWRpdW0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnSGlnaCcsIH0sICdIaWdoJylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdpbnB1dCcsIHsndHlwZScgOiAnc3VibWl0JyAsICd2YWx1ZSc6ICdBREQnLCAncm93cycgOiAnMTAnLCAnaWQnIDogJ3N1Ym1pdFByb2plY3RBZGQnfSwgJ0FERCcpKVxuXG4gICAgICAgIFxuXG5cbiAgICApXG4gICAgcmV0dXJuIHBvcFVwRm9ybTtcblxuICAgIH0gZWxzZSBpZiAoeCA9PT0gJ3RvZG8nKSB7XG4gICAgICAgIGxldCBwb3BVcEZvcm0gPSBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ3BvcFVwVG9kbyd9LFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ3BvcFVwSGVhZGVyJ30sIFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdoMScsIHsnaWQnIDogJ3BvcFVwVGl0bGUnfSwgJ0FkZCBUb2RvJyksXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2J1dHRvbicsIHsnaWQnIDogJ3BvcFVwVG9kb0Nsb3NlJ30sICdYJyApKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdmb3JtJywgeydpZCcgOiAncG9wVXBGb3JtVCcgfSwgXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAndGl0bGVQb3AnLFwiY2xhc3NcIiA6ICdwb3BMYWJlbCcgfSwgJ1RJVExFJyksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaW5wdXQnLCB7J3R5cGUnIDogJ3RleHQnLCAnaWQnIDogJ3RpdGxlUG9wVCcsICduYW1lJyA6ICd0aXRsZVBvcCd9KSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICdkZXNjcmlwdGlvblBvcCcsIFwiY2xhc3NcIiA6ICdwb3BMYWJlbCd9LCAnREVTQ1JJUFRJT04nKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCd0ZXh0YXJlYScsIHsndHlwZScgOiAndGV4dCcsICdpZCcgOiAnZGVzY3JpcHRpb25Qb3BUJywgJ25hbWUnIDogJ2Rlc2NyaXB0aW9uUG9wJ30pLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ2RhdGVQb3AnLFwiY2xhc3NcIiA6ICdwb3BMYWJlbCcgfSwgJ0RBVEUnKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdpbnB1dCcsIHsndHlwZScgOiAnZGF0ZScsICdpZCcgOiAnZGF0ZVBvcFQnLCAnbmFtZScgOiAnZGF0ZVBvcCd9KSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICdwcmlvcml0eVBvcCcsXCJjbGFzc1wiIDogJ3BvcExhYmVsJyB9LCAnUFJJT1JJVFknKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdzZWxlY3QnLCB7J25hbWUnIDogJ3ByaW9yaXR5UG9wJywgJ2lkJyA6ICdwcmlvcml0eVBvcFQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnTG93JywgfSwgJ0xvdycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdNZWRpdW0nLCB9LCAnTWVkaXVtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogJ0hpZ2gnLCB9LCAnSGlnaCcpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAncHJpb3JpdHlQb3AnLFwiY2xhc3NcIiA6ICdwb3BMYWJlbCcgfSwgJ1BST0pFQ1QnKSxcbiAgICAgICAgcHJvamVjdExpc3RQb3BVcCgpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdzdWJtaXQnICwgJ3ZhbHVlJzogJ0FERCcsICdyb3dzJyA6ICcxMCcsICdpZCcgOiAnc3VibWl0VG9kb0FkZCd9LCAnQUREJykpXG5cbiAgICAgICAgXG5cblxuICAgIClcbiAgICByZXR1cm4gcG9wVXBGb3JtO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwb3BVcEZvcm0gPSBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ3BvcFVwRWRpdCd9LFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ3BvcFVwSGVhZGVyJ30sIFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdoMScsIHsnaWQnIDogJ3BvcFVwVGl0bGUnfSwgJ0VkaXQnKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYnV0dG9uJywgeydpZCcgOiAncG9wVXBFZGl0Q2xvc2UnfSwgJ1gnICkpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2Zvcm0nLCB7J2lkJyA6ICdlZGl0Rm9ybSd9LFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICd0aXRsZScsICdjbGFzcycgOiAncG9wTGFiZWwnfSwgJ1RJVExFJyksXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0JywgeydpZCcgOidlZGl0VGl0bGUnLCAnbmFtZScgOiAndGl0bGUnLCAndHlwZScgOiAndGV4dCd9ICksXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ2Rlc2NyaXB0aW9uJywgJ2NsYXNzJyA6ICdwb3BMYWJlbCd9LCAnREVTQ1JJUFRJT04nKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaW5wdXQnLCB7J2lkJyA6J2VkaXREZXNjcmlwdGlvbicsICduYW1lJyA6ICdkZXNjcmlwdGlvbicsICd0eXBlJyA6ICd0ZXh0J30gKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAnZGF0ZScsXCJjbGFzc1wiIDogJ3BvcExhYmVsJyB9LCAnREFURScpLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdpbnB1dCcsIHsndHlwZScgOiAnZGF0ZScsICdpZCcgOiAnZWRpdERhdGUnLCAnbmFtZScgOiAnZGF0ZSd9KSwgXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdzdWJtaXQnICwgJ3ZhbHVlJzogJ0VESVQnLCAncm93cycgOiAnMTAnLCAnaWQnIDogJ3N1Ym1pdEVkaXQnfSwgJ0VESVQnKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBwb3BVcEZvcm07XG5cbiAgICB9XG5cbiAgICBcblxufVxuXG5mdW5jdGlvbiBwcm9qZWN0TGlzdFBvcFVwKCkge1xuICAgIFxuICAgIGxldCBlbGVtZW50ID0gZWxlbWVudEJ1aWxkKCdzZWxlY3QnLCB7J25hbWUnIDogJ3Byb2plY3RQb3AnLCAnaWQnIDogJ3Byb2plY3RQb3BUJ30pXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogMH0sICdOb25lJykpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0TGlzdFtpXS50aXRsZVxuICAgICAgICBsZXQgaWQgPSBwcm9qZWN0TGlzdFtpXS5pZFxuICAgICAgICBsZXQgb3B0aW9uID0gZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6IGlkfSwgdGl0bGUpXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH1cbiAgIFxuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmZ1bmN0aW9uIHByb2plY3RMaXN0VG9kbyh4LCB5KSB7XG4gICAgXG4gICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50QnVpbGQoJ3NlbGVjdCcsIHsnbmFtZScgOiAncHJvamVjdFBvcCcsICdjbGFzcycgOiAncHJvamVjdFRvZG9JdGVtJywgJ2lkJyA6ICdwcm9fJyArIHl9KVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6IDB9LCAnTm9uZScpKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRpdGxlID0gcHJvamVjdExpc3RbaV0udGl0bGVcbiAgICAgICAgbGV0IGlkID0gcHJvamVjdExpc3RbaV0uaWRcbiAgICAgICAgbGV0IG9wdGlvbiA9IGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiBpZH0sIHRpdGxlKVxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9XG4gICAgZWxlbWVudC52YWx1ZSA9IHhcbiAgICBcbiAgICBcbiAgICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQge2N1cnJlbnRMaXN0fVxuIiwibGV0IGlkTnVtID0gMFxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIFxuICAgIFxuICAgIGxldCB0b2RvID0ge1xuICAgICAgICBpZDogaWROdW0sXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBwcm9qZWN0SWQ6IDBcbiAgICB9XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgXG4gICAgICAgIHRvZG8ucHJvamVjdElkID0gcHJvamVjdFxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5wcm9qZWN0SWQgPSAwXG4gICAgfVxuICAgIGlkTnVtKytcbiAgICByZXR1cm4gdG9kb1xuXG59XG5sZXQgcHJvaklkID0gMVxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHByb2plY3QgPSB7XG4gICAgICAgIGlkOiBwcm9qSWQsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgfVxuICAgIHByb2pJZCsrO1xuICAgIHJldHVybiBwcm9qZWN0XG59XG4iLCJpbXBvcnQgKiBhcyBsb2dpYyBmcm9tICcuL2xvZ2ljJ1xuaW1wb3J0IHsgcHJvamVjdExpc3RSZW5kZXIsIHRvZG9JdGVtUmVuZGVyLCBjdXJyZW50TGlzdH0gZnJvbSAnLi9ET01tb2R1bGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TGlzdGVuZXIoKSB7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlua1Byb2plY3QnKS5mb3JFYWNoKGl0ZW0gPT5cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vc2xpY2UgSUQgbnVtYmVyIGZyb20gZWxlbWVudCBJRFxuICAgICAgICAgICAgbGV0IGlkID0gZS50YXJnZXQuaWQuc2xpY2UoMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9DcmVhdGUgYSBsaXN0IG9mIGFsbCBwcm9qZWN0cyB3aXRoIHRoYXQgcHJvamVjdHMgSUQgbnVtYmVyLlxuICAgICAgICAgICAgdG9kb0l0ZW1SZW5kZXIobG9naWMubGlzdEJ5UHJvamVjdChpZCkpXG4gICAgICAgXG4gICAgICAgIH0pKVxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbFRvZG9MaXN0ZW5lcigpIHtcblxuICAgIGxldCBsaXN0ZW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5rSG9tZScpO1xuXG4gICAgbGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgdG9kb0l0ZW1SZW5kZXIobG9naWMudG9kb0xpc3QpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheUxpc3RlbmVyKCkge1xuXG4gICAgbGV0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmtUb2RheScpXG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgdG9kb0l0ZW1SZW5kZXIobG9naWMubGlzdEJ5VG9kYXkoKSlcbiAgICB9IClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvbW9ycm93TGlzdGVuZXIoKSB7XG5cbiAgICBsZXQgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlua1RvbW9ycm93JylcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICB0b2RvSXRlbVJlbmRlcihsb2dpYy5saXN0QnlUb21vcnJvdygpKVxuICAgIH0gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpc1dlZWtMaXN0ZW5lcigpIHtcblxuICAgIGxldCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5rVGhpc1dlZWsnKVxuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIHRvZG9JdGVtUmVuZGVyKGxvZ2ljLmxpc3RCeVRoaXNXZWVrKCkpXG4gICAgfSApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcERyb3Bkb3duKCkge1xuXG4gICAgbGV0IGxpc3RlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJBZGQnKVxuXG4gICAgbGlzdGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cbiAgICAgICAgbG9naWMuZHJvcGRvd25DbGFzcygpXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXknKVxuICAgICAgXG4gICAgfSApICAgXG59XG5cbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcjaGVhZGVyQWRkJykpIHtcbiAgXG4gICAgICB2YXIgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpO1xuICAgXG4gICAgICAgIGlmIChkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIFxuICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcExpc3RlbmVyVG9kbygpIHtcblxuICAgIGxldCBsaXN0ZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0FkZCcpXG5cbiAgICBsaXN0ZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgXG4gICAgICAgIGxvZ2ljLnBvcFVwQ2xhc3MoJ3RvZG8nKVxuICAgICAgIFxuXG4gICAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBMaXN0ZW5lclByb2plY3QoKSB7XG5cbiAgICBsZXQgbGlzdGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RBZGQnKVxuXG4gICAgbGlzdGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgXG4gICAgICAgIGxvZ2ljLnBvcFVwQ2xhc3MoJ3Byb2plY3QnKTtcbiAgICAgICBcblxuICAgIH0pXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0VG9kb0J1dHRvbigpIHtcblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0VG9kb0FkZCcpXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZVBvcFQnKS52YWx1ZVxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25Qb3BUJykudmFsdWVcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZVBvcFQnKS52YWx1ZVxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlQb3BUJykudmFsdWVcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFBvcFQnKS52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZygnaGV5JylcbiAgICAgICAgbG9naWMuYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwgcHJvamVjdClcbiAgICAgICAgbG9naWMucG9wVXBDbGFzcygndG9kbycpO1xuICAgICAgICB0b2RvSXRlbVJlbmRlcihsb2dpYy50b2RvTGlzdClcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwRm9ybVQnKS5yZXNldCgpO1xuICAgIH0pXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdFByb2plY3RCdXR0b24oKSB7XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFByb2plY3RBZGQnKVxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVQb3BQJykudmFsdWVcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uUG9wUCcpLnZhbHVlXG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVQb3BQJykudmFsdWVcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5UG9wUCcpLnZhbHVlXG4gICAgICAgIGxvZ2ljLmFkZFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpXG4gICAgICAgIGxvZ2ljLnBvcFVwQ2xhc3MoJ3Byb2plY3QnKTtcbiAgICAgICAgdG9kb0l0ZW1SZW5kZXIobG9naWMudG9kb0xpc3QpXG4gICAgICAgIHByb2plY3RMaXN0UmVuZGVyKClcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwRm9ybVAnKS5yZXNldCgpO1xuICAgIH0pXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BGb3JtUmVmcmVzaCgpIHtcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wVXBGb3JtUFwiKTtcbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSBcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybSk7XG5cbnZhciBmb3JtVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wVXBGb3JtVFwiKTtcbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSBcbmZvcm1ULmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm0pO1xudmFyIGZvcm1FID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0Rm9ybVwiKTtcbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSBcbmZvcm1FLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBDbG9zZUVkaXRMaXN0ZW5lcigpIHtcblxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcEVkaXRDbG9zZScpXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgbG9naWMucG9wVXBDbGFzcygnZWRpdCcpO1xuICAgIH0pXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwQ2xvc2VQcm9qZWN0TGlzdGVuZXIoKSB7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwUHJvamVjdENsb3NlJylcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBsb2dpYy5wb3BVcENsYXNzKCdwcm9qZWN0Jyk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwQ2xvc2VUb2RvTGlzdGVuZXIoKSB7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwVG9kb0Nsb3NlJylcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBsb2dpYy5wb3BVcENsYXNzKCd0b2RvJyk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9EZWxldGVCdXR0b25MaXN0ZW5lcigpIHtcbiAgICBcbiAgICBsZXQgZGVsZXRlQnV0dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGVsZXRlJylcbiAgICBkZWxldGVCdXR0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGxldCB0b2RvID0gZS50YXJnZXQuaWRcbiAgICAgICAgICAgIHRvZG8gPSB0b2RvLnNsaWNlKDcpXG4gICAgICAgICAgICBsb2dpYy5yZW1vdmVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgdG9kb0l0ZW1SZW5kZXIoY3VycmVudExpc3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudExpc3QpXG4gICAgICAgIH0pXG4gICAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kVG9kb0l0ZW1MaXN0ZW5lcigpIHtcblxuICAgIGxldCB0aXRsZXRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGUnKTtcbiAgICBcblxuICAgIHRpdGxldG9kby5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50XG4gICAgICAgIGxldCBkcm9wID0gcGFyZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChkcm9wLnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyb3Auc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmlvcml0eVNlbGVjdERyb3Bkb3duKCkge1xuXG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW9yaXR5U2VsZWN0JylcblxuICAgIHByaW9yaXR5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9kb0lkID0gaXRlbS5pZC5zbGljZSg5KVxuICAgICAgICAgICAgbG9naWMuY2hhbmdlUHJpb3JpdHkodG9kb0lkLCBpdGVtLnZhbHVlKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrYm94TGlzdGVuZXIoKSB7XG5cbiAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tCb3gnKVxuXG4gICAgY2hlY2tib3guZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgbGV0IGlkID0gZS50YXJnZXQuaWQuc2xpY2UoNilcbiAgICAgICAgICAgbG9naWMuY2hlY2tNYXJrVG9kbyhpZClcbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0U2VsZWN0b3JUb2RvTGlzdGVuZXIoKSB7XG5cbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0VG9kb0l0ZW0nKVxuXG4gICAgcHJvamVjdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IHByb0lkID0gaXRlbS52YWx1ZVxuICAgICAgICAgICAgbGV0IGlkID0gaXRlbS5pZC5zbGljZSg0KVxuICAgICAgICAgICAgbG9naWMuY2hhbmdlUHJvamVjdElkKGlkLCBwcm9JZClcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0Rm9ybVBvcFVwTGlzdGVuZXIoKSB7XG4gICAgbGV0IGVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0VkaXQnKVxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGl0bGUnKVxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0RGVzY3JpcHRpb24nKVxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXREYXRlJylcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEVkaXQnKVxuICAgIGVkaXQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IHRvZG8gPSBsb2dpYy50b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PSBlLnRhcmdldC5pZC5zbGljZSg1KSlcbiAgICAgICAgICAgIHRpdGxlLnZhbHVlID0gdG9kby50aXRsZVxuICAgICAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICBkYXRlLnZhbHVlID0gdG9kby5kdWVEYXRlXG4gICAgICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZS50YXJnZXQuaWQuc2xpY2UoNSkpXG4gICAgICAgICAgICBsb2dpYy5wb3BVcENsYXNzKCdlZGl0JylcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0RWRpdEZvcm0oKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUaXRsZScpXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXREZXNjcmlwdGlvbicpXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdERhdGUnKVxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0RWRpdCcpXG5cbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICBcbiAgICAgICAgbG9naWMuY2hhbmdlRGVzY3JpcHRpb24ocGFyc2VJbnQoc3VibWl0LmRhdGFzZXQuaWQpLCBkZXNjcmlwdGlvbi52YWx1ZSApXG4gICAgICAgIGxvZ2ljLmNoYW5nZVRpdGxlKHBhcnNlSW50KHN1Ym1pdC5kYXRhc2V0LmlkKSwgdGl0bGUudmFsdWUgKVxuICAgICAgICBsb2dpYy5jaGFuZ2VEdWVEYXRlKHBhcnNlSW50KHN1Ym1pdC5kYXRhc2V0LmlkKSwgZGF0ZS52YWx1ZSlcbiAgICAgICAgbG9naWMucG9wVXBDbGFzcygnZWRpdCcpO1xuICAgICAgICB0b2RvSXRlbVJlbmRlcihsb2dpYy50b2RvTGlzdClcbiAgICAgICAgcHJvamVjdExpc3RSZW5kZXIoKVxuXG4gICAgfSlcbn1cbiIsImltcG9ydCAqIGFzIGZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IHBhZ2VUZW1wbGF0ZSwgcHJvamVjdExpc3RSZW5kZXIsIHRvZG9JdGVtUmVuZGVyICB9IGZyb20gXCIuL0RPTW1vZHVsZVwiO1xuaW1wb3J0IHsgYWxsVG9kb0xpc3RlbmVyLCBwcm9qZWN0TGlzdGVuZXIsIHRvZGF5TGlzdGVuZXIsdG9tb3Jyb3dMaXN0ZW5lciwgdGhpc1dlZWtMaXN0ZW5lciwgcG9wVXBMaXN0ZW5lclRvZG8sIHBvcFVwTGlzdGVuZXJQcm9qZWN0LCBzdWJtaXRUb2RvQnV0dG9uLCBzdWJtaXRQcm9qZWN0QnV0dG9uLCBzdG9wRm9ybVJlZnJlc2gsIHBvcFVwQ2xvc2VQcm9qZWN0TGlzdGVuZXIsIHBvcFVwQ2xvc2VUb2RvTGlzdGVuZXIsIHBvcFVwRHJvcGRvd24sIHRvZG9EZWxldGVCdXR0b25MaXN0ZW5lciwgcG9wVXBDbG9zZUVkaXRMaXN0ZW5lciwgc3VibWl0RWRpdEZvcm19IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuY29uc3QgdG9kb0xpc3QgPSBbXVxuY29uc3QgcHJvamVjdExpc3QgPSBbXVxuaW1wb3J0IHsgaXNUb2RheSwgaXNUb21vcnJvdywgcGFyc2VJU08sIGlzVGhpc1dlZWsgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBjdXJyZW50TGlzdCB9IGZyb20gJy4vRE9NbW9kdWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRVcCgpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKSB7XG4gICAgICAgIG5ld1VzZXJMb2FkKClcbiAgICB9IGVsc2Uge1xuICAgICAgIGV4aXN0aW5nVXNlckxvYWQoKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1VzZXJMb2FkKCkge1xuY29uc3QgcnVubmluZyA9IG5ldyBhZGRUb2RvKCdSdW5uaW5nJywgJ1J1biA0NSBtaW51dGVzJywgJzIwMjMtMDMtMDEnLCAnSGlnaCcsIDEpO1xuY29uc3Qgc3dpbW1pbmcgPSBuZXcgYWRkVG9kbygnc3dpbW1pbmcnLCAnc3dpbSBzd2ltIHN3aW0nLCAnMjAyMy0wMy0wMicsICdNZWRpdW0nLCAyKVxuY29uc3Qgc3dpbWVmID0gbmV3IGFkZFRvZG8oJ3N3aW1taW5nJywgJ3N3aW0gc3dpbSBzd2ltJywgJzIwMjMtMDQtMDInLCAnTWVkaXVtJywgMilcbmNvbnN0IHN3aW1tZmRmaW5nID0gbmV3IGFkZFRvZG8oJ3N3aW1taW5nJywgJ3N3aW0gc3dpbSBzd2ltJywgJ3RvbW9ycm93JywgJ01lZGl1bScsIDEpXG5jb25zdCB3b3Jrb3V0ID0gbmV3IGFkZFByb2plY3QoJ1dvcmtvdXRzJywgJ215IGRhaWx5IHdvcmtvdXRzJywgJ3RoaXMgd2VlaycsICdNZWRpdW0nKTtcbmNvbnN0IHdvcmtlID0gbmV3IGFkZFByb2plY3QoJ25lYXRvJywgJ215IGRhaWx5IHdvcmtvdXRzJywgJ3RoaXMgd2VlaycsICdNZWRpdW0nKTtcbmNvbnN0IHdvcmtkdXQgPSBuZXcgYWRkUHJvamVjdCgnTG9uZ2VyIFRpdGxlJywgJ215IGRhaWx5IHdvcmtvdXRzJywgJ3RoaXMgd2VlaycsICdNZWRpdW0nKTtcbmNvbnN0IHdvcjMzb3V0ID0gbmV3IGFkZFByb2plY3QoJ3NoaXR0cycsICdteSBkYWlseSB3b3Jrb3V0cycsICd0aGlzIHdlZWsnLCAnTWVkaXVtJyk7XG5cbnBhZ2VUZW1wbGF0ZSgpO1xudG9kb0l0ZW1SZW5kZXIodG9kb0xpc3QpXG5wcm9qZWN0TGlzdFJlbmRlcigpXG5hbGxUb2RvTGlzdGVuZXIoKVxucHJvamVjdExpc3RlbmVyKClcbnRvZGF5TGlzdGVuZXIoKVxudG9tb3Jyb3dMaXN0ZW5lcigpXG50aGlzV2Vla0xpc3RlbmVyKClcbnBvcFVwTGlzdGVuZXJUb2RvKClcbnBvcFVwTGlzdGVuZXJQcm9qZWN0KClcbnN1Ym1pdFRvZG9CdXR0b24oKVxuc3VibWl0UHJvamVjdEJ1dHRvbigpXG5zdWJtaXRFZGl0Rm9ybSgpXG5zdG9wRm9ybVJlZnJlc2goKVxucG9wVXBEcm9wZG93bigpXG5wb3BVcENsb3NlUHJvamVjdExpc3RlbmVyKClcbnBvcFVwQ2xvc2VUb2RvTGlzdGVuZXIoKVxucG9wVXBDbG9zZUVkaXRMaXN0ZW5lcigpXG59XG5cbmZ1bmN0aW9uIGV4aXN0aW5nVXNlckxvYWQoKSB7XG50b2RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykpXG5wcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpXG5wYWdlVGVtcGxhdGUoKTtcbnRvZG9JdGVtUmVuZGVyKHRvZG9MaXN0KVxucHJvamVjdExpc3RSZW5kZXIoKVxuYWxsVG9kb0xpc3RlbmVyKClcbnByb2plY3RMaXN0ZW5lcigpXG50b2RheUxpc3RlbmVyKClcbnRvbW9ycm93TGlzdGVuZXIoKVxudGhpc1dlZWtMaXN0ZW5lcigpXG5wb3BVcExpc3RlbmVyVG9kbygpXG5wb3BVcExpc3RlbmVyUHJvamVjdCgpXG5zdWJtaXRUb2RvQnV0dG9uKClcbnN1Ym1pdFByb2plY3RCdXR0b24oKVxuc3VibWl0RWRpdEZvcm0oKVxuc3RvcEZvcm1SZWZyZXNoKClcbnBvcFVwRHJvcGRvd24oKVxucG9wVXBDbG9zZVByb2plY3RMaXN0ZW5lcigpXG5wb3BVcENsb3NlVG9kb0xpc3RlbmVyKClcbnBvcFVwQ2xvc2VFZGl0TGlzdGVuZXIoKVxufVxuXG5cbmZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuXG4gICAgbGV0IHRvZG8gPSBuZXcgZmFjdG9yeS50b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KVxuICAgIHRvZG9MaXN0LnB1c2godG9kbylcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXJrVG9kbyhpZCkge1xuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PSBpZClcblxuICAgIGNoYW5nZS5jaGVja2VkID0gIWNoYW5nZS5jaGVja2VkO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvKHRvZG8pIHtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2RvTGlzdFtpXS5pZCA9PSB0b2RvKSB7XG4gICAgICAgICAgICB0b2RvTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0gICAgXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY3VycmVudExpc3RbaV0uaWQgPT0gdG9kbykge1xuICAgICAgICAgICAgY3VycmVudExpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkoaWQsIHByaW9yaXR5KSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT0gaWQpXG4gICAgXG4gICAgY2hhbmdlLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURlc2NyaXB0aW9uKGlkLCBkZXNjcmlwdGlvbikge1xuXG4gICAgbGV0IGNoYW5nZSA9IHRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09PSBpZClcbiAgICBcbiAgICBjaGFuZ2UuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGl0bGUodG9kbywgdGl0bGUpIHtcblxuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gdG9kbylcbiAgICBcbiAgICBjaGFuZ2UudGl0bGUgPSB0aXRsZTtcbiAgICBcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRHVlRGF0ZShpZCwgZGF0ZSkge1xuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gaWQpXG4gICAgY2hhbmdlLmR1ZURhdGUgPSBkYXRlO1xuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJvamVjdElkKGlkLCBwcm9JZCkge1xuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PSBpZClcbiAgICBjaGFuZ2UucHJvamVjdElkID0gcHJvSWRcblxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXG4gICAgbGV0IHByb2plY3QgPSBuZXcgZmFjdG9yeS5wcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaV0uaWQgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfSAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5UHJvamVjdChwcm9qZWN0LCBwcmlvcml0eSkge1xuXG4gICAgbGV0IGNoYW5nZSA9IHByb2plY3RMaXN0LmZpbmQoeCA9PiB4LmlkID09PSBwcm9qZWN0LmlkKVxuICAgIFxuICAgIGNoYW5nZS5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEZXNjcmlwdGlvblByb2plY3QocHJvamVjdCwgZGVzY3JpcHRpb24pIHtcblxuICAgIGxldCBjaGFuZ2UgPSBwcm9qZWN0TGlzdC5maW5kKHggPT4geC5pZCA9PT0gcHJvamVjdC5pZClcbiAgICBjaGFuZ2UuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGl0bGVQcm9qZWN0KHByb2plY3QsIHRpdGxlKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHByb2plY3QuaWQpXG4gICAgY2hhbmdlLnRpdGxlID0gdGl0bGU7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RCeVRvZGF5KCkge1xuXG4gICAgbGV0IHRvZGF5ID0gdG9kb0xpc3QuZmlsdGVyKHkgPT4gaXNUb2RheShwYXJzZUlTTyh5LmR1ZURhdGUpKSkgXG4gICAgcmV0dXJuIHRvZGF5XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RCeVRvbW9ycm93KCkge1xuICAgIGxldCB0b21vcnJvdyA9IHRvZG9MaXN0LmZpbHRlcih5ID0+IGlzVG9tb3Jyb3cocGFyc2VJU08oeS5kdWVEYXRlKSkpIFxuICAgIHJldHVybiB0b21vcnJvd1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdEJ5VGhpc1dlZWsoKSB7XG4gICAgbGV0IHRvbW9ycm93ID0gdG9kb0xpc3QuZmlsdGVyKHkgPT4gaXNUaGlzV2VlayhwYXJzZUlTTyh5LmR1ZURhdGUpKSkgXG4gICAgcmV0dXJuIHRvbW9ycm93XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0QnlQcm9qZWN0KHgpIHtcblxuICAgIGxldCBsaXN0ID0gdG9kb0xpc3QuZmlsdGVyKHkgPT4geS5wcm9qZWN0SWQgPT0geClcbiAgICByZXR1cm4gbGlzdFxuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBDbGFzcyh4KSB7XG4gICAgbGV0IHBvcFVwO1xuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuICAgIGlmICh4ID09PSAncHJvamVjdCcpe1xuICAgICAgICBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcFByb2plY3QnKVxuICAgIH0gZWxzZSBpZiAoeCA9PT0gJ3RvZG8nKXtcbiAgICAgICAgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBUb2RvJylcbiAgICB9ICBlbHNlIGlmICh4ID09PSAnZWRpdCcpIHtcbiAgICAgICAgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBFZGl0JylcbiAgICB9XG4gICAgXG5cbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgcG9wVXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcGRvd25DbGFzcygpIHtcbiAgICBsZXQgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKVxuXG4gICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuXG59XG5cblxuXG5leHBvcnQge3RvZG9MaXN0LCBwcm9qZWN0TGlzdH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=