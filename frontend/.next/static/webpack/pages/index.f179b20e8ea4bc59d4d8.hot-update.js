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

  var content = _ref.content,
      onDelete = _ref.onDelete,
      setToolSelected = _ref.setToolSelected;

  function handleRemovePost(_x) {
    return _handleRemovePost.apply(this, arguments);
  }

  function _handleRemovePost() {
    _handleRemovePost = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setToolSelected(e.target.value); // const remove = await fetch(`http://localhost:3000/tools/${e.target.value}`, {
              //     method: 'DELETE',
              // });
              // onDelete();

            case 1:
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
          lineNumber: 17,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        value: content.title,
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
            lineNumber: 20,
            columnNumber: 229
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
            transform: "translate(-568.793 -714.793)",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
              "class": "a",
              d: "M80,20.005l-60,60m60,0L20,20",
              transform: "translate(549.501 695.5)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 286
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 242
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, this), "Remove"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardContent,
      children: content.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tags,
      children: content.tags.map(function (tag) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: ["#", tag]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjb250ZW50Iiwib25EZWxldGUiLCJzZXRUb29sU2VsZWN0ZWQiLCJoYW5kbGVSZW1vdmVQb3N0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic3R5bGVzIiwiY2FyZCIsImNhcmRIZWFkZXIiLCJsaW5rIiwidGl0bGUiLCJyZW1vdmVCdXR0b24iLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJjYXJkQ29udGVudCIsImRlc2NyaXB0aW9uIiwidGFncyIsIm1hcCIsInRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsT0FBc0Q7QUFBQTs7QUFBQSxNQUF0Q0MsT0FBc0MsUUFBdENBLE9BQXNDO0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUEsV0FFcERDLGdCQUZvRDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtVEFFbkUsaUJBQWdDQyxDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ01GLDZCQUFlLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWYsQ0FETixDQUVNO0FBQ0E7QUFDQTtBQUNBOztBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRm1FO0FBQUE7QUFBQTs7QUFVakUsc0JBQ0k7QUFBVSxhQUFTLEVBQUVDLHVEQUFNLENBQUNDLElBQTVCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVELHVEQUFNLENBQUNFLFVBQXZCO0FBQUEsOEJBQ0k7QUFBSSxjQUFNLEVBQUMsUUFBWDtBQUFvQixZQUFJLEVBQUVULE9BQU8sQ0FBQ1UsSUFBbEM7QUFBQSwrQkFDSTtBQUFBLG9CQUFLVixPQUFPLENBQUNXO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQVEsYUFBSyxFQUFFWCxPQUFPLENBQUNXLEtBQXZCO0FBQThCLGlCQUFTLEVBQUVKLHVEQUFNLENBQUNLLFlBQWhEO0FBQThELGVBQU8sRUFBRSxpQkFBQ1IsQ0FBRDtBQUFBLGlCQUFPRCxnQkFBZ0IsQ0FBQ0MsQ0FBRCxDQUF2QjtBQUFBLFNBQXZFO0FBQUEsZ0NBQ0E7QUFBSyxlQUFLLEVBQUMsNEJBQVg7QUFBd0MsZUFBSyxFQUFDLFFBQTlDO0FBQXVELGdCQUFNLEVBQUMsT0FBOUQ7QUFBc0UsaUJBQU8sRUFBQyxrQkFBOUU7QUFBaUcsZUFBSyxFQUFFO0FBQUNTLGdCQUFJLEVBQUMsTUFBTjtBQUFjQyxrQkFBTSxFQUFFLFNBQXRCO0FBQWlDQyw0QkFBZ0IsRUFBRSxFQUFuRDtBQUF1REMsdUJBQVcsRUFBRSxNQUFwRTtBQUE0RUMsaUJBQUssRUFBRSxNQUFuRjtBQUEyRkMsa0JBQU0sRUFBRTtBQUFuRyxXQUF4RztBQUFBLGtDQUFvTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFwTixlQUFpTztBQUFHLHFCQUFTLEVBQUMsOEJBQWI7QUFBQSxtQ0FBNEM7QUFBTSx1QkFBTSxHQUFaO0FBQWdCLGVBQUMsRUFBQyw4QkFBbEI7QUFBaUQsdUJBQVMsRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWpPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVVJO0FBQUcsZUFBUyxFQUFFWCx1REFBTSxDQUFDWSxXQUFyQjtBQUFBLGdCQUFtQ25CLE9BQU8sQ0FBQ29CO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSixlQVdJO0FBQUksZUFBUyxFQUFFYix1REFBTSxDQUFDYyxJQUF0QjtBQUFBLGdCQUVLckIsT0FBTyxDQUFDcUIsSUFBUixDQUFhQyxHQUFiLENBQWlCLFVBQUFDLEdBQUcsRUFBSTtBQUNyQiw0QkFBTztBQUFBLDBCQUFNQSxHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNILE9BRkE7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQkg7S0E5QnVCeEIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMTc5YjIwZThlYTRiYzU5ZDRkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoeyBjb250ZW50LCBvbkRlbGV0ZSwgc2V0VG9vbFNlbGVjdGVkIH0pIHtcclxuICAgICAgICAgIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZVBvc3QoZSkge1xyXG4gICAgICAgIHNldFRvb2xTZWxlY3RlZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAvLyBjb25zdCByZW1vdmUgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzLyR7ZS50YXJnZXQudmFsdWV9YCwge1xyXG4gICAgICAgIC8vICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIG9uRGVsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxhICB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtjb250ZW50Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57Y29udGVudC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2YWx1ZT17Y29udGVudC50aXRsZX0gY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlQnV0dG9ufSBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlUmVtb3ZlUG9zdChlKX0+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjYxLjQxNFwiIGhlaWdodD1cIjYxLjQyXCIgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIiBzdHlsZT17e2ZpbGw6XCJub25lXCIsIHN0cm9rZTogXCIjRkZGRkZGXCIsIHN0cm9rZU1pdGVybGltaXQ6IDEwLCBzdHJva2VXaWR0aDogXCIxMHB4XCIsIHdpZHRoOiBcIjE1cHhcIiwgaGVpZ2h0OiBcIjE1cHhcIn19PjxkZWZzPjwvZGVmcz48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+PHBhdGggY2xhc3M9XCJhXCIgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudH0+e2NvbnRlbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XHJcblxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnQudGFncy5tYXAodGFnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpPiN7dGFnfTwvbGk+XHJcbiAgICAgICAgICAgICAgICB9KX0gICAgICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=