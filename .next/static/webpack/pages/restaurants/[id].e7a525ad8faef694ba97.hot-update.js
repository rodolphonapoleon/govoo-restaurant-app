webpackHotUpdate_N_E("pages/restaurants/[id]",{

/***/ "./pages/restaurants/[id].js":
/*!***********************************!*\
  !*** ./pages/restaurants/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Restaurant; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_dishes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dishes */ \"./components/dishes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cart */ \"./components/cart.js\");\nvar _jsxFileName = \"/Users/rodolphonapoleon/Downloads/govoo/pages/restaurants/[id].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Restaurant() {\n  _s();\n\n  var _this = this;\n\n  var API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:1337\";\n  console.log(\"URL: \".concat(API_URL)); // const [query, setQuery] = useState(\"\");\n\n  var link = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"HttpLink\"]({\n    uri: \"\".concat(API_URL, \"/graphql\")\n  });\n  var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"InMemoryCache\"]();\n  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"ApolloClient\"]({\n    link: link,\n    cache: cache\n  });\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var restaurantID = router.query.id;\n\n  var renderDishes = function renderDishes(restaurantID) {\n    return __jsx(_components_dishes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      restId: restaurantID,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }\n    }, \" \");\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n    client: client,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, \"Restaurant \", restaurantID), renderDishes(restaurantID), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, \" \")));\n}\n\n_s(Restaurant, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Restaurant;\n\nvar _c;\n\n$RefreshReg$(_c, \"Restaurant\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdGF1cmFudHMvLmpzPzVlMTAiXSwibmFtZXMiOlsiUmVzdGF1cmFudCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImNvbnNvbGUiLCJsb2ciLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZXN0YXVyYW50SUQiLCJxdWVyeSIsImlkIiwicmVuZGVyRGlzaGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUVuQyxNQUFNQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQ7QUFDRUMsU0FBTyxDQUFDQyxHQUFSLGdCQUFvQkwsT0FBcEIsR0FIaUMsQ0FJakM7O0FBQ0EsTUFBTU0sSUFBSSxHQUFHLElBQUlDLHVEQUFKLENBQWE7QUFBRUMsT0FBRyxZQUFLUixPQUFMO0FBQUwsR0FBYixDQUFiO0FBQ0EsTUFBTVMsS0FBSyxHQUFHLElBQUlDLDREQUFKLEVBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFBQ04sUUFBSSxFQUFKQSxJQUFEO0FBQU1HLFNBQUssRUFBTEE7QUFBTixHQUFqQixDQUFmO0FBRUEsTUFBTUksTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFlBQVksR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEVBQWxDOztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILFlBQUQsRUFBa0I7QUFDbkMsV0FBUSxNQUFDLDBEQUFEO0FBQVEsWUFBTSxFQUFFQSxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUFDRCxHQUZIOztBQUlBLFNBQVEsbUVBQ1IsTUFBQyw2REFBRDtBQUFnQixVQUFNLEVBQUVKLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFnQkksWUFBaEIsQ0FEQSxFQUVDRyxZQUFZLENBQUNILFlBQUQsQ0FGYixFQUdBLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUhBLENBRFEsQ0FBUjtBQU9IOztHQXRCdUJoQixVO1VBU0xlLHFEOzs7S0FUS2YsVSIsImZpbGUiOiIuL3BhZ2VzL3Jlc3RhdXJhbnRzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzaGVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Rpc2hlc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge0Fwb2xsb1Byb3ZpZGVyLEFwb2xsb0NsaWVudCxIdHRwTGluaywgSW5NZW1vcnlDYWNoZX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN0YXVyYW50KCkge1xuXG4gIGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG4gICAgY29uc29sZS5sb2coYFVSTDogJHtBUElfVVJMfWApXG4gICAgLy8gY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBsaW5rID0gbmV3IEh0dHBMaW5rKHsgdXJpOiBgJHtBUElfVVJMfS9ncmFwaHFsYH0pXG4gICAgY29uc3QgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSgpXG4gICAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7bGluayxjYWNoZX0pO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgcmVzdGF1cmFudElEID0gcm91dGVyLnF1ZXJ5LmlkO1xuICAgIGNvbnN0IHJlbmRlckRpc2hlcyA9IChyZXN0YXVyYW50SUQpID0+IHtcbiAgICAgICAgcmV0dXJuICg8RGlzaGVzIHJlc3RJZD17cmVzdGF1cmFudElEfT4gPC9EaXNoZXM+KVxuICAgICAgfTtcblxuICAgIHJldHVybiAoPD4gXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICA8aDE+UmVzdGF1cmFudCB7cmVzdGF1cmFudElEfTwvaDE+XG4gICAge3JlbmRlckRpc2hlcyhyZXN0YXVyYW50SUQpfVxuICAgIDxDYXJ0PiA8L0NhcnQ+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICA8Lz4pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/restaurants/[id].js\n");

/***/ })

})