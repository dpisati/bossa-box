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
                lineNumber: 114,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
                transform: "translate(-568.793 -714.793)",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M80,20.005l-60,60m60,0L20,20",
                  transform: "translate(549.501 695.5)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalTitle,
              children: "Add a new tool"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
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
              lineNumber: 139,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
              className: "a",
              d: "M32,20,20,32m12,0L20,20",
              transform: "translate(-19.292 -19.293)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalContent,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Tool Title"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
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
            lineNumber: 149,
            columnNumber: 13
          }, this), errors.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: errors.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 31
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Link"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
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
            lineNumber: 161,
            columnNumber: 13
          }, this), errors.link && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: errors.link
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 30
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
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
            lineNumber: 173,
            columnNumber: 13
          }, this), errors.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
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
              lineNumber: 186,
              columnNumber: 15
            }, this), errors.tags && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              children: errors.tags
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
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
                    lineNumber: 211,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
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
                      lineNumber: 230,
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
                        lineNumber: 244,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                        className: "a",
                        d: "M32,20,20,32m12,0L20,20",
                        transform: "translate(-19.292 -19.293)"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 245,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 25
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalFooter,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cancelButton,
            onClick: handleCloseModal,
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.saveButton,
            type: "submit",
            value: "Submit",
            children: "Save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsInRhZ0lucHV0IiwidXNlUmVmIiwiaW5pdGlhbEVycm9ycyIsInVzZVN0YXRlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidGl0bGUiLCJzZXRUaXRsZSIsImxpbmsiLCJzZXRMaW5rIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInRhZyIsInNldFRhZyIsInRhZ3MiLCJzZXRUYWdzIiwidmFsaWRhdGVGb3JtIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZUFkZFRhZyIsInRyaW1UYWciLCJ0cmltIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVSZW1vdmVUYWciLCJyZXN1bHQiLCJmaWx0ZXIiLCJ3b3JkIiwiY3VycmVudCIsImZvY3VzIiwic3R5bGVzIiwibW9kYWwiLCJrZXkiLCJtb2RhbEJvZHkiLCJtb2RhbEhlYWRlciIsIm1vZGFsSGVhZGVyQWRkIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VXaWR0aCIsInRyYW5zZm9ybSIsIndpZHRoIiwiaGVpZ2h0IiwibW9kYWxUaXRsZSIsImNsb3NlTW9kYWwiLCJtb2RhbENvbnRlbnQiLCJtb2RhbExhYmVsIiwibW9kYWxJbnB1dCIsInRhcmdldCIsInZhbHVlIiwibW9kYWxJbnB1dFRleHRBcmVhIiwiYWRkVGFncyIsImFkZFRhZ0ZpZWxkIiwiYWRkVGFnIiwidGFnc0NvbnRhaW5lciIsIm1hcCIsInJlbW92ZVRhZyIsIm1vZGFsRm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwic2F2ZUJ1dHRvbiJdLCJtYXBw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RUFBRSxFQUhiO0FBSUxDLG1DQUFXLEVBQUU7QUFKUix1QkFOVDtBQUFBLDhDQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBYkYsZUFjRTtBQUNFLGlDQUFTLEVBQUMsR0FEWjtBQUVFLHlCQUFDLEVBQUMseUJBRko7QUFHRSxpQ0FBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGO0FBNkJELGlCQTlCRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuREYsZUFtS0U7QUFBUSxtQkFBUyxFQUFFVCx3REFBTSxDQUFDMkIsV0FBMUI7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUUzQix3REFBTSxDQUFDNEIsWUFBMUI7QUFBd0MsbUJBQU8sRUFBRXZDLGdCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQVEscUJBQVMsRUFBRVcsd0RBQU0sQ0FBQzZCLFVBQTFCO0FBQXNDLGdCQUFJLEVBQUMsUUFBM0M7QUFBb0QsaUJBQUssRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbktGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1TEQ7O0dBMVF1QnhFLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGI3ZGZmNDNkMGZkNzQ2Mjc3YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTW9kYWwubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyBzZXRBZGRNb2RhbCwgZmV0Y2hQb3N0cyB9KSB7XHJcbiAgY29uc3QgdGFnSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGxldCBpbml0aWFsRXJyb3JzID0ge307XHJcblxyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShpbml0aWFsRXJyb3JzKTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBsZXQgaW5pdGlhbEVycm9ycyA9IHt9O1xyXG5cclxuICAgIGlmKHRpdGxlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpbml0aWFsRXJyb3JzLnRpdGxlID0gXCJUaXRsZSBpcyByZXF1aXJlZFwiXHJcbiAgICB9IFxyXG4gICAgaWYobGluay5sZW5ndGggPT09IDApIHtcclxuICAgICAgaW5pdGlhbEVycm9ycy5saW5rID0gXCJMaW5rIGlzIHJlcXVpcmVkXCJcclxuICAgIH0gXHJcbiAgICBpZihkZXNjcmlwdGlvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgaW5pdGlhbEVycm9ycy5kZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb24gaXMgcmVxdWlyZWRcIlxyXG4gICAgfSBcclxuICAgIGlmKHRhZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGluaXRpYWxFcnJvcnMudGFncyA9IFwiQSBUYWcgaXMgcmVxdWlyZWRcIlxyXG4gICAgfVxyXG4gICAgc2V0RXJyb3JzKGluaXRpYWxFcnJvcnMpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEVycm9ycyh7fSk7XHJcbiAgICBcclxuICAgIHZhbGlkYXRlRm9ybSgpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMpXHJcbiAgICBpZighZXJyb3JzKSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIGxpbmssXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIHRhZ3MsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBmZXRjaFBvc3RzKCk7XHJcbiAgICAgIGhhbmRsZUNsb3NlTW9kYWwoKTsgICBcclxuICAgIH0gIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VNb2RhbCgpIHtcclxuICAgIHNldEFkZE1vZGFsKGZhbHNlKTtcclxuICAgIHNldFRpdGxlKFwiXCIpO1xyXG4gICAgc2V0RGVzY3JpcHRpb24oXCJcIik7XHJcbiAgICBzZXRMaW5rKFwiXCIpO1xyXG4gICAgc2V0VGFnKFwiXCIpO1xyXG4gICAgc2V0VGFncyhbXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVBZGRUYWcoKSB7XHJcbiAgICBjb25zdCB0cmltVGFnID0gdGFnLnRyaW0oKTtcclxuICAgIGlmICh0cmltVGFnKSB7XHJcbiAgICAgIGhhbmRsZUZvY3VzKCk7XHJcbiAgICAgIHNldFRhZ3MoWy4uLnRhZ3MsIHRyaW1UYWddKTtcclxuICAgICAgc2V0VGFnKFwiXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhbmRsZUZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVUYWcoZSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGFncy5maWx0ZXIoKHdvcmQpID0+IHdvcmQgIT0gZSk7XHJcbiAgICBzZXRUYWdzKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcclxuICAgIHRhZ0lucHV0LmN1cnJlbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XHJcbiAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJBZGR9PlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI2MS40MTRcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjMTcwQzNBXCIsXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoNDVkZWcpXCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRpdGxlfT5BZGQgYSBuZXcgdG9vbDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTMuNDE0XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMy40MTVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5Ub29sIFRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7IGVycm9ycy50aXRsZSAmJiA8cD57ZXJyb3JzLnRpdGxlfTwvcD59XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+TGluazwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtsaW5rfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TGluayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHsgZXJyb3JzLmxpbmsgJiYgPHA+e2Vycm9ycy5saW5rfTwvcD59XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0VGV4dEFyZWF9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgeyBlcnJvcnMuZGVzY3JpcHRpb24gJiYgPHA+e2Vycm9ycy5kZXNjcmlwdGlvbn08L3A+fVxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PlRhZ3M8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ3N9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVmPXt0YWdJbnB1dH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5rZXkgPT09IFwiRW50ZXJcIiAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBoYW5kbGVBZGRUYWcoKSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRhZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIHsgZXJyb3JzLnRhZ3MgJiYgPHA+e2Vycm9ycy50YWdzfTwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRhZygpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnRmllbGR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWd9XHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkVGFnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAge3RhZ3MgJiZcclxuICAgICAgICAgICAgICAgICAgICB0YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlVGFnKHRhZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGFnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmVUYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzhmOGE5YlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEZvb3Rlcn0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2F2ZUJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=