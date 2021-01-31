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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\r\n(function () {\r\n    var canvas = document.getElementById(\"canvas\");\r\n    var ctx = canvas.getContext(\"2d\");\r\n    var container = document.getElementById(\"canvas-container\");\r\n    index_1.resize(canvas, container);\r\n    index_1.run(canvas, ctx);\r\n})();\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/app.ts?");

/***/ }),

/***/ "./src/colors.ts":
/*!***********************!*\
  !*** ./src/colors.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar colors = {\r\n    black: \"#333333\",\r\n    white: \"#ffffff\",\r\n    lightskyblue: \"#87CEFA\",\r\n    whitesmoke: \"#F5F5F5\",\r\n    lightgray: \"#D3D3D3\",\r\n    darkgray: \"#A9A9A9\",\r\n    silver: \"#C0C0C0\",\r\n    slategray: \"#708090\",\r\n    lightslategray: \"#778899\",\r\n    gray: \"#808080\",\r\n    treegreen1: \"#CCCC99\",\r\n    treegreen2: \"#669966\",\r\n};\r\nexports.default = colors;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/colors.ts?");

/***/ }),

/***/ "./src/defaultDraw.ts":
/*!****************************!*\
  !*** ./src/defaultDraw.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\r\nvar defaultDraw = function (_canvas, _ctx, _ground, _player, _rocks, _trees, _dt) {\r\n    if (_dt === void 0) { _dt = 51; }\r\n    index_1.resetCanvas(_canvas, _ctx, index_1.colors.whitesmoke);\r\n    _ground.draw(_ctx);\r\n    for (var _i = 0, _trees_1 = _trees; _i < _trees_1.length; _i++) {\r\n        var tree = _trees_1[_i];\r\n        tree.draw(_ctx);\r\n    }\r\n    for (var _a = 0, _rocks_1 = _rocks; _a < _rocks_1.length; _a++) {\r\n        var rock = _rocks_1[_a];\r\n        rock.draw(_ctx);\r\n    }\r\n    _player.draw(_ctx);\r\n    // 半透明を上塗り\r\n    _ctx.globalAlpha = 0.01 * Math.min(_dt, 50);\r\n    _ctx.fillStyle = index_1.colors.whitesmoke;\r\n    _ctx.fillRect(0, 0, _canvas.width, _canvas.height);\r\n    _ctx.globalAlpha = 1;\r\n};\r\nexports.default = defaultDraw;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/defaultDraw.ts?");

/***/ }),

/***/ "./src/drawScore.ts":
/*!**************************!*\
  !*** ./src/drawScore.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar drawScore = function (_canvas, _ctx, _t, _color) {\r\n    _ctx.fillStyle = _color; // silver\r\n    _ctx.font = _canvas.width / 20 + \"px sanserif\";\r\n    _ctx.textBaseline = \"top\";\r\n    _ctx.textAlign = \"right\";\r\n    _ctx.fillText(\"\" + _t, _canvas.width - 10, 10);\r\n};\r\nexports.default = drawScore;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/drawScore.ts?");

/***/ }),

