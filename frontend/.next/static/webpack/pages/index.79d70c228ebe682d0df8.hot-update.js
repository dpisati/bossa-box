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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      searchForTags = _useState3[0],
      setSearchForTags = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      link = _useState5[0],
      setLink = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      description = _useState6[0],
      setDescription = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
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
    var trimTag = tag.trim();

    if (trimTag) {
      setTags([].concat(Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(tags), [trimTag]));
      setTag("");
    }

    return;
  }

  var handleOnChange = function handleOnChange(event) {
    setSearchInput(event);
  };

  function handleSubmit(event) {
    console.log("\n      name ".concat(name, ",\n      link ").concat(link, ",\n      desc ").concat(description, ",\n      tags ").concat(tags, "\n    "));
    event.preventDefault();
    console.log("A name was submitted: " + {
      event: event
    });
  }

  function handleCloseModal() {
    setAddModal(false);
    setName("");
    setDescription("");
    setLink("");
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
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      className: "".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main, " ").concat(addModal && _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalIsOpen),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
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
              lineNumber: 118,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
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
            lineNumber: 134,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
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
              lineNumber: 168,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          content: post,
          onDelete: handlePostRemoved
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 20
        }, _this);
      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.noPosts,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.noPostsImg,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
            src: "/caveman.gif",
            alt: "Not Found",
            width: 500,
            height: 400
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.notFound,
            children: "Ooops, no posts found..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 11
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
                lineNumber: 204,
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
                  lineNumber: 219,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M32,20,20,32m12,0L20,20",
                  transform: "translate(-19.292 -19.293)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalContent,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tool Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
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
                lineNumber: 229,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
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
                lineNumber: 238,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
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
                lineNumber: 247,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
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
                  lineNumber: 257,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  onClick: function onClick() {
                    return handleAddTag();
                  },
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addTagField,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
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
                        lineNumber: 275,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
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
                          lineNumber: 293,
                          columnNumber: 33
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
                            lineNumber: 307,
                            columnNumber: 35
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                            className: "a",
                            d: "M32,20,20,32m12,0L20,20",
                            transform: "translate(-19.292 -19.293)"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 308,
                            columnNumber: 35
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 294,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 288,
                        columnNumber: 31
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalFooter,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cancelButton,
                onClick: handleCloseModal,
                children: "Cancel"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.saveButton,
                type: "submit",
                value: "Submit",
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

