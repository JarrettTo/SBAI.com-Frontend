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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowDropDown */ \"./node_modules/@mui/icons-material/ArrowDropDown.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\n/* harmony import */ var _components_GameDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameDisplay */ \"./components/GameDisplay.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst sample1 = {\n    id: 1,\n    homeTeam: \"Los Angeles Lakers\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Golden State Warriors\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample2 = {\n    id: 2,\n    homeTeam: \"Toronto Raptors\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Boston Celtics\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample3 = {\n    id: 3,\n    homeTeam: \"Toronto Raptors\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Boston Celtics\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample4 = {\n    id: 4,\n    homeTeam: \"Toronto Raptors\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Boston Celtics\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst HomePage = ()=>{\n    _s();\n    const [NBAGames, setNBAGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        sample1,\n        sample2,\n        sample3,\n        sample4,\n        sample4,\n        sample4\n    ]);\n    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            height: \"100vh\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    marginTop: \"105px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontWeight: 700,\n                            fontSize: \"80px\"\n                        },\n                        children: \"Sports Betting AI\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontWeight: 500,\n                            fontSize: \"15px\",\n                            width: \"30vw\",\n                            textAlign: \"center\",\n                            marginBottom: \"30px\"\n                        },\n                        children: \"Select an upcoming NBA game and click the predict button to generate a prediciton using our latest AI Model!\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                variant: \"contained\",\n                                endIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 34\n                                }, void 0),\n                                onClick: handleClick,\n                                style: {\n                                    fontSize: \"20px\",\n                                    width: \"40vw\",\n                                    backgroundColor: \"#fff\",\n                                    color: \"#aaa\",\n                                    borderRadius: \"10px\",\n                                    textTransform: \"none\",\n                                    marginRight: \"30px\"\n                                },\n                                children: \"Select an NBA Game\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"simple-menu\",\n                                anchorEl: anchorEl,\n                                open: open,\n                                onClose: handleClose,\n                                MenuListProps: {\n                                    \"aria-labelledby\": \"basic-button\"\n                                },\n                                style: {\n                                    borderRadius: \"20px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        onClick: handleClose,\n                                        children: \"Option 1\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        onClick: handleClose,\n                                        children: \"Option 2\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        onClick: handleClose,\n                                        children: \"Option 3\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                variant: \"contained\",\n                                onClick: handleClick,\n                                style: {\n                                    fontSize: \"20px\",\n                                    width: \"10vw\",\n                                    backgroundColor: \"#068FFF\",\n                                    color: \"#EEEEEE\",\n                                    borderRadius: \"10px\",\n                                    textTransform: \"none\"\n                                },\n                                children: \"Predict\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"60px\",\n                    width: \"80%\",\n                    minHeight: \"30vw\",\n                    backgroundColor: \"#fff\",\n                    color: \"#aaa\",\n                    borderRadius: \"10px\",\n                    textTransform: \"none\"\n                },\n                children: NBAGames.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: game.id,\n                        homeTeam: game.homeTeam,\n                        homeTeamLogo: game.homeTeamLogo,\n                        awayTeam: game.awayTeam,\n                        awayTeamLogo: game.awayTeamLogo,\n                        schedule: game.schedule\n                    }, game.id, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HomePage, \"E9/SJXYWRhNYgu6ONS2WwQXbB7g=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdEI7Z0JBQ0dDLE9BQU87b0JBQ0hPLFdBQVc7b0JBQ1hLLE9BQU87b0JBRVBhLFdBQVc7b0JBQ1hQLGlCQUFpQjtvQkFDakJDLE9BQU87b0JBQ1BDLGNBQWM7b0JBQ2RDLGVBQWU7Z0JBRW5COzBCQUVDaEMsU0FBU3FDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDWCw4REFBQ25ELCtEQUFXQTt3QkFFUkUsSUFBSWlELEtBQUtqRCxFQUFFO3dCQUNYQyxVQUFVZ0QsS0FBS2hELFFBQVE7d0JBQ3ZCQyxjQUFjK0MsS0FBSy9DLFlBQVk7d0JBQy9CQyxVQUFVOEMsS0FBSzlDLFFBQVE7d0JBQ3ZCQyxjQUFjNkMsS0FBSzdDLFlBQVk7d0JBQy9CQyxVQUFVNEMsS0FBSzVDLFFBQVE7dUJBTmxCNEMsS0FBS2pELEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbEM7R0E1RklVO0tBQUFBO0FBOEZOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFycm93RHJvcERvd25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dEcm9wRG93bic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSc7XHJcbmltcG9ydCBHYW1lRGlzcGxheSBmcm9tICcuLi9jb21wb25lbnRzL0dhbWVEaXNwbGF5J1xyXG5pbXBvcnQgeyBJTkJBR2FtZX0gZnJvbSAnLi4vdHlwZXMvR2FtZSc7XHJcbmNvbnN0IHNhbXBsZTEgOiBJTkJBR2FtZSA9IHtcclxuICAgIGlkOiAxLFxyXG4gICAgaG9tZVRlYW06IFwiTG9zIEFuZ2VsZXMgTGFrZXJzXCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIkdvbGRlbiBTdGF0ZSBXYXJyaW9yc1wiLFxyXG4gICAgYXdheVRlYW1Mb2dvOiBcIndhcnJpb3JzLmpwZWdcIixcclxuICAgIHNjaGVkdWxlOiBuZXcgRGF0ZShcIkZlYnJ1YXJ5IDggMjAyNFwiKVxyXG59XHJcbmNvbnN0IHNhbXBsZTIgOiBJTkJBR2FtZSA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgaG9tZVRlYW06IFwiVG9yb250byBSYXB0b3JzXCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIkJvc3RvbiBDZWx0aWNzXCIsXHJcbiAgICBhd2F5VGVhbUxvZ286IFwid2FycmlvcnMuanBlZ1wiLFxyXG4gICAgc2NoZWR1bGU6IG5ldyBEYXRlKFwiRmVicnVhcnkgOCAyMDI0XCIpXHJcbn1cclxuY29uc3Qgc2FtcGxlMyA6IElOQkFHYW1lID0ge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBob21lVGVhbTogXCJUb3JvbnRvIFJhcHRvcnNcIixcclxuICAgIGhvbWVUZWFtTG9nbzogXCJsYWtlcnMuanBlZ1wiLFxyXG4gICAgYXdheVRlYW06IFwiQm9zdG9uIENlbHRpY3NcIixcclxuICAgIGF3YXlUZWFtTG9nbzogXCJ3YXJyaW9ycy5qcGVnXCIsXHJcbiAgICBzY2hlZHVsZTogbmV3IERhdGUoXCJGZWJydWFyeSA4IDIwMjRcIilcclxufVxyXG5jb25zdCBzYW1wbGU0IDogSU5CQUdhbWUgPSB7XHJcbiAgICBpZDogNCxcclxuICAgIGhvbWVUZWFtOiBcIlRvcm9udG8gUmFwdG9yc1wiLFxyXG4gICAgaG9tZVRlYW1Mb2dvOiBcImxha2Vycy5qcGVnXCIsXHJcbiAgICBhd2F5VGVhbTogXCJCb3N0b24gQ2VsdGljc1wiLFxyXG4gICAgYXdheVRlYW1Mb2dvOiBcIndhcnJpb3JzLmpwZWdcIixcclxuICAgIHNjaGVkdWxlOiBuZXcgRGF0ZShcIkZlYnJ1YXJ5IDggMjAyNFwiKVxyXG59XHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW05CQUdhbWVzLCBzZXROQkFHYW1lc10gPSB1c2VTdGF0ZTxJTkJBR2FtZVtdPihbc2FtcGxlMSwgc2FtcGxlMiwgc2FtcGxlMywgc2FtcGxlNCwgc2FtcGxlNCwgc2FtcGxlNF0pXHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheSA6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uIDogXCJjb2x1bW5cIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgb3ZlcmZsb3c6ICdoaWRkZW4nfX0gPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheSA6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uIDogXCJjb2x1bW5cIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgbWFyZ2luVG9wOiAnMTA1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250V2VpZ2h0OiA3MDAsIGZvbnRTaXplOic4MHB4J319PlNwb3J0cyBCZXR0aW5nIEFJPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDogNTAwLCBmb250U2l6ZTonMTVweCcsIHdpZHRoOiAnMzB2dycsIHRleHRBbGlnbjonY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMzBweCd9fT5TZWxlY3QgYW4gdXBjb21pbmcgTkJBIGdhbWUgYW5kIGNsaWNrIHRoZSBwcmVkaWN0IGJ1dHRvbiB0byBnZW5lcmF0ZSBhIHByZWRpY2l0b24gdXNpbmcgb3VyIGxhdGVzdCBBSSBNb2RlbCE8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0Ryb3BEb3duSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwdncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYWFhJywgLy8gU2V0IHRoZSB0ZXh0IGNvbG9yIHRvIGdyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLCAvLyBSb3VuZGVkIGNvcm5lcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJywgLy8gQXZvaWQgdXBwZXJjYXNlIHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonMzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBhbiBOQkEgR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVMaXN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6ICdiYXNpYy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICcyMHB4JyB9fSAvLyBBcHBseSByb3VuZGVkIGNvcm5lcnMgdG8gdGhlIE1lbnUgYXMgd2VsbFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5PcHRpb24gMTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+T3B0aW9uIDI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk9wdGlvbiAzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwdncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA2OEZGRicsIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjRUVFRUVFJywgLy8gU2V0IHRoZSB0ZXh0IGNvbG9yIHRvIGdyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLCAvLyBSb3VuZGVkIGNvcm5lcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJywgLy8gQXZvaWQgdXBwZXJjYXNlIHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmVkaWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnNjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMzB2dycsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2FhYScsIC8vIFNldCB0aGUgdGV4dCBjb2xvciB0byBncmF5XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsIC8vIFJvdW5kZWQgY29ybmVyc1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJywgLy8gQXZvaWQgdXBwZXJjYXNlIHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge05CQUdhbWVzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxHYW1lRGlzcGxheSBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtnYW1lLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2dhbWUuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob21lVGVhbT17Z2FtZS5ob21lVGVhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9tZVRlYW1Mb2dvPXtnYW1lLmhvbWVUZWFtTG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdheVRlYW09e2dhbWUuYXdheVRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YXlUZWFtTG9nbz17Z2FtZS5hd2F5VGVhbUxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlPXtnYW1lLnNjaGVkdWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQXJyb3dEcm9wRG93bkljb24iLCJCdXR0b24iLCJNZW51IiwiTWVudUl0ZW0iLCJHYW1lRGlzcGxheSIsInNhbXBsZTEiLCJpZCIsImhvbWVUZWFtIiwiaG9tZVRlYW1Mb2dvIiwiYXdheVRlYW0iLCJhd2F5VGVhbUxvZ28iLCJzY2hlZHVsZSIsIkRhdGUiLCJzYW1wbGUyIiwic2FtcGxlMyIsInNhbXBsZTQiLCJIb21lUGFnZSIsIk5CQUdhbWVzIiwic2V0TkJBR2FtZXMiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwib3BlbiIsIkJvb2xlYW4iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiZW5kSWNvbiIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5SaWdodCIsIm9uQ2xvc2UiLCJNZW51TGlzdFByb3BzIiwibWluSGVpZ2h0IiwibWFwIiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});