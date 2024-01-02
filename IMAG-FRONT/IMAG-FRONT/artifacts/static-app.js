(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/TableCell");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(21);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _requireUniversalModule = __webpack_require__(57);
Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});
var _reportChunks = __webpack_require__(59);
Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(28);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _hoistNonReactStatics = __webpack_require__(30);
var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);
var _context = __webpack_require__(29);
var _context2 = _interopRequireDefault(_context);
var _utils = __webpack_require__(22);
var _helpers = __webpack_require__(60);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
var hasBabelPlugin = false;
var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (false)
  );
};
var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};
function universal(asyncModule) {
  var _class, _temp;
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var userRender = opts.render,
    _opts$loading = opts.loading,
    Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
    _opts$error = opts.error,
    Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
    _opts$minDelay = opts.minDelay,
    minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
    _opts$alwaysDelay = opts.alwaysDelay,
    alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
    _opts$testBabelPlugin = opts.testBabelPlugin,
    testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
    _opts$loadingTransiti = opts.loadingTransition,
    loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
    options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);
  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);
    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;
        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }
          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
          error = state.error;
        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }
        this.setState(state);
      }
      // $FlowFixMe
    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
          addModule = _req.addModule,
          requireSync = _req.requireSync,
          requireAsync = _req.requireAsync,
          asyncOnly = _req.asyncOnly;
        var mod = void 0;
        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }
        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)
        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }
        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }
        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};
        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
          requireAsync = _req2.requireAsync,
          requireSync = _req2.requireSync;
        var mod = void 0;
        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }
        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};
        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
          requireSync = _req3.requireSync;
        var mod = requireSync(props);
        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }
        return mod;
      }
    }]);
    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);
      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));
      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;
        _this.handleAfter(state, isMount, isSync, isServer);
      };
      _this.state = _this.init(_this.props);
      // $FlowFixMe
      _this.state.error = null;
      return _this;
    }
    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;
        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
            requireSync = _req4.requireSync,
            requireAsync = _req4.requireAsync,
            shouldUpdate = _req4.shouldUpdate;
          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;
            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }
            this.handleBefore(false, !!mod);
            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }
            var state = {
              mod: mod
            };
            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }
            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
          isLoading = _props.isLoading,
          userError = _props.error,
          props = _objectWithoutProperties(_props, ['isLoading', 'error']);
        var _state = this.state,
          mod = _state.mod,
          error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
          requireSync = _req5.requireSync,
          shouldUpdate = _req5.shouldUpdate;
        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }
        return null;
      }
    }]);
    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(56)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/TableRow");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_3__);




var MyImage = function MyImage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.image),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    imgsrc = _useState2[0],
    handleImageErrored = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImage"], {
    alt: imgsrc,
    effect: "blur",
    src: imgsrc,
    scrollPosition: props.scrollPosition,
    width: props.width,
    height: props.height,
    threshold: 1,
    onError: function onError() {
      handleImageErrored('../static/avatar/default_avatar.jpg');
    }
    // placeholderSrc={props.tinyimage}
    // delayMethod={'debounce'}   
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__["trackWindowScroll"])(MyImage));

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Table");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/TableBody");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/TableContainer");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/TableHead");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _utils = __webpack_require__(22);
var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(58)("" + id);
  }
  return __webpack_require__('' + id);
};
exports["default"] = requireById;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(10);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(19);

// CONCATENATED MODULE: /workspace/IMAG-FRONT/src/components/Router.js

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(50);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(3);

// CONCATENATED MODULE: /workspace/IMAG-FRONT/src/components/Navbar.js






var useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    appBar: {
      backgroundColor: "#57247b",
      height: '60px',
      '& .MuiToolbar-gutters': {
        width: '1200px',
        margin: '0 auto',
        height: '60px'
      }
    },
    logoLg: defineProperty_default()({
      display: "none"
    }, theme.breakpoints.up("sm"), {
      display: "block"
    }),
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%'
    },
    toolbar_left: {
      flex: 1
    },
    toolbar_mid: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flex: 4
    },
    toolbar_mid_item: {},
    toolbar_right: {
      display: 'flex',
      justifyContent: 'flex-end',
      flex: 1
    }
  };
});
var itemsPre = ['HOME', 'PEOPLE', 'NEWS'];
var pathsPre = ['/', 'people', 'news'];
var itemsNext = ['PUBLICATIONS', 'COMPETITIONS', 'GRANTS', 'PATENTS', 'HONOR', 'RESOURCE', 'CONTACT'];
var pathsNext = ['publication', 'competition', 'grants', 'patent', 'honor', 'resource', 'contact'];
var Navbar_Navbar = function Navbar() {
  var classes = useStyles({
    open: open
  });
  var _useState = Object(external_react_["useState"])(0),
    _useState2 = slicedToArray_default()(_useState, 2),
    isHovering = _useState2[0],
    setIsHovering = _useState2[1];
  // const navStyle = {
  //   paddingLeft:'20px',
  //   paddingRight:'20px',
  //   lineHeight:'45px'
  // }

  var _React$useState = external_react_default.a.useState(false),
    _React$useState2 = slicedToArray_default()(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var anchorRef = external_react_default.a.useRef(null);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  //   if(isHovering===-1) setIsHovering(3)
  //   // else setIsHovering(3)
  // };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // function handleListKeyDown(event) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
  //     setOpen(false);
  //   }
  // }

  // return focus to the button when we transitioned from !open -> open
  var prevOpen = external_react_default.a.useRef(open);
  external_react_default.a.useEffect(function () {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);
  return /*#__PURE__*/external_react_default.a.createElement(core_["AppBar"], {
    position: "static",
    className: classes.appBar
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Toolbar"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.toolbar_mid
  }, itemsPre.map(function (item, key) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      key: key,
      style: {
        backgroundColor: isHovering == key ? "white" : ''
      },
      onMouseEnter: function onMouseEnter() {
        return setIsHovering(key);
      },
      onMouseLeave: function onMouseLeave() {
        return setIsHovering(-1);
      },
      onClick: function onClick() {
        return setIsHovering(key);
      }
    }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: pathsPre[key],
      style: {
        color: isHovering == key ? '#57247b' : 'white',
        paddingLeft: '20px',
        paddingRight: '20px',
        lineHeight: '64px',
        display: 'block'
      }
    }, item));
  }), itemsNext.map(function (item, key) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      key: key + 4,
      style: {
        backgroundColor: isHovering == key + 4 ? "white" : ''
      },
      onMouseEnter: function onMouseEnter() {
        return setIsHovering(key + 4);
      },
      onMouseLeave: function onMouseLeave() {
        return setIsHovering(-1);
      },
      onClick: function onClick() {
        return setIsHovering(key + 4);
      }
    }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
      to: pathsNext[key],
      style: {
        color: isHovering == key + 4 ? '#57247b' : 'white',
        paddingLeft: '20px',
        paddingRight: '20px',
        lineHeight: '64px',
        display: 'block'
      }
    }, item));
  })))));
};
/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: /workspace/IMAG-FRONT/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(1);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: /workspace/IMAG-FRONT/src/app.css
var app = __webpack_require__(68);

