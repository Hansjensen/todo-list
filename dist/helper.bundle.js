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



function projectListRender() {

    let container = document.getElementById('projectLinks')
    let list = elementBuild('ul', {'id': 'projectList'},)
    container.textContent = ""

    for (let i = 0; i < _logic__WEBPACK_IMPORTED_MODULE_1__.projectList.length; i++) {
        let build =
        elementBuild('li', {'class' : 'projectListItem'}, 
                        elementBuild('a', {'class' : 'linkProject', 'id' : 'p' + _logic__WEBPACK_IMPORTED_MODULE_1__.projectList[i].id}, _logic__WEBPACK_IMPORTED_MODULE_1__.projectList[i].title),
                        elementBuild('a', {'class' : 'deleteProject', 'id' : 'px' + [_logic__WEBPACK_IMPORTED_MODULE_1__.projectList[i].id]}, "X")
                    )
        list.appendChild(build)
    }
    container.appendChild(list)
    ;(0,_listeners__WEBPACK_IMPORTED_MODULE_0__.projectListener)()
    ;(0,_listeners__WEBPACK_IMPORTED_MODULE_0__.deleteProjectListener)()

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
/* harmony export */   "deleteProjectListener": () => (/* binding */ deleteProjectListener),
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

function deleteProjectListener() {
    
    let deleteProject = document.querySelectorAll('.deleteProject')
    deleteProject.forEach(item => {
        item.addEventListener('click', e => {
            let project = e.target.id
            let proId = project.slice(2)
            _logic__WEBPACK_IMPORTED_MODULE_0__.removeProject(proId)
            ;(0,_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.projectListRender)();
            console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.projectList)
            
        })
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
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
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



let todoList = []
let projectList = []
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

projectList =  JSON.parse(localStorage.getItem('projectList'))

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

function saveTodo() {
    localStorage.setItem('todoList', JSON.stringify(todoList))
}

function saveProject() {
    localStorage.setItem('projectList', JSON.stringify(projectList))
}
function addTodo(title, description, dueDate, priority, project) {

    let todo = new _factory__WEBPACK_IMPORTED_MODULE_0__.todoItem(title, description, dueDate, priority, project)
    todoList.push(todo)
    saveTodo()
    
}

function checkMarkTodo(id) {
    let change = todoList.find(x => x.id == id)
    
    change.checked = !change.checked;
    saveTodo()
    
}


function removeTodo(todo) {
    
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == todo) {
            todoList.splice(i, 1);
            saveTodo()
            
        }
    }    
    
    for (let i = 0; i < _DOMmodule__WEBPACK_IMPORTED_MODULE_1__.currentList.length; i++) {
        if (_DOMmodule__WEBPACK_IMPORTED_MODULE_1__.currentList[i].id == todo) {
            _DOMmodule__WEBPACK_IMPORTED_MODULE_1__.currentList.splice(i, 1);
            saveTodo()
            return;
        }
    }
    
}

function changePriority(id, priority) {

    let change = todoList.find(x => x.id == id)
    
    change.priority = priority;
    saveTodo()

}

function changeDescription(id, description) {

    let change = todoList.find(x => x.id === id)
    
    change.description = description;
    saveTodo()
    

}

function changeTitle(todo, title) {

    let change = todoList.find(x => x.id === todo)
    
    change.title = title;
    saveTodo()
    

}

function changeDueDate(id, date) {
    let change = todoList.find(x => x.id === id)
    change.dueDate = date;
    saveTodo()
}

function changeProjectId(id, proId) {
    let change = todoList.find(x => x.id == id)
    change.projectId = proId
    saveTodo()

}



function addProject(title, description, dueDate, priority) {

    let project = new _factory__WEBPACK_IMPORTED_MODULE_0__.project(title, description, dueDate, priority)
    projectList.push(project)
    saveProject()
}

function removeProject(project) {
    
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].id == project) {
            projectList.splice(i, 1);
            saveProject()
            return
        }
    }    
}

function changePriorityProject(project, priority) {

    let change = projectList.find(x => x.id === project.id)
    
    change.priority = priority;
    saveProject()

}

