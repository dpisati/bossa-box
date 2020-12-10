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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/Card/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\dpisa\\Desktop\\bossa-box\\frontend\\components\\Card\\index.js";

function Card(_ref) {
  var _this = this;

  var content = _ref.content;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardHeader,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        target: "_blank",
        href: content.link,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: content.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        value: content.id,
        className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.removeButton,
        onClick: function onClick(e) {
          return handleRemovePost(e);
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 229
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            transform: "translate(-568.793 -714.793)",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              "class": "a",
              d: "M80,20.005l-60,60m60,0L20,20",
              transform: "translate(549.501 695.5)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 286
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 242
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, this), "Remove"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardContent,
      children: content.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tags,
      children: content.tags.map(function (tag) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["#", tag]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjb250ZW50Iiwic3R5bGVzIiwiY2FyZCIsImNhcmRIZWFkZXIiLCJsaW5rIiwidGl0bGUiLCJpZCIsInJlbW92ZUJ1dHRvbiIsImUiLCJoYW5kbGVSZW1vdmVQb3N0IiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FyZENvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJtYXAiLCJ0YWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsSUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUN0QyxzQkFDSTtBQUFVLGFBQVMsRUFBRUMsdURBQU0sQ0FBQ0MsSUFBNUI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUQsdURBQU0sQ0FBQ0UsVUFBdkI7QUFBQSw4QkFDSTtBQUFJLGNBQU0sRUFBQyxRQUFYO0FBQW9CLFlBQUksRUFBRUgsT0FBTyxDQUFDSSxJQUFsQztBQUFBLCtCQUNJO0FBQUEsb0JBQUtKLE9BQU8sQ0FBQ0s7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBUSxhQUFLLEVBQUVMLE9BQU8sQ0FBQ00sRUFBdkI7QUFBMkIsaUJBQVMsRUFBRUwsdURBQU0sQ0FBQ00sWUFBN0M7QUFBMkQsZUFBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsaUJBQU9DLGdCQUFnQixDQUFDRCxDQUFELENBQXZCO0FBQUEsU0FBcEU7QUFBQSxnQ0FDQTtBQUFLLGVBQUssRUFBQyw0QkFBWDtBQUF3QyxlQUFLLEVBQUMsUUFBOUM7QUFBdUQsZ0JBQU0sRUFBQyxPQUE5RDtBQUFzRSxpQkFBTyxFQUFDLGtCQUE5RTtBQUFpRyxlQUFLLEVBQUU7QUFBQ0UsZ0JBQUksRUFBQyxNQUFOO0FBQWNDLGtCQUFNLEVBQUUsU0FBdEI7QUFBaUNDLDRCQUFnQixFQUFFLEVBQW5EO0FBQXVEQyx1QkFBVyxFQUFFLE1BQXBFO0FBQTRFQyxpQkFBSyxFQUFFLE1BQW5GO0FBQTJGQyxrQkFBTSxFQUFFO0FBQW5HLFdBQXhHO0FBQUEsa0NBQW9OO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXBOLGVBQWlPO0FBQUcscUJBQVMsRUFBQyw4QkFBYjtBQUFBLG1DQUE0QztBQUFNLHVCQUFNLEdBQVo7QUFBZ0IsZUFBQyxFQUFDLDhCQUFsQjtBQUFpRCx1QkFBUyxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBak87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBVUk7QUFBRyxlQUFTLEVBQUVkLHVEQUFNLENBQUNlLFdBQXJCO0FBQUEsZ0JBQW1DaEIsT0FBTyxDQUFDaUI7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKLGVBV0k7QUFBSSxlQUFTLEVBQUVoQix1REFBTSxDQUFDaUIsSUFBdEI7QUFBQSxnQkFFS2xCLE9BQU8sQ0FBQ2tCLElBQVIsQ0FBYUMsR0FBYixDQUFpQixVQUFBQyxHQUFHLEVBQUk7QUFDckIsNEJBQU87QUFBQSwwQkFBTUEsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSCxPQUZBO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIO0tBckJ1QnJCLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjQzMTFjOGYwOGIxYTRmNThjMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHsgY29udGVudCB9KSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGEgIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2NvbnRlbnQubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPntjb250ZW50LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHZhbHVlPXtjb250ZW50LmlkfSBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmVCdXR0b259IG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVSZW1vdmVQb3N0KGUpfT5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNjEuNDE0XCIgaGVpZ2h0PVwiNjEuNDJcIiB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiIHN0eWxlPXt7ZmlsbDpcIm5vbmVcIiwgc3Ryb2tlOiBcIiNGRkZGRkZcIiwgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsIHN0cm9rZVdpZHRoOiBcIjEwcHhcIiwgd2lkdGg6IFwiMTVweFwiLCBoZWlnaHQ6IFwiMTVweFwifX0+PGRlZnM+PC9kZWZzPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj48cGF0aCBjbGFzcz1cImFcIiBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50fT57Y29udGVudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy50YWdzfT5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y29udGVudC50YWdzLm1hcCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGk+I3t0YWd9PC9saT5cclxuICAgICAgICAgICAgICAgIH0pfSAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==