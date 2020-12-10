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
    _handleSubmit = Object(C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
      var addTool;
      return C_Users_user1_Documents_Github_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
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
          onKeyPress: function onKeyPress(e) {
            e.key === "Enter" && e.preventDefault();
          },
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
                    lineNumber: 268,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("g", {
                    transform: "translate(-568.793 -714.793)",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                      className: "a",
                      d: "M80,20.005l-60,60m60,0L20,20",
                      transform: "translate(549.501 695.5)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 270,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalTitle,
                  children: "Add a new tool"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 252,
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
                  lineNumber: 293,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                  className: "a",
                  d: "M32,20,20,32m12,0L20,20",
                  transform: "translate(-19.292 -19.293)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalContent,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tool Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
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
                lineNumber: 303,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
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
                lineNumber: 312,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 320,
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
                lineNumber: 321,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalLabel,
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 329,
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
                  lineNumber: 331,
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
                        lineNumber: 350,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 349,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 344,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 340,
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
                          lineNumber: 368,
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
                            lineNumber: 382,
                            columnNumber: 35
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                            className: "a",
                            d: "M32,20,20,32m12,0L20,20",
                            transform: "translate(-19.292 -19.293)"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 383,
                            columnNumber: 35
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 369,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 363,
                        columnNumber: 31
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 359,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 358,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modalFooter,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cancelButton,
                onClick: handleCloseModal,
                children: "Cancel"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 398,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.saveButton,
                type: "submit",
                value: "Submit",
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 404,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhZ0lucHV0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInNlYXJjaEZvclRhZ3MiLCJzZXRTZWFyY2hGb3JUYWdzIiwidGl0bGUiLCJzZXRUaXRsZSIsImxpbmsiLCJzZXRMaW5rIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInRhZyIsInNldFRhZyIsInRhZ3MiLCJzZXRUYWdzIiwiYWRkTW9kYWwiLCJzZXRBZGRNb2RhbCIsImhhbmRsZUZvY3VzIiwiY3VycmVudCIsImZvY3VzIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJoYW5kbGVQb3N0UmVtb3ZlZCIsImZldGNoRmlsdGVyZWRQb3N0cyIsImhhbmRsZUFkZFRhZyIsInRyaW1UYWciLCJ0cmltIiwiaGFuZGxlT25DaGFuZ2UiLCJldmVudCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFkZFRvb2wiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZVJlbW92ZVRhZyIsInJlc3VsdCIsImZpbHRlciIsIndvcmQiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsIm1vZGFsSXNPcGVuIiwiaGVhZGVyIiwiaGVhZGVyTGVmdCIsInNlYXJjaEljb24iLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaExhYmVsIiwiYWRkQnV0dG9uIiwidHJhbnNmb3JtIiwiYWRkTGFiZWwiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiaWQiLCJub1Bvc3RzIiwibm9Qb3N0c0ltZyIsIm5vdEZvdW5kIiwibW9kYWwiLCJrZXkiLCJtb2RhbEJvZHkiLCJtb2RhbEhlYWRlciIsIm1vZGFsSGVhZGVyQWRkIiwibW9kYWxUaXRsZSIsImNsb3NlTW9kYWwiLCJtb2RhbENvbnRlbnQiLCJtb2RhbExhYmVsIiwibW9kYWxJbnB1dCIsIm1vZGFsSW5wdXRUZXh0QXJlYSIsImFkZFRhZ3MiLCJhZGRUYWdGaWVsZCIsImFkZFRhZyIsInRhZ3NDb250YWluZXIiLCJyZW1vdmVUYWciLCJtb2RhbEZvb3RlciIsImNhbmNlbEJ1dHRvbiIsInNhdmVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRDZCLGtCQUVIQyxzREFBUSxDQUFDLEVBQUQsQ0FGTDtBQUFBLE1BRXRCQyxLQUZzQjtBQUFBLE1BRWZDLFFBRmU7O0FBQUEsbUJBR1NGLHNEQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR3RCRyxXQUhzQjtBQUFBLE1BR1RDLGNBSFM7O0FBQUEsbUJBSWFKLHNEQUFRLENBQUMsS0FBRCxDQUpyQjtBQUFBLE1BSXRCSyxhQUpzQjtBQUFBLE1BSVBDLGdCQUpPOztBQUFBLG1CQU1ITixzREFBUSxDQUFDLEVBQUQsQ0FOTDtBQUFBLE1BTXRCTyxLQU5zQjtBQUFBLE1BTWZDLFFBTmU7O0FBQUEsbUJBT0xSLHNEQUFRLENBQUMsRUFBRCxDQVBIO0FBQUEsTUFPdEJTLElBUHNCO0FBQUEsTUFPaEJDLE9BUGdCOztBQUFBLG1CQVFTVixzREFBUSxDQUFDLEVBQUQsQ0FSakI7QUFBQSxNQVF0QlcsV0FSc0I7QUFBQSxNQVFUQyxjQVJTOztBQUFBLG1C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QTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ1NEOztHQTNadUJyRyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRjMzdjMDI1ZDBjNDU2YjA3ODM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB0YWdJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hGb3JUYWdzLCBzZXRTZWFyY2hGb3JUYWdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFthZGRNb2RhbCwgc2V0QWRkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcclxuICAgIHRhZ0lucHV0LmN1cnJlbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVQb3N0UmVtb3ZlZCgpIHtcclxuICAgIGZldGNoUG9zdHMoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRmlsdGVyZWRQb3N0cygpIHtcclxuICAgIGlmICghc2VhcmNoRm9yVGFncykge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzP3E9JHtzZWFyY2hJbnB1dH1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz90YWdzX2xpa2U9JHtzZWFyY2hJbnB1dH1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRQb3N0cyhkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFRhZygpIHtcclxuICAgIGNvbnN0IHRyaW1UYWcgPSB0YWcudHJpbSgpO1xyXG4gICAgaWYgKHRyaW1UYWcpIHtcclxuICAgICAgaGFuZGxlRm9jdXMoKTtcclxuICAgICAgc2V0VGFncyhbLi4udGFncywgdHJpbVRhZ10pO1xyXG4gICAgICBzZXRUYWcoXCJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRTZWFyY2hJbnB1dChldmVudCk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBhZGRUb29sID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHNcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBsaW5rLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRhZ3MsXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhhZGRUb29sKTtcclxuICAgIGZldGNoUG9zdHMoKTtcclxuICAgIGhhbmRsZUNsb3NlTW9kYWwoKTtcclxuICB9XHJcbiAgLy8gYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAvLyAgIGlmIChcclxuICAvLyAgICAgdGl0bGUubGVuZ3RoID09PSAwIHx8XHJcbiAgLy8gICAgIGxpbmsubGVuZ3RoID09PSAwIHx8XHJcbiAgLy8gICAgIGRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMCB8fFxyXG4gIC8vICAgICB0YWdzLmxlbmd0aCA9PT0gMFxyXG4gIC8vICAgKSB7XHJcbiAgLy8gICAgIHJldHVybiBjb25zb2xlLmxvZyhcIm5vdCB0cnVlXCIsIHRpdGxlLCBsaW5rLCBkZXNjcmlwdGlvbiwgdGFncyk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBjb25zdCBhZGRUb29sID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHNcIiwge1xyXG4gIC8vICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgLy8gICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gIC8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAvLyAgICAgICAgIHRpdGxlLFxyXG4gIC8vICAgICAgICAgbGluayxcclxuICAvLyAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gIC8vICAgICAgICAgdGFncyxcclxuICAvLyAgICAgICB9KSxcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKGFkZFRvb2wpO1xyXG4gIC8vICAgICBmZXRjaFBvc3RzKCk7XHJcbiAgLy8gICAgIGhhbmRsZUNsb3NlTW9kYWwoKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRBZGRNb2RhbChmYWxzZSk7XHJcbiAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgIHNldERlc2NyaXB0aW9uKFwiXCIpO1xyXG4gICAgc2V0TGluayhcIlwiKTtcclxuICAgIHNldFRhZ3MoW10pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlVGFnKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGFncy5maWx0ZXIoKHdvcmQpID0+IHdvcmQgIT0gZSk7XHJcbiAgICBzZXRUYWdzKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBmZXRjaEZpbHRlcmVkUG9zdHMoKSwgNTAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICB9LCBbc2VhcmNoSW5wdXQsIHNlYXJjaEZvclRhZ3NdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUG9zdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5WVVRUUjwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSAke2FkZE1vZGFsICYmIHN0eWxlcy5tb2RhbElzT3Blbn1gfT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlZVVFRSPC9oMT5cclxuICAgICAgICA8aDI+VmVyeSBVc2VmdWwgVG9vbHMgdG8gUmVtZW1iZXI8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxlZnR9PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn1cclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjQ3LjcwN1wiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDcuNzA3XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ3LjcwNyA0Ny43MDdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjMTcwYzNhXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTI3MiAtMTc5OSlcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTM5LjA0OSwzOS4wNDksNTYsNTZcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI2MyAxNzkwKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgY3g9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgIGN5PVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICByPVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI3MyAxODAwKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlT25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoRm9yVGFnc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0U2VhcmNoRm9yVGFncyghc2VhcmNoRm9yVGFncyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hMYWJlbH0+c2VhcmNoIGluIHRhZ3Mgb25seTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWRkTW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjYxLjQxNFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNjEuNDJcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKVwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5hZGRMYWJlbH0+QWRkPC9sYWJlbD5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7IXBvc3RzLmxlbmd0aCA9PSAwID8gKFxyXG4gICAgICAgICAgcG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPENhcmQga2V5PXtwb3N0LmlkfSBjb250ZW50PXtwb3N0fSBvbkRlbGV0ZT17aGFuZGxlUG9zdFJlbW92ZWR9IC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUG9zdHN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUG9zdHNJbWd9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2NhdmVtYW4uZ2lmXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIk5vdCBGb3VuZFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubm90Rm91bmR9Pk9vb3BzLCBubyBwb3N0cyBmb3VuZC4uLjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2FkZE1vZGFsICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUua2V5ID09PSBcIkVudGVyXCIgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlckFkZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYxLjQxNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MS40MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiMxNzBDM0FcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGl0bGV9PkFkZCBhIG5ldyB0b29sPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMy40MTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEzLjQxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMy40MTQgMTMuNDE1XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IFwiIzhmOGE5YlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE5LjI5MiAtMTkuMjkzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9PlRvb2wgVGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTGFiZWx9Pkxpbms8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGlua31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldExpbmsoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSW5wdXRUZXh0QXJlYX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExhYmVsfT5UYWdzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWdzfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGFnSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUYWcoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRhZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFnRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkVGFnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3NDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFncyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3MubWFwKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVUYWcodGFnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0YWd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZVRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEzLjQxNCAxMy40MTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjOGY4YTliXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzIsMjAsMjAsMzJtMTIsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjkyIC0xOS4yOTMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhbmNlbEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2F2ZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==