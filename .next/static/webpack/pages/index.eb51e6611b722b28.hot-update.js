"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_ashutoshjha_Documents_Blockchain_Ceramic_Main_Ceramic_Playground_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ashutoshjha_Documents_Blockchain_Ceramic_Main_Ceramic_Playground_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ashutoshjha_Documents_Blockchain_Ceramic_Main_Ceramic_Playground_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index.js */ \"./utils/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var clients = (0,_context__WEBPACK_IMPORTED_MODULE_2__.useCeramicContext)();\n    var composeClient = clients.composeClient;\n    var handleLogin = function() {\n        var _ref = _asyncToGenerator(_Users_ashutoshjha_Documents_Blockchain_Ceramic_Main_Ceramic_Playground_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_ashutoshjha_Documents_Blockchain_Ceramic_Main_Ceramic_Playground_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(composeClient);\n                        _ctx.next = 3;\n                        return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.authenticateCeramic)(composeClient);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleLogin() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (localStorage.getItem(\"did\")) {\n            handleLogin();\n        }\n    }, []);\n    var runQuery = function() {\n        var _ref = _asyncToGenerator(_Users_ashutoshjha_Documents_Blockchain_Ceramic_Main_Ceramic_Playground_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var Name;\n            return _Users_ashutoshjha_Documents_Blockchain_Ceramic_Main_Ceramic_Playground_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return composeClient.executeQuery(\"\\n      query{\\n        viewer{\\n          \\n        }\\n      }\\n    \");\n                    case 2:\n                        Name = _ctx.sent;\n                        console.log(Name);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // console.log(composeClient)\n        }));\n        return function runQuery() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n            onClick: runQuery,\n            children: \" Begin \"\n        }, void 0, false, {\n            fileName: \"/Users/ashutoshjha/Documents/Blockchain/Ceramic Main/Ceramic-Playground/pages/index.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ashutoshjha/Documents/Blockchain/Ceramic Main/Ceramic-Playground/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}; // Fix idea allocate another useState to changeAccess tokenId\n_s(Home, \"B2pwPCFUUjZhRK1QlZa/KO064Ww=\", false, function() {\n    return [\n        _context__WEBPACK_IMPORTED_MODULE_2__.useCeramicContext\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNPO0FBQ25COztBQUNuQixTQUFTRyxJQUFJLEdBQUc7O0lBRTdCLElBQU1DLE9BQU8sR0FBR0osMkRBQWlCLEVBQUU7SUFDbkMsSUFBTSxhQUFlLEdBQUtJLE9BQU8sQ0FBekJDLGFBQWE7SUFFckIsSUFBTUMsV0FBVzttQkFBRyx3TkFBWTs7Ozt3QkFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxhQUFhLENBQUMsQ0FBQzs7K0JBQ3JCSixvRUFBbUIsQ0FBQ0ksYUFBYSxDQUFDOzs7Ozs7U0FDekM7d0JBSEtDLFdBQVc7OztPQUdoQjtJQUVESixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFHTyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QkosV0FBVyxFQUFFO1NBQ2Q7S0FDRixFQUFFLEVBQUUsQ0FBQztJQUVOLElBQU1LLFFBQVE7bUJBQUcsd05BQVk7Z0JBQ3JCQyxJQUFJOzs7OzsrQkFBU1AsYUFBYSxDQUFDUSxZQUFZLENBQUUsdUVBTS9DLENBQUU7O3dCQU5JRCxJQUFJLFlBTVI7d0JBQ0ZMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxJQUFJLENBQUM7Ozs7OztRQUNqQiw2QkFBNkI7U0FDOUI7d0JBVktELFFBQVE7OztPQVViO0lBR0QscUJBQ0UsOERBQUNHLEtBQUc7a0JBQ0YsNEVBQUNDLFFBQU07WUFBQ0MsT0FBTyxFQUFFTCxRQUFRO3NCQUFFLFNBQU87Ozs7O2dCQUFTOzs7OztZQUN2QyxDQUNQO0NBQ0YsRUFFRCw2REFBNkQ7R0FwQ3JDUixJQUFJOztRQUVWSCx1REFBaUI7OztBQUZYRyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2VyYW1pY0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0IHthdXRoZW50aWNhdGVDZXJhbWljfSBmcm9tICcuLi91dGlscy9pbmRleC5qcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIFxuICBjb25zdCBjbGllbnRzID0gdXNlQ2VyYW1pY0NvbnRleHQoKTtcbiAgY29uc3QgeyBjb21wb3NlQ2xpZW50IH0gPSBjbGllbnRzICBcbiAgXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbXBvc2VDbGllbnQpO1xuICAgIGF3YWl0IGF1dGhlbnRpY2F0ZUNlcmFtaWMoY29tcG9zZUNsaWVudClcbiAgfVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGlkJykpIHtcbiAgICAgIGhhbmRsZUxvZ2luKClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IHJ1blF1ZXJ5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IE5hbWUgPSBhd2FpdCBjb21wb3NlQ2xpZW50LmV4ZWN1dGVRdWVyeShgXG4gICAgICBxdWVyeXtcbiAgICAgICAgdmlld2Vye1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgYClcbiAgICBjb25zb2xlLmxvZyhOYW1lKVxuICAgIC8vIGNvbnNvbGUubG9nKGNvbXBvc2VDbGllbnQpXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17cnVuUXVlcnl9PiBCZWdpbiA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBGaXggaWRlYSBhbGxvY2F0ZSBhbm90aGVyIHVzZVN0YXRlIHRvIGNoYW5nZUFjY2VzcyB0b2tlbklkXG4iXSwibmFtZXMiOlsidXNlQ2VyYW1pY0NvbnRleHQiLCJhdXRoZW50aWNhdGVDZXJhbWljIiwidXNlRWZmZWN0IiwiSG9tZSIsImNsaWVudHMiLCJjb21wb3NlQ2xpZW50IiwiaGFuZGxlTG9naW4iLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJ1blF1ZXJ5IiwiTmFtZSIsImV4ZWN1dGVRdWVyeSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});