module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/restaurants/[restaurant].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/context.js":
/*!*******************************!*\
  !*** ./components/context.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* /context/AppContext.js */\n // create auth context with default value\n// set backup default for isAuthenticated if none is provided in Provider\n\nconst AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({\n  isAuthenticated: true,\n  cart: {\n    items: [],\n    total: 0\n  },\n  addItem: () => {},\n  removeItem: () => {},\n  user: false,\n  setUser: () => {}\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQuanM/MjQzOSJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwiY2FydCIsIml0ZW1zIiwidG90YWwiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsInVzZXIiLCJzZXRVc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBO0FBRUE7O0FBQ0EsTUFBTUEsVUFBVSxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUNmO0FBQUNDLGlCQUFlLEVBQUMsSUFBakI7QUFDSUMsTUFBSSxFQUFFO0FBQUNDLFNBQUssRUFBQyxFQUFQO0FBQ05DLFNBQUssRUFBQztBQURBLEdBRFY7QUFHSUMsU0FBTyxFQUFDLE1BQUksQ0FBRSxDQUhsQjtBQUlJQyxZQUFVLEVBQUMsTUFBSSxDQUFFLENBSnJCO0FBS0lDLE1BQUksRUFBQyxLQUxUO0FBTUlDLFNBQU8sRUFBQyxNQUFJLENBQUU7QUFObEIsQ0FEZSxDQUFuQjtBQVNlVix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9jb250ZXh0L0FwcENvbnRleHQuanMgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gY3JlYXRlIGF1dGggY29udGV4dCB3aXRoIGRlZmF1bHQgdmFsdWVcblxuLy8gc2V0IGJhY2t1cCBkZWZhdWx0IGZvciBpc0F1dGhlbnRpY2F0ZWQgaWYgbm9uZSBpcyBwcm92aWRlZCBpbiBQcm92aWRlclxuY29uc3QgQXBwQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXG4gICAge2lzQXV0aGVudGljYXRlZDp0cnVlLCBcbiAgICAgICAgY2FydDoge2l0ZW1zOltdLCBcbiAgICAgICAgdG90YWw6MH0sXG4gICAgICAgIGFkZEl0ZW06KCk9Pnt9LFxuICAgICAgICByZW1vdmVJdGVtOigpPT57fSxcbiAgICAgICAgdXNlcjpmYWxzZSwgXG4gICAgICAgIHNldFVzZXI6KCk9Pnt9XG4gICAgfSk7XG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/context.js\n");

/***/ }),

