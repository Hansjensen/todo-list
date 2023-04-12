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
/* harmony export */   "popUpClass": () => (/* binding */ popUpClass),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isTomorrow/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _DOMmodule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMmodule */ "./src/DOMmodule.js");

const todoList = [{id: 20, title: 'Hello World', description: 'coolshit', dueDate: '2023-03-01', priority: 'High', checked: true, projectId: 0}]
;




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

const projectList = []

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

    let today = todoList.filter(y => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(y.dueDate))) 
    return today

}

function listByTomorrow() {
    let tomorrow = todoList.filter(y => (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(y.dueDate))) 
    return tomorrow
}

function listByThisWeek() {
    let tomorrow = todoList.filter(y => (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(y.dueDate))) 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTzs7QUFFUCxzQkFBc0IsNkNBQWU7QUFDckM7QUFDQTs7QUFFTztBQUNQO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRVA7QUFDQTtBQUNBOztBQUVBOztBQUVPOztBQUVQO0FBQ0E7O0FBRUE7O0FBRU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFTzs7QUFFUCxxQ0FBcUMsb0RBQU8sQ0FBQyxvREFBUTtBQUNyRDs7QUFFQTs7QUFFTztBQUNQLHdDQUF3QyxvREFBVSxDQUFDLG9EQUFRO0FBQzNEO0FBQ0E7O0FBRU87QUFDUCx3Q0FBd0Msb0RBQVUsQ0FBQyxvREFBUTtBQUMzRDtBQUNBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb21vcnJvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9tb3Jyb3dcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9tb3Jyb3c/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9tb3Jyb3c/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvbW9ycm93XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDcgT2N0b2JlciAxNDowMDowMCB0b21vcnJvdz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9tb3Jyb3cobmV3IERhdGUoMjAxNCwgOSwgNywgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb21vcnJvdyhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBhZGREYXlzKERhdGUubm93KCksIDEpKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBwcm9qZWN0TGlzdGVuZXIsIHRvZG9EZWxldGVCdXR0b25MaXN0ZW5lciwgZXhwYW5kVG9kb0l0ZW1MaXN0ZW5lciwgcHJpb3JpdHlTZWxlY3REcm9wZG93biwgY2hlY2tib3hMaXN0ZW5lciwgcHJvamVjdFNlbGVjdG9yVG9kb0xpc3RlbmVyLCBlZGl0Rm9ybVBvcFVwTGlzdGVuZXIgfSBmcm9tIFwiLi9saXN0ZW5lcnNcIlxuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9sb2dpY1wiXG5cbmxldCBjdXJyZW50TGlzdCA9IFtdXG5cblxuZnVuY3Rpb24gZWxlbWVudEJ1aWxkICh0eXBlLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbikge1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgICBcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgIH1cblxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpXG4gICAgICAgIH0gIGVsc2V7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnZVRlbXBsYXRlKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCBwb3BQcm9qZWN0ID0gIHBvcFVwQnVpbGRlcigncHJvamVjdCcpO1xuICAgIGNvbnN0IHBvcFRvZG8gPSBwb3BVcEJ1aWxkZXIoJ3RvZG8nKTtcbiAgICBjb25zdCBwb3BFZGl0ID0gcG9wVXBCdWlsZGVyKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAnb3ZlcmxheSd9KVxuICAgIGNvbnN0IHRlbXBsYXRlID1cbiAgICBcbiAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ3dyYXBwZXInfSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdoZWFkZXInLCB7J2lkJzogJ2hlYWRlcid9LCBcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCc6ICdsb2dvRGl2J30sXG4gICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdoMScsIHsnaWQnOiAnbG9nbyd9LCBcIk9ESU4nUyBUT0RPXCIpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJzogJ2hlYWRlckFkZERpdid9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYnV0dG9uJywgeydpZCc6ICdoZWFkZXJBZGQnfSwgJysnXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAnZHJvcGRvd24nfSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdhJywgeydjbGFzcyc6ICdkcm9wZG93bkxpbmsnLCAnaWQnIDogJ3RvZG9BZGQnfSwgJ0FERCBUT0RPJyksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnY2xhc3MnOiAnZHJvcGRvd25MaW5rJywgJ2lkJyA6ICdwcm9qZWN0QWRkJ30sICdBREQgUFJPSkVDVCcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ3NpZGViYXInfSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCc6ICdzdGF0aWNMaW5rcyd9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgndWwnLCB7J2lkJzogJ3N0YXRpY0xpc3QnfSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsaScsIHsnaWQnIDogJ2xpc3RIb21lJ30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdhJywgeydpZCcgOiAnbGlua0hvbWUnfSwgJ0FsbCBUYXNrcycpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGknLCB7J2lkJyA6ICdsaXN0VG9kYXknfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2EnLCB7J2lkJyA6ICdsaW5rVG9kYXknfSwgJ1RvZGF5JylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsaScsIHsnaWQnIDogJ2xpc3RUb21vcnJvdyd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnaWQnIDogJ2xpbmtUb21vcnJvdyd9LCAnVG9tb3Jyb3cnKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xpJywgeydpZCcgOiAnbGlzdFRoaXNXZWVrJ30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdhJywgeydpZCcgOiAnbGlua1RoaXNXZWVrJ30sICdUaGlzIFdlZWsnKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ3AnLCB7J2lkJzogJ3Byb2plY3RzVGl0bGUnfSwgJ1BST0pFQ1RTJyksXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAncHJvamVjdExpbmtzJ30pXG4gICAgICAgICksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAnY29udGVudCd9LFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICdjb250ZW50Q29udGFpbmVyJ30sXG4gICAgICAgICAgICApXG4gICAgICAgICksXG4gICAgKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcEVkaXQpXG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3BQcm9qZWN0KVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocG9wVG9kbylcbiAgICBib2R5LmFwcGVuZENoaWxkKHRlbXBsYXRlKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSlcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXRlbVJlbmRlcihsaXN0KSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Q29udGFpbmVyJylcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJ1xuICAgIGN1cnJlbnRMaXN0ID0gbGlzdFxuICBcbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFxuXG4gICAgICAgIGxldCBidWlsZCA9XG4gICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydjbGFzcyc6J3RvZG9JdGVtJ30sIFxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveEJ1aWxkZXIobGlzdFtpXSksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaDInLCB7J2NsYXNzJyA6ICd0aXRsZScsICdpZCcgOiAndGl0bGVfJyArIGxpc3RbaV0uaWR9LCBsaXN0W2ldLnRpdGxlKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdoMycsIHsnY2xhc3MnIDogJ3RvZG9EYXRlJ30sIGxpc3RbaV0uZHVlRGF0ZSksXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFByaW9yaXR5QnVpbGRlcihsaXN0W2ldKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdidXR0b24nLCB7J2NsYXNzJyA6ICd0b2RvRWRpdCcsICdpZCcgOiAnZWRpdF8nICsgbGlzdFtpXS5pZH0sICdFZGl0JyksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYnV0dG9uJywgeydjbGFzcycgOiAndG9kb0RlbGV0ZScsICdpZCcgOiAnZGVsZXRlXycgKyBsaXN0W2ldLmlkfSwgJ0RlbGV0ZScpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgbGV0IGJ1aWxkMiA9IGVsZW1lbnRCdWlsZCgnZGl2JywgeydjbGFzcycgOiAndG9kb0l0ZW1Mb3dlcid9LFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2gyJywgeydjbGFzcycgOiAndG9kb0Rlc2NyaXB0aW9uJ30sIGxpc3RbaV0uZGVzY3JpcHRpb24pLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnY2xhc3MnOidwcm9MaXN0VG9kb0l0ZW0nfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2Zvcic6ICdwcm9qZWN0UG9wJ30sICdQUk9KRUNUJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdFRvZG8obGlzdFtpXS5wcm9qZWN0SWQsIGxpc3RbaV0uaWQpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG5cblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZClcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkMilcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICB0b2RvRGVsZXRlQnV0dG9uTGlzdGVuZXIoKVxuICAgIGV4cGFuZFRvZG9JdGVtTGlzdGVuZXIoKVxuICAgIHByaW9yaXR5U2VsZWN0RHJvcGRvd24oKVxuICAgIGNoZWNrYm94TGlzdGVuZXIoKVxuICAgIHByb2plY3RTZWxlY3RvclRvZG9MaXN0ZW5lcigpXG4gICAgZWRpdEZvcm1Qb3BVcExpc3RlbmVyKClcbn1cblxuZnVuY3Rpb24gY2hlY2tib3hCdWlsZGVyKHRvZG8pIHtcbiAgICBsZXQgY2hlY2tib3ggPSBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdjaGVja2JveCcsICdjbGFzcycgOiAnY2hlY2tCb3gnLCAnaWQnIDogJ2NoZWNrXycgKyB0b2RvLmlkfSlcbiAgICBpZiAodG9kby5jaGVja2VkKSB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gY2hlY2tib3g7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gY2hlY2tib3g7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3RQcmlvcml0eUJ1aWxkZXIodG9kbykge1xuXG4gICAgbGV0IGJ1aWxkID0gZWxlbWVudEJ1aWxkKCdzZWxlY3QnLCB7J25hbWUnIDogJ3ByaW9yaXR5JywgJ2NsYXNzJyA6ICdwcmlvcml0eVNlbGVjdCcsICdpZCcgOiAncHJpb3JpdHlfJyArIHRvZG8uaWR9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdMb3cnLCAnaWQnOiAnTG93J30sICdMb3cnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnTWVkaXVtJywgJ2lkJyA6ICdNZWRpdW0nfSwgJ01lZGl1bScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdIaWdoJywgJ2lkJyA6ICdIaWdoJ30sICdIaWdoJylcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgIGJ1aWxkLnZhbHVlID0gdG9kby5wcmlvcml0eVxuICAgIHJldHVybiBidWlsZFxuXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdExpc3RSZW5kZXIoeCkge1xuXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlua3MnKVxuICAgIGxldCBsaXN0ID0gZWxlbWVudEJ1aWxkKCd1bCcsIHsnaWQnOiAncHJvamVjdExpc3QnfSwpXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIlxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYnVpbGQgPVxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xpJywgeydjbGFzcycgOiAncHJvamVjdExpc3RJdGVtJ30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdhJywgeydjbGFzcycgOiAnbGlua1Byb2plY3QnLCAnaWQnIDogJ3AnICsgcHJvamVjdExpc3RbaV0uaWR9LCBwcm9qZWN0TGlzdFtpXS50aXRsZSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGJ1aWxkKVxuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdClcbiAgICBwcm9qZWN0TGlzdGVuZXIoKVxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIHBvcFVwQnVpbGRlcih4KSB7XG5cbiAgICBpZiAoeCA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgIGxldCBwb3BVcEZvcm0gPSBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ3BvcFVwUHJvamVjdCd9LFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ3BvcFVwSGVhZGVyJ30sIFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdoMScsIHsnaWQnIDogJ3BvcFVwVGl0bGUnfSwgJ0FkZCBQcm9qZWN0JyksXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2J1dHRvbicsIHsnaWQnIDogJ3BvcFVwUHJvamVjdENsb3NlJ30sICdYJyApKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdmb3JtJywgeydpZCcgOiAncG9wVXBGb3JtUCcsIH0sIFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ3RpdGxlUG9wJyxcImNsYXNzXCIgOiAncG9wTGFiZWwnIH0sICdUSVRMRScpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICd0ZXh0JywgJ2lkJyA6ICd0aXRsZVBvcFAnLCAnbmFtZScgOiAndGl0bGVQb3AnfSksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAnZGVzY3JpcHRpb25Qb3AnLCBcImNsYXNzXCIgOiAncG9wTGFiZWwnfSwgJ0RFU0NSSVBUSU9OJyksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgndGV4dGFyZWEnLCB7J3R5cGUnIDogJ3RleHQnLCAnaWQnIDogJ2Rlc2NyaXB0aW9uUG9wUCcsICduYW1lJyA6ICdkZXNjcmlwdGlvblBvcCd9KSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICdkYXRlUG9wJyxcImNsYXNzXCIgOiAncG9wTGFiZWwnIH0sICdEQVRFJyksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaW5wdXQnLCB7J3R5cGUnIDogJ2RhdGUnLCAnaWQnIDogJ2RhdGVQb3BQJywgJ25hbWUnIDogJ2RhdGVQb3AnfSksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAncHJpb3JpdHlQb3AnLFwiY2xhc3NcIiA6ICdwb3BMYWJlbCcgfSwgJ1BSSU9SSVRZJyksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnc2VsZWN0JywgeyduYW1lJyA6ICdwcmlvcml0eVBvcCcsICdpZCcgOiAncHJpb3JpdHlQb3BQJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogJ0xvdycsIH0sICdMb3cnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnTWVkaXVtJywgfSwgJ01lZGl1bScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdIaWdoJywgfSwgJ0hpZ2gnKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdzdWJtaXQnICwgJ3ZhbHVlJzogJ0FERCcsICdyb3dzJyA6ICcxMCcsICdpZCcgOiAnc3VibWl0UHJvamVjdEFkZCd9LCAnQUREJykpXG5cbiAgICAgICAgXG5cblxuICAgIClcbiAgICByZXR1cm4gcG9wVXBGb3JtO1xuXG4gICAgfSBlbHNlIGlmICh4ID09PSAndG9kbycpIHtcbiAgICAgICAgbGV0IHBvcFVwRm9ybSA9IGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAncG9wVXBUb2RvJ30sXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAncG9wVXBIZWFkZXInfSwgXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2gxJywgeydpZCcgOiAncG9wVXBUaXRsZSd9LCAnQWRkIFRvZG8nKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYnV0dG9uJywgeydpZCcgOiAncG9wVXBUb2RvQ2xvc2UnfSwgJ1gnICkpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2Zvcm0nLCB7J2lkJyA6ICdwb3BVcEZvcm1UJyB9LCBcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICd0aXRsZVBvcCcsXCJjbGFzc1wiIDogJ3BvcExhYmVsJyB9LCAnVElUTEUnKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdpbnB1dCcsIHsndHlwZScgOiAndGV4dCcsICdpZCcgOiAndGl0bGVQb3BUJywgJ25hbWUnIDogJ3RpdGxlUG9wJ30pLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ2Rlc2NyaXB0aW9uUG9wJywgXCJjbGFzc1wiIDogJ3BvcExhYmVsJ30sICdERVNDUklQVElPTicpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3RleHRhcmVhJywgeyd0eXBlJyA6ICd0ZXh0JywgJ2lkJyA6ICdkZXNjcmlwdGlvblBvcFQnLCAnbmFtZScgOiAnZGVzY3JpcHRpb25Qb3AnfSksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAnZGF0ZVBvcCcsXCJjbGFzc1wiIDogJ3BvcExhYmVsJyB9LCAnREFURScpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdkYXRlJywgJ2lkJyA6ICdkYXRlUG9wVCcsICduYW1lJyA6ICdkYXRlUG9wJ30pLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ3ByaW9yaXR5UG9wJyxcImNsYXNzXCIgOiAncG9wTGFiZWwnIH0sICdQUklPUklUWScpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3NlbGVjdCcsIHsnbmFtZScgOiAncHJpb3JpdHlQb3AnLCAnaWQnIDogJ3ByaW9yaXR5UG9wVCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdMb3cnLCB9LCAnTG93JyksXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogJ01lZGl1bScsIH0sICdNZWRpdW0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnSGlnaCcsIH0sICdIaWdoJylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICdwcmlvcml0eVBvcCcsXCJjbGFzc1wiIDogJ3BvcExhYmVsJyB9LCAnUFJPSkVDVCcpLFxuICAgICAgICBwcm9qZWN0TGlzdFBvcFVwKCksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaW5wdXQnLCB7J3R5cGUnIDogJ3N1Ym1pdCcgLCAndmFsdWUnOiAnQUREJywgJ3Jvd3MnIDogJzEwJywgJ2lkJyA6ICdzdWJtaXRUb2RvQWRkJ30sICdBREQnKSlcblxuICAgICAgICBcblxuXG4gICAgKVxuICAgIHJldHVybiBwb3BVcEZvcm07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBvcFVwRm9ybSA9IGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAncG9wVXBFZGl0J30sXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAncG9wVXBIZWFkZXInfSwgXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2gxJywgeydpZCcgOiAncG9wVXBUaXRsZSd9LCAnRWRpdCcpLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdidXR0b24nLCB7J2lkJyA6ICdwb3BVcEVkaXRDbG9zZSd9LCAnWCcgKSksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnZm9ybScsIHsnaWQnIDogJ2VkaXRGb3JtJ30sXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xhYmVsJywgeydmb3InIDogJ3RpdGxlJywgJ2NsYXNzJyA6ICdwb3BMYWJlbCd9LCAnVElUTEUnKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaW5wdXQnLCB7J2lkJyA6J2VkaXRUaXRsZScsICduYW1lJyA6ICd0aXRsZScsICd0eXBlJyA6ICd0ZXh0J30gKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGFiZWwnLCB7J2ZvcicgOiAnZGVzY3JpcHRpb24nLCAnY2xhc3MnIDogJ3BvcExhYmVsJ30sICdERVNDUklQVElPTicpLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdpbnB1dCcsIHsnaWQnIDonZWRpdERlc2NyaXB0aW9uJywgJ25hbWUnIDogJ2Rlc2NyaXB0aW9uJywgJ3R5cGUnIDogJ3RleHQnfSApLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsYWJlbCcsIHsnZm9yJyA6ICdkYXRlJyxcImNsYXNzXCIgOiAncG9wTGFiZWwnIH0sICdEQVRFJyksXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdkYXRlJywgJ2lkJyA6ICdlZGl0RGF0ZScsICduYW1lJyA6ICdkYXRlJ30pLCBcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaW5wdXQnLCB7J3R5cGUnIDogJ3N1Ym1pdCcgLCAndmFsdWUnOiAnRURJVCcsICdyb3dzJyA6ICcxMCcsICdpZCcgOiAnc3VibWl0RWRpdCd9LCAnRURJVCcpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHBvcFVwRm9ybTtcblxuICAgIH1cblxuICAgIFxuXG59XG5cbmZ1bmN0aW9uIHByb2plY3RMaXN0UG9wVXAoKSB7XG4gICAgXG4gICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50QnVpbGQoJ3NlbGVjdCcsIHsnbmFtZScgOiAncHJvamVjdFBvcCcsICdpZCcgOiAncHJvamVjdFBvcFQnfSlcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAwfSwgJ05vbmUnKSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHByb2plY3RMaXN0W2ldLnRpdGxlXG4gICAgICAgIGxldCBpZCA9IHByb2plY3RMaXN0W2ldLmlkXG4gICAgICAgIGxldCBvcHRpb24gPSBlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogaWR9LCB0aXRsZSlcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfVxuICAgXG4gICAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpc3RUb2RvKHgsIHkpIHtcbiAgICBcbiAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRCdWlsZCgnc2VsZWN0JywgeyduYW1lJyA6ICdwcm9qZWN0UG9wJywgJ2NsYXNzJyA6ICdwcm9qZWN0VG9kb0l0ZW0nLCAnaWQnIDogJ3Byb18nICsgeX0pXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogMH0sICdOb25lJykpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0TGlzdFtpXS50aXRsZVxuICAgICAgICBsZXQgaWQgPSBwcm9qZWN0TGlzdFtpXS5pZFxuICAgICAgICBsZXQgb3B0aW9uID0gZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6IGlkfSwgdGl0bGUpXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH1cbiAgICBlbGVtZW50LnZhbHVlID0geFxuICAgIFxuICAgIFxuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCB7Y3VycmVudExpc3R9XG4iLCJsZXQgaWROdW0gPSAwXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgXG4gICAgXG4gICAgbGV0IHRvZG8gPSB7XG4gICAgICAgIGlkOiBpZE51bSxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIHByb2plY3RJZDogMFxuICAgIH1cbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgICBcbiAgICAgICAgdG9kby5wcm9qZWN0SWQgPSBwcm9qZWN0XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLnByb2plY3RJZCA9IDBcbiAgICB9XG4gICAgaWROdW0rK1xuICAgIHJldHVybiB0b2RvXG5cbn1cbmxldCBwcm9qSWQgPSAxXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgICAgaWQ6IHByb2pJZCxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICB9XG4gICAgcHJvaklkKys7XG4gICAgcmV0dXJuIHByb2plY3Rcbn1cbiIsImltcG9ydCAqIGFzIGxvZ2ljIGZyb20gJy4vbG9naWMnXG5pbXBvcnQgeyBwcm9qZWN0TGlzdFJlbmRlciwgdG9kb0l0ZW1SZW5kZXIsIGN1cnJlbnRMaXN0fSBmcm9tICcuL0RPTW1vZHVsZSdcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RMaXN0ZW5lcigpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rUHJvamVjdCcpLmZvckVhY2goaXRlbSA9PlxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9zbGljZSBJRCBudW1iZXIgZnJvbSBlbGVtZW50IElEXG4gICAgICAgICAgICBsZXQgaWQgPSBlLnRhcmdldC5pZC5zbGljZSgxKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL0NyZWF0ZSBhIGxpc3Qgb2YgYWxsIHByb2plY3RzIHdpdGggdGhhdCBwcm9qZWN0cyBJRCBudW1iZXIuXG4gICAgICAgICAgICB0b2RvSXRlbVJlbmRlcihsb2dpYy5saXN0QnlQcm9qZWN0KGlkKSlcbiAgICAgICBcbiAgICAgICAgfSkpXG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsVG9kb0xpc3RlbmVyKCkge1xuXG4gICAgbGV0IGxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmtIb21lJyk7XG5cbiAgICBsaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICB0b2RvSXRlbVJlbmRlcihsb2dpYy50b2RvTGlzdCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5TGlzdGVuZXIoKSB7XG5cbiAgICBsZXQgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlua1RvZGF5JylcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICB0b2RvSXRlbVJlbmRlcihsb2dpYy5saXN0QnlUb2RheSgpKVxuICAgIH0gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9tb3Jyb3dMaXN0ZW5lcigpIHtcblxuICAgIGxldCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5rVG9tb3Jyb3cnKVxuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIHRvZG9JdGVtUmVuZGVyKGxvZ2ljLmxpc3RCeVRvbW9ycm93KCkpXG4gICAgfSApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlzV2Vla0xpc3RlbmVyKCkge1xuXG4gICAgbGV0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmtUaGlzV2VlaycpXG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgdG9kb0l0ZW1SZW5kZXIobG9naWMubGlzdEJ5VGhpc1dlZWsoKSlcbiAgICB9IClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwRHJvcGRvd24oKSB7XG5cbiAgICBsZXQgbGlzdGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckFkZCcpXG5cbiAgICBsaXN0ZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblxuICAgICAgICBsb2dpYy5kcm9wZG93bkNsYXNzKClcbiAgICAgICAgY29uc29sZS5sb2coJ2hleScpXG4gICAgICBcbiAgICB9ICkgICBcbn1cblxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyNoZWFkZXJBZGQnKSkge1xuICBcbiAgICAgIHZhciBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25cIik7XG4gICBcbiAgICAgICAgaWYgKGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwTGlzdGVuZXJUb2RvKCkge1xuXG4gICAgbGV0IGxpc3RlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQWRkJylcblxuICAgIGxpc3Rlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBcbiAgICAgICAgbG9naWMucG9wVXBDbGFzcygndG9kbycpXG4gICAgICAgXG5cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcExpc3RlbmVyUHJvamVjdCgpIHtcblxuICAgIGxldCBsaXN0ZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEFkZCcpXG5cbiAgICBsaXN0ZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICBcbiAgICAgICAgbG9naWMucG9wVXBDbGFzcygncHJvamVjdCcpO1xuICAgICAgIFxuXG4gICAgfSlcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXRUb2RvQnV0dG9uKCkge1xuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRUb2RvQWRkJylcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlUG9wVCcpLnZhbHVlXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvblBvcFQnKS52YWx1ZVxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlUG9wVCcpLnZhbHVlXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVBvcFQnKS52YWx1ZVxuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0UG9wVCcpLnZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXknKVxuICAgICAgICBsb2dpYy5hZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LCBwcm9qZWN0KVxuICAgICAgICBsb2dpYy5wb3BVcENsYXNzKCd0b2RvJyk7XG4gICAgICAgIHRvZG9JdGVtUmVuZGVyKGxvZ2ljLnRvZG9MaXN0KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBGb3JtVCcpLnJlc2V0KCk7XG4gICAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0UHJvamVjdEJ1dHRvbigpIHtcblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0UHJvamVjdEFkZCcpXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZVBvcFAnKS52YWx1ZVxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25Qb3BQJykudmFsdWVcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZVBvcFAnKS52YWx1ZVxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlQb3BQJykudmFsdWVcbiAgICAgICAgbG9naWMuYWRkUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSlcbiAgICAgICAgbG9naWMucG9wVXBDbGFzcygncHJvamVjdCcpO1xuICAgICAgICB0b2RvSXRlbVJlbmRlcihsb2dpYy50b2RvTGlzdClcbiAgICAgICAgcHJvamVjdExpc3RSZW5kZXIoKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBGb3JtUCcpLnJlc2V0KCk7XG4gICAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcEZvcm1SZWZyZXNoKCkge1xuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcEZvcm1QXCIpO1xuZnVuY3Rpb24gaGFuZGxlRm9ybShldmVudCkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9IFxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtKTtcblxudmFyIGZvcm1UID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcEZvcm1UXCIpO1xuZnVuY3Rpb24gaGFuZGxlRm9ybShldmVudCkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9IFxuZm9ybVQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybSk7XG52YXIgZm9ybUUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRGb3JtXCIpO1xuZnVuY3Rpb24gaGFuZGxlRm9ybShldmVudCkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9IFxuZm9ybUUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcENsb3NlRWRpdExpc3RlbmVyKCkge1xuXG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwRWRpdENsb3NlJylcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBsb2dpYy5wb3BVcENsYXNzKCdlZGl0Jyk7XG4gICAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBDbG9zZVByb2plY3RMaXN0ZW5lcigpIHtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBQcm9qZWN0Q2xvc2UnKVxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGxvZ2ljLnBvcFVwQ2xhc3MoJ3Byb2plY3QnKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBDbG9zZVRvZG9MaXN0ZW5lcigpIHtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBUb2RvQ2xvc2UnKVxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGxvZ2ljLnBvcFVwQ2xhc3MoJ3RvZG8nKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0RlbGV0ZUJ1dHRvbkxpc3RlbmVyKCkge1xuICAgIFxuICAgIGxldCBkZWxldGVCdXR0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9EZWxldGUnKVxuICAgIGRlbGV0ZUJ1dHQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IHRvZG8gPSBlLnRhcmdldC5pZFxuICAgICAgICAgICAgdG9kbyA9IHRvZG8uc2xpY2UoNylcbiAgICAgICAgICAgIGxvZ2ljLnJlbW92ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICB0b2RvSXRlbVJlbmRlcihjdXJyZW50TGlzdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50TGlzdClcbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRUb2RvSXRlbUxpc3RlbmVyKCkge1xuXG4gICAgbGV0IHRpdGxldG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXRsZScpO1xuICAgIFxuXG4gICAgdGl0bGV0b2RvLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGxldCBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnRcbiAgICAgICAgbGV0IGRyb3AgPSBwYXJlbnQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGRyb3Auc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICBkcm9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW9yaXR5U2VsZWN0RHJvcGRvd24oKSB7XG5cbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpb3JpdHlTZWxlY3QnKVxuXG4gICAgcHJpb3JpdHkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgIGxldCB0b2RvSWQgPSBpdGVtLmlkLnNsaWNlKDkpXG4gICAgICAgICAgICBsb2dpYy5jaGFuZ2VQcmlvcml0eSh0b2RvSWQsIGl0ZW0udmFsdWUpXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tib3hMaXN0ZW5lcigpIHtcblxuICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja0JveCcpXG5cbiAgICBjaGVja2JveC5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICBsZXQgaWQgPSBlLnRhcmdldC5pZC5zbGljZSg2KVxuICAgICAgICAgICBsb2dpYy5jaGVja01hcmtUb2RvKGlkKVxuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RTZWxlY3RvclRvZG9MaXN0ZW5lcigpIHtcblxuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RUb2RvSXRlbScpXG5cbiAgICBwcm9qZWN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvSWQgPSBpdGVtLnZhbHVlXG4gICAgICAgICAgICBsZXQgaWQgPSBpdGVtLmlkLnNsaWNlKDQpXG4gICAgICAgICAgICBsb2dpYy5jaGFuZ2VQcm9qZWN0SWQoaWQsIHByb0lkKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRGb3JtUG9wVXBMaXN0ZW5lcigpIHtcbiAgICBsZXQgZWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRWRpdCcpXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUaXRsZScpXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXREZXNjcmlwdGlvbicpXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdERhdGUnKVxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0RWRpdCcpXG4gICAgZWRpdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9kbyA9IGxvZ2ljLnRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09IGUudGFyZ2V0LmlkLnNsaWNlKDUpKVxuICAgICAgICAgICAgdGl0bGUudmFsdWUgPSB0b2RvLnRpdGxlXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGRhdGUudmFsdWUgPSB0b2RvLmR1ZURhdGVcbiAgICAgICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBlLnRhcmdldC5pZC5zbGljZSg1KSlcbiAgICAgICAgICAgIGxvZ2ljLnBvcFVwQ2xhc3MoJ2VkaXQnKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXRFZGl0Rm9ybSgpIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRpdGxlJylcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdERlc2NyaXB0aW9uJylcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0RGF0ZScpXG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRFZGl0JylcblxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgIFxuICAgICAgICBsb2dpYy5jaGFuZ2VEZXNjcmlwdGlvbihwYXJzZUludChzdWJtaXQuZGF0YXNldC5pZCksIGRlc2NyaXB0aW9uLnZhbHVlIClcbiAgICAgICAgbG9naWMuY2hhbmdlVGl0bGUocGFyc2VJbnQoc3VibWl0LmRhdGFzZXQuaWQpLCB0aXRsZS52YWx1ZSApXG4gICAgICAgIGxvZ2ljLmNoYW5nZUR1ZURhdGUocGFyc2VJbnQoc3VibWl0LmRhdGFzZXQuaWQpLCBkYXRlLnZhbHVlKVxuICAgICAgICBsb2dpYy5wb3BVcENsYXNzKCdlZGl0Jyk7XG4gICAgICAgIHRvZG9JdGVtUmVuZGVyKGxvZ2ljLnRvZG9MaXN0KVxuICAgICAgICBwcm9qZWN0TGlzdFJlbmRlcigpXG5cbiAgICB9KVxufVxuIiwiaW1wb3J0ICogYXMgZmFjdG9yeSBmcm9tICcuL2ZhY3RvcnknO1xuY29uc3QgdG9kb0xpc3QgPSBbe2lkOiAyMCwgdGl0bGU6ICdIZWxsbyBXb3JsZCcsIGRlc2NyaXB0aW9uOiAnY29vbHNoaXQnLCBkdWVEYXRlOiAnMjAyMy0wMy0wMScsIHByaW9yaXR5OiAnSGlnaCcsIGNoZWNrZWQ6IHRydWUsIHByb2plY3RJZDogMH1dXG5pbXBvcnQgeyBpc1RvZGF5LCBpc1RvbW9ycm93LCBwYXJzZUlTTywgaXNUaGlzV2VlayB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGN1cnJlbnRMaXN0IH0gZnJvbSAnLi9ET01tb2R1bGUnO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuXG4gICAgbGV0IHRvZG8gPSBuZXcgZmFjdG9yeS50b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KVxuICAgIHRvZG9MaXN0LnB1c2godG9kbylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWFya1RvZG8oaWQpIHtcbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT0gaWQpXG5cbiAgICBjaGFuZ2UuY2hlY2tlZCA9ICFjaGFuZ2UuY2hlY2tlZDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvKSB7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodG9kb0xpc3RbaV0uaWQgPT0gdG9kbykge1xuICAgICAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9ICAgIFxuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGN1cnJlbnRMaXN0W2ldLmlkID09IHRvZG8pIHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KGlkLCBwcmlvcml0eSkge1xuXG4gICAgbGV0IGNoYW5nZSA9IHRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09IGlkKVxuICAgIFxuICAgIGNoYW5nZS5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEZXNjcmlwdGlvbihpZCwgZGVzY3JpcHRpb24pIHtcblxuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gaWQpXG4gICAgXG4gICAgY2hhbmdlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpdGxlKHRvZG8sIHRpdGxlKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHRvZG8pXG4gICAgXG4gICAgY2hhbmdlLnRpdGxlID0gdGl0bGU7XG4gICAgXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUR1ZURhdGUoaWQsIGRhdGUpIHtcbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IGlkKVxuICAgIGNoYW5nZS5kdWVEYXRlID0gZGF0ZTtcbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByb2plY3RJZChpZCwgcHJvSWQpIHtcbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT0gaWQpXG4gICAgY2hhbmdlLnByb2plY3RJZCA9IHByb0lkXG5cbn1cblxuY29uc3QgcHJvamVjdExpc3QgPSBbXVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cbiAgICBsZXQgcHJvamVjdCA9IG5ldyBmYWN0b3J5LnByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSlcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtpXS5pZCA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgICAgICAgcHJvamVjdExpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHlQcm9qZWN0KHByb2plY3QsIHByaW9yaXR5KSB7XG5cbiAgICBsZXQgY2hhbmdlID0gcHJvamVjdExpc3QuZmluZCh4ID0+IHguaWQgPT09IHByb2plY3QuaWQpXG4gICAgXG4gICAgY2hhbmdlLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURlc2NyaXB0aW9uUHJvamVjdChwcm9qZWN0LCBkZXNjcmlwdGlvbikge1xuXG4gICAgbGV0IGNoYW5nZSA9IHByb2plY3RMaXN0LmZpbmQoeCA9PiB4LmlkID09PSBwcm9qZWN0LmlkKVxuICAgIGNoYW5nZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUaXRsZVByb2plY3QocHJvamVjdCwgdGl0bGUpIHtcblxuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gcHJvamVjdC5pZClcbiAgICBjaGFuZ2UudGl0bGUgPSB0aXRsZTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdEJ5VG9kYXkoKSB7XG5cbiAgICBsZXQgdG9kYXkgPSB0b2RvTGlzdC5maWx0ZXIoeSA9PiBpc1RvZGF5KHBhcnNlSVNPKHkuZHVlRGF0ZSkpKSBcbiAgICByZXR1cm4gdG9kYXlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdEJ5VG9tb3Jyb3coKSB7XG4gICAgbGV0IHRvbW9ycm93ID0gdG9kb0xpc3QuZmlsdGVyKHkgPT4gaXNUb21vcnJvdyhwYXJzZUlTTyh5LmR1ZURhdGUpKSkgXG4gICAgcmV0dXJuIHRvbW9ycm93XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0QnlUaGlzV2VlaygpIHtcbiAgICBsZXQgdG9tb3Jyb3cgPSB0b2RvTGlzdC5maWx0ZXIoeSA9PiBpc1RoaXNXZWVrKHBhcnNlSVNPKHkuZHVlRGF0ZSkpKSBcbiAgICByZXR1cm4gdG9tb3Jyb3dcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RCeVByb2plY3QoeCkge1xuXG4gICAgbGV0IGxpc3QgPSB0b2RvTGlzdC5maWx0ZXIoeSA9PiB5LnByb2plY3RJZCA9PSB4KVxuICAgIHJldHVybiBsaXN0XG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcENsYXNzKHgpIHtcbiAgICBsZXQgcG9wVXA7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG4gICAgaWYgKHggPT09ICdwcm9qZWN0Jyl7XG4gICAgICAgIHBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwUHJvamVjdCcpXG4gICAgfSBlbHNlIGlmICh4ID09PSAndG9kbycpe1xuICAgICAgICBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcFRvZG8nKVxuICAgIH0gIGVsc2UgaWYgKHggPT09ICdlZGl0Jykge1xuICAgICAgICBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcEVkaXQnKVxuICAgIH1cbiAgICBcblxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICBwb3BVcC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wZG93bkNsYXNzKCkge1xuICAgIGxldCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bicpXG5cbiAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG5cbn1cblxuXG5cbmV4cG9ydCB7dG9kb0xpc3QsIHByb2plY3RMaXN0fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==