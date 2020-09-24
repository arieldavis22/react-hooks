webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/arieldavis/Development/code/react-hooks/src/SpeakerDetail.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar SpeakerDetail = function SpeakerDetail(_ref) {\n  var speakerRec = _ref.speakerRec,\n      onHeartFavoriteHandler = _ref.onHeartFavoriteHandler;\n  var id = speakerRec.id,\n      firstName = speakerRec.firstName,\n      lastName = speakerRec.lastName,\n      bio = speakerRec.bio,\n      favorite = speakerRec.favorite; //console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);\n\n  return __jsx(\"div\", {\n    className: \"card col-4 cardmin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"card-img-top\",\n    primaryImg: \"/static/speakers/bw/Speaker-\".concat(id, \".jpg\"),\n    secondaryImg: \"/static/speakers/Speaker-\".concat(id, \".jpg\"),\n    alt: \"{firstName} {lastName}\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"card-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"h4\", {\n    className: \"card-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: favorite ? 'heartredbutton' : 'heartdarkbutton',\n    onClick: function onClick(e) {\n      onHeartFavoriteHandler(e, speakerRec);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, firstName, \" \", lastName)), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, bio)));\n};\n\n_c = SpeakerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpeakerDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEZXRhaWwuanM/OTY1MiJdLCJuYW1lcyI6WyJTcGVha2VyRGV0YWlsIiwic3BlYWtlclJlYyIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BR2hCO0FBQUEsTUFGSkMsVUFFSSxRQUZKQSxVQUVJO0FBQUEsTUFESkMsc0JBQ0ksUUFESkEsc0JBQ0k7QUFBQSxNQUNHQyxFQURILEdBQ3lDRixVQUR6QyxDQUNHRSxFQURIO0FBQUEsTUFDTUMsU0FETixHQUN5Q0gsVUFEekMsQ0FDTUcsU0FETjtBQUFBLE1BQ2dCQyxRQURoQixHQUN5Q0osVUFEekMsQ0FDZ0JJLFFBRGhCO0FBQUEsTUFDeUJDLEdBRHpCLEdBQ3lDTCxVQUR6QyxDQUN5QkssR0FEekI7QUFBQSxNQUM2QkMsUUFEN0IsR0FDeUNOLFVBRHpDLENBQzZCTSxRQUQ3QixFQUVKOztBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSxhQUFTLEVBQUMsY0FEWjtBQUVFLGNBQVUsd0NBQWlDSixFQUFqQyxTQUZaO0FBR0UsZ0JBQVkscUNBQThCQSxFQUE5QixTQUhkO0FBSUUsT0FBRyxFQUFDLHdCQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFFSSxRQUFRLEdBQUcsZ0JBQUgsR0FBc0IsaUJBRDNDO0FBRUUsV0FBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU87QUFDZE4sNEJBQXNCLENBQUNNLENBQUQsRUFBSVAsVUFBSixDQUF0QjtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRyxTQURILE9BQ2VDLFFBRGYsQ0FQRixDQURGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQyxHQUFQLENBYkYsQ0FQRixDQURGO0FBeUJELENBL0JEOztLQUFNTixhO0FBaUNTQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9TcGVha2VyRGV0YWlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSAnLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcblxuY29uc3QgU3BlYWtlckRldGFpbCA9ICh7XG4gIHNwZWFrZXJSZWMsXG4gIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXIsXG59KSA9PiB7XG4gIGNvbnN0IHtpZCxmaXJzdE5hbWUsbGFzdE5hbWUsYmlvLGZhdm9yaXRlfSA9IHNwZWFrZXJSZWM7XG4gIC8vY29uc29sZS5sb2coYFNwZWFrZXJEZXRhaWw6JHtpZH0gJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9ICR7ZmF2b3JpdGV9YCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC00IGNhcmRtaW5cIj5cbiAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG4gICAgICAgIHByaW1hcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9TcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIGFsdD1cIntmaXJzdE5hbWV9IHtsYXN0TmFtZX1cIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmYXZvcml0ZSA/ICdoZWFydHJlZGJ1dHRvbicgOiAnaGVhcnRkYXJrYnV0dG9uJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXIoZSwgc3BlYWtlclJlYyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lfSB7bGFzdE5hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2g0PlxuXG4gICAgICAgIDxzcGFuPntiaW99PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SpeakerDetail.js\n");

/***/ })

})