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

  var tagInput = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);

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
  } // async function handleSubmit(event) {
  //   event.preventDefault();
  //   if (
  //     title.length === 0 ||
  //     link.length === 0 ||
  //     description.length === 0 ||
  //     tags.length === 0
  //   ) {
  //     return console.log("not true", title, link, description, tags);
  //   } else {
  //     const addTool = await fetch("http://localhost:3000/tools", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         title,
  //         link,
  //         description,
  //         tags,
  //       }),
  //     });
  //     console.log(addTool);
  //     fetchPosts();
  //     handleCloseModal();
  //   }
  // }


  function _handleSubmit() {
    _handleSubmit = Object(C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
      var addTool;
      return C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();
              _context3.next = 3;
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

            case 3:
              addTool = _context3.sent;
              console.log(addTool);
              fetchPosts();
              handleCloseModal();

            case 7:
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
        lineNumber: 134,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      className: "".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main, " ").concat(addModal && _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalIsOpen),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
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
              lineNumber: 159,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
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
            lineNumber: 175,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
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
              lineNumber: 209,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          content: post,
          onDelete: handlePostRemoved
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
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
            lineNumber: 231,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.notFound,
            children: "Ooops, no posts found..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
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
                    lineNumber: 263,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
                    transform: "translate(-568.793 -714.793)",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                      className: "a",
                      d: "M80,20.005l-60,60m60,0L20,20",
                      transform: "translate(549.501 695.5)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalTitle,
                  children: "Add a new tool"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 247,
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
                  lineNumber: 288,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M32,20,20,32m12,0L20,20",
                  transform: "translate(-19.292 -19.293)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalContent,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tool Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
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
                lineNumber: 298,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
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
                lineNumber: 307,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 315,
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
                lineNumber: 316,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 324,
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
                  lineNumber: 326,
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
                        lineNumber: 345,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 344,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 339,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 335,
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
                          lineNumber: 363,
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
                            lineNumber: 377,
                            columnNumber: 35
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                            className: "a",
                            d: "M32,20,20,32m12,0L20,20",
                            transform: "translate(-19.292 -19.293)"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 378,
                            columnNumber: 35
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 364,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 358,
                        columnNumber: 31
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 354,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 353,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 325,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalFooter,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cancelButton,
                onClick: handleCloseModal,
                children: "Cancel"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.saveButton,
                type: "submit",
                value: "Submit",
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 399,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhZ0lucHV0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInNlYXJjaEZvclRhZ3MiLCJzZXRTZWFyY2hGb3JUYWdzIiwidGl0bGUiLCJzZXRUaXRsZSIsImxpbmsiLCJzZXRMaW5rIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInRhZyIsInNldFRhZyIsInRhZ3MiLCJzZXRUYWdzIiwiYWRkTW9kYWwiLCJzZXRBZGRNb2RhbCIsImhhbmRsZUZvY3VzIiwiY3VycmVudCIsImZvY3VzIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJoYW5kbGVQb3N0UmVtb3ZlZCIsImZldGNoRmlsdGVyZWRQb3N0cyIsImhhbmRsZUFkZFRhZyIsInRyaW1UYWciLCJ0cmltIiwiaGFuZGxlT25DaGFuZ2UiLCJldmVudCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkVG9vbCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlUmVtb3ZlVGFnIiwiZSIsInJlc3VsdCIsImZpbHRlciIsIndvcmQiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsIm1vZGFsSXNPcGVuIiwiaGVhZGVyIiwiaGVhZGVyTGVmdCIsInNlYXJjaEljb24iLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaExhYmVsIiwiYWRkQnV0dG9uIiwidHJhbnNmb3JtIiwiYWRkTGFiZWwiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiaWQiLCJub1Bvc3RzIiwibm9Qb3N0c0ltZyIsIm5vdEZvdW5kIiwibW9kYWwiLCJtb2RhbEJvZHkiLCJtb2RhbEhlYWRlciIsIm1vZGFsSGVhZGVyQWRkIiwibW9kYWxUaXRsZSIsImNsb3NlTW9kYWwiLCJtb2RhbENvbnRlbnQiLCJtb2RhbExhYmVsIiwibW9kYWxJbnB1dCIsIm1vZGFsSW5wdXRUZXh0QXJlYSIsImFkZFRhZ3MiLCJhZGRUYWdGaWVsZCIsImFkZFRhZyIsInRhZ3NDb250YWluZXIiLCJyZW1vdmVUYWciLCJtb2RhbEZvb3RlciIsImNhbmNlbEJ1dHRvbiIsInNhdmVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRDZCLGtCQUVIQyxzREFBUSxDQUFDLEVBQUQsQ0FGTDtBQUFBLE1BRXRCQyxLQUZzQjtBQUFBLE1BRWZDLFFBRmU7O0FBQUEsbUJBR1NGLHNEQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR3RCRyxXQUhzQjtBQUFBLE1BR1RDLGNBSFM7O0FBQUEsbUJBSWFKLHNEQUFRLENBQUMsS0FBRCxDQUpyQjtBQUFBLE1BSXRCSyxhQUpzQjtBQUFBLE1BSVBDLGdCQUpPOztBQUFBLG1CQU1ITixzREFBUSxDQUFDLEVBQUQsQ0FOTDtBQUFBLE1BTXRCTyxLQU5zQjtBQUFBLE1BTWZDLFFBTmU7O0FBQUEsbUJBT0xSLHNEQUFRLENBQUMsRUFBRCxDQVBIO0FBQUEsTUFPdEJTLElBUHNCO0FBQUEsTUFPaEJDLE9BUGdCOztBQUFBLG1CQVFTVixzREFBUSxDQUFDLEVBQUQsQ0FSakI7QUFBQSxNQVF0QlcsV0FSc0I7QUFBQSxNQVFUQyxjQVJTOztBQUFBLG1CQVNQWixz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QXRadUJwRyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdiMTU5NmFlZGQ3M2RjZTc0MzNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB0YWdJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hGb3JUYWdzLCBzZXRTZWFyY2hGb3JUYWdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFthZGRNb2RhbCwgc2V0QWRkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcclxuICAgIHRhZ0lucHV0LmN1cnJlbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVQb3N0UmVtb3ZlZCgpIHtcclxuICAgIGZldGNoUG9zdHMoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRmlsdGVyZWRQb3N0cygpIHtcclxuICAgIGlmICghc2VhcmNoRm9yVGFncykge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzP3E9JHtzZWFyY2hJbnB1dH1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz90YWdzX2xpa2U9JHtzZWFyY2hJbnB1dH1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRQb3N0cyhkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFRhZygpIHtcclxuICAgIGNvbnN0IHRyaW1UYWcgPSB0YWcudHJpbSgpO1xyXG4gICAgaWYgKHRyaW1UYWcpIHtcclxuICAgICAgaGFuZGxlRm9jdXMoKTtcclxuICAgICAgc2V0VGFncyhbLi4udGFncywgdHJpbVRhZ10pO1xyXG4gICAgICBzZXRUYWcoXCJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRTZWFyY2hJbnB1dChldmVudCk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGFkZFRvb2wgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGxpbmssXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgdGFncyxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGFkZFRvb2wpO1xyXG4gICAgZmV0Y2hQb3N0cygpO1xyXG4gICAgaGFuZGxlQ2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuICAvLyBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIC8vICAgaWYgKFxyXG4gIC8vICAgICB0aXRsZS5sZW5ndGggPT09IDAgfHxcclxuICAvLyAgICAgbGluay5sZW5ndGggPT09IDAgfHxcclxuICAvLyAgICAgZGVzY3JpcHRpb24ubGVuZ3RoID09PSAwIHx8XHJcbiAgLy8gICAgIHRhZ3MubGVuZ3RoID09PSAwXHJcbiAgLy8gICApIHtcclxuICAvLyAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwibm90IHRydWVcIiwgdGl0bGUsIGxpbmssIGRlc2NyaXB0aW9uLCB0YWdzKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGNvbnN0IGFkZFRvb2wgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiLCB7XHJcbiAgLy8gICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAvLyAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gIC8vICAgICAgICAgdGl0bGUsXHJcbiAgLy8gICAgICAgICBsaW5rLFxyXG4gIC8vICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgLy8gICAgICAgICB0YWdzLFxyXG4gIC8vICAgICAgIH0pLFxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgY29uc29sZS5sb2coYWRkVG9vbCk7XHJcbiAgLy8gICAgIGZldGNoUG9zdHMoKTtcclxuICAvLyAgICAgaGFuZGxlQ2xvc2VNb2RhbCgpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VNb2RhbCgpIHtcclxuICAgIHNldEFkZE1vZGFsKGZhbHNlKTtcclxuICAgIHNldFRpdGxlKFwiXCIpO1xyXG4gICAgc2V0RGVzY3JpcHRpb24oXCJcIik7XHJcbiAgICBzZXRMaW5rKFwiXCIpO1xyXG4gICAgc2V0VGFncyhbXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVUYWcoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0YWdzLmZpbHRlcigod29yZCkgPT4gd29yZCAhPSBlKTtcclxuICAgIHNldFRhZ3MocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IGZldGNoRmlsdGVyZWRQb3N0cygpLCA1MDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gIH0sIFtzZWFyY2hJbnB1dCwgc2VhcmNoRm9yVGFnc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQb3N0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlZVVFRSPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1haW59ICR7YWRkTW9kYWwgJiYgc3R5bGVzLm1vZGFsSXNPcGVufWB9PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VlVUVFI8L2gxPlxyXG4gICAgICAgIDxoMj5WZXJ5IFVzZWZ1bCBUb29scyB0byBSZW1lbWJlcjwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGVmdH0+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJY29ufVxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDcuNzA3XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0Ny43MDdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDcuNzA3IDQ3LjcwN1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiMxNzBjM2FcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMjcyIC0xNzk5KVwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMzkuMDQ5LDM5LjA0OSw1Niw1NlwiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjYzIDE3OTApXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICBjeD1cIjE3XCJcclxuICAgICAgICAgICAgICAgICAgY3k9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgIHI9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjczIDE4MDApXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVPbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hGb3JUYWdzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRTZWFyY2hGb3JUYWdzKCFzZWFyY2hGb3JUYWdzKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaExhYmVsfT5zZWFyY2ggaW4gdGFncyBvbmx5PC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBZGRNb2RhbCh0cnVlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNjEuNDE0XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI2MS40MlwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoNDVkZWcpXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmFkZExhYmVsfT5BZGQ8L2xhYmVsPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHshcG9zdHMubGVuZ3RoID09IDAgPyAoXHJcbiAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e3Bvc3QuaWR9IGNvbnRlbnQ9e3Bvc3R9IG9uRGVsZXRlPXtoYW5kbGVQb3N0UmVtb3ZlZH0gLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9Qb3N0c30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9Qb3N0c0ltZ30+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2F2ZW1hbi5naWZcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiTm90IEZvdW5kXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ub3RGb3VuZH0+T29vcHMsIG5vIHBvc3RzIGZvdW5kLi4uPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7YWRkTW9kYWwgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCb2R5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyQWRkfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjEuNDE0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjYxLjQyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzE3MEMzQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUaXRsZX0+QWRkIGEgbmV3IHRvb2w8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEzLjQxNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTMuNDE1XCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjOGY4YTliXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0zMiwyMCwyMCwzMm0xMiwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+VG9vbCBUaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMYWJlbH0+TGluazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0TGluayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbnB1dFRleHRBcmVhfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PlRhZ3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXt0YWdJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVGFnKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWdGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZFRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRUYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWdzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RhZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlVGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMuNDE0IDEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiM4ZjhhOWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zMiwyMCwyMCwzMm0xMiwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yOTIgLTE5LjI5MylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxGb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zYXZlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9