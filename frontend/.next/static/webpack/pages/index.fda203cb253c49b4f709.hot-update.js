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
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
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
              lineNumber: 85,
              columnNumber: 256
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 307
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 386
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 269
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
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
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
              lineNumber: 92,
              columnNumber: 253
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 310
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 266
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          content: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
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
          lineNumber: 108,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.notFound,
          children: "Ooops, no posts found..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
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
                lineNumber: 120,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.closeModal,
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
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("defs", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 267
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M32,20,20,32m12,0L20,20",
                  transform: "translate(-19.292 -19.293)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 280
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalContent,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tool Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
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
                lineNumber: 125,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
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
                lineNumber: 127,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
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
                lineNumber: 129,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
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
                  lineNumber: 132,
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
                      lineNumber: 133,
                      columnNumber: 189
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 145
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.tagsContainer,
                    children: tags && tags.map(function (tag) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.tag,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                          children: tag
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 140,
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
                            lineNumber: 141,
                            columnNumber: 270
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                            className: "a",
                            d: "M32,20,20,32m12,0L20,20",
                            transform: "translate(-19.292 -19.293)"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 141,
                            columnNumber: 283
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 141,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalFooter,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cancelButton,
                onClick: function onClick() {
                  return setAddModal(false);
                },
                children: "Cancel"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.saveButton,
                type: "submit",
                value: "Submit",
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hGb3JUYWdzIiwic2V0U2VhcmNoRm9yVGFncyIsIm5hbWUiLCJzZXROYW1lIiwibGluayIsInNldExpbmsiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidGFnIiwic2V0VGFnIiwidGFncyIsInNldFRhZ3MiLCJhZGRNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJmZXRjaEZpbHRlcmVkUG9zdHMiLCJoYW5kbGVBZGRUYWciLCJoYW5kbGVPbkNoYW5nZSIsImV2ZW50IiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImhlYWRlciIsImhlYWRlckxlZnQiLCJzZWFyY2hJY29uIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoTGFiZWwiLCJhZGRCdXR0b24iLCJ0cmFuc2Zvcm0iLCJhZGRMYWJlbCIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJpZCIsIm5vUG9zdHMiLCJub3RGb3VuZCIsIm1vZGFsIiwibW9kYWxCb2R5IiwibW9kYWxIZWFkZXIiLCJtb2RhbFRpdGxlIiwiY2xvc2VNb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsTGFiZWwiLCJtb2RhbElucHV0IiwibW9kYWxJbnB1dFRleHRBcmVhIiwiYWRkVGFncyIsImFkZFRhZyIsInRhZ3NDb250YWluZXIiLCJyZW1vdmVUYWciLCJtb2RhbEZvb3RlciIsImNhbmNlbEJ1dHRvbiIsInNhdmVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUV0QkcsV0FGc0I7QUFBQSxNQUVUQyxjQUZTOztBQUFBLG1CQUdhSixzREFBUSxDQUFDLEtBQUQsQ0FIckI7QUFBQSxNQUd0QkssYUFIc0I7QUFBQSxNQUdQQyxnQkFITzs7QUFBQSxtQkFLTE4sc0RBQVEsQ0FBQyxFQUFELENBTEg7QUFBQSxNQUt0Qk8sSUFMc0I7QUFBQSxNQUtoQkMsT0FMZ0I7O0FBQUEsbUJBTUxSLHNEQUFRLENBQUMsRUFBRCxDQU5IO0FBQUEsTUFNdEJTLElBTnNCO0FBQUEsTUFNaEJDLE9BTmdCOztBQUFBLG1CQU9TVixzREFBUSxDQUFDLEVBQUQsQ0FQakI7QUFBQSxNQU90QlcsV0FQc0I7QUFBQSxNQU9UQyxjQVBTOztBQUFBLG1CQVFQWixzREFBUSxDQUFDLEVBQUQsQ0FSRDtBQUFBLE1BUXRCYSxHQVJzQjtBQUFBLE1BUWpCQyxNQVJpQjs7QUFBQSxtQkFTTGQsc0RBQVEsQ0FBQyxFQUFELENBVEg7QUFBQSxNQVN0QmUsSUFUc0I7QUFBQSxNQVNoQkMsT0FUZ0I7O0FBQUEsbUJBWUdoQixzREFBUSxDQUFDLEtBQUQsQ0FaWDtBQUFBLE1BWXRCaUIsUUFac0I7QUFBQSxNQVlaQyxXQVpZOztBQUFBLFdBY2RDLFVBZGM7QUFBQTtBQUFBOztBQUFBO0FBQUEsNlNBYzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ29CQyxLQUFLLENBQUMsNkJBQUQsQ0FE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Qyx5QkFBdEI7QUFBZ0QscUNBQVMsRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUE1UDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKO0FBT0QscUJBUlE7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLGVBZ0NFO0FBQVEsdUJBQVMsRUFBRVYsOERBQU0sQ0FBQ3VDLFdBQTFCO0FBQUEsc0NBQ0U7QUFBUSx5QkFBUyxFQUFFdkMsOERBQU0sQ0FBQ3dDLFlBQTFCO0FBQXdDLHVCQUFPLEVBQUU7QUFBQSx5QkFBTTFELFdBQVcsQ0FBQyxLQUFELENBQWpCO0FBQUEsaUJBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBUSx5QkFBUyxFQUFFa0IsOERBQU0sQ0FBQ3lDLFVBQTFCO0FBQXNDLG9CQUFJLEVBQUMsUUFBM0M7QUFBb0QscUJBQUssRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEZEOztHQTVKdUI5RSxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZkYTIwM2NiMjUzYzQ5YjRmNzA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoRm9yVGFncywgc2V0U2VhcmNoRm9yVGFnc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XG4gIFxuICBcbiAgY29uc3QgW2FkZE1vZGFsLCBzZXRBZGRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQb3N0cygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRQb3N0cyhkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRmlsdGVyZWRQb3N0cygpIHtcbiAgICBpZighc2VhcmNoRm9yVGFncykge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz9xPSR7c2VhcmNoSW5wdXR9YCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldFBvc3RzKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzP3RhZ3NfbGlrZT0ke3NlYXJjaElucHV0fWApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBzZXRQb3N0cyhkYXRhKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBZGRUYWcoKSB7XG4gICAgc2V0VGFncyhbLi4udGFncywgdGFnXSlcbiAgICBzZXRUYWcoJycpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTZWFyY2hJbnB1dChldmVudCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coYFxuICAgICAgbmFtZSAke25hbWV9LFxuICAgICAgbGluayAke2xpbmt9LFxuICAgICAgZGVzYyAke2Rlc2NyaXB0aW9ufSxcbiAgICAgIHRhZ3MgJHt0YWdzfVxuICAgIGApXG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdBIG5hbWUgd2FzIHN1Ym1pdHRlZDogJyArIHtldmVudH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IFxuICAgICAgZmV0Y2hGaWx0ZXJlZFBvc3RzKClcbiAgICAgICwgNTAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gIH0sIFtzZWFyY2hJbnB1dCwgc2VhcmNoRm9yVGFnc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQb3N0cygpO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGUgPlZVVFRSPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5WVVRUUjwvaDE+XG4gICAgICAgIDxoMj5WZXJ5IFVzZWZ1bCBUb29scyB0byBSZW1lbWJlcjwvaDI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMZWZ0fT5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNDcuNzA3XCIgaGVpZ2h0PVwiNDcuNzA3XCIgdmlld0JveD1cIjAgMCA0Ny43MDcgNDcuNzA3XCIgc3R5bGU9e3tmaWxsOlwibm9uZVwiLCBzdHJva2U6IFwiIzE3MGMzYVwiLCBzdHJva2VNaXRlcmxpbWl0OiAxMCwgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIn19PjxkZWZzPjwvZGVmcz48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEyNzIgLTE3OTkpXCI+PHBhdGggY2xhc3NOYW1lPVwiYVwiIGQ9XCJNMzkuMDQ5LDM5LjA0OSw1Niw1NlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjYzIDE3OTApXCIvPjxjaXJjbGUgY2xhc3NOYW1lPVwiYVwiIGN4PVwiMTdcIiBjeT1cIjE3XCIgcj1cIjE3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyNzMgMTgwMClcIi8+PC9nPjwvc3ZnPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaElucHV0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoXCIgdmFsdWU9e3NlYXJjaElucHV0fSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT17c2VhcmNoRm9yVGFnc30gb25DaGFuZ2U9eygpID0+IHNldFNlYXJjaEZvclRhZ3MoIXNlYXJjaEZvclRhZ3MpfS8+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoTGFiZWx9PnNlYXJjaCBpbiB0YWdzIG9ubHk8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRBZGRNb2RhbCh0cnVlKX0+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjYxLjQxNFwiIGhlaWdodD1cIjYxLjQyXCIgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIiBzdHlsZT17e2ZpbGw6XCJub25lXCIsIHN0cm9rZTogXCIjRkZGRkZGXCIsIHN0cm9rZU1pdGVybGltaXQ6IDEwLCBzdHJva2VXaWR0aDogXCIxMHB4XCIsIHRyYW5zZm9ybTogXCJyb3RhdGUoNDVkZWcpXCIsIHdpZHRoOiBcIjE1cHhcIiwgaGVpZ2h0OiBcIjE1cHhcIn19PjxkZWZzPjwvZGVmcz48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+PHBhdGggY2xhc3NOYW1lPVwiYVwiIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCIvPjwvZz48L3N2Zz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5hZGRMYWJlbH0+QWRkPC9sYWJlbD5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgeyAhcG9zdHMubGVuZ3RoID09IDAgXG4gICAgICAgIFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgcG9zdHMubWFwKHBvc3QgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17cG9zdC5pZH0gY29udGVudD17cG9zdH0vPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSkgXG4gICAgICAgICAgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUG9zdHN9PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL25vdEZvdW5kLnBuZ1wiIGFsdD1cIk5vdCBGb3VuZFwiIHdpZHRoPVwiMzcwXCIgaGVpZ2h0PVwiMzAwXCIgLz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm5vdEZvdW5kfT5Pb29wcywgbm8gcG9zdHMgZm91bmQuLi48L2gyPiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgeyBhZGRNb2RhbCAmJiAoIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCb2R5fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRpdGxlfT5BZGQgYSBuZXcgdG9vbDwvaDM+XG4gICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlTW9kYWx9IG9uQ2xpY2s9eygpID0+IHNldEFkZE1vZGFsKGZhbHNlKX0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTMuNDE0XCIgaGVpZ2h0PVwiMTMuNDE1XCIgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCIgc3R5bGU9e3tmaWxsOiBcIm5vbmVcIiwgc3Ryb2tlOiBcIiM4ZjhhOWJcIiwgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsIHN0cm9rZVdpZHRoOiBcIjJweFwifX0+PGRlZnM+PC9kZWZzPjxwYXRoIGNsYXNzTmFtZT1cImFcIiBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VG9vbCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpID0+IHtzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5MaW5rPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtsaW5rfSBvbkNoYW5nZT17KGUpID0+IHtzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dFRleHRBcmVhfSB0eXBlPVwidGV4dFwiIHZhbHVlPXtkZXNjcmlwdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiB7c2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfX0vPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PlRhZ3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWdzfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RhZ30gb25DaGFuZ2U9eyhlKSA9PiB7c2V0VGFnKGUudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUYWcoKX0gY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+PHBhdGggY2xhc3NOYW1lPVwiYWRkVGFnXCIgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIi8+PC9nPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGFncyAmJiB0YWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RhZ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZVRhZ30gb25DbGljaz17KCkgPT4gc2V0QWRkTW9kYWwoZmFsc2UpfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCIgc3R5bGU9e3tmaWxsOiBcIm5vbmVcIiwgc3Ryb2tlOiBcIiM4ZjhhOWJcIiwgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsIHN0cm9rZVdpZHRoOiBcIjJweFwifX0+PGRlZnM+PC9kZWZzPjxwYXRoIGNsYXNzTmFtZT1cImFcIiBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApICBcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRm9vdGVyfT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRBZGRNb2RhbChmYWxzZSl9PkNhbmNlbDwvYnV0dG9uPiAgXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNhdmVCdXR0b259IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlNhdmU8L2J1dHRvbj4gIFxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPiAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG5cbiAgICAgICAgXG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=