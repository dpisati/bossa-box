webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.js");




var _jsxFileName = "C:\\Users\\dpisa\\Desktop\\bossa-box\\frontend\\pages\\index.js",
    _s = $RefreshSig$();






function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      searchForTags = _useState3[0],
      setSearchForTags = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      link = _useState5[0],
      setLink = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      description = _useState6[0],
      setDescription = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      tags = _useState7[0],
      setTags = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      addModal = _useState8[0],
      setAddModal = _useState8[1];

  function fetchPosts() {
    return _fetchPosts.apply(this, arguments);
  }

  function _fetchPosts() {
    _fetchPosts = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("http://localhost:3000/tools");

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              setPosts(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchPosts.apply(this, arguments);
  }

  function fetchFilteredPosts() {
    return _fetchFilteredPosts.apply(this, arguments);
  }

  function _fetchFilteredPosts() {
    _fetchFilteredPosts = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var res, data, _res, _data;

      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (searchForTags) {
                _context2.next = 10;
                break;
              }

              _context2.next = 3;
              return fetch("http://localhost:3000/tools?q=".concat(searchInput));

            case 3:
              res = _context2.sent;
              _context2.next = 6;
              return res.json();

            case 6:
              data = _context2.sent;
              setPosts(data);
              _context2.next = 17;
              break;

            case 10:
              _context2.next = 12;
              return fetch("http://localhost:3000/tools?tags_like=".concat(searchInput));

            case 12:
              _res = _context2.sent;
              _context2.next = 15;
              return _res.json();

            case 15:
              _data = _context2.sent;
              setPosts(_data);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchFilteredPosts.apply(this, arguments);
  }

  var handleOnChange = function handleOnChange(event) {
    setSearchInput(event);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log('A name was submitted: ' + {
      event: event
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var timeoutId = setTimeout(function () {
      return fetchFilteredPosts();
    }, 500);
    return function () {
      return clearTimeout(timeoutId);
    };
  }, [searchInput, searchForTags]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    fetchPosts();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.header,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerLeft,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("svg", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.searchIcon,
            xmlns: "http://www.w3.org/2000/svg",
            width: "47.707",
            height: "47.707",
            viewBox: "0 0 47.707 47.707",
            style: {
              fill: "none",
              stroke: "#170c3a",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
              width: "20px",
              height: "20px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("defs", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 256
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 307
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 386
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 269
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.searchInput,
            type: "text",
            placeholder: "search",
            value: searchInput,
            onChange: function onChange(e) {
              return handleOnChange(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.addButton,
          onClick: function onClick() {
            return setAddModal(true);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "61.414",
            height: "61.42",
            viewBox: "0 0 61.414 61.42",
            style: {
              fill: "none",
              stroke: "#FFFFFF",
              strokeMiterlimit: 10,
              strokeWidth: "10px",
              transform: "rotate(45deg)",
              width: "15px",
              height: "15px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("defs", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 253
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 310
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 266
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
          content: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, _this);
      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.noPosts,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: "/notFound.png",
          alt: "Not Found",
          width: "370",
          height: "300"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.notFound,
          children: "Ooops, no posts found..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }, this), addModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
          onSubmit: handleSubmit,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalBody,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalHeader,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalTitle,
                children: "Add a new tool"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("svg", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.closeModal,
                onClick: function onClick() {
                  return setAddModal(false);
                },
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
                  lineNumber: 108,
                  columnNumber: 267
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                  className: "a",
                  d: "M32,20,20,32m12,0L20,20",
                  transform: "translate(-19.292 -19.293)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 280
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalContent,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalLabel,
                children: "Tool Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalInput,
                type: "text",
                value: name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalLabel,
                children: "Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalInput,
                type: "text",
                value: link
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalLabel,
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("textarea", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalInputTextArea,
                type: "text",
                value: description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalLabel,
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalInput,
                type: "text",
                value: tags
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalFooter,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.cancelButton,
                onClick: function onClick() {
                  return setAddModal(false);
                },
                children: "Cancel"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.saveButton,
                type: "submit",
                value: "Submit",
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_s(Home, "D6S150+nwVWiG1GcOOg1ub+67aU=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hGb3JUYWdzIiwic2V0U2VhcmNoRm9yVGFncyIsIm5hbWUiLCJzZXROYW1lIiwibGluayIsInNldExpbmsiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidGFncyIsInNldFRhZ3MiLCJhZGRNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJmZXRjaEZpbHRlcmVkUG9zdHMiLCJoYW5kbGVPbkNoYW5nZSIsImV2ZW50IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImhlYWRlciIsImhlYWRlckxlZnQiLCJzZWFyY2hJY29uIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoTGFiZWwiLCJhZGRCdXR0b24iLCJ0cmFuc2Zvcm0iLCJhZGRMYWJlbCIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJpZCIsIm5vUG9zdHMiLCJub3RGb3VuZCIsIm1vZGFsIiwibW9kYWxCb2R5IiwibW9kYWxIZWFkZXIiLCJtb2RhbFRpdGxlIiwiY2xvc2VNb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsTGFiZWwiLCJtb2RhbElucHV0IiwibW9kYWxJbnB1dFRleHRBcmVhIiwibW9kYWxGb290ZXIiLCJjYW5jZWxCdXR0b24iLCJzYXZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7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LENBQUNpQyxVQUF6QjtBQUFxQyxvQkFBSSxFQUFDLE1BQTFDO0FBQWlELHFCQUFLLEVBQUVyRDtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixlQWdCRTtBQUFRLHVCQUFTLEVBQUVvQiw4REFBTSxDQUFDbUMsV0FBMUI7QUFBQSxzQ0FDRTtBQUFRLHlCQUFTLEVBQUVuQyw4REFBTSxDQUFDb0MsWUFBMUI7QUFBd0MsdUJBQU8sRUFBRTtBQUFBLHlCQUFNckQsV0FBVyxDQUFDLEtBQUQsQ0FBakI7QUFBQSxpQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFRLHlCQUFTLEVBQUVpQiw4REFBTSxDQUFDcUMsVUFBMUI7QUFBc0Msb0JBQUksRUFBQyxRQUEzQztBQUFvRCxxQkFBSyxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0RUQ7O0dBL0h1QnZFLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzU2NjJhZDFkMGFhNTRmNDU3MGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZWFyY2hGb3JUYWdzLCBzZXRTZWFyY2hGb3JUYWdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKCcnKTtcbiAgXG4gIFxuICBjb25zdCBbYWRkTW9kYWwsIHNldEFkZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFBvc3RzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHNldFBvc3RzKGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hGaWx0ZXJlZFBvc3RzKCkge1xuICAgIGlmKCFzZWFyY2hGb3JUYWdzKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzP3E9JHtzZWFyY2hJbnB1dH1gKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0UG9zdHMoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHM/dGFnc19saWtlPSR7c2VhcmNoSW5wdXR9YCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldFBvc3RzKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ0EgbmFtZSB3YXMgc3VibWl0dGVkOiAnICsge2V2ZW50fSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gXG4gICAgICBmZXRjaEZpbHRlcmVkUG9zdHMoKVxuICAgICAgLCA1MDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgfSwgW3NlYXJjaElucHV0LCBzZWFyY2hGb3JUYWdzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFBvc3RzKCk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZSA+VlVUVFI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlZVVFRSPC9oMT5cbiAgICAgICAgPGgyPlZlcnkgVXNlZnVsIFRvb2xzIHRvIFJlbWVtYmVyPC9oMj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxlZnR9PlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJY29ufSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0Ny43MDdcIiBoZWlnaHQ9XCI0Ny43MDdcIiB2aWV3Qm94PVwiMCAwIDQ3LjcwNyA0Ny43MDdcIiBzdHlsZT17e2ZpbGw6XCJub25lXCIsIHN0cm9rZTogXCIjMTcwYzNhXCIsIHN0cm9rZU1pdGVybGltaXQ6IDEwLCBzdHJva2VXaWR0aDogXCIycHhcIiwgd2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwifX0+PGRlZnM+PC9kZWZzPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTI3MiAtMTc5OSlcIj48cGF0aCBjbGFzc05hbWU9XCJhXCIgZD1cIk0zOS4wNDksMzkuMDQ5LDU2LDU2XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyNjMgMTc5MClcIi8+PGNpcmNsZSBjbGFzc05hbWU9XCJhXCIgY3g9XCIxN1wiIGN5PVwiMTdcIiByPVwiMTdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI3MyAxODAwKVwiLz48L2c+PC9zdmc+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIiB2YWx1ZT17c2VhcmNoSW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlT25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPXtzZWFyY2hGb3JUYWdzfSBvbkNoYW5nZT17KCkgPT4gc2V0U2VhcmNoRm9yVGFncyghc2VhcmNoRm9yVGFncyl9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hMYWJlbH0+c2VhcmNoIGluIHRhZ3Mgb25seTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259IG9uQ2xpY2s9eygpID0+IHNldEFkZE1vZGFsKHRydWUpfT5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNjEuNDE0XCIgaGVpZ2h0PVwiNjEuNDJcIiB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiIHN0eWxlPXt7ZmlsbDpcIm5vbmVcIiwgc3Ryb2tlOiBcIiNGRkZGRkZcIiwgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsIHN0cm9rZVdpZHRoOiBcIjEwcHhcIiwgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIiwgd2lkdGg6IFwiMTVweFwiLCBoZWlnaHQ6IFwiMTVweFwifX0+PGRlZnM+PC9kZWZzPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj48cGF0aCBjbGFzc05hbWU9XCJhXCIgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIi8+PC9nPjwvc3ZnPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmFkZExhYmVsfT5BZGQ8L2xhYmVsPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7ICFwb3N0cy5sZW5ndGggPT0gMCBcbiAgICAgICAgXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICBwb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtwb3N0LmlkfSBjb250ZW50PXtwb3N0fS8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pKSBcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9Qb3N0c30+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbm90Rm91bmQucG5nXCIgYWx0PVwiTm90IEZvdW5kXCIgd2lkdGg9XCIzNzBcIiBoZWlnaHQ9XCIzMDBcIiAvPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubm90Rm91bmR9Pk9vb3BzLCBubyBwb3N0cyBmb3VuZC4uLjwvaDI+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIFxuICAgICAgICB9XG5cblxuICAgICAgICB7IGFkZE1vZGFsICYmICggXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGl0bGV9PkFkZCBhIG5ldyB0b29sPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH0gb25DbGljaz17KCkgPT4gc2V0QWRkTW9kYWwoZmFsc2UpfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMy40MTRcIiBoZWlnaHQ9XCIxMy40MTVcIiB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIiBzdHlsZT17e2ZpbGw6IFwibm9uZVwiLCBzdHJva2U6IFwiIzhmOGE5YlwiLCBzdHJva2VNaXRlcmxpbWl0OiAxMCwgc3Ryb2tlV2lkdGg6IFwiMnB4XCJ9fT48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3NOYW1lPVwiYVwiIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5Ub29sIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25hbWV9Lz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5MaW5rPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtsaW5rfS8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXRUZXh0QXJlYX0gdHlwZT1cInRleHRcIiB2YWx1ZT17ZGVzY3JpcHRpb259Lz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5UYWdzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXt0YWdzfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRm9vdGVyfT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRBZGRNb2RhbChmYWxzZSl9PkNhbmNlbDwvYnV0dG9uPiAgXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNhdmVCdXR0b259IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlNhdmU8L2J1dHRvbj4gIFxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPiAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG5cbiAgICAgICAgXG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=