function changeDescriptionProject(project, description) {

    let change = projectList.find(x => x.id === project.id)
    change.description = description;
    saveProject()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFUCxzQkFBc0IsNkNBQWU7QUFDckM7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTzs7QUFFUDtBQUNBOztBQUVBOztBQUVPOztBQUVQLHFDQUFxQyxvREFBTyxDQUFDLG9EQUFRO0FBQ3JEOztBQUVBOztBQUVPO0FBQ1Asd0NBQXdDLG9EQUFVLENBQUMsb0RBQVE7QUFDM0Q7QUFDQTs7QUFFTztBQUNQLHdDQUF3QyxvREFBVSxDQUFDLG9EQUFRO0FBQzNEO0FBQ0E7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFTztBQUNQOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvbW9ycm93L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTW1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb21vcnJvd1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9tb3Jyb3dcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNyBPY3RvYmVyIDE0OjAwOjAwIHRvbW9ycm93P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb21vcnJvdyhuZXcgRGF0ZSgyMDE0LCA5LCA3LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvbW9ycm93KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIGFkZERheXMoRGF0ZS5ub3coKSwgMSkpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IGRlbGV0ZVByb2plY3RMaXN0ZW5lciwgcHJvamVjdExpc3RlbmVyLCB0b2RvRGVsZXRlQnV0dG9uTGlzdGVuZXIsIGV4cGFuZFRvZG9JdGVtTGlzdGVuZXIsIHByaW9yaXR5U2VsZWN0RHJvcGRvd24sIGNoZWNrYm94TGlzdGVuZXIsIHByb2plY3RTZWxlY3RvclRvZG9MaXN0ZW5lciwgZWRpdEZvcm1Qb3BVcExpc3RlbmVyIH0gZnJvbSBcIi4vbGlzdGVuZXJzXCJcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vbG9naWNcIlxuXG5sZXQgY3VycmVudExpc3QgPSBbXVxuXG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZCAodHlwZSwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pIHtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcblxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSlcbiAgICB9XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKVxuICAgICAgICB9ICBlbHNle1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgcG9wUHJvamVjdCA9ICBwb3BVcEJ1aWxkZXIoJ3Byb2plY3QnKTtcbiAgICBjb25zdCBwb3BUb2RvID0gcG9wVXBCdWlsZGVyKCd0b2RvJyk7XG4gICAgY29uc3QgcG9wRWRpdCA9IHBvcFVwQnVpbGRlcigpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ292ZXJsYXknfSlcbiAgICBjb25zdCB0ZW1wbGF0ZSA9XG4gICAgXG4gICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICd3cmFwcGVyJ30sXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaGVhZGVyJywgeydpZCc6ICdoZWFkZXInfSwgXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAnbG9nb0Rpdid9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaDEnLCB7J2lkJzogJ2xvZ28nfSwgXCJPRElOJ1MgVE9ET1wiKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCc6ICdoZWFkZXJBZGREaXYnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2J1dHRvbicsIHsnaWQnOiAnaGVhZGVyQWRkJ30sICcrJ1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJzogJ2Ryb3Bkb3duJ30sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnY2xhc3MnOiAnZHJvcGRvd25MaW5rJywgJ2lkJyA6ICd0b2RvQWRkJ30sICdBREQgVE9ETycpLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2EnLCB7J2NsYXNzJzogJ2Ryb3Bkb3duTGluaycsICdpZCcgOiAncHJvamVjdEFkZCd9LCAnQUREIFBST0pFQ1QnKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICdzaWRlYmFyJ30sXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAnc3RhdGljTGlua3MnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ3VsJywgeydpZCc6ICdzdGF0aWNMaXN0J30sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGknLCB7J2lkJyA6ICdsaXN0SG9tZSd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnaWQnIDogJ2xpbmtIb21lJ30sICdBbGwgVGFza3MnKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xpJywgeydpZCcgOiAnbGlzdFRvZGF5J30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdhJywgeydpZCcgOiAnbGlua1RvZGF5J30sICdUb2RheScpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGknLCB7J2lkJyA6ICdsaXN0VG9tb3Jyb3cnfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2EnLCB7J2lkJyA6ICdsaW5rVG9tb3Jyb3cnfSwgJ1RvbW9ycm93JylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsaScsIHsnaWQnIDogJ2xpc3RUaGlzV2Vlayd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnaWQnIDogJ2xpbmtUaGlzV2Vlayd9LCAnVGhpcyBXZWVrJylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdwJywgeydpZCc6ICdwcm9qZWN0c1RpdGxlJ30sICdQUk9KRUNUUycpLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJzogJ3Byb2plY3RMaW5rcyd9KVxuICAgICAgICApLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ2NvbnRlbnQnfSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAnY29udGVudENvbnRhaW5lcid9LFxuICAgICAgICAgICAgKVxuICAgICAgICApLFxuICAgICk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3BFZGl0KVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocG9wUHJvamVjdClcbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcFRvZG8pXG4gICAgYm9keS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSlcbiAgICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0l0ZW1SZW5kZXIobGlzdCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudENvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJydcbiAgICBjdXJyZW50TGlzdCA9IGxpc3RcbiAgXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBcblxuICAgICAgICBsZXQgYnVpbGQgPVxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnY2xhc3MnOid0b2RvSXRlbSd9LCBcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hCdWlsZGVyKGxpc3RbaV0pLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2gyJywgeydjbGFzcycgOiAndGl0bGUnLCAnaWQnIDogJ3RpdGxlXycgKyBsaXN0W2ldLmlkfSwgbGlzdFtpXS50aXRsZSksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaDMnLCB7J2NsYXNzJyA6ICd0b2RvRGF0ZSd9LCBsaXN0W2ldLmR1ZURhdGUpLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RQcmlvcml0eUJ1aWxkZXIobGlzdFtpXSksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYnV0dG9uJywgeydjbGFzcycgOiAndG9kb0VkaXQnLCAnaWQnIDogJ2VkaXRfJyArIGxpc3RbaV0uaWR9LCAnRWRpdCcpLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2J1dHRvbicsIHsnY2xhc3MnIDogJ3RvZG9EZWxldGUnLCAnaWQnIDogJ2RlbGV0ZV8nICsgbGlzdFtpXS5pZH0sICdEZWxldGUnKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgIGxldCBidWlsZDIgPSBlbGVtZW50QnVpbGQoJ2RpdicsIHsnY2xhc3MnIDogJ3RvZG9JdGVtTG93ZXInfSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdoMicsIHsnY2xhc3MnIDogJ3RvZG9EZXNjcmlwdGlvbid9LCBsaXN0W2ldLmRlc2NyaXB0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2NsYXNzJzoncHJvTGlzdFRvZG9JdGVtJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InOiAncHJvamVjdFBvcCd9LCAnUFJPSkVDVCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdExpc3RUb2RvKGxpc3RbaV0ucHJvamVjdElkLCBsaXN0W2ldLmlkKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGQpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZDIpXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdG9kb0RlbGV0ZUJ1dHRvbkxpc3RlbmVyKClcbiAgICBleHBhbmRUb2RvSXRlbUxpc3RlbmVyKClcbiAgICBwcmlvcml0eVNlbGVjdERyb3Bkb3duKClcbiAgICBjaGVja2JveExpc3RlbmVyKClcbiAgICBwcm9qZWN0U2VsZWN0b3JUb2RvTGlzdGVuZXIoKVxuICAgIGVkaXRGb3JtUG9wVXBMaXN0ZW5lcigpXG59XG5cbmZ1bmN0aW9uIGNoZWNrYm94QnVpbGRlcih0b2RvKSB7XG4gICAgbGV0IGNoZWNrYm94ID0gZWxlbWVudEJ1aWxkKCdpbnB1dCcsIHsndHlwZScgOiAnY2hlY2tib3gnLCAnY2xhc3MnIDogJ2NoZWNrQm94JywgJ2lkJyA6ICdjaGVja18nICsgdG9kby5pZH0pXG4gICAgaWYgKHRvZG8uY2hlY2tlZCkge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGNoZWNrYm94O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGNoZWNrYm94O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0UHJpb3JpdHlCdWlsZGVyKHRvZG8pIHtcblxuICAgIGxldCBidWlsZCA9IGVsZW1lbnRCdWlsZCgnc2VsZWN0JywgeyduYW1lJyA6ICdwcmlvcml0eScsICdjbGFzcycgOiAncHJpb3JpdHlTZWxlY3QnLCAnaWQnIDogJ3ByaW9yaXR5XycgKyB0b2RvLmlkfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnTG93JywgJ2lkJzogJ0xvdyd9LCAnTG93JyksXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogJ01lZGl1bScsICdpZCcgOiAnTWVkaXVtJ30sICdNZWRpdW0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnSGlnaCcsICdpZCcgOiAnSGlnaCd9LCAnSGlnaCcpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICBidWlsZC52YWx1ZSA9IHRvZG8ucHJpb3JpdHlcbiAgICByZXR1cm4gYnVpbGRcblxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RMaXN0UmVuZGVyKCkge1xuXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlua3MnKVxuICAgIGxldCBsaXN0ID0gZWxlbWVudEJ1aWxkKCd1bCcsIHsnaWQnOiAncHJvamVjdExpc3QnfSwpXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIlxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYnVpbGQgPVxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xpJywgeydjbGFzcycgOiAncHJvamVjdExpc3RJdGVtJ30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdhJywgeydjbGFzcycgOiAnbGlua1Byb2plY3QnLCAnaWQnIDogJ3AnICsgcHJvamVjdExpc3RbaV0uaWR9LCBwcm9qZWN0TGlzdFtpXS50aXRsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2EnLCB7J2NsYXNzJyA6ICdkZWxldGVQcm9qZWN0JywgJ2lkJyA6ICdweCcgKyBbcHJvamVjdExpc3RbaV0uaWRdfSwgXCJYXCIpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChidWlsZClcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXG4gICAgcHJvamVjdExpc3RlbmVyKClcbiAgICBkZWxldGVQcm9qZWN0TGlzdGVuZXIoKVxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIHBvcFVwQnVpbGRlcih4KSB7XG5cbiAgICBpZiAoeCA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgIGxldCBwb3BVcEZvcm0gPSBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ3BvcFVwUHJvamVjdCd9LFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ3BvcFVwSGVhZGVyJ30sIFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdoMScsIHsnaWQnIDogJ3BvcFVwVGl0bGUnfSwgJ0FkZCBQcm9qZWN0JyksXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2J1dHRvbicsIHsnaWQnIDogJ3BvcFVwUHJvamVjdENsb3NlJ30sICdYJyApKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdmb3JtJywgeydpZCcgOiAncG9wVXBGb3JtUCcsIH0sIFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ3RpdGxlUG9wJyxcImNsYXNzXCIgOiAncG9wTGFiZWwnIH0sICdUSVRMRScpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICd0ZXh0JywgJ2lkJyA6ICd0aXRsZVBvcFAnLCAnbmFtZScgOiAndGl0bGVQb3AnfSksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAnZGVzY3JpcHRpb25Qb3AnLCBcImNsYXNzXCIgOiAncG9wTGFiZWwnfSwgJ0RFU0NSSVBUSU9OJyksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgndGV4dGFyZWEnLCB7J3R5cGUnIDogJ3RleHQnLCAnaWQnIDogJ2Rlc2NyaXB0aW9uUG9wUCcsICduYW1lJyA6ICdkZXNjcmlwdGlvblBvcCd9KSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICdkYXRlUG9wJyxcImNsYXNzXCIgOiAncG9wTGFiZWwnIH0sICdEQVRFJyksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaW5wdXQnLCB7J3R5cGUnIDogJ2RhdGUnLCAnaWQnIDogJ2RhdGVQb3BQJywgJ25hbWUnIDogJ2RhdGVQb3AnfSksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAncHJpb3JpdHlQb3AnLFwiY2xhc3NcIiA6ICdwb3BMYWJlbCcgfSwgJ1BSSU9SSVRZJyksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnc2VsZWN0JywgeyduYW1lJyA6ICdwcmlvcml0eVBvcCcsICdpZCcgOiAncHJpb3JpdHlQb3BQJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogJ0xvdycsIH0sICdMb3cnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnTWVkaXVtJywgfSwgJ01lZGl1bScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdIaWdoJywgfSwgJ0hpZ2gnKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdzdWJtaXQnICwgJ3ZhbHVlJzogJ0FERCcsICdyb3dzJyA6ICcxMCcsICdpZCcgOiAnc3VibWl0UHJvamVjdEFkZCd9LCAnQUREJykpXG5cbiAgICAgICAgXG5cblxuICAgIClcbiAgICByZXR1cm4gcG9wVXBGb3JtO1xuXG4gICAgfSBlbHNlIGlmICh4ID09PSAndG9kbycpIHtcbiAgICAgICAgbGV0IHBvcFVwRm9ybSA9IGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAncG9wVXBUb2RvJ30sXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAncG9wVXBIZWFkZXInfSwgXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2gxJywgeydpZCcgOiAncG9wVXBUaXRsZSd9LCAnQWRkIFRvZG8nKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYnV0dG9uJywgeydpZCcgOiAncG9wVXBUb2RvQ2xvc2UnfSwgJ1gnICkpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2Zvcm0nLCB7J2lkJyA6ICdwb3BVcEZvcm1UJyB9LCBcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICd0aXRsZVBvcCcsXCJjbGFzc1wiIDogJ3BvcExhYmVsJyB9LCAnVElUTEUnKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdpbnB1dCcsIHsndHlwZScgOiAndGV4dCcsICdpZCcgOiAndGl0bGVQb3BUJywgJ25hbWUnIDogJ3RpdGxlUG9wJ30pLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ2Rlc2NyaXB0aW9uUG9wJywgXCJjbGFzc1wiIDogJ3BvcExhYmVsJ30sICdERVNDUklQVElPTicpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3RleHRhcmVhJywgeyd0eXBlJyA6ICd0ZXh0JywgJ2lkJyA6ICdkZXNjcmlwdGlvblBvcFQnLCAnbmFtZScgOiAnZGVzY3JpcHRpb25Qb3AnfSksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAnZGF0ZVBvcCcsXCJjbGFzc1wiIDogJ3BvcExhYmVsJyB9LCAnREFURScpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdkYXRlJywgJ2lkJyA6ICdkYXRlUG9wVCcsICduYW1lJyA6ICdkYXRlUG9wJ30pLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ3ByaW9yaXR5UG9wJyxcImNsYXNzXCIgOiAncG9wTGFiZWwnIH0sICdQUklPUklUWScpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3NlbGVjdCcsIHsnbmFtZScgOiAncHJpb3JpdHlQb3AnLCAnaWQnIDogJ3ByaW9yaXR5UG9wVCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdMb3cnLCB9LCAnTG93JyksXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogJ01lZGl1bScsIH0sICdNZWRpdW0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnSGlnaCcsIH0sICdIaWdoJylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICdwcmlvcml0eVBvcCcsXCJjbGFzc1wiIDogJ3BvcExhYmVsJyB9LCAnUFJPSkVDVCcpLFxuICAgICAgICBwcm9qZWN0TGlzdFBvcFVwKCksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaW5wdXQnLCB7J3R5cGUnIDogJ3N1Ym1pdCcgLCAndmFsdWUnOiAnQUREJywgJ3Jvd3MnIDogJzEwJywgJ2lkJyA6ICdzdWJtaXRUb2RvQWRkJ30sICdBREQnKSlcblxuICAgICAgICBcblxuXG4gICAgKVxuICAgIHJldHVybiBwb3BVcEZvcm07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBvcFVwRm9ybSA9IGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAncG9wVXBFZGl0J30sXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAncG9wVXBIZWFkZXInfSwgXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2gxJywgeydpZCcgOiAncG9wVXBUaXRsZSd9LCAnRWRpdCcpLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdidXR0b24nLCB7J2lkJyA6ICdwb3BVcEVkaXRDbG9zZSd9LCAnWCcgKSksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnZm9ybScsIHsnaWQnIDogJ2VkaXRGb3JtJ30sXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ3RpdGxlJywgJ2NsYXNzJyA6ICdwb3BMYWJlbCd9LCAnVElUTEUnKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaW5wdXQnLCB7J2lkJyA6J2VkaXRUaXRsZScsICduYW1lJyA6ICd0aXRsZScsICd0eXBlJyA6ICd0ZXh0J30gKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAnZGVzY3JpcHRpb24nLCAnY2xhc3MnIDogJ3BvcExhYmVsJ30sICdERVNDUklQVElPTicpLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdpbnB1dCcsIHsnaWQnIDonZWRpdERlc2NyaXB0aW9uJywgJ25hbWUnIDogJ2Rlc2NyaXB0aW9uJywgJ3R5cGUnIDogJ3RleHQnfSApLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICdkYXRlJyxcImNsYXNzXCIgOiAncG9wTGFiZWwnIH0sICdEQVRFJyksXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdkYXRlJywgJ2lkJyA6ICdlZGl0RGF0ZScsICduYW1lJyA6ICdkYXRlJ30pLCBcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaW5wdXQnLCB7J3R5cGUnIDogJ3N1Ym1pdCcgLCAndmFsdWUnOiAnRURJVCcsICdyb3dzJyA6ICcxMCcsICdpZCcgOiAnc3VibWl0RWRpdCd9LCAnRURJVCcpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHBvcFVwRm9ybTtcblxuICAgIH1cblxuICAgIFxuXG59XG5cbmZ1bmN0aW9uIHByb2plY3RMaXN0UG9wVXAoKSB7XG4gICAgXG4gICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50QnVpbGQoJ3NlbGVjdCcsIHsnbmFtZScgOiAncHJvamVjdFBvcCcsICdpZCcgOiAncHJvamVjdFBvcFQnfSlcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAwfSwgJ05vbmUnKSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHByb2plY3RMaXN0W2ldLnRpdGxlXG4gICAgICAgIGxldCBpZCA9IHByb2plY3RMaXN0W2ldLmlkXG4gICAgICAgIGxldCBvcHRpb24gPSBlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogaWR9LCB0aXRsZSlcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfVxuICAgXG4gICAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpc3RUb2RvKHgsIHkpIHtcbiAgICBcbiAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRCdWlsZCgnc2VsZWN0JywgeyduYW1lJyA6ICdwcm9qZWN0UG9wJywgJ2NsYXNzJyA6ICdwcm9qZWN0VG9kb0l0ZW0nLCAnaWQnIDogJ3Byb18nICsgeX0pXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogMH0sICdOb25lJykpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0TGlzdFtpXS50aXRsZVxuICAgICAgICBsZXQgaWQgPSBwcm9qZWN0TGlzdFtpXS5pZFxuICAgICAgICBsZXQgb3B0aW9uID0gZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6IGlkfSwgdGl0bGUpXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH1cbiAgICBlbGVtZW50LnZhbHVlID0geFxuICAgIFxuICAgIFxuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCB7Y3VycmVudExpc3R9XG4iLCJsZXQgaWROdW0gPSAwXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgXG4gICAgXG4gICAgbGV0IHRvZG8gPSB7XG4gICAgICAgIGlkOiBpZE51bSxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIHByb2plY3RJZDogMFxuICAgIH1cbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgICBcbiAgICAgICAgdG9kby5wcm9qZWN0SWQgPSBwcm9qZWN0XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLnByb2plY3RJZCA9IDBcbiAgICB9XG4gICAgaWROdW0rK1xuICAgIHJldHVybiB0b2RvXG5cbn1cbmxldCBwcm9qSWQgPSAxXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgICAgaWQ6IHByb2pJZCxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICB9XG4gICAgcHJvaklkKys7XG4gICAgcmV0dXJuIHByb2plY3Rcbn1cbiIsImltcG9ydCAqIGFzIGxvZ2ljIGZyb20gJy4vbG9naWMnXG5pbXBvcnQgeyBwcm9qZWN0TGlzdFJlbmRlciwgdG9kb0l0ZW1SZW5kZXIsIGN1cnJlbnRMaXN0fSBmcm9tICcuL0RPTW1vZHVsZSdcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RMaXN0ZW5lcigpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rUHJvamVjdCcpLmZvckVhY2goaXRlbSA9PlxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9zbGljZSBJRCBudW1iZXIgZnJvbSBlbGVtZW50IElEXG4gICAgICAgICAgICBsZXQgaWQgPSBlLnRhcmdldC5pZC5zbGljZSgxKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL0NyZWF0ZSBhIGxpc3Qgb2YgYWxsIHByb2plY3RzIHdpdGggdGhhdCBwcm9qZWN0cyBJRCBudW1iZXIuXG4gICAgICAgICAgICB0b2RvSXRlbVJlbmRlcihsb2dpYy5saXN0QnlQcm9qZWN0KGlkKSlcbiAgICAgICBcbiAgICAgICAgfSkpXG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsVG9kb0xpc3RlbmVyKCkge1xuXG4gICAgbGV0IGxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmtIb21lJyk7XG5cbiAgICBsaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICB0b2RvSXRlbVJlbmRlcihsb2dpYy50b2RvTGlzdCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5TGlzdGVuZXIoKSB7XG5cbiAgICBsZXQgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlua1RvZGF5JylcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICB0b2RvSXRlbVJlbmRlcihsb2dpYy5saXN0QnlUb2RheSgpKVxuICAgIH0gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9tb3Jyb3dMaXN0ZW5lcigpIHtcblxuICAgIGxldCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5rVG9tb3Jyb3cnKVxuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIHRvZG9JdGVtUmVuZGVyKGxvZ2ljLmxpc3RCeVRvbW9ycm93KCkpXG4gICAgfSApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlzV2Vla0xpc3RlbmVyKCkge1xuXG4gICAgbGV0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmtUaGlzV2VlaycpXG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgdG9kb0l0ZW1SZW5kZXIobG9naWMubGlzdEJ5VGhpc1dlZWsoKSlcbiAgICB9IClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwRHJvcGRvd24oKSB7XG5cbiAgICBsZXQgbGlzdGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckFkZCcpXG5cbiAgICBsaXN0ZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblxuICAgICAgICBsb2dpYy5kcm9wZG93bkNsYXNzKClcbiAgICAgICAgY29uc29sZS5sb2coJ2hleScpXG4gICAgICBcbiAgICB9ICkgICBcbn1cblxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyNoZWFkZXJBZGQnKSkge1xuICBcbiAgICAgIHZhciBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25cIik7XG4gICBcbiAgICAgICAgaWYgKGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwTGlzdGVuZXJUb2RvKCkge1xuXG4gICAgbGV0IGxpc3RlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQWRkJylcblxuICAgIGxpc3Rlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBcbiAgICAgICAgbG9naWMucG9wVXBDbGFzcygndG9kbycpXG4gICAgICAgXG5cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcExpc3RlbmVyUHJvamVjdCgpIHtcblxuICAgIGxldCBsaXN0ZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEFkZCcpXG5cbiAgICBsaXN0ZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICBcbiAgICAgICAgbG9naWMucG9wVXBDbGFzcygncHJvamVjdCcpO1xuICAgICAgIFxuXG4gICAgfSlcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXRUb2RvQnV0dG9uKCkge1xuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRUb2RvQWRkJylcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlUG9wVCcpLnZhbHVlXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvblBvcFQnKS52YWx1ZVxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlUG9wVCcpLnZhbHVlXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVBvcFQnKS52YWx1ZVxuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0UG9wVCcpLnZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXknKVxuICAgICAgICBsb2dpYy5hZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LCBwcm9qZWN0KVxuICAgICAgICBsb2dpYy5wb3BVcENsYXNzKCd0b2RvJyk7XG4gICAgICAgIHRvZG9JdGVtUmVuZGVyKGxvZ2ljLnRvZG9MaXN0KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBGb3JtVCcpLnJlc2V0KCk7XG4gICAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0UHJvamVjdEJ1dHRvbigpIHtcblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0UHJvamVjdEFkZCcpXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZVBvcFAnKS52YWx1ZVxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25Qb3BQJykudmFsdWVcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZVBvcFAnKS52YWx1ZVxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlQb3BQJykudmFsdWVcbiAgICAgICAgbG9naWMuYWRkUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSlcbiAgICAgICAgXG4gICAgICAgIGxvZ2ljLnBvcFVwQ2xhc3MoJ3Byb2plY3QnKTtcbiAgICAgICAgdG9kb0l0ZW1SZW5kZXIobG9naWMudG9kb0xpc3QpXG4gICAgICAgIHByb2plY3RMaXN0UmVuZGVyKClcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwRm9ybVAnKS5yZXNldCgpO1xuICAgIH0pXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BGb3JtUmVmcmVzaCgpIHtcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wVXBGb3JtUFwiKTtcbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSBcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybSk7XG5cbnZhciBmb3JtVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wVXBGb3JtVFwiKTtcbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSBcbmZvcm1ULmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm0pO1xudmFyIGZvcm1FID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0Rm9ybVwiKTtcbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSBcbmZvcm1FLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBDbG9zZUVkaXRMaXN0ZW5lcigpIHtcblxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcEVkaXRDbG9zZScpXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgbG9naWMucG9wVXBDbGFzcygnZWRpdCcpO1xuICAgIH0pXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwQ2xvc2VQcm9qZWN0TGlzdGVuZXIoKSB7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwUHJvamVjdENsb3NlJylcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBsb2dpYy5wb3BVcENsYXNzKCdwcm9qZWN0Jyk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwQ2xvc2VUb2RvTGlzdGVuZXIoKSB7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwVG9kb0Nsb3NlJylcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBsb2dpYy5wb3BVcENsYXNzKCd0b2RvJyk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9EZWxldGVCdXR0b25MaXN0ZW5lcigpIHtcbiAgICBcbiAgICBsZXQgZGVsZXRlQnV0dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGVsZXRlJylcbiAgICBkZWxldGVCdXR0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGxldCB0b2RvID0gZS50YXJnZXQuaWRcbiAgICAgICAgICAgIHRvZG8gPSB0b2RvLnNsaWNlKDcpXG4gICAgICAgICAgICBsb2dpYy5yZW1vdmVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgdG9kb0l0ZW1SZW5kZXIoY3VycmVudExpc3QpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZFRvZG9JdGVtTGlzdGVuZXIoKSB7XG5cbiAgICBsZXQgdGl0bGV0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdGxlJyk7XG4gICAgXG5cbiAgICB0aXRsZXRvZG8uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudFxuICAgICAgICBsZXQgZHJvcCA9IHBhcmVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZHJvcC5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgIGRyb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcm9wLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpb3JpdHlTZWxlY3REcm9wZG93bigpIHtcblxuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcml0eVNlbGVjdCcpXG5cbiAgICBwcmlvcml0eS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IHRvZG9JZCA9IGl0ZW0uaWQuc2xpY2UoOSlcbiAgICAgICAgICAgIGxvZ2ljLmNoYW5nZVByaW9yaXR5KHRvZG9JZCwgaXRlbS52YWx1ZSlcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja2JveExpc3RlbmVyKCkge1xuXG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrQm94JylcblxuICAgIGNoZWNrYm94LmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgIGxldCBpZCA9IGUudGFyZ2V0LmlkLnNsaWNlKDYpXG4gICAgICAgICAgIGxvZ2ljLmNoZWNrTWFya1RvZG8oaWQpXG4gICAgICAgIH0pXG4gICAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFNlbGVjdG9yVG9kb0xpc3RlbmVyKCkge1xuXG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdFRvZG9JdGVtJylcblxuICAgIHByb2plY3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9JZCA9IGl0ZW0udmFsdWVcbiAgICAgICAgICAgIGxldCBpZCA9IGl0ZW0uaWQuc2xpY2UoNClcbiAgICAgICAgICAgIGxvZ2ljLmNoYW5nZVByb2plY3RJZChpZCwgcHJvSWQpXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdEZvcm1Qb3BVcExpc3RlbmVyKCkge1xuICAgIGxldCBlZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9FZGl0JylcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRpdGxlJylcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdERlc2NyaXB0aW9uJylcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0RGF0ZScpXG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRFZGl0JylcbiAgICBlZGl0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGxldCB0b2RvID0gbG9naWMudG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT0gZS50YXJnZXQuaWQuc2xpY2UoNSkpXG4gICAgICAgICAgICB0aXRsZS52YWx1ZSA9IHRvZG8udGl0bGVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvblxuICAgICAgICAgICAgZGF0ZS52YWx1ZSA9IHRvZG8uZHVlRGF0ZVxuICAgICAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGUudGFyZ2V0LmlkLnNsaWNlKDUpKVxuICAgICAgICAgICAgbG9naWMucG9wVXBDbGFzcygnZWRpdCcpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdEVkaXRGb3JtKCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGl0bGUnKVxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0RGVzY3JpcHRpb24nKVxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXREYXRlJylcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEVkaXQnKVxuXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgXG4gICAgICAgIGxvZ2ljLmNoYW5nZURlc2NyaXB0aW9uKHBhcnNlSW50KHN1Ym1pdC5kYXRhc2V0LmlkKSwgZGVzY3JpcHRpb24udmFsdWUgKVxuICAgICAgICBsb2dpYy5jaGFuZ2VUaXRsZShwYXJzZUludChzdWJtaXQuZGF0YXNldC5pZCksIHRpdGxlLnZhbHVlIClcbiAgICAgICAgbG9naWMuY2hhbmdlRHVlRGF0ZShwYXJzZUludChzdWJtaXQuZGF0YXNldC5pZCksIGRhdGUudmFsdWUpXG4gICAgICAgIGxvZ2ljLnBvcFVwQ2xhc3MoJ2VkaXQnKTtcbiAgICAgICAgdG9kb0l0ZW1SZW5kZXIobG9naWMudG9kb0xpc3QpXG4gICAgICAgIHByb2plY3RMaXN0UmVuZGVyKClcblxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0TGlzdGVuZXIoKSB7XG4gICAgXG4gICAgbGV0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlUHJvamVjdCcpXG4gICAgZGVsZXRlUHJvamVjdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IGUudGFyZ2V0LmlkXG4gICAgICAgICAgICBsZXQgcHJvSWQgPSBwcm9qZWN0LnNsaWNlKDIpXG4gICAgICAgICAgICBsb2dpYy5yZW1vdmVQcm9qZWN0KHByb0lkKVxuICAgICAgICAgICAgcHJvamVjdExpc3RSZW5kZXIoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2ljLnByb2plY3RMaXN0KVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfSlcblxufVxuIiwiaW1wb3J0ICogYXMgZmFjdG9yeSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IHsgcGFnZVRlbXBsYXRlLCBwcm9qZWN0TGlzdFJlbmRlciwgdG9kb0l0ZW1SZW5kZXIgIH0gZnJvbSBcIi4vRE9NbW9kdWxlXCI7XG5pbXBvcnQgeyBhbGxUb2RvTGlzdGVuZXIsIHByb2plY3RMaXN0ZW5lciwgdG9kYXlMaXN0ZW5lcix0b21vcnJvd0xpc3RlbmVyLCB0aGlzV2Vla0xpc3RlbmVyLCBwb3BVcExpc3RlbmVyVG9kbywgcG9wVXBMaXN0ZW5lclByb2plY3QsIHN1Ym1pdFRvZG9CdXR0b24sIHN1Ym1pdFByb2plY3RCdXR0b24sIHN0b3BGb3JtUmVmcmVzaCwgcG9wVXBDbG9zZVByb2plY3RMaXN0ZW5lciwgcG9wVXBDbG9zZVRvZG9MaXN0ZW5lciwgcG9wVXBEcm9wZG93biwgdG9kb0RlbGV0ZUJ1dHRvbkxpc3RlbmVyLCBwb3BVcENsb3NlRWRpdExpc3RlbmVyLCBzdWJtaXRFZGl0Rm9ybX0gZnJvbSBcIi4vbGlzdGVuZXJzXCI7XG5sZXQgdG9kb0xpc3QgPSBbXVxubGV0IHByb2plY3RMaXN0ID0gW11cbmltcG9ydCB7IGlzVG9kYXksIGlzVG9tb3Jyb3csIHBhcnNlSVNPLCBpc1RoaXNXZWVrIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgY3VycmVudExpc3QgfSBmcm9tICcuL0RPTW1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXAoKSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSkge1xuICAgICAgICBuZXdVc2VyTG9hZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgICBleGlzdGluZ1VzZXJMb2FkKClcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gbmV3VXNlckxvYWQoKSB7XG5jb25zdCBydW5uaW5nID0gbmV3IGFkZFRvZG8oJ1J1bm5pbmcnLCAnUnVuIDQ1IG1pbnV0ZXMnLCAnMjAyMy0wMy0wMScsICdIaWdoJywgMSk7XG5jb25zdCBzd2ltbWluZyA9IG5ldyBhZGRUb2RvKCdzd2ltbWluZycsICdzd2ltIHN3aW0gc3dpbScsICcyMDIzLTAzLTAyJywgJ01lZGl1bScsIDIpXG5jb25zdCBzd2ltZWYgPSBuZXcgYWRkVG9kbygnc3dpbW1pbmcnLCAnc3dpbSBzd2ltIHN3aW0nLCAnMjAyMy0wNC0wMicsICdNZWRpdW0nLCAyKVxuY29uc3Qgc3dpbW1mZGZpbmcgPSBuZXcgYWRkVG9kbygnc3dpbW1pbmcnLCAnc3dpbSBzd2ltIHN3aW0nLCAndG9tb3Jyb3cnLCAnTWVkaXVtJywgMSlcbmNvbnN0IHdvcmtvdXQgPSBuZXcgYWRkUHJvamVjdCgnV29ya291dHMnLCAnbXkgZGFpbHkgd29ya291dHMnLCAndGhpcyB3ZWVrJywgJ01lZGl1bScpO1xuY29uc3Qgd29ya2UgPSBuZXcgYWRkUHJvamVjdCgnbmVhdG8nLCAnbXkgZGFpbHkgd29ya291dHMnLCAndGhpcyB3ZWVrJywgJ01lZGl1bScpO1xuY29uc3Qgd29ya2R1dCA9IG5ldyBhZGRQcm9qZWN0KCdMb25nZXIgVGl0bGUnLCAnbXkgZGFpbHkgd29ya291dHMnLCAndGhpcyB3ZWVrJywgJ01lZGl1bScpO1xuY29uc3Qgd29yMzNvdXQgPSBuZXcgYWRkUHJvamVjdCgnc2hpdHRzJywgJ215IGRhaWx5IHdvcmtvdXRzJywgJ3RoaXMgd2VlaycsICdNZWRpdW0nKTtcblxucGFnZVRlbXBsYXRlKCk7XG50b2RvSXRlbVJlbmRlcih0b2RvTGlzdClcbnByb2plY3RMaXN0UmVuZGVyKClcbmFsbFRvZG9MaXN0ZW5lcigpXG5wcm9qZWN0TGlzdGVuZXIoKVxudG9kYXlMaXN0ZW5lcigpXG50b21vcnJvd0xpc3RlbmVyKClcbnRoaXNXZWVrTGlzdGVuZXIoKVxucG9wVXBMaXN0ZW5lclRvZG8oKVxucG9wVXBMaXN0ZW5lclByb2plY3QoKVxuc3VibWl0VG9kb0J1dHRvbigpXG5zdWJtaXRQcm9qZWN0QnV0dG9uKClcbnN1Ym1pdEVkaXRGb3JtKClcbnN0b3BGb3JtUmVmcmVzaCgpXG5wb3BVcERyb3Bkb3duKClcbnBvcFVwQ2xvc2VQcm9qZWN0TGlzdGVuZXIoKVxucG9wVXBDbG9zZVRvZG9MaXN0ZW5lcigpXG5wb3BVcENsb3NlRWRpdExpc3RlbmVyKClcbn1cblxuZnVuY3Rpb24gZXhpc3RpbmdVc2VyTG9hZCgpIHtcblxudG9kb0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKVxuXG5wcm9qZWN0TGlzdCA9ICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKVxuXG5wYWdlVGVtcGxhdGUoKTtcbnRvZG9JdGVtUmVuZGVyKHRvZG9MaXN0KVxucHJvamVjdExpc3RSZW5kZXIoKVxuYWxsVG9kb0xpc3RlbmVyKClcbnByb2plY3RMaXN0ZW5lcigpXG50b2RheUxpc3RlbmVyKClcbnRvbW9ycm93TGlzdGVuZXIoKVxudGhpc1dlZWtMaXN0ZW5lcigpXG5wb3BVcExpc3RlbmVyVG9kbygpXG5wb3BVcExpc3RlbmVyUHJvamVjdCgpXG5zdWJtaXRUb2RvQnV0dG9uKClcbnN1Ym1pdFByb2plY3RCdXR0b24oKVxuc3VibWl0RWRpdEZvcm0oKVxuc3RvcEZvcm1SZWZyZXNoKClcbnBvcFVwRHJvcGRvd24oKVxucG9wVXBDbG9zZVByb2plY3RMaXN0ZW5lcigpXG5wb3BVcENsb3NlVG9kb0xpc3RlbmVyKClcbnBvcFVwQ2xvc2VFZGl0TGlzdGVuZXIoKVxufVxuXG5mdW5jdGlvbiBzYXZlVG9kbygpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpXG59XG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcblxuICAgIGxldCB0b2RvID0gbmV3IGZhY3RvcnkudG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdClcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pXG4gICAgc2F2ZVRvZG8oKVxuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXJrVG9kbyhpZCkge1xuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PSBpZClcbiAgICBcbiAgICBjaGFuZ2UuY2hlY2tlZCA9ICFjaGFuZ2UuY2hlY2tlZDtcbiAgICBzYXZlVG9kbygpXG4gICAgXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvZG8odG9kbykge1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRvZG9MaXN0W2ldLmlkID09IHRvZG8pIHtcbiAgICAgICAgICAgIHRvZG9MaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHNhdmVUb2RvKClcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSAgICBcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjdXJyZW50TGlzdFtpXS5pZCA9PSB0b2RvKSB7XG4gICAgICAgICAgICBjdXJyZW50TGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBzYXZlVG9kbygpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcmlvcml0eShpZCwgcHJpb3JpdHkpIHtcblxuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PSBpZClcbiAgICBcbiAgICBjaGFuZ2UucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBzYXZlVG9kbygpXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURlc2NyaXB0aW9uKGlkLCBkZXNjcmlwdGlvbikge1xuXG4gICAgbGV0IGNoYW5nZSA9IHRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09PSBpZClcbiAgICBcbiAgICBjaGFuZ2UuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBzYXZlVG9kbygpXG4gICAgXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpdGxlKHRvZG8sIHRpdGxlKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHRvZG8pXG4gICAgXG4gICAgY2hhbmdlLnRpdGxlID0gdGl0bGU7XG4gICAgc2F2ZVRvZG8oKVxuICAgIFxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEdWVEYXRlKGlkLCBkYXRlKSB7XG4gICAgbGV0IGNoYW5nZSA9IHRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09PSBpZClcbiAgICBjaGFuZ2UuZHVlRGF0ZSA9IGRhdGU7XG4gICAgc2F2ZVRvZG8oKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJvamVjdElkKGlkLCBwcm9JZCkge1xuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PSBpZClcbiAgICBjaGFuZ2UucHJvamVjdElkID0gcHJvSWRcbiAgICBzYXZlVG9kbygpXG5cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblxuICAgIGxldCBwcm9qZWN0ID0gbmV3IGZhY3RvcnkucHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdClcbiAgICBzYXZlUHJvamVjdCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtpXS5pZCA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBzYXZlUHJvamVjdCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcmlvcml0eVByb2plY3QocHJvamVjdCwgcHJpb3JpdHkpIHtcblxuICAgIGxldCBjaGFuZ2UgPSBwcm9qZWN0TGlzdC5maW5kKHggPT4geC5pZCA9PT0gcHJvamVjdC5pZClcbiAgICBcbiAgICBjaGFuZ2UucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBzYXZlUHJvamVjdCgpXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURlc2NyaXB0aW9uUHJvamVjdChwcm9qZWN0LCBkZXNjcmlwdGlvbikge1xuXG4gICAgbGV0IGNoYW5nZSA9IHByb2plY3RMaXN0LmZpbmQoeCA9PiB4LmlkID09PSBwcm9qZWN0LmlkKVxuICAgIGNoYW5nZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHNhdmVQcm9qZWN0KClcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGl0bGVQcm9qZWN0KHByb2plY3QsIHRpdGxlKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHByb2plY3QuaWQpXG4gICAgY2hhbmdlLnRpdGxlID0gdGl0bGU7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RCeVRvZGF5KCkge1xuXG4gICAgbGV0IHRvZGF5ID0gdG9kb0xpc3QuZmlsdGVyKHkgPT4gaXNUb2RheShwYXJzZUlTTyh5LmR1ZURhdGUpKSkgXG4gICAgcmV0dXJuIHRvZGF5XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RCeVRvbW9ycm93KCkge1xuICAgIGxldCB0b21vcnJvdyA9IHRvZG9MaXN0LmZpbHRlcih5ID0+IGlzVG9tb3Jyb3cocGFyc2VJU08oeS5kdWVEYXRlKSkpIFxuICAgIHJldHVybiB0b21vcnJvd1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdEJ5VGhpc1dlZWsoKSB7XG4gICAgbGV0IHRvbW9ycm93ID0gdG9kb0xpc3QuZmlsdGVyKHkgPT4gaXNUaGlzV2VlayhwYXJzZUlTTyh5LmR1ZURhdGUpKSkgXG4gICAgcmV0dXJuIHRvbW9ycm93XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0QnlQcm9qZWN0KHgpIHtcblxuICAgIGxldCBsaXN0ID0gdG9kb0xpc3QuZmlsdGVyKHkgPT4geS5wcm9qZWN0SWQgPT0geClcbiAgICByZXR1cm4gbGlzdFxuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBDbGFzcyh4KSB7XG4gICAgbGV0IHBvcFVwO1xuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuICAgIGlmICh4ID09PSAncHJvamVjdCcpe1xuICAgICAgICBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcFByb2plY3QnKVxuICAgIH0gZWxzZSBpZiAoeCA9PT0gJ3RvZG8nKXtcbiAgICAgICAgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBUb2RvJylcbiAgICB9ICBlbHNlIGlmICh4ID09PSAnZWRpdCcpIHtcbiAgICAgICAgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBFZGl0JylcbiAgICB9XG4gICAgXG5cbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgcG9wVXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcGRvd25DbGFzcygpIHtcbiAgICBsZXQgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKVxuXG4gICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuXG59XG5cblxuXG5leHBvcnQge3RvZG9MaXN0LCBwcm9qZWN0TGlzdH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=