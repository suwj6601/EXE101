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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/lib/icons/PlusOutlined */ \"./node_modules/@ant-design/icons/lib/icons/PlusOutlined.js\");\n/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/modal */ \"./node_modules/antd/lib/modal/index.js\");\n/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/upload */ \"./node_modules/antd/lib/upload/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst getBase64 = (file)=>new Promise((resolve, reject)=>{\n        const reader = new FileReader();\n        reader.readAsDataURL(file);\n        reader.onload = ()=>resolve(reader.result);\n        reader.onerror = (error)=>reject(error);\n    });\nconst App = ()=>{\n    _s();\n    const [previewOpen, setPreviewOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [previewImage, setPreviewImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [previewTitle, setPreviewTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fileList, setFileList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleCancel = ()=>setPreviewOpen(false);\n    const handlePreview = async (file)=>{\n        if (!file.url && !file.preview) {\n            file.preview = await getBase64(file.originFileObj);\n        }\n        setPreviewImage(file.url || file.preview);\n        setPreviewOpen(true);\n        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf(\"/\") + 1));\n    };\n    const handleChange = (param)=>{\n        let { fileList: newFileList } = param;\n        return setFileList(newFileList);\n    };\n    const uploadButton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/macbook/Documents/Project_code/individual_project/EXE101/demo/src/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: \"Upload\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/Project_code/individual_project/EXE101/demo/src/pages/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/Documents/Project_code/individual_project/EXE101/demo/src/pages/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_upload__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                action: \"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188\",\n                listType: \"picture-circle\",\n                fileList: fileList,\n                onPreview: handlePreview,\n                onChange: handleChange,\n                children: fileList.length >= 8 ? null : uploadButton\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/Project_code/individual_project/EXE101/demo/src/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: previewOpen,\n                title: previewTitle,\n                footer: null,\n                onCancel: handleCancel,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    alt: \"example\",\n                    style: {\n                        width: \"100%\"\n                    },\n                    src: previewImage\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Documents/Project_code/individual_project/EXE101/demo/src/pages/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/Project_code/individual_project/EXE101/demo/src/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(App, \"+/XyjAM+kLYSUZWt0YqJ6WIe84o=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDUztBQUNaO0FBQUE7QUFJckMsTUFBTUssWUFBWSxDQUFDQyxPQUNqQixJQUFJQyxRQUFRLENBQUNDLFNBQVNDO1FBQ3BCLE1BQU1DLFNBQVMsSUFBSUM7UUFDbkJELE9BQU9FLGFBQWEsQ0FBQ047UUFDckJJLE9BQU9HLE1BQU0sR0FBRyxJQUFNTCxRQUFRRSxPQUFPSSxNQUFNO1FBQzNDSixPQUFPSyxPQUFPLEdBQUcsQ0FBQ0MsUUFBVVAsT0FBT087SUFDckM7QUFFRixNQUFNQyxNQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNtQixjQUFjQyxnQkFBZ0IsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ3FCLGNBQWNDLGdCQUFnQixHQUFHdEIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDdUIsVUFBVUMsWUFBWSxHQUFHeEIsK0NBQVFBLENBQWUsRUFBRTtJQUV6RCxNQUFNeUIsZUFBZSxJQUFNUCxlQUFlO0lBRTFDLE1BQU1RLGdCQUFnQixPQUFPckI7UUFDM0IsSUFBSSxDQUFDQSxLQUFLc0IsR0FBRyxJQUFJLENBQUN0QixLQUFLdUIsT0FBTyxFQUFFO1lBQzlCdkIsS0FBS3VCLE9BQU8sR0FBRyxNQUFNeEIsVUFBVUMsS0FBS3dCLGFBQWE7UUFDbkQ7UUFFQVQsZ0JBQWdCZixLQUFLc0IsR0FBRyxJQUFLdEIsS0FBS3VCLE9BQU87UUFDekNWLGVBQWU7UUFDZkksZ0JBQ0VqQixLQUFLeUIsSUFBSSxJQUFJekIsS0FBS3NCLEdBQUcsQ0FBRUksU0FBUyxDQUFDMUIsS0FBS3NCLEdBQUcsQ0FBRUssV0FBVyxDQUFDLE9BQU87SUFFbEU7SUFFQSxNQUFNQyxlQUF3QztZQUFDLEVBQUVWLFVBQVVXLFdBQVcsRUFBRTtlQUN0RVYsWUFBWVU7SUFBVztJQUV6QixNQUFNQyw2QkFDSiw4REFBQ0M7OzBCQUNDLDhEQUFDbkMsZ0ZBQVlBOzs7OzswQkFDYiw4REFBQ21DO2dCQUFJQyxPQUFPO29CQUFFQyxXQUFXO2dCQUFFOzBCQUFHOzs7Ozs7Ozs7Ozs7SUFHbEMscUJBQ0U7OzBCQUNFLDhEQUFDbkMsdURBQU1BO2dCQUNMb0MsUUFBTztnQkFDUEMsVUFBUztnQkFDVGpCLFVBQVVBO2dCQUNWa0IsV0FBV2Y7Z0JBQ1hnQixVQUFVVDswQkFFVFYsU0FBU29CLE1BQU0sSUFBSSxJQUFJLE9BQU9SOzs7Ozs7MEJBRWpDLDhEQUFDakMsc0RBQUtBO2dCQUNKMEMsTUFBTTNCO2dCQUNONEIsT0FBT3hCO2dCQUNQeUIsUUFBUTtnQkFDUkMsVUFBVXRCOzBCQUVWLDRFQUFDdUI7b0JBQUlDLEtBQUk7b0JBQVVaLE9BQU87d0JBQUVhLE9BQU87b0JBQU87b0JBQUdDLEtBQUtoQzs7Ozs7Ozs7Ozs7OztBQUkxRDtHQWxETUg7S0FBQUE7QUFvRE4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBNb2RhbCwgVXBsb2FkIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB0eXBlIHsgUmNGaWxlLCBVcGxvYWRQcm9wcyB9IGZyb20gXCJhbnRkL2VzL3VwbG9hZFwiO1xuaW1wb3J0IHR5cGUgeyBVcGxvYWRGaWxlIH0gZnJvbSBcImFudGQvZXMvdXBsb2FkL2ludGVyZmFjZVwiO1xuXG5jb25zdCBnZXRCYXNlNjQgPSAoZmlsZTogUmNGaWxlKTogUHJvbWlzZTxzdHJpbmc+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcbiAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4gcmVqZWN0KGVycm9yKTtcbiAgfSk7XG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcmV2aWV3T3Blbiwgc2V0UHJldmlld09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJldmlld0ltYWdlLCBzZXRQcmV2aWV3SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcmV2aWV3VGl0bGUsIHNldFByZXZpZXdUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZTxVcGxvYWRGaWxlW10+KFtdKTtcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiBzZXRQcmV2aWV3T3BlbihmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlUHJldmlldyA9IGFzeW5jIChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgaWYgKCFmaWxlLnVybCAmJiAhZmlsZS5wcmV2aWV3KSB7XG4gICAgICBmaWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoZmlsZS5vcmlnaW5GaWxlT2JqIGFzIFJjRmlsZSk7XG4gICAgfVxuXG4gICAgc2V0UHJldmlld0ltYWdlKGZpbGUudXJsIHx8IChmaWxlLnByZXZpZXcgYXMgc3RyaW5nKSk7XG4gICAgc2V0UHJldmlld09wZW4odHJ1ZSk7XG4gICAgc2V0UHJldmlld1RpdGxlKFxuICAgICAgZmlsZS5uYW1lIHx8IGZpbGUudXJsIS5zdWJzdHJpbmcoZmlsZS51cmwhLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2U6IFVwbG9hZFByb3BzW1wib25DaGFuZ2VcIl0gPSAoeyBmaWxlTGlzdDogbmV3RmlsZUxpc3QgfSkgPT5cbiAgICBzZXRGaWxlTGlzdChuZXdGaWxlTGlzdCk7XG5cbiAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxuICAgIDxkaXY+XG4gICAgICA8UGx1c091dGxpbmVkIC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5VcGxvYWQ8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFVwbG9hZFxuICAgICAgICBhY3Rpb249XCJodHRwczovL3J1bi5tb2NreS5pby92My80MzVlMjI0Yy00NGZiLTQ3NzMtOWZhZi0zODBjNWU2YTIxODhcIlxuICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2lyY2xlXCJcbiAgICAgICAgZmlsZUxpc3Q9e2ZpbGVMaXN0fVxuICAgICAgICBvblByZXZpZXc9e2hhbmRsZVByZXZpZXd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICA+XG4gICAgICAgIHtmaWxlTGlzdC5sZW5ndGggPj0gOCA/IG51bGwgOiB1cGxvYWRCdXR0b259XG4gICAgICA8L1VwbG9hZD5cbiAgICAgIDxNb2RhbFxuICAgICAgICBvcGVuPXtwcmV2aWV3T3Blbn1cbiAgICAgICAgdGl0bGU9e3ByZXZpZXdUaXRsZX1cbiAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgPlxuICAgICAgICA8aW1nIGFsdD1cImV4YW1wbGVcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gc3JjPXtwcmV2aWV3SW1hZ2V9IC8+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQbHVzT3V0bGluZWQiLCJNb2RhbCIsIlVwbG9hZCIsImdldEJhc2U2NCIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImVycm9yIiwiQXBwIiwicHJldmlld09wZW4iLCJzZXRQcmV2aWV3T3BlbiIsInByZXZpZXdJbWFnZSIsInNldFByZXZpZXdJbWFnZSIsInByZXZpZXdUaXRsZSIsInNldFByZXZpZXdUaXRsZSIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVQcmV2aWV3IiwidXJsIiwicHJldmlldyIsIm9yaWdpbkZpbGVPYmoiLCJuYW1lIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJoYW5kbGVDaGFuZ2UiLCJuZXdGaWxlTGlzdCIsInVwbG9hZEJ1dHRvbiIsImRpdiIsInN0eWxlIiwibWFyZ2luVG9wIiwiYWN0aW9uIiwibGlzdFR5cGUiLCJvblByZXZpZXciLCJvbkNoYW5nZSIsImxlbmd0aCIsIm9wZW4iLCJ0aXRsZSIsImZvb3RlciIsIm9uQ2FuY2VsIiwiaW1nIiwiYWx0Iiwid2lkdGgiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});