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

  function handleRemoveTag(e) {
    console.log(e);
    var result = tags.filter(function (word) {
      return word != e;
    });
    setTags(result);
  }

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
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
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
              lineNumber: 95,
              columnNumber: 256
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 307
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 386
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 269
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
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
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
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
              lineNumber: 102,
              columnNumber: 253
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 310
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 266
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          content: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
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
          lineNumber: 118,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.notFound,
          children: "Ooops, no posts found..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
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
                lineNumber: 130,
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
                  lineNumber: 131,
                  columnNumber: 259
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M32,20,20,32m12,0L20,20",
                  transform: "translate(-19.292 -19.293)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 272
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalContent,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tool Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
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
                lineNumber: 135,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
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
                lineNumber: 137,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
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
                lineNumber: 139,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
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
                  lineNumber: 142,
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
                      lineNumber: 143,
                      columnNumber: 189
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 145
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.tagsContainer,
                    children: tags && tags.map(function (tag) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.tag,
                        value: tag,
                        onClick: function onClick() {
                          return handleRemoveTag(tag);
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                          children: tag
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 149,
                          columnNumber: 31
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
                          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.removeTag,
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
                            lineNumber: 150,
                            columnNumber: 235
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                            className: "a",
                            d: "M32,20,20,32m12,0L20,20",
                            transform: "translate(-19.292 -19.293)"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 150,
                            columnNumber: 248
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 150,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalFooter,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cancelButton,
                onClick: handleCloseModal,
                children: "Cancel"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.saveButton,
                type: "submit",
                value: "Submit",
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hGb3JUYWdzIiwic2V0U2VhcmNoRm9yVGFncyIsIm5hbWUiLCJzZXROYW1lIiwibGluayIsInNldExpbmsiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidGFnIiwic2V0VGFnIiwidGFncyIsInNldFRhZ3MiLCJhZGRNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJmZXRjaEZpbHRlcmVkUG9zdHMiLCJoYW5kbGVBZGRUYWciLCJoYW5kbGVPbkNoYW5nZSIsImV2ZW50IiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZVJlbW92ZVRhZyIsImUiLCJyZXN1bHQiLCJmaWx0ZXIiLCJ3b3JkIiwidXNlRWZmZWN0IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImhlYWRlciIsImhlYWRlckxlZnQiLCJzZWFyY2hJY29uIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hMYWJlbCIsImFkZEJ1dHRvbiIsInRyYW5zZm9ybSIsImFkZExhYmVsIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsImlkIiwibm9Qb3N0cyIsIm5vdEZvdW5kIiwibW9kYWwiLCJtb2RhbEJvZHkiLCJtb2RhbEhlYWRlciIsIm1vZGFsVGl0bGUiLCJjbG9zZU1vZGFsIiwibW9kYWxDb250ZW50IiwibW9kYWxMYWJlbCIsIm1vZGFsSW5wdXQiLCJtb2RhbElucHV0VGV4dEFyZWEiLCJhZGRUYWdzIiwiYWRkVGFnIiwidGFnc0NvbnRhaW5lciIsInJlbW92ZVRhZyIsIm1vZGFsRm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRXRCRyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBQUEsbUJBR2FKLHNEQUFRLENBQUMsS0FBRCxDQUhyQjtBQUFBLE1BR3RCSyxhQUhzQjtBQUFBLE1BR1BDLGdCQUhPOztBQUFBLG1CQUtMTixzREFBUSxDQUFDLEVBQUQsQ0FMSDtBQUFBLE1BS3RCTyxJQUxzQjtBQUFBLE1BS2hCQyxPQUxnQjs7QUFBQSxtQkFNTFIsc0RBQVEsQ0FBQyxFQUFELENBTkg7QUFBQSxNQU10QlMsSUFOc0I7QUFBQSxNQU1oQkMsT0FOZ0I7O0FBQUEsbUJBT1NWLHNEQUFRLENBQUMsRUFBRCxDQVBqQjtBQUFBLE1BT3RCVyxXQVBzQjtBQUFBLE1BT1RDLGNBUFM7O0FBQUEsbUJBUVBaLHNEQUFRLENBQUMsRUFBRCxDQVJEO0FBQUEsTUFRdEJhLEdBUnNCO0FBQUEsTUFRakJDLE1BUmlCOztBQUFBLG1CQVNMZCxzREFBUSxDQUFDLEVBQUQsQ0FUSDtBQUFBLE1BU3RCZSxJQVRzQjtBQUFBLE1BU2hCQyxPQVRnQjs7QUFBQSxtQkFZR2hCLHNEQUFRLENBQUMsS0FBRCxDQVpYO0FBQUEsTUFZdEJpQixRQVpzQjtBQUFBLE1BWVpDLFdBWlk7O0FBQUEsV0FjZEMsVUFkYztBQUFBO0FBQUE7O0FBQUE7QUFBQSw2U0FjN0I7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJGRDs7R0FyS3VCbkYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41M2M0YTc3MTJkNTUxOGYzODJmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlYXJjaEZvclRhZ3MsIHNldFNlYXJjaEZvclRhZ3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xuICBcbiAgXG4gIGNvbnN0IFthZGRNb2RhbCwgc2V0QWRkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHNcIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgc2V0UG9zdHMoZGF0YSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEZpbHRlcmVkUG9zdHMoKSB7XG4gICAgaWYoIXNlYXJjaEZvclRhZ3MpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHM/cT0ke3NlYXJjaElucHV0fWApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBzZXRQb3N0cyhkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz90YWdzX2xpa2U9JHtzZWFyY2hJbnB1dH1gKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0UG9zdHMoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQWRkVGFnKCkge1xuICAgIHNldFRhZ3MoWy4uLnRhZ3MsIHRhZ10pXG4gICAgc2V0VGFnKCcnKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGBcbiAgICAgIG5hbWUgJHtuYW1lfSxcbiAgICAgIGxpbmsgJHtsaW5rfSxcbiAgICAgIGRlc2MgJHtkZXNjcmlwdGlvbn0sXG4gICAgICB0YWdzICR7dGFnc31cbiAgICBgKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ0EgbmFtZSB3YXMgc3VibWl0dGVkOiAnICsge2V2ZW50fSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1vZGFsKCkge1xuICAgIHNldEFkZE1vZGFsKGZhbHNlKTtcbiAgICBzZXRUYWdzKFtdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZVRhZyhlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGFncy5maWx0ZXIod29yZCA9PiB3b3JkICE9IGUpO1xuICAgIHNldFRhZ3MocmVzdWx0KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBcbiAgICAgIGZldGNoRmlsdGVyZWRQb3N0cygpXG4gICAgICAsIDUwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9LCBbc2VhcmNoSW5wdXQsIHNlYXJjaEZvclRhZ3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUG9zdHMoKTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlID5WVVRUUjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VlVUVFI8L2gxPlxuICAgICAgICA8aDI+VmVyeSBVc2VmdWwgVG9vbHMgdG8gUmVtZW1iZXI8L2gyPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGVmdH0+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEljb259IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQ3LjcwN1wiIGhlaWdodD1cIjQ3LjcwN1wiIHZpZXdCb3g9XCIwIDAgNDcuNzA3IDQ3LjcwN1wiIHN0eWxlPXt7ZmlsbDpcIm5vbmVcIiwgc3Ryb2tlOiBcIiMxNzBjM2FcIiwgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsIHN0cm9rZVdpZHRoOiBcIjJweFwiLCB3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCJ9fT48ZGVmcz48L2RlZnM+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMjcyIC0xNzk5KVwiPjxwYXRoIGNsYXNzTmFtZT1cImFcIiBkPVwiTTM5LjA0OSwzOS4wNDksNTYsNTZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI2MyAxNzkwKVwiLz48Y2lyY2xlIGNsYXNzTmFtZT1cImFcIiBjeD1cIjE3XCIgY3k9XCIxN1wiIHI9XCIxN1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjczIDE4MDApXCIvPjwvZz48L3N2Zz5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJbnB1dH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInNlYXJjaFwiIHZhbHVlPXtzZWFyY2hJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVPbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9e3NlYXJjaEZvclRhZ3N9IG9uQ2hhbmdlPXsoKSA9PiBzZXRTZWFyY2hGb3JUYWdzKCFzZWFyY2hGb3JUYWdzKX0vPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaExhYmVsfT5zZWFyY2ggaW4gdGFncyBvbmx5PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2V0QWRkTW9kYWwodHJ1ZSl9PlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI2MS40MTRcIiBoZWlnaHQ9XCI2MS40MlwiIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCIgc3R5bGU9e3tmaWxsOlwibm9uZVwiLCBzdHJva2U6IFwiI0ZGRkZGRlwiLCBzdHJva2VNaXRlcmxpbWl0OiAxMCwgc3Ryb2tlV2lkdGg6IFwiMTBweFwiLCB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKVwiLCB3aWR0aDogXCIxNXB4XCIsIGhlaWdodDogXCIxNXB4XCJ9fT48ZGVmcz48L2RlZnM+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPjxwYXRoIGNsYXNzTmFtZT1cImFcIiBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiLz48L2c+PC9zdmc+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTGFiZWx9PkFkZDwvbGFiZWw+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsgIXBvc3RzLmxlbmd0aCA9PSAwIFxuICAgICAgICBcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIHBvc3RzLm1hcChwb3N0ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e3Bvc3QuaWR9IGNvbnRlbnQ9e3Bvc3R9Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkpIFxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub1Bvc3RzfT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9ub3RGb3VuZC5wbmdcIiBhbHQ9XCJOb3QgRm91bmRcIiB3aWR0aD1cIjM3MFwiIGhlaWdodD1cIjMwMFwiIC8+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ub3RGb3VuZH0+T29vcHMsIG5vIHBvc3RzIGZvdW5kLi4uPC9oMj4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgXG4gICAgICAgIH1cblxuXG4gICAgICAgIHsgYWRkTW9kYWwgJiYgKCBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUaXRsZX0+QWRkIGEgbmV3IHRvb2w8L2gzPlxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU1vZGFsfSBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMy40MTRcIiBoZWlnaHQ9XCIxMy40MTVcIiB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIiBzdHlsZT17e2ZpbGw6IFwibm9uZVwiLCBzdHJva2U6IFwiIzhmOGE5YlwiLCBzdHJva2VNaXRlcmxpbWl0OiAxMCwgc3Ryb2tlV2lkdGg6IFwiMnB4XCJ9fT48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3NOYW1lPVwiYVwiIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5Ub29sIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZSkgPT4ge3NldE5hbWUoZS50YXJnZXQudmFsdWUpfX0vPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9Pkxpbms8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xpbmt9IG9uQ2hhbmdlPXsoZSkgPT4ge3NldExpbmsoZS50YXJnZXQudmFsdWUpfX0vPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0VGV4dEFyZWF9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGUpID0+IHtzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9fS8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VGFnczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ3N9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH0gdHlwZT1cInRleHRcIiB2YWx1ZT17dGFnfSBvbkNoYW5nZT17KGUpID0+IHtzZXRUYWcoZS50YXJnZXQudmFsdWUpfX0vPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRhZygpfSBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWd9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj48cGF0aCBjbGFzc05hbWU9XCJhZGRUYWdcIiBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiLz48L2c+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3NDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHt0YWdzICYmIHRhZ3MubWFwKHRhZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWd9IHZhbHVlPXt0YWd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRhZyh0YWcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0YWd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmVUYWd9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIiBzdHlsZT17e2ZpbGw6IFwibm9uZVwiLCBzdHJva2U6IFwiIzhmOGE5YlwiLCBzdHJva2VNaXRlcmxpbWl0OiAxMCwgc3Ryb2tlV2lkdGg6IFwiMnB4XCJ9fT48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3NOYW1lPVwiYVwiIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRm9vdGVyfT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfT5DYW5jZWw8L2J1dHRvbj4gIFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zYXZlQnV0dG9ufSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5TYXZlPC9idXR0b24+ICBcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj4gICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuXG4gICAgICAgIFxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9