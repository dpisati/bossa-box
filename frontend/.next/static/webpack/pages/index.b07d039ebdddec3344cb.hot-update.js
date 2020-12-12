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
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal/index.js");
/* harmony import */ var _components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ConfirmationModal */ "./components/ConfirmationModal/index.js");




var _jsxFileName = "C:\\Users\\dpisa\\Desktop\\bossa-box\\frontend\\pages\\index.js",
    _s = $RefreshSig$();








function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      searchForTags = _useState3[0],
      setSearchForTags = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      toolSelected = _useState4[0],
      setToolSelected = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      addModal = _useState5[0],
      setAddModal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      addToolModal = _useState6[0],
      setAddToolModal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      confirmationModal = _useState7[0],
      setConfirmationModal = _useState7[1];

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

  function handleAddPost() {
    setAddModal(true);
    setAddToolModal(true);
  }

  function handleSelectPost(content) {
    setToolSelected(content);
    setAddModal(true);
    setConfirmationModal(true);
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
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main, " ").concat(addModal && _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalIsOpen),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.searchInput,
            type: "text",
            placeholder: "search",
            value: searchInput,
            onChange: function onChange(e) {
              return setSearchInput(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.addButton,
          onClick: handleAddPost,
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
              lineNumber: 141,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
          content: post,
          onDelete: fetchPosts,
          setToolSelected: handleSelectPost
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 20
        }, _this);
      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.noPosts,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.noPostsImg,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
            src: "/caveman.gif",
            alt: "Not Found",
            width: 500,
            height: 400
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.notFound,
            children: "Ooops, no posts found..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }, this), addToolModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setAddModal: setAddToolModal,
        fetchPosts: fetchPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }, this), toolSelected && confirmationModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        setAddModal: setConfirmationModal,
        tool: toolSelected,
        fetchPosts: fetchPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