// CONCATENATED MODULE: /workspace/IMAG-FRONT/src/App.js











// Any routes that start with 'dynamic' will be treated as non-static routes
Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);
var App_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    grid: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
      alignItems: 'center'
    },
    page: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-start'
      //alignContent: 'space-around',
      // alignItems: 'flex-end',
      // width: '100%',
      // height: '870px',
    },

    header: {
      width: '1140px',
      margin: '0 auto'
    },
    title: {
      padding: '20px 0 25px',
      '& .content': {
        "float": 'left',
        paddingRight: '20px'
      }
    },
    content: {
      flex: 1,
      minHeight: "700px"
      // height: '100vh',
    },

    navbar: {
      // display: 'flex',
    },
    contact: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: "#57247b",
      marginTop: '50px'
    },
    contact_item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "20px"
    }
  };
});
function App() {
  var _useState = Object(external_react_["useState"])(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var classes = App_useStyles({
    open: open
  });
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.page
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Typography_default.a, {
    align: "center",
    variant: "h3",
    style: {
      color: "#57247b",
      height: "80%"
    }
  }, "\u5357\u4EAC\u7406\u5DE5\u5927\u5B66\u667A\u80FD\u5A92\u4F53\u5206\u6790\u5B9E\u9A8C\u5BA4")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Typography_default.a, {
    gutterBottom: true,
    style: {
      color: "#666666",
      marginBottom: '25px'
    }
  }, "Intelligent Media Analysis Group (IMAG), School of Computer Science, Nanjing University of Science and Technology"))))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.navbar
  }, /*#__PURE__*/external_react_default.a.createElement(components_Navbar, null)), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.content
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.contact
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.contact_item
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Typography_default.a, {
    style: {
      color: "#ffffff"
    }
  }, "Copyright \xA9 2022 \u5357\u4EAC\u7406\u5DE5\u5927\u5B66\u667A\u80FD\u5A92\u4F53\u5206\u6790\u5B9E\u9A8C\u5BA4. All rights reserved.")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Typography_default.a, {
    gutterBottom: true,
    style: {
      color: "#ffffff"
    }
  }, "Theme: ColorMag by ThemeGrill. Powered by WordPress.")))));
}
/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(21);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};
var _react = __webpack_require__(0);
var React = _interopRequireWildcard(_react);
var _requireById = __webpack_require__(18);
var _requireById2 = _interopRequireDefault(_requireById);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj["default"] = obj;
    return newObj;
  }
}
var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};
var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};
var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }
  return null;
};
var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};
var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};
var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};
var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }
    return createElement(Loading, props);
  };
};
var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};
var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};
var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};
var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};
var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component/src/effects/blur.css");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-photo-view");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("/workspace/IMAG-FRONT/node_modules/react-static/lib/browser");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var ReportContext = _react2["default"].createContext({
  report: function report() {}
});
exports["default"] = ReportContext;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Lazy_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var react_photo_view_dist_react_photo_view_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70);
/* harmony import */ var react_photo_view_dist_react_photo_view_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_photo_view_dist_react_photo_view_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_photo_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26);
/* harmony import */ var react_photo_view__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_photo_view__WEBPACK_IMPORTED_MODULE_13__);














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    root: {
      width: '1140px',
      margin: '0 auto'
    },
    title: {
      padding: '20px'
    },
    content: {
      width: '25%',
      "float": 'left',
      marginTop: '50px',
      alignItems: 'center',
      height: '200px'
    },
    pic: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '20px',
      '& img': {
        height: '100px',
        padding: '0 20px',
        margin: '0 auto'
      }
    }
  };
});
function Contact() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
    competition = _useRouteData.competition;
  console.log(competition.data[0]);
  // console.log(competition.data[0].pic.split('/').slice(-1)[0])
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h4",
    style: {
      paddingTop: '30px',
      paddingBottom: '50px'
    },
    align: "center"
  }, "Competitions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_10___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Table__WEBPACK_IMPORTED_MODULE_7___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_12___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null, "\u5E8F\u53F7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u83B7\u5956\u540D\u79F0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u83B7\u5956\u65F6\u95F4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u83B7\u5956\u4EBA\u5458"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u83B7\u5956\u7B49\u7EA7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u6307\u5BFC\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u5956\u72B6"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8___default.a, null, competition.data.map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_12___default.a, {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.participant), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.ranking), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.teachers), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_photo_view__WEBPACK_IMPORTED_MODULE_13__["PhotoProvider"], {
      maskOpacity: 0.5,
      bannerVisible: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_photo_view__WEBPACK_IMPORTED_MODULE_13__["PhotoView"], {
      src: "../static/competition_encd/".concat(row.id, "/").concat(row.pic.split('/').slice(-1)[0])
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        height: '50px'
      },
      src: "../static/competition_encd/".concat(row.id, "/tiny_").concat(row.pic.split('/').slice(-1)[0])
    })))));
  })))));
}
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '1140px',
      margin: '0 auto',
      padding: '20px'
    },
    title: {
      padding: '20px'
    },
    content: {
      width: '50%',
      // display:'table-cell',
      margin: '0 auto',
      textAlign: 'center',
      '& p': {
        fontSize: "20px"
      },
      '& img': {
        height: '200px'
      }
    }
  };
});
function Contact() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      color: "red",
      fontSize: "30px"
    }
  }, "\u62DB\u6536\u4FDD\u7814\u672C\u79D1\u751F\u548C\u5B9E\u4E60\u751F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62DB\u8058\u535A\u58EB\u540E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62DB\u8058\u52A9\u7406\u6559\u6388\u548C\u52A9\u7406\u7814\u7A76\u5458"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/contact/vx_contact.jpg",
    style: {
      paddingTop: '20px',
      margin: '0 auto'
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grants; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  table: {
    minWidth: 700
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  table_container: {
    width: '1140px',
    margin: '0 auto',
    padding: '20px'
  },
  contact: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: "#303440"
  },
  contact_item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "20px"
  }
});
function Grants() {
  var classes = useStyles();
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
    grants = _useRouteData.grants;
  console.log(grants);
  var rows = grants['data'];
  var rows_concat = [];
  for (var i = 0; i < rows.length; ++i) {
    rows_concat[i] = i + 1 + ". " + rows[i].pro_source + ' "' + rows[i].name + '"' + ", ";
    if (rows[i].prog_num != "") rows_concat[i] += '(No.' + rows[i].prog_num + '), ';
    rows_concat[i] += +moment__WEBPACK_IMPORTED_MODULE_4___default()(rows[i].start_time).format("YYYY") + '-' + moment__WEBPACK_IMPORTED_MODULE_4___default()(rows[i].deadline).format("YYYY") + ', ';
    // if(rows[i].cost!='' && rows[i].cost!=null) rows_concat[i]+=rows[i].cost+'万, '
    // else rows_concat[i] += rows[i].fund + ' 万( 直接经费 ), '

    rows_concat[i] += rows[i].role + '(' + rows[i].principal + ')';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h4",
    style: {
      paddingTop: '30px'
    }
  }, "Grants"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.table_container
  }, rows_concat.map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        color: "#000000",
        padding: "10px",
        lineHeight: '1.6',
        textAlign: 'left'
      }
    }, row));
  })));
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Honor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__);










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    root: {
      width: '1140px',
      margin: '0 auto'
    },
    title: {
      padding: '20px'
    },
    content: {
      width: '25%',
      "float": 'left',
      marginTop: '50px',
      alignItems: 'center',
      height: '200px'
    }
  };
});
function Honor() {
  var classes = useStyles();
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
    honor = _useRouteData.honor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h4",
    style: {
      paddingTop: '30px',
      paddingBottom: '50px'
    },
    align: "center"
  }, "Honor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Table__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null, "\u5E8F\u53F7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u8363\u8A89"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u59D3\u540D"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8___default.a, null, honor.data.map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.name));
  })))));
}
;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    root: {
      paddingTop: '30px',
      paddingBottom: '20px',
      backgroundColor: '#ffffff'
    },
    introduction: {
      width: '1140px',
      margin: '0 auto',
      paddingTop: '20px'
    },
    news: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '40px',
      '& li': {
        lineHeight: '2',
        fontSize: '22px'
      }
    }
  };
});
function Home() {
  var classes = useStyles();
  var news_data = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])();
  var len = news_data.detail_news.news.length;
  var news = news_data.detail_news.news.slice(0, Math.min(len, 3));
  console.log(news);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.introduction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: '34px',
      lineHeight: 1.2,
      paddingBottom: '18px',
      color: '#333333'
    }
  }, "IMAG@NJUST"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      lineHeight: '1.6',
      marginBottom: '15px',
      display: 'block',
      fontFamily: 'Open Sans',
      color: '#444444'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome to Intelligent Media Analysis Group (IMAG) in School of Computer Science, Nanjing University of Science and Technology. Our team focuses on analyzing the big media and aims to develop frontier technologies to address the analysis, understanding and management tasks of the big multimedia data. Besides, we also pay attention to the real-world applications, such as multimedia retrieval, face recognition and recommendation. For more information about our work, please refer to the publication page.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.news
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: '34px',
      lineHeight: 1.2,
      paddingBottom: '18px',
      color: '#333333',
      display: 'inline-block'
    }
  }, "Latest News"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      display: 'inline-block',
      fontSize: '20px',
      "float": 'right',
      color: '#57247b'
    },
    href: "/news"
  }, "\u66F4\u591A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      display: 'inline-block'
    }
  }, news.map(function (post, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      style: {
        margin: '0 20px',
        padding: '10px',
        boxShadow: '1px 1px 6px 2px #cccccc',
        display: 'inline-block',
        width: '27%',
        "float": 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/news/info/" + post.id,
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../static/news/1.png",
      style: {
        height: '180px',
        margin: '10px 0'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'inline-block',
        width: '100%',
        fontSize: '15px',
        height: '20px',
        margin: '5px 0',
        lineHeight: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      style: {
        color: '#282828'
      },
      href: "/news/info/" + post.id
    }, post.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        fontSize: '10px',
        lineHeight: '15px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical',
        color: '#777777'
      },
      dangerouslySetInnerHTML: {
        __html: post.content
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'inline-block',
        fontSize: '12px',
        color: '#d19e70'
      }
    }, " ", post.dat)));
  }))))));
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_3__);


