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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_nba_logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-nba-logos */ \"./node_modules/react-nba-logos/dist/index.js\");\n\n\n\nconst GameDisplay = (props)=>{\n    const { id, homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, schedule } = props;\n    const teamIconMap = {\n        \"Toronto Raptors\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.TOR,\n        \"TOR\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.TOR,\n        \"Boston Celtics\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.BOS,\n        \"BOS\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.BOS,\n        // Add more teams here following the same pattern\n        \"Los Angeles Lakers\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.LAL,\n        \"LAL\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.LAL,\n        \"Golden State Warriors\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.GSW,\n        \"GSW\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.GSW\n    };\n    const teamAbbMap = {\n        \"Toronto Raptors\": \"TOR\",\n        \"Boston Celtics\": \"BOS\",\n        \"Los Angeles Lakers\": \"LAL\",\n        \"Golden State Warriors\": \"GSW\"\n    };\n    const getTeamIcon = (teamName)=>{\n        // Look up the component in the teamIconMap by teamName\n        const IconComponent = teamIconMap[teamName];\n        // If a matching component was found, render it; otherwise, return null or a default icon\n        return IconComponent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconComponent, {}, void 0, false, {\n            fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n            lineNumber: 30,\n            columnNumber: 32\n        }, undefined) : null;\n    };\n    const formatTime = (gameDate)=>{\n        const scheduleFormatted = new Intl.DateTimeFormat(\"en-US\", {\n            year: \"numeric\",\n            month: \"long\",\n            day: \"2-digit\",\n            hour: \"numeric\",\n            minute: \"2-digit\",\n            hour12: true\n        }).format(gameDate);\n        return scheduleFormatted;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginLeft: \"30px\",\n            display: \"flex\",\n            flexDirection: \"row\",\n            alignItems: \"center\",\n            width: \"60%\",\n            justifyContent: \"space-between\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: getTeamIcon(homeTeam)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"start\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontSize: \"20px\",\n                                    fontWeight: \"800\",\n                                    color: \"black\"\n                                },\n                                children: teamAbbMap[homeTeam]\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontSize: \"14px\",\n                                    fontWeight: \"400\"\n                                },\n                                children: homeTeam\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"VS\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: formatTime(schedule)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"end\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontSize: \"20px\",\n                                    fontWeight: \"800\",\n                                    color: \"black\"\n                                },\n                                children: teamAbbMap[awayTeam]\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontSize: \"14px\",\n                                    fontWeight: \"400\"\n                                },\n                                children: awayTeam\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: getTeamIcon(awayTeam)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GameDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameDisplay);\nvar _c;\n$RefreshReg$(_c, \"GameDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWVEaXNwbGF5LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBRWtCO0FBQzVDLE1BQU1FLGNBQWtDLENBQUNDO0lBQ3RDLE1BQU0sRUFBQ0MsRUFBRSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBQyxHQUFHTjtJQUN2RSxNQUFNTyxjQUFjO1FBQ2YsbUJBQW1CVCxnREFBWTtRQUMvQixPQUFPQSxnREFBWTtRQUNuQixrQkFBa0JBLGdEQUFZO1FBQzlCLE9BQU9BLGdEQUFZO1FBQ25CLGlEQUFpRDtRQUNqRCxzQkFBc0JBLGdEQUFZO1FBQ2xDLE9BQU9BLGdEQUFZO1FBQ25CLHlCQUF5QkEsZ0RBQVk7UUFDckMsT0FBT0EsZ0RBQVk7SUFFdkI7SUFDQSxNQUFNYyxhQUFhO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIseUJBQXlCO0lBRTdCO0lBQ0EsTUFBTUMsY0FBYyxDQUFDQztRQUNqQix1REFBdUQ7UUFDdkQsTUFBTUMsZ0JBQWdCUixXQUFXLENBQUNPLFNBQVM7UUFFM0MseUZBQXlGO1FBQ3pGLE9BQU9DLDhCQUFnQiw4REFBQ0E7Ozs7d0JBQW1CO0lBQy9DO0lBQ0EsTUFBTUMsYUFBYSxDQUFDQztRQUNoQixNQUFNQyxvQkFBb0IsSUFBSUMsS0FBS0MsY0FBYyxDQUFDLFNBQVM7WUFDdkRDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxRQUFRO1FBQ1YsR0FBR0MsTUFBTSxDQUFDVjtRQUNaLE9BQU9DO0lBQ1g7SUFDRCxxQkFDQyw4REFBQ1U7UUFBSUMsT0FBTztZQUFDQyxZQUFZO1lBQVFDLFNBQVM7WUFBUUMsZUFBZTtZQUFPQyxZQUFZO1lBQVVDLE9BQU07WUFBTUMsZ0JBQWdCO1FBQWU7OzBCQUNySSw4REFBQ1A7Z0JBQUlDLE9BQU87b0JBQUNFLFNBQVM7b0JBQVFDLGVBQWU7b0JBQU9DLFlBQVk7Z0JBQVE7O2tDQUNwRSw4REFBQ0w7a0NBQUtmLFlBQVlYOzs7Ozs7a0NBQ2xCLDhEQUFDMEI7d0JBQUlDLE9BQU87NEJBQUNFLFNBQVM7NEJBQVFDLGVBQWU7NEJBQVVDLFlBQVk7d0JBQU87OzBDQUN0RSw4REFBQ0c7Z0NBQUVQLE9BQU87b0NBQUNRLFVBQVM7b0NBQVFDLFlBQVc7b0NBQU9DLE9BQU87Z0NBQU87MENBQUkzQixVQUFVLENBQUNWLFNBQVM7Ozs7OzswQ0FFcEYsOERBQUNrQztnQ0FBRVAsT0FBTztvQ0FBQ1EsVUFBUztvQ0FBUUMsWUFBVztnQ0FBSzswQ0FBSXBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3hELDhEQUFDMEI7Z0JBQUlDLE9BQU87b0JBQUNFLFNBQVM7b0JBQVFDLGVBQWU7b0JBQVVDLFlBQVk7Z0JBQVE7O2tDQUN2RSw4REFBQ0c7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUdwQixXQUFXVjs7Ozs7Ozs7Ozs7OzBCQUVuQiw4REFBQ3NCO2dCQUFJQyxPQUFPO29CQUFDRSxTQUFTO29CQUFRQyxlQUFlO29CQUFPQyxZQUFZO2dCQUFROztrQ0FFcEUsOERBQUNMO3dCQUFJQyxPQUFPOzRCQUFDRSxTQUFTOzRCQUFRQyxlQUFlOzRCQUFVQyxZQUFZO3dCQUFLOzswQ0FDcEUsOERBQUNHO2dDQUFFUCxPQUFPO29DQUFDUSxVQUFTO29DQUFRQyxZQUFXO29DQUFPQyxPQUFPO2dDQUFPOzBDQUFJM0IsVUFBVSxDQUFDUixTQUFTOzs7Ozs7MENBRXBGLDhEQUFDZ0M7Z0NBQUVQLE9BQU87b0NBQUNRLFVBQVM7b0NBQVFDLFlBQVc7Z0NBQUs7MENBQUlsQzs7Ozs7Ozs7Ozs7O2tDQUdwRCw4REFBQ3dCO2tDQUFLZixZQUFZVDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCO0tBckVNTDtBQXNFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWVEaXNwbGF5LnRzeD9hYWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElOQkFHYW1lfSBmcm9tICcuLi90eXBlcy9HYW1lJztcclxuaW1wb3J0ICogYXMgTkJBSWNvbnMgZnJvbSAncmVhY3QtbmJhLWxvZ29zJztcclxuY29uc3QgR2FtZURpc3BsYXk6IFJlYWN0LkZDPElOQkFHYW1lPiA9IChwcm9wcykgPT57XHJcbiAgIGNvbnN0IHtpZCwgaG9tZVRlYW0sIGhvbWVUZWFtTG9nbywgYXdheVRlYW0sIGF3YXlUZWFtTG9nbywgc2NoZWR1bGV9ID0gcHJvcHM7XHJcbiAgIGNvbnN0IHRlYW1JY29uTWFwID0ge1xyXG4gICAgICAgIFwiVG9yb250byBSYXB0b3JzXCI6IE5CQUljb25zLlRPUixcclxuICAgICAgICBcIlRPUlwiOiBOQkFJY29ucy5UT1IsXHJcbiAgICAgICAgXCJCb3N0b24gQ2VsdGljc1wiOiBOQkFJY29ucy5CT1MsXHJcbiAgICAgICAgXCJCT1NcIjogTkJBSWNvbnMuQk9TLFxyXG4gICAgICAgIC8vIEFkZCBtb3JlIHRlYW1zIGhlcmUgZm9sbG93aW5nIHRoZSBzYW1lIHBhdHRlcm5cclxuICAgICAgICBcIkxvcyBBbmdlbGVzIExha2Vyc1wiOiBOQkFJY29ucy5MQUwsXHJcbiAgICAgICAgXCJMQUxcIjogTkJBSWNvbnMuTEFMLFxyXG4gICAgICAgIFwiR29sZGVuIFN0YXRlIFdhcnJpb3JzXCI6IE5CQUljb25zLkdTVyxcclxuICAgICAgICBcIkdTV1wiOiBOQkFJY29ucy5HU1csXHJcbiAgICAgICAgLy8gQ29udGludWUgZm9yIGFsbCBOQkEgdGVhbXNcclxuICAgIH07XHJcbiAgICBjb25zdCB0ZWFtQWJiTWFwID0ge1xyXG4gICAgICAgIFwiVG9yb250byBSYXB0b3JzXCI6IFwiVE9SXCIsXHJcbiAgICAgICAgXCJCb3N0b24gQ2VsdGljc1wiOiBcIkJPU1wiLFxyXG4gICAgICAgIFwiTG9zIEFuZ2VsZXMgTGFrZXJzXCI6IFwiTEFMXCIsXHJcbiAgICAgICAgXCJHb2xkZW4gU3RhdGUgV2FycmlvcnNcIjogXCJHU1dcIixcclxuICAgICAgICAvLyBDb250aW51ZSBmb3IgYWxsIE5CQSB0ZWFtc1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFRlYW1JY29uID0gKHRlYW1OYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyBMb29rIHVwIHRoZSBjb21wb25lbnQgaW4gdGhlIHRlYW1JY29uTWFwIGJ5IHRlYW1OYW1lXHJcbiAgICAgICAgY29uc3QgSWNvbkNvbXBvbmVudCA9IHRlYW1JY29uTWFwW3RlYW1OYW1lXTtcclxuICAgIFxyXG4gICAgICAgIC8vIElmIGEgbWF0Y2hpbmcgY29tcG9uZW50IHdhcyBmb3VuZCwgcmVuZGVyIGl0OyBvdGhlcndpc2UsIHJldHVybiBudWxsIG9yIGEgZGVmYXVsdCBpY29uXHJcbiAgICAgICAgcmV0dXJuIEljb25Db21wb25lbnQgPyA8SWNvbkNvbXBvbmVudCAvPiA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZm9ybWF0VGltZSA9IChnYW1lRGF0ZSA6IERhdGUpID0+e1xyXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlRm9ybWF0dGVkID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywge1xyXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICBob3VyMTI6IHRydWUsXHJcbiAgICAgICAgICB9KS5mb3JtYXQoZ2FtZURhdGUpO1xyXG4gICAgICAgIHJldHVybiBzY2hlZHVsZUZvcm1hdHRlZFxyXG4gICAgfVxyXG4gICByZXR1cm4oXHJcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDogJzMwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgd2lkdGg6JzYwJScsanVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ319PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICA8ZGl2PntnZXRUZWFtSWNvbihob21lVGVhbSl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnc3RhcnQnfX0+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicyMHB4JywgZm9udFdlaWdodDonODAwJywgY29sb3I6IFwiYmxhY2tcIn19Pnt0ZWFtQWJiTWFwW2hvbWVUZWFtXX08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIGZvbnRXZWlnaHQ6JzQwMCd9fT57aG9tZVRlYW19PC9wPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICA8cD5WUzwvcD5cclxuICAgICAgICAgICAgPHA+e2Zvcm1hdFRpbWUoc2NoZWR1bGUpfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnZW5kJ319PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMjBweCcsIGZvbnRXZWlnaHQ6JzgwMCcsIGNvbG9yOiBcImJsYWNrXCJ9fT57dGVhbUFiYk1hcFthd2F5VGVhbV19PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBmb250V2VpZ2h0Oic0MDAnfX0+e2F3YXlUZWFtfTwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PntnZXRUZWFtSWNvbihhd2F5VGVhbSl9PC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZURpc3BsYXk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTkJBSWNvbnMiLCJHYW1lRGlzcGxheSIsInByb3BzIiwiaWQiLCJob21lVGVhbSIsImhvbWVUZWFtTG9nbyIsImF3YXlUZWFtIiwiYXdheVRlYW1Mb2dvIiwic2NoZWR1bGUiLCJ0ZWFtSWNvbk1hcCIsIlRPUiIsIkJPUyIsIkxBTCIsIkdTVyIsInRlYW1BYmJNYXAiLCJnZXRUZWFtSWNvbiIsInRlYW1OYW1lIiwiSWNvbkNvbXBvbmVudCIsImZvcm1hdFRpbWUiLCJnYW1lRGF0ZSIsInNjaGVkdWxlRm9ybWF0dGVkIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsImZvcm1hdCIsImRpdiIsInN0eWxlIiwibWFyZ2luTGVmdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJwIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GameDisplay.tsx\n"));

/***/ })

});