_s(Home, "B09XXOMAYk9Ppr1alDtGH0lDV8Y=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hGb3JUYWdzIiwic2V0U2VhcmNoRm9yVGFncyIsInRvb2xTZWxlY3RlZCIsInNldFRvb2xTZWxlY3RlZCIsImFkZE1vZGFsIiwic2V0QWRkTW9kYWwiLCJhZGRUb29sTW9kYWwiLCJzZXRBZGRUb29sTW9kYWwiLCJjb25maXJtYXRpb25Nb2RhbCIsInNldENvbmZpcm1hdGlvbk1vZGFsIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJmZXRjaEZpbHRlcmVkUG9zdHMiLCJoYW5kbGVBZGRQb3N0IiwiaGFuZGxlU2VsZWN0UG9zdCIsImNvbnRlbnQiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsIm1vZGFsSXNPcGVuIiwidGl0bGUiLCJoZWFkZXIiLCJoZWFkZXJMZWZ0Iiwic2VhcmNoSWNvbiIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaExhYmVsIiwiYWRkQnV0dG9uIiwidHJhbnNmb3JtIiwiYWRkTGFiZWwiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiaWQiLCJub1Bvc3RzIiwibm9Qb3N0c0ltZyIsIm5vdEZvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFB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RTFCLDhEQUFNLENBQUMyQixRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekZKLEVBc0dJNUMsWUFBWSxpQkFDWixxRUFBQyx5REFBRDtBQUFPLG1CQUFXLEVBQUVDLGVBQXBCO0FBQXFDLGtCQUFVLEVBQUVHO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2R0osRUEyR0lSLFlBQVksSUFBSU0saUJBQWhCLGlCQUNBLHFFQUFDLHFFQUFEO0FBQW1CLG1CQUFXLEVBQUVDLG9CQUFoQztBQUFzRCxZQUFJLEVBQUVQLFlBQTVEO0FBQTBFLGtCQUFVLEVBQUVRO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1R0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5SEQ7O0dBNUt1QmhCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjA3ZDAzOWViZGRkZWMzMzQ0Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsXCI7XHJcbmltcG9ydCBDb25maXJtYXRpb25Nb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db25maXJtYXRpb25Nb2RhbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VhcmNoRm9yVGFncywgc2V0U2VhcmNoRm9yVGFnc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFt0b29sU2VsZWN0ZWQsIHNldFRvb2xTZWxlY3RlZF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IFthZGRNb2RhbCwgc2V0QWRkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthZGRUb29sTW9kYWwsIHNldEFkZFRvb2xNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbmZpcm1hdGlvbk1vZGFsLCBzZXRDb25maXJtYXRpb25Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEZpbHRlcmVkUG9zdHMoKSB7XHJcbiAgICBpZiAoIXNlYXJjaEZvclRhZ3MpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz9xPSR7c2VhcmNoSW5wdXR9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRQb3N0cyhkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHM/dGFnc19saWtlPSR7c2VhcmNoSW5wdXR9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVBZGRQb3N0KCkge1xyXG4gICAgc2V0QWRkTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRBZGRUb29sTW9kYWwodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RQb3N0KGNvbnRlbnQpIHtcclxuICAgIHNldFRvb2xTZWxlY3RlZChjb250ZW50KVxyXG4gICAgc2V0QWRkTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRDb25maXJtYXRpb25Nb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IGZldGNoRmlsdGVyZWRQb3N0cygpLCA1MDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gIH0sIFtzZWFyY2hJbnB1dCwgc2VhcmNoRm9yVGFnc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQb3N0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlZVVFRSPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1haW59ICR7YWRkTW9kYWwgJiYgc3R5bGVzLm1vZGFsSXNPcGVufWB9PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VlVUVFI8L2gxPlxyXG4gICAgICAgIDxoMj5WZXJ5IFVzZWZ1bCBUb29scyB0byBSZW1lbWJlcjwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGVmdH0+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJY29ufVxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDcuNzA3XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0Ny43MDdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDcuNzA3IDQ3LjcwN1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiMxNzBjM2FcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMjcyIC0xNzk5KVwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMzkuMDQ5LDM5LjA0OSw1Niw1NlwiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjYzIDE3OTApXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICBjeD1cIjE3XCJcclxuICAgICAgICAgICAgICAgICAgY3k9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgIHI9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjczIDE4MDApXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hGb3JUYWdzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRTZWFyY2hGb3JUYWdzKCFzZWFyY2hGb3JUYWdzKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaExhYmVsfT5zZWFyY2ggaW4gdGFncyBvbmx5PC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRQb3N0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI2MS40MTRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjYxLjQyXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDYxLjQxNCA2MS40MlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk04MCwyMC4wMDVsLTYwLDYwbTYwLDBMMjAsMjBcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjUwMSA2OTUuNSlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTGFiZWx9PkFkZDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgeyFwb3N0cy5sZW5ndGggPT0gMCA/IChcclxuICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPENhcmQga2V5PXtwb3N0LmlkfSBjb250ZW50PXtwb3N0fSBvbkRlbGV0ZT17ZmV0Y2hQb3N0c30gc2V0VG9vbFNlbGVjdGVkPXtoYW5kbGVTZWxlY3RQb3N0fSAvPjtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9Qb3N0c30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9Qb3N0c0ltZ30+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2F2ZW1hbi5naWZcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiTm90IEZvdW5kXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ub3RGb3VuZH0+T29vcHMsIG5vIHBvc3RzIGZvdW5kLi4uPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7IGFkZFRvb2xNb2RhbCAmJiAoXHJcbiAgICAgICAgICA8TW9kYWwgc2V0QWRkTW9kYWw9e3NldEFkZFRvb2xNb2RhbH0gZmV0Y2hQb3N0cz17ZmV0Y2hQb3N0c30gLz5cclxuICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgeyB0b29sU2VsZWN0ZWQgJiYgY29uZmlybWF0aW9uTW9kYWwgJiYgKFxyXG4gICAgICAgICAgPENvbmZpcm1hdGlvbk1vZGFsIHNldEFkZE1vZGFsPXtzZXRDb25maXJtYXRpb25Nb2RhbH0gdG9vbD17dG9vbFNlbGVjdGVkfSBmZXRjaFBvc3RzPXtmZXRjaFBvc3RzfS8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==