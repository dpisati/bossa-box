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
  var setAddModal = _ref.setAddModal,
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
              return fetch("http://localhost:3000/tools/".concat(tool.id), {
                method: 'DELETE'
              });

            case 3:
              fetchPosts();
              handleCloseModal();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  function handleCloseModal() {
    setAddModal(false);
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
              className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.confirmationModal,
              children: "Are you sure?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
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
              lineNumber: 45,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
              className: "a",
              d: "M32,20,20,32m12,0L20,20",
              transform: "translate(-19.292 -19.293)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.modalContent,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Are you sure to remove the tool \"".concat(tool.title, "\" from the list?")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
          className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.modalFooter,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cancelButton,
            onClick: handleCloseModal,
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            className: _Modal_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.saveButton,
            type: "submit",
            value: "Submit",
            children: "Confirm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25maXJtYXRpb25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb25maXJtYXRpb25Nb2RhbCIsInNldEFkZE1vZGFsIiwidG9vbCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwiaWQiLCJtZXRob2QiLCJmZXRjaFBvc3RzIiwiaGFuZGxlQ2xvc2VNb2RhbCIsInN0eWxlcyIsIm1vZGFsIiwia2V5IiwibW9kYWxCb2R5IiwibW9kYWxIZWFkZXIiLCJtb2RhbEhlYWRlckFkZCIsImNvbmZpcm1hdGlvbk1vZGFsIiwiY2xvc2VNb2RhbCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlV2lkdGgiLCJtb2RhbENvbnRlbnQiLCJ0aXRsZSIsIm1vZGFsRm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLGlCQUFULE9BQWtEO0FBQUEsTUFBckJDLFdBQXFCLFFBQXJCQSxXQUFxQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxXQUVoREMsWUFGZ0Q7QUFBQTtBQUFBOztBQUFBO0FBQUEsK1NBRS9ELGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxlQUFDLENBQUNDLGNBQUY7QUFERjtBQUFBLHFCQUVRQyxLQUFLLHVDQUFnQ0osSUFBSSxDQUFDSyxFQUFyQyxHQUEyQztBQUNwREMsc0JBQU0sRUFBRTtBQUQ0QyxlQUEzQyxDQUZiOztBQUFBO0FBS0VDLHdCQUFVO0FBQ1ZDLDhCQUFnQjs7QUFObEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGK0Q7QUFBQTtBQUFBOztBQVcvRCxXQUFTQSxnQkFBVCxHQUE0QjtBQUMxQlQsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFVSw4REFBTSxDQUFDQyxLQUF2QjtBQUFBLDJCQUNFO0FBQ0UsY0FBUSxFQUFFVCxZQURaO0FBRUUsZ0JBQVUsRUFBRSxvQkFBQ0MsQ0FBRCxFQUFPO0FBQ2pCQSxTQUFDLENBQUNTLEdBQUYsS0FBVSxPQUFWLElBQXFCVCxDQUFDLENBQUNDLGNBQUYsRUFBckI7QUFDRCxPQUpIO0FBQUEsNkJBTUU7QUFBSyxpQkFBUyxFQUFFTSw4REFBTSxDQUFDRyxTQUF2QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksV0FBdkI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVKLDhEQUFNLENBQUNLLGNBQXZCO0FBQUEsbUNBQ0U7QUFBSSx1QkFBUyxFQUFFTCw4REFBTSxDQUFDTSxpQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFDRSxxQkFBUyxFQUFFTiw4REFBTSxDQUFDTyxVQURwQjtBQUVFLG1CQUFPLEVBQUVSLGdCQUZYO0FBR0UsaUJBQUssRUFBQyw0QkFIUjtBQUlFLGlCQUFLLEVBQUMsUUFKUjtBQUtFLGtCQUFNLEVBQUMsUUFMVDtBQU1FLG1CQUFPLEVBQUMsbUJBTlY7QUFPRSxpQkFBSyxFQUFFO0FBQ0xTLGtCQUFJLEVBQUUsTUFERDtBQUVMQyxvQkFBTSxFQUFFLFNBRkg7QUFHTEMsOEJBQWdCLEVBQUUsRUFIYjtBQUlMQyx5QkFBVyxFQUFFO0FBSlIsYUFQVDtBQUFBLG9DQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEYsZUFlRTtBQUNFLHVCQUFTLEVBQUMsR0FEWjtBQUVFLGVBQUMsRUFBQyx5QkFGSjtBQUdFLHVCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUEyQkU7QUFBSyxtQkFBUyxFQUFFWCw4REFBTSxDQUFDWSxZQUF2QjtBQUFBLGlDQUVFO0FBQUEsa0VBQXdDckIsSUFBSSxDQUFDc0IsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQkYsZUFrQ0U7QUFBUSxtQkFBUyxFQUFFYiw4REFBTSxDQUFDYyxXQUExQjtBQUFBLGtDQUNFO0FBQVEscUJBQVMsRUFBRWQsOERBQU0sQ0FBQ2UsWUFBMUI7QUFBd0MsbUJBQU8sRUFBRWhCLGdCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQVEscUJBQVMsRUFBRUMsOERBQU0sQ0FBQ2dCLFVBQTFCO0FBQXNDLGdCQUFJLEVBQUMsUUFBM0M7QUFBb0QsaUJBQUssRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzREQ7S0FyRXVCM0IsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGNhYjBjZGZlMWYxNjFkNGU4ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL01vZGFsL01vZGFsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm1hdGlvbk1vZGFsKHsgc2V0QWRkTW9kYWwsIHRvb2wgfSkge1xyXG4gICBcclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scy8ke3Rvb2wuaWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgfSk7XHJcbiAgICBmZXRjaFBvc3RzKCk7XHJcbiAgICBoYW5kbGVDbG9zZU1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0QWRkTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcclxuICAgICAgICAgIGUua2V5ID09PSBcIkVudGVyXCIgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlckFkZH0+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNvbmZpcm1hdGlvbk1vZGFsfT5BcmUgeW91IHN1cmU/PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMy40MTRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzhmOGE5YlwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb250ZW50fT5cclxuXHJcbiAgICAgICAgICAgIDxwPntgQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSB0aGUgdG9vbCBcIiR7dG9vbC50aXRsZX1cIiBmcm9tIHRoZSBsaXN0P2B9PC9wPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRm9vdGVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYW5jZWxCdXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zYXZlQnV0dG9ufSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cclxuICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==