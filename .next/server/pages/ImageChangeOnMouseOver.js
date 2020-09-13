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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ImageChangeOnMouseOver.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ \"./src/ImageToggleOnMouseOver.js\");\nvar _jsxFileName = \"/Users/arieldavis/Development/code/react-hooks/pages/ImageChangeOnMouseOver.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst ImageChangeOnMouseOver = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    primaryImg: \"static/bw/speaker1.jpg\",\n    secondaryImg: \"static/speaker1.jpg\",\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }), \"\\xA0\\xA0\\xA0\", __jsx(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    primaryImg: \"static/bw/speaker2.jpg\",\n    secondaryImg: \"static/speaker2.jpg\",\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnMouseOver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzPzFmNzMiXSwibmFtZXMiOlsiSW1hZ2VDaGFuZ2VPbk1vdXNlT3ZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxzQkFBc0IsR0FBRyxNQUFNO0FBQ2pDLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUVBQUQ7QUFDQSxjQUFVLEVBQUMsd0JBRFg7QUFFQSxnQkFBWSxFQUFDLHFCQUZiO0FBR0EsT0FBRyxFQUFDLEVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLGtCQU1JLE1BQUMsbUVBQUQ7QUFDQSxjQUFVLEVBQUMsd0JBRFg7QUFFQSxnQkFBWSxFQUFDLHFCQUZiO0FBR0EsT0FBRyxFQUFDLEVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREo7QUFhSCxDQWREOztBQWdCZUEscUZBQWYiLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZVRvZ2dsZU9uTW91c2VPdmVyIGZyb20gJy4uL3NyYy9JbWFnZVRvZ2dsZU9uTW91c2VPdmVyJ1xuXG5jb25zdCBJbWFnZUNoYW5nZU9uTW91c2VPdmVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoICBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uTW91c2VPdmVyIFxuICAgICAgICAgICAgcHJpbWFyeUltZz1cInN0YXRpYy9idy9zcGVha2VyMS5qcGdcIiBcbiAgICAgICAgICAgIHNlY29uZGFyeUltZz1cInN0YXRpYy9zcGVha2VyMS5qcGdcIlxuICAgICAgICAgICAgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIgXG4gICAgICAgICAgICBwcmltYXJ5SW1nPVwic3RhdGljL2J3L3NwZWFrZXIyLmpwZ1wiIFxuICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPVwic3RhdGljL3NwZWFrZXIyLmpwZ1wiXG4gICAgICAgICAgICBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uTW91c2VPdmVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnMouseOver.js\n");

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/arieldavis/Development/code/react-hooks/src/ImageToggleOnMouseOver.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst ImageToggleOnMouseOver = ({\n  primaryImg,\n  secondaryImg\n}) => {\n  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  return __jsx(\"img\", {\n    onMouseOver: () => {\n      imageRef.current.src = secondaryImg;\n    },\n    onMouseOut: () => {\n      imageRef.current.src = primaryImg;\n    },\n    src: primaryImg,\n    ref: imageRef,\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnMouseOver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VUb2dnbGVPbk1vdXNlT3Zlci5qcz82Zjc0Il0sIm5hbWVzIjpbIkltYWdlVG9nZ2xlT25Nb3VzZU92ZXIiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJjdXJyZW50Iiwic3JjIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLE1BQU1BLHNCQUFzQixHQUFHLENBQUM7QUFBRUMsWUFBRjtBQUFjQztBQUFkLENBQUQsS0FBa0M7QUFFN0QsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7QUFFQSxTQUNJO0FBQ0EsZUFBVyxFQUFFLE1BQU07QUFDZkQsY0FBUSxDQUFDRSxPQUFULENBQWlCQyxHQUFqQixHQUF1QkosWUFBdkI7QUFDSCxLQUhEO0FBSUEsY0FBVSxFQUFFLE1BQU07QUFDZEMsY0FBUSxDQUFDRSxPQUFULENBQWlCQyxHQUFqQixHQUF1QkwsVUFBdkI7QUFDSCxLQU5EO0FBT0EsT0FBRyxFQUFFQSxVQVBMO0FBUUEsT0FBRyxFQUFFRSxRQVJMO0FBU0EsT0FBRyxFQUFDLEVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKO0FBWUgsQ0FoQkQ7O0FBa0JlSCxxRkFBZiIsImZpbGUiOiIuL3NyYy9JbWFnZVRvZ2dsZU9uTW91c2VPdmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlciA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XG5cbiAgICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKVxuXG4gICAgcmV0dXJuICggIFxuICAgICAgICA8aW1nIFxuICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xuICAgICAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5zcmMgPSBzZWNvbmRhcnlJbWdcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZU91dD17KCkgPT4ge1xuICAgICAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5zcmMgPSBwcmltYXJ5SW1nXG4gICAgICAgIH19XG4gICAgICAgIHNyYz17cHJpbWFyeUltZ31cbiAgICAgICAgcmVmPXtpbWFnZVJlZn1cbiAgICAgICAgYWx0PVwiXCIvPlxuICAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uTW91c2VPdmVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ImageToggleOnMouseOver.js\n");

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