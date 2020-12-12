webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ConfirmationModal/index.js":
/*!***********************************************!*\
  !*** ./components/ConfirmationModal/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmationModal; });
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal/Modal.module.css */ "./components/Modal/Modal.module.css");
/* harmony import */ var _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\dpisa\\Desktop\\bossa-box\\frontend\\components\\ConfirmationModal\\index.js";

function ConfirmationModal(_ref) {
  var openConfirmationModal = _ref.openConfirmationModal,
      tool = _ref.tool;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return validateForm();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  function handleCloseModal() {
    openConfirmationModal(false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.modal,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      onKeyPress: function onKeyPress(e) {
        e.key === "Enter" && e.preventDefault();
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.modalBody,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.modalHeader,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.modalHeaderAdd,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
              className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.modalTitle,
              children: "Are you sure?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("svg", {
            className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.closeModal,
            onClick: handleCloseModal,
            xmlns: "http://www.w3.org/2000/svg",
            width: "13.414",
            height: "13.415",
            viewBox: "0 0 13.414 13.415",
            style: {
              fill: "none",
              stroke: "#8f8a9b",
              strokeMiterlimit: 10,
              strokeWidth: "2px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("defs", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
              className: "a",
              d: "M32,20,20,32m12,0L20,20",
              transform: "translate(-19.292 -19.293)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: "Are you sure to remove the tool \"".concat(tool.title, "\" from the list?")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
          className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.modalFooter,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cancelButton,
            onClick: handleCloseModal,
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.saveButton,
            type: "submit",
            value: "Submit",
            children: "Confirm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
_c = ConfirmationModal;

var _c;

$RefreshReg$(_c, "ConfirmationModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25maXJtYXRpb25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb25maXJtYXRpb25Nb2RhbCIsIm9wZW5Db25maXJtYXRpb25Nb2RhbCIsInRvb2wiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUZvcm0iLCJoYW5kbGVDbG9zZU1vZGFsIiwic3R5bGVzIiwibW9kYWwiLCJrZXkiLCJtb2RhbEJvZHkiLCJtb2RhbEhlYWRlciIsIm1vZGFsSGVhZGVyQWRkIiwibW9kYWxUaXRsZSIsImNsb3NlTW9kYWwiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwidGl0bGUiLCJtb2RhbEZvb3RlciIsImNhbmNlbEJ1dHRvbiIsInNhdmVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxpQkFBVCxPQUE0RDtBQUFBLE1BQS9CQyxxQkFBK0IsUUFBL0JBLHFCQUErQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxXQUUxREMsWUFGMEQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsK1NBRXpFLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxlQUFDLENBQUNDLGNBQUY7QUFERjtBQUFBLHFCQUVRQyxZQUFZLEVBRnBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRnlFO0FBQUE7QUFBQTs7QUFPekUsV0FBU0MsZ0JBQVQsR0FBNEI7QUFDMUJOLHlCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRU8sOERBQU0sQ0FBQ0MsS0FBdkI7QUFBQSwyQkFDRTtBQUNFLGNBQVEsRUFBRU4sWUFEWjtBQUVFLGdCQUFVLEVBQUUsb0JBQUNDLENBQUQsRUFBTztBQUNqQkEsU0FBQyxDQUFDTSxHQUFGLEtBQVUsT0FBVixJQUFxQk4sQ0FBQyxDQUFDQyxjQUFGLEVBQXJCO0FBQ0QsT0FKSDtBQUFBLDZCQU1FO0FBQUssaUJBQVMsRUFBRUcsOERBQU0sQ0FBQ0csU0FBdkI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVILDhEQUFNLENBQUNJLFdBQXZCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFSiw4REFBTSxDQUFDSyxjQUF2QjtBQUFBLG1DQUNFO0FBQUksdUJBQVMsRUFBRUwsOERBQU0sQ0FBQ00sVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFDRSxxQkFBUyxFQUFFTiw4REFBTSxDQUFDTyxVQURwQjtBQUVFLG1CQUFPLEVBQUVSLGdCQUZYO0FBR0UsaUJBQUssRUFBQyw0QkFIUjtBQUlFLGlCQUFLLEVBQUMsUUFKUjtBQUtFLGtCQUFNLEVBQUMsUUFMVDtBQU1FLG1CQUFPLEVBQUMsbUJBTlY7QUFPRSxpQkFBSyxFQUFFO0FBQ0xTLGtCQUFJLEVBQUUsTUFERDtBQUVMQyxvQkFBTSxFQUFFLFNBRkg7QUFHTEMsOEJBQWdCLEVBQUUsRUFIYjtBQUlMQyx5QkFBVyxFQUFFO0FBSlIsYUFQVDtBQUFBLG9DQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEYsZUFlRTtBQUNFLHVCQUFTLEVBQUMsR0FEWjtBQUVFLGVBQUMsRUFBQyx5QkFGSjtBQUdFLHVCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUE0Qkk7QUFBQSxnRUFBd0NqQixJQUFJLENBQUNrQixLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJKLGVBOEJFO0FBQVEsbUJBQVMsRUFBRVosOERBQU0sQ0FBQ2EsV0FBMUI7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUViLDhEQUFNLENBQUNjLFlBQTFCO0FBQXdDLG1CQUFPLEVBQUVmLGdCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQVEscUJBQVMsRUFBRUMsOERBQU0sQ0FBQ2UsVUFBMUI7QUFBc0MsZ0JBQUksRUFBQyxRQUEzQztBQUFvRCxpQkFBSyxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtERDtLQTdEdUJ2QixpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYmIzZWUwMzJkZWYyY2Y5ZmRiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vTW9kYWwvTW9kYWwubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uZmlybWF0aW9uTW9kYWwoeyBvcGVuQ29uZmlybWF0aW9uTW9kYWwsIHRvb2wgfSkge1xyXG4gICBcclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXdhaXQgdmFsaWRhdGVGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1vZGFsKCkge1xyXG4gICAgb3BlbkNvbmZpcm1hdGlvbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XHJcbiAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJBZGR9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRpdGxlfT5BcmUgeW91IHN1cmU/PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMy40MTRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzhmOGE5YlwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwPntgQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSB0aGUgdG9vbCBcIiR7dG9vbC50aXRsZX1cIiBmcm9tIHRoZSBsaXN0P2B9PC9wPlxyXG5cclxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxGb290ZXJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhbmNlbEJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNhdmVCdXR0b259IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9