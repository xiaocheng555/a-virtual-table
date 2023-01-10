(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["a-virtual-table"] = factory());
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return _root.Date.now();
  };

  var now_1 = now;

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  var _trimmedEndIndex = trimmedEndIndex;

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  var _baseTrim = baseTrim;

  /** Built-in value references. */
  var Symbol$1 = _root.Symbol;

  var _Symbol = Symbol$1;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto$1.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
  }

  var isSymbol_1 = isSymbol;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol_1(value)) {
      return NAN;
    }
    if (isObject_1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject_1(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = _baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var toNumber_1 = toNumber;

  /** Error message constants. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    wait = toNumber_1(wait) || 0;
    if (isObject_1(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;

      return maxing
        ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
        : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now_1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now_1());
    }

    function debounced() {
      var time = now_1(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  var debounce_1 = debounce;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject_1(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce_1(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  var throttle_1 = throttle;

  // 判断是否是滚动容器
  function isScroller(el) {
    var style = window.getComputedStyle(el, null);
    var scrollValues = ['auto', 'scroll'];
    return scrollValues.includes(style.overflow) || scrollValues.includes(style['overflow-y']);
  }

  // 获取父层滚动容器
  function getParentScroller(el) {
    var parent = el;
    while (parent) {
      if ([window, document, document.documentElement].includes(parent)) {
        return window;
      }
      if (isScroller(parent)) {
        return parent;
      }
      parent = parent.parentNode;
    }
    return parent || window;
  }

  // 获取容器滚动位置
  function getScrollTop(el) {
    return el === window ? window.pageYOffset : el.scrollTop;
  }

  // 获取容器高度
  function getOffsetHeight(el) {
    return el === window ? window.innerHeight : el.offsetHeight;
  }

  // 滚动到某个位置
  function scrollToY(el, y) {
    if (el === window) {
      window.scroll(0, y);
    } else {
      el.scrollTop = y;
    }
  }

  // 表格body class名称
  var TableBodyClassNames = ['.ant-table-scroll .ant-table-body', '.ant-table-fixed-left .ant-table-body-inner', '.ant-table-fixed-right .ant-table-body-inner'];
  var script = {
    inheritAttrs: false,
    name: 'a-virtual-table',
    props: {
      dataSource: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      columns: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      // key值，data数据中的唯一id
      keyProp: {
        type: String,
        "default": 'id'
      },
      // 每一行的预估高度
      itemSize: {
        type: Number,
        "default": 60
      },
      // 指定滚动容器
      scrollBox: {
        type: String
      },
      // 顶部和底部缓冲区域，值越大显示表格的行数越多
      buffer: {
        type: Number,
        "default": 100
      },
      // 滚动事件的节流时间
      throttleTime: {
        type: Number,
        "default": 10
      },
      // 是否获取表格行动态高度
      dynamic: {
        type: Boolean,
        "default": true
      },
      // 是否开启虚拟滚动
      virtualized: {
        type: Boolean,
        "default": true
      },
      // 是否是树形结构
      isTree: {
        type: Boolean,
        "default": false
      }
    },
    data: function data() {
      return {
        start: 0,
        end: undefined,
        sizes: {},
        // 尺寸映射（依赖响应式）
        renderData: [],
        // 兼容多选
        isCheckedAll: false,
        // 全选
        isCheckedImn: false,
        // 控制半选样式
        isHideAppend: false
      };
    },
    computed: {
      tableColumns: function tableColumns() {
        var _this = this;
        var h = this.$createElement;
        return this.columns.map(function (column) {
          // 兼容多选
          if (column.type === 'selection') {
            return _objectSpread2({
              title: function title() {
                return h("a-checkbox", {
                  "attrs": {
                    "checked": _this.isCheckedAll,
                    "indeterminate": _this.isCheckedImn
                  },
                  "on": {
                    "change": function change() {
                      return _this.onCheckAllRows(!_this.isCheckedAll);
                    }
                  }
                });
              },
              customRender: function customRender(text, row) {
                return h("a-checkbox", {
                  "attrs": {
                    "checked": row.$v_checked
                  },
                  "on": {
                    "change": function change() {
                      return _this.onCheckRow(row, !row.$v_checked);
                    }
                  }
                });
              },
              width: 60
            }, column);
          } else if (column.index) {
            // 兼容索引
            return _objectSpread2({
              customRender: function customRender(text, row, index) {
                var curIndex = _this.start + index;
                return typeof column.index === 'function' ? column.index(curIndex) : curIndex + 1;
              }
            }, column);
          }
          return column;
        });
      },
      // 计算出每个item（的key值）到滚动容器顶部的距离
      offsetMap: function offsetMap(_ref) {
        var keyProp = _ref.keyProp,
          itemSize = _ref.itemSize,
          sizes = _ref.sizes,
          dataSource = _ref.dataSource;
        if (!this.dynamic) return {};
        var res = {};
        var total = 0;
        for (var i = 0; i < dataSource.length; i++) {
          var key = dataSource[i][keyProp];
          res[key] = total;
          var curSize = sizes[key];
          var size = typeof curSize === 'number' ? curSize : itemSize;
          total += size;
        }
        return res;
      }
    },
    methods: {
      // 初始化数据
      initData: function initData() {
        var _this2 = this;
        // 是否是表格内部滚动
        this.isInnerScroll = false;
        this.scroller = this.getScroller();
        this.toTop = this.$el.getBoundingClientRect().top - this.scroller.getBoundingClientRect().top;

        // 首次需要执行2次handleScroll：因为第一次计算renderData时表格高度未确认导致计算不准确；第二次执行时，表格高度确认后，计算renderData是准确的
        this.handleScroll();
        this.$nextTick(function () {
          _this2.handleScroll();
        });
        // 监听事件
        this.onScroll = throttle_1(this.handleScroll, this.throttleTime);
        this.scroller.addEventListener('scroll', this.onScroll);
        window.addEventListener('resize', this.onScroll);
      },
      // 获取滚动元素
      getScroller: function getScroller() {
        var el;
        if (this.scrollBox) {
          el = document.querySelector(this.scrollBox);
          if (!el) throw new Error(" scrollBox prop: '".concat(this.scrollBox, "' is not a valid selector"));
          if (!isScroller(el)) console.warn("Warning! scrollBox prop: '".concat(this.scrollBox, "' is not a scroll element"));
          return el;
        }
        // 如果表格是固定高度，则获取表格内的滚动节点，否则获取父层滚动节点
        if (this.$attrs.scroll && this.$attrs.scroll.y) {
          this.isInnerScroll = true;
          return this.$el.querySelector('.ant-table-body');
        } else {
          return getParentScroller(this.$el);
        }
      },
      // 处理滚动事件
      handleScroll: function handleScroll() {
        if (!this.virtualized) return;

        // 更新当前尺寸（高度）
        this.updateSizes();
        // 计算renderData
        this.calcRenderData();
        // 计算位置
        this.calcPosition();
      },
      // 更新尺寸（高度）
      updateSizes: function updateSizes() {
        var _this3 = this;
        if (!this.dynamic) return;
        var rows = [];
        if (this.isTree) {
          // 处理树形表格，筛选出一级树形结构
          rows = this.$el.querySelectorAll('.ant-table-body .ant-table-row-level-0');
        } else {
          rows = this.$el.querySelectorAll('.ant-table-body .ant-table-tbody .ant-table-row');
        }
        Array.from(rows).forEach(function (row, index) {
          var item = _this3.renderData[index];
          if (!item) return;

          // 计算表格行的高度
          var offsetHeight = row.offsetHeight;
          // 表格行如果有扩展行，需要加上扩展内容的高度
          var nextEl = row.nextSibling;
          if (nextEl && nextEl.classList && nextEl.classList.contains('ant-table-expanded-row')) {
            offsetHeight += row.nextSibling.offsetHeight;
          }

          // 表格行如果有子孙节点，需要加上子孙节点的高度
          if (_this3.isTree) {
            var next = row.nextSibling;
            while (next && next.tagName === 'TR' && !next.classList.contains('ant-table-row-level-0')) {
              offsetHeight += next.offsetHeight;
              next = next.nextSibling;
            }
          }
          var key = item[_this3.keyProp];
          if (_this3.sizes[key] !== offsetHeight) {
            _this3.$set(_this3.sizes, key, offsetHeight);
            row._offsetHeight = offsetHeight;
          }
        });
      },
      // 计算只在视图上渲染的数据
      calcRenderData: function calcRenderData() {
        var scroller = this.scroller,
          buffer = this.buffer,
          data = this.dataSource;
        // 计算可视范围顶部、底部
        var top = getScrollTop(scroller) - buffer - this.toTop;
        var scrollerHeight = this.isInnerScroll ? this.$attrs.scroll.y : getOffsetHeight(scroller);
        var bottom = getScrollTop(scroller) + scrollerHeight + buffer - this.toTop;
        var start;
        var end;
        if (!this.dynamic) {
          start = top <= 0 ? 0 : Math.floor(top / this.itemSize);
          end = bottom <= 0 ? 0 : Math.ceil(bottom / this.itemSize);
        } else {
          // 二分法计算可视范围内的开始的第一个内容
          var l = 0;
          var r = data.length - 1;
          var mid = 0;
          while (l <= r) {
            mid = Math.floor((l + r) / 2);
            var midVal = this.getItemOffsetTop(mid);
            if (midVal < top) {
              var midNextVal = this.getItemOffsetTop(mid + 1);
              if (midNextVal > top) break;
              l = mid + 1;
            } else {
              r = mid - 1;
            }
          }

          // 计算渲染内容的开始、结束索引
          start = mid;
          end = data.length - 1;
          for (var i = start + 1; i < data.length; i++) {
            var offsetTop = this.getItemOffsetTop(i);
            if (offsetTop >= bottom) {
              end = i;
              break;
            }
          }
        }

        // 开始索引始终保持偶数，如果为奇数，则加1使其保持偶数【确保表格行的偶数数一致，不会导致斑马纹乱序显示】
        if (start % 2) {
          start = start - 1;
        }
        this.top = top;
        this.bottom = bottom;
        this.start = start;
        this.end = end;
        this.renderData = data.slice(start, end + 1);
        this.$emit('change', this.renderData, this.start, this.end);
      },
      // 计算位置
      calcPosition: function calcPosition() {
        var _this4 = this;
        var last = this.dataSource.length - 1;
        // 计算内容总高度
        var wrapHeight = this.getItemOffsetTop(last) + this.getItemSize(last);
        // 计算当前滚动位置需要撑起的高度
        var offsetTop = this.getItemOffsetTop(this.start);

        // 设置dom位置
        TableBodyClassNames.forEach(function (className) {
          var el = _this4.$el.querySelector(className);
          if (!el) return;

          // 创建wrapEl、innerEl
          if (!el.wrapEl) {
            var wrapEl = document.createElement('div');
            var innerEl = document.createElement('div');
            // 此处设置display为'inline-block'，是让div宽度等于表格的宽度，修复x轴滚动时右边固定列没有阴影的bug
            wrapEl.style.display = 'inline-block';
            innerEl.style.display = 'inline-block';
            wrapEl.appendChild(innerEl);
            innerEl.appendChild(el.children[0]);
            el.insertBefore(wrapEl, el.firstChild);
            el.wrapEl = wrapEl;
            el.innerEl = innerEl;
          }
          if (el.wrapEl) {
            // 设置高度
            el.wrapEl.style.height = wrapHeight + 'px';
            // 设置transform撑起高度
            el.innerEl.style.transform = "translateY(".concat(offsetTop, "px)");
            // 设置paddingTop撑起高度
            // el.innerEl.style.paddingTop = `${offsetTop}px`
          }
        });
      },
      // 获取某条数据offsetTop
      getItemOffsetTop: function getItemOffsetTop(index) {
        if (!this.dynamic) {
          return this.itemSize * index;
        }
        var item = this.dataSource[index];
        if (item) {
          return this.offsetMap[item[this.keyProp]] || 0;
        }
        return 0;
      },
      // 获取某条数据的尺寸
      getItemSize: function getItemSize(index) {
        if (index <= -1) return 0;
        var item = this.dataSource[index];
        if (item) {
          var key = item[this.keyProp];
          return this.sizes[key] || this.itemSize;
        }
        return this.itemSize;
      },
      // 【外部调用】更新
      update: function update() {
        // console.log('update')
        this.toTop = this.$el.getBoundingClientRect().top - this.scroller.getBoundingClientRect().top;
        this.handleScroll();
      },
      // 【外部调用】滚动到第几行
      // （不太精确：滚动到第n行时，如果周围的表格行计算出真实高度后会更新高度，导致内容坍塌或撑起）
      scrollTo: function scrollTo(index) {
        var _this5 = this;
        var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var item = this.dataSource[index];
        if (item && this.scroller) {
          this.updateSizes();
          this.calcRenderData();
          this.$nextTick(function () {
            var offsetTop = _this5.getItemOffsetTop(index);
            scrollToY(_this5.scroller, offsetTop);

            // 调用两次scrollTo，第一次滚动时，如果表格行初次渲染高度发生变化时，会导致滚动位置有偏差，此时需要第二次执行滚动，确保滚动位置无误
            if (!stop) {
              setTimeout(function () {
                _this5.scrollTo(index, true);
              }, 50);
            }
          });
        }
      },
      // 渲染全部数据
      renderAllData: function renderAllData() {
        var _this6 = this;
        this.renderData = this.dataSource;
        this.$emit('change', this.dataSource, 0, this.dataSource.length - 1);
        this.$nextTick(function () {
          // 清除撑起的高度和位置
          TableBodyClassNames.forEach(function (className) {
            var el = _this6.$el.querySelector(className);
            if (!el) return;
            if (el.wrapEl) {
              // 设置高度
              el.wrapEl.style.height = 'auto';
              // 设置transform撑起高度
              el.innerEl.style.transform = "translateY(".concat(0, "px)");
            }
          });
        });
      },
      // 执行update方法更新虚拟滚动，且每次nextTick只能执行一次【在数据大于100条开启虚拟滚动时，由于监听了data、virtualized会连续触发两次update方法：第一次update时，（updateSize）计算尺寸里的渲染数据（renderData）与表格行的dom是一一对应，之后会改变渲染数据（renderData）的值；而第二次执行update时，renderData改变了，而表格行dom未改变，导致renderData与dom不一一对应，从而位置计算错误，最终渲染的数据对应不上。因此使用每次nextTick只能执行一次来避免bug发生】
      doUpdate: function doUpdate() {
        var _this7 = this;
        if (this.hasDoUpdate) return; // nextTick内已经执行过一次就不执行
        if (!this.scroller) return; // scroller不存在说明未初始化完成，不执行

        // 启动虚拟滚动的瞬间，需要暂时隐藏el-table__append-wrapper里的内容，不然会导致滚动位置一直到append的内容处
        this.isHideAppend = true;
        this.update();
        this.hasDoUpdate = true;
        this.$nextTick(function () {
          _this7.hasDoUpdate = false;
          _this7.isHideAppend = false;
        });
      },
      // 多选：兼容表格clearSelection方法
      clearSelection: function clearSelection() {
        var _this8 = this;
        this.dataSource.forEach(function (row) {
          return _this8.$set(row, '$v_checked', false);
        });
        this.isCheckedAll = false;
        this.isCheckedImn = false;
        this.emitSelectionChange();
      },
      // 多选：兼容表格toggleRowSelection方法
      toggleRowSelection: function toggleRowSelection(row, selected) {
        var val = typeof selected === 'boolean' ? selected : !row.$v_checked;
        this.onCheckRow(row, val);
      },
      // 多选：兼容表格selection-change事件
      emitSelectionChange: function emitSelectionChange() {
        var selection = this.dataSource.filter(function (row) {
          return row.$v_checked;
        });
        this.$emit('selection-change', selection);
      },
      // 兼容多选：选择表格所有行
      onCheckAllRows: function onCheckAllRows(val) {
        var _this9 = this;
        val = this.isCheckedImn ? true : val;
        this.dataSource.forEach(function (row) {
          return _this9.$set(row, '$v_checked', val);
        });
        this.isCheckedAll = val;
        this.isCheckedImn = false;
        this.emitSelectionChange();
      },
      // 兼容多选：选择表格某行
      onCheckRow: function onCheckRow(row, value) {
        this.$set(row, '$v_checked', value);
        var checkedLen = this.dataSource.filter(function (row) {
          return row.$v_checked === true;
        }).length;
        if (checkedLen === 0) {
          this.isCheckedAll = false;
          this.isCheckedImn = false;
        } else if (checkedLen === this.dataSource.length) {
          this.isCheckedAll = true;
          this.isCheckedImn = false;
        } else {
          this.isCheckedAll = false;
          this.isCheckedImn = true;
        }
        this.emitSelectionChange();
      }
    },
    watch: {
      dataSource: function dataSource() {
        if (!this.virtualized) {
          this.renderAllData();
        } else {
          this.doUpdate();
        }
      },
      virtualized: {
        immediate: true,
        handler: function handler(val) {
          if (!val) {
            this.renderAllData();
          } else {
            this.doUpdate();
          }
        }
      }
    },
    created: function created() {
      var _this10 = this;
      this.$nextTick(function () {
        _this10.initData();
      });
    },
    mounted: function mounted() {
      var appendEl = this.$refs.append;
      this.$el.querySelector('.ant-table-body').appendChild(appendEl);
    },
    beforeDestroy: function beforeDestroy() {
      if (this.scroller) {
        this.scroller.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('resize', this.onScroll);
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [_c("a-table", _vm._g(_vm._b({
      attrs: {
        pagination: false,
        columns: _vm.tableColumns,
        "data-source": _vm.renderData
      },
      scopedSlots: _vm._u([_vm._l(Object.keys(_vm.$scopedSlots), function (slot) {
        return {
          key: slot,
          fn: function fn(text) {
            return [_vm._t(slot, null, null, _typeof(text) === "object" ? text : {
              text: text
            })];
          }
        };
      })], null, true)
    }, "a-table", _vm.$attrs, false), _vm.$listeners)), _vm._v(" "), _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.isHideAppend,
        expression: "!isHideAppend"
      }],
      ref: "append",
      staticClass: "ant-table-append"
    }, [_vm._t("append")], 2)], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

  return __vue_component__;

}));
