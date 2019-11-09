webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contentful */ "../../../../node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_product_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/product-list */ "./components/product-list.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/products */ "./data/products.json");
var _data_products__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/products */ "./data/products.json", 1);
var _jsxFileName = "/Users/konstantingatilin/Documents/Workspace/Nextjs/appGit/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_7___default()(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig,
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;



var Index = function Index(props) {
  return __jsx("div", {
    style: {
      padding: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Hello!"), __jsx(_components_product_list__WEBPACK_IMPORTED_MODULE_6__["default"], {
    products: _data_products__WEBPACK_IMPORTED_MODULE_8__,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};
/*Index.getInitialProps = async function() {
	var client = createClient({
	  space: publicRuntimeConfig.CONTENTFUL_SPACE,
	  accessToken: publicRuntimeConfig.CONTENTFUL_KEY
	});

	var products = await client.getEntries({
		content_type: 'product',
		order: 'fields.price'
	});

	return {
		products: products
	}
}*/


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.869abfb9181b887d36cc.hot-update.js.map