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
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.js");





var _jsxFileName = "C:\\Users\\dpisa\\Desktop\\bossa-box\\frontend\\pages\\index.js",
    _s = $RefreshSig$();






function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      searchForTags = _useState3[0],
      setSearchForTags = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      link = _useState5[0],
      setLink = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      description = _useState6[0],
      setDescription = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      tag = _useState7[0],
      setTag = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      tags = _useState8[0],
      setTags = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      addModal = _useState9[0],
      setAddModal = _useState9[1];

  function fetchPosts() {
    return _fetchPosts.apply(this, arguments);
  }

  function _fetchPosts() {
    _fetchPosts = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
    _fetchFilteredPosts = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
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

  function handleAddTag() {
    setTags([].concat(Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(tags), [tag]));
    setTag('');
  }

  var handleOnChange = function handleOnChange(event) {
    setSearchInput(event);
  };

  function handleSubmit(event) {
    console.log("\n      name ".concat(name, ",\n      link ").concat(link, ",\n      desc ").concat(description, ",\n      tags ").concat(tags, "\n    "));
    event.preventDefault();
    console.log('A name was submitted: ' + {
      event: event
    });
  }

  function handleCloseModal() {
    setAddModal(false);
    setTags([]);
  }

  function handleRemoveTag() {}

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var timeoutId = setTimeout(function () {
      return fetchFilteredPosts();
    }, 500);
    return function () {
      return clearTimeout(timeoutId);
    };
  }, [searchInput, searchForTags]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    fetchPosts();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("title", {
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.header,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.headerLeft,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchIcon,
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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("defs", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 256
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 307
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 386
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 269
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchInput,
            type: "text",
            placeholder: "search",
            value: searchInput,
            onChange: function onChange(e) {
              return handleOnChange(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addButton,
          onClick: function onClick() {
            return setAddModal(true);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("defs", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 253
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 310
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 266
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          content: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }, _this);
      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.noPosts,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          src: "/notFound.png",
          alt: "Not Found",
          width: "370",
          height: "300"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.notFound,
          children: "Ooops, no posts found..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }, this), addModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
          onSubmit: handleSubmit,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalBody,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalHeader,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalTitle,
                children: "Add a new tool"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.closeModal,
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
                  lineNumber: 129,
                  columnNumber: 259
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M32,20,20,32m12,0L20,20",
                  transform: "translate(-19.292 -19.293)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 272
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalContent,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tool Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalInput,
                type: "text",
                value: name,
                onChange: function onChange(e) {
                  setName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalInput,
                type: "text",
                value: link,
                onChange: function onChange(e) {
                  setLink(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("textarea", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalInputTextArea,
                type: "text",
                value: description,
                onChange: function onChange(e) {
                  setDescription(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addTags,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalInput,
                  type: "text",
                  value: tag,
                  onChange: function onChange(e) {
                    setTag(e.target.value);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
                  onClick: function onClick() {
                    return handleAddTag();
                  },
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addTag,
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
                      lineNumber: 141,
                      columnNumber: 189
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 145
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.tagsContainer,
                    children: tags && tags.map(function (tag) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.tag,
                        value: tag,
                        onClick: function onClick(e) {
                          return handleRemoveTag(e.target.value);
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                          children: tag
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 147,
                          columnNumber: 31
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
                          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.removeTag,
                          onClick: function onClick() {
                            return setAddModal(false);
                          },
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
                            lineNumber: 148,
                            columnNumber: 270
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                            className: "a",
                            d: "M32,20,20,32m12,0L20,20",
                            transform: "translate(-19.292 -19.293)"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 148,
                            columnNumber: 283
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 148,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalFooter,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cancelButton,
                onClick: handleCloseModal,
                children: "Cancel"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.saveButton,
                type: "submit",
                value: "Submit",
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

_s(Home, "P1cn9PcyTAbottxZCfKGz9oKG1k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hGb3JUYWdzIiwic2V0U2VhcmNoRm9yVGFncyIsIm5hbWUiLCJzZXROYW1lIiwibGluayIsInNldExpbmsiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidGFnIiwic2V0VGFnIiwidGFncyIsInNldFRhZ3MiLCJhZGRNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJmZXRjaEZpbHRlcmVkUG9zdHMiLCJoYW5kbGVBZGRUYWciLCJoYW5kbGVPbkNoYW5nZSIsImV2ZW50IiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZVJlbW92ZVRhZyIsInVzZUVmZmVjdCIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJoZWFkZXIiLCJoZWFkZXJMZWZ0Iiwic2VhcmNoSWNvbiIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaExhYmVsIiwiYWRkQnV0dG9uIiwidHJhbnNmb3JtIiwiYWRkTGFiZWwiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiaWQiLCJub1Bvc3RzIiwibm90Rm91bmQiLCJtb2RhbCIsIm1vZGFsQm9keSIsIm1vZGFsSGVhZGVyIiwibW9kYWxUaXRsZSIsImNsb3NlTW9kYWwiLCJtb2RhbENvbnRlbnQiLCJtb2RhbExhYmVsIiwibW9kYWxJbnB1dCIsIm1vZGFsSW5wdXRUZXh0QXJlYSIsImFkZFRhZ3MiLCJhZGRUYWciLCJ0YWdzQ29udGFpbmVyIiwicmVtb3ZlVGFnIiwibW9kYWxGb290ZXIiLCJjYW5jZWxCdXR0b24iLCJzYXZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFdEJHLFdBRnNCO0FBQUEsTUFFVEMsY0FGUzs7QUFBQSxtQkFHYUosc0RBQVEsQ0FBQyxLQUFELENBSHJCO0FBQUEsTUFHdEJLLGFBSHNCO0FBQUEsTUFHUEMsZ0JBSE87O0FBQUEsbUJBS0xOLHNEQUFRLENBQUMsRUFBRCxDQUxIO0FBQUEsTUFLdEJPLElBTHNCO0FBQUEsTUFLaEJDLE9BTGdCOztBQUFBLG1CQU1MUixzREFBUSxDQUFDLEVBQUQsQ0FOSDtBQUFBLE1BTXRCUyxJQU5zQjtBQUFBLE1BTWhCQyxPQU5nQjs7QUFBQSxtQkFPU1Ysc0RBQVEsQ0FBQyxFQUFELENBUGpCO0FBQUEsTUFPdEJXLFdBUHNCO0FBQUEsTUFPVEMsY0FQUzs7QUFBQSxtQkFRUFosc0RBQVEsQ0FBQyxFQUFELENBUkQ7QUFBQSxNQVF0QmEsR0FSc0I7QUFBQSxNQVFqQkMsTUFSaUI7O0FBQUEsbUJBU0xkLHNEQUFRLENBQUMsRUFBRCxDQVRIO0FBQUEsTUFTdEJlLElBVHNCO0FBQUEsTUFTaEJDLE9BVGdCOztBQUFBLG1CQVlHaEIsc0RBQVEsQ0FBQyxLQUFELENBWlg7QUFBQSxNQVl0QmlCLFFBWnNCO0FBQUEsTUFZWkMsV0FaWTs7QUFBQSxXQWNkQyxVQWRjO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZTQWM3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNvQkMsS0FBSyxDQUFDLDZCQUFELENBRHpCOztBQUFBO0FBQ1FDLGlCQURSO0FBQUE7QUFBQSxxQkFFcUJBLEdBQUcsQ0FBQ0MsSUFBSixFQUZyQjs7QUFBQTtBQUVRQyxrQkFGUjtBQUdFckIsc0JBQVEsQ0FBQ3FCLElBQUQsQ0FBUjs7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWQ2QjtBQUFBO0FBQUE7O0FBQUEsV0FvQmRDLGtCQXBCYztBQUFBO0FBQUE7O0FBQUE7QUFBQSxxVEFvQjdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDTW5CLGFBRE47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFFc0JlLEtBQUsseUNBQWtDakIsV0FBbEMsRUFGM0I7O0FBQUE7QUFFVWtCLGlCQUZWO0FBQUE7QUFBQSxxQkFHdUJBLEdBQUcsQ0FBQ0MsSUFBSixFQUh2Qjs7QUFBQTtBQUdVQyxrQkFIVjtBQUlJckIsc0JBQVEsQ0FBQ3FCLElBQUQsQ0FBUjtBQUpKO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQU1zQkgsS0FBSyxpREFBMENqQixXQUExQyxFQU4zQjs7QUFBQTtBQU1Va0Isa0JBTlY7QUFBQTtBQUFBLHFCQU91QkEsSUFBRyxDQUFDQyxJQUFKLEVBUHZCOztBQUFBO0FBT1VDLG1CQVBWO0FBUUlyQixzQkFBUSxDQUFDcUIsS0FBRCxDQUFSOztBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBcEI2QjtBQUFBO0FBQUE7O0FBZ0M3QixXQUFTRSxZQUFULEdBQXdCO0FBQ3RCVCxXQUFPLDZKQUFLRCxJQUFMLElBQVdGLEdBQVgsR0FBUDtBQUNBQyxVQUFNLENBQUMsRUFBRCxDQUFOO0FBQ0Q7O0FBRUQsTUFBTVksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDaEN2QixrQkFBYyxDQUFDdUIsS0FBRCxDQUFkO0FBQ0QsR0FGRDs7QUFJQSxXQUFTQyxZQUFULENBQXNCRCxLQUF0QixFQUE2QjtBQUMzQkUsV0FBTyxDQUFDQyxHQUFSLHdCQUNTdkIsSUFEVCwyQkFFU0UsSUFGVCwyQkFHU0UsV0FIVCwyQkFJU0ksSUFKVDtBQU1BWSxTQUFLLENBQUNJLGNBQU47QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQTJCO0FBQUNILFdBQUssRUFBTEE7QUFBRCxLQUF2QztBQUNEOztBQUVELFdBQVNLLGdCQUFULEdBQTRCO0FBQzFCZCxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FGLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDRDs7QUFFRCxXQUFTaUIsZUFBVCxHQUEyQixDQUUxQjs7QUFFREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsU0FBUyxHQUFHQyxVQUFVLENBQUM7QUFBQSxhQUMzQlosa0JBQWtCLEVBRFM7QUFBQSxLQUFELEVBRXhCLEdBRndCLENBQTVCO0FBR0EsV0FBTztBQUFBLGFBQU1hLFlBQVksQ0FBQ0YsU0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDRCxHQUxRLEVBS04sQ0FBQ2hDLFdBQUQsRUFBY0UsYUFBZCxDQUxNLENBQVQ7QUFPQTZCLHlEQUFTLENBQUMsWUFBTTtBQUNkZixjQUFVO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFbUIsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsSUFBeEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVGLDhEQUFNLENBQUNHLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBSUU7QUFBSyxpQkFBUyxFQUFFSCw4REFBTSxDQUFDSSxNQUF2QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUosOERBQU0sQ0FBQ0ssVUFBdkI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVMLDhEQUFNLENBQUNNLFVBQXZCO0FBQW1DLGlCQUFLLEVBQUMsNEJBQXpDO0FBQXNFLGlCQUFLLEVBQUMsUUFBNUU7QUFBcUYsa0JBQU0sRUFBQyxRQUE1RjtBQUFxRyxtQkFBTyxFQUFDLG1CQUE3RztBQUFpSSxpQkFBSyxFQUFFO0FBQUNDLGtCQUFJLEVBQUMsTUFBTjtBQUFjQyxvQkFBTSxFQUFFLFNBQXRCO0FBQWlDQyw4QkFBZ0IsRUFBRSxFQUFuRDtBQUF1REMseUJBQVcsRUFBRSxLQUFwRTtBQUEyRUMsbUJBQUssRUFBRSxNQUFsRjtBQUEwRkMsb0JBQU0sRUFBRTtBQUFsRyxhQUF4STtBQUFBLG9DQUFtUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFuUCxlQUFnUTtBQUFHLHVCQUFTLEVBQUMsd0JBQWI7QUFBQSxzQ0FBc0M7QUFBTSx5QkFBUyxFQUFDLEdBQWhCO0FBQW9CLGlCQUFDLEVBQUMsc0JBQXRCO0FBQTZDLHlCQUFTLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBdEMsZUFBcUg7QUFBUSx5QkFBUyxFQUFDLEdBQWxCO0FBQXNCLGtCQUFFLEVBQUMsSUFBekI7QUFBOEIsa0JBQUUsRUFBQyxJQUFqQztBQUFzQyxpQkFBQyxFQUFDLElBQXhDO0FBQTZDLHlCQUFTLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBckg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFoUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFPLHFCQUFTLEVBQUVaLDhEQUFNLENBQUNuQyxXQUF6QjtBQUFzQyxnQkFBSSxFQUFDLE1BQTNDO0FBQWtELHVCQUFXLEVBQUMsUUFBOUQ7QUFBdUUsaUJBQUssRUFBRUEsV0FBOUU7QUFBMkYsb0JBQVEsRUFBRSxrQkFBQ2dELENBQUQ7QUFBQSxxQkFBT3pCLGNBQWMsQ0FBQ3lCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXJCO0FBQUE7QUFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQU8sZ0JBQUksRUFBQyxVQUFaO0FBQXVCLGlCQUFLLEVBQUVoRCxhQUE5QjtBQUE2QyxvQkFBUSxFQUFFO0FBQUEscUJBQU1DLGdCQUFnQixDQUFDLENBQUNELGFBQUYsQ0FBdEI7QUFBQTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUU7QUFBTyxxQkFBUyxFQUFFaUMsOERBQU0sQ0FBQ2dCLFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFO0FBQVEsbUJBQVMsRUFBRWhCLDhEQUFNLENBQUNpQixTQUExQjtBQUFxQyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1yQyxXQUFXLENBQUMsSUFBRCxDQUFqQjtBQUFBLFdBQTlDO0FBQUEsa0NBQ0U7QUFBSyxpQkFBSyxFQUFDLDRCQUFYO0FBQXdDLGlCQUFLLEVBQUMsUUFBOUM7QUFBdUQsa0JBQU0sRUFBQyxPQUE5RDtBQUFzRSxtQkFBTyxFQUFDLGtCQUE5RTtBQUFpRyxpQkFBSyxFQUFFO0FBQUMyQixrQkFBSSxFQUFDLE1BQU47QUFBY0Msb0JBQU0sRUFBRSxTQUF0QjtBQUFpQ0MsOEJBQWdCLEVBQUUsRUFBbkQ7QUFBdURDLHlCQUFXLEVBQUUsTUFBcEU7QUFBNEVRLHVCQUFTLEVBQUUsZUFBdkY7QUFBd0dQLG1CQUFLLEVBQUUsTUFBL0c7QUFBdUhDLG9CQUFNLEVBQUU7QUFBL0gsYUFBeEc7QUFBQSxvQ0FBZ1A7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBaFAsZUFBNlA7QUFBRyx1QkFBUyxFQUFDLDhCQUFiO0FBQUEscUNBQTRDO0FBQU0seUJBQVMsRUFBQyxHQUFoQjtBQUFvQixpQkFBQyxFQUFDLDhCQUF0QjtBQUFxRCx5QkFBUyxFQUFDO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBN1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBTyxxQkFBUyxFQUFFWiw4REFBTSxDQUFDbUIsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLEVBbUJJLENBQUN4RCxLQUFLLENBQUN5RCxNQUFQLElBQWlCLENBQWpCLEdBR0V6RCxLQUFLLENBQUMwRCxHQUFOLENBQVUsVUFBQUMsSUFBSSxFQUFJO0FBQ2hCLDRCQUNFLHFFQUFDLHdEQUFEO0FBQW9CLGlCQUFPLEVBQUVBO0FBQTdCLFdBQVdBLElBQUksQ0FBQ0MsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUdELE9BSkQsQ0FIRixnQkFTRTtBQUFLLGlCQUFTLEVBQUV2Qiw4REFBTSxDQUFDd0IsT0FBdkI7QUFBQSxnQ0FDRSxxRUFBQyxpREFBRDtBQUFPLGFBQUcsRUFBQyxlQUFYO0FBQTJCLGFBQUcsRUFBQyxXQUEvQjtBQUEyQyxlQUFLLEVBQUMsS0FBakQ7QUFBdUQsZ0JBQU0sRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFFeEIsOERBQU0sQ0FBQ3lCLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCTixFQW9DSTlDLFFBQVEsaUJBQ1I7QUFBSyxpQkFBUyxFQUFFcUIsOERBQU0sQ0FBQzBCLEtBQXZCO0FBQUEsK0JBQ0U7QUFBTSxrQkFBUSxFQUFFcEMsWUFBaEI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVVLDhEQUFNLENBQUMyQixTQUF2QjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBRTNCLDhEQUFNLENBQUM0QixXQUF2QjtBQUFBLHNDQUNFO0FBQUkseUJBQVMsRUFBRTVCLDhEQUFNLENBQUM2QixVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUsseUJBQVMsRUFBRTdCLDhEQUFNLENBQUM4QixVQUF2QjtBQUFtQyx1QkFBTyxFQUFFcEMsZ0JBQTVDO0FBQThELHFCQUFLLEVBQUMsNEJBQXBFO0FBQWlHLHFCQUFLLEVBQUMsUUFBdkc7QUFBZ0gsc0JBQU0sRUFBQyxRQUF2SDtBQUFnSSx1QkFBTyxFQUFDLG1CQUF4STtBQUE0SixxQkFBSyxFQUFFO0FBQUNhLHNCQUFJLEVBQUUsTUFBUDtBQUFlQyx3QkFBTSxFQUFFLFNBQXZCO0FBQWtDQyxrQ0FBZ0IsRUFBRSxFQUFwRDtBQUF3REMsNkJBQVcsRUFBRTtBQUFyRSxpQkFBbks7QUFBQSx3Q0FBZ1A7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBaFAsZUFBNlA7QUFBTSwyQkFBUyxFQUFDLEdBQWhCO0FBQW9CLG1CQUFDLEVBQUMseUJBQXRCO0FBQWdELDJCQUFTLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBN1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUtFO0FBQUssdUJBQVMsRUFBRVYsOERBQU0sQ0FBQytCLFlBQXZCO0FBQUEsc0NBQ0U7QUFBTyx5QkFBUyxFQUFFL0IsOERBQU0sQ0FBQ2dDLFVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBTyx5QkFBUyxFQUFFaEMsOERBQU0sQ0FBQ2lDLFVBQXpCO0FBQXFDLG9CQUFJLEVBQUMsTUFBMUM7QUFBaUQscUJBQUssRUFBRWhFLElBQXhEO0FBQThELHdCQUFRLEVBQUUsa0JBQUM0QyxDQUFELEVBQU87QUFBQzNDLHlCQUFPLENBQUMyQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQXdCO0FBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsZUFHRTtBQUFPLHlCQUFTLEVBQUVmLDhEQUFNLENBQUNnQyxVQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRixlQUlFO0FBQU8seUJBQVMsRUFBRWhDLDhEQUFNLENBQUNpQyxVQUF6QjtBQUFxQyxvQkFBSSxFQUFDLE1BQTFDO0FBQWlELHFCQUFLLEVBQUU5RCxJQUF4RDtBQUE4RCx3QkFBUSxFQUFFLGtCQUFDMEMsQ0FBRCxFQUFPO0FBQUN6Qyx5QkFBTyxDQUFDeUMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUF3QjtBQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLGVBS0U7QUFBTyx5QkFBUyxFQUFFZiw4REFBTSxDQUFDZ0MsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEYsZUFNRTtBQUFVLHlCQUFTLEVBQUVoQyw4REFBTSxDQUFDa0Msa0JBQTVCO0FBQWdELG9CQUFJLEVBQUMsTUFBckQ7QUFBNEQscUJBQUssRUFBRTdELFdBQW5FO0FBQWdGLHdCQUFRLEVBQUUsa0JBQUN3QyxDQUFELEVBQU87QUFBQ3ZDLGdDQUFjLENBQUN1QyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQStCO0FBQWpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsZUFPRTtBQUFPLHlCQUFTLEVBQUVmLDhEQUFNLENBQUNnQyxVQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQRixlQVFFO0FBQUsseUJBQVMsRUFBRWhDLDhEQUFNLENBQUNtQyxPQUF2QjtBQUFBLHdDQUNFO0FBQU8sMkJBQVMsRUFBRW5DLDhEQUFNLENBQUNpQyxVQUF6QjtBQUFxQyxzQkFBSSxFQUFDLE1BQTFDO0FBQWlELHVCQUFLLEVBQUUxRCxHQUF4RDtBQUE2RCwwQkFBUSxFQUFFLGtCQUFDc0MsQ0FBRCxFQUFPO0FBQUNyQywwQkFBTSxDQUFDcUMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBTjtBQUF1QjtBQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUU7QUFBSyx5QkFBTyxFQUFFO0FBQUEsMkJBQU01QixZQUFZLEVBQWxCO0FBQUEsbUJBQWQ7QUFBb0MsMkJBQVMsRUFBRWEsOERBQU0sQ0FBQ29DLE1BQXREO0FBQThELHVCQUFLLEVBQUMsNEJBQXBFO0FBQWlHLHlCQUFPLEVBQUMsa0JBQXpHO0FBQUEseUNBQTRIO0FBQUcsNkJBQVMsRUFBQyw4QkFBYjtBQUFBLDJDQUE0QztBQUFNLCtCQUFTLEVBQUMsUUFBaEI7QUFBeUIsdUJBQUMsRUFBQyw4QkFBM0I7QUFBMEQsK0JBQVMsRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUg7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixlQUdFO0FBQUEseUNBQ0E7QUFBSyw2QkFBUyxFQUFFcEMsOERBQU0sQ0FBQ3FDLGFBQXZCO0FBQUEsOEJBQ0c1RCxJQUFJLElBQUlBLElBQUksQ0FBQzRDLEdBQUwsQ0FBUyxVQUFBOUMsR0FBRyxFQUFJO0FBQ3ZCLDBDQUNJO0FBQUssaUNBQVMsRUFBRXlCLDhEQUFNLENBQUN6QixHQUF2QjtBQUE0Qiw2QkFBSyxFQUFFQSxHQUFuQztBQUF3QywrQkFBTyxFQUFFLGlCQUFDc0MsQ0FBRDtBQUFBLGlDQUFPbEIsZUFBZSxDQUFDa0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBdEI7QUFBQSx5QkFBakQ7QUFBQSxnREFDRTtBQUFBLG9DQUFJeEM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLGVBRUU7QUFBSyxtQ0FBUyxFQUFFeUIsOERBQU0sQ0FBQ3NDLFNBQXZCO0FBQWtDLGlDQUFPLEVBQUU7QUFBQSxtQ0FBTTFELFdBQVcsQ0FBQyxLQUFELENBQWpCO0FBQUEsMkJBQTNDO0FBQXFFLCtCQUFLLEVBQUMsNEJBQTNFO0FBQXdHLCtCQUFLLEVBQUMsSUFBOUc7QUFBbUgsZ0NBQU0sRUFBQyxJQUExSDtBQUErSCxpQ0FBTyxFQUFDLG1CQUF2STtBQUEySiwrQkFBSyxFQUFFO0FBQUMyQixnQ0FBSSxFQUFFLE1BQVA7QUFBZUMsa0NBQU0sRUFBRSxTQUF2QjtBQUFrQ0MsNENBQWdCLEVBQUUsRUFBcEQ7QUFBd0RDLHVDQUFXLEVBQUU7QUFBckUsMkJBQWxLO0FBQUEsa0RBQStPO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQS9PLGVBQTRQO0FBQU0scUNBQVMsRUFBQyxHQUFoQjtBQUFvQiw2QkFBQyxFQUFDLHlCQUF0QjtBQUFnRCxxQ0FBUyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQTVQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREo7QUFNQyxxQkFQTTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEYsZUErQkU7QUFBUSx1QkFBUyxFQUFFViw4REFBTSxDQUFDdUMsV0FBMUI7QUFBQSxzQ0FDRTtBQUFRLHlCQUFTLEVBQUV2Qyw4REFBTSxDQUFDd0MsWUFBMUI7QUFBd0MsdUJBQU8sRUFBRTlDLGdCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQVEseUJBQVMsRUFBRU0sOERBQU0sQ0FBQ3lDLFVBQTFCO0FBQXNDLG9CQUFJLEVBQUMsUUFBM0M7QUFBb0QscUJBQUssRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkZEOztHQW5LdUJoRixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE2OWFmOWYxNDg3MzViYWMwMmU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoRm9yVGFncywgc2V0U2VhcmNoRm9yVGFnc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XG4gIFxuICBcbiAgY29uc3QgW2FkZE1vZGFsLCBzZXRBZGRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQb3N0cygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRQb3N0cyhkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRmlsdGVyZWRQb3N0cygpIHtcbiAgICBpZighc2VhcmNoRm9yVGFncykge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz9xPSR7c2VhcmNoSW5wdXR9YCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldFBvc3RzKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzP3RhZ3NfbGlrZT0ke3NlYXJjaElucHV0fWApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBzZXRQb3N0cyhkYXRhKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBZGRUYWcoKSB7XG4gICAgc2V0VGFncyhbLi4udGFncywgdGFnXSlcbiAgICBzZXRUYWcoJycpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTZWFyY2hJbnB1dChldmVudCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coYFxuICAgICAgbmFtZSAke25hbWV9LFxuICAgICAgbGluayAke2xpbmt9LFxuICAgICAgZGVzYyAke2Rlc2NyaXB0aW9ufSxcbiAgICAgIHRhZ3MgJHt0YWdzfVxuICAgIGApXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnQSBuYW1lIHdhcyBzdWJtaXR0ZWQ6ICcgKyB7ZXZlbnR9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlTW9kYWwoKSB7XG4gICAgc2V0QWRkTW9kYWwoZmFsc2UpO1xuICAgIHNldFRhZ3MoW10pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlVGFnKCkge1xuXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gXG4gICAgICBmZXRjaEZpbHRlcmVkUG9zdHMoKVxuICAgICAgLCA1MDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgfSwgW3NlYXJjaElucHV0LCBzZWFyY2hGb3JUYWdzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFBvc3RzKCk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZSA+VlVUVFI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlZVVFRSPC9oMT5cbiAgICAgICAgPGgyPlZlcnkgVXNlZnVsIFRvb2xzIHRvIFJlbWVtYmVyPC9oMj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxlZnR9PlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJY29ufSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0Ny43MDdcIiBoZWlnaHQ9XCI0Ny43MDdcIiB2aWV3Qm94PVwiMCAwIDQ3LjcwNyA0Ny43MDdcIiBzdHlsZT17e2ZpbGw6XCJub25lXCIsIHN0cm9rZTogXCIjMTcwYzNhXCIsIHN0cm9rZU1pdGVybGltaXQ6IDEwLCBzdHJva2VXaWR0aDogXCIycHhcIiwgd2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwifX0+PGRlZnM+PC9kZWZzPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTI3MiAtMTc5OSlcIj48cGF0aCBjbGFzc05hbWU9XCJhXCIgZD1cIk0zOS4wNDksMzkuMDQ5LDU2LDU2XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyNjMgMTc5MClcIi8+PGNpcmNsZSBjbGFzc05hbWU9XCJhXCIgY3g9XCIxN1wiIGN5PVwiMTdcIiByPVwiMTdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI3MyAxODAwKVwiLz48L2c+PC9zdmc+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIiB2YWx1ZT17c2VhcmNoSW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlT25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPXtzZWFyY2hGb3JUYWdzfSBvbkNoYW5nZT17KCkgPT4gc2V0U2VhcmNoRm9yVGFncyghc2VhcmNoRm9yVGFncyl9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hMYWJlbH0+c2VhcmNoIGluIHRhZ3Mgb25seTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259IG9uQ2xpY2s9eygpID0+IHNldEFkZE1vZGFsKHRydWUpfT5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNjEuNDE0XCIgaGVpZ2h0PVwiNjEuNDJcIiB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiIHN0eWxlPXt7ZmlsbDpcIm5vbmVcIiwgc3Ryb2tlOiBcIiNGRkZGRkZcIiwgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsIHN0cm9rZVdpZHRoOiBcIjEwcHhcIiwgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIiwgd2lkdGg6IFwiMTVweFwiLCBoZWlnaHQ6IFwiMTVweFwifX0+PGRlZnM+PC9kZWZzPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj48cGF0aCBjbGFzc05hbWU9XCJhXCIgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIi8+PC9nPjwvc3ZnPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmFkZExhYmVsfT5BZGQ8L2xhYmVsPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7ICFwb3N0cy5sZW5ndGggPT0gMCBcbiAgICAgICAgXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICBwb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtwb3N0LmlkfSBjb250ZW50PXtwb3N0fS8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pKSBcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9Qb3N0c30+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbm90Rm91bmQucG5nXCIgYWx0PVwiTm90IEZvdW5kXCIgd2lkdGg9XCIzNzBcIiBoZWlnaHQ9XCIzMDBcIiAvPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubm90Rm91bmR9Pk9vb3BzLCBubyBwb3N0cyBmb3VuZC4uLjwvaDI+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIFxuICAgICAgICB9XG5cblxuICAgICAgICB7IGFkZE1vZGFsICYmICggXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGl0bGV9PkFkZCBhIG5ldyB0b29sPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH0gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTMuNDE0XCIgaGVpZ2h0PVwiMTMuNDE1XCIgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCIgc3R5bGU9e3tmaWxsOiBcIm5vbmVcIiwgc3Ryb2tlOiBcIiM4ZjhhOWJcIiwgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsIHN0cm9rZVdpZHRoOiBcIjJweFwifX0+PGRlZnM+PC9kZWZzPjxwYXRoIGNsYXNzTmFtZT1cImFcIiBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VG9vbCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpID0+IHtzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5MaW5rPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtsaW5rfSBvbkNoYW5nZT17KGUpID0+IHtzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dFRleHRBcmVhfSB0eXBlPVwidGV4dFwiIHZhbHVlPXtkZXNjcmlwdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiB7c2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfX0vPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PlRhZ3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWdzfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RhZ30gb25DaGFuZ2U9eyhlKSA9PiB7c2V0VGFnKGUudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUYWcoKX0gY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+PHBhdGggY2xhc3NOYW1lPVwiYWRkVGFnXCIgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIi8+PC9nPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGFncyAmJiB0YWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnfSB2YWx1ZT17dGFnfSBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlUmVtb3ZlVGFnKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGFnfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlVGFnfSBvbkNsaWNrPXsoKSA9PiBzZXRBZGRNb2RhbChmYWxzZSl9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIiBzdHlsZT17e2ZpbGw6IFwibm9uZVwiLCBzdHJva2U6IFwiIzhmOGE5YlwiLCBzdHJva2VNaXRlcmxpbWl0OiAxMCwgc3Ryb2tlV2lkdGg6IFwiMnB4XCJ9fT48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3NOYW1lPVwiYVwiIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRm9vdGVyfT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfT5DYW5jZWw8L2J1dHRvbj4gIFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zYXZlQnV0dG9ufSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5TYXZlPC9idXR0b24+ICBcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj4gICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuXG4gICAgICAgIFxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9