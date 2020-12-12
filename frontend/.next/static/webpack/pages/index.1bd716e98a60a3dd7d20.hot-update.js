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
      tool = _ref.tool,
      fetchPosts = _ref.fetchPosts;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25maXJtYXRpb25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb25maXJtYXRpb25Nb2RhbCIsInNldEFkZE1vZGFsIiwidG9vbCIsImZldGNoUG9zdHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsImlkIiwibWV0aG9kIiwiaGFuZGxlQ2xvc2VNb2RhbCIsInN0eWxlcyIsIm1vZGFsIiwia2V5IiwibW9kYWxCb2R5IiwibW9kYWxIZWFkZXIiLCJtb2RhbEhlYWRlckFkZCIsImNvbmZpcm1hdGlvbk1vZGFsIiwiY2xvc2VNb2RhbCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlV2lkdGgiLCJtb2RhbENvbnRlbnQiLCJ0aXRsZSIsIm1vZGFsRm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLGlCQUFULE9BQThEO0FBQUEsTUFBakNDLFdBQWlDLFFBQWpDQSxXQUFpQztBQUFBLE1BQXBCQyxJQUFvQixRQUFwQkEsSUFBb0I7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7O0FBQUEsV0FFNURDLFlBRjREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtTQUUzRSxpQkFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsZUFBQyxDQUFDQyxjQUFGO0FBREY7QUFBQSxxQkFFUUMsS0FBSyx1Q0FBZ0NMLElBQUksQ0FBQ00sRUFBckMsR0FBMkM7QUFDcERDLHNCQUFNLEVBQUU7QUFENEMsZUFBM0MsQ0FGYjs7QUFBQTtBQUtFTix3QkFBVTtBQUNWTyw4QkFBZ0I7O0FBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRjJFO0FBQUE7QUFBQTs7QUFXM0UsV0FBU0EsZ0JBQVQsR0FBNEI7QUFDMUJULGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRVUsOERBQU0sQ0FBQ0MsS0FBdkI7QUFBQSwyQkFDRTtBQUNFLGNBQVEsRUFBRVIsWUFEWjtBQUVFLGdCQUFVLEVBQUUsb0JBQUNDLENBQUQsRUFBTztBQUNqQkEsU0FBQyxDQUFDUSxHQUFGLEtBQVUsT0FBVixJQUFxQlIsQ0FBQyxDQUFDQyxjQUFGLEVBQXJCO0FBQ0QsT0FKSDtBQUFBLDZCQU1FO0FBQUssaUJBQVMsRUFBRUssOERBQU0sQ0FBQ0csU0FBdkI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVILDhEQUFNLENBQUNJLFdBQXZCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFSiw4REFBTSxDQUFDSyxjQUF2QjtBQUFBLG1DQUNFO0FBQUksdUJBQVMsRUFBRUwsOERBQU0sQ0FBQ00saUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQ0UscUJBQVMsRUFBRU4sOERBQU0sQ0FBQ08sVUFEcEI7QUFFRSxtQkFBTyxFQUFFUixnQkFGWDtBQUdFLGlCQUFLLEVBQUMsNEJBSFI7QUFJRSxpQkFBSyxFQUFDLFFBSlI7QUFLRSxrQkFBTSxFQUFDLFFBTFQ7QUFNRSxtQkFBTyxFQUFDLG1CQU5WO0FBT0UsaUJBQUssRUFBRTtBQUNMUyxrQkFBSSxFQUFFLE1BREQ7QUFFTEMsb0JBQU0sRUFBRSxTQUZIO0FBR0xDLDhCQUFnQixFQUFFLEVBSGI7QUFJTEMseUJBQVcsRUFBRTtBQUpSLGFBUFQ7QUFBQSxvQ0FjRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRGLGVBZUU7QUFDRSx1QkFBUyxFQUFDLEdBRFo7QUFFRSxlQUFDLEVBQUMseUJBRko7QUFHRSx1QkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBMkJFO0FBQUssbUJBQVMsRUFBRVgsOERBQU0sQ0FBQ1ksWUFBdkI7QUFBQSxpQ0FFRTtBQUFBLGtFQUF3Q3JCLElBQUksQ0FBQ3NCLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JGLGVBa0NFO0FBQVEsbUJBQVMsRUFBRWIsOERBQU0sQ0FBQ2MsV0FBMUI7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUVkLDhEQUFNLENBQUNlLFlBQTFCO0FBQXdDLG1CQUFPLEVBQUVoQixnQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFRLHFCQUFTLEVBQUVDLDhEQUFNLENBQUNnQixVQUExQjtBQUFzQyxnQkFBSSxFQUFDLFFBQTNDO0FBQW9ELGlCQUFLLEVBQUMsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0REO0tBckV1QjNCLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFiZDcxNmU5OGE2MGEzZGQ3ZDIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9Nb2RhbC9Nb2RhbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25maXJtYXRpb25Nb2RhbCh7IHNldEFkZE1vZGFsLCB0b29sLCBmZXRjaFBvc3RzIH0pIHtcclxuICAgXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHMvJHt0b29sLmlkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIH0pO1xyXG4gICAgZmV0Y2hQb3N0cygpO1xyXG4gICAgaGFuZGxlQ2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VNb2RhbCgpIHtcclxuICAgIHNldEFkZE1vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XHJcbiAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJBZGR9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5jb25maXJtYXRpb25Nb2RhbH0+QXJlIHlvdSBzdXJlPzwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTMuNDE0XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMy40MTVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0+XHJcblxyXG4gICAgICAgICAgICA8cD57YEFyZSB5b3Ugc3VyZSB0byByZW1vdmUgdGhlIHRvb2wgXCIke3Rvb2wudGl0bGV9XCIgZnJvbSB0aGUgbGlzdD9gfTwvcD5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEZvb3Rlcn0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2F2ZUJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=