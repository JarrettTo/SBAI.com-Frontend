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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/ArrowDropDown */ \"./node_modules/@mui/icons-material/ArrowDropDown.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst sample1 = {\n    homeTeam: \"Lakers\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Warriors\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample2 = {\n    homeTeam: \"Bucks\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Sixers\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample3 = {\n    homeTeam: \"Heat\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Nuggets\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample4 = {\n    homeTeam: \"Pacers\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Thunder\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst HomePage = ()=>{\n    _s();\n    const [NBAGames, setNBAGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        sample1,\n        sample2,\n        sample3,\n        sample4\n    ]);\n    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            height: \"100vh\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        fontWeight: 700,\n                        fontSize: \"80px\"\n                    },\n                    children: \"Sports Betting AI\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            variant: \"contained\",\n                            endIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 34\n                            }, void 0),\n                            onClick: handleClick,\n                            style: {\n                                fontSize: \"20px\",\n                                width: \"40vw\",\n                                backgroundColor: \"#fff\",\n                                color: \"#aaa\",\n                                borderRadius: \"10px\",\n                                textTransform: \"none\",\n                                marginRight: \"30px\"\n                            },\n                            children: \"Select an NBA Game\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"simple-menu\",\n                            anchorEl: anchorEl,\n                            open: open,\n                            onClose: handleClose,\n                            MenuListProps: {\n                                \"aria-labelledby\": \"basic-button\"\n                            },\n                            style: {\n                                borderRadius: \"20px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    onClick: handleClose,\n                                    children: \"Option 1\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    onClick: handleClose,\n                                    children: \"Option 2\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    onClick: handleClose,\n                                    children: \"Option 3\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            variant: \"contained\",\n                            onClick: handleClick,\n                            style: {\n                                fontSize: \"20px\",\n                                width: \"10vw\",\n                                backgroundColor: \"#068FFF\",\n                                color: \"#EEEEEE\",\n                                borderRadius: \"10px\",\n                                textTransform: \"none\"\n                            },\n                            children: \"Predict\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HomePage, \"48/ZkheU1uL14gHVIHfDZSyf9Bo=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDc0I7QUFDeEI7QUFDSjtBQUNRO0FBUzlDLE1BQU1LLFVBQXNCO0lBQ3hCQyxVQUFVO0lBQ1ZDLGNBQWM7SUFDZEMsVUFBVTtJQUNWQyxjQUFjO0lBQ2RDLFVBQVUsSUFBSUMsS0FBSztBQUN2QjtBQUNBLE1BQU1DLFVBQXNCO0lBQ3hCTixVQUFVO0lBQ1ZDLGNBQWM7SUFDZEMsVUFBVTtJQUNWQyxjQUFjO0lBQ2RDLFVBQVUsSUFBSUMsS0FBSztBQUN2QjtBQUNBLE1BQU1FLFVBQXNCO0lBQ3hCUCxVQUFVO0lBQ1ZDLGNBQWM7SUFDZEMsVUFBVTtJQUNWQyxjQUFjO0lBQ2RDLFVBQVUsSUFBSUMsS0FBSztBQUN2QjtBQUNBLE1BQU1HLFVBQXNCO0lBQ3hCUixVQUFVO0lBQ1ZDLGNBQWM7SUFDZEMsVUFBVTtJQUNWQyxjQUFjO0lBQ2RDLFVBQVUsSUFBSUMsS0FBSztBQUN2QjtBQUNBLE1BQU1JLFdBQVc7O0lBQ2IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBYztRQUFDSztRQUFTTztRQUFTQztRQUFTQztLQUFRO0lBQzFGLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHbkIsK0NBQVFBLENBQXFCO0lBQzdELE1BQU1vQixPQUFPQyxRQUFRSDtJQUNyQixNQUFNSSxjQUFjLENBQUNDO1FBQ2pCSixZQUFZSSxNQUFNQyxhQUFhO0lBQ2pDO0lBRUEsTUFBTUMsY0FBYztRQUNsQk4sWUFBWTtJQUNkO0lBRUYscUJBQ0ksOERBQUNPO1FBQUlDLE9BQU87WUFBQ0MsU0FBVTtZQUFRQyxlQUFnQjtZQUFVQyxZQUFXO1lBQVVDLGdCQUFlO1lBQVVDLFFBQVE7UUFBTztrQkFDbEgsNEVBQUNOOzs4QkFDRyw4REFBQ087b0JBQUdOLE9BQU87d0JBQUNPLFlBQVk7d0JBQUtDLFVBQVM7b0JBQU07OEJBQUc7Ozs7Ozs4QkFDL0MsOERBQUNUOztzQ0FDRyw4REFBQ3hCLDREQUFNQTs0QkFDSGtDLFNBQVE7NEJBQ1JDLHVCQUFTLDhEQUFDcEMseUVBQWlCQTs7Ozs7NEJBQzNCcUMsU0FBU2hCOzRCQUNUSyxPQUFPO2dDQUNIUSxVQUFTO2dDQUNUSSxPQUFPO2dDQUNQQyxpQkFBaUI7Z0NBQ2pCQyxPQUFPO2dDQUNQQyxjQUFjO2dDQUNkQyxlQUFlO2dDQUNmQyxhQUFZOzRCQUNoQjtzQ0FDSDs7Ozs7O3NDQUlELDhEQUFDekMsMERBQUlBOzRCQUNEMEMsSUFBRzs0QkFDSDNCLFVBQVVBOzRCQUNWRSxNQUFNQTs0QkFDTjBCLFNBQVNyQjs0QkFDVHNCLGVBQWU7Z0NBQ2YsbUJBQW1COzRCQUNuQjs0QkFDQXBCLE9BQU87Z0NBQUVlLGNBQWM7NEJBQU87OzhDQUU5Qiw4REFBQ3RDLDhEQUFRQTtvQ0FBQ2tDLFNBQVNiOzhDQUFhOzs7Ozs7OENBQ2hDLDhEQUFDckIsOERBQVFBO29DQUFDa0MsU0FBU2I7OENBQWE7Ozs7Ozs4Q0FDaEMsOERBQUNyQiw4REFBUUE7b0NBQUNrQyxTQUFTYjs4Q0FBYTs7Ozs7Ozs7Ozs7O3NDQUVwQyw4REFBQ3ZCLDREQUFNQTs0QkFDSGtDLFNBQVE7NEJBQ1JFLFNBQVNoQjs0QkFDVEssT0FBTztnQ0FDSFEsVUFBUztnQ0FDVEksT0FBTztnQ0FDUEMsaUJBQWlCO2dDQUNqQkMsT0FBTztnQ0FDUEMsY0FBYztnQ0FDZEMsZUFBZTs0QkFDbkI7c0NBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25CO0dBbEVJNUI7S0FBQUE7QUFvRU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXJyb3dEcm9wRG93bkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0Ryb3BEb3duJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcclxudHlwZSBJTkJBR2FtZXMgPSB7XHJcbiAgICBob21lVGVhbSA6IHN0cmluZyxcclxuICAgIGhvbWVUZWFtTG9nbyA6IHN0cmluZyxcclxuICAgIGF3YXlUZWFtIDogc3RyaW5nLFxyXG4gICAgYXdheVRlYW1Mb2dvIDogc3RyaW5nLFxyXG4gICAgc2NoZWR1bGU6IERhdGUsXHJcbiAgICBcclxufVxyXG5jb25zdCBzYW1wbGUxIDogSU5CQUdhbWVzID0ge1xyXG4gICAgaG9tZVRlYW06IFwiTGFrZXJzXCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIldhcnJpb3JzXCIsXHJcbiAgICBhd2F5VGVhbUxvZ286IFwid2FycmlvcnMuanBlZ1wiLFxyXG4gICAgc2NoZWR1bGU6IG5ldyBEYXRlKFwiRmVicnVhcnkgOCAyMDI0XCIpXHJcbn1cclxuY29uc3Qgc2FtcGxlMiA6IElOQkFHYW1lcyA9IHtcclxuICAgIGhvbWVUZWFtOiBcIkJ1Y2tzXCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIlNpeGVyc1wiLFxyXG4gICAgYXdheVRlYW1Mb2dvOiBcIndhcnJpb3JzLmpwZWdcIixcclxuICAgIHNjaGVkdWxlOiBuZXcgRGF0ZShcIkZlYnJ1YXJ5IDggMjAyNFwiKVxyXG59XHJcbmNvbnN0IHNhbXBsZTMgOiBJTkJBR2FtZXMgPSB7XHJcbiAgICBob21lVGVhbTogXCJIZWF0XCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIk51Z2dldHNcIixcclxuICAgIGF3YXlUZWFtTG9nbzogXCJ3YXJyaW9ycy5qcGVnXCIsXHJcbiAgICBzY2hlZHVsZTogbmV3IERhdGUoXCJGZWJydWFyeSA4IDIwMjRcIilcclxufVxyXG5jb25zdCBzYW1wbGU0IDogSU5CQUdhbWVzID0ge1xyXG4gICAgaG9tZVRlYW06IFwiUGFjZXJzXCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIlRodW5kZXJcIixcclxuICAgIGF3YXlUZWFtTG9nbzogXCJ3YXJyaW9ycy5qcGVnXCIsXHJcbiAgICBzY2hlZHVsZTogbmV3IERhdGUoXCJGZWJydWFyeSA4IDIwMjRcIilcclxufVxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtOQkFHYW1lcywgc2V0TkJBR2FtZXNdID0gdXNlU3RhdGU8SU5CQUdhbWVzW10+KFtzYW1wbGUxLCBzYW1wbGUyLCBzYW1wbGUzLCBzYW1wbGU0XSlcclxuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5IDogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb24gOiBcImNvbHVtblwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGhlaWdodDogXCIxMDB2aFwifX0gPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFdlaWdodDogNzAwLCBmb250U2l6ZTonODBweCd9fT5TcG9ydHMgQmV0dGluZyBBSTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0Ryb3BEb3duSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwdncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYWFhJywgLy8gU2V0IHRoZSB0ZXh0IGNvbG9yIHRvIGdyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLCAvLyBSb3VuZGVkIGNvcm5lcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJywgLy8gQXZvaWQgdXBwZXJjYXNlIHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonMzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBhbiBOQkEgR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVMaXN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6ICdiYXNpYy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICcyMHB4JyB9fSAvLyBBcHBseSByb3VuZGVkIGNvcm5lcnMgdG8gdGhlIE1lbnUgYXMgd2VsbFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5PcHRpb24gMTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+T3B0aW9uIDI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk9wdGlvbiAzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwdncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA2OEZGRicsIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjRUVFRUVFJywgLy8gU2V0IHRoZSB0ZXh0IGNvbG9yIHRvIGdyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLCAvLyBSb3VuZGVkIGNvcm5lcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJywgLy8gQXZvaWQgdXBwZXJjYXNlIHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmVkaWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQXJyb3dEcm9wRG93bkljb24iLCJCdXR0b24iLCJNZW51IiwiTWVudUl0ZW0iLCJzYW1wbGUxIiwiaG9tZVRlYW0iLCJob21lVGVhbUxvZ28iLCJhd2F5VGVhbSIsImF3YXlUZWFtTG9nbyIsInNjaGVkdWxlIiwiRGF0ZSIsInNhbXBsZTIiLCJzYW1wbGUzIiwic2FtcGxlNCIsIkhvbWVQYWdlIiwiTkJBR2FtZXMiLCJzZXROQkFHYW1lcyIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJvcGVuIiwiQm9vbGVhbiIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ2YXJpYW50IiwiZW5kSWNvbiIsIm9uQ2xpY2siLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwidGV4dFRyYW5zZm9ybSIsIm1hcmdpblJpZ2h0IiwiaWQiLCJvbkNsb3NlIiwiTWVudUxpc3RQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});