_s(Home, "wDR/gkSzbWG3tg9W5YUtWasV9d0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hGb3JUYWdzIiwic2V0U2VhcmNoRm9yVGFncyIsIm5hbWUiLCJzZXROYW1lIiwibGluayIsInNldExpbmsiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidGFnIiwic2V0VGFnIiwidGFncyIsInNldFRhZ3MiLCJhZGRNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJmZXRjaEZpbHRlcmVkUG9zdHMiLCJoYW5kbGVBZGRUYWciLCJ0cmltVGFnIiwidHJpbSIsImhhbmRsZU9uQ2hhbmdlIiwiZXZlbnQiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlUmVtb3ZlVGFnIiwiZSIsInJlc3VsdCIsImZpbHRlciIsIndvcmQiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsIm1vZGFsSXNPcGVuIiwidGl0bGUiLCJoZWFkZXIiLCJoZWFkZXJMZWZ0Iiwic2VhcmNoSWNvbiIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoTGFiZWwiLCJhZGRCdXR0b24iLCJ0cmFuc2Zvcm0iLCJhZGRMYWJlbCIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJoYW5kbGVQb3N0UmVtb3ZlZCIsImlkIiwibm9Qb3N0cyIsIm5vUG9zdHNJbWciLCJub3RGb3VuZCIsIm1vZGFsIiwibW9kYWxCb2R5IiwibW9kYWxIZWFkZXIiLCJtb2RhbFRpdGxlIiwiY2xvc2VNb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsTGFiZWwiLCJtb2RhbElucHV0IiwibW9kYWxJbnB1dFRleHRBcmVhIiwiYWRkVGFncyIsImFkZFRhZ0ZpZWxkIiwiYWRkVGFnIiwidGFnc0NvbnRhaW5lciIsInJlbW92ZVRhZyIsIm1vZGFsRm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRXRCRyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBQUEsbUJBR2FKLHNEQUFRLENBQUMsS0FBRCxDQUhyQjtBQUFBLE1BR3RCSyxhQUhzQjtBQUFBLE1BR1BDLGdCQUhPOztBQUFBLG1CQUtMTixzREFBUSxDQUFDLEVBQUQsQ0FMSDtBQUFBLE1BS3RCTyxJQUxzQjtBQUFBLE1BS2hCQyxPQUxnQjs7QUFBQSxtQkFNTFIsc0RBQVEsQ0FBQyxFQUFELENBTkg7QUFBQSxNQU10QlMsSUFOc0I7QUFBQSxNQU1oQkMsT0FOZ0I7O0FBQUEsbUJBT1NWLHNEQUFRLENBQUMsRUFBRCxDQVBqQjtBQUFBLE1BT3RCVyxXQVBzQjtBQUFBLE1BT1RDLGNBUFM7O0FBQUEsbUJBUVBaLHNEQUFRLENBQUMsRUFBRCxDQVJEO0FBQUEsTUFRdEJhLEdBUnNCO0FBQUEsTUFRakJDLE1BUmlCOztBQUFBLG1CQVNMZCxzREFBUSxDQUFDLEVBQUQsQ0FUSDtBQUFBLE1BU3RCZSxJQVRzQjtBQUFBLE1BU2hCQyxPQVRnQjs7QUFBQSxtQkFXR2hCLHNEQUFRLENBQUMsS0FBRCxDQVhYO0FBQUEsTUFXdEJpQixRQVhzQjtBQUFBLE1BV1pDLFdBWFk7O0FBQUEsV0FhZEMsVUFiYztBQUFBO0FBQUE7O0FBQUE7QUFBQSw2U0FhN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDb0JDLEtBQUssQ0FBQyw2QkFBRCxDQUR6Qjs7QUFBQTtBQUNRQyxpQkFEUjtBQUFBO0FBQUEscUJBRXFCQSxHQUFHLENBQUNDLElBQUosRUFGckI7O0FBQUE7QUFFUUMsa0JBRlI7QUFHRXJCLHNCQUFRLENBQUNxQixJQUFELENBQVI7O0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FiNkI7QUFBQTtBQUFBOztBQUFBLFdBcUJkQyxrQkFyQmM7QUFBQTtBQUFBOztBQUFBO0FBQUEscVRBcUI3QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ09uQixhQURQO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRXNCZSxLQUFLLHlDQUFrQ2pCLFdBQWxDLEVBRjNCOztBQUFBO0FBRVVrQixpQkFGVjtBQUFBO0FBQUEscUJBR3VCQSxHQUFHLENBQUNDLElBQUosRUFIdkI7O0FBQUE7QUFHVUMsa0JBSFY7QUFJSXJCLHNCQUFRLENBQUNxQixJQUFELENBQVI7QUFKSjtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFNc0JILEtBQUssaURBQ29CakIsV0FEcEIsRUFOM0I7O0FBQUE7QUFNVWtCLGtCQU5WO0FBQUE7QUFBQSxxQkFTdUJBLElBQUcsQ0FBQ0MsSUFBSixFQVR2Qjs7QUFBQTtBQVNVQyxtQkFUVjtBQVVJckIsc0JBQVEsQ0FBQ3FCLEtBQUQsQ0FBUjs7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXJCNkI7QUFBQTtBQUFBOztBQW1DN0IsV0FBU0UsWUFBVCxHQUF3QjtBQUN0QixRQUFNQyxPQUFPLEdBQUdiLEdBQUcsQ0FBQ2MsSUFBSixFQUFoQjs7QUFDQSxRQUFJRCxPQUFKLEVBQWE7QUFDWFYsYUFBTyw2SkFBS0QsSUFBTCxJQUFXVyxPQUFYLEdBQVA7QUFDQVosWUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNEOztBQUNEO0FBQ0Q7O0FBRUQsTUFBTWMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDaEN6QixrQkFBYyxDQUFDeUIsS0FBRCxDQUFkO0FBQ0QsR0FGRDs7QUFJQSxXQUFTQyxZQUFULENBQXNCRCxLQUF0QixFQUE2QjtBQUMzQkUsV0FBTyxDQUFDQyxHQUFSLHdCQUNTekIsSUFEVCwyQkFFU0UsSUFGVCwyQkFHU0UsV0FIVCwyQkFJU0ksSUFKVDtBQU1BYyxTQUFLLENBQUNJLGNBQU47QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQTJCO0FBQUVILFdBQUssRUFBTEE7QUFBRixLQUF2QztBQUNEOztBQUVELFdBQVNLLGdCQUFULEdBQTRCO0FBQzFCaEIsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBVixXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FJLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0FGLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDQU0sV0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNEOztBQUVELFdBQVNtQixlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUMxQkwsV0FBTyxDQUFDQyxHQUFSLENBQVlJLENBQVo7QUFDQSxRQUFNQyxNQUFNLEdBQUd0QixJQUFJLENBQUN1QixNQUFMLENBQVksVUFBQ0MsSUFBRDtBQUFBLGFBQVVBLElBQUksSUFBSUgsQ0FBbEI7QUFBQSxLQUFaLENBQWY7QUFDQXBCLFdBQU8sQ0FBQ3FCLE1BQUQsQ0FBUDtBQUNEOztBQUVERyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQztBQUFBLGFBQU1sQixrQkFBa0IsRUFBeEI7QUFBQSxLQUFELEVBQTZCLEdBQTdCLENBQTVCO0FBQ0EsV0FBTztBQUFBLGFBQU1tQixZQUFZLENBQUNGLFNBQUQsQ0FBbEI7QUFBQSxLQUFQO0FBQ0QsR0FIUSxFQUdOLENBQUN0QyxXQUFELEVBQWNFLGFBQWQsQ0FITSxDQUFUO0FBS0FtQyx5REFBUyxDQUFDLFlBQU07QUFDZHJCLGNBQVU7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUV5Qiw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQU0sZUFBUyxZQUFLRCw4REFBTSxDQUFDRSxJQUFaLGNBQW9CN0IsUUFBUSxJQUFJMkIsOERBQU0sQ0FBQ0csV0FBdkMsQ0FBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFJRTtBQUFLLGlCQUFTLEVBQUVKLDhEQUFNLENBQUNLLE1BQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFTCw4REFBTSxDQUFDTSxVQUF2QjtBQUFBLGtDQUNFO0FBQ0UscUJBQVMsRUFBRU4sOERBQU0sQ0FBQ08sVUFEcEI7QUFFRSxpQkFBSyxFQUFDLDRCQUZSO0FBR0UsaUJBQUssRUFBQyxRQUhSO0FBSUUsa0JBQU0sRUFBQyxRQUpUO0FBS0UsbUJBQU8sRUFBQyxtQkFMVjtBQU1FLGlCQUFLLEVBQUU7QUFDTEMsa0JBQUksRUFBRSxNQUREO0FBRUxDLG9CQUFNLEVBQUUsU0FGSDtBQUdMQyw4QkFBZ0IsRUFBRSxFQUhiO0FBSUxDLHlCQUFXLEVBQUUsS0FKUjtBQUtMQyxtQkFBSyxFQUFFLE1BTEY7QUFNTEMsb0JBQU0sRUFBRTtBQU5ILGFBTlQ7QUFBQSxvQ0FlRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWZGLGVBZ0JFO0FBQUcsdUJBQVMsRUFBQyx3QkFBYjtBQUFBLHNDQUNFO0FBQ0UseUJBQVMsRUFBQyxHQURaO0FBRUUsaUJBQUMsRUFBQyxzQkFGSjtBQUdFLHlCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBTUU7QUFDRSx5QkFBUyxFQUFDLEdBRFo7QUFFRSxrQkFBRSxFQUFDLElBRkw7QUFHRSxrQkFBRSxFQUFDLElBSEw7QUFJRSxpQkFBQyxFQUFDLElBSko7QUFLRSx5QkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQWdDRTtBQUNFLHFCQUFTLEVBQUViLDhEQUFNLENBQUN6QyxXQURwQjtBQUVFLGdCQUFJLEVBQUMsTUFGUDtBQUdFLHVCQUFXLEVBQUMsUUFIZDtBQUlFLGlCQUFLLEVBQUVBLFdBSlQ7QUFLRSxvQkFBUSxFQUFFLGtCQUFDaUMsQ0FBRDtBQUFBLHFCQUFPUixjQUFjLENBQUNRLENBQUMsQ0FBQ3NCLE1BQUYsQ0FBU0MsS0FBVixDQUFyQjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQ0YsZUF1Q0U7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFFRSxpQkFBSyxFQUFFdEQsYUFGVDtBQUdFLG9CQUFRLEVBQUU7QUFBQSxxQkFBTUMsZ0JBQWdCLENBQUMsQ0FBQ0QsYUFBRixDQUF0QjtBQUFBO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2Q0YsZUE0Q0U7QUFBTyxxQkFBUyxFQUFFdUMsOERBQU0sQ0FBQ2dCLFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFnREU7QUFDRSxtQkFBUyxFQUFFaEIsOERBQU0sQ0FBQ2lCLFNBRHBCO0FBRUUsaUJBQU8sRUFBRTtBQUFBLG1CQUFNM0MsV0FBVyxDQUFDLElBQUQsQ0FBakI7QUFBQSxXQUZYO0FBQUEsa0NBSUU7QUFDRSxpQkFBSyxFQUFDLDRCQURSO0FBRUUsaUJBQUssRUFBQyxRQUZSO0FBR0Usa0JBQU0sRUFBQyxPQUhUO0FBSUUsbUJBQU8sRUFBQyxrQkFKVjtBQUtFLGlCQUFLLEVBQUU7QUFDTGtDLGtCQUFJLEVBQUUsTUFERDtBQUVMQyxvQkFBTSxFQUFFLFNBRkg7QUFHTEMsOEJBQWdCLEVBQUUsRUFIYjtBQUlMQyx5QkFBVyxFQUFFLE1BSlI7QUFLTE8sdUJBQVMsRUFBRSxlQUxOO0FBTUxOLG1CQUFLLEVBQUUsTUFORjtBQU9MQyxvQkFBTSxFQUFFO0FBUEgsYUFMVDtBQUFBLG9DQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZkYsZUFnQkU7QUFBRyx1QkFBUyxFQUFDLDhCQUFiO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFDLEdBRFo7QUFFRSxpQkFBQyxFQUFDLDhCQUZKO0FBR0UseUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUE0QkU7QUFBTyxxQkFBUyxFQUFFYiw4REFBTSxDQUFDbUIsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsRUFvRkcsQ0FBQzlELEtBQUssQ0FBQytELE1BQVAsSUFBaUIsQ0FBakIsR0FDQy9ELEtBQUssQ0FBQ2dFLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbEIsNEJBQU8scUVBQUMsd0RBQUQ7QUFBb0IsaUJBQU8sRUFBRUEsSUFBN0I7QUFBbUMsa0JBQVEsRUFBRUM7QUFBN0MsV0FBV0QsSUFBSSxDQUFDRSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsT0FGRCxDQURELGdCQUtDO0FBQUssaUJBQVMsRUFBRXhCLDhEQUFNLENBQUN5QixPQUF2QjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRXpCLDhEQUFNLENBQUMwQixVQUF2QjtBQUFBLGtDQUNFLHFFQUFDLGlEQUFEO0FBQ0UsZUFBRyxFQUFDLGNBRE47QUFFRSxlQUFHLEVBQUMsV0FGTjtBQUdFLGlCQUFLLEVBQUUsR0FIVDtBQUlFLGtCQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0U7QUFBSSxxQkFBUyxFQUFFMUIsOERBQU0sQ0FBQzJCLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6RkosRUFzR0d0RCxRQUFRLGlCQUNQO0FBQUssaUJBQVMsRUFBRTJCLDhEQUFNLENBQUM0QixLQUF2QjtBQUFBLCtCQUNFO0FBQU0sa0JBQVEsRUFBRTFDLFlBQWhCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFYyw4REFBTSxDQUFDNkIsU0FBdkI7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUU3Qiw4REFBTSxDQUFDOEIsV0FBdkI7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUU5Qiw4REFBTSxDQUFDK0IsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUNFLHlCQUFTLEVBQUUvQiw4REFBTSxDQUFDZ0MsVUFEcEI7QUFFRSx1QkFBTyxFQUFFMUMsZ0JBRlg7QUFHRSxxQkFBSyxFQUFDLDRCQUhSO0FBSUUscUJBQUssRUFBQyxRQUpSO0FBS0Usc0JBQU0sRUFBQyxRQUxUO0FBTUUsdUJBQU8sRUFBQyxtQkFOVjtBQU9FLHFCQUFLLEVBQUU7QUFDTGtCLHNCQUFJLEVBQUUsTUFERDtBQUVMQyx3QkFBTSxFQUFFLFNBRkg7QUFHTEMsa0NBQWdCLEVBQUUsRUFIYjtBQUlMQyw2QkFBVyxFQUFFO0FBSlIsaUJBUFQ7QUFBQSx3Q0FjRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWRGLGVBZUU7QUFDRSwyQkFBUyxFQUFDLEdBRFo7QUFFRSxtQkFBQyxFQUFDLHlCQUZKO0FBR0UsMkJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQXlCRTtBQUFLLHVCQUFTLEVBQUVYLDhEQUFNLENBQUNpQyxZQUF2QjtBQUFBLHNDQUNFO0FBQU8seUJBQVMsRUFBRWpDLDhEQUFNLENBQUNrQyxVQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQ0UseUJBQVMsRUFBRWxDLDhEQUFNLENBQUNtQyxVQURwQjtBQUVFLG9CQUFJLEVBQUMsTUFGUDtBQUdFLHFCQUFLLEVBQUV4RSxJQUhUO0FBSUUsd0JBQVEsRUFBRSxrQkFBQzZCLENBQUQsRUFBTztBQUNmNUIseUJBQU8sQ0FBQzRCLENBQUMsQ0FBQ3NCLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0Q7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBVUU7QUFBTyx5QkFBUyxFQUFFZiw4REFBTSxDQUFDa0MsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVkYsZUFXRTtBQUNFLHlCQUFTLEVBQUVsQyw4REFBTSxDQUFDbUMsVUFEcEI7QUFFRSxvQkFBSSxFQUFDLE1BRlA7QUFHRSxxQkFBSyxFQUFFdEUsSUFIVDtBQUlFLHdCQUFRLEVBQUUsa0JBQUMyQixDQUFELEVBQU87QUFDZjFCLHlCQUFPLENBQUMwQixDQUFDLENBQUNzQixNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNEO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFYRixlQW1CRTtBQUFPLHlCQUFTLEVBQUVmLDhEQUFNLENBQUNrQyxVQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuQkYsZUFvQkU7QUFDRSx5QkFBUyxFQUFFbEMsOERBQU0sQ0FBQ29DLGtCQURwQjtBQUVFLG9CQUFJLEVBQUMsTUFGUDtBQUdFLHFCQUFLLEVBQUVyRSxXQUhUO0FBSUUsd0JBQVEsRUFBRSxrQkFBQ3lCLENBQUQsRUFBTztBQUNmeEIsZ0NBQWMsQ0FBQ3dCLENBQUMsQ0FBQ3NCLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQ0Q7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXBCRixlQTRCRTtBQUFPLHlCQUFTLEVBQUVmLDhEQUFNLENBQUNrQyxVQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE1QkYsZUE2QkU7QUFBSyx5QkFBUyxFQUFFbEMsOERBQU0sQ0FBQ3FDLE9BQXZCO0FBQUEsd0NBQ0U7QUFDRSwyQkFBUyxFQUFFckMsOERBQU0sQ0FBQ21DLFVBRHBCO0FBRUUsc0JBQUksRUFBQyxNQUZQO0FBR0UsdUJBQUssRUFBRWxFLEdBSFQ7QUFJRSwwQkFBUSxFQUFFLGtCQUFDdUIsQ0FBRCxFQUFPO0FBQ2Z0QiwwQkFBTSxDQUFDc0IsQ0FBQyxDQUFDc0IsTUFBRixDQUFTQyxLQUFWLENBQU47QUFDRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFTRTtBQUNFLHlCQUFPLEVBQUU7QUFBQSwyQkFBTWxDLFlBQVksRUFBbEI7QUFBQSxtQkFEWDtBQUVFLDJCQUFTLEVBQUVtQiw4REFBTSxDQUFDc0MsV0FGcEI7QUFBQSx5Q0FJRTtBQUNFLDZCQUFTLEVBQUV0Qyw4REFBTSxDQUFDdUMsTUFEcEI7QUFFRSx5QkFBSyxFQUFDLDRCQUZSO0FBR0UsMkJBQU8sRUFBQyxrQkFIVjtBQUFBLDJDQUtFO0FBQUcsK0JBQVMsRUFBQyw4QkFBYjtBQUFBLDZDQUNFO0FBQ0UsaUNBQVMsRUFBQyxRQURaO0FBRUUseUJBQUMsRUFBQyw4QkFGSjtBQUdFLGlDQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVRGLGVBMkJFO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFFdkMsOERBQU0sQ0FBQ3dDLGFBQXZCO0FBQUEsOEJBQ0dyRSxJQUFJLElBQ0hBLElBQUksQ0FBQ2tELEdBQUwsQ0FBUyxVQUFDcEQsR0FBRCxFQUFTO0FBQ2hCLDBDQUNFO0FBQ0UsaUNBQVMsRUFBRStCLDhEQUFNLENBQUMvQixHQURwQjtBQUVFLDZCQUFLLEVBQUVBLEdBRlQ7QUFHRSwrQkFBTyxFQUFFO0FBQUEsaUNBQU1zQixlQUFlLENBQUN0QixHQUFELENBQXJCO0FBQUEseUJBSFg7QUFBQSxnREFLRTtBQUFBLG9DQUFJQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBTEYsZUFNRTtBQUNFLG1DQUFTLEVBQUUrQiw4REFBTSxDQUFDeUMsU0FEcEI7QUFFRSwrQkFBSyxFQUFDLDRCQUZSO0FBR0UsK0JBQUssRUFBQyxJQUhSO0FBSUUsZ0NBQU0sRUFBQyxJQUpUO0FBS0UsaUNBQU8sRUFBQyxtQkFMVjtBQU1FLCtCQUFLLEVBQUU7QUFDTGpDLGdDQUFJLEVBQUUsTUFERDtBQUVMQyxrQ0FBTSxFQUFFLFNBRkg7QUFHTEMsNENBQWdCLEVBQUUsRUFIYjtBQUlMQyx1Q0FBVyxFQUFFO0FBSlIsMkJBTlQ7QUFBQSxrREFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWJGLGVBY0U7QUFDRSxxQ0FBUyxFQUFDLEdBRFo7QUFFRSw2QkFBQyxFQUFDLHlCQUZKO0FBR0UscUNBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERjtBQTZCRCxxQkE5QkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekJGLGVBd0hFO0FBQVEsdUJBQVMsRUFBRVgsOERBQU0sQ0FBQzBDLFdBQTFCO0FBQUEsc0NBQ0U7QUFDRSx5QkFBUyxFQUFFMUMsOERBQU0sQ0FBQzJDLFlBRHBCO0FBRUUsdUJBQU8sRUFBRXJELGdCQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBT0U7QUFDRSx5QkFBUyxFQUFFVSw4REFBTSxDQUFDNEMsVUFEcEI7QUFFRSxvQkFBSSxFQUFDLFFBRlA7QUFHRSxxQkFBSyxFQUFDLFFBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXhIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThQRDs7R0FoVnVCekYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43OWQ3MGMyMjhlYmU2ODJkMGRmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaEZvclRhZ3MsIHNldFNlYXJjaEZvclRhZ3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFthZGRNb2RhbCwgc2V0QWRkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFBvc3RzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHNcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEZpbHRlcmVkUG9zdHMoKSB7XHJcbiAgICBpZiAoIXNlYXJjaEZvclRhZ3MpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz9xPSR7c2VhcmNoSW5wdXR9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRQb3N0cyhkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHM/dGFnc19saWtlPSR7c2VhcmNoSW5wdXR9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVBZGRUYWcoKSB7XHJcbiAgICBjb25zdCB0cmltVGFnID0gdGFnLnRyaW0oKTtcclxuICAgIGlmICh0cmltVGFnKSB7XHJcbiAgICAgIHNldFRhZ3MoWy4uLnRhZ3MsIHRyaW1UYWddKTtcclxuICAgICAgc2V0VGFnKFwiXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFNlYXJjaElucHV0KGV2ZW50KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGBcclxuICAgICAgbmFtZSAke25hbWV9LFxyXG4gICAgICBsaW5rICR7bGlua30sXHJcbiAgICAgIGRlc2MgJHtkZXNjcmlwdGlvbn0sXHJcbiAgICAgIHRhZ3MgJHt0YWdzfVxyXG4gICAgYCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJBIG5hbWUgd2FzIHN1Ym1pdHRlZDogXCIgKyB7IGV2ZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VNb2RhbCgpIHtcclxuICAgIHNldEFkZE1vZGFsKGZhbHNlKTtcclxuICAgIHNldE5hbWUoXCJcIik7XHJcbiAgICBzZXREZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIHNldExpbmsoXCJcIik7XHJcbiAgICBzZXRUYWdzKFtdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZVRhZyhlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRhZ3MuZmlsdGVyKCh3b3JkKSA9PiB3b3JkICE9IGUpO1xyXG4gICAgc2V0VGFncyhyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gZmV0Y2hGaWx0ZXJlZFBvc3RzKCksIDUwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgfSwgW3NlYXJjaElucHV0LCBzZWFyY2hGb3JUYWdzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBvc3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VlVUVFI8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWFpbn0gJHthZGRNb2RhbCAmJiBzdHlsZXMubW9kYWxJc09wZW59YH0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5WVVRUUjwvaDE+XHJcbiAgICAgICAgPGgyPlZlcnkgVXNlZnVsIFRvb2xzIHRvIFJlbWVtYmVyPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMZWZ0fT5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEljb259XHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0Ny43MDdcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ3LjcwN1wiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0Ny43MDcgNDcuNzA3XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzE3MGMzYVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEyNzIgLTE3OTkpXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0zOS4wNDksMzkuMDQ5LDU2LDU2XCJcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyNjMgMTc5MClcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgIGN4PVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICBjeT1cIjE3XCJcclxuICAgICAgICAgICAgICAgICAgcj1cIjE3XCJcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyNzMgMTgwMClcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaEZvclRhZ3N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNlYXJjaEZvclRhZ3MoIXNlYXJjaEZvclRhZ3MpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoTGFiZWx9PnNlYXJjaCBpbiB0YWdzIG9ubHk8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFkZE1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI2MS40MTRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjYxLjQyXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTGFiZWx9PkFkZDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgeyFwb3N0cy5sZW5ndGggPT0gMCA/IChcclxuICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPENhcmQga2V5PXtwb3N0LmlkfSBjb250ZW50PXtwb3N0fSBvbkRlbGV0ZT17aGFuZGxlUG9zdFJlbW92ZWR9IC8+O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub1Bvc3RzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub1Bvc3RzSW1nfT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXZlbWFuLmdpZlwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJOb3QgRm91bmRcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm5vdEZvdW5kfT5Pb29wcywgbm8gcG9zdHMgZm91bmQuLi48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHthZGRNb2RhbCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRpdGxlfT5BZGQgYSBuZXcgdG9vbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMy40MTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzhmOGE5YlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PlRvb2wgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9Pkxpbms8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGlua31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldExpbmsoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXRUZXh0QXJlYX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5UYWdzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWdzfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVGFnKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWdGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRUYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWdzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RhZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlVGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zMiwyMCwyMCwzMm0xMiwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxGb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zYXZlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9