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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_nba_logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-nba-logos */ \"./node_modules/react-nba-logos/dist/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"__barrel_optimize__?names=Button!=!./node_modules/@mui/material/index.js\");\n\n\n\n\nconst GameDisplay = (props)=>{\n    const { id, homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, schedule, isInDropdown = false } = props;\n    const teamIconMap = {\n        //TODO: Complete for All NBA Teams\n        \"TOR\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.TOR,\n        \"BOS\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.BOS,\n        // Add more teams here following the same pattern\n        \"LAL\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.LAL,\n        \"GSW\": react_nba_logos__WEBPACK_IMPORTED_MODULE_2__.GSW\n    };\n    const teamAbbMap = {\n        //TODO: Complete for All NBA Teams\n        \"Toronto Raptors\": \"TOR\",\n        \"Boston Celtics\": \"BOS\",\n        \"Los Angeles Lakers\": \"LAL\",\n        \"Golden State Warriors\": \"GSW\"\n    };\n    const getTeamIcon = (teamName)=>{\n        // Look up the component in the teamIconMap by teamName\n        const IconComponent = teamIconMap[teamName];\n        // If a matching component was found, render it; otherwise, return null or a default icon\n        return IconComponent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconComponent, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n            lineNumber: 35,\n            columnNumber: 32\n        }, undefined) : null;\n    };\n    const formatTime = (gameDate)=>{\n        const scheduleFormatted = new Intl.DateTimeFormat(\"en-US\", {\n            year: \"numeric\",\n            month: \"long\",\n            day: \"2-digit\",\n            hour: \"numeric\",\n            minute: \"2-digit\",\n            hour12: true\n        }).format(gameDate);\n        return scheduleFormatted;\n    };\n    const handleBoxScoreClick = ()=>{\n    //TODO: Redirect to page that shows box score of game\n    };\n    const handleOddsClick = ()=>{\n    //TODO: Redirect to page that shows Odds of game\n    };\n    const handlePredictClick = ()=>{\n    //TODO: Either redirect/dropdown and show predictions of AI Model from API\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"row\",\n            justifyContent: \"space-between\",\n            marginTop: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginLeft: \"30px\",\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    alignItems: \"center\",\n                    width: \"60%\",\n                    justifyContent: \"space-between\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: getTeamIcon(teamAbbMap[homeTeam])\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    alignItems: \"start\",\n                                    marginLeft: \"10px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"20px\",\n                                            fontWeight: \"800\",\n                                            color: \"black\"\n                                        },\n                                        children: teamAbbMap[homeTeam]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"14px\",\n                                            fontWeight: \"400\"\n                                        },\n                                        children: homeTeam\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontSize: \"20px\",\n                                    fontWeight: \"800\",\n                                    color: \"black\"\n                                },\n                                children: \"VS\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontSize: \"14px\",\n                                    fontWeight: \"400\"\n                                },\n                                children: formatTime(schedule)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    alignItems: \"end\",\n                                    marginRight: \"10px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"20px\",\n                                            fontWeight: \"800\",\n                                            color: \"black\"\n                                        },\n                                        children: teamAbbMap[awayTeam]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"14px\",\n                                            fontWeight: \"400\"\n                                        },\n                                        children: awayTeam\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: getTeamIcon(teamAbbMap[awayTeam])\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined),\n            isInDropdown ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    alignItems: \"center\",\n                    marginRight: \"30px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        variant: \"contained\",\n                        onClick: handleBoxScoreClick,\n                        style: {\n                            fontSize: \"14px\",\n                            width: \"120px\",\n                            backgroundColor: \"#EEEEEE\",\n                            color: \"black\",\n                            borderRadius: \"10px\",\n                            textTransform: \"none\",\n                            marginRight: \"10px\"\n                        },\n                        children: \"Box Score\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        variant: \"contained\",\n                        onClick: handleOddsClick,\n                        style: {\n                            fontSize: \"14px\",\n                            width: \"80px\",\n                            backgroundColor: \"#EEEEEE\",\n                            color: \"black\",\n                            borderRadius: \"10px\",\n                            textTransform: \"none\",\n                            marginRight: \"10px\"\n                        },\n                        children: \"Odds\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        variant: \"contained\",\n                        onClick: handlePredictClick,\n                        style: {\n                            fontSize: \"14px\",\n                            width: \"80px\",\n                            backgroundColor: \"#068FFF\",\n                            color: \"#EEEEEE\",\n                            borderRadius: \"10px\",\n                            textTransform: \"none\",\n                            marginRight: \"10px\"\n                        },\n                        children: \"Predict\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\components\\\\GameDisplay.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GameDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameDisplay);\nvar _c;\n$RefreshReg$(_c, \"GameDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZURpc3BsYXkudHN4P2FhYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSU5CQUdhbWV9IGZyb20gJy4uL3R5cGVzL0dhbWUnO1xyXG5pbXBvcnQgKiBhcyBOQkFJY29ucyBmcm9tICdyZWFjdC1uYmEtbG9nb3MnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmludGVyZmFjZSBHYW1lRGlzcGxheVByb3BzIGV4dGVuZHMgSU5CQUdhbWUge1xyXG4gICAgaXNJbkRyb3Bkb3duPzogYm9vbGVhbjtcclxuICB9XHJcblxyXG5jb25zdCBHYW1lRGlzcGxheTogUmVhY3QuRkM8R2FtZURpc3BsYXlQcm9wcz4gPSAocHJvcHMpID0+e1xyXG4gICBjb25zdCB7aWQsIGhvbWVUZWFtLCBob21lVGVhbUxvZ28sIGF3YXlUZWFtLCBhd2F5VGVhbUxvZ28sIHNjaGVkdWxlLCAgaXNJbkRyb3Bkb3duID0gZmFsc2UsfSA9IHByb3BzO1xyXG4gICBjb25zdCB0ZWFtSWNvbk1hcCA9IHtcclxuICAgICAgICAvL1RPRE86IENvbXBsZXRlIGZvciBBbGwgTkJBIFRlYW1zXHJcbiAgICAgICAgXCJUT1JcIjogTkJBSWNvbnMuVE9SLFxyXG4gICAgICAgIFwiQk9TXCI6IE5CQUljb25zLkJPUyxcclxuICAgICAgICAvLyBBZGQgbW9yZSB0ZWFtcyBoZXJlIGZvbGxvd2luZyB0aGUgc2FtZSBwYXR0ZXJuXHJcbiAgICAgICAgXCJMQUxcIjogTkJBSWNvbnMuTEFMLFxyXG4gICAgICAgIFwiR1NXXCI6IE5CQUljb25zLkdTVyxcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb250aW51ZSBmb3IgYWxsIE5CQSB0ZWFtc1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHRlYW1BYmJNYXAgPSB7XHJcbiAgICAgICAgLy9UT0RPOiBDb21wbGV0ZSBmb3IgQWxsIE5CQSBUZWFtc1xyXG4gICAgICAgIFwiVG9yb250byBSYXB0b3JzXCI6IFwiVE9SXCIsXHJcbiAgICAgICAgXCJCb3N0b24gQ2VsdGljc1wiOiBcIkJPU1wiLFxyXG4gICAgICAgIFwiTG9zIEFuZ2VsZXMgTGFrZXJzXCI6IFwiTEFMXCIsXHJcbiAgICAgICAgXCJHb2xkZW4gU3RhdGUgV2FycmlvcnNcIjogXCJHU1dcIixcclxuICAgICAgICAvLyBDb250aW51ZSBmb3IgYWxsIE5CQSB0ZWFtc1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFRlYW1JY29uID0gKHRlYW1OYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyBMb29rIHVwIHRoZSBjb21wb25lbnQgaW4gdGhlIHRlYW1JY29uTWFwIGJ5IHRlYW1OYW1lXHJcbiAgICAgICAgY29uc3QgSWNvbkNvbXBvbmVudCA9IHRlYW1JY29uTWFwW3RlYW1OYW1lXTtcclxuICAgIFxyXG4gICAgICAgIC8vIElmIGEgbWF0Y2hpbmcgY29tcG9uZW50IHdhcyBmb3VuZCwgcmVuZGVyIGl0OyBvdGhlcndpc2UsIHJldHVybiBudWxsIG9yIGEgZGVmYXVsdCBpY29uXHJcbiAgICAgICAgcmV0dXJuIEljb25Db21wb25lbnQgPyA8SWNvbkNvbXBvbmVudCAvPiA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZm9ybWF0VGltZSA9IChnYW1lRGF0ZSA6IERhdGUpID0+e1xyXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlRm9ybWF0dGVkID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywge1xyXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICBob3VyMTI6IHRydWUsXHJcbiAgICAgICAgICB9KS5mb3JtYXQoZ2FtZURhdGUpO1xyXG4gICAgICAgIHJldHVybiBzY2hlZHVsZUZvcm1hdHRlZFxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQm94U2NvcmVDbGljaz0gKCk9PntcclxuICAgICAgICAvL1RPRE86IFJlZGlyZWN0IHRvIHBhZ2UgdGhhdCBzaG93cyBib3ggc2NvcmUgb2YgZ2FtZVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlT2Rkc0NsaWNrPSAoKT0+e1xyXG4gICAgICAgIC8vVE9ETzogUmVkaXJlY3QgdG8gcGFnZSB0aGF0IHNob3dzIE9kZHMgb2YgZ2FtZVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlUHJlZGljdENsaWNrPSAoKT0+e1xyXG4gICAgICAgIC8vVE9ETzogRWl0aGVyIHJlZGlyZWN0L2Ryb3Bkb3duIGFuZCBzaG93IHByZWRpY3Rpb25zIG9mIEFJIE1vZGVsIGZyb20gQVBJXHJcbiAgICB9XHJcbiAgIHJldHVybihcclxuICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246J3JvdycsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1hcmdpblRvcDogJzIwcHgnLCB9fT5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMzBweCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInLCB3aWR0aDonNjAlJyxqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57Z2V0VGVhbUljb24odGVhbUFiYk1hcFtob21lVGVhbV0pfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdzdGFydCcsIG1hcmdpbkxlZnQ6ICcxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzIwcHgnLCBmb250V2VpZ2h0Oic4MDAnLCBjb2xvcjogXCJibGFja1wifX0+e3RlYW1BYmJNYXBbaG9tZVRlYW1dfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIGZvbnRXZWlnaHQ6JzQwMCd9fT57aG9tZVRlYW19PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzIwcHgnLCBmb250V2VpZ2h0Oic4MDAnLCBjb2xvcjogXCJibGFja1wifX0+VlM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicxNHB4JywgZm9udFdlaWdodDonNDAwJ319Pntmb3JtYXRUaW1lKHNjaGVkdWxlKX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdlbmQnLCAgbWFyZ2luUmlnaHQ6ICcxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzIwcHgnLCBmb250V2VpZ2h0Oic4MDAnLCBjb2xvcjogXCJibGFja1wifX0+e3RlYW1BYmJNYXBbYXdheVRlYW1dfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMTRweCcsIGZvbnRXZWlnaHQ6JzQwMCd9fT57YXdheVRlYW19PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57Z2V0VGVhbUljb24odGVhbUFiYk1hcFthd2F5VGVhbV0pfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc0luRHJvcGRvd24gPyBudWxsIDogKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjoncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpblJpZ2h0OiAnMzBweCd9fT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCb3hTY29yZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VFRUVFRScsIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLCAvLyBTZXQgdGhlIHRleHQgY29sb3IgdG8gZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLCAvLyBSb3VuZGVkIGNvcm5lcnNcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsIC8vIEF2b2lkIHVwcGVyY2FzZSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OicxMHB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQm94IFNjb3JlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9kZHNDbGlja31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6JzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VFRUVFRScsIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLCAvLyBTZXQgdGhlIHRleHQgY29sb3IgdG8gZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLCAvLyBSb3VuZGVkIGNvcm5lcnNcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsIC8vIEF2b2lkIHVwcGVyY2FzZSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OicxMHB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgT2Rkc1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmVkaWN0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOicxNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzgwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwNjhGRkYnLCAvLyBTZXQgdGhlIGJhY2tncm91bmQgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNFRUVFRUUnLCAvLyBTZXQgdGhlIHRleHQgY29sb3IgdG8gZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLCAvLyBSb3VuZGVkIGNvcm5lcnNcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsIC8vIEF2b2lkIHVwcGVyY2FzZSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OicxMHB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUHJlZGljdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVEaXNwbGF5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOQkFJY29ucyIsIkJ1dHRvbiIsIkdhbWVEaXNwbGF5IiwicHJvcHMiLCJpZCIsImhvbWVUZWFtIiwiaG9tZVRlYW1Mb2dvIiwiYXdheVRlYW0iLCJhd2F5VGVhbUxvZ28iLCJzY2hlZHVsZSIsImlzSW5Ecm9wZG93biIsInRlYW1JY29uTWFwIiwiVE9SIiwiQk9TIiwiTEFMIiwiR1NXIiwidGVhbUFiYk1hcCIsImdldFRlYW1JY29uIiwidGVhbU5hbWUiLCJJY29uQ29tcG9uZW50IiwiZm9ybWF0VGltZSIsImdhbWVEYXRlIiwic2NoZWR1bGVGb3JtYXR0ZWQiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwiZm9ybWF0IiwiaGFuZGxlQm94U2NvcmVDbGljayIsImhhbmRsZU9kZHNDbGljayIsImhhbmRsZVByZWRpY3RDbGljayIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJwIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJtYXJnaW5SaWdodCIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidGV4dFRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GameDisplay.tsx\n"));

/***/ })

});