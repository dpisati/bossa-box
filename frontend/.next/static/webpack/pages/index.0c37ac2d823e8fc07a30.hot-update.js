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

  function handlePostRemoved() {}

  function handleSaveNewTool() {
    return _handleSaveNewTool.apply(this, arguments);
  }

  function _handleSaveNewTool() {
    _handleSaveNewTool = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var addTool;
      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch('http://localhost:3000/tools', {
                method: 'POST'
              });

            case 2:
              addTool = _context2.sent;
              console.log(addTool);
              fetchPosts();
              handleCloseModal();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleSaveNewTool.apply(this, arguments);
  }

  function fetchFilteredPosts() {
    return _fetchFilteredPosts.apply(this, arguments);
  }

  function _fetchFilteredPosts() {
    _fetchFilteredPosts = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var res, data, _res, _data;

      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (searchForTags) {
                _context3.next = 10;
                break;
              }

              _context3.next = 3;
              return fetch("http://localhost:3000/tools?q=".concat(searchInput));

            case 3:
              res = _context3.sent;
              _context3.next = 6;
              return res.json();

            case 6:
              data = _context3.sent;
              setPosts(data);
              _context3.next = 17;
              break;

            case 10:
              _context3.next = 12;
              return fetch("http://localhost:3000/tools?tags_like=".concat(searchInput));

            case 12:
              _res = _context3.sent;
              _context3.next = 15;
              return _res.json();

            case 15:
              _data = _context3.sent;
              setPosts(_data);

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
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
        lineNumber: 104,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      className: "".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main, " ").concat(addModal && _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalIsOpen),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
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
              lineNumber: 129,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
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
            lineNumber: 145,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
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
              lineNumber: 179,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          content: post,
          onDelete: handlePostRemoved
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
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
            lineNumber: 199,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.notFound,
            children: "Ooops, no posts found..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }, this), addModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
          onSubmit: handleSubmit,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalBody,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalHeader,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalHeaderAdd,
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
                    lineNumber: 231,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
                    transform: "translate(-568.793 -714.793)",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                      className: "a",
                      d: "M80,20.005l-60,60m60,0L20,20",
                      transform: "translate(549.501 695.5)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalTitle,
                  children: "Add a new tool"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 215,
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
                  lineNumber: 256,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M32,20,20,32m12,0L20,20",
                  transform: "translate(-19.292 -19.293)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalContent,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tool Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
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
                lineNumber: 266,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
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
                lineNumber: 275,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
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
                lineNumber: 284,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 292,
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
                  lineNumber: 294,
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
                        lineNumber: 312,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 311,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 306,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 302,
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
                          lineNumber: 330,
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
                            lineNumber: 344,
                            columnNumber: 35
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                            className: "a",
                            d: "M32,20,20,32m12,0L20,20",
                            transform: "translate(-19.292 -19.293)"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 345,
                            columnNumber: 35
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 331,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 325,
                        columnNumber: 31
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 321,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 320,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalFooter,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cancelButton,
                onClick: handleCloseModal,
                children: "Cancel"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.saveButton,
                onClick: handleSaveNewTool,
                type: "submit",
                value: "Submit",
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 359,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hGb3JUYWdzIiwic2V0U2VhcmNoRm9yVGFncyIsIm5hbWUiLCJzZXROYW1lIiwibGluayIsInNldExpbmsiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidGFnIiwic2V0VGFnIiwidGFncyIsInNldFRhZ3MiLCJhZGRNb2RhbCIsInNldEFkZE1vZGFsIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJoYW5kbGVQb3N0UmVtb3ZlZCIsImhhbmRsZVNhdmVOZXdUb29sIiwibWV0aG9kIiwiYWRkVG9vbCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbG9zZU1vZGFsIiwiZmV0Y2hGaWx0ZXJlZFBvc3RzIiwiaGFuZGxlQWRkVGFnIiwidHJpbVRhZyIsInRyaW0iLCJoYW5kbGVPbkNoYW5nZSIsImV2ZW50IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVSZW1vdmVUYWciLCJlIiwicmVzdWx0IiwiZmlsdGVyIiwid29yZCIsInVzZUVmZmVjdCIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwibW9kYWxJc09wZW4iLCJ0aXRsZSIsImhlYWRlciIsImhlYWRlckxlZnQiLCJzZWFyY2hJY29uIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hMYWJlbCIsImFkZEJ1dHRvbiIsInRyYW5zZm9ybSIsImFkZExhYmVsIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsImlkIiwibm9Qb3N0cyIsIm5vUG9zdHNJbWciLCJub3RGb3VuZCIsIm1vZGFsIiwibW9kYWxCb2R5IiwibW9kYWxIZWFkZXIiLCJtb2RhbEhlYWRlckFkZCIsIm1vZGFsVGl0bGUiLCJjbG9zZU1vZGFsIiwibW9kYWxDb250ZW50IiwibW9kYWxMYWJlbCIsIm1vZGFsSW5wdXQiLCJtb2RhbElucHV0VGV4dEFyZWEiLCJhZGRUYWdzIiwiYWRkVGFnRmllbGQiLCJhZGRUYWciLCJ0YWdzQ29udGFpbmVyIiwicmVtb3ZlVGFnIiwibW9kYWxGb290ZXIiLCJjYW5jZWxCdXR0b24iLCJzYXZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFdEJHLFdBRnNCO0FBQUEsTUFFVEMsY0FGUzs7QUFBQSxtQkFHYUosc0RBQVEsQ0FBQyxLQUFELENBSHJCO0FBQUEsTUFHdEJLLGFBSHNCO0FBQUEsTUFHUEMsZ0JBSE87O0FBQUEsbUJBS0xOLHNEQUFRLENBQUMsRUFBRCxDQUxIO0FBQUEsTUFLdEJPLElBTHNCO0FBQUEsTUFLaEJDLE9BTGdCOztBQUFBLG1CQU1MUixzREFBUSxDQUFDLEVBQUQsQ0FOSDtBQUFBLE1BTXRCUyxJQU5zQjtBQUFBLE1BTWhCQyxPQU5nQjs7QUFBQSxtQkFPU1Ysc0RBQVEsQ0FBQyxFQUFELENBUGpCO0FBQUEsTUFPdEJXLFdBUHNCO0FBQUEsTUFPVEMsY0FQUzs7QUFBQSxtQkFRUFosc0RBQVEsQ0FBQyxFQUFELENBUkQ7QUFBQSxNQVF0QmEsR0FSc0I7QUFBQSxNQVFqQkMsTUFSaUI7O0FBQUEsbUJBU0xkLHNEQUFRLENBQUMsRUFBRCxDQVRIO0FBQUEsTUFTdEJlLElBVHNC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QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5ERixlQWtKRTtBQUFRLHVCQUFTLEVBQUVYLDhEQUFNLENBQUMwQyxXQUExQjtBQUFBLHNDQUNFO0FBQ0UseUJBQVMsRUFBRTFDLDhEQUFNLENBQUMyQyxZQURwQjtBQUVFLHVCQUFPLEVBQUU3RCxnQkFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQU9FO0FBQ0UseUJBQVMsRUFBRWtCLDhEQUFNLENBQUM0QyxVQURwQjtBQUVFLHVCQUFPLEVBQUVuRSxpQkFGWDtBQUdFLG9CQUFJLEVBQUMsUUFIUDtBQUlFLHFCQUFLLEVBQUMsUUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeVJEOztHQXRYdUIxQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBjMzdhYzJkODIzZThmYzA3YTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VhcmNoRm9yVGFncywgc2V0U2VhcmNoRm9yVGFnc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2FkZE1vZGFsLCBzZXRBZGRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVQb3N0UmVtb3ZlZCgpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2F2ZU5ld1Rvb2woKSB7XHJcbiAgICBjb25zdCBhZGRUb29sID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGFkZFRvb2wpXHJcbiAgICBmZXRjaFBvc3RzKCk7XHJcbiAgICBoYW5kbGVDbG9zZU1vZGFsKClcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRmlsdGVyZWRQb3N0cygpIHtcclxuICAgIGlmICghc2VhcmNoRm9yVGFncykge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzP3E9JHtzZWFyY2hJbnB1dH1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz90YWdzX2xpa2U9JHtzZWFyY2hJbnB1dH1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRQb3N0cyhkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFRhZygpIHtcclxuICAgIGNvbnN0IHRyaW1UYWcgPSB0YWcudHJpbSgpO1xyXG4gICAgaWYgKHRyaW1UYWcpIHtcclxuICAgICAgc2V0VGFncyhbLi4udGFncywgdHJpbVRhZ10pO1xyXG4gICAgICBzZXRUYWcoXCJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coYFxyXG4gICAgICBuYW1lICR7bmFtZX0sXHJcbiAgICAgIGxpbmsgJHtsaW5rfSxcclxuICAgICAgZGVzYyAke2Rlc2NyaXB0aW9ufSxcclxuICAgICAgdGFncyAke3RhZ3N9XHJcbiAgICBgKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkEgbmFtZSB3YXMgc3VibWl0dGVkOiBcIiArIHsgZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0QWRkTW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0TmFtZShcIlwiKTtcclxuICAgIHNldERlc2NyaXB0aW9uKFwiXCIpO1xyXG4gICAgc2V0TGluayhcIlwiKTtcclxuICAgIHNldFRhZ3MoW10pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlVGFnKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGFncy5maWx0ZXIoKHdvcmQpID0+IHdvcmQgIT0gZSk7XHJcbiAgICBzZXRUYWdzKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBmZXRjaEZpbHRlcmVkUG9zdHMoKSwgNTAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICB9LCBbc2VhcmNoSW5wdXQsIHNlYXJjaEZvclRhZ3NdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUG9zdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5WVVRUUjwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSAke2FkZE1vZGFsICYmIHN0eWxlcy5tb2RhbElzT3Blbn1gfT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlZVVFRSPC9oMT5cclxuICAgICAgICA8aDI+VmVyeSBVc2VmdWwgVG9vbHMgdG8gUmVtZW1iZXI8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxlZnR9PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn1cclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjQ3LjcwN1wiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDcuNzA3XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ3LjcwNyA0Ny43MDdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjMTcwYzNhXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTI3MiAtMTc5OSlcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTM5LjA0OSwzOS4wNDksNTYsNTZcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI2MyAxNzkwKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgY3g9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgIGN5PVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICByPVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI3MyAxODAwKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlT25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoRm9yVGFnc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0U2VhcmNoRm9yVGFncyghc2VhcmNoRm9yVGFncyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hMYWJlbH0+c2VhcmNoIGluIHRhZ3Mgb25seTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWRkTW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjYxLjQxNFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNjEuNDJcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKVwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5hZGRMYWJlbH0+QWRkPC9sYWJlbD5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7IXBvc3RzLmxlbmd0aCA9PSAwID8gKFxyXG4gICAgICAgICAgcG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Q2FyZCBrZXk9e3Bvc3QuaWR9IGNvbnRlbnQ9e3Bvc3R9IG9uRGVsZXRlPXtoYW5kbGVQb3N0UmVtb3ZlZH0gLz47XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUG9zdHN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUG9zdHNJbWd9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2NhdmVtYW4uZ2lmXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIk5vdCBGb3VuZFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubm90Rm91bmR9Pk9vb3BzLCBubyBwb3N0cyBmb3VuZC4uLjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2FkZE1vZGFsICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlckFkZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYxLjQxNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MS40MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiMxNzBDM0FcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRpdGxlfT5BZGQgYSBuZXcgdG9vbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTMuNDE0XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMy40MTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5Ub29sIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5MaW5rPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0VGV4dEFyZWF9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VGFnczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUYWcoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRhZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkVGFnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3NDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFncyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3MubWFwKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVUYWcodGFnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0YWd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZVRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjOGY4YTliXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhbmNlbEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2F2ZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlTmV3VG9vbH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==