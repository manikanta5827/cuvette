"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/compressible";
exports.ids = ["vendor-chunks/compressible"];
exports.modules = {

/***/ "(rsc)/./node_modules/compressible/index.js":
/*!********************************************!*\
  !*** ./node_modules/compressible/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * compressible\n * Copyright(c) 2013 Jonathan Ong\n * Copyright(c) 2014 Jeremiah Senkpiel\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar db = __webpack_require__(/*! mime-db */ \"(rsc)/./node_modules/mime-db/index.js\")\n\n/**\n * Module variables.\n * @private\n */\n\nvar COMPRESSIBLE_TYPE_REGEXP = /^text\\/|\\+(?:json|text|xml)$/i\nvar EXTRACT_TYPE_REGEXP = /^\\s*([^;\\s]*)(?:;|\\s|$)/\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = compressible\n\n/**\n * Checks if a type is compressible.\n *\n * @param {string} type\n * @return {Boolean} compressible\n * @public\n */\n\nfunction compressible (type) {\n  if (!type || typeof type !== 'string') {\n    return false\n  }\n\n  // strip parameters\n  var match = EXTRACT_TYPE_REGEXP.exec(type)\n  var mime = match && match[1].toLowerCase()\n  var data = db[mime]\n\n  // return database information\n  if (data && data.compressible !== undefined) {\n    return data.compressible\n  }\n\n  // fallback to regexp or unknown\n  return COMPRESSIBLE_TYPE_REGEXP.test(mime) || undefined\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY29tcHJlc3NpYmxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsbUJBQU8sQ0FBQyxzREFBUzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsU0FBUzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksU0FBUztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1hcHAvLi9ub2RlX21vZHVsZXMvY29tcHJlc3NpYmxlL2luZGV4LmpzPzVmYTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBjb21wcmVzc2libGVcbiAqIENvcHlyaWdodChjKSAyMDEzIEpvbmF0aGFuIE9uZ1xuICogQ29weXJpZ2h0KGMpIDIwMTQgSmVyZW1pYWggU2Vua3BpZWxcbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGIgPSByZXF1aXJlKCdtaW1lLWRiJylcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgQ09NUFJFU1NJQkxFX1RZUEVfUkVHRVhQID0gL150ZXh0XFwvfFxcKyg/Ompzb258dGV4dHx4bWwpJC9pXG52YXIgRVhUUkFDVF9UWVBFX1JFR0VYUCA9IC9eXFxzKihbXjtcXHNdKikoPzo7fFxcc3wkKS9cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXByZXNzaWJsZVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHR5cGUgaXMgY29tcHJlc3NpYmxlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtCb29sZWFufSBjb21wcmVzc2libGVcbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjb21wcmVzc2libGUgKHR5cGUpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gc3RyaXAgcGFyYW1ldGVyc1xuICB2YXIgbWF0Y2ggPSBFWFRSQUNUX1RZUEVfUkVHRVhQLmV4ZWModHlwZSlcbiAgdmFyIG1pbWUgPSBtYXRjaCAmJiBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpXG4gIHZhciBkYXRhID0gZGJbbWltZV1cblxuICAvLyByZXR1cm4gZGF0YWJhc2UgaW5mb3JtYXRpb25cbiAgaWYgKGRhdGEgJiYgZGF0YS5jb21wcmVzc2libGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBkYXRhLmNvbXByZXNzaWJsZVxuICB9XG5cbiAgLy8gZmFsbGJhY2sgdG8gcmVnZXhwIG9yIHVua25vd25cbiAgcmV0dXJuIENPTVBSRVNTSUJMRV9UWVBFX1JFR0VYUC50ZXN0KG1pbWUpIHx8IHVuZGVmaW5lZFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/compressible/index.js\n");

/***/ })

};
;