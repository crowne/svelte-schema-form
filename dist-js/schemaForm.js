var Cp = Object.defineProperty;
var Lp = (e, n, t) => n in e ? Cp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var wt = (e, n, t) => (Lp(e, typeof n != "symbol" ? n + "" : n, t), t);
function rn() {
}
function Mp(e, n) {
  for (const t in n)
    e[t] = n[t];
  return (
    /** @type {T & S} */
    e
  );
}
function cu(e) {
  return e();
}
function Fa() {
  return /* @__PURE__ */ Object.create(null);
}
function en(e) {
  e.forEach(cu);
}
function ze(e) {
  return typeof e == "function";
}
function Ye(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
let _i;
function br(e, n) {
  return e === n ? !0 : (_i || (_i = document.createElement("a")), _i.href = n, e === _i.href);
}
function Np(e) {
  return Object.keys(e).length === 0;
}
function Fp(e, ...n) {
  if (e == null) {
    for (const r of n)
      r(void 0);
    return rn;
  }
  const t = e.subscribe(...n);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function du(e, n, t) {
  e.$$.on_destroy.push(Fp(n, t));
}
function Wp(e, n, t, r) {
  if (e) {
    const i = pu(e, n, t, r);
    return e[0](i);
  }
}
function pu(e, n, t, r) {
  return e[1] && r ? Mp(t.ctx.slice(), e[1](r(n))) : t.ctx;
}
function Dp(e, n, t, r) {
  if (e[2] && r) {
    const i = e[2](r(t));
    if (n.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], o = Math.max(n.dirty.length, i.length);
      for (let a = 0; a < o; a += 1)
        s[a] = n.dirty[a] | i[a];
      return s;
    }
    return n.dirty | i;
  }
  return n.dirty;
}
function Up(e, n, t, r, i, s) {
  if (i) {
    const o = pu(n, t, r, s);
    e.p(o, i);
  }
}
function Bp(e) {
  if (e.ctx.length > 32) {
    const n = [], t = e.ctx.length / 32;
    for (let r = 0; r < t; r++)
      n[r] = -1;
    return n;
  }
  return -1;
}
function qp(e, n, t) {
  return e.set(t), n;
}
function B(e, n) {
  e.appendChild(n);
}
function T(e, n, t) {
  e.insertBefore(n, t || null);
}
function R(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function xr(e, n) {
  for (let t = 0; t < e.length; t += 1)
    e[t] && e[t].d(n);
}
function N(e) {
  return document.createElement(e);
}
function zp(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function on(e) {
  return document.createTextNode(e);
}
function Z() {
  return on(" ");
}
function Me() {
  return on("");
}
function K(e, n, t, r) {
  return e.addEventListener(n, t, r), () => e.removeEventListener(n, t, r);
}
function gr(e) {
  return function(n) {
    return n.preventDefault(), e.call(this, n);
  };
}
function Dn(e) {
  return function(n) {
    return n.stopPropagation(), e.call(this, n);
  };
}
function y(e, n, t) {
  t == null ? e.removeAttribute(n) : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function Gp(e) {
  return Array.from(e.childNodes);
}
function _n(e, n) {
  n = "" + n, e.data !== n && (e.data = /** @type {string} */
  n);
}
function qr(e, n) {
  e.value = n ?? "";
}
function Un(e, n, t, r) {
  t == null ? e.style.removeProperty(n) : e.style.setProperty(n, t, r ? "important" : "");
}
function Wa(e, n, t) {
  for (let r = 0; r < e.options.length; r += 1) {
    const i = e.options[r];
    if (i.__value === n) {
      i.selected = !0;
      return;
    }
  }
  (!t || n !== void 0) && (e.selectedIndex = -1);
}
function Ie(e, n, t) {
  e.classList.toggle(n, !!t);
}
function Hp(e, n, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: n, bubbles: t, cancelable: r });
}
class Kp {
  constructor(n = !1) {
    /**
     * @private
     * @default false
     */
    wt(this, "is_svg", !1);
    /** parent for creating node */
    wt(this, "e");
    /** html tag nodes */
    wt(this, "n");
    /** target */
    wt(this, "t");
    /** anchor */
    wt(this, "a");
    this.is_svg = n, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(n) {
    this.h(n);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(n, t, r = null) {
    this.e || (this.is_svg ? this.e = zp(
      /** @type {keyof SVGElementTagNameMap} */
      t.nodeName
    ) : this.e = N(
      /** @type {keyof HTMLElementTagNameMap} */
      t.nodeType === 11 ? "TEMPLATE" : t.nodeName
    ), this.t = t.tagName !== "TEMPLATE" ? t : (
      /** @type {HTMLTemplateElement} */
      t.content
    ), this.c(n)), this.i(r);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(n) {
    this.e.innerHTML = n, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(n) {
    for (let t = 0; t < this.n.length; t += 1)
      T(this.t, this.n[t], n);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(n) {
    this.d(), this.h(n), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(R);
  }
}
function Fe(e, n) {
  return new e(n);
}
let zr;
function Dr(e) {
  zr = e;
}
function Hi() {
  if (!zr)
    throw new Error("Function called outside component initialization");
  return zr;
}
function Yp(e) {
  Hi().$$.on_mount.push(e);
}
function hu() {
  const e = Hi();
  return (n, t, { cancelable: r = !1 } = {}) => {
    const i = e.$$.callbacks[n];
    if (i) {
      const s = Hp(
        /** @type {string} */
        n,
        t,
        { cancelable: r }
      );
      return i.slice().forEach((o) => {
        o.call(e, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function Jp(e, n) {
  return Hi().$$.context.set(e, n), n;
}
function Xp(e) {
  return Hi().$$.context.get(e);
}
function yi(e, n) {
  const t = e.$$.callbacks[n.type];
  t && t.slice().forEach((r) => r.call(this, n));
}
const pr = [], xe = [];
let _r = [];
const zs = [], mu = /* @__PURE__ */ Promise.resolve();
let Gs = !1;
function gu() {
  Gs || (Gs = !0, mu.then(Ne));
}
function Ri() {
  return gu(), mu;
}
function Hs(e) {
  _r.push(e);
}
function ot(e) {
  zs.push(e);
}
const Rs = /* @__PURE__ */ new Set();
let ur = 0;
function Ne() {
  if (ur !== 0)
    return;
  const e = zr;
  do {
    try {
      for (; ur < pr.length; ) {
        const n = pr[ur];
        ur++, Dr(n), Zp(n.$$);
      }
    } catch (n) {
      throw pr.length = 0, ur = 0, n;
    }
    for (Dr(null), pr.length = 0, ur = 0; xe.length; )
      xe.pop()();
    for (let n = 0; n < _r.length; n += 1) {
      const t = _r[n];
      Rs.has(t) || (Rs.add(t), t());
    }
    _r.length = 0;
  } while (pr.length);
  for (; zs.length; )
    zs.pop()();
  Gs = !1, Rs.clear(), Dr(e);
}
function Zp(e) {
  if (e.fragment !== null) {
    e.update(), en(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(Hs);
  }
}
function Vp(e) {
  const n = [], t = [];
  _r.forEach((r) => e.indexOf(r) === -1 ? n.push(r) : t.push(r)), t.forEach((r) => r()), _r = n;
}
const Ti = /* @__PURE__ */ new Set();
let Gt;
function De() {
  Gt = {
    r: 0,
    c: [],
    p: Gt
    // parent group
  };
}
function Ue() {
  Gt.r || en(Gt.c), Gt = Gt.p;
}
function J(e, n) {
  e && e.i && (Ti.delete(e), e.i(n));
}
function V(e, n, t, r) {
  if (e && e.o) {
    if (Ti.has(e))
      return;
    Ti.add(e), Gt.c.push(() => {
      Ti.delete(e), r && (t && e.d(1), r());
    }), e.o(n);
  } else
    r && r();
}
function He(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function po(e, n) {
  e.d(1), n.delete(e.key);
}
function _u(e, n) {
  V(e, 1, 1, () => {
    n.delete(e.key);
  });
}
function ei(e, n, t, r, i, s, o, a, l, f, u, c) {
  let d = e.length, h = s.length, m = d;
  const g = {};
  for (; m--; )
    g[e[m].key] = m;
  const v = [], w = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), C = [];
  for (m = h; m--; ) {
    const L = c(i, s, m), D = t(L);
    let P = o.get(D);
    P ? r && C.push(() => P.p(L, n)) : (P = f(D, L), P.c()), w.set(D, v[m] = P), D in g && A.set(D, Math.abs(m - g[D]));
  }
  const W = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
  function F(L) {
    J(L, 1), L.m(a, u), o.set(L.key, L), u = L.first, h--;
  }
  for (; d && h; ) {
    const L = v[h - 1], D = e[d - 1], P = L.key, ie = D.key;
    L === D ? (u = L.first, d--, h--) : w.has(ie) ? !o.has(P) || W.has(P) ? F(L) : I.has(ie) ? d-- : A.get(P) > A.get(ie) ? (I.add(P), F(L)) : (W.add(ie), d--) : (l(D, o), d--);
  }
  for (; d--; ) {
    const L = e[d];
    w.has(L.key) || l(L, o);
  }
  for (; h; )
    F(v[h - 1]);
  return en(C), v;
}
function Fn(e, n, t) {
  const r = e.$$.props[n];
  r !== void 0 && (e.$$.bound[r] = t, t(e.$$.ctx[r]));
}
function Ee(e) {
  e && e.c();
}
function we(e, n, t) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(n, t), Hs(() => {
    const s = e.$$.on_mount.map(cu).filter(ze);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : en(s), e.$$.on_mount = [];
  }), i.forEach(Hs);
}
function $e(e, n) {
  const t = e.$$;
  t.fragment !== null && (Vp(t.after_update), en(t.on_destroy), t.fragment && t.fragment.d(n), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Qp(e, n) {
  e.$$.dirty[0] === -1 && (pr.push(e), gu(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function Ze(e, n, t, r, i, s, o = null, a = [-1]) {
  const l = zr;
  Dr(e);
  const f = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: rn,
    not_equal: i,
    bound: Fa(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Fa(),
    dirty: a,
    skip_bound: !1,
    root: n.target || l.$$.root
  };
  o && o(f.root);
  let u = !1;
  if (f.ctx = t ? t(e, n.props || {}, (c, d, ...h) => {
    const m = h.length ? h[0] : d;
    return f.ctx && i(f.ctx[c], f.ctx[c] = m) && (!f.skip_bound && f.bound[c] && f.bound[c](m), u && Qp(e, c)), d;
  }) : [], f.update(), u = !0, en(f.before_update), f.fragment = r ? r(f.ctx) : !1, n.target) {
    if (n.hydrate) {
      const c = Gp(n.target);
      f.fragment && f.fragment.l(c), c.forEach(R);
    } else
      f.fragment && f.fragment.c();
    n.intro && J(e.$$.fragment), we(e, n.target, n.anchor), Ne();
  }
  Dr(l);
}
class Ve {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    wt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    wt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    $e(this, 1), this.$destroy = rn;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(n, t) {
    if (!ze(t))
      return rn;
    const r = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return r.push(t), () => {
      const i = r.indexOf(t);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(n) {
    this.$$set && !Np(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
const xp = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xp);
var yu = typeof global == "object" && global && global.Object === Object && global, eh = typeof self == "object" && self && self.Object === Object && self, Qe = yu || eh || Function("return this")(), sn = Qe.Symbol, vu = Object.prototype, nh = vu.hasOwnProperty, th = vu.toString, Fr = sn ? sn.toStringTag : void 0;
function rh(e) {
  var n = nh.call(e, Fr), t = e[Fr];
  try {
    e[Fr] = void 0;
    var r = !0;
  } catch {
  }
  var i = th.call(e);
  return r && (n ? e[Fr] = t : delete e[Fr]), i;
}
var ih = Object.prototype, sh = ih.toString;
function oh(e) {
  return sh.call(e);
}
var ah = "[object Null]", lh = "[object Undefined]", Da = sn ? sn.toStringTag : void 0;
function fn(e) {
  return e == null ? e === void 0 ? lh : ah : Da && Da in Object(e) ? rh(e) : oh(e);
}
function We(e) {
  return e != null && typeof e == "object";
}
var fh = "[object Symbol]";
function An(e) {
  return typeof e == "symbol" || We(e) && fn(e) == fh;
}
var uh = NaN;
function Ua(e) {
  return typeof e == "number" ? e : An(e) ? uh : +e;
}
function je(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, i = Array(r); ++t < r; )
    i[t] = n(e[t], t, e);
  return i;
}
var re = Array.isArray, ch = 1 / 0, Ba = sn ? sn.prototype : void 0, qa = Ba ? Ba.toString : void 0;
function On(e) {
  if (typeof e == "string")
    return e;
  if (re(e))
    return je(e, On) + "";
  if (An(e))
    return qa ? qa.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -ch ? "-0" : n;
}
function Ki(e, n) {
  return function(t, r) {
    var i;
    if (t === void 0 && r === void 0)
      return n;
    if (t !== void 0 && (i = t), r !== void 0) {
      if (i === void 0)
        return r;
      typeof t == "string" || typeof r == "string" ? (t = On(t), r = On(r)) : (t = Ua(t), r = Ua(r)), i = e(t, r);
    }
    return i;
  };
}
var dh = Ki(function(e, n) {
  return e + n;
}, 0);
const ph = dh;
var hh = /\s/;
function bu(e) {
  for (var n = e.length; n-- && hh.test(e.charAt(n)); )
    ;
  return n;
}
var mh = /^\s+/;
function wu(e) {
  return e && e.slice(0, bu(e) + 1).replace(mh, "");
}
function Ce(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var za = NaN, gh = /^[-+]0x[0-9a-f]+$/i, _h = /^0b[01]+$/i, yh = /^0o[0-7]+$/i, vh = parseInt;
function Pn(e) {
  if (typeof e == "number")
    return e;
  if (An(e))
    return za;
  if (Ce(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ce(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = wu(e);
  var t = _h.test(e);
  return t || yh.test(e) ? vh(e.slice(2), t ? 2 : 8) : gh.test(e) ? za : +e;
}
var Ga = 1 / 0, bh = 17976931348623157e292;
function at(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Pn(e), e === Ga || e === -Ga) {
    var n = e < 0 ? -1 : 1;
    return n * bh;
  }
  return e === e ? e : 0;
}
function oe(e) {
  var n = at(e), t = n % 1;
  return n === n ? t ? n - t : n : 0;
}
var wh = "Expected a function";
function $h(e, n) {
  if (typeof n != "function")
    throw new TypeError(wh);
  return e = oe(e), function() {
    if (--e < 1)
      return n.apply(this, arguments);
  };
}
function un(e) {
  return e;
}
var Ah = "[object AsyncFunction]", Oh = "[object Function]", Eh = "[object GeneratorFunction]", Rh = "[object Proxy]";
function lt(e) {
  if (!Ce(e))
    return !1;
  var n = fn(e);
  return n == Oh || n == Eh || n == Ah || n == Rh;
}
var ki = Qe["__core-js_shared__"], Ha = function() {
  var e = /[^.]+$/.exec(ki && ki.keys && ki.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Th(e) {
  return !!Ha && Ha in e;
}
var kh = Function.prototype, Sh = kh.toString;
function Xt(e) {
  if (e != null) {
    try {
      return Sh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ph = /[\\^$.*+?()[\]{}|]/g, Ih = /^\[object .+?Constructor\]$/, jh = Function.prototype, Ch = Object.prototype, Lh = jh.toString, Mh = Ch.hasOwnProperty, Nh = RegExp(
  "^" + Lh.call(Mh).replace(Ph, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $u(e) {
  if (!Ce(e) || Th(e))
    return !1;
  var n = lt(e) ? Nh : Ih;
  return n.test(Xt(e));
}
function Fh(e, n) {
  return e == null ? void 0 : e[n];
}
function Zt(e, n) {
  var t = Fh(e, n);
  return $u(t) ? t : void 0;
}
var Gr = Zt(Qe, "WeakMap"), Ci = Gr && new Gr(), Au = Ci ? function(e, n) {
  return Ci.set(e, n), e;
} : un, Ka = Object.create, Ar = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!Ce(n))
      return {};
    if (Ka)
      return Ka(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function Hr(e) {
  return function() {
    var n = arguments;
    switch (n.length) {
      case 0:
        return new e();
      case 1:
        return new e(n[0]);
      case 2:
        return new e(n[0], n[1]);
      case 3:
        return new e(n[0], n[1], n[2]);
      case 4:
        return new e(n[0], n[1], n[2], n[3]);
      case 5:
        return new e(n[0], n[1], n[2], n[3], n[4]);
      case 6:
        return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
      case 7:
        return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
    }
    var t = Ar(e.prototype), r = e.apply(t, n);
    return Ce(r) ? r : t;
  };
}
var Wh = 1;
function Dh(e, n, t) {
  var r = n & Wh, i = Hr(e);
  function s() {
    var o = this && this !== Qe && this instanceof s ? i : e;
    return o.apply(r ? t : this, arguments);
  }
  return s;
}
function En(e, n, t) {
  switch (t.length) {
    case 0:
      return e.call(n);
    case 1:
      return e.call(n, t[0]);
    case 2:
      return e.call(n, t[0], t[1]);
    case 3:
      return e.call(n, t[0], t[1], t[2]);
  }
  return e.apply(n, t);
}
var Uh = Math.max;
function Ou(e, n, t, r) {
  for (var i = -1, s = e.length, o = t.length, a = -1, l = n.length, f = Uh(s - o, 0), u = Array(l + f), c = !r; ++a < l; )
    u[a] = n[a];
  for (; ++i < o; )
    (c || i < s) && (u[t[i]] = e[i]);
  for (; f--; )
    u[a++] = e[i++];
  return u;
}
var Bh = Math.max;
function Eu(e, n, t, r) {
  for (var i = -1, s = e.length, o = -1, a = t.length, l = -1, f = n.length, u = Bh(s - a, 0), c = Array(u + f), d = !r; ++i < u; )
    c[i] = e[i];
  for (var h = i; ++l < f; )
    c[h + l] = n[l];
  for (; ++o < a; )
    (d || i < s) && (c[h + t[o]] = e[i++]);
  return c;
}
function qh(e, n) {
  for (var t = e.length, r = 0; t--; )
    e[t] === n && ++r;
  return r;
}
function Yi() {
}
var zh = 4294967295;
function ce(e) {
  this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = zh, this.__views__ = [];
}
ce.prototype = Ar(Yi.prototype);
ce.prototype.constructor = ce;
function ho() {
}
var mo = Ci ? function(e) {
  return Ci.get(e);
} : ho, yr = {}, Gh = Object.prototype, Hh = Gh.hasOwnProperty;
function Si(e) {
  for (var n = e.name + "", t = yr[n], r = Hh.call(yr, n) ? t.length : 0; r--; ) {
    var i = t[r], s = i.func;
    if (s == null || s == e)
      return i.name;
  }
  return n;
}
function jn(e, n) {
  this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = void 0;
}
jn.prototype = Ar(Yi.prototype);
jn.prototype.constructor = jn;
function gn(e, n) {
  var t = -1, r = e.length;
  for (n || (n = Array(r)); ++t < r; )
    n[t] = e[t];
  return n;
}
function Ru(e) {
  if (e instanceof ce)
    return e.clone();
  var n = new jn(e.__wrapped__, e.__chain__);
  return n.__actions__ = gn(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
}
var Kh = Object.prototype, Yh = Kh.hasOwnProperty;
function p(e) {
  if (We(e) && !re(e) && !(e instanceof ce)) {
    if (e instanceof jn)
      return e;
    if (Yh.call(e, "__wrapped__"))
      return Ru(e);
  }
  return new jn(e);
}
p.prototype = Yi.prototype;
p.prototype.constructor = p;
function Ks(e) {
  var n = Si(e), t = p[n];
  if (typeof t != "function" || !(n in ce.prototype))
    return !1;
  if (e === t)
    return !0;
  var r = mo(t);
  return !!r && e === r[0];
}
var Jh = 800, Xh = 16, Zh = Date.now;
function Tu(e) {
  var n = 0, t = 0;
  return function() {
    var r = Zh(), i = Xh - (r - t);
    if (t = r, i > 0) {
      if (++n >= Jh)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
var ku = Tu(Au), Vh = /\{\n\/\* \[wrapped with (.+)\] \*/, Qh = /,? & /;
function xh(e) {
  var n = e.match(Vh);
  return n ? n[1].split(Qh) : [];
}
var em = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function nm(e, n) {
  var t = n.length;
  if (!t)
    return e;
  var r = t - 1;
  return n[r] = (t > 1 ? "& " : "") + n[r], n = n.join(t > 2 ? ", " : " "), e.replace(em, `{
/* [wrapped with ` + n + `] */
`);
}
function go(e) {
  return function() {
    return e;
  };
}
var Li = function() {
  try {
    var e = Zt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), tm = Li ? function(e, n) {
  return Li(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: go(n),
    writable: !0
  });
} : un;
const rm = tm;
var _o = Tu(rm);
function Mn(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r && n(e[t], t, e) !== !1; )
    ;
  return e;
}
function Ji(e, n, t, r) {
  for (var i = e.length, s = t + (r ? 1 : -1); r ? s-- : ++s < i; )
    if (n(e[s], s, e))
      return s;
  return -1;
}
function Su(e) {
  return e !== e;
}
function im(e, n, t) {
  for (var r = t - 1, i = e.length; ++r < i; )
    if (e[r] === n)
      return r;
  return -1;
}
function Or(e, n, t) {
  return n === n ? im(e, n, t) : Ji(e, Su, t);
}
function Xi(e, n) {
  var t = e == null ? 0 : e.length;
  return !!t && Or(e, n, 0) > -1;
}
var sm = 1, om = 2, am = 8, lm = 16, fm = 32, um = 64, cm = 128, dm = 256, pm = 512, hm = [
  ["ary", cm],
  ["bind", sm],
  ["bindKey", om],
  ["curry", am],
  ["curryRight", lm],
  ["flip", pm],
  ["partial", fm],
  ["partialRight", um],
  ["rearg", dm]
];
function mm(e, n) {
  return Mn(hm, function(t) {
    var r = "_." + t[0];
    n & t[1] && !Xi(e, r) && e.push(r);
  }), e.sort();
}
function Pu(e, n, t) {
  var r = n + "";
  return _o(e, nm(r, mm(xh(r), t)));
}
var gm = 1, _m = 2, ym = 4, vm = 8, Ya = 32, Ja = 64;
function Iu(e, n, t, r, i, s, o, a, l, f) {
  var u = n & vm, c = u ? o : void 0, d = u ? void 0 : o, h = u ? s : void 0, m = u ? void 0 : s;
  n |= u ? Ya : Ja, n &= ~(u ? Ja : Ya), n & ym || (n &= ~(gm | _m));
  var g = [
    e,
    n,
    i,
    h,
    c,
    m,
    d,
    a,
    l,
    f
  ], v = t.apply(void 0, g);
  return Ks(e) && ku(v, g), v.placeholder = r, Pu(v, e, n);
}
function Er(e) {
  var n = e;
  return n.placeholder;
}
var bm = 9007199254740991, wm = /^(?:0|[1-9]\d*)$/;
function ft(e, n) {
  var t = typeof e;
  return n = n ?? bm, !!n && (t == "number" || t != "symbol" && wm.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
var $m = Math.min;
function Am(e, n) {
  for (var t = e.length, r = $m(n.length, t), i = gn(e); r--; ) {
    var s = n[r];
    e[r] = ft(s, t) ? i[s] : void 0;
  }
  return e;
}
var Xa = "__lodash_placeholder__";
function Rt(e, n) {
  for (var t = -1, r = e.length, i = 0, s = []; ++t < r; ) {
    var o = e[t];
    (o === n || o === Xa) && (e[t] = Xa, s[i++] = t);
  }
  return s;
}
var Om = 1, Em = 2, Rm = 8, Tm = 16, km = 128, Sm = 512;
function Zi(e, n, t, r, i, s, o, a, l, f) {
  var u = n & km, c = n & Om, d = n & Em, h = n & (Rm | Tm), m = n & Sm, g = d ? void 0 : Hr(e);
  function v() {
    for (var w = arguments.length, A = Array(w), C = w; C--; )
      A[C] = arguments[C];
    if (h)
      var W = Er(v), I = qh(A, W);
    if (r && (A = Ou(A, r, i, h)), s && (A = Eu(A, s, o, h)), w -= I, h && w < f) {
      var F = Rt(A, W);
      return Iu(
        e,
        n,
        Zi,
        v.placeholder,
        t,
        A,
        F,
        a,
        l,
        f - w
      );
    }
    var L = c ? t : this, D = d ? L[e] : e;
    return w = A.length, a ? A = Am(A, a) : m && w > 1 && A.reverse(), u && l < w && (A.length = l), this && this !== Qe && this instanceof v && (D = g || Hr(D)), D.apply(L, A);
  }
  return v;
}
function Pm(e, n, t) {
  var r = Hr(e);
  function i() {
    for (var s = arguments.length, o = Array(s), a = s, l = Er(i); a--; )
      o[a] = arguments[a];
    var f = s < 3 && o[0] !== l && o[s - 1] !== l ? [] : Rt(o, l);
    if (s -= f.length, s < t)
      return Iu(
        e,
        n,
        Zi,
        i.placeholder,
        void 0,
        o,
        f,
        void 0,
        void 0,
        t - s
      );
    var u = this && this !== Qe && this instanceof i ? r : e;
    return En(u, this, o);
  }
  return i;
}
var Im = 1;
function jm(e, n, t, r) {
  var i = n & Im, s = Hr(e);
  function o() {
    for (var a = -1, l = arguments.length, f = -1, u = r.length, c = Array(u + l), d = this && this !== Qe && this instanceof o ? s : e; ++f < u; )
      c[f] = r[f];
    for (; l--; )
      c[f++] = arguments[++a];
    return En(d, i ? t : this, c);
  }
  return o;
}
var Za = "__lodash_placeholder__", Ts = 1, Cm = 2, Lm = 4, Va = 8, Wr = 128, Qa = 256, Mm = Math.min;
function Nm(e, n) {
  var t = e[1], r = n[1], i = t | r, s = i < (Ts | Cm | Wr), o = r == Wr && t == Va || r == Wr && t == Qa && e[7].length <= n[8] || r == (Wr | Qa) && n[7].length <= n[8] && t == Va;
  if (!(s || o))
    return e;
  r & Ts && (e[2] = n[2], i |= t & Ts ? 0 : Lm);
  var a = n[3];
  if (a) {
    var l = e[3];
    e[3] = l ? Ou(l, a, n[4]) : a, e[4] = l ? Rt(e[3], Za) : n[4];
  }
  return a = n[5], a && (l = e[5], e[5] = l ? Eu(l, a, n[6]) : a, e[6] = l ? Rt(e[5], Za) : n[6]), a = n[7], a && (e[7] = a), r & Wr && (e[8] = e[8] == null ? n[8] : Mm(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = i, e;
}
var Fm = "Expected a function", xa = 1, Wm = 2, ks = 8, Ss = 16, Ps = 32, el = 64, nl = Math.max;
function ut(e, n, t, r, i, s, o, a) {
  var l = n & Wm;
  if (!l && typeof e != "function")
    throw new TypeError(Fm);
  var f = r ? r.length : 0;
  if (f || (n &= ~(Ps | el), r = i = void 0), o = o === void 0 ? o : nl(oe(o), 0), a = a === void 0 ? a : oe(a), f -= i ? i.length : 0, n & el) {
    var u = r, c = i;
    r = i = void 0;
  }
  var d = l ? void 0 : mo(e), h = [
    e,
    n,
    t,
    r,
    i,
    u,
    c,
    s,
    o,
    a
  ];
  if (d && Nm(h, d), e = h[0], n = h[1], t = h[2], r = h[3], i = h[4], a = h[9] = h[9] === void 0 ? l ? 0 : e.length : nl(h[9] - f, 0), !a && n & (ks | Ss) && (n &= ~(ks | Ss)), !n || n == xa)
    var m = Dh(e, n, t);
  else
    n == ks || n == Ss ? m = Pm(e, n, a) : (n == Ps || n == (xa | Ps)) && !i.length ? m = jm(e, n, t, r) : m = Zi.apply(void 0, h);
  var g = d ? Au : ku;
  return Pu(g(m, h), e, n);
}
var Dm = 128;
function ju(e, n, t) {
  return n = t ? void 0 : n, n = e && n == null ? e.length : n, ut(e, Dm, void 0, void 0, void 0, void 0, n);
}
function ct(e, n, t) {
  n == "__proto__" && Li ? Li(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function qn(e, n) {
  return e === n || e !== e && n !== n;
}
var Um = Object.prototype, Bm = Um.hasOwnProperty;
function ni(e, n, t) {
  var r = e[n];
  (!(Bm.call(e, n) && qn(r, t)) || t === void 0 && !(n in e)) && ct(e, n, t);
}
function Zn(e, n, t, r) {
  var i = !t;
  t || (t = {});
  for (var s = -1, o = n.length; ++s < o; ) {
    var a = n[s], l = r ? r(t[a], e[a], a, t, e) : void 0;
    l === void 0 && (l = e[a]), i ? ct(t, a, l) : ni(t, a, l);
  }
  return t;
}
var tl = Math.max;
function Cu(e, n, t) {
  return n = tl(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, s = tl(r.length - n, 0), o = Array(s); ++i < s; )
      o[i] = r[n + i];
    i = -1;
    for (var a = Array(n + 1); ++i < n; )
      a[i] = r[i];
    return a[n] = t(o), En(e, this, a);
  };
}
function le(e, n) {
  return _o(Cu(e, n, un), e + "");
}
var qm = 9007199254740991;
function Vi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qm;
}
function yn(e) {
  return e != null && Vi(e.length) && !lt(e);
}
function ln(e, n, t) {
  if (!Ce(t))
    return !1;
  var r = typeof n;
  return (r == "number" ? yn(t) && ft(n, t.length) : r == "string" && n in t) ? qn(t[n], e) : !1;
}
function Rr(e) {
  return le(function(n, t) {
    var r = -1, i = t.length, s = i > 1 ? t[i - 1] : void 0, o = i > 2 ? t[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (i--, s) : void 0, o && ln(t[0], t[1], o) && (s = i < 3 ? void 0 : s, i = 1), n = Object(n); ++r < i; ) {
      var a = t[r];
      a && e(n, a, r, s);
    }
    return n;
  });
}
var zm = Object.prototype;
function ti(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || zm;
  return e === t;
}
function yo(e, n) {
  for (var t = -1, r = Array(e); ++t < e; )
    r[t] = n(t);
  return r;
}
var Gm = "[object Arguments]";
function rl(e) {
  return We(e) && fn(e) == Gm;
}
var Lu = Object.prototype, Hm = Lu.hasOwnProperty, Km = Lu.propertyIsEnumerable, Ym = rl(/* @__PURE__ */ function() {
  return arguments;
}()) ? rl : function(e) {
  return We(e) && Hm.call(e, "callee") && !Km.call(e, "callee");
};
const Ht = Ym;
function vo() {
  return !1;
}
var Mu = typeof exports == "object" && exports && !exports.nodeType && exports, il = Mu && typeof module == "object" && module && !module.nodeType && module, Jm = il && il.exports === Mu, sl = Jm ? Qe.Buffer : void 0, Xm = sl ? sl.isBuffer : void 0, Zm = Xm || vo;
const Tt = Zm;
var Vm = "[object Arguments]", Qm = "[object Array]", xm = "[object Boolean]", eg = "[object Date]", ng = "[object Error]", tg = "[object Function]", rg = "[object Map]", ig = "[object Number]", sg = "[object Object]", og = "[object RegExp]", ag = "[object Set]", lg = "[object String]", fg = "[object WeakMap]", ug = "[object ArrayBuffer]", cg = "[object DataView]", dg = "[object Float32Array]", pg = "[object Float64Array]", hg = "[object Int8Array]", mg = "[object Int16Array]", gg = "[object Int32Array]", _g = "[object Uint8Array]", yg = "[object Uint8ClampedArray]", vg = "[object Uint16Array]", bg = "[object Uint32Array]", Se = {};
Se[dg] = Se[pg] = Se[hg] = Se[mg] = Se[gg] = Se[_g] = Se[yg] = Se[vg] = Se[bg] = !0;
Se[Vm] = Se[Qm] = Se[ug] = Se[xm] = Se[cg] = Se[eg] = Se[ng] = Se[tg] = Se[rg] = Se[ig] = Se[sg] = Se[og] = Se[ag] = Se[lg] = Se[fg] = !1;
function wg(e) {
  return We(e) && Vi(e.length) && !!Se[fn(e)];
}
function Rn(e) {
  return function(n) {
    return e(n);
  };
}
var Nu = typeof exports == "object" && exports && !exports.nodeType && exports, Ur = Nu && typeof module == "object" && module && !module.nodeType && module, $g = Ur && Ur.exports === Nu, Is = $g && yu.process, Cn = function() {
  try {
    var e = Ur && Ur.require && Ur.require("util").types;
    return e || Is && Is.binding && Is.binding("util");
  } catch {
  }
}(), ol = Cn && Cn.isTypedArray, Ag = ol ? Rn(ol) : wg;
const Tr = Ag;
var Og = Object.prototype, Eg = Og.hasOwnProperty;
function Fu(e, n) {
  var t = re(e), r = !t && Ht(e), i = !t && !r && Tt(e), s = !t && !r && !i && Tr(e), o = t || r || i || s, a = o ? yo(e.length, String) : [], l = a.length;
  for (var f in e)
    (n || Eg.call(e, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    ft(f, l))) && a.push(f);
  return a;
}
function Wu(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var Rg = Wu(Object.keys, Object), Tg = Object.prototype, kg = Tg.hasOwnProperty;
function bo(e) {
  if (!ti(e))
    return Rg(e);
  var n = [];
  for (var t in Object(e))
    kg.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function Je(e) {
  return yn(e) ? Fu(e) : bo(e);
}
var Sg = Object.prototype, Pg = Sg.hasOwnProperty, Ig = Rr(function(e, n) {
  if (ti(n) || yn(n)) {
    Zn(n, Je(n), e);
    return;
  }
  for (var t in n)
    Pg.call(n, t) && ni(e, t, n[t]);
});
const jg = Ig;
function Cg(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var Lg = Object.prototype, Mg = Lg.hasOwnProperty;
function Ng(e) {
  if (!Ce(e))
    return Cg(e);
  var n = ti(e), t = [];
  for (var r in e)
    r == "constructor" && (n || !Mg.call(e, r)) || t.push(r);
  return t;
}
function vn(e) {
  return yn(e) ? Fu(e, !0) : Ng(e);
}
var Fg = Rr(function(e, n) {
  Zn(n, vn(n), e);
});
const al = Fg;
var Wg = Rr(function(e, n, t, r) {
  Zn(n, vn(n), e, r);
});
const Mi = Wg;
var Dg = Rr(function(e, n, t, r) {
  Zn(n, Je(n), e, r);
});
const Ug = Dg;
var Bg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qg = /^\w*$/;
function wo(e, n) {
  if (re(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || An(e) ? !0 : qg.test(e) || !Bg.test(e) || n != null && e in Object(n);
}
var Kr = Zt(Object, "create");
function zg() {
  this.__data__ = Kr ? Kr(null) : {}, this.size = 0;
}
function Gg(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Hg = "__lodash_hash_undefined__", Kg = Object.prototype, Yg = Kg.hasOwnProperty;
function Jg(e) {
  var n = this.__data__;
  if (Kr) {
    var t = n[e];
    return t === Hg ? void 0 : t;
  }
  return Yg.call(n, e) ? n[e] : void 0;
}
var Xg = Object.prototype, Zg = Xg.hasOwnProperty;
function Vg(e) {
  var n = this.__data__;
  return Kr ? n[e] !== void 0 : Zg.call(n, e);
}
var Qg = "__lodash_hash_undefined__";
function xg(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Kr && n === void 0 ? Qg : n, this;
}
function Kt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Kt.prototype.clear = zg;
Kt.prototype.delete = Gg;
Kt.prototype.get = Jg;
Kt.prototype.has = Vg;
Kt.prototype.set = xg;
function e1() {
  this.__data__ = [], this.size = 0;
}
function Qi(e, n) {
  for (var t = e.length; t--; )
    if (qn(e[t][0], n))
      return t;
  return -1;
}
var n1 = Array.prototype, t1 = n1.splice;
function r1(e) {
  var n = this.__data__, t = Qi(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : t1.call(n, t, 1), --this.size, !0;
}
function i1(e) {
  var n = this.__data__, t = Qi(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function s1(e) {
  return Qi(this.__data__, e) > -1;
}
function o1(e, n) {
  var t = this.__data__, r = Qi(t, e);
  return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
}
function dt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
dt.prototype.clear = e1;
dt.prototype.delete = r1;
dt.prototype.get = i1;
dt.prototype.has = s1;
dt.prototype.set = o1;
var Yr = Zt(Qe, "Map");
function a1() {
  this.size = 0, this.__data__ = {
    hash: new Kt(),
    map: new (Yr || dt)(),
    string: new Kt()
  };
}
function l1(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function xi(e, n) {
  var t = e.__data__;
  return l1(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function f1(e) {
  var n = xi(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function u1(e) {
  return xi(this, e).get(e);
}
function c1(e) {
  return xi(this, e).has(e);
}
function d1(e, n) {
  var t = xi(this, e), r = t.size;
  return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
}
function pt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
pt.prototype.clear = a1;
pt.prototype.delete = f1;
pt.prototype.get = u1;
pt.prototype.has = c1;
pt.prototype.set = d1;
var p1 = "Expected a function";
function es(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(p1);
  var t = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], s = t.cache;
    if (s.has(i))
      return s.get(i);
    var o = e.apply(this, r);
    return t.cache = s.set(i, o) || s, o;
  };
  return t.cache = new (es.Cache || pt)(), t;
}
es.Cache = pt;
var h1 = 500;
function m1(e) {
  var n = es(e, function(r) {
    return t.size === h1 && t.clear(), r;
  }), t = n.cache;
  return n;
}
var g1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _1 = /\\(\\)?/g, Du = m1(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(g1, function(t, r, i, s) {
    n.push(i ? s.replace(_1, "$1") : r || t);
  }), n;
});
function _e(e) {
  return e == null ? "" : On(e);
}
function St(e, n) {
  return re(e) ? e : wo(e, n) ? [e] : Du(_e(e));
}
var y1 = 1 / 0;
function Vn(e) {
  if (typeof e == "string" || An(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -y1 ? "-0" : n;
}
function Vt(e, n) {
  n = St(n, e);
  for (var t = 0, r = n.length; e != null && t < r; )
    e = e[Vn(n[t++])];
  return t && t == r ? e : void 0;
}
function wr(e, n, t) {
  var r = e == null ? void 0 : Vt(e, n);
  return r === void 0 ? t : r;
}
function $o(e, n) {
  for (var t = -1, r = n.length, i = Array(r), s = e == null; ++t < r; )
    i[t] = s ? void 0 : wr(e, n[t]);
  return i;
}
function Pt(e, n) {
  for (var t = -1, r = n.length, i = e.length; ++t < r; )
    e[i + t] = n[t];
  return e;
}
var ll = sn ? sn.isConcatSpreadable : void 0;
function v1(e) {
  return re(e) || Ht(e) || !!(ll && e && e[ll]);
}
function nn(e, n, t, r, i) {
  var s = -1, o = e.length;
  for (t || (t = v1), i || (i = []); ++s < o; ) {
    var a = e[s];
    n > 0 && t(a) ? n > 1 ? nn(a, n - 1, t, r, i) : Pt(i, a) : r || (i[i.length] = a);
  }
  return i;
}
function Uu(e) {
  var n = e == null ? 0 : e.length;
  return n ? nn(e, 1) : [];
}
function ht(e) {
  return _o(Cu(e, void 0, Uu), e + "");
}
var b1 = ht($o);
const w1 = b1;
var ns = Wu(Object.getPrototypeOf, Object), $1 = "[object Object]", A1 = Function.prototype, O1 = Object.prototype, Bu = A1.toString, E1 = O1.hasOwnProperty, R1 = Bu.call(Object);
function ri(e) {
  if (!We(e) || fn(e) != $1)
    return !1;
  var n = ns(e);
  if (n === null)
    return !0;
  var t = E1.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && Bu.call(t) == R1;
}
var T1 = "[object DOMException]", k1 = "[object Error]";
function Ao(e) {
  if (!We(e))
    return !1;
  var n = fn(e);
  return n == k1 || n == T1 || typeof e.message == "string" && typeof e.name == "string" && !ri(e);
}
var S1 = le(function(e, n) {
  try {
    return En(e, void 0, n);
  } catch (t) {
    return Ao(t) ? t : new Error(t);
  }
});
const qu = S1;
var P1 = "Expected a function";
function zu(e, n) {
  var t;
  if (typeof n != "function")
    throw new TypeError(P1);
  return e = oe(e), function() {
    return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = void 0), t;
  };
}
var I1 = 1, j1 = 32, Oo = le(function(e, n, t) {
  var r = I1;
  if (t.length) {
    var i = Rt(t, Er(Oo));
    r |= j1;
  }
  return ut(e, r, n, t, i);
});
Oo.placeholder = {};
const Gu = Oo;
var C1 = ht(function(e, n) {
  return Mn(n, function(t) {
    t = Vn(t), ct(e, t, Gu(e[t], e));
  }), e;
});
const L1 = C1;
var M1 = 1, N1 = 2, F1 = 32, Eo = le(function(e, n, t) {
  var r = M1 | N1;
  if (t.length) {
    var i = Rt(t, Er(Eo));
    r |= F1;
  }
  return ut(n, r, e, t, i);
});
Eo.placeholder = {};
const W1 = Eo;
function Ln(e, n, t) {
  var r = -1, i = e.length;
  n < 0 && (n = -n > i ? 0 : i + n), t = t > i ? i : t, t < 0 && (t += i), i = n > t ? 0 : t - n >>> 0, n >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = e[r + n];
  return s;
}
function It(e, n, t) {
  var r = e.length;
  return t = t === void 0 ? r : t, !n && t >= r ? e : Ln(e, n, t);
}
var D1 = "\\ud800-\\udfff", U1 = "\\u0300-\\u036f", B1 = "\\ufe20-\\ufe2f", q1 = "\\u20d0-\\u20ff", z1 = U1 + B1 + q1, G1 = "\\ufe0e\\ufe0f", H1 = "\\u200d", K1 = RegExp("[" + H1 + D1 + z1 + G1 + "]");
function kr(e) {
  return K1.test(e);
}
function Y1(e) {
  return e.split("");
}
var Hu = "\\ud800-\\udfff", J1 = "\\u0300-\\u036f", X1 = "\\ufe20-\\ufe2f", Z1 = "\\u20d0-\\u20ff", V1 = J1 + X1 + Z1, Q1 = "\\ufe0e\\ufe0f", x1 = "[" + Hu + "]", Ys = "[" + V1 + "]", Js = "\\ud83c[\\udffb-\\udfff]", e_ = "(?:" + Ys + "|" + Js + ")", Ku = "[^" + Hu + "]", Yu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ju = "[\\ud800-\\udbff][\\udc00-\\udfff]", n_ = "\\u200d", Xu = e_ + "?", Zu = "[" + Q1 + "]?", t_ = "(?:" + n_ + "(?:" + [Ku, Yu, Ju].join("|") + ")" + Zu + Xu + ")*", r_ = Zu + Xu + t_, i_ = "(?:" + [Ku + Ys + "?", Ys, Yu, Ju, x1].join("|") + ")", s_ = RegExp(Js + "(?=" + Js + ")|" + i_ + r_, "g");
function o_(e) {
  return e.match(s_) || [];
}
function Bn(e) {
  return kr(e) ? o_(e) : Y1(e);
}
function Vu(e) {
  return function(n) {
    n = _e(n);
    var t = kr(n) ? Bn(n) : void 0, r = t ? t[0] : n.charAt(0), i = t ? It(t, 1).join("") : n.slice(1);
    return r[e]() + i;
  };
}
var a_ = Vu("toUpperCase");
const Ro = a_;
function Qu(e) {
  return Ro(_e(e).toLowerCase());
}
function To(e, n, t, r) {
  var i = -1, s = e == null ? 0 : e.length;
  for (r && s && (t = e[++i]); ++i < s; )
    t = n(t, e[i], i, e);
  return t;
}
function ko(e) {
  return function(n) {
    return e == null ? void 0 : e[n];
  };
}
var l_ = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, f_ = ko(l_);
const u_ = f_;
var c_ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, d_ = "\\u0300-\\u036f", p_ = "\\ufe20-\\ufe2f", h_ = "\\u20d0-\\u20ff", m_ = d_ + p_ + h_, g_ = "[" + m_ + "]", __ = RegExp(g_, "g");
function xu(e) {
  return e = _e(e), e && e.replace(c_, u_).replace(__, "");
}
var y_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function v_(e) {
  return e.match(y_) || [];
}
var b_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function w_(e) {
  return b_.test(e);
}
var ec = "\\ud800-\\udfff", $_ = "\\u0300-\\u036f", A_ = "\\ufe20-\\ufe2f", O_ = "\\u20d0-\\u20ff", E_ = $_ + A_ + O_, nc = "\\u2700-\\u27bf", tc = "a-z\\xdf-\\xf6\\xf8-\\xff", R_ = "\\xac\\xb1\\xd7\\xf7", T_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", k_ = "\\u2000-\\u206f", S_ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rc = "A-Z\\xc0-\\xd6\\xd8-\\xde", P_ = "\\ufe0e\\ufe0f", ic = R_ + T_ + k_ + S_, sc = "['’]", fl = "[" + ic + "]", I_ = "[" + E_ + "]", oc = "\\d+", j_ = "[" + nc + "]", ac = "[" + tc + "]", lc = "[^" + ec + ic + oc + nc + tc + rc + "]", C_ = "\\ud83c[\\udffb-\\udfff]", L_ = "(?:" + I_ + "|" + C_ + ")", M_ = "[^" + ec + "]", fc = "(?:\\ud83c[\\udde6-\\uddff]){2}", uc = "[\\ud800-\\udbff][\\udc00-\\udfff]", hr = "[" + rc + "]", N_ = "\\u200d", ul = "(?:" + ac + "|" + lc + ")", F_ = "(?:" + hr + "|" + lc + ")", cl = "(?:" + sc + "(?:d|ll|m|re|s|t|ve))?", dl = "(?:" + sc + "(?:D|LL|M|RE|S|T|VE))?", cc = L_ + "?", dc = "[" + P_ + "]?", W_ = "(?:" + N_ + "(?:" + [M_, fc, uc].join("|") + ")" + dc + cc + ")*", D_ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", U_ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", B_ = dc + cc + W_, q_ = "(?:" + [j_, fc, uc].join("|") + ")" + B_, z_ = RegExp([
  hr + "?" + ac + "+" + cl + "(?=" + [fl, hr, "$"].join("|") + ")",
  F_ + "+" + dl + "(?=" + [fl, hr + ul, "$"].join("|") + ")",
  hr + "?" + ul + "+" + cl,
  hr + "+" + dl,
  U_,
  D_,
  oc,
  q_
].join("|"), "g");
function G_(e) {
  return e.match(z_) || [];
}
function pc(e, n, t) {
  return e = _e(e), n = t ? void 0 : n, n === void 0 ? w_(e) ? G_(e) : v_(e) : e.match(n) || [];
}
var H_ = "['’]", K_ = RegExp(H_, "g");
function Sr(e) {
  return function(n) {
    return To(pc(xu(n).replace(K_, "")), e, "");
  };
}
var Y_ = Sr(function(e, n, t) {
  return n = n.toLowerCase(), e + (t ? Qu(n) : n);
});
const J_ = Y_;
function X_() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return re(e) ? e : [e];
}
var Z_ = Qe.isFinite, V_ = Math.min;
function So(e) {
  var n = Math[e];
  return function(t, r) {
    if (t = Pn(t), r = r == null ? 0 : V_(oe(r), 292), r && Z_(t)) {
      var i = (_e(t) + "e").split("e"), s = n(i[0] + "e" + (+i[1] + r));
      return i = (_e(s) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
    }
    return n(t);
  };
}
var Q_ = So("ceil");
const x_ = Q_;
function hc(e) {
  var n = p(e);
  return n.__chain__ = !0, n;
}
var e0 = Math.ceil, n0 = Math.max;
function t0(e, n, t) {
  (t ? ln(e, n, t) : n === void 0) ? n = 1 : n = n0(oe(n), 0);
  var r = e == null ? 0 : e.length;
  if (!r || n < 1)
    return [];
  for (var i = 0, s = 0, o = Array(e0(r / n)); i < r; )
    o[s++] = Ln(e, i, i += n);
  return o;
}
function Qt(e, n, t) {
  return e === e && (t !== void 0 && (e = e <= t ? e : t), n !== void 0 && (e = e >= n ? e : n)), e;
}
function r0(e, n, t) {
  return t === void 0 && (t = n, n = void 0), t !== void 0 && (t = Pn(t), t = t === t ? t : 0), n !== void 0 && (n = Pn(n), n = n === n ? n : 0), Qt(Pn(e), n, t);
}
function i0() {
  this.__data__ = new dt(), this.size = 0;
}
function s0(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function o0(e) {
  return this.__data__.get(e);
}
function a0(e) {
  return this.__data__.has(e);
}
var l0 = 200;
function f0(e, n) {
  var t = this.__data__;
  if (t instanceof dt) {
    var r = t.__data__;
    if (!Yr || r.length < l0 - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new pt(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function Wn(e) {
  var n = this.__data__ = new dt(e);
  this.size = n.size;
}
Wn.prototype.clear = i0;
Wn.prototype.delete = s0;
Wn.prototype.get = o0;
Wn.prototype.has = a0;
Wn.prototype.set = f0;
function mc(e, n) {
  return e && Zn(n, Je(n), e);
}
function u0(e, n) {
  return e && Zn(n, vn(n), e);
}
var gc = typeof exports == "object" && exports && !exports.nodeType && exports, pl = gc && typeof module == "object" && module && !module.nodeType && module, c0 = pl && pl.exports === gc, hl = c0 ? Qe.Buffer : void 0, ml = hl ? hl.allocUnsafe : void 0;
function _c(e, n) {
  if (n)
    return e.slice();
  var t = e.length, r = ml ? ml(t) : new e.constructor(t);
  return e.copy(r), r;
}
function jt(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, i = 0, s = []; ++t < r; ) {
    var o = e[t];
    n(o, t, e) && (s[i++] = o);
  }
  return s;
}
function Po() {
  return [];
}
var d0 = Object.prototype, p0 = d0.propertyIsEnumerable, gl = Object.getOwnPropertySymbols, Io = gl ? function(e) {
  return e == null ? [] : (e = Object(e), jt(gl(e), function(n) {
    return p0.call(e, n);
  }));
} : Po;
function h0(e, n) {
  return Zn(e, Io(e), n);
}
var m0 = Object.getOwnPropertySymbols, yc = m0 ? function(e) {
  for (var n = []; e; )
    Pt(n, Io(e)), e = ns(e);
  return n;
} : Po;
function g0(e, n) {
  return Zn(e, yc(e), n);
}
function vc(e, n, t) {
  var r = n(e);
  return re(e) ? r : Pt(r, t(e));
}
function Xs(e) {
  return vc(e, Je, Io);
}
function jo(e) {
  return vc(e, vn, yc);
}
var Zs = Zt(Qe, "DataView"), Vs = Zt(Qe, "Promise"), vr = Zt(Qe, "Set"), _l = "[object Map]", _0 = "[object Object]", yl = "[object Promise]", vl = "[object Set]", bl = "[object WeakMap]", wl = "[object DataView]", y0 = Xt(Zs), v0 = Xt(Yr), b0 = Xt(Vs), w0 = Xt(vr), $0 = Xt(Gr), Ut = fn;
(Zs && Ut(new Zs(new ArrayBuffer(1))) != wl || Yr && Ut(new Yr()) != _l || Vs && Ut(Vs.resolve()) != yl || vr && Ut(new vr()) != vl || Gr && Ut(new Gr()) != bl) && (Ut = function(e) {
  var n = fn(e), t = n == _0 ? e.constructor : void 0, r = t ? Xt(t) : "";
  if (r)
    switch (r) {
      case y0:
        return wl;
      case v0:
        return _l;
      case b0:
        return yl;
      case w0:
        return vl;
      case $0:
        return bl;
    }
  return n;
});
const Xn = Ut;
var A0 = Object.prototype, O0 = A0.hasOwnProperty;
function E0(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && O0.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Ni = Qe.Uint8Array;
function Co(e) {
  var n = new e.constructor(e.byteLength);
  return new Ni(n).set(new Ni(e)), n;
}
function R0(e, n) {
  var t = n ? Co(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var T0 = /\w*$/;
function k0(e) {
  var n = new e.constructor(e.source, T0.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var $l = sn ? sn.prototype : void 0, Al = $l ? $l.valueOf : void 0;
function S0(e) {
  return Al ? Object(Al.call(e)) : {};
}
function bc(e, n) {
  var t = n ? Co(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var P0 = "[object Boolean]", I0 = "[object Date]", j0 = "[object Map]", C0 = "[object Number]", L0 = "[object RegExp]", M0 = "[object Set]", N0 = "[object String]", F0 = "[object Symbol]", W0 = "[object ArrayBuffer]", D0 = "[object DataView]", U0 = "[object Float32Array]", B0 = "[object Float64Array]", q0 = "[object Int8Array]", z0 = "[object Int16Array]", G0 = "[object Int32Array]", H0 = "[object Uint8Array]", K0 = "[object Uint8ClampedArray]", Y0 = "[object Uint16Array]", J0 = "[object Uint32Array]";
function X0(e, n, t) {
  var r = e.constructor;
  switch (n) {
    case W0:
      return Co(e);
    case P0:
    case I0:
      return new r(+e);
    case D0:
      return R0(e, t);
    case U0:
    case B0:
    case q0:
    case z0:
    case G0:
    case H0:
    case K0:
    case Y0:
    case J0:
      return bc(e, t);
    case j0:
      return new r();
    case C0:
    case N0:
      return new r(e);
    case L0:
      return k0(e);
    case M0:
      return new r();
    case F0:
      return S0(e);
  }
}
function wc(e) {
  return typeof e.constructor == "function" && !ti(e) ? Ar(ns(e)) : {};
}
var Z0 = "[object Map]";
function V0(e) {
  return We(e) && Xn(e) == Z0;
}
var Ol = Cn && Cn.isMap, Q0 = Ol ? Rn(Ol) : V0;
const $c = Q0;
var x0 = "[object Set]";
function ey(e) {
  return We(e) && Xn(e) == x0;
}
var El = Cn && Cn.isSet, ny = El ? Rn(El) : ey;
const Ac = ny;
var ty = 1, ry = 2, iy = 4, Oc = "[object Arguments]", sy = "[object Array]", oy = "[object Boolean]", ay = "[object Date]", ly = "[object Error]", Ec = "[object Function]", fy = "[object GeneratorFunction]", uy = "[object Map]", cy = "[object Number]", Rc = "[object Object]", dy = "[object RegExp]", py = "[object Set]", hy = "[object String]", my = "[object Symbol]", gy = "[object WeakMap]", _y = "[object ArrayBuffer]", yy = "[object DataView]", vy = "[object Float32Array]", by = "[object Float64Array]", wy = "[object Int8Array]", $y = "[object Int16Array]", Ay = "[object Int32Array]", Oy = "[object Uint8Array]", Ey = "[object Uint8ClampedArray]", Ry = "[object Uint16Array]", Ty = "[object Uint32Array]", ke = {};
ke[Oc] = ke[sy] = ke[_y] = ke[yy] = ke[oy] = ke[ay] = ke[vy] = ke[by] = ke[wy] = ke[$y] = ke[Ay] = ke[uy] = ke[cy] = ke[Rc] = ke[dy] = ke[py] = ke[hy] = ke[my] = ke[Oy] = ke[Ey] = ke[Ry] = ke[Ty] = !0;
ke[ly] = ke[Ec] = ke[gy] = !1;
function In(e, n, t, r, i, s) {
  var o, a = n & ty, l = n & ry, f = n & iy;
  if (t && (o = i ? t(e, r, i, s) : t(e)), o !== void 0)
    return o;
  if (!Ce(e))
    return e;
  var u = re(e);
  if (u) {
    if (o = E0(e), !a)
      return gn(e, o);
  } else {
    var c = Xn(e), d = c == Ec || c == fy;
    if (Tt(e))
      return _c(e, a);
    if (c == Rc || c == Oc || d && !i) {
      if (o = l || d ? {} : wc(e), !a)
        return l ? g0(e, u0(o, e)) : h0(e, mc(o, e));
    } else {
      if (!ke[c])
        return i ? e : {};
      o = X0(e, c, a);
    }
  }
  s || (s = new Wn());
  var h = s.get(e);
  if (h)
    return h;
  s.set(e, o), Ac(e) ? e.forEach(function(v) {
    o.add(In(v, n, t, v, e, s));
  }) : $c(e) && e.forEach(function(v, w) {
    o.set(w, In(v, n, t, w, e, s));
  });
  var m = f ? l ? jo : Xs : l ? vn : Je, g = u ? void 0 : m(e);
  return Mn(g || e, function(v, w) {
    g && (w = v, v = e[w]), ni(o, w, In(v, n, t, w, e, s));
  }), o;
}
var ky = 4;
function Sy(e) {
  return In(e, ky);
}
var Py = 1, Iy = 4;
function jy(e) {
  return In(e, Py | Iy);
}
var Cy = 1, Ly = 4;
function My(e, n) {
  return n = typeof n == "function" ? n : void 0, In(e, Cy | Ly, n);
}
var Ny = 4;
function Fy(e, n) {
  return n = typeof n == "function" ? n : void 0, In(e, Ny, n);
}
function Wy() {
  return new jn(this.value(), this.__chain__);
}
function Dy(e) {
  for (var n = -1, t = e == null ? 0 : e.length, r = 0, i = []; ++n < t; ) {
    var s = e[n];
    s && (i[r++] = s);
  }
  return i;
}
function Uy() {
  var e = arguments.length;
  if (!e)
    return [];
  for (var n = Array(e - 1), t = arguments[0], r = e; r--; )
    n[r - 1] = arguments[r];
  return Pt(re(t) ? gn(t) : [t], nn(n, 1));
}
var By = "__lodash_hash_undefined__";
function qy(e) {
  return this.__data__.set(e, By), this;
}
function zy(e) {
  return this.__data__.has(e);
}
function Yt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new pt(); ++n < t; )
    this.add(e[n]);
}
Yt.prototype.add = Yt.prototype.push = qy;
Yt.prototype.has = zy;
function Lo(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r; )
    if (n(e[t], t, e))
      return !0;
  return !1;
}
function Jr(e, n) {
  return e.has(n);
}
var Gy = 1, Hy = 2;
function Tc(e, n, t, r, i, s) {
  var o = t & Gy, a = e.length, l = n.length;
  if (a != l && !(o && l > a))
    return !1;
  var f = s.get(e), u = s.get(n);
  if (f && u)
    return f == n && u == e;
  var c = -1, d = !0, h = t & Hy ? new Yt() : void 0;
  for (s.set(e, n), s.set(n, e); ++c < a; ) {
    var m = e[c], g = n[c];
    if (r)
      var v = o ? r(g, m, c, n, e, s) : r(m, g, c, e, n, s);
    if (v !== void 0) {
      if (v)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!Lo(n, function(w, A) {
        if (!Jr(h, A) && (m === w || i(m, w, t, r, s)))
          return h.push(A);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === g || i(m, g, t, r, s))) {
      d = !1;
      break;
    }
  }
  return s.delete(e), s.delete(n), d;
}
function Mo(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r, i) {
    t[++n] = [i, r];
  }), t;
}
function ts(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r) {
    t[++n] = r;
  }), t;
}
var Ky = 1, Yy = 2, Jy = "[object Boolean]", Xy = "[object Date]", Zy = "[object Error]", Vy = "[object Map]", Qy = "[object Number]", xy = "[object RegExp]", ev = "[object Set]", nv = "[object String]", tv = "[object Symbol]", rv = "[object ArrayBuffer]", iv = "[object DataView]", Rl = sn ? sn.prototype : void 0, js = Rl ? Rl.valueOf : void 0;
function sv(e, n, t, r, i, s, o) {
  switch (t) {
    case iv:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case rv:
      return !(e.byteLength != n.byteLength || !s(new Ni(e), new Ni(n)));
    case Jy:
    case Xy:
    case Qy:
      return qn(+e, +n);
    case Zy:
      return e.name == n.name && e.message == n.message;
    case xy:
    case nv:
      return e == n + "";
    case Vy:
      var a = Mo;
    case ev:
      var l = r & Ky;
      if (a || (a = ts), e.size != n.size && !l)
        return !1;
      var f = o.get(e);
      if (f)
        return f == n;
      r |= Yy, o.set(e, n);
      var u = Tc(a(e), a(n), r, i, s, o);
      return o.delete(e), u;
    case tv:
      if (js)
        return js.call(e) == js.call(n);
  }
  return !1;
}
var ov = 1, av = Object.prototype, lv = av.hasOwnProperty;
function fv(e, n, t, r, i, s) {
  var o = t & ov, a = Xs(e), l = a.length, f = Xs(n), u = f.length;
  if (l != u && !o)
    return !1;
  for (var c = l; c--; ) {
    var d = a[c];
    if (!(o ? d in n : lv.call(n, d)))
      return !1;
  }
  var h = s.get(e), m = s.get(n);
  if (h && m)
    return h == n && m == e;
  var g = !0;
  s.set(e, n), s.set(n, e);
  for (var v = o; ++c < l; ) {
    d = a[c];
    var w = e[d], A = n[d];
    if (r)
      var C = o ? r(A, w, d, n, e, s) : r(w, A, d, e, n, s);
    if (!(C === void 0 ? w === A || i(w, A, t, r, s) : C)) {
      g = !1;
      break;
    }
    v || (v = d == "constructor");
  }
  if (g && !v) {
    var W = e.constructor, I = n.constructor;
    W != I && "constructor" in e && "constructor" in n && !(typeof W == "function" && W instanceof W && typeof I == "function" && I instanceof I) && (g = !1);
  }
  return s.delete(e), s.delete(n), g;
}
var uv = 1, Tl = "[object Arguments]", kl = "[object Array]", vi = "[object Object]", cv = Object.prototype, Sl = cv.hasOwnProperty;
function dv(e, n, t, r, i, s) {
  var o = re(e), a = re(n), l = o ? kl : Xn(e), f = a ? kl : Xn(n);
  l = l == Tl ? vi : l, f = f == Tl ? vi : f;
  var u = l == vi, c = f == vi, d = l == f;
  if (d && Tt(e)) {
    if (!Tt(n))
      return !1;
    o = !0, u = !1;
  }
  if (d && !u)
    return s || (s = new Wn()), o || Tr(e) ? Tc(e, n, t, r, i, s) : sv(e, n, l, t, r, i, s);
  if (!(t & uv)) {
    var h = u && Sl.call(e, "__wrapped__"), m = c && Sl.call(n, "__wrapped__");
    if (h || m) {
      var g = h ? e.value() : e, v = m ? n.value() : n;
      return s || (s = new Wn()), i(g, v, t, r, s);
    }
  }
  return d ? (s || (s = new Wn()), fv(e, n, t, r, i, s)) : !1;
}
function ii(e, n, t, r, i) {
  return e === n ? !0 : e == null || n == null || !We(e) && !We(n) ? e !== e && n !== n : dv(e, n, t, r, ii, i);
}
var pv = 1, hv = 2;
function No(e, n, t, r) {
  var i = t.length, s = i, o = !r;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var a = t[i];
    if (o && a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    a = t[i];
    var l = a[0], f = e[l], u = a[1];
    if (o && a[2]) {
      if (f === void 0 && !(l in e))
        return !1;
    } else {
      var c = new Wn();
      if (r)
        var d = r(f, u, l, e, n, c);
      if (!(d === void 0 ? ii(u, f, pv | hv, r, c) : d))
        return !1;
    }
  }
  return !0;
}
function kc(e) {
  return e === e && !Ce(e);
}
function Fo(e) {
  for (var n = Je(e), t = n.length; t--; ) {
    var r = n[t], i = e[r];
    n[t] = [r, i, kc(i)];
  }
  return n;
}
function Sc(e, n) {
  return function(t) {
    return t == null ? !1 : t[e] === n && (n !== void 0 || e in Object(t));
  };
}
function Pc(e) {
  var n = Fo(e);
  return n.length == 1 && n[0][2] ? Sc(n[0][0], n[0][1]) : function(t) {
    return t === e || No(t, e, n);
  };
}
function mv(e, n) {
  return e != null && n in Object(e);
}
function Ic(e, n, t) {
  n = St(n, e);
  for (var r = -1, i = n.length, s = !1; ++r < i; ) {
    var o = Vn(n[r]);
    if (!(s = e != null && t(e, o)))
      break;
    e = e[o];
  }
  return s || ++r != i ? s : (i = e == null ? 0 : e.length, !!i && Vi(i) && ft(o, i) && (re(e) || Ht(e)));
}
function Wo(e, n) {
  return e != null && Ic(e, n, mv);
}
var gv = 1, _v = 2;
function jc(e, n) {
  return wo(e) && kc(n) ? Sc(Vn(e), n) : function(t) {
    var r = wr(t, e);
    return r === void 0 && r === n ? Wo(t, e) : ii(n, r, gv | _v);
  };
}
function Do(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
function yv(e) {
  return function(n) {
    return Vt(n, e);
  };
}
function Cc(e) {
  return wo(e) ? Do(Vn(e)) : yv(e);
}
function te(e) {
  return typeof e == "function" ? e : e == null ? un : typeof e == "object" ? re(e) ? jc(e[0], e[1]) : Pc(e) : Cc(e);
}
var vv = "Expected a function";
function bv(e) {
  var n = e == null ? 0 : e.length, t = te;
  return e = n ? je(e, function(r) {
    if (typeof r[1] != "function")
      throw new TypeError(vv);
    return [t(r[0]), r[1]];
  }) : [], le(function(r) {
    for (var i = -1; ++i < n; ) {
      var s = e[i];
      if (En(s[0], this, r))
        return En(s[1], this, r);
    }
  });
}
function Lc(e, n, t) {
  var r = t.length;
  if (e == null)
    return !r;
  for (e = Object(e); r--; ) {
    var i = t[r], s = n[i], o = e[i];
    if (o === void 0 && !(i in e) || !s(o))
      return !1;
  }
  return !0;
}
function wv(e) {
  var n = Je(e);
  return function(t) {
    return Lc(t, e, n);
  };
}
var $v = 1;
function Av(e) {
  return wv(In(e, $v));
}
function Ov(e, n) {
  return n == null || Lc(e, n, Je(n));
}
function Ev(e, n, t, r) {
  for (var i = -1, s = e == null ? 0 : e.length; ++i < s; ) {
    var o = e[i];
    n(r, o, t(o), e);
  }
  return r;
}
function Mc(e) {
  return function(n, t, r) {
    for (var i = -1, s = Object(n), o = r(n), a = o.length; a--; ) {
      var l = o[e ? a : ++i];
      if (t(s[l], l, s) === !1)
        break;
    }
    return n;
  };
}
var Uo = Mc();
function Qn(e, n) {
  return e && Uo(e, n, Je);
}
function Nc(e, n) {
  return function(t, r) {
    if (t == null)
      return t;
    if (!yn(t))
      return e(t, r);
    for (var i = t.length, s = n ? i : -1, o = Object(t); (n ? s-- : ++s < i) && r(o[s], s, o) !== !1; )
      ;
    return t;
  };
}
var Ct = Nc(Qn);
function Rv(e, n, t, r) {
  return Ct(e, function(i, s, o) {
    n(r, i, t(i), o);
  }), r;
}
function rs(e, n) {
  return function(t, r) {
    var i = re(t) ? Ev : Rv, s = n ? n() : {};
    return i(t, e, te(r), s);
  };
}
var Tv = Object.prototype, kv = Tv.hasOwnProperty, Sv = rs(function(e, n, t) {
  kv.call(e, t) ? ++e[t] : ct(e, t, 1);
});
const Pv = Sv;
function Iv(e, n) {
  var t = Ar(e);
  return n == null ? t : mc(t, n);
}
var jv = 8;
function Bo(e, n, t) {
  n = t ? void 0 : n;
  var r = ut(e, jv, void 0, void 0, void 0, void 0, void 0, n);
  return r.placeholder = Bo.placeholder, r;
}
Bo.placeholder = {};
var Cv = 16;
function qo(e, n, t) {
  n = t ? void 0 : n;
  var r = ut(e, Cv, void 0, void 0, void 0, void 0, void 0, n);
  return r.placeholder = qo.placeholder, r;
}
qo.placeholder = {};
var Lv = function() {
  return Qe.Date.now();
};
const Pi = Lv;
var Mv = "Expected a function", Nv = Math.max, Fv = Math.min;
function Fc(e, n, t) {
  var r, i, s, o, a, l, f = 0, u = !1, c = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Mv);
  n = Pn(n) || 0, Ce(t) && (u = !!t.leading, c = "maxWait" in t, s = c ? Nv(Pn(t.maxWait) || 0, n) : s, d = "trailing" in t ? !!t.trailing : d);
  function h(F) {
    var L = r, D = i;
    return r = i = void 0, f = F, o = e.apply(D, L), o;
  }
  function m(F) {
    return f = F, a = setTimeout(w, n), u ? h(F) : o;
  }
  function g(F) {
    var L = F - l, D = F - f, P = n - L;
    return c ? Fv(P, s - D) : P;
  }
  function v(F) {
    var L = F - l, D = F - f;
    return l === void 0 || L >= n || L < 0 || c && D >= s;
  }
  function w() {
    var F = Pi();
    if (v(F))
      return A(F);
    a = setTimeout(w, g(F));
  }
  function A(F) {
    return a = void 0, d && r ? h(F) : (r = i = void 0, o);
  }
  function C() {
    a !== void 0 && clearTimeout(a), f = 0, r = l = i = a = void 0;
  }
  function W() {
    return a === void 0 ? o : A(Pi());
  }
  function I() {
    var F = Pi(), L = v(F);
    if (r = arguments, i = this, l = F, L) {
      if (a === void 0)
        return m(l);
      if (c)
        return clearTimeout(a), a = setTimeout(w, n), h(l);
    }
    return a === void 0 && (a = setTimeout(w, n)), o;
  }
  return I.cancel = C, I.flush = W, I;
}
function Wv(e, n) {
  return e == null || e !== e ? n : e;
}
var Wc = Object.prototype, Dv = Wc.hasOwnProperty, Uv = le(function(e, n) {
  e = Object(e);
  var t = -1, r = n.length, i = r > 2 ? n[2] : void 0;
  for (i && ln(n[0], n[1], i) && (r = 1); ++t < r; )
    for (var s = n[t], o = vn(s), a = -1, l = o.length; ++a < l; ) {
      var f = o[a], u = e[f];
      (u === void 0 || qn(u, Wc[f]) && !Dv.call(e, f)) && (e[f] = s[f]);
    }
  return e;
});
const Bv = Uv;
function Qs(e, n, t) {
  (t !== void 0 && !qn(e[n], t) || t === void 0 && !(n in e)) && ct(e, n, t);
}
function Ge(e) {
  return We(e) && yn(e);
}
function xs(e, n) {
  if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
    return e[n];
}
function Dc(e) {
  return Zn(e, vn(e));
}
function qv(e, n, t, r, i, s, o) {
  var a = xs(e, t), l = xs(n, t), f = o.get(l);
  if (f) {
    Qs(e, t, f);
    return;
  }
  var u = s ? s(a, l, t + "", e, n, o) : void 0, c = u === void 0;
  if (c) {
    var d = re(l), h = !d && Tt(l), m = !d && !h && Tr(l);
    u = l, d || h || m ? re(a) ? u = a : Ge(a) ? u = gn(a) : h ? (c = !1, u = _c(l, !0)) : m ? (c = !1, u = bc(l, !0)) : u = [] : ri(l) || Ht(l) ? (u = a, Ht(a) ? u = Dc(a) : (!Ce(a) || lt(a)) && (u = wc(l))) : c = !1;
  }
  c && (o.set(l, u), i(u, l, r, s, o), o.delete(l)), Qs(e, t, u);
}
function is(e, n, t, r, i) {
  e !== n && Uo(n, function(s, o) {
    if (i || (i = new Wn()), Ce(s))
      qv(e, n, o, t, is, r, i);
    else {
      var a = r ? r(xs(e, o), s, o + "", e, n, i) : void 0;
      a === void 0 && (a = s), Qs(e, o, a);
    }
  }, vn);
}
function Uc(e, n, t, r, i, s) {
  return Ce(e) && Ce(n) && (s.set(n, e), is(e, n, void 0, Uc, s), s.delete(n)), e;
}
var zv = Rr(function(e, n, t, r) {
  is(e, n, t, r);
});
const Bc = zv;
var Gv = le(function(e) {
  return e.push(void 0, Uc), En(Bc, void 0, e);
});
const Hv = Gv;
var Kv = "Expected a function";
function qc(e, n, t) {
  if (typeof e != "function")
    throw new TypeError(Kv);
  return setTimeout(function() {
    e.apply(void 0, t);
  }, n);
}
var Yv = le(function(e, n) {
  return qc(e, 1, n);
});
const Jv = Yv;
var Xv = le(function(e, n, t) {
  return qc(e, Pn(n) || 0, t);
});
const Zv = Xv;
function zo(e, n, t) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (t(n, e[r]))
      return !0;
  return !1;
}
var Vv = 200;
function si(e, n, t, r) {
  var i = -1, s = Xi, o = !0, a = e.length, l = [], f = n.length;
  if (!a)
    return l;
  t && (n = je(n, Rn(t))), r ? (s = zo, o = !1) : n.length >= Vv && (s = Jr, o = !1, n = new Yt(n));
  e:
    for (; ++i < a; ) {
      var u = e[i], c = t == null ? u : t(u);
      if (u = r || u !== 0 ? u : 0, o && c === c) {
        for (var d = f; d--; )
          if (n[d] === c)
            continue e;
        l.push(u);
      } else
        s(n, c, r) || l.push(u);
    }
  return l;
}
var Qv = le(function(e, n) {
  return Ge(e) ? si(e, nn(n, 1, Ge, !0)) : [];
});
const xv = Qv;
function Tn(e) {
  var n = e == null ? 0 : e.length;
  return n ? e[n - 1] : void 0;
}
var eb = le(function(e, n) {
  var t = Tn(n);
  return Ge(t) && (t = void 0), Ge(e) ? si(e, nn(n, 1, Ge, !0), te(t)) : [];
});
const nb = eb;
var tb = le(function(e, n) {
  var t = Tn(n);
  return Ge(t) && (t = void 0), Ge(e) ? si(e, nn(n, 1, Ge, !0), void 0, t) : [];
});
const rb = tb;
var ib = Ki(function(e, n) {
  return e / n;
}, 1);
const sb = ib;
function ob(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (n = t || n === void 0 ? 1 : oe(n), Ln(e, n < 0 ? 0 : n, r)) : [];
}
function ab(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (n = t || n === void 0 ? 1 : oe(n), n = r - n, Ln(e, 0, n < 0 ? 0 : n)) : [];
}
function ss(e, n, t, r) {
  for (var i = e.length, s = r ? i : -1; (r ? s-- : ++s < i) && n(e[s], s, e); )
    ;
  return t ? Ln(e, r ? 0 : s, r ? s + 1 : i) : Ln(e, r ? s + 1 : 0, r ? i : s);
}
function lb(e, n) {
  return e && e.length ? ss(e, te(n), !0, !0) : [];
}
function fb(e, n) {
  return e && e.length ? ss(e, te(n), !0) : [];
}
function xn(e) {
  return typeof e == "function" ? e : un;
}
function Pl(e, n) {
  var t = re(e) ? Mn : Ct;
  return t(e, xn(n));
}
function ub(e, n) {
  for (var t = e == null ? 0 : e.length; t-- && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var zc = Mc(!0);
function Go(e, n) {
  return e && zc(e, n, Je);
}
var cb = Nc(Go, !0);
const Gc = cb;
function Il(e, n) {
  var t = re(e) ? ub : Gc;
  return t(e, xn(n));
}
function db(e, n, t) {
  e = _e(e), n = On(n);
  var r = e.length;
  t = t === void 0 ? r : Qt(oe(t), 0, r);
  var i = t;
  return t -= n.length, t >= 0 && e.slice(t, i) == n;
}
function pb(e, n) {
  return je(n, function(t) {
    return [t, e[t]];
  });
}
function hb(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r) {
    t[++n] = [r, r];
  }), t;
}
var mb = "[object Map]", gb = "[object Set]";
function Hc(e) {
  return function(n) {
    var t = Xn(n);
    return t == mb ? Mo(n) : t == gb ? hb(n) : pb(n, e(n));
  };
}
var _b = Hc(Je);
const jl = _b;
var yb = Hc(vn);
const Cl = yb;
var vb = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, bb = ko(vb);
const wb = bb;
var Kc = /[&<>"']/g, $b = RegExp(Kc.source);
function Yc(e) {
  return e = _e(e), e && $b.test(e) ? e.replace(Kc, wb) : e;
}
var Jc = /[\\^$.*+?()[\]{}|]/g, Ab = RegExp(Jc.source);
function Ob(e) {
  return e = _e(e), e && Ab.test(e) ? e.replace(Jc, "\\$&") : e;
}
function Xc(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r; )
    if (!n(e[t], t, e))
      return !1;
  return !0;
}
function Eb(e, n) {
  var t = !0;
  return Ct(e, function(r, i, s) {
    return t = !!n(r, i, s), t;
  }), t;
}
function Rb(e, n, t) {
  var r = re(e) ? Xc : Eb;
  return t && ln(e, n, t) && (n = void 0), r(e, te(n));
}
var Tb = 4294967295;
function Zc(e) {
  return e ? Qt(oe(e), 0, Tb) : 0;
}
function kb(e, n, t, r) {
  var i = e.length;
  for (t = oe(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === void 0 || r > i ? i : oe(r), r < 0 && (r += i), r = t > r ? 0 : Zc(r); t < r; )
    e[t++] = n;
  return e;
}
function Sb(e, n, t, r) {
  var i = e == null ? 0 : e.length;
  return i ? (t && typeof t != "number" && ln(e, n, t) && (t = 0, r = i), kb(e, n, t, r)) : [];
}
function Vc(e, n) {
  var t = [];
  return Ct(e, function(r, i, s) {
    n(r, i, s) && t.push(r);
  }), t;
}
function Pb(e, n) {
  var t = re(e) ? jt : Vc;
  return t(e, te(n));
}
function Qc(e) {
  return function(n, t, r) {
    var i = Object(n);
    if (!yn(n)) {
      var s = te(t);
      n = Je(n), t = function(a) {
        return s(i[a], a, i);
      };
    }
    var o = e(n, t, r);
    return o > -1 ? i[s ? n[o] : o] : void 0;
  };
}
var Ib = Math.max;
function xc(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = t == null ? 0 : oe(t);
  return i < 0 && (i = Ib(r + i, 0)), Ji(e, te(n), i);
}
var jb = Qc(xc);
const Cb = jb;
function ed(e, n, t) {
  var r;
  return t(e, function(i, s, o) {
    if (n(i, s, o))
      return r = s, !1;
  }), r;
}
function Lb(e, n) {
  return ed(e, te(n), Qn);
}
var Mb = Math.max, Nb = Math.min;
function nd(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = r - 1;
  return t !== void 0 && (i = oe(t), i = t < 0 ? Mb(r + i, 0) : Nb(i, r - 1)), Ji(e, te(n), i, !0);
}
var Fb = Qc(nd);
const Wb = Fb;
function Db(e, n) {
  return ed(e, te(n), Go);
}
function Ll(e) {
  return e && e.length ? e[0] : void 0;
}
function td(e, n) {
  var t = -1, r = yn(e) ? Array(e.length) : [];
  return Ct(e, function(i, s, o) {
    r[++t] = n(i, s, o);
  }), r;
}
function os(e, n) {
  var t = re(e) ? je : td;
  return t(e, te(n));
}
function Ub(e, n) {
  return nn(os(e, n), 1);
}
var Bb = 1 / 0;
function qb(e, n) {
  return nn(os(e, n), Bb);
}
function zb(e, n, t) {
  return t = t === void 0 ? 1 : oe(t), nn(os(e, n), t);
}
var Gb = 1 / 0;
function Hb(e) {
  var n = e == null ? 0 : e.length;
  return n ? nn(e, Gb) : [];
}
function Kb(e, n) {
  var t = e == null ? 0 : e.length;
  return t ? (n = n === void 0 ? 1 : oe(n), nn(e, n)) : [];
}
var Yb = 512;
function Jb(e) {
  return ut(e, Yb);
}
var Xb = So("floor");
const Zb = Xb;
var Vb = "Expected a function", Qb = 8, xb = 32, ew = 128, nw = 256;
function rd(e) {
  return ht(function(n) {
    var t = n.length, r = t, i = jn.prototype.thru;
    for (e && n.reverse(); r--; ) {
      var s = n[r];
      if (typeof s != "function")
        throw new TypeError(Vb);
      if (i && !o && Si(s) == "wrapper")
        var o = new jn([], !0);
    }
    for (r = o ? r : t; ++r < t; ) {
      s = n[r];
      var a = Si(s), l = a == "wrapper" ? mo(s) : void 0;
      l && Ks(l[0]) && l[1] == (ew | Qb | xb | nw) && !l[4].length && l[9] == 1 ? o = o[Si(l[0])].apply(o, l[3]) : o = s.length == 1 && Ks(s) ? o[a]() : o.thru(s);
    }
    return function() {
      var f = arguments, u = f[0];
      if (o && f.length == 1 && re(u))
        return o.plant(u).value();
      for (var c = 0, d = t ? n[c].apply(this, f) : u; ++c < t; )
        d = n[c].call(this, d);
      return d;
    };
  });
}
var tw = rd();
const rw = tw;
var iw = rd(!0);
const sw = iw;
function ow(e, n) {
  return e == null ? e : Uo(e, xn(n), vn);
}
function aw(e, n) {
  return e == null ? e : zc(e, xn(n), vn);
}
function lw(e, n) {
  return e && Qn(e, xn(n));
}
function fw(e, n) {
  return e && Go(e, xn(n));
}
function uw(e) {
  for (var n = -1, t = e == null ? 0 : e.length, r = {}; ++n < t; ) {
    var i = e[n];
    r[i[0]] = i[1];
  }
  return r;
}
function as(e, n) {
  return jt(n, function(t) {
    return lt(e[t]);
  });
}
function cw(e) {
  return e == null ? [] : as(e, Je(e));
}
function dw(e) {
  return e == null ? [] : as(e, vn(e));
}
var pw = Object.prototype, hw = pw.hasOwnProperty, mw = rs(function(e, n, t) {
  hw.call(e, t) ? e[t].push(n) : ct(e, t, [n]);
});
const gw = mw;
function Ho(e, n) {
  return e > n;
}
function ls(e) {
  return function(n, t) {
    return typeof n == "string" && typeof t == "string" || (n = Pn(n), t = Pn(t)), e(n, t);
  };
}
var _w = ls(Ho);
const yw = _w;
var vw = ls(function(e, n) {
  return e >= n;
});
const bw = vw;
var ww = Object.prototype, $w = ww.hasOwnProperty;
function Aw(e, n) {
  return e != null && $w.call(e, n);
}
function Ow(e, n) {
  return e != null && Ic(e, n, Aw);
}
var Ew = Math.max, Rw = Math.min;
function Tw(e, n, t) {
  return e >= Rw(n, t) && e < Ew(n, t);
}
function kw(e, n, t) {
  return n = at(n), t === void 0 ? (t = n, n = 0) : t = at(t), e = Pn(e), Tw(e, n, t);
}
var Sw = "[object String]";
function fs(e) {
  return typeof e == "string" || !re(e) && We(e) && fn(e) == Sw;
}
function Ko(e, n) {
  return je(n, function(t) {
    return e[t];
  });
}
function Pr(e) {
  return e == null ? [] : Ko(e, Je(e));
}
var Pw = Math.max;
function Iw(e, n, t, r) {
  e = yn(e) ? e : Pr(e), t = t && !r ? oe(t) : 0;
  var i = e.length;
  return t < 0 && (t = Pw(i + t, 0)), fs(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && Or(e, n, t) > -1;
}
var jw = Math.max;
function Cw(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = t == null ? 0 : oe(t);
  return i < 0 && (i = jw(r + i, 0)), Or(e, n, i);
}
function Lw(e) {
  var n = e == null ? 0 : e.length;
  return n ? Ln(e, 0, -1) : [];
}
var Mw = Math.min;
function Yo(e, n, t) {
  for (var r = t ? zo : Xi, i = e[0].length, s = e.length, o = s, a = Array(s), l = 1 / 0, f = []; o--; ) {
    var u = e[o];
    o && n && (u = je(u, Rn(n))), l = Mw(u.length, l), a[o] = !t && (n || i >= 120 && u.length >= 120) ? new Yt(o && u) : void 0;
  }
  u = e[0];
  var c = -1, d = a[0];
  e:
    for (; ++c < i && f.length < l; ) {
      var h = u[c], m = n ? n(h) : h;
      if (h = t || h !== 0 ? h : 0, !(d ? Jr(d, m) : r(f, m, t))) {
        for (o = s; --o; ) {
          var g = a[o];
          if (!(g ? Jr(g, m) : r(e[o], m, t)))
            continue e;
        }
        d && d.push(m), f.push(h);
      }
    }
  return f;
}
function Jo(e) {
  return Ge(e) ? e : [];
}
var Nw = le(function(e) {
  var n = je(e, Jo);
  return n.length && n[0] === e[0] ? Yo(n) : [];
});
const Fw = Nw;
var Ww = le(function(e) {
  var n = Tn(e), t = je(e, Jo);
  return n === Tn(t) ? n = void 0 : t.pop(), t.length && t[0] === e[0] ? Yo(t, te(n)) : [];
});
const Dw = Ww;
var Uw = le(function(e) {
  var n = Tn(e), t = je(e, Jo);
  return n = typeof n == "function" ? n : void 0, n && t.pop(), t.length && t[0] === e[0] ? Yo(t, void 0, n) : [];
});
const Bw = Uw;
function qw(e, n, t, r) {
  return Qn(e, function(i, s, o) {
    n(r, t(i), s, o);
  }), r;
}
function id(e, n) {
  return function(t, r) {
    return qw(t, e, n(r), {});
  };
}
var zw = Object.prototype, Gw = zw.toString, Hw = id(function(e, n, t) {
  n != null && typeof n.toString != "function" && (n = Gw.call(n)), e[n] = t;
}, go(un));
const Kw = Hw;
var sd = Object.prototype, Yw = sd.hasOwnProperty, Jw = sd.toString, Xw = id(function(e, n, t) {
  n != null && typeof n.toString != "function" && (n = Jw.call(n)), Yw.call(e, n) ? e[n].push(t) : e[n] = [t];
}, te);
const Zw = Xw;
function od(e, n) {
  return n.length < 2 ? e : Vt(e, Ln(n, 0, -1));
}
function oi(e, n, t) {
  n = St(n, e), e = od(e, n);
  var r = e == null ? e : e[Vn(Tn(n))];
  return r == null ? void 0 : En(r, e, t);
}
var Vw = le(oi);
const Qw = Vw;
var xw = le(function(e, n, t) {
  var r = -1, i = typeof n == "function", s = yn(e) ? Array(e.length) : [];
  return Ct(e, function(o) {
    s[++r] = i ? En(n, o, t) : oi(o, n, t);
  }), s;
});
const e2 = xw;
var n2 = "[object ArrayBuffer]";
function t2(e) {
  return We(e) && fn(e) == n2;
}
var Ml = Cn && Cn.isArrayBuffer, r2 = Ml ? Rn(Ml) : t2;
const i2 = r2;
var s2 = "[object Boolean]";
function o2(e) {
  return e === !0 || e === !1 || We(e) && fn(e) == s2;
}
var a2 = "[object Date]";
function l2(e) {
  return We(e) && fn(e) == a2;
}
var Nl = Cn && Cn.isDate, f2 = Nl ? Rn(Nl) : l2;
const u2 = f2;
function c2(e) {
  return We(e) && e.nodeType === 1 && !ri(e);
}
var d2 = "[object Map]", p2 = "[object Set]", h2 = Object.prototype, m2 = h2.hasOwnProperty;
function g2(e) {
  if (e == null)
    return !0;
  if (yn(e) && (re(e) || typeof e == "string" || typeof e.splice == "function" || Tt(e) || Tr(e) || Ht(e)))
    return !e.length;
  var n = Xn(e);
  if (n == d2 || n == p2)
    return !e.size;
  if (ti(e))
    return !bo(e).length;
  for (var t in e)
    if (m2.call(e, t))
      return !1;
  return !0;
}
function _2(e, n) {
  return ii(e, n);
}
function y2(e, n, t) {
  t = typeof t == "function" ? t : void 0;
  var r = t ? t(e, n) : void 0;
  return r === void 0 ? ii(e, n, void 0, t) : !!r;
}
var v2 = Qe.isFinite;
function b2(e) {
  return typeof e == "number" && v2(e);
}
function ad(e) {
  return typeof e == "number" && e == oe(e);
}
function w2(e, n) {
  return e === n || No(e, n, Fo(n));
}
function $2(e, n, t) {
  return t = typeof t == "function" ? t : void 0, No(e, n, Fo(n), t);
}
var A2 = "[object Number]";
function ld(e) {
  return typeof e == "number" || We(e) && fn(e) == A2;
}
function O2(e) {
  return ld(e) && e != +e;
}
var E2 = ki ? lt : vo, R2 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";
function T2(e) {
  if (E2(e))
    throw new Error(R2);
  return $u(e);
}
function k2(e) {
  return e == null;
}
function S2(e) {
  return e === null;
}
var P2 = "[object RegExp]";
function I2(e) {
  return We(e) && fn(e) == P2;
}
var Fl = Cn && Cn.isRegExp, j2 = Fl ? Rn(Fl) : I2;
const Xo = j2;
var Wl = 9007199254740991;
function C2(e) {
  return ad(e) && e >= -Wl && e <= Wl;
}
function L2(e) {
  return e === void 0;
}
var M2 = "[object WeakMap]";
function N2(e) {
  return We(e) && Xn(e) == M2;
}
var F2 = "[object WeakSet]";
function W2(e) {
  return We(e) && fn(e) == F2;
}
var D2 = 1;
function U2(e) {
  return te(typeof e == "function" ? e : In(e, D2));
}
var B2 = Array.prototype, q2 = B2.join;
function z2(e, n) {
  return e == null ? "" : q2.call(e, n);
}
var G2 = Sr(function(e, n, t) {
  return e + (t ? "-" : "") + n.toLowerCase();
});
const H2 = G2;
var K2 = rs(function(e, n, t) {
  ct(e, t, n);
});
const Y2 = K2;
function J2(e, n, t) {
  for (var r = t + 1; r--; )
    if (e[r] === n)
      return r;
  return r;
}
var X2 = Math.max, Z2 = Math.min;
function V2(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = r;
  return t !== void 0 && (i = oe(t), i = i < 0 ? X2(r + i, 0) : Z2(i, r - 1)), n === n ? J2(e, n, i) : Ji(e, Su, i, !0);
}
var Q2 = Sr(function(e, n, t) {
  return e + (t ? " " : "") + n.toLowerCase();
});
const x2 = Q2;
var e$ = Vu("toLowerCase");
const n$ = e$;
function Zo(e, n) {
  return e < n;
}
var t$ = ls(Zo);
const r$ = t$;
var i$ = ls(function(e, n) {
  return e <= n;
});
const s$ = i$;
function o$(e, n) {
  var t = {};
  return n = te(n), Qn(e, function(r, i, s) {
    ct(t, n(r, i, s), r);
  }), t;
}
function a$(e, n) {
  var t = {};
  return n = te(n), Qn(e, function(r, i, s) {
    ct(t, i, n(r, i, s));
  }), t;
}
var l$ = 1;
function f$(e) {
  return Pc(In(e, l$));
}
var u$ = 1;
function c$(e, n) {
  return jc(e, In(n, u$));
}
function us(e, n, t) {
  for (var r = -1, i = e.length; ++r < i; ) {
    var s = e[r], o = n(s);
    if (o != null && (a === void 0 ? o === o && !An(o) : t(o, a)))
      var a = o, l = s;
  }
  return l;
}
function d$(e) {
  return e && e.length ? us(e, un, Ho) : void 0;
}
function p$(e, n) {
  return e && e.length ? us(e, te(n), Ho) : void 0;
}
function Vo(e, n) {
  for (var t, r = -1, i = e.length; ++r < i; ) {
    var s = n(e[r]);
    s !== void 0 && (t = t === void 0 ? s : t + s);
  }
  return t;
}
var h$ = NaN;
function fd(e, n) {
  var t = e == null ? 0 : e.length;
  return t ? Vo(e, n) / t : h$;
}
function m$(e) {
  return fd(e, un);
}
function g$(e, n) {
  return fd(e, te(n));
}
var _$ = Rr(function(e, n, t) {
  is(e, n, t);
});
const y$ = _$;
var v$ = le(function(e, n) {
  return function(t) {
    return oi(t, e, n);
  };
});
const b$ = v$;
var w$ = le(function(e, n) {
  return function(t) {
    return oi(e, t, n);
  };
});
const $$ = w$;
function A$(e) {
  return e && e.length ? us(e, un, Zo) : void 0;
}
function O$(e, n) {
  return e && e.length ? us(e, te(n), Zo) : void 0;
}
function ud(e, n, t) {
  var r = Je(n), i = as(n, r), s = !(Ce(t) && "chain" in t) || !!t.chain, o = lt(e);
  return Mn(i, function(a) {
    var l = n[a];
    e[a] = l, o && (e.prototype[a] = function() {
      var f = this.__chain__;
      if (s || f) {
        var u = e(this.__wrapped__), c = u.__actions__ = gn(this.__actions__);
        return c.push({ func: l, args: arguments, thisArg: e }), u.__chain__ = f, u;
      }
      return l.apply(e, Pt([this.value()], arguments));
    });
  }), e;
}
var E$ = Ki(function(e, n) {
  return e * n;
}, 1);
const R$ = E$;
var T$ = "Expected a function";
function ai(e) {
  if (typeof e != "function")
    throw new TypeError(T$);
  return function() {
    var n = arguments;
    switch (n.length) {
      case 0:
        return !e.call(this);
      case 1:
        return !e.call(this, n[0]);
      case 2:
        return !e.call(this, n[0], n[1]);
      case 3:
        return !e.call(this, n[0], n[1], n[2]);
    }
    return !e.apply(this, n);
  };
}
function k$(e) {
  for (var n, t = []; !(n = e.next()).done; )
    t.push(n.value);
  return t;
}
var S$ = "[object Map]", P$ = "[object Set]", Cs = sn ? sn.iterator : void 0;
function cd(e) {
  if (!e)
    return [];
  if (yn(e))
    return fs(e) ? Bn(e) : gn(e);
  if (Cs && e[Cs])
    return k$(e[Cs]());
  var n = Xn(e), t = n == S$ ? Mo : n == P$ ? ts : Pr;
  return t(e);
}
function I$() {
  this.__values__ === void 0 && (this.__values__ = cd(this.value()));
  var e = this.__index__ >= this.__values__.length, n = e ? void 0 : this.__values__[this.__index__++];
  return { done: e, value: n };
}
function dd(e, n) {
  var t = e.length;
  if (t)
    return n += n < 0 ? t : 0, ft(n, t) ? e[n] : void 0;
}
function j$(e, n) {
  return e && e.length ? dd(e, oe(n)) : void 0;
}
function C$(e) {
  return e = oe(e), le(function(n) {
    return dd(n, e);
  });
}
function Qo(e, n) {
  return n = St(n, e), e = od(e, n), e == null || delete e[Vn(Tn(n))];
}
function L$(e) {
  return ri(e) ? void 0 : e;
}
var M$ = 1, N$ = 2, F$ = 4, W$ = ht(function(e, n) {
  var t = {};
  if (e == null)
    return t;
  var r = !1;
  n = je(n, function(s) {
    return s = St(s, e), r || (r = s.length > 1), s;
  }), Zn(e, jo(e), t), r && (t = In(t, M$ | N$ | F$, L$));
  for (var i = n.length; i--; )
    Qo(t, n[i]);
  return t;
});
const D$ = W$;
function li(e, n, t, r) {
  if (!Ce(e))
    return e;
  n = St(n, e);
  for (var i = -1, s = n.length, o = s - 1, a = e; a != null && ++i < s; ) {
    var l = Vn(n[i]), f = t;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != o) {
      var u = a[l];
      f = r ? r(u, l, a) : void 0, f === void 0 && (f = Ce(u) ? u : ft(n[i + 1]) ? [] : {});
    }
    ni(a, l, f), a = a[l];
  }
  return e;
}
function pd(e, n, t) {
  for (var r = -1, i = n.length, s = {}; ++r < i; ) {
    var o = n[r], a = Vt(e, o);
    t(a, o) && li(s, St(o, e), a);
  }
  return s;
}
function hd(e, n) {
  if (e == null)
    return {};
  var t = je(jo(e), function(r) {
    return [r];
  });
  return n = te(n), pd(e, t, function(r, i) {
    return n(r, i[0]);
  });
}
function U$(e, n) {
  return hd(e, ai(te(n)));
}
function B$(e) {
  return zu(2, e);
}
function q$(e, n) {
  var t = e.length;
  for (e.sort(n); t--; )
    e[t] = e[t].value;
  return e;
}
function md(e, n) {
  if (e !== n) {
    var t = e !== void 0, r = e === null, i = e === e, s = An(e), o = n !== void 0, a = n === null, l = n === n, f = An(n);
    if (!a && !f && !s && e > n || s && o && l && !a && !f || r && o && l || !t && l || !i)
      return 1;
    if (!r && !s && !f && e < n || f && t && i && !r && !s || a && t && i || !o && i || !l)
      return -1;
  }
  return 0;
}
function z$(e, n, t) {
  for (var r = -1, i = e.criteria, s = n.criteria, o = i.length, a = t.length; ++r < o; ) {
    var l = md(i[r], s[r]);
    if (l) {
      if (r >= a)
        return l;
      var f = t[r];
      return l * (f == "desc" ? -1 : 1);
    }
  }
  return e.index - n.index;
}
function gd(e, n, t) {
  n.length ? n = je(n, function(s) {
    return re(s) ? function(o) {
      return Vt(o, s.length === 1 ? s[0] : s);
    } : s;
  }) : n = [un];
  var r = -1;
  n = je(n, Rn(te));
  var i = td(e, function(s, o, a) {
    var l = je(n, function(f) {
      return f(s);
    });
    return { criteria: l, index: ++r, value: s };
  });
  return q$(i, function(s, o) {
    return z$(s, o, t);
  });
}
function G$(e, n, t, r) {
  return e == null ? [] : (re(n) || (n = n == null ? [] : [n]), t = r ? void 0 : t, re(t) || (t = t == null ? [] : [t]), gd(e, n, t));
}
function xo(e) {
  return ht(function(n) {
    return n = je(n, Rn(te)), le(function(t) {
      var r = this;
      return e(n, function(i) {
        return En(i, r, t);
      });
    });
  });
}
var H$ = xo(je);
const K$ = H$;
var Y$ = le, J$ = Math.min, X$ = Y$(function(e, n) {
  n = n.length == 1 && re(n[0]) ? je(n[0], Rn(te)) : je(nn(n, 1), Rn(te));
  var t = n.length;
  return le(function(r) {
    for (var i = -1, s = J$(r.length, t); ++i < s; )
      r[i] = n[i].call(this, r[i]);
    return En(e, this, r);
  });
});
const Z$ = X$;
var V$ = xo(Xc);
const Q$ = V$;
var x$ = xo(Lo);
const eA = x$;
var nA = 9007199254740991, tA = Math.floor;
function eo(e, n) {
  var t = "";
  if (!e || n < 1 || n > nA)
    return t;
  do
    n % 2 && (t += e), n = tA(n / 2), n && (e += e);
  while (n);
  return t;
}
var rA = Do("length"), _d = "\\ud800-\\udfff", iA = "\\u0300-\\u036f", sA = "\\ufe20-\\ufe2f", oA = "\\u20d0-\\u20ff", aA = iA + sA + oA, lA = "\\ufe0e\\ufe0f", fA = "[" + _d + "]", no = "[" + aA + "]", to = "\\ud83c[\\udffb-\\udfff]", uA = "(?:" + no + "|" + to + ")", yd = "[^" + _d + "]", vd = "(?:\\ud83c[\\udde6-\\uddff]){2}", bd = "[\\ud800-\\udbff][\\udc00-\\udfff]", cA = "\\u200d", wd = uA + "?", $d = "[" + lA + "]?", dA = "(?:" + cA + "(?:" + [yd, vd, bd].join("|") + ")" + $d + wd + ")*", pA = $d + wd + dA, hA = "(?:" + [yd + no + "?", no, vd, bd, fA].join("|") + ")", Dl = RegExp(to + "(?=" + to + ")|" + hA + pA, "g");
function mA(e) {
  for (var n = Dl.lastIndex = 0; Dl.test(e); )
    ++n;
  return n;
}
function Ir(e) {
  return kr(e) ? mA(e) : rA(e);
}
var gA = Math.ceil;
function Fi(e, n) {
  n = n === void 0 ? " " : On(n);
  var t = n.length;
  if (t < 2)
    return t ? eo(n, e) : n;
  var r = eo(n, gA(e / Ir(n)));
  return kr(n) ? It(Bn(r), 0, e).join("") : r.slice(0, e);
}
var _A = Math.ceil, yA = Math.floor;
function vA(e, n, t) {
  e = _e(e), n = oe(n);
  var r = n ? Ir(e) : 0;
  if (!n || r >= n)
    return e;
  var i = (n - r) / 2;
  return Fi(yA(i), t) + e + Fi(_A(i), t);
}
function bA(e, n, t) {
  e = _e(e), n = oe(n);
  var r = n ? Ir(e) : 0;
  return n && r < n ? e + Fi(n - r, t) : e;
}
function wA(e, n, t) {
  e = _e(e), n = oe(n);
  var r = n ? Ir(e) : 0;
  return n && r < n ? Fi(n - r, t) + e : e;
}
var $A = /^\s+/, AA = Qe.parseInt;
function OA(e, n, t) {
  return t || n == null ? n = 0 : n && (n = +n), AA(_e(e).replace($A, ""), n || 0);
}
var EA = 32, ea = le(function(e, n) {
  var t = Rt(n, Er(ea));
  return ut(e, EA, void 0, n, t);
});
ea.placeholder = {};
const Ad = ea;
var RA = 64, na = le(function(e, n) {
  var t = Rt(n, Er(na));
  return ut(e, RA, void 0, n, t);
});
na.placeholder = {};
const TA = na;
var kA = rs(function(e, n, t) {
  e[t ? 0 : 1].push(n);
}, function() {
  return [[], []];
});
const SA = kA;
function PA(e, n) {
  return pd(e, n, function(t, r) {
    return Wo(e, r);
  });
}
var IA = ht(function(e, n) {
  return e == null ? {} : PA(e, n);
});
const jA = IA;
function CA(e) {
  for (var n, t = this; t instanceof Yi; ) {
    var r = Ru(t);
    r.__index__ = 0, r.__values__ = void 0, n ? i.__wrapped__ = r : n = r;
    var i = r;
    t = t.__wrapped__;
  }
  return i.__wrapped__ = e, n;
}
function LA(e) {
  return function(n) {
    return e == null ? void 0 : Vt(e, n);
  };
}
function MA(e, n, t, r) {
  for (var i = t - 1, s = e.length; ++i < s; )
    if (r(e[i], n))
      return i;
  return -1;
}
var NA = Array.prototype, Ul = NA.splice;
function ta(e, n, t, r) {
  var i = r ? MA : Or, s = -1, o = n.length, a = e;
  for (e === n && (n = gn(n)), t && (a = je(e, Rn(t))); ++s < o; )
    for (var l = 0, f = n[s], u = t ? t(f) : f; (l = i(a, u, l, r)) > -1; )
      a !== e && Ul.call(a, l, 1), Ul.call(e, l, 1);
  return e;
}
function Od(e, n) {
  return e && e.length && n && n.length ? ta(e, n) : e;
}
var FA = le(Od);
const WA = FA;
function DA(e, n, t) {
  return e && e.length && n && n.length ? ta(e, n, te(t)) : e;
}
function UA(e, n, t) {
  return e && e.length && n && n.length ? ta(e, n, void 0, t) : e;
}
var BA = Array.prototype, qA = BA.splice;
function Ed(e, n) {
  for (var t = e ? n.length : 0, r = t - 1; t--; ) {
    var i = n[t];
    if (t == r || i !== s) {
      var s = i;
      ft(i) ? qA.call(e, i, 1) : Qo(e, i);
    }
  }
  return e;
}
var zA = ht(function(e, n) {
  var t = e == null ? 0 : e.length, r = $o(e, n);
  return Ed(e, je(n, function(i) {
    return ft(i, t) ? +i : i;
  }).sort(md)), r;
});
const GA = zA;
var HA = Math.floor, KA = Math.random;
function ra(e, n) {
  return e + HA(KA() * (n - e + 1));
}
var YA = parseFloat, JA = Math.min, XA = Math.random;
function ZA(e, n, t) {
  if (t && typeof t != "boolean" && ln(e, n, t) && (n = t = void 0), t === void 0 && (typeof n == "boolean" ? (t = n, n = void 0) : typeof e == "boolean" && (t = e, e = void 0)), e === void 0 && n === void 0 ? (e = 0, n = 1) : (e = at(e), n === void 0 ? (n = e, e = 0) : n = at(n)), e > n) {
    var r = e;
    e = n, n = r;
  }
  if (t || e % 1 || n % 1) {
    var i = XA();
    return JA(e + i * (n - e + YA("1e-" + ((i + "").length - 1))), n);
  }
  return ra(e, n);
}
var VA = Math.ceil, QA = Math.max;
function xA(e, n, t, r) {
  for (var i = -1, s = QA(VA((n - e) / (t || 1)), 0), o = Array(s); s--; )
    o[r ? s : ++i] = e, e += t;
  return o;
}
function Rd(e) {
  return function(n, t, r) {
    return r && typeof r != "number" && ln(n, t, r) && (t = r = void 0), n = at(n), t === void 0 ? (t = n, n = 0) : t = at(t), r = r === void 0 ? n < t ? 1 : -1 : at(r), xA(n, t, r, e);
  };
}
var eO = Rd();
const nO = eO;
var tO = Rd(!0);
const rO = tO;
var iO = 256, sO = ht(function(e, n) {
  return ut(e, iO, void 0, void 0, void 0, n);
});
const oO = sO;
function Td(e, n, t, r, i) {
  return i(e, function(s, o, a) {
    t = r ? (r = !1, s) : n(t, s, o, a);
  }), t;
}
function aO(e, n, t) {
  var r = re(e) ? To : Td, i = arguments.length < 3;
  return r(e, te(n), t, i, Ct);
}
function lO(e, n, t, r) {
  var i = e == null ? 0 : e.length;
  for (r && i && (t = e[--i]); i--; )
    t = n(t, e[i], i, e);
  return t;
}
function fO(e, n, t) {
  var r = re(e) ? lO : Td, i = arguments.length < 3;
  return r(e, te(n), t, i, Gc);
}
function uO(e, n) {
  var t = re(e) ? jt : Vc;
  return t(e, ai(te(n)));
}
function cO(e, n) {
  var t = [];
  if (!(e && e.length))
    return t;
  var r = -1, i = [], s = e.length;
  for (n = te(n); ++r < s; ) {
    var o = e[r];
    n(o, r, e) && (t.push(o), i.push(r));
  }
  return Ed(e, i), t;
}
function dO(e, n, t) {
  return (t ? ln(e, n, t) : n === void 0) ? n = 1 : n = oe(n), eo(_e(e), n);
}
function pO() {
  var e = arguments, n = _e(e[0]);
  return e.length < 3 ? n : n.replace(e[1], e[2]);
}
var hO = "Expected a function";
function mO(e, n) {
  if (typeof e != "function")
    throw new TypeError(hO);
  return n = n === void 0 ? n : oe(n), le(e, n);
}
function gO(e, n, t) {
  n = St(n, e);
  var r = -1, i = n.length;
  for (i || (i = 1, e = void 0); ++r < i; ) {
    var s = e == null ? void 0 : e[Vn(n[r])];
    s === void 0 && (r = i, s = t), e = lt(s) ? s.call(e) : s;
  }
  return e;
}
var _O = Array.prototype, yO = _O.reverse;
function ro(e) {
  return e == null ? e : yO.call(e);
}
var vO = So("round");
const bO = vO;
function kd(e) {
  var n = e.length;
  return n ? e[ra(0, n - 1)] : void 0;
}
function wO(e) {
  return kd(Pr(e));
}
function $O(e) {
  var n = re(e) ? kd : wO;
  return n(e);
}
function cs(e, n) {
  var t = -1, r = e.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++t < n; ) {
    var s = ra(t, i), o = e[s];
    e[s] = e[t], e[t] = o;
  }
  return e.length = n, e;
}
function AO(e, n) {
  return cs(gn(e), Qt(n, 0, e.length));
}
function OO(e, n) {
  var t = Pr(e);
  return cs(t, Qt(n, 0, t.length));
}
function EO(e, n, t) {
  (t ? ln(e, n, t) : n === void 0) ? n = 1 : n = oe(n);
  var r = re(e) ? AO : OO;
  return r(e, n);
}
function ia(e, n, t) {
  return e == null ? e : li(e, n, t);
}
function RO(e, n, t, r) {
  return r = typeof r == "function" ? r : void 0, e == null ? e : li(e, n, t, r);
}
function TO(e) {
  return cs(gn(e));
}
function kO(e) {
  return cs(Pr(e));
}
function SO(e) {
  var n = re(e) ? TO : kO;
  return n(e);
}
var PO = "[object Map]", IO = "[object Set]";
function jO(e) {
  if (e == null)
    return 0;
  if (yn(e))
    return fs(e) ? Ir(e) : e.length;
  var n = Xn(e);
  return n == PO || n == IO ? e.size : bo(e).length;
}
function CO(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (t && typeof t != "number" && ln(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : oe(n), t = t === void 0 ? r : oe(t)), Ln(e, n, t)) : [];
}
var LO = Sr(function(e, n, t) {
  return e + (t ? "_" : "") + n.toLowerCase();
});
const MO = LO;
function NO(e, n) {
  var t;
  return Ct(e, function(r, i, s) {
    return t = n(r, i, s), !t;
  }), !!t;
}
function FO(e, n, t) {
  var r = re(e) ? Lo : NO;
  return t && ln(e, n, t) && (n = void 0), r(e, te(n));
}
var WO = le(function(e, n) {
  if (e == null)
    return [];
  var t = n.length;
  return t > 1 && ln(e, n[0], n[1]) ? n = [] : t > 2 && ln(n[0], n[1], n[2]) && (n = [n[0]]), gd(e, nn(n, 1), []);
});
const DO = WO;
var UO = 4294967295, BO = UO - 1, qO = Math.floor, zO = Math.min;
function sa(e, n, t, r) {
  var i = 0, s = e == null ? 0 : e.length;
  if (s === 0)
    return 0;
  n = t(n);
  for (var o = n !== n, a = n === null, l = An(n), f = n === void 0; i < s; ) {
    var u = qO((i + s) / 2), c = t(e[u]), d = c !== void 0, h = c === null, m = c === c, g = An(c);
    if (o)
      var v = r || m;
    else
      f ? v = m && (r || d) : a ? v = m && d && (r || !h) : l ? v = m && d && !h && (r || !g) : h || g ? v = !1 : v = r ? c <= n : c < n;
    v ? i = u + 1 : s = u;
  }
  return zO(s, BO);
}
var GO = 4294967295, HO = GO >>> 1;
function ds(e, n, t) {
  var r = 0, i = e == null ? r : e.length;
  if (typeof n == "number" && n === n && i <= HO) {
    for (; r < i; ) {
      var s = r + i >>> 1, o = e[s];
      o !== null && !An(o) && (t ? o <= n : o < n) ? r = s + 1 : i = s;
    }
    return i;
  }
  return sa(e, n, un, t);
}
function KO(e, n) {
  return ds(e, n);
}
function YO(e, n, t) {
  return sa(e, n, te(t));
}
function JO(e, n) {
  var t = e == null ? 0 : e.length;
  if (t) {
    var r = ds(e, n);
    if (r < t && qn(e[r], n))
      return r;
  }
  return -1;
}
function XO(e, n) {
  return ds(e, n, !0);
}
function ZO(e, n, t) {
  return sa(e, n, te(t), !0);
}
function VO(e, n) {
  var t = e == null ? 0 : e.length;
  if (t) {
    var r = ds(e, n, !0) - 1;
    if (qn(e[r], n))
      return r;
  }
  return -1;
}
function Sd(e, n) {
  for (var t = -1, r = e.length, i = 0, s = []; ++t < r; ) {
    var o = e[t], a = n ? n(o) : o;
    if (!t || !qn(a, l)) {
      var l = a;
      s[i++] = o === 0 ? 0 : o;
    }
  }
  return s;
}
function QO(e) {
  return e && e.length ? Sd(e) : [];
}
function xO(e, n) {
  return e && e.length ? Sd(e, te(n)) : [];
}
var eE = 4294967295;
function nE(e, n, t) {
  return t && typeof t != "number" && ln(e, n, t) && (n = t = void 0), t = t === void 0 ? eE : t >>> 0, t ? (e = _e(e), e && (typeof n == "string" || n != null && !Xo(n)) && (n = On(n), !n && kr(e)) ? It(Bn(e), 0, t) : e.split(n, t)) : [];
}
var tE = "Expected a function", rE = Math.max;
function iE(e, n) {
  if (typeof e != "function")
    throw new TypeError(tE);
  return n = n == null ? 0 : rE(oe(n), 0), le(function(t) {
    var r = t[n], i = It(t, 0, n);
    return r && Pt(i, r), En(e, this, i);
  });
}
var sE = Sr(function(e, n, t) {
  return e + (t ? " " : "") + Ro(n);
});
const oE = sE;
function aE(e, n, t) {
  return e = _e(e), t = t == null ? 0 : Qt(oe(t), 0, e.length), n = On(n), e.slice(t, t + n.length) == n;
}
function lE() {
  return {};
}
function fE() {
  return "";
}
function uE() {
  return !0;
}
var cE = Ki(function(e, n) {
  return e - n;
}, 0);
const dE = cE;
function pE(e) {
  return e && e.length ? Vo(e, un) : 0;
}
function hE(e, n) {
  return e && e.length ? Vo(e, te(n)) : 0;
}
function mE(e) {
  var n = e == null ? 0 : e.length;
  return n ? Ln(e, 1, n) : [];
}
function gE(e, n, t) {
  return e && e.length ? (n = t || n === void 0 ? 1 : oe(n), Ln(e, 0, n < 0 ? 0 : n)) : [];
}
function _E(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (n = t || n === void 0 ? 1 : oe(n), n = r - n, Ln(e, n < 0 ? 0 : n, r)) : [];
}
function yE(e, n) {
  return e && e.length ? ss(e, te(n), !1, !0) : [];
}
function vE(e, n) {
  return e && e.length ? ss(e, te(n)) : [];
}
function bE(e, n) {
  return n(e), e;
}
var Pd = Object.prototype, wE = Pd.hasOwnProperty;
function Bl(e, n, t, r) {
  return e === void 0 || qn(e, Pd[t]) && !wE.call(r, t) ? n : e;
}
var $E = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function AE(e) {
  return "\\" + $E[e];
}
var OE = /<%=([\s\S]+?)%>/g;
const Id = OE;
var EE = /<%-([\s\S]+?)%>/g;
const RE = EE;
var TE = /<%([\s\S]+?)%>/g;
const kE = TE;
var SE = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  escape: RE,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  evaluate: kE,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  interpolate: Id,
  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  variable: "",
  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  imports: {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    _: { escape: Yc }
  }
};
const io = SE;
var PE = "Invalid `variable` option passed into `_.template`", IE = /\b__p \+= '';/g, jE = /\b(__p \+=) '' \+/g, CE = /(__e\(.*?\)|\b__t\)) \+\n'';/g, LE = /[()=,{}\[\]\/\s]/, ME = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, bi = /($^)/, NE = /['\n\r\u2028\u2029\\]/g, FE = Object.prototype, ql = FE.hasOwnProperty;
function WE(e, n, t) {
  var r = io.imports._.templateSettings || io;
  t && ln(e, n, t) && (n = void 0), e = _e(e), n = Mi({}, n, r, Bl);
  var i = Mi({}, n.imports, r.imports, Bl), s = Je(i), o = Ko(i, s), a, l, f = 0, u = n.interpolate || bi, c = "__p += '", d = RegExp(
    (n.escape || bi).source + "|" + u.source + "|" + (u === Id ? ME : bi).source + "|" + (n.evaluate || bi).source + "|$",
    "g"
  ), h = ql.call(n, "sourceURL") ? "//# sourceURL=" + (n.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  e.replace(d, function(v, w, A, C, W, I) {
    return A || (A = C), c += e.slice(f, I).replace(NE, AE), w && (a = !0, c += `' +
__e(` + w + `) +
'`), W && (l = !0, c += `';
` + W + `;
__p += '`), A && (c += `' +
((__t = (` + A + `)) == null ? '' : __t) +
'`), f = I + v.length, v;
  }), c += `';
`;
  var m = ql.call(n, "variable") && n.variable;
  if (!m)
    c = `with (obj) {
` + c + `
}
`;
  else if (LE.test(m))
    throw new Error(PE);
  c = (l ? c.replace(IE, "") : c).replace(jE, "$1").replace(CE, "$1;"), c = "function(" + (m || "obj") + `) {
` + (m ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + c + `return __p
}`;
  var g = qu(function() {
    return Function(s, h + "return " + c).apply(void 0, o);
  });
  if (g.source = c, Ao(g))
    throw g;
  return g;
}
var DE = "Expected a function";
function UE(e, n, t) {
  var r = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(DE);
  return Ce(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), Fc(e, n, {
    leading: r,
    maxWait: n,
    trailing: i
  });
}
function fi(e, n) {
  return n(e);
}
var BE = 9007199254740991, Ls = 4294967295, qE = Math.min;
function zE(e, n) {
  if (e = oe(e), e < 1 || e > BE)
    return [];
  var t = Ls, r = qE(e, Ls);
  n = xn(n), e -= Ls;
  for (var i = yo(r, n); ++t < e; )
    n(t);
  return i;
}
function GE() {
  return this;
}
function jd(e, n) {
  var t = e;
  return t instanceof ce && (t = t.value()), To(n, function(r, i) {
    return i.func.apply(i.thisArg, Pt([r], i.args));
  }, t);
}
function Ms() {
  return jd(this.__wrapped__, this.__actions__);
}
function HE(e) {
  return _e(e).toLowerCase();
}
function KE(e) {
  return re(e) ? je(e, Vn) : An(e) ? [e] : gn(Du(_e(e)));
}
var zl = 9007199254740991;
function YE(e) {
  return e ? Qt(oe(e), -zl, zl) : e === 0 ? e : 0;
}
function JE(e) {
  return _e(e).toUpperCase();
}
function XE(e, n, t) {
  var r = re(e), i = r || Tt(e) || Tr(e);
  if (n = te(n), t == null) {
    var s = e && e.constructor;
    i ? t = r ? new s() : [] : Ce(e) ? t = lt(s) ? Ar(ns(e)) : {} : t = {};
  }
  return (i ? Mn : Qn)(e, function(o, a, l) {
    return n(t, o, a, l);
  }), t;
}
function Cd(e, n) {
  for (var t = e.length; t-- && Or(n, e[t], 0) > -1; )
    ;
  return t;
}
function Ld(e, n) {
  for (var t = -1, r = e.length; ++t < r && Or(n, e[t], 0) > -1; )
    ;
  return t;
}
function ZE(e, n, t) {
  if (e = _e(e), e && (t || n === void 0))
    return wu(e);
  if (!e || !(n = On(n)))
    return e;
  var r = Bn(e), i = Bn(n), s = Ld(r, i), o = Cd(r, i) + 1;
  return It(r, s, o).join("");
}
function VE(e, n, t) {
  if (e = _e(e), e && (t || n === void 0))
    return e.slice(0, bu(e) + 1);
  if (!e || !(n = On(n)))
    return e;
  var r = Bn(e), i = Cd(r, Bn(n)) + 1;
  return It(r, 0, i).join("");
}
var QE = /^\s+/;
function xE(e, n, t) {
  if (e = _e(e), e && (t || n === void 0))
    return e.replace(QE, "");
  if (!e || !(n = On(n)))
    return e;
  var r = Bn(e), i = Ld(r, Bn(n));
  return It(r, i).join("");
}
var eR = 30, nR = "...", tR = /\w*$/;
function rR(e, n) {
  var t = eR, r = nR;
  if (Ce(n)) {
    var i = "separator" in n ? n.separator : i;
    t = "length" in n ? oe(n.length) : t, r = "omission" in n ? On(n.omission) : r;
  }
  e = _e(e);
  var s = e.length;
  if (kr(e)) {
    var o = Bn(e);
    s = o.length;
  }
  if (t >= s)
    return e;
  var a = t - Ir(r);
  if (a < 1)
    return r;
  var l = o ? It(o, 0, a).join("") : e.slice(0, a);
  if (i === void 0)
    return l + r;
  if (o && (a += l.length - a), Xo(i)) {
    if (e.slice(a).search(i)) {
      var f, u = l;
      for (i.global || (i = RegExp(i.source, _e(tR.exec(i)) + "g")), i.lastIndex = 0; f = i.exec(u); )
        var c = f.index;
      l = l.slice(0, c === void 0 ? a : c);
    }
  } else if (e.indexOf(On(i), a) != a) {
    var d = l.lastIndexOf(i);
    d > -1 && (l = l.slice(0, d));
  }
  return l + r;
}
function iR(e) {
  return ju(e, 1);
}
var sR = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, oR = ko(sR);
const aR = oR;
var Md = /&(?:amp|lt|gt|quot|#39);/g, lR = RegExp(Md.source);
function fR(e) {
  return e = _e(e), e && lR.test(e) ? e.replace(Md, aR) : e;
}
var uR = 1 / 0, cR = vr && 1 / ts(new vr([, -0]))[1] == uR ? function(e) {
  return new vr(e);
} : ho, dR = 200;
function kt(e, n, t) {
  var r = -1, i = Xi, s = e.length, o = !0, a = [], l = a;
  if (t)
    o = !1, i = zo;
  else if (s >= dR) {
    var f = n ? null : cR(e);
    if (f)
      return ts(f);
    o = !1, i = Jr, l = new Yt();
  } else
    l = n ? [] : a;
  e:
    for (; ++r < s; ) {
      var u = e[r], c = n ? n(u) : u;
      if (u = t || u !== 0 ? u : 0, o && c === c) {
        for (var d = l.length; d--; )
          if (l[d] === c)
            continue e;
        n && l.push(c), a.push(u);
      } else
        i(l, c, t) || (l !== a && l.push(c), a.push(u));
    }
  return a;
}
var pR = le(function(e) {
  return kt(nn(e, 1, Ge, !0));
});
const hR = pR;
var mR = le(function(e) {
  var n = Tn(e);
  return Ge(n) && (n = void 0), kt(nn(e, 1, Ge, !0), te(n));
});
const gR = mR;
var _R = le(function(e) {
  var n = Tn(e);
  return n = typeof n == "function" ? n : void 0, kt(nn(e, 1, Ge, !0), void 0, n);
});
const yR = _R;
function vR(e) {
  return e && e.length ? kt(e) : [];
}
function bR(e, n) {
  return e && e.length ? kt(e, te(n)) : [];
}
function wR(e, n) {
  return n = typeof n == "function" ? n : void 0, e && e.length ? kt(e, void 0, n) : [];
}
var $R = 0;
function AR(e) {
  var n = ++$R;
  return _e(e) + n;
}
function OR(e, n) {
  return e == null ? !0 : Qo(e, n);
}
var ER = Math.max;
function oa(e) {
  if (!(e && e.length))
    return [];
  var n = 0;
  return e = jt(e, function(t) {
    if (Ge(t))
      return n = ER(t.length, n), !0;
  }), yo(n, function(t) {
    return je(e, Do(t));
  });
}
function Nd(e, n) {
  if (!(e && e.length))
    return [];
  var t = oa(e);
  return n == null ? t : je(t, function(r) {
    return En(n, void 0, r);
  });
}
function Fd(e, n, t, r) {
  return li(e, n, t(Vt(e, n)), r);
}
function RR(e, n, t) {
  return e == null ? e : Fd(e, n, xn(t));
}
function TR(e, n, t, r) {
  return r = typeof r == "function" ? r : void 0, e == null ? e : Fd(e, n, xn(t), r);
}
var kR = Sr(function(e, n, t) {
  return e + (t ? " " : "") + n.toUpperCase();
});
const SR = kR;
function PR(e) {
  return e == null ? [] : Ko(e, vn(e));
}
var IR = le(function(e, n) {
  return Ge(e) ? si(e, n) : [];
});
const jR = IR;
function CR(e, n) {
  return Ad(xn(n), e);
}
var LR = ht(function(e) {
  var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, i = function(s) {
    return $o(s, e);
  };
  return n > 1 || this.__actions__.length || !(r instanceof ce) || !ft(t) ? this.thru(i) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({
    func: fi,
    args: [i],
    thisArg: void 0
  }), new jn(r, this.__chain__).thru(function(s) {
    return n && !s.length && s.push(void 0), s;
  }));
});
const MR = LR;
function NR() {
  return hc(this);
}
function FR() {
  var e = this.__wrapped__;
  if (e instanceof ce) {
    var n = e;
    return this.__actions__.length && (n = new ce(this)), n = n.reverse(), n.__actions__.push({
      func: fi,
      args: [ro],
      thisArg: void 0
    }), new jn(n, this.__chain__);
  }
  return this.thru(ro);
}
function aa(e, n, t) {
  var r = e.length;
  if (r < 2)
    return r ? kt(e[0]) : [];
  for (var i = -1, s = Array(r); ++i < r; )
    for (var o = e[i], a = -1; ++a < r; )
      a != i && (s[i] = si(s[i] || o, e[a], n, t));
  return kt(nn(s, 1), n, t);
}
var WR = le(function(e) {
  return aa(jt(e, Ge));
});
const DR = WR;
var UR = le(function(e) {
  var n = Tn(e);
  return Ge(n) && (n = void 0), aa(jt(e, Ge), te(n));
});
const BR = UR;
var qR = le(function(e) {
  var n = Tn(e);
  return n = typeof n == "function" ? n : void 0, aa(jt(e, Ge), void 0, n);
});
const zR = qR;
var GR = le(oa);
const HR = GR;
function Wd(e, n, t) {
  for (var r = -1, i = e.length, s = n.length, o = {}; ++r < i; ) {
    var a = r < s ? n[r] : void 0;
    t(o, e[r], a);
  }
  return o;
}
function KR(e, n) {
  return Wd(e || [], n || [], ni);
}
function YR(e, n) {
  return Wd(e || [], n || [], li);
}
var JR = le(function(e) {
  var n = e.length, t = n > 1 ? e[n - 1] : void 0;
  return t = typeof t == "function" ? (e.pop(), t) : void 0, Nd(e, t);
});
const XR = JR, q = {
  chunk: t0,
  compact: Dy,
  concat: Uy,
  difference: xv,
  differenceBy: nb,
  differenceWith: rb,
  drop: ob,
  dropRight: ab,
  dropRightWhile: lb,
  dropWhile: fb,
  fill: Sb,
  findIndex: xc,
  findLastIndex: nd,
  first: Ll,
  flatten: Uu,
  flattenDeep: Hb,
  flattenDepth: Kb,
  fromPairs: uw,
  head: Ll,
  indexOf: Cw,
  initial: Lw,
  intersection: Fw,
  intersectionBy: Dw,
  intersectionWith: Bw,
  join: z2,
  last: Tn,
  lastIndexOf: V2,
  nth: j$,
  pull: WA,
  pullAll: Od,
  pullAllBy: DA,
  pullAllWith: UA,
  pullAt: GA,
  remove: cO,
  reverse: ro,
  slice: CO,
  sortedIndex: KO,
  sortedIndexBy: YO,
  sortedIndexOf: JO,
  sortedLastIndex: XO,
  sortedLastIndexBy: ZO,
  sortedLastIndexOf: VO,
  sortedUniq: QO,
  sortedUniqBy: xO,
  tail: mE,
  take: gE,
  takeRight: _E,
  takeRightWhile: yE,
  takeWhile: vE,
  union: hR,
  unionBy: gR,
  unionWith: yR,
  uniq: vR,
  uniqBy: bR,
  uniqWith: wR,
  unzip: oa,
  unzipWith: Nd,
  without: jR,
  xor: DR,
  xorBy: BR,
  xorWith: zR,
  zip: HR,
  zipObject: KR,
  zipObjectDeep: YR,
  zipWith: XR
}, Ae = {
  countBy: Pv,
  each: Pl,
  eachRight: Il,
  every: Rb,
  filter: Pb,
  find: Cb,
  findLast: Wb,
  flatMap: Ub,
  flatMapDeep: qb,
  flatMapDepth: zb,
  forEach: Pl,
  forEachRight: Il,
  groupBy: gw,
  includes: Iw,
  invokeMap: e2,
  keyBy: Y2,
  map: os,
  orderBy: G$,
  partition: SA,
  reduce: aO,
  reduceRight: fO,
  reject: uO,
  sample: $O,
  sampleSize: EO,
  shuffle: SO,
  size: jO,
  some: FO,
  sortBy: DO
}, ZR = {
  now: Pi
}, Be = {
  after: $h,
  ary: ju,
  before: zu,
  bind: Gu,
  bindKey: W1,
  curry: Bo,
  curryRight: qo,
  debounce: Fc,
  defer: Jv,
  delay: Zv,
  flip: Jb,
  memoize: es,
  negate: ai,
  once: B$,
  overArgs: Z$,
  partial: Ad,
  partialRight: TA,
  rearg: oO,
  rest: mO,
  spread: iE,
  throttle: UE,
  unary: iR,
  wrap: CR
}, X = {
  castArray: X_,
  clone: Sy,
  cloneDeep: jy,
  cloneDeepWith: My,
  cloneWith: Fy,
  conformsTo: Ov,
  eq: qn,
  gt: yw,
  gte: bw,
  isArguments: Ht,
  isArray: re,
  isArrayBuffer: i2,
  isArrayLike: yn,
  isArrayLikeObject: Ge,
  isBoolean: o2,
  isBuffer: Tt,
  isDate: u2,
  isElement: c2,
  isEmpty: g2,
  isEqual: _2,
  isEqualWith: y2,
  isError: Ao,
  isFinite: b2,
  isFunction: lt,
  isInteger: ad,
  isLength: Vi,
  isMap: $c,
  isMatch: w2,
  isMatchWith: $2,
  isNaN: O2,
  isNative: T2,
  isNil: k2,
  isNull: S2,
  isNumber: ld,
  isObject: Ce,
  isObjectLike: We,
  isPlainObject: ri,
  isRegExp: Xo,
  isSafeInteger: C2,
  isSet: Ac,
  isString: fs,
  isSymbol: An,
  isTypedArray: Tr,
  isUndefined: L2,
  isWeakMap: N2,
  isWeakSet: W2,
  lt: r$,
  lte: s$,
  toArray: cd,
  toFinite: at,
  toInteger: oe,
  toLength: Zc,
  toNumber: Pn,
  toPlainObject: Dc,
  toSafeInteger: YE,
  toString: _e
}, cn = {
  add: ph,
  ceil: x_,
  divide: sb,
  floor: Zb,
  max: d$,
  maxBy: p$,
  mean: m$,
  meanBy: g$,
  min: A$,
  minBy: O$,
  multiply: R$,
  round: bO,
  subtract: dE,
  sum: pE,
  sumBy: hE
}, la = {
  clamp: r0,
  inRange: kw,
  random: ZA
}, ne = {
  assign: jg,
  assignIn: al,
  assignInWith: Mi,
  assignWith: Ug,
  at: w1,
  create: Iv,
  defaults: Bv,
  defaultsDeep: Hv,
  entries: jl,
  entriesIn: Cl,
  extend: al,
  extendWith: Mi,
  findKey: Lb,
  findLastKey: Db,
  forIn: ow,
  forInRight: aw,
  forOwn: lw,
  forOwnRight: fw,
  functions: cw,
  functionsIn: dw,
  get: wr,
  has: Ow,
  hasIn: Wo,
  invert: Kw,
  invertBy: Zw,
  invoke: Qw,
  keys: Je,
  keysIn: vn,
  mapKeys: o$,
  mapValues: a$,
  merge: y$,
  mergeWith: Bc,
  omit: D$,
  omitBy: U$,
  pick: jA,
  pickBy: hd,
  result: gO,
  set: ia,
  setWith: RO,
  toPairs: jl,
  toPairsIn: Cl,
  transform: XE,
  unset: OR,
  update: RR,
  updateWith: TR,
  values: Pr,
  valuesIn: PR
}, et = {
  at: MR,
  chain: hc,
  commit: Wy,
  lodash: p,
  next: I$,
  plant: CA,
  reverse: FR,
  tap: bE,
  thru: fi,
  toIterator: GE,
  toJSON: Ms,
  value: Ms,
  valueOf: Ms,
  wrapperChain: NR
}, ge = {
  camelCase: J_,
  capitalize: Qu,
  deburr: xu,
  endsWith: db,
  escape: Yc,
  escapeRegExp: Ob,
  kebabCase: H2,
  lowerCase: x2,
  lowerFirst: n$,
  pad: vA,
  padEnd: bA,
  padStart: wA,
  parseInt: OA,
  repeat: dO,
  replace: pO,
  snakeCase: MO,
  split: nE,
  startCase: oE,
  startsWith: aE,
  template: WE,
  templateSettings: io,
  toLower: HE,
  toUpper: JE,
  trim: ZE,
  trimEnd: VE,
  trimStart: xE,
  truncate: rR,
  unescape: fR,
  upperCase: SR,
  upperFirst: Ro,
  words: pc
}, ye = {
  attempt: qu,
  bindAll: L1,
  cond: bv,
  conforms: Av,
  constant: go,
  defaultTo: Wv,
  flow: rw,
  flowRight: sw,
  identity: un,
  iteratee: U2,
  matches: f$,
  matchesProperty: c$,
  method: b$,
  methodOf: $$,
  mixin: ud,
  noop: ho,
  nthArg: C$,
  over: K$,
  overEvery: Q$,
  overSome: eA,
  property: Cc,
  propertyOf: LA,
  range: nO,
  rangeRight: rO,
  stubArray: Po,
  stubFalse: vo,
  stubObject: lE,
  stubString: fE,
  stubTrue: uE,
  times: zE,
  toPath: KE,
  uniqueId: AR
};
function VR() {
  var e = new ce(this.__wrapped__);
  return e.__actions__ = gn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = gn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = gn(this.__views__), e;
}
function QR() {
  if (this.__filtered__) {
    var e = new ce(this);
    e.__dir__ = -1, e.__filtered__ = !0;
  } else
    e = this.clone(), e.__dir__ *= -1;
  return e;
}
var xR = Math.max, eT = Math.min;
function nT(e, n, t) {
  for (var r = -1, i = t.length; ++r < i; ) {
    var s = t[r], o = s.size;
    switch (s.type) {
      case "drop":
        e += o;
        break;
      case "dropRight":
        n -= o;
        break;
      case "take":
        n = eT(n, e + o);
        break;
      case "takeRight":
        e = xR(e, n - o);
        break;
    }
  }
  return { start: e, end: n };
}
var tT = 1, rT = 2, iT = Math.min;
function sT() {
  var e = this.__wrapped__.value(), n = this.__dir__, t = re(e), r = n < 0, i = t ? e.length : 0, s = nT(0, i, this.__views__), o = s.start, a = s.end, l = a - o, f = r ? a : o - 1, u = this.__iteratees__, c = u.length, d = 0, h = iT(l, this.__takeCount__);
  if (!t || !r && i == l && h == l)
    return jd(e, this.__actions__);
  var m = [];
  e:
    for (; l-- && d < h; ) {
      f += n;
      for (var g = -1, v = e[f]; ++g < c; ) {
        var w = u[g], A = w.iteratee, C = w.type, W = A(v);
        if (C == rT)
          v = W;
        else if (!W) {
          if (C == tT)
            continue e;
          break e;
        }
      }
      m[d++] = v;
    }
  return m;
}
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var oT = "4.17.21", aT = 2, lT = 1, fT = 3, Dd = 4294967295, uT = Array.prototype, cT = Object.prototype, Ud = cT.hasOwnProperty, Gl = sn ? sn.iterator : void 0, dT = Math.max, Hl = Math.min, fa = /* @__PURE__ */ function(e) {
  return function(n, t, r) {
    if (r == null) {
      var i = Ce(t), s = i && Je(t), o = s && s.length && as(t, s);
      (o ? o.length : i) || (r = t, t = n, n = this);
    }
    return e(n, t, r);
  };
}(ud);
p.after = Be.after;
p.ary = Be.ary;
p.assign = ne.assign;
p.assignIn = ne.assignIn;
p.assignInWith = ne.assignInWith;
p.assignWith = ne.assignWith;
p.at = ne.at;
p.before = Be.before;
p.bind = Be.bind;
p.bindAll = ye.bindAll;
p.bindKey = Be.bindKey;
p.castArray = X.castArray;
p.chain = et.chain;
p.chunk = q.chunk;
p.compact = q.compact;
p.concat = q.concat;
p.cond = ye.cond;
p.conforms = ye.conforms;
p.constant = ye.constant;
p.countBy = Ae.countBy;
p.create = ne.create;
p.curry = Be.curry;
p.curryRight = Be.curryRight;
p.debounce = Be.debounce;
p.defaults = ne.defaults;
p.defaultsDeep = ne.defaultsDeep;
p.defer = Be.defer;
p.delay = Be.delay;
p.difference = q.difference;
p.differenceBy = q.differenceBy;
p.differenceWith = q.differenceWith;
p.drop = q.drop;
p.dropRight = q.dropRight;
p.dropRightWhile = q.dropRightWhile;
p.dropWhile = q.dropWhile;
p.fill = q.fill;
p.filter = Ae.filter;
p.flatMap = Ae.flatMap;
p.flatMapDeep = Ae.flatMapDeep;
p.flatMapDepth = Ae.flatMapDepth;
p.flatten = q.flatten;
p.flattenDeep = q.flattenDeep;
p.flattenDepth = q.flattenDepth;
p.flip = Be.flip;
p.flow = ye.flow;
p.flowRight = ye.flowRight;
p.fromPairs = q.fromPairs;
p.functions = ne.functions;
p.functionsIn = ne.functionsIn;
p.groupBy = Ae.groupBy;
p.initial = q.initial;
p.intersection = q.intersection;
p.intersectionBy = q.intersectionBy;
p.intersectionWith = q.intersectionWith;
p.invert = ne.invert;
p.invertBy = ne.invertBy;
p.invokeMap = Ae.invokeMap;
p.iteratee = ye.iteratee;
p.keyBy = Ae.keyBy;
p.keys = Je;
p.keysIn = ne.keysIn;
p.map = Ae.map;
p.mapKeys = ne.mapKeys;
p.mapValues = ne.mapValues;
p.matches = ye.matches;
p.matchesProperty = ye.matchesProperty;
p.memoize = Be.memoize;
p.merge = ne.merge;
p.mergeWith = ne.mergeWith;
p.method = ye.method;
p.methodOf = ye.methodOf;
p.mixin = fa;
p.negate = ai;
p.nthArg = ye.nthArg;
p.omit = ne.omit;
p.omitBy = ne.omitBy;
p.once = Be.once;
p.orderBy = Ae.orderBy;
p.over = ye.over;
p.overArgs = Be.overArgs;
p.overEvery = ye.overEvery;
p.overSome = ye.overSome;
p.partial = Be.partial;
p.partialRight = Be.partialRight;
p.partition = Ae.partition;
p.pick = ne.pick;
p.pickBy = ne.pickBy;
p.property = ye.property;
p.propertyOf = ye.propertyOf;
p.pull = q.pull;
p.pullAll = q.pullAll;
p.pullAllBy = q.pullAllBy;
p.pullAllWith = q.pullAllWith;
p.pullAt = q.pullAt;
p.range = ye.range;
p.rangeRight = ye.rangeRight;
p.rearg = Be.rearg;
p.reject = Ae.reject;
p.remove = q.remove;
p.rest = Be.rest;
p.reverse = q.reverse;
p.sampleSize = Ae.sampleSize;
p.set = ne.set;
p.setWith = ne.setWith;
p.shuffle = Ae.shuffle;
p.slice = q.slice;
p.sortBy = Ae.sortBy;
p.sortedUniq = q.sortedUniq;
p.sortedUniqBy = q.sortedUniqBy;
p.split = ge.split;
p.spread = Be.spread;
p.tail = q.tail;
p.take = q.take;
p.takeRight = q.takeRight;
p.takeRightWhile = q.takeRightWhile;
p.takeWhile = q.takeWhile;
p.tap = et.tap;
p.throttle = Be.throttle;
p.thru = fi;
p.toArray = X.toArray;
p.toPairs = ne.toPairs;
p.toPairsIn = ne.toPairsIn;
p.toPath = ye.toPath;
p.toPlainObject = X.toPlainObject;
p.transform = ne.transform;
p.unary = Be.unary;
p.union = q.union;
p.unionBy = q.unionBy;
p.unionWith = q.unionWith;
p.uniq = q.uniq;
p.uniqBy = q.uniqBy;
p.uniqWith = q.uniqWith;
p.unset = ne.unset;
p.unzip = q.unzip;
p.unzipWith = q.unzipWith;
p.update = ne.update;
p.updateWith = ne.updateWith;
p.values = ne.values;
p.valuesIn = ne.valuesIn;
p.without = q.without;
p.words = ge.words;
p.wrap = Be.wrap;
p.xor = q.xor;
p.xorBy = q.xorBy;
p.xorWith = q.xorWith;
p.zip = q.zip;
p.zipObject = q.zipObject;
p.zipObjectDeep = q.zipObjectDeep;
p.zipWith = q.zipWith;
p.entries = ne.toPairs;
p.entriesIn = ne.toPairsIn;
p.extend = ne.assignIn;
p.extendWith = ne.assignInWith;
fa(p, p);
p.add = cn.add;
p.attempt = ye.attempt;
p.camelCase = ge.camelCase;
p.capitalize = ge.capitalize;
p.ceil = cn.ceil;
p.clamp = la.clamp;
p.clone = X.clone;
p.cloneDeep = X.cloneDeep;
p.cloneDeepWith = X.cloneDeepWith;
p.cloneWith = X.cloneWith;
p.conformsTo = X.conformsTo;
p.deburr = ge.deburr;
p.defaultTo = ye.defaultTo;
p.divide = cn.divide;
p.endsWith = ge.endsWith;
p.eq = X.eq;
p.escape = ge.escape;
p.escapeRegExp = ge.escapeRegExp;
p.every = Ae.every;
p.find = Ae.find;
p.findIndex = q.findIndex;
p.findKey = ne.findKey;
p.findLast = Ae.findLast;
p.findLastIndex = q.findLastIndex;
p.findLastKey = ne.findLastKey;
p.floor = cn.floor;
p.forEach = Ae.forEach;
p.forEachRight = Ae.forEachRight;
p.forIn = ne.forIn;
p.forInRight = ne.forInRight;
p.forOwn = ne.forOwn;
p.forOwnRight = ne.forOwnRight;
p.get = ne.get;
p.gt = X.gt;
p.gte = X.gte;
p.has = ne.has;
p.hasIn = ne.hasIn;
p.head = q.head;
p.identity = un;
p.includes = Ae.includes;
p.indexOf = q.indexOf;
p.inRange = la.inRange;
p.invoke = ne.invoke;
p.isArguments = X.isArguments;
p.isArray = re;
p.isArrayBuffer = X.isArrayBuffer;
p.isArrayLike = X.isArrayLike;
p.isArrayLikeObject = X.isArrayLikeObject;
p.isBoolean = X.isBoolean;
p.isBuffer = X.isBuffer;
p.isDate = X.isDate;
p.isElement = X.isElement;
p.isEmpty = X.isEmpty;
p.isEqual = X.isEqual;
p.isEqualWith = X.isEqualWith;
p.isError = X.isError;
p.isFinite = X.isFinite;
p.isFunction = X.isFunction;
p.isInteger = X.isInteger;
p.isLength = X.isLength;
p.isMap = X.isMap;
p.isMatch = X.isMatch;
p.isMatchWith = X.isMatchWith;
p.isNaN = X.isNaN;
p.isNative = X.isNative;
p.isNil = X.isNil;
p.isNull = X.isNull;
p.isNumber = X.isNumber;
p.isObject = Ce;
p.isObjectLike = X.isObjectLike;
p.isPlainObject = X.isPlainObject;
p.isRegExp = X.isRegExp;
p.isSafeInteger = X.isSafeInteger;
p.isSet = X.isSet;
p.isString = X.isString;
p.isSymbol = X.isSymbol;
p.isTypedArray = X.isTypedArray;
p.isUndefined = X.isUndefined;
p.isWeakMap = X.isWeakMap;
p.isWeakSet = X.isWeakSet;
p.join = q.join;
p.kebabCase = ge.kebabCase;
p.last = Tn;
p.lastIndexOf = q.lastIndexOf;
p.lowerCase = ge.lowerCase;
p.lowerFirst = ge.lowerFirst;
p.lt = X.lt;
p.lte = X.lte;
p.max = cn.max;
p.maxBy = cn.maxBy;
p.mean = cn.mean;
p.meanBy = cn.meanBy;
p.min = cn.min;
p.minBy = cn.minBy;
p.stubArray = ye.stubArray;
p.stubFalse = ye.stubFalse;
p.stubObject = ye.stubObject;
p.stubString = ye.stubString;
p.stubTrue = ye.stubTrue;
p.multiply = cn.multiply;
p.nth = q.nth;
p.noop = ye.noop;
p.now = ZR.now;
p.pad = ge.pad;
p.padEnd = ge.padEnd;
p.padStart = ge.padStart;
p.parseInt = ge.parseInt;
p.random = la.random;
p.reduce = Ae.reduce;
p.reduceRight = Ae.reduceRight;
p.repeat = ge.repeat;
p.replace = ge.replace;
p.result = ne.result;
p.round = cn.round;
p.sample = Ae.sample;
p.size = Ae.size;
p.snakeCase = ge.snakeCase;
p.some = Ae.some;
p.sortedIndex = q.sortedIndex;
p.sortedIndexBy = q.sortedIndexBy;
p.sortedIndexOf = q.sortedIndexOf;
p.sortedLastIndex = q.sortedLastIndex;
p.sortedLastIndexBy = q.sortedLastIndexBy;
p.sortedLastIndexOf = q.sortedLastIndexOf;
p.startCase = ge.startCase;
p.startsWith = ge.startsWith;
p.subtract = cn.subtract;
p.sum = cn.sum;
p.sumBy = cn.sumBy;
p.template = ge.template;
p.times = ye.times;
p.toFinite = X.toFinite;
p.toInteger = oe;
p.toLength = X.toLength;
p.toLower = ge.toLower;
p.toNumber = X.toNumber;
p.toSafeInteger = X.toSafeInteger;
p.toString = X.toString;
p.toUpper = ge.toUpper;
p.trim = ge.trim;
p.trimEnd = ge.trimEnd;
p.trimStart = ge.trimStart;
p.truncate = ge.truncate;
p.unescape = ge.unescape;
p.uniqueId = ye.uniqueId;
p.upperCase = ge.upperCase;
p.upperFirst = ge.upperFirst;
p.each = Ae.forEach;
p.eachRight = Ae.forEachRight;
p.first = q.head;
fa(p, function() {
  var e = {};
  return Qn(p, function(n, t) {
    Ud.call(p.prototype, t) || (e[t] = n);
  }), e;
}(), { chain: !1 });
p.VERSION = oT;
(p.templateSettings = ge.templateSettings).imports._ = p;
Mn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
  p[e].placeholder = p;
});
Mn(["drop", "take"], function(e, n) {
  ce.prototype[e] = function(t) {
    t = t === void 0 ? 1 : dT(oe(t), 0);
    var r = this.__filtered__ && !n ? new ce(this) : this.clone();
    return r.__filtered__ ? r.__takeCount__ = Hl(t, r.__takeCount__) : r.__views__.push({
      size: Hl(t, Dd),
      type: e + (r.__dir__ < 0 ? "Right" : "")
    }), r;
  }, ce.prototype[e + "Right"] = function(t) {
    return this.reverse()[e](t).reverse();
  };
});
Mn(["filter", "map", "takeWhile"], function(e, n) {
  var t = n + 1, r = t == lT || t == fT;
  ce.prototype[e] = function(i) {
    var s = this.clone();
    return s.__iteratees__.push({
      iteratee: te(i),
      type: t
    }), s.__filtered__ = s.__filtered__ || r, s;
  };
});
Mn(["head", "last"], function(e, n) {
  var t = "take" + (n ? "Right" : "");
  ce.prototype[e] = function() {
    return this[t](1).value()[0];
  };
});
Mn(["initial", "tail"], function(e, n) {
  var t = "drop" + (n ? "" : "Right");
  ce.prototype[e] = function() {
    return this.__filtered__ ? new ce(this) : this[t](1);
  };
});
ce.prototype.compact = function() {
  return this.filter(un);
};
ce.prototype.find = function(e) {
  return this.filter(e).head();
};
ce.prototype.findLast = function(e) {
  return this.reverse().find(e);
};
ce.prototype.invokeMap = le(function(e, n) {
  return typeof e == "function" ? new ce(this) : this.map(function(t) {
    return oi(t, e, n);
  });
});
ce.prototype.reject = function(e) {
  return this.filter(ai(te(e)));
};
ce.prototype.slice = function(e, n) {
  e = oe(e);
  var t = this;
  return t.__filtered__ && (e > 0 || n < 0) ? new ce(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== void 0 && (n = oe(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
};
ce.prototype.takeRightWhile = function(e) {
  return this.reverse().takeWhile(e).reverse();
};
ce.prototype.toArray = function() {
  return this.take(Dd);
};
Qn(ce.prototype, function(e, n) {
  var t = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), i = p[r ? "take" + (n == "last" ? "Right" : "") : n], s = r || /^find/.test(n);
  i && (p.prototype[n] = function() {
    var o = this.__wrapped__, a = r ? [1] : arguments, l = o instanceof ce, f = a[0], u = l || re(o), c = function(w) {
      var A = i.apply(p, Pt([w], a));
      return r && d ? A[0] : A;
    };
    u && t && typeof f == "function" && f.length != 1 && (l = u = !1);
    var d = this.__chain__, h = !!this.__actions__.length, m = s && !d, g = l && !h;
    if (!s && u) {
      o = g ? o : new ce(this);
      var v = e.apply(o, a);
      return v.__actions__.push({ func: fi, args: [c], thisArg: void 0 }), new jn(v, d);
    }
    return m && g ? e.apply(this, a) : (v = this.thru(c), m ? r ? v.value()[0] : v.value() : v);
  });
});
Mn(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
  var n = uT[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
  p.prototype[e] = function() {
    var i = arguments;
    if (r && !this.__chain__) {
      var s = this.value();
      return n.apply(re(s) ? s : [], i);
    }
    return this[t](function(o) {
      return n.apply(re(o) ? o : [], i);
    });
  };
});
Qn(ce.prototype, function(e, n) {
  var t = p[n];
  if (t) {
    var r = t.name + "";
    Ud.call(yr, r) || (yr[r] = []), yr[r].push({ name: n, func: t });
  }
});
yr[Zi(void 0, aT).name] = [{
  name: "wrapper",
  func: void 0
}];
ce.prototype.clone = VR;
ce.prototype.reverse = QR;
ce.prototype.value = sT;
p.prototype.at = et.at;
p.prototype.chain = et.wrapperChain;
p.prototype.commit = et.commit;
p.prototype.next = et.next;
p.prototype.plant = et.plant;
p.prototype.reverse = et.reverse;
p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = et.value;
p.prototype.first = p.prototype.head;
Gl && (p.prototype[Gl] = et.toIterator);
const pT = (e, n, t) => {
  const r = e.indexOf(n, t);
  return r < 0 ? e.substring(t || 0) : e.substring(t || 0, r);
}, Bd = (e, n, t) => {
  const r = e.indexOf(n, t);
  return r < 0 ? "" : e.substring(r + n.length);
}, Xr = (e, n, t) => {
  const r = e.lastIndexOf(n, t);
  return r < 0 ? "" : e.substring(r + n.length, t || e.length);
};
function hT(e) {
  e = e.trim();
  const n = [];
  let t = 0;
  for (let r = 1; r < e.length; r++)
    "A" <= e[r] && e[r] <= "Z" && (n.push(e.substring(t, r).toLowerCase()), t = r);
  return n.push(e.substring(t, e.length).toLowerCase()), n.join(" ");
}
function mT(e) {
  return hT(e).replace(/[a-z]/i, (n) => n.toUpperCase());
}
function gT(e) {
  e == null && (e = {});
  let n = so(e);
  return Ii(n), n;
}
function Ii(e) {
  let n = e.required || [];
  if (e.$ref)
    return;
  switch (e.type) {
    case "object":
      const r = e.properties || {};
      for (let s in r)
        n.indexOf(s) < 0 && Ii(r[s]);
      break;
    case "array":
      const i = e.items || {};
      Ii(i), i.oneOf && !i.oneOf.some((s) => s.type == "null") && i.oneOf.push({ type: "null" });
      break;
    default:
      Array.isArray(e.type) ? e.type.indexOf("null") < 0 && e.type.push("null") : e.type != "null" && (e.type = [e.type, "null"]);
      break;
  }
  const t = e.definitions;
  if (t)
    for (let r in t)
      Ii(t[r]);
}
function so(e) {
  var n;
  if (e == null || typeof e != "object")
    return e;
  if (e instanceof Date)
    return n = /* @__PURE__ */ new Date(), n.setTime(e.getTime()), n;
  if (e instanceof Array) {
    n = [];
    for (var t = 0, r = e.length; t < r; t++)
      n[t] = so(e[t]);
    return n;
  }
  if (e instanceof Object) {
    n = {};
    const s = e;
    for (var i in s)
      s.hasOwnProperty(i) && (n[i] = so(s[i]));
    return n;
  }
  throw new Error("Unable to copy obj! Its type isn't supported.");
}
let _T = 0;
const yT = () => _T++, vT = (e, n) => {
  if (!e || !n)
    return e;
  const t = e.split("${"), r = [];
  r.push(t.shift());
  for (let i of t)
    if (i.includes("}")) {
      const s = pT(i, "}"), o = (s === "" ? n : wr(n, s)) || "";
      r.push(`${o}${Bd(i, "}")}`);
    }
  return r.join("");
};
function bT(e) {
  let n = 0, t = e.length;
  return e[n] === "/" && n++, e[t - 1] === "/" && t--, t <= n ? "" : e.substring(n, t);
}
function wT(...e) {
  const n = e.filter((s) => !!s);
  if (n.length === 0)
    return "";
  const t = n[0].startsWith("/"), r = n[n.length - 1].endsWith("/");
  let i = n.map((s) => bT(s)).filter((s) => !!s).join("/");
  return t && (i = "/" + i), r && i !== "/" && (i += "/"), i;
}
function kn(e) {
  return (e || "").replace(`
`, "<br/>");
}
function qd(e) {
  let n = e.type;
  switch (e.enum && (n = "enum"), e.format && (n += "-" + e.format), e.hidden && (n = "hidden"), e.editor && (n = e.editor), n) {
    case "string-date-time":
    case "string-date":
    case "string-time":
    case "string-email":
    case "string-password":
    case "number-currency":
      return e.format;
    default:
      return n;
  }
}
function ua(e) {
  switch (e.type || "") {
    case "object":
      return {};
    case "array":
      return [];
    default:
      return null;
  }
}
function Jt(e, n) {
  var t;
  return e.title || mT(((t = n.slice(-1)) == null ? void 0 : t[0]) || "");
}
function Ns(e) {
  var r;
  e.startsWith("/") ? e = e.substring(1) : e.startsWith("#/") ? e = e.substring(2) : e.startsWith("http") && (e = ((r = e.split("#/")) == null ? void 0 : r[1]) || "");
  const n = [];
  e.split("/").forEach((i) => {
    const s = parseInt(i);
    isNaN(s) ? n.push(`.${i}`) : n.push(`[${i}]`);
  });
  let t = n.join("");
  return t.startsWith(".") && (t = t.substring(1)), t;
}
function $T(e) {
  let n, t, r, i;
  function s(l) {
    e[4](l);
  }
  var o = (
    /*component*/
    e[3]
  );
  function a(l, f) {
    let u = {
      params: (
        /*params*/
        l[1]
      ),
      value: (
        /*value*/
        l[2]
      )
    };
    return (
      /*schema*/
      l[0] !== void 0 && (u.schema = /*schema*/
      l[0]), { props: u }
    );
  }
  return o && (n = Fe(o, a(e)), xe.push(() => Fn(n, "schema", s))), {
    c() {
      n && Ee(n.$$.fragment), r = Me();
    },
    m(l, f) {
      n && we(n, l, f), T(l, r, f), i = !0;
    },
    p(l, [f]) {
      if (f & /*component*/
      8 && o !== (o = /*component*/
      l[3])) {
        if (n) {
          De();
          const u = n;
          V(u.$$.fragment, 1, 0, () => {
            $e(u, 1);
          }), Ue();
        }
        o ? (n = Fe(o, a(l)), xe.push(() => Fn(n, "schema", s)), Ee(n.$$.fragment), J(n.$$.fragment, 1), we(n, r.parentNode, r)) : n = null;
      } else if (o) {
        const u = {};
        f & /*params*/
        2 && (u.params = /*params*/
        l[1]), f & /*value*/
        4 && (u.value = /*value*/
        l[2]), !t && f & /*schema*/
        1 && (t = !0, u.schema = /*schema*/
        l[0], ot(() => t = !1)), n.$set(u);
      }
    },
    i(l) {
      i || (n && J(n.$$.fragment, l), i = !0);
    },
    o(l) {
      n && V(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && R(r), n && $e(n, l);
    }
  };
}
function AT(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n, { components: o } = r, a;
  function l(f) {
    i = f, t(0, i);
  }
  return e.$$set = (f) => {
    "params" in f && t(1, r = f.params), "schema" in f && t(0, i = f.schema), "value" in f && t(2, s = f.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    1 && t(3, a = o[qd(i)]);
  }, [i, r, s, a, l];
}
class $r extends Ve {
  constructor(n) {
    super(), Ze(this, n, AT, $T, Ye, { params: 1, schema: 0, value: 2 });
  }
}
function OT(e) {
  let n, t, r, i, s, o, a;
  return {
    c() {
      n = N("input"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), y(
        n,
        "type",
        /*type*/
        e[3]
      ), n.value = i = /*value*/
      e[2] || "", n.disabled = s = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(l, f) {
      T(l, n, f), o || (a = K(
        n,
        "input",
        /*input_handler*/
        e[4]
      ), o = !0);
    },
    p(l, f) {
      f & /*params*/
      1 && t !== (t = /*params*/
      l[0].path.join(".")) && y(n, "id", t), f & /*params*/
      1 && r !== (r = /*params*/
      l[0].path.join(".")) && y(n, "name", r), f & /*type*/
      8 && y(
        n,
        "type",
        /*type*/
        l[3]
      ), f & /*value*/
      4 && i !== (i = /*value*/
      l[2] || "") && n.value !== i && (n.value = i), f & /*schema, params*/
      3 && s !== (s = /*schema*/
      l[1].readOnly || /*params*/
      l[0].containerReadOnly) && (n.disabled = s);
    },
    d(l) {
      l && R(n), o = !1, a();
    }
  };
}
function ET(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o, a) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [OT] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Fe(i, s(e))), {
    c() {
      n && Ee(n.$$.fragment), t = Me();
    },
    m(o, a) {
      n && we(n, o, a), T(o, t, a), r = !0;
    },
    p(o, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          De();
          const l = n;
          V(l.$$.fragment, 1, 0, () => {
            $e(l, 1);
          }), Ue();
        }
        i ? (n = Fe(i, s(o)), Ee(n.$$.fragment), J(n.$$.fragment, 1), we(n, t.parentNode, t)) : n = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        o[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        o[1]), a & /*$$scope, params, type, value, schema*/
        47 && (l.$$scope = { dirty: a, ctx: o }), n.$set(l);
      }
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && V(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(t), n && $e(n, o);
    }
  };
}
function RT(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n, o = "text";
  const a = (l) => r.pathChanged(r.path, l.currentTarget.value || void 0);
  return e.$$set = (l) => {
    "params" in l && t(0, r = l.params), "schema" in l && t(1, i = l.schema), "value" in l && t(2, s = l.value);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*schema*/
    2) {
      const l = qd(i);
      t(3, o = l === "password" ? "password" : l === "email" ? "email" : l === "time" ? "time" : l === "date-time" ? "datetime-local" : l === "date" ? "date" : "text");
    }
  }, [r, i, s, o, a];
}
let Wt = class extends Ve {
  constructor(n) {
    super(), Ze(this, n, RT, ET, Ye, { params: 0, schema: 1, value: 2 });
  }
};
function Kl(e) {
  let n, t, r = kn(
    /*title*/
    e[3]
  ) + "", i, s = (
    /*schema*/
    e[1].description && Yl(e)
  );
  return {
    c() {
      n = N("label"), t = new Kp(!1), i = Z(), s && s.c(), t.a = i, y(n, "id", `label-${/*id*/
      e[4]}`), y(
        n,
        "for",
        /*id*/
        e[4]
      ), Ie(
        n,
        "required",
        /*params*/
        e[0].required
      ), Ie(
        n,
        "readonly",
        /*schema*/
        e[1].readOnly || /*params*/
        e[0].containerReadOnly
      );
    },
    m(o, a) {
      T(o, n, a), t.m(r, n), B(n, i), s && s.m(n, null);
    },
    p(o, a) {
      /*schema*/
      o[1].description ? s ? s.p(o, a) : (s = Yl(o), s.c(), s.m(n, null)) : s && (s.d(1), s = null), a & /*params*/
      1 && Ie(
        n,
        "required",
        /*params*/
        o[0].required
      ), a & /*schema, params*/
      3 && Ie(
        n,
        "readonly",
        /*schema*/
        o[1].readOnly || /*params*/
        o[0].containerReadOnly
      );
    },
    d(o) {
      o && R(n), s && s.d();
    }
  };
}
function Yl(e) {
  let n, t;
  return {
    c() {
      n = N("span"), y(n, "class", "info"), y(n, "title", t = /*schema*/
      e[1].description);
    },
    m(r, i) {
      T(r, n, i);
    },
    p(r, i) {
      i & /*schema*/
      2 && t !== (t = /*schema*/
      r[1].description) && y(n, "title", t);
    },
    d(r) {
      r && R(n);
    }
  };
}
function Jl(e) {
  let n, t;
  return {
    c() {
      n = N("div"), t = on(
        /*error*/
        e[2]
      ), y(n, "class", "error");
    },
    m(r, i) {
      T(r, n, i), B(n, t);
    },
    p(r, i) {
      i & /*error*/
      4 && _n(
        t,
        /*error*/
        r[2]
      );
    },
    d(r) {
      r && R(n);
    }
  };
}
function TT(e) {
  let n, t, r, i, s = (
    /*params*/
    e[0].containerParent !== "array" && Kl(e)
  );
  const o = (
    /*#slots*/
    e[6].default
  ), a = Wp(
    o,
    e,
    /*$$scope*/
    e[5],
    null
  );
  let l = (
    /*error*/
    e[2] && /*params*/
    e[0].showErrors && Jl(e)
  );
  return {
    c() {
      s && s.c(), n = Z(), a && a.c(), t = Z(), l && l.c(), r = Me();
    },
    m(f, u) {
      s && s.m(f, u), T(f, n, u), a && a.m(f, u), T(f, t, u), l && l.m(f, u), T(f, r, u), i = !0;
    },
    p(f, [u]) {
      /*params*/
      f[0].containerParent !== "array" ? s ? s.p(f, u) : (s = Kl(f), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), a && a.p && (!i || u & /*$$scope*/
      32) && Up(
        a,
        o,
        f,
        /*$$scope*/
        f[5],
        i ? Dp(
          o,
          /*$$scope*/
          f[5],
          u,
          null
        ) : Bp(
          /*$$scope*/
          f[5]
        ),
        null
      ), /*error*/
      f[2] && /*params*/
      f[0].showErrors ? l ? l.p(f, u) : (l = Jl(f), l.c(), l.m(r.parentNode, r)) : l && (l.d(1), l = null);
    },
    i(f) {
      i || (J(a, f), i = !0);
    },
    o(f) {
      V(a, f), i = !1;
    },
    d(f) {
      f && (R(n), R(t), R(r)), s && s.d(f), a && a.d(f), l && l.d(f);
    }
  };
}
function kT(e, n, t) {
  let r, { $$slots: i = {}, $$scope: s } = n, { params: o } = n, { schema: a } = n;
  const l = Jt(a, o.path), f = o.path.join(".");
  return e.$$set = (u) => {
    "params" in u && t(0, o = u.params), "schema" in u && t(1, a = u.schema), "$$scope" in u && t(5, s = u.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*params*/
    1 && t(2, r = o.validationErrors[o.path.join(".")]);
  }, [o, a, r, l, f, s, i];
}
class ST extends Ve {
  constructor(n) {
    super(), Ze(this, n, kT, TT, Ye, { params: 0, schema: 1 });
  }
}
function Xl(e, n, t) {
  const r = e.slice();
  return r[10] = n[t], r[11] = n, r[12] = t, r;
}
function Zl(e) {
  let n, t, r = (
    /*params*/
    e[1].collapsible && Vl(e)
  ), i = (
    /*params*/
    (e[1].containerParent !== "array" || /*schema*/
    e[0].title) && Ql(e)
  );
  return {
    c() {
      n = N("legend"), r && r.c(), t = Z(), i && i.c(), y(n, "class", "subset-label object-label");
    },
    m(s, o) {
      T(s, n, o), r && r.m(n, null), B(n, t), i && i.m(n, null);
    },
    p(s, o) {
      /*params*/
      s[1].collapsible ? r ? r.p(s, o) : (r = Vl(s), r.c(), r.m(n, t)) : r && (r.d(1), r = null), /*params*/
      s[1].containerParent !== "array" || /*schema*/
      s[0].title ? i ? i.p(s, o) : (i = Ql(s), i.c(), i.m(n, null)) : i && (i.d(1), i = null);
    },
    d(s) {
      s && R(n), r && r.d(), i && i.d();
    }
  };
}
function Vl(e) {
  let n, t, r, i;
  return {
    c() {
      n = N("span"), y(n, "class", t = "collapser " + /*collapserOpenState*/
      e[3]);
    },
    m(s, o) {
      T(s, n, o), r || (i = K(
        n,
        "click",
        /*toggle*/
        e[6]
      ), r = !0);
    },
    p(s, o) {
      o & /*collapserOpenState*/
      8 && t !== (t = "collapser " + /*collapserOpenState*/
      s[3]) && y(n, "class", t);
    },
    d(s) {
      s && R(n), r = !1, i();
    }
  };
}
function Ql(e) {
  let n, t = kn(Jt(
    /*schema*/
    e[0],
    /*params*/
    e[1].path
  )) + "", r, i, s = (
    /*schema*/
    e[0].description && xl(e)
  );
  return {
    c() {
      n = N("span"), r = Z(), s && s.c(), i = Me(), y(n, "class", "subset-label-title object-label-title");
    },
    m(o, a) {
      T(o, n, a), n.innerHTML = t, T(o, r, a), s && s.m(o, a), T(o, i, a);
    },
    p(o, a) {
      a & /*schema, params*/
      3 && t !== (t = kn(Jt(
        /*schema*/
        o[0],
        /*params*/
        o[1].path
      )) + "") && (n.innerHTML = t), /*schema*/
      o[0].description ? s ? s.p(o, a) : (s = xl(o), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    d(o) {
      o && (R(n), R(r), R(i)), s && s.d(o);
    }
  };
}
function xl(e) {
  let n, t = kn(
    /*schema*/
    e[0].description
  ) + "";
  return {
    c() {
      n = N("span"), y(n, "class", "subset-label-description object-label-description");
    },
    m(r, i) {
      T(r, n, i), n.innerHTML = t;
    },
    p(r, i) {
      i & /*schema*/
      1 && t !== (t = kn(
        /*schema*/
        r[0].description
      ) + "") && (n.innerHTML = t);
    },
    d(r) {
      r && R(n);
    }
  };
}
function ef(e) {
  let n = [], t = /* @__PURE__ */ new Map(), r, i, s = He(
    /*propNames*/
    e[5]
  );
  const o = (a) => (
    /*propName*/
    a[10]
  );
  for (let a = 0; a < s.length; a += 1) {
    let l = Xl(e, s, a), f = o(l);
    t.set(f, n[a] = nf(f, l));
  }
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      r = Me();
    },
    m(a, l) {
      for (let f = 0; f < n.length; f += 1)
        n[f] && n[f].m(a, l);
      T(a, r, l), i = !0;
    },
    p(a, l) {
      l & /*params, propNames, schema, value*/
      39 && (s = He(
        /*propNames*/
        a[5]
      ), De(), n = ei(n, l, o, 1, a, s, t, r.parentNode, _u, nf, r, Xl), Ue());
    },
    i(a) {
      if (!i) {
        for (let l = 0; l < s.length; l += 1)
          J(n[l]);
        i = !0;
      }
    },
    o(a) {
      for (let l = 0; l < n.length; l += 1)
        V(n[l]);
      i = !1;
    },
    d(a) {
      a && R(r);
      for (let l = 0; l < n.length; l += 1)
        n[l].d(a);
    }
  };
}
function nf(e, n) {
  var l, f;
  let t, r, i, s;
  function o(u) {
    n[8](
      u,
      /*propName*/
      n[10]
    );
  }
  let a = {
    params: {
      .../*params*/
      n[1],
      path: [
        .../*params*/
        n[1].path,
        /*propName*/
        n[10]
      ],
      required: (
        /*schema*/
        (((l = n[0]) == null ? void 0 : l.required) || []).includes(
          /*propName*/
          n[10]
        )
      ),
      containerParent: "object",
      containerReadOnly: (
        /*params*/
        n[1].containerReadOnly || /*schema*/
        n[0].readOnly || !1
      )
    },
    value: (
      /*value*/
      (f = n[2]) == null ? void 0 : f[
        /*propName*/
        n[10]
      ]
    )
  };
  return (
    /*schema*/
    n[0].properties[
      /*propName*/
      n[10]
    ] !== void 0 && (a.schema = /*schema*/
    n[0].properties[
      /*propName*/
      n[10]
    ]), r = new $r({ props: a }), xe.push(() => Fn(r, "schema", o)), {
      key: e,
      first: null,
      c() {
        t = Me(), Ee(r.$$.fragment), this.first = t;
      },
      m(u, c) {
        T(u, t, c), we(r, u, c), s = !0;
      },
      p(u, c) {
        var h, m;
        n = u;
        const d = {};
        c & /*params, propNames, schema*/
        35 && (d.params = {
          .../*params*/
          n[1],
          path: [
            .../*params*/
            n[1].path,
            /*propName*/
            n[10]
          ],
          required: (
            /*schema*/
            (((h = n[0]) == null ? void 0 : h.required) || []).includes(
              /*propName*/
              n[10]
            )
          ),
          containerParent: "object",
          containerReadOnly: (
            /*params*/
            n[1].containerReadOnly || /*schema*/
            n[0].readOnly || !1
          )
        }), c & /*value, propNames*/
        36 && (d.value = /*value*/
        (m = n[2]) == null ? void 0 : m[
          /*propName*/
          n[10]
        ]), !i && c & /*schema, propNames*/
        33 && (i = !0, d.schema = /*schema*/
        n[0].properties[
          /*propName*/
          n[10]
        ], ot(() => i = !1)), r.$set(d);
      },
      i(u) {
        s || (J(r.$$.fragment, u), s = !0);
      },
      o(u) {
        V(r.$$.fragment, u), s = !1;
      },
      d(u) {
        u && R(t), $e(r, u);
      }
    }
  );
}
function PT(e) {
  let n, t, r, i, s, o = (
    /*showLegend*/
    e[4] && Zl(e)
  ), a = (
    /*collapserOpenState*/
    e[3] === "open" && ef(e)
  );
  return {
    c() {
      n = N("fieldset"), o && o.c(), t = Z(), a && a.c(), y(n, "name", r = /*params*/
      e[1].path.join(".")), y(n, "class", i = "subset object depth-" + /*params*/
      e[1].path.length);
    },
    m(l, f) {
      T(l, n, f), o && o.m(n, null), B(n, t), a && a.m(n, null), s = !0;
    },
    p(l, [f]) {
      /*showLegend*/
      l[4] ? o ? o.p(l, f) : (o = Zl(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), /*collapserOpenState*/
      l[3] === "open" ? a ? (a.p(l, f), f & /*collapserOpenState*/
      8 && J(a, 1)) : (a = ef(l), a.c(), J(a, 1), a.m(n, null)) : a && (De(), V(a, 1, 1, () => {
        a = null;
      }), Ue()), (!s || f & /*params*/
      2 && r !== (r = /*params*/
      l[1].path.join("."))) && y(n, "name", r), (!s || f & /*params*/
      2 && i !== (i = "subset object depth-" + /*params*/
      l[1].path.length)) && y(n, "class", i);
    },
    i(l) {
      s || (J(a), s = !0);
    },
    o(l) {
      V(a), s = !1;
    },
    d(l) {
      l && R(n), o && o.d(), a && a.d();
    }
  };
}
function IT(e, n, t) {
  let r, i, s, { params: o } = n, { schema: a } = n, { value: l } = n, f = o.path.length === 0 || o.containerParent === "array" || !o.collapsible ? "open" : "closed";
  const u = () => {
    t(3, f = f === "open" ? "closed" : "open");
  };
  function c(d, h) {
    e.$$.not_equal(a.properties[h], d) && (a.properties[h] = d, t(0, a));
  }
  return e.$$set = (d) => {
    "params" in d && t(1, o = d.params), "schema" in d && t(0, a = d.schema), "value" in d && t(2, l = d.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    1 && t(5, r = Object.keys((a == null ? void 0 : a.properties) || {})), e.$$.dirty & /*schema, params*/
    3 && t(7, i = Jt(a, o.path)), e.$$.dirty & /*params, legendText*/
    130 && t(4, s = o.collapsible || o.containerParent !== "array" && !!i);
  }, [
    a,
    o,
    l,
    f,
    s,
    r,
    u,
    i,
    c
  ];
}
class jT extends Ve {
  constructor(n) {
    super(), Ze(this, n, IT, PT, Ye, { params: 1, schema: 0, value: 2 });
  }
}
class Zr extends String {
}
const CT = /* @__PURE__ */ new Set(["<", ">", "<=", ">="]), LT = (e) => `\\u${e.toString(16).padStart(4, "0")}`, MT = (e) => {
  if ([1 / 0, -1 / 0, NaN, void 0, null].includes(e))
    return `${e}`;
  if (!["string", "boolean", "number"].includes(typeof e)) {
    if (typeof e != "object")
      throw new Error("Unexpected value type");
    const t = Object.getPrototypeOf(e);
    if (!(t === Array.prototype && Array.isArray(e) || t === Object.prototype))
      throw new Error("Unexpected object given as value");
  }
  return JSON.stringify(e).replace(/([{,])"__proto__":/g, '$1["__proto__"]:').replace(/[^\\]"__proto__":/g, () => {
    throw new Error("Unreachable");
  }).replace(/[\u2028\u2029]/g, (t) => LT(t.charCodeAt(0)));
}, ps = (e, ...n) => {
  const t = e.replace(/%[%drscjw]/g, (r) => {
    if (r === "%%")
      return "%";
    if (n.length === 0)
      throw new Error("Unexpected arguments count");
    const i = n.shift();
    switch (r) {
      case "%d":
        if (typeof i == "number")
          return i;
        throw new Error("Expected a number");
      case "%r":
        if (i instanceof RegExp)
          return ps("new RegExp(%j, %j)", i.source, i.flags);
        throw new Error("Expected a RegExp instance");
      case "%s":
        if (i instanceof Zr)
          return i;
        throw new Error("Expected a safe string");
      case "%c":
        if (CT.has(i))
          return i;
        throw new Error("Expected a compare op");
      case "%j":
        return MT(i);
      case "%w":
        if (Number.isInteger(i) && i >= 0)
          return " ".repeat(i);
        throw new Error("Expected a non-negative integer for indentation");
    }
    throw new Error("Unreachable");
  });
  if (n.length !== 0)
    throw new Error("Unexpected arguments count");
  return new Zr(t);
}, oo = (e) => {
  if (!/^[a-z][a-z0-9_]*$/i.test(e))
    throw new Error("Does not look like a safe id");
  return new Zr(e);
}, zd = (e) => (...n) => {
  if (!n.every((t) => t instanceof Zr))
    throw new Error("Unsafe arguments");
  return new Zr(e(...n));
}, NT = (e) => (
  // simple expression and single brackets can not break priority
  /^[a-z][a-z0-9_().]*$/i.test(e) || /^\([^()]+\)$/i.test(e) ? e : ps("(%s)", e)
), FT = zd(
  (...e) => e.some((n) => `${n}` == "true") ? "true" : e.join(" || ") || "false"
), WT = zd(
  (...e) => e.some((n) => `${n}` == "false") ? "false" : e.join(" && ") || "true"
), Gd = (e) => `${e}` == "true" ? oo("false") : `${e}` == "false" ? oo("true") : ps("!%s", NT(e)), DT = (...e) => Gd(FT(...e));
var hs = { format: ps, safe: oo, safeand: WT, safenot: Gd, safenotor: DT };
const { safe: tf } = hs, Fs = /* @__PURE__ */ new WeakMap(), UT = (e) => {
  Fs.has(e) || Fs.set(e, { sym: /* @__PURE__ */ new Map(), ref: /* @__PURE__ */ new Map(), format: /* @__PURE__ */ new Map(), pattern: /* @__PURE__ */ new Map() });
  const n = Fs.get(e), t = (l) => {
    n.sym.get(l) || n.sym.set(l, 0);
    const f = n.sym.get(l);
    return n.sym.set(l, f + 1), tf(`${l}${f}`);
  }, r = (l) => {
    if (n.pattern.has(l))
      return n.pattern.get(l);
    const f = t("pattern");
    return e[f] = new RegExp(l, "u"), n.pattern.set(l, f), f;
  };
  return n.loop || (n.loop = "ijklmnopqrstuvxyz".split("")), { gensym: t, genpattern: r, genloop: () => {
    const l = n.loop.shift();
    return n.loop.push(`${l}${l[0]}`), tf(l);
  }, getref: (l) => n.ref.get(l), genref: (l) => {
    const f = t("ref");
    return n.ref.set(l, f), f;
  }, genformat: (l) => {
    let f = n.format.get(l);
    return f || (f = t("format"), e[f] = l, n.format.set(l, f)), f;
  } };
};
var Hd = { scopeMethods: UT };
const BT = (e) => /[\uD800-\uDFFF]/.test(e) ? [...e].length : e.length, qT = (e, n, t, r) => {
  if (e % n === 0)
    return !0;
  let i = e * t;
  if ((i === 1 / 0 || i === -1 / 0) && (i = e), i % r === 0)
    return !0;
  const s = Math.floor(i + 0.5);
  return s / t === e && s % r === 0;
}, Vr = (e, n) => {
  if (e === n)
    return !0;
  if (!e || !n || typeof e != typeof n || e !== n && typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (t !== Object.getPrototypeOf(n))
    return !1;
  if (t === Array.prototype)
    return !Array.isArray(e) || !Array.isArray(n) || e.length !== n.length ? !1 : e.every((r, i) => Vr(r, n[i]));
  if (t === Object.prototype) {
    const [r, i] = [Object.keys(e), Object.keys(n)];
    return r.length !== i.length ? !1 : (/* @__PURE__ */ new Set([...r, ...i])).size === r.length && r.every((o) => Vr(e[o], n[o]));
  }
  return !1;
}, zT = (e) => {
  if (e.length < 2)
    return !0;
  if (e.length === 2)
    return !Vr(e[0], e[1]);
  const n = [], t = e.length > 20 ? /* @__PURE__ */ new Set() : null;
  let r = 0, i = 0;
  for (const s of e) {
    if (typeof s == "object")
      n.push(s);
    else if (t) {
      if (t.add(s), t.size !== ++r)
        return !1;
    } else if (e.indexOf(s, i + 1) !== -1)
      return !1;
    i++;
  }
  for (let s = 1; s < n.length; s++)
    for (let o = 0; o < s; o++)
      if (Vr(n[s], n[o]))
        return !1;
  return !0;
}, GT = (e) => {
  if (typeof Buffer < "u")
    return Buffer.from(e, "base64").toString("utf-8");
  const n = atob(e);
  return new TextDecoder("utf-8").decode(new Uint8Array(n.length).map((t, r) => n.charCodeAt(r)));
}, Kd = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
Kd[Symbol.for("toJayString")] = "Function.prototype.call.bind(Object.prototype.hasOwnProperty)";
const Yd = (e) => /~\//.test(e) ? `${e}`.replace(/~/g, "~0").replace(/\//g, "~1") : e, HT = (e) => e.length === 0 ? "#" : `#/${e.map(Yd).join("/")}`, KT = ({ keywordLocation: e, instanceLocation: n }, t, r) => ({
  keywordLocation: `${t}${e.slice(1)}`,
  instanceLocation: `${r}${n.slice(1)}`
}), YT = (e, [n, t]) => n.includes(!0) || n.some((r) => r === e) || t.some((r) => new RegExp(r, "u").test(e)), JT = (e, n) => (e.filter((t) => t[n])[0] || {})[n], XT = { toPointer: HT, pointerPart: Yd, errorMerge: KT, propertyIn: YT, dynamicResolve: JT };
var ca = { stringLength: BT, isMultipleOf: qT, deepEqual: Vr, unique: zT, deBase64: GT, hasOwn: Kd, ...XT };
const { format: fe, safe: ZT } = hs, { scopeMethods: VT } = Hd, wi = ca, ao = new Map(
  Object.entries({
    null: (e) => fe("%s === null", e),
    boolean: (e) => fe('typeof %s === "boolean"', e),
    array: (e) => fe("Array.isArray(%s)", e),
    object: (e) => fe('typeof %s === "object" && %s && !Array.isArray(%s)', e, e, e),
    number: (e) => fe('typeof %s === "number"', e),
    integer: (e) => fe("Number.isInteger(%s)", e),
    string: (e) => fe('typeof %s === "string"', e)
  })
), Bt = ({ name: e, parent: n, keyval: t, keyname: r }) => {
  if (e) {
    if (n || t || r)
      throw new Error("name can be used only stand-alone");
    return e;
  }
  if (!n)
    throw new Error("Can not use property of undefined parent!");
  const i = Bt(n);
  if (t !== void 0) {
    if (r)
      throw new Error("Can not use key value and name together");
    if (!["string", "number"].includes(typeof t))
      throw new Error("Invalid property path");
    return /^[a-z][a-z0-9_]*$/i.test(t) ? fe("%s.%s", i, ZT(t)) : fe("%s[%j]", i, t);
  } else if (r)
    return fe("%s[%s]", i, r);
  throw new Error("Unreachable");
}, QT = new Set(
  [].concat(
    ...[Object, Array, String, Number, Boolean].map((e) => Object.getOwnPropertyNames(e.prototype))
  )
), xT = (e, n, t, { unmodifiedPrototypes: r, isJSON: i }, s) => {
  const { gensym: o, genpattern: a, genloop: l } = VT(n, t);
  return { present: (m) => {
    const g = Bt(m), { parent: v, keyval: w, keyname: A, inKeys: C, checked: W } = m;
    if (W || C && i)
      throw new Error("Unreachable: useless check for undefined");
    if (C)
      return fe("%s !== undefined", g);
    if (v && A) {
      n.hasOwn = wi.hasOwn;
      const I = Bt(v);
      return i ? fe("%s !== undefined && hasOwn(%s, %s)", g, I, A) : fe("%s in %s && hasOwn(%s, %s)", A, I, I, A);
    } else if (v && w !== void 0) {
      if (r && i && !QT.has(`${w}`))
        return fe("%s !== undefined", g);
      n.hasOwn = wi.hasOwn;
      const I = Bt(v);
      return i ? fe("%s !== undefined && hasOwn(%s, %j)", g, I, w) : fe("%j in %s && hasOwn(%s, %j)", w, I, I, w);
    }
    throw new Error("Unreachable: present() check without parent");
  }, forObjectKeys: (m, g) => {
    const v = o("key");
    e.block(fe("for (const %s of Object.keys(%s))", v, Bt(m)), () => {
      g(t(m, v, !0), v);
    });
  }, forArray: (m, g, v) => {
    const w = l(), A = Bt(m);
    e.block(fe("for (let %s = %s; %s < %s.length; %s++)", w, g, w, A, w), () => {
      v(t(m, w, r, !0), w);
    });
  }, patternTest: (m, g) => {
    const v = m.replace(/[.^$|*+?(){}[\]\\]/gu, "");
    if (m === `^${v}$`)
      return fe("(%s === %j)", g, m.slice(1, -1));
    if (s.has(m))
      return fe("true");
    if ([v, `${v}+`, `${v}.*`, `.*${v}.*`].includes(m))
      return fe("%s.includes(%j)", g, v);
    if ([`^${v}`, `^${v}+`, `^${v}.*`].includes(m))
      return fe("%s.startsWith(%j)", g, v);
    if ([`${v}$`, `.*${v}$`].includes(m))
      return fe("%s.endsWith(%j)", g, v);
    const w = [...v].slice(0, -1).join("");
    return [`${v}*`, `${v}?`].includes(m) ? w.length === 0 ? fe("true") : fe("%s.includes(%j)", g, w) : [`^${v}*`, `^${v}?`].includes(m) ? w.length === 0 ? fe("true") : fe("%s.startsWith(%j)", g, w) : fe("%s.test(%s)", a(m), g);
  }, compare: (m, g) => {
    if (!g || typeof g != "object")
      return fe("%s === %j", m, g);
    let v;
    const w = (A) => A.length <= 3 && A.every((C) => !C || typeof C != "object");
    if (Array.isArray(g)) {
      if (v = ao.get("array")(m), w(g)) {
        let A = fe("%s.length === %d", m, g.length);
        for (let C = 0; C < g.length; C++)
          A = fe("%s && %s[%d] === %j", A, m, C, g[C]);
        return fe("%s && %s", v, A);
      }
    } else {
      v = ao.get("object")(m);
      const [A, C] = [Object.keys(g), Object.values(g)];
      if (w(C)) {
        let W = fe("Object.keys(%s).length === %d", m, A.length);
        A.length > 0 && (n.hasOwn = wi.hasOwn);
        for (const I of A)
          W = fe("%s && hasOwn(%s, %j)", W, m, I);
        for (const I of A)
          W = fe("%s && %s[%j] === %j", W, m, I, g[I]);
        return fe("%s && %s", v, W);
      }
    }
    return n.deepEqual = wi.deepEqual, fe("%s && deepEqual(%s, %j)", v, m, g);
  }, propvar: t };
}, ek = /^\([^)]*\) *=>/, nk = /^[^=]*=>/, rf = Symbol.for("toJayString");
function tk(e) {
  if (typeof e == "function") {
    if (e[rf])
      return e[rf];
    if (Object.getPrototypeOf(e) !== Function.prototype)
      throw new Error("Can not stringify: a function with unexpected prototype");
    const n = `${e}`;
    if (e.prototype) {
      if (!/^function[ (]/.test(n))
        throw new Error("Unexpected function");
      return n;
    }
    if (ek.test(n) || nk.test(n))
      return n;
    throw new Error("Can not stringify: only either normal or arrow functions are supported");
  } else if (typeof e == "object") {
    const n = Object.getPrototypeOf(e);
    if (e instanceof RegExp && n === RegExp.prototype)
      return fe("%r", e);
    throw new Error("Can not stringify: an object with unexpected prototype");
  }
  throw new Error(`Can not stringify: unknown type ${typeof e}`);
}
var Jd = { types: ao, buildName: Bt, jsHelpers: xT, jaystring: tk };
const { format: $i, safe: rk, safenot: ik } = hs, { jaystring: sk } = Jd, ok = /[{[]/, ak = /[}\]]/;
var Xd = () => {
  const e = [];
  let n = 0;
  const t = (s) => {
    ak.test(s.trim()[0]) && n--, e.push({ indent: n, code: s }), ok.test(s[s.length - 1]) && n++;
  }, r = () => {
    if (n !== 0)
      throw new Error("Unexpected indent at build()");
    const s = e.map((o) => $i("%w%s", o.indent * 2, o.code)).join(`
`);
    return /^[a-z][a-z0-9]*$/i.test(s) ? `return ${s}` : `return (${s})`;
  }, i = (s) => {
    const o = Object.entries(s);
    for (const [a, l] of o) {
      if (!/^[a-z][a-z0-9]*$/i.test(a))
        throw new Error("Unexpected scope key!");
      if (!(typeof l == "function" || l instanceof RegExp))
        throw new Error("Unexpected scope value!");
    }
    return o;
  };
  return {
    optimizedOut: !1,
    // some branch of code has been optimized out
    size: () => e.length,
    write(s, ...o) {
      if (typeof s != "string")
        throw new Error("Format must be a string!");
      if (s.includes(`
`))
        throw new Error("Only single lines are supported");
      return t($i(s, ...o)), !0;
    },
    block(s, o, a = !1) {
      const l = n;
      this.write("%s {", s);
      const f = e.length;
      if (o(), f === e.length)
        return e.pop(), n = l, !1;
      if (f === e.length - 1 && !a) {
        const { code: u } = e[e.length - 1];
        if (!/^(if|for) /.test(u))
          return e.length -= 2, n = l, this.write("%s %s", s, u);
      }
      return this.write("}");
    },
    if(s, o, a) {
      `${s}` == "false" ? (a && a(), o && (this.optimizedOut = !0)) : `${s}` == "true" ? (o && o(), a && (this.optimizedOut = !0)) : o && this.block($i("if (%s)", s), o, !!a) ? a && this.block($i("else"), a) : a && this.if(ik(s), a);
    },
    makeModule(s = {}) {
      return `(function() {
'use strict'
${i(s).map(
        ([a, l]) => `const ${rk(a)} = ${sk(l)};`
      ).join(`
`)}
${r()}})()`;
    },
    makeFunction(s = {}) {
      const o = i(s), a = o.map((f) => f[0]), l = o.map((f) => f[1]);
      return Function(...a, `'use strict'
${r()}`)(...l);
    }
  };
};
const lk = [
  "$schema",
  "$vocabulary",
  "id",
  "$id",
  "$anchor",
  "$ref",
  "definitions",
  "$defs",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicAnchor",
  "$dynamicRef",
  "type",
  "required",
  "default",
  "enum",
  "const",
  "not",
  "allOf",
  "anyOf",
  "oneOf",
  "if",
  "then",
  "else",
  "maximum",
  "minimum",
  "exclusiveMaximum",
  "exclusiveMinimum",
  "multipleOf",
  "divisibleBy",
  "items",
  "maxItems",
  "minItems",
  "additionalItems",
  "prefixItems",
  "contains",
  "minContains",
  "maxContains",
  "uniqueItems",
  "maxLength",
  "minLength",
  "format",
  "pattern",
  "contentEncoding",
  "contentMediaType",
  "contentSchema",
  "properties",
  "maxProperties",
  "minProperties",
  "additionalProperties",
  "patternProperties",
  "propertyNames",
  "dependencies",
  "dependentRequired",
  "dependentSchemas",
  "propertyDependencies",
  "unevaluatedProperties",
  "unevaluatedItems",
  "title",
  "description",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples",
  "$comment",
  "example",
  // unused meta, OpenAPI
  "discriminator",
  // optimization hint and error filtering only, does not affect validation result
  "removeAdditional"
  // optional keyword for { removeAdditional: 'keyword' } config, to target specific objects
], fk = [
  "draft/next",
  "draft/2020-12",
  "draft/2019-09",
  "draft-07",
  "draft-06",
  "draft-04",
  "draft-03"
  // historic
], uk = fk.map((e) => `https://json-schema.org/${e}/schema`), ck = ["core", "applicator", "validation", "meta-data", "format", "content"], dk = [
  "core",
  "applicator",
  "unevaluated",
  "validation",
  "meta-data",
  "format-annotation",
  "format-assertion",
  "content"
], pk = [
  ...ck.map((e) => `https://json-schema.org/draft/2019-09/vocab/${e}`),
  ...dk.map((e) => `https://json-schema.org/draft/2020-12/vocab/${e}`)
];
var Zd = { knownKeywords: lk, schemaVersions: uk, knownVocabularies: pk };
const { knownKeywords: Vd } = Zd;
function Qd(e, n, t, r = "keys") {
  if (!e.has(n))
    return e.set(n, t);
  if (e.get(n) !== t)
    throw new Error(`Conflicting duplicate ${r}: ${n}`);
}
function hk(e) {
  return e.includes("~") ? e.replace(/~[01]/g, (n) => {
    switch (n) {
      case "~1":
        return "/";
      case "~0":
        return "~";
    }
    throw new Error("Unreachable");
  }) : e;
}
function lo(e, n, t) {
  if (typeof e != "object")
    throw new Error("Invalid input object");
  if (typeof n != "string")
    throw new Error("Invalid JSON pointer");
  const r = n.split("/");
  if (!["", "#"].includes(r.shift()))
    throw new Error("Invalid JSON pointer");
  if (r.length === 0)
    return e;
  let i = e;
  for (const s of r) {
    if (typeof s != "string")
      throw new Error("Invalid JSON pointer");
    t && t.push(i);
    const o = hk(s);
    if (typeof i != "object" || !Object.prototype.hasOwnProperty.call(i, o))
      return;
    i = i[o];
  }
  return i;
}
const sf = /^https?:\/\//;
function qt(e, n) {
  if (typeof e != "string" || typeof n != "string")
    throw new Error("Unexpected path!");
  if (n.length === 0)
    return e;
  const t = e.replace(/#.*/, "");
  return n.startsWith("#") ? `${t}${n}` : !t.includes("/") || sf.test(n) ? n : sf.test(t) ? `${new URL(n, t)}` : n.startsWith("/") ? n : [...t.split("/").slice(0, -1), n].join("/");
}
function of(e) {
  return e.map((t) => t && (t.$id || t.id) || "").filter((t) => t && typeof t == "string").reduce(qt, "");
}
const xd = ["properties", "patternProperties", "$defs", "definitions"], ep = ["const", "enum", "examples", "example", "comment"], np = Symbol("skip");
function da(e, n) {
  const t = (r, i = !1) => {
    if (!r || typeof r != "object")
      return;
    const s = n(r);
    if (s !== void 0)
      return s === np ? void 0 : s;
    for (const o of Object.keys(r)) {
      if (!i && !Array.isArray(r) && !Vd.includes(o) || !i && ep.includes(o))
        continue;
      const a = t(r[o], !i && xd.includes(o));
      if (a !== void 0)
        return a;
    }
  };
  return t(e);
}
function tp(e, n, t, r = "") {
  const i = qt(r, t), s = [], [o, a = ""] = i.split("#"), l = decodeURI(a), f = (u, c, d = !1, h = !1) => {
    if (!u || typeof u != "object")
      return;
    const m = u.$id || u.id;
    let g = c;
    if (m && typeof m == "string") {
      if (g = qt(g, m), g === i || g === o && l === "")
        s.push([u, e, c]);
      else if (g === o && l[0] === "/") {
        const w = [], A = lo(u, l, w);
        A !== void 0 && s.push([A, e, qt(c, of(w))]);
      }
    }
    const v = h ? u.$dynamicAnchor : u.$anchor;
    if (v && typeof v == "string") {
      if (v.includes("#"))
        throw new Error("$anchor can't include '#'");
      if (v.startsWith("/"))
        throw new Error("$anchor can't start with '/'");
      g = qt(g, `#${v}`), g === i && s.push([u, e, c]);
    }
    for (const w of Object.keys(u))
      !d && !Array.isArray(u) && !Vd.includes(w) || !d && ep.includes(w) || f(u[w], g, !d && xd.includes(w));
    !h && u.$dynamicAnchor && f(u, c, d, !0);
  };
  if (f(e, o), o === r.replace(/#$/, "") && (l[0] === "/" || l === "")) {
    const u = [], c = lo(e, l, u);
    c !== void 0 && s.push([c, e, of(u)]);
  }
  if (n.has(o) && n.get(o) !== e) {
    const u = tp(n.get(o), n, `#${a}`, o);
    s.push(...u.map(([c, d, h]) => [c, d, qt(o, h)]));
  }
  return n.has(i) && s.push([n.get(i), n.get(i), i]), s;
}
function mk(e) {
  const n = /* @__PURE__ */ new Map();
  return da(e, (t) => {
    if (t !== e && (t.$id || t.id))
      return np;
    const r = t.$dynamicAnchor;
    if (r && typeof r == "string") {
      if (r.includes("#"))
        throw new Error("$dynamicAnchor can't include '#'");
      if (!/^[a-zA-Z0-9_-]+$/.test(r))
        throw new Error(`Unsupported $dynamicAnchor: ${r}`);
      Qd(n, r, t, "$dynamicAnchor");
    }
  }), n;
}
const gk = (e, n) => da(e, (t) => Object.keys(t).some((r) => n.includes(r)) || void 0) || !1, af = (e, n, t = !1) => {
  if (!Array.isArray(n))
    throw new Error("Expected an array of schemas");
  for (const r of n)
    da(r, (i) => {
      const s = i.$id || i.id, o = s && typeof s == "string" ? s.replace(/#$/, "") : null;
      if (o && o.includes("://") && !o.includes("#"))
        Qd(e, o, i, "schema $id in 'schemas'");
      else if (i === r && !t)
        throw new Error("Schema with missing or invalid $id in 'schemas'");
    });
  return e;
}, rp = (e, n) => {
  if (n)
    return af(rp(e), n, !0);
  if (e)
    switch (Object.getPrototypeOf(e)) {
      case Object.prototype:
        return new Map(Object.entries(e));
      case Map.prototype:
        return new Map(e);
      case Array.prototype:
        return af(/* @__PURE__ */ new Map(), e);
    }
  throw new Error("Unexpected value for 'schemas' option");
};
var ip = { get: lo, joinPath: qt, resolveReference: tp, getDynamicAnchors: mk, hasKeywords: gk, buildSchemas: rp };
const fo = {
  // matches ajv + length checks + does not start with a dot
  // note that quoted emails are deliberately unsupported (as in ajv), who would want \x01 in email
  // first check is an additional fast path with lengths: 20+(1+21)*2 = 64, (1+61+1)+((1+60+1)+1)*3 = 252 < 253, that should cover most valid emails
  // max length is 64 (name) + 1 (@) + 253 (host), we want to ensure that prior to feeding to the fast regex
  // the second regex checks for quoted, starting-leading dot in name, and two dots anywhere
  email: (e) => {
    if (e.length > 318)
      return !1;
    if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]{1,20}(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]{1,21}){0,2}@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,60}[a-z0-9])?){0,3}$/i.test(e))
      return !0;
    if (!e.includes("@") || /(^\.|^"|\.@|\.\.)/.test(e))
      return !1;
    const [t, r, ...i] = e.split("@");
    return !t || !r || i.length !== 0 || t.length > 64 || r.length > 253 || !/^[a-z0-9.-]+$/i.test(r) || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(t) ? !1 : r.split(".").every((s) => /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(s));
  },
  // matches ajv + length checks
  hostname: (e) => e.length > (e.endsWith(".") ? 254 : 253) ? !1 : /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*\.?$/i.test(e),
  // 'time' matches ajv + length checks, 'date' matches ajv full
  // date: https://tools.ietf.org/html/rfc3339#section-5.6
  // date-time: https://tools.ietf.org/html/rfc3339#section-5.6
  // leap year: https://tools.ietf.org/html/rfc3339#appendix-C
  // 11: 1990-01-01, 1: T, 9: 00:00:00., 12: maxiumum fraction length (non-standard), 6: +00:00
  date: (e) => {
    if (e.length !== 10)
      return !1;
    if (e[5] === "0" && e[6] === "2") {
      if (/^\d\d\d\d-02-(?:[012][1-8]|[12]0|[01]9)$/.test(e))
        return !0;
      const n = e.match(/^(\d\d\d\d)-02-29$/);
      if (!n)
        return !1;
      const t = n[1] | 0;
      return t % 16 === 0 || t % 4 === 0 && t % 25 !== 0;
    }
    return e.endsWith("31") ? /^\d\d\d\d-(?:0[13578]|1[02])-31$/.test(e) : /^\d\d\d\d-(?:0[13-9]|1[012])-(?:[012][1-9]|[123]0)$/.test(e);
  },
  // leap second handling is special, we check it's 23:59:60.*
  time: (e) => {
    if (e.length > 27 || !/^(?:2[0-3]|[0-1]\d):[0-5]\d:(?:[0-5]\d|60)(?:\.\d+)?(?:z|[+-](?:2[0-3]|[0-1]\d)(?::?[0-5]\d)?)?$/i.test(e))
      return !1;
    if (!/:60/.test(e))
      return !0;
    const t = e.match(/([0-9.]+|[^0-9.])/g);
    let r = Number(t[0]) * 60 + Number(t[2]);
    return t[5] === "+" ? r += 24 * 60 - Number(t[6] || 0) * 60 - Number(t[8] || 0) : t[5] === "-" && (r += Number(t[6] || 0) * 60 + Number(t[8] || 0)), r % (24 * 60) === 23 * 60 + 59;
  },
  // first two lines specific to date-time, then tests for unanchored (at end) date, code identical to 'date' above
  // input[17] === '6' is a check for :60
  "date-time": (e) => {
    if (e.length > 38)
      return !1;
    const n = /^\d\d\d\d-(?:0[1-9]|1[0-2])-(?:[0-2]\d|3[01])[t\s](?:2[0-3]|[0-1]\d):[0-5]\d:(?:[0-5]\d|60)(?:\.\d+)?(?:z|[+-](?:2[0-3]|[0-1]\d)(?::?[0-5]\d)?)$/i, t = e[5] === "0" && e[6] === "2";
    if (t && e[8] === "3" || !n.test(e))
      return !1;
    if (e[17] === "6") {
      const r = e.slice(11).match(/([0-9.]+|[^0-9.])/g);
      let i = Number(r[0]) * 60 + Number(r[2]);
      if (r[5] === "+" ? i += 24 * 60 - Number(r[6] || 0) * 60 - Number(r[8] || 0) : r[5] === "-" && (i += Number(r[6] || 0) * 60 + Number(r[8] || 0)), i % (24 * 60) !== 23 * 60 + 59)
        return !1;
    }
    if (t) {
      if (/^\d\d\d\d-02-(?:[012][1-8]|[12]0|[01]9)/.test(e))
        return !0;
      const r = e.match(/^(\d\d\d\d)-02-29/);
      if (!r)
        return !1;
      const i = r[1] | 0;
      return i % 16 === 0 || i % 4 === 0 && i % 25 !== 0;
    }
    return e[8] === "3" && e[9] === "1" ? /^\d\d\d\d-(?:0[13578]|1[02])-31/.test(e) : /^\d\d\d\d-(?:0[13-9]|1[012])-(?:[012][1-9]|[123]0)/.test(e);
  },
  /* ipv4 and ipv6 are from ajv with length restriction */
  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
  ipv4: (e) => e.length <= 15 && /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)$/.test(e),
  // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
  // max length: 1000:1000:1000:1000:1000:1000:255.255.255.255
  // we parse ip6 format with a simple scan, leaving embedded ipv4 validation to a regex
  // s0=count(:), s1=count(.), hex=count(a-zA-Z0-9), short=count(::)>0
  // 48-57: '0'-'9', 97-102, 65-70: 'a'-'f', 'A'-'F', 58: ':', 46: '.'
  /* eslint-disable one-var */
  // prettier-ignore
  ipv6: (e) => {
    if (e.length > 45 || e.length < 2)
      return !1;
    let n = 0, t = 0, r = 0, i = !1, s = !1, o = 0, a = !0;
    for (let f = 0; f < e.length; f++) {
      const u = e.charCodeAt(f);
      if (f === 1 && o === 58 && u !== 58)
        return !1;
      if (u >= 48 && u <= 57) {
        if (++r > 4)
          return !1;
      } else if (u === 46) {
        if (n > 6 || t >= 3 || r === 0 || s)
          return !1;
        t++, r = 0;
      } else if (u === 58) {
        if (t > 0 || n >= 7)
          return !1;
        if (o === 58) {
          if (i)
            return !1;
          i = !0;
        } else
          f === 0 && (a = !1);
        n++, r = 0, s = !1;
      } else if (u >= 97 && u <= 102 || u >= 65 && u <= 70) {
        if (t > 0 || ++r > 4)
          return !1;
        s = !0;
      } else
        return !1;
      o = u;
    }
    if (n < 2 || t > 0 && (t !== 3 || r === 0))
      return !1;
    if (i && e.length === 2)
      return !0;
    if (t > 0 && !/(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/.test(e))
      return !1;
    const l = t > 0 ? 6 : 7;
    return i ? (a || r > 0) && n < l : n === l && a && r > 0;
  },
  /* eslint-enable one-var */
  // matches ajv with optimization
  uri: /^[a-z][a-z0-9+\-.]*:(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|v[0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/?(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
  // matches ajv with optimization
  "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|v[0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/?(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?)?(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
  // ajv has /^(([^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?([a-z0-9_]|%[0-9a-f]{2})+(:[1-9][0-9]{0,3}|\*)?(,([a-z0-9_]|%[0-9a-f]{2})+(:[1-9][0-9]{0,3}|\*)?)*\})*$/i
  // this is equivalent
  // uri-template: https://tools.ietf.org/html/rfc6570
  // eslint-disable-next-line no-control-regex
  "uri-template": /^(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2}|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
  // ajv has /^(\/([^~/]|~0|~1)*)*$/, this is equivalent
  // JSON-pointer: https://tools.ietf.org/html/rfc6901
  "json-pointer": /^(?:|\/(?:[^~]|~0|~1)*)$/,
  // ajv has /^(0|[1-9][0-9]*)(#|(\/([^~/]|~0|~1)*)*)$/, this is equivalent
  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
  "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:|#|\/(?:[^~]|~0|~1)*)$/,
  // uuid: http://tools.ietf.org/html/rfc4122
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  // length restriction is an arbitrary safeguard
  // first regex checks if this a week duration (can't be combined with others)
  // second regex verifies symbols, no more than one fraction, at least 1 block is present, and T is not last
  // third regex verifies structure
  duration: (e) => e.length > 1 && e.length < 80 && (/^P\d+([.,]\d+)?W$/.test(e) || /^P[\dYMDTHS]*(\d[.,]\d+)?[YMDHS]$/.test(e) && /^P([.,\d]+Y)?([.,\d]+M)?([.,\d]+D)?(T([.,\d]+H)?([.,\d]+M)?([.,\d]+S)?)?$/.test(e))
  // TODO: iri, iri-reference, idn-email, idn-hostname
}, _k = {
  // basic
  alpha: /^[a-zA-Z]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  // hex
  "hex-digits": /^[0-9a-f]+$/i,
  "hex-digits-prefixed": /^0x[0-9a-f]+$/i,
  "hex-bytes": /^([0-9a-f][0-9a-f])+$/i,
  "hex-bytes-prefixed": /^0x([0-9a-f][0-9a-f])+$/i,
  base64: (e) => e.length % 4 === 0 && /^[a-z0-9+/]*={0,3}$/i.test(e),
  // ajv has /^#(\/([a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, this is equivalent
  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
  "json-pointer-uri-fragment": /^#(|\/(\/|[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)$/i,
  // draft3 backwards compat
  "host-name": fo.hostname,
  "ip-address": fo.ipv4,
  // manually cleaned up from is-my-json-valid, CSS 2.1 colors only per draft03 spec
  color: /^(#[0-9A-Fa-f]{3,6}|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)|rgb\(\s*(\d?\d%|100%)\s*,\s*(\d?\d%|100%)\s*,\s*(\d?\d%|100%)\s*\))$/
  // style is deliberately unsupported, don't accept untrusted styles
}, yk = {
  // In weak because don't accept regexes from untrusted sources, using them can cause DoS
  // matches ajv + length checks
  // eslint comment outside because we don't want comments in functions, those affect output
  /* eslint-disable no-new */
  regex: (e) => {
    if (e.length > 1e5 || /[^\\]\\Z/.test(e))
      return !1;
    try {
      return new RegExp(e, "u"), !0;
    } catch {
      return !1;
    }
  }
  /* eslint-enable no-new */
};
var vk = { core: fo, extra: _k, weak: yk };
const Sn = (e, n) => [.../* @__PURE__ */ new Set([...e, ...n])].sort(), sp = (e, n) => e.filter((t) => n.includes(t)), bk = (e) => (...n) => e(...n.map(Wi)), op = (e) => (...n) => Wi(e(...n.map(Wi))), $n = (e, n) => e && !e.includes(n), Wi = ({ type: e = null, dyn: n = {}, ...t }) => ({
  type: e && [...e].sort(),
  items: $n(e, "array") ? 1 / 0 : t.items || 0,
  properties: $n(e, "object") ? [!0] : [...t.properties || []].sort(),
  patterns: $n(e, "object") ? [] : [...t.patterns || []].sort(),
  required: $n(e, "object") ? [] : [...t.required || []].sort(),
  fullstring: $n(e, "string") || t.fullstring || !1,
  dyn: {
    item: $n(e, "array") ? !1 : n.item || !1,
    items: $n(e, "array") ? 0 : Math.max(t.items || 0, n.items || 0),
    properties: $n(e, "object") ? [] : Sn(t.properties || [], n.properties || []),
    patterns: $n(e, "object") ? [] : Sn(t.patterns || [], n.patterns || [])
  },
  unknown: t.unknown && !($n(e, "object") && $n(e, "array")) || !1
}), wk = () => Wi({}), ap = op((e, n) => ({
  type: e.type && n.type ? sp(e.type, n.type) : e.type || n.type || null,
  items: Math.max(e.items, n.items),
  properties: Sn(e.properties, n.properties),
  patterns: Sn(e.patterns, n.patterns),
  required: Sn(e.required, n.required),
  fullstring: e.fullstring || n.fullstring,
  dyn: {
    item: e.dyn.item || n.dyn.item,
    items: Math.max(e.dyn.items, n.dyn.items),
    properties: Sn(e.dyn.properties, n.dyn.properties),
    patterns: Sn(e.dyn.patterns, n.dyn.patterns)
  },
  unknown: e.unknown || n.unknown
})), uo = (e, n) => n !== !0 && new RegExp(e, "u").test(n), $k = ({ properties: e, patterns: n }, { properties: t, patterns: r }) => {
  const i = e.filter((l) => t.includes(l) || t.includes(!0) || r.some((f) => uo(f, l))), s = t.filter((l) => e.includes(l) || e.includes(!0) || n.some((f) => uo(f, l))), o = n.filter((l) => r.includes(l) || t.includes(!0)), a = r.filter((l) => n.includes(l) || e.includes(!0));
  return { properties: Sn(i, s), patterns: Sn(o, a) };
}, lp = ({ properties: e, patterns: n }, { properties: t, patterns: r }) => t.every((i) => e.includes(i) || e.includes(!0) || n.some((s) => uo(s, i))) && r.every((i) => n.includes(i) || e.includes(!0)), Ak = op((e, n) => ({
  type: e.type && n.type ? Sn(e.type, n.type) : null,
  items: Math.min(e.items, n.items),
  ...$k(e, n),
  required: $n(e.type, "object") && n.required || $n(n.type, "object") && e.required || sp(e.required, n.required),
  fullstring: e.fullstring && n.fullstring,
  dyn: {
    item: e.dyn.item || n.dyn.item,
    items: Math.max(e.dyn.items, n.dyn.items),
    properties: Sn(e.dyn.properties, n.dyn.properties),
    patterns: Sn(e.dyn.patterns, n.dyn.patterns)
  },
  unknown: e.unknown || n.unknown
})), Ok = (e, n) => Object.assign(e, ap(e, n)), Ek = bk(({ unknown: e, items: n, dyn: t, ...r }) => ({
  items: n !== 1 / 0 && (e || t.items > n || t.item),
  properties: !r.properties.includes(!0) && (e || !lp(r, t))
}));
var Rk = { initTracing: wk, andDelta: ap, orDelta: Ak, applyDelta: Ok, isDynamic: Ek, inProperties: lp };
const { format: H, safe: lf, safeand: Ai, safenot: Dt, safenotor: Oi } = hs, Tk = Xd, { resolveReference: cr, joinPath: ff, getDynamicAnchors: kk, hasKeywords: uf } = ip, Ei = vk, { toPointer: Ws, ...Pe } = ca, { scopeMethods: fp } = Hd, { buildName: Ds, types: Yn, jsHelpers: Sk } = Jd, { knownKeywords: Pk, schemaVersions: Di, knownVocabularies: Ik } = Zd, { initTracing: jk, andDelta: cf, orDelta: $t, applyDelta: Ck, isDynamic: Jn, inProperties: Lk } = Rk, Us = /* @__PURE__ */ new Set(["^[\\s\\S]*$", "^[\\S\\s]*$", "^[^]*$", "", ".*", "^", "$"]), Bs = ["null", "boolean", "number", "integer", "string"], co = new Map(
  Object.entries({
    boolean: (e) => typeof e == "boolean",
    array: (e) => Array.isArray(e) && Object.getPrototypeOf(e) === Array.prototype,
    object: (e) => e && Object.getPrototypeOf(e) === Object.prototype,
    finite: (e) => Number.isFinite(e),
    natural: (e) => Number.isInteger(e) && e >= 0,
    string: (e) => typeof e == "string",
    jsonval: (e) => Pe.deepEqual(e, JSON.parse(JSON.stringify(e)))
  })
), zt = co.get("object"), df = (e) => zt(e) || typeof e == "boolean", Mk = (e) => Pe.deepEqual(e, { type: [] }), At = (e, n) => Di.indexOf(e) > Di.indexOf(`https://json-schema.org/${n}/schema`), Nk = (e, n) => {
  const t = `${e}`.replace(/^http:\/\//, "https://").replace(/#$/, "");
  return Di.includes(t) ? At(t, n) : !0;
}, Fk = (e, n, t = !1, r = !1) => Object.freeze({ parent: e, keyname: n, inKeys: t, number: r }), Wk = (e, n, t = !1) => Object.freeze({ parent: e, keyval: n, checked: t }), qs = Symbol("evaluatedStatic"), Ot = Symbol("optDynamic"), mr = Symbol("optDynAnchors"), Br = Symbol("optRecAnchors"), Dk = (e) => {
  if (typeof e == "boolean")
    return e;
  if (zt(e) && Object.keys(e).length === 0)
    return !0;
}, Et = /* @__PURE__ */ new Set(), Qr = /* @__PURE__ */ new Map(), Uk = (e, n, t, r) => {
  if (n) {
    const i = n.replace(/^http:\/\//, "https://").replace(/#$/, "");
    t(Di.includes(i), "Unexpected schema version:", i), Qr.set(e, {
      exclusiveRefs: At(i, "draft/2019-09"),
      contentValidation: At(i, "draft/2019-09"),
      dependentUnsupported: At(i, "draft/2019-09"),
      newItemsSyntax: !At(i, "draft/2020-12"),
      containsEvaluates: !At(i, "draft/2020-12"),
      objectContains: !At(i, "draft/next"),
      bookending: At(i, "draft/next")
    });
  } else
    t(!r, "[requireSchema] $schema is required"), Qr.set(e, {});
}, up = (e, n, t, r, i = "") => {
  const {
    mode: s = "default",
    useDefaults: o = !1,
    removeAdditional: a = !1,
    // supports additionalProperties: false and additionalItems: false
    includeErrors: l = !1,
    allErrors: f = !1,
    contentValidation: u,
    dryRun: c,
    // unused, just for rest siblings
    lint: d = !1,
    allowUnusedKeywords: h = t.mode === "lax" || t.mode === "spec",
    allowUnreachable: m = t.mode === "lax" || t.mode === "spec",
    requireSchema: g = t.mode === "strong",
    requireValidation: v = t.mode === "strong",
    requireStringValidation: w = t.mode === "strong",
    forbidNoopValues: A = t.mode === "strong",
    // e.g. $recursiveAnchor: false (it's false by default)
    complexityChecks: C = t.mode === "strong",
    unmodifiedPrototypes: W = !1,
    // assumes no mangled Object/Array prototypes
    isJSON: I = !1,
    // assume input to be JSON, which e.g. makes undefined impossible
    $schemaDefault: F = null,
    formatAssertion: L = t.mode !== "spec" || Nk(n.$schema, "draft/2019-09"),
    formats: D = {},
    weakFormats: P = t.mode !== "strong",
    extraFormats: ie = !1,
    schemas: E,
    // always a Map, produced at wrapper
    ...ee
  } = t, an = {
    ...Ei.core,
    ...P ? Ei.weak : {},
    ...ie ? Ei.extra : {},
    ...D
  };
  if (Object.keys(ee).length !== 0)
    throw new Error(`Unknown options: ${Object.keys(ee).join(", ")}`);
  if (!["strong", "lax", "default", "spec"].includes(s))
    throw new Error(`Invalid mode: ${s}`);
  if (!l && f)
    throw new Error("allErrors requires includeErrors to be enabled");
  if (g && F)
    throw new Error("requireSchema forbids $schemaDefault");
  if (s === "strong") {
    const hn = { ...{ requireValidation: v, requireStringValidation: w }, formatAssertion: L, complexityChecks: C, requireSchema: g }, Q = { weakFormats: P, allowUnusedKeywords: h };
    for (const [k, Ke] of Object.entries(hn))
      if (!Ke)
        throw new Error(`Strong mode demands ${k}`);
    for (const [k, Ke] of Object.entries(Q))
      if (Ke)
        throw new Error(`Strong mode forbids ${k}`);
  }
  const { gensym: be, getref: z, genref: he, genformat: Xe } = fp(r), nt = (pn) => {
    const hn = [];
    let Q = pn;
    for (; Q; )
      Q.name || hn.unshift(Q), Q = Q.parent || Q.errorParent;
    if (hn.every((Nn) => Nn.keyval !== void 0))
      return H("%j", Ws(hn.map((Nn) => Nn.keyval)));
    const k = ["#"], Ke = () => {
      const Nn = k.map(Pe.pointerPart).join("/");
      return k.length = 0, Nn;
    };
    let Gn = null;
    for (const { keyname: Nn, keyval: di, number: Mt } of hn)
      if (Nn) {
        Mt || (r.pointerPart = Pe.pointerPart);
        const nr = Mt ? Nn : H("pointerPart(%s)", Nn), de = `${Ke()}/`;
        Gn = Gn ? H("%s+%j+%s", Gn, de, nr) : H("%j+%s", de, nr);
      } else
        di && k.push(di);
    return k.length > 0 ? H("%s+%j", Gn, `/${Ke()}`) : Gn;
  }, tn = he(e);
  let zn = null;
  const xt = (...pn) => {
    const hn = zn(...pn);
    return xt.errors = zn.errors, hn;
  };
  r[tn] = xt;
  const tt = uf(e, ["$ref", "$recursiveRef", "$dynamicRef"]), G = t[mr] && tt && uf(e, ["$dynamicAnchor"]), Re = () => t[mr] ? H(G ? ", dynAnchors = []" : ", dynAnchors") : H(""), rt = t[Br] ? H(", recursive") : H(""), j = Tk();
  j.write("function validate(data%s%s) {", rt, Re()), l && j.write("validate.errors = null"), f && j.write("let errorCount = 0"), t[Ot] && j.write("validate.evaluatedDynamic = null");
  let ma = t[mr] ? H(", dynAnchors") : H("");
  G && (j.write("const dynLocal = [{}]"), ma = H(", [...dynAnchors, dynLocal[0] || []]"));
  const pp = Sk(j, r, Fk, { unmodifiedPrototypes: W, isJSON: I }, Us), { present: it, forObjectKeys: ui, forArray: ms, patternTest: hp, compare: gs } = pp, Lt = [], dn = () => Qr.get(n), er = i ? [i] : [], _s = (pn, hn, Q, k, Ke, Gn = {}, { constProp: Nn } = {}) => {
    const di = hn.length > 0 && hn[hn.length - 1].prop === Q, Mt = () => hn.filter((_) => _.prop === Q), nr = !Q.parent || Q.checked || Q.inKeys && I || Mt().length > 0, de = Ds(Q), Nt = (..._) => Wk(Q, ..._), mt = ({ path: _ = [], prop: $ = Q, source: O, suberr: S }) => {
      const b = Ws([...Ke, ..._]), M = l ? nt($) : null;
      if (l === !0 && pn && O) {
        r.errorMerge = Pe.errorMerge;
        const U = [O, b, M];
        f ? (j.write("if (validate.errors === null) validate.errors = []"), j.write("validate.errors.push(...%s.map(e => errorMerge(e, %j, %s)))", ...U)) : j.write("validate.errors = [errorMerge(%s[0], %j, %s)]", ...U);
      } else if (l === !0 && pn) {
        const U = H("{ keywordLocation: %j, instanceLocation: %s }", b, M);
        f ? (j.write("if (%s === null) %s = []", pn, pn), j.write("%s.push(%s)", pn, U)) : j.write("%s = [%s]", pn, U);
      }
      S && ka(S), f ? j.write("errorCount++") : j.write("return false");
    }, bn = (_, $) => j.if(_, () => mt($));
    d && !r.lintErrors && (r.lintErrors = []);
    const st = (_, $) => {
      const O = $ !== void 0 ? ` ${JSON.stringify($)}` : "", S = ff(i, Ws(Ke)), b = `${_}${O} at ${S}`;
      if (d)
        return r.lintErrors.push({ message: b, keywordLocation: S, schema: e });
      throw new Error(b);
    }, vs = (_, $) => {
      try {
        return hp(_, $);
      } catch (O) {
        return st(O.message), H("false");
      }
    }, se = (_, ...$) => _ || st(...$), jr = (_, ...$) => se(s === "lax" || s === "spec" || _, ...$), gt = (_, $) => jr(!(k[$] < k[_]), `Invalid ${_} / ${$} combination`), _t = (_, $ = "should be specified") => se(!v, `[requireValidation] ${_} ${$}`), qe = (..._) => [...Ke, ..._], tr = (_) => se(!a && !o, `[removeAdditional/useDefaults] uncertain: ${_}`), ga = (_, $) => se(!C, `[complexityChecks] ${_}`, $), _a = (_) => Uk(n, _ || F, se, g), ae = jk(), me = (_) => Ck(ae, _);
    if (typeof k == "boolean")
      return k === !0 ? (_t("schema = true", "is not allowed"), { stat: ae }) : (bn(nr || Q.inKeys ? !0 : it(Q), {}), me({ type: [] }), { stat: ae });
    se(zt(k), "Schema is not an object");
    for (const _ of Object.keys(k))
      se(Pk.includes(_) || h, "Keyword not supported:", _);
    if (Object.keys(k).length === 0)
      return _t("empty rules node", "is not allowed"), { stat: ae };
    const yt = new Set(Object.keys(k)), ya = /* @__PURE__ */ new Set(), vt = (_, ...$) => {
      se(ya.has(_) || yt.has(_), "Unexpected double consumption:", _), se(Pe.hasOwn(k, _), "Is not an own property:", _), se($.every((O) => co.has(O)), "Invalid type used in consume"), se($.some((O) => co.get(O)(k[_])), "Unexpected type for", _), yt.delete(_);
    }, va = (_, ...$) => (k[_] !== void 0 && vt(_, ...$), k[_]), Y = (_, $, O, S = {}) => {
      if (k[_] === void 0)
        return !1;
      if (vt(_, ...$), O !== null)
        try {
          const b = O(k[_]);
          b !== null && bn(b, { path: [_], ...S });
        } catch (b) {
          if (d && !b.message.startsWith("[opt] "))
            st(b.message);
          else
            throw b;
        }
      return !0;
    };
    if (k === n ? (_a(va("$schema", "string")), Y("$vocabulary", ["object"], (_) => {
      for (const [$, O] of Object.entries(_))
        O !== !1 && se(O === !0 && Ik.includes($), "Unknown vocabulary:", $);
      return null;
    })) : dn() || _a(n.$schema), dn().objectContains)
      for (const _ of ["contains", "minContains", "maxContains"])
        ya.add(_);
    Y("examples", ["array"], null), Y("example", ["jsonval"], null);
    for (const _ of ["title", "description", "$comment"])
      Y(_, ["string"], null);
    for (const _ of ["deprecated", "readOnly", "writeOnly"])
      Y(_, ["boolean"], null);
    Y("$defs", ["object"], null) || Y("definitions", ["object"], null);
    const Cr = (_, $, O) => _ === e ? lf("validate") : z(_) || up(_, $, t, r, O), bt = () => er.length > 0 ? er[er.length - 1] : "", mp = er.length, ba = (_) => (er.push(ff(bt(), _)), null);
    (!dn().exclusiveRefs || !k.$ref) && (Y("$id", ["string"], ba) || Y("id", ["string"], ba), Y("$anchor", ["string"], null), Y("$dynamicAnchor", ["string"], null), (k.$recursiveAnchor || !A) && Y("$recursiveAnchor", ["boolean"], (_) => (_ && Lt.push([k, n, bt()]), null)));
    const wa = G && (k === e || k.id || k.$id);
    if (wa) {
      const _ = kk(k);
      k !== e && j.write("dynLocal.unshift({})");
      for (const [$, O] of _) {
        const S = cr(n, E, `#${$}`, bt()), [b, M, U] = S[0] || [];
        se(b === O, `Unexpected $dynamicAnchor resolution: ${$}`);
        const x = Cr(b, M, U);
        j.write("dynLocal[0][%j] = %s", `#${$}`, x);
      }
    }
    const bs = (_) => t[Ot] && (k[_] || k[_] === !1 || k === e), wn = Object.freeze({
      item: bs("unevaluatedItems") ? be("evaluatedItem") : null,
      items: bs("unevaluatedItems") ? be("evaluatedItems") : null,
      props: bs("unevaluatedProperties") ? be("evaluatedProps") : null
    }), Te = Object.freeze({
      item: wn.item || Gn.item,
      items: wn.items || Gn.items,
      props: wn.props || Gn.props
    }), $a = () => (!Te.items || ae.items === 1 / 0) && (!Te.props || ae.properties.includes(!0)), Hn = (_) => {
      if (Te.item && _.item && ae.items !== 1 / 0 && j.write("%s.push(%s)", Te.item, _.item), Te.items && _.items > ae.items && j.write("%s.push(%d)", Te.items, _.items), Te.props && (_.properties || []).includes(!0) && !ae.properties.includes(!0))
        j.write("%s[0].push(true)", Te.props);
      else if (Te.props) {
        const $ = (b, M) => Lk(ae, { properties: b, patterns: M }), O = (_.properties || []).filter((b) => !$([b], [])), S = (_.patterns || []).filter((b) => !$([], [b]));
        O.length > 0 && j.write("%s[0].push(...%j)", Te.props, O), S.length > 0 && j.write("%s[1].push(...%j)", Te.props, S);
        for (const b of _.propertiesVars || [])
          j.write("%s[0].push(%s)", Te.props, b);
      }
    }, Aa = (_, $, O, S) => {
      Jn(ae).items && _.item && $ && j.write("%s.push(...%s)", _.item, $), Jn(ae).items && _.items && O && j.write("%s.push(...%s)", _.items, O), Jn(ae).properties && _.props && S && (j.write("%s[0].push(...%s[0])", _.props, S), j.write("%s[1].push(...%s[1])", _.props, S));
    }, gp = () => t[Br] ? Lt.length === 0 ? H(", recursive") : H(", recursive || %s", Cr(...Lt[0])) : H(""), pi = (_, $) => {
      const O = r[_] && r[_][qs] || { unknown: !0 };
      me(O);
      const S = H("%s(%s%s%s)", _, de, gp(), ma);
      if (!l && $a())
        return H("!%s", S);
      const b = be("res"), M = be("err"), U = be("suberr");
      return l && j.write("const %s = validate.errors", M), j.write("const %s = %s", b, S), l && j.write("const %s = %s.errors", U, _), l && j.write("validate.errors = %s", M), bn(Dt(b), { ...$, source: U }), j.if(b, () => {
        const x = Jn(O).items ? H("%s.evaluatedDynamic[0]", _) : null, ue = Jn(O).items ? H("%s.evaluatedDynamic[1]", _) : null, pe = Jn(O).properties ? H("%s.evaluatedDynamic[2]", _) : null;
        Aa(Te, x, ue, pe);
      }), null;
    }, Oa = (_, $) => _ && _.every((O) => $.includes(O)), Ea = (_, $) => $.some((O) => _ === null || _.includes(O)), Ra = (..._) => Mt().some(($) => Oa($.stat.type, _)), _p = (..._) => Oa(ae.type, _) || Ra(..._), rr = (..._) => Ea(ae.type, _) && Mt().every(($) => Ea($.stat.type, _)), ws = (_, $ = k) => {
      se(typeof _ == "string", "Invalid pattern:", _), (v || w) && se(/^\^.*\$$/.test(_), "Should start with ^ and end with $:", _), /([{+*].*[{+*]|\)[{+*]|^[^^].*[{+*].)/.test(_) && $.maxLength === void 0 && ga("maxLength should be specified for pattern:", _);
    }, yp = k.pattern && !Us.has(k.pattern), vp = k.uniqueItems || yp || k.patternProperties || k.format, hi = f && vp ? be("prev") : null, mi = (_, $) => j.if(_ && hi !== null ? H("errorCount === %s", hi) : !0, $), Ta = () => [...hn, { stat: ae, prop: Q }], mn = (..._) => _s(pn, Ta(), ..._).stat, Ft = (_, ...$) => {
      if ($[0] === Q) {
        const b = Dk($[1]);
        if (b === !0)
          return { sub: H("true"), delta: {} };
        if (b === !1)
          return { sub: H("false"), delta: { type: [] } };
      }
      const O = be("sub");
      j.write("const %s = (() => {", O), f && j.write("let errorCount = 0");
      const { stat: S } = _s(_, Ta(), ...$);
      return f ? j.write("return errorCount === 0") : j.write("return true"), j.write("})()"), { sub: O, delta: S };
    }, $s = () => {
      const _ = l && f ? be("suberr") : null;
      return _ && j.write("let %s = null", _), _;
    }, ka = (_) => {
      pn === null || _ === null || j.if(_, () => j.write("%s.push(...%s)", pn, _));
    }, Sa = () => {
      if (!a)
        return !1;
      if (a === !0)
        return !0;
      if (a === "keyword")
        return k.removeAdditional ? (vt("removeAdditional", "boolean"), !0) : !1;
      throw new Error(`Invalid removeAdditional: ${a}`);
    }, gi = (_, $, O) => {
      Y(_, ["object", "boolean"], (b) => b === !1 && Sa() ? (j.write("if (%s.length > %s) %s.length = %s", de, $, de, $), null) : b === !1 && !O ? H("%s.length > %s", de, $) : (ms(Q, $, (M, U) => (O && j.write("if (%s) continue", O(U)), mn(M, b, qe(_)))), null)) && me({ items: 1 / 0 });
    }, As = (_, $) => {
      Y(_, ["object", "boolean"], (S) => (ui(Q, (b, M) => {
        j.if($(M), () => {
          S === !1 && Sa() ? j.write("delete %s[%s]", de, M) : mn(b, S, qe(_));
        });
      }), null)) && me({ properties: [!0] });
    }, Pa = (_, $, O) => Ai(
      ...$.map((S) => H("%s !== %j", _, S)),
      ...O.map((S) => Dt(vs(S, _)))
    ), Ia = (_, $) => {
      const O = $.map((b) => new RegExp(b, "u")), S = (b) => _.includes(b) || O.some((M) => M.test(b));
      for (const b of ae.required)
        se(S(b), "Unknown required property:", b);
    }, ja = [], bp = () => {
      const _ = (O, S) => H("!(%d %c %s)", O, S, de);
      Number.isFinite(k.exclusiveMinimum) ? Y("exclusiveMinimum", ["finite"], (O) => _(O, "<")) : (Y("minimum", ["finite"], (O) => _(O, k.exclusiveMinimum ? "<" : "<=")), Y("exclusiveMinimum", ["boolean"], null)), Number.isFinite(k.exclusiveMaximum) ? (Y("exclusiveMaximum", ["finite"], (O) => _(O, ">")), gt("minimum", "exclusiveMaximum"), gt("exclusiveMinimum", "exclusiveMaximum")) : k.maximum !== void 0 && (Y("maximum", ["finite"], (O) => _(O, k.exclusiveMaximum ? ">" : ">=")), Y("exclusiveMaximum", ["boolean"], null), gt("minimum", "maximum"), gt("exclusiveMinimum", "maximum"));
      const $ = k.multipleOf === void 0 ? "divisibleBy" : "multipleOf";
      Y($, ["finite"], (O) => {
        se(O > 0, `Invalid ${$}:`, O);
        const [S, b] = `${O}`.split("e-"), U = `${S}.`.split(".")[1].length + (b ? Number(b) : 0);
        if (Number.isInteger(O * 2 ** U))
          return H("%s %% %d !== 0", de, O);
        r.isMultipleOf = Pe.isMultipleOf;
        const x = [de, O, U, Math.round(O * Math.pow(10, U))];
        return H("!isMultipleOf(%s, %d, 1e%d, %d)", ...x);
      });
    }, wp = () => {
      Y("maxLength", ["natural"], (_) => (r.stringLength = Pe.stringLength, H("%s.length > %d && stringLength(%s) > %d", de, _, de, _))), Y("minLength", ["natural"], (_) => (r.stringLength = Pe.stringLength, H("%s.length < %d || stringLength(%s) < %d", de, _, de, _))), gt("minLength", "maxLength"), mi(!0, () => {
        const _ = (b, M, U = an) => {
          const x = typeof b == "string" && Pe.hasOwn(U, b);
          se(x, "Unrecognized format used:", b);
          const ue = U[b], pe = ue instanceof RegExp || typeof ue == "function";
          return se(pe, "Invalid format used:", b), L ? ue instanceof RegExp ? (Pe.hasOwn(D, b) && ws(ue.source), H("!%s.test(%s)", Xe(ue), M)) : H("!%s(%s)", Xe(ue), M) : null;
        };
        Y("format", ["string"], (b) => (me({ fullstring: !0 }), _(b, de))), Y("pattern", ["string"], (b) => (ws(b), me({ fullstring: !0 }), Us.has(b) ? null : Dt(vs(b, de)))), se(k.contentSchema !== !1, "contentSchema cannot be set to false");
        const $ = u === void 0 ? dn().contentValidation : u, O = k.contentEncoding || k.contentMediaType || k.contentSchema;
        if (se(!O || $ || h, '"content*" keywords are disabled by default per spec, enable with { contentValidation = true } option (see doc/Options.md for more info)'), O && $) {
          const b = be("dec");
          k.contentMediaType && j.write("let %s = %s", b, de), k.contentEncoding === "base64" ? (bn(_("base64", de, Ei.extra), { path: ["contentEncoding"] }), k.contentMediaType && (r.deBase64 = Pe.deBase64, j.write("try {"), j.write("%s = deBase64(%s)", b, b)), vt("contentEncoding", "string")) : se(!k.contentEncoding, "Unknown contentEncoding:", k.contentEncoding);
          let M = !1;
          if (k.contentMediaType === "application/json" ? (j.write("try {"), j.write("%s = JSON.parse(%s)", b, b), M = !0, vt("contentMediaType", "string")) : se(!k.contentMediaType, "Unknown contentMediaType:", k.contentMediaType), k.contentSchema) {
            se(M, "contentSchema requires contentMediaType application/json");
            const U = Object.freeze({ name: b, errorParent: Q });
            mn(U, k.contentSchema, qe("contentSchema")), vt("contentSchema", "object", "array"), me({ fullstring: !0 });
          }
          k.contentMediaType && (j.write("} catch (e) {"), mt({ path: ["contentMediaType"] }), j.write("}"), k.contentEncoding && (j.write("} catch (e) {"), mt({ path: ["contentEncoding"] }), j.write("}")));
        }
      });
    }, $p = () => {
      Y("maxItems", ["natural"], (b) => {
        const M = dn().newItemsSyntax ? "prefixItems" : "items";
        return Array.isArray(k[M]) && k[M].length > b && st(`Invalid maxItems: ${b} is less than ${M} array length`), H("%s.length > %d", de, b);
      }), Y("minItems", ["natural"], (b) => H("%s.length < %d", de, b)), gt("minItems", "maxItems");
      const _ = (b) => {
        for (let M = 0; M < b.length; M++)
          mn(Nt(M), b[M], qe(`${M}`));
        return me({ items: b.length }), null;
      };
      dn().newItemsSyntax ? (Y("prefixItems", ["array"], _), gi("items", H("%d", (k.prefixItems || []).length))) : Array.isArray(k.items) ? (Y("items", ["array"], _), gi("additionalItems", H("%d", k.items.length))) : Y("items", ["object", "boolean"], (b) => (ms(Q, H("0"), (M) => mn(M, b, qe("items"))), me({ items: 1 / 0 }), null)), Ca((b) => {
        ms(Q, H("0"), (M, U) => {
          b(M, () => {
            me({ dyn: { item: !0 } }), Hn({ item: U });
          });
        });
      });
      const $ = (b) => {
        if (!zt(b))
          return !1;
        if (b.enum || Pe.hasOwn(b, "const") || b.type && (Array.isArray(b.type) ? b.type : [b.type]).every((U) => Bs.includes(U)))
          return !0;
        if (b.$ref) {
          const [M] = cr(n, E, b.$ref, bt())[0] || [];
          if ($(M))
            return !0;
        }
        return !1;
      }, O = (b) => b === !1 || $(b), S = () => !!(k.maxItems !== void 0 || O(k.items) || Array.isArray(k.items) && O(k.additionalItems));
      mi(!0, () => {
        Y("uniqueItems", ["boolean"], (b) => b === !1 ? null : (S() || ga("maxItems should be specified for non-primitive uniqueItems"), Object.assign(r, { unique: Pe.unique, deepEqual: Pe.deepEqual }), H("!unique(%s)", de)));
      });
    }, ir = (_) => !f && (ae.required.includes(_) || Mt().some(($) => $.stat.required.includes(_))), Ap = () => {
      const _ = H("Object.keys(%s).length", de);
      Y("maxProperties", ["natural"], ($) => H("%s > %d", _, $)), Y("minProperties", ["natural"], ($) => H("%s < %d", _, $)), gt("minProperties", "maxProperties"), Y("propertyNames", ["object", "boolean"], ($) => (ui(Q, (O, S) => {
        const b = typeof $ == "object" && !$.$ref ? { type: "string", ...$ } : $, M = Object.freeze({ name: S, errorParent: O, type: "string" });
        mn(M, b, qe("propertyNames"));
      }), null)), Y("required", ["array"], ($) => {
        for (const O of $) {
          if (ir(O))
            continue;
          const S = Nt(O);
          bn(Dt(it(S)), { path: ["required"], prop: S });
        }
        return me({ required: $ }), null;
      });
      for (const $ of ["dependencies", "dependentRequired", "dependentSchemas"])
        $ !== "dependencies" && dn().dependentUnsupported || Y($, ["object"], (O) => {
          for (const S of Object.keys(O)) {
            const b = typeof O[S] == "string" ? [O[S]] : O[S], M = Nt(S, ir(S));
            if (Array.isArray(b) && $ !== "dependentSchemas") {
              const U = b.filter((pe) => !ir(pe)).map((pe) => it(Nt(pe))), x = Dt(Ai(...U)), ue = { path: [$, S] };
              U.length === 0 || (M.checked ? (bn(x, ue), me({ required: b })) : bn(Ai(it(M), x), ue));
            } else
              df(b) && $ !== "dependentRequired" ? (tr($), j.if(M.checked ? !0 : it(M), () => {
                const U = mn(Q, b, qe($, S), Te);
                me($t({}, U)), Hn(U);
              })) : st(`Unexpected ${$} entry`);
          }
          return null;
        });
      Y("propertyDependencies", ["object"], ($) => {
        for (const [O, S] of Object.entries($)) {
          se(zt(S), "propertyDependencies must be an object"), tr("propertyDependencies");
          const b = Nt(O, ir(O));
          j.if(b.checked ? !0 : it(b), () => {
            for (const [M, U] of Object.entries(S))
              se(df(U), "propertyDependencies must contain schemas"), j.if(gs(Ds(b), M), () => {
                const x = mn(Q, U, qe("propertyDependencies", O, M), Te);
                me($t({}, x)), Hn(x);
              });
          });
        }
        return null;
      }), Y("properties", ["object"], ($) => {
        for (const O of Object.keys($))
          Nn !== O && mn(Nt(O, ir(O)), $[O], qe("properties", O));
        return me({ properties: Object.keys($) }), null;
      }), mi(k.patternProperties, () => {
        if (Y("patternProperties", ["object"], ($) => (ui(Q, (O, S) => {
          for (const b of Object.keys($))
            ws(b, k.propertyNames || {}), j.if(vs(b, S), () => {
              mn(O, $[b], qe("patternProperties", b));
            });
        }), me({ patterns: Object.keys($) }), null)), k.additionalProperties || k.additionalProperties === !1) {
          const $ = Object.keys(k.properties || {}), O = Object.keys(k.patternProperties || {});
          k.additionalProperties === !1 && ja.push(() => Ia($, O)), As("additionalProperties", (b) => Pa(b, $, O));
        }
      }), dn().objectContains && Ca(($) => {
        ui(Q, (O, S) => {
          $(O, () => {
            me({ dyn: { properties: [!0] } }), Hn({ propertiesVars: [S] });
          });
        });
      });
    }, Op = () => {
      const _ = Y("const", ["jsonval"], (O) => Dt(gs(de, O)));
      if (_ && !h)
        return !0;
      const $ = Y("enum", ["array"], (O) => {
        const S = O.filter((M) => M && typeof M == "object"), b = O.filter((M) => !(M && typeof M == "object"));
        return Oi(...[...b, ...S].map((M) => gs(de, M)));
      });
      return _ || $;
    }, Ca = (_) => {
      Y("contains", ["object", "boolean"], () => {
        tr("contains"), dn().objectContains && rr("array") && rr("object") && _t("possible type confusion in 'contains',", "forbid 'object' or 'array'");
        const $ = be("passes");
        j.write("let %s = 0", $);
        const O = $s();
        return _((S, b) => {
          const { sub: M } = Ft(O, S, k.contains, qe("contains"));
          j.if(M, () => {
            j.write("%s++", $), dn().containsEvaluates && (se(!a, `Can't use removeAdditional with draft2020+ "contains"`), b());
          });
        }), Y("minContains", ["natural"], (S) => H("%s < %d", $, S), { suberr: O }) || bn(H("%s < 1", $), { path: ["contains"], suberr: O }), Y("maxContains", ["natural"], (S) => H("%s > %d", $, S)), gt("minContains", "maxContains"), null;
      });
    }, Ep = () => {
      Y("not", ["object", "boolean"], (b) => Ft(null, Q, b, qe("not")).sub), k.not && tr("not"), (k.then || k.then === !1 || k.else || k.else === !1 || h) && Y("if", ["object", "boolean"], (b) => {
        tr("if/then/else");
        const { sub: M, delta: U } = Ft(null, Q, b, qe("if"), Te);
        let x, ue, pe, ve;
        return Y("else", ["object", "boolean"], (Oe) => (x = () => {
          pe = mn(Q, Oe, qe("else"), Te), Hn(pe);
        }, null)), Y("then", ["object", "boolean"], (Oe) => (ue = () => {
          ve = mn(Q, Oe, qe("then"), Te), Hn(cf(U, ve));
        }, null)), !ue && !Mk(U) && (ue = () => Hn(U)), j.if(M, ue, x), me($t(pe || {}, cf(U, ve || {}))), null;
      });
      const $ = (b, M = "allOf") => {
        se(b.length > 0, `${M} cannot be empty`);
        for (const [U, x] of Object.entries(b))
          me(mn(Q, x, qe(M, U), Te));
        return null;
      };
      Y("allOf", ["array"], (b) => $(b));
      let O = null;
      Y("discriminator", ["object"], (b) => {
        const M = /* @__PURE__ */ new Set(), U = (Le, or, ar) => se(Le, `[discriminator]: ${or}`, ar), { propertyName: x, mapping: ue, ...pe } = b, ve = Nt(x);
        U(x && !k.oneOf != !k.anyOf, "need propertyName, oneOf OR anyOf"), U(Object.keys(pe).length === 0, 'only "propertyName" and "mapping" are supported');
        const Oe = (Le) => zt(Le) ? Object.keys(Le).length : null;
        return O = (Le, or) => {
          const ar = () => {
            j.write("switch (%s) {", Ds(ve));
            let lr;
            for (const [kp, fr] of Object.entries(Le)) {
              const { const: Os, enum: Na, ...Sp } = (fr.properties || {})[x] || {};
              let Mr = Os !== void 0 ? [Os] : Na;
              if (!Mr && fr.$ref) {
                const [Kn] = cr(n, E, fr.$ref, bt())[0] || [];
                se(zt(Kn), "failed to resolve $ref:", fr.$ref);
                const Nr = (Kn.properties || {})[x] || {};
                Mr = Nr.const !== void 0 ? [Nr.const] : Nr.enum;
              }
              const Pp = Array.isArray(Mr) && Mr.length > 0;
              U(Pp, "branches should have unique string const or enum values for [propertyName]");
              const Ip = Object.keys(Sp).length === 0 && (!Os || !Na);
              U(Ip, "only const OR enum rules are allowed on [propertyName] in branches");
              for (const Kn of Mr) {
                const Nr = !ue || Pe.hasOwn(ue, Kn) && ue[Kn] === fr.$ref;
                U(Nr, "mismatching mapping for", Kn);
                const jp = typeof Kn == "string" && !M.has(Kn);
                U(jp, "const/enum values for [propertyName] should be unique strings"), M.add(Kn), j.write("case %j:", Kn);
              }
              const Es = mn(Q, fr, qe(or, kp), Te, { constProp: x });
              Hn(Es), lr = lr ? $t(lr, Es) : Es, j.write("break");
            }
            U(ue === void 0 || Oe(ue) === M.size, "mismatching mapping size"), me(lr), j.write("default:"), mt({ path: [or] }), j.write("}");
          }, Lr = () => {
            if (ir(x))
              ar();
            else {
              const lr = ["discriminator", "propertyName"];
              j.if(it(ve), ar, () => mt({ path: lr, prop: ve }));
            }
          };
          return f || !Pe.deepEqual(ae.type, ["object"]) ? j.if(Yn.get("object")(de), Lr, () => mt({ path: ["discriminator"] })) : Lr(), U(Pe.deepEqual(ae.type, ["object"]), "has to be checked for type:", "object"), U(ae.required.includes(x), "propertyName should be placed in required:", x), null;
        }, null;
      });
      const S = (b, M) => {
        const U = M.map((pe) => pe.type || (Array.isArray(pe.const) ? "array" : typeof pe.const)), x = U.filter((pe) => !Bs.includes(pe) && pe !== "array").length, ue = U.filter((pe) => !Bs.includes(pe) && pe !== "object").length;
        (x > 1 || ue > 1) && tr(`${b}, use discriminator to make it certain`);
      };
      Y("anyOf", ["array"], (b) => {
        if (se(b.length > 0, "anyOf cannot be empty"), b.length === 1)
          return $(b);
        if (O)
          return O(b, "anyOf");
        const M = $s();
        if (!$a()) {
          S("anyOf", b);
          const ve = Object.entries(b).map(
            ([Oe, Le]) => Ft(M, Q, Le, qe("anyOf", Oe), Te)
          );
          me(ve.map((Oe) => Oe.delta).reduce((Oe, Le) => $t(Oe, Le))), bn(Oi(...ve.map(({ sub: Oe }) => Oe)), { path: ["anyOf"], suberr: M });
          for (const { delta: Oe, sub: Le } of ve)
            j.if(Le, () => Hn(Oe));
          return null;
        }
        const U = b.filter((ve) => Pe.hasOwn(ve, "const")), x = b.filter((ve) => !Pe.hasOwn(ve, "const"));
        S("anyOf", x);
        const ue = [...U, ...x];
        let pe;
        if (dn().exclusiveRefs) {
          let ve = () => mt({ path: ["anyOf"], suberr: M });
          for (const [Oe, Le] of Object.entries(ue).reverse()) {
            const or = ve;
            ve = () => {
              const { sub: ar, delta: Lr } = Ft(M, Q, Le, qe("anyOf", Oe));
              j.if(Dt(ar), or), pe = pe ? $t(pe, Lr) : Lr;
            };
          }
          ve();
        } else {
          const ve = Object.entries(b).map(
            ([Oe, Le]) => Ft(M, Q, Le, qe("anyOf", Oe), Te)
          );
          pe = ve.map((Oe) => Oe.delta).reduce((Oe, Le) => $t(Oe, Le)), bn(Oi(...ve.map(({ sub: Oe }) => Oe)), { path: ["anyOf"], suberr: M });
        }
        return me(pe), null;
      }), Y("oneOf", ["array"], (b) => {
        if (se(b.length > 0, "oneOf cannot be empty"), b.length === 1)
          return $(b);
        if (O)
          return O(b, "oneOf");
        S("oneOf", b);
        const M = be("passes");
        j.write("let %s = 0", M);
        const U = $s();
        let x, ue = 0;
        const pe = Object.entries(b).map(([ve, Oe]) => {
          !l && ue++ > 1 && bn(H("%s > 1", M), { path: ["oneOf"] });
          const Le = Ft(U, Q, Oe, qe("oneOf", ve), Te);
          return j.if(Le.sub, () => j.write("%s++", M)), x = x ? $t(x, Le.delta) : Le.delta, Le;
        });
        me(x), bn(H("%s !== 1", M), { path: ["oneOf"] }), j.if(H("%s === 0", M), () => ka(U));
        for (const ve of pe)
          j.if(ve.sub, () => Hn(ve.delta));
        return null;
      });
    }, sr = (_, $, O) => {
      const [S, b] = [j.size(), yt.size];
      j.if(_p(...$) ? !0 : O, _), (S !== j.size() || b !== yt.size) && se(rr(...$), "Unexpected rules in type", k.type);
    }, Rp = () => {
      if (ae.items === 1 / 0)
        k.unevaluatedItems === !1 && vt("unevaluatedItems", "boolean");
      else if (k.unevaluatedItems || k.unevaluatedItems === !1)
        if (Jn(ae).items) {
          if (!t[Ot])
            throw new Error("[opt] Dynamic unevaluated tracing not enabled");
          const _ = H("Math.max(%d, ...%s)", ae.items, Te.items), $ = (O) => H("%s.includes(%s)", Te.item, O);
          gi("unevaluatedItems", _, dn().containsEvaluates ? $ : null);
        } else
          gi("unevaluatedItems", H("%d", ae.items));
    }, Tp = () => {
      mi(ae.patterns.length > 0 || ae.dyn.patterns.length > 0 || ae.unknown, () => {
        if (ae.properties.includes(!0))
          k.unevaluatedProperties === !1 && vt("unevaluatedProperties", "boolean");
        else if (k.unevaluatedProperties || k.unevaluatedProperties === !1) {
          const _ = ($) => Pa($, ae.properties, ae.patterns);
          if (Jn(ae).properties) {
            if (!t[Ot])
              throw new Error("[opt] Dynamic unevaluated tracing not enabled");
            r.propertyIn = Pe.propertyIn;
            const $ = (S) => H("!propertyIn(%s, %s)", S, Te.props);
            As("unevaluatedProperties", (S) => Ai(_(S), $(S)));
          } else
            k.unevaluatedProperties === !1 && Ia(ae.properties, ae.patterns), As("unevaluatedProperties", _);
        }
      });
    }, La = () => {
      if (hi !== null && j.write("const %s = errorCount", hi), Op()) {
        const _ = [...Yn.keys()];
        if (me({ properties: [!0], items: 1 / 0, type: _, fullstring: !0 }), !h) {
          se(yt.size === 0, "Unexpected keywords mixed with const or enum:", [...yt]);
          return;
        }
      }
      sr(bp, ["number", "integer"], Yn.get("number")(de)), sr(wp, ["string"], Yn.get("string")(de)), sr($p, ["array"], Yn.get("array")(de)), sr(Ap, ["object"], Yn.get("object")(de)), Ep(), sr(Rp, ["array"], Yn.get("array")(de)), sr(Tp, ["object"], Yn.get("object")(de));
      for (const _ of ja)
        _();
      Aa(Gn, wn.item, wn.items, wn.props);
    }, Ma = () => {
      if (wn.item && j.write("const %s = []", wn.item), wn.items && j.write("const %s = [0]", wn.items), wn.props && j.write("const %s = [[], []]", wn.props), Y("$ref", ["string"], ($) => {
        const O = cr(n, E, $, bt()), [S, b, M] = O[0] || [];
        if (!S && S !== !1 && (st("failed to resolve $ref:", $), d))
          return null;
        const U = Cr(S, b, M), x = S === e ? tn : U;
        if (!r[x])
          throw new Error("Unexpected: coherence check failed");
        if (!r[x][qs] && S.type) {
          const ue = Array.isArray(S.type) ? S.type : [S.type];
          me({ type: ue }), v && (Et.add(x), ue.includes("array") && me({ items: 1 / 0 }), ue.includes("object") && me({ properties: [!0] })), w && ue.includes("string") && (Et.add(x), me({ fullstring: !0 }));
        }
        return pi(U, { path: ["$ref"] });
      }), dn().exclusiveRefs && (se(!t[Ot], "unevaluated* is supported only on draft2019-09 and above"), k.$ref))
        return;
      Y("$recursiveRef", ["string"], ($) => {
        if (!t[Br])
          throw new Error("[opt] Recursive anchors are not enabled");
        se($ === "#", 'Behavior of $recursiveRef is defined only for "#"');
        const O = cr(n, E, "#", bt()), [S, b, M] = O[0];
        jr(S.$recursiveAnchor, "$recursiveRef without $recursiveAnchor");
        const U = Cr(S, b, M), x = S.$recursiveAnchor ? H("(recursive || %s)", U) : U;
        return pi(x, { path: ["$recursiveRef"] });
      }), Y("$dynamicRef", ["string"], ($) => {
        if (!t[mr])
          throw new Error("[opt] Dynamic anchors are not enabled");
        jr(/^[^#]*#[a-zA-Z0-9_-]+$/.test($), "Unsupported $dynamicRef format");
        const O = $.replace(/^[^#]+/, ""), S = cr(n, E, $, bt());
        if (!S[0] && !dn().bookending) {
          jr(!1, "$dynamicRef bookending resolution failed (even though not required)"), r.dynamicResolve = Pe.dynamicResolve;
          const ve = H("dynamicResolve(dynAnchors || [], %j)", O);
          return pi(ve, { path: ["$dynamicRef"] });
        }
        se(S[0], "$dynamicRef bookending resolution failed", $);
        const [b, M, U] = S[0], x = b.$dynamicAnchor && `#${b.$dynamicAnchor}` === O;
        jr(x, "$dynamicRef without $dynamicAnchor in the same scope");
        const ue = Cr(b, M, U);
        r.dynamicResolve = Pe.dynamicResolve;
        const pe = x ? H("(dynamicResolve(dynAnchors || [], %j) || %s)", O, ue) : ue;
        return pi(pe, { path: ["$dynamicRef"] });
      });
      let _ = null;
      Y("type", ["string", "array"], ($) => {
        const O = Array.isArray($) ? $ : [$];
        for (const b of O)
          se(typeof b == "string" && Yn.has(b), "Unknown type:", b);
        if (Q.type)
          return se(Pe.deepEqual(O, [Q.type]), "One type allowed:", Q.type), me({ type: [Q.type] }), null;
        if (Ra(...O))
          return null;
        const S = O.filter((b) => rr(b));
        return S.length === 0 && st("No valid types possible"), me({ type: O }), _ = Oi(...S.map((b) => Yn.get(b)(de))), null;
      }), _ && f ? j.if(_, () => mt({ path: ["type"] }), La) : (_ && bn(_, { path: ["type"] }), La()), ae.items < 1 / 0 && k.maxItems <= ae.items && me({ items: 1 / 0 });
    };
    if (k.default !== void 0 && o) {
      nr && st("Can not apply default value here (e.g. at root)");
      const _ = va("default", "jsonval");
      j.if(it(Q), Ma, () => j.write("%s = %j", de, _));
    } else
      Y("default", ["jsonval"], null), j.if(nr ? !0 : it(Q), Ma);
    if (er.length = mp, Lt[0] && Lt[Lt.length - 1][0] === k && Lt.pop(), wa && k !== e && j.write("dynLocal.shift()"), m || se(!j.optimizedOut, "some checks are never reachable"), di) {
      const _ = ["not", "if", "then", "else"].includes(Ke[Ke.length - 1]), $ = ["oneOf", "anyOf", "allOf"].includes(Ke[Ke.length - 2]), O = ["dependencies", "dependentSchemas"].includes(Ke[Ke.length - 2]), S = ["propertyDependencies"].includes(Ke[Ke.length - 3]);
      se(_ || $ || O || S, "Unexpected logical path");
    } else if (!Ke.includes("not") && ((!(e !== n && k === e) || Et.has(tn)) && (Et.delete(tn), ae.type || _t("type"), rr("array") && ae.items !== 1 / 0 && _t(k.items ? "additionalItems or unevaluatedItems" : "items rule"), rr("object") && !ae.properties.includes(!0) && _t("additionalProperties or unevaluatedProperties"), !ae.fullstring && w && st("[requireStringValidation] pattern, format or contentSchema should be specified for strings, use pattern: ^[\\s\\S]*$ to opt-out")), typeof k.propertyNames != "object"))
      for (const $ of ["additionalProperties", "unevaluatedProperties"])
        k[$] && _t(`wild-card ${$}`, "requires propertyNames");
    return k.properties && !k.required && _t("if properties is used, required"), se(yt.size === 0 || h, "Unprocessed keywords:", [...yt]), { stat: ae, local: wn };
  }, { stat: ys, local: ci } = _s(H("validate.errors"), [], { name: lf("data") }, e, []);
  if (Et.has(tn))
    throw new Error("Unexpected: unvalidated cyclic ref");
  if (t[Ot] && (Jn(ys).items || Jn(ys).properties)) {
    if (!ci)
      throw new Error("Failed to trace dynamic properties");
    j.write("validate.evaluatedDynamic = [%s, %s, %s]", ci.item, ci.items, ci.props);
  }
  return f ? j.write("return errorCount === 0") : j.write("return true"), j.write("}"), d || (zn = j.makeFunction(r), delete r[tn], r[tn] = zn), r[tn][qs] = ys, tn;
}, ji = (e, n) => {
  if (!Array.isArray(e))
    throw new Error("Expected an array of schemas");
  try {
    const t = /* @__PURE__ */ Object.create(null), { getref: r } = fp(t);
    Et.clear(), Qr.clear();
    const i = e.map((s) => r(s) || up(s, s, n, t));
    if (Et.size !== 0)
      throw new Error("Unexpected: not all refs are validated");
    return { scope: t, refs: i };
  } catch (t) {
    if (!n[Ot] && t.message === "[opt] Dynamic unevaluated tracing not enabled")
      return ji(e, { ...n, [Ot]: !0 });
    if (!n[mr] && t.message === "[opt] Dynamic anchors are not enabled")
      return ji(e, { ...n, [mr]: !0 });
    if (!n[Br] && t.message === "[opt] Recursive anchors are not enabled")
      return ji(e, { ...n, [Br]: !0 });
    throw t;
  } finally {
    Et.clear(), Qr.clear();
  }
};
var Bk = { compile: ji };
const qk = Xd, { buildSchemas: zk } = ip, { compile: Gk } = Bk, { deepEqual: pa } = ca, Hk = (e) => function n(t) {
  if (!pa(t, JSON.parse(JSON.stringify(t))))
    return n.errors = [{ instanceLocation: "#", error: "not JSON compatible" }], !1;
  const r = e(t);
  return n.errors = e.errors, r;
}, Kk = (e) => (n) => pa(n, JSON.parse(JSON.stringify(n))) && e(n), ha = (e, { parse: n = !1, multi: t = !1, jsonCheck: r = !1, isJSON: i = !1, schemas: s = [], ...o } = {}) => {
  if (r && i)
    throw new Error("Can not specify both isJSON and jsonCheck options");
  if (n && (r || i))
    throw new Error("jsonCheck and isJSON options are not applicable in parser mode");
  const a = n ? "strong" : "default", l = i || r || n, f = t ? e : [e], u = { mode: a, ...o, schemas: zk(s, f), isJSON: l }, { scope: c, refs: d } = Gk(f, u);
  if (o.dryRun)
    return;
  if (o.lint)
    return c.lintErrors;
  const h = qk();
  if (n ? c.parseWrap = o.includeErrors ? Yk : Jk : r && (c.deepEqual = pa, c.jsonCheckWrap = o.includeErrors ? Hk : Kk), t) {
    h.write("[");
    for (const g of d.slice(0, -1))
      h.write("%s,", g);
    d.length > 0 && h.write("%s", d[d.length - 1]), h.write("]"), n ? h.write(".map(parseWrap)") : r && h.write(".map(jsonCheckWrap)");
  } else
    n ? h.write("parseWrap(%s)", d[0]) : r ? h.write("jsonCheckWrap(%s)", d[0]) : h.write("%s", d[0]);
  const m = h.makeFunction(c);
  return m.toModule = ({ semi: g = !0 } = {}) => h.makeModule(c) + (g ? ";" : ""), m.toJSON = () => e, m;
}, Yk = (e) => (n) => {
  if (typeof n != "string")
    return { valid: !1, error: "Input is not a string" };
  try {
    const t = JSON.parse(n);
    if (!e(t)) {
      const { keywordLocation: r, instanceLocation: i } = e.errors[0];
      return { valid: !1, error: `JSON validation failed for ${r.slice(r.lastIndexOf("/") + 1)} at ${i}`, errors: e.errors };
    }
    return { valid: !0, value: t };
  } catch ({ message: t }) {
    return { valid: !1, error: t };
  }
}, Jk = (e) => (n) => {
  if (typeof n != "string")
    return { valid: !1 };
  try {
    const t = JSON.parse(n);
    return e(t) ? { valid: !0, value: t } : { valid: !1 };
  } catch {
    return { valid: !1 };
  }
}, Xk = function(e, { parse: n = !0, ...t } = {}) {
  if (!n)
    throw new Error("can not disable parse in parser");
  return ha(e, { parse: n, ...t });
}, Zk = function(e, { lint: n = !0, ...t } = {}) {
  if (!n)
    throw new Error("can not disable lint option in lint()");
  return ha(e, { lint: n, ...t });
};
var Vk = { validator: ha, parser: Xk, lint: Zk };
const cp = Symbol(), dp = Symbol();
function pf(e, n, t) {
  const r = e.slice();
  return r[6] = n[t], r[8] = t, r;
}
function hf(e) {
  let n, t = (
    /*enumText*/
    (e[4] || [])[
      /*idx*/
      e[8]
    ] + ""
  ), r, i;
  return {
    c() {
      n = N("option"), r = on(t), n.__value = i = /*enumVal*/
      e[6], qr(n, n.__value);
    },
    m(s, o) {
      T(s, n, o), B(n, r);
    },
    p(s, o) {
      o & /*enumText*/
      16 && t !== (t = /*enumText*/
      (s[4] || [])[
        /*idx*/
        s[8]
      ] + "") && _n(r, t), o & /*enumVals*/
      8 && i !== (i = /*enumVal*/
      s[6]) && (n.__value = i, qr(n, n.__value));
    },
    d(s) {
      s && R(n);
    }
  };
}
function Qk(e) {
  let n, t, r, i, s, o, a, l = He(
    /*enumVals*/
    e[3]
  ), f = [];
  for (let u = 0; u < l.length; u += 1)
    f[u] = hf(pf(e, l, u));
  return {
    c() {
      n = N("select"), t = N("option");
      for (let u = 0; u < f.length; u += 1)
        f[u].c();
      t.__value = "", qr(t, t.__value), y(n, "id", r = /*params*/
      e[0].path.join(".")), y(n, "name", i = /*params*/
      e[0].path.join(".")), n.disabled = s = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(u, c) {
      T(u, n, c), B(n, t);
      for (let d = 0; d < f.length; d += 1)
        f[d] && f[d].m(n, null);
      Wa(
        n,
        /*value*/
        e[2]
      ), o || (a = K(
        n,
        "change",
        /*change_handler*/
        e[5]
      ), o = !0);
    },
    p(u, c) {
      if (c & /*enumVals, enumText*/
      24) {
        l = He(
          /*enumVals*/
          u[3]
        );
        let d;
        for (d = 0; d < l.length; d += 1) {
          const h = pf(u, l, d);
          f[d] ? f[d].p(h, c) : (f[d] = hf(h), f[d].c(), f[d].m(n, null));
        }
        for (; d < f.length; d += 1)
          f[d].d(1);
        f.length = l.length;
      }
      c & /*params*/
      1 && r !== (r = /*params*/
      u[0].path.join(".")) && y(n, "id", r), c & /*params*/
      1 && i !== (i = /*params*/
      u[0].path.join(".")) && y(n, "name", i), c & /*value, enumVals*/
      12 && Wa(
        n,
        /*value*/
        u[2]
      ), c & /*schema, params*/
      3 && s !== (s = /*schema*/
      u[1].readOnly || /*params*/
      u[0].containerReadOnly) && (n.disabled = s);
    },
    d(u) {
      u && R(n), xr(f, u), o = !1, a();
    }
  };
}
function xk(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o, a) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [Qk] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Fe(i, s(e))), {
    c() {
      n && Ee(n.$$.fragment), t = Me();
    },
    m(o, a) {
      n && we(n, o, a), T(o, t, a), r = !0;
    },
    p(o, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          De();
          const l = n;
          V(l.$$.fragment, 1, 0, () => {
            $e(l, 1);
          }), Ue();
        }
        i ? (n = Fe(i, s(o)), Ee(n.$$.fragment), J(n.$$.fragment, 1), we(n, t.parentNode, t)) : n = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        o[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        o[1]), a & /*$$scope, params, value, schema, enumVals, enumText*/
        543 && (l.$$scope = { dirty: a, ctx: o }), n.$set(l);
      }
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && V(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(t), n && $e(n, o);
    }
  };
}
function eS(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n, o, a;
  const l = (f) => r.pathChanged(r.path, f.currentTarget.value || void 0);
  return e.$$set = (f) => {
    "params" in f && t(0, r = f.params), "schema" in f && t(1, i = f.schema), "value" in f && t(2, s = f.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    2 && t(3, o = i.enum), e.$$.dirty & /*schema*/
    2 && t(4, a = i.enumText || i.enum);
  }, [r, i, s, o, a, l];
}
class nS extends Ve {
  constructor(n) {
    super(), Ze(this, n, eS, xk, Ye, { params: 0, schema: 1, value: 2 });
  }
}
const Ui = (e, n, t) => () => {
  n.pathChanged(n.path, [
    ...t || [],
    ua(e.items)
  ]);
}, tS = (e, n, t) => () => {
  const r = t || [];
  if (typeof e.minItems != "number" || r.length >= e.minItems)
    return;
  const i = new Array(e.minItems - r.length).fill(ua(e.items));
  n.pathChanged(n.path, [
    ...r,
    ...i
  ]);
}, Bi = (e, n, t) => () => {
  n.pathChanged(n.path, [
    ...t.slice(0, e),
    ...t.slice(e + 1)
  ], "delete", e.toString());
}, qi = (e, n, t) => () => {
  n.pathChanged(n.path, [
    ...t.slice(0, e),
    t[e],
    JSON.parse(JSON.stringify(t[e])),
    ...t.slice(e + 1)
  ], "duplicate", (e + 1).toString());
}, zi = (e, n, t) => () => {
  e > 0 && n.pathChanged(n.path, [
    ...t.slice(0, e - 1),
    t[e],
    t[e - 1],
    ...t.slice(e + 1)
  ], "up", (e - 1).toString());
}, Gi = (e, n, t) => () => {
  e < t.length - 1 && n.pathChanged(n.path, [
    ...t.slice(0, e),
    t[e + 1],
    t[e],
    ...t.slice(e + 2)
  ], "down", (e + 1).toString());
};
function mf(e, n, t) {
  const r = e.slice();
  return r[13] = n[t], r[15] = t, r;
}
function gf(e) {
  let n, t, r, i, s, o = (
    /*params*/
    (e[1].collapsible || /*legendText*/
    e[9]) && _f(e)
  ), a = (
    /*collapserOpenState*/
    e[3] === "open" && bf(e)
  );
  return {
    c() {
      n = N("fieldset"), o && o.c(), t = Z(), a && a.c(), y(n, "name", r = /*params*/
      e[1].path.join(".")), y(n, "class", i = "subset array depth-" + /*params*/
      e[1].path.length);
    },
    m(l, f) {
      T(l, n, f), o && o.m(n, null), B(n, t), a && a.m(n, null), s = !0;
    },
    p(l, f) {
      /*params*/
      l[1].collapsible || /*legendText*/
      l[9] ? o ? o.p(l, f) : (o = _f(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), /*collapserOpenState*/
      l[3] === "open" ? a ? (a.p(l, f), f & /*collapserOpenState*/
      8 && J(a, 1)) : (a = bf(l), a.c(), J(a, 1), a.m(n, null)) : a && (De(), V(a, 1, 1, () => {
        a = null;
      }), Ue()), (!s || f & /*params*/
      2 && r !== (r = /*params*/
      l[1].path.join("."))) && y(n, "name", r), (!s || f & /*params*/
      2 && i !== (i = "subset array depth-" + /*params*/
      l[1].path.length)) && y(n, "class", i);
    },
    i(l) {
      s || (J(a), s = !0);
    },
    o(l) {
      V(a), s = !1;
    },
    d(l) {
      l && R(n), o && o.d(), a && a.d();
    }
  };
}
function _f(e) {
  let n, t, r, i = kn(
    /*legendText*/
    e[9]
  ) + "", s, o = (
    /*params*/
    e[1].collapsible && yf(e)
  ), a = (
    /*schema*/
    e[0].description && vf(e)
  );
  return {
    c() {
      n = N("legend"), o && o.c(), t = Z(), r = N("span"), s = Z(), a && a.c(), y(r, "class", "subset-label-title object-label-title"), y(n, "class", "subset-label array-label");
    },
    m(l, f) {
      T(l, n, f), o && o.m(n, null), B(n, t), B(n, r), r.innerHTML = i, B(n, s), a && a.m(n, null);
    },
    p(l, f) {
      /*params*/
      l[1].collapsible ? o ? o.p(l, f) : (o = yf(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), f & /*legendText*/
      512 && i !== (i = kn(
        /*legendText*/
        l[9]
      ) + "") && (r.innerHTML = i), /*schema*/
      l[0].description ? a ? a.p(l, f) : (a = vf(l), a.c(), a.m(n, null)) : a && (a.d(1), a = null);
    },
    d(l) {
      l && R(n), o && o.d(), a && a.d();
    }
  };
}
function yf(e) {
  let n, t, r, i;
  return {
    c() {
      n = N("span"), y(n, "class", t = "collapser " + /*collapserOpenState*/
      e[3]);
    },
    m(s, o) {
      T(s, n, o), r || (i = K(
        n,
        "click",
        /*toggle*/
        e[10]
      ), r = !0);
    },
    p(s, o) {
      o & /*collapserOpenState*/
      8 && t !== (t = "collapser " + /*collapserOpenState*/
      s[3]) && y(n, "class", t);
    },
    d(s) {
      s && R(n), r = !1, i();
    }
  };
}
function vf(e) {
  let n, t = kn(
    /*schema*/
    e[0].description
  ) + "";
  return {
    c() {
      n = N("span"), y(n, "class", "subset-label-description object-label-description");
    },
    m(r, i) {
      T(r, n, i), n.innerHTML = t;
    },
    p(r, i) {
      i & /*schema*/
      1 && t !== (t = kn(
        /*schema*/
        r[0].description
      ) + "") && (n.innerHTML = t);
    },
    d(r) {
      r && R(n);
    }
  };
}
function bf(e) {
  let n, t, r, i = (
    /*controls*/
    e[6].includes("add") && !/*atMaxItems*/
    e[5]
  ), s, o;
  const a = [iS, rS], l = [];
  function f(c, d) {
    return (
      /*emptyText*/
      c[7] ? 1 : 0
    );
  }
  n = f(e), t = l[n] = a[n](e);
  let u = i && Rf(e);
  return {
    c() {
      t.c(), r = Z(), u && u.c(), s = Me();
    },
    m(c, d) {
      l[n].m(c, d), T(c, r, d), u && u.m(c, d), T(c, s, d), o = !0;
    },
    p(c, d) {
      let h = n;
      n = f(c), n === h ? l[n].p(c, d) : (De(), V(l[h], 1, 1, () => {
        l[h] = null;
      }), Ue(), t = l[n], t ? t.p(c, d) : (t = l[n] = a[n](c), t.c()), J(t, 1), t.m(r.parentNode, r)), d & /*controls, atMaxItems*/
      96 && (i = /*controls*/
      c[6].includes("add") && !/*atMaxItems*/
      c[5]), i ? u ? u.p(c, d) : (u = Rf(c), u.c(), u.m(s.parentNode, s)) : u && (u.d(1), u = null);
    },
    i(c) {
      o || (J(t), o = !0);
    },
    o(c) {
      V(t), o = !1;
    },
    d(c) {
      c && (R(r), R(s)), l[n].d(c), u && u.d(c);
    }
  };
}
function rS(e) {
  let n, t;
  return {
    c() {
      n = N("div"), t = on(
        /*emptyText*/
        e[7]
      ), y(n, "class", "emptyText");
    },
    m(r, i) {
      T(r, n, i), B(n, t);
    },
    p(r, i) {
      i & /*emptyText*/
      128 && _n(
        t,
        /*emptyText*/
        r[7]
      );
    },
    i: rn,
    o: rn,
    d(r) {
      r && R(n);
    }
  };
}
function iS(e) {
  let n = [], t = /* @__PURE__ */ new Map(), r, i, s = He(
    /*value*/
    e[2] || []
  );
  const o = (a) => (
    /*idx*/
    a[15]
  );
  for (let a = 0; a < s.length; a += 1) {
    let l = mf(e, s, a), f = o(l);
    t.set(f, n[a] = Ef(f, l));
  }
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      r = Me();
    },
    m(a, l) {
      for (let f = 0; f < n.length; f += 1)
        n[f] && n[f].m(a, l);
      T(a, r, l), i = !0;
    },
    p(a, l) {
      l & /*value, params, controls, atMaxItems, atMinItems, schema*/
      119 && (s = He(
        /*value*/
        a[2] || []
      ), De(), n = ei(n, l, o, 1, a, s, t, r.parentNode, _u, Ef, r, mf), Ue());
    },
    i(a) {
      if (!i) {
        for (let l = 0; l < s.length; l += 1)
          J(n[l]);
        i = !0;
      }
    },
    o(a) {
      for (let l = 0; l < n.length; l += 1)
        V(n[l]);
      i = !1;
    },
    d(a) {
      a && R(r);
      for (let l = 0; l < n.length; l += 1)
        n[l].d(a);
    }
  };
}
function wf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control delete"), y(n, "title", "delete");
    },
    m(i, s) {
      T(i, n, s), t || (r = K(n, "click", function() {
        ze(Bi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Bi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && R(n), t = !1, r();
    }
  };
}
function $f(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control duplicate"), y(n, "title", "duplicate");
    },
    m(i, s) {
      T(i, n, s), t || (r = K(n, "click", function() {
        ze(qi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && qi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && R(n), t = !1, r();
    }
  };
}
function Af(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control up"), y(n, "title", "move up");
    },
    m(i, s) {
      T(i, n, s), t || (r = K(n, "click", function() {
        ze(zi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && zi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && R(n), t = !1, r();
    }
  };
}
function Of(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control down"), y(n, "title", "move down");
    },
    m(i, s) {
      T(i, n, s), t || (r = K(n, "click", function() {
        ze(Gi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Gi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && R(n), t = !1, r();
    }
  };
}
function Ef(e, n) {
  let t, r, i, s, o, a = (
    /*controls*/
    n[6].includes("delete") && !/*atMinItems*/
    n[4]
  ), l, f = (
    /*controls*/
    n[6].includes("duplicate") && !/*atMaxItems*/
    n[5]
  ), u, c = (
    /*controls*/
    n[6].includes("reorder") && /*idx*/
    n[15] > 0
  ), d, h = (
    /*controls*/
    n[6].includes("reorder") && /*idx*/
    n[15] < /*value*/
    (n[2] || []).length - 1
  ), m, g;
  function v(L) {
    n[12](L);
  }
  var w = $r;
  function A(L, D) {
    let P = {
      params: {
        .../*params*/
        L[1],
        path: [
          .../*params*/
          L[1].path,
          /*idx*/
          L[15].toString()
        ],
        containerParent: "array",
        containerReadOnly: (
          /*params*/
          L[1].containerReadOnly || /*schema*/
          L[0].readOnly || !1
        )
      },
      value: (
        /*item*/
        L[13]
      )
    };
    return (
      /*schema*/
      L[0].items !== void 0 && (P.schema = /*schema*/
      L[0].items), { props: P }
    );
  }
  w && (r = Fe(w, A(n)), xe.push(() => Fn(r, "schema", v)));
  let C = a && wf(n), W = f && $f(n), I = c && Af(n), F = h && Of(n);
  return {
    key: e,
    first: null,
    c() {
      t = Me(), r && Ee(r.$$.fragment), s = Z(), o = N("div"), C && C.c(), l = Z(), W && W.c(), u = Z(), I && I.c(), d = Z(), F && F.c(), m = Z(), y(o, "class", "list-controls"), this.first = t;
    },
    m(L, D) {
      T(L, t, D), r && we(r, L, D), T(L, s, D), T(L, o, D), C && C.m(o, null), B(o, l), W && W.m(o, null), B(o, u), I && I.m(o, null), B(o, d), F && F.m(o, null), B(o, m), g = !0;
    },
    p(L, D) {
      if (n = L, w !== (w = $r)) {
        if (r) {
          De();
          const P = r;
          V(P.$$.fragment, 1, 0, () => {
            $e(P, 1);
          }), Ue();
        }
        w ? (r = Fe(w, A(n)), xe.push(() => Fn(r, "schema", v)), Ee(r.$$.fragment), J(r.$$.fragment, 1), we(r, s.parentNode, s)) : r = null;
      } else if (w) {
        const P = {};
        D & /*params, value, schema*/
        7 && (P.params = {
          .../*params*/
          n[1],
          path: [
            .../*params*/
            n[1].path,
            /*idx*/
            n[15].toString()
          ],
          containerParent: "array",
          containerReadOnly: (
            /*params*/
            n[1].containerReadOnly || /*schema*/
            n[0].readOnly || !1
          )
        }), D & /*value*/
        4 && (P.value = /*item*/
        n[13]), !i && D & /*schema*/
        1 && (i = !0, P.schema = /*schema*/
        n[0].items, ot(() => i = !1)), r.$set(P);
      }
      D & /*controls, atMinItems*/
      80 && (a = /*controls*/
      n[6].includes("delete") && !/*atMinItems*/
      n[4]), a ? C ? C.p(n, D) : (C = wf(n), C.c(), C.m(o, l)) : C && (C.d(1), C = null), D & /*controls, atMaxItems*/
      96 && (f = /*controls*/
      n[6].includes("duplicate") && !/*atMaxItems*/
      n[5]), f ? W ? W.p(n, D) : (W = $f(n), W.c(), W.m(o, u)) : W && (W.d(1), W = null), D & /*controls, value*/
      68 && (c = /*controls*/
      n[6].includes("reorder") && /*idx*/
      n[15] > 0), c ? I ? I.p(n, D) : (I = Af(n), I.c(), I.m(o, d)) : I && (I.d(1), I = null), D & /*controls, value*/
      68 && (h = /*controls*/
      n[6].includes("reorder") && /*idx*/
      n[15] < /*value*/
      (n[2] || []).length - 1), h ? F ? F.p(n, D) : (F = Of(n), F.c(), F.m(o, m)) : F && (F.d(1), F = null);
    },
    i(L) {
      g || (r && J(r.$$.fragment, L), g = !0);
    },
    o(L) {
      r && V(r.$$.fragment, L), g = !1;
    },
    d(L) {
      L && (R(t), R(s), R(o)), r && $e(r, L), C && C.d(), W && W.d(), I && I.d(), F && F.d();
    }
  };
}
function Rf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control add"), y(n, "title", "add item");
    },
    m(i, s) {
      T(i, n, s), t || (r = K(n, "click", function() {
        ze(Ui(
          /*schema*/
          e[0],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Ui(
          /*schema*/
          e[0],
          /*params*/
          e[1],
          /*value*/
          e[2]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && R(n), t = !1, r();
    }
  };
}
function sS(e) {
  let n, t, r = (
    /*showWrapper*/
    e[8] && gf(e)
  );
  return {
    c() {
      r && r.c(), n = Me();
    },
    m(i, s) {
      r && r.m(i, s), T(i, n, s), t = !0;
    },
    p(i, [s]) {
      /*showWrapper*/
      i[8] ? r ? (r.p(i, s), s & /*showWrapper*/
      256 && J(r, 1)) : (r = gf(i), r.c(), J(r, 1), r.m(n.parentNode, n)) : r && (De(), V(r, 1, 1, () => {
        r = null;
      }), Ue());
    },
    i(i) {
      t || (J(r), t = !0);
    },
    o(i) {
      V(r), t = !1;
    },
    d(i) {
      i && R(n), r && r.d(i);
    }
  };
}
function oS(e, n, t) {
  let r, i, s, o, a, l, f, { params: u } = n, { schema: c } = n, { value: d } = n, h = u.path.length === 0 || !u.collapsible ? "open" : "closed";
  const m = () => {
    t(3, h = h === "open" ? "closed" : "open");
  };
  function g(v) {
    e.$$.not_equal(c.items, v) && (c.items = v, t(0, c));
  }
  return e.$$set = (v) => {
    "params" in v && t(1, u = v.params), "schema" in v && t(0, c = v.schema), "value" in v && t(2, d = v.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema, params, value*/
    7 && tS(c, u, d)(), e.$$.dirty & /*schema, params*/
    3 && t(9, r = Jt(c, u.path)), e.$$.dirty & /*value, schema*/
    5 && t(8, i = d && d.length > 0 || c.emptyDisplay !== !1), e.$$.dirty & /*value, schema*/
    5 && t(7, s = (!d || d.length === 0) && typeof c.emptyDisplay == "string" && c.emptyDisplay), e.$$.dirty & /*params, schema*/
    3 && t(11, o = u.containerReadOnly || c.readOnly || !1), e.$$.dirty & /*schema, readOnly*/
    2049 && t(6, a = c.controls === void 0 ? o ? "" : "add, reorder, delete, duplicate" : c.controls), e.$$.dirty & /*schema, value*/
    5 && t(5, l = typeof c.maxItems == "number" && ((d == null ? void 0 : d.length) || 0) >= c.maxItems), e.$$.dirty & /*schema, value*/
    5 && t(4, f = typeof c.minItems == "number" && ((d == null ? void 0 : d.length) || 0) <= c.minItems);
  }, [
    c,
    u,
    d,
    h,
    f,
    l,
    a,
    s,
    i,
    r,
    m,
    o,
    g
  ];
}
let aS = class extends Ve {
  constructor(n) {
    super(), Ze(this, n, oS, sS, Ye, { params: 1, schema: 0, value: 2 });
  }
};
function lS(e) {
  let n, t, r, i, s, o, a;
  return {
    c() {
      n = N("input"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), y(n, "type", "checkbox"), n.checked = i = /*value*/
      e[2] || !1, n.disabled = s = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(l, f) {
      T(l, n, f), o || (a = K(
        n,
        "change",
        /*change_handler*/
        e[3]
      ), o = !0);
    },
    p(l, f) {
      f & /*params*/
      1 && t !== (t = /*params*/
      l[0].path.join(".")) && y(n, "id", t), f & /*params*/
      1 && r !== (r = /*params*/
      l[0].path.join(".")) && y(n, "name", r), f & /*value*/
      4 && i !== (i = /*value*/
      l[2] || !1) && (n.checked = i), f & /*schema, params*/
      3 && s !== (s = /*schema*/
      l[1].readOnly || /*params*/
      l[0].containerReadOnly) && (n.disabled = s);
    },
    d(l) {
      l && R(n), o = !1, a();
    }
  };
}
function fS(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o, a) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [lS] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Fe(i, s(e))), {
    c() {
      n && Ee(n.$$.fragment), t = Me();
    },
    m(o, a) {
      n && we(n, o, a), T(o, t, a), r = !0;
    },
    p(o, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          De();
          const l = n;
          V(l.$$.fragment, 1, 0, () => {
            $e(l, 1);
          }), Ue();
        }
        i ? (n = Fe(i, s(o)), Ee(n.$$.fragment), J(n.$$.fragment, 1), we(n, t.parentNode, t)) : n = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        o[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        o[1]), a & /*$$scope, params, value, schema*/
        23 && (l.$$scope = { dirty: a, ctx: o }), n.$set(l);
      }
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && V(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(t), n && $e(n, o);
    }
  };
}
function uS(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n;
  const o = (a) => r.pathChanged(r.path, a.currentTarget.checked);
  return e.$$set = (a) => {
    "params" in a && t(0, r = a.params), "schema" in a && t(1, i = a.schema), "value" in a && t(2, s = a.value);
  }, [r, i, s, o];
}
let cS = class extends Ve {
  constructor(n) {
    super(), Ze(this, n, uS, fS, Ye, { params: 0, schema: 1, value: 2 });
  }
};
function dS(e) {
  let n, t, r, i, s, o, a;
  return {
    c() {
      n = N("input"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), y(n, "type", "number"), n.value = i = /*value*/
      e[2] || "", n.disabled = s = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(l, f) {
      T(l, n, f), o || (a = K(
        n,
        "input",
        /*input_handler*/
        e[3]
      ), o = !0);
    },
    p(l, f) {
      f & /*params*/
      1 && t !== (t = /*params*/
      l[0].path.join(".")) && y(n, "id", t), f & /*params*/
      1 && r !== (r = /*params*/
      l[0].path.join(".")) && y(n, "name", r), f & /*value*/
      4 && i !== (i = /*value*/
      l[2] || "") && n.value !== i && (n.value = i), f & /*schema, params*/
      3 && s !== (s = /*schema*/
      l[1].readOnly || /*params*/
      l[0].containerReadOnly) && (n.disabled = s);
    },
    d(l) {
      l && R(n), o = !1, a();
    }
  };
}
function pS(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o, a) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [dS] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Fe(i, s(e))), {
    c() {
      n && Ee(n.$$.fragment), t = Me();
    },
    m(o, a) {
      n && we(n, o, a), T(o, t, a), r = !0;
    },
    p(o, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          De();
          const l = n;
          V(l.$$.fragment, 1, 0, () => {
            $e(l, 1);
          }), Ue();
        }
        i ? (n = Fe(i, s(o)), Ee(n.$$.fragment), J(n.$$.fragment, 1), we(n, t.parentNode, t)) : n = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        o[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        o[1]), a & /*$$scope, params, value, schema*/
        23 && (l.$$scope = { dirty: a, ctx: o }), n.$set(l);
      }
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && V(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(t), n && $e(n, o);
    }
  };
}
function hS(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n;
  const o = (a) => {
    let l = parseFloat(a.currentTarget.value);
    r.pathChanged(r.path, isNaN(l) ? void 0 : l);
  };
  return e.$$set = (a) => {
    "params" in a && t(0, r = a.params), "schema" in a && t(1, i = a.schema), "value" in a && t(2, s = a.value);
  }, [r, i, s, o];
}
let Tf = class extends Ve {
  constructor(n) {
    super(), Ze(this, n, hS, pS, Ye, { params: 0, schema: 1, value: 2 });
  }
};
function mS(e, n, t, r) {
  const i = Ns(r), s = Xr(t, "/"), a = Ns(t).split(".").reduce((l, f) => l[f], e);
  switch (s) {
    case "required":
      return [i, "Please enter a value for this item"];
    case "minimum":
      return [i, `Please enter a number at least ${a}`];
    case "maximum":
      return [i, `Please enter a number at most ${a}`];
    case "minLength":
      return [i, `Please enter text of at least ${a} characters`];
    case "maxLength":
      return [i, `Please enter text no longer than ${a} characters`];
    case "pattern":
      return [i, `Please enter properly formatted value: ${a}`];
    case "format":
      return [i, `Please enter a properly formatted ${{
        "date-time": "date and time",
        time: "time",
        date: "date",
        email: "email address",
        ipv4: "IPv4 address"
      }[a] || a}`];
  }
  return [i, `Fails to satisfy schema at ${Ns(t)}`];
}
function kf(e, n, t) {
  const r = e.slice();
  return r[28] = n[t][0], r[29] = n[t][1], r;
}
function Sf(e) {
  let n;
  return {
    c() {
      n = N("div"), n.textContent = "Drop files or click to upload", y(n, "class", "sf-upload-caption");
    },
    m(t, r) {
      T(t, n, r);
    },
    d(t) {
      t && R(n);
    }
  };
}
function Pf(e) {
  let n, t;
  return {
    c() {
      n = N("img"), y(n, "class", "sf-upload-thumb"), br(n.src, t = /*value*/
      e[0]) || y(n, "src", t), y(n, "alt", "upload file");
    },
    m(r, i) {
      T(r, n, i);
    },
    p(r, i) {
      i[0] & /*value*/
      1 && !br(n.src, t = /*value*/
      r[0]) && y(n, "src", t);
    },
    d(r) {
      r && R(n);
    }
  };
}
function If(e) {
  let n, t = Xr(
    /*value*/
    e[0],
    "."
  ) + "", r;
  return {
    c() {
      n = N("div"), r = on(t), y(n, "class", "sf-upload-file"), y(
        n,
        "title",
        /*value*/
        e[0]
      );
    },
    m(i, s) {
      T(i, n, s), B(n, r);
    },
    p(i, s) {
      s[0] & /*value*/
      1 && t !== (t = Xr(
        /*value*/
        i[0],
        "."
      ) + "") && _n(r, t), s[0] & /*value*/
      1 && y(
        n,
        "title",
        /*value*/
        i[0]
      );
    },
    d(i) {
      i && R(n);
    }
  };
}
function jf(e) {
  let n, t, r, i, s, o;
  return {
    c() {
      n = N("input"), y(n, "type", "text"), y(n, "id", t = /*params*/
      e[2].path.join(".")), y(n, "name", r = /*params*/
      e[2].path.join(".")), n.disabled = /*readOnly*/
      e[8], y(n, "class", "sf-upload-input"), n.value = i = /*value*/
      e[0] || "";
    },
    m(a, l) {
      T(a, n, l), s || (o = [
        K(n, "click", Dn(yS)),
        K(
          n,
          "input",
          /*input_handler*/
          e[22]
        )
      ], s = !0);
    },
    p(a, l) {
      l[0] & /*params*/
      4 && t !== (t = /*params*/
      a[2].path.join(".")) && y(n, "id", t), l[0] & /*params*/
      4 && r !== (r = /*params*/
      a[2].path.join(".")) && y(n, "name", r), l[0] & /*readOnly*/
      256 && (n.disabled = /*readOnly*/
      a[8]), l[0] & /*value*/
      1 && i !== (i = /*value*/
      a[0] || "") && n.value !== i && (n.value = i);
    },
    d(a) {
      a && R(n), s = !1, en(o);
    }
  };
}
function Cf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "sf-upload-deleter");
    },
    m(i, s) {
      T(i, n, s), t || (r = K(
        n,
        "click",
        /*deleteUploads*/
        e[15]
      ), t = !0);
    },
    p: rn,
    d(i) {
      i && R(n), t = !1, r();
    }
  };
}
function Lf(e) {
  let n, t = He(Object.entries(
    /*progress*/
    e[6]
  )), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = Mf(kf(e, t, i));
  return {
    c() {
      n = N("div");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      y(n, "class", "sf-progress-bars");
    },
    m(i, s) {
      T(i, n, s);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(n, null);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      64) {
        t = He(Object.entries(
          /*progress*/
          i[6]
        ));
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = kf(i, t, o);
          r[o] ? r[o].p(a, s) : (r[o] = Mf(a), r[o].c(), r[o].m(n, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
    },
    d(i) {
      i && R(n), xr(r, i);
    }
  };
}
function Mf(e) {
  let n, t, r, i = (
    /*name*/
    e[28] + ""
  ), s, o;
  return {
    c() {
      n = N("div"), t = N("div"), r = Z(), s = on(i), o = Z(), y(t, "class", "sf-progress-done"), Un(
        t,
        "width",
        /*percent*/
        e[29] + "%"
      ), y(n, "class", "sf-progress-bar");
    },
    m(a, l) {
      T(a, n, l), B(n, t), B(n, r), B(n, s), B(n, o);
    },
    p(a, l) {
      l[0] & /*progress*/
      64 && Un(
        t,
        "width",
        /*percent*/
        a[29] + "%"
      ), l[0] & /*progress*/
      64 && i !== (i = /*name*/
      a[28] + "") && _n(s, i);
    },
    d(a) {
      a && R(n);
    }
  };
}
function gS(e) {
  let n, t, r, i, s, o, a = (
    /*value*/
    e[0] && /*isImage*/
    e[18](
      /*value*/
      e[0]
    ) && /*mode*/
    e[7] === "uploader"
  ), l, f = (
    /*value*/
    e[0] && !/*isImage*/
    e[18](
      /*value*/
      e[0]
    ) && /*mode*/
    e[7] === "uploader"
  ), u, c, d, h, m, g, v, w = Object.keys(
    /*progress*/
    e[6]
  ).length > 0, A, C, W, I = (
    /*mode*/
    e[7] === "uploader" && !/*readOnly*/
    e[8] && Sf()
  ), F = a && Pf(e), L = f && If(e), D = (
    /*mode*/
    e[7] === "link" && jf(e)
  ), P = !/*readOnly*/
  e[8] && Cf(e), ie = w && Lf(e);
  return {
    c() {
      n = N("input"), i = Z(), s = N("div"), I && I.c(), o = Z(), F && F.c(), l = Z(), L && L.c(), u = Z(), D && D.c(), c = Z(), d = N("div"), P && P.c(), h = Z(), m = N("button"), m.innerHTML = "", v = Z(), ie && ie.c(), A = Me(), y(n, "id", t = /*params*/
      e[2].path.join(".")), y(n, "name", r = /*params*/
      e[2].path.join(".")), y(n, "type", "file"), n.readOnly = /*readOnly*/
      e[8], Un(n, "display", "none"), y(m, "type", "button"), Ie(
        m,
        "sf-upload-to-link",
        /*mode*/
        e[7] === "uploader"
      ), Ie(
        m,
        "sf-upload-to-uploader",
        /*mode*/
        e[7] === "link"
      ), y(d, "class", "sf-upload-controls"), y(s, "class", g = "sf-drop-area " + /*mode*/
      e[7]), y(s, "tabindex", "0"), Ie(
        s,
        "highlight",
        /*highlight*/
        e[1]
      );
    },
    m(E, ee) {
      T(E, n, ee), e[21](n), T(E, i, ee), T(E, s, ee), I && I.m(s, null), B(s, o), F && F.m(s, null), B(s, l), L && L.m(s, null), B(s, u), D && D.m(s, null), B(s, c), B(s, d), P && P.m(d, null), B(d, h), B(d, m), e[23](s), T(E, v, ee), ie && ie.m(E, ee), T(E, A, ee), C || (W = [
        K(
          n,
          "input",
          /*onInput*/
          e[10]
        ),
        K(
          m,
          "click",
          /*changeMode*/
          e[16]
        ),
        K(
          s,
          "dragenter",
          /*dragEnter*/
          e[11]
        ),
        K(
          s,
          "dragover",
          /*dragOver*/
          e[12]
        ),
        K(
          s,
          "dragleave",
          /*dragLeave*/
          e[13]
        ),
        K(
          s,
          "drop",
          /*drop*/
          e[14]
        ),
        K(
          s,
          "click",
          /*openFile*/
          e[17]
        )
      ], C = !0);
    },
    p(E, ee) {
      ee[0] & /*params*/
      4 && t !== (t = /*params*/
      E[2].path.join(".")) && y(n, "id", t), ee[0] & /*params*/
      4 && r !== (r = /*params*/
      E[2].path.join(".")) && y(n, "name", r), ee[0] & /*readOnly*/
      256 && (n.readOnly = /*readOnly*/
      E[8]), /*mode*/
      E[7] === "uploader" && !/*readOnly*/
      E[8] ? I || (I = Sf(), I.c(), I.m(s, o)) : I && (I.d(1), I = null), ee[0] & /*value, mode*/
      129 && (a = /*value*/
      E[0] && /*isImage*/
      E[18](
        /*value*/
        E[0]
      ) && /*mode*/
      E[7] === "uploader"), a ? F ? F.p(E, ee) : (F = Pf(E), F.c(), F.m(s, l)) : F && (F.d(1), F = null), ee[0] & /*value, mode*/
      129 && (f = /*value*/
      E[0] && !/*isImage*/
      E[18](
        /*value*/
        E[0]
      ) && /*mode*/
      E[7] === "uploader"), f ? L ? L.p(E, ee) : (L = If(E), L.c(), L.m(s, u)) : L && (L.d(1), L = null), /*mode*/
      E[7] === "link" ? D ? D.p(E, ee) : (D = jf(E), D.c(), D.m(s, c)) : D && (D.d(1), D = null), /*readOnly*/
      E[8] ? P && (P.d(1), P = null) : P ? P.p(E, ee) : (P = Cf(E), P.c(), P.m(d, h)), ee[0] & /*mode*/
      128 && Ie(
        m,
        "sf-upload-to-link",
        /*mode*/
        E[7] === "uploader"
      ), ee[0] & /*mode*/
      128 && Ie(
        m,
        "sf-upload-to-uploader",
        /*mode*/
        E[7] === "link"
      ), ee[0] & /*mode*/
      128 && g !== (g = "sf-drop-area " + /*mode*/
      E[7]) && y(s, "class", g), ee[0] & /*mode, highlight*/
      130 && Ie(
        s,
        "highlight",
        /*highlight*/
        E[1]
      ), ee[0] & /*progress*/
      64 && (w = Object.keys(
        /*progress*/
        E[6]
      ).length > 0), w ? ie ? ie.p(E, ee) : (ie = Lf(E), ie.c(), ie.m(A.parentNode, A)) : ie && (ie.d(1), ie = null);
    },
    d(E) {
      E && (R(n), R(i), R(s), R(v), R(A)), e[21](null), I && I.d(), F && F.d(), L && L.d(), D && D.d(), P && P.d(), e[23](null), ie && ie.d(E), C = !1, en(W);
    }
  };
}
function _S(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[2].components.fieldWrapper
  );
  function s(o, a) {
    return {
      props: {
        params: (
          /*params*/
          o[2]
        ),
        schema: (
          /*schema*/
          o[3]
        ),
        $$slots: { default: [gS] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Fe(i, s(e))), {
    c() {
      n && Ee(n.$$.fragment), t = Me();
    },
    m(o, a) {
      n && we(n, o, a), T(o, t, a), r = !0;
    },
    p(o, a) {
      if (a[0] & /*params*/
      4 && i !== (i = /*params*/
      o[2].components.fieldWrapper)) {
        if (n) {
          De();
          const l = n;
          V(l.$$.fragment, 1, 0, () => {
            $e(l, 1);
          }), Ue();
        }
        i ? (n = Fe(i, s(o)), Ee(n.$$.fragment), J(n.$$.fragment, 1), we(n, t.parentNode, t)) : n = null;
      } else if (i) {
        const l = {};
        a[0] & /*params*/
        4 && (l.params = /*params*/
        o[2]), a[0] & /*schema*/
        8 && (l.schema = /*schema*/
        o[3]), a[0] & /*progress, mode, dropArea, highlight, readOnly, params, value, inp*/
        503 | a[1] & /*$$scope*/
        2 && (l.$$scope = { dirty: a, ctx: o }), n.$set(l);
      }
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && V(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(t), n && $e(n, o);
    }
  };
}
const yS = () => {
};
function vS(e, n, t) {
  let r, i, { params: s } = n, { schema: o } = n, { value: a } = n, { highlight: l = !1 } = n;
  const f = o.multiple || !1;
  let u, c, d = Xp(dp);
  du(e, d, (z) => t(20, i = z));
  let h, m = [], g = {}, v = "uploader";
  const w = () => {
    var z, he;
    if (!f) {
      if ((((z = u.files) == null ? void 0 : z.length) || 0) > 1) {
        alert("Please only upload one file"), t(4, u.files = null, u);
        return;
      }
      const Xe = (he = u.files) == null ? void 0 : he.item(0);
      if (!Xe)
        return;
      if (o.warningKb && Xe.size > o.warningKb * 1024 && alert(`The file is larger than the recommended maximum size of ${o.warningKb}KB - consider compressing it`), o.maximumKb && Xe.size > o.maximumKb * 1024) {
        alert(`The file is larger than the allowed maximum of ${o.maximumKb}KB - please compress it first`), t(4, u.files = null, u);
        return;
      }
      s.pathChanged(s.path, u.files), F(Xe), g[Xe.name] = { mimeType: Xe.type, size: Xe.size };
    }
  }, A = (z) => {
    w();
  }, C = (z) => {
    var he;
    r || ((he = z.dataTransfer) == null ? void 0 : he.types[0]) !== "Files" || (t(1, l = !0), z.preventDefault());
  }, W = (z) => {
    var he;
    r || ((he = z.dataTransfer) == null ? void 0 : he.types[0]) !== "Files" || z.preventDefault();
  }, I = (z) => {
    r || t(1, l = !1);
  }, F = (z) => {
    if (z.type.startsWith("image")) {
      const he = document.createElement("img");
      he.classList.add("sf-upload-thumb"), he.file = z, c.append(he), m.push(he);
      const Xe = new FileReader();
      Xe.onload = (nt) => {
        he.src = nt.target.result;
      }, Xe.readAsDataURL(z);
    } else {
      const he = document.createElement("div");
      he.classList.add("sf-upload-file"), he.title = z.name, he.innerText = Xr(z.name, ".") || Bd(z.type, "/"), c.append(he), m.push(he);
    }
  }, L = (z) => {
    if (o.readOnly || (z.preventDefault(), t(1, l = !1), !z.dataTransfer))
      return;
    const { files: he } = z.dataTransfer;
    t(4, u.files = he, u), w();
  }, D = (z) => {
    z.stopPropagation(), t(4, u.files = null, u), m.forEach((he) => he.remove()), t(19, m = []), g = {}, t(0, a = ""), s.pathChanged(s.path, cp), s.pathChanged(s.path, a);
  }, P = (z) => {
    z.stopPropagation(), t(7, v = v === "uploader" ? "link" : "uploader");
  }, ie = () => {
    r || u.click();
  }, E = (z) => ["jpg", "jpeg", "png", "gif", "svg", "ico"].includes(Xr(z, ".").toLowerCase());
  function ee(z) {
    xe[z ? "unshift" : "push"](() => {
      u = z, t(4, u);
    });
  }
  const an = (z) => s.pathChanged(s.path, z.currentTarget.value || void 0);
  function be(z) {
    xe[z ? "unshift" : "push"](() => {
      c = z, t(5, c);
    });
  }
  return e.$$set = (z) => {
    "params" in z && t(2, s = z.params), "schema" in z && t(3, o = z.schema), "value" in z && t(0, a = z.value), "highlight" in z && t(1, l = z.highlight);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$pathProgress, params*/
    1048580 && t(6, h = i[s.path.join(".")] || {}), e.$$.dirty[0] & /*value, renderedThumbnails*/
    524289 && a && (a.startsWith("http") || a.startsWith("/")) && m.length > 0 && (m.forEach((z) => z.remove()), t(19, m = [])), e.$$.dirty[0] & /*schema, params*/
    12 && t(8, r = o.readOnly || s.containerReadOnly || !1);
  }, [
    a,
    l,
    s,
    o,
    u,
    c,
    h,
    v,
    r,
    d,
    A,
    C,
    W,
    I,
    L,
    D,
    P,
    ie,
    E,
    m,
    i,
    ee,
    an,
    be
  ];
}
class bS extends Ve {
  constructor(n) {
    super(), Ze(
      this,
      n,
      vS,
      _S,
      Ye,
      {
        params: 2,
        schema: 3,
        value: 0,
        highlight: 1
      },
      null,
      [-1, -1]
    );
  }
}
function wS(e) {
  let n, t, r, i, s, o, a;
  return {
    c() {
      n = N("textarea"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), n.disabled = i = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly, n.value = s = /*value*/
      e[2] || "", y(n, "class", "svelte-vofknr");
    },
    m(l, f) {
      T(l, n, f), o || (a = K(
        n,
        "input",
        /*input_handler*/
        e[3]
      ), o = !0);
    },
    p(l, f) {
      f & /*params*/
      1 && t !== (t = /*params*/
      l[0].path.join(".")) && y(n, "id", t), f & /*params*/
      1 && r !== (r = /*params*/
      l[0].path.join(".")) && y(n, "name", r), f & /*schema, params*/
      3 && i !== (i = /*schema*/
      l[1].readOnly || /*params*/
      l[0].containerReadOnly) && (n.disabled = i), f & /*value*/
      4 && s !== (s = /*value*/
      l[2] || "") && (n.value = s);
    },
    d(l) {
      l && R(n), o = !1, a();
    }
  };
}
function $S(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o, a) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [wS] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Fe(i, s(e))), {
    c() {
      n && Ee(n.$$.fragment), t = Me();
    },
    m(o, a) {
      n && we(n, o, a), T(o, t, a), r = !0;
    },
    p(o, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          De();
          const l = n;
          V(l.$$.fragment, 1, 0, () => {
            $e(l, 1);
          }), Ue();
        }
        i ? (n = Fe(i, s(o)), Ee(n.$$.fragment), J(n.$$.fragment, 1), we(n, t.parentNode, t)) : n = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        o[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        o[1]), a & /*$$scope, params, schema, value*/
        23 && (l.$$scope = { dirty: a, ctx: o }), n.$set(l);
      }
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && V(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(t), n && $e(n, o);
    }
  };
}
function AS(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n;
  const o = (a) => r.pathChanged(r.path, a.currentTarget.value || void 0);
  return e.$$set = (a) => {
    "params" in a && t(0, r = a.params), "schema" in a && t(1, i = a.schema), "value" in a && t(2, s = a.value);
  }, [r, i, s, o];
}
class OS extends Ve {
  constructor(n) {
    super(), Ze(this, n, AS, $S, Ye, { params: 0, schema: 1, value: 2 });
  }
}
function Nf(e, n, t) {
  const r = e.slice();
  return r[24] = n[t], r[26] = t, r;
}
function Ff(e, n) {
  let t, r, i, s = (
    /*getName*/
    n[13](
      /*item*/
      n[24]
    ) + ""
  ), o, a, l, f, u, c, d, h, m, g;
  function v() {
    return (
      /*dragenter_handler*/
      n[16](
        /*idx*/
        n[26]
      )
    );
  }
  return {
    key: e,
    first: null,
    c() {
      t = N("li"), r = N("a"), i = N("h2"), o = on(s), l = Z(), f = N("div"), u = N("span"), c = Z(), d = N("span"), y(r, "href", a = /*getUrl*/
      n[12](
        /*item*/
        n[24],
        /*idx*/
        n[26]
      )), y(u, "class", "duplicate"), y(u, "title", "Duplicate this"), y(d, "class", "delete"), y(d, "title", "Delete this"), y(f, "class", "actions"), y(t, "class", h = /*getArrayBlockClasses*/
      n[14](
        /*item*/
        n[24]
      )), y(t, "draggable", !0), Ie(
        t,
        "drag-over",
        /*hovering*/
        n[3] === /*idx*/
        n[26]
      ), Un(
        t,
        "background-image",
        /*item*/
        n[24].thumbnail ? `url('${/*item*/
        n[24].thumbnail}')` : ""
      ), this.first = t;
    },
    m(w, A) {
      T(w, t, A), B(t, r), B(r, i), B(i, o), B(t, l), B(t, f), B(f, u), B(f, c), B(f, d), m || (g = [
        K(u, "click", function() {
          ze(
            /*onDuplicate*/
            n[9](
              /*idx*/
              n[26]
            )
          ) && n[9](
            /*idx*/
            n[26]
          ).apply(this, arguments);
        }),
        K(d, "click", function() {
          ze(
            /*onDelete*/
            n[8](
              /*idx*/
              n[26]
            )
          ) && n[8](
            /*idx*/
            n[26]
          ).apply(this, arguments);
        }),
        K(t, "dragstart", function() {
          ze(
            /*onDragstart*/
            n[10](
              /*idx*/
              n[26]
            )
          ) && n[10](
            /*idx*/
            n[26]
          ).apply(this, arguments);
        }),
        K(t, "drop", gr(function() {
          ze(
            /*onDrop*/
            n[11](
              /*idx*/
              n[26]
            )
          ) && n[11](
            /*idx*/
            n[26]
          ).apply(this, arguments);
        })),
        K(t, "dragover", gr(RS)),
        K(t, "dragenter", gr(v)),
        K(
          t,
          "dragleave",
          /*dragleave_handler*/
          n[17]
        )
      ], m = !0);
    },
    p(w, A) {
      n = w, A & /*value*/
      1 && s !== (s = /*getName*/
      n[13](
        /*item*/
        n[24]
      ) + "") && _n(o, s), A & /*value*/
      1 && a !== (a = /*getUrl*/
      n[12](
        /*item*/
        n[24],
        /*idx*/
        n[26]
      )) && y(r, "href", a), A & /*value*/
      1 && h !== (h = /*getArrayBlockClasses*/
      n[14](
        /*item*/
        n[24]
      )) && y(t, "class", h), A & /*value, hovering, value*/
      9 && Ie(
        t,
        "drag-over",
        /*hovering*/
        n[3] === /*idx*/
        n[26]
      ), A & /*value*/
      1 && Un(
        t,
        "background-image",
        /*item*/
        n[24].thumbnail ? `url('${/*item*/
        n[24].thumbnail}')` : ""
      );
    },
    d(w) {
      w && R(t), m = !1, en(g);
    }
  };
}
function Wf(e) {
  let n, t, r;
  return {
    c() {
      n = N("li"), n.innerHTML = "", y(n, "class", "array-block add"), Ie(
        n,
        "drag-over",
        /*hovering*/
        e[3] === /*lastIdx*/
        e[5]
      );
    },
    m(i, s) {
      T(i, n, s), t || (r = [
        K(
          n,
          "click",
          /*onAdd*/
          e[6]
        ),
        K(n, "drop", gr(function() {
          ze(
            /*onDrop*/
            e[11](
              /*lastIdx*/
              e[5]
            )
          ) && e[11](
            /*lastIdx*/
            e[5]
          ).apply(this, arguments);
        })),
        K(n, "dragover", gr(TS)),
        K(n, "dragenter", gr(
          /*dragenter_handler_1*/
          e[18]
        )),
        K(
          n,
          "dragleave",
          /*dragleave_handler_1*/
          e[19]
        )
      ], t = !0);
    },
    p(i, s) {
      e = i, s & /*hovering, lastIdx*/
      40 && Ie(
        n,
        "drag-over",
        /*hovering*/
        e[3] === /*lastIdx*/
        e[5]
      );
    },
    d(i) {
      i && R(n), t = !1, en(r);
    }
  };
}
function Df(e) {
  let n, t, r, i, s, o, a;
  function l(u) {
    e[20](u);
  }
  let f = {
    params: {
      .../*params*/
      e[1],
      path: [
        .../*params*/
        e[1].path,
        /*value*/
        (e[0].length - 1).toString()
      ],
      containerParent: "array"
    },
    value: (
      /*value*/
      e[0][
        /*value*/
        e[0].length - 1
      ]
    )
  };
  return (
    /*addItemSchema*/
    e[4] !== void 0 && (f.schema = /*addItemSchema*/
    e[4]), n = new $r({ props: f }), xe.push(() => Fn(n, "schema", l)), {
      c() {
        Ee(n.$$.fragment), r = Z(), i = N("button"), i.textContent = "Add", y(i, "type", "button"), y(i, "class", "submit-button new-item-submit");
      },
      m(u, c) {
        we(n, u, c), T(u, r, c), T(u, i, c), s = !0, o || (a = K(
          i,
          "click",
          /*onAddUpdate*/
          e[7]
        ), o = !0);
      },
      p(u, c) {
        const d = {};
        c & /*params, value*/
        3 && (d.params = {
          .../*params*/
          u[1],
          path: [
            .../*params*/
            u[1].path,
            /*value*/
            (u[0].length - 1).toString()
          ],
          containerParent: "array"
        }), c & /*value*/
        1 && (d.value = /*value*/
        u[0][
          /*value*/
          u[0].length - 1
        ]), !t && c & /*addItemSchema*/
        16 && (t = !0, d.schema = /*addItemSchema*/
        u[4], ot(() => t = !1)), n.$set(d);
      },
      i(u) {
        s || (J(n.$$.fragment, u), s = !0);
      },
      o(u) {
        V(n.$$.fragment, u), s = !1;
      },
      d(u) {
        u && (R(r), R(i)), $e(n, u), o = !1, a();
      }
    }
  );
}
function ES(e) {
  let n, t, r = [], i = /* @__PURE__ */ new Map(), s, o, a, l, f, u = He(
    /*value*/
    e[0] || []
  );
  const c = (m) => (
    /*item*/
    m[24]
  );
  for (let m = 0; m < u.length; m += 1) {
    let g = Nf(e, u, m), v = c(g);
    i.set(v, r[m] = Ff(v, g));
  }
  let d = !/*adding*/
  e[2] && Wf(e), h = (
    /*adding*/
    e[2] && Df(e)
  );
  return {
    c() {
      n = N("div"), t = N("ol");
      for (let m = 0; m < r.length; m += 1)
        r[m].c();
      s = Z(), d && d.c(), o = Z(), h && h.c(), y(n, "id", a = /*params*/
      e[1].path.join(".")), y(n, "class", l = "subset array-blocks depth-" + /*params*/
      e[1].path.length);
    },
    m(m, g) {
      T(m, n, g), B(n, t);
      for (let v = 0; v < r.length; v += 1)
        r[v] && r[v].m(t, null);
      B(t, s), d && d.m(t, null), B(n, o), h && h.m(n, null), f = !0;
    },
    p(m, [g]) {
      g & /*getArrayBlockClasses, value, hovering, onDragstart, onDrop, onDelete, onDuplicate, getUrl, getName*/
      32521 && (u = He(
        /*value*/
        m[0] || []
      ), r = ei(r, g, c, 1, m, u, i, t, po, Ff, s, Nf)), /*adding*/
      m[2] ? d && (d.d(1), d = null) : d ? d.p(m, g) : (d = Wf(m), d.c(), d.m(t, null)), /*adding*/
      m[2] ? h ? (h.p(m, g), g & /*adding*/
      4 && J(h, 1)) : (h = Df(m), h.c(), J(h, 1), h.m(n, null)) : h && (De(), V(h, 1, 1, () => {
        h = null;
      }), Ue()), (!f || g & /*params*/
      2 && a !== (a = /*params*/
      m[1].path.join("."))) && y(n, "id", a), (!f || g & /*params*/
      2 && l !== (l = "subset array-blocks depth-" + /*params*/
      m[1].path.length)) && y(n, "class", l);
    },
    i(m) {
      f || (J(h), f = !0);
    },
    o(m) {
      V(h), f = !1;
    },
    d(m) {
      m && R(n);
      for (let g = 0; g < r.length; g += 1)
        r[g].d();
      d && d.d(), h && h.d();
    }
  };
}
const RS = () => !1, TS = () => !1;
function kS(e, n, t) {
  let r, { params: i } = n, { schema: s } = n, { value: o } = n;
  if (s.type !== "array" || s.items.type !== "object")
    throw new Error("ArrayBlocks editor can only be used on an array with items of type=object");
  let a = !1, l = !1;
  const f = () => {
    i.pathChanged(i.path, [...o || [], ua(s.items)]), t(2, a = !0);
  }, u = async () => {
    var ee;
    const P = o.length - 1, ie = [...i.path, P.toString()], E = (ee = i.componentContext) == null ? void 0 : ee.doUploads;
    E && await E(ie.join(".")), i.pathChanged(ie, o[P]), t(2, a = !1);
  }, c = (P) => () => {
    i.pathChanged(i.path, [...o.slice(0, P), ...o.slice(P + 1)], "delete", P.toString());
  }, d = (P) => () => {
    i.pathChanged(
      i.path,
      [
        ...o.slice(0, P),
        o[P],
        JSON.parse(JSON.stringify(o[P])),
        ...o.slice(P + 1)
      ],
      "duplicate",
      (P + 1).toString()
    );
  }, h = (P) => (ie) => {
    ie.dataTransfer.effectAllowed = "move", ie.dataTransfer.dropEffect = "move", ie.dataTransfer.setData("text/plain", P.toString());
  }, m = (P) => (ie) => {
    ie.dataTransfer.dropEffect = "move";
    const E = parseInt(ie.dataTransfer.getData("text/plain"));
    E < P ? i.pathChanged(i.path, [
      ...o.slice(0, E),
      ...o.slice(E + 1, P),
      o[E],
      ...o.slice(P)
    ]) : P < E && i.pathChanged(i.path, [
      ...o.slice(0, P),
      o[E],
      ...o.slice(P, E),
      ...o.slice(E + 1)
    ]), t(3, l = !1);
  };
  let g = s.effectiveUrl || location.href;
  g.includes("#") && (g = g.split("#")[0]), g.includes("?") && (g = g.split("?")[0]);
  const v = (P, ie) => {
    let E = "";
    return s.itemPathPattern && (E = s.itemPathPattern.replace(/\$\{([^}]*)\}/gi, (an, be) => encodeURIComponent((be === "" ? P : p.get(P, be.split("."))) || ""))), E || (E = encodeURIComponent(P.name || P.title || "")), wT(g, E);
  }, w = (P) => P.name || P.title || "", A = (P) => {
    const E = w(P).split(" "), ee = E.reduce((be, z) => z.length > be ? z.length : be, 0), an = E.length;
    return ee > 18 || an > 13 ? "array-block xlarge" : ee > 14 || an > 9 ? "array-block large" : ee > 10 || an > 6 ? "array-block medium" : "array-block small";
  };
  let C;
  const W = (P) => t(3, l = P), I = () => t(3, l = !1), F = () => t(3, l = r), L = () => t(3, l = !1);
  function D(P) {
    C = P, t(4, C), t(15, s);
  }
  return e.$$set = (P) => {
    "params" in P && t(1, i = P.params), "schema" in P && t(15, s = P.schema), "value" in P && t(0, o = P.value);
  }, e.$$.update = () => {
    var P;
    if (e.$$.dirty & /*value*/
    1 && t(0, o = o || []), e.$$.dirty & /*schema*/
    32768) {
      const ie = Object.fromEntries(Object.entries(s.items.properties).filter(([E, ee]) => ee.type !== "array"));
      t(4, C = {
        ...s.items,
        type: "object",
        properties: ie,
        required: ((P = s.items.required) == null ? void 0 : P.filter((E) => Object.keys(ie).includes(E))) || []
      });
    }
    e.$$.dirty & /*value*/
    1 && t(5, r = (o || []).length);
  }, [
    o,
    i,
    a,
    l,
    C,
    r,
    f,
    u,
    c,
    d,
    h,
    m,
    v,
    w,
    A,
    s,
    W,
    I,
    F,
    L,
    D
  ];
}
class SS extends Ve {
  constructor(n) {
    super(), Ze(this, n, kS, ES, Ye, { params: 1, schema: 15, value: 0 });
  }
}
function Uf(e, n, t) {
  const r = e.slice();
  return r[18] = n[t], r;
}
function PS(e) {
  var s, o;
  let n, t = (
    /*selected*/
    (((s = e[4]) == null ? void 0 : s.text) || "") + ""
  ), r, i = (
    /*selected*/
    ((o = e[4]) == null ? void 0 : o.image) && Bf(e)
  );
  return {
    c() {
      i && i.c(), n = Z(), r = on(t);
    },
    m(a, l) {
      i && i.m(a, l), T(a, n, l), T(a, r, l);
    },
    p(a, l) {
      var f, u;
      /*selected*/
      (f = a[4]) != null && f.image ? i ? i.p(a, l) : (i = Bf(a), i.c(), i.m(n.parentNode, n)) : i && (i.d(1), i = null), l & /*selected*/
      16 && t !== (t = /*selected*/
      (((u = a[4]) == null ? void 0 : u.text) || "") + "") && _n(r, t);
    },
    d(a) {
      a && (R(n), R(r)), i && i.d(a);
    }
  };
}
function IS(e) {
  let n, t, r;
  return {
    c() {
      n = N("input"), y(n, "type", "text");
    },
    m(i, s) {
      T(i, n, s), qr(
        n,
        /*match*/
        e[6]
      ), e[14](n), t || (r = [
        K(
          n,
          "input",
          /*input_1_input_handler*/
          e[13]
        ),
        K(
          n,
          "keyup",
          /*keyup*/
          e[12]
        )
      ], t = !0);
    },
    p(i, s) {
      s & /*match*/
      64 && n.value !== /*match*/
      i[6] && qr(
        n,
        /*match*/
        i[6]
      );
    },
    d(i) {
      i && R(n), e[14](null), t = !1, en(r);
    }
  };
}
function Bf(e) {
  let n, t, r;
  return {
    c() {
      n = N("img"), br(n.src, t = /*selected*/
      e[4].image) || y(n, "src", t), y(n, "alt", r = /*selected*/
      e[4].text);
    },
    m(i, s) {
      T(i, n, s);
    },
    p(i, s) {
      s & /*selected*/
      16 && !br(n.src, t = /*selected*/
      i[4].image) && y(n, "src", t), s & /*selected*/
      16 && r !== (r = /*selected*/
      i[4].text) && y(n, "alt", r);
    },
    d(i) {
      i && R(n);
    }
  };
}
function qf(e) {
  let n, t, r;
  return {
    c() {
      n = N("img"), br(n.src, t = /*item*/
      e[18].image) || y(n, "src", t), y(n, "alt", r = /*item*/
      e[18].text);
    },
    m(i, s) {
      T(i, n, s);
    },
    p(i, s) {
      s & /*options*/
      32 && !br(n.src, t = /*item*/
      i[18].image) && y(n, "src", t), s & /*options*/
      32 && r !== (r = /*item*/
      i[18].text) && y(n, "alt", r);
    },
    d(i) {
      i && R(n);
    }
  };
}
function zf(e, n) {
  let t, r, i = (
    /*item*/
    n[18].text + ""
  ), s, o, a, l, f = (
    /*item*/
    n[18].image && qf(n)
  );
  return {
    key: e,
    first: null,
    c() {
      t = N("div"), f && f.c(), r = Z(), s = on(i), o = Z(), Ie(
        t,
        "selected",
        /*value*/
        n[0] === /*item*/
        n[18].text
      ), this.first = t;
    },
    m(u, c) {
      T(u, t, c), f && f.m(t, null), B(t, r), B(t, s), B(t, o), a || (l = K(t, "click", function() {
        ze(
          /*handleSelect*/
          n[11](
            /*item*/
            n[18]
          )
        ) && n[11](
          /*item*/
          n[18]
        ).apply(this, arguments);
      }), a = !0);
    },
    p(u, c) {
      n = u, /*item*/
      n[18].image ? f ? f.p(n, c) : (f = qf(n), f.c(), f.m(t, r)) : f && (f.d(1), f = null), c & /*options*/
      32 && i !== (i = /*item*/
      n[18].text + "") && _n(s, i), c & /*value, options*/
      33 && Ie(
        t,
        "selected",
        /*value*/
        n[0] === /*item*/
        n[18].text
      );
    },
    d(u) {
      u && R(t), f && f.d(), a = !1, l();
    }
  };
}
function jS(e) {
  let n, t, r, i, s = [], o = /* @__PURE__ */ new Map(), a, l;
  function f(m, g) {
    return (
      /*inputState*/
      m[3] === "searching" ? IS : PS
    );
  }
  let u = f(e), c = u(e), d = He(
    /*options*/
    e[5]
  );
  const h = (m) => (
    /*item*/
    m[18].id
  );
  for (let m = 0; m < d.length; m += 1) {
    let g = Uf(e, d, m), v = h(g);
    o.set(v, s[m] = zf(v, g));
  }
  return {
    c() {
      n = N("div"), t = N("div"), c.c(), r = Z(), i = N("div");
      for (let m = 0; m < s.length; m += 1)
        s[m].c();
      y(t, "class", "sf-selected-item input"), y(i, "class", "sf-items"), Un(
        i,
        "display",
        /*dropdownState*/
        e[7] === "open" ? "block" : "none"
      ), y(n, "class", "sf-autocomplete"), Ie(
        n,
        "readonly",
        /*readOnly*/
        e[9]
      );
    },
    m(m, g) {
      T(m, n, g), B(n, t), c.m(t, null), B(n, r), B(n, i);
      for (let v = 0; v < s.length; v += 1)
        s[v] && s[v].m(i, null);
      a || (l = K(
        t,
        "click",
        /*toggleDropDown*/
        e[10]
      ), a = !0);
    },
    p(m, g) {
      u === (u = f(m)) && c ? c.p(m, g) : (c.d(1), c = u(m), c && (c.c(), c.m(t, null))), g & /*value, options, handleSelect*/
      2081 && (d = He(
        /*options*/
        m[5]
      ), s = ei(s, g, h, 1, m, d, o, i, po, zf, null, Uf)), g & /*dropdownState*/
      128 && Un(
        i,
        "display",
        /*dropdownState*/
        m[7] === "open" ? "block" : "none"
      ), g & /*readOnly*/
      512 && Ie(
        n,
        "readonly",
        /*readOnly*/
        m[9]
      );
    },
    d(m) {
      m && R(n), c.d();
      for (let g = 0; g < s.length; g += 1)
        s[g].d();
      a = !1, l();
    }
  };
}
function CS(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[1].components.fieldWrapper
  );
  function s(o, a) {
    return {
      props: {
        params: (
          /*params*/
          o[1]
        ),
        schema: (
          /*schema*/
          o[2]
        ),
        $$slots: { default: [jS] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Fe(i, s(e))), {
    c() {
      n && Ee(n.$$.fragment), t = Me();
    },
    m(o, a) {
      n && we(n, o, a), T(o, t, a), r = !0;
    },
    p(o, [a]) {
      if (a & /*params*/
      2 && i !== (i = /*params*/
      o[1].components.fieldWrapper)) {
        if (n) {
          De();
          const l = n;
          V(l.$$.fragment, 1, 0, () => {
            $e(l, 1);
          }), Ue();
        }
        i ? (n = Fe(i, s(o)), Ee(n.$$.fragment), J(n.$$.fragment, 1), we(n, t.parentNode, t)) : n = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        2 && (l.params = /*params*/
        o[1]), a & /*schema*/
        4 && (l.schema = /*schema*/
        o[2]), a & /*$$scope, readOnly, dropdownState, options, value, match, input, inputState, selected*/
        2098169 && (l.$$scope = { dirty: a, ctx: o }), n.$set(l);
      }
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && V(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(t), n && $e(n, o);
    }
  };
}
function LS(e, n, t) {
  let r, { params: i } = n, { schema: s } = n, { value: o } = n, a = "showing-value", l = "", f = "closed", u, c = [], d, h = null, m;
  const g = (I) => {
    if (d) {
      h && clearTimeout(h);
      const F = new URL(d, location.href);
      I && F.searchParams.append("match", I), h = setTimeout(
        () => fetch(F.toString(), { credentials: "include" }).then((L) => L.json()).then((L) => {
          L.length > 0 && typeof L[0] != "object" ? t(5, c = L.map((D) => ({ id: D, text: D, image: "" }))) : t(5, c = L), t(7, f = "open");
        }),
        100
      );
    }
  }, v = async () => {
    t(7, f = f === "open" ? "closed" : "open"), f === "open" && (t(3, a = "searching"), await Ri(), m.focus());
  }, w = (I) => () => {
    r || (t(0, o = I.id), i.pathChanged(i.path, I.id), t(3, a = "showing-value"), t(7, f = "closed"));
  }, A = (I) => {
    var F;
    g((F = I.currentTarget) == null ? void 0 : F.value);
  };
  function C() {
    l = this.value, t(6, l);
  }
  function W(I) {
    xe[I ? "unshift" : "push"](() => {
      m = I, t(8, m);
    });
  }
  return e.$$set = (I) => {
    "params" in I && t(1, i = I.params), "schema" in I && t(2, s = I.schema), "value" in I && t(0, o = I.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    4 && (d = s.url || ""), e.$$.dirty & /*params, schema*/
    6 && t(9, r = i.containerReadOnly || s.readOnly || !1), e.$$.dirty & /*options, value*/
    33 && t(4, u = c.find((I) => I.id === o)), e.$$.dirty & /*selected, inputState*/
    24 && t(3, a = u ? a : "searching");
  }, [
    o,
    i,
    s,
    a,
    u,
    c,
    l,
    f,
    m,
    r,
    v,
    w,
    A,
    C,
    W
  ];
}
class MS extends Ve {
  constructor(n) {
    super(), Ze(this, n, LS, CS, Ye, { params: 1, schema: 2, value: 0 });
  }
}
function NS(e) {
  let n, t, r, i;
  return {
    c() {
      n = N("input"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), y(n, "type", "hidden"), n.value = i = /*value*/
      e[1] || "";
    },
    m(s, o) {
      T(s, n, o);
    },
    p(s, [o]) {
      o & /*params*/
      1 && t !== (t = /*params*/
      s[0].path.join(".")) && y(n, "id", t), o & /*params*/
      1 && r !== (r = /*params*/
      s[0].path.join(".")) && y(n, "name", r), o & /*value*/
      2 && i !== (i = /*value*/
      s[1] || "") && (n.value = i);
    },
    i: rn,
    o: rn,
    d(s) {
      s && R(n);
    }
  };
}
function FS(e, n, t) {
  let { params: r } = n, { value: i } = n;
  return e.$$set = (s) => {
    "params" in s && t(0, r = s.params), "value" in s && t(1, i = s.value);
  }, [r, i];
}
class WS extends Ve {
  constructor(n) {
    super(), Ze(this, n, FS, NS, Ye, { params: 0, value: 1 });
  }
}
function Gf(e, n, t) {
  const r = e.slice();
  return r[36] = n[t], r[38] = t, r;
}
function Hf(e, n, t) {
  const r = e.slice();
  return r[39] = n[t], r;
}
function Kf(e, n, t) {
  const r = e.slice();
  return r[42] = n[t], r[38] = t, r;
}
function Yf(e) {
  let n, t, r, i, s, o = (
    /*params*/
    (e[2].collapsible || /*legendText*/
    e[17]) && Jf(e)
  ), a = (
    /*collapserOpenState*/
    e[9] === "open" && Vf(e)
  );
  return {
    c() {
      n = N("fieldset"), o && o.c(), t = Z(), a && a.c(), y(n, "name", r = /*params*/
      e[2].path.join(".")), y(n, "class", i = "subset array list-detail depth-" + /*params*/
      e[2].path.length);
    },
    m(l, f) {
      T(l, n, f), o && o.m(n, null), B(n, t), a && a.m(n, null), s = !0;
    },
    p(l, f) {
      /*params*/
      l[2].collapsible || /*legendText*/
      l[17] ? o ? o.p(l, f) : (o = Jf(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), /*collapserOpenState*/
      l[9] === "open" ? a ? (a.p(l, f), f[0] & /*collapserOpenState*/
      512 && J(a, 1)) : (a = Vf(l), a.c(), J(a, 1), a.m(n, null)) : a && (De(), V(a, 1, 1, () => {
        a = null;
      }), Ue()), (!s || f[0] & /*params*/
      4 && r !== (r = /*params*/
      l[2].path.join("."))) && y(n, "name", r), (!s || f[0] & /*params*/
      4 && i !== (i = "subset array list-detail depth-" + /*params*/
      l[2].path.length)) && y(n, "class", i);
    },
    i(l) {
      s || (J(a), s = !0);
    },
    o(l) {
      V(a), s = !1;
    },
    d(l) {
      l && R(n), o && o.d(), a && a.d();
    }
  };
}
function Jf(e) {
  let n, t, r, i = kn(
    /*legendText*/
    e[17]
  ) + "", s, o = (
    /*params*/
    e[2].collapsible && Xf(e)
  ), a = (
    /*schema*/
    e[0].description && Zf(e)
  );
  return {
    c() {
      n = N("legend"), o && o.c(), t = Z(), r = N("span"), s = Z(), a && a.c(), y(r, "class", "subset-label-title object-label-title"), y(n, "class", "subset-label array-label");
    },
    m(l, f) {
      T(l, n, f), o && o.m(n, null), B(n, t), B(n, r), r.innerHTML = i, B(n, s), a && a.m(n, null);
    },
    p(l, f) {
      /*params*/
      l[2].collapsible ? o ? o.p(l, f) : (o = Xf(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), f[0] & /*legendText*/
      131072 && i !== (i = kn(
        /*legendText*/
        l[17]
      ) + "") && (r.innerHTML = i), /*schema*/
      l[0].description ? a ? a.p(l, f) : (a = Zf(l), a.c(), a.m(n, null)) : a && (a.d(1), a = null);
    },
    d(l) {
      l && R(n), o && o.d(), a && a.d();
    }
  };
}
function Xf(e) {
  let n, t, r, i;
  return {
    c() {
      n = N("span"), y(n, "class", t = "collapser " + /*collapserOpenState*/
      e[9]);
    },
    m(s, o) {
      T(s, n, o), r || (i = K(
        n,
        "click",
        /*toggle*/
        e[18]
      ), r = !0);
    },
    p(s, o) {
      o[0] & /*collapserOpenState*/
      512 && t !== (t = "collapser " + /*collapserOpenState*/
      s[9]) && y(n, "class", t);
    },
    d(s) {
      s && R(n), r = !1, i();
    }
  };
}
function Zf(e) {
  let n, t = kn(
    /*schema*/
    e[0].description
  ) + "";
  return {
    c() {
      n = N("span"), y(n, "class", "subset-label-description object-label-description");
    },
    m(r, i) {
      T(r, n, i), n.innerHTML = t;
    },
    p(r, i) {
      i[0] & /*schema*/
      1 && t !== (t = kn(
        /*schema*/
        r[0].description
      ) + "") && (n.innerHTML = t);
    },
    d(r) {
      r && R(n);
    }
  };
}
function Vf(e) {
  let n, t, r, i = (
    /*controls*/
    e[14].includes("add")
  ), s, o;
  const a = [US, DS], l = [];
  function f(c, d) {
    return (
      /*emptyText*/
      c[15] ? 1 : 0
    );
  }
  n = f(e), t = l[n] = a[n](e);
  let u = i && lu(e);
  return {
    c() {
      t.c(), r = Z(), u && u.c(), s = Me();
    },
    m(c, d) {
      l[n].m(c, d), T(c, r, d), u && u.m(c, d), T(c, s, d), o = !0;
    },
    p(c, d) {
      let h = n;
      n = f(c), n === h ? l[n].p(c, d) : (De(), V(l[h], 1, 1, () => {
        l[h] = null;
      }), Ue(), t = l[n], t ? t.p(c, d) : (t = l[n] = a[n](c), t.c()), J(t, 1), t.m(r.parentNode, r)), d[0] & /*controls*/
      16384 && (i = /*controls*/
      c[14].includes("add")), i ? u ? u.p(c, d) : (u = lu(c), u.c(), u.m(s.parentNode, s)) : u && (u.d(1), u = null);
    },
    i(c) {
      o || (J(t), o = !0);
    },
    o(c) {
      V(t), o = !1;
    },
    d(c) {
      c && (R(r), R(s)), l[n].d(c), u && u.d(c);
    }
  };
}
function DS(e) {
  let n, t;
  return {
    c() {
      n = N("div"), t = on(
        /*emptyText*/
        e[15]
      ), y(n, "class", "emptyText");
    },
    m(r, i) {
      T(r, n, i), B(n, t);
    },
    p(r, i) {
      i[0] & /*emptyText*/
      32768 && _n(
        t,
        /*emptyText*/
        r[15]
      );
    },
    i: rn,
    o: rn,
    d(r) {
      r && R(n);
    }
  };
}
function US(e) {
  let n, t, r, i, s, o;
  const a = [qS, BS], l = [];
  function f(u, c) {
    return (
      /*mode*/
      u[3] === "list" ? 0 : 1
    );
  }
  return t = f(e), r = l[t] = a[t](e), {
    c() {
      n = N("div"), r.c(), y(n, "class", "table-container"), y(n, "tabindex", "0"), Un(
        n,
        "grid-template-columns",
        /*gridTemplateColumns*/
        e[13]
      );
    },
    m(u, c) {
      T(u, n, c), l[t].m(n, null), i = !0, s || (o = [
        K(
          n,
          "keyup",
          /*onKey*/
          e[22]
        ),
        K(
          n,
          "click",
          /*onClick*/
          e[23]
        )
      ], s = !0);
    },
    p(u, c) {
      let d = t;
      t = f(u), t === d ? l[t].p(u, c) : (De(), V(l[d], 1, 1, () => {
        l[d] = null;
      }), Ue(), r = l[t], r ? r.p(u, c) : (r = l[t] = a[t](u), r.c()), J(r, 1), r.m(n, null)), c[0] & /*gridTemplateColumns*/
      8192 && Un(
        n,
        "grid-template-columns",
        /*gridTemplateColumns*/
        u[13]
      );
    },
    i(u) {
      i || (J(r), i = !0);
    },
    o(u) {
      V(r), i = !1;
    },
    d(u) {
      u && R(n), l[t].d(), s = !1, en(o);
    }
  };
}
function BS(e) {
  let n, t, r, i, s, o, a, l, f;
  function u(h) {
    e[33](h);
  }
  let c = {
    params: {
      .../*params*/
      e[2],
      path: [
        .../*params*/
        e[2].path,
        /*selectedIdx*/
        e[10].toString()
      ],
      containerParent: "array",
      containerReadOnly: (
        /*params*/
        e[2].containerReadOnly || /*schema*/
        e[0].readOnly || !1
      )
    },
    value: (
      /*selectedValue*/
      e[12]
    )
  };
  /*schema*/
  e[0].items !== void 0 && (c.schema = /*schema*/
  e[0].items), i = new $r({ props: c }), xe.push(() => Fn(i, "schema", u));
  let d = (
    /*schema*/
    e[0].submit && Qf(e)
  );
  return {
    c() {
      n = N("button"), n.textContent = "List", t = Z(), r = N("div"), Ee(i.$$.fragment), o = Z(), d && d.c(), y(n, "class", "to-list"), y(n, "type", "button"), y(r, "class", "element");
    },
    m(h, m) {
      T(h, n, m), e[32](n), T(h, t, m), T(h, r, m), we(i, r, null), B(r, o), d && d.m(r, null), a = !0, l || (f = K(
        n,
        "click",
        /*onModeList*/
        e[25]
      ), l = !0);
    },
    p(h, m) {
      const g = {};
      m[0] & /*params, selectedIdx, schema*/
      1029 && (g.params = {
        .../*params*/
        h[2],
        path: [
          .../*params*/
          h[2].path,
          /*selectedIdx*/
          h[10].toString()
        ],
        containerParent: "array",
        containerReadOnly: (
          /*params*/
          h[2].containerReadOnly || /*schema*/
          h[0].readOnly || !1
        )
      }), m[0] & /*selectedValue*/
      4096 && (g.value = /*selectedValue*/
      h[12]), !s && m[0] & /*schema*/
      1 && (s = !0, g.schema = /*schema*/
      h[0].items, ot(() => s = !1)), i.$set(g), /*schema*/
      h[0].submit ? d ? d.p(h, m) : (d = Qf(h), d.c(), d.m(r, null)) : d && (d.d(1), d = null);
    },
    i(h) {
      a || (J(i.$$.fragment, h), a = !0);
    },
    o(h) {
      V(i.$$.fragment, h), a = !1;
    },
    d(h) {
      h && (R(n), R(t), R(r)), e[32](null), $e(i), d && d.d(), l = !1, f();
    }
  };
}
function qS(e) {
  let n, t, r = [], i = /* @__PURE__ */ new Map(), s, o = He(
    /*listFields*/
    e[6]
  ), a = [];
  for (let c = 0; c < o.length; c += 1)
    a[c] = xf(Kf(e, o, c));
  let l = !/*readOnly*/
  e[7] && eu(), f = He(
    /*rowView*/
    e[4]
  );
  const u = (c) => (
    /*idx*/
    c[38]
  );
  for (let c = 0; c < f.length; c += 1) {
    let d = Gf(e, f, c), h = u(d);
    i.set(h, r[c] = au(h, d));
  }
  return {
    c() {
      for (let c = 0; c < a.length; c += 1)
        a[c].c();
      n = Z(), l && l.c(), t = Z();
      for (let c = 0; c < r.length; c += 1)
        r[c].c();
      s = Me();
    },
    m(c, d) {
      for (let h = 0; h < a.length; h += 1)
        a[h] && a[h].m(c, d);
      T(c, n, d), l && l.m(c, d), T(c, t, d);
      for (let h = 0; h < r.length; h += 1)
        r[h] && r[h].m(c, d);
      T(c, s, d);
    },
    p(c, d) {
      if (d[0] & /*headingClass, sort, onSort, listProps, onSortKey, listFields*/
      70254944) {
        o = He(
          /*listFields*/
          c[6]
        );
        let h;
        for (h = 0; h < o.length; h += 1) {
          const m = Kf(c, o, h);
          a[h] ? a[h].p(m, d) : (a[h] = xf(m), a[h].c(), a[h].m(n.parentNode, n));
        }
        for (; h < a.length; h += 1)
          a[h].d(1);
        a.length = o.length;
      }
      /*readOnly*/
      c[7] ? l && (l.d(1), l = null) : l || (l = eu(), l.c(), l.m(t.parentNode, t)), d[0] & /*rowView, params, value, controls, sort, readOnly, selectedIdx, onSelect, listProps*/
      542134 && (f = He(
        /*rowView*/
        c[4]
      ), r = ei(r, d, u, 1, c, f, i, s.parentNode, po, au, s, Gf));
    },
    i: rn,
    o: rn,
    d(c) {
      c && (R(n), R(t), R(s)), xr(a, c), l && l.d(c);
      for (let d = 0; d < r.length; d += 1)
        r[d].d(c);
    }
  };
}
function Qf(e) {
  let n, t = (
    /*schema*/
    e[0].submit + ""
  ), r, i, s;
  return {
    c() {
      n = N("button"), r = on(t), y(n, "type", "button"), y(n, "class", "submit-button");
    },
    m(o, a) {
      T(o, n, a), B(n, r), i || (s = K(
        n,
        "click",
        /*onSubmit*/
        e[24]
      ), i = !0);
    },
    p(o, a) {
      a[0] & /*schema*/
      1 && t !== (t = /*schema*/
      o[0].submit + "") && _n(r, t);
    },
    d(o) {
      o && R(n), i = !1, s();
    }
  };
}
function xf(e) {
  let n, t = (
    /*fieldName*/
    e[42] + ""
  ), r, i, s, o;
  return {
    c() {
      n = N("div"), r = on(t), y(n, "class", i = /*headingClass*/
      e[26](
        /*idx*/
        e[38],
        /*sort*/
        e[5]
      )), y(n, "tabindex", "0");
    },
    m(a, l) {
      T(a, n, l), B(n, r), s || (o = [
        K(n, "click", Dn(function() {
          ze(
            /*onSort*/
            e[20](
              /*listProps*/
              e[8][
                /*idx*/
                e[38]
              ]
            )
          ) && e[20](
            /*listProps*/
            e[8][
              /*idx*/
              e[38]
            ]
          ).apply(this, arguments);
        })),
        K(n, "keyup", Dn(function() {
          ze(
            /*onSortKey*/
            e[21](
              /*listProps*/
              e[8][
                /*idx*/
                e[38]
              ]
            )
          ) && e[21](
            /*listProps*/
            e[8][
              /*idx*/
              e[38]
            ]
          ).apply(this, arguments);
        }))
      ], s = !0);
    },
    p(a, l) {
      e = a, l[0] & /*listFields*/
      64 && t !== (t = /*fieldName*/
      e[42] + "") && _n(r, t), l[0] & /*sort*/
      32 && i !== (i = /*headingClass*/
      e[26](
        /*idx*/
        e[38],
        /*sort*/
        e[5]
      )) && y(n, "class", i);
    },
    d(a) {
      a && R(n), s = !1, en(o);
    }
  };
}
function eu(e) {
  let n;
  return {
    c() {
      n = N("div"), n.textContent = " ", y(n, "class", "buttons-header");
    },
    m(t, r) {
      T(t, n, r);
    },
    d(t) {
      t && R(n);
    }
  };
}
function nu(e) {
  let n, t = (
    /*item*/
    (e[36][
      /*propName*/
      e[39]
    ] === void 0 ? " " : (
      /*item*/
      e[36][
        /*propName*/
        e[39]
      ]
    )) + ""
  ), r;
  return {
    c() {
      n = N("div"), r = on(t), y(n, "class", "item");
    },
    m(i, s) {
      T(i, n, s), B(n, r);
    },
    p(i, s) {
      s[0] & /*rowView, listProps*/
      272 && t !== (t = /*item*/
      (i[36][
        /*propName*/
        i[39]
      ] === void 0 ? " " : (
        /*item*/
        i[36][
          /*propName*/
          i[39]
        ]
      )) + "") && _n(r, t);
    },
    d(i) {
      i && R(n);
    }
  };
}
function tu(e) {
  let n, t, r = (
    /*controls*/
    e[14].includes("delete")
  ), i, s = (
    /*controls*/
    e[14].includes("duplicate")
  ), o, a = (
    /*controls*/
    e[14].includes("reorder") && /*sort*/
    e[5] === null && /*idx*/
    e[38] > 0
  ), l, f = (
    /*controls*/
    e[14].includes("reorder") && /*sort*/
    e[5] === null && /*idx*/
    e[38] < /*value*/
    (e[1] || []).length - 1
  ), u, c = r && ru(e), d = s && iu(e), h = a && su(e), m = f && ou(e);
  return {
    c() {
      n = N("div"), t = N("div"), c && c.c(), i = Z(), d && d.c(), o = Z(), h && h.c(), l = Z(), m && m.c(), u = Z(), y(t, "class", "row-buttons"), y(n, "class", "array-buttons");
    },
    m(g, v) {
      T(g, n, v), B(n, t), c && c.m(t, null), B(t, i), d && d.m(t, null), B(t, o), h && h.m(t, null), B(t, l), m && m.m(t, null), B(n, u);
    },
    p(g, v) {
      v[0] & /*controls*/
      16384 && (r = /*controls*/
      g[14].includes("delete")), r ? c ? c.p(g, v) : (c = ru(g), c.c(), c.m(t, i)) : c && (c.d(1), c = null), v[0] & /*controls*/
      16384 && (s = /*controls*/
      g[14].includes("duplicate")), s ? d ? d.p(g, v) : (d = iu(g), d.c(), d.m(t, o)) : d && (d.d(1), d = null), v[0] & /*controls, sort, rowView*/
      16432 && (a = /*controls*/
      g[14].includes("reorder") && /*sort*/
      g[5] === null && /*idx*/
      g[38] > 0), a ? h ? h.p(g, v) : (h = su(g), h.c(), h.m(t, l)) : h && (h.d(1), h = null), v[0] & /*controls, sort, rowView, value*/
      16434 && (f = /*controls*/
      g[14].includes("reorder") && /*sort*/
      g[5] === null && /*idx*/
      g[38] < /*value*/
      (g[1] || []).length - 1), f ? m ? m.p(g, v) : (m = ou(g), m.c(), m.m(t, null)) : m && (m.d(1), m = null);
    },
    d(g) {
      g && R(n), c && c.d(), d && d.d(), h && h.d(), m && m.d();
    }
  };
}
function ru(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control delete"), y(n, "title", "delete");
    },
    m(i, s) {
      T(i, n, s), t || (r = [
        K(n, "click", Dn(function() {
          ze(Bi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && Bi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        K(n, "keyup", Dn(
          /*keyup_handler*/
          e[31]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && R(n), t = !1, en(r);
    }
  };
}
function iu(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control duplicate"), y(n, "title", "duplicate");
    },
    m(i, s) {
      T(i, n, s), t || (r = [
        K(n, "click", Dn(function() {
          ze(qi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && qi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        K(n, "keyup", Dn(
          /*keyup_handler_1*/
          e[30]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && R(n), t = !1, en(r);
    }
  };
}
function su(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control up"), y(n, "title", "move up");
    },
    m(i, s) {
      T(i, n, s), t || (r = [
        K(n, "click", Dn(function() {
          ze(zi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && zi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        K(n, "keyup", Dn(
          /*keyup_handler_2*/
          e[29]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && R(n), t = !1, en(r);
    }
  };
}
function ou(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control down"), y(n, "title", "move down");
    },
    m(i, s) {
      T(i, n, s), t || (r = [
        K(n, "click", Dn(function() {
          ze(Gi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && Gi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        K(n, "keyup", Dn(
          /*keyup_handler_3*/
          e[28]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && R(n), t = !1, en(r);
    }
  };
}
function au(e, n) {
  let t, r, i, s, o, a = He(
    /*listProps*/
    n[8]
  ), l = [];
  for (let u = 0; u < a.length; u += 1)
    l[u] = nu(Hf(n, a, u));
  let f = !/*readOnly*/
  n[7] && tu(n);
  return {
    key: e,
    first: null,
    c() {
      t = N("div");
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      r = Z(), f && f.c(), i = Me(), y(t, "class", "row-wrapper"), Ie(
        t,
        "selected",
        /*idx*/
        n[38] === /*selectedIdx*/
        n[10]
      ), this.first = t;
    },
    m(u, c) {
      T(u, t, c);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(t, null);
      T(u, r, c), f && f.m(u, c), T(u, i, c), s || (o = K(t, "click", function() {
        ze(
          /*onSelect*/
          n[19](
            /*idx*/
            n[38]
          )
        ) && n[19](
          /*idx*/
          n[38]
        ).apply(this, arguments);
      }), s = !0);
    },
    p(u, c) {
      if (n = u, c[0] & /*rowView, listProps*/
      272) {
        a = He(
          /*listProps*/
          n[8]
        );
        let d;
        for (d = 0; d < a.length; d += 1) {
          const h = Hf(n, a, d);
          l[d] ? l[d].p(h, c) : (l[d] = nu(h), l[d].c(), l[d].m(t, null));
        }
        for (; d < l.length; d += 1)
          l[d].d(1);
        l.length = a.length;
      }
      c[0] & /*rowView, selectedIdx*/
      1040 && Ie(
        t,
        "selected",
        /*idx*/
        n[38] === /*selectedIdx*/
        n[10]
      ), /*readOnly*/
      n[7] ? f && (f.d(1), f = null) : f ? f.p(n, c) : (f = tu(n), f.c(), f.m(i.parentNode, i));
    },
    d(u) {
      u && (R(t), R(r), R(i)), xr(l, u), f && f.d(u), s = !1, o();
    }
  };
}
function lu(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control add"), y(n, "title", "add item");
    },
    m(i, s) {
      T(i, n, s), t || (r = K(n, "click", function() {
        ze(Ui(
          /*schema*/
          e[0],
          /*params*/
          e[2],
          /*value*/
          e[1]
        )) && Ui(
          /*schema*/
          e[0],
          /*params*/
          e[2],
          /*value*/
          e[1]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && R(n), t = !1, r();
    }
  };
}
function zS(e) {
  let n, t, r = (
    /*showWrapper*/
    e[16] && Yf(e)
  );
  return {
    c() {
      r && r.c(), n = Me();
    },
    m(i, s) {
      r && r.m(i, s), T(i, n, s), t = !0;
    },
    p(i, s) {
      /*showWrapper*/
      i[16] ? r ? (r.p(i, s), s[0] & /*showWrapper*/
      65536 && J(r, 1)) : (r = Yf(i), r.c(), J(r, 1), r.m(n.parentNode, n)) : r && (De(), V(r, 1, 1, () => {
        r = null;
      }), Ue());
    },
    i(i) {
      t || (J(r), t = !0);
    },
    o(i) {
      V(r), t = !1;
    },
    d(i) {
      i && R(n), r && r.d(i);
    }
  };
}
function GS(e, n, t) {
  let r, i, s, o, a, l, f, u, c, d, { params: h } = n, { schema: m } = n, { value: g } = n, v = h.path.length === 0 || !h.collapsible ? "open" : "closed", w = -1, A = "list", C = [], W, I = !1, F = null;
  if (m.type !== "array" || m.items.type !== "object")
    throw new Error("ListDetail editor can only be used on an array with items of type=object");
  const L = () => {
    t(9, v = v === "open" ? "closed" : "open");
  }, D = (G) => async () => {
    t(3, A = "detail"), t(10, w = g.findIndex((Re) => Re === C[G])), t(12, F = g[w]), await Ri(), W == null || W.focus();
  }, P = (G) => () => {
    (o == null ? void 0 : o.field) === G && o.direction === "desc" ? t(5, o = null) : t(5, o = {
      field: G,
      direction: (o == null ? void 0 : o.field) === G ? "desc" : "asc"
    });
  }, ie = (G) => (Re) => {
    Re.key === "Enter" && ((o == null ? void 0 : o.field) === G && o.direction === "desc" ? t(5, o = null) : t(5, o = {
      field: G,
      direction: (o == null ? void 0 : o.field) === G ? "desc" : "asc"
    }));
  }, E = async (G) => {
    A === "list" && !I && (G.target, console.log(`key ${G.key} selectedIdx ${w} len ${g.length}`), G.key === "ArrowDown" && w + 1 < g.length ? (t(10, w += 1), await Ri()) : G.key === "ArrowUp" && w > 0 ? t(10, w -= 1) : G.key === "Enter" && D(w)()), I = !1;
  }, ee = (G) => {
    A === "list" && G.currentTarget.focus();
  }, an = () => {
    h.pathChanged([...h.path, w.toString()], F, "innerSubmit");
  }, be = async () => {
    t(3, A = "list"), I = !0, await Ri(), t(10, w = C.findIndex((G) => G === F));
  }, z = (G) => (Re, rt) => Re[G.field] < rt[G.field] ? G.direction === "asc" ? -1 : 1 : Re[G.field] > rt[G.field] ? G.direction === "desc" ? -1 : 1 : 0, he = (G, Re) => "heading " + (i[G] !== (Re == null ? void 0 : Re.field) ? "" : Re == null ? void 0 : Re.direction);
  function Xe(G) {
    yi.call(this, e, G);
  }
  function nt(G) {
    yi.call(this, e, G);
  }
  function tn(G) {
    yi.call(this, e, G);
  }
  function zn(G) {
    yi.call(this, e, G);
  }
  function xt(G) {
    xe[G ? "unshift" : "push"](() => {
      W = G, t(11, W);
    });
  }
  function tt(G) {
    e.$$.not_equal(m.items, G) && (m.items = G, t(0, m));
  }
  return e.$$set = (G) => {
    "params" in G && t(2, h = G.params), "schema" in G && t(0, m = G.schema), "value" in G && t(1, g = G.value);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*value*/
    2 && t(1, g = g || []), e.$$.dirty[0] & /*schema*/
    1 && t(27, r = m.items || {}), e.$$.dirty[0] & /*itemSchema*/
    134217728 && t(8, i = Array.isArray(r.headings) && typeof r.headings[0] == "string" && r.headings || Object.keys(r.properties)), e.$$.dirty[0] & /*listProps, itemSchema, params*/
    134217988 && t(6, s = i.map((G) => Jt(r.properties[G], [...h.path, "0", G]))), e.$$.dirty[0] & /*itemSchema*/
    134217728 && t(5, o = r.defaultSort || null), e.$$.dirty[0] & /*schema, params*/
    5 && t(17, a = Jt(m, h.path)), e.$$.dirty[0] & /*value, schema*/
    3 && t(16, l = g && g.length > 0 || m.emptyDisplay !== !1), e.$$.dirty[0] & /*value, schema*/
    3 && t(15, f = (!g || g.length === 0) && typeof m.emptyDisplay == "string" && m.emptyDisplay), e.$$.dirty[0] & /*params, schema*/
    5 && t(7, u = h.containerReadOnly || m.readOnly || !1), e.$$.dirty[0] & /*schema, readOnly*/
    129 && t(14, c = m.controls === void 0 ? u ? "" : "add, reorder, delete, duplicate" : m.controls), e.$$.dirty[0] & /*mode, listFields*/
    72 && t(13, d = A === "list" ? `repeat(${s.length}, auto) 50px` : null), e.$$.dirty[0] & /*value, sort, rowView*/
    50 && (t(4, C = [...g]), o && C.sort(z(o)));
  }, [
    m,
    g,
    h,
    A,
    C,
    o,
    s,
    u,
    i,
    v,
    w,
    W,
    F,
    d,
    c,
    f,
    l,
    a,
    L,
    D,
    P,
    ie,
    E,
    ee,
    an,
    be,
    he,
    r,
    Xe,
    nt,
    tn,
    zn,
    xt,
    tt
  ];
}
class HS extends Ve {
  constructor(n) {
    super(), Ze(this, n, GS, zS, Ye, { params: 2, schema: 0, value: 1 }, null, [-1, -1]);
  }
}
function KS(e) {
  let n, t, r, i, s, o;
  return {
    c() {
      n = N("input"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), y(n, "class", "currency"), y(n, "type", JS), n.value = /*formattedString*/
      e[2], n.disabled = i = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(a, l) {
      T(a, n, l), s || (o = K(
        n,
        "input",
        /*onInput*/
        e[3]
      ), s = !0);
    },
    p(a, l) {
      l & /*params*/
      1 && t !== (t = /*params*/
      a[0].path.join(".")) && y(n, "id", t), l & /*params*/
      1 && r !== (r = /*params*/
      a[0].path.join(".")) && y(n, "name", r), l & /*formattedString*/
      4 && n.value !== /*formattedString*/
      a[2] && (n.value = /*formattedString*/
      a[2]), l & /*schema, params*/
      3 && i !== (i = /*schema*/
      a[1].readOnly || /*params*/
      a[0].containerReadOnly) && (n.disabled = i);
    },
    d(a) {
      a && R(n), s = !1, o();
    }
  };
}
function YS(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o, a) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [KS] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Fe(i, s(e))), {
    c() {
      n && Ee(n.$$.fragment), t = Me();
    },
    m(o, a) {
      n && we(n, o, a), T(o, t, a), r = !0;
    },
    p(o, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          De();
          const l = n;
          V(l.$$.fragment, 1, 0, () => {
            $e(l, 1);
          }), Ue();
        }
        i ? (n = Fe(i, s(o)), Ee(n.$$.fragment), J(n.$$.fragment, 1), we(n, t.parentNode, t)) : n = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        o[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        o[1]), a & /*$$scope, params, formattedString, schema*/
        519 && (l.$$scope = { dirty: a, ctx: o }), n.$set(l);
      }
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && V(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(t), n && $e(n, o);
    }
  };
}
let JS = "text";
function XS(e, n, t) {
  let r, { params: i } = n, { schema: s } = n, { value: o } = n, a = i.componentContext;
  const l = a && a.currencySymbol || "$";
  let f;
  a && a.formatCurrency ? f = a.formatCurrency : f = (d) => !d && d !== 0 ? "" : d === Math.round(d) ? `${l}${d}` : `${l}${d.toFixed(2)}`;
  let u = "";
  const c = (d) => {
    let h = d.currentTarget.value;
    if (h === "" || h == l)
      t(6, u = ""), i.pathChanged(i.path, null);
    else {
      const m = h.replace(l, ""), g = parseFloat(m), v = f(g), w = v.replace(l, "");
      t(6, u = v === h || w === h ? "" : h), isNaN(g) || i.pathChanged(i.path, g);
    }
  };
  return e.$$set = (d) => {
    "params" in d && t(0, i = d.params), "schema" in d && t(1, s = d.schema), "value" in d && t(4, o = d.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*holdString, formatCurrency, value*/
    112 && t(2, r = u || f(o || ""));
  }, [i, s, r, c, o, f, u];
}
class ZS extends Ve {
  constructor(n) {
    super(), Ze(this, n, XS, YS, Ye, { params: 0, schema: 1, value: 4 });
  }
}
function fu(e, n, t) {
  const r = e.slice();
  return r[8] = n[t], r[10] = t, r;
}
function uu(e) {
  let n, t, r, i, s, o = (
    /*enumText*/
    (e[4] || [])[
      /*idx*/
      e[10]
    ] + ""
  ), a, l, f, u;
  return {
    c() {
      n = N("input"), i = Z(), s = N("label"), a = on(o), l = Z(), y(n, "class", "sr-only"), y(n, "type", "radio"), y(n, "id", `${/*id*/
      e[6]}-${/*idx*/
      e[10]}`), n.value = t = /*enumVal*/
      e[8], y(
        n,
        "name",
        /*id*/
        e[6]
      ), n.checked = r = /*enumVal*/
      e[8] === /*value*/
      e[2], y(s, "for", `${/*id*/
      e[6]}-${/*idx*/
      e[10]}`);
    },
    m(c, d) {
      T(c, n, d), T(c, i, d), T(c, s, d), B(s, a), B(s, l), f || (u = K(
        n,
        "change",
        /*change_handler*/
        e[7]
      ), f = !0);
    },
    p(c, d) {
      d & /*enumVals*/
      8 && t !== (t = /*enumVal*/
      c[8]) && (n.value = t), d & /*enumVals, value*/
      12 && r !== (r = /*enumVal*/
      c[8] === /*value*/
      c[2]) && (n.checked = r), d & /*enumText*/
      16 && o !== (o = /*enumText*/
      (c[4] || [])[
        /*idx*/
        c[10]
      ] + "") && _n(a, o);
    },
    d(c) {
      c && (R(n), R(i), R(s)), f = !1, u();
    }
  };
}
function VS(e) {
  let n, t = He(
    /*enumVals*/
    e[3]
  ), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = uu(fu(e, t, i));
  return {
    c() {
      n = N("div");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      y(n, "role", "radiogroup"), y(n, "class", "group-container"), y(n, "aria-labelledby", `label-${/*id*/
      e[6]}`), Un(
        n,
        "flex-direction",
        /*flexDirection*/
        e[5]
      ), y(n, "id", `group-${/*id*/
      e[6]}`);
    },
    m(i, s) {
      T(i, n, s);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(n, null);
    },
    p(i, s) {
      if (s & /*id, enumText, enumVals, value, params, undefined*/
      93) {
        t = He(
          /*enumVals*/
          i[3]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = fu(i, t, o);
          r[o] ? r[o].p(a, s) : (r[o] = uu(a), r[o].c(), r[o].m(n, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
      s & /*flexDirection*/
      32 && Un(
        n,
        "flex-direction",
        /*flexDirection*/
        i[5]
      );
    },
    d(i) {
      i && R(n), xr(r, i);
    }
  };
}
function QS(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o, a) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [VS] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Fe(i, s(e))), {
    c() {
      n && Ee(n.$$.fragment), t = Me();
    },
    m(o, a) {
      n && we(n, o, a), T(o, t, a), r = !0;
    },
    p(o, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          De();
          const l = n;
          V(l.$$.fragment, 1, 0, () => {
            $e(l, 1);
          }), Ue();
        }
        i ? (n = Fe(i, s(o)), Ee(n.$$.fragment), J(n.$$.fragment, 1), we(n, t.parentNode, t)) : n = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        o[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        o[1]), a & /*$$scope, flexDirection, enumVals, enumText, value, params*/
        2109 && (l.$$scope = { dirty: a, ctx: o }), n.$set(l);
      }
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && V(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(t), n && $e(n, o);
    }
  };
}
function xS(e, n, t) {
  let r, { params: i } = n, { schema: s } = n, { value: o } = n, a, l, f = i.path.join(".");
  const u = (c) => i.pathChanged(i.path, c.currentTarget.value || void 0);
  return e.$$set = (c) => {
    "params" in c && t(0, i = c.params), "schema" in c && t(1, s = c.schema), "value" in c && t(2, o = c.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    2 && t(3, a = s.enum), e.$$.dirty & /*schema*/
    2 && t(4, l = s.enumText || s.enum), e.$$.dirty & /*schema*/
    2 && t(5, r = s.direction || "row");
  }, [i, s, o, a, l, r, f, u];
}
class eP extends Ve {
  constructor(n) {
    super(), Ze(this, n, xS, QS, Ye, { params: 0, schema: 1, value: 2 });
  }
}
function nP(e) {
  let n, t, r;
  function i(o) {
    e[10](o);
  }
  let s = {
    params: (
      /*params*/
      e[2]
    ),
    value: (
      /*value*/
      e[1]
    )
  };
  return (
    /*schema*/
    e[0] !== void 0 && (s.schema = /*schema*/
    e[0]), n = new $r({ props: s }), xe.push(() => Fn(n, "schema", i)), {
      c() {
        Ee(n.$$.fragment);
      },
      m(o, a) {
        we(n, o, a), r = !0;
      },
      p(o, [a]) {
        const l = {};
        a & /*params*/
        4 && (l.params = /*params*/
        o[2]), a & /*value*/
        2 && (l.value = /*value*/
        o[1]), !t && a & /*schema*/
        1 && (t = !0, l.schema = /*schema*/
        o[0], ot(() => t = !1)), n.$set(l);
      },
      i(o) {
        r || (J(n.$$.fragment, o), r = !0);
      },
      o(o) {
        V(n.$$.fragment, o), r = !1;
      },
      d(o) {
        $e(n, o);
      }
    }
  );
}
function tP(e, n, t) {
  let { schema: r } = n, { value: i } = n, { uploadFiles: s = {} } = n, { dirty: o = !1 } = n, { showErrors: a = !0 } = n, { collapsible: l = !1 } = n, { components: f = {} } = n, { componentContext: u = {} } = n;
  const c = hu();
  let d = {};
  const h = (w) => {
    const A = Vk.validator(gT(r), {
      includeErrors: !0,
      allErrors: !0,
      allowUnusedKeywords: !0
    });
    A(w || i), t(9, d = Object.fromEntries((A.errors || []).map((C) => mS(r, i, C.keywordLocation, C.instanceLocation))));
  };
  Yp(() => {
    h(), Object.keys(d).length > 0 && c("value", {
      path: [],
      value: i,
      errors: d
    });
  });
  let m;
  const g = (w, A, C, W) => {
    if (A instanceof FileList)
      return t(3, s[w.join(".")] = A, s), t(4, o = !0), A;
    if (A === cp)
      return delete s[w.join(".")], t(4, o = !0), A;
    const I = w.length === 0 ? m.value : wr(m.value, w);
    if (A === I && C !== "innerSubmit")
      return;
    let F = structuredClone(m.value);
    if (A === void 0 && w.length > 0) {
      const P = w.slice(0, -1).length ? wr(F, w.slice(0, -1)) : m.value;
      delete P[w[w.length - 1]];
    } else
      w.length === 0 ? F = A : ia(F, w, A);
    h(F);
    const L = c(
      "value",
      {
        path: w,
        pathValue: A,
        value: F,
        errors: d,
        op: C,
        subpath: W
      },
      { cancelable: !0 }
    );
    return console.log(`dispatch value path: ${w.join(".")} val: ${JSON.stringify(A)},${C ? " op: " + C : ""} errors: ${JSON.stringify(d)}, succeeded: ${L}`), L ? (t(2, m.value = F, m), t(1, i = m.value), t(4, o = !0)) : h(i), A;
  };
  function v(w) {
    r = w, t(0, r);
  }
  return e.$$set = (w) => {
    "schema" in w && t(0, r = w.schema), "value" in w && t(1, i = w.value), "uploadFiles" in w && t(3, s = w.uploadFiles), "dirty" in w && t(4, o = w.dirty), "showErrors" in w && t(5, a = w.showErrors), "collapsible" in w && t(6, l = w.collapsible), "components" in w && t(7, f = w.components), "componentContext" in w && t(8, u = w.componentContext);
  }, e.$$.update = () => {
    e.$$.dirty & /*value, uploadFiles, components, componentContext, validationErrors, schema, showErrors, collapsible*/
    1003 && t(2, m = {
      value: i,
      files: s,
      path: [],
      components: Object.assign(
        {
          string: Wt,
          password: Wt,
          email: Wt,
          time: Wt,
          "date-time": Wt,
          date: Wt,
          "string-ipv4": Wt,
          number: Tf,
          integer: Tf,
          boolean: cS,
          fieldWrapper: ST,
          object: jT,
          array: aS,
          enum: nS,
          upload: bS,
          textarea: OS,
          hidden: WS,
          blocks: SS,
          autocomplete: MS,
          "list-detail": HS,
          currency: ZS,
          radio: eP
        },
        f
      ),
      componentContext: u,
      pathChanged: g,
      validationErrors: d,
      containerParent: "none",
      containerReadOnly: r.readOnly || !1,
      showErrors: a,
      collapsible: l,
      idx: yT()
    });
  }, [
    r,
    i,
    m,
    s,
    o,
    a,
    l,
    f,
    u,
    d,
    v
  ];
}
class rP extends Ve {
  constructor(n) {
    super(), Ze(this, n, tP, nP, Ye, {
      schema: 0,
      value: 1,
      uploadFiles: 3,
      dirty: 4,
      showErrors: 5,
      collapsible: 6,
      components: 7,
      componentContext: 8
    });
  }
  get schema() {
    return this.$$.ctx[0];
  }
  set schema(n) {
    this.$$set({ schema: n }), Ne();
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(n) {
    this.$$set({ value: n }), Ne();
  }
  get uploadFiles() {
    return this.$$.ctx[3];
  }
  set uploadFiles(n) {
    this.$$set({ uploadFiles: n }), Ne();
  }
  get dirty() {
    return this.$$.ctx[4];
  }
  set dirty(n) {
    this.$$set({ dirty: n }), Ne();
  }
  get showErrors() {
    return this.$$.ctx[5];
  }
  set showErrors(n) {
    this.$$set({ showErrors: n }), Ne();
  }
  get collapsible() {
    return this.$$.ctx[6];
  }
  set collapsible(n) {
    this.$$set({ collapsible: n }), Ne();
  }
  get components() {
    return this.$$.ctx[7];
  }
  set components(n) {
    this.$$set({ components: n }), Ne();
  }
  get componentContext() {
    return this.$$.ctx[8];
  }
  set componentContext(n) {
    this.$$set({ componentContext: n }), Ne();
  }
}
const dr = [];
function iP(e, n = rn) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (Ye(e, a) && (e = a, t)) {
      const l = !dr.length;
      for (const f of r)
        f[1](), dr.push(f, e);
      if (l) {
        for (let f = 0; f < dr.length; f += 2)
          dr[f][0](dr[f + 1]);
        dr.length = 0;
      }
    }
  }
  function s(a) {
    i(a(e));
  }
  function o(a, l = rn) {
    const f = [a, l];
    return r.add(f), r.size === 1 && (t = n(i, s) || rn), a(e), () => {
      r.delete(f), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function sP(e) {
  let n, t, r, i, s, o, a, l, f, u, c, d, h;
  function m(A) {
    e[16](A);
  }
  function g(A) {
    e[17](A);
  }
  function v(A) {
    e[18](A);
  }
  let w = {
    value: (
      /*value*/
      e[1]
    ),
    showErrors: (
      /*showErrors*/
      e[9]
    ),
    components: (
      /*components*/
      e[6]
    ),
    collapsible: (
      /*collapsible*/
      e[7]
    ),
    componentContext: (
      /*componentContext*/
      e[4]
    )
  };
  return (
    /*schema*/
    e[0] !== void 0 && (w.schema = /*schema*/
    e[0]), /*dirty*/
    e[3] !== void 0 && (w.dirty = /*dirty*/
    e[3]), /*uploadFiles*/
    e[2] !== void 0 && (w.uploadFiles = /*uploadFiles*/
    e[2]), t = new rP({ props: w }), xe.push(() => Fn(t, "schema", m)), xe.push(() => Fn(t, "dirty", g)), xe.push(() => Fn(t, "uploadFiles", v)), t.$on(
      "value",
      /*change*/
      e[11]
    ), {
      c() {
        n = N("form"), Ee(t.$$.fragment), o = Z(), a = N("div"), l = N("button"), f = on(
          /*submitText*/
          e[8]
        ), y(l, "type", u = /*action*/
        e[5] ? "submit" : "button"), y(l, "class", "submit-button"), Ie(
          l,
          "dirty",
          /*dirty*/
          e[3]
        ), y(a, "class", "button-container"), y(n, "class", "svelte-schema-form"), y(
          n,
          "action",
          /*action*/
          e[5]
        ), Ie(
          n,
          "dirty",
          /*dirty*/
          e[3]
        );
      },
      m(A, C) {
        T(A, n, C), we(t, n, null), B(n, o), B(n, a), B(a, l), B(l, f), c = !0, d || (h = K(
          l,
          "click",
          /*submit*/
          e[12]
        ), d = !0);
      },
      p(A, [C]) {
        const W = {};
        C & /*value*/
        2 && (W.value = /*value*/
        A[1]), C & /*showErrors*/
        512 && (W.showErrors = /*showErrors*/
        A[9]), C & /*components*/
        64 && (W.components = /*components*/
        A[6]), C & /*collapsible*/
        128 && (W.collapsible = /*collapsible*/
        A[7]), C & /*componentContext*/
        16 && (W.componentContext = /*componentContext*/
        A[4]), !r && C & /*schema*/
        1 && (r = !0, W.schema = /*schema*/
        A[0], ot(() => r = !1)), !i && C & /*dirty*/
        8 && (i = !0, W.dirty = /*dirty*/
        A[3], ot(() => i = !1)), !s && C & /*uploadFiles*/
        4 && (s = !0, W.uploadFiles = /*uploadFiles*/
        A[2], ot(() => s = !1)), t.$set(W), (!c || C & /*submitText*/
        256) && _n(
          f,
          /*submitText*/
          A[8]
        ), (!c || C & /*action*/
        32 && u !== (u = /*action*/
        A[5] ? "submit" : "button")) && y(l, "type", u), (!c || C & /*dirty*/
        8) && Ie(
          l,
          "dirty",
          /*dirty*/
          A[3]
        ), (!c || C & /*action*/
        32) && y(
          n,
          "action",
          /*action*/
          A[5]
        ), (!c || C & /*dirty*/
        8) && Ie(
          n,
          "dirty",
          /*dirty*/
          A[3]
        );
      },
      i(A) {
        c || (J(t.$$.fragment, A), c = !0);
      },
      o(A) {
        V(t.$$.fragment, A), c = !1;
      },
      d(A) {
        A && R(n), $e(t), d = !1, h();
      }
    }
  );
}
function oP(e, n, t) {
  let r, { schema: i } = n, { value: s } = n, { uploadFiles: o = {} } = n, { uploadBaseUrl: a = "" } = n, { uploadNamePattern: l = "" } = n, { dirty: f = !1 } = n, { action: u = "" } = n, { components: c = {} } = n, { collapsible: d = !1 } = n, { submitText: h = "Submit" } = n, { submitRequiresDirty: m = !0 } = n, { componentContext: g = {} } = n;
  const v = hu();
  let w = iP({});
  du(e, w, (E) => t(20, r = E)), Jp(dp, w);
  let A = {}, C = !1;
  const W = (E) => {
    A = E.detail.errors, v("value", E.detail, { cancelable: !0 }) ? t(1, s = E.detail.value) : E.preventDefault();
  }, I = (E, ee, an) => {
    let be;
    an === -1 ? (delete (r[E] || {})[ee], be = { ...r[E] }) : be = {
      ...r[E] || {},
      [ee]: an
    }, qp(w, r = { ...r, [E]: be }, r);
  }, F = async (E = "") => {
    if (Object.keys(o).length > 0 && a) {
      const ee = l || i.pathPattern;
      if (!ee) {
        alert("No uploadNamePattern given or pathPattern property on schema to determine file save url base");
        return;
      }
      const an = vT(ee, s), be = Object.entries(o).filter(([z]) => z.startsWith(E)).flatMap(([z, he]) => {
        const Xe = [];
        for (let nt = 0; nt < he.length; nt++) {
          const tn = he[nt], zn = a + (a.endsWith("/") ? "" : "/") + an + "/" + z + "/" + tn.name;
          console.log(`Uploading to ${zn}`);
          const xt = new Promise((tt, G) => {
            try {
              const Re = new XMLHttpRequest();
              Re.upload.onprogress = (rt) => I(z, tn.name, rt.loaded / rt.total * 100), Re.upload.onloadend = (rt) => {
                I(z, tn.name, Re.status === 200 || Re.status === 0 ? -1 : -Re.status), tt([z, zn]);
              }, Re.withCredentials = !0, Re.open("PUT", zn), Re.send(tn);
            } catch (Re) {
              G(Re);
            }
          }).then(([tt, G]) => {
            tt === "" ? t(1, s = G) : ia(s, tt.split("."), G), t(1, s), delete o[tt];
          });
          Xe.push(xt);
        }
        return Xe;
      });
      await Promise.all(be);
    }
  }, L = async () => {
    (f || !m) && Object.keys(A).length === 0 && (await F(), v("submit", { value: s }), t(3, f = !1)), t(9, C = !0);
  };
  g.doUploads = F;
  function D(E) {
    i = E, t(0, i);
  }
  function P(E) {
    f = E, t(3, f);
  }
  function ie(E) {
    o = E, t(2, o);
  }
  return e.$$set = (E) => {
    "schema" in E && t(0, i = E.schema), "value" in E && t(1, s = E.value), "uploadFiles" in E && t(2, o = E.uploadFiles), "uploadBaseUrl" in E && t(13, a = E.uploadBaseUrl), "uploadNamePattern" in E && t(14, l = E.uploadNamePattern), "dirty" in E && t(3, f = E.dirty), "action" in E && t(5, u = E.action), "components" in E && t(6, c = E.components), "collapsible" in E && t(7, d = E.collapsible), "submitText" in E && t(8, h = E.submitText), "submitRequiresDirty" in E && t(15, m = E.submitRequiresDirty), "componentContext" in E && t(4, g = E.componentContext);
  }, [
    i,
    s,
    o,
    f,
    g,
    u,
    c,
    d,
    h,
    C,
    w,
    W,
    L,
    a,
    l,
    m,
    D,
    P,
    ie
  ];
}
class dP extends Ve {
  constructor(n) {
    super(), Ze(this, n, oP, sP, Ye, {
      schema: 0,
      value: 1,
      uploadFiles: 2,
      uploadBaseUrl: 13,
      uploadNamePattern: 14,
      dirty: 3,
      action: 5,
      components: 6,
      collapsible: 7,
      submitText: 8,
      submitRequiresDirty: 15,
      componentContext: 4
    });
  }
  get schema() {
    return this.$$.ctx[0];
  }
  set schema(n) {
    this.$$set({ schema: n }), Ne();
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(n) {
    this.$$set({ value: n }), Ne();
  }
  get uploadFiles() {
    return this.$$.ctx[2];
  }
  set uploadFiles(n) {
    this.$$set({ uploadFiles: n }), Ne();
  }
  get uploadBaseUrl() {
    return this.$$.ctx[13];
  }
  set uploadBaseUrl(n) {
    this.$$set({ uploadBaseUrl: n }), Ne();
  }
  get uploadNamePattern() {
    return this.$$.ctx[14];
  }
  set uploadNamePattern(n) {
    this.$$set({ uploadNamePattern: n }), Ne();
  }
  get dirty() {
    return this.$$.ctx[3];
  }
  set dirty(n) {
    this.$$set({ dirty: n }), Ne();
  }
  get action() {
    return this.$$.ctx[5];
  }
  set action(n) {
    this.$$set({ action: n }), Ne();
  }
  get components() {
    return this.$$.ctx[6];
  }
  set components(n) {
    this.$$set({ components: n }), Ne();
  }
  get collapsible() {
    return this.$$.ctx[7];
  }
  set collapsible(n) {
    this.$$set({ collapsible: n }), Ne();
  }
  get submitText() {
    return this.$$.ctx[8];
  }
  set submitText(n) {
    this.$$set({ submitText: n }), Ne();
  }
  get submitRequiresDirty() {
    return this.$$.ctx[15];
  }
  set submitRequiresDirty(n) {
    this.$$set({ submitRequiresDirty: n }), Ne();
  }
  get componentContext() {
    return this.$$.ctx[4];
  }
  set componentContext(n) {
    this.$$set({ componentContext: n }), Ne();
  }
}
export {
  rP as SchemaForm,
  dP as SubmitForm
};
