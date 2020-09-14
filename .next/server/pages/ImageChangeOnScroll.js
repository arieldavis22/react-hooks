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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ImageChangeOnScroll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\nvar _jsxFileName = \"/Users/arieldavis/Development/code/react-hooks/pages/ImageChangeOnScroll.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst ImageChangeOnScroll = () => {\n  const {\n    0: currentSpeakerId,\n    1: setCurrentSpeakerId\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: mouseEventCnt,\n    1: setMouseEventCnt\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    window.document.title = `SpeakerId: ${currentSpeakerId}`;\n    console.log(`useEffect: setting title to ${currentSpeakerId}`);\n  }, [currentSpeakerId]);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, \"mouseEventCnt: $\", mouseEventCnt), [1, 2].map(speakerId => {\n    return __jsx(\"div\", {\n      key: speakerId,\n      onMouseOver: () => {\n        setCurrentSpeakerId(speakerId);\n        setMouseEventCnt(mouseEventCnt + 1);\n        console.log(`onMouseOver: ${speakerId}`);\n      },\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 21\n      }\n    }, __jsx(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      primaryImg: `/static/bw/speaker${speakerId}.jpg`,\n      secondaryImg: `/static/speaker${speakerId}.jpg`,\n      alt: \"\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 25\n      }\n    }));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzP2Q4NjkiXSwibmFtZXMiOlsiSW1hZ2VDaGFuZ2VPblNjcm9sbCIsImN1cnJlbnRTcGVha2VySWQiLCJzZXRDdXJyZW50U3BlYWtlcklkIiwidXNlU3RhdGUiLCJtb3VzZUV2ZW50Q250Iiwic2V0TW91c2VFdmVudENudCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImRvY3VtZW50IiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3BlYWtlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLG1CQUFtQixHQUFHLE1BQU07QUFFOUIsUUFBTTtBQUFBLE9BQUNDLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDQyxzREFBUSxDQUFDLENBQUQsQ0FBeEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ0Ysc0RBQVEsQ0FBQyxDQUFELENBQWxEO0FBRUFHLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLEtBQWhCLEdBQXlCLGNBQWFSLGdCQUFpQixFQUF2RDtBQUNBUyxXQUFPLENBQUNDLEdBQVIsQ0FBYSwrQkFBOEJWLGdCQUFpQixFQUE1RDtBQUVILEdBSlEsRUFJTixDQUFDQSxnQkFBRCxDQUpNLENBQVQ7QUFNQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUF1QkcsYUFBdkIsQ0FESixFQUVLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBT1EsR0FBUCxDQUFXQyxTQUFTLElBQUk7QUFDckIsV0FDSTtBQUFLLFNBQUcsRUFBRUEsU0FBVjtBQUNBLGlCQUFXLEVBQUUsTUFBTTtBQUNmWCwyQkFBbUIsQ0FBQ1csU0FBRCxDQUFuQjtBQUNBUix3QkFBZ0IsQ0FBQ0QsYUFBYSxHQUFHLENBQWpCLENBQWhCO0FBQ0FNLGVBQU8sQ0FBQ0MsR0FBUixDQUFhLGdCQUFlRSxTQUFVLEVBQXRDO0FBRUgsT0FORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUksTUFBQyxnRUFBRDtBQUNJLGdCQUFVLEVBQUcscUJBQW9CQSxTQUFVLE1BRC9DO0FBRUksa0JBQVksRUFBRyxrQkFBaUJBLFNBQVUsTUFGOUM7QUFHSSxTQUFHLEVBQUMsRUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkosQ0FESjtBQWdCSCxHQWpCQSxDQUZMLENBREo7QUF1QkgsQ0FsQ0Q7O0FBb0NlYixrRkFBZiIsImZpbGUiOiIuL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gJy4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsJ1xuXG5jb25zdCBJbWFnZUNoYW5nZU9uU2Nyb2xsID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2N1cnJlbnRTcGVha2VySWQsIHNldEN1cnJlbnRTcGVha2VySWRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbbW91c2VFdmVudENudCwgc2V0TW91c2VFdmVudENudF0gPSB1c2VTdGF0ZSgwKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9IGBTcGVha2VySWQ6ICR7Y3VycmVudFNwZWFrZXJJZH1gXG4gICAgICAgIGNvbnNvbGUubG9nKGB1c2VFZmZlY3Q6IHNldHRpbmcgdGl0bGUgdG8gJHtjdXJyZW50U3BlYWtlcklkfWApO1xuICAgICAgICBcbiAgICB9LCBbY3VycmVudFNwZWFrZXJJZF0pXG5cbiAgICByZXR1cm4gKCAgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3Bhbj5tb3VzZUV2ZW50Q250OiAke21vdXNlRXZlbnRDbnR9PC9zcGFuPlxuICAgICAgICAgICAge1sxLCAyXS5tYXAoc3BlYWtlcklkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3BlYWtlcklkfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFNwZWFrZXJJZChzcGVha2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNb3VzZUV2ZW50Q250KG1vdXNlRXZlbnRDbnQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG9uTW91c2VPdmVyOiAke3NwZWFrZXJJZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9idy9zcGVha2VyJHtzcGVha2VySWR9LmpwZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2VyJHtzcGVha2VySWR9LmpwZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uU2Nyb2xsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n");

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/arieldavis/Development/code/react-hooks/src/ImageToggleOnScroll.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst ImageToggleOnScroll = ({\n  primaryImg,\n  secondaryImg\n}) => {\n  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n\n  const isInView = () => {\n    const rect = imageRef.current.getBoundingClientRect();\n    return rect.top >= 0 && rect.bottom <= window.innerHeight;\n  };\n\n  const {\n    0: inView,\n    1: setInView\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setInView(isInView());\n    window.addEventListener(\"scroll\", scrollHandler);\n    return () => {\n      window.removeEventListener(\"scroll\", scrollHandler);\n    };\n  }, []);\n\n  const scrollHandler = () => {\n    setInView(isInView());\n  };\n\n  return __jsx(\"img\", {\n    src: inView ? secondaryImg : primaryImg,\n    ref: imageRef,\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcz85NjYyIl0sIm5hbWVzIjpbIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImluVmlldyIsInNldEluVmlldyIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxtQkFBbUIsR0FBRyxDQUFDO0FBQUVDLFlBQUY7QUFBY0M7QUFBZCxDQUFELEtBQWtDO0FBRTFELFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLElBQUQsQ0FBMUM7O0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDbkIsVUFBTUMsSUFBSSxHQUFHTixRQUFRLENBQUNPLE9BQVQsQ0FBaUJDLHFCQUFqQixFQUFiO0FBQ0EsV0FBT0YsSUFBSSxDQUFDRyxHQUFMLElBQVksQ0FBWixJQUFpQkgsSUFBSSxDQUFDSSxNQUFMLElBQWVDLE1BQU0sQ0FBQ0MsV0FBOUM7QUFDSCxHQUhEOztBQUtBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlYsc0RBQVEsQ0FBQyxLQUFELENBQXBDO0FBRUFXLHlEQUFTLENBQUMsTUFBTTtBQUNaRCxhQUFTLENBQUNULFFBQVEsRUFBVCxDQUFUO0FBQ0FNLFVBQU0sQ0FBQ0ssZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDO0FBQ0EsV0FBTyxNQUFNO0FBQ1ROLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGFBQXJDO0FBQ0gsS0FGRDtBQUdILEdBTlEsRUFNTixFQU5NLENBQVQ7O0FBUUEsUUFBTUEsYUFBYSxHQUFHLE1BQU07QUFDeEJILGFBQVMsQ0FBQ1QsUUFBUSxFQUFULENBQVQ7QUFDSCxHQUZEOztBQUlBLFNBQ0k7QUFDQSxPQUFHLEVBQUdRLE1BQU0sR0FBR2QsWUFBSCxHQUFrQkQsVUFEOUI7QUFFQSxPQUFHLEVBQUVFLFFBRkw7QUFHQSxPQUFHLEVBQUMsRUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREo7QUFNSCxDQS9CRDs7QUFpQ2VILGtGQUFmIiwiZmlsZSI6Ii4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcblxuICAgIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcilcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKVxuICAgIH1cblxuICAgIHJldHVybiAoICBcbiAgICAgICAgPGltZyBcbiAgICAgICAgc3JjPXsgaW5WaWV3ID8gc2Vjb25kYXJ5SW1nIDogcHJpbWFyeUltZ31cbiAgICAgICAgcmVmPXtpbWFnZVJlZn1cbiAgICAgICAgYWx0PVwiXCIvPlxuICAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n");

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