;


// import p1 from '../public\static\news\1.png'
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '1140px',
      margin: '0 auto',
      padding: '20px'
    },
    news: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      '& li': {
        lineHeight: '2',
        fontSize: '22px'
      }
    }
  };
});
function Home() {
  var classes = useStyles();
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_3__["useRouteData"])(),
    detail_news = _useRouteData.detail_news;
  var display = detail_news["news"];
  // const display=[
  //   {dat:2020-1-1,title:'南京理工大学南京理工大学南京理工大学南京理工大学',content:'11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技'},
  //   {dat:2020-1-1,title:'南京理工大学南京理工大学南京理工大学南京理工大学',content:'11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技'},
  //   {dat:2020-1-1,title:'南京理工大学南京理工大学南京理工大学南京理工大学',content:'11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技'},
  //   // {dat:2020-1-1,title:'南京理工大学南京理工大学南京理工大学南京理工大学',},

  // ]
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.news
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutterBottom: true,
    variant: "h4",
    style: {
      color: "#333333",
      padding: "20px"
    }
  }, "News")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, display.map(function (post, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      style: {
        display: 'inline-block'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'inline-block',
        backgroundColor: '#f5d2b3',
        borderRadius: '10px 0px',
        width: '70px',
        fontSize: '12px',
        lineHeight: '25px',
        marginBottom: '13px',
        textAlign: 'center'
      }
    }, post.dat), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'inline-block',
        textAlign: 'center',
        height: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      style: {
        marginLeft: '20px',
        color: '#3b3b3b',
        fontSize: '16px',
        marginBottom: '10px',
        textAlign: 'center'
      },
      href: "/news/info/" + post.id
    }, post.title)));
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__);










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    root: {
      width: '1140px',
      margin: '0 auto'
    },
    title: {
      padding: '20px'
    },
    content: {
      width: '25%',
      "float": 'left',
      marginTop: '50px',
      alignItems: 'center',
      height: '200px'
    }
  };
});
function Patent() {
  var classes = useStyles();
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
    patent = _useRouteData.patent,
    softwareCopyright = _useRouteData.softwareCopyright;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h4",
    style: {
      paddingTop: '30px',
      paddingBottom: '50px'
    },
    align: "center"
  }, "Patent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Table__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null, "\u5E8F\u53F7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u4E13\u5229\u540D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u4E13\u5229\u6743\u6240\u6709\u4EBA"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8___default.a, null, patent.data.map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.patentee));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h4",
    style: {
      paddingTop: '30px',
      paddingBottom: '50px'
    },
    align: "center"
  }, "SoftwareCopyright"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Table__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null, "\u5E8F\u53F7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u8F6F\u8457\u540D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u8F6F\u8457\u4F5C\u8005"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    align: "center"
  }, "\u65F6\u95F4"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8___default.a, null, softwareCopyright.data.map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      align: "center"
    }, row.times));
  })))));
}
/* harmony default export */ __webpack_exports__["default"] = (Patent);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Lazy_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_7__);










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '1140px',
      margin: '0 auto',
      padding: '20px'
    },
    faculty: {
      width: '100%',
      margin: '0 auto'
    },
    facultyItemItem: {
      padding: '10px',
      height: '180px',
      width: '21%',
      display: 'inline-block',
      "float": 'left'
    },
    studentItemItem: {
      padding: '10px',
      height: '180px',
      width: '18%',
      display: 'inline-block',
      "float": 'left'
    },
    asso_faculty: {
      width: '100%'
    },
    PhD_Candidate: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    master_Candidate: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    img: {
      width: '100px',
      height: '100px'
    },
    card_root: {
      display: 'flex',
      height: '80%',
      alignItems: 'center'
    },
    details: {
      // display: 'flex',
      flexDirection: 'column',
      // width:'55%',
      position: 'relative',
      "float": 'right',
      margin: '0 auto'
    },
    content: {
      flex: '1 0 auto',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0px',
      paddingTop: '15px',
      height: '50%',
      // position:'relative',
      // float:'right',
      margin: 'auto',
      '& a': {
        fontSize: '16px'
      }
      // verticalAlign:'middle'
      // display:'flex'
    },

    stu_content: {
      flex: '1 0 auto',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0px',
      height: '50%',
      margin: 'auto',
      '& a': {
        fontSize: '16px'
      }
    },
    cover: {
      width: '45%'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    avatar: {
      width: '45%',
      display: 'block',
      // backgroundSize:'cover',
      // backgroundRepeat:'no-repeat',
      backgroundPosition: 'center',
      '& img': {
        // paddingTop:'20px'
      }
    },
    stu_avatar: {
      width: '100px',
      height: '120px',
      backgroundPosition: 'center',
      '& img': {
        paddingRight: '5px',
        paddingLeft: '5px'
      }
    }
  };
});
function People() {
  var classes = useStyles();
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_4__["useRouteData"])(),
    people = _useRouteData.people;
  var faculty = people['Faculty'];
  console.log(faculty);
  var master = people['Master'];
  var phD = people['phD'];
  var asso_faculty = people['Associated_Faculty'];

  // console.log(people)
  // console.log(images)
  // console.log(imageList);
  // const srcs = {};

  // for(let i = 0; i < imageList.length; ++ i) {
  //   // console.log(imageList[i].split('/')[imageList[i].split('/').length - 1]);
  //   const src = Buffer.from(images[imageList[i].split('/')[imageList[i].split('/').length - 1]], "binary");
  //   srcs[imageList[i].split('/')[imageList[i].split('/').length - 1]] = src;
  // }
  // console.log(srcs)
  // console.log(imageList)
  // console.log(images)
  // console.log(faculty);
  // console.log(master)
  // console.log(asso_faculty);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutterBottom: true,
    variant: "h4",
    style: {
      color: "#333333",
      paddingTop: "20px"
    },
    align: "center"
  }, "People"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.faculty
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutterBottom: true,
    variant: "h5",
    style: {
      color: "#333333",
      paddingLeft: '10px'
    }
  }, "Faculty")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.facultyItem
  }, faculty.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.facultyItemItem,
      key: post.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: classes.card_root
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.stu_avatar
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Lazy_loading__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      image: "../static/avatar/".concat(post.account, ".jpg"),
      scrollPosition: typeof window !== 'undefined' ? window.scrollY : '',
      width: 100,
      height: 120,
      tinyimage: "../static/tiny-avatar/".concat(post.account, ".jpg")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.details
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
      className: classes.content
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
      component: "h6",
      variant: "h5",
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: {
        pathname: "/people/user/".concat(post.account),
        state: {
          type: 'cn'
        }
      }
    }, post.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
      component: "h6",
      variant: "h5",
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: {
        pathname: "/people/user/".concat(post.account),
        state: {
          type: 'en'
        }
      }
    }, post.Eng_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "subtitle1",
      color: "textSecondary",
      align: "center"
    }, post.job_title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.controls
    }))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.faculty
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutterBottom: true,
    variant: "h5",
    style: {
      color: "#333333",
      paddingLeft: '10px'
    }
  }, "Associated Faculty")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.facultyItem
  }, asso_faculty.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.facultyItemItem,
      key: post.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: classes.card_root
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.stu_avatar
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Lazy_loading__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      image: "../static/avatar/".concat(post.account, ".jpg"),
      scrollPosition: typeof window !== 'undefined' ? window.scrollY : '',
      width: 100,
      height: 120,
      tinyimage: "../static/tiny-avatar/".concat(post.account, ".jpg")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.details
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
      className: classes.content
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
      component: "h6",
      variant: "h5",
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: {
        pathname: "/people/user/".concat(post.account),
        state: {
          type: 'cn'
        }
      }
    }, post.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
      component: "h6",
      variant: "h5",
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: {
        pathname: "/people/user/".concat(post.account),
        state: {
          type: 'en'
        }
      }
    }, post.Eng_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "subtitle1",
      color: "textSecondary",
      align: "center"
    }, post.job_title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.controls
    }))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.asso_faculty
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutterBottom: true,
    variant: "h5",
    style: {
      color: "#333333",
      paddingTop: '20px',
      paddingLeft: '10px'
    }
  }, "PhD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.facultyItem
  }, phD.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.studentItemItem,
      key: post.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: classes.card_root
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.stu_avatar
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Lazy_loading__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      image: "../static/avatar/".concat(post.account, ".jpg"),
      scrollPosition: typeof window !== 'undefined' ? window.scrollY : '',
      width: 100,
      height: 120
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.details
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
      className: classes.stu_content
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
      component: "h5",
      variant: "subtitle1",
      align: "center"
    }, post.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "subtitle1",
      color: "textSecondary",
      align: "center",
      style: {
        paddingLeft: '10px',
        wordBreak: 'break-word'
      }
    }, post.Eng_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.controls
    }))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.asso_faculty
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutterBottom: true,
    variant: "h5",
    style: {
      color: "#333333",
      paddingTop: '20px',
      paddingLeft: '10px'
    }
  }, "Master")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.facultyItem
  }, master.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.studentItemItem,
      key: post.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: classes.card_root
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.stu_avatar
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Lazy_loading__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      image: "../static/avatar/".concat(post.account, ".jpg"),
      scrollPosition: typeof window !== 'undefined' ? window.scrollY : '',
      width: 100,
      height: 120
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.details
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
      className: classes.stu_content
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
      component: "h6",
      variant: "subtitle1",
      align: "center"
    }, post.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "subtitle1",
      color: "textSecondary",
      align: "center",
      style: {
        paddingLeft: '10px',
        wordBreak: 'break-word'
      }
    }, post.Eng_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.controls
    }))));
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = (People);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Conference; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  table: {
    minWidth: 700
  },
  root: {
    width: '1140px',
    margin: '0 auto',
    padding: '20px'
  },
  table_container: {},
  contact: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: "#303440"
  },
  contact_item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "20px"
  }
});
function Conference() {
  var classes = useStyles();
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
    publication = _useRouteData.publication;
  var rows = publication['data'];
  var rows_concat = [];
  for (var i = 0; i < rows.length; ++i) {
    if ('conf_name' in rows[i]) {
      rows_concat[i] = "[" + (rows.length - i) + "] " + rows[i].author + ". " + rows[i].name + "." + rows[i].conf_name + '. ' + rows[i].page;
    } else {
      rows_concat[i] = "[" + (rows.length - i) + "] " + rows[i].author + ".  " + rows[i].name + " " + rows[i].jn_name + '. ' + rows[i].page;
    }
    if ('dat' in rows[i] && rows[i].dat != '' && rows[i].dat != null) {
      rows_concat[i] += '(' + rows[i].dat + ')';
    }
  }
  //   console.log(rows_concat)

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h4",
    style: {
      paddingTop: '30px'
    },
    align: "center"
  }, "Publications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.table_container
  }, rows_concat.map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        color: "#000000",
        padding: "10px",
        lineHeight: '1.6',
        textAlign: 'left'
      }
    }, row));
  })));
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Patent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    width: '1140px',
    margin: '0 auto',
    padding: '20px'
  },
  table_container: {},
  contact: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: "#303440"
  },
  contact_item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "20px"
  }
});
function Patent() {
  var classes = useStyles();
  var Datasets_concat = ['NUS-WIDE-128 Dataset', 'ACIP (downloads)'];
  var Datasets_href = ['/resource/NUS-wide', 'https://pan.baidu.com/s/1gBJW-gM-AhrN3YkiKgjCvQ?pwd=happ'];
  var Links_concat = ['媒体计算课件 (downloads)', 'DeepLearning AI', '斯坦福大学机器学习公开课', 'OpenCV 教程', '面向科学计算的MATLAB和Simulink – MathWorks', 'vlfeat使用教程', 'LIBLINEAR — A Library for Large Linear Classification', 'Distributed Machine Learning Common'];
  var Links_href = ['../static/resource_file/媒体计算基础-课件.zip', 'https://www.coursera.org/specializations/deep-learning', 'https://www.coursera.org/specializations/machine-learning-introduction', 'https://opencv.org/', 'https://ww2.mathworks.cn/', 'http://www.vlfeat.org/', 'https://www.csie.ntu.edu.tw/~cjlin/liblinear/', 'http://dmlc.ml/'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    style: {
      paddingTop: '30px'
    },
    align: "center"
  }, "Resource"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.table_container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h5",
    style: {
      paddingTop: '30px'
    },
    align: "left"
  }, "Datasets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%',
      height: '2px',
      borderTop: '1px solid #999',
      clear: 'both'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: '150px'
    }
  }, Datasets_concat.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        lineHeight: '1.6',
        textAlign: 'left'
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: Datasets_href[index]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, item)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h5",
    style: {
      paddingTop: '30px'
    },
    align: "left"
  }, "Links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%',
      height: '2px',
      borderTop: '1px solid #999',
      clear: 'both'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: '150px'
    }
  }, Links_concat.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        lineHeight: '1.6',
        textAlign: 'left'
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: Links_href[index],
      download: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, item)));
  }))));
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Lazy_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '1140px',
      margin: '0 auto'
    },
    facultyItemItem: {
      display: 'inline-block'
    },
    card_root: {
      width: "900px",
      minHeight: '240px',
      alignItems: 'center',
      verticalAlign: 'top',
      display: 'inline-block'
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flex: '1 0 auto',
      alignItems: "space-between"
    },
    cover: {
      width: 240
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    },
    avatar: {
      paddingLeft: '5px',
      display: 'inline-block'
    }
  };
});
function User() {
  var classes = useStyles();
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_4__["useRouteData"])(),
    userInfo = _useRouteData.userInfo;
  // console.log(userInfo)
  var stateparams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useLocation"])();
  // console.log(stateparams)
  var type = stateparams.state != undefined ? stateparams.state.type : 'cn';
  // console.log('type' in stateparams.state)
  var journals = userInfo;
  var info = userInfo['info'];
  console.log(info);
  var profile = info['info']['profile'];
  var profile_c = info['info']['profile_c'];
  var journals_display = [];
  var journals_map = userInfo['info']['journal'];
  for (var i = 0; i < journals_map.length; ++i) {
    if ('conf_name' in journals_map[i]) {
      journals_display[i] = journals_map[i].name + '. ' + journals_map[i].author + ". (" + journals_map[i].conf_name + ") ." + journals_map[i].authors;
    } else {
      journals_display[i] = journals_map[i].name + '. ' + journals_map[i].author + ". (" + journals_map[i].jn_name + ") ." + journals_map[i].authors;
    }
    // if ('dat' in rows[i]&&rows[i].dat!=''&&rows[i].dat!=null){
    //     rows_concat[i]+='('+rows[i].dat+')'
    // }
  }

  console.log(journals_display);
  var projects_map = userInfo['info']['project'];
  console.log(projects_map);
  var projects_display = [];
  var display_item;
  for (var _i = 0; _i < projects_map.length; ++_i) {
    display_item = projects_map[_i].pro_source + ' "' + projects_map[_i].name + '", ';
    if (projects_map[_i].prog_num != "") display_item += '(No.' + projects_map[_i].prog_num + '), ';
    display_item += moment__WEBPACK_IMPORTED_MODULE_7___default()(projects_map[_i].start_time).format("YYYY") + '-' + moment__WEBPACK_IMPORTED_MODULE_7___default()(projects_map[_i].deadline).format("YYYY") + ', ';
    // if (projects_map[i].cost!=''&&projects_map[i].cost!=None) display_item+=projects_map[i].cost+'万'
    // else display_item+=projects_map[i].fund+' 万( 直接经费 ), '
    if (projects_map[_i].principal == info['info'].name) display_item += projects_map[_i].role;else display_item += '参与';
    projects_display[_i] = display_item;
  }
  // console.log(projects_display)
  var honors_map = journals['info']['honor'];
  // console.log(honors_map)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(type == 'cn' ? 'true' : 'false'),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    chinese = _useState2[0],
    setChinese = _useState2[1];
  // console.log(chinese)
  var c_str = "中文版";
  var e_str = "English Version";
  var handleClick = function handleClick() {
    var change = chinese == 'true' ? 'false' : 'true';
    setChinese(change);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h1",
    variant: "h5",
    align: "center",
    style: {
      paddingBottom: '20px',
      paddingTop: '20px'
    }
  }, chinese == 'true' ? info.info.name : info.info.Eng_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.facultyItemItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.avatar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Lazy_loading__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    image: "../../../static/avatar/".concat(userInfo.id, ".jpg"),
    width: 200,
    height: 240
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: classes.card_root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.details
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "subtitle1",
    color: "textSecondary",
    style: {}
  }, chinese == 'true' ? profile_c : profile, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "javascript:void(0)",
    onClick: handleClick
  }, chinese == 'false' ? c_str : e_str))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.controls
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.table_container
  }, journals_display && journals_display.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h1",
    variant: "h5",
    align: "left",
    style: {
      paddingBottom: '20px',
      paddingTop: '20px'
    }
  }, '论文') : '', journals_display && journals_display.length > 0 ? journals_display.map(function (journal, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index,
      style: {
        padding: '10px',
        color: "#000000"
      }
    }, journal);
  }) : '', projects_display && projects_display.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h1",
    variant: "h5",
    align: "left",
    style: {
      paddingBottom: '20px',
      paddingTop: '20px'
    }
  }, '项目') : '', projects_display && projects_display.length > 0 ? projects_display.map(function (journal, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index,
      style: {
        padding: '10px',
        color: "#000000"
      }
    }, journal);
  }) : ''));
}
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    root: {
      width: '1140px',
      margin: '0 auto',
      padding: '20px'
    },
    sub_title: {
      borderBottom: '1px solid #ececec',
      fontSize: '14px',
      padding: '10px 0',
      textAlign: 'center'
    },
    content: {
      '& p': {
        fontSize: '16px',
        lineHeight: '2',
        textIndent: '2em',
        textAlign: 'justify',
        color: '#000',
        '& img': {
          width: '70%',
          paddingTop: '10px',
          paddingBottom: '10px',
          paddingLeft: "calc(15% - 32px)"
        }
      }
    }
  };
});
function newsPage() {
  var news = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])().newItem;
  // console.log(news)
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      textAlign: 'center'
    }
  }, news.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sub_title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      margin: '0 10px'
    }
  }, "\u53D1\u5E03\u65F6\u95F4\uFF1A", news.dat), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      margin: '0 10px'
    }
  }, "\u4F5C\u8005\uFF1A", news.publisher)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.content,
    dangerouslySetInnerHTML: {
      __html: news.content
    }
  }));
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Patent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    width: '1140px',
    margin: '0 auto',
    padding: '20px'
  },
  table_container: {},
  contact: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: "#303440"
  },
  contact_item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "20px"
  }
});
function Patent() {
  var classes = useStyles();
  var Datasets_introductions = ['(1) 269,648 images and the associated tags from Flickr, with a total number of 5,018 unique tags.', '(2) Six types of low-level features extracted from these images, including 64-D color histogram, 144-D color correlogram, 73-D edge direction histogram, 128-D wavelet texture, 225-D block-wise color moments and 500-D bag of words based on SIFT descriptions.', '(3) Ground-truth for 128 concepts that can be used for evaluation.', '(4) User information of 247,849 images.'];
  var Links_concat = ['ConceptsList.rar (downloads)', 'Groundtruth.rar (downloads)', 'Flickr/image data', 'ImageList.rar (downloads)', 'imgLabes.rar (downloads)', 'Low_Level_Features', 'NUS_WID_Tags.rar (downloads)'];
  var Links_href = ['../static/resource_file/ConceptsList.rar', '../static/resource_file/Groundtruth.rar', 'https://pan.baidu.com/s/1kntqUK9a_OK31oZ_3rSbYQ', '../static/resource_file/ImageList.rar', '../static/resource_file/imgLabes.rar', 'https://pan.baidu.com/s/1yl-yywIYHsEgUcEf3LD0KA', '../static/resource_file/NUS_WID_Tags.zip'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    style: {
      paddingTop: '30px'
    },
    align: "center"
  }, "NUS-wide-128"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.table_container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h5",
    style: {
      paddingTop: '30px',
      paddingBottom: '20px'
    },
    align: "left"
  }, "Introduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%',
      height: '2px',
      borderTop: '1px solid #999',
      clear: 'both'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "NUW-WIDE-128: A Real-World Web Image Database. The dataset is based on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://lms.comp.nus.edu.sg/research/NUS-WIDE.htm"
  }, "NUS-WIDE"), " and includes:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: '150px'
    }
  }, Datasets_introductions.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        lineHeight: '1.6',
        textAlign: 'left'
      }
    }, " ", item);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h5",
    style: {
      paddingTop: '30px',
      paddingBottom: '20px'
    },
    align: "left"
  }, "Download"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%',
      height: '2px',
      borderTop: '1px solid #999',
      clear: 'both'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: '150px'
    }
  }, Links_concat.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        lineHeight: '1.6',
        textAlign: 'left'
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: Links_href[index]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, item)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h5",
    style: {
      paddingTop: '30px',
      paddingBottom: '20px'
    },
    align: "left"
  }, "Citation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%',
      height: '2px',
      borderTop: '1px solid #999',
      clear: 'both'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you make use of the NUS-WIDE-128 dataset in any form, please cite the following reference."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      lineHeight: '1.6',
      paddingBottom: '5px'
    },
    dangerouslySetInnerHTML: {
      __html: '<p>@article{tang2017tri,<br>title={Tri-Clustered Tensor Completion for Social-Aware Image Tag Refinement},<br>author={Tang, Jinhui and Shu, Xiangbo and Qi, Guo-Jun and Li, Zechao and Wang, Meng and Yan, Shuicheng and Jain, Ramesh},<br>journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},<br>year={2017},<br>doi={10.1109/TPAMI.2016.2608882},<br>publisher={IEEE}<br>}</p>'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      lineHeight: '1.6',
      paddingBottom: '20px'
    },
    dangerouslySetInnerHTML: {
      __html: '<p>@article{tang2016generalized,<br>title={Generalized Deep Transfer Networks for Knowledge Propagation in Heterogeneous Domains},<br>author={Tang, Jinhui and Shu, Xiangbo and and Li, Zechao and Qi, Guo-Jun and Wang, Jingdong},<br>journal={ACM Transactions on Multimedia Computing, Communications, and Applications},<br>volume = {12},<br>number = {4s},<br>year={2016}<br>}</p>'
    }
  }));
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(0));
var _reactStatic = __webpack_require__(6);
var _router = __webpack_require__(19);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
    userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
          rest = _objectWithoutProperties(_ref2, ["children"]);
        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();
        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };
        var renderedChildren = /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location

        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return /*#__PURE__*/(
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};
exports["default"] = _default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(0));
var _reactStatic = __webpack_require__(6);
var _reactRouterDom = __webpack_require__(11);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var Location = (0, _reactRouterDom.withRouter)(function (_ref) {
  var children = _ref.children,
    location = _ref.location;
  return children(location);
});
var _default = function _default(_ref2) {
  var _ref2$RouterProps = _ref2.RouterProps,
    userRouterProps = _ref2$RouterProps === void 0 ? {} : _ref2$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref3) {
        var children = _ref3.children;
        var Router;
        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();
        var routerProps = {
          basename: basepath // Required
        }; // Test for document to detect the node stage

        if (typeof document !== 'undefined') {
          // If in the browser, just use the browser router
          Router = _reactRouterDom.BrowserRouter;
        } else {
          Router = _reactRouterDom.StaticRouter;
          routerProps.location = staticInfo.path; // Required

          routerProps.context = {}; // Required
        }

        return /*#__PURE__*/_react["default"].createElement(PreviousRoot, null, /*#__PURE__*/_react["default"].createElement(Router, _extends({}, routerProps, userRouterProps), children));
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return /*#__PURE__*/_react["default"].createElement(Location, null, function (location) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({}, props, {
            location: location
          }));
        });
      };
    }
  };
};
exports["default"] = _default;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(54);
module.exports = __webpack_require__(61);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-dynamic-require */
var plugins = __webpack_require__(53)["default"];
var _require = __webpack_require__(27),
  registerPlugins = _require.registerPlugins;