/***/ "./components/dishes.js":
/*!******************************!*\
  !*** ./components/dishes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ \"./components/context.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/rodolphonapoleon/Downloads/govoo/components/dishes.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Dishes({\n  restId\n}) {\n  const {\n    0: restaurantID,\n    1: setRestaurantID\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const {\n    addItem\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  const GET_RESTAURANT_DISHES = _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"gql\"]`\n  query($id: ID!) {\n    restaurant(id: $id) {\n      id\n      name\n      dishes {\n        id\n        name\n        description\n        price\n        image {\n          url\n        }\n      }\n    }\n  }\n`;\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(GET_RESTAURANT_DISHES, {\n    variables: {\n      id: restId\n    }\n  });\n  if (loading) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  if (error) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }, \"ERROR here\");\n  if (!data) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, \"Not found\");\n  let restaurant = data.restaurant;\n\n  if (restId > 0) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, restaurant.dishes.map(res => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n      xs: \"6\",\n      sm: \"4\",\n      style: {\n        padding: 0\n      },\n      key: res.id,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n      style: {\n        margin: \"0 10px\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 15\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"CardImg\"], {\n      top: true,\n      style: {\n        height: 150,\n        width: 150\n      },\n      src: `http://localhost:1337${res.image.url}`,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }\n    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"CardBody\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"CardTitle\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 19\n      }\n    }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"CardText\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 19\n      }\n    }, res.description)), __jsx(\"div\", {\n      className: \"card-footer\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n      color: \"info\",\n      outline: true,\n      color: \"primary\",\n      onClick: () => addItem(res),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 19\n      }\n    }, \"+ Add To Cart\"))))));\n  } else {\n    return __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 18\n      }\n    }, \" No Dishes\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dishes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rpc2hlcy5qcz80MTQzIl0sIm5hbWVzIjpbIkRpc2hlcyIsInJlc3RJZCIsInJlc3RhdXJhbnRJRCIsInNldFJlc3RhdXJhbnRJRCIsInVzZVN0YXRlIiwiYWRkSXRlbSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiR0VUX1JFU1RBVVJBTlRfRElTSEVTIiwiZ3FsIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWQiLCJyZXN0YXVyYW50IiwiZGlzaGVzIiwibWFwIiwicmVzIiwicGFkZGluZyIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwiaW1hZ2UiLCJ1cmwiLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBQ0M7QUFBRCxDQUFoQixFQUF5QjtBQUN2QixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLEVBQWhEO0FBQ0EsUUFBTTtBQUFDQztBQUFELE1BQVlDLHdEQUFVLENBQUNDLGdEQUFELENBQTVCO0FBRUYsUUFBTUMscUJBQXFCLEdBQUdDLGtEQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBaEJBO0FBa0JFLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNO0FBQUVDLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkM7QUFBbEIsTUFBMkJDLCtEQUFRLENBQUNQLHFCQUFELEVBQXdCO0FBQy9EUSxhQUFTLEVBQUU7QUFBRUMsUUFBRSxFQUFFaEI7QUFBTjtBQURvRCxHQUF4QixDQUF6QztBQUlBLE1BQUlXLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ1gsTUFBSSxDQUFDQyxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBRVgsTUFBSUksVUFBVSxHQUFHSixJQUFJLENBQUNJLFVBQXRCOztBQUVBLE1BQUlqQixNQUFNLEdBQUcsQ0FBYixFQUFlO0FBRWIsV0FDRSxtRUFDS2lCLFVBQVUsQ0FBQ0MsTUFBWCxDQUFrQkMsR0FBbEIsQ0FBdUJDLEdBQUQsSUFDckIsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQVksUUFBRSxFQUFDLEdBQWY7QUFBbUIsV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQTFCO0FBQTBDLFNBQUcsRUFBRUQsR0FBRyxDQUFDSixFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywrQ0FBRDtBQUFNLFdBQUssRUFBRTtBQUFFTSxjQUFNLEVBQUU7QUFBVixPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGtEQUFEO0FBQ0UsU0FBRyxFQUFFLElBRFA7QUFFRSxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFLEdBQVY7QUFBZUMsYUFBSyxFQUFDO0FBQXJCLE9BRlQ7QUFHRSxTQUFHLEVBQUcsd0JBQXVCSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsR0FBSSxFQUg3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFNRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBWU4sR0FBRyxDQUFDTyxJQUFoQixDQURGLEVBRUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVdQLEdBQUcsQ0FBQ1EsV0FBZixDQUZGLENBTkYsRUFVRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGlEQUFEO0FBQVEsV0FBSyxFQUFDLE1BQWQ7QUFDRSxhQUFPLE1BRFQ7QUFFRSxXQUFLLEVBQUMsU0FGUjtBQUdFLGFBQU8sRUFBSSxNQUFLeEIsT0FBTyxDQUFDZ0IsR0FBRCxDQUh6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBVkYsQ0FERixDQURELENBREwsQ0FERjtBQTRCTSxHQTlCUixNQStCVTtBQUNGLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNEO0FBQ0o7O0FBQ2NyQixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZGlzaGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge2dxbCx1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIFJvdyxcbiAgQ29sfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuZnVuY3Rpb24gRGlzaGVzKHtyZXN0SWR9KXtcbiAgY29uc3QgW3Jlc3RhdXJhbnRJRCwgc2V0UmVzdGF1cmFudElEXSA9IHVzZVN0YXRlKClcbiAgY29uc3Qge2FkZEl0ZW19ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuXG5jb25zdCBHRVRfUkVTVEFVUkFOVF9ESVNIRVMgPSBncWxgXG4gIHF1ZXJ5KCRpZDogSUQhKSB7XG4gICAgcmVzdGF1cmFudChpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGlzaGVzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBwcmljZVxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRfRElTSEVTLCB7XG4gICAgdmFyaWFibGVzOiB7IGlkOiByZXN0SWR9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUiBoZXJlPC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBsZXQgcmVzdGF1cmFudCA9IGRhdGEucmVzdGF1cmFudDtcblxuICBpZiAocmVzdElkID4gMCl7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgICB7cmVzdGF1cmFudC5kaXNoZXMubWFwKChyZXMpID0+IChcbiAgICAgICAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fSBrZXk9e3Jlcy5pZH0+XG4gICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAxNTAsIHdpZHRoOjE1MCB9fVxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtyZXMuaW1hZ2UudXJsfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPntyZXMubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKT0+IGFkZEl0ZW0ocmVzKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgKyBBZGQgVG8gQ2FydFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHJldHVybiA8aDE+IE5vIERpc2hlczwvaDE+XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGRlZmF1bHQgRGlzaGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dishes.js\n");

/***/ }),

