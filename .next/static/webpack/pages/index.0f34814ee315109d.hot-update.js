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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowDropDown */ \"./node_modules/@mui/icons-material/ArrowDropDown.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\n/* harmony import */ var _components_GameDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameDisplay */ \"./components/GameDisplay.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst sample1 = {\n    id: 1,\n    homeTeam: \"Los Angeles Lakers\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Golden State Warriors\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample2 = {\n    id: 2,\n    homeTeam: \"Toronto Raptors\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Boston Celtics\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample3 = {\n    id: 3,\n    homeTeam: \"Heat\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Nuggets\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample4 = {\n    id: 4,\n    homeTeam: \"Pacers\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Thunder\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst HomePage = ()=>{\n    _s();\n    const [NBAGames, setNBAGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        sample1,\n        sample2\n    ]);\n    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            height: \"100vh\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    marginTop: \"105px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontWeight: 700,\n                            fontSize: \"80px\"\n                        },\n                        children: \"Sports Betting AI\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                variant: \"contained\",\n                                endIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 34\n                                }, void 0),\n                                onClick: handleClick,\n                                style: {\n                                    fontSize: \"20px\",\n                                    width: \"40vw\",\n                                    backgroundColor: \"#fff\",\n                                    color: \"#aaa\",\n                                    borderRadius: \"10px\",\n                                    textTransform: \"none\",\n                                    marginRight: \"30px\"\n                                },\n                                children: \"Select an NBA Game\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"simple-menu\",\n                                anchorEl: anchorEl,\n                                open: open,\n                                onClose: handleClose,\n                                MenuListProps: {\n                                    \"aria-labelledby\": \"basic-button\"\n                                },\n                                style: {\n                                    borderRadius: \"20px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        onClick: handleClose,\n                                        children: \"Option 1\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        onClick: handleClose,\n                                        children: \"Option 2\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        onClick: handleClose,\n                                        children: \"Option 3\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                variant: \"contained\",\n                                onClick: handleClick,\n                                style: {\n                                    fontSize: \"20px\",\n                                    width: \"10vw\",\n                                    backgroundColor: \"#068FFF\",\n                                    color: \"#EEEEEE\",\n                                    borderRadius: \"10px\",\n                                    textTransform: \"none\"\n                                },\n                                children: \"Predict\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"60px\",\n                    width: \"80%\",\n                    height: \"40vh\",\n                    backgroundColor: \"#fff\",\n                    color: \"#aaa\",\n                    borderRadius: \"10px\",\n                    textTransform: \"none\"\n                },\n                children: NBAGames.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: game.id,\n                        homeTeam: game.homeTeam,\n                        homeTeamLogo: game.homeTeamLogo,\n                        awayTeam: game.awayTeam,\n                        awayTeamLogo: game.awayTeamLogo,\n                        schedule: game.schedule\n                    }, game.id, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HomePage, \"mPl1Pk3+jDhmgcNn9DjQVDq9k8c=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDLENBQUNDLHFCQUNYLDhEQUFDL0MsK0RBQVdBO3dCQUVSRSxJQUFJNkMsS0FBSzdDLEVBQUU7d0JBQ1hDLFVBQVU0QyxLQUFLNUMsUUFBUTt3QkFDdkJDLGNBQWMyQyxLQUFLM0MsWUFBWTt3QkFDL0JDLFVBQVUwQyxLQUFLMUMsUUFBUTt3QkFDdkJDLGNBQWN5QyxLQUFLekMsWUFBWTt3QkFDL0JDLFVBQVV3QyxLQUFLeEMsUUFBUTt1QkFObEJ3QyxLQUFLN0MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVlsQztHQTNGSVU7S0FBQUE7QUE2Rk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXJyb3dEcm9wRG93bkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0Ryb3BEb3duJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcclxuaW1wb3J0IEdhbWVEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvR2FtZURpc3BsYXknXHJcbmltcG9ydCB7IElOQkFHYW1lfSBmcm9tICcuLi90eXBlcy9HYW1lJztcclxuY29uc3Qgc2FtcGxlMSA6IElOQkFHYW1lID0ge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBob21lVGVhbTogXCJMb3MgQW5nZWxlcyBMYWtlcnNcIixcclxuICAgIGhvbWVUZWFtTG9nbzogXCJsYWtlcnMuanBlZ1wiLFxyXG4gICAgYXdheVRlYW06IFwiR29sZGVuIFN0YXRlIFdhcnJpb3JzXCIsXHJcbiAgICBhd2F5VGVhbUxvZ286IFwid2FycmlvcnMuanBlZ1wiLFxyXG4gICAgc2NoZWR1bGU6IG5ldyBEYXRlKFwiRmVicnVhcnkgOCAyMDI0XCIpXHJcbn1cclxuY29uc3Qgc2FtcGxlMiA6IElOQkFHYW1lID0ge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBob21lVGVhbTogXCJUb3JvbnRvIFJhcHRvcnNcIixcclxuICAgIGhvbWVUZWFtTG9nbzogXCJsYWtlcnMuanBlZ1wiLFxyXG4gICAgYXdheVRlYW06IFwiQm9zdG9uIENlbHRpY3NcIixcclxuICAgIGF3YXlUZWFtTG9nbzogXCJ3YXJyaW9ycy5qcGVnXCIsXHJcbiAgICBzY2hlZHVsZTogbmV3IERhdGUoXCJGZWJydWFyeSA4IDIwMjRcIilcclxufVxyXG5jb25zdCBzYW1wbGUzIDogSU5CQUdhbWUgPSB7XHJcbiAgICBpZDogMyxcclxuICAgIGhvbWVUZWFtOiBcIkhlYXRcIixcclxuICAgIGhvbWVUZWFtTG9nbzogXCJsYWtlcnMuanBlZ1wiLFxyXG4gICAgYXdheVRlYW06IFwiTnVnZ2V0c1wiLFxyXG4gICAgYXdheVRlYW1Mb2dvOiBcIndhcnJpb3JzLmpwZWdcIixcclxuICAgIHNjaGVkdWxlOiBuZXcgRGF0ZShcIkZlYnJ1YXJ5IDggMjAyNFwiKVxyXG59XHJcbmNvbnN0IHNhbXBsZTQgOiBJTkJBR2FtZSA9IHtcclxuICAgIGlkOiA0LFxyXG4gICAgaG9tZVRlYW06IFwiUGFjZXJzXCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIlRodW5kZXJcIixcclxuICAgIGF3YXlUZWFtTG9nbzogXCJ3YXJyaW9ycy5qcGVnXCIsXHJcbiAgICBzY2hlZHVsZTogbmV3IERhdGUoXCJGZWJydWFyeSA4IDIwMjRcIilcclxufVxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtOQkFHYW1lcywgc2V0TkJBR2FtZXNdID0gdXNlU3RhdGU8SU5CQUdhbWVbXT4oW3NhbXBsZTEsIHNhbXBsZTJdKVxyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXkgOiBcImZsZXhcIiwgZmxleERpcmVjdGlvbiA6IFwiY29sdW1uXCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIG92ZXJmbG93OiAnaGlkZGVuJ319ID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXkgOiBcImZsZXhcIiwgZmxleERpcmVjdGlvbiA6IFwiY29sdW1uXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIG1hcmdpblRvcDogJzEwNXB4J319PlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFdlaWdodDogNzAwLCBmb250U2l6ZTonODBweCd9fT5TcG9ydHMgQmV0dGluZyBBSTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0Ryb3BEb3duSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwdncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYWFhJywgLy8gU2V0IHRoZSB0ZXh0IGNvbG9yIHRvIGdyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLCAvLyBSb3VuZGVkIGNvcm5lcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJywgLy8gQXZvaWQgdXBwZXJjYXNlIHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonMzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBhbiBOQkEgR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVMaXN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6ICdiYXNpYy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICcyMHB4JyB9fSAvLyBBcHBseSByb3VuZGVkIGNvcm5lcnMgdG8gdGhlIE1lbnUgYXMgd2VsbFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5PcHRpb24gMTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+T3B0aW9uIDI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk9wdGlvbiAzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwdncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA2OEZGRicsIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjRUVFRUVFJywgLy8gU2V0IHRoZSB0ZXh0IGNvbG9yIHRvIGdyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLCAvLyBSb3VuZGVkIGNvcm5lcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJywgLy8gQXZvaWQgdXBwZXJjYXNlIHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmVkaWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnNjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDB2aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2FhYScsIC8vIFNldCB0aGUgdGV4dCBjb2xvciB0byBncmF5XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsIC8vIFJvdW5kZWQgY29ybmVyc1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJywgLy8gQXZvaWQgdXBwZXJjYXNlIHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge05CQUdhbWVzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxHYW1lRGlzcGxheSBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtnYW1lLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2dhbWUuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob21lVGVhbT17Z2FtZS5ob21lVGVhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9tZVRlYW1Mb2dvPXtnYW1lLmhvbWVUZWFtTG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdheVRlYW09e2dhbWUuYXdheVRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YXlUZWFtTG9nbz17Z2FtZS5hd2F5VGVhbUxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlPXtnYW1lLnNjaGVkdWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQXJyb3dEcm9wRG93bkljb24iLCJCdXR0b24iLCJNZW51IiwiTWVudUl0ZW0iLCJHYW1lRGlzcGxheSIsInNhbXBsZTEiLCJpZCIsImhvbWVUZWFtIiwiaG9tZVRlYW1Mb2dvIiwiYXdheVRlYW0iLCJhd2F5VGVhbUxvZ28iLCJzY2hlZHVsZSIsIkRhdGUiLCJzYW1wbGUyIiwic2FtcGxlMyIsInNhbXBsZTQiLCJIb21lUGFnZSIsIk5CQUdhbWVzIiwic2V0TkJBR2FtZXMiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwib3BlbiIsIkJvb2xlYW4iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ2YXJpYW50IiwiZW5kSWNvbiIsIm9uQ2xpY2siLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwidGV4dFRyYW5zZm9ybSIsIm1hcmdpblJpZ2h0Iiwib25DbG9zZSIsIk1lbnVMaXN0UHJvcHMiLCJtYXAiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});