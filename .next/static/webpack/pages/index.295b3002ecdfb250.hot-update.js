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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowDropDown */ \"./node_modules/@mui/icons-material/ArrowDropDown.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\n/* harmony import */ var _components_GameDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameDisplay */ \"./components/GameDisplay.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst sample1 = {\n    id: 1,\n    homeTeam: \"Los Angeles Lakers\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Golden State Warriors\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample2 = {\n    id: 2,\n    homeTeam: \"Toronto Raptors\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Boston Celtics\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample3 = {\n    id: 3,\n    homeTeam: \"Toronto Raptors\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Boston Celtics\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample4 = {\n    id: 4,\n    homeTeam: \"Toronto Raptors\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Boston Celtics\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst HomePage = ()=>{\n    _s();\n    const [NBAGames, setNBAGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        sample1,\n        sample2,\n        sample3,\n        sample4,\n        sample4,\n        sample4\n    ]);\n    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            height: \"100vh\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    marginTop: \"105px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontWeight: 700,\n                            fontSize: \"80px\"\n                        },\n                        children: \"Sports Betting AI\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontWeight: 500,\n                            fontSize: \"15px\",\n                            width: \"30vw\",\n                            textAlign: \"center\",\n                            marginBottom: \"30px\"\n                        },\n                        children: \"Select an upcoming NBA game and click the predict button to generate a prediciton using our latest AI Model!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                variant: \"contained\",\n                                endIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 34\n                                }, void 0),\n                                onClick: handleClick,\n                                style: {\n                                    fontSize: \"20px\",\n                                    width: \"40vw\",\n                                    backgroundColor: \"#fff\",\n                                    color: \"#aaa\",\n                                    borderRadius: \"10px\",\n                                    textTransform: \"none\",\n                                    marginRight: \"30px\"\n                                },\n                                children: \"Select an NBA Game\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"simple-menu\",\n                                anchorEl: anchorEl,\n                                open: open,\n                                onClose: handleClose,\n                                MenuListProps: {\n                                    \"aria-labelledby\": \"basic-button\"\n                                },\n                                PaperProps: {\n                                    style: {\n                                        borderRadius: \"10px\",\n                                        width: \"40vw\",\n                                        maxHeight: \"50vh\",\n                                        overflowY: \"auto\"\n                                    }\n                                },\n                                children: NBAGames.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        onClick: handleClose,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            id: game.id,\n                                            homeTeam: game.homeTeam,\n                                            homeTeamLogo: game.homeTeamLogo,\n                                            awayTeam: game.awayTeam,\n                                            awayTeamLogo: game.awayTeamLogo,\n                                            schedule: game.schedule\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, game.id, false, {\n                                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 29\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                variant: \"contained\",\n                                onClick: handleClick,\n                                style: {\n                                    fontSize: \"20px\",\n                                    width: \"10vw\",\n                                    backgroundColor: \"#068FFF\",\n                                    color: \"#EEEEEE\",\n                                    borderRadius: \"10px\",\n                                    textTransform: \"none\"\n                                },\n                                children: \"Predict\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"60px\",\n                    width: \"80%\",\n                    minHeight: \"30vw\",\n                    backgroundColor: \"#fff\",\n                    color: \"#aaa\",\n                    borderRadius: \"10px\",\n                    textTransform: \"none\",\n                    overflow: \"auto\"\n                },\n                children: NBAGames.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: game.id,\n                        homeTeam: game.homeTeam,\n                        homeTeamLogo: game.homeTeamLogo,\n                        awayTeam: game.awayTeam,\n                        awayTeamLogo: game.awayTeamLogo,\n                        schedule: game.schedule\n                    }, game.id, false, {\n                        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Earl\\\\Desktop\\\\SBAI.com-Frontend\\\\pages\\\\index.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HomePage, \"E9/SJXYWRhNYgu6ONS2WwQXbB7g=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFOzs7Ozs7Ozs7OzBDQVk5Qiw4REFBQ0wsNERBQU1BO2dDQUNIMEMsU0FBUTtnQ0FDUkUsU0FBU3RCO2dDQUNUSyxPQUFPO29DQUNIVSxVQUFTO29DQUNURSxPQUFPO29DQUNQTSxpQkFBaUI7b0NBQ2pCQyxPQUFPO29DQUNQQyxjQUFjO29DQUNkQyxlQUFlO2dDQUNuQjswQ0FDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtULDhEQUFDdEI7Z0JBQ0dDLE9BQU87b0JBQ0hPLFdBQVc7b0JBQ1hLLE9BQU87b0JBRVBrQixXQUFXO29CQUNYWixpQkFBaUI7b0JBQ2pCQyxPQUFPO29CQUNQQyxjQUFjO29CQUNkQyxlQUFlO29CQUNmaEIsVUFBVTtnQkFFZDswQkFFQ2hCLFNBQVN1QyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1gsOERBQUNyRCwrREFBV0E7d0JBRVJFLElBQUltRCxLQUFLbkQsRUFBRTt3QkFDWEMsVUFBVWtELEtBQUtsRCxRQUFRO3dCQUN2QkMsY0FBY2lELEtBQUtqRCxZQUFZO3dCQUMvQkMsVUFBVWdELEtBQUtoRCxRQUFRO3dCQUN2QkMsY0FBYytDLEtBQUsvQyxZQUFZO3dCQUMvQkMsVUFBVThDLEtBQUs5QyxRQUFRO3VCQU5sQjhDLEtBQUtuRCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBWWxDO0dBN0dJVTtLQUFBQTtBQStHTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcnJvd0Ryb3BEb3duSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93RHJvcERvd24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xyXG5pbXBvcnQgR2FtZURpc3BsYXkgZnJvbSAnLi4vY29tcG9uZW50cy9HYW1lRGlzcGxheSdcclxuaW1wb3J0IHsgSU5CQUdhbWV9IGZyb20gJy4uL3R5cGVzL0dhbWUnO1xyXG5jb25zdCBzYW1wbGUxIDogSU5CQUdhbWUgPSB7XHJcbiAgICBpZDogMSxcclxuICAgIGhvbWVUZWFtOiBcIkxvcyBBbmdlbGVzIExha2Vyc1wiLFxyXG4gICAgaG9tZVRlYW1Mb2dvOiBcImxha2Vycy5qcGVnXCIsXHJcbiAgICBhd2F5VGVhbTogXCJHb2xkZW4gU3RhdGUgV2FycmlvcnNcIixcclxuICAgIGF3YXlUZWFtTG9nbzogXCJ3YXJyaW9ycy5qcGVnXCIsXHJcbiAgICBzY2hlZHVsZTogbmV3IERhdGUoXCJGZWJydWFyeSA4IDIwMjRcIilcclxufVxyXG5jb25zdCBzYW1wbGUyIDogSU5CQUdhbWUgPSB7XHJcbiAgICBpZDogMixcclxuICAgIGhvbWVUZWFtOiBcIlRvcm9udG8gUmFwdG9yc1wiLFxyXG4gICAgaG9tZVRlYW1Mb2dvOiBcImxha2Vycy5qcGVnXCIsXHJcbiAgICBhd2F5VGVhbTogXCJCb3N0b24gQ2VsdGljc1wiLFxyXG4gICAgYXdheVRlYW1Mb2dvOiBcIndhcnJpb3JzLmpwZWdcIixcclxuICAgIHNjaGVkdWxlOiBuZXcgRGF0ZShcIkZlYnJ1YXJ5IDggMjAyNFwiKVxyXG59XHJcbmNvbnN0IHNhbXBsZTMgOiBJTkJBR2FtZSA9IHtcclxuICAgIGlkOiAzLFxyXG4gICAgaG9tZVRlYW06IFwiVG9yb250byBSYXB0b3JzXCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIkJvc3RvbiBDZWx0aWNzXCIsXHJcbiAgICBhd2F5VGVhbUxvZ286IFwid2FycmlvcnMuanBlZ1wiLFxyXG4gICAgc2NoZWR1bGU6IG5ldyBEYXRlKFwiRmVicnVhcnkgOCAyMDI0XCIpXHJcbn1cclxuY29uc3Qgc2FtcGxlNCA6IElOQkFHYW1lID0ge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBob21lVGVhbTogXCJUb3JvbnRvIFJhcHRvcnNcIixcclxuICAgIGhvbWVUZWFtTG9nbzogXCJsYWtlcnMuanBlZ1wiLFxyXG4gICAgYXdheVRlYW06IFwiQm9zdG9uIENlbHRpY3NcIixcclxuICAgIGF3YXlUZWFtTG9nbzogXCJ3YXJyaW9ycy5qcGVnXCIsXHJcbiAgICBzY2hlZHVsZTogbmV3IERhdGUoXCJGZWJydWFyeSA4IDIwMjRcIilcclxufVxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtOQkFHYW1lcywgc2V0TkJBR2FtZXNdID0gdXNlU3RhdGU8SU5CQUdhbWVbXT4oW3NhbXBsZTEsIHNhbXBsZTIsIHNhbXBsZTMsIHNhbXBsZTQsIHNhbXBsZTQsIHNhbXBsZTRdKVxyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXkgOiBcImZsZXhcIiwgZmxleERpcmVjdGlvbiA6IFwiY29sdW1uXCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIG92ZXJmbG93OiAnaGlkZGVuJ319ID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXkgOiBcImZsZXhcIiwgZmxleERpcmVjdGlvbiA6IFwiY29sdW1uXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIG1hcmdpblRvcDogJzEwNXB4J319PlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFdlaWdodDogNzAwLCBmb250U2l6ZTonODBweCd9fT5TcG9ydHMgQmV0dGluZyBBSTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6IDUwMCwgZm9udFNpemU6JzE1cHgnLCB3aWR0aDogJzMwdncnLCB0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMwcHgnfX0+U2VsZWN0IGFuIHVwY29taW5nIE5CQSBnYW1lIGFuZCBjbGljayB0aGUgcHJlZGljdCBidXR0b24gdG8gZ2VuZXJhdGUgYSBwcmVkaWNpdG9uIHVzaW5nIG91ciBsYXRlc3QgQUkgTW9kZWwhPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8QXJyb3dEcm9wRG93bkljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6JzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MHZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLCAvLyBTZXQgdGhlIGJhY2tncm91bmQgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2FhYScsIC8vIFNldCB0aGUgdGV4dCBjb2xvciB0byBncmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JywgLy8gUm91bmRlZCBjb3JuZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsIC8vIEF2b2lkIHVwcGVyY2FzZSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6JzMwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgYW4gTkJBIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2ltcGxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZW51TGlzdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogJ2Jhc2ljLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsIC8vIFJvdW5kZWQgY29ybmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDB2dycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnNTB2aCcsIC8vIFNldCBtYXhpbXVtIGhlaWdodCBmb3IgdGhlIG1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJywgLy8gU2V0IHRoZSB3aWR0aCB0byBtYXRjaCB0aGUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge05CQUdhbWVzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Z2FtZS5pZH0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHYW1lRGlzcGxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17Z2FtZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZVRlYW09e2dhbWUuaG9tZVRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVUZWFtTG9nbz17Z2FtZS5ob21lVGVhbUxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXlUZWFtPXtnYW1lLmF3YXlUZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2F5VGVhbUxvZ289e2dhbWUuYXdheVRlYW1Mb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZT17Z2FtZS5zY2hlZHVsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6JzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMHZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwNjhGRkYnLCAvLyBTZXQgdGhlIGJhY2tncm91bmQgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI0VFRUVFRScsIC8vIFNldCB0aGUgdGV4dCBjb2xvciB0byBncmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JywgLy8gUm91bmRlZCBjb3JuZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsIC8vIEF2b2lkIHVwcGVyY2FzZSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJlZGljdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzYwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzMwdncnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLCAvLyBTZXQgdGhlIGJhY2tncm91bmQgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNhYWEnLCAvLyBTZXQgdGhlIHRleHQgY29sb3IgdG8gZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLCAvLyBSb3VuZGVkIGNvcm5lcnNcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsIC8vIEF2b2lkIHVwcGVyY2FzZSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge05CQUdhbWVzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxHYW1lRGlzcGxheSBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtnYW1lLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2dhbWUuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob21lVGVhbT17Z2FtZS5ob21lVGVhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9tZVRlYW1Mb2dvPXtnYW1lLmhvbWVUZWFtTG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdheVRlYW09e2dhbWUuYXdheVRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YXlUZWFtTG9nbz17Z2FtZS5hd2F5VGVhbUxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlPXtnYW1lLnNjaGVkdWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQXJyb3dEcm9wRG93bkljb24iLCJCdXR0b24iLCJNZW51IiwiTWVudUl0ZW0iLCJHYW1lRGlzcGxheSIsInNhbXBsZTEiLCJpZCIsImhvbWVUZWFtIiwiaG9tZVRlYW1Mb2dvIiwiYXdheVRlYW0iLCJhd2F5VGVhbUxvZ28iLCJzY2hlZHVsZSIsIkRhdGUiLCJzYW1wbGUyIiwic2FtcGxlMyIsInNhbXBsZTQiLCJIb21lUGFnZSIsIk5CQUdhbWVzIiwic2V0TkJBR2FtZXMiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwib3BlbiIsIkJvb2xlYW4iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiZW5kSWNvbiIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5SaWdodCIsIm9uQ2xvc2UiLCJNZW51TGlzdFByb3BzIiwiUGFwZXJQcm9wcyIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsIm1hcCIsImdhbWUiLCJtaW5IZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});