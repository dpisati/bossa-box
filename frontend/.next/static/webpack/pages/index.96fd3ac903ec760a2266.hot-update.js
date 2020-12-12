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

  function handleSelectPost(content) {
    console.log("log from index", content);
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
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main, " ").concat(addModal && _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalIsOpen),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
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
            lineNumber: 99,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
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
              lineNumber: 133,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
          content: post,
          onDelete: fetchPosts,
          setToolSelected: handleSelectPost
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
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
            lineNumber: 153,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.notFound,
            children: "Ooops, no posts found..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }, this), addModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setAddModal: setAddModal,
        fetchPosts: fetchPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hGb3JUYWdzIiwic2V0U2VhcmNoRm9yVGFncyIsInRvb2xTZWxlY3RlZCIsInNldFRvb2xTZWxlY3RlZCIsImFkZE1vZGFsIiwic2V0QWRkTW9kYWwiLCJjb25maXJtYXRpb25Nb2RhbCIsInNldENvbmZpcm1hdGlvbk1vZGFsIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJmZXRjaEZpbHRlcmVkUG9zdHMiLCJoYW5kbGVTZWxlY3RQb3N0IiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsIm1vZGFsSXNPcGVuIiwidGl0bGUiLCJoZWFkZXIiLCJoZWFkZXJMZWZ0Iiwic2VhcmNoSWNvbiIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaExhYmVsIiwiYWRkQnV0dG9uIiwidHJhbnNmb3JtIiwiYWRkTGFiZWwiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiaWQiLCJub1Bvc3RzIiwibm9Qb3N0c0ltZyIsIm5vdEZvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FB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QTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2R0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzSEQ7O0dBakt1QmQsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NmZkM2FjOTAzZWM3NjBhMjI2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxcIjtcclxuaW1wb3J0IENvbmZpcm1hdGlvbk1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbmZpcm1hdGlvbk1vZGFsXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hGb3JUYWdzLCBzZXRTZWFyY2hGb3JUYWdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3Rvb2xTZWxlY3RlZCwgc2V0VG9vbFNlbGVjdGVkXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgW2FkZE1vZGFsLCBzZXRBZGRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbmZpcm1hdGlvbk1vZGFsLCBzZXRDb25maXJtYXRpb25Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEZpbHRlcmVkUG9zdHMoKSB7XHJcbiAgICBpZiAoIXNlYXJjaEZvclRhZ3MpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz9xPSR7c2VhcmNoSW5wdXR9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRQb3N0cyhkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9vbHM/dGFnc19saWtlPSR7c2VhcmNoSW5wdXR9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RQb3N0KGNvbnRlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9nIGZyb20gaW5kZXhcIiwgY29udGVudClcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IGZldGNoRmlsdGVyZWRQb3N0cygpLCA1MDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gIH0sIFtzZWFyY2hJbnB1dCwgc2VhcmNoRm9yVGFnc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQb3N0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlZVVFRSPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1haW59ICR7YWRkTW9kYWwgJiYgc3R5bGVzLm1vZGFsSXNPcGVufWB9PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VlVUVFI8L2gxPlxyXG4gICAgICAgIDxoMj5WZXJ5IFVzZWZ1bCBUb29scyB0byBSZW1lbWJlcjwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGVmdH0+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJY29ufVxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDcuNzA3XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0Ny43MDdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDcuNzA3IDQ3LjcwN1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBcIiMxNzBjM2FcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMjcyIC0xNzk5KVwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMzkuMDQ5LDM5LjA0OSw1Niw1NlwiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjYzIDE3OTApXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFcIlxyXG4gICAgICAgICAgICAgICAgICBjeD1cIjE3XCJcclxuICAgICAgICAgICAgICAgICAgY3k9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgIHI9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjczIDE4MDApXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hGb3JUYWdzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRTZWFyY2hGb3JUYWdzKCFzZWFyY2hGb3JUYWdzKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaExhYmVsfT5zZWFyY2ggaW4gdGFncyBvbmx5PC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBZGRNb2RhbCh0cnVlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNjEuNDE0XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI2MS40MlwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoNDVkZWcpXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCJcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmFkZExhYmVsfT5BZGQ8L2xhYmVsPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHshcG9zdHMubGVuZ3RoID09IDAgPyAoXHJcbiAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxDYXJkIGtleT17cG9zdC5pZH0gY29udGVudD17cG9zdH0gb25EZWxldGU9e2ZldGNoUG9zdHN9IHNldFRvb2xTZWxlY3RlZD17aGFuZGxlU2VsZWN0UG9zdH0gLz47XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUG9zdHN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUG9zdHNJbWd9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2NhdmVtYW4uZ2lmXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIk5vdCBGb3VuZFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubm90Rm91bmR9Pk9vb3BzLCBubyBwb3N0cyBmb3VuZC4uLjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2FkZE1vZGFsICYmIChcclxuICAgICAgICAgIDxNb2RhbCBzZXRBZGRNb2RhbD17c2V0QWRkTW9kYWx9IGZldGNoUG9zdHM9e2ZldGNoUG9zdHN9IC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgey8qIDxDb25maXJtYXRpb25Nb2RhbCB0b29sPXtzZWxlY3RlZFRvb2x9Lz4gKi99XHJcblxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=