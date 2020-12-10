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
      title = _useState4[0],
      setTitle = _useState4[1];

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

  function handlePostRemoved() {
    fetchPosts();
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

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
      var addTool;
      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();

              if (!(title && link && description && tags)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", console.log(title, link, description, tags));

            case 5:
              _context3.next = 7;
              return fetch('http://localhost:3000/tools', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  title: title,
                  link: link,
                  description: description,
                  tags: tags
                })
              });

            case 7:
              addTool = _context3.sent;
              console.log(addTool);
              fetchPosts();

            case 10:
              handleCloseModal();

            case 11:
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
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      className: "".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main, " ").concat(addModal && _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalIsOpen),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
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
              lineNumber: 132,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
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
            lineNumber: 148,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
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
              lineNumber: 182,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          content: post,
          onDelete: handlePostRemoved
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
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
            lineNumber: 202,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.notFound,
            children: "Ooops, no posts found..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
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
                    lineNumber: 234,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
                    transform: "translate(-568.793 -714.793)",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                      className: "a",
                      d: "M80,20.005l-60,60m60,0L20,20",
                      transform: "translate(549.501 695.5)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalTitle,
                  children: "Add a new tool"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 218,
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
                  lineNumber: 259,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M32,20,20,32m12,0L20,20",
                  transform: "translate(-19.292 -19.293)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalContent,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tool Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalInput,
                type: "text",
                value: title,
                onChange: function onChange(e) {
                  setTitle(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
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
                lineNumber: 278,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
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
                lineNumber: 287,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
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
                  lineNumber: 297,
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
                        lineNumber: 315,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 314,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 309,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
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
                          lineNumber: 333,
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
                            lineNumber: 347,
                            columnNumber: 35
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                            className: "a",
                            d: "M32,20,20,32m12,0L20,20",
                            transform: "translate(-19.292 -19.293)"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 348,
                            columnNumber: 35
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 334,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 328,
                        columnNumber: 31
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 324,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 323,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalFooter,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cancelButton,
                onClick: handleCloseModal,
                children: "Cancel"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 363,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.saveButton,
                type: "submit",
                value: "Submit",
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, this);
}

