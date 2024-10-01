"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/route";
exports.ids = ["app/api/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=%2FUsers%2Fabbay%2FDesktop%2Fcuvette%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabbay%2FDesktop%2Fcuvette&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=%2FUsers%2Fabbay%2FDesktop%2Fcuvette%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabbay%2FDesktop%2Fcuvette&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_abbay_Desktop_cuvette_src_app_api_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/route.js */ \"(rsc)/./src/app/api/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/route\",\n        pathname: \"/api\",\n        filename: \"route\",\n        bundlePath: \"app/api/route\"\n    },\n    resolvedPagePath: \"/Users/abbay/Desktop/cuvette/src/app/api/route.js\",\n    nextConfigOutput,\n    userland: _Users_abbay_Desktop_cuvette_src_app_api_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmFiYmF5JTJGRGVza3RvcCUyRmN1dmV0dGUlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGYWJiYXklMkZEZXNrdG9wJTJGY3V2ZXR0ZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDQztBQUM5RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1hcHAvPzcxMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2FiYmF5L0Rlc2t0b3AvY3V2ZXR0ZS9zcmMvYXBwL2FwaS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvYWJiYXkvRGVza3RvcC9jdXZldHRlL3NyYy9hcHAvYXBpL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=%2FUsers%2Fabbay%2FDesktop%2Fcuvette%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabbay%2FDesktop%2Fcuvette&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/route.js":
/*!******************************!*\
  !*** ./src/app/api/route.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _jobsList_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobsList.json */ \"(rsc)/./src/app/api/jobsList.json\");\n/* harmony import */ var _middleware_compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/middleware/compression */ \"(rsc)/./src/middleware/compression.js\");\n\n\n\nasync function GET(req, res) {\n    await (0,_middleware_compression__WEBPACK_IMPORTED_MODULE_2__.compressionMiddleware)(req, res);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true,\n        data: _jobsList_json__WEBPACK_IMPORTED_MODULE_1__\n    });\n}\nasync function POST(req) {\n    const { id } = req.body;\n    const updatedJobs = _jobsList_json__WEBPACK_IMPORTED_MODULE_1__.filter((job)=>job.id !== id);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true,\n        data: updatedJobs\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNSO0FBQzhCO0FBRzFELGVBQWVHLElBQUlDLEdBQUcsRUFBRUMsR0FBRztJQUNoQyxNQUFNSCw4RUFBcUJBLENBQUNFLEtBQUtDO0lBQ2pDLE9BQU9MLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFBRUMsU0FBUztRQUFNQyxNQUFNUCwyQ0FBSUE7SUFBQztBQUN2RDtBQUVPLGVBQWVRLEtBQUtMLEdBQUc7SUFDNUIsTUFBTSxFQUFFTSxFQUFFLEVBQUUsR0FBR04sSUFBSU8sSUFBSTtJQUN2QixNQUFNQyxjQUFjWCwyQ0FBSUEsQ0FBQ1ksTUFBTSxDQUFDLENBQUNDLE1BQVFBLElBQUlKLEVBQUUsS0FBS0E7SUFDcEQsT0FBT1YscURBQVlBLENBQUNNLElBQUksQ0FBQztRQUFFQyxTQUFTO1FBQU1DLE1BQU1JO0lBQVk7QUFDOUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0anMtYXBwLy4vc3JjL2FwcC9hcGkvcm91dGUuanM/ZTU4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgam9icyBmcm9tICcuL2pvYnNMaXN0Lmpzb24nO1xuaW1wb3J0IHsgY29tcHJlc3Npb25NaWRkbGV3YXJlIH0gZnJvbSAnQC9taWRkbGV3YXJlL2NvbXByZXNzaW9uJztcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSwgcmVzKSB7XG4gIGF3YWl0IGNvbXByZXNzaW9uTWlkZGxld2FyZShyZXEsIHJlcyk7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGpvYnMgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICBjb25zdCB7IGlkIH0gPSByZXEuYm9keTtcbiAgY29uc3QgdXBkYXRlZEpvYnMgPSBqb2JzLmZpbHRlcigoam9iKSA9PiBqb2IuaWQgIT09IGlkKTtcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXBkYXRlZEpvYnMgfSk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiam9icyIsImNvbXByZXNzaW9uTWlkZGxld2FyZSIsIkdFVCIsInJlcSIsInJlcyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsIlBPU1QiLCJpZCIsImJvZHkiLCJ1cGRhdGVkSm9icyIsImZpbHRlciIsImpvYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/route.js\n");

/***/ }),

