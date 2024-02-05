import Ae, { useState as V, useRef as Q, useEffect as Ie } from "react";
import k from "clsx";
import { isExistAndNotNull as We, getRandomString as dr } from "vanicom";
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
function vr() {
  if (Ne)
    return J;
  Ne = 1;
  var o = Ae, s = Symbol.for("react.element"), v = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, u = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(n, l, T) {
    var p, _ = {}, x = null, P = null;
    T !== void 0 && (x = "" + T), l.key !== void 0 && (x = "" + l.key), l.ref !== void 0 && (P = l.ref);
    for (p in l)
      h.call(l, p) && !y.hasOwnProperty(p) && (_[p] = l[p]);
    if (n && n.defaultProps)
      for (p in l = n.defaultProps, l)
        _[p] === void 0 && (_[p] = l[p]);
    return { $$typeof: s, type: n, key: x, ref: P, props: _, _owner: u.current };
  }
  return J.Fragment = v, J.jsx = m, J.jsxs = m, J;
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
var $e;
function pr() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Ae, s = Symbol.for("react.element"), v = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), n = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), D = Symbol.iterator, A = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[A];
      return typeof r == "function" ? r : null;
    }
    var j = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        I("error", e, t);
      }
    }
    function I(e, r, t) {
      {
        var a = j.ReactDebugCurrentFrame, d = a.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var b = t.map(function(c) {
          return String(c);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var E = !1, R = !1, W = !1, Y = !1, ee = !1, le;
    le = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === y || ee || e === u || e === T || e === p || Y || e === P || E || R || W || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === _ || e.$$typeof === m || e.$$typeof === n || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case v:
          return "Portal";
        case y:
          return "Profiler";
        case u:
          return "StrictMode";
        case T:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case n:
            var r = e;
            return fe(r) + ".Consumer";
          case m:
            var t = e;
            return fe(t._context) + ".Provider";
          case l:
            return Ve(e, e.render, "ForwardRef");
          case _:
            var a = e.displayName || null;
            return a !== null ? a : N(e.type) || "Memo";
          case x: {
            var d = e, b = d._payload, c = d._init;
            try {
              return N(c(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, B = 0, de, ve, pe, he, me, ge, be;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ye() {
      {
        if (B === 0) {
          de = console.log, ve = console.info, pe = console.warn, he = console.error, me = console.group, ge = console.groupCollapsed, be = console.groupEnd;
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
    function Le() {
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
              value: me
            }),
            groupCollapsed: M({}, e, {
              value: ge
            }),
            groupEnd: M({}, e, {
              value: be
            })
          });
        }
        B < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = j.ReactCurrentDispatcher, te;
    function X(e, r, t) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (d) {
            var a = d.stack.trim().match(/\n( *(at )?)/);
            te = a && a[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, H;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Ue();
    }
    function Ee(e, r) {
      if (!e || ne)
        return "";
      {
        var t = H.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      ne = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = re.current, re.current = null, Ye();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch ($) {
              a = $;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch ($) {
              a = $;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            a = $;
          }
          e();
        }
      } catch ($) {
        if ($ && a && typeof $.stack == "string") {
          for (var i = $.stack.split(`
`), S = a.stack.split(`
`), C = i.length - 1, w = S.length - 1; C >= 1 && w >= 0 && i[C] !== S[w]; )
            w--;
          for (; C >= 1 && w >= 0; C--, w--)
            if (i[C] !== S[w]) {
              if (C !== 1 || w !== 1)
                do
                  if (C--, w--, w < 0 || i[C] !== S[w]) {
                    var O = `
` + i[C].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, O), O;
                  }
                while (C >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = b, Le(), Error.prepareStackTrace = d;
      }
      var U = e ? e.displayName || e.name : "", De = U ? X(U) : "";
      return typeof e == "function" && H.set(e, De), De;
    }
    function Be(e, r, t) {
      return Ee(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, qe(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case T:
          return X("Suspense");
        case p:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Be(e.render);
          case _:
            return K(e.type, r, t);
          case x: {
            var a = e, d = a._payload, b = a._init;
            try {
              return K(b(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, Re = {}, _e = j.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    function Je(e, r, t, a, d) {
      {
        var b = Function.call.bind(z);
        for (var c in e)
          if (b(e, c)) {
            var i = void 0;
            try {
              if (typeof e[c] != "function") {
                var S = Error((a || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              i = e[c](r, c, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              i = C;
            }
            i && !(i instanceof Error) && (Z(d), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, c, typeof i), Z(null)), i instanceof Error && !(i.message in Re) && (Re[i.message] = !0, Z(d), g("Failed %s type: %s", t, i.message), Z(null));
          }
      }
    }
    var Ge = Array.isArray;
    function ae(e) {
      return Ge(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
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
      if (He(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), Ce(e);
    }
    var q = j.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, xe, oe;
    oe = {};
    function ze(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && q.current && r && q.current.stateNode !== r) {
        var t = N(q.current.type);
        oe[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(q.current.type), e.ref), oe[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Te || (Te = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, a, d, b, c) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function nr(e, r, t, a, d) {
      {
        var b, c = {}, i = null, S = null;
        t !== void 0 && (we(t), i = "" + t), Ze(r) && (we(r.key), i = "" + r.key), ze(r) && (S = r.ref, Qe(r, d));
        for (b in r)
          z.call(r, b) && !Ke.hasOwnProperty(b) && (c[b] = r[b]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (b in C)
            c[b] === void 0 && (c[b] = C[b]);
        }
        if (i || S) {
          var w = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && er(c, w), S && rr(c, w);
        }
        return tr(e, i, S, d, a, q.current, c);
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
      return typeof e == "object" && e !== null && e.$$typeof === s;
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
    function ar(e) {
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
    function or(e) {
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
        var t = or(r);
        if (ke[t])
          return;
        ke[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ie.current && (a = " It was passed a child from " + N(e._owner.type) + "."), L(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), L(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ce(a) && Oe(a, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = F(e);
          if (typeof d == "function" && d !== e.entries)
            for (var b = d.call(e), c; !(c = b.next()).done; )
              ce(c.value) && Oe(c.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = N(r);
          Je(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var d = N(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            L(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Fe(e, r, t, a, d, b) {
      {
        var c = Me(e);
        if (!c) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = ar(d);
          S ? i += S : i += Se();
          var C;
          e === null ? C = "null" : ae(e) ? C = "array" : e !== void 0 && e.$$typeof === s ? (C = "<" + (N(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, i);
        }
        var w = nr(e, r, t, d, b);
        if (w == null)
          return w;
        if (c) {
          var O = r.children;
          if (O !== void 0)
            if (a)
              if (ae(O)) {
                for (var U = 0; U < O.length; U++)
                  Pe(O[U], e);
                Object.freeze && Object.freeze(O);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(O, e);
        }
        return e === h ? sr(w) : ir(w), w;
      }
    }
    function cr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var lr = ur, fr = cr;
    G.Fragment = h, G.jsx = lr, G.jsxs = fr;
  }()), G;
}
process.env.NODE_ENV === "production" ? ue.exports = vr() : ue.exports = pr();
var f = ue.exports;
const br = ({
  className: o,
  value: s,
  valueSetter: v,
  placeholder: h,
  label: u,
  inputStyle: y,
  units: m,
  max: n
}) => {
  const [l, T] = V(!1), p = Q(null), _ = typeof n < "u", x = (j) => {
    _ && j > n ? T(!0) : T(!1);
  }, P = () => {
    if (!p.current)
      return;
    const j = p.current.value;
    let g;
    g = parseFloat(j), isNaN(g) ? g = 0 : n && g > n && (g = n, T(!0)), v(g), p.current.value = String(g);
  }, D = k({ "amount-input-container": !0, [o]: o, unacceptable: l }), A = We(s) ? String(s).length * 19 + 2 + "px" : "25px", F = { ...y, width: A };
  return l && F.color && delete F.color, Ie(
    () => {
      p.current && (_ && x(s), p.current.value = String(s));
    },
    [s, n, p.current]
  ), /* @__PURE__ */ f.jsx("div", { className: D, children: /* @__PURE__ */ f.jsxs("div", { className: "amount-input-main-row", children: [
    u && /* @__PURE__ */ f.jsx("div", { className: "amount-input-label", children: u }),
    /* @__PURE__ */ f.jsx(
      "input",
      {
        onChange: P,
        type: "number",
        placeholder: h,
        style: F,
        inputMode: "decimal",
        ref: p
      }
    ),
    m && /* @__PURE__ */ f.jsx("div", { className: "amount-input-units", children: m })
  ] }) });
};
const yr = ({
  type: o,
  size: s,
  color: v,
  className: h,
  children: u,
  onClick: y,
  disabled: m
}) => {
  const n = s ? s + "px" : "auto", l = u ? void 0 : n, T = (x) => {
    m || y(x);
  }, p = {
    width: s ? l : "",
    height: s ? n : "",
    color: v && (o === "outline" ? v : ""),
    background: v && (o !== "outline" ? v : ""),
    borderColor: v
  }, _ = k({ "custom-button": !0, [o]: o, [v]: v, [h]: h });
  return /* @__PURE__ */ f.jsx("button", { className: _, onClick: T, style: p, disabled: m, children: u });
};
const Er = ({
  text: o,
  className: s,
  checked: v,
  valueSetter: h,
  rounded: u
}) => {
  const y = Q(null), m = dr(6), n = () => {
    h(y.current.checked);
  }, l = k({ "custom-checkbox-container": !0, "no-text": !o, [s]: s, rounded: u });
  return /* @__PURE__ */ f.jsxs("div", { className: l, children: [
    /* @__PURE__ */ f.jsx(
      "input",
      {
        type: "checkbox",
        className: "custom-checkbox",
        id: m,
        onChange: n,
        ref: y,
        checked: v
      }
    ),
    /* @__PURE__ */ f.jsx("label", { htmlFor: m, children: o })
  ] });
};
const Rr = ({ values: o, valueSetter: s, className: v, lineColor: h }) => {
  const u = o.filter((E) => E.selected === !0).length, y = u - 1, m = Q(null), n = (E) => {
    if (E === u)
      return;
    const R = o.map((W, Y) => {
      if (Y <= E)
        return { ...W, selected: !0 };
      if (Y > E)
        return { ...W, selected: !1 };
    });
    s(R);
  }, [l, T] = V(0), [p, _] = V(0), [x, P] = V(0), D = (E) => {
    if ("TouchEvent" in window && E.nativeEvent instanceof TouchEvent)
      return E.nativeEvent.touches[0].clientX;
    if (E.nativeEvent instanceof MouseEvent)
      return E.nativeEvent.clientX;
  }, A = (E) => {
    _(void 0), T(D(E));
  }, F = (E) => _(D(E)), j = () => {
    if (!l || !p)
      return;
    const R = ~~((p - l) / x), W = R > 0 ? u + R >= o.length ? o.length : R : u - R <= 0 ? 0 : R;
    n(u + W);
  }, g = k({ "dots-slider": !0, [v]: v });
  let I = {};
  return h && (I.background = h), Ie(() => {
    m.current && P(m.current.offsetWidth / o.length);
  }, [m.current]), /* @__PURE__ */ f.jsx(
    "div",
    {
      className: g,
      onTouchStart: A,
      onMouseDown: A,
      onTouchMove: F,
      onMouseMove: F,
      onTouchEnd: j,
      onMouseUp: j,
      ref: m,
      children: o.map((E, R) => {
        const W = k({ "dots-slider-point": !0, "active-dot": E.selected, "current-dot": R === u }), Y = k({ "dots-slider-line": !0, "active-line": R <= y }), ee = R < o.length - 1;
        return /* @__PURE__ */ f.jsxs("div", { onClick: () => n(R), children: [
          /* @__PURE__ */ f.jsx("div", { className: W, style: I, onClick: () => n(R), children: /* @__PURE__ */ f.jsx("div", { className: "dots-slider-caption", onClick: () => n(R), children: E.caption }) }),
          ee && /* @__PURE__ */ f.jsx("div", { className: Y, style: I })
        ] }, `${E.value}-slider-caption`);
      })
    }
  );
};
const _r = () => /* @__PURE__ */ f.jsx("div", { className: "spinner-container", children: /* @__PURE__ */ f.jsx("div", { className: "spinner" }) });
const Cr = ({
  size: o,
  color: s,
  backgroundColor: v,
  className: h,
  completed: u
}) => {
  const y = k({ "progress-bar": !0, [h]: h }), m = {
    background: v || ""
  }, n = {
    padding: o ? `${o}px` : "2px",
    background: s || "",
    width: "0"
  };
  return We(u) && (u > 100 ? n.width = "100%" : u < 0 ? n.width = "0" : n.width = u + "%"), /* @__PURE__ */ f.jsx("div", { className: y, children: /* @__PURE__ */ f.jsx("div", { className: "bar-background", style: m, children: /* @__PURE__ */ f.jsx("span", { className: "completed-progress", style: n }) }) });
};
const wr = ({ className: o, step: s, lineColor: v, value: h, valueSetter: u, min: y, max: m }) => {
  const n = Q(null), l = k({ "range-slider": !0, [o]: o }), T = () => {
    const p = n == null ? void 0 : n.current, _ = parseFloat(p.value);
    u(_);
  };
  return /* @__PURE__ */ f.jsx("div", { className: l, children: /* @__PURE__ */ f.jsx(
    "input",
    {
      type: "range",
      step: s,
      style: { backgroundColor: v },
      value: h,
      ref: n,
      onChange: T,
      min: y,
      max: m
    }
  ) });
};
const Tr = ({
  className: o,
  value: s,
  valueSetter: v,
  type: h,
  placeholder: u,
  label: y,
  inputStyle: m,
  max: n,
  borderColor: l
}) => {
  const [T, p] = V(!1), [_, x] = V(!1), P = h === "number", D = (I) => {
    const E = I.currentTarget.value;
    let R;
    if (P) {
      if (R = parseInt(E, 10), !R)
        return;
      n && R > n && (R = n, p(!0));
    } else
      R = String(I.currentTarget.value);
    v(R);
  }, A = () => x(!0), F = () => x(!1), j = k({ "simple-input-container": !0, [o]: o, unacceptable: T }), g = { ...m };
  return T && g.color && delete g.color, /* @__PURE__ */ f.jsxs("div", { className: j, children: [
    /* @__PURE__ */ f.jsxs("div", { className: "simple-input-main-row", children: [
      y && /* @__PURE__ */ f.jsx("div", { className: "simple-input-label", children: y }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          value: s ?? "",
          onChange: D,
          type: h,
          placeholder: u,
          style: g,
          inputMode: P ? "decimal" : void 0,
          onFocus: A,
          onBlur: F
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "simple-input-underline", style: { borderColor: _ && l ? l : void 0 } })
  ] });
};
const xr = ({
  className: o,
  selected: s,
  switchHandler: v,
  activeColor: h,
  defaultColor: u
}) => {
  const y = k({ "custom-switch": !0, [o]: o }), m = k({ "switch-background": !0, "no-select": !0 }), n = k({ "switch-punkt-selected": s, "switch-punkt": !s }), l = s ? h : u;
  return /* @__PURE__ */ f.jsx("div", { className: y, onClick: v, children: /* @__PURE__ */ f.jsx("div", { className: m, style: { background: l }, children: /* @__PURE__ */ f.jsx("div", { className: n, style: { borderColor: h }, children: " " }) }) });
};
const jr = ({ tabs: o, defaultIndex: s }) => {
  const [v, h] = V(o[s ?? 0].caption), u = o.map(
    (n) => /* @__PURE__ */ f.jsx(
      "div",
      {
        className: k({ "current-tab": n.caption === v, "tab-caption": !0 }),
        onClick: () => h(n.caption),
        children: n.caption
      },
      `${n.caption}-caption-key`
    )
  ), y = o.find((n) => n.caption === v), m = y ? y.content : o[0].content;
  return /* @__PURE__ */ f.jsxs("div", { className: "tabs-container", children: [
    /* @__PURE__ */ f.jsx("div", { className: "tabs-captions", children: u }),
    m
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
