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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst sample1 = {\n    homeTeam: \"Lakers\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Warriors\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample2 = {\n    homeTeam: \"Bucks\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Sixers\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample3 = {\n    homeTeam: \"Heat\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Nuggets\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst sample4 = {\n    homeTeam: \"Pacers\",\n    homeTeamLogo: \"lakers.jpeg\",\n    awayTeam: \"Thunder\",\n    awayTeamLogo: \"warriors.jpeg\",\n    schedule: new Date(\"February 8 2024\")\n};\nconst HomePage = ()=>{\n    _s();\n    const [NBAGames, setNBAGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        sample1,\n        sample2,\n        sample3,\n        sample4\n    ]);\n    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    fontWeight: 700,\n                    fontSize: \"100px\"\n                },\n                children: \"Sports Betting AI\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                \"aria-controls\": open ? \"simple-menu\" : undefined,\n                \"aria-haspopup\": \"true\",\n                \"aria-expanded\": open ? \"true\" : undefined,\n                onClick: handleClick,\n                children: \"Open Menu\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"simple-menu\",\n                anchorEl: anchorEl,\n                open: open,\n                onClose: handleClose,\n                MenuListProps: {\n                    \"aria-labelledby\": \"basic-button\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: handleClose,\n                        children: \"Option 1\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: handleClose,\n                        children: \"Option 2\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: handleClose,\n                        children: \"Option 3\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Jiu Studios\\\\SportsBetting AI\\\\pages\\\\index.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HomePage, \"48/ZkheU1uL14gHVIHfDZSyf9Bo=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUVGO0FBQ0o7QUFDUTtBQVM5QyxNQUFNSSxVQUFzQjtJQUN4QkMsVUFBVTtJQUNWQyxjQUFjO0lBQ2RDLFVBQVU7SUFDVkMsY0FBYztJQUNkQyxVQUFVLElBQUlDLEtBQUs7QUFDdkI7QUFDQSxNQUFNQyxVQUFzQjtJQUN4Qk4sVUFBVTtJQUNWQyxjQUFjO0lBQ2RDLFVBQVU7SUFDVkMsY0FBYztJQUNkQyxVQUFVLElBQUlDLEtBQUs7QUFDdkI7QUFDQSxNQUFNRSxVQUFzQjtJQUN4QlAsVUFBVTtJQUNWQyxjQUFjO0lBQ2RDLFVBQVU7SUFDVkMsY0FBYztJQUNkQyxVQUFVLElBQUlDLEtBQUs7QUFDdkI7QUFDQSxNQUFNRyxVQUFzQjtJQUN4QlIsVUFBVTtJQUNWQyxjQUFjO0lBQ2RDLFVBQVU7SUFDVkMsY0FBYztJQUNkQyxVQUFVLElBQUlDLEtBQUs7QUFDdkI7QUFDQSxNQUFNSSxXQUFXOztJQUNiLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHaEIsK0NBQVFBLENBQWM7UUFBQ0k7UUFBU087UUFBU0M7UUFBU0M7S0FBUTtJQUMxRixNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFxQjtJQUM3RCxNQUFNbUIsT0FBT0MsUUFBUUg7SUFDckIsTUFBTUksY0FBYyxDQUFDQztRQUNqQkosWUFBWUksTUFBTUMsYUFBYTtJQUNqQztJQUVBLE1BQU1DLGNBQWM7UUFDbEJOLFlBQVk7SUFDZDtJQUVGLHFCQUNJLDhEQUFDTztRQUFJQyxPQUFPO1lBQUNDLFNBQVU7WUFBUUMsZUFBZ0I7WUFBVUMsWUFBVztZQUFVQyxnQkFBZTtZQUFVQyxRQUFRO1FBQU87OzBCQUNsSCw4REFBQ0M7Z0JBQUdOLE9BQU87b0JBQUNPLFlBQVk7b0JBQUtDLFVBQVM7Z0JBQU87MEJBQUc7Ozs7OzswQkFDaEQsOERBQUNqQyw0REFBTUE7Z0JBQ0hrQyxpQkFBZWhCLE9BQU8sZ0JBQWdCaUI7Z0JBQ3RDQyxpQkFBYztnQkFDZEMsaUJBQWVuQixPQUFPLFNBQVNpQjtnQkFDL0JHLFNBQVNsQjswQkFDWjs7Ozs7OzBCQUdELDhEQUFDbkIsMERBQUlBO2dCQUNEc0MsSUFBRztnQkFDSHZCLFVBQVVBO2dCQUNWRSxNQUFNQTtnQkFDTnNCLFNBQVNqQjtnQkFDVGtCLGVBQWU7b0JBQ2YsbUJBQW1CO2dCQUNuQjs7a0NBRUEsOERBQUN2Qyw4REFBUUE7d0JBQUNvQyxTQUFTZjtrQ0FBYTs7Ozs7O2tDQUNoQyw4REFBQ3JCLDhEQUFRQTt3QkFBQ29DLFNBQVNmO2tDQUFhOzs7Ozs7a0NBQ2hDLDhEQUFDckIsOERBQVFBO3dCQUFDb0MsU0FBU2Y7a0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QztHQXRDSVY7S0FBQUE7QUF3Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcclxudHlwZSBJTkJBR2FtZXMgPSB7XHJcbiAgICBob21lVGVhbSA6IHN0cmluZyxcclxuICAgIGhvbWVUZWFtTG9nbyA6IHN0cmluZyxcclxuICAgIGF3YXlUZWFtIDogc3RyaW5nLFxyXG4gICAgYXdheVRlYW1Mb2dvIDogc3RyaW5nLFxyXG4gICAgc2NoZWR1bGU6IERhdGUsXHJcbiAgICBcclxufVxyXG5jb25zdCBzYW1wbGUxIDogSU5CQUdhbWVzID0ge1xyXG4gICAgaG9tZVRlYW06IFwiTGFrZXJzXCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIldhcnJpb3JzXCIsXHJcbiAgICBhd2F5VGVhbUxvZ286IFwid2FycmlvcnMuanBlZ1wiLFxyXG4gICAgc2NoZWR1bGU6IG5ldyBEYXRlKFwiRmVicnVhcnkgOCAyMDI0XCIpXHJcbn1cclxuY29uc3Qgc2FtcGxlMiA6IElOQkFHYW1lcyA9IHtcclxuICAgIGhvbWVUZWFtOiBcIkJ1Y2tzXCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIlNpeGVyc1wiLFxyXG4gICAgYXdheVRlYW1Mb2dvOiBcIndhcnJpb3JzLmpwZWdcIixcclxuICAgIHNjaGVkdWxlOiBuZXcgRGF0ZShcIkZlYnJ1YXJ5IDggMjAyNFwiKVxyXG59XHJcbmNvbnN0IHNhbXBsZTMgOiBJTkJBR2FtZXMgPSB7XHJcbiAgICBob21lVGVhbTogXCJIZWF0XCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIk51Z2dldHNcIixcclxuICAgIGF3YXlUZWFtTG9nbzogXCJ3YXJyaW9ycy5qcGVnXCIsXHJcbiAgICBzY2hlZHVsZTogbmV3IERhdGUoXCJGZWJydWFyeSA4IDIwMjRcIilcclxufVxyXG5jb25zdCBzYW1wbGU0IDogSU5CQUdhbWVzID0ge1xyXG4gICAgaG9tZVRlYW06IFwiUGFjZXJzXCIsXHJcbiAgICBob21lVGVhbUxvZ286IFwibGFrZXJzLmpwZWdcIixcclxuICAgIGF3YXlUZWFtOiBcIlRodW5kZXJcIixcclxuICAgIGF3YXlUZWFtTG9nbzogXCJ3YXJyaW9ycy5qcGVnXCIsXHJcbiAgICBzY2hlZHVsZTogbmV3IERhdGUoXCJGZWJydWFyeSA4IDIwMjRcIilcclxufVxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtOQkFHYW1lcywgc2V0TkJBR2FtZXNdID0gdXNlU3RhdGU8SU5CQUdhbWVzW10+KFtzYW1wbGUxLCBzYW1wbGUyLCBzYW1wbGUzLCBzYW1wbGU0XSlcclxuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5IDogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb24gOiBcImNvbHVtblwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGhlaWdodDogXCIxMDB2aFwifX0gPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250V2VpZ2h0OiA3MDAsIGZvbnRTaXplOicxMDBweCd9fT5TcG9ydHMgQmV0dGluZyBBSTwvaDE+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyAnc2ltcGxlLW1lbnUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17b3BlbiA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBPcGVuIE1lbnVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICBpZD1cInNpbXBsZS1tZW51XCJcclxuICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIE1lbnVMaXN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiAnYmFzaWMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+T3B0aW9uIDE8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5PcHRpb24gMjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk9wdGlvbiAzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH07XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIk1lbnUiLCJNZW51SXRlbSIsInNhbXBsZTEiLCJob21lVGVhbSIsImhvbWVUZWFtTG9nbyIsImF3YXlUZWFtIiwiYXdheVRlYW1Mb2dvIiwic2NoZWR1bGUiLCJEYXRlIiwic2FtcGxlMiIsInNhbXBsZTMiLCJzYW1wbGU0IiwiSG9tZVBhZ2UiLCJOQkFHYW1lcyIsInNldE5CQUdhbWVzIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIm9wZW4iLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJoMSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImFyaWEtY29udHJvbHMiLCJ1bmRlZmluZWQiLCJhcmlhLWhhc3BvcHVwIiwiYXJpYS1leHBhbmRlZCIsIm9uQ2xpY2siLCJpZCIsIm9uQ2xvc2UiLCJNZW51TGlzdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});