webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card/index.js":
/*!**********************************!*\
  !*** ./components/Card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.module.css */ "./components/Card/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\dpisa\\Desktop\\bossa-box\\frontend\\components\\Card\\index.js";

function Card(_ref) {
  var _this = this;

  var content = _ref.content;

  function handleRemovePost(_x) {
    return _handleRemovePost.apply(this, arguments);
  }

  function _handleRemovePost() {
    _handleRemovePost = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var remove;
      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("http://localhost:3000/tools".concat(e), {
                method: 'DELETE'
              });

            case 2:
              remove = _context.sent;
              console.log(remove);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleRemovePost.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("fieldset", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.card,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardHeader,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        target: "_blank",
        href: content.link,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          children: content.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        value: content.id,
        className: _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.removeButton,
        onClick: function onClick(e) {
          return handleRemovePost(e);
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "61.414",
          height: "61.42",
          viewBox: "0 0 61.414 61.42",
          style: {
            fill: "none",
            stroke: "#FFFFFF",
            strokeMiterlimit: 10,
            strokeWidth: "10px",
            width: "15px",
            height: "15px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("defs", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 229
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
            transform: "translate(-568.793 -714.793)",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
              "class": "a",
              d: "M80,20.005l-60,60m60,0L20,20",
              transform: "translate(549.501 695.5)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 286
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 242
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, this), "Remove"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardContent,
      children: content.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tags,
      children: content.tags.map(function (tag) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: ["#", tag]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
_c = Card;

var _c;

$RefreshReg$(_c, "Card");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjb250ZW50IiwiaGFuZGxlUmVtb3ZlUG9zdCIsImUiLCJmZXRjaCIsIm1ldGhvZCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjYXJkIiwiY2FyZEhlYWRlciIsImxpbmsiLCJ0aXRsZSIsImlkIiwicmVtb3ZlQnV0dG9uIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FyZENvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJtYXAiLCJ0YWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLFdBRXZCQyxnQkFGdUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsbVRBRXRDLGlCQUFnQ0MsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDeUJDLEtBQUssc0NBQStCRCxDQUEvQixHQUFvQztBQUMxREUsc0JBQU0sRUFBRTtBQURrRCxlQUFwQyxDQUQ5Qjs7QUFBQTtBQUNVQyxvQkFEVjtBQU9JQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7O0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGc0M7QUFBQTtBQUFBOztBQWF0QyxzQkFDSTtBQUFVLGFBQVMsRUFBRUcsdURBQU0sQ0FBQ0MsSUFBNUI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUQsdURBQU0sQ0FBQ0UsVUFBdkI7QUFBQSw4QkFDSTtBQUFJLGNBQU0sRUFBQyxRQUFYO0FBQW9CLFlBQUksRUFBRVYsT0FBTyxDQUFDVyxJQUFsQztBQUFBLCtCQUNJO0FBQUEsb0JBQUtYLE9BQU8sQ0FBQ1k7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBUSxhQUFLLEVBQUVaLE9BQU8sQ0FBQ2EsRUFBdkI7QUFBMkIsaUJBQVMsRUFBRUwsdURBQU0sQ0FBQ00sWUFBN0M7QUFBMkQsZUFBTyxFQUFFLGlCQUFDWixDQUFEO0FBQUEsaUJBQU9ELGdCQUFnQixDQUFDQyxDQUFELENBQXZCO0FBQUEsU0FBcEU7QUFBQSxnQ0FDQTtBQUFLLGVBQUssRUFBQyw0QkFBWDtBQUF3QyxlQUFLLEVBQUMsUUFBOUM7QUFBdUQsZ0JBQU0sRUFBQyxPQUE5RDtBQUFzRSxpQkFBTyxFQUFDLGtCQUE5RTtBQUFpRyxlQUFLLEVBQUU7QUFBQ2EsZ0JBQUksRUFBQyxNQUFOO0FBQWNDLGtCQUFNLEVBQUUsU0FBdEI7QUFBaUNDLDRCQUFnQixFQUFFLEVBQW5EO0FBQXVEQyx1QkFBVyxFQUFFLE1BQXBFO0FBQTRFQyxpQkFBSyxFQUFFLE1BQW5GO0FBQTJGQyxrQkFBTSxFQUFFO0FBQW5HLFdBQXhHO0FBQUEsa0NBQW9OO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXBOLGVBQWlPO0FBQUcscUJBQVMsRUFBQyw4QkFBYjtBQUFBLG1DQUE0QztBQUFNLHVCQUFNLEdBQVo7QUFBZ0IsZUFBQyxFQUFDLDhCQUFsQjtBQUFpRCx1QkFBUyxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBak87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBVUk7QUFBRyxlQUFTLEVBQUVaLHVEQUFNLENBQUNhLFdBQXJCO0FBQUEsZ0JBQW1DckIsT0FBTyxDQUFDc0I7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKLGVBV0k7QUFBSSxlQUFTLEVBQUVkLHVEQUFNLENBQUNlLElBQXRCO0FBQUEsZ0JBRUt2QixPQUFPLENBQUN1QixJQUFSLENBQWFDLEdBQWIsQ0FBaUIsVUFBQUMsR0FBRyxFQUFJO0FBQ3JCLDRCQUFPO0FBQUEsMEJBQU1BLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0gsT0FGQTtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDtLQWpDdUIxQixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg0YzIzOGZmNjAwMTI0Y2RkMDg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IGNvbnRlbnQgfSkge1xyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVSZW1vdmVQb3N0KGUpIHtcclxuICAgICAgICBjb25zdCByZW1vdmUgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzJHtlfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlbW92ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8YSAgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17Y29udGVudC5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2NvbnRlbnQudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdmFsdWU9e2NvbnRlbnQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZUJ1dHRvbn0gb25DbGljaz17KGUpID0+IGhhbmRsZVJlbW92ZVBvc3QoZSl9PlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI2MS40MTRcIiBoZWlnaHQ9XCI2MS40MlwiIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCIgc3R5bGU9e3tmaWxsOlwibm9uZVwiLCBzdHJva2U6IFwiI0ZGRkZGRlwiLCBzdHJva2VNaXRlcmxpbWl0OiAxMCwgc3Ryb2tlV2lkdGg6IFwiMTBweFwiLCB3aWR0aDogXCIxNXB4XCIsIGhlaWdodDogXCIxNXB4XCJ9fT48ZGVmcz48L2RlZnM+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPjxwYXRoIGNsYXNzPVwiYVwiIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCIvPjwvZz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnR9Pntjb250ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnRhZ3N9PlxyXG5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50LnRhZ3MubWFwKHRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaT4je3RhZ308L2xpPlxyXG4gICAgICAgICAgICAgICAgfSl9ICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9