registerPlugins(plugins);
if (false) {}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_react_router_browser_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_react_router_browser_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_react_router_browser_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports



// Plugins
var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-react-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_react_router_browser_api_js__WEBPACK_IMPORTED_MODULE_1___default()({})
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}];

// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-dynamic-require */
var _require = __webpack_require__(27),
  registerTemplates = _require.registerTemplates;
var _require2 = __webpack_require__(55),
  templates = _require2["default"],
  notFoundTemplate = _require2.notFoundTemplate;
registerTemplates(templates, notFoundTemplate);
if (false) {}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);






























Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/competition.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/competition */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/competition.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/competition";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/competition.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/contact */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/contact";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/contact.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/grants.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/grants */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/grants.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/grants";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/grants.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/honor.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/honor */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/honor.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/honor";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/honor.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 38))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/index.js';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/news.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/news */).then(__webpack_require__.bind(null, 39))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/news.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/news";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/pages/news.js';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/patent.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/patent */).then(__webpack_require__.bind(null, 40))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/patent.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(40);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/patent";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/pages/patent.js';
var t_8 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/people",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/people */).then(__webpack_require__.bind(null, 41))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/people');
  },
  resolve: function resolve() {
    return /*require.resolve*/(41);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/people";
  }
}), universalOptions);
t_8.template = '__react_static_root__/src/pages/people';
var t_9 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/publication.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/publication */).then(__webpack_require__.bind(null, 42))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/publication.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(42);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/publication";
  }
}), universalOptions);
t_9.template = '__react_static_root__/src/pages/publication.js';
var t_10 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/resource.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/resource */).then(__webpack_require__.bind(null, 43))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/resource.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(43);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/resource";
  }
}), universalOptions);
t_10.template = '__react_static_root__/src/pages/resource.js';
var t_11 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/User",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/User */).then(__webpack_require__.bind(null, 44))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/User');
  },
  resolve: function resolve() {
    return /*require.resolve*/(44);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/User";
  }
}), universalOptions);
t_11.template = '__react_static_root__/src/containers/User';
var t_12 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/newsPage",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/newsPage */).then(__webpack_require__.bind(null, 45))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/newsPage');
  },
  resolve: function resolve() {
    return /*require.resolve*/(45);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/newsPage";
  }
}), universalOptions);
t_12.template = '__react_static_root__/src/containers/newsPage';
var t_13 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/NUS-wide",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/NUS-wide */).then(__webpack_require__.bind(null, 46))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/NUS-wide');
  },
  resolve: function resolve() {
    return /*require.resolve*/(46);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/NUS-wide";
  }
}), universalOptions);
t_13.template = '__react_static_root__/src/containers/NUS-wide';

// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/competition.js': t_1,
  '__react_static_root__/src/pages/contact.js': t_2,
  '__react_static_root__/src/pages/grants.js': t_3,
  '__react_static_root__/src/pages/honor.js': t_4,
  '__react_static_root__/src/pages/index.js': t_5,
  '__react_static_root__/src/pages/news.js': t_6,
  '__react_static_root__/src/pages/patent.js': t_7,
  '__react_static_root__/src/pages/people': t_8,
  '__react_static_root__/src/pages/publication.js': t_9,
  '__react_static_root__/src/pages/resource.js': t_10,
  '__react_static_root__/src/containers/User': t_11,
  '__react_static_root__/src/containers/newsPage': t_12,
  '__react_static_root__/src/containers/NUS-wide': t_13
});
// Not Found Template
var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
exports["default"] = requireUniversalModule;
var _utils = __webpack_require__(22);
var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();
function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
    _options$timeout = options.timeout,
    timeout = _options$timeout === undefined ? 15000 : _options$timeout,
    onLoad = options.onLoad,
    onError = options.onError,
    isDynamic = options.isDynamic,
    modCache = options.modCache,
    promCache = options.promCache,
    usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
    path = config.path,
    resolve = config.resolve,
    load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';
  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (!exp) {
      var mod = void 0;
      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }
      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }
    return exp;
  };
  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);
      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };
      var request = load(props, {
        resolve: resolve,
        reject: reject
      });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };
  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;
          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }
      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };
  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };
  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}
