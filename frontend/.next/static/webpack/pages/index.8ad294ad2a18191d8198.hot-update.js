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

            case 6:
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
              return validateForm();

            case 2:
              if (!(Object.keys(errors).length === 0)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 5;
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
              return postNewTool();

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
                lineNumber: 115,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
                transform: "translate(-568.793 -714.793)",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M80,20.005l-60,60m60,0L20,20",
                  transform: "translate(549.501 695.5)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalTitle,
              children: "Add a new tool"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
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
              lineNumber: 140,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
              className: "a",
              d: "M32,20,20,32m12,0L20,20",
              transform: "translate(-19.292 -19.293)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
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
              lineNumber: 149,
              columnNumber: 61
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
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
            lineNumber: 150,
            columnNumber: 13
          }, this), errors.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalErrorMessage,
            children: errors.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 31
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: ["Link ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
              className: "".concat(errors.link && _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.span),
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 55
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
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
            lineNumber: 162,
            columnNumber: 13
          }, this), errors.link && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalErrorMessage,
            children: errors.link
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 30
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: ["Description ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
              className: "".concat(errors.description && _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.span),
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 62
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
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
            lineNumber: 174,
            columnNumber: 13
          }, this), errors.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalErrorMessage,
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalLabel,
            children: ["Tags ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
              className: "".concat(errors.tags && _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.span),
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 55
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
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
              lineNumber: 187,
              columnNumber: 15
            }, this), errors.tags && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalErrorMessage,
              children: errors.tags
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
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
                    lineNumber: 212,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
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
                      lineNumber: 231,
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
                        lineNumber: 245,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                        className: "a",
                        d: "M32,20,20,32m12,0L20,20",
                        transform: "translate(-19.292 -19.293)"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 246,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 25
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
          className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalFooter,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cancelButton,
            onClick: handleCloseModal,
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.saveButton,
            type: "submit",
            value: "Submit",
            children: "Save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsInRhZ0lucHV0IiwidXNlUmVmIiwiaW5pdGlhbEVycm9ycyIsInVzZVN0YXRlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidGl0bGUiLCJzZXRUaXRsZSIsImxpbmsiLCJzZXRMaW5rIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInRhZyIsInNldFRhZyIsInRhZ3MiLCJzZXRUYWdzIiwidmFsaWRhdGVGb3JtIiwibGVuZ3RoIiwicG9zdE5ld1Rvb2wiLCJPYmplY3QiLCJrZXlzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQWRkVGFnIiwidHJpbVRhZyIsInRyaW0iLCJoYW5kbGVGb2N1cyIsImhhbmRsZVJlbW92ZVRhZyIsInJlc3VsdCIsImZpbHRlciIsIndvcmQiLCJjdXJyZW50IiwiZm9jdXMiLCJzdHlsZXMiLCJtb2RhbCIsImtleSIsIm1vZGFsQm9keSIsIm1vZGFsSGVhZGVyIiwibW9kYWxIZWFkZXJBZGQiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwidHJhbnNmb3JtIiwid2lkdGgiLCJoZWlnaHQiLCJtb2RhbFRpdGxlIiwiY2xvc2VNb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsTGFiZWwiLCJzcGFuIiwibW9kYWxJbnB1dCIsIm1vZGFsSW5wdXRFcnJvciIsInRhcmdldCIsInZhbHVlIiwibW9kYWxFcnJvck1lc3NhZ2UiLCJtb2RhbElucHV0VGV4dEFyZWEiLCJtb2RhbElucHV0VGV4dEFyZWFFcnJvciIsImFkZFRhZ3MiLCJhZGRUYWdGaWVsZCIsImFkZFRhZyIsInRhZ3NDb250YWluZXIiLCJtYXAiLCJyZW1vdmVUYWciLCJtb2RhbEZvb3RlciIsImNhbmNlbEJ1dHRvbiIsInNhdmVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQSxLQUFULE9BQTRDO0FBQUE7O0FBQUE7O0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUN6RCxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2QjtBQUVBLE1BQUlDLGFBQWEsR0FBRyxFQUFwQjs7QUFIeUQsa0JBSzdCQyxzREFBUSxDQUFDRCxhQUFELENBTHFCO0FBQUEsTUFLbERFLE1BTGtEO0FBQUEsTUFLMUNDLFNBTDBDOztBQUFBLG1CQU8vQkYsc0RBQVEsQ0FBQyxFQUFELENBUHVCO0FBQUEsTUFPbERHLEtBUGtEO0FBQUEsTUFPM0NDLFFBUDJDOztBQUFBLG1CQVFqQ0osc0RBQVEsQ0FBQyxFQUFELENBUnlCO0FBQUEsTUFRbERLLElBUmtEO0FBQUEsTUFRNUNDLE9BUjRDOztBQUFBLG1CQVNuQk4sc0RBQVEsQ0FBQyxFQUFELENBVFc7QUFBQSxNQVNsRE8sV0FUa0Q7QUFBQSxNQVNyQ0MsY0FUcUM7O0FBQUEsbUJBVW5DUixzREFBUSxDQUFDLEVBQUQsQ0FWMkI7QUFBQSxNQVVsRFMsR0FWa0Q7QUFBQSxNQVU3Q0MsTUFWNkM7O0FBQUEsbUJBV2pDVixzREFBUSxDQUFDLEVBQUQsQ0FYeUI7QUFBQSxNQVdsRFcsSUFYa0Q7QUFBQSxNQVc1Q0MsT0FYNEM7O0FBQUEsV0FjMUNDLFlBZDBDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtTQWN6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTWQsMkJBRE4sR0FDc0IsRUFEdEI7O0FBR0Usa0JBQUdJLEtBQUssQ0FBQ1csTUFBTixLQUFpQixDQUFwQixFQUF1QjtBQUNyQmYsNkJBQWEsQ0FBQ0ksS0FBZCxHQUFzQixtQkFBdEI7QUFDRDs7QUFDRCxrQkFBR0UsSUFBSSxDQUFDUyxNQUFMLEtBQWdCLENBQW5CLEVBQXNCO0FBQ3BCZiw2QkFBYSxDQUFDTSxJQUFkLEdBQXFCLGtCQUFyQjtBQUNEOztBQUNELGtCQUFHRSxXQUFXLENBQUNPLE1BQVosS0FBdUIsQ0FBMUIsRUFBNkI7QUFDM0JmLDZCQUFhLENBQUNRLFdBQWQsR0FBNEIseUJBQTVCO0FBQ0Q7O0FBQ0Qsa0JBQUdJLElBQUksQ0FBQ0csTUFBTCxLQUFnQixDQUFuQixFQUFzQjtBQUNwQmYsNkJBQWEsQ0FBQ1ksSUFBZCxHQUFxQixtQkFBckI7QUFDRDs7QUFDRFQsdUJBQVMsQ0FBQ0gsYUFBRCxDQUFUOztBQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZHlEO0FBQUE7QUFBQTs7QUFBQSxXQWdDMUNnQixXQWhDMEM7QUFBQTtBQUFBOztBQUFBO0FBQUEsOFNBZ0N6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUUYsWUFBWSxFQURwQjs7QUFBQTtBQUFBLG9CQUVLRyxNQUFNLENBQUNDLElBQVAsQ0FBWWhCLE1BQVosRUFBb0JhLE1BQXBCLEtBQStCLENBRnBDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBR1VJLEtBQUssQ0FBQyw2QkFBRCxFQUFnQztBQUN6Q0Msc0JBQU0sRUFBRSxNQURpQztBQUV6Q0MsdUJBQU8sRUFBRTtBQUFFLGtDQUFnQjtBQUFsQixpQkFGZ0M7QUFHekNDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CcEIsdUJBQUssRUFBTEEsS0FEbUI7QUFFbkJFLHNCQUFJLEVBQUpBLElBRm1CO0FBR25CRSw2QkFBVyxFQUFYQSxXQUhtQjtBQUluQkksc0JBQUksRUFBSkE7QUFKbUIsaUJBQWY7QUFIbUMsZUFBaEMsQ0FIZjs7QUFBQTtBQWFJZix3QkFBVTtBQUNWNEIsOEJBQWdCOztBQWRwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhDeUQ7QUFBQTtBQUFBOztBQUFBLFdBa0QxQ0MsWUFsRDBDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtTQWtEekQsa0JBQTRCQyxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLGVBQUMsQ0FBQ0MsY0FBRjtBQURGO0FBQUEscUJBRVFaLFdBQVcsRUFGbkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FsRHlEO0FBQUE7QUFBQTs7QUF1RHpELFdBQVNTLGdCQUFULEdBQTRCO0FBQzFCN0IsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBUyxZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FJLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0FGLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDQUksVUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNBRSxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0Q7O0FBRUQsV0FBU2dCLFlBQVQsR0FBd0I7QUFDdEIsUUFBTUMsT0FBTyxHQUFHcEIsR0FBRyxDQUFDcUIsSUFBSixFQUFoQjs7QUFDQSxRQUFJRCxPQUFKLEVBQWE7QUFDWEUsaUJBQVc7QUFDWG5CLGFBQU8sNkpBQUtELElBQUwsSUFBV2tCLE9BQVgsR0FBUDtBQUNBbkIsWUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNEOztBQUNELFdBQU9xQixXQUFXLEVBQWxCO0FBQ0Q7O0FBRUQsV0FBU0MsZUFBVCxDQUF5Qk4sQ0FBekIsRUFBNEI7QUFDMUIsUUFBTU8sTUFBTSxHQUFHdEIsSUFBSSxDQUFDdUIsTUFBTCxDQUFZLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLElBQUlULENBQWxCO0FBQUEsS0FBWixDQUFmO0FBQ0FkLFdBQU8sQ0FBQ3FCLE1BQUQsQ0FBUDtBQUNEOztBQUVELFdBQVNGLFdBQVQsR0FBdUI7QUFDckJsQyxZQUFRLENBQUN1QyxPQUFULENBQWlCQyxLQUFqQjtBQUNEOztBQUdELHNCQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBTSxDQUFDQyxLQUF2QjtBQUFBLDJCQUNFO0FBQ0UsY0FBUSxFQUFFZCxZQURaO0FBRUUsZ0JBQVUsRUFBRSxvQkFBQ0MsQ0FBRCxFQUFPO0FBQ2pCQSxTQUFDLENBQUNjLEdBQUYsS0FBVSxPQUFWLElBQXFCZCxDQUFDLENBQUNDLGNBQUYsRUFBckI7QUFDRCxPQUpIO0FBQUEsNkJBTUU7QUFBSyxpQkFBUyxFQUFFVyx3REFBTSxDQUFDRyxTQUF2QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUgsd0RBQU0sQ0FBQ0ksV0FBdkI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVKLHdEQUFNLENBQUNLLGNBQXZCO0FBQUEsb0NBQ0U7QUFDRSxtQkFBSyxFQUFDLDRCQURSO0FBRUUsbUJBQUssRUFBQyxRQUZSO0FBR0Usb0JBQU0sRUFBQyxPQUhUO0FBSUUscUJBQU8sRUFBQyxrQkFKVjtBQUtFLG1CQUFLLEVBQUU7QUFDTEMsb0JBQUksRUFBRSxNQUREO0FBRUxDLHNCQUFNLEVBQUUsU0FGSDtBQUdMQyxnQ0FBZ0IsRUFBRSxFQUhiO0FBSUxDLDJCQUFXLEVBQUUsTUFKUjtBQUtMQyx5QkFBUyxFQUFFLGVBTE47QUFNTEMscUJBQUssRUFBRSxNQU5GO0FBT0xDLHNCQUFNLEVBQUU7QUFQSCxlQUxUO0FBQUEsc0NBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFmRixlQWdCRTtBQUFHLHlCQUFTLEVBQUMsOEJBQWI7QUFBQSx1Q0FDRTtBQUNFLDJCQUFTLEVBQUMsR0FEWjtBQUVFLG1CQUFDLEVBQUMsOEJBRko7QUFHRSwyQkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQXlCRTtBQUFJLHVCQUFTLEVBQUVaLHdEQUFNLENBQUNhLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUE0QkU7QUFDRSxxQkFBUyxFQUFFYix3REFBTSxDQUFDYyxVQURwQjtBQUVFLG1CQUFPLEVBQUU1QixnQkFGWDtBQUdFLGlCQUFLLEVBQUMsNEJBSFI7QUFJRSxpQkFBSyxFQUFDLFFBSlI7QUFLRSxrQkFBTSxFQUFDLFFBTFQ7QUFNRSxtQkFBTyxFQUFDLG1CQU5WO0FBT0UsaUJBQUssRUFBRTtBQUNMb0Isa0JBQUksRUFBRSxNQUREO0FBRUxDLG9CQUFNLEVBQUUsU0FGSDtBQUdMQyw4QkFBZ0IsRUFBRSxFQUhiO0FBSUxDLHlCQUFXLEVBQUU7QUFKUixhQVBUO0FBQUEsb0NBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFkRixlQWVFO0FBQ0UsdUJBQVMsRUFBQyxHQURaO0FBRUUsZUFBQyxFQUFDLHlCQUZKO0FBR0UsdUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFtREU7QUFBSyxtQkFBUyxFQUFFVCx3REFBTSxDQUFDZSxZQUF2QjtBQUFBLGtDQUNFO0FBQU8scUJBQVMsRUFBRWYsd0RBQU0sQ0FBQ2dCLFVBQXpCO0FBQUEsbURBQWdEO0FBQU0sdUJBQVMsWUFBTXJELE1BQU0sQ0FBQ0UsS0FBUCxJQUFnQm1DLHdEQUFNLENBQUNpQixJQUE3QixDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUNFLHFCQUFTLFlBQUtqQix3REFBTSxDQUFDa0IsVUFBWixjQUEwQnZELE1BQU0sQ0FBQ0UsS0FBUCxJQUFnQm1DLHdEQUFNLENBQUNtQixlQUFqRCxDQURYO0FBRUUsZ0JBQUksRUFBQyxNQUZQO0FBR0UsaUJBQUssRUFBRXRELEtBSFQ7QUFJRSxvQkFBUSxFQUFFLGtCQUFDdUIsQ0FBRCxFQUFPO0FBQ2Z0QixzQkFBUSxDQUFDc0IsQ0FBQyxDQUFDZ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsRUFXSTFELE1BQU0sQ0FBQ0UsS0FBUCxpQkFBZ0I7QUFBRyxxQkFBUyxFQUFFbUMsd0RBQU0sQ0FBQ3NCLGlCQUFyQjtBQUFBLHNCQUF5QzNELE1BQU0sQ0FBQ0U7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYcEIsZUFhRTtBQUFPLHFCQUFTLEVBQUVtQyx3REFBTSxDQUFDZ0IsVUFBekI7QUFBQSw2Q0FBMEM7QUFBTSx1QkFBUyxZQUFNckQsTUFBTSxDQUFDSSxJQUFQLElBQWVpQyx3REFBTSxDQUFDaUIsSUFBNUIsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGLGVBY0U7QUFDRSxxQkFBUyxZQUFLakIsd0RBQU0sQ0FBQ2tCLFVBQVosY0FBMEJ2RCxNQUFNLENBQUNJLElBQVAsSUFBZWlDLHdEQUFNLENBQUNtQixlQUFoRCxDQURYO0FBRUUsZ0JBQUksRUFBQyxNQUZQO0FBR0UsaUJBQUssRUFBRXBELElBSFQ7QUFJRSxvQkFBUSxFQUFFLGtCQUFDcUIsQ0FBRCxFQUFPO0FBQ2ZwQixxQkFBTyxDQUFDb0IsQ0FBQyxDQUFDZ0MsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZEYsRUF1QkkxRCxNQUFNLENBQUNJLElBQVAsaUJBQWU7QUFBRyxxQkFBUyxFQUFFaUMsd0RBQU0sQ0FBQ3NCLGlCQUFyQjtBQUFBLHNCQUF5QzNELE1BQU0sQ0FBQ0k7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2Qm5CLGVBeUJFO0FBQU8scUJBQVMsRUFBRWlDLHdEQUFNLENBQUNnQixVQUF6QjtBQUFBLG9EQUFpRDtBQUFNLHVCQUFTLFlBQU1yRCxNQUFNLENBQUNNLFdBQVAsSUFBc0IrQix3REFBTSxDQUFDaUIsSUFBbkMsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXpCRixlQTBCRTtBQUNFLHFCQUFTLFlBQUtqQix3REFBTSxDQUFDdUIsa0JBQVosY0FBa0M1RCxNQUFNLENBQUNNLFdBQVAsSUFBc0IrQix3REFBTSxDQUFDd0IsdUJBQS9ELENBRFg7QUFFRSxnQkFBSSxFQUFDLE1BRlA7QUFHRSxpQkFBSyxFQUFFdkQsV0FIVDtBQUlFLG9CQUFRLEVBQUUsa0JBQUNtQixDQUFELEVBQU87QUFDZmxCLDRCQUFjLENBQUNrQixDQUFDLENBQUNnQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUNEO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQkYsRUFtQ0kxRCxNQUFNLENBQUNNLFdBQVAsaUJBQXNCO0FBQUcscUJBQVMsRUFBRStCLHdEQUFNLENBQUNzQixpQkFBckI7QUFBQSxzQkFBeUMzRCxNQUFNLENBQUNNO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkMxQixlQXFDRTtBQUFPLHFCQUFTLEVBQUUrQix3REFBTSxDQUFDZ0IsVUFBekI7QUFBQSw2Q0FBMEM7QUFBTSx1QkFBUyxZQUFNckQsTUFBTSxDQUFDVSxJQUFQLElBQWUyQix3REFBTSxDQUFDaUIsSUFBNUIsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJDRixlQXNDRTtBQUFLLHFCQUFTLEVBQUVqQix3REFBTSxDQUFDeUIsT0FBdkI7QUFBQSxvQ0FDRTtBQUNFLGlCQUFHLEVBQUVsRSxRQURQO0FBRUUsdUJBQVMsWUFBS3lDLHdEQUFNLENBQUNrQixVQUFaLGNBQTBCdkQsTUFBTSxDQUFDVSxJQUFQLElBQWUyQix3REFBTSxDQUFDbUIsZUFBaEQsQ0FGWDtBQUdFLGtCQUFJLEVBQUMsTUFIUDtBQUlFLG1CQUFLLEVBQUVoRCxHQUpUO0FBS0Usd0JBQVUsRUFBRSxvQkFBQ2lCLENBQUQsRUFBTztBQUNqQkEsaUJBQUMsQ0FBQ2MsR0FBRixLQUFVLE9BQVYsS0FBc0JkLENBQUMsQ0FBQ0MsY0FBRixJQUFvQkMsWUFBWSxFQUF0RDtBQUNELGVBUEg7QUFRRSxzQkFBUSxFQUFFLGtCQUFDRixDQUFELEVBQU87QUFDZmhCLHNCQUFNLENBQUNnQixDQUFDLENBQUNnQyxNQUFGLENBQVNDLEtBQVYsQ0FBTjtBQUNEO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQWNJMUQsTUFBTSxDQUFDVSxJQUFQLGlCQUFlO0FBQUcsdUJBQVMsRUFBRTJCLHdEQUFNLENBQUNzQixpQkFBckI7QUFBQSx3QkFBeUMzRCxNQUFNLENBQUNVO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZG5CLGVBZ0JFO0FBQ0UscUJBQU8sRUFBRTtBQUFBLHVCQUFNaUIsWUFBWSxFQUFsQjtBQUFBLGVBRFg7QUFFRSx1QkFBUyxFQUFFVSx3REFBTSxDQUFDMEIsV0FGcEI7QUFBQSxxQ0FJRTtBQUNFLHlCQUFTLEVBQUUxQix3REFBTSxDQUFDMkIsTUFEcEI7QUFFRSxxQkFBSyxFQUFDLDRCQUZSO0FBR0UsdUJBQU8sRUFBQyxrQkFIVjtBQUFBLHVDQUtFO0FBQUcsMkJBQVMsRUFBQyw4QkFBYjtBQUFBLHlDQUNFO0FBQ0UsNkJBQVMsRUFBQyxRQURaO0FBRUUscUJBQUMsRUFBQyw4QkFGSjtBQUdFLDZCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWhCRixlQW1DRTtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBRTNCLHdEQUFNLENBQUM0QixhQUF2QjtBQUFBLDBCQUNHdkQsSUFBSSxJQUNIQSxJQUFJLENBQUN3RCxHQUFMLENBQVMsVUFBQzFELEdBQUQsRUFBUztBQUNoQixzQ0FDRTtBQUNFLDZCQUFTLEVBQUU2Qix3REFBTSxDQUFDN0IsR0FEcEI7QUFFRSx5QkFBSyxFQUFFQSxHQUZUO0FBR0UsMkJBQU8sRUFBRTtBQUFBLDZCQUFNdUIsZUFBZSxDQUFDdkIsR0FBRCxDQUFyQjtBQUFBLHFCQUhYO0FBQUEsNENBS0U7QUFBQSxnQ0FBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxGLGVBTUU7QUFDRSwrQkFBUyxFQUFFNkIsd0RBQU0sQ0FBQzhCLFNBRHBCO0FBRUUsMkJBQUssRUFBQyw0QkFGUjtBQUdFLDJCQUFLLEVBQUMsSUFIUjtBQUlFLDRCQUFNLEVBQUMsSUFKVDtBQUtFLDZCQUFPLEVBQUMsbUJBTFY7QUFNRSwyQkFBSyxFQUFFO0FBQ0x4Qiw0QkFBSSxFQUFFLE1BREQ7QUFFTEMsOEJBQU0sRUFBRSxTQUZIO0FBR0xDLHdDQUFnQixFQUFFLEVBSGI7QUFJTEMsbUNBQVcsRUFBRTtBQUpSLHVCQU5UO0FBQUEsOENBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFiRixlQWNFO0FBQ0UsaUNBQVMsRUFBQyxHQURaO0FBRUUseUJBQUMsRUFBQyx5QkFGSjtBQUdFLGlDQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREY7QUE2QkQsaUJBOUJEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5ERixlQW1LRTtBQUFRLG1CQUFTLEVBQUVULHdEQUFNLENBQUMrQixXQUExQjtBQUFBLGtDQUNFO0FBQVEscUJBQVMsRUFBRS9CLHdEQUFNLENBQUNnQyxZQUExQjtBQUF3QyxtQkFBTyxFQUFFOUMsZ0JBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFBUSxxQkFBUyxFQUFFYyx3REFBTSxDQUFDaUMsVUFBMUI7QUFBc0MsZ0JBQUksRUFBQyxRQUEzQztBQUFvRCxpQkFBSyxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuS0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVMRDs7R0EzUXVCN0UsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YWQyOTRhZDJhMTgxOTFkODE5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Nb2RhbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7IHNldEFkZE1vZGFsLCBmZXRjaFBvc3RzIH0pIHtcclxuICBjb25zdCB0YWdJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IGluaXRpYWxFcnJvcnMgPSB7fTtcclxuXHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKGluaXRpYWxFcnJvcnMpO1xyXG5cclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICAgIGxldCBpbml0aWFsRXJyb3JzID0ge307XHJcblxyXG4gICAgaWYodGl0bGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGluaXRpYWxFcnJvcnMudGl0bGUgPSBcIlRpdGxlIGlzIHJlcXVpcmVkXCJcclxuICAgIH0gXHJcbiAgICBpZihsaW5rLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpbml0aWFsRXJyb3JzLmxpbmsgPSBcIkxpbmsgaXMgcmVxdWlyZWRcIlxyXG4gICAgfSBcclxuICAgIGlmKGRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpbml0aWFsRXJyb3JzLmRlc2NyaXB0aW9uID0gXCJEZXNjcmlwdGlvbiBpcyByZXF1aXJlZFwiXHJcbiAgICB9IFxyXG4gICAgaWYodGFncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgaW5pdGlhbEVycm9ycy50YWdzID0gXCJBIFRhZyBpcyByZXF1aXJlZFwiXHJcbiAgICB9XHJcbiAgICBzZXRFcnJvcnMoaW5pdGlhbEVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBwb3N0TmV3VG9vbCgpIHtcclxuICAgIGF3YWl0IHZhbGlkYXRlRm9ybSgpO1xyXG4gICAgaWYoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgbGluayxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgdGFncyxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGZldGNoUG9zdHMoKTtcclxuICAgICAgaGFuZGxlQ2xvc2VNb2RhbCgpOyBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF3YWl0IHBvc3ROZXdUb29sKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0QWRkTW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0VGl0bGUoXCJcIik7XHJcbiAgICBzZXREZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIHNldExpbmsoXCJcIik7XHJcbiAgICBzZXRUYWcoXCJcIik7XHJcbiAgICBzZXRUYWdzKFtdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFRhZygpIHtcclxuICAgIGNvbnN0IHRyaW1UYWcgPSB0YWcudHJpbSgpO1xyXG4gICAgaWYgKHRyaW1UYWcpIHtcclxuICAgICAgaGFuZGxlRm9jdXMoKTtcclxuICAgICAgc2V0VGFncyhbLi4udGFncywgdHJpbVRhZ10pO1xyXG4gICAgICBzZXRUYWcoXCJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZVRhZyhlKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0YWdzLmZpbHRlcigod29yZCkgPT4gd29yZCAhPSBlKTtcclxuICAgIHNldFRhZ3MocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgdGFnSW5wdXQuY3VycmVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XHJcbiAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJBZGR9PlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI2MS40MTRcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjMTcwQzNBXCIsXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoNDVkZWcpXCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRpdGxlfT5BZGQgYSBuZXcgdG9vbDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTMuNDE0XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMy40MTVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5Ub29sIFRpdGxlIDxzcGFuIGNsYXNzTmFtZT17YCR7IGVycm9ycy50aXRsZSAmJiBzdHlsZXMuc3Bhbn1gfT4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vZGFsSW5wdXR9ICR7ZXJyb3JzLnRpdGxlICYmIHN0eWxlcy5tb2RhbElucHV0RXJyb3J9YH1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7IGVycm9ycy50aXRsZSAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEVycm9yTWVzc2FnZX0+e2Vycm9ycy50aXRsZX08L3A+fVxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PkxpbmsgPHNwYW4gY2xhc3NOYW1lPXtgJHsgZXJyb3JzLmxpbmsgJiYgc3R5bGVzLnNwYW59YH0+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbElucHV0fSAke2Vycm9ycy5saW5rICYmIHN0eWxlcy5tb2RhbElucHV0RXJyb3J9YH1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2xpbmt9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgeyBlcnJvcnMubGluayAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEVycm9yTWVzc2FnZX0+e2Vycm9ycy5saW5rfTwvcD59XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+RGVzY3JpcHRpb24gPHNwYW4gY2xhc3NOYW1lPXtgJHsgZXJyb3JzLmRlc2NyaXB0aW9uICYmIHN0eWxlcy5zcGFufWB9Pio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxJbnB1dFRleHRBcmVhfSAke2Vycm9ycy5kZXNjcmlwdGlvbiAmJiBzdHlsZXMubW9kYWxJbnB1dFRleHRBcmVhRXJyb3J9YH1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7IGVycm9ycy5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEVycm9yTWVzc2FnZX0+e2Vycm9ycy5kZXNjcmlwdGlvbn08L3A+fVxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PlRhZ3MgPHNwYW4gY2xhc3NOYW1lPXtgJHsgZXJyb3JzLnRhZ3MgJiYgc3R5bGVzLnNwYW59YH0+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ3N9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVmPXt0YWdJbnB1dH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vZGFsSW5wdXR9ICR7ZXJyb3JzLnRhZ3MgJiYgc3R5bGVzLm1vZGFsSW5wdXRFcnJvcn1gfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUua2V5ID09PSBcIkVudGVyXCIgJiYgKGUucHJldmVudERlZmF1bHQoKSwgaGFuZGxlQWRkVGFnKCkpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRUYWcoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICB7IGVycm9ycy50YWdzICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRXJyb3JNZXNzYWdlfT57ZXJyb3JzLnRhZ3N9PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVGFnKCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWdGaWVsZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ31cclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRUYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3NDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dGFncyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3MubWFwKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVUYWcodGFnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0YWd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZVRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjOGY4YTliXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRm9vdGVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jYW5jZWxCdXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zYXZlQnV0dG9ufSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cclxuICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==