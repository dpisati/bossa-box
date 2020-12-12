webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Modal/index.js":
/*!***********************************!*\
  !*** ./components/Modal/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal.module.css */ "./components/Modal/Modal.module.css");
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "C:\\Users\\dpisa\\Desktop\\bossa-box\\frontend\\components\\Modal\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Modal(_ref) {
  _s();

  var _this = this;

  var setAddModal = _ref.setAddModal,
      fetchPosts = _ref.fetchPosts;
  var tagInput = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var initialErrors = {
    title: '',
    link: '',
    description: '',
    tags: []
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialErrors),
      errors = _useState[0],
      setErrors = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      link = _useState3[0],
      setLink = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      tag = _useState5[0],
      setTag = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      tags = _useState6[0],
      setTags = _useState6[1];

  function validateForm() {
    if (errors.title.length === 0) {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, {
        title: "Title is required"
      }));
    }
  }

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              validateForm();

              if (!(errors.length === 0)) {
                _context.next = 7;
                break;
              }

              _context.next = 5;
              return fetch("http://localhost:3000/tools", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  title: title,
                  link: link,
                  description: description,
                  tags: tags
                })
              });

            case 5:
              fetchPosts();
              handleCloseModal();

            case 7:
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
    setTitle("");
    setDescription("");
    setLink("");
    setTag("");
    setTags([]);
  }

  function handleAddTag() {
    var trimTag = tag.trim();

    if (trimTag) {
      handleFocus();
      setTags([].concat(Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(tags), [trimTag]));
      setTag("");
    }

    return handleFocus();
  }

  function handleRemoveTag(e) {
    var result = tags.filter(function (word) {
      return word != e;
    });
    setTags(result);
  }

  function handleFocus() {
    tagInput.current.focus();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modal,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      onKeyPress: function onKeyPress(e) {
        e.key === "Enter" && e.preventDefault();
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalBody,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalHeader,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalHeaderAdd,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "61.414",
              height: "61.42",
              viewBox: "0 0 61.414 61.42",
              style: {
                fill: "none",
                stroke: "#170C3A",
                strokeMiterlimit: 10,
                strokeWidth: "10px",
                transform: "rotate(45deg)",
                width: "15px",
                height: "15px"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("defs", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("g", {
                transform: "translate(-568.793 -714.793)",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("path", {
                  className: "a",
                  d: "M80,20.005l-60,60m60,0L20,20",
                  transform: "translate(549.501 695.5)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalTitle,
              children: "Add a new tool"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("svg", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.closeModal,
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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("defs", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("path", {
              className: "a",
              d: "M32,20,20,32m12,0L20,20",
              transform: "translate(-19.292 -19.293)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalContent,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalLabel,
            children: "Tool Title"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalInput,
            type: "text",
            value: title,
            onChange: function onChange(e) {
              setTitle(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), errors.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            children: "The title is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 31
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalLabel,
            children: "Link"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalInput,
            type: "text",
            value: link,
            onChange: function onChange(e) {
              setLink(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalLabel,
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("textarea", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalInputTextArea,
            type: "text",
            value: description,
            onChange: function onChange(e) {
              setDescription(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalLabel,
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.addTags,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              ref: tagInput,
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalInput,
              type: "text",
              value: tag,
              onKeyPress: function onKeyPress(e) {
                e.key === "Enter" && (e.preventDefault(), handleAddTag());
              },
              onChange: function onChange(e) {
                setTag(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              onClick: function onClick() {
                return handleAddTag();
              },
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.addTagField,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("svg", {
                className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.addTag,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 61.414 61.42",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("g", {
                  transform: "translate(-568.793 -714.793)",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("path", {
                    className: "addTag",
                    d: "M80,20.005l-60,60m60,0L20,20",
                    transform: "translate(549.501 695.5)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.tagsContainer,
                children: tags && tags.map(function (tag) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.tag,
                    value: tag,
                    onClick: function onClick() {
                      return handleRemoveTag(tag);
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                      children: tag
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 214,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("svg", {
                      className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.removeTag,
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "10",
                      height: "10",
                      viewBox: "0 0 13.414 13.415",
                      style: {
                        fill: "none",
                        stroke: "#8f8a9b",
                        strokeMiterlimit: 10,
                        strokeWidth: "2px"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("defs", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("path", {
                        className: "a",
                        d: "M32,20,20,32m12,0L20,20",
                        transform: "translate(-19.292 -19.293)"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 229,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 25
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("footer", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalFooter,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.cancelButton,
            onClick: handleCloseModal,
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.saveButton,
            type: "submit",
            value: "Submit",
            children: "Save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

_s(Modal, "tOLRs1au5yfMnueDH0e9bVMfyuQ=");

_c = Modal;

var _c;

$RefreshReg$(_c, "Modal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsInRhZ0lucHV0IiwidXNlUmVmIiwiaW5pdGlhbEVycm9ycyIsInRpdGxlIiwibGluayIsImRlc2NyaXB0aW9uIiwidGFncyIsInVzZVN0YXRlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic2V0VGl0bGUiLCJzZXRMaW5rIiwic2V0RGVzY3JpcHRpb24iLCJ0YWciLCJzZXRUYWciLCJzZXRUYWdzIiwidmFsaWRhdGVGb3JtIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlQWRkVGFnIiwidHJpbVRhZyIsInRyaW0iLCJoYW5kbGVGb2N1cyIsImhhbmRsZVJlbW92ZVRhZyIsInJlc3VsdCIsImZpbHRlciIsIndvcmQiLCJjdXJyZW50IiwiZm9jdXMiLCJzdHlsZXMiLCJtb2RhbCIsImtleSIsIm1vZGFsQm9keSIsIm1vZGFsSGVhZGVyIiwibW9kYWxIZWFkZXJBZGQiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwidHJhbnNmb3JtIiwid2lkdGgiLCJoZWlnaHQiLCJtb2RhbFRpdGxlIiwiY2xvc2VNb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsTGFiZWwiLCJtb2RhbElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJtb2RhbElucHV0VGV4dEFyZWEiLCJhZGRUYWdzIiwiYWRkVGFnRmllbGQiLCJhZGRUYWciLCJ0YWdzQ29udGFpbmVyIiwibWFwIiwicmVtb3ZlVGFnIiwibW9kYWxGb290ZXIiLCJjYW5jZWxCdXR0b24iLCJzYXZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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QkFBUyxFQUFFVyx3REFBTSxDQUFDNkIsVUFBMUI7QUFBc0MsZ0JBQUksRUFBQyxRQUEzQztBQUFvRCxpQkFBSyxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1SkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdMRDs7R0ExUHVCdEUsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iODM1YjM1MzhlMzVlZWYwOGYwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Nb2RhbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7IHNldEFkZE1vZGFsLCBmZXRjaFBvc3RzIH0pIHtcclxuICBjb25zdCB0YWdJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbEVycm9ycyA9IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGxpbms6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgdGFnczogW11cclxuICB9O1xyXG5cclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoaW5pdGlhbEVycm9ycyk7XHJcblxyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgaWYoZXJyb3JzLnRpdGxlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRFcnJvcnMoey4uLmVycm9ycywgdGl0bGU6IFwiVGl0bGUgaXMgcmVxdWlyZWRcIn0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhbGlkYXRlRm9ybSgpO1xyXG5cclxuICAgIGlmKGVycm9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgbGluayxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgdGFncyxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGZldGNoUG9zdHMoKTtcclxuICAgICAgaGFuZGxlQ2xvc2VNb2RhbCgpOyAgIFxyXG4gICAgfSAgXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0QWRkTW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0VGl0bGUoXCJcIik7XHJcbiAgICBzZXREZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIHNldExpbmsoXCJcIik7XHJcbiAgICBzZXRUYWcoXCJcIik7XHJcbiAgICBzZXRUYWdzKFtdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFRhZygpIHtcclxuICAgIGNvbnN0IHRyaW1UYWcgPSB0YWcudHJpbSgpO1xyXG4gICAgaWYgKHRyaW1UYWcpIHtcclxuICAgICAgaGFuZGxlRm9jdXMoKTtcclxuICAgICAgc2V0VGFncyhbLi4udGFncywgdHJpbVRhZ10pO1xyXG4gICAgICBzZXRUYWcoXCJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZVRhZyhlKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0YWdzLmZpbHRlcigod29yZCkgPT4gd29yZCAhPSBlKTtcclxuICAgIHNldFRhZ3MocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgdGFnSW5wdXQuY3VycmVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcclxuICAgICAgICAgIGUua2V5ID09PSBcIkVudGVyXCIgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlckFkZH0+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjYxLjQxNFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MS40MlwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiMxNzBDM0FcIixcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGl0bGV9PkFkZCBhIG5ldyB0b29sPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMy40MTRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzhmOGE5YlwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb250ZW50fT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PlRvb2wgVGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHsgZXJyb3JzLnRpdGxlICYmIDxwPlRoZSB0aXRsZSBpcyByZXF1aXJlZDwvcD59XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+TGluazwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtsaW5rfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TGluayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXRUZXh0QXJlYX1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VGFnczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnc30+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZWY9e3RhZ0lucHV0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmIChlLnByZXZlbnREZWZhdWx0KCksIGhhbmRsZUFkZFRhZygpKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0VGFnKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUYWcoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ0ZpZWxkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnfVxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZFRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIHt0YWdzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RhZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlVGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zMiwyMCwyMCwzMm0xMiwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxGb290ZXJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhbmNlbEJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNhdmVCdXR0b259IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9