/***/ "./src/ground.ts":
/*!***********************!*\
  !*** ./src/ground.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\r\nvar Ground = /** @class */ (function () {\r\n    function Ground(canvas) {\r\n        this.left = 0;\r\n        this.top = canvas.height * 2 / 3;\r\n        this.width = canvas.width;\r\n        this.height = canvas.height / 3;\r\n        this.color = index_1.colors.lightslategray;\r\n    }\r\n    Ground.prototype.draw = function (ctx) {\r\n        ctx.fillStyle = this.color;\r\n        ctx.fillRect(this.left, this.top, this.width, this.height);\r\n    };\r\n    return Ground;\r\n}());\r\nexports.default = Ground;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/ground.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.defaultDraw = exports.showResult = exports.run = exports.Tree = exports.drawScore = exports.judgeHit = exports.Rock = exports.Player = exports.resetCanvas = exports.resize = exports.Ground = exports.colors = void 0;\r\nvar colors_1 = __webpack_require__(/*! ./colors */ \"./src/colors.ts\");\r\nObject.defineProperty(exports, \"colors\", ({ enumerable: true, get: function () { return __importDefault(colors_1).default; } }));\r\nvar ground_1 = __webpack_require__(/*! ./ground */ \"./src/ground.ts\");\r\nObject.defineProperty(exports, \"Ground\", ({ enumerable: true, get: function () { return __importDefault(ground_1).default; } }));\r\nvar resize_1 = __webpack_require__(/*! ./resize */ \"./src/resize.ts\");\r\nObject.defineProperty(exports, \"resize\", ({ enumerable: true, get: function () { return __importDefault(resize_1).default; } }));\r\nvar reset_1 = __webpack_require__(/*! ./reset */ \"./src/reset.ts\");\r\nObject.defineProperty(exports, \"resetCanvas\", ({ enumerable: true, get: function () { return __importDefault(reset_1).default; } }));\r\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/player.ts\");\r\nObject.defineProperty(exports, \"Player\", ({ enumerable: true, get: function () { return __importDefault(player_1).default; } }));\r\nvar rock_1 = __webpack_require__(/*! ./rock */ \"./src/rock.ts\");\r\nObject.defineProperty(exports, \"Rock\", ({ enumerable: true, get: function () { return __importDefault(rock_1).default; } }));\r\nvar judgeHit_1 = __webpack_require__(/*! ./judgeHit */ \"./src/judgeHit.ts\");\r\nObject.defineProperty(exports, \"judgeHit\", ({ enumerable: true, get: function () { return __importDefault(judgeHit_1).default; } }));\r\nvar drawScore_1 = __webpack_require__(/*! ./drawScore */ \"./src/drawScore.ts\");\r\nObject.defineProperty(exports, \"drawScore\", ({ enumerable: true, get: function () { return __importDefault(drawScore_1).default; } }));\r\nvar tree_1 = __webpack_require__(/*! ./tree */ \"./src/tree.ts\");\r\nObject.defineProperty(exports, \"Tree\", ({ enumerable: true, get: function () { return __importDefault(tree_1).default; } }));\r\nvar run_1 = __webpack_require__(/*! ./run */ \"./src/run.ts\");\r\nObject.defineProperty(exports, \"run\", ({ enumerable: true, get: function () { return __importDefault(run_1).default; } }));\r\nvar showResult_1 = __webpack_require__(/*! ./showResult */ \"./src/showResult.ts\");\r\nObject.defineProperty(exports, \"showResult\", ({ enumerable: true, get: function () { return __importDefault(showResult_1).default; } }));\r\nvar defaultDraw_1 = __webpack_require__(/*! ./defaultDraw */ \"./src/defaultDraw.ts\");\r\nObject.defineProperty(exports, \"defaultDraw\", ({ enumerable: true, get: function () { return __importDefault(defaultDraw_1).default; } }));\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/index.ts?");

/***/ }),

