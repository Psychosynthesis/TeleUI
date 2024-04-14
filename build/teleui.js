(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@charset "UTF-8";.teleaps-amount-input{min-height:24px;max-width:100%;padding-left:0}.teleaps-amount-input.unacceptable input{color:#cc2929}.teleaps-amount-input .amount-input-main-row{display:flex;align-items:baseline}.teleaps-amount-input .amount-input-main-row input{font-family:Roboto;font-size:36px;font-weight:500;background:none;border:none;margin:0;padding:0;line-height:20px;max-width:100%!important}.teleaps-amount-input .amount-input-main-row input[type=number]::-webkit-outer-spin-button,.teleaps-amount-input .amount-input-main-row input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}.teleaps-amount-input .amount-input-main-row input[type=number],.teleaps-amount-input .amount-input-main-row input[type=number]:hover,.teleaps-amount-input .amount-input-main-row input[type=number]:focus{-webkit-appearance:none;appearance:none;-moz-appearance:textfield}.teleaps-amount-input .amount-input-main-row input:focus{outline:none}.teleaps-amount-input .amount-input-main-row input ::placeholder{color:#00f;font-size:26px}.teleaps-amount-input .amount-input-main-row .amount-input-label{color:#7f8c97;margin-right:5px;display:inline-flex;align-items:flex-end;-webkit-user-select:none;user-select:none}.teleaps-amount-input .amount-input-main-row .amount-input-units{display:flex;align-items:flex-end;color:#7f8c97;-webkit-user-select:none;user-select:none}.teleaps-amount-input .amount-input-underline{height:1px;margin-top:8px;border-bottom:1px solid #7f8c97}.teleaps-custom-button{padding:8px;max-height:48px;border-radius:4px;cursor:pointer;white-space:break-spaces;font-style:normal;font-family:Roboto Bold;display:inline-flex;align-items:center;justify-content:center;border:1px solid #50a7ea;color:#fff;background:#50a7ea}.teleaps-custom-button:hover{border-color:#fff!important}.teleaps-custom-button:disabled{opacity:.3}.teleaps-custom-button.outline{background:none;box-shadow:none;color:#50a7ea}.teleaps-custom-checkbox{display:flex;text-align:center}.teleaps-custom-checkbox .custom-checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:none;line-height:20px}.teleaps-custom-checkbox .custom-checkbox+label{display:inline-flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;line-height:20px}.teleaps-custom-checkbox.no-text .custom-checkbox+label:before{margin-right:0}.teleaps-custom-checkbox.rounded .custom-checkbox+label:before{border-radius:50%}.teleaps-custom-checkbox .custom-checkbox+label:before{content:"";margin-right:12px;display:inline-block;flex-shrink:0;flex-grow:0;border:1px solid #7f8c97;border-radius:4px;background:none;font-size:20px;line-height:20px;cursor:pointer;width:20px;height:20px}.teleaps-custom-checkbox .custom-checkbox:checked+label:before{width:20px;height:20px;line-height:20px;content:"✓ ";color:#fff;background-color:#50a7ea;border-color:transparent}.teleaps-dots-slider{display:flex;height:11px;padding-top:24px;padding-bottom:8px}.teleaps-dots-slider>div{flex-grow:1;display:flex;align-items:center}.teleaps-dots-slider>div:last-child{flex-grow:0}.teleaps-dots-slider .dots-slider-point{width:6px;height:6px;border-radius:50%;margin:0 4px;filter:grayscale(50%);background:#7f8c97}.teleaps-dots-slider .dots-slider-point.active-dot{filter:none;background:#50a7ea}.teleaps-dots-slider .dots-slider-point.current-dot{width:11px;height:11px}.teleaps-dots-slider .dots-slider-point.current-dot .dots-slider-caption{bottom:24px;left:0}.teleaps-dots-slider .dots-slider-point .dots-slider-caption{font-size:12px;line-height:14px;position:relative;bottom:26px;color:#7f8c97;-webkit-user-select:none;user-select:none;width:20px;text-align:left}.teleaps-dots-slider .dots-slider-line{height:2px;flex-grow:1;filter:grayscale(70%);background:#7f8c97}.teleaps-dots-slider .dots-slider-line.active-line{filter:none;background:#50a7ea}.teleaps-spinner-container{width:100%;height:100%;margin:0;display:flex;place-items:center;justify-content:center}.teleaps-spinner-container .spinner{height:50px;width:50px;border-left:3px solid #7f8c97;border-bottom:3px solid #7f8c97;border-right:3px solid #7f8c97;border-top:3px solid transparent;border-radius:50%;animation:spinner .8s linear infinite}@keyframes spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.teleaps-progress-bar{overflow:hidden;width:100%}.teleaps-progress-bar .bar-background{display:block;background:#b0b9c2;border-radius:7px}.teleaps-progress-bar .bar-background .completed-progress{display:block;border-radius:7px;background:#50a7ea;padding:2px;width:0}.teleaps-range-slider input{height:5px;width:100%;padding:0;margin:0}.teleaps-range-slider input[type=range]{-webkit-appearance:none}.teleaps-range-slider input[type=range]:focus{outline:none}.teleaps-range-slider input[type=range]::-ms-track{width:100%;cursor:pointer;background:transparent;border-color:transparent;color:transparent}.teleaps-range-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:3px solid #6ea0e6;background:#fff;height:24px;width:24px;border-radius:50%;cursor:pointer;margin-top:-6px}.teleaps-range-slider input[type=range]::-moz-range-thumb{border:3px solid #6ea0e6;background:#fff;height:24px;width:24px;border-radius:50%;cursor:pointer}.teleaps-range-slider input[type=range]::-webkit-slider-runnable-track{height:10px;cursor:pointer;background:#50a7ea;border-radius:4px}.teleaps-range-slider input[type=range]:focus::-webkit-slider-runnable-track{background:#50a7ea}.teleaps-range-slider input[type=range]::-moz-range-track{height:10px;cursor:pointer;background:#50a7ea;border-radius:4px}.teleaps-simple-input{min-height:24px;max-width:100%;padding-left:12px}.teleaps-simple-input.unacceptable input{color:#cc2929}.teleaps-simple-input .simple-input-main-row{display:flex;align-items:baseline}.teleaps-simple-input .simple-input-main-row input{font-family:Roboto;font-size:16px;font-weight:400;background:none;border:none;margin:0;padding:0;line-height:19px;max-width:100%!important}.teleaps-simple-input .simple-input-main-row input[type=number]::-webkit-outer-spin-button,.teleaps-simple-input .simple-input-main-row input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}.teleaps-simple-input .simple-input-main-row input[type=number],.teleaps-simple-input .simple-input-main-row input[type=number]:hover,.teleaps-simple-input .simple-input-main-row input[type=number]:focus{-webkit-appearance:none;appearance:none;-moz-appearance:textfield}.teleaps-simple-input .simple-input-main-row input:focus{outline:none}.teleaps-simple-input .simple-input-main-row .simple-input-label{color:#7f8c97;margin-right:5px;display:inline-flex;align-items:flex-end}.teleaps-simple-input .simple-input-main-row .simple-input-units{display:flex;align-items:flex-end;color:#7f8c97}.teleaps-simple-input .simple-input-underline{height:1px;margin-top:8px;border-bottom:1px solid #7f8c97}.teleaps-custom-switch{display:flex;align-items:center;height:20px}.teleaps-custom-switch .switch-background{width:30px;height:13px;border-radius:10px;cursor:pointer;display:flex;align-items:center}.teleaps-custom-switch .switch-punkt,.teleaps-custom-switch .switch-punkt-selected{width:20px;height:20px;position:relative;border:2px solid;border-radius:10px;box-sizing:border-box;background:#fff;-webkit-transition:left .4s;-moz-transition:left .4s;-o-transition:left .4s;-ms-transition:left .4s;transition:left .4s}.teleaps-custom-switch .switch-punkt{left:-15%}.teleaps-custom-switch .switch-punkt-selected{left:50%}.teleaps-tabs-container{padding-bottom:12px;width:100%}.teleaps-tabs-container .tabs-captions{display:flex;flex-direction:row;justify-content:space-around}.teleaps-tabs-container .tabs-captions .tab-caption{font-family:Roboto;font-size:16px;font-weight:500;margin:12px 0 24px;color:#b0b9c2;-webkit-user-select:none;user-select:none;cursor:pointer}.teleaps-tabs-container .tabs-captions .tab-caption.current-tab{color:#50a7ea;border-bottom:3px solid #50a7ea;padding-bottom:12px}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import $e, { useState as V, useRef as Q, useEffect as Ie } from "react";
import { isExistAndNotNull as We, getRandomString as vr } from "vanicom";
var ue = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function pr() {
  if (Ne)
    return J;
  Ne = 1;
  var n = $e, o = Symbol.for("react.element"), c = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(a, d, T) {
    var g, _ = {}, x = null, P = null;
    T !== void 0 && (x = "" + T), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (P = d.ref);
    for (g in d)
      s.call(d, g) && !y.hasOwnProperty(g) && (_[g] = d[g]);
    if (a && a.defaultProps)
      for (g in d = a.defaultProps, d)
        _[g] === void 0 && (_[g] = d[g]);
    return { $$typeof: o, type: a, key: x, ref: P, props: _, _owner: u.current };
  }
  return J.Fragment = c, J.jsx = h, J.jsxs = h, J;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function hr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var n = $e, o = Symbol.for("react.element"), c = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), D = Symbol.iterator, $ = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[$];
      return typeof r == "function" ? r : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        I("error", e, t);
      }
    }
    function I(e, r, t) {
      {
        var i = j.ReactDebugCurrentFrame, p = i.getStackAddendum();
        p !== "" && (r += "%s", t = t.concat([p]));
        var b = t.map(function(f) {
          return String(f);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var E = !1, R = !1, W = !1, Y = !1, ee = !1, le;
    le = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === y || ee || e === u || e === T || e === g || Y || e === P || E || R || W || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === _ || e.$$typeof === h || e.$$typeof === a || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var p = r.displayName || r.name || "";
      return p !== "" ? t + "(" + p + ")" : t;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case c:
          return "Portal";
        case y:
          return "Profiler";
        case u:
          return "StrictMode";
        case T:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            var r = e;
            return fe(r) + ".Consumer";
          case h:
            var t = e;
            return fe(t._context) + ".Provider";
          case d:
            return Ye(e, e.render, "ForwardRef");
          case _:
            var i = e.displayName || null;
            return i !== null ? i : N(e.type) || "Memo";
          case x: {
            var p = e, b = p._payload, f = p._init;
            try {
              return N(f(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, B = 0, de, ve, pe, he, ge, me, be;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Le() {
      {
        if (B === 0) {
          de = console.log, ve = console.info, pe = console.warn, he = console.error, ge = console.group, me = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        B++;
      }
    }
    function Ue() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: de
            }),
            info: M({}, e, {
              value: ve
            }),
            warn: M({}, e, {
              value: pe
            }),
            error: M({}, e, {
              value: he
            }),
            group: M({}, e, {
              value: ge
            }),
            groupCollapsed: M({}, e, {
              value: me
            }),
            groupEnd: M({}, e, {
              value: be
            })
          });
        }
        B < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = j.ReactCurrentDispatcher, te;
    function X(e, r, t) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (p) {
            var i = p.stack.trim().match(/\n( *(at )?)/);
            te = i && i[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, H;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Be();
    }
    function Ee(e, r) {
      if (!e || ne)
        return "";
      {
        var t = H.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      ne = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = re.current, re.current = null, Le();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var l = A.stack.split(`
`), S = i.stack.split(`
`), C = l.length - 1, w = S.length - 1; C >= 1 && w >= 0 && l[C] !== S[w]; )
            w--;
          for (; C >= 1 && w >= 0; C--, w--)
            if (l[C] !== S[w]) {
              if (C !== 1 || w !== 1)
                do
                  if (C--, w--, w < 0 || l[C] !== S[w]) {
                    var O = `
` + l[C].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, O), O;
                  }
                while (C >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = b, Ue(), Error.prepareStackTrace = p;
      }
      var U = e ? e.displayName || e.name : "", De = U ? X(U) : "";
      return typeof e == "function" && H.set(e, De), De;
    }
    function qe(e, r, t) {
      return Ee(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, Je(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case T:
          return X("Suspense");
        case g:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return qe(e.render);
          case _:
            return K(e.type, r, t);
          case x: {
            var i = e, p = i._payload, b = i._init;
            try {
              return K(b(p), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Re = {}, _e = j.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    function Ge(e, r, t, i, p) {
      {
        var b = Function.call.bind(Z);
        for (var f in e)
          if (b(e, f)) {
            var l = void 0;
            try {
              if (typeof e[f] != "function") {
                var S = Error((i || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              l = e[f](r, f, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              l = C;
            }
            l && !(l instanceof Error) && (z(p), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, f, typeof l), z(null)), l instanceof Error && !(l.message in Re) && (Re[l.message] = !0, z(p), m("Failed %s type: %s", t, l.message), z(null));
          }
      }
    }
    var Xe = Array.isArray;
    function ae(e) {
      return Xe(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function we(e) {
      if (Ke(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), Ce(e);
    }
    var q = j.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, xe, oe;
    oe = {};
    function ze(e) {
      if (Z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (Z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && q.current && r && q.current.stateNode !== r) {
        var t = N(q.current.type);
        oe[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(q.current.type), e.ref), oe[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, i, p, b, f) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: f,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ar(e, r, t, i, p) {
      {
        var b, f = {}, l = null, S = null;
        t !== void 0 && (we(t), l = "" + t), Qe(r) && (we(r.key), l = "" + r.key), ze(r) && (S = r.ref, er(r, p));
        for (b in r)
          Z.call(r, b) && !Ze.hasOwnProperty(b) && (f[b] = r[b]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (b in C)
            f[b] === void 0 && (f[b] = C[b]);
        }
        if (l || S) {
          var w = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && rr(f, w), S && tr(f, w);
        }
        return nr(e, l, S, p, i, q.current, f);
      }
    }
    var ie = j.ReactCurrentOwner, je = j.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Se() {
      {
        if (ie.current) {
          var e = N(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ke = {};
    function ir(e) {
      {
        var r = Se();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (ke[t])
          return;
        ke[t] = !0;
        var i = "";
        e && e._owner && e._owner !== ie.current && (i = " It was passed a child from " + N(e._owner.type) + "."), L(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), L(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            ce(i) && Oe(i, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = F(e);
          if (typeof p == "function" && p !== e.entries)
            for (var b = p.call(e), f; !(f = b.next()).done; )
              ce(f.value) && Oe(f.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = N(r);
          Ge(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var p = N(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            L(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Fe(e, r, t, i, p, b) {
      {
        var f = Ve(e);
        if (!f) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = or(p);
          S ? l += S : l += Se();
          var C;
          e === null ? C = "null" : ae(e) ? C = "array" : e !== void 0 && e.$$typeof === o ? (C = "<" + (N(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, l);
        }
        var w = ar(e, r, t, p, b);
        if (w == null)
          return w;
        if (f) {
          var O = r.children;
          if (O !== void 0)
            if (i)
              if (ae(O)) {
                for (var U = 0; U < O.length; U++)
                  Pe(O[U], e);
                Object.freeze && Object.freeze(O);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(O, e);
        }
        return e === s ? cr(w) : sr(w), w;
      }
    }
    function ur(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var fr = lr, dr = ur;
    G.Fragment = s, G.jsx = fr, G.jsxs = dr;
  }()), G;
}
process.env.NODE_ENV === "production" ? ue.exports = pr() : ue.exports = hr();
var v = ue.exports;
function Me(n) {
  var o, c, s = "";
  if (typeof n == "string" || typeof n == "number")
    s += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var u = n.length;
      for (o = 0; o < u; o++)
        n[o] && (c = Me(n[o])) && (s && (s += " "), s += c);
    } else
      for (c in n)
        n[c] && (s && (s += " "), s += c);
  return s;
}
function k() {
  for (var n, o, c = 0, s = "", u = arguments.length; c < u; c++)
    (n = arguments[c]) && (o = Me(n)) && (s && (s += " "), s += o);
  return s;
}
const br = ({
  className: n,
  value: o,
  valueSetter: c,
  placeholder: s,
  label: u,
  inputStyle: y,
  units: h,
  max: a
}) => {
  const [d, T] = V(!1), g = Q(null), _ = typeof a < "u", x = (j) => {
    _ && j > a ? T(!0) : T(!1);
  }, P = () => {
    if (!g.current)
      return;
    const j = g.current.value;
    let m;
    m = parseFloat(j), isNaN(m) ? m = 0 : a && m > a && (m = a, T(!0)), c(m), g.current.value = String(m);
  }, D = k({ "teleaps-amount-input": !0, [n]: n, unacceptable: d }), $ = We(o) ? String(o).length * 20 + 5 + "px" : "25px", F = { ...y, width: $ };
  return d && F.color && delete F.color, Ie(
    () => {
      g.current && (_ && x(o), g.current.value = String(o));
    },
    [o, a, g.current]
  ), /* @__PURE__ */ v.jsx("div", { className: D, children: /* @__PURE__ */ v.jsxs("div", { className: "amount-input-main-row", children: [
    u && /* @__PURE__ */ v.jsx("div", { className: "amount-input-label", children: u }),
    /* @__PURE__ */ v.jsx(
      "input",
      {
        onChange: P,
        type: "number",
        placeholder: s,
        style: F,
        inputMode: "decimal",
        ref: g
      }
    ),
    h && /* @__PURE__ */ v.jsx("div", { className: "amount-input-units", children: h })
  ] }) });
};
const yr = ({
  type: n,
  size: o,
  color: c,
  className: s,
  children: u,
  onClick: y,
  disabled: h
}) => {
  const a = o ? o + "px" : "auto", d = u ? void 0 : a, T = (x) => {
    h || y(x);
  }, g = {
    width: o ? d : "",
    height: o ? a : "",
    color: c && (n === "outline" ? c : ""),
    background: c && (n !== "outline" ? c : ""),
    borderColor: c
  }, _ = k({ "teleaps-custom-button": !0, [n]: n, [c]: c, [s]: s });
  return /* @__PURE__ */ v.jsx("button", { className: _, onClick: T, style: g, disabled: h, children: u });
};
const Er = ({
  text: n,
  className: o,
  checked: c,
  valueSetter: s,
  rounded: u
}) => {
  const y = Q(null), h = vr(6), a = () => {
    s(y.current.checked);
  }, d = k({ "teleaps-custom-checkbox": !0, "no-text": !n, [o]: o, rounded: u });
  return /* @__PURE__ */ v.jsxs("div", { className: d, children: [
    /* @__PURE__ */ v.jsx(
      "input",
      {
        type: "checkbox",
        className: "custom-checkbox",
        id: h,
        onChange: a,
        ref: y,
        checked: c,
        name: h
      }
    ),
    /* @__PURE__ */ v.jsx("label", { htmlFor: h, children: n })
  ] });
};
const Rr = ({ values: n, valueSetter: o, className: c, lineColor: s }) => {
  const u = n.filter((E) => E.selected === !0).length, y = u - 1, h = Q(null), a = (E) => {
    if (E === u)
      return;
    const R = n.map((W, Y) => {
      if (Y <= E)
        return { ...W, selected: !0 };
      if (Y > E)
        return { ...W, selected: !1 };
    });
    o(R);
  }, [d, T] = V(0), [g, _] = V(0), [x, P] = V(0), D = (E) => {
    if ("TouchEvent" in window && E.nativeEvent instanceof TouchEvent)
      return E.nativeEvent.touches[0].clientX;
    if (E.nativeEvent instanceof MouseEvent)
      return E.nativeEvent.clientX;
  }, $ = (E) => {
    _(void 0), T(D(E));
  }, F = (E) => _(D(E)), j = () => {
    if (!d || !g)
      return;
    const R = ~~((g - d) / x), W = R > 0 ? u + R >= n.length ? n.length : R : u - R <= 0 ? 0 : R;
    a(u + W);
  }, m = k({ "teleaps-dots-slider": !0, [c]: c });
  let I = {};
  return s && (I.background = s), Ie(() => {
    h.current && P(h.current.offsetWidth / n.length);
  }, [h.current]), /* @__PURE__ */ v.jsx(
    "div",
    {
      className: m,
      onTouchStart: $,
      onMouseDown: $,
      onTouchMove: F,
      onMouseMove: F,
      onTouchEnd: j,
      onMouseUp: j,
      ref: h,
      children: n.map((E, R) => {
        const W = k({ "dots-slider-point": !0, "active-dot": E.selected, "current-dot": R === u }), Y = k({ "dots-slider-line": !0, "active-line": R <= y }), ee = R < n.length - 1;
        return /* @__PURE__ */ v.jsxs("div", { onClick: () => a(R), children: [
          /* @__PURE__ */ v.jsx("div", { className: W, style: I, onClick: () => a(R), children: /* @__PURE__ */ v.jsx("div", { className: "dots-slider-caption", onClick: () => a(R), children: E.caption }) }),
          ee && /* @__PURE__ */ v.jsx("div", { className: Y, style: I })
        ] }, `${E.value}-slider-caption`);
      })
    }
  );
};
const _r = ({ size: n, className: o }) => /* @__PURE__ */ v.jsx("div", { className: k({ "teleaps-spinner-container": !0, [o]: o }), children: /* @__PURE__ */ v.jsx("div", { className: "spinner", style: { height: n + "px", width: n + "px" } }) });
const Cr = ({
  size: n,
  color: o,
  backgroundColor: c,
  className: s,
  completed: u
}) => {
  const y = k({ "teleaps-progress-bar": !0, [s]: s }), h = {
    background: c || ""
  }, a = {
    padding: n ? `${n}px` : "2px",
    background: o || "",
    width: "0"
  };
  return We(u) && (u > 100 ? a.width = "100%" : u < 0 ? a.width = "0" : a.width = u + "%"), /* @__PURE__ */ v.jsx("div", { className: y, children: /* @__PURE__ */ v.jsx("div", { className: "bar-background", style: h, children: /* @__PURE__ */ v.jsx("span", { className: "completed-progress", style: a }) }) });
};
const wr = ({ className: n, step: o, lineColor: c, value: s, valueSetter: u, min: y, max: h }) => {
  const a = Q(null), d = k({ "teleaps-range-slider": !0, [n]: n }), T = () => {
    const g = a == null ? void 0 : a.current, _ = parseFloat(g.value);
    u(_);
  };
  return /* @__PURE__ */ v.jsx("div", { className: d, children: /* @__PURE__ */ v.jsx(
    "input",
    {
      type: "range",
      step: o,
      style: { backgroundColor: c },
      value: s,
      ref: a,
      onChange: T,
      min: y,
      max: h
    }
  ) });
};
const Tr = ({
  className: n,
  value: o,
  valueSetter: c,
  type: s,
  placeholder: u,
  label: y,
  inputStyle: h,
  max: a,
  borderColor: d
}) => {
  const [T, g] = V(!1), [_, x] = V(!1), P = s === "number", D = (I) => {
    const E = I.currentTarget.value;
    let R;
    if (P) {
      if (R = parseInt(E, 10), !R)
        return;
      a && R > a && (R = a, g(!0));
    } else
      R = String(I.currentTarget.value);
    c(R);
  }, $ = () => x(!0), F = () => x(!1), j = k({ "teleaps-simple-input": !0, [n]: n, unacceptable: T }), m = { ...h };
  return T && m.color && delete m.color, /* @__PURE__ */ v.jsxs("div", { className: j, children: [
    /* @__PURE__ */ v.jsxs("div", { className: "simple-input-main-row", children: [
      y && /* @__PURE__ */ v.jsx("div", { className: "simple-input-label", children: y }),
      /* @__PURE__ */ v.jsx(
        "input",
        {
          value: o ?? "",
          onChange: D,
          type: s,
          placeholder: u,
          style: m,
          inputMode: P ? "decimal" : void 0,
          onFocus: $,
          onBlur: F
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx("div", { className: "simple-input-underline", style: { borderColor: _ && d ? d : void 0 } })
  ] });
};
const xr = ({
  className: n,
  selected: o,
  switchHandler: c,
  color: s,
  defaultColor: u
}) => {
  const y = k({ "teleaps-custom-switch": !0, [n]: n }), h = k({ "switch-background": !0, "no-select": !0 }), a = k({ "switch-punkt-selected": o, "switch-punkt": !o }), d = o ? s : u;
  return /* @__PURE__ */ v.jsx("div", { className: y, onClick: c, children: /* @__PURE__ */ v.jsx("div", { className: h, style: { background: d }, children: /* @__PURE__ */ v.jsx("div", { className: a, style: { borderColor: s }, children: " " }) }) });
};
const jr = ({ tabs: n, defaultIndex: o }) => {
  const [c, s] = V(n[o ?? 0].caption), u = n.map(
    (a) => /* @__PURE__ */ v.jsx(
      "div",
      {
        className: k({ "current-tab": a.caption === c, "tab-caption": !0 }),
        onClick: () => s(a.caption),
        children: a.caption
      },
      `${a.caption}-caption-key`
    )
  ), y = n.find((a) => a.caption === c), h = y ? y.content : n[0].content;
  return /* @__PURE__ */ v.jsxs("div", { className: "teleaps-tabs-container", children: [
    /* @__PURE__ */ v.jsx("div", { className: "tabs-captions", children: u }),
    h
  ] });
};
export {
  br as AmountInput,
  yr as Button,
  Er as Checkbox,
  Rr as DotSlider,
  _r as Loader,
  Cr as ProgressBar,
  wr as Range,
  Tr as SimpleInput,
  xr as Switch,
  jr as Tabs
};
