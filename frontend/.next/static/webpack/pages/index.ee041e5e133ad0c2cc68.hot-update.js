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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.js");




var _jsxFileName = "C:\\Users\\dpisa\\Desktop\\bossa-box\\frontend\\pages\\index.js",
    _s = $RefreshSig$();





function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      searchForTgas = _useState2[0],
      setSearchForTags = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      searchInput = _useState3[0],
      setSearchInput = _useState3[1];

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
      var res, data;
      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("http://localhost:3000/tools?q=".concat(searchInput));

            case 2:
              res = _context2.sent;
              _context2.next = 5;
              return res.json();

            case 5:
              data = _context2.sent;
              setPosts(data);
              console.log(data);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchFilteredPosts.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var timeoutId = setTimeout(function () {
      return fetchFilteredPosts();
    }, 500);
    return function () {
      return clearTimeout(timeoutId);
    };
  }, [searchInput]);

  var handleOnChange = function handleOnChange(event) {
    setSearchInput(event);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchPosts();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.header,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headerLeft,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("svg", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.searchIcon,
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
              lineNumber: 53,
              columnNumber: 256
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 307
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 386
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 269
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.searchInput,
            type: "text",
            placeholder: "search",
            value: searchInput,
            onChange: function onChange(e) {
              return handleOnChange(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "checkbox",
            value: "tags",
            onChange: function onChange() {
              return console.log(!searchForTgas);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.addButton,
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
              lineNumber: 60,
              columnNumber: 253
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 310
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 266
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
          content: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, _this);
      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.noPosts,
        children: "Ooops, no posts was found..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_s(Home, "a6QZ1kiCQgbYsQq7Mo+YVMM6AuM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaEZvclRnYXMiLCJzZXRTZWFyY2hGb3JUYWdzIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsImZldGNoUG9zdHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwiZmV0Y2hGaWx0ZXJlZFBvc3RzIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVPbkNoYW5nZSIsImV2ZW50Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiaGVhZGVyIiwiaGVhZGVyTGVmdCIsInNlYXJjaEljb24iLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hMYWJlbCIsImFkZEJ1dHRvbiIsInRyYW5zZm9ybSIsImFkZExhYmVsIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsImlkIiwibm9Qb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsS0FBRCxDQUZyQjtBQUFBLE1BRXRCRyxhQUZzQjtBQUFBLE1BRVBDLGdCQUZPOztBQUFBLG1CQUdTSixzREFBUSxDQUFDLEVBQUQsQ0FIakI7QUFBQSxNQUd0QkssV0FIc0I7QUFBQSxNQUdUQyxjQUhTOztBQUFBLFdBS2RDLFVBTGM7QUFBQTtBQUFB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S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZTA0MWU1ZTEzM2FkMGMyY2M2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hGb3JUZ2FzLCBzZXRTZWFyY2hGb3JUYWdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQb3N0cygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29sc1wiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRQb3N0cyhkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRmlsdGVyZWRQb3N0cygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzP3E9JHtzZWFyY2hJbnB1dH1gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRQb3N0cyhkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBcbiAgICAgIGZldGNoRmlsdGVyZWRQb3N0cygpXG4gICAgICAsIDUwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9LCBbc2VhcmNoSW5wdXRdKTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFNlYXJjaElucHV0KGV2ZW50KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUG9zdHMoKTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlID5WVVRUUjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VlVUVFI8L2gxPlxuICAgICAgICA8aDI+VmVyeSBVc2VmdWwgVG9vbHMgdG8gUmVtZW1iZXI8L2gyPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGVmdH0+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEljb259IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQ3LjcwN1wiIGhlaWdodD1cIjQ3LjcwN1wiIHZpZXdCb3g9XCIwIDAgNDcuNzA3IDQ3LjcwN1wiIHN0eWxlPXt7ZmlsbDpcIm5vbmVcIiwgc3Ryb2tlOiBcIiMxNzBjM2FcIiwgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsIHN0cm9rZVdpZHRoOiBcIjJweFwiLCB3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCJ9fT48ZGVmcz48L2RlZnM+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMjcyIC0xNzk5KVwiPjxwYXRoIGNsYXNzTmFtZT1cImFcIiBkPVwiTTM5LjA0OSwzOS4wNDksNTYsNTZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI2MyAxNzkwKVwiLz48Y2lyY2xlIGNsYXNzTmFtZT1cImFcIiBjeD1cIjE3XCIgY3k9XCIxN1wiIHI9XCIxN1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjczIDE4MDApXCIvPjwvZz48L3N2Zz5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJbnB1dH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInNlYXJjaFwiIHZhbHVlPXtzZWFyY2hJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVPbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ0YWdzXCIgb25DaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCFzZWFyY2hGb3JUZ2FzKX0vPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaExhYmVsfT5zZWFyY2ggaW4gdGFncyBvbmx5PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn0+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjYxLjQxNFwiIGhlaWdodD1cIjYxLjQyXCIgdmlld0JveD1cIjAgMCA2MS40MTQgNjEuNDJcIiBzdHlsZT17e2ZpbGw6XCJub25lXCIsIHN0cm9rZTogXCIjRkZGRkZGXCIsIHN0cm9rZU1pdGVybGltaXQ6IDEwLCBzdHJva2VXaWR0aDogXCIxMHB4XCIsIHRyYW5zZm9ybTogXCJyb3RhdGUoNDVkZWcpXCIsIHdpZHRoOiBcIjE1cHhcIiwgaGVpZ2h0OiBcIjE1cHhcIn19PjxkZWZzPjwvZGVmcz48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTU2OC43OTMgLTcxNC43OTMpXCI+PHBhdGggY2xhc3NOYW1lPVwiYVwiIGQ9XCJNODAsMjAuMDA1bC02MCw2MG02MCwwTDIwLDIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0OS41MDEgNjk1LjUpXCIvPjwvZz48L3N2Zz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5hZGRMYWJlbH0+QWRkPC9sYWJlbD5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgeyAhcG9zdHMubGVuZ3RoID09IDAgXG4gICAgICAgIFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgcG9zdHMubWFwKHBvc3QgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17cG9zdC5pZH0gY29udGVudD17cG9zdH0vPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSkgXG4gICAgICAgICAgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUG9zdHN9Pk9vb3BzLCBubyBwb3N0cyB3YXMgZm91bmQuLi48L2Rpdj5cbiAgICAgICAgICApIFxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9