/***/ "(rsc)/./src/middleware/compression.js":
/*!***************************************!*\
  !*** ./src/middleware/compression.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compressionMiddleware: () => (/* binding */ compressionMiddleware)\n/* harmony export */ });\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compression */ \"(rsc)/./node_modules/compression/index.js\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _runMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runMiddleware */ \"(rsc)/./src/middleware/runMiddleware.js\");\n\n\nconst compressionMiddleware = (req, res)=>{\n    return (0,_runMiddleware__WEBPACK_IMPORTED_MODULE_1__.runMiddleware)(req, res, compression__WEBPACK_IMPORTED_MODULE_0___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbWlkZGxld2FyZS9jb21wcmVzc2lvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3NDO0FBQ1U7QUFFekMsTUFBTUUsd0JBQXdCLENBQUNDLEtBQUtDO0lBQ3pDLE9BQU9ILDZEQUFhQSxDQUFDRSxLQUFLQyxLQUFLSixrREFBV0E7QUFDNUMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1hcHAvLi9zcmMvbWlkZGxld2FyZS9jb21wcmVzc2lvbi5qcz85NDhkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCB7IHJ1bk1pZGRsZXdhcmUgfSBmcm9tICcuL3J1bk1pZGRsZXdhcmUnOyBcblxuZXhwb3J0IGNvbnN0IGNvbXByZXNzaW9uTWlkZGxld2FyZSA9IChyZXEsIHJlcykgPT4ge1xuICByZXR1cm4gcnVuTWlkZGxld2FyZShyZXEsIHJlcywgY29tcHJlc3Npb24oKSk7XG59O1xuIl0sIm5hbWVzIjpbImNvbXByZXNzaW9uIiwicnVuTWlkZGxld2FyZSIsImNvbXByZXNzaW9uTWlkZGxld2FyZSIsInJlcSIsInJlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/middleware/compression.js\n");

/***/ }),

/***/ "(rsc)/./src/middleware/runMiddleware.js":
/*!*****************************************!*\
  !*** ./src/middleware/runMiddleware.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   runMiddleware: () => (/* binding */ runMiddleware)\n/* harmony export */ });\n// src/middleware/runMiddleware.js\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbWlkZGxld2FyZS9ydW5NaWRkbGV3YXJlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxrQ0FBa0M7QUFDM0IsU0FBU0EsY0FBY0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEVBQUU7SUFDeEMsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO1FBQzNCSCxHQUFHRixLQUFLQyxLQUFLLENBQUNLO1lBQ1osSUFBSUEsa0JBQWtCQyxPQUFPO2dCQUMzQixPQUFPRixPQUFPQztZQUNoQjtZQUNBLE9BQU9GLFFBQVFFO1FBQ2pCO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1hcHAvLi9zcmMvbWlkZGxld2FyZS9ydW5NaWRkbGV3YXJlLmpzP2Y0MzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL21pZGRsZXdhcmUvcnVuTWlkZGxld2FyZS5qc1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZm4ocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/middleware/runMiddleware.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/jobsList.json":
/*!***********************************!*\
  !*** ./src/app/api/jobsList.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"id":1,"Job":"Backend Developer","Company":"Tech Solutions","Location":"Hyderabad, India","Skills":["Node.js","MongoDB","Express"],"Stipend":25000,"Duration":"6 months","OpeningsMode":"7-8 hours"},{"id":2,"Job":"Frontend Developer","Company":"Creative Designs","Location":"Bangalore, India","Skills":["React","CSS","JavaScript"],"Stipend":12000,"Duration":"4 months","OpeningsMode":"7-8 hours"},{"id":3,"Job":"Fullstack Developer","Company":"InnoVate","Location":"Pune, India","Skills":["Node.js","React","MongoDB"],"Stipend":30000,"Duration":"8 months","OpeningsMode":"7-8 hours"},{"id":4,"Job":"Data Scientist","Company":"Data Insights","Location":"Delhi, India","Skills":["Python","Machine Learning","SQL"],"Stipend":35000,"Duration":"12 months","OpeningsMode":"7-8 hours"},{"id":5,"Job":"Mobile App Developer","Company":"Appify","Location":"Mumbai, India","Skills":["Flutter","Dart","Firebase"],"Stipend":20000,"Duration":"5 months","OpeningsMode":"7-8 hours"},{"id":6,"Job":"DevOps Engineer","Company":"CloudOps","Location":"Chennai, India","Skills":["Docker","Kubernetes","AWS"],"Stipend":28000,"Duration":"9 months","OpeningsMode":"7-8 hours"},{"id":7,"Job":"Cybersecurity Specialist","Company":"SecureTech","Location":"Gurgaon, India","Skills":["Network Security","Ethical Hacking","Firewalls"],"Stipend":32000,"Duration":"10 months","OpeningsMode":"7-8 hours"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/mime-types","vendor-chunks/compression","vendor-chunks/negotiator","vendor-chunks/vary","vendor-chunks/safe-buffer","vendor-chunks/on-headers","vendor-chunks/compressible","vendor-chunks/bytes","vendor-chunks/accepts"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=%2FUsers%2Fabbay%2FDesktop%2Fcuvette%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabbay%2FDesktop%2Fcuvette&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();