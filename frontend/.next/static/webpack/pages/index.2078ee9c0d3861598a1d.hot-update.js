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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal.module.css */ "./components/Modal/Modal.module.css");
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_css__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\Users\\dpisa\\Desktop\\bossa-box\\frontend\\components\\Modal\\index.js",
    _s = $RefreshSig$();



function Modal(_ref) {
  _s();

  var _this = this;

  var setAddModal = _ref.setAddModal,
      fetchPosts = _ref.fetchPosts;
  var tagInput = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var initialErrors = {};

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialErrors),
      errors = _useState[0],
      setErrors = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      link = _useState3[0],
      setLink = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      tag = _useState5[0],
      setTag = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      tags = _useState6[0],
      setTags = _useState6[1];

  function validateForm() {
    var initialErrors = {};

    if (title.length === 0) {
      initialErrors.title = "Title is required";
    }

    if (link.length === 0) {
      initialErrors.link = "Link is required";
    }

    if (description.length === 0) {
      initialErrors.description = "Description is required";
    }

    if (tags.length === 0) {
      initialErrors.tags = "Tags is required";
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
              setErrors(initialErrors);
              validateForm();

              if (!(errors.length === 0)) {
                _context.next = 8;
                break;
              }

              _context.next = 6;
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

            case 6:
              fetchPosts();
              handleCloseModal();

            case 8:
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modal,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      onKeyPress: function onKeyPress(e) {
        e.key === "Enter" && e.preventDefault();
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalBody,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalHeader,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalHeaderAdd,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
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
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("defs", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
                transform: "translate(-568.793 -714.793)",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M80,20.005l-60,60m60,0L20,20",
                  transform: "translate(549.501 695.5)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalTitle,
              children: "Add a new tool"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.closeModal,
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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("defs", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
              className: "a",
              d: "M32,20,20,32m12,0L20,20",
              transform: "translate(-19.292 -19.293)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalContent,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Tool Title"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInput,
            type: "text",
            value: title,
            onChange: function onChange(e) {
              setTitle(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this), errors.title.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: "The title is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 42
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Link"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInput,
            type: "text",
            value: link,
            onChange: function onChange(e) {
              setLink(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this), errors.link.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: "The link is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("textarea", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInputTextArea,
            type: "text",
            value: description,
            onChange: function onChange(e) {
              setDescription(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), errors.description.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: "The link is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 48
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.addTags,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
              ref: tagInput,
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInput,
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
              lineNumber: 183,
              columnNumber: 15
            }, this), errors.tags.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              children: "A tag is required"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 43
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              onClick: function onClick() {
                return handleAddTag();
              },
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.addTagField,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
                className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.addTag,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 61.414 61.42",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
                  transform: "translate(-568.793 -714.793)",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                    className: "addTag",
                    d: "M80,20.005l-60,60m60,0L20,20",
                    transform: "translate(549.501 695.5)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tagsContainer,
                children: tags && tags.map(function (tag) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tag,
                    value: tag,
                    onClick: function onClick() {
                      return handleRemoveTag(tag);
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                      children: tag
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
                      className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.removeTag,
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
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("defs", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 241,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                        className: "a",
                        d: "M32,20,20,32m12,0L20,20",
                        transform: "translate(-19.292 -19.293)"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 242,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 25
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalFooter,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cancelButton,
            onClick: handleCloseModal,
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.saveButton,
            type: "submit",
            value: "Submit",
            children: "Save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsInRhZ0lucHV0IiwidXNlUmVmIiwiaW5pdGlhbEVycm9ycyIsInVzZVN0YXRlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidGl0bGUiLCJzZXRUaXRsZSIsImxpbmsiLCJzZXRMaW5rIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInRhZyIsInNldFRhZyIsInRhZ3MiLCJzZXRUYWdzIiwidmFsaWRhdGVGb3JtIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlQWRkVGFnIiwidHJpbVRhZyIsInRyaW0iLCJoYW5kbGVGb2N1cyIsImhhbmRsZVJlbW92ZVRhZyIsInJlc3VsdCIsImZpbHRlciIsIndvcmQiLCJjdXJyZW50IiwiZm9jdXMiLCJzdHlsZXMiLCJtb2RhbCIsImtleSIsIm1vZGFsQm9keSIsIm1vZGFsSGVhZGVyIiwibW9kYWxIZWFkZXJBZGQiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwidHJhbnNmb3JtIiwid2lkdGgiLCJoZWlnaHQiLCJtb2RhbFRpdGxlIiwiY2xvc2VNb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsTGFiZWwiLCJtb2RhbElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJtb2RhbElucHV0VGV4dEFyZWEiLCJhZGRUYWdzIiwiYWRkVGFnRmllbGQiLCJhZGRUYWciLCJ0YWdzQ29udGFpbmVyIiwibWFwIiwicmVtb3ZlVGFnIiwibW9kYWxGb290ZXIiLCJjYW5jZWxCdXR0b24iLCJzYXZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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VDtBQUFBLDhDQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBYkYsZUFjRTtBQUNFLGlDQUFTLEVBQUMsR0FEWjtBQUVFLHlCQUFDLEVBQUMseUJBRko7QUFHRSxpQ0FBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGO0FBNkJELGlCQTlCRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuREYsZUFtS0U7QUFBUSxtQkFBUyxFQUFFVCx3REFBTSxDQUFDMkIsV0FBMUI7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUUzQix3REFBTSxDQUFDNEIsWUFBMUI7QUFBd0MsbUJBQU8sRUFBRXZDLGdCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQVEscUJBQVMsRUFBRVcsd0RBQU0sQ0FBQzZCLFVBQTFCO0FBQXNDLGdCQUFJLEVBQUMsUUFBM0M7QUFBb0QsaUJBQUssRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbktGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1TEQ7O0dBdlF1QnRFLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjA3OGVlOWMwZDM4NjE1OThhMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTW9kYWwubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyBzZXRBZGRNb2RhbCwgZmV0Y2hQb3N0cyB9KSB7XHJcbiAgY29uc3QgdGFnSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGxldCBpbml0aWFsRXJyb3JzID0ge307XHJcblxyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShpbml0aWFsRXJyb3JzKTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBsZXQgaW5pdGlhbEVycm9ycyA9IHt9O1xyXG4gICAgaWYodGl0bGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGluaXRpYWxFcnJvcnMudGl0bGUgPSBcIlRpdGxlIGlzIHJlcXVpcmVkXCI7XHJcbiAgICB9XHJcbiAgICBpZihsaW5rLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpbml0aWFsRXJyb3JzLmxpbmsgPSBcIkxpbmsgaXMgcmVxdWlyZWRcIjsgICAgIFxyXG4gICAgfVxyXG4gICAgaWYoZGVzY3JpcHRpb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGluaXRpYWxFcnJvcnMuZGVzY3JpcHRpb24gPSBcIkRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkXCI7XHJcbiAgICB9XHJcbiAgICBpZih0YWdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpbml0aWFsRXJyb3JzLnRhZ3MgPSBcIlRhZ3MgaXMgcmVxdWlyZWRcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEVycm9ycyhpbml0aWFsRXJyb3JzKTtcclxuXHJcbiAgICB2YWxpZGF0ZUZvcm0oKTtcclxuXHJcbiAgICBpZihlcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIGxpbmssXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIHRhZ3MsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBmZXRjaFBvc3RzKCk7XHJcbiAgICAgIGhhbmRsZUNsb3NlTW9kYWwoKTsgICBcclxuICAgIH0gIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VNb2RhbCgpIHtcclxuICAgIHNldEFkZE1vZGFsKGZhbHNlKTtcclxuICAgIHNldFRpdGxlKFwiXCIpO1xyXG4gICAgc2V0RGVzY3JpcHRpb24oXCJcIik7XHJcbiAgICBzZXRMaW5rKFwiXCIpO1xyXG4gICAgc2V0VGFnKFwiXCIpO1xyXG4gICAgc2V0VGFncyhbXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVBZGRUYWcoKSB7XHJcbiAgICBjb25zdCB0cmltVGFnID0gdGFnLnRyaW0oKTtcclxuICAgIGlmICh0cmltVGFnKSB7XHJcbiAgICAgIGhhbmRsZUZvY3VzKCk7XHJcbiAgICAgIHNldFRhZ3MoWy4uLnRhZ3MsIHRyaW1UYWddKTtcclxuICAgICAgc2V0VGFnKFwiXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhbmRsZUZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVUYWcoZSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGFncy5maWx0ZXIoKHdvcmQpID0+IHdvcmQgIT0gZSk7XHJcbiAgICBzZXRUYWdzKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcclxuICAgIHRhZ0lucHV0LmN1cnJlbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XHJcbiAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJBZGR9PlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI2MS40MTRcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjMTcwQzNBXCIsXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoNDVkZWcpXCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRpdGxlfT5BZGQgYSBuZXcgdG9vbDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTMuNDE0XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMy40MTVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5Ub29sIFRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7IGVycm9ycy50aXRsZS5sZW5ndGggPiAwICYmIDxwPlRoZSB0aXRsZSBpcyByZXF1aXJlZDwvcD59XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+TGluazwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtsaW5rfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TGluayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHsgZXJyb3JzLmxpbmsubGVuZ3RoID4gMCAmJiA8cD5UaGUgbGluayBpcyByZXF1aXJlZDwvcD59XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0VGV4dEFyZWF9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgeyBlcnJvcnMuZGVzY3JpcHRpb24ubGVuZ3RoID4gMCAmJiA8cD5UaGUgbGluayBpcyByZXF1aXJlZDwvcD59XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VGFnczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnc30+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZWY9e3RhZ0lucHV0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmIChlLnByZXZlbnREZWZhdWx0KCksIGhhbmRsZUFkZFRhZygpKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0VGFnKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgeyBlcnJvcnMudGFncy5sZW5ndGggPiAwICYmIDxwPkEgdGFnIGlzIHJlcXVpcmVkPC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVGFnKCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWdGaWVsZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ31cclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRUYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3NDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dGFncyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3MubWFwKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVUYWcodGFnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0YWd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZVRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjOGY4YTliXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRm9vdGVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYW5jZWxCdXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zYXZlQnV0dG9ufSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cclxuICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==