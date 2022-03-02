/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/abstractDataSource.ts":
/*!****************************************!*\
  !*** ./src/data/abstractDataSource.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.AbstractDataSource = void 0;\r\nconst entities_1 = __webpack_require__(/*! ./entities */ \"./src/data/entities.ts\");\r\nclass AbstractDataSource {\r\n    constructor() {\r\n        this._products = [];\r\n        this._categories = new Set();\r\n        this.order = new entities_1.Order();\r\n        this.loading = this.getData();\r\n    }\r\n    async getProducts(sortProp = \"id\", category) {\r\n        await this.loading;\r\n        return this.selectProducts(this._products, sortProp, category);\r\n    }\r\n    async getData() {\r\n        this._products = [];\r\n        this._categories.clear();\r\n        const rawData = await this.loadProducts();\r\n        rawData.forEach((p) => {\r\n            this._products.push(p);\r\n            this._categories.add(p.category);\r\n        });\r\n    }\r\n    selectProducts(prods, sortProp, category) {\r\n        return prods.filter((p) => category === undefined || p.category === category)\r\n            .sort((p1, p2) => p1[sortProp] < p2[sortProp] ?\r\n            -1 : p1[sortProp] > p2[sortProp] ? 1 : 0);\r\n    }\r\n    async getCategories() {\r\n        await this.loading;\r\n        return [...this._categories.values()];\r\n    }\r\n}\r\nexports.AbstractDataSource = AbstractDataSource;\r\n\n\n//# sourceURL=webpack://6---stand-alone-web-application/./src/data/abstractDataSource.ts?");

/***/ }),

/***/ "./src/data/entities.ts":
/*!******************************!*\
  !*** ./src/data/entities.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Order = exports.OrderLine = void 0;\r\nclass OrderLine {\r\n    constructor(product, quantity) {\r\n        this.product = product;\r\n        this.quantity = quantity;\r\n        // no statements required\r\n    }\r\n    get total() {\r\n        return this.product.price * this.quantity;\r\n    }\r\n}\r\nexports.OrderLine = OrderLine;\r\nclass Order {\r\n    constructor(initialLines) {\r\n        this.lines = new Map();\r\n        if (initialLines) {\r\n            initialLines.forEach(ol => this.lines.set(ol.product.id, ol));\r\n        }\r\n    }\r\n    addProduct(prod, quantity) {\r\n        if (this.lines.has(prod.id)) {\r\n            if (quantity === 0) {\r\n                this.removeProduct(prod.id);\r\n            }\r\n            else {\r\n                this.lines.get(prod.id).quantity += quantity;\r\n            }\r\n        }\r\n        else {\r\n            this.lines.set(prod.id, new OrderLine(prod, quantity));\r\n        }\r\n    }\r\n    removeProduct(id) {\r\n        this.lines.delete(id);\r\n    }\r\n    get orderLines() {\r\n        return [...this.lines.values()];\r\n    }\r\n    get productCount() {\r\n        return [...this.lines.values()]\r\n            .reduce((total, ol) => total += ol.quantity, 0);\r\n    }\r\n    get total() {\r\n        return [...this.lines.values()].reduce((total, ol) => total += ol.total, 0);\r\n    }\r\n}\r\nexports.Order = Order;\r\n\n\n//# sourceURL=webpack://6---stand-alone-web-application/./src/data/entities.ts?");

/***/ }),

/***/ "./src/data/localDataSource.ts":
/*!*************************************!*\
  !*** ./src/data/localDataSource.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.LocalDataSource = void 0;\r\nconst abstractDataSource_1 = __webpack_require__(/*! ./abstractDataSource */ \"./src/data/abstractDataSource.ts\");\r\nclass LocalDataSource extends abstractDataSource_1.AbstractDataSource {\r\n    loadProducts() {\r\n        return Promise.resolve([\r\n            { id: 1, name: \"P1\", category: \"Watersports\",\r\n                description: \"P1 (Watersports)\", price: 3 },\r\n            { id: 2, name: \"P2\", category: \"Watersports\",\r\n                description: \"P2 (Watersports)\", price: 4 },\r\n            { id: 3, name: \"P3\", category: \"Running\",\r\n                description: \"P3 (Running)\", price: 5 },\r\n            { id: 4, name: \"P4\", category: \"Chess\",\r\n                description: \"P4 (Chess)\", price: 6 },\r\n            { id: 5, name: \"P5\", category: \"Chess\",\r\n                description: \"P6 (Chess)\", price: 7 },\r\n        ]);\r\n    }\r\n    storeOrder() {\r\n        console.log(\"Store Order\");\r\n        console.log(JSON.stringify(this.order));\r\n        return Promise.resolve(1);\r\n    }\r\n}\r\nexports.LocalDataSource = LocalDataSource;\r\n\n\n//# sourceURL=webpack://6---stand-alone-web-application/./src/data/localDataSource.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst localDataSource_1 = __webpack_require__(/*! ./data/localDataSource */ \"./src/data/localDataSource.ts\");\r\nasync function displayData() {\r\n    const ds = new localDataSource_1.LocalDataSource();\r\n    const allProducts = await ds.getProducts(\"name\");\r\n    const categories = await ds.getCategories();\r\n    const chessProducts = await ds.getProducts(\"name\", \"Chess\");\r\n    let result = \"\";\r\n    allProducts.forEach((p) => (result += `Product: ${p.name}, ${p.category}\\n`));\r\n    categories.forEach((c) => (result += `Category: ${c}\\n`));\r\n    chessProducts.forEach((p) => ds.order.addProduct(p, 1));\r\n    result += `Order total: $${ds.order.total.toFixed(2)}`;\r\n    return result;\r\n}\r\ndisplayData().then((res) => console.log(res));\r\n\n\n//# sourceURL=webpack://6---stand-alone-web-application/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;