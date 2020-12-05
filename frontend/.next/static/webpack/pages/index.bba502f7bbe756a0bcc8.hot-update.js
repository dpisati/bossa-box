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
      searchForTags = _useState2[0],
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
      var res, data, _res, _data;

      return C_Users_dpisa_Desktop_bossa_box_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (searchForTags) {
                _context2.next = 11;
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
              console.log("searchfortags = false", data);
              _context2.next = 19;
              break;

            case 11:
              _context2.next = 13;
              return fetch("http://localhost:3000/tools?tags_like=".concat(searchInput));

            case 13:
              _res = _context2.sent;
              _context2.next = 16;
              return _res.json();

            case 16:
              _data = _context2.sent;
              setPosts(_data);
              console.log("searchfortags = true", _data);

            case 19:
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
  }, [searchInput || searchForTags]);

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
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
        children: "VUTTR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Very Useful Tools to Remember"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
              lineNumber: 61,
              columnNumber: 256
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-1272 -1799)",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M39.049,39.049,56,56",
                transform: "translate(1263 1790)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 307
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("circle", {
                className: "a",
                cx: "17",
                cy: "17",
                r: "17",
                transform: "translate(1273 1800)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 386
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 269
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
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
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "checkbox",
            value: searchForTags,
            onChange: function onChange() {
              return setSearchForTags(!searchForTags);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.searchLabel,
            children: "search in tags only"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
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
              lineNumber: 68,
              columnNumber: 253
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("g", {
              transform: "translate(-568.793 -714.793)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                className: "a",
                d: "M80,20.005l-60,60m60,0L20,20",
                transform: "translate(549.501 695.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 310
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 266
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.addLabel,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), !posts.length == 0 ? posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
          content: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, _this);
      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.noPosts,
        children: "Ooops, no posts was found..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(Home, "i2sT1XatM27es57oLQ0hXA7dpkU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaEZvclRhZ3MiLCJzZXRTZWFyY2hGb3JUYWdzIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsImZldGNoUG9zdHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwiZmV0Y2hGaWx0ZXJlZFBvc3RzIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVPbkNoYW5nZSIsImV2ZW50Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiaGVhZGVyIiwiaGVhZGVyTGVmdCIsInNlYXJjaEljb24iLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZVdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hMYWJlbCIsImFkZEJ1dHRvbiIsInRyYW5zZm9ybSIsImFkZExhYmVsIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsImlkIiwibm9Qb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsS0FBRCxDQUZyQjtBQUFBLE1BRXRCRyxhQUZzQjtBQUFBLE1BRVBDLGdCQUZPOztBQUFBLG1CQUdTSixzREFBUSxDQUFDLEVBQUQsQ0FIakI7QUFBQSxNQUd0QkssV0FIc0I7QUFBQSxNQUdUQyxjQUhTOztBQUFBLFdBS2RDLFVBTGM7QUFBQTtBQUFB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QkFDRSxxRUFBQyx3REFBRDtBQUFvQixpQkFBTyxFQUFFQTtBQUE3QixXQUFXQSxJQUFJLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFHRCxPQUpELENBSEYsZ0JBU0U7QUFBSyxpQkFBUyxFQUFFdkIsOERBQU0sQ0FBQ3dCLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNENEOztHQXJGdUI5QyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJiYTUwMmY3YmJlNzU2YTBiY2M4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaEZvclRhZ3MsIHNldFNlYXJjaEZvclRhZ3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFBvc3RzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHNldFBvc3RzKGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hGaWx0ZXJlZFBvc3RzKCkge1xuICAgIGlmKCFzZWFyY2hGb3JUYWdzKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rvb2xzP3E9JHtzZWFyY2hJbnB1dH1gKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0UG9zdHMoZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGZvcnRhZ3MgPSBmYWxzZVwiLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b29scz90YWdzX2xpa2U9JHtzZWFyY2hJbnB1dH1gKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0UG9zdHMoZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGZvcnRhZ3MgPSB0cnVlXCIsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBcbiAgICAgIGZldGNoRmlsdGVyZWRQb3N0cygpXG4gICAgICAsIDUwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9LCBbc2VhcmNoSW5wdXQgfHwgc2VhcmNoRm9yVGFnc10pO1xuXG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTZWFyY2hJbnB1dChldmVudCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFBvc3RzKCk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZSA+VlVUVFI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlZVVFRSPC9oMT5cbiAgICAgICAgPGgyPlZlcnkgVXNlZnVsIFRvb2xzIHRvIFJlbWVtYmVyPC9oMj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxlZnR9PlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJY29ufSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0Ny43MDdcIiBoZWlnaHQ9XCI0Ny43MDdcIiB2aWV3Qm94PVwiMCAwIDQ3LjcwNyA0Ny43MDdcIiBzdHlsZT17e2ZpbGw6XCJub25lXCIsIHN0cm9rZTogXCIjMTcwYzNhXCIsIHN0cm9rZU1pdGVybGltaXQ6IDEwLCBzdHJva2VXaWR0aDogXCIycHhcIiwgd2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwifX0+PGRlZnM+PC9kZWZzPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTI3MiAtMTc5OSlcIj48cGF0aCBjbGFzc05hbWU9XCJhXCIgZD1cIk0zOS4wNDksMzkuMDQ5LDU2LDU2XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyNjMgMTc5MClcIi8+PGNpcmNsZSBjbGFzc05hbWU9XCJhXCIgY3g9XCIxN1wiIGN5PVwiMTdcIiByPVwiMTdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI3MyAxODAwKVwiLz48L2c+PC9zdmc+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIiB2YWx1ZT17c2VhcmNoSW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlT25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPXtzZWFyY2hGb3JUYWdzfSBvbkNoYW5nZT17KCkgPT4gc2V0U2VhcmNoRm9yVGFncyghc2VhcmNoRm9yVGFncyl9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hMYWJlbH0+c2VhcmNoIGluIHRhZ3Mgb25seTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259PlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI2MS40MTRcIiBoZWlnaHQ9XCI2MS40MlwiIHZpZXdCb3g9XCIwIDAgNjEuNDE0IDYxLjQyXCIgc3R5bGU9e3tmaWxsOlwibm9uZVwiLCBzdHJva2U6IFwiI0ZGRkZGRlwiLCBzdHJva2VNaXRlcmxpbWl0OiAxMCwgc3Ryb2tlV2lkdGg6IFwiMTBweFwiLCB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKVwiLCB3aWR0aDogXCIxNXB4XCIsIGhlaWdodDogXCIxNXB4XCJ9fT48ZGVmcz48L2RlZnM+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01NjguNzkzIC03MTQuNzkzKVwiPjxwYXRoIGNsYXNzTmFtZT1cImFcIiBkPVwiTTgwLDIwLjAwNWwtNjAsNjBtNjAsMEwyMCwyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDkuNTAxIDY5NS41KVwiLz48L2c+PC9zdmc+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTGFiZWx9PkFkZDwvbGFiZWw+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsgIXBvc3RzLmxlbmd0aCA9PSAwIFxuICAgICAgICBcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIHBvc3RzLm1hcChwb3N0ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e3Bvc3QuaWR9IGNvbnRlbnQ9e3Bvc3R9Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkpIFxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub1Bvc3RzfT5Pb29wcywgbm8gcG9zdHMgd2FzIGZvdW5kLi4uPC9kaXY+XG4gICAgICAgICAgKSBcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==