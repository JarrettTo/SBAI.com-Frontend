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

/***/ "./components/GameDisplay.tsx":
/*!************************************!*\
  !*** ./components/GameDisplay.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_nba_logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-nba-logos */ \"./node_modules/react-nba-logos/dist/index.js\");\n\n\n\nconst GameDisplay = (props)=>{\n    const { id, homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, schedule } = props;\n    const teamIconMap = {\n        \"Toronto Raptors\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.TOR,\n        \"TOR\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.TOR,\n        \"Boston Celtics\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.BOS,\n        \"BOS\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.BOS,\n        // Add more teams here following the same pattern\n        \"Los Angeles Lakers\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.LAL,\n        \"LAL\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.LAL,\n        \"Golden State Warriors\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.GSW,\n        \"GSW\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.GSW\n    };\n    const getTeamIcon = (teamName)=>{\n        // Look up the component in the teamIconMap by teamName\n        const IconComponent = teamIconMap[teamName];\n        // If a matching component was found, render it; otherwise, return null or a default icon\n        return IconComponent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconComponent, {}, void 0, false, {\n            fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n            lineNumber: 23,\n            columnNumber: 32\n        }, undefined) : null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginLeft: \"30px\",\n            display: \"flex\",\n            flexDirection: \"row\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: getTeamIcon(homeTeam)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"20px\"\n                        },\n                        children: homeTeam\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"VS\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: schedule.toISOString()\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: getTeamIcon(awayTeam)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"20px\"\n                        },\n                        children: awayTeam\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GameDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameDisplay);\nvar _c;\n$RefreshReg$(_c, \"GameDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWVEaXNwbGF5LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBRWtCO0FBQzVDLE1BQU1FLGNBQWtDLENBQUNDO0lBQ3RDLE1BQU0sRUFBQ0MsRUFBRSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBQyxHQUFHTjtJQUN2RSxNQUFNTyxjQUFjO1FBQ2YsbUJBQW1CVCxnREFBWTtRQUMvQixPQUFPQSxnREFBWTtRQUNuQixrQkFBa0JBLGdEQUFZO1FBQzlCLE9BQU9BLGdEQUFZO1FBQ25CLGlEQUFpRDtRQUNqRCxzQkFBc0JBLGdEQUFZO1FBQ2xDLE9BQU9BLGdEQUFZO1FBQ25CLHlCQUF5QkEsZ0RBQVk7UUFDckMsT0FBT0EsZ0RBQVk7SUFFdkI7SUFDQSxNQUFNYyxjQUFjLENBQUNDO1FBQ2pCLHVEQUF1RDtRQUN2RCxNQUFNQyxnQkFBZ0JQLFdBQVcsQ0FBQ00sU0FBUztRQUUzQyx5RkFBeUY7UUFDekYsT0FBT0MsOEJBQWdCLDhEQUFDQTs7Ozt3QkFBbUI7SUFDL0M7SUFFRCxxQkFDQyw4REFBQ0M7UUFBSUMsT0FBTztZQUFDQyxZQUFZO1lBQVFDLFNBQVM7WUFBUUMsZUFBZTtZQUFPQyxZQUFZO1FBQVE7OzBCQUN4Riw4REFBQ0w7Z0JBQUlDLE9BQU87b0JBQUNFLFNBQVM7b0JBQVFDLGVBQWU7b0JBQVVDLFlBQVk7Z0JBQVE7O2tDQUN2RSw4REFBQ0w7a0NBQUtILFlBQVlWOzs7Ozs7a0NBQ2xCLDhEQUFDbUI7d0JBQUVMLE9BQU87NEJBQUNNLFVBQVM7d0JBQU07a0NBQUlwQjs7Ozs7Ozs7Ozs7OzBCQUdsQyw4REFBQ2E7Z0JBQUlDLE9BQU87b0JBQUNFLFNBQVM7b0JBQVFDLGVBQWU7b0JBQVVDLFlBQVk7Z0JBQVE7O2tDQUN2RSw4REFBQ0M7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUdmLFNBQVNpQixXQUFXOzs7Ozs7Ozs7Ozs7MEJBRTVCLDhEQUFDUjtnQkFBSUMsT0FBTztvQkFBQ0UsU0FBUztvQkFBUUMsZUFBZTtvQkFBVUMsWUFBWTtnQkFBUTs7a0NBQ3ZFLDhEQUFDTDtrQ0FBS0gsWUFBWVI7Ozs7OztrQ0FDbEIsOERBQUNpQjt3QkFBRUwsT0FBTzs0QkFBQ00sVUFBUzt3QkFBTTtrQ0FBSWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUM7S0F6Q01MO0FBMENOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZURpc3BsYXkudHN4P2FhYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSU5CQUdhbWV9IGZyb20gJy4uL3R5cGVzL0dhbWUnO1xyXG5pbXBvcnQgKiBhcyBOQkFJY29ucyBmcm9tICdyZWFjdC1uYmEtbG9nb3MnO1xyXG5jb25zdCBHYW1lRGlzcGxheTogUmVhY3QuRkM8SU5CQUdhbWU+ID0gKHByb3BzKSA9PntcclxuICAgY29uc3Qge2lkLCBob21lVGVhbSwgaG9tZVRlYW1Mb2dvLCBhd2F5VGVhbSwgYXdheVRlYW1Mb2dvLCBzY2hlZHVsZX0gPSBwcm9wcztcclxuICAgY29uc3QgdGVhbUljb25NYXAgPSB7XHJcbiAgICAgICAgXCJUb3JvbnRvIFJhcHRvcnNcIjogTkJBSWNvbnMuVE9SLFxyXG4gICAgICAgIFwiVE9SXCI6IE5CQUljb25zLlRPUixcclxuICAgICAgICBcIkJvc3RvbiBDZWx0aWNzXCI6IE5CQUljb25zLkJPUyxcclxuICAgICAgICBcIkJPU1wiOiBOQkFJY29ucy5CT1MsXHJcbiAgICAgICAgLy8gQWRkIG1vcmUgdGVhbXMgaGVyZSBmb2xsb3dpbmcgdGhlIHNhbWUgcGF0dGVyblxyXG4gICAgICAgIFwiTG9zIEFuZ2VsZXMgTGFrZXJzXCI6IE5CQUljb25zLkxBTCxcclxuICAgICAgICBcIkxBTFwiOiBOQkFJY29ucy5MQUwsXHJcbiAgICAgICAgXCJHb2xkZW4gU3RhdGUgV2FycmlvcnNcIjogTkJBSWNvbnMuR1NXLFxyXG4gICAgICAgIFwiR1NXXCI6IE5CQUljb25zLkdTVyxcclxuICAgICAgICAvLyBDb250aW51ZSBmb3IgYWxsIE5CQSB0ZWFtc1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFRlYW1JY29uID0gKHRlYW1OYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyBMb29rIHVwIHRoZSBjb21wb25lbnQgaW4gdGhlIHRlYW1JY29uTWFwIGJ5IHRlYW1OYW1lXHJcbiAgICAgICAgY29uc3QgSWNvbkNvbXBvbmVudCA9IHRlYW1JY29uTWFwW3RlYW1OYW1lXTtcclxuICAgIFxyXG4gICAgICAgIC8vIElmIGEgbWF0Y2hpbmcgY29tcG9uZW50IHdhcyBmb3VuZCwgcmVuZGVyIGl0OyBvdGhlcndpc2UsIHJldHVybiBudWxsIG9yIGEgZGVmYXVsdCBpY29uXHJcbiAgICAgICAgcmV0dXJuIEljb25Db21wb25lbnQgPyA8SWNvbkNvbXBvbmVudCAvPiA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgIHJldHVybihcclxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMzBweCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgIDxkaXY+e2dldFRlYW1JY29uKGhvbWVUZWFtKX08L2Rpdj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMjBweCd9fT57aG9tZVRlYW19PC9wPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgPHA+VlM8L3A+XHJcbiAgICAgICAgICAgIDxwPntzY2hlZHVsZS50b0lTT1N0cmluZygpfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgPGRpdj57Z2V0VGVhbUljb24oYXdheVRlYW0pfTwvZGl2PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicyMHB4J319Pnthd2F5VGVhbX08L3A+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZURpc3BsYXk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTkJBSWNvbnMiLCJHYW1lRGlzcGxheSIsInByb3BzIiwiaWQiLCJob21lVGVhbSIsImhvbWVUZWFtTG9nbyIsImF3YXlUZWFtIiwiYXdheVRlYW1Mb2dvIiwic2NoZWR1bGUiLCJ0ZWFtSWNvbk1hcCIsIlRPUiIsIkJPUyIsIkxBTCIsIkdTVyIsImdldFRlYW1JY29uIiwidGVhbU5hbWUiLCJJY29uQ29tcG9uZW50IiwiZGl2Iiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwicCIsImZvbnRTaXplIiwidG9JU09TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GameDisplay.tsx\n"));

/***/ })

});