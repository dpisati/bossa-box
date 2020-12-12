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
      confirmationModal = _useState6[0],
      setConfirmationModal = _useState6[1];

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
    setConfirmationModal(true);
  }

  function handleSelectPost(content) {
    setToolSelected(content);
    setAddModal(true);
    setConfirmationModal(true); // await fetch(`http://localhost:3000/tools/${content.id}`, {
    //   method: 'DELETE',
    // });
    // fetchPosts();
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
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main, " ").concat(addModal && _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalIsOpen),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
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
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.addButton,
          onClick: function onClick() {
            return setAddModal(true);
          },
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
              lineNumber: 144,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
          content: post,
          onDelete: fetchPosts,
          setToolSelected: handleSelectPost
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
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
            lineNumber: 164,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.notFound,
            children: "Ooops, no posts found..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }, this), addModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setAddModal: setAddModal,
        fetchPosts: fetchPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }, this), toolSelected && confirmationModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        setAddModal: setAddModal,
        tool: toolSelected
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

_s(Home, "iooCxlZG69sHnCWxJuiS/y/rqMU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hGb3JUYWdzIiwic2V0U2VhcmNoRm9yVGFncyIsInRvb2xTZWxlY3RlZCIsInNldFRvb2xTZWxlY3RlZCIsImFkZE1vZGFsIiwic2V0QWRkTW9kYWwiLCJjb25maXJtYXRpb25Nb2RhbCIsInNldENvbmZpcm1hdGlvbk1vZGFsIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJmZXRjaEZpbHRlcmVkUG9zdHMiLCJoYW5kbGVBZGRQb3N0IiwiaGFuZGxlU2VsZWN0UG9zdCIsImNvbnRlbnQiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsIm1vZGFsSXNPcGVuIiwidGl0bGUiLCJoZWFkZXIiLCJoZWFkZXJMZWZ0Iiwic2VhcmNoSWNvbiIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaExhYmVsIiwiYWRkQnV0dG9uIiwidHJhbnNmb3JtIiwiYWRkTGFiZWwiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiaWQiLCJub1Bvc3RzIiwibm9Qb3N0c0ltZyIsIm5vdEZvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FB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QTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpGSixFQXNHRzVDLFFBQVEsaUJBQ1AscUVBQUMseURBQUQ7QUFBTyxtQkFBVyxFQUFFQyxXQUFwQjtBQUFpQyxrQkFBVSxFQUFFRztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkdKLEVBMkdJTixZQUFZLElBQUlJLGlCQUFoQixpQkFDQSxxRUFBQyxxRUFBRDtBQUFtQixtQkFBVyxFQUFFRCxXQUFoQztBQUE2QyxZQUFJLEVBQUVIO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1R0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5SEQ7O0dBL0t1QlIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZmU4NTExOTZhYWY2YjNhMTE5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxcIjtcclxuaW1wb3J0IENvbmZpcm1hdGlvbk1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbmZpcm1hdGlvbk1vZGFsXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hGb3JUYWdzLCBzZXRTZWFyY2hGb3JUYWdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3Rvb2xTZWxlY3RlZCwgc2V0VG9vbFNlbGVjdGVkXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgW2FkZE1vZGFsLCBzZXRBZGRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbmZpcm1hdGlvbk1vZGFsLCBzZXRDb25maXJtYXRpb25Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEZpbHRlcmVkUG9zdHMoKSB7XHJcbiAgICBpZiAoIXNlYXJjaEZvclRhZ3MpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz9xPSR7c2VhcmNoSW5wdXR9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRQb3N0cyhkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHM/dGFnc19saWtlPSR7c2VhcmNoSW5wdXR9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVBZGRQb3N0KCkge1xyXG4gICAgc2V0QWRkTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRDb25maXJtYXRpb25Nb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdFBvc3QoY29udGVudCkge1xyXG4gICAgc2V0VG9vbFNlbGVjdGVkKGNvbnRlbnQpXHJcbiAgICBzZXRBZGRNb2RhbCh0cnVlKTtcclxuICAgIHNldENvbmZpcm1hdGlvbk1vZGFsKHRydWUpO1xyXG4gICAgLy8gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scy8ke2NvbnRlbnQuaWR9YCwge1xyXG4gICAgLy8gICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBmZXRjaFBvc3RzKCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBmZXRjaEZpbHRlcmVkUG9zdHMoKSwgNTAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICB9LCBbc2VhcmNoSW5wdXQsIHNlYXJjaEZvclRhZ3NdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUG9zdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5WVVRUUjwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSAke2FkZE1vZGFsICYmIHN0eWxlcy5tb2RhbElzT3Blbn1gfT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlZVVFRSPC9oMT5cclxuICAgICAgICA8aDI+VmVyeSBVc2VmdWwgVG9vbHMgdG8gUmVtZW1iZXI8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxlZnR9PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn1cclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjQ3LjcwN1wiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDcuNzA3XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ3LjcwNyA0Ny43MDdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjMTcwYzNhXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTI3MiAtMTc5OSlcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTM5LjA0OSwzOS4wNDksNTYsNTZcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI2MyAxNzkwKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgY3g9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgIGN5PVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICByPVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI3MyAxODAwKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoRm9yVGFnc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0U2VhcmNoRm9yVGFncyghc2VhcmNoRm9yVGFncyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hMYWJlbH0+c2VhcmNoIGluIHRhZ3Mgb25seTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWRkTW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjYxLjQxNFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNjEuNDJcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKVwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTY4Ljc5MyAtNzE0Ljc5MylcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5hZGRMYWJlbH0+QWRkPC9sYWJlbD5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7IXBvc3RzLmxlbmd0aCA9PSAwID8gKFxyXG4gICAgICAgICAgcG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Q2FyZCBrZXk9e3Bvc3QuaWR9IGNvbnRlbnQ9e3Bvc3R9IG9uRGVsZXRlPXtmZXRjaFBvc3RzfSBzZXRUb29sU2VsZWN0ZWQ9e2hhbmRsZVNlbGVjdFBvc3R9IC8+O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub1Bvc3RzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub1Bvc3RzSW1nfT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXZlbWFuLmdpZlwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJOb3QgRm91bmRcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm5vdEZvdW5kfT5Pb29wcywgbm8gcG9zdHMgZm91bmQuLi48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHthZGRNb2RhbCAmJiAoXHJcbiAgICAgICAgICA8TW9kYWwgc2V0QWRkTW9kYWw9e3NldEFkZE1vZGFsfSBmZXRjaFBvc3RzPXtmZXRjaFBvc3RzfSAvPlxyXG4gICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICB7IHRvb2xTZWxlY3RlZCAmJiBjb25maXJtYXRpb25Nb2RhbCAmJiAoXHJcbiAgICAgICAgICA8Q29uZmlybWF0aW9uTW9kYWwgc2V0QWRkTW9kYWw9e3NldEFkZE1vZGFsfSB0b29sPXt0b29sU2VsZWN0ZWR9Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9