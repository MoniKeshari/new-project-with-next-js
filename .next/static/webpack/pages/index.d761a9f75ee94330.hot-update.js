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

/***/ "./src/components/card/Card.tsx":
/*!**************************************!*\
  !*** ./src/components/card/Card.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CardComponent = (param)=>{\n    let { item , cardWrapperClass , cardImageTag , cardContentTag  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(cardWrapperClass),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(cardImageTag),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: item.image,\n                        alt: item.title,\n                        width: 274,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"/home/moni/Documents/new-project-with-next-js/src/components/card/Card.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/moni/Documents/new-project-with-next-js/src/components/card/Card.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: cardContentTag,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: cardTitle,\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/home/moni/Documents/new-project-with-next-js/src/components/card/Card.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.content\n                        }, void 0, false, {\n                            fileName: \"/home/moni/Documents/new-project-with-next-js/src/components/card/Card.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/moni/Documents/new-project-with-next-js/src/components/card/Card.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/moni/Documents/new-project-with-next-js/src/components/card/Card.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = CardComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardComponent);\nvar _c;\n$RefreshReg$(_c, \"CardComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJkL0NhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFFMUIsTUFBTUUsZ0JBQWdCLFNBV2hCO1FBWGlCLEVBQ3JCQyxLQUFJLEVBQ0pDLGlCQUFnQixFQUNoQkMsYUFBWSxFQUNaQyxlQUFjLEVBT2Y7SUFDQyxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVyxHQUFvQixPQUFqQko7OzhCQUNqQiw4REFBQ0c7b0JBQUlDLFdBQVcsR0FBZ0IsT0FBYkg7OEJBQ2pCLDRFQUFDTCxtREFBS0E7d0JBQUNTLEtBQUtOLEtBQUtPLEtBQUs7d0JBQUVDLEtBQUtSLEtBQUtTLEtBQUs7d0JBQUVDLE9BQU87d0JBQUtDLFFBQVE7Ozs7Ozs7Ozs7OzhCQUcvRCw4REFBQ1A7b0JBQUlDLFdBQVdGOztzQ0FDZCw4REFBQ0M7NEJBQUlDLFdBQVdPO3NDQUFZWixLQUFLUyxLQUFLOzs7Ozs7c0NBQ3RDLDhEQUFDTDtzQ0FBTUosS0FBS2EsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtLQTFCTWQ7QUE0Qk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9DYXJkLnRzeD9iM2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDYXJkQ29tcG9uZW50ID0gKHtcbiAgaXRlbSxcbiAgY2FyZFdyYXBwZXJDbGFzcyxcbiAgY2FyZEltYWdlVGFnLFxuICBjYXJkQ29udGVudFRhZyxcbn06IHtcbiAgaXRlbTogYW55O1xuICBjYXJkV3JhcHBlckNsYXNzPzogc3RyaW5nO1xuICBjYXJkSW1hZ2VUYWc/OiBzdHJpbmc7XG4gIGNhcmRDb250ZW50VGFnPzogc3RyaW5nO1xuICBjYXJkVGl0bGU/OnN0cmluZztcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NhcmRXcmFwcGVyQ2xhc3N9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjYXJkSW1hZ2VUYWd9YH0+XG4gICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWFnZX0gYWx0PXtpdGVtLnRpdGxlfSB3aWR0aD17Mjc0fSBoZWlnaHQ9ezMwMH0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmRDb250ZW50VGFnfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZFRpdGxlfT57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2ID57aXRlbS5jb250ZW50fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiQ2FyZENvbXBvbmVudCIsIml0ZW0iLCJjYXJkV3JhcHBlckNsYXNzIiwiY2FyZEltYWdlVGFnIiwiY2FyZENvbnRlbnRUYWciLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJjYXJkVGl0bGUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/card/Card.tsx\n"));

/***/ })

});