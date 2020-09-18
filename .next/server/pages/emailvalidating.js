module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/emailvalidating.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/emailvalidating.js":
/*!**********************************!*\
  !*** ./pages/emailvalidating.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_EmailValidatingForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/EmailValidatingForm */ \"./src/EmailValidatingForm.js\");\nvar _jsxFileName = \"/Users/arieldavis/Development/code/react-hooks/pages/emailvalidating.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction emailValidating() {\n  return __jsx(_src_EmailValidatingForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 12\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (emailValidating);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbWFpbHZhbGlkYXRpbmcuanM/ZDc2ZCJdLCJuYW1lcyI6WyJlbWFpbFZhbGlkYXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0EsZUFBVCxHQUEyQjtBQUN2QixTQUFPLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0g7O0FBRWNBLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZW1haWx2YWxpZGF0aW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEVtYWlsVmFsaWRhdGluZ0Zvcm0gZnJvbSAnLi4vc3JjL0VtYWlsVmFsaWRhdGluZ0Zvcm0nXG5cbmZ1bmN0aW9uIGVtYWlsVmFsaWRhdGluZygpIHtcbiAgICByZXR1cm4gPEVtYWlsVmFsaWRhdGluZ0Zvcm0gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZW1haWxWYWxpZGF0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/emailvalidating.js\n");

/***/ }),