/***/ "./src/judgeHit.ts":
/*!*************************!*\
  !*** ./src/judgeHit.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar judgeHit = function (_p, _r) {\r\n    return [\r\n        ((_p.right > _r.left && _p.left < _r.left) || (_r.right > _p.left && _r.left < _p.left)),\r\n        ((_p.bottom > _r.top && _p.top < _r.top) || (_r.bottom > _p.top && _r.top < _p.top))\r\n    ];\r\n};\r\nexports.default = judgeHit;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/judgeHit.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\r\nvar Player = /** @class */ (function () {\r\n    function Player(_canvas, _ground) {\r\n        var _this = this;\r\n        this.setY = function (y) {\r\n            _this.top = y;\r\n            _this.bottom = _this.top + _this.height;\r\n        };\r\n        this.setX = function (x) {\r\n            _this.left = x;\r\n            _this.right = _this.left + _this.width;\r\n        };\r\n        this.moveX = function (x) {\r\n            _this.left += x;\r\n            _this.right += x;\r\n        };\r\n        this.moveY = function (y) {\r\n            _this.top += y;\r\n            _this.bottom += y;\r\n        };\r\n        this.getEyeX = function () {\r\n            return (_this.left + _this.right * 3) / 4;\r\n        };\r\n        this.getEyeY = function () {\r\n            return (_this.top * 6 + _this.bottom * 5) / 11;\r\n        };\r\n        this.update = function (_canvas, _ground) {\r\n            if (!_this.isGrounded) {\r\n                _this.moveY(-_this.vy);\r\n                _this.vy -= _canvas.width / 400;\r\n                if (_this.bottom > _ground.top) {\r\n                    _this.setY(_ground.top - _this.height);\r\n                    _this.isGrounded = true;\r\n                    _this.vy = 0;\r\n                }\r\n            }\r\n        };\r\n        this.draw = function (_ctx) {\r\n            _ctx.fillStyle = _this.color;\r\n            _ctx.fillRect(_this.left, _this.top, _this.width, _this.height);\r\n            if (_this.isGrounded && !_this.isHit) {\r\n                _ctx.beginPath();\r\n                _ctx.arc(_this.getEyeX(), _this.getEyeY(), _this.width / 6, 0, Math.PI * 2);\r\n                _ctx.fillStyle = _this.outerEyeColor;\r\n                _ctx.fill();\r\n                _ctx.beginPath();\r\n                _ctx.arc(_this.getEyeX() + _this.width / 12, _this.getEyeY(), _this.width / 15, 0, Math.PI * 2);\r\n                _ctx.fillStyle = _this.innerEyeColor;\r\n                _ctx.fill();\r\n            }\r\n            else {\r\n                _ctx.strokeStyle = _this.innerEyeColor;\r\n                _ctx.lineWidth = _this.width / 30;\r\n                _ctx.beginPath();\r\n                _ctx.moveTo(_this.getEyeX() - _this.width / 6, _this.getEyeY() - _this.width / 8);\r\n                _ctx.lineTo(_this.getEyeX() + _this.width / 6, _this.getEyeY());\r\n                _ctx.lineTo(_this.getEyeX() - _this.width / 6, _this.getEyeY() + _this.width / 8);\r\n                _ctx.stroke();\r\n                if (_this.isGrounded) {\r\n                    if (_this.vy > 0) {\r\n                    }\r\n                }\r\n            }\r\n        };\r\n        this.width = _canvas.width / 40 * 3;\r\n        this.height = _canvas.height / 40 * 3;\r\n        this.left = _canvas.width / 5;\r\n        this.top = _ground.top - this.height;\r\n        this.right = this.left + this.width;\r\n        this.bottom = _ground.top;\r\n        this.color = index_1.colors.darkgray;\r\n        this.outerEyeColor = index_1.colors.whitesmoke;\r\n        this.innerEyeColor = index_1.colors.black;\r\n        this.vy = 0;\r\n        this.isGrounded = true;\r\n        this.isHit = false;\r\n    }\r\n    return Player;\r\n}());\r\nexports.default = Player;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/player.ts?");

/***/ }),

/***/ "./src/reset.ts":
/*!**********************!*\
  !*** ./src/reset.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar resetCanvas = function (canvas, ctx, color) {\r\n    ctx.fillStyle = color; // whitesmoke\r\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n};\r\nexports.default = resetCanvas;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/reset.ts?");

/***/ }),

/***/ "./src/resize.ts":
/*!***********************!*\
  !*** ./src/resize.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar resize = function (canvas, container) {\r\n    canvas.width = container.clientWidth;\r\n    canvas.height = container.clientHeight;\r\n};\r\nexports.default = resize;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/resize.ts?");

/***/ }),

