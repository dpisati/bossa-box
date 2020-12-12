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

              if (errors) {
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
                lineNumber: 113,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
                transform: "translate(-568.793 -714.793)",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M80,20.005l-60,60m60,0L20,20",
                  transform: "translate(549.501 695.5)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalTitle,
              children: "Add a new tool"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
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
              lineNumber: 138,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
              className: "a",
              d: "M32,20,20,32m12,0L20,20",
              transform: "translate(-19.292 -19.293)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalContent,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Tool Title"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
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
            lineNumber: 148,
            columnNumber: 13
          }, this), errors.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: errors.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 31
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Link"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
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
            lineNumber: 160,
            columnNumber: 13
          }, this), errors.link && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: errors.link
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 30
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
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
            lineNumber: 172,
            columnNumber: 13
          }, this), errors.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
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
              lineNumber: 185,
              columnNumber: 15
            }, this), errors.tags && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              children: errors.tags
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
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
                    lineNumber: 210,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
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
                      lineNumber: 229,
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
                        lineNumber: 243,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                        className: "a",
                        d: "M32,20,20,32m12,0L20,20",
                        transform: "translate(-19.292 -19.293)"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 244,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 230,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 25
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalFooter,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cancelButton,
            onClick: handleCloseModal,
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.saveButton,
            type: "submit",
            value: "Submit",
            children: "Save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsInRhZ0lucHV0IiwidXNlUmVmIiwiaW5pdGlhbEVycm9ycyIsInVzZVN0YXRlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidGl0bGUiLCJzZXRUaXRsZSIsImxpbmsiLCJzZXRMaW5rIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInRhZyIsInNldFRhZyIsInRhZ3MiLCJzZXRUYWdzIiwidmFsaWRhdGVGb3JtIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlQWRkVGFnIiwidHJpbVRhZyIsInRyaW0iLCJoYW5kbGVGb2N1cyIsImhhbmRsZVJlbW92ZVRhZyIsInJlc3VsdCIsImZpbHRlciIsIndvcmQiLCJjdXJyZW50IiwiZm9jdXMiLCJzdHlsZXMiLCJtb2RhbCIsImtleSIsIm1vZGFsQm9keSIsIm1vZGFsSGVhZGVyIiwibW9kYWxIZWFkZXJBZGQiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwidHJhbnNmb3JtIiwid2lkdGgiLCJoZWlnaHQiLCJtb2RhbFRpdGxlIiwiY2xvc2VNb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsTGFiZWwiLCJtb2RhbElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJtb2RhbElucHV0VGV4dEFyZWEiLCJhZGRUYWdzIiwiYWRkVGFnRmllbGQiLCJhZGRUYWciLCJ0YWdzQ29udGFpbmVyIiwibWFwIiwicmVtb3ZlVGFnIiwibW9kYWxGb290ZXIiLCJjYW5jZWxCdXR0b24iLCJzYXZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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QUFBQTtBQUFBO0FBQUEsK0JBYkYsZUFjRTtBQUNFLGlDQUFTLEVBQUMsR0FEWjtBQUVFLHlCQUFDLEVBQUMseUJBRko7QUFHRSxpQ0FBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGO0FBNkJELGlCQTlCRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuREYsZUFtS0U7QUFBUSxtQkFBUyxFQUFFVCx3REFBTSxDQUFDMkIsV0FBMUI7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUUzQix3REFBTSxDQUFDNEIsWUFBMUI7QUFBd0MsbUJBQU8sRUFBRXZDLGdCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQVEscUJBQVMsRUFBRVcsd0RBQU0sQ0FBQzZCLFVBQTFCO0FBQXNDLGdCQUFJLEVBQUMsUUFBM0M7QUFBb0QsaUJBQUssRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbktGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1TEQ7O0dBelF1QnRFLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmI3OGQ3NTRkMTM4YTY1MTVhYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTW9kYWwubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyBzZXRBZGRNb2RhbCwgZmV0Y2hQb3N0cyB9KSB7XHJcbiAgY29uc3QgdGFnSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGxldCBpbml0aWFsRXJyb3JzID0ge307XHJcblxyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShpbml0aWFsRXJyb3JzKTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBsZXQgaW5pdGlhbEVycm9ycyA9IHt9O1xyXG5cclxuICAgIGlmKHRpdGxlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpbml0aWFsRXJyb3JzLnRpdGxlID0gXCJUaXRsZSBpcyByZXF1aXJlZFwiXHJcbiAgICB9IFxyXG4gICAgaWYobGluay5sZW5ndGggPT09IDApIHtcclxuICAgICAgaW5pdGlhbEVycm9ycy5saW5rID0gXCJMaW5rIGlzIHJlcXVpcmVkXCJcclxuICAgIH0gXHJcbiAgICBpZihkZXNjcmlwdGlvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgaW5pdGlhbEVycm9ycy5kZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb24gaXMgcmVxdWlyZWRcIlxyXG4gICAgfSBcclxuICAgIGlmKHRhZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGluaXRpYWxFcnJvcnMudGFncyA9IFwiQSBUYWcgaXMgcmVxdWlyZWRcIlxyXG4gICAgfVxyXG4gICAgc2V0RXJyb3JzKGluaXRpYWxFcnJvcnMpO1xyXG4gIH1cclxuICBcclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RXJyb3JzKHt9KTtcclxuICAgIFxyXG4gICAgdmFsaWRhdGVGb3JtKCk7XHJcblxyXG4gICAgaWYoIWVycm9ycykge1xyXG4gICAgICBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBsaW5rLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICB0YWdzLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgZmV0Y2hQb3N0cygpO1xyXG4gICAgICBoYW5kbGVDbG9zZU1vZGFsKCk7ICAgXHJcbiAgICB9ICBcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRBZGRNb2RhbChmYWxzZSk7XHJcbiAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgIHNldERlc2NyaXB0aW9uKFwiXCIpO1xyXG4gICAgc2V0TGluayhcIlwiKTtcclxuICAgIHNldFRhZyhcIlwiKTtcclxuICAgIHNldFRhZ3MoW10pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQWRkVGFnKCkge1xyXG4gICAgY29uc3QgdHJpbVRhZyA9IHRhZy50cmltKCk7XHJcbiAgICBpZiAodHJpbVRhZykge1xyXG4gICAgICBoYW5kbGVGb2N1cygpO1xyXG4gICAgICBzZXRUYWdzKFsuLi50YWdzLCB0cmltVGFnXSk7XHJcbiAgICAgIHNldFRhZyhcIlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBoYW5kbGVGb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlVGFnKGUpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRhZ3MuZmlsdGVyKCh3b3JkKSA9PiB3b3JkICE9IGUpO1xyXG4gICAgc2V0VGFncyhyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XHJcbiAgICB0YWdJbnB1dC5jdXJyZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICBvbktleVByZXNzPXsoZSkgPT4ge1xyXG4gICAgICAgICAgZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCb2R5fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyQWRkfT5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNjEuNDE0XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjYxLjQyXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzE3MEMzQVwiLFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKVwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUaXRsZX0+QWRkIGEgbmV3IHRvb2w8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEzLjQxNFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTMuNDE1XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjOGY4YTliXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0zMiwyMCwyMCwzMm0xMiwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbnRlbnR9PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VG9vbCBUaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgeyBlcnJvcnMudGl0bGUgJiYgPHA+e2Vycm9ycy50aXRsZX08L3A+fVxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9Pkxpbms8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bGlua31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldExpbmsoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7IGVycm9ycy5saW5rICYmIDxwPntlcnJvcnMubGlua308L3A+fVxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dFRleHRBcmVhfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsgZXJyb3JzLmRlc2NyaXB0aW9uICYmIDxwPntlcnJvcnMuZGVzY3JpcHRpb259PC9wPn1cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5UYWdzPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWdzfT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlZj17dGFnSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUua2V5ID09PSBcIkVudGVyXCIgJiYgKGUucHJldmVudERlZmF1bHQoKSwgaGFuZGxlQWRkVGFnKCkpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRUYWcoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICB7IGVycm9ycy50YWdzICYmIDxwPntlcnJvcnMudGFnc308L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUYWcoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ0ZpZWxkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnfVxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZFRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIHt0YWdzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RhZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlVGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zMiwyMCwyMCwzMm0xMiwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxGb290ZXJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhbmNlbEJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNhdmVCdXR0b259IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9