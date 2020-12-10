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
/* harmony import */ var C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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





var _jsxFileName = "C:\\Users\\user1\\Documents\\Github\\bossa-box\\frontend\\pages\\index.js",
    _s = $RefreshSig$();






function Home() {
  _s();

  var _this = this;

  var tagInput = useRef(null);

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

  function handleFocus() {
    tagInput.current.focus();
  }

  function fetchPosts() {
    return _fetchPosts.apply(this, arguments);
  }

  function _fetchPosts() {
    _fetchPosts = Object(C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
    _fetchFilteredPosts = Object(C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var res, data, _res, _data;

      return C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
      handleFocus();
      setTags([].concat(Object(C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(tags), [trimTag]));
      setTag("");
    }

    return handleFocus();
  }

  var handleOnChange = function handleOnChange(event) {
    setSearchInput(event);
  };

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
      var addTool;
      return C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();

              if (!(title.length === 0 || link.length === 0 || description.length === 0 || tags.length === 0)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", console.log("not true", title, link, description, tags));

            case 5:
              _context3.next = 7;
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
              addTool = _context3.sent;
              console.log(addTool);
              fetchPosts();
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
        lineNumber: 117,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      className: "".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main, " ").concat(addModal && _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalIsOpen),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
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
              lineNumber: 142,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
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
            lineNumber: 158,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
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
              lineNumber: 192,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          content: post,
          onDelete: handlePostRemoved
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 15
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
            lineNumber: 214,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.notFound,
            children: "Ooops, no posts found..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
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
                    lineNumber: 246,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
                    transform: "translate(-568.793 -714.793)",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                      className: "a",
                      d: "M80,20.005l-60,60m60,0L20,20",
                      transform: "translate(549.501 695.5)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 248,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalTitle,
                  children: "Add a new tool"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 230,
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
                  lineNumber: 271,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M32,20,20,32m12,0L20,20",
                  transform: "translate(-19.292 -19.293)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalContent,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tool Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
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
                lineNumber: 281,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
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
                lineNumber: 290,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
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
                lineNumber: 299,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addTags,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                  ref: tagInput,
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalInput,
                  type: "text",
                  value: tag,
                  onChange: function onChange(e) {
                    setTag(e.target.value);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
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
                        lineNumber: 328,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 327,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 318,
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
                          lineNumber: 346,
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
                            lineNumber: 360,
                            columnNumber: 35
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                            className: "a",
                            d: "M32,20,20,32m12,0L20,20",
                            transform: "translate(-19.292 -19.293)"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 361,
                            columnNumber: 35
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 347,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 341,
                        columnNumber: 31
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 337,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 336,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalFooter,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cancelButton,
                onClick: handleCloseModal,
                children: "Cancel"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.saveButton,
                type: "submit",
                value: "Submit",
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 382,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 5
  }, this);
}

_s(Home, "3RhsWpZ1fRQZAqgKVYQJ5edXupM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhZ0lucHV0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInNlYXJjaEZvclRhZ3MiLCJzZXRTZWFyY2hGb3JUYWdzIiwidGl0bGUiLCJzZXRUaXRsZSIsImxpbmsiLCJzZXRMaW5rIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInRhZyIsInNldFRhZyIsInRhZ3MiLCJzZXRUYWdzIiwiYWRkTW9kYWwiLCJzZXRBZGRNb2RhbCIsImhhbmRsZUZvY3VzIiwiY3VycmVudCIsImZvY3VzIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJoYW5kbGVQb3N0UmVtb3ZlZCIsImZldGNoRmlsdGVyZWRQb3N0cyIsImhhbmRsZUFkZFRhZyIsInRyaW1UYWciLCJ0cmltIiwiaGFuZGxlT25DaGFuZ2UiLCJldmVudCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFkZFRvb2wiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlUmVtb3ZlVGFnIiwiZSIsInJlc3VsdCIsImZpbHRlciIsIndvcmQiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsIm1vZGFsSXNPcGVuIiwiaGVhZGVyIiwiaGVhZGVyTGVmdCIsInNlYXJjaEljb24iLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaExhYmVsIiwiYWRkQnV0dG9uIiwidHJhbnNmb3JtIiwiYWRkTGFiZWwiLCJtYXAiLCJwb3N0IiwiaWQiLCJub1Bvc3RzIiwibm9Qb3N0c0ltZyIsIm5vdEZvdW5kIiwibW9kYWwiLCJtb2RhbEJvZHkiLCJtb2RhbEhlYWRlciIsIm1vZGFsSGVhZGVyQWRkIiwibW9kYWxUaXRsZSIsImNsb3NlTW9kYWwiLCJtb2RhbENvbnRlbnQiLCJtb2RhbExhYmVsIiwibW9kYWxJbnB1dCIsIm1vZGFsSW5wdXRUZXh0QXJlYSIsImFkZFRhZ3MiLCJhZGRUYWdGaWVsZCIsImFkZFRhZyIsInRhZ3NDb250YWluZXIiLCJyZW1vdmVUYWciLCJtb2RhbEZvb3RlciIsImNhbmNlbEJ1dHRvbiIsInNhdmVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQyxNQUFNLENBQUMsSUFBRCxDQUF2Qjs7QUFENkIsa0JBRUhDLHNEQUFRLENBQUMsRUFBRCxDQUZMO0FBQUEsTUFFdEJDLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7QUFBQSxtQkFHU0Ysc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHdEJHLFdBSHNCO0FBQUEsTUFHVEMsY0FIUzs7QUFBQSxtQkFJYUosc0RBQVEsQ0FBQyxLQUFELENBSnJCO0FBQUEsTUFJdEJLLGFBSnNCO0FBQUEsTUFJUEMsZ0JBSk87O0FBQUEsbUJBTUhOLHNEQUFRLENBQUMsRUFBRCxDQU5MO0FBQUEsTUFNdEJPLEtBTnNCO0FBQUEsTUFNZkMsUUFOZTs7QUFBQSxtQkFPTFIsc0RBQVEsQ0FBQyxFQUFELENBUEg7QUFBQSxNQU90QlMsSUFQc0I7QUFBQSxNQU9oQkMsT0FQZ0I7O0FBQUEsbUJBUVNWLHNEQUFRLENBQUMsRUFBRCxDQVJqQjtBQUFBLE1BUXRCVyxXQVJzQjtBQUFBLE1BUVRDLGNBUlM7O0FBQUEsbUJBU1BaLHNE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QTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMlJEOztHQXJZdUJwRyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZlZWQxOGVlNGM1NTA1YzRkYzgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgdGFnSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VhcmNoRm9yVGFncywgc2V0U2VhcmNoRm9yVGFnc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbYWRkTW9kYWwsIHNldEFkZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XHJcbiAgICB0YWdJbnB1dC5jdXJyZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFBvc3RzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHNcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlUG9zdFJlbW92ZWQoKSB7XHJcbiAgICBmZXRjaFBvc3RzKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEZpbHRlcmVkUG9zdHMoKSB7XHJcbiAgICBpZiAoIXNlYXJjaEZvclRhZ3MpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz9xPSR7c2VhcmNoSW5wdXR9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRQb3N0cyhkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHM/dGFnc19saWtlPSR7c2VhcmNoSW5wdXR9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVBZGRUYWcoKSB7XHJcbiAgICBjb25zdCB0cmltVGFnID0gdGFnLnRyaW0oKTtcclxuICAgIGlmICh0cmltVGFnKSB7XHJcbiAgICAgIGhhbmRsZUZvY3VzKCk7XHJcbiAgICAgIHNldFRhZ3MoWy4uLnRhZ3MsIHRyaW1UYWddKTtcclxuICAgICAgc2V0VGFnKFwiXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhbmRsZUZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRpdGxlLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICBsaW5rLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICBkZXNjcmlwdGlvbi5sZW5ndGggPT09IDAgfHxcclxuICAgICAgdGFncy5sZW5ndGggPT09IDBcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCJub3QgdHJ1ZVwiLCB0aXRsZSwgbGluaywgZGVzY3JpcHRpb24sIHRhZ3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYWRkVG9vbCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIGxpbmssXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIHRhZ3MsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhhZGRUb29sKTtcclxuICAgICAgZmV0Y2hQb3N0cygpO1xyXG4gICAgICBoYW5kbGVDbG9zZU1vZGFsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0QWRkTW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0VGl0bGUoXCJcIik7XHJcbiAgICBzZXREZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIHNldExpbmsoXCJcIik7XHJcbiAgICBzZXRUYWdzKFtdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZVRhZyhlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRhZ3MuZmlsdGVyKCh3b3JkKSA9PiB3b3JkICE9IGUpO1xyXG4gICAgc2V0VGFncyhyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gZmV0Y2hGaWx0ZXJlZFBvc3RzKCksIDUwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgfSwgW3NlYXJjaElucHV0LCBzZWFyY2hGb3JUYWdzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBvc3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VlVUVFI8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWFpbn0gJHthZGRNb2RhbCAmJiBzdHlsZXMubW9kYWxJc09wZW59YH0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5WVVRUUjwvaDE+XHJcbiAgICAgICAgPGgyPlZlcnkgVXNlZnVsIFRvb2xzIHRvIFJlbWVtYmVyPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMZWZ0fT5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEljb259XHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0Ny43MDdcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ3LjcwN1wiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0Ny43MDcgNDcuNzA3XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzE3MGMzYVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEyNzIgLTE3OTkpXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0zOS4wNDksMzkuMDQ5LDU2LDU2XCJcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyNjMgMTc5MClcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgIGN4PVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICBjeT1cIjE3XCJcclxuICAgICAgICAgICAgICAgICAgcj1cIjE3XCJcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyNzMgMTgwMClcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaEZvclRhZ3N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNlYXJjaEZvclRhZ3MoIXNlYXJjaEZvclRhZ3MpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoTGFiZWx9PnNlYXJjaCBpbiB0YWdzIG9ubHk8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFkZE1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI2MS40MTRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjYxLjQyXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTGFiZWx9PkFkZDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgeyFwb3N0cy5sZW5ndGggPT0gMCA/IChcclxuICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDYXJkIGtleT17cG9zdC5pZH0gY29udGVudD17cG9zdH0gb25EZWxldGU9e2hhbmRsZVBvc3RSZW1vdmVkfSAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub1Bvc3RzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub1Bvc3RzSW1nfT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXZlbWFuLmdpZlwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJOb3QgRm91bmRcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm5vdEZvdW5kfT5Pb29wcywgbm8gcG9zdHMgZm91bmQuLi48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHthZGRNb2RhbCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJBZGR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2MS40MTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjMTcwQzNBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoNDVkZWcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRpdGxlfT5BZGQgYSBuZXcgdG9vbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTMuNDE0XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMy40MTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5Ub29sIFRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5MaW5rPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0VGV4dEFyZWF9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VGFnczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWY9e3RhZ0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFnKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUYWcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ0ZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZFRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZ3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlVGFnKHRhZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGFnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmVUYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzhmOGE5YlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTMyLDIwLDIwLDMybTEyLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYW5jZWxCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNhdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=