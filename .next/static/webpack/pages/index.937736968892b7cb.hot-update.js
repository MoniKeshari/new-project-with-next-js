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

/***/ "./src/components/section/HeroSection.tsx":
/*!************************************************!*\
  !*** ./src/components/section/HeroSection.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Layout */ \"./src/components/layout/Layout.tsx\");\n/* harmony import */ var _modal_ModalData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/ModalData */ \"./src/components/modal/ModalData.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_toolkit_firstslice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux-toolkit/firstslice */ \"./src/redux-toolkit/firstslice.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    const { isOpen  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.modalSlice);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const handleCloseModal = ()=>{\n        dispatch((0,_redux_toolkit_firstslice__WEBPACK_IMPORTED_MODULE_5__.closeModal)());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_ModalData__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    isOpen: isOpen,\n                    handleCloseModal: handleCloseModal,\n                    title: \"Contact Form\"\n                }, void 0, false, {\n                    fileName: \"/home/moni/Documents/new-project-with-next-js/src/components/section/HeroSection.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"hii\"\n                }, void 0, false, {\n                    fileName: \"/home/moni/Documents/new-project-with-next-js/src/components/section/HeroSection.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/moni/Documents/new-project-with-next-js/src/components/section/HeroSection.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/moni/Documents/new-project-with-next-js/src/components/section/HeroSection.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"EnjjfJ2c5mZZNVpySBRJ9xr2lnk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uL0hlcm9TZWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNZO0FBQ0s7QUFDYTtBQUVDO0FBRXhELE1BQU1NLGNBQWMsSUFBTTs7SUFDdEIsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0gsd0RBQVdBLENBQUMsQ0FBQ0ksUUFBcUJBLE1BQU1DLFVBQVU7SUFDckUsTUFBTUMsV0FBV1Asd0RBQVdBO0lBRTVCLE1BQU1RLG1CQUFtQixJQUFNO1FBQzdCRCxTQUFTTCxxRUFBVUE7SUFDckI7SUFDRixxQkFDRSw4REFBQ0osc0RBQU1BO2tCQUNMLDRFQUFDVzs7OEJBQ0QsOERBQUNWLHdEQUFTQTtvQkFDUkssUUFBUUE7b0JBQ1JJLGtCQUFrQkE7b0JBQ2xCRSxPQUFNOzs7Ozs7OEJBRVIsOERBQUNEOzhCQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1YO0dBckJNTjs7UUFDaUJGLG9EQUFXQTtRQUNiRCxvREFBV0E7OztLQUYxQkc7QUF1Qk4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi9IZXJvU2VjdGlvbi50c3g/OWY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dC9MYXlvdXQnXG5pbXBvcnQgTW9kYWxEYXRhIGZyb20gJy4uL21vZGFsL01vZGFsRGF0YSdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0AvcmVkdXgtdG9vbGtpdC9zdG9yZSc7XG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnQC9yZWR1eC10b29sa2l0L2ZpcnN0c2xpY2UnO1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLm1vZGFsU2xpY2UpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsb3NlTW9kYWwoKSk7XG4gICAgfTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgIDxNb2RhbERhdGFcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIGhhbmRsZUNsb3NlTW9kYWw9e2hhbmRsZUNsb3NlTW9kYWx9XG4gICAgICAgIHRpdGxlPVwiQ29udGFjdCBGb3JtXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2PmhpaTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgXG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb24iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJNb2RhbERhdGEiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiY2xvc2VNb2RhbCIsIkhlcm9TZWN0aW9uIiwiaXNPcGVuIiwic3RhdGUiLCJtb2RhbFNsaWNlIiwiZGlzcGF0Y2giLCJoYW5kbGVDbG9zZU1vZGFsIiwiZGl2IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/section/HeroSection.tsx\n"));

/***/ })

});