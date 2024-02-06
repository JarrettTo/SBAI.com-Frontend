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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_nba_logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-nba-logos */ \"./node_modules/react-nba-logos/dist/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"__barrel_optimize__?names=Button!=!./node_modules/@mui/material/index.js\");\n\n\n\n\nconst GameDisplay = (props)=>{\n    const { id, homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, schedule } = props;\n    const teamIconMap = {\n        //TODO: Complete for All NBA Teams\n        \"TOR\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.TOR,\n        \"BOS\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.BOS,\n        // Add more teams here following the same pattern\n        \"LAL\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.LAL,\n        \"GSW\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.GSW\n    };\n    const teamAbbMap = {\n        //TODO: Complete for All NBA Teams\n        \"Toronto Raptors\": \"TOR\",\n        \"Boston Celtics\": \"BOS\",\n        \"Los Angeles Lakers\": \"LAL\",\n        \"Golden State Warriors\": \"GSW\"\n    };\n    const getTeamIcon = (teamName)=>{\n        // Look up the component in the teamIconMap by teamName\n        const IconComponent = teamIconMap[teamName];\n        // If a matching component was found, render it; otherwise, return null or a default icon\n        return IconComponent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconComponent, {}, void 0, false, {\n            fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n            lineNumber: 30,\n            columnNumber: 32\n        }, undefined) : null;\n    };\n    const formatTime = (gameDate)=>{\n        const scheduleFormatted = new Intl.DateTimeFormat(\"en-US\", {\n            year: \"numeric\",\n            month: \"long\",\n            day: \"2-digit\",\n            hour: \"numeric\",\n            minute: \"2-digit\",\n            hour12: true\n        }).format(gameDate);\n        return scheduleFormatted;\n    };\n    const handleClick = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginLeft: \"30px\",\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    alignItems: \"center\",\n                    width: \"60%\",\n                    justifyContent: \"space-between\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: getTeamIcon(teamAbbMap[homeTeam])\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    alignItems: \"start\",\n                                    marginLeft: \"10px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"20px\",\n                                            fontWeight: \"800\",\n                                            color: \"black\"\n                                        },\n                                        children: teamAbbMap[homeTeam]\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"14px\",\n                                            fontWeight: \"400\"\n                                        },\n                                        children: homeTeam\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontSize: \"20px\",\n                                    fontWeight: \"800\",\n                                    color: \"black\"\n                                },\n                                children: \"VS\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontSize: \"14px\",\n                                    fontWeight: \"400\"\n                                },\n                                children: formatTime(schedule)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    alignItems: \"end\",\n                                    marginRight: \"10px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"20px\",\n                                            fontWeight: \"800\",\n                                            color: \"black\"\n                                        },\n                                        children: teamAbbMap[awayTeam]\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"14px\",\n                                            fontWeight: \"400\"\n                                        },\n                                        children: awayTeam\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: getTeamIcon(teamAbbMap[awayTeam])\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        variant: \"contained\",\n                        onClick: handleClick,\n                        style: {\n                            fontSize: \"14px\",\n                            width: \"80px\",\n                            backgroundColor: \"#068FFF\",\n                            color: \"#EEEEEE\",\n                            borderRadius: \"10px\",\n                            textTransform: \"none\",\n                            marginRight: \"10px\"\n                        },\n                        children: \"Box Score\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        variant: \"contained\",\n                        onClick: handleClick,\n                        style: {\n                            fontSize: \"14px\",\n                            width: \"80px\",\n                            backgroundColor: \"#068FFF\",\n                            color: \"#EEEEEE\",\n                            borderRadius: \"10px\",\n                            textTransform: \"none\"\n                        },\n                        children: \"Odds\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        variant: \"contained\",\n                        onClick: handleClick,\n                        style: {\n                            fontSize: \"14px\",\n                            width: \"80px\",\n                            backgroundColor: \"#068FFF\",\n                            color: \"#EEEEEE\",\n                            borderRadius: \"10px\",\n                            textTransform: \"none\"\n                        },\n                        children: \"Predict\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\components\\\\GameDisplay.tsx\",\n                lineNumber: 75,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = GameDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameDisplay);\nvar _c;\n$RefreshReg$(_c, \"GameDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVlELFVBQVUsQ0FBQ1IsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUk5Qyw4REFBQ3lCO2dCQUFJQyxPQUFPO29CQUFDRSxTQUFRO29CQUFRQyxlQUFjO29CQUFPQyxZQUFZO2dCQUFTOztrQ0FDbkUsOERBQUNwQyw4RUFBTUE7d0JBQ0g0QyxTQUFRO3dCQUNSQyxTQUFTZjt3QkFDVEUsT0FBTzs0QkFDSFEsVUFBUzs0QkFDVEgsT0FBTzs0QkFDUFMsaUJBQWlCOzRCQUNqQkosT0FBTzs0QkFDUEssY0FBYzs0QkFDZEMsZUFBZTs0QkFDZkwsYUFBWTt3QkFDaEI7a0NBQ0g7Ozs7OztrQ0FHRCw4REFBQzNDLDhFQUFNQTt3QkFDSDRDLFNBQVE7d0JBQ1JDLFNBQVNmO3dCQUNURSxPQUFPOzRCQUNIUSxVQUFTOzRCQUNUSCxPQUFPOzRCQUNQUyxpQkFBaUI7NEJBQ2pCSixPQUFPOzRCQUNQSyxjQUFjOzRCQUNkQyxlQUFlO3dCQUNuQjtrQ0FDSDs7Ozs7O2tDQUdELDhEQUFDaEQsOEVBQU1BO3dCQUNINEMsU0FBUTt3QkFDUkMsU0FBU2Y7d0JBQ1RFLE9BQU87NEJBQ0hRLFVBQVM7NEJBQ1RILE9BQU87NEJBQ1BTLGlCQUFpQjs0QkFDakJKLE9BQU87NEJBQ1BLLGNBQWM7NEJBQ2RDLGVBQWU7d0JBQ25CO2tDQUNIOzs7Ozs7Ozs7Ozs7OztBQU9UO0tBdEhNL0M7QUF1SE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lRGlzcGxheS50c3g/YWFhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJTkJBR2FtZX0gZnJvbSAnLi4vdHlwZXMvR2FtZSc7XHJcbmltcG9ydCAqIGFzIE5CQUljb25zIGZyb20gJ3JlYWN0LW5iYS1sb2dvcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5jb25zdCBHYW1lRGlzcGxheTogUmVhY3QuRkM8SU5CQUdhbWU+ID0gKHByb3BzKSA9PntcclxuICAgY29uc3Qge2lkLCBob21lVGVhbSwgaG9tZVRlYW1Mb2dvLCBhd2F5VGVhbSwgYXdheVRlYW1Mb2dvLCBzY2hlZHVsZX0gPSBwcm9wcztcclxuICAgY29uc3QgdGVhbUljb25NYXAgPSB7XHJcbiAgICAgICAgLy9UT0RPOiBDb21wbGV0ZSBmb3IgQWxsIE5CQSBUZWFtc1xyXG4gICAgICAgIFwiVE9SXCI6IE5CQUljb25zLlRPUixcclxuICAgICAgICBcIkJPU1wiOiBOQkFJY29ucy5CT1MsXHJcbiAgICAgICAgLy8gQWRkIG1vcmUgdGVhbXMgaGVyZSBmb2xsb3dpbmcgdGhlIHNhbWUgcGF0dGVyblxyXG4gICAgICAgIFwiTEFMXCI6IE5CQUljb25zLkxBTCxcclxuICAgICAgICBcIkdTV1wiOiBOQkFJY29ucy5HU1csXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29udGludWUgZm9yIGFsbCBOQkEgdGVhbXNcclxuICAgIH07XHJcbiAgICBjb25zdCB0ZWFtQWJiTWFwID0ge1xyXG4gICAgICAgIC8vVE9ETzogQ29tcGxldGUgZm9yIEFsbCBOQkEgVGVhbXNcclxuICAgICAgICBcIlRvcm9udG8gUmFwdG9yc1wiOiBcIlRPUlwiLFxyXG4gICAgICAgIFwiQm9zdG9uIENlbHRpY3NcIjogXCJCT1NcIixcclxuICAgICAgICBcIkxvcyBBbmdlbGVzIExha2Vyc1wiOiBcIkxBTFwiLFxyXG4gICAgICAgIFwiR29sZGVuIFN0YXRlIFdhcnJpb3JzXCI6IFwiR1NXXCIsXHJcbiAgICAgICAgLy8gQ29udGludWUgZm9yIGFsbCBOQkEgdGVhbXNcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRUZWFtSWNvbiA9ICh0ZWFtTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgLy8gTG9vayB1cCB0aGUgY29tcG9uZW50IGluIHRoZSB0ZWFtSWNvbk1hcCBieSB0ZWFtTmFtZVxyXG4gICAgICAgIGNvbnN0IEljb25Db21wb25lbnQgPSB0ZWFtSWNvbk1hcFt0ZWFtTmFtZV07XHJcbiAgICBcclxuICAgICAgICAvLyBJZiBhIG1hdGNoaW5nIGNvbXBvbmVudCB3YXMgZm91bmQsIHJlbmRlciBpdDsgb3RoZXJ3aXNlLCByZXR1cm4gbnVsbCBvciBhIGRlZmF1bHQgaWNvblxyXG4gICAgICAgIHJldHVybiBJY29uQ29tcG9uZW50ID8gPEljb25Db21wb25lbnQgLz4gOiBudWxsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAoZ2FtZURhdGUgOiBEYXRlKSA9PntcclxuICAgICAgICBjb25zdCBzY2hlZHVsZUZvcm1hdHRlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgaG91cjEyOiB0cnVlLFxyXG4gICAgICAgICAgfSkuZm9ybWF0KGdhbWVEYXRlKTtcclxuICAgICAgICByZXR1cm4gc2NoZWR1bGVGb3JtYXR0ZWRcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrPSAoKT0+e1xyXG5cclxuICAgIH1cclxuICAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMzBweCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInLCB3aWR0aDonNjAlJyxqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgIDxkaXY+e2dldFRlYW1JY29uKHRlYW1BYmJNYXBbaG9tZVRlYW1dKX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdzdGFydCcsIG1hcmdpbkxlZnQ6ICcxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMjBweCcsIGZvbnRXZWlnaHQ6JzgwMCcsIGNvbG9yOiBcImJsYWNrXCJ9fT57dGVhbUFiYk1hcFtob21lVGVhbV19PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBmb250V2VpZ2h0Oic0MDAnfX0+e2hvbWVUZWFtfTwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMjBweCcsIGZvbnRXZWlnaHQ6JzgwMCcsIGNvbG9yOiBcImJsYWNrXCJ9fT5WUzwvcD5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIGZvbnRXZWlnaHQ6JzQwMCd9fT57Zm9ybWF0VGltZShzY2hlZHVsZSl9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdlbmQnLCAgbWFyZ2luUmlnaHQ6ICcxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMjBweCcsIGZvbnRXZWlnaHQ6JzgwMCcsIGNvbG9yOiBcImJsYWNrXCJ9fT57dGVhbUFiYk1hcFthd2F5VGVhbV19PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnLCBmb250V2VpZ2h0Oic0MDAnfX0+e2F3YXlUZWFtfTwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PntnZXRUZWFtSWNvbih0ZWFtQWJiTWFwW2F3YXlUZWFtXSl9PC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInLH19PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6JzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc4MHB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwNjhGRkYnLCAvLyBTZXQgdGhlIGJhY2tncm91bmQgY29sb3JcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI0VFRUVFRScsIC8vIFNldCB0aGUgdGV4dCBjb2xvciB0byBncmF5XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JywgLy8gUm91bmRlZCBjb3JuZXJzXHJcbiAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsIC8vIEF2b2lkIHVwcGVyY2FzZSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6JzEwcHgnXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBCb3ggU2NvcmVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOicxNHB4JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDY4RkZGJywgLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNFRUVFRUUnLCAvLyBTZXQgdGhlIHRleHQgY29sb3IgdG8gZ3JheVxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsIC8vIFJvdW5kZWQgY29ybmVyc1xyXG4gICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLCAvLyBBdm9pZCB1cHBlcmNhc2UgdHJhbnNmb3JtYXRpb25cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIE9kZHNcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOicxNHB4JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDY4RkZGJywgLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNFRUVFRUUnLCAvLyBTZXQgdGhlIHRleHQgY29sb3IgdG8gZ3JheVxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsIC8vIFJvdW5kZWQgY29ybmVyc1xyXG4gICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLCAvLyBBdm9pZCB1cHBlcmNhc2UgdHJhbnNmb3JtYXRpb25cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFByZWRpY3RcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZURpc3BsYXk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTkJBSWNvbnMiLCJCdXR0b24iLCJHYW1lRGlzcGxheSIsInByb3BzIiwiaWQiLCJob21lVGVhbSIsImhvbWVUZWFtTG9nbyIsImF3YXlUZWFtIiwiYXdheVRlYW1Mb2dvIiwic2NoZWR1bGUiLCJ0ZWFtSWNvbk1hcCIsIlRPUiIsIkJPUyIsIkxBTCIsIkdTVyIsInRlYW1BYmJNYXAiLCJnZXRUZWFtSWNvbiIsInRlYW1OYW1lIiwiSWNvbkNvbXBvbmVudCIsImZvcm1hdFRpbWUiLCJnYW1lRGF0ZSIsInNjaGVkdWxlRm9ybWF0dGVkIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsImZvcm1hdCIsImhhbmRsZUNsaWNrIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsInAiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwidmFyaWFudCIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0VHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GameDisplay.tsx\n"));

/***/ })

});