/***/ "./src/rock.ts":
/*!*********************!*\
  !*** ./src/rock.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\r\nvar Rock = /** @class */ (function () {\r\n    function Rock(_canvas, _t, _ground) {\r\n        var _this = this;\r\n        this.update = function (_canvas, _t) {\r\n            _this.speed = (5 + Math.floor(_t / 500)) / 400 * _canvas.width;\r\n            _this.left -= _this.speed;\r\n            _this.right -= _this.speed;\r\n        };\r\n        this.draw = function (ctx) {\r\n            ctx.fillStyle = _this.color;\r\n            ctx.fillRect(_this.left, _this.top, _this.width, _this.height);\r\n        };\r\n        this.width = _canvas.width / 10;\r\n        this.height = _canvas.height / 20;\r\n        this.left = _canvas.width;\r\n        this.top = _ground.top - this.height;\r\n        this.right = this.left + this.width;\r\n        this.bottom = _ground.top;\r\n        this.color = index_1.colors.gray;\r\n        this.speed = (5 + Math.floor(_t / 500)) / 400 * _canvas.width;\r\n    }\r\n    return Rock;\r\n}());\r\nexports.default = Rock;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/rock.ts?");

/***/ }),

/***/ "./src/run.ts":
/*!********************!*\
  !*** ./src/run.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar defaultDraw_1 = __importDefault(__webpack_require__(/*! ./defaultDraw */ \"./src/defaultDraw.ts\"));\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\r\nvar run = function (_canvas, _ctx) {\r\n    var isPlaying = false;\r\n    var rockInterval = 50;\r\n    var treeInterval = 0;\r\n    var ground = new index_1.Ground(_canvas);\r\n    var player = new index_1.Player(_canvas, ground);\r\n    var rocks = [];\r\n    var trees = [];\r\n    for (var i = 0; i < 80; i++) {\r\n        if (treeInterval === 0) {\r\n            var rand = Math.random() * 100;\r\n            if (rand < 5) {\r\n                treeInterval = 30;\r\n                if (rand < 3) {\r\n                    trees.push(new index_1.Tree(_canvas, ground, 0, index_1.colors.treegreen1, i / 80 * _canvas.width));\r\n                }\r\n                else {\r\n                    trees.push(new index_1.Tree(_canvas, ground, 0, index_1.colors.treegreen2, i / 80 * _canvas.width));\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            treeInterval--;\r\n        }\r\n    }\r\n    var time = 0;\r\n    var preJudgement = [false, false];\r\n    var touchEvent = function (e) {\r\n        e.preventDefault();\r\n        if (player.isGrounded) {\r\n            player.vy += _canvas.width / 40 * 1.1;\r\n            player.isGrounded = false;\r\n        }\r\n    };\r\n    var clickEvent = function () {\r\n        if (player.isGrounded) {\r\n            player.vy += _canvas.width / 40 * 1.1;\r\n            player.isGrounded = false;\r\n        }\r\n    };\r\n    var keyEvent = function (e) {\r\n        if (e.key === \" \") {\r\n            if (player.isGrounded) {\r\n                player.vy += _canvas.width / 40 * 1.1;\r\n                player.isGrounded = false;\r\n            }\r\n        }\r\n    };\r\n    var prepare = function (rev, _dt) {\r\n        if (_dt === void 0) { _dt = -1; }\r\n        if (_dt === -1) {\r\n            defaultDraw_1.default(_canvas, _ctx, ground, player, rocks, trees);\r\n            _ctx.fillStyle = index_1.colors.black;\r\n            _ctx.font = _canvas.width / 20 + \"px sans-serif\";\r\n            _ctx.textBaseline = \"middle\";\r\n            _ctx.textAlign = \"center\";\r\n            _ctx.fillText(\"- tap to start -\", _canvas.width / 2, _canvas.height / 4 * 3);\r\n        }\r\n        else {\r\n            defaultDraw_1.default(_canvas, _ctx, ground, player, rocks, trees, (rev ? _dt : 51));\r\n            _ctx.globalAlpha = 0.02 * _dt;\r\n            _ctx.fillStyle = index_1.colors.black;\r\n            _ctx.font = _canvas.width / 20 + (rev ? (50 - _dt) : 0) / 3 + \"px sans-serif\";\r\n            _ctx.textBaseline = \"middle\";\r\n            _ctx.textAlign = \"center\";\r\n            _ctx.fillText(\"- tap to start -\", _canvas.width / 2, _canvas.height / 6 * 5);\r\n            _ctx.globalAlpha = 1;\r\n        }\r\n    };\r\n    var startAndRemoveKeyEvent = function (e) {\r\n        if (e.key === \" \") {\r\n            start();\r\n        }\r\n    };\r\n    var start = function () {\r\n        if (!isPlaying) {\r\n            isPlaying = true;\r\n            _canvas.removeEventListener(\"touchstart\", start);\r\n            _canvas.removeEventListener(\"click\", start);\r\n            window.removeEventListener(\"keydown\", startAndRemoveKeyEvent);\r\n            var vanishIndex_1 = 0;\r\n            var roopid_1 = setInterval(function () {\r\n                prepare(true, 50 - vanishIndex_1 * 2);\r\n                vanishIndex_1++;\r\n                if (vanishIndex_1 > 24) {\r\n                    clearInterval(roopid_1);\r\n                }\r\n            }, 20);\r\n            setTimeout(function () {\r\n                _canvas.addEventListener(\"touchstart\", touchEvent);\r\n                _canvas.addEventListener(\"click\", clickEvent);\r\n                window.addEventListener(\"keydown\", keyEvent);\r\n                var intervalid = setInterval(function () {\r\n                    if (isPlaying) {\r\n                        trees = trees.filter(function (tree) { return tree.right > 0; });\r\n                        for (var _i = 0, trees_1 = trees; _i < trees_1.length; _i++) {\r\n                            var tree = trees_1[_i];\r\n                            tree.update(_canvas, time);\r\n                        }\r\n                        rocks = rocks.filter(function (rock) { return rock.right > 0; });\r\n                        var prePlayer = __assign({}, player);\r\n                        player.update(_canvas, ground);\r\n                        for (var _a = 0, rocks_1 = rocks; _a < rocks_1.length; _a++) {\r\n                            var rock = rocks_1[_a];\r\n                            preJudgement = index_1.judgeHit(prePlayer, rock);\r\n                            rock.update(_canvas, time);\r\n                            var nowJudgement = index_1.judgeHit(player, rock);\r\n                            if (nowJudgement[0] && nowJudgement[1]) {\r\n                                isPlaying = false;\r\n                                player.isHit = true;\r\n                                if (!preJudgement[0]) {\r\n                                    player.setX(rock.left - player.width);\r\n                                }\r\n                                if (!preJudgement[1]) {\r\n                                    player.setY(rock.top - player.height);\r\n                                }\r\n                            }\r\n                        }\r\n                        index_1.resetCanvas(_canvas, _ctx, index_1.colors.whitesmoke);\r\n                        ground.draw(_ctx);\r\n                        for (var _b = 0, trees_2 = trees; _b < trees_2.length; _b++) {\r\n                            var tree = trees_2[_b];\r\n                            tree.draw(_ctx);\r\n                        }\r\n                        player.draw(_ctx);\r\n                        for (var _c = 0, rocks_2 = rocks; _c < rocks_2.length; _c++) {\r\n                            var rock = rocks_2[_c];\r\n                            rock.draw(_ctx);\r\n                        }\r\n                        index_1.drawScore(_canvas, _ctx, time, index_1.colors.silver);\r\n                        time++;\r\n                        if (treeInterval === 0) {\r\n                            var rand = Math.random() * 100;\r\n                            if (rand < 5) {\r\n                                treeInterval = 30;\r\n                                if (rand < 3) {\r\n                                    trees.push(new index_1.Tree(_canvas, ground, time, index_1.colors.treegreen1));\r\n                                }\r\n                                else {\r\n                                    trees.push(new index_1.Tree(_canvas, ground, time, index_1.colors.treegreen2));\r\n                                }\r\n                            }\r\n                        }\r\n                        else {\r\n                            treeInterval--;\r\n                        }\r\n                        if (rockInterval === 0) {\r\n                            var rand = Math.random() * 100;\r\n                            if (rand < 3) {\r\n                                rocks.push(new index_1.Rock(_canvas, time, ground));\r\n                                rockInterval = 50;\r\n                            }\r\n                        }\r\n                        else {\r\n                            rockInterval--;\r\n                        }\r\n                    }\r\n                    else {\r\n                        _canvas.removeEventListener(\"touchstart\", touchEvent);\r\n                        _canvas.removeEventListener(\"click\", clickEvent);\r\n                        window.removeEventListener(\"keydown\", keyEvent);\r\n                        clearInterval(intervalid);\r\n                        index_1.showResult(_canvas, _ctx, time, player, ground, trees, rocks);\r\n                    }\r\n                }, 20);\r\n            }, 500);\r\n        }\r\n    };\r\n    var appearIndex = 0;\r\n    var initRoopid = setInterval(function () {\r\n        prepare(false, appearIndex * 2);\r\n        appearIndex++;\r\n        if (appearIndex > 24) {\r\n            clearInterval(initRoopid);\r\n        }\r\n    }, 20);\r\n    setTimeout(function () {\r\n        _canvas.addEventListener(\"touchstart\", start);\r\n        _canvas.addEventListener(\"click\", start);\r\n        window.addEventListener(\"keydown\", startAndRemoveKeyEvent);\r\n    }, 500);\r\n};\r\nexports.default = run;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/run.ts?");

