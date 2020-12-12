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
      initialErrors.tags = "A Tag is required";
    }

    setErrors(initialErrors);
    return initialErrors;
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
              setErrors({});
              validateForm();
              console.log(errors);

              if (errors) {
                _context.next = 9;
                break;
              }

              _context.next = 7;
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

            case 7:
              fetchPosts();
              handleCloseModal();

            case 9:
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
                lineNumber: 116,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
                transform: "translate(-568.793 -714.793)",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M80,20.005l-60,60m60,0L20,20",
                  transform: "translate(549.501 695.5)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalTitle,
              children: "Add a new tool"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
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
              lineNumber: 141,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
              className: "a",
              d: "M32,20,20,32m12,0L20,20",
              transform: "translate(-19.292 -19.293)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalContent,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Tool Title"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
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
            lineNumber: 151,
            columnNumber: 13
          }, this), errors.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: errors.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 31
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Link"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
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
            lineNumber: 163,
            columnNumber: 13
          }, this), errors.link && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: errors.link
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 30
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
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
            lineNumber: 175,
            columnNumber: 13
          }, this), errors.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
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
              lineNumber: 188,
              columnNumber: 15
            }, this), errors.tags && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              children: errors.tags
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 32
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
                    lineNumber: 213,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
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
                      lineNumber: 232,
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
                        lineNumber: 246,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                        className: "a",
                        d: "M32,20,20,32m12,0L20,20",
                        transform: "translate(-19.292 -19.293)"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 247,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 25
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalFooter,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cancelButton,
            onClick: handleCloseModal,
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.saveButton,
            type: "submit",
            value: "Submit",
            children: "Save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsInRhZ0lucHV0IiwidXNlUmVmIiwiaW5pdGlhbEVycm9ycyIsInVzZVN0YXRlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidGl0bGUiLCJzZXRUaXRsZSIsImxpbmsiLCJzZXRMaW5rIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInRhZyIsInNldFRhZyIsInRhZ3MiLCJzZXRUYWdzIiwidmFsaWRhdGVGb3JtIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZUFkZFRhZyIsInRyaW1UYWciLCJ0cmltIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVSZW1vdmVUYWciLCJyZXN1bHQiLCJmaWx0ZXIiLCJ3b3JkIiwiY3VycmVudCIsImZvY3VzIiwic3R5bGVzIiwibW9kYWwiLCJrZXkiLCJtb2RhbEJvZHkiLCJtb2RhbEhlYWRlciIsIm1vZGFsSGVhZGVyQWRkIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VXaWR0aCIsInRyYW5zZm9ybSIsIndpZHRoIiwiaGVpZ2h0IiwibW9kYWxUaXRsZSIsImNsb3NlTW9kYWwiLCJtb2RhbENvbnRlbnQiLCJtb2RhbExhYmVsIiwibW9kYWxJbnB1dCIsInRhcmdldCIsInZhbHVlIiwibW9kYWxJbnB1dFRleHRBcmVhIiwiYWRkVGFncyIsImFkZFRhZ0ZpZWxkIiwiYWRkVGFnIiwidGFnc0NvbnRhaW5lciIsIm1hcCIsInJlbW92ZVRhZyIsIm1vZGFsRm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVlLFNBQVNBLEtBQVQsT0FBNEM7QUFBQTs7QUFBQTs7QUFBQSxNQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ3pELE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCO0FBRUEsTUFBSUMsYUFBYSxHQUFHLEVBQXBCOztBQUh5RCxrQkFLN0JDLHNEQUFRLENBQUNELGFBQUQsQ0FMcUI7QUFBQSxNQUtsREUsTUFMa0Q7QUFBQSxNQUsxQ0MsU0FMMEM7O0FBQUEsbUJBTy9CRixzREFBUSxDQUFDLEVBQUQsQ0FQdUI7QUFBQSxNQU9sREcsS0FQa0Q7QUFBQSxNQU8zQ0MsUUFQMkM7O0FBQUEsbUJBUWpDSixzREFBUSxDQUFDLEVBQUQsQ0FSeUI7QUFBQSxNQVFsREssSUFSa0Q7QUFBQSxNQVE1Q0MsT0FSNEM7O0FBQUEsbUJBU25CTixzREFBUSxDQUFDLEVBQUQsQ0FUVztBQUFBLE1BU2xETyxXQVRrRDtBQUFBLE1BU3JDQyxjQVRxQzs7QUFBQSxtQkFVbkNSLHNEQUFRLENBQUMsRUFBRCxDQVYyQjtBQUFBLE1BVWxEUyxHQVZrRDtBQUFBLE1BVTdDQyxNQVY2Qzs7QUFBQSxtQkFXakNWLHNEQUFRLENBQUMsRUFBRCxDQVh5QjtBQUFBLE1BV2xEVyxJQVhrRDtBQUFBLE1BVzVDQyxPQVg0Qzs7QUFjekQsV0FBU0MsWUFBVCxHQUF3QjtBQUN0QixRQUFJZCxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsUUFBR0ksS0FBSyxDQUFDVyxNQUFOLEtBQWlCLENBQXBCLEVBQXVCO0FBQ3JCZixtQkFBYSxDQUFDSSxLQUFkLEdBQXNCLG1CQUF0QjtBQUNEOztBQUNELFFBQUdFLElBQUksQ0FBQ1MsTUFBTCxLQUFnQixDQUFuQixFQUFzQjtBQUNwQmYsbUJBQWEsQ0FBQ00sSUFBZCxHQUFxQixrQkFBckI7QUFDRDs7QUFDRCxRQUFHRSxXQUFXLENBQUNPLE1BQVosS0FBdUIsQ0FBMUIsRUFBNkI7QUFDM0JmLG1CQUFhLENBQUNRLFdBQWQsR0FBNEIseUJBQTVCO0FBQ0Q7O0FBQ0QsUUFBR0ksSUFBSSxDQUFDRyxNQUFMLEtBQWdCLENBQW5CLEVBQXNCO0FBQ3BCZixtQkFBYSxDQUFDWSxJQUFkLEdBQXFCLG1CQUFyQjtBQUNEOztBQUNEVCxhQUFTLENBQUNILGFBQUQsQ0FBVDtBQUNBLFdBQU9BLGFBQVA7QUFDRDs7QUEvQndELFdBaUMxQ2dCLFlBakMwQztBQUFBO0FBQUE7O0FBQUE7QUFBQSwrU0FpQ3pELGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxlQUFDLENBQUNDLGNBQUY7QUFDQWYsdUJBQVMsQ0FBQyxFQUFELENBQVQ7QUFFQVcsMEJBQVk7QUFFWksscUJBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsTUFBWjs7QUFORixrQkFRTUEsTUFSTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQVNVbUIsS0FBSyxDQUFDLDZCQUFELEVBQWdDO0FBQ3pDQyxzQkFBTSxFQUFFLE1BRGlDO0FBRXpDQyx1QkFBTyxFQUFFO0FBQUUsa0NBQWdCO0FBQWxCLGlCQUZnQztBQUd6Q0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJ0Qix1QkFBSyxFQUFMQSxLQURtQjtBQUVuQkUsc0JBQUksRUFBSkEsSUFGbUI7QUFHbkJFLDZCQUFXLEVBQVhBLFdBSG1CO0FBSW5CSSxzQkFBSSxFQUFKQTtBQUptQixpQkFBZjtBQUhtQyxlQUFoQyxDQVRmOztBQUFBO0FBbUJJZix3QkFBVTtBQUNWOEIsOEJBQWdCOztBQXBCcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FqQ3lEO0FBQUE7QUFBQTs7QUF5RHpELFdBQVNBLGdCQUFULEdBQTRCO0FBQzFCL0IsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBUyxZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FJLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0FGLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDQUksVUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNBRSxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0Q7O0FBRUQsV0FBU2UsWUFBVCxHQUF3QjtBQUN0QixRQUFNQyxPQUFPLEdBQUduQixHQUFHLENBQUNvQixJQUFKLEVBQWhCOztBQUNBLFFBQUlELE9BQUosRUFBYTtBQUNYRSxpQkFBVztBQUNYbEIsYUFBTyw2SkFBS0QsSUFBTCxJQUFXaUIsT0FBWCxHQUFQO0FBQ0FsQixZQUFNLENBQUMsRUFBRCxDQUFOO0FBQ0Q7O0FBQ0QsV0FBT29CLFdBQVcsRUFBbEI7QUFDRDs7QUFFRCxXQUFTQyxlQUFULENBQXlCZixDQUF6QixFQUE0QjtBQUMxQixRQUFNZ0IsTUFBTSxHQUFHckIsSUFBSSxDQUFDc0IsTUFBTCxDQUFZLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLElBQUlsQixDQUFsQjtBQUFBLEtBQVosQ0FBZjtBQUNBSixXQUFPLENBQUNvQixNQUFELENBQVA7QUFDRDs7QUFFRCxXQUFTRixXQUFULEdBQXVCO0FBQ3JCakMsWUFBUSxDQUFDc0MsT0FBVCxDQUFpQkMsS0FBakI7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsS0FBdkI7QUFBQSwyQkFDRTtBQUNFLGNBQVEsRUFBRXZCLFlBRFo7QUFFRSxnQkFBVSxFQUFFLG9CQUFDQyxDQUFELEVBQU87QUFDakJBLFNBQUMsQ0FBQ3VCLEdBQUYsS0FBVSxPQUFWLElBQXFCdkIsQ0FBQyxDQUFDQyxjQUFGLEVBQXJCO0FBQ0QsT0FKSDtBQUFBLDZCQU1FO0FBQUssaUJBQVMsRUFBRW9CLHdEQUFNLENBQUNHLFNBQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFSCx3REFBTSxDQUFDSSxXQUF2QjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRUosd0RBQU0sQ0FBQ0ssY0FBdkI7QUFBQSxvQ0FDRTtBQUNFLG1CQUFLLEVBQUMsNEJBRFI7QUFFRSxtQkFBSyxFQUFDLFFBRlI7QUFHRSxvQkFBTSxFQUFDLE9BSFQ7QUFJRSxxQkFBTyxFQUFDLGtCQUpWO0FBS0UsbUJBQUssRUFBRTtBQUNMQyxvQkFBSSxFQUFFLE1BREQ7QUFFTEMsc0JBQU0sRUFBRSxTQUZIO0FBR0xDLGdDQUFnQixFQUFFLEVBSGI7QUFJTEMsMkJBQVcsRUFBRSxNQUpSO0FBS0xDLHlCQUFTLEVBQUUsZUFMTjtBQU1MQyxxQkFBSyxFQUFFLE1BTkY7QUFPTEMsc0JBQU0sRUFBRTtBQVBILGVBTFQ7QUFBQSxzQ0FlRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWZGLGVBZ0JFO0FBQUcseUJBQVMsRUFBQyw4QkFBYjtBQUFBLHVDQUNFO0FBQ0UsMkJBQVMsRUFBQyxHQURaO0FBRUUsbUJBQUMsRUFBQyw4QkFGSjtBQUdFLDJCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBeUJFO0FBQUksdUJBQVMsRUFBRVosd0RBQU0sQ0FBQ2EsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQTRCRTtBQUNFLHFCQUFTLEVBQUViLHdEQUFNLENBQUNjLFVBRHBCO0FBRUUsbUJBQU8sRUFBRXpCLGdCQUZYO0FBR0UsaUJBQUssRUFBQyw0QkFIUjtBQUlFLGlCQUFLLEVBQUMsUUFKUjtBQUtFLGtCQUFNLEVBQUMsUUFMVDtBQU1FLG1CQUFPLEVBQUMsbUJBTlY7QUFPRSxpQkFBSyxFQUFFO0FBQ0xpQixrQkFBSSxFQUFFLE1BREQ7QUFFTEMsb0JBQU0sRUFBRSxTQUZIO0FBR0xDLDhCQUFnQixFQUFFLEVBSGI7QUFJTEMseUJBQVcsRUFBRTtBQUpSLGFBUFQ7QUFBQSxvQ0FjRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRGLGVBZUU7QUFDRSx1QkFBUyxFQUFDLEdBRFo7QUFFRSxlQUFDLEVBQUMseUJBRko7QUFHRSx1QkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQW1ERTtBQUFLLG1CQUFTLEVBQUVULHdEQUFNLENBQUNlLFlBQXZCO0FBQUEsa0NBQ0U7QUFBTyxxQkFBUyxFQUFFZix3REFBTSxDQUFDZ0IsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUNFLHFCQUFTLEVBQUVoQix3REFBTSxDQUFDaUIsVUFEcEI7QUFFRSxnQkFBSSxFQUFDLE1BRlA7QUFHRSxpQkFBSyxFQUFFbkQsS0FIVDtBQUlFLG9CQUFRLEVBQUUsa0JBQUNhLENBQUQsRUFBTztBQUNmWixzQkFBUSxDQUFDWSxDQUFDLENBQUN1QyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNEO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixFQVdJdkQsTUFBTSxDQUFDRSxLQUFQLGlCQUFnQjtBQUFBLHNCQUFJRixNQUFNLENBQUNFO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYcEIsZUFhRTtBQUFPLHFCQUFTLEVBQUVrQyx3REFBTSxDQUFDZ0IsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkYsZUFjRTtBQUNFLHFCQUFTLEVBQUVoQix3REFBTSxDQUFDaUIsVUFEcEI7QUFFRSxnQkFBSSxFQUFDLE1BRlA7QUFHRSxpQkFBSyxFQUFFakQsSUFIVDtBQUlFLG9CQUFRLEVBQUUsa0JBQUNXLENBQUQsRUFBTztBQUNmVixxQkFBTyxDQUFDVSxDQUFDLENBQUN1QyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNEO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRixFQXVCSXZELE1BQU0sQ0FBQ0ksSUFBUCxpQkFBZTtBQUFBLHNCQUFJSixNQUFNLENBQUNJO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2Qm5CLGVBeUJFO0FBQU8scUJBQVMsRUFBRWdDLHdEQUFNLENBQUNnQixVQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6QkYsZUEwQkU7QUFDRSxxQkFBUyxFQUFFaEIsd0RBQU0sQ0FBQ29CLGtCQURwQjtBQUVFLGdCQUFJLEVBQUMsTUFGUDtBQUdFLGlCQUFLLEVBQUVsRCxXQUhUO0FBSUUsb0JBQVEsRUFBRSxrQkFBQ1MsQ0FBRCxFQUFPO0FBQ2ZSLDRCQUFjLENBQUNRLENBQUMsQ0FBQ3VDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQ0Q7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTFCRixFQW1DSXZELE1BQU0sQ0FBQ00sV0FBUCxpQkFBc0I7QUFBQSxzQkFBSU4sTUFBTSxDQUFDTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkMxQixlQXFDRTtBQUFPLHFCQUFTLEVBQUU4Qix3REFBTSxDQUFDZ0IsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckNGLGVBc0NFO0FBQUsscUJBQVMsRUFBRWhCLHdEQUFNLENBQUNxQixPQUF2QjtBQUFBLG9DQUNFO0FBQ0UsaUJBQUcsRUFBRTdELFFBRFA7QUFFRSx1QkFBUyxFQUFFd0Msd0RBQU0sQ0FBQ2lCLFVBRnBCO0FBR0Usa0JBQUksRUFBQyxNQUhQO0FBSUUsbUJBQUssRUFBRTdDLEdBSlQ7QUFLRSx3QkFBVSxFQUFFLG9CQUFDTyxDQUFELEVBQU87QUFDakJBLGlCQUFDLENBQUN1QixHQUFGLEtBQVUsT0FBVixLQUFzQnZCLENBQUMsQ0FBQ0MsY0FBRixJQUFvQlUsWUFBWSxFQUF0RDtBQUNELGVBUEg7QUFRRSxzQkFBUSxFQUFFLGtCQUFDWCxDQUFELEVBQU87QUFDZk4sc0JBQU0sQ0FBQ00sQ0FBQyxDQUFDdUMsTUFBRixDQUFTQyxLQUFWLENBQU47QUFDRDtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFjSXZELE1BQU0sQ0FBQ1UsSUFBUCxpQkFBZTtBQUFBLHdCQUFJVixNQUFNLENBQUNVO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFkbkIsZUFnQkU7QUFDRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1nQixZQUFZLEVBQWxCO0FBQUEsZUFEWDtBQUVFLHVCQUFTLEVBQUVVLHdEQUFNLENBQUNzQixXQUZwQjtBQUFBLHFDQUlFO0FBQ0UseUJBQVMsRUFBRXRCLHdEQUFNLENBQUN1QixNQURwQjtBQUVFLHFCQUFLLEVBQUMsNEJBRlI7QUFHRSx1QkFBTyxFQUFDLGtCQUhWO0FBQUEsdUNBS0U7QUFBRywyQkFBUyxFQUFDLDhCQUFiO0FBQUEseUNBQ0U7QUFDRSw2QkFBUyxFQUFDLFFBRFo7QUFFRSxxQkFBQyxFQUFDLDhCQUZKO0FBR0UsNkJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaEJGLGVBbUNFO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFFdkIsd0RBQU0sQ0FBQ3dCLGFBQXZCO0FBQUEsMEJBQ0dsRCxJQUFJLElBQ0hBLElBQUksQ0FBQ21ELEdBQUwsQ0FBUyxVQUFDckQsR0FBRCxFQUFTO0FBQ2hCLHNDQUNFO0FBQ0UsNkJBQVMsRUFBRTRCLHdEQUFNLENBQUM1QixHQURwQjtBQUVFLHlCQUFLLEVBQUVBLEdBRlQ7QUFHRSwyQkFBTyxFQUFFO0FBQUEsNkJBQU1zQixlQUFlLENBQUN0QixHQUFELENBQXJCO0FBQUEscUJBSFg7QUFBQSw0Q0FLRTtBQUFBLGdDQUFJQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTEYsZUFNRTtBQUNFLCtCQUFTLEVBQUU0Qix3REFBTSxDQUFDMEIsU0FEcEI7QUFFRSwyQkFBSyxFQUFDLDRCQUZSO0FBR0UsMkJBQUssRUFBQyxJQUhSO0FBSUUsNEJBQU0sRUFBQyxJQUpUO0FBS0UsNkJBQU8sRUFBQyxtQkFMVjtBQU1FLDJCQUFLLEVBQUU7QUFDTHBCLDRCQUFJLEVBQUUsTUFERDtBQUVMQyw4QkFBTSxFQUFFLFNBRkg7QUFHTEMsd0NBQWdCLEVBQUUsRUFIYjtBQUlMQyxtQ0FBVyxFQUFFO0FBSlIsdUJBTlQ7QUFBQSw4Q0FhRTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWJGLGVBY0U7QUFDRSxpQ0FBUyxFQUFDLEdBRFo7QUFFRSx5QkFBQyxFQUFDLHlCQUZKO0FBR0UsaUNBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERjtBQTZCRCxpQkE5QkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkRGLGVBbUtFO0FBQVEsbUJBQVMsRUFBRVQsd0RBQU0sQ0FBQzJCLFdBQTFCO0FBQUEsa0NBQ0U7QUFBUSxxQkFBUyxFQUFFM0Isd0RBQU0sQ0FBQzRCLFlBQTFCO0FBQXdDLG1CQUFPLEVBQUV2QyxnQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFRLHFCQUFTLEVBQUVXLHdEQUFNLENBQUM2QixVQUExQjtBQUFzQyxnQkFBSSxFQUFDLFFBQTNDO0FBQW9ELGlCQUFLLEVBQUMsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5LRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUxEOztHQTVRdUJ4RSxLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4NTk4NDEwNzBkNzZkMmYyYjJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01vZGFsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKHsgc2V0QWRkTW9kYWwsIGZldGNoUG9zdHMgfSkge1xyXG4gIGNvbnN0IHRhZ0lucHV0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBsZXQgaW5pdGlhbEVycm9ycyA9IHt9O1xyXG5cclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoaW5pdGlhbEVycm9ycyk7XHJcblxyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgbGV0IGluaXRpYWxFcnJvcnMgPSB7fTtcclxuXHJcbiAgICBpZih0aXRsZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgaW5pdGlhbEVycm9ycy50aXRsZSA9IFwiVGl0bGUgaXMgcmVxdWlyZWRcIlxyXG4gICAgfSBcclxuICAgIGlmKGxpbmsubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGluaXRpYWxFcnJvcnMubGluayA9IFwiTGluayBpcyByZXF1aXJlZFwiXHJcbiAgICB9IFxyXG4gICAgaWYoZGVzY3JpcHRpb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGluaXRpYWxFcnJvcnMuZGVzY3JpcHRpb24gPSBcIkRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkXCJcclxuICAgIH0gXHJcbiAgICBpZih0YWdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpbml0aWFsRXJyb3JzLnRhZ3MgPSBcIkEgVGFnIGlzIHJlcXVpcmVkXCJcclxuICAgIH1cclxuICAgIHNldEVycm9ycyhpbml0aWFsRXJyb3JzKTtcclxuICAgIHJldHVybiBpbml0aWFsRXJyb3JzO1xyXG4gIH1cclxuICBcclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RXJyb3JzKHt9KTtcclxuICAgIFxyXG4gICAgdmFsaWRhdGVGb3JtKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZXJyb3JzKVxyXG5cclxuICAgIGlmKCFlcnJvcnMpIHtcclxuICAgICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgbGluayxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgdGFncyxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGZldGNoUG9zdHMoKTtcclxuICAgICAgaGFuZGxlQ2xvc2VNb2RhbCgpOyAgIFxyXG4gICAgfSAgXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0QWRkTW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0VGl0bGUoXCJcIik7XHJcbiAgICBzZXREZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIHNldExpbmsoXCJcIik7XHJcbiAgICBzZXRUYWcoXCJcIik7XHJcbiAgICBzZXRUYWdzKFtdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFRhZygpIHtcclxuICAgIGNvbnN0IHRyaW1UYWcgPSB0YWcudHJpbSgpO1xyXG4gICAgaWYgKHRyaW1UYWcpIHtcclxuICAgICAgaGFuZGxlRm9jdXMoKTtcclxuICAgICAgc2V0VGFncyhbLi4udGFncywgdHJpbVRhZ10pO1xyXG4gICAgICBzZXRUYWcoXCJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZVRhZyhlKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0YWdzLmZpbHRlcigod29yZCkgPT4gd29yZCAhPSBlKTtcclxuICAgIHNldFRhZ3MocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgdGFnSW5wdXQuY3VycmVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcclxuICAgICAgICAgIGUua2V5ID09PSBcIkVudGVyXCIgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlckFkZH0+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjYxLjQxNFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MS40MlwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiMxNzBDM0FcIixcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGl0bGV9PkFkZCBhIG5ldyB0b29sPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMy40MTRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzhmOGE5YlwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb250ZW50fT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PlRvb2wgVGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHsgZXJyb3JzLnRpdGxlICYmIDxwPntlcnJvcnMudGl0bGV9PC9wPn1cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5MaW5rPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2xpbmt9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgeyBlcnJvcnMubGluayAmJiA8cD57ZXJyb3JzLmxpbmt9PC9wPn1cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXRUZXh0QXJlYX1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7IGVycm9ycy5kZXNjcmlwdGlvbiAmJiA8cD57ZXJyb3JzLmRlc2NyaXB0aW9ufTwvcD59XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VGFnczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnc30+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZWY9e3RhZ0lucHV0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmIChlLnByZXZlbnREZWZhdWx0KCksIGhhbmRsZUFkZFRhZygpKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0VGFnKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgeyBlcnJvcnMudGFncyAmJiA8cD57ZXJyb3JzLnRhZ3N9PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVGFnKCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWdGaWVsZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ31cclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRUYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3NDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dGFncyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3MubWFwKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVUYWcodGFnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0YWd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZVRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjOGY4YTliXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRm9vdGVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYW5jZWxCdXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zYXZlQnV0dG9ufSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cclxuICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==