var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};
var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};
var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};
var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }
    return resultingConfig;
  }
  var load = typeof universalConfig === 'function' ? universalConfig :
  // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 18,
	"./": 18,
	"./index": 18,
	"./index.js": 18
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 58;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(21);
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(28);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _context = __webpack_require__(29);
var _context2 = _interopRequireDefault(_context);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);
  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);
    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));
    _this.state = {
      report: props.report
    };
    return _this;
  }
  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);
  return ReportChunks;
}(_react2["default"].Component);
ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;
var _hoistNonReactStatics = __webpack_require__(30);
var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
var _index = __webpack_require__(8);
var _index2 = _interopRequireDefault(_index);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;
  if (!state.error) {
    state.error = null;
  }
  return __handleAfter(props, state, isMount, isSync, isServer);
};

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */
var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
    error = state.error;
  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });
    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }
  return state;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(31);
var _interopRequireWildcard = __webpack_require__(32);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(0));
var _useStaticInfo = __webpack_require__(62);
var _Suspense = _interopRequireDefault(__webpack_require__(63));

/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500
React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];
var App = __webpack_require__(66)["default"];
var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};
exports["default"] = _default;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("/workspace/IMAG-FRONT/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(32);
var _interopRequireDefault = __webpack_require__(31);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(64));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(65));
var React = _interopRequireWildcard(__webpack_require__(0));
var OriginalSuspense = React.Suspense;
function Suspense(_ref) {
  var key = _ref.key,
    children = _ref.children,
    rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}
var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);




// Your top level component


// Export your top level component as JSX (for static rendering)
/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

// Render your app
if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;
  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  };

  // Render!
  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(67)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule);
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 1rem;\n}\n", ""]);



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);
      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list

  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }
    var alreadyImportedModules = {};
    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }
    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }
        list.push(item);
      }
    }
  };
  return list;
};
function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }
  return [content].join('\n');
} // Adapted from convert-source-map (MIT)

function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("react-photo-view/dist/react-photo-view.css");

/***/ })
/******/ ]);
});