/***/ }),

/***/ "./src/showResult.ts":
/*!***************************!*\
  !*** ./src/showResult.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar drawScore_1 = __importDefault(__webpack_require__(/*! ./drawScore */ \"./src/drawScore.ts\"));\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\r\nvar drawResultScreen = function (_canvas, _ctx, _dt) {\r\n    _ctx.globalAlpha = 0.02 * Math.min(_dt, 50);\r\n    _ctx.fillStyle = index_1.colors.black;\r\n    _ctx.font = _canvas.width / 12 + \"px sans-serif\";\r\n    _ctx.textBaseline = \"bottom\";\r\n    _ctx.textAlign = \"center\";\r\n    _ctx.fillText(\"Game Over\", _canvas.width / 2, _canvas.height / 4);\r\n    _ctx.globalAlpha = 1;\r\n};\r\nvar drawResultScore = function (_canvas, _ctx, _dt, _t) {\r\n    _ctx.globalAlpha = 0.04 * Math.min(25, _dt);\r\n    _ctx.fillStyle = index_1.colors.black;\r\n    _ctx.font = _canvas.width / 15 + \"px sans-serif\";\r\n    _ctx.textBaseline = \"bottom\";\r\n    _ctx.textAlign = \"right\";\r\n    _ctx.fillText(\"Score : \", _canvas.width / 2, _canvas.height / 9 * 5);\r\n    _ctx.font = _canvas.width / 10 + \"px sans-serif\";\r\n    _ctx.textBaseline = \"bottom\";\r\n    _ctx.textAlign = \"left\";\r\n    _ctx.fillText(\"\" + _t, _canvas.width / 2, _canvas.height / 9 * 5);\r\n    _ctx.globalAlpha = 1;\r\n};\r\nvar drawContinueMessage = function (_canvas, _ctx, _dt) {\r\n    _ctx.globalAlpha = 0.04 * Math.min(25, _dt);\r\n    _ctx.fillStyle = index_1.colors.black;\r\n    _ctx.font = _canvas.width / 20 + \"px sans-serif\";\r\n    _ctx.textBaseline = \"middle\";\r\n    _ctx.textAlign = \"center\";\r\n    _ctx.fillText(\"- tap to continue -\", _canvas.width / 2, _canvas.height / 6 * 5);\r\n    _ctx.globalAlpha = 1;\r\n};\r\nvar showResult = function (_canvas, _ctx, _time, _player, _ground, _trees, _rocks) {\r\n    var removeEvent = function () {\r\n        _canvas.removeEventListener(\"click\", removeClickEvent);\r\n        _canvas.removeEventListener(\"touchstart\", removeTouchEvent);\r\n        window.removeEventListener(\"keydown\", removeKeyEvent);\r\n        var index = 0;\r\n        var disappearid = setInterval(function () {\r\n            index_1.defaultDraw(_canvas, _ctx, _ground, _player, _rocks, _trees);\r\n            drawResultScreen(_canvas, _ctx, 50 - index * 2);\r\n            drawResultScore(_canvas, _ctx, 25 - index, _time);\r\n            drawContinueMessage(_canvas, _ctx, 25 - index);\r\n            drawScore_1.default;\r\n            if (index > 24) {\r\n                clearInterval(disappearid);\r\n            }\r\n            index++;\r\n        }, 20);\r\n        setTimeout(function () {\r\n            index_1.run(_canvas, _ctx);\r\n        }, 700);\r\n    };\r\n    var removeClickEvent = function () {\r\n        removeEvent();\r\n    };\r\n    var removeTouchEvent = function () {\r\n        removeEvent();\r\n    };\r\n    var removeKeyEvent = function (e) {\r\n        if (e.key === \" \") {\r\n            removeEvent();\r\n        }\r\n    };\r\n    var dt = 0;\r\n    var intervalid = setInterval(function () {\r\n        index_1.defaultDraw(_canvas, _ctx, _ground, _player, _rocks, _trees, dt);\r\n        drawResultScreen(_canvas, _ctx, dt);\r\n        if (dt > 60) {\r\n            drawResultScore(_canvas, _ctx, dt - 60, _time);\r\n        }\r\n        if (dt > 95) {\r\n            drawContinueMessage(_canvas, _ctx, dt - 95);\r\n        }\r\n        if (dt > 130) {\r\n            _canvas.addEventListener(\"touchstart\", removeTouchEvent);\r\n            _canvas.addEventListener(\"click\", removeClickEvent);\r\n            window.addEventListener(\"keydown\", removeKeyEvent);\r\n            clearInterval(intervalid);\r\n        }\r\n        dt++;\r\n    }, 20);\r\n};\r\nexports.default = showResult;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/showResult.ts?");