/***/ "./pages/restaurants/[restaurant].js":
/*!*******************************************!*\
  !*** ./pages/restaurants/[restaurant].js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Restaurant; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_dishes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dishes */ \"./components/dishes.js\");\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/context */ \"./components/context.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/rodolphonapoleon/Downloads/govoo/pages/restaurants/[restaurant].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Restaurant() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n\n  const renderDishes = restaurantID => {\n    return __jsx(_components_dishes__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      restId: restaurantID,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }\n    }, \" \");\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderDishes(router.query.restaurant));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXN0YXVyYW50cy9bcmVzdGF1cmFudF0uanM/Mjg1ZCJdLCJuYW1lcyI6WyJSZXN0YXVyYW50Iiwicm91dGVyIiwidXNlUm91dGVyIiwicmVuZGVyRGlzaGVzIiwicmVzdGF1cmFudElEIiwicXVlcnkiLCJyZXN0YXVyYW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUNqQyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLFFBQU1DLFlBQVksR0FBSUMsWUFBRCxJQUFrQjtBQUNuQyxXQUFRLE1BQUMsMERBQUQ7QUFBUSxZQUFNLEVBQUVBLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQUNELEdBRkg7O0FBSUEsU0FBUSxtRUFDUEQsWUFBWSxDQUFDRixNQUFNLENBQUNJLEtBQVAsQ0FBYUMsVUFBZCxDQURMLENBQVI7QUFHSCIsImZpbGUiOiIuL3BhZ2VzL3Jlc3RhdXJhbnRzL1tyZXN0YXVyYW50XS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7Z3FsLHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgRGlzaGVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Rpc2hlc1wiXG5pbXBvcnQge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250ZXh0XCJcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2x9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdGF1cmFudCgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCByZW5kZXJEaXNoZXMgPSAocmVzdGF1cmFudElEKSA9PiB7XG4gICAgICAgIHJldHVybiAoPERpc2hlcyByZXN0SWQ9e3Jlc3RhdXJhbnRJRH0+IDwvRGlzaGVzPilcbiAgICAgIH07XG5cbiAgICByZXR1cm4gKDw+IFxuICAgIHtyZW5kZXJEaXNoZXMocm91dGVyLnF1ZXJ5LnJlc3RhdXJhbnQpfVxuICAgIDwvPilcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/restaurants/[restaurant].js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCI/MjQ5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reactstrap\n");

/***/ })

/******/ });