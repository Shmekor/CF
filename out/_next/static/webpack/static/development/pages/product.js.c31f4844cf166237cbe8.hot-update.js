webpackHotUpdate("static/development/pages/product.js",{

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contentful */ "../../../../node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/product */ "./components/product.js");
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/products */ "./data/products.json");
var _data_products__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/products */ "./data/products.json", 1);


var _jsxFileName = "/Users/konstantingatilin/Documents/Workspace/Nextjs/appGit/pages/product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_4___default()(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig,
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;



var ProductPage = function ProductPage(props) {
  return __jsx(_components_product__WEBPACK_IMPORTED_MODULE_6__["default"], {
    product: props.product,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  });
};

_components_product__WEBPACK_IMPORTED_MODULE_6__["default"].getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, client, product;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            client = Object(contentful__WEBPACK_IMPORTED_MODULE_5__["createClient"])({
              space: publicRuntimeConfig.CONTENTFUL_SPACE,
              accessToken: publicRuntimeConfig.CONTENTFUL_KEY
            });
            _context.next = 4;
            return client.getEntry(id);

          case 4:
            product = _context.sent;
            return _context.abrupt("return", {
              product: product
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_components_product__WEBPACK_IMPORTED_MODULE_6__["default"]);

/***/ })

})
//# sourceMappingURL=product.js.c31f4844cf166237cbe8.hot-update.js.map