/***/ "./src/EmailValidatingForm.js":
/*!************************************!*\
  !*** ./src/EmailValidatingForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useInterval */ \"./src/useInterval.js\");\nvar _jsxFileName = \"/Users/arieldavis/Development/code/react-hooks/src/EmailValidatingForm.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction EmailValidatingForm() {\n  const validateEmail = email => {\n    const re = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return re.test(email);\n  };\n\n  const {\n    0: emailValid,\n    1: setEmailValid\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const emailReducer = (state, action) => {\n    const isValidEmail = validateEmail(action);\n    setEmailValid(isValidEmail);\n    return action;\n  };\n\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(emailReducer, '');\n  const maxSeconds = 30;\n  const {\n    0: count,\n    1: setCount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(maxSeconds);\n  Object(_useInterval__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => {\n    setCount(count - 1);\n  }, 1000);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    onChange: e => {\n      setEmail(e.target.value);\n    },\n    disabled: count <= 0,\n    value: email,\n    placeholder: \"Enter Email\",\n    type: \"email\",\n    name: \"email\",\n    required: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }), \"\\xA0\\xA0\\xA0\", __jsx(\"button\", {\n    disabled: !emailValid || count <= 0,\n    onClick: () => {\n      setCount(0);\n      alert(`button clicked with email ${email}`);\n    },\n    className: \"btn-lg\",\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, \"PRESS ME!\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, count > 0 ? `You Have ${count} Seconds To Enter Your Email` : 'Email Entered or Time Expired'))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailValidatingForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRW1haWxWYWxpZGF0aW5nRm9ybS5qcz8yNDFkIl0sIm5hbWVzIjpbIkVtYWlsVmFsaWRhdGluZ0Zvcm0iLCJ2YWxpZGF0ZUVtYWlsIiwiZW1haWwiLCJyZSIsInRlc3QiLCJlbWFpbFZhbGlkIiwic2V0RW1haWxWYWxpZCIsInVzZVN0YXRlIiwiZW1haWxSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJpc1ZhbGlkRW1haWwiLCJzZXRFbWFpbCIsInVzZVJlZHVjZXIiLCJtYXhTZWNvbmRzIiwiY291bnQiLCJzZXRDb3VudCIsInVzZUludGVydmFsIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLG1CQUFULEdBQStCO0FBQzdCLFFBQU1DLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBQy9CLFVBQU1DLEVBQUUsR0FBRywySkFBWDtBQUNBLFdBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRixLQUFSLENBQVA7QUFDRCxHQUhEOztBQUlBLFFBQU07QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsc0RBQVEsQ0FBQyxLQUFELENBQTVDOztBQUNBLFFBQU1DLFlBQVksR0FBRyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDdEMsVUFBTUMsWUFBWSxHQUFHVixhQUFhLENBQUNTLE1BQUQsQ0FBbEM7QUFDQUosaUJBQWEsQ0FBQ0ssWUFBRCxDQUFiO0FBQ0EsV0FBT0QsTUFBUDtBQUNELEdBSkQ7O0FBTUEsUUFBTTtBQUFBLE9BQUNSLEtBQUQ7QUFBQSxPQUFRVTtBQUFSLE1BQW9CQyx3REFBVSxDQUFDTCxZQUFELEVBQWUsRUFBZixDQUFwQztBQUNBLFFBQU1NLFVBQVUsR0FBRyxFQUFuQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQlQsc0RBQVEsQ0FBQ08sVUFBRCxDQUFsQztBQUVBRyw4REFBVyxDQUFDLE1BQU07QUFDaEJELFlBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNELEdBRlUsRUFFUixJQUZRLENBQVg7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFlBQVEsRUFBR0csQ0FBRCxJQUFPO0FBQ2ZOLGNBQVEsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEtBSEg7QUFJRSxZQUFRLEVBQUVMLEtBQUssSUFBSSxDQUpyQjtBQUtFLFNBQUssRUFBRWIsS0FMVDtBQU1FLGVBQVcsRUFBQyxhQU5kO0FBT0UsUUFBSSxFQUFDLE9BUFA7QUFRRSxRQUFJLEVBQUMsT0FSUDtBQVNFLFlBQVEsTUFUVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsa0JBYUU7QUFDRSxZQUFRLEVBQUUsQ0FBQ0csVUFBRCxJQUFlVSxLQUFLLElBQUksQ0FEcEM7QUFFRSxXQUFPLEVBQUUsTUFBTTtBQUNiQyxjQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FLLFdBQUssQ0FBRSw2QkFBNEJuQixLQUFNLEVBQXBDLENBQUw7QUFDRCxLQUxIO0FBTUUsYUFBUyxFQUFDLFFBTlo7QUFPRSxRQUFJLEVBQUMsUUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGLEVBd0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2EsS0FBSyxHQUFHLENBQVIsR0FDSSxZQUFXQSxLQUFNLDhCQURyQixHQUVHLCtCQUhOLENBeEJGLENBREYsQ0FGRixDQURGO0FBcUNEOztBQUNjZixrRkFBZiIsImZpbGUiOiIuL3NyYy9FbWFpbFZhbGlkYXRpbmdGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi91c2VJbnRlcnZhbCc7XG5cbmZ1bmN0aW9uIEVtYWlsVmFsaWRhdGluZ0Zvcm0oKSB7XG4gIGNvbnN0IHZhbGlkYXRlRW1haWwgPSAoZW1haWwpID0+IHtcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbiAgfTtcbiAgY29uc3QgW2VtYWlsVmFsaWQsIHNldEVtYWlsVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBlbWFpbFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGlzVmFsaWRFbWFpbCA9IHZhbGlkYXRlRW1haWwoYWN0aW9uKTtcbiAgICBzZXRFbWFpbFZhbGlkKGlzVmFsaWRFbWFpbCk7XG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfTtcblxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVJlZHVjZXIoZW1haWxSZWR1Y2VyLCAnJyk7XG4gIGNvbnN0IG1heFNlY29uZHMgPSAzMDtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShtYXhTZWNvbmRzKTtcblxuICB1c2VJbnRlcnZhbCgoKSA9PiB7XG4gICAgc2V0Q291bnQoY291bnQgLSAxKTtcbiAgfSwgMTAwMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2NvdW50IDw9IDB9XG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXshZW1haWxWYWxpZCB8fCBjb3VudCA8PSAwfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRDb3VudCgwKTtcbiAgICAgICAgICAgICAgYWxlcnQoYGJ1dHRvbiBjbGlja2VkIHdpdGggZW1haWwgJHtlbWFpbH1gKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbGdcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUFJFU1MgTUUhXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjb3VudCA+IDBcbiAgICAgICAgICAgICAgPyBgWW91IEhhdmUgJHtjb3VudH0gU2Vjb25kcyBUbyBFbnRlciBZb3VyIEVtYWlsYFxuICAgICAgICAgICAgICA6ICdFbWFpbCBFbnRlcmVkIG9yIFRpbWUgRXhwaXJlZCd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBFbWFpbFZhbGlkYXRpbmdGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/EmailValidatingForm.js\n");

