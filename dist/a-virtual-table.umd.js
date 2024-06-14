(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ant-design-vue/lib/checkbox'), require('ant-design-vue/lib/table'), require('ant-design-vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'ant-design-vue/lib/checkbox', 'ant-design-vue/lib/table', 'ant-design-vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["a-virtual-table"] = {}, global.Checkbox, global.Table, global.antDesignVue));
})(this, (function (exports, Checkbox, Table, antDesignVue) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Checkbox__default = /*#__PURE__*/_interopDefaultLegacy(Checkbox);
  var Table__default = /*#__PURE__*/_interopDefaultLegacy(Table);

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
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
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
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
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

  // 获取容器滚动位置
  function getScrollLeft(el) {
    return el === window ? window.pageXOffset : el.scrollLeft;
  }

  // 设置容器滚动位置
  function setScrollTop(el, pos) {
    return el === window ? window.scroll(window.pageXOffset, pos) : el.scrollTop = pos;
  }

  // 设置容器滚动位置
  function setScrollLeft(el, pos) {
    return el === window ? window.scroll(pos, window.pageYOffset) : el.scrollLeft = pos;
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

  // 判断dom是否有x轴滚动条
  function hasScrollX(el) {
    return el.scrollWidth > el.clientWidth;
  }

  // 表格body class名称
  var TableBodyClassNames = ['.ant-table-scroll .ant-table-body', '.ant-table-fixed-left .ant-table-body-inner', '.ant-table-fixed-right .ant-table-body-inner'];
  var checkOrder = 0; // 多选：记录多选选项改变的顺序

  var script$1 = {
    inheritAttrs: false,
    name: 'a-virtual-table',
    components: {
      ACheckbox: Checkbox__default["default"],
      ATable: Table__default["default"]
    },
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
    provide: function provide() {
      return {
        virtualTable: this
      };
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
      getSlotValue: function getSlotValue(text, record, index) {
        if (_typeof(text) === 'object' && text.selectedKeys) {
          console.log('text', text);
          return text;
        }
        for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          rest[_key - 3] = arguments[_key];
        }
        return typeof record === 'number' ? _objectSpread2({
          record: text,
          index: record,
          $index: this.start + record
        }, rest) : _objectSpread2({
          text: text,
          record: record,
          index: index,
          $index: this.start + index
        }, rest);
      },
      // 初始化数据
      initData: function initData() {
        var _this2 = this;
        // 是否是表格内部滚动
        this.isInnerScroll = false;
        // 滚动容器滚动位置【0-滚动容器top；1-滚动容器left；2-表格滚动容器top；3-表格滚动容器left】
        this.scrollPos = [0, 0, 0, 0];
        // 组件是否deactivated状态
        this.isDeactivated = false;
        this.scroller = this.getScroller();
        this.setToTop();
        this.recordTablePos();

        // 首次需要执行2次handleScroll：因为第一次计算renderData时表格高度未确认导致计算不准确；第二次执行时，表格高度确认后，计算renderData是准确的
        this.handleScroll();
        this.$nextTick(function () {
          _this2.handleScroll();
        });
        // 监听事件
        this.onScroll = throttle_1(this.handleScroll, this.throttleTime);
        this.scroller.addEventListener('scroll', this.onScroll, {
          passive: true
        });
        window.addEventListener('resize', this.onScroll);
      },
      // 设置表格到滚动容器的距离
      setToTop: function setToTop() {
        if (this.isInnerScroll) {
          this.toTop = 0;
        } else {
          this.toTop = this.$el.getBoundingClientRect().top - (this.scroller === window ? 0 : this.scroller.getBoundingClientRect().top) + getScrollTop(this.scroller);
        }
      },
      // 获取滚动元素
      getScroller: function getScroller() {
        var el;
        if (this.scrollBox) {
          if (this.scrollBox === 'window' || this.scrollBox === window) return window;
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
        // 如果组件失活，则不再执行handleScroll；否则外部容器滚动情况下记录的scrollTop会是0
        if (this.isDeactivated) return;
        // 记录scrollPos
        this.scrollPos[0] = getScrollTop(this.scroller);
        this.scrollPos[1] = getScrollLeft(this.scroller);
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
            while (next && next !== rows[index + 1]) {
              var _next;
              offsetHeight += ((_next = next) === null || _next === void 0 ? void 0 : _next.offsetHeight) || 0;
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
        var top = this.scrollPos[0] - buffer - this.toTop;
        var scrollerHeight = this.isInnerScroll ? this.$attrs.scroll.y : getOffsetHeight(scroller);
        var bottom = this.scrollPos[0] + scrollerHeight + buffer - this.toTop;
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
        var len = this.dataSource.length;
        var last = len - 1;
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
            wrapEl.appendChild(innerEl);
            innerEl.appendChild(el.children[0]);
            el.insertBefore(wrapEl, el.firstChild);
            el.wrapEl = wrapEl;
            el.innerEl = innerEl;
          }
          if (el.wrapEl) {
            // 此处设置display为'inline-block'，是让div宽度等于表格的宽度，修复x轴滚动时右边固定列没有阴影的bug
            // 当没有数据时，需要将display设置为'block'，否则会撑开了inline-block的高度
            el.wrapEl.style.display = len === 0 ? 'block' : 'inline-block';
            el.innerEl.style.display = len === 0 ? 'block' : 'inline-block';

            // fix: 在列少情况下 网格列对不齐 #4
            // 没有x轴滚动条时，wrapEl、innerEl容器需要100%，否则会因为inline-block布局导致所有列不会盛满而网格列对不齐
            if (_this4.isInnerScroll && !hasScrollX(_this4.scroller)) {
              el.wrapEl.style.width = '100%';
              el.innerEl.style.width = '100%';
            }

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
        this.setToTop();
        this.handleScroll();
      },
      // 【外部调用】滚动到第几行
      // （不太精确：滚动到第n行时，如果周围的表格行计算出真实高度后会更新高度，导致内容坍塌或撑起）
      scrollTo: function scrollTo(index) {
        var _this5 = this;
        var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var stop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var item = this.dataSource[index];
        if (item && this.scroller) {
          this.updateSizes();
          this.calcRenderData();
          this.$nextTick(function () {
            var offsetTop = _this5.getItemOffsetTop(index) - offsetY;
            scrollToY(_this5.scroller, offsetTop);

            // 调用两次scrollTo，第一次滚动时，如果表格行初次渲染高度发生变化时，会导致滚动位置有偏差，此时需要第二次执行滚动，确保滚动位置无误
            if (!stop) {
              setTimeout(function () {
                _this5.scrollTo(index, offsetY, true);
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
      // 兼容多选：选择表格所有行
      onCheckAllRows: function onCheckAllRows(val) {
        var _this8 = this;
        val = this.isCheckedImn ? true : val;
        this.dataSource.forEach(function (row) {
          if (row.$v_checked === val) return;
          _this8.$set(row, '$v_checked', val);
          _this8.$set(row, '$v_checkedOrder', val ? checkOrder++ : undefined);
        });
        this.isCheckedAll = val;
        this.isCheckedImn = false;
        this.emitSelectionChange();
        // 取消全选，则重置checkOrder
        if (val === false) checkOrder = 0;
      },
      // 兼容多选：选择表格某行
      onCheckRow: function onCheckRow(row, val) {
        if (row.$v_checked === val) return;
        this.$set(row, '$v_checked', val);
        this.$set(row, '$v_checkedOrder', val ? checkOrder++ : undefined);
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
      },
      // 多选：兼容表格selection-change事件
      emitSelectionChange: function emitSelectionChange() {
        var selection = this.dataSource.filter(function (row) {
          return row.$v_checked;
        }).sort(function (a, b) {
          return a.$v_checkedOrder - b.$v_checkedOrder;
        });
        this.$emit('selection-change', selection);
      },
      // 多选：兼容表格toggleRowSelection方法
      toggleRowSelection: function toggleRowSelection(row, selected) {
        var val = typeof selected === 'boolean' ? selected : !row.$v_checked;
        this.onCheckRow(row, val);
      },
      // 多选：兼容表格clearSelection方法
      clearSelection: function clearSelection() {
        this.isCheckedImn = false;
        this.onCheckAllRows(false);
      },
      // 记录表格x、y轴滚动位置
      recordTablePos: function recordTablePos() {
        var _this9 = this;
        if (!this.isInnerScroll) return;
        this.tableBodyEl = this.$el.querySelector('.ant-table-body');
        this.onTableScroll = throttle_1(function () {
          _this9.scrollPos[2] = getScrollTop(_this9.tableBodyEl);
          _this9.scrollPos[3] = getScrollLeft(_this9.tableBodyEl);
        }, 100);
        this.tableBodyEl.addEventListener('scroll', this.onTableScroll, {
          passive: true
        });
      },
      // 恢复y轴滚动位置（仅支持表格内部滚动）
      restoreScrollY: function restoreScrollY() {
        if (!this.scroller) return;

        // 恢复滚动容器滚动位置
        var _this$scrollPos = _slicedToArray(this.scrollPos, 4),
          top = _this$scrollPos[0],
          left = _this$scrollPos[1],
          top2 = _this$scrollPos[2],
          left2 = _this$scrollPos[3];
        setScrollTop(this.scroller, top);
        setScrollLeft(this.scroller, left);

        // 如果是内部滚动且固定列，则固定列也需要恢复y轴滚动位置
        if (this.isInnerScroll) {
          var leftScroller = document.querySelector(TableBodyClassNames[1]);
          var rightScroller = document.querySelector(TableBodyClassNames[2]);
          if (leftScroller) setScrollTop(leftScroller, top);
          if (rightScroller) setScrollTop(rightScroller, top);
        } else {
          // 恢复表格内滚动位置
          setScrollTop(this.tableBodyEl, top2);
          setScrollLeft(this.tableBodyEl, left2);
        }
      },
      // 【VirtualTree调用】更新数据
      updateData: function updateData() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        // 先存在list，通过$emit update更新data不是立即执行的（那么拿到的data就是最新），所以先存到list里，拿的就是最新数据
        this.list = data;
        this.$emit('update:dataSource', this.list);
      },
      // 【VirtualTree调用】获取列表全部数据】
      getData: function getData() {
        return this.list || this.dataSource;
      }
    },
    watch: {
      dataSource: function dataSource(data, oldData) {
        if (!this.virtualized) {
          this.renderAllData();
        } else {
          this.doUpdate();
        }
        // 设置list
        if (this.list && data !== oldData) {
          this.list = data;
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
      if (this.tableBodyEl) {
        this.tableBodyEl.removeEventListener('scroll', this.onTableScroll);
      }
    },
    activated: function activated() {
      this.isDeactivated = false;
      this.restoreScrollY();
    },
    deactivated: function deactivated() {
      this.isDeactivated = true;
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

  /* script */
  var __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function __vue_render__() {
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
          fn: function fn(text, record, index, column) {
            return [_vm._t(slot, null, null, _vm.getSlotValue(text, record, index, column))];
          }
        };
      })], null, true)
    }, "a-table", _vm.$attrs, false), _vm.$listeners), [_vm._v(" "), _vm._l(Object.keys(_vm.$slots), function (slot) {
      return _c("template", {
        slot: slot
      }, [_vm._t(slot)], 2);
    })], 2), _vm._v(" "), _c("div", {
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
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
  }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

  var script = {
    name: 'a-virtual-tree',
    components: {
      Icon: antDesignVue.Icon
    },
    props: {
      // 树形缩进
      indentSize: {
        type: Number,
        "default": 20
      },
      // 行数据
      row: {
        type: Object,
        required: true
      },
      // 加载子节点数据
      load: {
        type: Function,
        required: true
      },
      // 检测是否有子节点
      check: {
        type: Function,
        "default": function _default(row) {
          return row.$v_hasChildren !== false;
        }
      }
    },
    inject: ['virtualTable'],
    methods: {
      // 展开收起事件
      onTreeNodeExpand: function onTreeNodeExpand(row) {
        var _arguments = arguments,
          _this = this;
        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var expanded, doLoad;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                expanded = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : !_this.row.$v_expanded;
                doLoad = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : true;
                if (!(row.$v_expanded === expanded)) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt("return", []);
              case 4:
                if (!expanded) {
                  _context.next = 13;
                  break;
                }
                if (!row.$v_loaded) {
                  _context.next = 9;
                  break;
                }
                return _context.abrupt("return", _this.loadOldChildNodes(row));
              case 9:
                if (!doLoad) {
                  _context.next = 11;
                  break;
                }
                return _context.abrupt("return", _this.loadChildNodes(row));
              case 11:
                _context.next = 14;
                break;
              case 13:
                return _context.abrupt("return", _this.hideChildNodes(row));
              case 14:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      // 加载子节点
      loadChildNodes: function loadChildNodes(row) {
        var _this2 = this;
        return new Promise(function (resolve, reject) {
          // 获取子节点数据并显示
          _this2.$set(row, '$v_loading', true);
          _this2.load && _this2.load(row, resolveFn.bind(_this2));
          function resolveFn(data) {
            if (!Array.isArray(data)) {
              this.$set(row, '$v_loading', false);
              resolve();
              return;
            }
            this.$set(row, '$v_loading', false);
            this.$set(row, '$v_expanded', true);
            this.$set(row, '$v_loaded', true);
            this.$set(row, '$v_hasChildren', !!data.length);
            data.forEach(function (item) {
              item.$v_level = typeof row.$v_level === 'number' ? row.$v_level + 1 : 2;
            });
            // 所有子节点插入到当前同级节点下
            var list = this.virtualTable.getData();
            var index = list.findIndex(function (item) {
              return item === row;
            });
            if (index > -1) {
              this.virtualTable.updateData([].concat(_toConsumableArray(list.slice(0, index + 1)), _toConsumableArray(data), _toConsumableArray(list.slice(index + 1))));
            }
            resolve(data);
          }
        });
      },
      // 加载已经加载的子节点
      loadOldChildNodes: function loadOldChildNodes(row) {
        this.$set(row, '$v_expanded', true);
        var list = this.virtualTable.getData();
        var index = list.findIndex(function (item) {
          return item === row;
        });
        if (index > -1) {
          this.virtualTable.updateData([].concat(_toConsumableArray(list.slice(0, index + 1)), _toConsumableArray(row.$v_hideNodes || []), _toConsumableArray(list.slice(index + 1))));
          return row.$v_hideNodes;
        }
        return [];
      },
      // 隐藏子节点
      hideChildNodes: function hideChildNodes(row) {
        var list = this.virtualTable.getData();
        var index = list.findIndex(function (item) {
          return item === row;
        });
        if (index === -1) return;

        // 查找当前节点的所有子孙节点
        var hideNodes = [];
        for (var i = index + 1; i < list.length; i++) {
          var curRow = list[i];
          if ((curRow.$v_level || 1) <= (row.$v_level || 1)) break;
          hideNodes.push(curRow);
        }
        this.$set(row, '$v_hideNodes', hideNodes);
        this.$set(row, '$v_expanded', false);
        // 隐藏所有子孙节点
        var newList = list.filter(function (item) {
          return !hideNodes.includes(item);
        });
        this.virtualTable.updateData(newList);
        this.virtualTable.update();
        return [];
      },
      // 展开节点
      // expandKeys - 展开节点的keys值
      // expanded - 展开/收起
      // doLoad - 未加载子节点则执行load函数去加载，已加载则展开
      expand: function expand(expandKeys) {
        var _this3 = this;
        var expanded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var doLoad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        if (!Array.isArray(expandKeys)) return;
        var _this$virtualTable = this.virtualTable,
          getData = _this$virtualTable.getData,
          keyProp = _this$virtualTable.keyProp;
        var data = getData();
        var plist = [];
        data.forEach(function (row) {
          if (row[keyProp] && expandKeys.includes(row[keyProp])) {
            plist.push(_this3.onTreeNodeExpand(row, expanded, doLoad));
          }
        });
        return Promise.all(plist);
      },
      // 展开路径
      expandPath: function expandPath(keyPath) {
        var _this4 = this;
        if (!Array.isArray(keyPath)) return;

        // 递归路径，逐层展开节点
        var expand = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(rows, n) {
            var targetRow;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(n === keyPath.length)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return", keyPath[n - 1]);
                case 2:
                  if (!(!Array.isArray(rows) || !rows.length)) {
                    _context2.next = 4;
                    break;
                  }
                  return _context2.abrupt("return", keyPath[n - 1]);
                case 4:
                  targetRow = rows.find(function (row) {
                    return row[keyProp] === keyPath[n];
                  });
                  if (!targetRow) {
                    _context2.next = 13;
                    break;
                  }
                  if (targetRow.$v_expanded) {
                    _context2.next = 10;
                    break;
                  }
                  _context2.next = 9;
                  return _this4.onTreeNodeExpand(targetRow, true);
                case 9:
                  rows = _context2.sent;
                case 10:
                  return _context2.abrupt("return", expand(rows, n + 1));
                case 13:
                  console.warn("[expandPath] \u6CA1\u6709\u627E\u5230 ".concat(keyPath[n], " key\u503C\u5BF9\u5E94\u7684\u884C"));
                  return _context2.abrupt("return", keyPath[n - 1]);
                case 15:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function expand(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();
        var _this$virtualTable2 = this.virtualTable,
          getData = _this$virtualTable2.getData,
          keyProp = _this$virtualTable2.keyProp;
        var data = getData();
        return expand(data, 0);
      },
      // 展开所有存在的节点
      expandAll: function expandAll() {
        var _this5 = this;
        // 展开节点（递归）
        var expandRows = function expandRows(data) {
          if (Array.isArray(data) && data.length) {
            data.forEach(function (row) {
              _this5.onTreeNodeExpand(row, true, false);
              expandRows(row.$v_hideNodes);
            });
          }
        };
        var getData = this.virtualTable.getData;
        var data = getData();
        expandRows(data);
      },
      // 收起所有节点
      unexpandAll: function unexpandAll() {
        var _this6 = this;
        var getData = this.virtualTable.getData;
        var data = getData();
        var levelMap = [];
        data.forEach(function (row) {
          var level = row.$v_level || 1;
          !levelMap[level] && (levelMap[level] = []);
          levelMap[level].push(row);
        });
        for (var i = levelMap.length - 1; i >= 0; i--) {
          if (!levelMap[i]) continue;
          levelMap[i].forEach(function (row) {
            _this6.onTreeNodeExpand(row, false);
          });
        }
      }
    }
  };

  const isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return (id, style) => addStyle(id, style);
  }
  let HEAD;
  const styles = {};
  function addStyle(id, css) {
      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          let code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  style.element.setAttribute('media', css.media);
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              const index = style.ids.size - 1;
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index])
                  style.element.removeChild(nodes[index]);
              if (nodes.length)
                  style.element.insertBefore(textNode, nodes[index]);
              else
                  style.element.appendChild(textNode);
          }
      }
  }

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", {
      staticClass: "a-virtual-tree"
    }, [_c("span", {
      staticClass: "ant-table-row-indent",
      style: {
        paddingLeft: _vm.row.$v_level ? (_vm.row.$v_level - 1) * _vm.indentSize + "px" : 0
      }
    }), _vm._v(" "), _vm.row.$v_loading ? _vm._t("loading", function () {
      return [_c("a-icon", {
        key: "loading",
        staticClass: "ant-table-row-expand-icon ant-table-row-loading-icon",
        attrs: {
          type: "loading"
        }
      })];
    }) : _vm.check(_vm.row) ? _c("span", {
      staticClass: "ant-table-row-expand-icon",
      "class": _vm.row.$v_expanded ? "ant-table-row-expanded" : "ant-table-row-collapsed",
      on: {
        click: function click($event) {
          return _vm.onTreeNodeExpand(_vm.row);
        }
      }
    }) : _c("span", {
      key: "spaced",
      staticClass: "ant-table-row-expand-icon ant-table-row-spaced"
    }), _vm._v(" "), _vm._t("default")], 2);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-7b97fa79_0", {
      source: ".a-virtual-tree {\n  display: inline-block;\n}\n.ant-table-row-loading-icon {\n  transition: none;\n  border: none;\n  background: transparent;\n}\n",
      map: {
        "version": 3,
        "sources": ["a-virtual-tree.vue"],
        "names": [],
        "mappings": "AAAA;EACE,qBAAqB;AACvB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;AACzB",
        "file": "a-virtual-tree.vue",
        "sourcesContent": [".a-virtual-tree {\n  display: inline-block;\n}\n.ant-table-row-loading-icon {\n  transition: none;\n  border: none;\n  background: transparent;\n}\n"]
      },
      media: undefined
    });
  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

  exports.AVirtualTree = __vue_component__;
  exports["default"] = __vue_component__$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