/***/ }),

/***/ "./src/tree.ts":
/*!*********************!*\
  !*** ./src/tree.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Tree = /** @class */ (function () {\r\n    function Tree(_canvas, _ground, _t, _color, _left) {\r\n        var _this = this;\r\n        if (_left === void 0) { _left = -1; }\r\n        this.update = function (_canvas, _t) {\r\n            _this.speed = (5 + Math.floor(_t / 500)) / 400 * _canvas.width;\r\n            _this.left -= _this.speed;\r\n            _this.right -= _this.speed;\r\n        };\r\n        this.draw = function (ctx) {\r\n            ctx.globalAlpha = 0.5;\r\n            ctx.fillStyle = _this.color;\r\n            ctx.beginPath();\r\n            ctx.moveTo(_this.left, _this.bottom);\r\n            ctx.lineTo(_this.left + _this.width / 2, _this.top);\r\n            ctx.lineTo(_this.right, _this.bottom);\r\n            ctx.closePath();\r\n            ctx.fill();\r\n            ctx.globalAlpha = 1;\r\n        };\r\n        this.color = _color;\r\n        this.height = _canvas.height / 10 * (1 + Math.random());\r\n        this.width = this.height * 2 / Math.tan(Math.PI * 4 / 10);\r\n        this.top = _ground.top - this.height;\r\n        this.bottom = _ground.top;\r\n        this.left = _left === -1 ? _canvas.width : _left;\r\n        this.right = this.left + this.width;\r\n        this.speed = (5 + Math.floor(_t / 500)) / 400 * _canvas.width;\r\n    }\r\n    return Tree;\r\n}());\r\nexports.default = Tree;\r\n\n\n//# sourceURL=webpack://ts-practice-2/./src/tree.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;