/***/ }),

/***/ "./src/useInterval.js":
/*!****************************!*\
  !*** ./src/useInterval.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// https://overreacted.io/making-setinterval-declarative-with-react-hooks/\n\n\nconst useInterval = (callback, delay) => {\n  const savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(); // Remember the latest function.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    savedCallback.current = callback;\n  }, [callback]); // Set up the interval.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    function tick() {\n      savedCallback.current();\n    }\n\n    if (delay !== null) {\n      let id = setInterval(tick, delay);\n      return () => clearInterval(id);\n    }\n  }, [delay]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useInterval);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXNlSW50ZXJ2YWwuanM/YTNlOCJdLCJuYW1lcyI6WyJ1c2VJbnRlcnZhbCIsImNhbGxiYWNrIiwiZGVsYXkiLCJzYXZlZENhbGxiYWNrIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRpY2siLCJpZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEtBQXFCO0FBQ3ZDLFFBQU1DLGFBQWEsR0FBR0Msb0RBQU0sRUFBNUIsQ0FEdUMsQ0FHdkM7O0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkRixpQkFBYSxDQUFDRyxPQUFkLEdBQXdCTCxRQUF4QjtBQUNELEdBRlEsRUFFTixDQUFDQSxRQUFELENBRk0sQ0FBVCxDQUp1QyxDQVF2Qzs7QUFDQUkseURBQVMsQ0FBQyxNQUFNO0FBQ2QsYUFBU0UsSUFBVCxHQUFnQjtBQUNkSixtQkFBYSxDQUFDRyxPQUFkO0FBQ0Q7O0FBQ0QsUUFBSUosS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsVUFBSU0sRUFBRSxHQUFHQyxXQUFXLENBQUNGLElBQUQsRUFBT0wsS0FBUCxDQUFwQjtBQUNBLGFBQU8sTUFBTVEsYUFBYSxDQUFDRixFQUFELENBQTFCO0FBQ0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ04sS0FBRCxDQVJNLENBQVQ7QUFTRCxDQWxCRDs7QUFtQmVGLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL3VzZUludGVydmFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9vdmVycmVhY3RlZC5pby9tYWtpbmctc2V0aW50ZXJ2YWwtZGVjbGFyYXRpdmUtd2l0aC1yZWFjdC1ob29rcy9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VJbnRlcnZhbCA9IChjYWxsYmFjaywgZGVsYXkpID0+IHtcbiAgY29uc3Qgc2F2ZWRDYWxsYmFjayA9IHVzZVJlZigpO1xuXG4gIC8vIFJlbWVtYmVyIHRoZSBsYXRlc3QgZnVuY3Rpb24uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50ID0gY2FsbGJhY2s7XG4gIH0sIFtjYWxsYmFja10pO1xuXG4gIC8vIFNldCB1cCB0aGUgaW50ZXJ2YWwuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIHNhdmVkQ2FsbGJhY2suY3VycmVudCgpO1xuICAgIH1cbiAgICBpZiAoZGVsYXkgIT09IG51bGwpIHtcbiAgICAgIGxldCBpZCA9IHNldEludGVydmFsKHRpY2ssIGRlbGF5KTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKTtcbiAgICB9XG4gIH0sIFtkZWxheV0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUludGVydmFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/useInterval.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });