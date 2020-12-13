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
    return _validateForm.apply(this, arguments);
  }

  function _validateForm() {
    _validateForm = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var initialErrors;
      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              initialErrors = {};

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

              if (!(Object.keys(initialErrors).length === 0)) {
                _context.next = 11;
                break;
              }

              _context.next = 9;
              return postNewTool();

            case 9:
              fetchPosts();
              handleCloseModal();

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _validateForm.apply(this, arguments);
  }

  function postNewTool() {
    return _postNewTool.apply(this, arguments);
  }

  function _postNewTool() {
    _postNewTool = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
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

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _postNewTool.apply(this, arguments);
  }

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              _context3.next = 3;
              return validateForm();

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
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
            children: ["Tool Title ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
              className: "".concat(errors.title && _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.span),
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 61
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            className: "".concat(_Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInput, " ").concat(errors.title && _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInputError),
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
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalErrorMessage,
            children: errors.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 31
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: ["Link ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
              className: "".concat(errors.link && _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.span),
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 55
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            className: "".concat(_Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInput, " ").concat(errors.link && _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInputError),
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
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalErrorMessage,
            children: errors.link
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 30
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: ["Description ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
              className: "".concat(errors.description && _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.span),
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 62
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("textarea", {
            className: "".concat(_Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInputTextArea, " ").concat(errors.description && _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInputTextAreaError),
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
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalErrorMessage,
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: ["Tags ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
              className: "".concat(errors.tags && _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.span),
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 55
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.addTags,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
              ref: tagInput,
              className: "".concat(_Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInput, " ").concat(errors.tags && _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalInputError),
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
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalErrorMessage,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsInRhZ0lucHV0IiwidXNlUmVmIiwiaW5pdGlhbEVycm9ycyIsInVzZVN0YXRlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidGl0bGUiLCJzZXRUaXRsZSIsImxpbmsiLCJzZXRMaW5rIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInRhZyIsInNldFRhZyIsInRhZ3MiLCJzZXRUYWdzIiwidmFsaWRhdGVGb3JtIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsInBvc3ROZXdUb29sIiwiaGFuZGxlQ2xvc2VNb2RhbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQWRkVGFnIiwidHJpbVRhZyIsInRyaW0iLCJoYW5kbGVGb2N1cyIsImhhbmRsZVJlbW92ZVRhZyIsInJlc3VsdCIsImZpbHRlciIsIndvcmQiLCJjdXJyZW50IiwiZm9jdXMiLCJzdHlsZXMiLCJtb2RhbCIsImtleSIsIm1vZGFsQm9keSIsIm1vZGFsSGVhZGVyIiwibW9kYWxIZWFkZXJBZGQiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwidHJhbnNmb3JtIiwid2lkdGgiLCJoZWlnaHQiLCJtb2RhbFRpdGxlIiwiY2xvc2VNb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsTGFiZWwiLCJzcGFuIiwibW9kYWxJbnB1dCIsIm1vZGFsSW5wdXRFcnJvciIsInRhcmdldCIsInZhbHVlIiwibW9kYWxFcnJvck1lc3NhZ2UiLCJtb2RhbElucHV0VGV4dEFyZWEiLCJtb2RhbElucHV0VGV4dEFyZWFFcnJvciIsImFkZFRhZ3MiLCJhZGRUYWdGaWVsZCIsImFkZFRhZyIsInRhZ3NDb250YWluZXIiLCJtYXAiLCJyZW1vdmVUYWciLCJtb2RhbEZvb3RlciIsImNhbmNlbEJ1dHRvbiIsInNhdmVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQSxLQUFULE9BQTRDO0FBQUE7O0FBQUE7O0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUN6RCxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2QjtBQUVBLE1BQUlDLGFBQWEsR0FBRyxFQUFwQjs7QUFIeUQsa0JBSzdCQyxzREFBUSxDQUFDRCxhQUFELENBTHFCO0FBQUEsTUFLbERFLE1BTGtEO0FBQUEsTUFLMUNDLFNBTDBDOztBQUFBLG1CQU8vQkYsc0RBQVEsQ0FBQyxFQUFELENBUHVCO0FBQUEsTUFPbERHLEtBUGtEO0FBQUEsTUFPM0NDLFFBUDJDOztBQUFBLG1CQVFqQ0osc0RBQVEsQ0FBQyxFQUFELENBUnlCO0FBQUEsTUFRbERLLElBUmtEO0FBQUEsTUFRNUNDLE9BUjRDOztBQUFBLG1CQVNuQk4sc0RBQVEsQ0FBQyxFQUFELENBVFc7QUFBQSxNQVNsRE8sV0FUa0Q7QUFBQSxNQVNyQ0MsY0FUcUM7O0FBQUEsbUJBVW5DUixzREFBUSxDQUFDLEVBQUQsQ0FWMkI7QUFBQSxNQVVsRFMsR0FWa0Q7QUFBQSxNQVU3Q0MsTUFWNkM7O0FBQUEsbUJBV2pDVixzREFBUSxDQUFDLEVBQUQsQ0FYeUI7QUFBQSxNQVdsRFcsSUFYa0Q7QUFBQSxNQVc1Q0MsT0FYNEM7O0FBQUEsV0FjMUNDLFlBZDBDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtTQWN6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTWQsMkJBRE4sR0FDc0IsRUFEdEI7O0FBR0Usa0JBQUdJLEtBQUssQ0FBQ1csTUFBTixLQUFpQixDQUFwQixFQUF1QjtBQUNyQmYsNkJBQWEsQ0FBQ0ksS0FBZCxHQUFz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QUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuS0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVMRDs7R0E1UXVCN0UsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZGYyOTU4YTgxNTZmMDI2NmRkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Nb2RhbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7IHNldEFkZE1vZGFsLCBmZXRjaFBvc3RzIH0pIHtcclxuICBjb25zdCB0YWdJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IGluaXRpYWxFcnJvcnMgPSB7fTtcclxuXHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKGluaXRpYWxFcnJvcnMpO1xyXG5cclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICAgIGxldCBpbml0aWFsRXJyb3JzID0ge307XHJcblxyXG4gICAgaWYodGl0bGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGluaXRpYWxFcnJvcnMudGl0bGUgPSBcIlRpdGxlIGlzIHJlcXVpcmVkXCJcclxuICAgIH0gXHJcbiAgICBpZihsaW5rLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpbml0aWFsRXJyb3JzLmxpbmsgPSBcIkxpbmsgaXMgcmVxdWlyZWRcIlxyXG4gICAgfSBcclxuICAgIGlmKGRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpbml0aWFsRXJyb3JzLmRlc2NyaXB0aW9uID0gXCJEZXNjcmlwdGlvbiBpcyByZXF1aXJlZFwiXHJcbiAgICB9IFxyXG4gICAgaWYodGFncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgaW5pdGlhbEVycm9ycy50YWdzID0gXCJBIFRhZyBpcyByZXF1aXJlZFwiXHJcbiAgICB9XHJcbiAgICBzZXRFcnJvcnMoaW5pdGlhbEVycm9ycyk7XHJcblxyXG4gICAgaWYoT2JqZWN0LmtleXMoaW5pdGlhbEVycm9ycykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGF3YWl0IHBvc3ROZXdUb29sKCk7XHJcbiAgICAgIGZldGNoUG9zdHMoKTtcclxuICAgICAgaGFuZGxlQ2xvc2VNb2RhbCgpOyBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHBvc3ROZXdUb29sKCkge1xyXG4gICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHNcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBsaW5rLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRhZ3MsXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhd2FpdCB2YWxpZGF0ZUZvcm0oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRBZGRNb2RhbChmYWxzZSk7XHJcbiAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgIHNldERlc2NyaXB0aW9uKFwiXCIpO1xyXG4gICAgc2V0TGluayhcIlwiKTtcclxuICAgIHNldFRhZyhcIlwiKTtcclxuICAgIHNldFRhZ3MoW10pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQWRkVGFnKCkge1xyXG4gICAgY29uc3QgdHJpbVRhZyA9IHRhZy50cmltKCk7XHJcbiAgICBpZiAodHJpbVRhZykge1xyXG4gICAgICBoYW5kbGVGb2N1cygpO1xyXG4gICAgICBzZXRUYWdzKFsuLi50YWdzLCB0cmltVGFnXSk7XHJcbiAgICAgIHNldFRhZyhcIlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBoYW5kbGVGb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlVGFnKGUpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRhZ3MuZmlsdGVyKCh3b3JkKSA9PiB3b3JkICE9IGUpO1xyXG4gICAgc2V0VGFncyhyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XHJcbiAgICB0YWdJbnB1dC5jdXJyZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcclxuICAgICAgICAgIGUua2V5ID09PSBcIkVudGVyXCIgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlckFkZH0+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjYxLjQxNFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MS40MlwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiMxNzBDM0FcIixcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGl0bGV9PkFkZCBhIG5ldyB0b29sPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMy40MTRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzhmOGE5YlwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb250ZW50fT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PlRvb2wgVGl0bGUgPHNwYW4gY2xhc3NOYW1lPXtgJHsgZXJyb3JzLnRpdGxlICYmIHN0eWxlcy5zcGFufWB9Pio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxJbnB1dH0gJHtlcnJvcnMudGl0bGUgJiYgc3R5bGVzLm1vZGFsSW5wdXRFcnJvcn1gfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHsgZXJyb3JzLnRpdGxlICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRXJyb3JNZXNzYWdlfT57ZXJyb3JzLnRpdGxlfTwvcD59XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+TGluayA8c3BhbiBjbGFzc05hbWU9e2AkeyBlcnJvcnMubGluayAmJiBzdHlsZXMuc3Bhbn1gfT4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vZGFsSW5wdXR9ICR7ZXJyb3JzLmxpbmsgJiYgc3R5bGVzLm1vZGFsSW5wdXRFcnJvcn1gfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bGlua31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldExpbmsoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7IGVycm9ycy5saW5rICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRXJyb3JNZXNzYWdlfT57ZXJyb3JzLmxpbmt9PC9wPn1cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5EZXNjcmlwdGlvbiA8c3BhbiBjbGFzc05hbWU9e2AkeyBlcnJvcnMuZGVzY3JpcHRpb24gJiYgc3R5bGVzLnNwYW59YH0+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbElucHV0VGV4dEFyZWF9ICR7ZXJyb3JzLmRlc2NyaXB0aW9uICYmIHN0eWxlcy5tb2RhbElucHV0VGV4dEFyZWFFcnJvcn1gfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsgZXJyb3JzLmRlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRXJyb3JNZXNzYWdlfT57ZXJyb3JzLmRlc2NyaXB0aW9ufTwvcD59XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VGFncyA8c3BhbiBjbGFzc05hbWU9e2AkeyBlcnJvcnMudGFncyAmJiBzdHlsZXMuc3Bhbn1gfT4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnc30+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZWY9e3RhZ0lucHV0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxJbnB1dH0gJHtlcnJvcnMudGFncyAmJiBzdHlsZXMubW9kYWxJbnB1dEVycm9yfWB9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5rZXkgPT09IFwiRW50ZXJcIiAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBoYW5kbGVBZGRUYWcoKSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRhZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIHsgZXJyb3JzLnRhZ3MgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxFcnJvck1lc3NhZ2V9PntlcnJvcnMudGFnc308L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUYWcoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ0ZpZWxkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnfVxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZFRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIHt0YWdzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RhZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlVGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zMiwyMCwyMCwzMm0xMiwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxGb290ZXJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhbmNlbEJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNhdmVCdXR0b259IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9