_s(Home, "PuMKngkT4S2glqp3WDM1ut1vz4M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hGb3JUYWdzIiwic2V0U2VhcmNoRm9yVGFncyIsInRpdGxlIiwic2V0VGl0bGUiLCJsaW5rIiwic2V0TGluayIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ0YWciLCJzZXRUYWciLCJ0YWdzIiwic2V0VGFncyIsImFkZE1vZGFsIiwic2V0QWRkTW9kYWwiLCJmZXRjaFBvc3RzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImhhbmRsZVBvc3RSZW1vdmVkIiwiZmV0Y2hGaWx0ZXJlZFBvc3RzIiwiaGFuZGxlQWRkVGFnIiwidHJpbVRhZyIsInRyaW0iLCJoYW5kbGVPbkNoYW5nZSIsImV2ZW50IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkVG9vbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVSZW1vdmVUYWciLCJlIiwicmVzdWx0IiwiZmlsdGVyIiwid29yZCIsInVzZUVmZmVjdCIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwibW9kYWxJc09wZW4iLCJoZWFkZXIiLCJoZWFkZXJMZWZ0Iiwic2VhcmNoSWNvbiIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoTGFiZWwiLCJhZGRCdXR0b24iLCJ0cmFuc2Zvcm0iLCJhZGRMYWJlbCIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJpZCIsIm5vUG9zdHMiLCJub1Bvc3RzSW1nIiwibm90Rm91bmQiLCJtb2RhbCIsIm1vZGFsQm9keSIsIm1vZGFsSGVhZGVyIiwibW9kYWxIZWFkZXJBZGQiLCJtb2RhbFRpdGxlIiwiY2xvc2VNb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsTGFiZWwiLCJtb2RhbElucHV0IiwibW9kYWxJbnB1dFRleHRBcmVhIiwiYWRkVGFncyIsImFkZFRhZ0ZpZWxkIiwiYWRkVGFnIiwidGFnc0NvbnRhaW5lciIsInJlbW92ZVRhZyIsIm1vZGFsRm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRXRCRyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBQUEsbUJBR2FKLHNEQUFRLENBQUMsS0FBRCxDQUhyQjtBQUFBLE1BR3RCSyxhQUhzQjtBQUFBLE1BR1BDLGdCQUhPOztBQUFBLG1CQUtITixzREFBUSxDQUFDLEVBQUQsQ0FMTDtBQUFBLE1BS3RCTyxLQUxzQjtBQUFBLE1BS2ZDLFFBTGU7O0FBQUEsbUJBTUxSLHNEQUFRLENBQUMsRUFBRCxDQU5IO0FBQUEsTUFNdEJTLElBTnNCO0FBQUEsTUFNaEJDLE9BTmdCOztBQUFBLG1CQU9TVixzREFBUSxDQUFDLEVBQUQsQ0FQakI7QUFBQSxNQU90QlcsV0FQc0I7QUFBQSxNQU9UQyxjQVBTOztBQUFBLG1CQVFQWixzREFBUSxDQUFDLEVBQUQsQ0FSRDtBQUFBLE1BUXRCYSxHQVJzQjtBQUFBLE1BUWpCQyxNQVJpQjs7QUFBQSxtQkFTTGQsc0RBQVEsQ0FBQyxFQUFELENBVEg7QUFBQSxNQVN0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QUFFRSw2QkFBQyxFQUFDLHlCQUZKO0FBR0UscUNBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERjtBQTZCRCxxQkE5QkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkRGLGVBa0pFO0FBQVEsdUJBQVMsRUFBRVYsOERBQU0sQ0FBQ3lDLFdBQTFCO0FBQUEsc0NBQ0U7QUFDRSx5QkFBUyxFQUFFekMsOERBQU0sQ0FBQzBDLFlBRHBCO0FBRUUsdUJBQU8sRUFBRXBELGdCQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBT0U7QUFDRSx5QkFBUyxFQUFFVSw4REFBTSxDQUFDMkMsVUFEcEI7QUFFRSxvQkFBSSxFQUFDLFFBRlA7QUFHRSxxQkFBSyxFQUFDLFFBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWxKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdSRDs7R0F4WHVCL0YsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NGJkMDNhMWI2ODZmMzcyMzU4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaEZvclRhZ3MsIHNldFNlYXJjaEZvclRhZ3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2FkZE1vZGFsLCBzZXRBZGRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVQb3N0UmVtb3ZlZCgpIHtcclxuICAgIGZldGNoUG9zdHMoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRmlsdGVyZWRQb3N0cygpIHtcclxuICAgIGlmICghc2VhcmNoRm9yVGFncykge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzP3E9JHtzZWFyY2hJbnB1dH1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz90YWdzX2xpa2U9JHtzZWFyY2hJbnB1dH1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRQb3N0cyhkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFRhZygpIHtcclxuICAgIGNvbnN0IHRyaW1UYWcgPSB0YWcudHJpbSgpO1xyXG4gICAgaWYgKHRyaW1UYWcpIHtcclxuICAgICAgc2V0VGFncyhbLi4udGFncywgdHJpbVRhZ10pO1xyXG4gICAgICBzZXRUYWcoXCJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZih0aXRsZSAmJiBsaW5rICYmIGRlc2NyaXB0aW9uICYmIHRhZ3MpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKHRpdGxlLCBsaW5rLCBkZXNjcmlwdGlvbiwgdGFncyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhZGRUb29sID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBsaW5rLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICB0YWdzXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFkZFRvb2wpXHJcbiAgICAgIGZldGNoUG9zdHMoKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUNsb3NlTW9kYWwoKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRBZGRNb2RhbChmYWxzZSk7XHJcbiAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgIHNldERlc2NyaXB0aW9uKFwiXCIpO1xyXG4gICAgc2V0TGluayhcIlwiKTtcclxuICAgIHNldFRhZ3MoW10pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlVGFnKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGFncy5maWx0ZXIoKHdvcmQpID0+IHdvcmQgIT0gZSk7XHJcbiAgICBzZXRUYWdzKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBmZXRjaEZpbHRlcmVkUG9zdHMoKSwgNTAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICB9LCBbc2VhcmNoSW5wdXQsIHNlYXJjaEZvclRhZ3NdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUG9zdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5WVVRUUjwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSAke2FkZE1vZGFsICYmIHN0eWxlcy5tb2RhbElzT3Blbn1gfT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlZVVFRSPC9oMT5cclxuICAgICAgICA8aDI+VmVyeSBVc2VmdWwgVG9vbHMgdG8gUmVtZW1iZXI8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxlZnR9PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn1cclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjQ3LjcwN1wiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDcuNzA3XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ3LjcwNyA0Ny43MDdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjMTcwYzNhXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTI3MiAtMTc5OSlcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTM5LjA0OSwzOS4wNDksNTYsNTZcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI2MyAxNzkwKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgY3g9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgIGN5PVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICByPVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI3MyAxODAwKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlT25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoRm9yVGFnc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0U2VhcmNoRm9yVGFncyghc2VhcmNoRm9yVGFncyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hMYWJlbH0+c2VhcmNoIGluIHRhZ3Mgb25seTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWRkTW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjYxLjQxNFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNjEuNDJcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKVwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5hZGRMYWJlbH0+QWRkPC9sYWJlbD5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7IXBvc3RzLmxlbmd0aCA9PSAwID8gKFxyXG4gICAgICAgICAgcG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Q2FyZCBrZXk9e3Bvc3QuaWR9IGNvbnRlbnQ9e3Bvc3R9IG9uRGVsZXRlPXtoYW5kbGVQb3N0UmVtb3ZlZH0gLz47XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUG9zdHN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUG9zdHNJbWd9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2NhdmVtYW4uZ2lmXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIk5vdCBGb3VuZFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubm90Rm91bmR9Pk9vb3BzLCBubyBwb3N0cyBmb3VuZC4uLjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2FkZE1vZGFsICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlckFkZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYxLjQxNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MS40MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiMxNzBDM0FcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRpdGxlfT5BZGQgYSBuZXcgdG9vbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTMuNDE0XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMy40MTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5Ub29sIFRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5MaW5rPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0VGV4dEFyZWF9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VGFnczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUYWcoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRhZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkVGFnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3NDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFncyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3MubWFwKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVUYWcodGFnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0YWd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZVRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjOGY4YTliXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhbmNlbEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2F2ZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==