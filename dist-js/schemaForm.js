var jp = Object.defineProperty;
var Cp = (e, t, n) => t in e ? jp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Es = (e, t, n) => (Cp(e, typeof t != "symbol" ? t + "" : t, n), n);
function ne() {
}
function Lp(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function uf(e) {
  return e();
}
function Wa() {
  return /* @__PURE__ */ Object.create(null);
}
function it(e) {
  e.forEach(uf);
}
function Ye(e) {
  return typeof e == "function";
}
function Ce(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let _i;
function br(e, t) {
  return e === t ? !0 : (_i || (_i = document.createElement("a")), _i.href = t, e === _i.href);
}
function Mp(e) {
  return Object.keys(e).length === 0;
}
function Np(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return ne;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ff(e, t, n) {
  e.$$.on_destroy.push(Np(t, n));
}
function Fp(e, t, n, r) {
  if (e) {
    const i = cf(e, t, n, r);
    return e[0](i);
  }
}
function cf(e, t, n, r) {
  return e[1] && r ? Lp(n.ctx.slice(), e[1](r(t))) : n.ctx;
}
function Wp(e, t, n, r) {
  if (e[2] && r) {
    const i = e[2](r(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const o = [], s = Math.max(t.dirty.length, i.length);
      for (let a = 0; a < s; a += 1)
        o[a] = t.dirty[a] | i[a];
      return o;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function Dp(e, t, n, r, i, o) {
  if (i) {
    const s = cf(t, n, r, o);
    e.p(s, i);
  }
}
function Up(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let r = 0; r < n; r++)
      t[r] = -1;
    return t;
  }
  return -1;
}
function Bp(e, t, n) {
  return e.set(n), t;
}
function D(e, t) {
  e.appendChild(t);
}
function k(e, t, n) {
  e.insertBefore(t, n || null);
}
function E(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function xr(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function I(e) {
  return document.createElement(e);
}
function yt(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function lt(e) {
  return document.createTextNode(e);
}
function x() {
  return lt(" ");
}
function Xe() {
  return lt("");
}
function Y(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function gr(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function zt(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function h(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function zp(e) {
  return Array.from(e.childNodes);
}
function bt(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function zr(e, t) {
  e.value = t ?? "";
}
function ut(e, t, n, r) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "");
}
function Da(e, t, n) {
  for (let r = 0; r < e.options.length; r += 1) {
    const i = e.options[r];
    if (i.__value === t) {
      i.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function We(e, t, n) {
  e.classList.toggle(t, !!n);
}
function qp(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function qe(e, t) {
  return new e(t);
}
let qr;
function Dr(e) {
  qr = e;
}
function Hi() {
  if (!qr)
    throw new Error("Function called outside component initialization");
  return qr;
}
function Gp(e) {
  Hi().$$.on_mount.push(e);
}
function df() {
  const e = Hi();
  return (t, n, { cancelable: r = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const o = qp(
        /** @type {string} */
        t,
        n,
        { cancelable: r }
      );
      return i.slice().forEach((s) => {
        s.call(e, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function Hp(e, t) {
  return Hi().$$.context.set(e, t), t;
}
function Kp(e) {
  return Hi().$$.context.get(e);
}
function vi(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((r) => r.call(this, t));
}
const pr = [], rt = [];
let _r = [];
const Gs = [], pf = /* @__PURE__ */ Promise.resolve();
let Hs = !1;
function hf() {
  Hs || (Hs = !0, pf.then(ze));
}
function Ei() {
  return hf(), pf;
}
function Ks(e) {
  _r.push(e);
}
function an(e) {
  Gs.push(e);
}
const ks = /* @__PURE__ */ new Set();
let fr = 0;
function ze() {
  if (fr !== 0)
    return;
  const e = qr;
  do {
    try {
      for (; fr < pr.length; ) {
        const t = pr[fr];
        fr++, Dr(t), Yp(t.$$);
      }
    } catch (t) {
      throw pr.length = 0, fr = 0, t;
    }
    for (Dr(null), pr.length = 0, fr = 0; rt.length; )
      rt.pop()();
    for (let t = 0; t < _r.length; t += 1) {
      const n = _r[t];
      ks.has(n) || (ks.add(n), n());
    }
    _r.length = 0;
  } while (pr.length);
  for (; Gs.length; )
    Gs.pop()();
  Hs = !1, ks.clear(), Dr(e);
}
function Yp(e) {
  if (e.fragment !== null) {
    e.update(), it(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Ks);
  }
}
function Jp(e) {
  const t = [], n = [];
  _r.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), _r = t;
}
const ki = /* @__PURE__ */ new Set();
let Gn;
function we() {
  Gn = {
    r: 0,
    c: [],
    p: Gn
    // parent group
  };
}
function $e() {
  Gn.r || it(Gn.c), Gn = Gn.p;
}
function L(e, t) {
  e && e.i && (ki.delete(e), e.i(t));
}
function W(e, t, n, r) {
  if (e && e.o) {
    if (ki.has(e))
      return;
    ki.add(e), Gn.c.push(() => {
      ki.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function Ve(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function ho(e, t) {
  e.d(1), t.delete(e.key);
}
function mf(e, t) {
  W(e, 1, 1, () => {
    t.delete(e.key);
  });
}
function ei(e, t, n, r, i, o, s, a, l, u, f, c) {
  let d = e.length, g = o.length, m = d;
  const _ = {};
  for (; m--; )
    _[e[m].key] = m;
  const b = [], v = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), F = [];
  for (m = g; m--; ) {
    const U = c(i, o, m), K = n(U);
    let M = s.get(K);
    M ? r && F.push(() => M.p(U, t)) : (M = u(K, U), M.c()), v.set(K, b[m] = M), K in _ && A.set(K, Math.abs(m - _[K]));
  }
  const G = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set();
  function N(U) {
    L(U, 1), U.m(a, f), s.set(U.key, U), f = U.first, g--;
  }
  for (; d && g; ) {
    const U = b[g - 1], K = e[d - 1], M = U.key, ie = K.key;
    U === K ? (f = U.first, d--, g--) : v.has(ie) ? !s.has(M) || G.has(M) ? N(U) : P.has(ie) ? d-- : A.get(M) > A.get(ie) ? (P.add(M), N(U)) : (G.add(ie), d--) : (l(K, s), d--);
  }
  for (; d--; ) {
    const U = e[d];
    v.has(U.key) || l(U, s);
  }
  for (; g; )
    N(b[g - 1]);
  return it(F), b;
}
function Ut(e, t, n) {
  const r = e.$$.props[t];
  r !== void 0 && (e.$$.bound[r] = n, n(e.$$.ctx[r]));
}
function ve(e) {
  e && e.c();
}
function ge(e, t, n) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), Ks(() => {
    const o = e.$$.on_mount.map(uf).filter(Ye);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : it(o), e.$$.on_mount = [];
  }), i.forEach(Ks);
}
function _e(e, t) {
  const n = e.$$;
  n.fragment !== null && (Jp(n.after_update), it(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Xp(e, t) {
  e.$$.dirty[0] === -1 && (pr.push(e), hf(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Me(e, t, n, r, i, o, s = null, a = [-1]) {
  const l = qr;
  Dr(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: ne,
    not_equal: i,
    bound: Wa(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Wa(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  s && s(u.root);
  let f = !1;
  if (u.ctx = n ? n(e, t.props || {}, (c, d, ...g) => {
    const m = g.length ? g[0] : d;
    return u.ctx && i(u.ctx[c], u.ctx[c] = m) && (!u.skip_bound && u.bound[c] && u.bound[c](m), f && Xp(e, c)), d;
  }) : [], u.update(), f = !0, it(u.before_update), u.fragment = r ? r(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = zp(t.target);
      u.fragment && u.fragment.l(c), c.forEach(E);
    } else
      u.fragment && u.fragment.c();
    t.intro && L(e.$$.fragment), ge(e, t.target, t.anchor), ze();
  }
  Dr(l);
}
class Ne {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Es(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Es(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    _e(this, 1), this.$destroy = ne;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Ye(n))
      return ne;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Mp(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Zp = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Zp);
var gf = typeof global == "object" && global && global.Object === Object && global, Vp = typeof self == "object" && self && self.Object === Object && self, nt = gf || Vp || Function("return this")(), at = nt.Symbol, _f = Object.prototype, Qp = _f.hasOwnProperty, xp = _f.toString, Fr = at ? at.toStringTag : void 0;
function eh(e) {
  var t = Qp.call(e, Fr), n = e[Fr];
  try {
    e[Fr] = void 0;
    var r = !0;
  } catch {
  }
  var i = xp.call(e);
  return r && (t ? e[Fr] = n : delete e[Fr]), i;
}
var th = Object.prototype, nh = th.toString;
function rh(e) {
  return nh.call(e);
}
var ih = "[object Null]", sh = "[object Undefined]", Ua = at ? at.toStringTag : void 0;
function ct(e) {
  return e == null ? e === void 0 ? sh : ih : Ua && Ua in Object(e) ? eh(e) : rh(e);
}
function Ge(e) {
  return e != null && typeof e == "object";
}
var oh = "[object Symbol]";
function Et(e) {
  return typeof e == "symbol" || Ge(e) && ct(e) == oh;
}
var ah = NaN;
function Ba(e) {
  return typeof e == "number" ? e : Et(e) ? ah : +e;
}
function De(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var oe = Array.isArray, lh = 1 / 0, za = at ? at.prototype : void 0, qa = za ? za.toString : void 0;
function kt(e) {
  if (typeof e == "string")
    return e;
  if (oe(e))
    return De(e, kt) + "";
  if (Et(e))
    return qa ? qa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -lh ? "-0" : t;
}
function Ki(e, t) {
  return function(n, r) {
    var i;
    if (n === void 0 && r === void 0)
      return t;
    if (n !== void 0 && (i = n), r !== void 0) {
      if (i === void 0)
        return r;
      typeof n == "string" || typeof r == "string" ? (n = kt(n), r = kt(r)) : (n = Ba(n), r = Ba(r)), i = e(n, r);
    }
    return i;
  };
}
var uh = Ki(function(e, t) {
  return e + t;
}, 0);
const fh = uh;
var ch = /\s/;
function vf(e) {
  for (var t = e.length; t-- && ch.test(e.charAt(t)); )
    ;
  return t;
}
var dh = /^\s+/;
function yf(e) {
  return e && e.slice(0, vf(e) + 1).replace(dh, "");
}
function Ue(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ga = NaN, ph = /^[-+]0x[0-9a-f]+$/i, hh = /^0b[01]+$/i, mh = /^0o[0-7]+$/i, gh = parseInt;
function Ct(e) {
  if (typeof e == "number")
    return e;
  if (Et(e))
    return Ga;
  if (Ue(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ue(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = yf(e);
  var n = hh.test(e);
  return n || mh.test(e) ? gh(e.slice(2), n ? 2 : 8) : ph.test(e) ? Ga : +e;
}
var Ha = 1 / 0, _h = 17976931348623157e292;
function ln(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Ct(e), e === Ha || e === -Ha) {
    var t = e < 0 ? -1 : 1;
    return t * _h;
  }
  return e === e ? e : 0;
}
function le(e) {
  var t = ln(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
var vh = "Expected a function";
function yh(e, t) {
  if (typeof t != "function")
    throw new TypeError(vh);
  return e = le(e), function() {
    if (--e < 1)
      return t.apply(this, arguments);
  };
}
function dt(e) {
  return e;
}
var bh = "[object AsyncFunction]", wh = "[object Function]", $h = "[object GeneratorFunction]", Ah = "[object Proxy]";
function un(e) {
  if (!Ue(e))
    return !1;
  var t = ct(e);
  return t == wh || t == $h || t == bh || t == Ah;
}
var Ti = nt["__core-js_shared__"], Ka = function() {
  var e = /[^.]+$/.exec(Ti && Ti.keys && Ti.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Oh(e) {
  return !!Ka && Ka in e;
}
var Rh = Function.prototype, Eh = Rh.toString;
function Xn(e) {
  if (e != null) {
    try {
      return Eh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var kh = /[\\^$.*+?()[\]{}|]/g, Th = /^\[object .+?Constructor\]$/, Sh = Function.prototype, Ph = Object.prototype, Ih = Sh.toString, jh = Ph.hasOwnProperty, Ch = RegExp(
  "^" + Ih.call(jh).replace(kh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bf(e) {
  if (!Ue(e) || Oh(e))
    return !1;
  var t = un(e) ? Ch : Th;
  return t.test(Xn(e));
}
function Lh(e, t) {
  return e == null ? void 0 : e[t];
}
function Zn(e, t) {
  var n = Lh(e, t);
  return bf(n) ? n : void 0;
}
var Gr = Zn(nt, "WeakMap"), Ci = Gr && new Gr(), wf = Ci ? function(e, t) {
  return Ci.set(e, t), e;
} : dt, Ya = Object.create, Ar = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Ue(t))
      return {};
    if (Ya)
      return Ya(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Hr(e) {
  return function() {
    var t = arguments;
    switch (t.length) {
      case 0:
        return new e();
      case 1:
        return new e(t[0]);
      case 2:
        return new e(t[0], t[1]);
      case 3:
        return new e(t[0], t[1], t[2]);
      case 4:
        return new e(t[0], t[1], t[2], t[3]);
      case 5:
        return new e(t[0], t[1], t[2], t[3], t[4]);
      case 6:
        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
      case 7:
        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
    }
    var n = Ar(e.prototype), r = e.apply(n, t);
    return Ue(r) ? r : n;
  };
}
var Mh = 1;
function Nh(e, t, n) {
  var r = t & Mh, i = Hr(e);
  function o() {
    var s = this && this !== nt && this instanceof o ? i : e;
    return s.apply(r ? n : this, arguments);
  }
  return o;
}
function Tt(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Fh = Math.max;
function $f(e, t, n, r) {
  for (var i = -1, o = e.length, s = n.length, a = -1, l = t.length, u = Fh(o - s, 0), f = Array(l + u), c = !r; ++a < l; )
    f[a] = t[a];
  for (; ++i < s; )
    (c || i < o) && (f[n[i]] = e[i]);
  for (; u--; )
    f[a++] = e[i++];
  return f;
}
var Wh = Math.max;
function Af(e, t, n, r) {
  for (var i = -1, o = e.length, s = -1, a = n.length, l = -1, u = t.length, f = Wh(o - a, 0), c = Array(f + u), d = !r; ++i < f; )
    c[i] = e[i];
  for (var g = i; ++l < u; )
    c[g + l] = t[l];
  for (; ++s < a; )
    (d || i < o) && (c[g + n[s]] = e[i++]);
  return c;
}
function Dh(e, t) {
  for (var n = e.length, r = 0; n--; )
    e[n] === t && ++r;
  return r;
}
function Yi() {
}
var Uh = 4294967295;
function me(e) {
  this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Uh, this.__views__ = [];
}
me.prototype = Ar(Yi.prototype);
me.prototype.constructor = me;
function mo() {
}
var go = Ci ? function(e) {
  return Ci.get(e);
} : mo, vr = {}, Bh = Object.prototype, zh = Bh.hasOwnProperty;
function Si(e) {
  for (var t = e.name + "", n = vr[t], r = zh.call(vr, t) ? n.length : 0; r--; ) {
    var i = n[r], o = i.func;
    if (o == null || o == e)
      return i.name;
  }
  return t;
}
function Mt(e, t) {
  this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0;
}
Mt.prototype = Ar(Yi.prototype);
Mt.prototype.constructor = Mt;
function vt(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
function Of(e) {
  if (e instanceof me)
    return e.clone();
  var t = new Mt(e.__wrapped__, e.__chain__);
  return t.__actions__ = vt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
}
var qh = Object.prototype, Gh = qh.hasOwnProperty;
function p(e) {
  if (Ge(e) && !oe(e) && !(e instanceof me)) {
    if (e instanceof Mt)
      return e;
    if (Gh.call(e, "__wrapped__"))
      return Of(e);
  }
  return new Mt(e);
}
p.prototype = Yi.prototype;
p.prototype.constructor = p;
function Ys(e) {
  var t = Si(e), n = p[t];
  if (typeof n != "function" || !(t in me.prototype))
    return !1;
  if (e === n)
    return !0;
  var r = go(n);
  return !!r && e === r[0];
}
var Hh = 800, Kh = 16, Yh = Date.now;
function Rf(e) {
  var t = 0, n = 0;
  return function() {
    var r = Yh(), i = Kh - (r - n);
    if (n = r, i > 0) {
      if (++t >= Hh)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Ef = Rf(wf), Jh = /\{\n\/\* \[wrapped with (.+)\] \*/, Xh = /,? & /;
function Zh(e) {
  var t = e.match(Jh);
  return t ? t[1].split(Xh) : [];
}
var Vh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function Qh(e, t) {
  var n = t.length;
  if (!n)
    return e;
  var r = n - 1;
  return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(Vh, `{
/* [wrapped with ` + t + `] */
`);
}
function _o(e) {
  return function() {
    return e;
  };
}
var Li = function() {
  try {
    var e = Zn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), xh = Li ? function(e, t) {
  return Li(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: _o(t),
    writable: !0
  });
} : dt;
const em = xh;
var vo = Rf(em);
function Wt(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function Ji(e, t, n, r) {
  for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
function kf(e) {
  return e !== e;
}
function tm(e, t, n) {
  for (var r = n - 1, i = e.length; ++r < i; )
    if (e[r] === t)
      return r;
  return -1;
}
function Or(e, t, n) {
  return t === t ? tm(e, t, n) : Ji(e, kf, n);
}
function Xi(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Or(e, t, 0) > -1;
}
var nm = 1, rm = 2, im = 8, sm = 16, om = 32, am = 64, lm = 128, um = 256, fm = 512, cm = [
  ["ary", lm],
  ["bind", nm],
  ["bindKey", rm],
  ["curry", im],
  ["curryRight", sm],
  ["flip", fm],
  ["partial", om],
  ["partialRight", am],
  ["rearg", um]
];
function dm(e, t) {
  return Wt(cm, function(n) {
    var r = "_." + n[0];
    t & n[1] && !Xi(e, r) && e.push(r);
  }), e.sort();
}
function Tf(e, t, n) {
  var r = t + "";
  return vo(e, Qh(r, dm(Zh(r), n)));
}
var pm = 1, hm = 2, mm = 4, gm = 8, Ja = 32, Xa = 64;
function Sf(e, t, n, r, i, o, s, a, l, u) {
  var f = t & gm, c = f ? s : void 0, d = f ? void 0 : s, g = f ? o : void 0, m = f ? void 0 : o;
  t |= f ? Ja : Xa, t &= ~(f ? Xa : Ja), t & mm || (t &= ~(pm | hm));
  var _ = [
    e,
    t,
    i,
    g,
    c,
    m,
    d,
    a,
    l,
    u
  ], b = n.apply(void 0, _);
  return Ys(e) && Ef(b, _), b.placeholder = r, Tf(b, e, t);
}
function Rr(e) {
  var t = e;
  return t.placeholder;
}
var _m = 9007199254740991, vm = /^(?:0|[1-9]\d*)$/;
function fn(e, t) {
  var n = typeof e;
  return t = t ?? _m, !!t && (n == "number" || n != "symbol" && vm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ym = Math.min;
function bm(e, t) {
  for (var n = e.length, r = ym(t.length, n), i = vt(e); r--; ) {
    var o = t[r];
    e[r] = fn(o, n) ? i[o] : void 0;
  }
  return e;
}
var Za = "__lodash_placeholder__";
function En(e, t) {
  for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
    var s = e[n];
    (s === t || s === Za) && (e[n] = Za, o[i++] = n);
  }
  return o;
}
var wm = 1, $m = 2, Am = 8, Om = 16, Rm = 128, Em = 512;
function Zi(e, t, n, r, i, o, s, a, l, u) {
  var f = t & Rm, c = t & wm, d = t & $m, g = t & (Am | Om), m = t & Em, _ = d ? void 0 : Hr(e);
  function b() {
    for (var v = arguments.length, A = Array(v), F = v; F--; )
      A[F] = arguments[F];
    if (g)
      var G = Rr(b), P = Dh(A, G);
    if (r && (A = $f(A, r, i, g)), o && (A = Af(A, o, s, g)), v -= P, g && v < u) {
      var N = En(A, G);
      return Sf(
        e,
        t,
        Zi,
        b.placeholder,
        n,
        A,
        N,
        a,
        l,
        u - v
      );
    }
    var U = c ? n : this, K = d ? U[e] : e;
    return v = A.length, a ? A = bm(A, a) : m && v > 1 && A.reverse(), f && l < v && (A.length = l), this && this !== nt && this instanceof b && (K = _ || Hr(K)), K.apply(U, A);
  }
  return b;
}
function km(e, t, n) {
  var r = Hr(e);
  function i() {
    for (var o = arguments.length, s = Array(o), a = o, l = Rr(i); a--; )
      s[a] = arguments[a];
    var u = o < 3 && s[0] !== l && s[o - 1] !== l ? [] : En(s, l);
    if (o -= u.length, o < n)
      return Sf(
        e,
        t,
        Zi,
        i.placeholder,
        void 0,
        s,
        u,
        void 0,
        void 0,
        n - o
      );
    var f = this && this !== nt && this instanceof i ? r : e;
    return Tt(f, this, s);
  }
  return i;
}
var Tm = 1;
function Sm(e, t, n, r) {
  var i = t & Tm, o = Hr(e);
  function s() {
    for (var a = -1, l = arguments.length, u = -1, f = r.length, c = Array(f + l), d = this && this !== nt && this instanceof s ? o : e; ++u < f; )
      c[u] = r[u];
    for (; l--; )
      c[u++] = arguments[++a];
    return Tt(d, i ? n : this, c);
  }
  return s;
}
var Va = "__lodash_placeholder__", Ts = 1, Pm = 2, Im = 4, Qa = 8, Wr = 128, xa = 256, jm = Math.min;
function Cm(e, t) {
  var n = e[1], r = t[1], i = n | r, o = i < (Ts | Pm | Wr), s = r == Wr && n == Qa || r == Wr && n == xa && e[7].length <= t[8] || r == (Wr | xa) && t[7].length <= t[8] && n == Qa;
  if (!(o || s))
    return e;
  r & Ts && (e[2] = t[2], i |= n & Ts ? 0 : Im);
  var a = t[3];
  if (a) {
    var l = e[3];
    e[3] = l ? $f(l, a, t[4]) : a, e[4] = l ? En(e[3], Va) : t[4];
  }
  return a = t[5], a && (l = e[5], e[5] = l ? Af(l, a, t[6]) : a, e[6] = l ? En(e[5], Va) : t[6]), a = t[7], a && (e[7] = a), r & Wr && (e[8] = e[8] == null ? t[8] : jm(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = i, e;
}
var Lm = "Expected a function", el = 1, Mm = 2, Ss = 8, Ps = 16, Is = 32, tl = 64, nl = Math.max;
function cn(e, t, n, r, i, o, s, a) {
  var l = t & Mm;
  if (!l && typeof e != "function")
    throw new TypeError(Lm);
  var u = r ? r.length : 0;
  if (u || (t &= ~(Is | tl), r = i = void 0), s = s === void 0 ? s : nl(le(s), 0), a = a === void 0 ? a : le(a), u -= i ? i.length : 0, t & tl) {
    var f = r, c = i;
    r = i = void 0;
  }
  var d = l ? void 0 : go(e), g = [
    e,
    t,
    n,
    r,
    i,
    f,
    c,
    o,
    s,
    a
  ];
  if (d && Cm(g, d), e = g[0], t = g[1], n = g[2], r = g[3], i = g[4], a = g[9] = g[9] === void 0 ? l ? 0 : e.length : nl(g[9] - u, 0), !a && t & (Ss | Ps) && (t &= ~(Ss | Ps)), !t || t == el)
    var m = Nh(e, t, n);
  else
    t == Ss || t == Ps ? m = km(e, t, a) : (t == Is || t == (el | Is)) && !i.length ? m = Sm(e, t, n, r) : m = Zi.apply(void 0, g);
  var _ = d ? wf : Ef;
  return Tf(_(m, g), e, t);
}
var Nm = 128;
function Pf(e, t, n) {
  return t = n ? void 0 : t, t = e && t == null ? e.length : t, cn(e, Nm, void 0, void 0, void 0, void 0, t);
}
function dn(e, t, n) {
  t == "__proto__" && Li ? Li(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Gt(e, t) {
  return e === t || e !== e && t !== t;
}
var Fm = Object.prototype, Wm = Fm.hasOwnProperty;
function ti(e, t, n) {
  var r = e[t];
  (!(Wm.call(e, t) && Gt(r, n)) || n === void 0 && !(t in e)) && dn(e, t, n);
}
function Vt(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var a = t[o], l = r ? r(n[a], e[a], a, n, e) : void 0;
    l === void 0 && (l = e[a]), i ? dn(n, a, l) : ti(n, a, l);
  }
  return n;
}
var rl = Math.max;
function If(e, t, n) {
  return t = rl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, i = -1, o = rl(r.length - t, 0), s = Array(o); ++i < o; )
      s[i] = r[t + i];
    i = -1;
    for (var a = Array(t + 1); ++i < t; )
      a[i] = r[i];
    return a[t] = n(s), Tt(e, this, a);
  };
}
function ce(e, t) {
  return vo(If(e, t, dt), e + "");
}
var Dm = 9007199254740991;
function Vi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Dm;
}
function wt(e) {
  return e != null && Vi(e.length) && !un(e);
}
function ft(e, t, n) {
  if (!Ue(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? wt(n) && fn(t, n.length) : r == "string" && t in n) ? Gt(n[t], e) : !1;
}
function Er(e) {
  return ce(function(t, n) {
    var r = -1, i = n.length, o = i > 1 ? n[i - 1] : void 0, s = i > 2 ? n[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (i--, o) : void 0, s && ft(n[0], n[1], s) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++r < i; ) {
      var a = n[r];
      a && e(t, a, r, o);
    }
    return t;
  });
}
var Um = Object.prototype;
function ni(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Um;
  return e === n;
}
function yo(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Bm = "[object Arguments]";
function il(e) {
  return Ge(e) && ct(e) == Bm;
}
var jf = Object.prototype, zm = jf.hasOwnProperty, qm = jf.propertyIsEnumerable, Gm = il(/* @__PURE__ */ function() {
  return arguments;
}()) ? il : function(e) {
  return Ge(e) && zm.call(e, "callee") && !qm.call(e, "callee");
};
const Hn = Gm;
function bo() {
  return !1;
}
var Cf = typeof exports == "object" && exports && !exports.nodeType && exports, sl = Cf && typeof module == "object" && module && !module.nodeType && module, Hm = sl && sl.exports === Cf, ol = Hm ? nt.Buffer : void 0, Km = ol ? ol.isBuffer : void 0, Ym = Km || bo;
const kn = Ym;
var Jm = "[object Arguments]", Xm = "[object Array]", Zm = "[object Boolean]", Vm = "[object Date]", Qm = "[object Error]", xm = "[object Function]", e1 = "[object Map]", t1 = "[object Number]", n1 = "[object Object]", r1 = "[object RegExp]", i1 = "[object Set]", s1 = "[object String]", o1 = "[object WeakMap]", a1 = "[object ArrayBuffer]", l1 = "[object DataView]", u1 = "[object Float32Array]", f1 = "[object Float64Array]", c1 = "[object Int8Array]", d1 = "[object Int16Array]", p1 = "[object Int32Array]", h1 = "[object Uint8Array]", m1 = "[object Uint8ClampedArray]", g1 = "[object Uint16Array]", _1 = "[object Uint32Array]", Le = {};
Le[u1] = Le[f1] = Le[c1] = Le[d1] = Le[p1] = Le[h1] = Le[m1] = Le[g1] = Le[_1] = !0;
Le[Jm] = Le[Xm] = Le[a1] = Le[Zm] = Le[l1] = Le[Vm] = Le[Qm] = Le[xm] = Le[e1] = Le[t1] = Le[n1] = Le[r1] = Le[i1] = Le[s1] = Le[o1] = !1;
function v1(e) {
  return Ge(e) && Vi(e.length) && !!Le[ct(e)];
}
function St(e) {
  return function(t) {
    return e(t);
  };
}
var Lf = typeof exports == "object" && exports && !exports.nodeType && exports, Ur = Lf && typeof module == "object" && module && !module.nodeType && module, y1 = Ur && Ur.exports === Lf, js = y1 && gf.process, Nt = function() {
  try {
    var e = Ur && Ur.require && Ur.require("util").types;
    return e || js && js.binding && js.binding("util");
  } catch {
  }
}(), al = Nt && Nt.isTypedArray, b1 = al ? St(al) : v1;
const kr = b1;
var w1 = Object.prototype, $1 = w1.hasOwnProperty;
function Mf(e, t) {
  var n = oe(e), r = !n && Hn(e), i = !n && !r && kn(e), o = !n && !r && !i && kr(e), s = n || r || i || o, a = s ? yo(e.length, String) : [], l = a.length;
  for (var u in e)
    (t || $1.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    fn(u, l))) && a.push(u);
  return a;
}
function Nf(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var A1 = Nf(Object.keys, Object), O1 = Object.prototype, R1 = O1.hasOwnProperty;
function wo(e) {
  if (!ni(e))
    return A1(e);
  var t = [];
  for (var n in Object(e))
    R1.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function xe(e) {
  return wt(e) ? Mf(e) : wo(e);
}
var E1 = Object.prototype, k1 = E1.hasOwnProperty, T1 = Er(function(e, t) {
  if (ni(t) || wt(t)) {
    Vt(t, xe(t), e);
    return;
  }
  for (var n in t)
    k1.call(t, n) && ti(e, n, t[n]);
});
const S1 = T1;
function P1(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var I1 = Object.prototype, j1 = I1.hasOwnProperty;
function C1(e) {
  if (!Ue(e))
    return P1(e);
  var t = ni(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !j1.call(e, r)) || n.push(r);
  return n;
}
function $t(e) {
  return wt(e) ? Mf(e, !0) : C1(e);
}
var L1 = Er(function(e, t) {
  Vt(t, $t(t), e);
});
const ll = L1;
var M1 = Er(function(e, t, n, r) {
  Vt(t, $t(t), e, r);
});
const Mi = M1;
var N1 = Er(function(e, t, n, r) {
  Vt(t, xe(t), e, r);
});
const F1 = N1;
var W1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, D1 = /^\w*$/;
function $o(e, t) {
  if (oe(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Et(e) ? !0 : D1.test(e) || !W1.test(e) || t != null && e in Object(t);
}
var Kr = Zn(Object, "create");
function U1() {
  this.__data__ = Kr ? Kr(null) : {}, this.size = 0;
}
function B1(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var z1 = "__lodash_hash_undefined__", q1 = Object.prototype, G1 = q1.hasOwnProperty;
function H1(e) {
  var t = this.__data__;
  if (Kr) {
    var n = t[e];
    return n === z1 ? void 0 : n;
  }
  return G1.call(t, e) ? t[e] : void 0;
}
var K1 = Object.prototype, Y1 = K1.hasOwnProperty;
function J1(e) {
  var t = this.__data__;
  return Kr ? t[e] !== void 0 : Y1.call(t, e);
}
var X1 = "__lodash_hash_undefined__";
function Z1(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Kr && t === void 0 ? X1 : t, this;
}
function Kn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Kn.prototype.clear = U1;
Kn.prototype.delete = B1;
Kn.prototype.get = H1;
Kn.prototype.has = J1;
Kn.prototype.set = Z1;
function V1() {
  this.__data__ = [], this.size = 0;
}
function Qi(e, t) {
  for (var n = e.length; n--; )
    if (Gt(e[n][0], t))
      return n;
  return -1;
}
var Q1 = Array.prototype, x1 = Q1.splice;
function eg(e) {
  var t = this.__data__, n = Qi(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : x1.call(t, n, 1), --this.size, !0;
}
function tg(e) {
  var t = this.__data__, n = Qi(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ng(e) {
  return Qi(this.__data__, e) > -1;
}
function rg(e, t) {
  var n = this.__data__, r = Qi(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
pn.prototype.clear = V1;
pn.prototype.delete = eg;
pn.prototype.get = tg;
pn.prototype.has = ng;
pn.prototype.set = rg;
var Yr = Zn(nt, "Map");
function ig() {
  this.size = 0, this.__data__ = {
    hash: new Kn(),
    map: new (Yr || pn)(),
    string: new Kn()
  };
}
function sg(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function xi(e, t) {
  var n = e.__data__;
  return sg(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function og(e) {
  var t = xi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ag(e) {
  return xi(this, e).get(e);
}
function lg(e) {
  return xi(this, e).has(e);
}
function ug(e, t) {
  var n = xi(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function hn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
hn.prototype.clear = ig;
hn.prototype.delete = og;
hn.prototype.get = ag;
hn.prototype.has = lg;
hn.prototype.set = ug;
var fg = "Expected a function";
function es(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(fg);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var s = e.apply(this, r);
    return n.cache = o.set(i, s) || o, s;
  };
  return n.cache = new (es.Cache || hn)(), n;
}
es.Cache = hn;
var cg = 500;
function dg(e) {
  var t = es(e, function(r) {
    return n.size === cg && n.clear(), r;
  }), n = t.cache;
  return t;
}
var pg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hg = /\\(\\)?/g, Ff = dg(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(pg, function(n, r, i, o) {
    t.push(i ? o.replace(hg, "$1") : r || n);
  }), t;
});
function Re(e) {
  return e == null ? "" : kt(e);
}
function Sn(e, t) {
  return oe(e) ? e : $o(e, t) ? [e] : Ff(Re(e));
}
var mg = 1 / 0;
function Qt(e) {
  if (typeof e == "string" || Et(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -mg ? "-0" : t;
}
function Vn(e, t) {
  t = Sn(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Qt(t[n++])];
  return n && n == r ? e : void 0;
}
function wr(e, t, n) {
  var r = e == null ? void 0 : Vn(e, t);
  return r === void 0 ? n : r;
}
function Ao(e, t) {
  for (var n = -1, r = t.length, i = Array(r), o = e == null; ++n < r; )
    i[n] = o ? void 0 : wr(e, t[n]);
  return i;
}
function Pn(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
var ul = at ? at.isConcatSpreadable : void 0;
function gg(e) {
  return oe(e) || Hn(e) || !!(ul && e && e[ul]);
}
function st(e, t, n, r, i) {
  var o = -1, s = e.length;
  for (n || (n = gg), i || (i = []); ++o < s; ) {
    var a = e[o];
    t > 0 && n(a) ? t > 1 ? st(a, t - 1, n, r, i) : Pn(i, a) : r || (i[i.length] = a);
  }
  return i;
}
function Wf(e) {
  var t = e == null ? 0 : e.length;
  return t ? st(e, 1) : [];
}
function mn(e) {
  return vo(If(e, void 0, Wf), e + "");
}
var _g = mn(Ao);
const vg = _g;
var ts = Nf(Object.getPrototypeOf, Object), yg = "[object Object]", bg = Function.prototype, wg = Object.prototype, Df = bg.toString, $g = wg.hasOwnProperty, Ag = Df.call(Object);
function ri(e) {
  if (!Ge(e) || ct(e) != yg)
    return !1;
  var t = ts(e);
  if (t === null)
    return !0;
  var n = $g.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Df.call(n) == Ag;
}
var Og = "[object DOMException]", Rg = "[object Error]";
function Oo(e) {
  if (!Ge(e))
    return !1;
  var t = ct(e);
  return t == Rg || t == Og || typeof e.message == "string" && typeof e.name == "string" && !ri(e);
}
var Eg = ce(function(e, t) {
  try {
    return Tt(e, void 0, t);
  } catch (n) {
    return Oo(n) ? n : new Error(n);
  }
});
const Uf = Eg;
var kg = "Expected a function";
function Bf(e, t) {
  var n;
  if (typeof t != "function")
    throw new TypeError(kg);
  return e = le(e), function() {
    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n;
  };
}
var Tg = 1, Sg = 32, Ro = ce(function(e, t, n) {
  var r = Tg;
  if (n.length) {
    var i = En(n, Rr(Ro));
    r |= Sg;
  }
  return cn(e, r, t, n, i);
});
Ro.placeholder = {};
const zf = Ro;
var Pg = mn(function(e, t) {
  return Wt(t, function(n) {
    n = Qt(n), dn(e, n, zf(e[n], e));
  }), e;
});
const Ig = Pg;
var jg = 1, Cg = 2, Lg = 32, Eo = ce(function(e, t, n) {
  var r = jg | Cg;
  if (n.length) {
    var i = En(n, Rr(Eo));
    r |= Lg;
  }
  return cn(t, r, e, n, i);
});
Eo.placeholder = {};
const Mg = Eo;
function Ft(e, t, n) {
  var r = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = e[r + t];
  return o;
}
function In(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : Ft(e, t, n);
}
var Ng = "\\ud800-\\udfff", Fg = "\\u0300-\\u036f", Wg = "\\ufe20-\\ufe2f", Dg = "\\u20d0-\\u20ff", Ug = Fg + Wg + Dg, Bg = "\\ufe0e\\ufe0f", zg = "\\u200d", qg = RegExp("[" + zg + Ng + Ug + Bg + "]");
function Tr(e) {
  return qg.test(e);
}
function Gg(e) {
  return e.split("");
}
var qf = "\\ud800-\\udfff", Hg = "\\u0300-\\u036f", Kg = "\\ufe20-\\ufe2f", Yg = "\\u20d0-\\u20ff", Jg = Hg + Kg + Yg, Xg = "\\ufe0e\\ufe0f", Zg = "[" + qf + "]", Js = "[" + Jg + "]", Xs = "\\ud83c[\\udffb-\\udfff]", Vg = "(?:" + Js + "|" + Xs + ")", Gf = "[^" + qf + "]", Hf = "(?:\\ud83c[\\udde6-\\uddff]){2}", Kf = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qg = "\\u200d", Yf = Vg + "?", Jf = "[" + Xg + "]?", xg = "(?:" + Qg + "(?:" + [Gf, Hf, Kf].join("|") + ")" + Jf + Yf + ")*", e0 = Jf + Yf + xg, t0 = "(?:" + [Gf + Js + "?", Js, Hf, Kf, Zg].join("|") + ")", n0 = RegExp(Xs + "(?=" + Xs + ")|" + t0 + e0, "g");
function r0(e) {
  return e.match(n0) || [];
}
function qt(e) {
  return Tr(e) ? r0(e) : Gg(e);
}
function Xf(e) {
  return function(t) {
    t = Re(t);
    var n = Tr(t) ? qt(t) : void 0, r = n ? n[0] : t.charAt(0), i = n ? In(n, 1).join("") : t.slice(1);
    return r[e]() + i;
  };
}
var i0 = Xf("toUpperCase");
const ko = i0;
function Zf(e) {
  return ko(Re(e).toLowerCase());
}
function To(e, t, n, r) {
  var i = -1, o = e == null ? 0 : e.length;
  for (r && o && (n = e[++i]); ++i < o; )
    n = t(n, e[i], i, e);
  return n;
}
function So(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var s0 = {
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
}, o0 = So(s0);
const a0 = o0;
var l0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, u0 = "\\u0300-\\u036f", f0 = "\\ufe20-\\ufe2f", c0 = "\\u20d0-\\u20ff", d0 = u0 + f0 + c0, p0 = "[" + d0 + "]", h0 = RegExp(p0, "g");
function Vf(e) {
  return e = Re(e), e && e.replace(l0, a0).replace(h0, "");
}
var m0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function g0(e) {
  return e.match(m0) || [];
}
var _0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function v0(e) {
  return _0.test(e);
}
var Qf = "\\ud800-\\udfff", y0 = "\\u0300-\\u036f", b0 = "\\ufe20-\\ufe2f", w0 = "\\u20d0-\\u20ff", $0 = y0 + b0 + w0, xf = "\\u2700-\\u27bf", ec = "a-z\\xdf-\\xf6\\xf8-\\xff", A0 = "\\xac\\xb1\\xd7\\xf7", O0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", R0 = "\\u2000-\\u206f", E0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", tc = "A-Z\\xc0-\\xd6\\xd8-\\xde", k0 = "\\ufe0e\\ufe0f", nc = A0 + O0 + R0 + E0, rc = "['’]", fl = "[" + nc + "]", T0 = "[" + $0 + "]", ic = "\\d+", S0 = "[" + xf + "]", sc = "[" + ec + "]", oc = "[^" + Qf + nc + ic + xf + ec + tc + "]", P0 = "\\ud83c[\\udffb-\\udfff]", I0 = "(?:" + T0 + "|" + P0 + ")", j0 = "[^" + Qf + "]", ac = "(?:\\ud83c[\\udde6-\\uddff]){2}", lc = "[\\ud800-\\udbff][\\udc00-\\udfff]", hr = "[" + tc + "]", C0 = "\\u200d", cl = "(?:" + sc + "|" + oc + ")", L0 = "(?:" + hr + "|" + oc + ")", dl = "(?:" + rc + "(?:d|ll|m|re|s|t|ve))?", pl = "(?:" + rc + "(?:D|LL|M|RE|S|T|VE))?", uc = I0 + "?", fc = "[" + k0 + "]?", M0 = "(?:" + C0 + "(?:" + [j0, ac, lc].join("|") + ")" + fc + uc + ")*", N0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", F0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", W0 = fc + uc + M0, D0 = "(?:" + [S0, ac, lc].join("|") + ")" + W0, U0 = RegExp([
  hr + "?" + sc + "+" + dl + "(?=" + [fl, hr, "$"].join("|") + ")",
  L0 + "+" + pl + "(?=" + [fl, hr + cl, "$"].join("|") + ")",
  hr + "?" + cl + "+" + dl,
  hr + "+" + pl,
  F0,
  N0,
  ic,
  D0
].join("|"), "g");
function B0(e) {
  return e.match(U0) || [];
}
function cc(e, t, n) {
  return e = Re(e), t = n ? void 0 : t, t === void 0 ? v0(e) ? B0(e) : g0(e) : e.match(t) || [];
}
var z0 = "['’]", q0 = RegExp(z0, "g");
function Sr(e) {
  return function(t) {
    return To(cc(Vf(t).replace(q0, "")), e, "");
  };
}
var G0 = Sr(function(e, t, n) {
  return t = t.toLowerCase(), e + (n ? Zf(t) : t);
});
const H0 = G0;
function K0() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return oe(e) ? e : [e];
}
var Y0 = nt.isFinite, J0 = Math.min;
function Po(e) {
  var t = Math[e];
  return function(n, r) {
    if (n = Ct(n), r = r == null ? 0 : J0(le(r), 292), r && Y0(n)) {
      var i = (Re(n) + "e").split("e"), o = t(i[0] + "e" + (+i[1] + r));
      return i = (Re(o) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
    }
    return t(n);
  };
}
var X0 = Po("ceil");
const Z0 = X0;
function dc(e) {
  var t = p(e);
  return t.__chain__ = !0, t;
}
var V0 = Math.ceil, Q0 = Math.max;
function x0(e, t, n) {
  (n ? ft(e, t, n) : t === void 0) ? t = 1 : t = Q0(le(t), 0);
  var r = e == null ? 0 : e.length;
  if (!r || t < 1)
    return [];
  for (var i = 0, o = 0, s = Array(V0(r / t)); i < r; )
    s[o++] = Ft(e, i, i += t);
  return s;
}
function Qn(e, t, n) {
  return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e;
}
function e_(e, t, n) {
  return n === void 0 && (n = t, t = void 0), n !== void 0 && (n = Ct(n), n = n === n ? n : 0), t !== void 0 && (t = Ct(t), t = t === t ? t : 0), Qn(Ct(e), t, n);
}
function t_() {
  this.__data__ = new pn(), this.size = 0;
}
function n_(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function r_(e) {
  return this.__data__.get(e);
}
function i_(e) {
  return this.__data__.has(e);
}
var s_ = 200;
function o_(e, t) {
  var n = this.__data__;
  if (n instanceof pn) {
    var r = n.__data__;
    if (!Yr || r.length < s_ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new hn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Bt(e) {
  var t = this.__data__ = new pn(e);
  this.size = t.size;
}
Bt.prototype.clear = t_;
Bt.prototype.delete = n_;
Bt.prototype.get = r_;
Bt.prototype.has = i_;
Bt.prototype.set = o_;
function pc(e, t) {
  return e && Vt(t, xe(t), e);
}
function a_(e, t) {
  return e && Vt(t, $t(t), e);
}
var hc = typeof exports == "object" && exports && !exports.nodeType && exports, hl = hc && typeof module == "object" && module && !module.nodeType && module, l_ = hl && hl.exports === hc, ml = l_ ? nt.Buffer : void 0, gl = ml ? ml.allocUnsafe : void 0;
function mc(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = gl ? gl(n) : new e.constructor(n);
  return e.copy(r), r;
}
function jn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (o[i++] = s);
  }
  return o;
}
function Io() {
  return [];
}
var u_ = Object.prototype, f_ = u_.propertyIsEnumerable, _l = Object.getOwnPropertySymbols, jo = _l ? function(e) {
  return e == null ? [] : (e = Object(e), jn(_l(e), function(t) {
    return f_.call(e, t);
  }));
} : Io;
function c_(e, t) {
  return Vt(e, jo(e), t);
}
var d_ = Object.getOwnPropertySymbols, gc = d_ ? function(e) {
  for (var t = []; e; )
    Pn(t, jo(e)), e = ts(e);
  return t;
} : Io;
function p_(e, t) {
  return Vt(e, gc(e), t);
}
function _c(e, t, n) {
  var r = t(e);
  return oe(e) ? r : Pn(r, n(e));
}
function Zs(e) {
  return _c(e, xe, jo);
}
function Co(e) {
  return _c(e, $t, gc);
}
var Vs = Zn(nt, "DataView"), Qs = Zn(nt, "Promise"), yr = Zn(nt, "Set"), vl = "[object Map]", h_ = "[object Object]", yl = "[object Promise]", bl = "[object Set]", wl = "[object WeakMap]", $l = "[object DataView]", m_ = Xn(Vs), g_ = Xn(Yr), __ = Xn(Qs), v_ = Xn(yr), y_ = Xn(Gr), Un = ct;
(Vs && Un(new Vs(new ArrayBuffer(1))) != $l || Yr && Un(new Yr()) != vl || Qs && Un(Qs.resolve()) != yl || yr && Un(new yr()) != bl || Gr && Un(new Gr()) != wl) && (Un = function(e) {
  var t = ct(e), n = t == h_ ? e.constructor : void 0, r = n ? Xn(n) : "";
  if (r)
    switch (r) {
      case m_:
        return $l;
      case g_:
        return vl;
      case __:
        return yl;
      case v_:
        return bl;
      case y_:
        return wl;
    }
  return t;
});
const Zt = Un;
var b_ = Object.prototype, w_ = b_.hasOwnProperty;
function $_(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && w_.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Ni = nt.Uint8Array;
function Lo(e) {
  var t = new e.constructor(e.byteLength);
  return new Ni(t).set(new Ni(e)), t;
}
function A_(e, t) {
  var n = t ? Lo(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var O_ = /\w*$/;
function R_(e) {
  var t = new e.constructor(e.source, O_.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Al = at ? at.prototype : void 0, Ol = Al ? Al.valueOf : void 0;
function E_(e) {
  return Ol ? Object(Ol.call(e)) : {};
}
function vc(e, t) {
  var n = t ? Lo(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var k_ = "[object Boolean]", T_ = "[object Date]", S_ = "[object Map]", P_ = "[object Number]", I_ = "[object RegExp]", j_ = "[object Set]", C_ = "[object String]", L_ = "[object Symbol]", M_ = "[object ArrayBuffer]", N_ = "[object DataView]", F_ = "[object Float32Array]", W_ = "[object Float64Array]", D_ = "[object Int8Array]", U_ = "[object Int16Array]", B_ = "[object Int32Array]", z_ = "[object Uint8Array]", q_ = "[object Uint8ClampedArray]", G_ = "[object Uint16Array]", H_ = "[object Uint32Array]";
function K_(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case M_:
      return Lo(e);
    case k_:
    case T_:
      return new r(+e);
    case N_:
      return A_(e, n);
    case F_:
    case W_:
    case D_:
    case U_:
    case B_:
    case z_:
    case q_:
    case G_:
    case H_:
      return vc(e, n);
    case S_:
      return new r();
    case P_:
    case C_:
      return new r(e);
    case I_:
      return R_(e);
    case j_:
      return new r();
    case L_:
      return E_(e);
  }
}
function yc(e) {
  return typeof e.constructor == "function" && !ni(e) ? Ar(ts(e)) : {};
}
var Y_ = "[object Map]";
function J_(e) {
  return Ge(e) && Zt(e) == Y_;
}
var Rl = Nt && Nt.isMap, X_ = Rl ? St(Rl) : J_;
const bc = X_;
var Z_ = "[object Set]";
function V_(e) {
  return Ge(e) && Zt(e) == Z_;
}
var El = Nt && Nt.isSet, Q_ = El ? St(El) : V_;
const wc = Q_;
var x_ = 1, ev = 2, tv = 4, $c = "[object Arguments]", nv = "[object Array]", rv = "[object Boolean]", iv = "[object Date]", sv = "[object Error]", Ac = "[object Function]", ov = "[object GeneratorFunction]", av = "[object Map]", lv = "[object Number]", Oc = "[object Object]", uv = "[object RegExp]", fv = "[object Set]", cv = "[object String]", dv = "[object Symbol]", pv = "[object WeakMap]", hv = "[object ArrayBuffer]", mv = "[object DataView]", gv = "[object Float32Array]", _v = "[object Float64Array]", vv = "[object Int8Array]", yv = "[object Int16Array]", bv = "[object Int32Array]", wv = "[object Uint8Array]", $v = "[object Uint8ClampedArray]", Av = "[object Uint16Array]", Ov = "[object Uint32Array]", je = {};
je[$c] = je[nv] = je[hv] = je[mv] = je[rv] = je[iv] = je[gv] = je[_v] = je[vv] = je[yv] = je[bv] = je[av] = je[lv] = je[Oc] = je[uv] = je[fv] = je[cv] = je[dv] = je[wv] = je[$v] = je[Av] = je[Ov] = !0;
je[sv] = je[Ac] = je[pv] = !1;
function Lt(e, t, n, r, i, o) {
  var s, a = t & x_, l = t & ev, u = t & tv;
  if (n && (s = i ? n(e, r, i, o) : n(e)), s !== void 0)
    return s;
  if (!Ue(e))
    return e;
  var f = oe(e);
  if (f) {
    if (s = $_(e), !a)
      return vt(e, s);
  } else {
    var c = Zt(e), d = c == Ac || c == ov;
    if (kn(e))
      return mc(e, a);
    if (c == Oc || c == $c || d && !i) {
      if (s = l || d ? {} : yc(e), !a)
        return l ? p_(e, a_(s, e)) : c_(e, pc(s, e));
    } else {
      if (!je[c])
        return i ? e : {};
      s = K_(e, c, a);
    }
  }
  o || (o = new Bt());
  var g = o.get(e);
  if (g)
    return g;
  o.set(e, s), wc(e) ? e.forEach(function(b) {
    s.add(Lt(b, t, n, b, e, o));
  }) : bc(e) && e.forEach(function(b, v) {
    s.set(v, Lt(b, t, n, v, e, o));
  });
  var m = u ? l ? Co : Zs : l ? $t : xe, _ = f ? void 0 : m(e);
  return Wt(_ || e, function(b, v) {
    _ && (v = b, b = e[v]), ti(s, v, Lt(b, t, n, v, e, o));
  }), s;
}
var Rv = 4;
function Ev(e) {
  return Lt(e, Rv);
}
var kv = 1, Tv = 4;
function Sv(e) {
  return Lt(e, kv | Tv);
}
var Pv = 1, Iv = 4;
function jv(e, t) {
  return t = typeof t == "function" ? t : void 0, Lt(e, Pv | Iv, t);
}
var Cv = 4;
function Lv(e, t) {
  return t = typeof t == "function" ? t : void 0, Lt(e, Cv, t);
}
function Mv() {
  return new Mt(this.value(), this.__chain__);
}
function Nv(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n; ) {
    var o = e[t];
    o && (i[r++] = o);
  }
  return i;
}
function Fv() {
  var e = arguments.length;
  if (!e)
    return [];
  for (var t = Array(e - 1), n = arguments[0], r = e; r--; )
    t[r - 1] = arguments[r];
  return Pn(oe(n) ? vt(n) : [n], st(t, 1));
}
var Wv = "__lodash_hash_undefined__";
function Dv(e) {
  return this.__data__.set(e, Wv), this;
}
function Uv(e) {
  return this.__data__.has(e);
}
function Yn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new hn(); ++t < n; )
    this.add(e[t]);
}
Yn.prototype.add = Yn.prototype.push = Dv;
Yn.prototype.has = Uv;
function Mo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Jr(e, t) {
  return e.has(t);
}
var Bv = 1, zv = 2;
function Rc(e, t, n, r, i, o) {
  var s = n & Bv, a = e.length, l = t.length;
  if (a != l && !(s && l > a))
    return !1;
  var u = o.get(e), f = o.get(t);
  if (u && f)
    return u == t && f == e;
  var c = -1, d = !0, g = n & zv ? new Yn() : void 0;
  for (o.set(e, t), o.set(t, e); ++c < a; ) {
    var m = e[c], _ = t[c];
    if (r)
      var b = s ? r(_, m, c, t, e, o) : r(m, _, c, e, t, o);
    if (b !== void 0) {
      if (b)
        continue;
      d = !1;
      break;
    }
    if (g) {
      if (!Mo(t, function(v, A) {
        if (!Jr(g, A) && (m === v || i(m, v, n, r, o)))
          return g.push(A);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === _ || i(m, _, n, r, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), d;
}
function No(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, i) {
    n[++t] = [i, r];
  }), n;
}
function ns(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var qv = 1, Gv = 2, Hv = "[object Boolean]", Kv = "[object Date]", Yv = "[object Error]", Jv = "[object Map]", Xv = "[object Number]", Zv = "[object RegExp]", Vv = "[object Set]", Qv = "[object String]", xv = "[object Symbol]", ey = "[object ArrayBuffer]", ty = "[object DataView]", kl = at ? at.prototype : void 0, Cs = kl ? kl.valueOf : void 0;
function ny(e, t, n, r, i, o, s) {
  switch (n) {
    case ty:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ey:
      return !(e.byteLength != t.byteLength || !o(new Ni(e), new Ni(t)));
    case Hv:
    case Kv:
    case Xv:
      return Gt(+e, +t);
    case Yv:
      return e.name == t.name && e.message == t.message;
    case Zv:
    case Qv:
      return e == t + "";
    case Jv:
      var a = No;
    case Vv:
      var l = r & qv;
      if (a || (a = ns), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= Gv, s.set(e, t);
      var f = Rc(a(e), a(t), r, i, o, s);
      return s.delete(e), f;
    case xv:
      if (Cs)
        return Cs.call(e) == Cs.call(t);
  }
  return !1;
}
var ry = 1, iy = Object.prototype, sy = iy.hasOwnProperty;
function oy(e, t, n, r, i, o) {
  var s = n & ry, a = Zs(e), l = a.length, u = Zs(t), f = u.length;
  if (l != f && !s)
    return !1;
  for (var c = l; c--; ) {
    var d = a[c];
    if (!(s ? d in t : sy.call(t, d)))
      return !1;
  }
  var g = o.get(e), m = o.get(t);
  if (g && m)
    return g == t && m == e;
  var _ = !0;
  o.set(e, t), o.set(t, e);
  for (var b = s; ++c < l; ) {
    d = a[c];
    var v = e[d], A = t[d];
    if (r)
      var F = s ? r(A, v, d, t, e, o) : r(v, A, d, e, t, o);
    if (!(F === void 0 ? v === A || i(v, A, n, r, o) : F)) {
      _ = !1;
      break;
    }
    b || (b = d == "constructor");
  }
  if (_ && !b) {
    var G = e.constructor, P = t.constructor;
    G != P && "constructor" in e && "constructor" in t && !(typeof G == "function" && G instanceof G && typeof P == "function" && P instanceof P) && (_ = !1);
  }
  return o.delete(e), o.delete(t), _;
}
var ay = 1, Tl = "[object Arguments]", Sl = "[object Array]", yi = "[object Object]", ly = Object.prototype, Pl = ly.hasOwnProperty;
function uy(e, t, n, r, i, o) {
  var s = oe(e), a = oe(t), l = s ? Sl : Zt(e), u = a ? Sl : Zt(t);
  l = l == Tl ? yi : l, u = u == Tl ? yi : u;
  var f = l == yi, c = u == yi, d = l == u;
  if (d && kn(e)) {
    if (!kn(t))
      return !1;
    s = !0, f = !1;
  }
  if (d && !f)
    return o || (o = new Bt()), s || kr(e) ? Rc(e, t, n, r, i, o) : ny(e, t, l, n, r, i, o);
  if (!(n & ay)) {
    var g = f && Pl.call(e, "__wrapped__"), m = c && Pl.call(t, "__wrapped__");
    if (g || m) {
      var _ = g ? e.value() : e, b = m ? t.value() : t;
      return o || (o = new Bt()), i(_, b, n, r, o);
    }
  }
  return d ? (o || (o = new Bt()), oy(e, t, n, r, i, o)) : !1;
}
function ii(e, t, n, r, i) {
  return e === t ? !0 : e == null || t == null || !Ge(e) && !Ge(t) ? e !== e && t !== t : uy(e, t, n, r, ii, i);
}
var fy = 1, cy = 2;
function Fo(e, t, n, r) {
  var i = n.length, o = i, s = !r;
  if (e == null)
    return !o;
  for (e = Object(e); i--; ) {
    var a = n[i];
    if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++i < o; ) {
    a = n[i];
    var l = a[0], u = e[l], f = a[1];
    if (s && a[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var c = new Bt();
      if (r)
        var d = r(u, f, l, e, t, c);
      if (!(d === void 0 ? ii(f, u, fy | cy, r, c) : d))
        return !1;
    }
  }
  return !0;
}
function Ec(e) {
  return e === e && !Ue(e);
}
function Wo(e) {
  for (var t = xe(e), n = t.length; n--; ) {
    var r = t[n], i = e[r];
    t[n] = [r, i, Ec(i)];
  }
  return t;
}
function kc(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Tc(e) {
  var t = Wo(e);
  return t.length == 1 && t[0][2] ? kc(t[0][0], t[0][1]) : function(n) {
    return n === e || Fo(n, e, t);
  };
}
function dy(e, t) {
  return e != null && t in Object(e);
}
function Sc(e, t, n) {
  t = Sn(t, e);
  for (var r = -1, i = t.length, o = !1; ++r < i; ) {
    var s = Qt(t[r]);
    if (!(o = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return o || ++r != i ? o : (i = e == null ? 0 : e.length, !!i && Vi(i) && fn(s, i) && (oe(e) || Hn(e)));
}
function Do(e, t) {
  return e != null && Sc(e, t, dy);
}
var py = 1, hy = 2;
function Pc(e, t) {
  return $o(e) && Ec(t) ? kc(Qt(e), t) : function(n) {
    var r = wr(n, e);
    return r === void 0 && r === t ? Do(n, e) : ii(t, r, py | hy);
  };
}
function Uo(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function my(e) {
  return function(t) {
    return Vn(t, e);
  };
}
function Ic(e) {
  return $o(e) ? Uo(Qt(e)) : my(e);
}
function se(e) {
  return typeof e == "function" ? e : e == null ? dt : typeof e == "object" ? oe(e) ? Pc(e[0], e[1]) : Tc(e) : Ic(e);
}
var gy = "Expected a function";
function _y(e) {
  var t = e == null ? 0 : e.length, n = se;
  return e = t ? De(e, function(r) {
    if (typeof r[1] != "function")
      throw new TypeError(gy);
    return [n(r[0]), r[1]];
  }) : [], ce(function(r) {
    for (var i = -1; ++i < t; ) {
      var o = e[i];
      if (Tt(o[0], this, r))
        return Tt(o[1], this, r);
    }
  });
}
function jc(e, t, n) {
  var r = n.length;
  if (e == null)
    return !r;
  for (e = Object(e); r--; ) {
    var i = n[r], o = t[i], s = e[i];
    if (s === void 0 && !(i in e) || !o(s))
      return !1;
  }
  return !0;
}
function vy(e) {
  var t = xe(e);
  return function(n) {
    return jc(n, e, t);
  };
}
var yy = 1;
function by(e) {
  return vy(Lt(e, yy));
}
function wy(e, t) {
  return t == null || jc(e, t, xe(t));
}
function $y(e, t, n, r) {
  for (var i = -1, o = e == null ? 0 : e.length; ++i < o; ) {
    var s = e[i];
    t(r, s, n(s), e);
  }
  return r;
}
function Cc(e) {
  return function(t, n, r) {
    for (var i = -1, o = Object(t), s = r(t), a = s.length; a--; ) {
      var l = s[e ? a : ++i];
      if (n(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var Bo = Cc();
function xt(e, t) {
  return e && Bo(e, t, xe);
}
function Lc(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!wt(n))
      return e(n, r);
    for (var i = n.length, o = t ? i : -1, s = Object(n); (t ? o-- : ++o < i) && r(s[o], o, s) !== !1; )
      ;
    return n;
  };
}
var Cn = Lc(xt);
function Ay(e, t, n, r) {
  return Cn(e, function(i, o, s) {
    t(r, i, n(i), s);
  }), r;
}
function rs(e, t) {
  return function(n, r) {
    var i = oe(n) ? $y : Ay, o = t ? t() : {};
    return i(n, e, se(r), o);
  };
}
var Oy = Object.prototype, Ry = Oy.hasOwnProperty, Ey = rs(function(e, t, n) {
  Ry.call(e, n) ? ++e[n] : dn(e, n, 1);
});
const ky = Ey;
function Ty(e, t) {
  var n = Ar(e);
  return t == null ? n : pc(n, t);
}
var Sy = 8;
function zo(e, t, n) {
  t = n ? void 0 : t;
  var r = cn(e, Sy, void 0, void 0, void 0, void 0, void 0, t);
  return r.placeholder = zo.placeholder, r;
}
zo.placeholder = {};
var Py = 16;
function qo(e, t, n) {
  t = n ? void 0 : t;
  var r = cn(e, Py, void 0, void 0, void 0, void 0, void 0, t);
  return r.placeholder = qo.placeholder, r;
}
qo.placeholder = {};
var Iy = function() {
  return nt.Date.now();
};
const Pi = Iy;
var jy = "Expected a function", Cy = Math.max, Ly = Math.min;
function Mc(e, t, n) {
  var r, i, o, s, a, l, u = 0, f = !1, c = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(jy);
  t = Ct(t) || 0, Ue(n) && (f = !!n.leading, c = "maxWait" in n, o = c ? Cy(Ct(n.maxWait) || 0, t) : o, d = "trailing" in n ? !!n.trailing : d);
  function g(N) {
    var U = r, K = i;
    return r = i = void 0, u = N, s = e.apply(K, U), s;
  }
  function m(N) {
    return u = N, a = setTimeout(v, t), f ? g(N) : s;
  }
  function _(N) {
    var U = N - l, K = N - u, M = t - U;
    return c ? Ly(M, o - K) : M;
  }
  function b(N) {
    var U = N - l, K = N - u;
    return l === void 0 || U >= t || U < 0 || c && K >= o;
  }
  function v() {
    var N = Pi();
    if (b(N))
      return A(N);
    a = setTimeout(v, _(N));
  }
  function A(N) {
    return a = void 0, d && r ? g(N) : (r = i = void 0, s);
  }
  function F() {
    a !== void 0 && clearTimeout(a), u = 0, r = l = i = a = void 0;
  }
  function G() {
    return a === void 0 ? s : A(Pi());
  }
  function P() {
    var N = Pi(), U = b(N);
    if (r = arguments, i = this, l = N, U) {
      if (a === void 0)
        return m(l);
      if (c)
        return clearTimeout(a), a = setTimeout(v, t), g(l);
    }
    return a === void 0 && (a = setTimeout(v, t)), s;
  }
  return P.cancel = F, P.flush = G, P;
}
function My(e, t) {
  return e == null || e !== e ? t : e;
}
var Nc = Object.prototype, Ny = Nc.hasOwnProperty, Fy = ce(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, i = r > 2 ? t[2] : void 0;
  for (i && ft(t[0], t[1], i) && (r = 1); ++n < r; )
    for (var o = t[n], s = $t(o), a = -1, l = s.length; ++a < l; ) {
      var u = s[a], f = e[u];
      (f === void 0 || Gt(f, Nc[u]) && !Ny.call(e, u)) && (e[u] = o[u]);
    }
  return e;
});
const Wy = Fy;
function xs(e, t, n) {
  (n !== void 0 && !Gt(e[t], n) || n === void 0 && !(t in e)) && dn(e, t, n);
}
function Je(e) {
  return Ge(e) && wt(e);
}
function eo(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Fc(e) {
  return Vt(e, $t(e));
}
function Dy(e, t, n, r, i, o, s) {
  var a = eo(e, n), l = eo(t, n), u = s.get(l);
  if (u) {
    xs(e, n, u);
    return;
  }
  var f = o ? o(a, l, n + "", e, t, s) : void 0, c = f === void 0;
  if (c) {
    var d = oe(l), g = !d && kn(l), m = !d && !g && kr(l);
    f = l, d || g || m ? oe(a) ? f = a : Je(a) ? f = vt(a) : g ? (c = !1, f = mc(l, !0)) : m ? (c = !1, f = vc(l, !0)) : f = [] : ri(l) || Hn(l) ? (f = a, Hn(a) ? f = Fc(a) : (!Ue(a) || un(a)) && (f = yc(l))) : c = !1;
  }
  c && (s.set(l, f), i(f, l, r, o, s), s.delete(l)), xs(e, n, f);
}
function is(e, t, n, r, i) {
  e !== t && Bo(t, function(o, s) {
    if (i || (i = new Bt()), Ue(o))
      Dy(e, t, s, n, is, r, i);
    else {
      var a = r ? r(eo(e, s), o, s + "", e, t, i) : void 0;
      a === void 0 && (a = o), xs(e, s, a);
    }
  }, $t);
}
function Wc(e, t, n, r, i, o) {
  return Ue(e) && Ue(t) && (o.set(t, e), is(e, t, void 0, Wc, o), o.delete(t)), e;
}
var Uy = Er(function(e, t, n, r) {
  is(e, t, n, r);
});
const Dc = Uy;
var By = ce(function(e) {
  return e.push(void 0, Wc), Tt(Dc, void 0, e);
});
const zy = By;
var qy = "Expected a function";
function Uc(e, t, n) {
  if (typeof e != "function")
    throw new TypeError(qy);
  return setTimeout(function() {
    e.apply(void 0, n);
  }, t);
}
var Gy = ce(function(e, t) {
  return Uc(e, 1, t);
});
const Hy = Gy;
var Ky = ce(function(e, t, n) {
  return Uc(e, Ct(t) || 0, n);
});
const Yy = Ky;
function Go(e, t, n) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var Jy = 200;
function si(e, t, n, r) {
  var i = -1, o = Xi, s = !0, a = e.length, l = [], u = t.length;
  if (!a)
    return l;
  n && (t = De(t, St(n))), r ? (o = Go, s = !1) : t.length >= Jy && (o = Jr, s = !1, t = new Yn(t));
  e:
    for (; ++i < a; ) {
      var f = e[i], c = n == null ? f : n(f);
      if (f = r || f !== 0 ? f : 0, s && c === c) {
        for (var d = u; d--; )
          if (t[d] === c)
            continue e;
        l.push(f);
      } else
        o(t, c, r) || l.push(f);
    }
  return l;
}
var Xy = ce(function(e, t) {
  return Je(e) ? si(e, st(t, 1, Je, !0)) : [];
});
const Zy = Xy;
function Pt(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Vy = ce(function(e, t) {
  var n = Pt(t);
  return Je(n) && (n = void 0), Je(e) ? si(e, st(t, 1, Je, !0), se(n)) : [];
});
const Qy = Vy;
var xy = ce(function(e, t) {
  var n = Pt(t);
  return Je(n) && (n = void 0), Je(e) ? si(e, st(t, 1, Je, !0), void 0, n) : [];
});
const eb = xy;
var tb = Ki(function(e, t) {
  return e / t;
}, 1);
const nb = tb;
function rb(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? (t = n || t === void 0 ? 1 : le(t), Ft(e, t < 0 ? 0 : t, r)) : [];
}
function ib(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? (t = n || t === void 0 ? 1 : le(t), t = r - t, Ft(e, 0, t < 0 ? 0 : t)) : [];
}
function ss(e, t, n, r) {
  for (var i = e.length, o = r ? i : -1; (r ? o-- : ++o < i) && t(e[o], o, e); )
    ;
  return n ? Ft(e, r ? 0 : o, r ? o + 1 : i) : Ft(e, r ? o + 1 : 0, r ? i : o);
}
function sb(e, t) {
  return e && e.length ? ss(e, se(t), !0, !0) : [];
}
function ob(e, t) {
  return e && e.length ? ss(e, se(t), !0) : [];
}
function en(e) {
  return typeof e == "function" ? e : dt;
}
function Il(e, t) {
  var n = oe(e) ? Wt : Cn;
  return n(e, en(t));
}
function ab(e, t) {
  for (var n = e == null ? 0 : e.length; n-- && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Bc = Cc(!0);
function Ho(e, t) {
  return e && Bc(e, t, xe);
}
var lb = Lc(Ho, !0);
const zc = lb;
function jl(e, t) {
  var n = oe(e) ? ab : zc;
  return n(e, en(t));
}
function ub(e, t, n) {
  e = Re(e), t = kt(t);
  var r = e.length;
  n = n === void 0 ? r : Qn(le(n), 0, r);
  var i = n;
  return n -= t.length, n >= 0 && e.slice(n, i) == t;
}
function fb(e, t) {
  return De(t, function(n) {
    return [n, e[n]];
  });
}
function cb(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = [r, r];
  }), n;
}
var db = "[object Map]", pb = "[object Set]";
function qc(e) {
  return function(t) {
    var n = Zt(t);
    return n == db ? No(t) : n == pb ? cb(t) : fb(t, e(t));
  };
}
var hb = qc(xe);
const Cl = hb;
var mb = qc($t);
const Ll = mb;
var gb = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, _b = So(gb);
const vb = _b;
var Gc = /[&<>"']/g, yb = RegExp(Gc.source);
function Hc(e) {
  return e = Re(e), e && yb.test(e) ? e.replace(Gc, vb) : e;
}
var Kc = /[\\^$.*+?()[\]{}|]/g, bb = RegExp(Kc.source);
function wb(e) {
  return e = Re(e), e && bb.test(e) ? e.replace(Kc, "\\$&") : e;
}
function Yc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (!t(e[n], n, e))
      return !1;
  return !0;
}
function $b(e, t) {
  var n = !0;
  return Cn(e, function(r, i, o) {
    return n = !!t(r, i, o), n;
  }), n;
}
function Ab(e, t, n) {
  var r = oe(e) ? Yc : $b;
  return n && ft(e, t, n) && (t = void 0), r(e, se(t));
}
var Ob = 4294967295;
function Jc(e) {
  return e ? Qn(le(e), 0, Ob) : 0;
}
function Rb(e, t, n, r) {
  var i = e.length;
  for (n = le(n), n < 0 && (n = -n > i ? 0 : i + n), r = r === void 0 || r > i ? i : le(r), r < 0 && (r += i), r = n > r ? 0 : Jc(r); n < r; )
    e[n++] = t;
  return e;
}
function Eb(e, t, n, r) {
  var i = e == null ? 0 : e.length;
  return i ? (n && typeof n != "number" && ft(e, t, n) && (n = 0, r = i), Rb(e, t, n, r)) : [];
}
function Xc(e, t) {
  var n = [];
  return Cn(e, function(r, i, o) {
    t(r, i, o) && n.push(r);
  }), n;
}
function kb(e, t) {
  var n = oe(e) ? jn : Xc;
  return n(e, se(t));
}
function Zc(e) {
  return function(t, n, r) {
    var i = Object(t);
    if (!wt(t)) {
      var o = se(n);
      t = xe(t), n = function(a) {
        return o(i[a], a, i);
      };
    }
    var s = e(t, n, r);
    return s > -1 ? i[o ? t[s] : s] : void 0;
  };
}
var Tb = Math.max;
function Vc(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = n == null ? 0 : le(n);
  return i < 0 && (i = Tb(r + i, 0)), Ji(e, se(t), i);
}
var Sb = Zc(Vc);
const Pb = Sb;
function Qc(e, t, n) {
  var r;
  return n(e, function(i, o, s) {
    if (t(i, o, s))
      return r = o, !1;
  }), r;
}
function Ib(e, t) {
  return Qc(e, se(t), xt);
}
var jb = Math.max, Cb = Math.min;
function xc(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = r - 1;
  return n !== void 0 && (i = le(n), i = n < 0 ? jb(r + i, 0) : Cb(i, r - 1)), Ji(e, se(t), i, !0);
}
var Lb = Zc(xc);
const Mb = Lb;
function Nb(e, t) {
  return Qc(e, se(t), Ho);
}
function Ml(e) {
  return e && e.length ? e[0] : void 0;
}
function ed(e, t) {
  var n = -1, r = wt(e) ? Array(e.length) : [];
  return Cn(e, function(i, o, s) {
    r[++n] = t(i, o, s);
  }), r;
}
function os(e, t) {
  var n = oe(e) ? De : ed;
  return n(e, se(t));
}
function Fb(e, t) {
  return st(os(e, t), 1);
}
var Wb = 1 / 0;
function Db(e, t) {
  return st(os(e, t), Wb);
}
function Ub(e, t, n) {
  return n = n === void 0 ? 1 : le(n), st(os(e, t), n);
}
var Bb = 1 / 0;
function zb(e) {
  var t = e == null ? 0 : e.length;
  return t ? st(e, Bb) : [];
}
function qb(e, t) {
  var n = e == null ? 0 : e.length;
  return n ? (t = t === void 0 ? 1 : le(t), st(e, t)) : [];
}
var Gb = 512;
function Hb(e) {
  return cn(e, Gb);
}
var Kb = Po("floor");
const Yb = Kb;
var Jb = "Expected a function", Xb = 8, Zb = 32, Vb = 128, Qb = 256;
function td(e) {
  return mn(function(t) {
    var n = t.length, r = n, i = Mt.prototype.thru;
    for (e && t.reverse(); r--; ) {
      var o = t[r];
      if (typeof o != "function")
        throw new TypeError(Jb);
      if (i && !s && Si(o) == "wrapper")
        var s = new Mt([], !0);
    }
    for (r = s ? r : n; ++r < n; ) {
      o = t[r];
      var a = Si(o), l = a == "wrapper" ? go(o) : void 0;
      l && Ys(l[0]) && l[1] == (Vb | Xb | Zb | Qb) && !l[4].length && l[9] == 1 ? s = s[Si(l[0])].apply(s, l[3]) : s = o.length == 1 && Ys(o) ? s[a]() : s.thru(o);
    }
    return function() {
      var u = arguments, f = u[0];
      if (s && u.length == 1 && oe(f))
        return s.plant(f).value();
      for (var c = 0, d = n ? t[c].apply(this, u) : f; ++c < n; )
        d = t[c].call(this, d);
      return d;
    };
  });
}
var xb = td();
const ew = xb;
var tw = td(!0);
const nw = tw;
function rw(e, t) {
  return e == null ? e : Bo(e, en(t), $t);
}
function iw(e, t) {
  return e == null ? e : Bc(e, en(t), $t);
}
function sw(e, t) {
  return e && xt(e, en(t));
}
function ow(e, t) {
  return e && Ho(e, en(t));
}
function aw(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var i = e[t];
    r[i[0]] = i[1];
  }
  return r;
}
function as(e, t) {
  return jn(t, function(n) {
    return un(e[n]);
  });
}
function lw(e) {
  return e == null ? [] : as(e, xe(e));
}
function uw(e) {
  return e == null ? [] : as(e, $t(e));
}
var fw = Object.prototype, cw = fw.hasOwnProperty, dw = rs(function(e, t, n) {
  cw.call(e, n) ? e[n].push(t) : dn(e, n, [t]);
});
const pw = dw;
function Ko(e, t) {
  return e > t;
}
function ls(e) {
  return function(t, n) {
    return typeof t == "string" && typeof n == "string" || (t = Ct(t), n = Ct(n)), e(t, n);
  };
}
var hw = ls(Ko);
const mw = hw;
var gw = ls(function(e, t) {
  return e >= t;
});
const _w = gw;
var vw = Object.prototype, yw = vw.hasOwnProperty;
function bw(e, t) {
  return e != null && yw.call(e, t);
}
function ww(e, t) {
  return e != null && Sc(e, t, bw);
}
var $w = Math.max, Aw = Math.min;
function Ow(e, t, n) {
  return e >= Aw(t, n) && e < $w(t, n);
}
function Rw(e, t, n) {
  return t = ln(t), n === void 0 ? (n = t, t = 0) : n = ln(n), e = Ct(e), Ow(e, t, n);
}
var Ew = "[object String]";
function us(e) {
  return typeof e == "string" || !oe(e) && Ge(e) && ct(e) == Ew;
}
function Yo(e, t) {
  return De(t, function(n) {
    return e[n];
  });
}
function Pr(e) {
  return e == null ? [] : Yo(e, xe(e));
}
var kw = Math.max;
function Tw(e, t, n, r) {
  e = wt(e) ? e : Pr(e), n = n && !r ? le(n) : 0;
  var i = e.length;
  return n < 0 && (n = kw(i + n, 0)), us(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Or(e, t, n) > -1;
}
var Sw = Math.max;
function Pw(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = n == null ? 0 : le(n);
  return i < 0 && (i = Sw(r + i, 0)), Or(e, t, i);
}
function Iw(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ft(e, 0, -1) : [];
}
var jw = Math.min;
function Jo(e, t, n) {
  for (var r = n ? Go : Xi, i = e[0].length, o = e.length, s = o, a = Array(o), l = 1 / 0, u = []; s--; ) {
    var f = e[s];
    s && t && (f = De(f, St(t))), l = jw(f.length, l), a[s] = !n && (t || i >= 120 && f.length >= 120) ? new Yn(s && f) : void 0;
  }
  f = e[0];
  var c = -1, d = a[0];
  e:
    for (; ++c < i && u.length < l; ) {
      var g = f[c], m = t ? t(g) : g;
      if (g = n || g !== 0 ? g : 0, !(d ? Jr(d, m) : r(u, m, n))) {
        for (s = o; --s; ) {
          var _ = a[s];
          if (!(_ ? Jr(_, m) : r(e[s], m, n)))
            continue e;
        }
        d && d.push(m), u.push(g);
      }
    }
  return u;
}
function Xo(e) {
  return Je(e) ? e : [];
}
var Cw = ce(function(e) {
  var t = De(e, Xo);
  return t.length && t[0] === e[0] ? Jo(t) : [];
});
const Lw = Cw;
var Mw = ce(function(e) {
  var t = Pt(e), n = De(e, Xo);
  return t === Pt(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? Jo(n, se(t)) : [];
});
const Nw = Mw;
var Fw = ce(function(e) {
  var t = Pt(e), n = De(e, Xo);
  return t = typeof t == "function" ? t : void 0, t && n.pop(), n.length && n[0] === e[0] ? Jo(n, void 0, t) : [];
});
const Ww = Fw;
function Dw(e, t, n, r) {
  return xt(e, function(i, o, s) {
    t(r, n(i), o, s);
  }), r;
}
function nd(e, t) {
  return function(n, r) {
    return Dw(n, e, t(r), {});
  };
}
var Uw = Object.prototype, Bw = Uw.toString, zw = nd(function(e, t, n) {
  t != null && typeof t.toString != "function" && (t = Bw.call(t)), e[t] = n;
}, _o(dt));
const qw = zw;
var rd = Object.prototype, Gw = rd.hasOwnProperty, Hw = rd.toString, Kw = nd(function(e, t, n) {
  t != null && typeof t.toString != "function" && (t = Hw.call(t)), Gw.call(e, t) ? e[t].push(n) : e[t] = [n];
}, se);
const Yw = Kw;
function id(e, t) {
  return t.length < 2 ? e : Vn(e, Ft(t, 0, -1));
}
function oi(e, t, n) {
  t = Sn(t, e), e = id(e, t);
  var r = e == null ? e : e[Qt(Pt(t))];
  return r == null ? void 0 : Tt(r, e, n);
}
var Jw = ce(oi);
const Xw = Jw;
var Zw = ce(function(e, t, n) {
  var r = -1, i = typeof t == "function", o = wt(e) ? Array(e.length) : [];
  return Cn(e, function(s) {
    o[++r] = i ? Tt(t, s, n) : oi(s, t, n);
  }), o;
});
const Vw = Zw;
var Qw = "[object ArrayBuffer]";
function xw(e) {
  return Ge(e) && ct(e) == Qw;
}
var Nl = Nt && Nt.isArrayBuffer, e2 = Nl ? St(Nl) : xw;
const t2 = e2;
var n2 = "[object Boolean]";
function r2(e) {
  return e === !0 || e === !1 || Ge(e) && ct(e) == n2;
}
var i2 = "[object Date]";
function s2(e) {
  return Ge(e) && ct(e) == i2;
}
var Fl = Nt && Nt.isDate, o2 = Fl ? St(Fl) : s2;
const a2 = o2;
function l2(e) {
  return Ge(e) && e.nodeType === 1 && !ri(e);
}
var u2 = "[object Map]", f2 = "[object Set]", c2 = Object.prototype, d2 = c2.hasOwnProperty;
function p2(e) {
  if (e == null)
    return !0;
  if (wt(e) && (oe(e) || typeof e == "string" || typeof e.splice == "function" || kn(e) || kr(e) || Hn(e)))
    return !e.length;
  var t = Zt(e);
  if (t == u2 || t == f2)
    return !e.size;
  if (ni(e))
    return !wo(e).length;
  for (var n in e)
    if (d2.call(e, n))
      return !1;
  return !0;
}
function h2(e, t) {
  return ii(e, t);
}
function m2(e, t, n) {
  n = typeof n == "function" ? n : void 0;
  var r = n ? n(e, t) : void 0;
  return r === void 0 ? ii(e, t, void 0, n) : !!r;
}
var g2 = nt.isFinite;
function _2(e) {
  return typeof e == "number" && g2(e);
}
function sd(e) {
  return typeof e == "number" && e == le(e);
}
function v2(e, t) {
  return e === t || Fo(e, t, Wo(t));
}
function y2(e, t, n) {
  return n = typeof n == "function" ? n : void 0, Fo(e, t, Wo(t), n);
}
var b2 = "[object Number]";
function od(e) {
  return typeof e == "number" || Ge(e) && ct(e) == b2;
}
function w2(e) {
  return od(e) && e != +e;
}
var $2 = Ti ? un : bo, A2 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";
function O2(e) {
  if ($2(e))
    throw new Error(A2);
  return bf(e);
}
function R2(e) {
  return e == null;
}
function E2(e) {
  return e === null;
}
var k2 = "[object RegExp]";
function T2(e) {
  return Ge(e) && ct(e) == k2;
}
var Wl = Nt && Nt.isRegExp, S2 = Wl ? St(Wl) : T2;
const Zo = S2;
var Dl = 9007199254740991;
function P2(e) {
  return sd(e) && e >= -Dl && e <= Dl;
}
function I2(e) {
  return e === void 0;
}
var j2 = "[object WeakMap]";
function C2(e) {
  return Ge(e) && Zt(e) == j2;
}
var L2 = "[object WeakSet]";
function M2(e) {
  return Ge(e) && ct(e) == L2;
}
var N2 = 1;
function F2(e) {
  return se(typeof e == "function" ? e : Lt(e, N2));
}
var W2 = Array.prototype, D2 = W2.join;
function U2(e, t) {
  return e == null ? "" : D2.call(e, t);
}
var B2 = Sr(function(e, t, n) {
  return e + (n ? "-" : "") + t.toLowerCase();
});
const z2 = B2;
var q2 = rs(function(e, t, n) {
  dn(e, n, t);
});
const G2 = q2;
function H2(e, t, n) {
  for (var r = n + 1; r--; )
    if (e[r] === t)
      return r;
  return r;
}
var K2 = Math.max, Y2 = Math.min;
function J2(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = r;
  return n !== void 0 && (i = le(n), i = i < 0 ? K2(r + i, 0) : Y2(i, r - 1)), t === t ? H2(e, t, i) : Ji(e, kf, i, !0);
}
var X2 = Sr(function(e, t, n) {
  return e + (n ? " " : "") + t.toLowerCase();
});
const Z2 = X2;
var V2 = Xf("toLowerCase");
const Q2 = V2;
function Vo(e, t) {
  return e < t;
}
var x2 = ls(Vo);
const e$ = x2;
var t$ = ls(function(e, t) {
  return e <= t;
});
const n$ = t$;
function r$(e, t) {
  var n = {};
  return t = se(t), xt(e, function(r, i, o) {
    dn(n, t(r, i, o), r);
  }), n;
}
function i$(e, t) {
  var n = {};
  return t = se(t), xt(e, function(r, i, o) {
    dn(n, i, t(r, i, o));
  }), n;
}
var s$ = 1;
function o$(e) {
  return Tc(Lt(e, s$));
}
var a$ = 1;
function l$(e, t) {
  return Pc(e, Lt(t, a$));
}
function fs(e, t, n) {
  for (var r = -1, i = e.length; ++r < i; ) {
    var o = e[r], s = t(o);
    if (s != null && (a === void 0 ? s === s && !Et(s) : n(s, a)))
      var a = s, l = o;
  }
  return l;
}
function u$(e) {
  return e && e.length ? fs(e, dt, Ko) : void 0;
}
function f$(e, t) {
  return e && e.length ? fs(e, se(t), Ko) : void 0;
}
function Qo(e, t) {
  for (var n, r = -1, i = e.length; ++r < i; ) {
    var o = t(e[r]);
    o !== void 0 && (n = n === void 0 ? o : n + o);
  }
  return n;
}
var c$ = NaN;
function ad(e, t) {
  var n = e == null ? 0 : e.length;
  return n ? Qo(e, t) / n : c$;
}
function d$(e) {
  return ad(e, dt);
}
function p$(e, t) {
  return ad(e, se(t));
}
var h$ = Er(function(e, t, n) {
  is(e, t, n);
});
const m$ = h$;
var g$ = ce(function(e, t) {
  return function(n) {
    return oi(n, e, t);
  };
});
const _$ = g$;
var v$ = ce(function(e, t) {
  return function(n) {
    return oi(e, n, t);
  };
});
const y$ = v$;
function b$(e) {
  return e && e.length ? fs(e, dt, Vo) : void 0;
}
function w$(e, t) {
  return e && e.length ? fs(e, se(t), Vo) : void 0;
}
function ld(e, t, n) {
  var r = xe(t), i = as(t, r), o = !(Ue(n) && "chain" in n) || !!n.chain, s = un(e);
  return Wt(i, function(a) {
    var l = t[a];
    e[a] = l, s && (e.prototype[a] = function() {
      var u = this.__chain__;
      if (o || u) {
        var f = e(this.__wrapped__), c = f.__actions__ = vt(this.__actions__);
        return c.push({ func: l, args: arguments, thisArg: e }), f.__chain__ = u, f;
      }
      return l.apply(e, Pn([this.value()], arguments));
    });
  }), e;
}
var $$ = Ki(function(e, t) {
  return e * t;
}, 1);
const A$ = $$;
var O$ = "Expected a function";
function ai(e) {
  if (typeof e != "function")
    throw new TypeError(O$);
  return function() {
    var t = arguments;
    switch (t.length) {
      case 0:
        return !e.call(this);
      case 1:
        return !e.call(this, t[0]);
      case 2:
        return !e.call(this, t[0], t[1]);
      case 3:
        return !e.call(this, t[0], t[1], t[2]);
    }
    return !e.apply(this, t);
  };
}
function R$(e) {
  for (var t, n = []; !(t = e.next()).done; )
    n.push(t.value);
  return n;
}
var E$ = "[object Map]", k$ = "[object Set]", Ls = at ? at.iterator : void 0;
function ud(e) {
  if (!e)
    return [];
  if (wt(e))
    return us(e) ? qt(e) : vt(e);
  if (Ls && e[Ls])
    return R$(e[Ls]());
  var t = Zt(e), n = t == E$ ? No : t == k$ ? ns : Pr;
  return n(e);
}
function T$() {
  this.__values__ === void 0 && (this.__values__ = ud(this.value()));
  var e = this.__index__ >= this.__values__.length, t = e ? void 0 : this.__values__[this.__index__++];
  return { done: e, value: t };
}
function fd(e, t) {
  var n = e.length;
  if (n)
    return t += t < 0 ? n : 0, fn(t, n) ? e[t] : void 0;
}
function S$(e, t) {
  return e && e.length ? fd(e, le(t)) : void 0;
}
function P$(e) {
  return e = le(e), ce(function(t) {
    return fd(t, e);
  });
}
function xo(e, t) {
  return t = Sn(t, e), e = id(e, t), e == null || delete e[Qt(Pt(t))];
}
function I$(e) {
  return ri(e) ? void 0 : e;
}
var j$ = 1, C$ = 2, L$ = 4, M$ = mn(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = De(t, function(o) {
    return o = Sn(o, e), r || (r = o.length > 1), o;
  }), Vt(e, Co(e), n), r && (n = Lt(n, j$ | C$ | L$, I$));
  for (var i = t.length; i--; )
    xo(n, t[i]);
  return n;
});
const N$ = M$;
function li(e, t, n, r) {
  if (!Ue(e))
    return e;
  t = Sn(t, e);
  for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o; ) {
    var l = Qt(t[i]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != s) {
      var f = a[l];
      u = r ? r(f, l, a) : void 0, u === void 0 && (u = Ue(f) ? f : fn(t[i + 1]) ? [] : {});
    }
    ti(a, l, u), a = a[l];
  }
  return e;
}
function cd(e, t, n) {
  for (var r = -1, i = t.length, o = {}; ++r < i; ) {
    var s = t[r], a = Vn(e, s);
    n(a, s) && li(o, Sn(s, e), a);
  }
  return o;
}
function dd(e, t) {
  if (e == null)
    return {};
  var n = De(Co(e), function(r) {
    return [r];
  });
  return t = se(t), cd(e, n, function(r, i) {
    return t(r, i[0]);
  });
}
function F$(e, t) {
  return dd(e, ai(se(t)));
}
function W$(e) {
  return Bf(2, e);
}
function D$(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function pd(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, i = e === e, o = Et(e), s = t !== void 0, a = t === null, l = t === t, u = Et(t);
    if (!a && !u && !o && e > t || o && s && l && !a && !u || r && s && l || !n && l || !i)
      return 1;
    if (!r && !o && !u && e < t || u && n && i && !r && !o || a && n && i || !s && i || !l)
      return -1;
  }
  return 0;
}
function U$(e, t, n) {
  for (var r = -1, i = e.criteria, o = t.criteria, s = i.length, a = n.length; ++r < s; ) {
    var l = pd(i[r], o[r]);
    if (l) {
      if (r >= a)
        return l;
      var u = n[r];
      return l * (u == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function hd(e, t, n) {
  t.length ? t = De(t, function(o) {
    return oe(o) ? function(s) {
      return Vn(s, o.length === 1 ? o[0] : o);
    } : o;
  }) : t = [dt];
  var r = -1;
  t = De(t, St(se));
  var i = ed(e, function(o, s, a) {
    var l = De(t, function(u) {
      return u(o);
    });
    return { criteria: l, index: ++r, value: o };
  });
  return D$(i, function(o, s) {
    return U$(o, s, n);
  });
}
function B$(e, t, n, r) {
  return e == null ? [] : (oe(t) || (t = t == null ? [] : [t]), n = r ? void 0 : n, oe(n) || (n = n == null ? [] : [n]), hd(e, t, n));
}
function ea(e) {
  return mn(function(t) {
    return t = De(t, St(se)), ce(function(n) {
      var r = this;
      return e(t, function(i) {
        return Tt(i, r, n);
      });
    });
  });
}
var z$ = ea(De);
const q$ = z$;
var G$ = ce, H$ = Math.min, K$ = G$(function(e, t) {
  t = t.length == 1 && oe(t[0]) ? De(t[0], St(se)) : De(st(t, 1), St(se));
  var n = t.length;
  return ce(function(r) {
    for (var i = -1, o = H$(r.length, n); ++i < o; )
      r[i] = t[i].call(this, r[i]);
    return Tt(e, this, r);
  });
});
const Y$ = K$;
var J$ = ea(Yc);
const X$ = J$;
var Z$ = ea(Mo);
const V$ = Z$;
var Q$ = 9007199254740991, x$ = Math.floor;
function to(e, t) {
  var n = "";
  if (!e || t < 1 || t > Q$)
    return n;
  do
    t % 2 && (n += e), t = x$(t / 2), t && (e += e);
  while (t);
  return n;
}
var eA = Uo("length"), md = "\\ud800-\\udfff", tA = "\\u0300-\\u036f", nA = "\\ufe20-\\ufe2f", rA = "\\u20d0-\\u20ff", iA = tA + nA + rA, sA = "\\ufe0e\\ufe0f", oA = "[" + md + "]", no = "[" + iA + "]", ro = "\\ud83c[\\udffb-\\udfff]", aA = "(?:" + no + "|" + ro + ")", gd = "[^" + md + "]", _d = "(?:\\ud83c[\\udde6-\\uddff]){2}", vd = "[\\ud800-\\udbff][\\udc00-\\udfff]", lA = "\\u200d", yd = aA + "?", bd = "[" + sA + "]?", uA = "(?:" + lA + "(?:" + [gd, _d, vd].join("|") + ")" + bd + yd + ")*", fA = bd + yd + uA, cA = "(?:" + [gd + no + "?", no, _d, vd, oA].join("|") + ")", Ul = RegExp(ro + "(?=" + ro + ")|" + cA + fA, "g");
function dA(e) {
  for (var t = Ul.lastIndex = 0; Ul.test(e); )
    ++t;
  return t;
}
function Ir(e) {
  return Tr(e) ? dA(e) : eA(e);
}
var pA = Math.ceil;
function Fi(e, t) {
  t = t === void 0 ? " " : kt(t);
  var n = t.length;
  if (n < 2)
    return n ? to(t, e) : t;
  var r = to(t, pA(e / Ir(t)));
  return Tr(t) ? In(qt(r), 0, e).join("") : r.slice(0, e);
}
var hA = Math.ceil, mA = Math.floor;
function gA(e, t, n) {
  e = Re(e), t = le(t);
  var r = t ? Ir(e) : 0;
  if (!t || r >= t)
    return e;
  var i = (t - r) / 2;
  return Fi(mA(i), n) + e + Fi(hA(i), n);
}
function _A(e, t, n) {
  e = Re(e), t = le(t);
  var r = t ? Ir(e) : 0;
  return t && r < t ? e + Fi(t - r, n) : e;
}
function vA(e, t, n) {
  e = Re(e), t = le(t);
  var r = t ? Ir(e) : 0;
  return t && r < t ? Fi(t - r, n) + e : e;
}
var yA = /^\s+/, bA = nt.parseInt;
function wA(e, t, n) {
  return n || t == null ? t = 0 : t && (t = +t), bA(Re(e).replace(yA, ""), t || 0);
}
var $A = 32, ta = ce(function(e, t) {
  var n = En(t, Rr(ta));
  return cn(e, $A, void 0, t, n);
});
ta.placeholder = {};
const wd = ta;
var AA = 64, na = ce(function(e, t) {
  var n = En(t, Rr(na));
  return cn(e, AA, void 0, t, n);
});
na.placeholder = {};
const OA = na;
var RA = rs(function(e, t, n) {
  e[n ? 0 : 1].push(t);
}, function() {
  return [[], []];
});
const EA = RA;
function kA(e, t) {
  return cd(e, t, function(n, r) {
    return Do(e, r);
  });
}
var TA = mn(function(e, t) {
  return e == null ? {} : kA(e, t);
});
const SA = TA;
function PA(e) {
  for (var t, n = this; n instanceof Yi; ) {
    var r = Of(n);
    r.__index__ = 0, r.__values__ = void 0, t ? i.__wrapped__ = r : t = r;
    var i = r;
    n = n.__wrapped__;
  }
  return i.__wrapped__ = e, t;
}
function IA(e) {
  return function(t) {
    return e == null ? void 0 : Vn(e, t);
  };
}
function jA(e, t, n, r) {
  for (var i = n - 1, o = e.length; ++i < o; )
    if (r(e[i], t))
      return i;
  return -1;
}
var CA = Array.prototype, Bl = CA.splice;
function ra(e, t, n, r) {
  var i = r ? jA : Or, o = -1, s = t.length, a = e;
  for (e === t && (t = vt(t)), n && (a = De(e, St(n))); ++o < s; )
    for (var l = 0, u = t[o], f = n ? n(u) : u; (l = i(a, f, l, r)) > -1; )
      a !== e && Bl.call(a, l, 1), Bl.call(e, l, 1);
  return e;
}
function $d(e, t) {
  return e && e.length && t && t.length ? ra(e, t) : e;
}
var LA = ce($d);
const MA = LA;
function NA(e, t, n) {
  return e && e.length && t && t.length ? ra(e, t, se(n)) : e;
}
function FA(e, t, n) {
  return e && e.length && t && t.length ? ra(e, t, void 0, n) : e;
}
var WA = Array.prototype, DA = WA.splice;
function Ad(e, t) {
  for (var n = e ? t.length : 0, r = n - 1; n--; ) {
    var i = t[n];
    if (n == r || i !== o) {
      var o = i;
      fn(i) ? DA.call(e, i, 1) : xo(e, i);
    }
  }
  return e;
}
var UA = mn(function(e, t) {
  var n = e == null ? 0 : e.length, r = Ao(e, t);
  return Ad(e, De(t, function(i) {
    return fn(i, n) ? +i : i;
  }).sort(pd)), r;
});
const BA = UA;
var zA = Math.floor, qA = Math.random;
function ia(e, t) {
  return e + zA(qA() * (t - e + 1));
}
var GA = parseFloat, HA = Math.min, KA = Math.random;
function YA(e, t, n) {
  if (n && typeof n != "boolean" && ft(e, t, n) && (t = n = void 0), n === void 0 && (typeof t == "boolean" ? (n = t, t = void 0) : typeof e == "boolean" && (n = e, e = void 0)), e === void 0 && t === void 0 ? (e = 0, t = 1) : (e = ln(e), t === void 0 ? (t = e, e = 0) : t = ln(t)), e > t) {
    var r = e;
    e = t, t = r;
  }
  if (n || e % 1 || t % 1) {
    var i = KA();
    return HA(e + i * (t - e + GA("1e-" + ((i + "").length - 1))), t);
  }
  return ia(e, t);
}
var JA = Math.ceil, XA = Math.max;
function ZA(e, t, n, r) {
  for (var i = -1, o = XA(JA((t - e) / (n || 1)), 0), s = Array(o); o--; )
    s[r ? o : ++i] = e, e += n;
  return s;
}
function Od(e) {
  return function(t, n, r) {
    return r && typeof r != "number" && ft(t, n, r) && (n = r = void 0), t = ln(t), n === void 0 ? (n = t, t = 0) : n = ln(n), r = r === void 0 ? t < n ? 1 : -1 : ln(r), ZA(t, n, r, e);
  };
}
var VA = Od();
const QA = VA;
var xA = Od(!0);
const eO = xA;
var tO = 256, nO = mn(function(e, t) {
  return cn(e, tO, void 0, void 0, void 0, t);
});
const rO = nO;
function Rd(e, t, n, r, i) {
  return i(e, function(o, s, a) {
    n = r ? (r = !1, o) : t(n, o, s, a);
  }), n;
}
function iO(e, t, n) {
  var r = oe(e) ? To : Rd, i = arguments.length < 3;
  return r(e, se(t), n, i, Cn);
}
function sO(e, t, n, r) {
  var i = e == null ? 0 : e.length;
  for (r && i && (n = e[--i]); i--; )
    n = t(n, e[i], i, e);
  return n;
}
function oO(e, t, n) {
  var r = oe(e) ? sO : Rd, i = arguments.length < 3;
  return r(e, se(t), n, i, zc);
}
function aO(e, t) {
  var n = oe(e) ? jn : Xc;
  return n(e, ai(se(t)));
}
function lO(e, t) {
  var n = [];
  if (!(e && e.length))
    return n;
  var r = -1, i = [], o = e.length;
  for (t = se(t); ++r < o; ) {
    var s = e[r];
    t(s, r, e) && (n.push(s), i.push(r));
  }
  return Ad(e, i), n;
}
function uO(e, t, n) {
  return (n ? ft(e, t, n) : t === void 0) ? t = 1 : t = le(t), to(Re(e), t);
}
function fO() {
  var e = arguments, t = Re(e[0]);
  return e.length < 3 ? t : t.replace(e[1], e[2]);
}
var cO = "Expected a function";
function dO(e, t) {
  if (typeof e != "function")
    throw new TypeError(cO);
  return t = t === void 0 ? t : le(t), ce(e, t);
}
function pO(e, t, n) {
  t = Sn(t, e);
  var r = -1, i = t.length;
  for (i || (i = 1, e = void 0); ++r < i; ) {
    var o = e == null ? void 0 : e[Qt(t[r])];
    o === void 0 && (r = i, o = n), e = un(o) ? o.call(e) : o;
  }
  return e;
}
var hO = Array.prototype, mO = hO.reverse;
function io(e) {
  return e == null ? e : mO.call(e);
}
var gO = Po("round");
const _O = gO;
function Ed(e) {
  var t = e.length;
  return t ? e[ia(0, t - 1)] : void 0;
}
function vO(e) {
  return Ed(Pr(e));
}
function yO(e) {
  var t = oe(e) ? Ed : vO;
  return t(e);
}
function cs(e, t) {
  var n = -1, r = e.length, i = r - 1;
  for (t = t === void 0 ? r : t; ++n < t; ) {
    var o = ia(n, i), s = e[o];
    e[o] = e[n], e[n] = s;
  }
  return e.length = t, e;
}
function bO(e, t) {
  return cs(vt(e), Qn(t, 0, e.length));
}
function wO(e, t) {
  var n = Pr(e);
  return cs(n, Qn(t, 0, n.length));
}
function $O(e, t, n) {
  (n ? ft(e, t, n) : t === void 0) ? t = 1 : t = le(t);
  var r = oe(e) ? bO : wO;
  return r(e, t);
}
function sa(e, t, n) {
  return e == null ? e : li(e, t, n);
}
function AO(e, t, n, r) {
  return r = typeof r == "function" ? r : void 0, e == null ? e : li(e, t, n, r);
}
function OO(e) {
  return cs(vt(e));
}
function RO(e) {
  return cs(Pr(e));
}
function EO(e) {
  var t = oe(e) ? OO : RO;
  return t(e);
}
var kO = "[object Map]", TO = "[object Set]";
function SO(e) {
  if (e == null)
    return 0;
  if (wt(e))
    return us(e) ? Ir(e) : e.length;
  var t = Zt(e);
  return t == kO || t == TO ? e.size : wo(e).length;
}
function PO(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? (n && typeof n != "number" && ft(e, t, n) ? (t = 0, n = r) : (t = t == null ? 0 : le(t), n = n === void 0 ? r : le(n)), Ft(e, t, n)) : [];
}
var IO = Sr(function(e, t, n) {
  return e + (n ? "_" : "") + t.toLowerCase();
});
const jO = IO;
function CO(e, t) {
  var n;
  return Cn(e, function(r, i, o) {
    return n = t(r, i, o), !n;
  }), !!n;
}
function LO(e, t, n) {
  var r = oe(e) ? Mo : CO;
  return n && ft(e, t, n) && (t = void 0), r(e, se(t));
}
var MO = ce(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && ft(e, t[0], t[1]) ? t = [] : n > 2 && ft(t[0], t[1], t[2]) && (t = [t[0]]), hd(e, st(t, 1), []);
});
const NO = MO;
var FO = 4294967295, WO = FO - 1, DO = Math.floor, UO = Math.min;
function oa(e, t, n, r) {
  var i = 0, o = e == null ? 0 : e.length;
  if (o === 0)
    return 0;
  t = n(t);
  for (var s = t !== t, a = t === null, l = Et(t), u = t === void 0; i < o; ) {
    var f = DO((i + o) / 2), c = n(e[f]), d = c !== void 0, g = c === null, m = c === c, _ = Et(c);
    if (s)
      var b = r || m;
    else
      u ? b = m && (r || d) : a ? b = m && d && (r || !g) : l ? b = m && d && !g && (r || !_) : g || _ ? b = !1 : b = r ? c <= t : c < t;
    b ? i = f + 1 : o = f;
  }
  return UO(o, WO);
}
var BO = 4294967295, zO = BO >>> 1;
function ds(e, t, n) {
  var r = 0, i = e == null ? r : e.length;
  if (typeof t == "number" && t === t && i <= zO) {
    for (; r < i; ) {
      var o = r + i >>> 1, s = e[o];
      s !== null && !Et(s) && (n ? s <= t : s < t) ? r = o + 1 : i = o;
    }
    return i;
  }
  return oa(e, t, dt, n);
}
function qO(e, t) {
  return ds(e, t);
}
function GO(e, t, n) {
  return oa(e, t, se(n));
}
function HO(e, t) {
  var n = e == null ? 0 : e.length;
  if (n) {
    var r = ds(e, t);
    if (r < n && Gt(e[r], t))
      return r;
  }
  return -1;
}
function KO(e, t) {
  return ds(e, t, !0);
}
function YO(e, t, n) {
  return oa(e, t, se(n), !0);
}
function JO(e, t) {
  var n = e == null ? 0 : e.length;
  if (n) {
    var r = ds(e, t, !0) - 1;
    if (Gt(e[r], t))
      return r;
  }
  return -1;
}
function kd(e, t) {
  for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
    var s = e[n], a = t ? t(s) : s;
    if (!n || !Gt(a, l)) {
      var l = a;
      o[i++] = s === 0 ? 0 : s;
    }
  }
  return o;
}
function XO(e) {
  return e && e.length ? kd(e) : [];
}
function ZO(e, t) {
  return e && e.length ? kd(e, se(t)) : [];
}
var VO = 4294967295;
function QO(e, t, n) {
  return n && typeof n != "number" && ft(e, t, n) && (t = n = void 0), n = n === void 0 ? VO : n >>> 0, n ? (e = Re(e), e && (typeof t == "string" || t != null && !Zo(t)) && (t = kt(t), !t && Tr(e)) ? In(qt(e), 0, n) : e.split(t, n)) : [];
}
var xO = "Expected a function", e4 = Math.max;
function t4(e, t) {
  if (typeof e != "function")
    throw new TypeError(xO);
  return t = t == null ? 0 : e4(le(t), 0), ce(function(n) {
    var r = n[t], i = In(n, 0, t);
    return r && Pn(i, r), Tt(e, this, i);
  });
}
var n4 = Sr(function(e, t, n) {
  return e + (n ? " " : "") + ko(t);
});
const r4 = n4;
function i4(e, t, n) {
  return e = Re(e), n = n == null ? 0 : Qn(le(n), 0, e.length), t = kt(t), e.slice(n, n + t.length) == t;
}
function s4() {
  return {};
}
function o4() {
  return "";
}
function a4() {
  return !0;
}
var l4 = Ki(function(e, t) {
  return e - t;
}, 0);
const u4 = l4;
function f4(e) {
  return e && e.length ? Qo(e, dt) : 0;
}
function c4(e, t) {
  return e && e.length ? Qo(e, se(t)) : 0;
}
function d4(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ft(e, 1, t) : [];
}
function p4(e, t, n) {
  return e && e.length ? (t = n || t === void 0 ? 1 : le(t), Ft(e, 0, t < 0 ? 0 : t)) : [];
}
function h4(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? (t = n || t === void 0 ? 1 : le(t), t = r - t, Ft(e, t < 0 ? 0 : t, r)) : [];
}
function m4(e, t) {
  return e && e.length ? ss(e, se(t), !1, !0) : [];
}
function g4(e, t) {
  return e && e.length ? ss(e, se(t)) : [];
}
function _4(e, t) {
  return t(e), e;
}
var Td = Object.prototype, v4 = Td.hasOwnProperty;
function zl(e, t, n, r) {
  return e === void 0 || Gt(e, Td[n]) && !v4.call(r, n) ? t : e;
}
var y4 = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function b4(e) {
  return "\\" + y4[e];
}
var w4 = /<%=([\s\S]+?)%>/g;
const Sd = w4;
var $4 = /<%-([\s\S]+?)%>/g;
const A4 = $4;
var O4 = /<%([\s\S]+?)%>/g;
const R4 = O4;
var E4 = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  escape: A4,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  evaluate: R4,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  interpolate: Sd,
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
    _: { escape: Hc }
  }
};
const so = E4;
var k4 = "Invalid `variable` option passed into `_.template`", T4 = /\b__p \+= '';/g, S4 = /\b(__p \+=) '' \+/g, P4 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, I4 = /[()=,{}\[\]\/\s]/, j4 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, bi = /($^)/, C4 = /['\n\r\u2028\u2029\\]/g, L4 = Object.prototype, ql = L4.hasOwnProperty;
function M4(e, t, n) {
  var r = so.imports._.templateSettings || so;
  n && ft(e, t, n) && (t = void 0), e = Re(e), t = Mi({}, t, r, zl);
  var i = Mi({}, t.imports, r.imports, zl), o = xe(i), s = Yo(i, o), a, l, u = 0, f = t.interpolate || bi, c = "__p += '", d = RegExp(
    (t.escape || bi).source + "|" + f.source + "|" + (f === Sd ? j4 : bi).source + "|" + (t.evaluate || bi).source + "|$",
    "g"
  ), g = ql.call(t, "sourceURL") ? "//# sourceURL=" + (t.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  e.replace(d, function(b, v, A, F, G, P) {
    return A || (A = F), c += e.slice(u, P).replace(C4, b4), v && (a = !0, c += `' +
__e(` + v + `) +
'`), G && (l = !0, c += `';
` + G + `;
__p += '`), A && (c += `' +
((__t = (` + A + `)) == null ? '' : __t) +
'`), u = P + b.length, b;
  }), c += `';
`;
  var m = ql.call(t, "variable") && t.variable;
  if (!m)
    c = `with (obj) {
` + c + `
}
`;
  else if (I4.test(m))
    throw new Error(k4);
  c = (l ? c.replace(T4, "") : c).replace(S4, "$1").replace(P4, "$1;"), c = "function(" + (m || "obj") + `) {
` + (m ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + c + `return __p
}`;
  var _ = Uf(function() {
    return Function(o, g + "return " + c).apply(void 0, s);
  });
  if (_.source = c, Oo(_))
    throw _;
  return _;
}
var N4 = "Expected a function";
function F4(e, t, n) {
  var r = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(N4);
  return Ue(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Mc(e, t, {
    leading: r,
    maxWait: t,
    trailing: i
  });
}
function ui(e, t) {
  return t(e);
}
var W4 = 9007199254740991, Ms = 4294967295, D4 = Math.min;
function U4(e, t) {
  if (e = le(e), e < 1 || e > W4)
    return [];
  var n = Ms, r = D4(e, Ms);
  t = en(t), e -= Ms;
  for (var i = yo(r, t); ++n < e; )
    t(n);
  return i;
}
function B4() {
  return this;
}
function Pd(e, t) {
  var n = e;
  return n instanceof me && (n = n.value()), To(t, function(r, i) {
    return i.func.apply(i.thisArg, Pn([r], i.args));
  }, n);
}
function Ns() {
  return Pd(this.__wrapped__, this.__actions__);
}
function z4(e) {
  return Re(e).toLowerCase();
}
function q4(e) {
  return oe(e) ? De(e, Qt) : Et(e) ? [e] : vt(Ff(Re(e)));
}
var Gl = 9007199254740991;
function G4(e) {
  return e ? Qn(le(e), -Gl, Gl) : e === 0 ? e : 0;
}
function H4(e) {
  return Re(e).toUpperCase();
}
function K4(e, t, n) {
  var r = oe(e), i = r || kn(e) || kr(e);
  if (t = se(t), n == null) {
    var o = e && e.constructor;
    i ? n = r ? new o() : [] : Ue(e) ? n = un(o) ? Ar(ts(e)) : {} : n = {};
  }
  return (i ? Wt : xt)(e, function(s, a, l) {
    return t(n, s, a, l);
  }), n;
}
function Id(e, t) {
  for (var n = e.length; n-- && Or(t, e[n], 0) > -1; )
    ;
  return n;
}
function jd(e, t) {
  for (var n = -1, r = e.length; ++n < r && Or(t, e[n], 0) > -1; )
    ;
  return n;
}
function Y4(e, t, n) {
  if (e = Re(e), e && (n || t === void 0))
    return yf(e);
  if (!e || !(t = kt(t)))
    return e;
  var r = qt(e), i = qt(t), o = jd(r, i), s = Id(r, i) + 1;
  return In(r, o, s).join("");
}
function J4(e, t, n) {
  if (e = Re(e), e && (n || t === void 0))
    return e.slice(0, vf(e) + 1);
  if (!e || !(t = kt(t)))
    return e;
  var r = qt(e), i = Id(r, qt(t)) + 1;
  return In(r, 0, i).join("");
}
var X4 = /^\s+/;
function Z4(e, t, n) {
  if (e = Re(e), e && (n || t === void 0))
    return e.replace(X4, "");
  if (!e || !(t = kt(t)))
    return e;
  var r = qt(e), i = jd(r, qt(t));
  return In(r, i).join("");
}
var V4 = 30, Q4 = "...", x4 = /\w*$/;
function e3(e, t) {
  var n = V4, r = Q4;
  if (Ue(t)) {
    var i = "separator" in t ? t.separator : i;
    n = "length" in t ? le(t.length) : n, r = "omission" in t ? kt(t.omission) : r;
  }
  e = Re(e);
  var o = e.length;
  if (Tr(e)) {
    var s = qt(e);
    o = s.length;
  }
  if (n >= o)
    return e;
  var a = n - Ir(r);
  if (a < 1)
    return r;
  var l = s ? In(s, 0, a).join("") : e.slice(0, a);
  if (i === void 0)
    return l + r;
  if (s && (a += l.length - a), Zo(i)) {
    if (e.slice(a).search(i)) {
      var u, f = l;
      for (i.global || (i = RegExp(i.source, Re(x4.exec(i)) + "g")), i.lastIndex = 0; u = i.exec(f); )
        var c = u.index;
      l = l.slice(0, c === void 0 ? a : c);
    }
  } else if (e.indexOf(kt(i), a) != a) {
    var d = l.lastIndexOf(i);
    d > -1 && (l = l.slice(0, d));
  }
  return l + r;
}
function t3(e) {
  return Pf(e, 1);
}
var n3 = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, r3 = So(n3);
const i3 = r3;
var Cd = /&(?:amp|lt|gt|quot|#39);/g, s3 = RegExp(Cd.source);
function o3(e) {
  return e = Re(e), e && s3.test(e) ? e.replace(Cd, i3) : e;
}
var a3 = 1 / 0, l3 = yr && 1 / ns(new yr([, -0]))[1] == a3 ? function(e) {
  return new yr(e);
} : mo, u3 = 200;
function Tn(e, t, n) {
  var r = -1, i = Xi, o = e.length, s = !0, a = [], l = a;
  if (n)
    s = !1, i = Go;
  else if (o >= u3) {
    var u = t ? null : l3(e);
    if (u)
      return ns(u);
    s = !1, i = Jr, l = new Yn();
  } else
    l = t ? [] : a;
  e:
    for (; ++r < o; ) {
      var f = e[r], c = t ? t(f) : f;
      if (f = n || f !== 0 ? f : 0, s && c === c) {
        for (var d = l.length; d--; )
          if (l[d] === c)
            continue e;
        t && l.push(c), a.push(f);
      } else
        i(l, c, n) || (l !== a && l.push(c), a.push(f));
    }
  return a;
}
var f3 = ce(function(e) {
  return Tn(st(e, 1, Je, !0));
});
const c3 = f3;
var d3 = ce(function(e) {
  var t = Pt(e);
  return Je(t) && (t = void 0), Tn(st(e, 1, Je, !0), se(t));
});
const p3 = d3;
var h3 = ce(function(e) {
  var t = Pt(e);
  return t = typeof t == "function" ? t : void 0, Tn(st(e, 1, Je, !0), void 0, t);
});
const m3 = h3;
function g3(e) {
  return e && e.length ? Tn(e) : [];
}
function _3(e, t) {
  return e && e.length ? Tn(e, se(t)) : [];
}
function v3(e, t) {
  return t = typeof t == "function" ? t : void 0, e && e.length ? Tn(e, void 0, t) : [];
}
var y3 = 0;
function b3(e) {
  var t = ++y3;
  return Re(e) + t;
}
function w3(e, t) {
  return e == null ? !0 : xo(e, t);
}
var $3 = Math.max;
function aa(e) {
  if (!(e && e.length))
    return [];
  var t = 0;
  return e = jn(e, function(n) {
    if (Je(n))
      return t = $3(n.length, t), !0;
  }), yo(t, function(n) {
    return De(e, Uo(n));
  });
}
function Ld(e, t) {
  if (!(e && e.length))
    return [];
  var n = aa(e);
  return t == null ? n : De(n, function(r) {
    return Tt(t, void 0, r);
  });
}
function Md(e, t, n, r) {
  return li(e, t, n(Vn(e, t)), r);
}
function A3(e, t, n) {
  return e == null ? e : Md(e, t, en(n));
}
function O3(e, t, n, r) {
  return r = typeof r == "function" ? r : void 0, e == null ? e : Md(e, t, en(n), r);
}
var R3 = Sr(function(e, t, n) {
  return e + (n ? " " : "") + t.toUpperCase();
});
const E3 = R3;
function k3(e) {
  return e == null ? [] : Yo(e, $t(e));
}
var T3 = ce(function(e, t) {
  return Je(e) ? si(e, t) : [];
});
const S3 = T3;
function P3(e, t) {
  return wd(en(t), e);
}
var I3 = mn(function(e) {
  var t = e.length, n = t ? e[0] : 0, r = this.__wrapped__, i = function(o) {
    return Ao(o, e);
  };
  return t > 1 || this.__actions__.length || !(r instanceof me) || !fn(n) ? this.thru(i) : (r = r.slice(n, +n + (t ? 1 : 0)), r.__actions__.push({
    func: ui,
    args: [i],
    thisArg: void 0
  }), new Mt(r, this.__chain__).thru(function(o) {
    return t && !o.length && o.push(void 0), o;
  }));
});
const j3 = I3;
function C3() {
  return dc(this);
}
function L3() {
  var e = this.__wrapped__;
  if (e instanceof me) {
    var t = e;
    return this.__actions__.length && (t = new me(this)), t = t.reverse(), t.__actions__.push({
      func: ui,
      args: [io],
      thisArg: void 0
    }), new Mt(t, this.__chain__);
  }
  return this.thru(io);
}
function la(e, t, n) {
  var r = e.length;
  if (r < 2)
    return r ? Tn(e[0]) : [];
  for (var i = -1, o = Array(r); ++i < r; )
    for (var s = e[i], a = -1; ++a < r; )
      a != i && (o[i] = si(o[i] || s, e[a], t, n));
  return Tn(st(o, 1), t, n);
}
var M3 = ce(function(e) {
  return la(jn(e, Je));
});
const N3 = M3;
var F3 = ce(function(e) {
  var t = Pt(e);
  return Je(t) && (t = void 0), la(jn(e, Je), se(t));
});
const W3 = F3;
var D3 = ce(function(e) {
  var t = Pt(e);
  return t = typeof t == "function" ? t : void 0, la(jn(e, Je), void 0, t);
});
const U3 = D3;
var B3 = ce(aa);
const z3 = B3;
function Nd(e, t, n) {
  for (var r = -1, i = e.length, o = t.length, s = {}; ++r < i; ) {
    var a = r < o ? t[r] : void 0;
    n(s, e[r], a);
  }
  return s;
}
function q3(e, t) {
  return Nd(e || [], t || [], ti);
}
function G3(e, t) {
  return Nd(e || [], t || [], li);
}
var H3 = ce(function(e) {
  var t = e.length, n = t > 1 ? e[t - 1] : void 0;
  return n = typeof n == "function" ? (e.pop(), n) : void 0, Ld(e, n);
});
const K3 = H3, q = {
  chunk: x0,
  compact: Nv,
  concat: Fv,
  difference: Zy,
  differenceBy: Qy,
  differenceWith: eb,
  drop: rb,
  dropRight: ib,
  dropRightWhile: sb,
  dropWhile: ob,
  fill: Eb,
  findIndex: Vc,
  findLastIndex: xc,
  first: Ml,
  flatten: Wf,
  flattenDeep: zb,
  flattenDepth: qb,
  fromPairs: aw,
  head: Ml,
  indexOf: Pw,
  initial: Iw,
  intersection: Lw,
  intersectionBy: Nw,
  intersectionWith: Ww,
  join: U2,
  last: Pt,
  lastIndexOf: J2,
  nth: S$,
  pull: MA,
  pullAll: $d,
  pullAllBy: NA,
  pullAllWith: FA,
  pullAt: BA,
  remove: lO,
  reverse: io,
  slice: PO,
  sortedIndex: qO,
  sortedIndexBy: GO,
  sortedIndexOf: HO,
  sortedLastIndex: KO,
  sortedLastIndexBy: YO,
  sortedLastIndexOf: JO,
  sortedUniq: XO,
  sortedUniqBy: ZO,
  tail: d4,
  take: p4,
  takeRight: h4,
  takeRightWhile: m4,
  takeWhile: g4,
  union: c3,
  unionBy: p3,
  unionWith: m3,
  uniq: g3,
  uniqBy: _3,
  uniqWith: v3,
  unzip: aa,
  unzipWith: Ld,
  without: S3,
  xor: N3,
  xorBy: W3,
  xorWith: U3,
  zip: z3,
  zipObject: q3,
  zipObjectDeep: G3,
  zipWith: K3
}, Te = {
  countBy: ky,
  each: Il,
  eachRight: jl,
  every: Ab,
  filter: kb,
  find: Pb,
  findLast: Mb,
  flatMap: Fb,
  flatMapDeep: Db,
  flatMapDepth: Ub,
  forEach: Il,
  forEachRight: jl,
  groupBy: pw,
  includes: Tw,
  invokeMap: Vw,
  keyBy: G2,
  map: os,
  orderBy: B$,
  partition: EA,
  reduce: iO,
  reduceRight: oO,
  reject: aO,
  sample: yO,
  sampleSize: $O,
  shuffle: EO,
  size: SO,
  some: LO,
  sortBy: NO
}, Y3 = {
  now: Pi
}, He = {
  after: yh,
  ary: Pf,
  before: Bf,
  bind: zf,
  bindKey: Mg,
  curry: zo,
  curryRight: qo,
  debounce: Mc,
  defer: Hy,
  delay: Yy,
  flip: Hb,
  memoize: es,
  negate: ai,
  once: W$,
  overArgs: Y$,
  partial: wd,
  partialRight: OA,
  rearg: rO,
  rest: dO,
  spread: t4,
  throttle: F4,
  unary: t3,
  wrap: P3
}, V = {
  castArray: K0,
  clone: Ev,
  cloneDeep: Sv,
  cloneDeepWith: jv,
  cloneWith: Lv,
  conformsTo: wy,
  eq: Gt,
  gt: mw,
  gte: _w,
  isArguments: Hn,
  isArray: oe,
  isArrayBuffer: t2,
  isArrayLike: wt,
  isArrayLikeObject: Je,
  isBoolean: r2,
  isBuffer: kn,
  isDate: a2,
  isElement: l2,
  isEmpty: p2,
  isEqual: h2,
  isEqualWith: m2,
  isError: Oo,
  isFinite: _2,
  isFunction: un,
  isInteger: sd,
  isLength: Vi,
  isMap: bc,
  isMatch: v2,
  isMatchWith: y2,
  isNaN: w2,
  isNative: O2,
  isNil: R2,
  isNull: E2,
  isNumber: od,
  isObject: Ue,
  isObjectLike: Ge,
  isPlainObject: ri,
  isRegExp: Zo,
  isSafeInteger: P2,
  isSet: wc,
  isString: us,
  isSymbol: Et,
  isTypedArray: kr,
  isUndefined: I2,
  isWeakMap: C2,
  isWeakSet: M2,
  lt: e$,
  lte: n$,
  toArray: ud,
  toFinite: ln,
  toInteger: le,
  toLength: Jc,
  toNumber: Ct,
  toPlainObject: Fc,
  toSafeInteger: G4,
  toString: Re
}, pt = {
  add: fh,
  ceil: Z0,
  divide: nb,
  floor: Yb,
  max: u$,
  maxBy: f$,
  mean: d$,
  meanBy: p$,
  min: b$,
  minBy: w$,
  multiply: A$,
  round: _O,
  subtract: u4,
  sum: f4,
  sumBy: c4
}, ua = {
  clamp: e_,
  inRange: Rw,
  random: YA
}, re = {
  assign: S1,
  assignIn: ll,
  assignInWith: Mi,
  assignWith: F1,
  at: vg,
  create: Ty,
  defaults: Wy,
  defaultsDeep: zy,
  entries: Cl,
  entriesIn: Ll,
  extend: ll,
  extendWith: Mi,
  findKey: Ib,
  findLastKey: Nb,
  forIn: rw,
  forInRight: iw,
  forOwn: sw,
  forOwnRight: ow,
  functions: lw,
  functionsIn: uw,
  get: wr,
  has: ww,
  hasIn: Do,
  invert: qw,
  invertBy: Yw,
  invoke: Xw,
  keys: xe,
  keysIn: $t,
  mapKeys: r$,
  mapValues: i$,
  merge: m$,
  mergeWith: Dc,
  omit: N$,
  omitBy: F$,
  pick: SA,
  pickBy: dd,
  result: pO,
  set: sa,
  setWith: AO,
  toPairs: Cl,
  toPairsIn: Ll,
  transform: K4,
  unset: w3,
  update: A3,
  updateWith: O3,
  values: Pr,
  valuesIn: k3
}, tn = {
  at: j3,
  chain: dc,
  commit: Mv,
  lodash: p,
  next: T$,
  plant: PA,
  reverse: L3,
  tap: _4,
  thru: ui,
  toIterator: B4,
  toJSON: Ns,
  value: Ns,
  valueOf: Ns,
  wrapperChain: C3
}, Oe = {
  camelCase: H0,
  capitalize: Zf,
  deburr: Vf,
  endsWith: ub,
  escape: Hc,
  escapeRegExp: wb,
  kebabCase: z2,
  lowerCase: Z2,
  lowerFirst: Q2,
  pad: gA,
  padEnd: _A,
  padStart: vA,
  parseInt: wA,
  repeat: uO,
  replace: fO,
  snakeCase: jO,
  split: QO,
  startCase: r4,
  startsWith: i4,
  template: M4,
  templateSettings: so,
  toLower: z4,
  toUpper: H4,
  trim: Y4,
  trimEnd: J4,
  trimStart: Z4,
  truncate: e3,
  unescape: o3,
  upperCase: E3,
  upperFirst: ko,
  words: cc
}, Ee = {
  attempt: Uf,
  bindAll: Ig,
  cond: _y,
  conforms: by,
  constant: _o,
  defaultTo: My,
  flow: ew,
  flowRight: nw,
  identity: dt,
  iteratee: F2,
  matches: o$,
  matchesProperty: l$,
  method: _$,
  methodOf: y$,
  mixin: ld,
  noop: mo,
  nthArg: P$,
  over: q$,
  overEvery: X$,
  overSome: V$,
  property: Ic,
  propertyOf: IA,
  range: QA,
  rangeRight: eO,
  stubArray: Io,
  stubFalse: bo,
  stubObject: s4,
  stubString: o4,
  stubTrue: a4,
  times: U4,
  toPath: q4,
  uniqueId: b3
};
function J3() {
  var e = new me(this.__wrapped__);
  return e.__actions__ = vt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = vt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = vt(this.__views__), e;
}
function X3() {
  if (this.__filtered__) {
    var e = new me(this);
    e.__dir__ = -1, e.__filtered__ = !0;
  } else
    e = this.clone(), e.__dir__ *= -1;
  return e;
}
var Z3 = Math.max, V3 = Math.min;
function Q3(e, t, n) {
  for (var r = -1, i = n.length; ++r < i; ) {
    var o = n[r], s = o.size;
    switch (o.type) {
      case "drop":
        e += s;
        break;
      case "dropRight":
        t -= s;
        break;
      case "take":
        t = V3(t, e + s);
        break;
      case "takeRight":
        e = Z3(e, t - s);
        break;
    }
  }
  return { start: e, end: t };
}
var x3 = 1, e9 = 2, t9 = Math.min;
function n9() {
  var e = this.__wrapped__.value(), t = this.__dir__, n = oe(e), r = t < 0, i = n ? e.length : 0, o = Q3(0, i, this.__views__), s = o.start, a = o.end, l = a - s, u = r ? a : s - 1, f = this.__iteratees__, c = f.length, d = 0, g = t9(l, this.__takeCount__);
  if (!n || !r && i == l && g == l)
    return Pd(e, this.__actions__);
  var m = [];
  e:
    for (; l-- && d < g; ) {
      u += t;
      for (var _ = -1, b = e[u]; ++_ < c; ) {
        var v = f[_], A = v.iteratee, F = v.type, G = A(b);
        if (F == e9)
          b = G;
        else if (!G) {
          if (F == x3)
            continue e;
          break e;
        }
      }
      m[d++] = b;
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
var r9 = "4.17.21", i9 = 2, s9 = 1, o9 = 3, Fd = 4294967295, a9 = Array.prototype, l9 = Object.prototype, Wd = l9.hasOwnProperty, Hl = at ? at.iterator : void 0, u9 = Math.max, Kl = Math.min, fa = /* @__PURE__ */ function(e) {
  return function(t, n, r) {
    if (r == null) {
      var i = Ue(n), o = i && xe(n), s = o && o.length && as(n, o);
      (s ? s.length : i) || (r = n, n = t, t = this);
    }
    return e(t, n, r);
  };
}(ld);
p.after = He.after;
p.ary = He.ary;
p.assign = re.assign;
p.assignIn = re.assignIn;
p.assignInWith = re.assignInWith;
p.assignWith = re.assignWith;
p.at = re.at;
p.before = He.before;
p.bind = He.bind;
p.bindAll = Ee.bindAll;
p.bindKey = He.bindKey;
p.castArray = V.castArray;
p.chain = tn.chain;
p.chunk = q.chunk;
p.compact = q.compact;
p.concat = q.concat;
p.cond = Ee.cond;
p.conforms = Ee.conforms;
p.constant = Ee.constant;
p.countBy = Te.countBy;
p.create = re.create;
p.curry = He.curry;
p.curryRight = He.curryRight;
p.debounce = He.debounce;
p.defaults = re.defaults;
p.defaultsDeep = re.defaultsDeep;
p.defer = He.defer;
p.delay = He.delay;
p.difference = q.difference;
p.differenceBy = q.differenceBy;
p.differenceWith = q.differenceWith;
p.drop = q.drop;
p.dropRight = q.dropRight;
p.dropRightWhile = q.dropRightWhile;
p.dropWhile = q.dropWhile;
p.fill = q.fill;
p.filter = Te.filter;
p.flatMap = Te.flatMap;
p.flatMapDeep = Te.flatMapDeep;
p.flatMapDepth = Te.flatMapDepth;
p.flatten = q.flatten;
p.flattenDeep = q.flattenDeep;
p.flattenDepth = q.flattenDepth;
p.flip = He.flip;
p.flow = Ee.flow;
p.flowRight = Ee.flowRight;
p.fromPairs = q.fromPairs;
p.functions = re.functions;
p.functionsIn = re.functionsIn;
p.groupBy = Te.groupBy;
p.initial = q.initial;
p.intersection = q.intersection;
p.intersectionBy = q.intersectionBy;
p.intersectionWith = q.intersectionWith;
p.invert = re.invert;
p.invertBy = re.invertBy;
p.invokeMap = Te.invokeMap;
p.iteratee = Ee.iteratee;
p.keyBy = Te.keyBy;
p.keys = xe;
p.keysIn = re.keysIn;
p.map = Te.map;
p.mapKeys = re.mapKeys;
p.mapValues = re.mapValues;
p.matches = Ee.matches;
p.matchesProperty = Ee.matchesProperty;
p.memoize = He.memoize;
p.merge = re.merge;
p.mergeWith = re.mergeWith;
p.method = Ee.method;
p.methodOf = Ee.methodOf;
p.mixin = fa;
p.negate = ai;
p.nthArg = Ee.nthArg;
p.omit = re.omit;
p.omitBy = re.omitBy;
p.once = He.once;
p.orderBy = Te.orderBy;
p.over = Ee.over;
p.overArgs = He.overArgs;
p.overEvery = Ee.overEvery;
p.overSome = Ee.overSome;
p.partial = He.partial;
p.partialRight = He.partialRight;
p.partition = Te.partition;
p.pick = re.pick;
p.pickBy = re.pickBy;
p.property = Ee.property;
p.propertyOf = Ee.propertyOf;
p.pull = q.pull;
p.pullAll = q.pullAll;
p.pullAllBy = q.pullAllBy;
p.pullAllWith = q.pullAllWith;
p.pullAt = q.pullAt;
p.range = Ee.range;
p.rangeRight = Ee.rangeRight;
p.rearg = He.rearg;
p.reject = Te.reject;
p.remove = q.remove;
p.rest = He.rest;
p.reverse = q.reverse;
p.sampleSize = Te.sampleSize;
p.set = re.set;
p.setWith = re.setWith;
p.shuffle = Te.shuffle;
p.slice = q.slice;
p.sortBy = Te.sortBy;
p.sortedUniq = q.sortedUniq;
p.sortedUniqBy = q.sortedUniqBy;
p.split = Oe.split;
p.spread = He.spread;
p.tail = q.tail;
p.take = q.take;
p.takeRight = q.takeRight;
p.takeRightWhile = q.takeRightWhile;
p.takeWhile = q.takeWhile;
p.tap = tn.tap;
p.throttle = He.throttle;
p.thru = ui;
p.toArray = V.toArray;
p.toPairs = re.toPairs;
p.toPairsIn = re.toPairsIn;
p.toPath = Ee.toPath;
p.toPlainObject = V.toPlainObject;
p.transform = re.transform;
p.unary = He.unary;
p.union = q.union;
p.unionBy = q.unionBy;
p.unionWith = q.unionWith;
p.uniq = q.uniq;
p.uniqBy = q.uniqBy;
p.uniqWith = q.uniqWith;
p.unset = re.unset;
p.unzip = q.unzip;
p.unzipWith = q.unzipWith;
p.update = re.update;
p.updateWith = re.updateWith;
p.values = re.values;
p.valuesIn = re.valuesIn;
p.without = q.without;
p.words = Oe.words;
p.wrap = He.wrap;
p.xor = q.xor;
p.xorBy = q.xorBy;
p.xorWith = q.xorWith;
p.zip = q.zip;
p.zipObject = q.zipObject;
p.zipObjectDeep = q.zipObjectDeep;
p.zipWith = q.zipWith;
p.entries = re.toPairs;
p.entriesIn = re.toPairsIn;
p.extend = re.assignIn;
p.extendWith = re.assignInWith;
fa(p, p);
p.add = pt.add;
p.attempt = Ee.attempt;
p.camelCase = Oe.camelCase;
p.capitalize = Oe.capitalize;
p.ceil = pt.ceil;
p.clamp = ua.clamp;
p.clone = V.clone;
p.cloneDeep = V.cloneDeep;
p.cloneDeepWith = V.cloneDeepWith;
p.cloneWith = V.cloneWith;
p.conformsTo = V.conformsTo;
p.deburr = Oe.deburr;
p.defaultTo = Ee.defaultTo;
p.divide = pt.divide;
p.endsWith = Oe.endsWith;
p.eq = V.eq;
p.escape = Oe.escape;
p.escapeRegExp = Oe.escapeRegExp;
p.every = Te.every;
p.find = Te.find;
p.findIndex = q.findIndex;
p.findKey = re.findKey;
p.findLast = Te.findLast;
p.findLastIndex = q.findLastIndex;
p.findLastKey = re.findLastKey;
p.floor = pt.floor;
p.forEach = Te.forEach;
p.forEachRight = Te.forEachRight;
p.forIn = re.forIn;
p.forInRight = re.forInRight;
p.forOwn = re.forOwn;
p.forOwnRight = re.forOwnRight;
p.get = re.get;
p.gt = V.gt;
p.gte = V.gte;
p.has = re.has;
p.hasIn = re.hasIn;
p.head = q.head;
p.identity = dt;
p.includes = Te.includes;
p.indexOf = q.indexOf;
p.inRange = ua.inRange;
p.invoke = re.invoke;
p.isArguments = V.isArguments;
p.isArray = oe;
p.isArrayBuffer = V.isArrayBuffer;
p.isArrayLike = V.isArrayLike;
p.isArrayLikeObject = V.isArrayLikeObject;
p.isBoolean = V.isBoolean;
p.isBuffer = V.isBuffer;
p.isDate = V.isDate;
p.isElement = V.isElement;
p.isEmpty = V.isEmpty;
p.isEqual = V.isEqual;
p.isEqualWith = V.isEqualWith;
p.isError = V.isError;
p.isFinite = V.isFinite;
p.isFunction = V.isFunction;
p.isInteger = V.isInteger;
p.isLength = V.isLength;
p.isMap = V.isMap;
p.isMatch = V.isMatch;
p.isMatchWith = V.isMatchWith;
p.isNaN = V.isNaN;
p.isNative = V.isNative;
p.isNil = V.isNil;
p.isNull = V.isNull;
p.isNumber = V.isNumber;
p.isObject = Ue;
p.isObjectLike = V.isObjectLike;
p.isPlainObject = V.isPlainObject;
p.isRegExp = V.isRegExp;
p.isSafeInteger = V.isSafeInteger;
p.isSet = V.isSet;
p.isString = V.isString;
p.isSymbol = V.isSymbol;
p.isTypedArray = V.isTypedArray;
p.isUndefined = V.isUndefined;
p.isWeakMap = V.isWeakMap;
p.isWeakSet = V.isWeakSet;
p.join = q.join;
p.kebabCase = Oe.kebabCase;
p.last = Pt;
p.lastIndexOf = q.lastIndexOf;
p.lowerCase = Oe.lowerCase;
p.lowerFirst = Oe.lowerFirst;
p.lt = V.lt;
p.lte = V.lte;
p.max = pt.max;
p.maxBy = pt.maxBy;
p.mean = pt.mean;
p.meanBy = pt.meanBy;
p.min = pt.min;
p.minBy = pt.minBy;
p.stubArray = Ee.stubArray;
p.stubFalse = Ee.stubFalse;
p.stubObject = Ee.stubObject;
p.stubString = Ee.stubString;
p.stubTrue = Ee.stubTrue;
p.multiply = pt.multiply;
p.nth = q.nth;
p.noop = Ee.noop;
p.now = Y3.now;
p.pad = Oe.pad;
p.padEnd = Oe.padEnd;
p.padStart = Oe.padStart;
p.parseInt = Oe.parseInt;
p.random = ua.random;
p.reduce = Te.reduce;
p.reduceRight = Te.reduceRight;
p.repeat = Oe.repeat;
p.replace = Oe.replace;
p.result = re.result;
p.round = pt.round;
p.sample = Te.sample;
p.size = Te.size;
p.snakeCase = Oe.snakeCase;
p.some = Te.some;
p.sortedIndex = q.sortedIndex;
p.sortedIndexBy = q.sortedIndexBy;
p.sortedIndexOf = q.sortedIndexOf;
p.sortedLastIndex = q.sortedLastIndex;
p.sortedLastIndexBy = q.sortedLastIndexBy;
p.sortedLastIndexOf = q.sortedLastIndexOf;
p.startCase = Oe.startCase;
p.startsWith = Oe.startsWith;
p.subtract = pt.subtract;
p.sum = pt.sum;
p.sumBy = pt.sumBy;
p.template = Oe.template;
p.times = Ee.times;
p.toFinite = V.toFinite;
p.toInteger = le;
p.toLength = V.toLength;
p.toLower = Oe.toLower;
p.toNumber = V.toNumber;
p.toSafeInteger = V.toSafeInteger;
p.toString = V.toString;
p.toUpper = Oe.toUpper;
p.trim = Oe.trim;
p.trimEnd = Oe.trimEnd;
p.trimStart = Oe.trimStart;
p.truncate = Oe.truncate;
p.unescape = Oe.unescape;
p.uniqueId = Ee.uniqueId;
p.upperCase = Oe.upperCase;
p.upperFirst = Oe.upperFirst;
p.each = Te.forEach;
p.eachRight = Te.forEachRight;
p.first = q.head;
fa(p, function() {
  var e = {};
  return xt(p, function(t, n) {
    Wd.call(p.prototype, n) || (e[n] = t);
  }), e;
}(), { chain: !1 });
p.VERSION = r9;
(p.templateSettings = Oe.templateSettings).imports._ = p;
Wt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
  p[e].placeholder = p;
});
Wt(["drop", "take"], function(e, t) {
  me.prototype[e] = function(n) {
    n = n === void 0 ? 1 : u9(le(n), 0);
    var r = this.__filtered__ && !t ? new me(this) : this.clone();
    return r.__filtered__ ? r.__takeCount__ = Kl(n, r.__takeCount__) : r.__views__.push({
      size: Kl(n, Fd),
      type: e + (r.__dir__ < 0 ? "Right" : "")
    }), r;
  }, me.prototype[e + "Right"] = function(n) {
    return this.reverse()[e](n).reverse();
  };
});
Wt(["filter", "map", "takeWhile"], function(e, t) {
  var n = t + 1, r = n == s9 || n == o9;
  me.prototype[e] = function(i) {
    var o = this.clone();
    return o.__iteratees__.push({
      iteratee: se(i),
      type: n
    }), o.__filtered__ = o.__filtered__ || r, o;
  };
});
Wt(["head", "last"], function(e, t) {
  var n = "take" + (t ? "Right" : "");
  me.prototype[e] = function() {
    return this[n](1).value()[0];
  };
});
Wt(["initial", "tail"], function(e, t) {
  var n = "drop" + (t ? "" : "Right");
  me.prototype[e] = function() {
    return this.__filtered__ ? new me(this) : this[n](1);
  };
});
me.prototype.compact = function() {
  return this.filter(dt);
};
me.prototype.find = function(e) {
  return this.filter(e).head();
};
me.prototype.findLast = function(e) {
  return this.reverse().find(e);
};
me.prototype.invokeMap = ce(function(e, t) {
  return typeof e == "function" ? new me(this) : this.map(function(n) {
    return oi(n, e, t);
  });
});
me.prototype.reject = function(e) {
  return this.filter(ai(se(e)));
};
me.prototype.slice = function(e, t) {
  e = le(e);
  var n = this;
  return n.__filtered__ && (e > 0 || t < 0) ? new me(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== void 0 && (t = le(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
};
me.prototype.takeRightWhile = function(e) {
  return this.reverse().takeWhile(e).reverse();
};
me.prototype.toArray = function() {
  return this.take(Fd);
};
xt(me.prototype, function(e, t) {
  var n = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), i = p[r ? "take" + (t == "last" ? "Right" : "") : t], o = r || /^find/.test(t);
  i && (p.prototype[t] = function() {
    var s = this.__wrapped__, a = r ? [1] : arguments, l = s instanceof me, u = a[0], f = l || oe(s), c = function(v) {
      var A = i.apply(p, Pn([v], a));
      return r && d ? A[0] : A;
    };
    f && n && typeof u == "function" && u.length != 1 && (l = f = !1);
    var d = this.__chain__, g = !!this.__actions__.length, m = o && !d, _ = l && !g;
    if (!o && f) {
      s = _ ? s : new me(this);
      var b = e.apply(s, a);
      return b.__actions__.push({ func: ui, args: [c], thisArg: void 0 }), new Mt(b, d);
    }
    return m && _ ? e.apply(this, a) : (b = this.thru(c), m ? r ? b.value()[0] : b.value() : b);
  });
});
Wt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
  var t = a9[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
  p.prototype[e] = function() {
    var i = arguments;
    if (r && !this.__chain__) {
      var o = this.value();
      return t.apply(oe(o) ? o : [], i);
    }
    return this[n](function(s) {
      return t.apply(oe(s) ? s : [], i);
    });
  };
});
xt(me.prototype, function(e, t) {
  var n = p[t];
  if (n) {
    var r = n.name + "";
    Wd.call(vr, r) || (vr[r] = []), vr[r].push({ name: t, func: n });
  }
});
vr[Zi(void 0, i9).name] = [{
  name: "wrapper",
  func: void 0
}];
me.prototype.clone = J3;
me.prototype.reverse = X3;
me.prototype.value = n9;
p.prototype.at = tn.at;
p.prototype.chain = tn.wrapperChain;
p.prototype.commit = tn.commit;
p.prototype.next = tn.next;
p.prototype.plant = tn.plant;
p.prototype.reverse = tn.reverse;
p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = tn.value;
p.prototype.first = p.prototype.head;
Hl && (p.prototype[Hl] = tn.toIterator);
const f9 = (e, t, n) => {
  const r = e.indexOf(t, n);
  return r < 0 ? e.substring(n || 0) : e.substring(n || 0, r);
}, Dd = (e, t, n) => {
  const r = e.indexOf(t, n);
  return r < 0 ? "" : e.substring(r + t.length);
}, Xr = (e, t, n) => {
  const r = e.lastIndexOf(t, n);
  return r < 0 ? "" : e.substring(r + t.length, n || e.length);
};
function c9(e) {
  e = e.trim();
  const t = [];
  let n = 0;
  for (let r = 1; r < e.length; r++)
    "A" <= e[r] && e[r] <= "Z" && (t.push(e.substring(n, r).toLowerCase()), n = r);
  return t.push(e.substring(n, e.length).toLowerCase()), t.join(" ");
}
function d9(e) {
  return c9(e).replace(/[a-z]/i, (t) => t.toUpperCase());
}
function p9(e) {
  e == null && (e = {});
  let t = oo(e);
  return Ii(t), t;
}
function Ii(e) {
  let t = e.required || [];
  if (e.$ref)
    return;
  switch (e.type) {
    case "object":
      const r = e.properties || {};
      for (let o in r)
        t.indexOf(o) < 0 && Ii(r[o]);
      break;
    case "array":
      const i = e.items || {};
      Ii(i), i.oneOf && !i.oneOf.some((o) => o.type == "null") && i.oneOf.push({ type: "null" });
      break;
    default:
      Array.isArray(e.type) ? e.type.indexOf("null") < 0 && e.type.push("null") : e.type != "null" && (e.type = [e.type, "null"]);
      break;
  }
  const n = e.definitions;
  if (n)
    for (let r in n)
      Ii(n[r]);
}
function oo(e) {
  var t;
  if (e == null || typeof e != "object")
    return e;
  if (e instanceof Date)
    return t = /* @__PURE__ */ new Date(), t.setTime(e.getTime()), t;
  if (e instanceof Array) {
    t = [];
    for (var n = 0, r = e.length; n < r; n++)
      t[n] = oo(e[n]);
    return t;
  }
  if (e instanceof Object) {
    t = {};
    const o = e;
    for (var i in o)
      o.hasOwnProperty(i) && (t[i] = oo(o[i]));
    return t;
  }
  throw new Error("Unable to copy obj! Its type isn't supported.");
}
let h9 = 0;
const m9 = () => h9++, g9 = (e, t) => {
  if (!e || !t)
    return e;
  const n = e.split("${"), r = [];
  r.push(n.shift());
  for (let i of n)
    if (i.includes("}")) {
      const o = f9(i, "}"), s = (o === "" ? t : wr(t, o)) || "";
      r.push(`${s}${Dd(i, "}")}`);
    }
  return r.join("");
};
function _9(e) {
  let t = 0, n = e.length;
  return e[t] === "/" && t++, e[n - 1] === "/" && n--, n <= t ? "" : e.substring(t, n);
}
function v9(...e) {
  const t = e.filter((o) => !!o);
  if (t.length === 0)
    return "";
  const n = t[0].startsWith("/"), r = t[t.length - 1].endsWith("/");
  let i = t.map((o) => _9(o)).filter((o) => !!o).join("/");
  return n && (i = "/" + i), r && i !== "/" && (i += "/"), i;
}
function It(e) {
  return (e || "").replace(`
`, "<br/>");
}
function Ud(e) {
  let t = e.type;
  switch (e.enum && (t = "enum"), e.format && (t += "-" + e.format), e.hidden && (t = "hidden"), e.editor && (t = e.editor), t) {
    case "string-date-time":
    case "string-date":
    case "string-time":
    case "string-email":
    case "string-password":
    case "number-currency":
      return e.format;
    default:
      return t;
  }
}
function ca(e) {
  switch (e.type || "") {
    case "object":
      return {};
    case "array":
      return [];
    default:
      return null;
  }
}
function Jn(e, t) {
  var n;
  return e.title || d9(((n = t.slice(-1)) == null ? void 0 : n[0]) || "");
}
function Fs(e) {
  var r;
  e.startsWith("/") ? e = e.substring(1) : e.startsWith("#/") ? e = e.substring(2) : e.startsWith("http") && (e = ((r = e.split("#/")) == null ? void 0 : r[1]) || "");
  const t = [];
  e.split("/").forEach((i) => {
    const o = parseInt(i);
    isNaN(o) ? t.push(`.${i}`) : t.push(`[${i}]`);
  });
  let n = t.join("");
  return n.startsWith(".") && (n = n.substring(1)), n;
}
function y9(e) {
  let t, n, r, i;
  function o(l) {
    e[4](l);
  }
  var s = (
    /*component*/
    e[3]
  );
  function a(l, u) {
    let f = {
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
      l[0] !== void 0 && (f.schema = /*schema*/
      l[0]), { props: f }
    );
  }
  return s && (t = qe(s, a(e)), rt.push(() => Ut(t, "schema", o))), {
    c() {
      t && ve(t.$$.fragment), r = Xe();
    },
    m(l, u) {
      t && ge(t, l, u), k(l, r, u), i = !0;
    },
    p(l, [u]) {
      if (u & /*component*/
      8 && s !== (s = /*component*/
      l[3])) {
        if (t) {
          we();
          const f = t;
          W(f.$$.fragment, 1, 0, () => {
            _e(f, 1);
          }), $e();
        }
        s ? (t = qe(s, a(l)), rt.push(() => Ut(t, "schema", o)), ve(t.$$.fragment), L(t.$$.fragment, 1), ge(t, r.parentNode, r)) : t = null;
      } else if (s) {
        const f = {};
        u & /*params*/
        2 && (f.params = /*params*/
        l[1]), u & /*value*/
        4 && (f.value = /*value*/
        l[2]), !n && u & /*schema*/
        1 && (n = !0, f.schema = /*schema*/
        l[0], an(() => n = !1)), t.$set(f);
      }
    },
    i(l) {
      i || (t && L(t.$$.fragment, l), i = !0);
    },
    o(l) {
      t && W(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && E(r), t && _e(t, l);
    }
  };
}
function b9(e, t, n) {
  let { params: r } = t, { schema: i } = t, { value: o } = t, { components: s } = r, a;
  function l(u) {
    i = u, n(0, i);
  }
  return e.$$set = (u) => {
    "params" in u && n(1, r = u.params), "schema" in u && n(0, i = u.schema), "value" in u && n(2, o = u.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    1 && n(3, a = s[Ud(i)]);
  }, [i, r, o, a, l];
}
class $r extends Ne {
  constructor(t) {
    super(), Me(this, t, b9, y9, Ce, { params: 1, schema: 0, value: 2 });
  }
}
function w9(e) {
  let t, n, r, i, o, s, a;
  return {
    c() {
      t = I("input"), h(t, "id", n = /*params*/
      e[0].path.join(".")), h(t, "name", r = /*params*/
      e[0].path.join(".")), h(
        t,
        "type",
        /*type*/
        e[3]
      ), t.value = i = /*value*/
      e[2] || "", t.disabled = o = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly, h(t, "class", "border w-full");
    },
    m(l, u) {
      k(l, t, u), s || (a = Y(
        t,
        "input",
        /*input_handler*/
        e[4]
      ), s = !0);
    },
    p(l, u) {
      u & /*params*/
      1 && n !== (n = /*params*/
      l[0].path.join(".")) && h(t, "id", n), u & /*params*/
      1 && r !== (r = /*params*/
      l[0].path.join(".")) && h(t, "name", r), u & /*type*/
      8 && h(
        t,
        "type",
        /*type*/
        l[3]
      ), u & /*value*/
      4 && i !== (i = /*value*/
      l[2] || "") && t.value !== i && (t.value = i), u & /*schema, params*/
      3 && o !== (o = /*schema*/
      l[1].readOnly || /*params*/
      l[0].containerReadOnly) && (t.disabled = o);
    },
    d(l) {
      l && E(t), s = !1, a();
    }
  };
}
function $9(e) {
  let t, n, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function o(s, a) {
    return {
      props: {
        params: (
          /*params*/
          s[0]
        ),
        schema: (
          /*schema*/
          s[1]
        ),
        $$slots: { default: [w9] },
        $$scope: { ctx: s }
      }
    };
  }
  return i && (t = qe(i, o(e))), {
    c() {
      t && ve(t.$$.fragment), n = Xe();
    },
    m(s, a) {
      t && ge(t, s, a), k(s, n, a), r = !0;
    },
    p(s, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      s[0].components.fieldWrapper)) {
        if (t) {
          we();
          const l = t;
          W(l.$$.fragment, 1, 0, () => {
            _e(l, 1);
          }), $e();
        }
        i ? (t = qe(i, o(s)), ve(t.$$.fragment), L(t.$$.fragment, 1), ge(t, n.parentNode, n)) : t = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        s[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        s[1]), a & /*$$scope, params, type, value, schema*/
        47 && (l.$$scope = { dirty: a, ctx: s }), t.$set(l);
      }
    },
    i(s) {
      r || (t && L(t.$$.fragment, s), r = !0);
    },
    o(s) {
      t && W(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(n), t && _e(t, s);
    }
  };
}
function A9(e, t, n) {
  let { params: r } = t, { schema: i } = t, { value: o } = t, s = "text";
  const a = (l) => r.pathChanged(r.path, l.currentTarget.value || void 0);
  return e.$$set = (l) => {
    "params" in l && n(0, r = l.params), "schema" in l && n(1, i = l.schema), "value" in l && n(2, o = l.value);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*schema*/
    2) {
      const l = Ud(i);
      n(3, s = l === "password" ? "password" : l === "email" ? "email" : l === "time" ? "time" : l === "date-time" ? "datetime-local" : l === "date" ? "date" : "text");
    }
  }, [r, i, o, s, a];
}
let Wn = class extends Ne {
  constructor(t) {
    super(), Me(this, t, A9, $9, Ce, { params: 0, schema: 1, value: 2 });
  }
};
function O9(e) {
  let t, n;
  return {
    c() {
      t = yt("svg"), n = yt("path"), h(n, "d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"), h(t, "fill", "#777"), h(t, "viewBox", "0 0 24 24"), ut(
        t,
        "width",
        /*sizePx*/
        e[0]
      ), ut(
        t,
        "height",
        /*sizePx*/
        e[0]
      );
    },
    m(r, i) {
      k(r, t, i), D(t, n);
    },
    p(r, [i]) {
      i & /*sizePx*/
      1 && ut(
        t,
        "width",
        /*sizePx*/
        r[0]
      ), i & /*sizePx*/
      1 && ut(
        t,
        "height",
        /*sizePx*/
        r[0]
      );
    },
    i: ne,
    o: ne,
    d(r) {
      r && E(t);
    }
  };
}
function R9(e, t, n) {
  let r, { size: i = 24 } = t;
  return e.$$set = (o) => {
    "size" in o && n(1, i = o.size);
  }, e.$$.update = () => {
    e.$$.dirty & /*size*/
    2 && n(0, r = `${i}px`);
  }, [r, i];
}
class E9 extends Ne {
  constructor(t) {
    super(), Me(this, t, R9, O9, Ce, { size: 1 });
  }
}
function Yl(e) {
  let t, n, r, i = It(
    /*title*/
    e[3]
  ) + "", o, s, a = (
    /*schema*/
    e[1].description && Jl(e)
  );
  return {
    c() {
      t = I("div"), n = I("div"), r = I("label"), o = x(), a && a.c(), h(r, "id", `label-${/*id*/
      e[4]}`), h(
        r,
        "for",
        /*id*/
        e[4]
      ), We(
        r,
        "required",
        /*params*/
        e[0].required
      ), We(
        r,
        "readonly",
        /*schema*/
        e[1].readOnly || /*params*/
        e[0].containerReadOnly
      ), h(t, "class", "inline-flex flex-nowrap");
    },
    m(l, u) {
      k(l, t, u), D(t, n), D(n, r), r.innerHTML = i, D(t, o), a && a.m(t, null), s = !0;
    },
    p(l, u) {
      (!s || u & /*params*/
      1) && We(
        r,
        "required",
        /*params*/
        l[0].required
      ), (!s || u & /*schema, params*/
      3) && We(
        r,
        "readonly",
        /*schema*/
        l[1].readOnly || /*params*/
        l[0].containerReadOnly
      ), /*schema*/
      l[1].description ? a ? (a.p(l, u), u & /*schema*/
      2 && L(a, 1)) : (a = Jl(l), a.c(), L(a, 1), a.m(t, null)) : a && (we(), W(a, 1, 1, () => {
        a = null;
      }), $e());
    },
    i(l) {
      s || (L(a), s = !0);
    },
    o(l) {
      W(a), s = !1;
    },
    d(l) {
      l && E(t), a && a.d();
    }
  };
}
function Jl(e) {
  let t, n, r, i;
  return n = new E9({ props: { size: 12 } }), {
    c() {
      t = I("div"), ve(n.$$.fragment), h(t, "title", r = /*schema*/
      e[1].description), h(t, "class", "size-2.5 cursor-help");
    },
    m(o, s) {
      k(o, t, s), ge(n, t, null), i = !0;
    },
    p(o, s) {
      (!i || s & /*schema*/
      2 && r !== (r = /*schema*/
      o[1].description)) && h(t, "title", r);
    },
    i(o) {
      i || (L(n.$$.fragment, o), i = !0);
    },
    o(o) {
      W(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && E(t), _e(n);
    }
  };
}
function Xl(e) {
  let t, n;
  return {
    c() {
      t = I("div"), n = lt(
        /*error*/
        e[2]
      ), h(t, "class", "text-sm text-red-600");
    },
    m(r, i) {
      k(r, t, i), D(t, n);
    },
    p(r, i) {
      i & /*error*/
      4 && bt(
        n,
        /*error*/
        r[2]
      );
    },
    d(r) {
      r && E(t);
    }
  };
}
function k9(e) {
  let t, n, r, i, o = (
    /*params*/
    e[0].containerParent !== "array" && Yl(e)
  );
  const s = (
    /*#slots*/
    e[6].default
  ), a = Fp(
    s,
    e,
    /*$$scope*/
    e[5],
    null
  );
  let l = (
    /*error*/
    e[2] && /*params*/
    e[0].showErrors && Xl(e)
  );
  return {
    c() {
      o && o.c(), t = x(), n = I("div"), a && a.c(), r = x(), l && l.c();
    },
    m(u, f) {
      o && o.m(u, f), k(u, t, f), k(u, n, f), a && a.m(n, null), D(n, r), l && l.m(n, null), i = !0;
    },
    p(u, [f]) {
      /*params*/
      u[0].containerParent !== "array" ? o ? (o.p(u, f), f & /*params*/
      1 && L(o, 1)) : (o = Yl(u), o.c(), L(o, 1), o.m(t.parentNode, t)) : o && (we(), W(o, 1, 1, () => {
        o = null;
      }), $e()), a && a.p && (!i || f & /*$$scope*/
      32) && Dp(
        a,
        s,
        u,
        /*$$scope*/
        u[5],
        i ? Wp(
          s,
          /*$$scope*/
          u[5],
          f,
          null
        ) : Up(
          /*$$scope*/
          u[5]
        ),
        null
      ), /*error*/
      u[2] && /*params*/
      u[0].showErrors ? l ? l.p(u, f) : (l = Xl(u), l.c(), l.m(n, null)) : l && (l.d(1), l = null);
    },
    i(u) {
      i || (L(o), L(a, u), i = !0);
    },
    o(u) {
      W(o), W(a, u), i = !1;
    },
    d(u) {
      u && (E(t), E(n)), o && o.d(u), a && a.d(u), l && l.d();
    }
  };
}
function T9(e, t, n) {
  let r, { $$slots: i = {}, $$scope: o } = t, { params: s } = t, { schema: a } = t;
  const l = Jn(a, s.path), u = s.path.join(".");
  return e.$$set = (f) => {
    "params" in f && n(0, s = f.params), "schema" in f && n(1, a = f.schema), "$$scope" in f && n(5, o = f.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*params*/
    1 && n(2, r = s.validationErrors[s.path.join(".")]);
  }, [s, a, r, l, u, o, i];
}
class S9 extends Ne {
  constructor(t) {
    super(), Me(this, t, T9, k9, Ce, { params: 0, schema: 1 });
  }
}
function Zl(e, t, n) {
  const r = e.slice();
  return r[10] = t[n], r[11] = t, r[12] = n, r;
}
function Vl(e) {
  let t, n, r = (
    /*params*/
    e[1].collapsible && Ql(e)
  ), i = (
    /*params*/
    (e[1].containerParent !== "array" || /*schema*/
    e[0].title) && xl(e)
  );
  return {
    c() {
      t = I("legend"), r && r.c(), n = x(), i && i.c(), h(t, "class", "subset-label object-label");
    },
    m(o, s) {
      k(o, t, s), r && r.m(t, null), D(t, n), i && i.m(t, null);
    },
    p(o, s) {
      /*params*/
      o[1].collapsible ? r ? r.p(o, s) : (r = Ql(o), r.c(), r.m(t, n)) : r && (r.d(1), r = null), /*params*/
      o[1].containerParent !== "array" || /*schema*/
      o[0].title ? i ? i.p(o, s) : (i = xl(o), i.c(), i.m(t, null)) : i && (i.d(1), i = null);
    },
    d(o) {
      o && E(t), r && r.d(), i && i.d();
    }
  };
}
function Ql(e) {
  let t, n, r, i;
  return {
    c() {
      t = I("span"), h(t, "class", n = "collapser " + /*collapserOpenState*/
      e[3]);
    },
    m(o, s) {
      k(o, t, s), r || (i = Y(
        t,
        "click",
        /*toggle*/
        e[6]
      ), r = !0);
    },
    p(o, s) {
      s & /*collapserOpenState*/
      8 && n !== (n = "collapser " + /*collapserOpenState*/
      o[3]) && h(t, "class", n);
    },
    d(o) {
      o && E(t), r = !1, i();
    }
  };
}
function xl(e) {
  let t, n = It(Jn(
    /*schema*/
    e[0],
    /*params*/
    e[1].path
  )) + "", r, i, o = (
    /*schema*/
    e[0].description && eu(e)
  );
  return {
    c() {
      t = I("span"), r = x(), o && o.c(), i = Xe(), h(t, "class", "subset-label-title object-label-title");
    },
    m(s, a) {
      k(s, t, a), t.innerHTML = n, k(s, r, a), o && o.m(s, a), k(s, i, a);
    },
    p(s, a) {
      a & /*schema, params*/
      3 && n !== (n = It(Jn(
        /*schema*/
        s[0],
        /*params*/
        s[1].path
      )) + "") && (t.innerHTML = n), /*schema*/
      s[0].description ? o ? o.p(s, a) : (o = eu(s), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    d(s) {
      s && (E(t), E(r), E(i)), o && o.d(s);
    }
  };
}
function eu(e) {
  let t, n = It(
    /*schema*/
    e[0].description
  ) + "";
  return {
    c() {
      t = I("span"), h(t, "class", "subset-label-description object-label-description");
    },
    m(r, i) {
      k(r, t, i), t.innerHTML = n;
    },
    p(r, i) {
      i & /*schema*/
      1 && n !== (n = It(
        /*schema*/
        r[0].description
      ) + "") && (t.innerHTML = n);
    },
    d(r) {
      r && E(t);
    }
  };
}
function tu(e) {
  let t, n = [], r = /* @__PURE__ */ new Map(), i, o = Ve(
    /*propNames*/
    e[5]
  );
  const s = (a) => (
    /*propName*/
    a[10]
  );
  for (let a = 0; a < o.length; a += 1) {
    let l = Zl(e, o, a), u = s(l);
    r.set(u, n[a] = nu(u, l));
  }
  return {
    c() {
      t = I("div");
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      h(t, "class", "grid gap-2 grid-cols-[min-content_1fr]");
    },
    m(a, l) {
      k(a, t, l);
      for (let u = 0; u < n.length; u += 1)
        n[u] && n[u].m(t, null);
      i = !0;
    },
    p(a, l) {
      l & /*params, propNames, schema, value*/
      39 && (o = Ve(
        /*propNames*/
        a[5]
      ), we(), n = ei(n, l, s, 1, a, o, r, t, mf, nu, null, Zl), $e());
    },
    i(a) {
      if (!i) {
        for (let l = 0; l < o.length; l += 1)
          L(n[l]);
        i = !0;
      }
    },
    o(a) {
      for (let l = 0; l < n.length; l += 1)
        W(n[l]);
      i = !1;
    },
    d(a) {
      a && E(t);
      for (let l = 0; l < n.length; l += 1)
        n[l].d();
    }
  };
}
function nu(e, t) {
  var l, u;
  let n, r, i, o;
  function s(f) {
    t[8](
      f,
      /*propName*/
      t[10]
    );
  }
  let a = {
    params: {
      .../*params*/
      t[1],
      path: [
        .../*params*/
        t[1].path,
        /*propName*/
        t[10]
      ],
      required: (
        /*schema*/
        (((l = t[0]) == null ? void 0 : l.required) || []).includes(
          /*propName*/
          t[10]
        )
      ),
      containerParent: "object",
      containerReadOnly: (
        /*params*/
        t[1].containerReadOnly || /*schema*/
        t[0].readOnly || !1
      )
    },
    value: (
      /*value*/
      (u = t[2]) == null ? void 0 : u[
        /*propName*/
        t[10]
      ]
    )
  };
  return (
    /*schema*/
    t[0].properties[
      /*propName*/
      t[10]
    ] !== void 0 && (a.schema = /*schema*/
    t[0].properties[
      /*propName*/
      t[10]
    ]), r = new $r({ props: a }), rt.push(() => Ut(r, "schema", s)), {
      key: e,
      first: null,
      c() {
        n = Xe(), ve(r.$$.fragment), this.first = n;
      },
      m(f, c) {
        k(f, n, c), ge(r, f, c), o = !0;
      },
      p(f, c) {
        var g, m;
        t = f;
        const d = {};
        c & /*params, propNames, schema*/
        35 && (d.params = {
          .../*params*/
          t[1],
          path: [
            .../*params*/
            t[1].path,
            /*propName*/
            t[10]
          ],
          required: (
            /*schema*/
            (((g = t[0]) == null ? void 0 : g.required) || []).includes(
              /*propName*/
              t[10]
            )
          ),
          containerParent: "object",
          containerReadOnly: (
            /*params*/
            t[1].containerReadOnly || /*schema*/
            t[0].readOnly || !1
          )
        }), c & /*value, propNames*/
        36 && (d.value = /*value*/
        (m = t[2]) == null ? void 0 : m[
          /*propName*/
          t[10]
        ]), !i && c & /*schema, propNames*/
        33 && (i = !0, d.schema = /*schema*/
        t[0].properties[
          /*propName*/
          t[10]
        ], an(() => i = !1)), r.$set(d);
      },
      i(f) {
        o || (L(r.$$.fragment, f), o = !0);
      },
      o(f) {
        W(r.$$.fragment, f), o = !1;
      },
      d(f) {
        f && E(n), _e(r, f);
      }
    }
  );
}
function P9(e) {
  let t, n, r, i, o, s = (
    /*showLegend*/
    e[4] && Vl(e)
  ), a = (
    /*collapserOpenState*/
    e[3] === "open" && tu(e)
  );
  return {
    c() {
      t = I("fieldset"), s && s.c(), n = x(), a && a.c(), h(t, "name", r = /*params*/
      e[1].path.join(".")), h(t, "class", i = "subset object depth-" + /*params*/
      e[1].path.length);
    },
    m(l, u) {
      k(l, t, u), s && s.m(t, null), D(t, n), a && a.m(t, null), o = !0;
    },
    p(l, [u]) {
      /*showLegend*/
      l[4] ? s ? s.p(l, u) : (s = Vl(l), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*collapserOpenState*/
      l[3] === "open" ? a ? (a.p(l, u), u & /*collapserOpenState*/
      8 && L(a, 1)) : (a = tu(l), a.c(), L(a, 1), a.m(t, null)) : a && (we(), W(a, 1, 1, () => {
        a = null;
      }), $e()), (!o || u & /*params*/
      2 && r !== (r = /*params*/
      l[1].path.join("."))) && h(t, "name", r), (!o || u & /*params*/
      2 && i !== (i = "subset object depth-" + /*params*/
      l[1].path.length)) && h(t, "class", i);
    },
    i(l) {
      o || (L(a), o = !0);
    },
    o(l) {
      W(a), o = !1;
    },
    d(l) {
      l && E(t), s && s.d(), a && a.d();
    }
  };
}
function I9(e, t, n) {
  let r, i, o, { params: s } = t, { schema: a } = t, { value: l } = t, u = s.path.length === 0 || s.containerParent === "array" || !s.collapsible ? "open" : "closed";
  const f = () => {
    n(3, u = u === "open" ? "closed" : "open");
  };
  function c(d, g) {
    e.$$.not_equal(a.properties[g], d) && (a.properties[g] = d, n(0, a));
  }
  return e.$$set = (d) => {
    "params" in d && n(1, s = d.params), "schema" in d && n(0, a = d.schema), "value" in d && n(2, l = d.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    1 && n(5, r = Object.keys((a == null ? void 0 : a.properties) || {})), e.$$.dirty & /*schema, params*/
    3 && n(7, i = Jn(a, s.path)), e.$$.dirty & /*params, legendText*/
    130 && n(4, o = s.collapsible || s.containerParent !== "array" && !!i);
  }, [
    a,
    s,
    l,
    u,
    o,
    r,
    f,
    i,
    c
  ];
}
class j9 extends Ne {
  constructor(t) {
    super(), Me(this, t, I9, P9, Ce, { params: 1, schema: 0, value: 2 });
  }
}
class Zr extends String {
}
const C9 = /* @__PURE__ */ new Set(["<", ">", "<=", ">="]), L9 = (e) => `\\u${e.toString(16).padStart(4, "0")}`, M9 = (e) => {
  if ([1 / 0, -1 / 0, NaN, void 0, null].includes(e))
    return `${e}`;
  if (!["string", "boolean", "number"].includes(typeof e)) {
    if (typeof e != "object")
      throw new Error("Unexpected value type");
    const n = Object.getPrototypeOf(e);
    if (!(n === Array.prototype && Array.isArray(e) || n === Object.prototype))
      throw new Error("Unexpected object given as value");
  }
  return JSON.stringify(e).replace(/([{,])"__proto__":/g, '$1["__proto__"]:').replace(/[^\\]"__proto__":/g, () => {
    throw new Error("Unreachable");
  }).replace(/[\u2028\u2029]/g, (n) => L9(n.charCodeAt(0)));
}, ps = (e, ...t) => {
  const n = e.replace(/%[%drscjw]/g, (r) => {
    if (r === "%%")
      return "%";
    if (t.length === 0)
      throw new Error("Unexpected arguments count");
    const i = t.shift();
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
        if (C9.has(i))
          return i;
        throw new Error("Expected a compare op");
      case "%j":
        return M9(i);
      case "%w":
        if (Number.isInteger(i) && i >= 0)
          return " ".repeat(i);
        throw new Error("Expected a non-negative integer for indentation");
    }
    throw new Error("Unreachable");
  });
  if (t.length !== 0)
    throw new Error("Unexpected arguments count");
  return new Zr(n);
}, ao = (e) => {
  if (!/^[a-z][a-z0-9_]*$/i.test(e))
    throw new Error("Does not look like a safe id");
  return new Zr(e);
}, Bd = (e) => (...t) => {
  if (!t.every((n) => n instanceof Zr))
    throw new Error("Unsafe arguments");
  return new Zr(e(...t));
}, N9 = (e) => (
  // simple expression and single brackets can not break priority
  /^[a-z][a-z0-9_().]*$/i.test(e) || /^\([^()]+\)$/i.test(e) ? e : ps("(%s)", e)
), F9 = Bd(
  (...e) => e.some((t) => `${t}` == "true") ? "true" : e.join(" || ") || "false"
), W9 = Bd(
  (...e) => e.some((t) => `${t}` == "false") ? "false" : e.join(" && ") || "true"
), zd = (e) => `${e}` == "true" ? ao("false") : `${e}` == "false" ? ao("true") : ps("!%s", N9(e)), D9 = (...e) => zd(F9(...e));
var hs = { format: ps, safe: ao, safeand: W9, safenot: zd, safenotor: D9 };
const { safe: ru } = hs, Ws = /* @__PURE__ */ new WeakMap(), U9 = (e) => {
  Ws.has(e) || Ws.set(e, { sym: /* @__PURE__ */ new Map(), ref: /* @__PURE__ */ new Map(), format: /* @__PURE__ */ new Map(), pattern: /* @__PURE__ */ new Map() });
  const t = Ws.get(e), n = (l) => {
    t.sym.get(l) || t.sym.set(l, 0);
    const u = t.sym.get(l);
    return t.sym.set(l, u + 1), ru(`${l}${u}`);
  }, r = (l) => {
    if (t.pattern.has(l))
      return t.pattern.get(l);
    const u = n("pattern");
    return e[u] = new RegExp(l, "u"), t.pattern.set(l, u), u;
  };
  return t.loop || (t.loop = "ijklmnopqrstuvxyz".split("")), { gensym: n, genpattern: r, genloop: () => {
    const l = t.loop.shift();
    return t.loop.push(`${l}${l[0]}`), ru(l);
  }, getref: (l) => t.ref.get(l), genref: (l) => {
    const u = n("ref");
    return t.ref.set(l, u), u;
  }, genformat: (l) => {
    let u = t.format.get(l);
    return u || (u = n("format"), e[u] = l, t.format.set(l, u)), u;
  } };
};
var qd = { scopeMethods: U9 };
const B9 = (e) => /[\uD800-\uDFFF]/.test(e) ? [...e].length : e.length, z9 = (e, t, n, r) => {
  if (e % t === 0)
    return !0;
  let i = e * n;
  if ((i === 1 / 0 || i === -1 / 0) && (i = e), i % r === 0)
    return !0;
  const o = Math.floor(i + 0.5);
  return o / n === e && o % r === 0;
}, Vr = (e, t) => {
  if (e === t)
    return !0;
  if (!e || !t || typeof e != typeof t || e !== t && typeof e != "object")
    return !1;
  const n = Object.getPrototypeOf(e);
  if (n !== Object.getPrototypeOf(t))
    return !1;
  if (n === Array.prototype)
    return !Array.isArray(e) || !Array.isArray(t) || e.length !== t.length ? !1 : e.every((r, i) => Vr(r, t[i]));
  if (n === Object.prototype) {
    const [r, i] = [Object.keys(e), Object.keys(t)];
    return r.length !== i.length ? !1 : (/* @__PURE__ */ new Set([...r, ...i])).size === r.length && r.every((s) => Vr(e[s], t[s]));
  }
  return !1;
}, q9 = (e) => {
  if (e.length < 2)
    return !0;
  if (e.length === 2)
    return !Vr(e[0], e[1]);
  const t = [], n = e.length > 20 ? /* @__PURE__ */ new Set() : null;
  let r = 0, i = 0;
  for (const o of e) {
    if (typeof o == "object")
      t.push(o);
    else if (n) {
      if (n.add(o), n.size !== ++r)
        return !1;
    } else if (e.indexOf(o, i + 1) !== -1)
      return !1;
    i++;
  }
  for (let o = 1; o < t.length; o++)
    for (let s = 0; s < o; s++)
      if (Vr(t[o], t[s]))
        return !1;
  return !0;
}, G9 = (e) => {
  if (typeof Buffer < "u")
    return Buffer.from(e, "base64").toString("utf-8");
  const t = atob(e);
  return new TextDecoder("utf-8").decode(new Uint8Array(t.length).map((n, r) => t.charCodeAt(r)));
}, Gd = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
Gd[Symbol.for("toJayString")] = "Function.prototype.call.bind(Object.prototype.hasOwnProperty)";
const Hd = (e) => /~\//.test(e) ? `${e}`.replace(/~/g, "~0").replace(/\//g, "~1") : e, H9 = (e) => e.length === 0 ? "#" : `#/${e.map(Hd).join("/")}`, K9 = ({ keywordLocation: e, instanceLocation: t }, n, r) => ({
  keywordLocation: `${n}${e.slice(1)}`,
  instanceLocation: `${r}${t.slice(1)}`
}), Y9 = (e, [t, n]) => t.includes(!0) || t.some((r) => r === e) || n.some((r) => new RegExp(r, "u").test(e)), J9 = (e, t) => (e.filter((n) => n[t])[0] || {})[t], X9 = { toPointer: H9, pointerPart: Hd, errorMerge: K9, propertyIn: Y9, dynamicResolve: J9 };
var da = { stringLength: B9, isMultipleOf: z9, deepEqual: Vr, unique: q9, deBase64: G9, hasOwn: Gd, ...X9 };
const { format: de, safe: Z9 } = hs, { scopeMethods: V9 } = qd, wi = da, lo = new Map(
  Object.entries({
    null: (e) => de("%s === null", e),
    boolean: (e) => de('typeof %s === "boolean"', e),
    array: (e) => de("Array.isArray(%s)", e),
    object: (e) => de('typeof %s === "object" && %s && !Array.isArray(%s)', e, e, e),
    number: (e) => de('typeof %s === "number"', e),
    integer: (e) => de("Number.isInteger(%s)", e),
    string: (e) => de('typeof %s === "string"', e)
  })
), Bn = ({ name: e, parent: t, keyval: n, keyname: r }) => {
  if (e) {
    if (t || n || r)
      throw new Error("name can be used only stand-alone");
    return e;
  }
  if (!t)
    throw new Error("Can not use property of undefined parent!");
  const i = Bn(t);
  if (n !== void 0) {
    if (r)
      throw new Error("Can not use key value and name together");
    if (!["string", "number"].includes(typeof n))
      throw new Error("Invalid property path");
    return /^[a-z][a-z0-9_]*$/i.test(n) ? de("%s.%s", i, Z9(n)) : de("%s[%j]", i, n);
  } else if (r)
    return de("%s[%s]", i, r);
  throw new Error("Unreachable");
}, Q9 = new Set(
  [].concat(
    ...[Object, Array, String, Number, Boolean].map((e) => Object.getOwnPropertyNames(e.prototype))
  )
), x9 = (e, t, n, { unmodifiedPrototypes: r, isJSON: i }, o) => {
  const { gensym: s, genpattern: a, genloop: l } = V9(t, n);
  return { present: (m) => {
    const _ = Bn(m), { parent: b, keyval: v, keyname: A, inKeys: F, checked: G } = m;
    if (G || F && i)
      throw new Error("Unreachable: useless check for undefined");
    if (F)
      return de("%s !== undefined", _);
    if (b && A) {
      t.hasOwn = wi.hasOwn;
      const P = Bn(b);
      return i ? de("%s !== undefined && hasOwn(%s, %s)", _, P, A) : de("%s in %s && hasOwn(%s, %s)", A, P, P, A);
    } else if (b && v !== void 0) {
      if (r && i && !Q9.has(`${v}`))
        return de("%s !== undefined", _);
      t.hasOwn = wi.hasOwn;
      const P = Bn(b);
      return i ? de("%s !== undefined && hasOwn(%s, %j)", _, P, v) : de("%j in %s && hasOwn(%s, %j)", v, P, P, v);
    }
    throw new Error("Unreachable: present() check without parent");
  }, forObjectKeys: (m, _) => {
    const b = s("key");
    e.block(de("for (const %s of Object.keys(%s))", b, Bn(m)), () => {
      _(n(m, b, !0), b);
    });
  }, forArray: (m, _, b) => {
    const v = l(), A = Bn(m);
    e.block(de("for (let %s = %s; %s < %s.length; %s++)", v, _, v, A, v), () => {
      b(n(m, v, r, !0), v);
    });
  }, patternTest: (m, _) => {
    const b = m.replace(/[.^$|*+?(){}[\]\\]/gu, "");
    if (m === `^${b}$`)
      return de("(%s === %j)", _, m.slice(1, -1));
    if (o.has(m))
      return de("true");
    if ([b, `${b}+`, `${b}.*`, `.*${b}.*`].includes(m))
      return de("%s.includes(%j)", _, b);
    if ([`^${b}`, `^${b}+`, `^${b}.*`].includes(m))
      return de("%s.startsWith(%j)", _, b);
    if ([`${b}$`, `.*${b}$`].includes(m))
      return de("%s.endsWith(%j)", _, b);
    const v = [...b].slice(0, -1).join("");
    return [`${b}*`, `${b}?`].includes(m) ? v.length === 0 ? de("true") : de("%s.includes(%j)", _, v) : [`^${b}*`, `^${b}?`].includes(m) ? v.length === 0 ? de("true") : de("%s.startsWith(%j)", _, v) : de("%s.test(%s)", a(m), _);
  }, compare: (m, _) => {
    if (!_ || typeof _ != "object")
      return de("%s === %j", m, _);
    let b;
    const v = (A) => A.length <= 3 && A.every((F) => !F || typeof F != "object");
    if (Array.isArray(_)) {
      if (b = lo.get("array")(m), v(_)) {
        let A = de("%s.length === %d", m, _.length);
        for (let F = 0; F < _.length; F++)
          A = de("%s && %s[%d] === %j", A, m, F, _[F]);
        return de("%s && %s", b, A);
      }
    } else {
      b = lo.get("object")(m);
      const [A, F] = [Object.keys(_), Object.values(_)];
      if (v(F)) {
        let G = de("Object.keys(%s).length === %d", m, A.length);
        A.length > 0 && (t.hasOwn = wi.hasOwn);
        for (const P of A)
          G = de("%s && hasOwn(%s, %j)", G, m, P);
        for (const P of A)
          G = de("%s && %s[%j] === %j", G, m, P, _[P]);
        return de("%s && %s", b, G);
      }
    }
    return t.deepEqual = wi.deepEqual, de("%s && deepEqual(%s, %j)", b, m, _);
  }, propvar: n };
}, eR = /^\([^)]*\) *=>/, tR = /^[^=]*=>/, iu = Symbol.for("toJayString");
function nR(e) {
  if (typeof e == "function") {
    if (e[iu])
      return e[iu];
    if (Object.getPrototypeOf(e) !== Function.prototype)
      throw new Error("Can not stringify: a function with unexpected prototype");
    const t = `${e}`;
    if (e.prototype) {
      if (!/^function[ (]/.test(t))
        throw new Error("Unexpected function");
      return t;
    }
    if (eR.test(t) || tR.test(t))
      return t;
    throw new Error("Can not stringify: only either normal or arrow functions are supported");
  } else if (typeof e == "object") {
    const t = Object.getPrototypeOf(e);
    if (e instanceof RegExp && t === RegExp.prototype)
      return de("%r", e);
    throw new Error("Can not stringify: an object with unexpected prototype");
  }
  throw new Error(`Can not stringify: unknown type ${typeof e}`);
}
var Kd = { types: lo, buildName: Bn, jsHelpers: x9, jaystring: nR };
const { format: $i, safe: rR, safenot: iR } = hs, { jaystring: sR } = Kd, oR = /[{[]/, aR = /[}\]]/;
var Yd = () => {
  const e = [];
  let t = 0;
  const n = (o) => {
    aR.test(o.trim()[0]) && t--, e.push({ indent: t, code: o }), oR.test(o[o.length - 1]) && t++;
  }, r = () => {
    if (t !== 0)
      throw new Error("Unexpected indent at build()");
    const o = e.map((s) => $i("%w%s", s.indent * 2, s.code)).join(`
`);
    return /^[a-z][a-z0-9]*$/i.test(o) ? `return ${o}` : `return (${o})`;
  }, i = (o) => {
    const s = Object.entries(o);
    for (const [a, l] of s) {
      if (!/^[a-z][a-z0-9]*$/i.test(a))
        throw new Error("Unexpected scope key!");
      if (!(typeof l == "function" || l instanceof RegExp))
        throw new Error("Unexpected scope value!");
    }
    return s;
  };
  return {
    optimizedOut: !1,
    // some branch of code has been optimized out
    size: () => e.length,
    write(o, ...s) {
      if (typeof o != "string")
        throw new Error("Format must be a string!");
      if (o.includes(`
`))
        throw new Error("Only single lines are supported");
      return n($i(o, ...s)), !0;
    },
    block(o, s, a = !1) {
      const l = t;
      this.write("%s {", o);
      const u = e.length;
      if (s(), u === e.length)
        return e.pop(), t = l, !1;
      if (u === e.length - 1 && !a) {
        const { code: f } = e[e.length - 1];
        if (!/^(if|for) /.test(f))
          return e.length -= 2, t = l, this.write("%s %s", o, f);
      }
      return this.write("}");
    },
    if(o, s, a) {
      `${o}` == "false" ? (a && a(), s && (this.optimizedOut = !0)) : `${o}` == "true" ? (s && s(), a && (this.optimizedOut = !0)) : s && this.block($i("if (%s)", o), s, !!a) ? a && this.block($i("else"), a) : a && this.if(iR(o), a);
    },
    makeModule(o = {}) {
      return `(function() {
'use strict'
${i(o).map(
        ([a, l]) => `const ${rR(a)} = ${sR(l)};`
      ).join(`
`)}
${r()}})()`;
    },
    makeFunction(o = {}) {
      const s = i(o), a = s.map((u) => u[0]), l = s.map((u) => u[1]);
      return Function(...a, `'use strict'
${r()}`)(...l);
    }
  };
};
const lR = [
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
], uR = [
  "draft/next",
  "draft/2020-12",
  "draft/2019-09",
  "draft-07",
  "draft-06",
  "draft-04",
  "draft-03"
  // historic
], fR = uR.map((e) => `https://json-schema.org/${e}/schema`), cR = ["core", "applicator", "validation", "meta-data", "format", "content"], dR = [
  "core",
  "applicator",
  "unevaluated",
  "validation",
  "meta-data",
  "format-annotation",
  "format-assertion",
  "content"
], pR = [
  ...cR.map((e) => `https://json-schema.org/draft/2019-09/vocab/${e}`),
  ...dR.map((e) => `https://json-schema.org/draft/2020-12/vocab/${e}`)
];
var Jd = { knownKeywords: lR, schemaVersions: fR, knownVocabularies: pR };
const { knownKeywords: Xd } = Jd;
function Zd(e, t, n, r = "keys") {
  if (!e.has(t))
    return e.set(t, n);
  if (e.get(t) !== n)
    throw new Error(`Conflicting duplicate ${r}: ${t}`);
}
function hR(e) {
  return e.includes("~") ? e.replace(/~[01]/g, (t) => {
    switch (t) {
      case "~1":
        return "/";
      case "~0":
        return "~";
    }
    throw new Error("Unreachable");
  }) : e;
}
function uo(e, t, n) {
  if (typeof e != "object")
    throw new Error("Invalid input object");
  if (typeof t != "string")
    throw new Error("Invalid JSON pointer");
  const r = t.split("/");
  if (!["", "#"].includes(r.shift()))
    throw new Error("Invalid JSON pointer");
  if (r.length === 0)
    return e;
  let i = e;
  for (const o of r) {
    if (typeof o != "string")
      throw new Error("Invalid JSON pointer");
    n && n.push(i);
    const s = hR(o);
    if (typeof i != "object" || !Object.prototype.hasOwnProperty.call(i, s))
      return;
    i = i[s];
  }
  return i;
}
const su = /^https?:\/\//;
function zn(e, t) {
  if (typeof e != "string" || typeof t != "string")
    throw new Error("Unexpected path!");
  if (t.length === 0)
    return e;
  const n = e.replace(/#.*/, "");
  return t.startsWith("#") ? `${n}${t}` : !n.includes("/") || su.test(t) ? t : su.test(n) ? `${new URL(t, n)}` : t.startsWith("/") ? t : [...n.split("/").slice(0, -1), t].join("/");
}
function ou(e) {
  return e.map((n) => n && (n.$id || n.id) || "").filter((n) => n && typeof n == "string").reduce(zn, "");
}
const Vd = ["properties", "patternProperties", "$defs", "definitions"], Qd = ["const", "enum", "examples", "example", "comment"], xd = Symbol("skip");
function pa(e, t) {
  const n = (r, i = !1) => {
    if (!r || typeof r != "object")
      return;
    const o = t(r);
    if (o !== void 0)
      return o === xd ? void 0 : o;
    for (const s of Object.keys(r)) {
      if (!i && !Array.isArray(r) && !Xd.includes(s) || !i && Qd.includes(s))
        continue;
      const a = n(r[s], !i && Vd.includes(s));
      if (a !== void 0)
        return a;
    }
  };
  return n(e);
}
function ep(e, t, n, r = "") {
  const i = zn(r, n), o = [], [s, a = ""] = i.split("#"), l = decodeURI(a), u = (f, c, d = !1, g = !1) => {
    if (!f || typeof f != "object")
      return;
    const m = f.$id || f.id;
    let _ = c;
    if (m && typeof m == "string") {
      if (_ = zn(_, m), _ === i || _ === s && l === "")
        o.push([f, e, c]);
      else if (_ === s && l[0] === "/") {
        const v = [], A = uo(f, l, v);
        A !== void 0 && o.push([A, e, zn(c, ou(v))]);
      }
    }
    const b = g ? f.$dynamicAnchor : f.$anchor;
    if (b && typeof b == "string") {
      if (b.includes("#"))
        throw new Error("$anchor can't include '#'");
      if (b.startsWith("/"))
        throw new Error("$anchor can't start with '/'");
      _ = zn(_, `#${b}`), _ === i && o.push([f, e, c]);
    }
    for (const v of Object.keys(f))
      !d && !Array.isArray(f) && !Xd.includes(v) || !d && Qd.includes(v) || u(f[v], _, !d && Vd.includes(v));
    !g && f.$dynamicAnchor && u(f, c, d, !0);
  };
  if (u(e, s), s === r.replace(/#$/, "") && (l[0] === "/" || l === "")) {
    const f = [], c = uo(e, l, f);
    c !== void 0 && o.push([c, e, ou(f)]);
  }
  if (t.has(s) && t.get(s) !== e) {
    const f = ep(t.get(s), t, `#${a}`, s);
    o.push(...f.map(([c, d, g]) => [c, d, zn(s, g)]));
  }
  return t.has(i) && o.push([t.get(i), t.get(i), i]), o;
}
function mR(e) {
  const t = /* @__PURE__ */ new Map();
  return pa(e, (n) => {
    if (n !== e && (n.$id || n.id))
      return xd;
    const r = n.$dynamicAnchor;
    if (r && typeof r == "string") {
      if (r.includes("#"))
        throw new Error("$dynamicAnchor can't include '#'");
      if (!/^[a-zA-Z0-9_-]+$/.test(r))
        throw new Error(`Unsupported $dynamicAnchor: ${r}`);
      Zd(t, r, n, "$dynamicAnchor");
    }
  }), t;
}
const gR = (e, t) => pa(e, (n) => Object.keys(n).some((r) => t.includes(r)) || void 0) || !1, au = (e, t, n = !1) => {
  if (!Array.isArray(t))
    throw new Error("Expected an array of schemas");
  for (const r of t)
    pa(r, (i) => {
      const o = i.$id || i.id, s = o && typeof o == "string" ? o.replace(/#$/, "") : null;
      if (s && s.includes("://") && !s.includes("#"))
        Zd(e, s, i, "schema $id in 'schemas'");
      else if (i === r && !n)
        throw new Error("Schema with missing or invalid $id in 'schemas'");
    });
  return e;
}, tp = (e, t) => {
  if (t)
    return au(tp(e), t, !0);
  if (e)
    switch (Object.getPrototypeOf(e)) {
      case Object.prototype:
        return new Map(Object.entries(e));
      case Map.prototype:
        return new Map(e);
      case Array.prototype:
        return au(/* @__PURE__ */ new Map(), e);
    }
  throw new Error("Unexpected value for 'schemas' option");
};
var np = { get: uo, joinPath: zn, resolveReference: ep, getDynamicAnchors: mR, hasKeywords: gR, buildSchemas: tp };
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
    const [n, r, ...i] = e.split("@");
    return !n || !r || i.length !== 0 || n.length > 64 || r.length > 253 || !/^[a-z0-9.-]+$/i.test(r) || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(n) ? !1 : r.split(".").every((o) => /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(o));
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
      const t = e.match(/^(\d\d\d\d)-02-29$/);
      if (!t)
        return !1;
      const n = t[1] | 0;
      return n % 16 === 0 || n % 4 === 0 && n % 25 !== 0;
    }
    return e.endsWith("31") ? /^\d\d\d\d-(?:0[13578]|1[02])-31$/.test(e) : /^\d\d\d\d-(?:0[13-9]|1[012])-(?:[012][1-9]|[123]0)$/.test(e);
  },
  // leap second handling is special, we check it's 23:59:60.*
  time: (e) => {
    if (e.length > 27 || !/^(?:2[0-3]|[0-1]\d):[0-5]\d:(?:[0-5]\d|60)(?:\.\d+)?(?:z|[+-](?:2[0-3]|[0-1]\d)(?::?[0-5]\d)?)?$/i.test(e))
      return !1;
    if (!/:60/.test(e))
      return !0;
    const n = e.match(/([0-9.]+|[^0-9.])/g);
    let r = Number(n[0]) * 60 + Number(n[2]);
    return n[5] === "+" ? r += 24 * 60 - Number(n[6] || 0) * 60 - Number(n[8] || 0) : n[5] === "-" && (r += Number(n[6] || 0) * 60 + Number(n[8] || 0)), r % (24 * 60) === 23 * 60 + 59;
  },
  // first two lines specific to date-time, then tests for unanchored (at end) date, code identical to 'date' above
  // input[17] === '6' is a check for :60
  "date-time": (e) => {
    if (e.length > 38)
      return !1;
    const t = /^\d\d\d\d-(?:0[1-9]|1[0-2])-(?:[0-2]\d|3[01])[t\s](?:2[0-3]|[0-1]\d):[0-5]\d:(?:[0-5]\d|60)(?:\.\d+)?(?:z|[+-](?:2[0-3]|[0-1]\d)(?::?[0-5]\d)?)$/i, n = e[5] === "0" && e[6] === "2";
    if (n && e[8] === "3" || !t.test(e))
      return !1;
    if (e[17] === "6") {
      const r = e.slice(11).match(/([0-9.]+|[^0-9.])/g);
      let i = Number(r[0]) * 60 + Number(r[2]);
      if (r[5] === "+" ? i += 24 * 60 - Number(r[6] || 0) * 60 - Number(r[8] || 0) : r[5] === "-" && (i += Number(r[6] || 0) * 60 + Number(r[8] || 0)), i % (24 * 60) !== 23 * 60 + 59)
        return !1;
    }
    if (n) {
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
    let t = 0, n = 0, r = 0, i = !1, o = !1, s = 0, a = !0;
    for (let u = 0; u < e.length; u++) {
      const f = e.charCodeAt(u);
      if (u === 1 && s === 58 && f !== 58)
        return !1;
      if (f >= 48 && f <= 57) {
        if (++r > 4)
          return !1;
      } else if (f === 46) {
        if (t > 6 || n >= 3 || r === 0 || o)
          return !1;
        n++, r = 0;
      } else if (f === 58) {
        if (n > 0 || t >= 7)
          return !1;
        if (s === 58) {
          if (i)
            return !1;
          i = !0;
        } else
          u === 0 && (a = !1);
        t++, r = 0, o = !1;
      } else if (f >= 97 && f <= 102 || f >= 65 && f <= 70) {
        if (n > 0 || ++r > 4)
          return !1;
        o = !0;
      } else
        return !1;
      s = f;
    }
    if (t < 2 || n > 0 && (n !== 3 || r === 0))
      return !1;
    if (i && e.length === 2)
      return !0;
    if (n > 0 && !/(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/.test(e))
      return !1;
    const l = n > 0 ? 6 : 7;
    return i ? (a || r > 0) && t < l : t === l && a && r > 0;
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
}, _R = {
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
}, vR = {
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
var yR = { core: fo, extra: _R, weak: vR };
const jt = (e, t) => [.../* @__PURE__ */ new Set([...e, ...t])].sort(), rp = (e, t) => e.filter((n) => t.includes(n)), bR = (e) => (...t) => e(...t.map(Wi)), ip = (e) => (...t) => Wi(e(...t.map(Wi))), Rt = (e, t) => e && !e.includes(t), Wi = ({ type: e = null, dyn: t = {}, ...n }) => ({
  type: e && [...e].sort(),
  items: Rt(e, "array") ? 1 / 0 : n.items || 0,
  properties: Rt(e, "object") ? [!0] : [...n.properties || []].sort(),
  patterns: Rt(e, "object") ? [] : [...n.patterns || []].sort(),
  required: Rt(e, "object") ? [] : [...n.required || []].sort(),
  fullstring: Rt(e, "string") || n.fullstring || !1,
  dyn: {
    item: Rt(e, "array") ? !1 : t.item || !1,
    items: Rt(e, "array") ? 0 : Math.max(n.items || 0, t.items || 0),
    properties: Rt(e, "object") ? [] : jt(n.properties || [], t.properties || []),
    patterns: Rt(e, "object") ? [] : jt(n.patterns || [], t.patterns || [])
  },
  unknown: n.unknown && !(Rt(e, "object") && Rt(e, "array")) || !1
}), wR = () => Wi({}), sp = ip((e, t) => ({
  type: e.type && t.type ? rp(e.type, t.type) : e.type || t.type || null,
  items: Math.max(e.items, t.items),
  properties: jt(e.properties, t.properties),
  patterns: jt(e.patterns, t.patterns),
  required: jt(e.required, t.required),
  fullstring: e.fullstring || t.fullstring,
  dyn: {
    item: e.dyn.item || t.dyn.item,
    items: Math.max(e.dyn.items, t.dyn.items),
    properties: jt(e.dyn.properties, t.dyn.properties),
    patterns: jt(e.dyn.patterns, t.dyn.patterns)
  },
  unknown: e.unknown || t.unknown
})), co = (e, t) => t !== !0 && new RegExp(e, "u").test(t), $R = ({ properties: e, patterns: t }, { properties: n, patterns: r }) => {
  const i = e.filter((l) => n.includes(l) || n.includes(!0) || r.some((u) => co(u, l))), o = n.filter((l) => e.includes(l) || e.includes(!0) || t.some((u) => co(u, l))), s = t.filter((l) => r.includes(l) || n.includes(!0)), a = r.filter((l) => t.includes(l) || e.includes(!0));
  return { properties: jt(i, o), patterns: jt(s, a) };
}, op = ({ properties: e, patterns: t }, { properties: n, patterns: r }) => n.every((i) => e.includes(i) || e.includes(!0) || t.some((o) => co(o, i))) && r.every((i) => t.includes(i) || e.includes(!0)), AR = ip((e, t) => ({
  type: e.type && t.type ? jt(e.type, t.type) : null,
  items: Math.min(e.items, t.items),
  ...$R(e, t),
  required: Rt(e.type, "object") && t.required || Rt(t.type, "object") && e.required || rp(e.required, t.required),
  fullstring: e.fullstring && t.fullstring,
  dyn: {
    item: e.dyn.item || t.dyn.item,
    items: Math.max(e.dyn.items, t.dyn.items),
    properties: jt(e.dyn.properties, t.dyn.properties),
    patterns: jt(e.dyn.patterns, t.dyn.patterns)
  },
  unknown: e.unknown || t.unknown
})), OR = (e, t) => Object.assign(e, sp(e, t)), RR = bR(({ unknown: e, items: t, dyn: n, ...r }) => ({
  items: t !== 1 / 0 && (e || n.items > t || n.item),
  properties: !r.properties.includes(!0) && (e || !op(r, n))
}));
var ER = { initTracing: wR, andDelta: sp, orDelta: AR, applyDelta: OR, isDynamic: RR, inProperties: op };
const { format: X, safe: lu, safeand: Ai, safenot: Dn, safenotor: Oi } = hs, kR = Yd, { resolveReference: cr, joinPath: uu, getDynamicAnchors: TR, hasKeywords: fu } = np, Ri = yR, { toPointer: Ds, ...Fe } = da, { scopeMethods: ap } = qd, { buildName: Us, types: Jt, jsHelpers: SR } = Kd, { knownKeywords: PR, schemaVersions: Di, knownVocabularies: IR } = Jd, { initTracing: jR, andDelta: cu, orDelta: $n, applyDelta: CR, isDynamic: Xt, inProperties: LR } = ER, Bs = /* @__PURE__ */ new Set(["^[\\s\\S]*$", "^[\\S\\s]*$", "^[^]*$", "", ".*", "^", "$"]), zs = ["null", "boolean", "number", "integer", "string"], po = new Map(
  Object.entries({
    boolean: (e) => typeof e == "boolean",
    array: (e) => Array.isArray(e) && Object.getPrototypeOf(e) === Array.prototype,
    object: (e) => e && Object.getPrototypeOf(e) === Object.prototype,
    finite: (e) => Number.isFinite(e),
    natural: (e) => Number.isInteger(e) && e >= 0,
    string: (e) => typeof e == "string",
    jsonval: (e) => Fe.deepEqual(e, JSON.parse(JSON.stringify(e)))
  })
), qn = po.get("object"), du = (e) => qn(e) || typeof e == "boolean", MR = (e) => Fe.deepEqual(e, { type: [] }), An = (e, t) => Di.indexOf(e) > Di.indexOf(`https://json-schema.org/${t}/schema`), NR = (e, t) => {
  const n = `${e}`.replace(/^http:\/\//, "https://").replace(/#$/, "");
  return Di.includes(n) ? An(n, t) : !0;
}, FR = (e, t, n = !1, r = !1) => Object.freeze({ parent: e, keyname: t, inKeys: n, number: r }), WR = (e, t, n = !1) => Object.freeze({ parent: e, keyval: t, checked: n }), qs = Symbol("evaluatedStatic"), On = Symbol("optDynamic"), mr = Symbol("optDynAnchors"), Br = Symbol("optRecAnchors"), DR = (e) => {
  if (typeof e == "boolean")
    return e;
  if (qn(e) && Object.keys(e).length === 0)
    return !0;
}, Rn = /* @__PURE__ */ new Set(), Qr = /* @__PURE__ */ new Map(), UR = (e, t, n, r) => {
  if (t) {
    const i = t.replace(/^http:\/\//, "https://").replace(/#$/, "");
    n(Di.includes(i), "Unexpected schema version:", i), Qr.set(e, {
      exclusiveRefs: An(i, "draft/2019-09"),
      contentValidation: An(i, "draft/2019-09"),
      dependentUnsupported: An(i, "draft/2019-09"),
      newItemsSyntax: !An(i, "draft/2020-12"),
      containsEvaluates: !An(i, "draft/2020-12"),
      objectContains: !An(i, "draft/next"),
      bookending: An(i, "draft/next")
    });
  } else
    n(!r, "[requireSchema] $schema is required"), Qr.set(e, {});
}, lp = (e, t, n, r, i = "") => {
  const {
    mode: o = "default",
    useDefaults: s = !1,
    removeAdditional: a = !1,
    // supports additionalProperties: false and additionalItems: false
    includeErrors: l = !1,
    allErrors: u = !1,
    contentValidation: f,
    dryRun: c,
    // unused, just for rest siblings
    lint: d = !1,
    allowUnusedKeywords: g = n.mode === "lax" || n.mode === "spec",
    allowUnreachable: m = n.mode === "lax" || n.mode === "spec",
    requireSchema: _ = n.mode === "strong",
    requireValidation: b = n.mode === "strong",
    requireStringValidation: v = n.mode === "strong",
    forbidNoopValues: A = n.mode === "strong",
    // e.g. $recursiveAnchor: false (it's false by default)
    complexityChecks: F = n.mode === "strong",
    unmodifiedPrototypes: G = !1,
    // assumes no mangled Object/Array prototypes
    isJSON: P = !1,
    // assume input to be JSON, which e.g. makes undefined impossible
    $schemaDefault: N = null,
    formatAssertion: U = n.mode !== "spec" || NR(t.$schema, "draft/2019-09"),
    formats: K = {},
    weakFormats: M = n.mode !== "strong",
    extraFormats: ie = !1,
    schemas: R,
    // always a Map, produced at wrapper
    ...Q
  } = n, et = {
    ...Ri.core,
    ...M ? Ri.weak : {},
    ...ie ? Ri.extra : {},
    ...K
  };
  if (Object.keys(Q).length !== 0)
    throw new Error(`Unknown options: ${Object.keys(Q).join(", ")}`);
  if (!["strong", "lax", "default", "spec"].includes(o))
    throw new Error(`Invalid mode: ${o}`);
  if (!l && u)
    throw new Error("allErrors requires includeErrors to be enabled");
  if (_ && N)
    throw new Error("requireSchema forbids $schemaDefault");
  if (o === "strong") {
    const gt = { ...{ requireValidation: b, requireStringValidation: v }, formatAssertion: U, complexityChecks: F, requireSchema: _ }, ee = { weakFormats: M, allowUnusedKeywords: g };
    for (const [T, Qe] of Object.entries(gt))
      if (!Qe)
        throw new Error(`Strong mode demands ${T}`);
    for (const [T, Qe] of Object.entries(ee))
      if (Qe)
        throw new Error(`Strong mode forbids ${T}`);
  }
  const { gensym: pe, getref: z, genref: J, genformat: ue } = ap(r), ot = (mt) => {
    const gt = [];
    let ee = mt;
    for (; ee; )
      ee.name || gt.unshift(ee), ee = ee.parent || ee.errorParent;
    if (gt.every((Dt) => Dt.keyval !== void 0))
      return X("%j", Ds(gt.map((Dt) => Dt.keyval)));
    const T = ["#"], Qe = () => {
      const Dt = T.map(Fe.pointerPart).join("/");
      return T.length = 0, Dt;
    };
    let Ht = null;
    for (const { keyname: Dt, keyval: di, number: Mn } of gt)
      if (Dt) {
        Mn || (r.pointerPart = Fe.pointerPart);
        const tr = Mn ? Dt : X("pointerPart(%s)", Dt), ye = `${Qe()}/`;
        Ht = Ht ? X("%s+%j+%s", Ht, ye, tr) : X("%j+%s", ye, tr);
      } else
        di && T.push(di);
    return T.length > 0 ? X("%s+%j", Ht, `/${Qe()}`) : Ht;
  }, Ze = J(e);
  let tt = null;
  const xn = (...mt) => {
    const gt = tt(...mt);
    return xn.errors = tt.errors, gt;
  };
  r[Ze] = xn;
  const nn = fu(e, ["$ref", "$recursiveRef", "$dynamicRef"]), H = n[mr] && nn && fu(e, ["$dynamicAnchor"]), Pe = () => n[mr] ? X(H ? ", dynAnchors = []" : ", dynAnchors") : X(""), rn = n[Br] ? X(", recursive") : X(""), j = kR();
  j.write("function validate(data%s%s) {", rn, Pe()), l && j.write("validate.errors = null"), u && j.write("let errorCount = 0"), n[On] && j.write("validate.evaluatedDynamic = null");
  let ga = n[mr] ? X(", dynAnchors") : X("");
  H && (j.write("const dynLocal = [{}]"), ga = X(", [...dynAnchors, dynLocal[0] || []]"));
  const dp = SR(j, r, FR, { unmodifiedPrototypes: G, isJSON: P }, Bs), { present: sn, forObjectKeys: fi, forArray: ms, patternTest: pp, compare: gs } = dp, Ln = [], ht = () => Qr.get(t), er = i ? [i] : [], _s = (mt, gt, ee, T, Qe, Ht = {}, { constProp: Dt } = {}) => {
    const di = gt.length > 0 && gt[gt.length - 1].prop === ee, Mn = () => gt.filter((y) => y.prop === ee), tr = !ee.parent || ee.checked || ee.inKeys && P || Mn().length > 0, ye = Us(ee), Nn = (...y) => WR(ee, ...y), gn = ({ path: y = [], prop: $ = ee, source: O, suberr: S }) => {
      const w = Ds([...Qe, ...y]), C = l ? ot($) : null;
      if (l === !0 && mt && O) {
        r.errorMerge = Fe.errorMerge;
        const B = [O, w, C];
        u ? (j.write("if (validate.errors === null) validate.errors = []"), j.write("validate.errors.push(...%s.map(e => errorMerge(e, %j, %s)))", ...B)) : j.write("validate.errors = [errorMerge(%s[0], %j, %s)]", ...B);
      } else if (l === !0 && mt) {
        const B = X("{ keywordLocation: %j, instanceLocation: %s }", w, C);
        u ? (j.write("if (%s === null) %s = []", mt, mt), j.write("%s.push(%s)", mt, B)) : j.write("%s = [%s]", mt, B);
      }
      S && Sa(S), u ? j.write("errorCount++") : j.write("return false");
    }, At = (y, $) => j.if(y, () => gn($));
    d && !r.lintErrors && (r.lintErrors = []);
    const on = (y, $) => {
      const O = $ !== void 0 ? ` ${JSON.stringify($)}` : "", S = uu(i, Ds(Qe)), w = `${y}${O} at ${S}`;
      if (d)
        return r.lintErrors.push({ message: w, keywordLocation: S, schema: e });
      throw new Error(w);
    }, ys = (y, $) => {
      try {
        return pp(y, $);
      } catch (O) {
        return on(O.message), X("false");
      }
    }, ae = (y, ...$) => y || on(...$), jr = (y, ...$) => ae(o === "lax" || o === "spec" || y, ...$), _n = (y, $) => jr(!(T[$] < T[y]), `Invalid ${y} / ${$} combination`), vn = (y, $ = "should be specified") => ae(!b, `[requireValidation] ${y} ${$}`), Ke = (...y) => [...Qe, ...y], nr = (y) => ae(!a && !s, `[removeAdditional/useDefaults] uncertain: ${y}`), _a = (y, $) => ae(!F, `[complexityChecks] ${y}`, $), va = (y) => UR(t, y || N, ae, _), fe = jR(), Ae = (y) => CR(fe, y);
    if (typeof T == "boolean")
      return T === !0 ? (vn("schema = true", "is not allowed"), { stat: fe }) : (At(tr || ee.inKeys ? !0 : sn(ee), {}), Ae({ type: [] }), { stat: fe });
    ae(qn(T), "Schema is not an object");
    for (const y of Object.keys(T))
      ae(PR.includes(y) || g, "Keyword not supported:", y);
    if (Object.keys(T).length === 0)
      return vn("empty rules node", "is not allowed"), { stat: fe };
    const yn = new Set(Object.keys(T)), ya = /* @__PURE__ */ new Set(), bn = (y, ...$) => {
      ae(ya.has(y) || yn.has(y), "Unexpected double consumption:", y), ae(Fe.hasOwn(T, y), "Is not an own property:", y), ae($.every((O) => po.has(O)), "Invalid type used in consume"), ae($.some((O) => po.get(O)(T[y])), "Unexpected type for", y), yn.delete(y);
    }, ba = (y, ...$) => (T[y] !== void 0 && bn(y, ...$), T[y]), Z = (y, $, O, S = {}) => {
      if (T[y] === void 0)
        return !1;
      if (bn(y, ...$), O !== null)
        try {
          const w = O(T[y]);
          w !== null && At(w, { path: [y], ...S });
        } catch (w) {
          if (d && !w.message.startsWith("[opt] "))
            on(w.message);
          else
            throw w;
        }
      return !0;
    };
    if (T === t ? (va(ba("$schema", "string")), Z("$vocabulary", ["object"], (y) => {
      for (const [$, O] of Object.entries(y))
        O !== !1 && ae(O === !0 && IR.includes($), "Unknown vocabulary:", $);
      return null;
    })) : ht() || va(t.$schema), ht().objectContains)
      for (const y of ["contains", "minContains", "maxContains"])
        ya.add(y);
    Z("examples", ["array"], null), Z("example", ["jsonval"], null);
    for (const y of ["title", "description", "$comment"])
      Z(y, ["string"], null);
    for (const y of ["deprecated", "readOnly", "writeOnly"])
      Z(y, ["boolean"], null);
    Z("$defs", ["object"], null) || Z("definitions", ["object"], null);
    const Cr = (y, $, O) => y === e ? lu("validate") : z(y) || lp(y, $, n, r, O), wn = () => er.length > 0 ? er[er.length - 1] : "", hp = er.length, wa = (y) => (er.push(uu(wn(), y)), null);
    (!ht().exclusiveRefs || !T.$ref) && (Z("$id", ["string"], wa) || Z("id", ["string"], wa), Z("$anchor", ["string"], null), Z("$dynamicAnchor", ["string"], null), (T.$recursiveAnchor || !A) && Z("$recursiveAnchor", ["boolean"], (y) => (y && Ln.push([T, t, wn()]), null)));
    const $a = H && (T === e || T.id || T.$id);
    if ($a) {
      const y = TR(T);
      T !== e && j.write("dynLocal.unshift({})");
      for (const [$, O] of y) {
        const S = cr(t, R, `#${$}`, wn()), [w, C, B] = S[0] || [];
        ae(w === O, `Unexpected $dynamicAnchor resolution: ${$}`);
        const te = Cr(w, C, B);
        j.write("dynLocal[0][%j] = %s", `#${$}`, te);
      }
    }
    const bs = (y) => n[On] && (T[y] || T[y] === !1 || T === e), Ot = Object.freeze({
      item: bs("unevaluatedItems") ? pe("evaluatedItem") : null,
      items: bs("unevaluatedItems") ? pe("evaluatedItems") : null,
      props: bs("unevaluatedProperties") ? pe("evaluatedProps") : null
    }), Ie = Object.freeze({
      item: Ot.item || Ht.item,
      items: Ot.items || Ht.items,
      props: Ot.props || Ht.props
    }), Aa = () => (!Ie.items || fe.items === 1 / 0) && (!Ie.props || fe.properties.includes(!0)), Kt = (y) => {
      if (Ie.item && y.item && fe.items !== 1 / 0 && j.write("%s.push(%s)", Ie.item, y.item), Ie.items && y.items > fe.items && j.write("%s.push(%d)", Ie.items, y.items), Ie.props && (y.properties || []).includes(!0) && !fe.properties.includes(!0))
        j.write("%s[0].push(true)", Ie.props);
      else if (Ie.props) {
        const $ = (w, C) => LR(fe, { properties: w, patterns: C }), O = (y.properties || []).filter((w) => !$([w], [])), S = (y.patterns || []).filter((w) => !$([], [w]));
        O.length > 0 && j.write("%s[0].push(...%j)", Ie.props, O), S.length > 0 && j.write("%s[1].push(...%j)", Ie.props, S);
        for (const w of y.propertiesVars || [])
          j.write("%s[0].push(%s)", Ie.props, w);
      }
    }, Oa = (y, $, O, S) => {
      Xt(fe).items && y.item && $ && j.write("%s.push(...%s)", y.item, $), Xt(fe).items && y.items && O && j.write("%s.push(...%s)", y.items, O), Xt(fe).properties && y.props && S && (j.write("%s[0].push(...%s[0])", y.props, S), j.write("%s[1].push(...%s[1])", y.props, S));
    }, mp = () => n[Br] ? Ln.length === 0 ? X(", recursive") : X(", recursive || %s", Cr(...Ln[0])) : X(""), pi = (y, $) => {
      const O = r[y] && r[y][qs] || { unknown: !0 };
      Ae(O);
      const S = X("%s(%s%s%s)", y, ye, mp(), ga);
      if (!l && Aa())
        return X("!%s", S);
      const w = pe("res"), C = pe("err"), B = pe("suberr");
      return l && j.write("const %s = validate.errors", C), j.write("const %s = %s", w, S), l && j.write("const %s = %s.errors", B, y), l && j.write("validate.errors = %s", C), At(Dn(w), { ...$, source: B }), j.if(w, () => {
        const te = Xt(O).items ? X("%s.evaluatedDynamic[0]", y) : null, he = Xt(O).items ? X("%s.evaluatedDynamic[1]", y) : null, be = Xt(O).properties ? X("%s.evaluatedDynamic[2]", y) : null;
        Oa(Ie, te, he, be);
      }), null;
    }, Ra = (y, $) => y && y.every((O) => $.includes(O)), Ea = (y, $) => $.some((O) => y === null || y.includes(O)), ka = (...y) => Mn().some(($) => Ra($.stat.type, y)), gp = (...y) => Ra(fe.type, y) || ka(...y), rr = (...y) => Ea(fe.type, y) && Mn().every(($) => Ea($.stat.type, y)), ws = (y, $ = T) => {
      ae(typeof y == "string", "Invalid pattern:", y), (b || v) && ae(/^\^.*\$$/.test(y), "Should start with ^ and end with $:", y), /([{+*].*[{+*]|\)[{+*]|^[^^].*[{+*].)/.test(y) && $.maxLength === void 0 && _a("maxLength should be specified for pattern:", y);
    }, _p = T.pattern && !Bs.has(T.pattern), vp = T.uniqueItems || _p || T.patternProperties || T.format, hi = u && vp ? pe("prev") : null, mi = (y, $) => j.if(y && hi !== null ? X("errorCount === %s", hi) : !0, $), Ta = () => [...gt, { stat: fe, prop: ee }], _t = (...y) => _s(mt, Ta(), ...y).stat, Fn = (y, ...$) => {
      if ($[0] === ee) {
        const w = DR($[1]);
        if (w === !0)
          return { sub: X("true"), delta: {} };
        if (w === !1)
          return { sub: X("false"), delta: { type: [] } };
      }
      const O = pe("sub");
      j.write("const %s = (() => {", O), u && j.write("let errorCount = 0");
      const { stat: S } = _s(y, Ta(), ...$);
      return u ? j.write("return errorCount === 0") : j.write("return true"), j.write("})()"), { sub: O, delta: S };
    }, $s = () => {
      const y = l && u ? pe("suberr") : null;
      return y && j.write("let %s = null", y), y;
    }, Sa = (y) => {
      mt === null || y === null || j.if(y, () => j.write("%s.push(...%s)", mt, y));
    }, Pa = () => {
      if (!a)
        return !1;
      if (a === !0)
        return !0;
      if (a === "keyword")
        return T.removeAdditional ? (bn("removeAdditional", "boolean"), !0) : !1;
      throw new Error(`Invalid removeAdditional: ${a}`);
    }, gi = (y, $, O) => {
      Z(y, ["object", "boolean"], (w) => w === !1 && Pa() ? (j.write("if (%s.length > %s) %s.length = %s", ye, $, ye, $), null) : w === !1 && !O ? X("%s.length > %s", ye, $) : (ms(ee, $, (C, B) => (O && j.write("if (%s) continue", O(B)), _t(C, w, Ke(y)))), null)) && Ae({ items: 1 / 0 });
    }, As = (y, $) => {
      Z(y, ["object", "boolean"], (S) => (fi(ee, (w, C) => {
        j.if($(C), () => {
          S === !1 && Pa() ? j.write("delete %s[%s]", ye, C) : _t(w, S, Ke(y));
        });
      }), null)) && Ae({ properties: [!0] });
    }, Ia = (y, $, O) => Ai(
      ...$.map((S) => X("%s !== %j", y, S)),
      ...O.map((S) => Dn(ys(S, y)))
    ), ja = (y, $) => {
      const O = $.map((w) => new RegExp(w, "u")), S = (w) => y.includes(w) || O.some((C) => C.test(w));
      for (const w of fe.required)
        ae(S(w), "Unknown required property:", w);
    }, Ca = [], yp = () => {
      const y = (O, S) => X("!(%d %c %s)", O, S, ye);
      Number.isFinite(T.exclusiveMinimum) ? Z("exclusiveMinimum", ["finite"], (O) => y(O, "<")) : (Z("minimum", ["finite"], (O) => y(O, T.exclusiveMinimum ? "<" : "<=")), Z("exclusiveMinimum", ["boolean"], null)), Number.isFinite(T.exclusiveMaximum) ? (Z("exclusiveMaximum", ["finite"], (O) => y(O, ">")), _n("minimum", "exclusiveMaximum"), _n("exclusiveMinimum", "exclusiveMaximum")) : T.maximum !== void 0 && (Z("maximum", ["finite"], (O) => y(O, T.exclusiveMaximum ? ">" : ">=")), Z("exclusiveMaximum", ["boolean"], null), _n("minimum", "maximum"), _n("exclusiveMinimum", "maximum"));
      const $ = T.multipleOf === void 0 ? "divisibleBy" : "multipleOf";
      Z($, ["finite"], (O) => {
        ae(O > 0, `Invalid ${$}:`, O);
        const [S, w] = `${O}`.split("e-"), B = `${S}.`.split(".")[1].length + (w ? Number(w) : 0);
        if (Number.isInteger(O * 2 ** B))
          return X("%s %% %d !== 0", ye, O);
        r.isMultipleOf = Fe.isMultipleOf;
        const te = [ye, O, B, Math.round(O * Math.pow(10, B))];
        return X("!isMultipleOf(%s, %d, 1e%d, %d)", ...te);
      });
    }, bp = () => {
      Z("maxLength", ["natural"], (y) => (r.stringLength = Fe.stringLength, X("%s.length > %d && stringLength(%s) > %d", ye, y, ye, y))), Z("minLength", ["natural"], (y) => (r.stringLength = Fe.stringLength, X("%s.length < %d || stringLength(%s) < %d", ye, y, ye, y))), _n("minLength", "maxLength"), mi(!0, () => {
        const y = (w, C, B = et) => {
          const te = typeof w == "string" && Fe.hasOwn(B, w);
          ae(te, "Unrecognized format used:", w);
          const he = B[w], be = he instanceof RegExp || typeof he == "function";
          return ae(be, "Invalid format used:", w), U ? he instanceof RegExp ? (Fe.hasOwn(K, w) && ws(he.source), X("!%s.test(%s)", ue(he), C)) : X("!%s(%s)", ue(he), C) : null;
        };
        Z("format", ["string"], (w) => (Ae({ fullstring: !0 }), y(w, ye))), Z("pattern", ["string"], (w) => (ws(w), Ae({ fullstring: !0 }), Bs.has(w) ? null : Dn(ys(w, ye)))), ae(T.contentSchema !== !1, "contentSchema cannot be set to false");
        const $ = f === void 0 ? ht().contentValidation : f, O = T.contentEncoding || T.contentMediaType || T.contentSchema;
        if (ae(!O || $ || g, '"content*" keywords are disabled by default per spec, enable with { contentValidation = true } option (see doc/Options.md for more info)'), O && $) {
          const w = pe("dec");
          T.contentMediaType && j.write("let %s = %s", w, ye), T.contentEncoding === "base64" ? (At(y("base64", ye, Ri.extra), { path: ["contentEncoding"] }), T.contentMediaType && (r.deBase64 = Fe.deBase64, j.write("try {"), j.write("%s = deBase64(%s)", w, w)), bn("contentEncoding", "string")) : ae(!T.contentEncoding, "Unknown contentEncoding:", T.contentEncoding);
          let C = !1;
          if (T.contentMediaType === "application/json" ? (j.write("try {"), j.write("%s = JSON.parse(%s)", w, w), C = !0, bn("contentMediaType", "string")) : ae(!T.contentMediaType, "Unknown contentMediaType:", T.contentMediaType), T.contentSchema) {
            ae(C, "contentSchema requires contentMediaType application/json");
            const B = Object.freeze({ name: w, errorParent: ee });
            _t(B, T.contentSchema, Ke("contentSchema")), bn("contentSchema", "object", "array"), Ae({ fullstring: !0 });
          }
          T.contentMediaType && (j.write("} catch (e) {"), gn({ path: ["contentMediaType"] }), j.write("}"), T.contentEncoding && (j.write("} catch (e) {"), gn({ path: ["contentEncoding"] }), j.write("}")));
        }
      });
    }, wp = () => {
      Z("maxItems", ["natural"], (w) => {
        const C = ht().newItemsSyntax ? "prefixItems" : "items";
        return Array.isArray(T[C]) && T[C].length > w && on(`Invalid maxItems: ${w} is less than ${C} array length`), X("%s.length > %d", ye, w);
      }), Z("minItems", ["natural"], (w) => X("%s.length < %d", ye, w)), _n("minItems", "maxItems");
      const y = (w) => {
        for (let C = 0; C < w.length; C++)
          _t(Nn(C), w[C], Ke(`${C}`));
        return Ae({ items: w.length }), null;
      };
      ht().newItemsSyntax ? (Z("prefixItems", ["array"], y), gi("items", X("%d", (T.prefixItems || []).length))) : Array.isArray(T.items) ? (Z("items", ["array"], y), gi("additionalItems", X("%d", T.items.length))) : Z("items", ["object", "boolean"], (w) => (ms(ee, X("0"), (C) => _t(C, w, Ke("items"))), Ae({ items: 1 / 0 }), null)), La((w) => {
        ms(ee, X("0"), (C, B) => {
          w(C, () => {
            Ae({ dyn: { item: !0 } }), Kt({ item: B });
          });
        });
      });
      const $ = (w) => {
        if (!qn(w))
          return !1;
        if (w.enum || Fe.hasOwn(w, "const") || w.type && (Array.isArray(w.type) ? w.type : [w.type]).every((B) => zs.includes(B)))
          return !0;
        if (w.$ref) {
          const [C] = cr(t, R, w.$ref, wn())[0] || [];
          if ($(C))
            return !0;
        }
        return !1;
      }, O = (w) => w === !1 || $(w), S = () => !!(T.maxItems !== void 0 || O(T.items) || Array.isArray(T.items) && O(T.additionalItems));
      mi(!0, () => {
        Z("uniqueItems", ["boolean"], (w) => w === !1 ? null : (S() || _a("maxItems should be specified for non-primitive uniqueItems"), Object.assign(r, { unique: Fe.unique, deepEqual: Fe.deepEqual }), X("!unique(%s)", ye)));
      });
    }, ir = (y) => !u && (fe.required.includes(y) || Mn().some(($) => $.stat.required.includes(y))), $p = () => {
      const y = X("Object.keys(%s).length", ye);
      Z("maxProperties", ["natural"], ($) => X("%s > %d", y, $)), Z("minProperties", ["natural"], ($) => X("%s < %d", y, $)), _n("minProperties", "maxProperties"), Z("propertyNames", ["object", "boolean"], ($) => (fi(ee, (O, S) => {
        const w = typeof $ == "object" && !$.$ref ? { type: "string", ...$ } : $, C = Object.freeze({ name: S, errorParent: O, type: "string" });
        _t(C, w, Ke("propertyNames"));
      }), null)), Z("required", ["array"], ($) => {
        for (const O of $) {
          if (ir(O))
            continue;
          const S = Nn(O);
          At(Dn(sn(S)), { path: ["required"], prop: S });
        }
        return Ae({ required: $ }), null;
      });
      for (const $ of ["dependencies", "dependentRequired", "dependentSchemas"])
        $ !== "dependencies" && ht().dependentUnsupported || Z($, ["object"], (O) => {
          for (const S of Object.keys(O)) {
            const w = typeof O[S] == "string" ? [O[S]] : O[S], C = Nn(S, ir(S));
            if (Array.isArray(w) && $ !== "dependentSchemas") {
              const B = w.filter((be) => !ir(be)).map((be) => sn(Nn(be))), te = Dn(Ai(...B)), he = { path: [$, S] };
              B.length === 0 || (C.checked ? (At(te, he), Ae({ required: w })) : At(Ai(sn(C), te), he));
            } else
              du(w) && $ !== "dependentRequired" ? (nr($), j.if(C.checked ? !0 : sn(C), () => {
                const B = _t(ee, w, Ke($, S), Ie);
                Ae($n({}, B)), Kt(B);
              })) : on(`Unexpected ${$} entry`);
          }
          return null;
        });
      Z("propertyDependencies", ["object"], ($) => {
        for (const [O, S] of Object.entries($)) {
          ae(qn(S), "propertyDependencies must be an object"), nr("propertyDependencies");
          const w = Nn(O, ir(O));
          j.if(w.checked ? !0 : sn(w), () => {
            for (const [C, B] of Object.entries(S))
              ae(du(B), "propertyDependencies must contain schemas"), j.if(gs(Us(w), C), () => {
                const te = _t(ee, B, Ke("propertyDependencies", O, C), Ie);
                Ae($n({}, te)), Kt(te);
              });
          });
        }
        return null;
      }), Z("properties", ["object"], ($) => {
        for (const O of Object.keys($))
          Dt !== O && _t(Nn(O, ir(O)), $[O], Ke("properties", O));
        return Ae({ properties: Object.keys($) }), null;
      }), mi(T.patternProperties, () => {
        if (Z("patternProperties", ["object"], ($) => (fi(ee, (O, S) => {
          for (const w of Object.keys($))
            ws(w, T.propertyNames || {}), j.if(ys(w, S), () => {
              _t(O, $[w], Ke("patternProperties", w));
            });
        }), Ae({ patterns: Object.keys($) }), null)), T.additionalProperties || T.additionalProperties === !1) {
          const $ = Object.keys(T.properties || {}), O = Object.keys(T.patternProperties || {});
          T.additionalProperties === !1 && Ca.push(() => ja($, O)), As("additionalProperties", (w) => Ia(w, $, O));
        }
      }), ht().objectContains && La(($) => {
        fi(ee, (O, S) => {
          $(O, () => {
            Ae({ dyn: { properties: [!0] } }), Kt({ propertiesVars: [S] });
          });
        });
      });
    }, Ap = () => {
      const y = Z("const", ["jsonval"], (O) => Dn(gs(ye, O)));
      if (y && !g)
        return !0;
      const $ = Z("enum", ["array"], (O) => {
        const S = O.filter((C) => C && typeof C == "object"), w = O.filter((C) => !(C && typeof C == "object"));
        return Oi(...[...w, ...S].map((C) => gs(ye, C)));
      });
      return y || $;
    }, La = (y) => {
      Z("contains", ["object", "boolean"], () => {
        nr("contains"), ht().objectContains && rr("array") && rr("object") && vn("possible type confusion in 'contains',", "forbid 'object' or 'array'");
        const $ = pe("passes");
        j.write("let %s = 0", $);
        const O = $s();
        return y((S, w) => {
          const { sub: C } = Fn(O, S, T.contains, Ke("contains"));
          j.if(C, () => {
            j.write("%s++", $), ht().containsEvaluates && (ae(!a, `Can't use removeAdditional with draft2020+ "contains"`), w());
          });
        }), Z("minContains", ["natural"], (S) => X("%s < %d", $, S), { suberr: O }) || At(X("%s < 1", $), { path: ["contains"], suberr: O }), Z("maxContains", ["natural"], (S) => X("%s > %d", $, S)), _n("minContains", "maxContains"), null;
      });
    }, Op = () => {
      Z("not", ["object", "boolean"], (w) => Fn(null, ee, w, Ke("not")).sub), T.not && nr("not"), (T.then || T.then === !1 || T.else || T.else === !1 || g) && Z("if", ["object", "boolean"], (w) => {
        nr("if/then/else");
        const { sub: C, delta: B } = Fn(null, ee, w, Ke("if"), Ie);
        let te, he, be, ke;
        return Z("else", ["object", "boolean"], (Se) => (te = () => {
          be = _t(ee, Se, Ke("else"), Ie), Kt(be);
        }, null)), Z("then", ["object", "boolean"], (Se) => (he = () => {
          ke = _t(ee, Se, Ke("then"), Ie), Kt(cu(B, ke));
        }, null)), !he && !MR(B) && (he = () => Kt(B)), j.if(C, he, te), Ae($n(be || {}, cu(B, ke || {}))), null;
      });
      const $ = (w, C = "allOf") => {
        ae(w.length > 0, `${C} cannot be empty`);
        for (const [B, te] of Object.entries(w))
          Ae(_t(ee, te, Ke(C, B), Ie));
        return null;
      };
      Z("allOf", ["array"], (w) => $(w));
      let O = null;
      Z("discriminator", ["object"], (w) => {
        const C = /* @__PURE__ */ new Set(), B = (Be, or, ar) => ae(Be, `[discriminator]: ${or}`, ar), { propertyName: te, mapping: he, ...be } = w, ke = Nn(te);
        B(te && !T.oneOf != !T.anyOf, "need propertyName, oneOf OR anyOf"), B(Object.keys(be).length === 0, 'only "propertyName" and "mapping" are supported');
        const Se = (Be) => qn(Be) ? Object.keys(Be).length : null;
        return O = (Be, or) => {
          const ar = () => {
            j.write("switch (%s) {", Us(ke));
            let lr;
            for (const [kp, ur] of Object.entries(Be)) {
              const { const: Os, enum: Fa, ...Tp } = (ur.properties || {})[te] || {};
              let Mr = Os !== void 0 ? [Os] : Fa;
              if (!Mr && ur.$ref) {
                const [Yt] = cr(t, R, ur.$ref, wn())[0] || [];
                ae(qn(Yt), "failed to resolve $ref:", ur.$ref);
                const Nr = (Yt.properties || {})[te] || {};
                Mr = Nr.const !== void 0 ? [Nr.const] : Nr.enum;
              }
              const Sp = Array.isArray(Mr) && Mr.length > 0;
              B(Sp, "branches should have unique string const or enum values for [propertyName]");
              const Pp = Object.keys(Tp).length === 0 && (!Os || !Fa);
              B(Pp, "only const OR enum rules are allowed on [propertyName] in branches");
              for (const Yt of Mr) {
                const Nr = !he || Fe.hasOwn(he, Yt) && he[Yt] === ur.$ref;
                B(Nr, "mismatching mapping for", Yt);
                const Ip = typeof Yt == "string" && !C.has(Yt);
                B(Ip, "const/enum values for [propertyName] should be unique strings"), C.add(Yt), j.write("case %j:", Yt);
              }
              const Rs = _t(ee, ur, Ke(or, kp), Ie, { constProp: te });
              Kt(Rs), lr = lr ? $n(lr, Rs) : Rs, j.write("break");
            }
            B(he === void 0 || Se(he) === C.size, "mismatching mapping size"), Ae(lr), j.write("default:"), gn({ path: [or] }), j.write("}");
          }, Lr = () => {
            if (ir(te))
              ar();
            else {
              const lr = ["discriminator", "propertyName"];
              j.if(sn(ke), ar, () => gn({ path: lr, prop: ke }));
            }
          };
          return u || !Fe.deepEqual(fe.type, ["object"]) ? j.if(Jt.get("object")(ye), Lr, () => gn({ path: ["discriminator"] })) : Lr(), B(Fe.deepEqual(fe.type, ["object"]), "has to be checked for type:", "object"), B(fe.required.includes(te), "propertyName should be placed in required:", te), null;
        }, null;
      });
      const S = (w, C) => {
        const B = C.map((be) => be.type || (Array.isArray(be.const) ? "array" : typeof be.const)), te = B.filter((be) => !zs.includes(be) && be !== "array").length, he = B.filter((be) => !zs.includes(be) && be !== "object").length;
        (te > 1 || he > 1) && nr(`${w}, use discriminator to make it certain`);
      };
      Z("anyOf", ["array"], (w) => {
        if (ae(w.length > 0, "anyOf cannot be empty"), w.length === 1)
          return $(w);
        if (O)
          return O(w, "anyOf");
        const C = $s();
        if (!Aa()) {
          S("anyOf", w);
          const ke = Object.entries(w).map(
            ([Se, Be]) => Fn(C, ee, Be, Ke("anyOf", Se), Ie)
          );
          Ae(ke.map((Se) => Se.delta).reduce((Se, Be) => $n(Se, Be))), At(Oi(...ke.map(({ sub: Se }) => Se)), { path: ["anyOf"], suberr: C });
          for (const { delta: Se, sub: Be } of ke)
            j.if(Be, () => Kt(Se));
          return null;
        }
        const B = w.filter((ke) => Fe.hasOwn(ke, "const")), te = w.filter((ke) => !Fe.hasOwn(ke, "const"));
        S("anyOf", te);
        const he = [...B, ...te];
        let be;
        if (ht().exclusiveRefs) {
          let ke = () => gn({ path: ["anyOf"], suberr: C });
          for (const [Se, Be] of Object.entries(he).reverse()) {
            const or = ke;
            ke = () => {
              const { sub: ar, delta: Lr } = Fn(C, ee, Be, Ke("anyOf", Se));
              j.if(Dn(ar), or), be = be ? $n(be, Lr) : Lr;
            };
          }
          ke();
        } else {
          const ke = Object.entries(w).map(
            ([Se, Be]) => Fn(C, ee, Be, Ke("anyOf", Se), Ie)
          );
          be = ke.map((Se) => Se.delta).reduce((Se, Be) => $n(Se, Be)), At(Oi(...ke.map(({ sub: Se }) => Se)), { path: ["anyOf"], suberr: C });
        }
        return Ae(be), null;
      }), Z("oneOf", ["array"], (w) => {
        if (ae(w.length > 0, "oneOf cannot be empty"), w.length === 1)
          return $(w);
        if (O)
          return O(w, "oneOf");
        S("oneOf", w);
        const C = pe("passes");
        j.write("let %s = 0", C);
        const B = $s();
        let te, he = 0;
        const be = Object.entries(w).map(([ke, Se]) => {
          !l && he++ > 1 && At(X("%s > 1", C), { path: ["oneOf"] });
          const Be = Fn(B, ee, Se, Ke("oneOf", ke), Ie);
          return j.if(Be.sub, () => j.write("%s++", C)), te = te ? $n(te, Be.delta) : Be.delta, Be;
        });
        Ae(te), At(X("%s !== 1", C), { path: ["oneOf"] }), j.if(X("%s === 0", C), () => Sa(B));
        for (const ke of be)
          j.if(ke.sub, () => Kt(ke.delta));
        return null;
      });
    }, sr = (y, $, O) => {
      const [S, w] = [j.size(), yn.size];
      j.if(gp(...$) ? !0 : O, y), (S !== j.size() || w !== yn.size) && ae(rr(...$), "Unexpected rules in type", T.type);
    }, Rp = () => {
      if (fe.items === 1 / 0)
        T.unevaluatedItems === !1 && bn("unevaluatedItems", "boolean");
      else if (T.unevaluatedItems || T.unevaluatedItems === !1)
        if (Xt(fe).items) {
          if (!n[On])
            throw new Error("[opt] Dynamic unevaluated tracing not enabled");
          const y = X("Math.max(%d, ...%s)", fe.items, Ie.items), $ = (O) => X("%s.includes(%s)", Ie.item, O);
          gi("unevaluatedItems", y, ht().containsEvaluates ? $ : null);
        } else
          gi("unevaluatedItems", X("%d", fe.items));
    }, Ep = () => {
      mi(fe.patterns.length > 0 || fe.dyn.patterns.length > 0 || fe.unknown, () => {
        if (fe.properties.includes(!0))
          T.unevaluatedProperties === !1 && bn("unevaluatedProperties", "boolean");
        else if (T.unevaluatedProperties || T.unevaluatedProperties === !1) {
          const y = ($) => Ia($, fe.properties, fe.patterns);
          if (Xt(fe).properties) {
            if (!n[On])
              throw new Error("[opt] Dynamic unevaluated tracing not enabled");
            r.propertyIn = Fe.propertyIn;
            const $ = (S) => X("!propertyIn(%s, %s)", S, Ie.props);
            As("unevaluatedProperties", (S) => Ai(y(S), $(S)));
          } else
            T.unevaluatedProperties === !1 && ja(fe.properties, fe.patterns), As("unevaluatedProperties", y);
        }
      });
    }, Ma = () => {
      if (hi !== null && j.write("const %s = errorCount", hi), Ap()) {
        const y = [...Jt.keys()];
        if (Ae({ properties: [!0], items: 1 / 0, type: y, fullstring: !0 }), !g) {
          ae(yn.size === 0, "Unexpected keywords mixed with const or enum:", [...yn]);
          return;
        }
      }
      sr(yp, ["number", "integer"], Jt.get("number")(ye)), sr(bp, ["string"], Jt.get("string")(ye)), sr(wp, ["array"], Jt.get("array")(ye)), sr($p, ["object"], Jt.get("object")(ye)), Op(), sr(Rp, ["array"], Jt.get("array")(ye)), sr(Ep, ["object"], Jt.get("object")(ye));
      for (const y of Ca)
        y();
      Oa(Ht, Ot.item, Ot.items, Ot.props);
    }, Na = () => {
      if (Ot.item && j.write("const %s = []", Ot.item), Ot.items && j.write("const %s = [0]", Ot.items), Ot.props && j.write("const %s = [[], []]", Ot.props), Z("$ref", ["string"], ($) => {
        const O = cr(t, R, $, wn()), [S, w, C] = O[0] || [];
        if (!S && S !== !1 && (on("failed to resolve $ref:", $), d))
          return null;
        const B = Cr(S, w, C), te = S === e ? Ze : B;
        if (!r[te])
          throw new Error("Unexpected: coherence check failed");
        if (!r[te][qs] && S.type) {
          const he = Array.isArray(S.type) ? S.type : [S.type];
          Ae({ type: he }), b && (Rn.add(te), he.includes("array") && Ae({ items: 1 / 0 }), he.includes("object") && Ae({ properties: [!0] })), v && he.includes("string") && (Rn.add(te), Ae({ fullstring: !0 }));
        }
        return pi(B, { path: ["$ref"] });
      }), ht().exclusiveRefs && (ae(!n[On], "unevaluated* is supported only on draft2019-09 and above"), T.$ref))
        return;
      Z("$recursiveRef", ["string"], ($) => {
        if (!n[Br])
          throw new Error("[opt] Recursive anchors are not enabled");
        ae($ === "#", 'Behavior of $recursiveRef is defined only for "#"');
        const O = cr(t, R, "#", wn()), [S, w, C] = O[0];
        jr(S.$recursiveAnchor, "$recursiveRef without $recursiveAnchor");
        const B = Cr(S, w, C), te = S.$recursiveAnchor ? X("(recursive || %s)", B) : B;
        return pi(te, { path: ["$recursiveRef"] });
      }), Z("$dynamicRef", ["string"], ($) => {
        if (!n[mr])
          throw new Error("[opt] Dynamic anchors are not enabled");
        jr(/^[^#]*#[a-zA-Z0-9_-]+$/.test($), "Unsupported $dynamicRef format");
        const O = $.replace(/^[^#]+/, ""), S = cr(t, R, $, wn());
        if (!S[0] && !ht().bookending) {
          jr(!1, "$dynamicRef bookending resolution failed (even though not required)"), r.dynamicResolve = Fe.dynamicResolve;
          const ke = X("dynamicResolve(dynAnchors || [], %j)", O);
          return pi(ke, { path: ["$dynamicRef"] });
        }
        ae(S[0], "$dynamicRef bookending resolution failed", $);
        const [w, C, B] = S[0], te = w.$dynamicAnchor && `#${w.$dynamicAnchor}` === O;
        jr(te, "$dynamicRef without $dynamicAnchor in the same scope");
        const he = Cr(w, C, B);
        r.dynamicResolve = Fe.dynamicResolve;
        const be = te ? X("(dynamicResolve(dynAnchors || [], %j) || %s)", O, he) : he;
        return pi(be, { path: ["$dynamicRef"] });
      });
      let y = null;
      Z("type", ["string", "array"], ($) => {
        const O = Array.isArray($) ? $ : [$];
        for (const w of O)
          ae(typeof w == "string" && Jt.has(w), "Unknown type:", w);
        if (ee.type)
          return ae(Fe.deepEqual(O, [ee.type]), "One type allowed:", ee.type), Ae({ type: [ee.type] }), null;
        if (ka(...O))
          return null;
        const S = O.filter((w) => rr(w));
        return S.length === 0 && on("No valid types possible"), Ae({ type: O }), y = Oi(...S.map((w) => Jt.get(w)(ye))), null;
      }), y && u ? j.if(y, () => gn({ path: ["type"] }), Ma) : (y && At(y, { path: ["type"] }), Ma()), fe.items < 1 / 0 && T.maxItems <= fe.items && Ae({ items: 1 / 0 });
    };
    if (T.default !== void 0 && s) {
      tr && on("Can not apply default value here (e.g. at root)");
      const y = ba("default", "jsonval");
      j.if(sn(ee), Na, () => j.write("%s = %j", ye, y));
    } else
      Z("default", ["jsonval"], null), j.if(tr ? !0 : sn(ee), Na);
    if (er.length = hp, Ln[0] && Ln[Ln.length - 1][0] === T && Ln.pop(), $a && T !== e && j.write("dynLocal.shift()"), m || ae(!j.optimizedOut, "some checks are never reachable"), di) {
      const y = ["not", "if", "then", "else"].includes(Qe[Qe.length - 1]), $ = ["oneOf", "anyOf", "allOf"].includes(Qe[Qe.length - 2]), O = ["dependencies", "dependentSchemas"].includes(Qe[Qe.length - 2]), S = ["propertyDependencies"].includes(Qe[Qe.length - 3]);
      ae(y || $ || O || S, "Unexpected logical path");
    } else if (!Qe.includes("not") && ((!(e !== t && T === e) || Rn.has(Ze)) && (Rn.delete(Ze), fe.type || vn("type"), rr("array") && fe.items !== 1 / 0 && vn(T.items ? "additionalItems or unevaluatedItems" : "items rule"), rr("object") && !fe.properties.includes(!0) && vn("additionalProperties or unevaluatedProperties"), !fe.fullstring && v && on("[requireStringValidation] pattern, format or contentSchema should be specified for strings, use pattern: ^[\\s\\S]*$ to opt-out")), typeof T.propertyNames != "object"))
      for (const $ of ["additionalProperties", "unevaluatedProperties"])
        T[$] && vn(`wild-card ${$}`, "requires propertyNames");
    return T.properties && !T.required && vn("if properties is used, required"), ae(yn.size === 0 || g, "Unprocessed keywords:", [...yn]), { stat: fe, local: Ot };
  }, { stat: vs, local: ci } = _s(X("validate.errors"), [], { name: lu("data") }, e, []);
  if (Rn.has(Ze))
    throw new Error("Unexpected: unvalidated cyclic ref");
  if (n[On] && (Xt(vs).items || Xt(vs).properties)) {
    if (!ci)
      throw new Error("Failed to trace dynamic properties");
    j.write("validate.evaluatedDynamic = [%s, %s, %s]", ci.item, ci.items, ci.props);
  }
  return u ? j.write("return errorCount === 0") : j.write("return true"), j.write("}"), d || (tt = j.makeFunction(r), delete r[Ze], r[Ze] = tt), r[Ze][qs] = vs, Ze;
}, ji = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("Expected an array of schemas");
  try {
    const n = /* @__PURE__ */ Object.create(null), { getref: r } = ap(n);
    Rn.clear(), Qr.clear();
    const i = e.map((o) => r(o) || lp(o, o, t, n));
    if (Rn.size !== 0)
      throw new Error("Unexpected: not all refs are validated");
    return { scope: n, refs: i };
  } catch (n) {
    if (!t[On] && n.message === "[opt] Dynamic unevaluated tracing not enabled")
      return ji(e, { ...t, [On]: !0 });
    if (!t[mr] && n.message === "[opt] Dynamic anchors are not enabled")
      return ji(e, { ...t, [mr]: !0 });
    if (!t[Br] && n.message === "[opt] Recursive anchors are not enabled")
      return ji(e, { ...t, [Br]: !0 });
    throw n;
  } finally {
    Rn.clear(), Qr.clear();
  }
};
var BR = { compile: ji };
const zR = Yd, { buildSchemas: qR } = np, { compile: GR } = BR, { deepEqual: ha } = da, HR = (e) => function t(n) {
  if (!ha(n, JSON.parse(JSON.stringify(n))))
    return t.errors = [{ instanceLocation: "#", error: "not JSON compatible" }], !1;
  const r = e(n);
  return t.errors = e.errors, r;
}, KR = (e) => (t) => ha(t, JSON.parse(JSON.stringify(t))) && e(t), ma = (e, { parse: t = !1, multi: n = !1, jsonCheck: r = !1, isJSON: i = !1, schemas: o = [], ...s } = {}) => {
  if (r && i)
    throw new Error("Can not specify both isJSON and jsonCheck options");
  if (t && (r || i))
    throw new Error("jsonCheck and isJSON options are not applicable in parser mode");
  const a = t ? "strong" : "default", l = i || r || t, u = n ? e : [e], f = { mode: a, ...s, schemas: qR(o, u), isJSON: l }, { scope: c, refs: d } = GR(u, f);
  if (s.dryRun)
    return;
  if (s.lint)
    return c.lintErrors;
  const g = zR();
  if (t ? c.parseWrap = s.includeErrors ? YR : JR : r && (c.deepEqual = ha, c.jsonCheckWrap = s.includeErrors ? HR : KR), n) {
    g.write("[");
    for (const _ of d.slice(0, -1))
      g.write("%s,", _);
    d.length > 0 && g.write("%s", d[d.length - 1]), g.write("]"), t ? g.write(".map(parseWrap)") : r && g.write(".map(jsonCheckWrap)");
  } else
    t ? g.write("parseWrap(%s)", d[0]) : r ? g.write("jsonCheckWrap(%s)", d[0]) : g.write("%s", d[0]);
  const m = g.makeFunction(c);
  return m.toModule = ({ semi: _ = !0 } = {}) => g.makeModule(c) + (_ ? ";" : ""), m.toJSON = () => e, m;
}, YR = (e) => (t) => {
  if (typeof t != "string")
    return { valid: !1, error: "Input is not a string" };
  try {
    const n = JSON.parse(t);
    if (!e(n)) {
      const { keywordLocation: r, instanceLocation: i } = e.errors[0];
      return { valid: !1, error: `JSON validation failed for ${r.slice(r.lastIndexOf("/") + 1)} at ${i}`, errors: e.errors };
    }
    return { valid: !0, value: n };
  } catch ({ message: n }) {
    return { valid: !1, error: n };
  }
}, JR = (e) => (t) => {
  if (typeof t != "string")
    return { valid: !1 };
  try {
    const n = JSON.parse(t);
    return e(n) ? { valid: !0, value: n } : { valid: !1 };
  } catch {
    return { valid: !1 };
  }
}, XR = function(e, { parse: t = !0, ...n } = {}) {
  if (!t)
    throw new Error("can not disable parse in parser");
  return ma(e, { parse: t, ...n });
}, ZR = function(e, { lint: t = !0, ...n } = {}) {
  if (!t)
    throw new Error("can not disable lint option in lint()");
  return ma(e, { lint: t, ...n });
};
var VR = { validator: ma, parser: XR, lint: ZR };
const up = Symbol(), fp = Symbol();
function pu(e, t, n) {
  const r = e.slice();
  return r[6] = t[n], r[8] = n, r;
}
function hu(e) {
  let t, n = (
    /*enumText*/
    (e[4] || [])[
      /*idx*/
      e[8]
    ] + ""
  ), r, i;
  return {
    c() {
      t = I("option"), r = lt(n), t.__value = i = /*enumVal*/
      e[6], zr(t, t.__value);
    },
    m(o, s) {
      k(o, t, s), D(t, r);
    },
    p(o, s) {
      s & /*enumText*/
      16 && n !== (n = /*enumText*/
      (o[4] || [])[
        /*idx*/
        o[8]
      ] + "") && bt(r, n), s & /*enumVals*/
      8 && i !== (i = /*enumVal*/
      o[6]) && (t.__value = i, zr(t, t.__value));
    },
    d(o) {
      o && E(t);
    }
  };
}
function QR(e) {
  let t, n, r, i, o, s, a, l = Ve(
    /*enumVals*/
    e[3]
  ), u = [];
  for (let f = 0; f < l.length; f += 1)
    u[f] = hu(pu(e, l, f));
  return {
    c() {
      t = I("select"), n = I("option");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      n.__value = "", zr(n, n.__value), h(t, "id", r = /*params*/
      e[0].path.join(".")), h(t, "name", i = /*params*/
      e[0].path.join(".")), t.disabled = o = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly, h(t, "class", "border w-full");
    },
    m(f, c) {
      k(f, t, c), D(t, n);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(t, null);
      Da(
        t,
        /*value*/
        e[2]
      ), s || (a = Y(
        t,
        "change",
        /*change_handler*/
        e[5]
      ), s = !0);
    },
    p(f, c) {
      if (c & /*enumVals, enumText*/
      24) {
        l = Ve(
          /*enumVals*/
          f[3]
        );
        let d;
        for (d = 0; d < l.length; d += 1) {
          const g = pu(f, l, d);
          u[d] ? u[d].p(g, c) : (u[d] = hu(g), u[d].c(), u[d].m(t, null));
        }
        for (; d < u.length; d += 1)
          u[d].d(1);
        u.length = l.length;
      }
      c & /*params*/
      1 && r !== (r = /*params*/
      f[0].path.join(".")) && h(t, "id", r), c & /*params*/
      1 && i !== (i = /*params*/
      f[0].path.join(".")) && h(t, "name", i), c & /*value, enumVals*/
      12 && Da(
        t,
        /*value*/
        f[2]
      ), c & /*schema, params*/
      3 && o !== (o = /*schema*/
      f[1].readOnly || /*params*/
      f[0].containerReadOnly) && (t.disabled = o);
    },
    d(f) {
      f && E(t), xr(u, f), s = !1, a();
    }
  };
}
function xR(e) {
  let t, n, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function o(s, a) {
    return {
      props: {
        params: (
          /*params*/
          s[0]
        ),
        schema: (
          /*schema*/
          s[1]
        ),
        $$slots: { default: [QR] },
        $$scope: { ctx: s }
      }
    };
  }
  return i && (t = qe(i, o(e))), {
    c() {
      t && ve(t.$$.fragment), n = Xe();
    },
    m(s, a) {
      t && ge(t, s, a), k(s, n, a), r = !0;
    },
    p(s, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      s[0].components.fieldWrapper)) {
        if (t) {
          we();
          const l = t;
          W(l.$$.fragment, 1, 0, () => {
            _e(l, 1);
          }), $e();
        }
        i ? (t = qe(i, o(s)), ve(t.$$.fragment), L(t.$$.fragment, 1), ge(t, n.parentNode, n)) : t = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        s[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        s[1]), a & /*$$scope, params, value, schema, enumVals, enumText*/
        543 && (l.$$scope = { dirty: a, ctx: s }), t.$set(l);
      }
    },
    i(s) {
      r || (t && L(t.$$.fragment, s), r = !0);
    },
    o(s) {
      t && W(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(n), t && _e(t, s);
    }
  };
}
function eE(e, t, n) {
  let { params: r } = t, { schema: i } = t, { value: o } = t, s, a;
  const l = (u) => r.pathChanged(r.path, u.currentTarget.value || void 0);
  return e.$$set = (u) => {
    "params" in u && n(0, r = u.params), "schema" in u && n(1, i = u.schema), "value" in u && n(2, o = u.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    2 && n(3, s = i.enum), e.$$.dirty & /*schema*/
    2 && n(4, a = i.enumText || i.enum);
  }, [r, i, o, s, a, l];
}
class tE extends Ne {
  constructor(t) {
    super(), Me(this, t, eE, xR, Ce, { params: 0, schema: 1, value: 2 });
  }
}
function nE(e) {
  let t, n;
  return {
    c() {
      t = yt("svg"), n = yt("path"), h(n, "d", "m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"), h(n, "fill-rule", "nonzero"), h(t, "class", "svg-icon"), h(t, "role", "img"), h(t, "height", "24"), h(t, "width", "24"), h(t, "viewBox", "0 0 24 24"), h(t, "aria-hidden", "true"), h(t, "focusable", "false"), h(t, "clip-rule", "evenodd"), h(t, "fill-rule", "evenodd"), h(t, "stroke-linejoin", "round"), h(t, "stroke-miterlimit", "2"), h(t, "fill", "#777"), h(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      k(r, t, i), D(t, n);
    },
    p: ne,
    i: ne,
    o: ne,
    d(r) {
      r && E(t);
    }
  };
}
class rE extends Ne {
  constructor(t) {
    super(), Me(this, t, null, nE, Ce, {});
  }
}
function iE(e) {
  let t, n;
  return {
    c() {
      t = yt("svg"), n = yt("path"), h(n, "d", "m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"), h(n, "fill-rule", "nonzero"), h(t, "class", "svg-icon"), h(t, "role", "img"), h(t, "height", "24"), h(t, "width", "24"), h(t, "viewBox", "0 0 24 24"), h(t, "aria-hidden", "true"), h(t, "focusable", "false"), h(t, "clip-rule", "evenodd"), h(t, "fill-rule", "evenodd"), h(t, "fill", "#777"), h(t, "stroke-linejoin", "round"), h(t, "stroke-miterlimit", "2"), h(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      k(r, t, i), D(t, n);
    },
    p: ne,
    i: ne,
    o: ne,
    d(r) {
      r && E(t);
    }
  };
}
class sE extends Ne {
  constructor(t) {
    super(), Me(this, t, null, iE, Ce, {});
  }
}
function oE(e) {
  let t, n;
  return {
    c() {
      t = yt("svg"), n = yt("path"), h(n, "d", "m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z"), h(n, "fill-rule", "nonzero"), h(t, "class", "svg-icon"), h(t, "role", "img"), h(t, "height", "24"), h(t, "width", "24"), h(t, "viewBox", "0 0 24 24"), h(t, "aria-hidden", "true"), h(t, "focusable", "false"), h(t, "clip-rule", "evenodd"), h(t, "fill-rule", "evenodd"), h(t, "fill", "#777"), h(t, "stroke-linejoin", "round"), h(t, "stroke-miterlimit", "2"), h(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      k(r, t, i), D(t, n);
    },
    p: ne,
    i: ne,
    o: ne,
    d(r) {
      r && E(t);
    }
  };
}
class cp extends Ne {
  constructor(t) {
    super(), Me(this, t, null, oE, Ce, {});
  }
}
function aE(e) {
  let t, n;
  return {
    c() {
      t = yt("svg"), n = yt("path"), h(n, "d", "M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2zm18-8h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"), h(t, "class", "svg-icon"), h(t, "role", "img"), h(t, "height", "24"), h(t, "width", "24"), h(t, "viewBox", "0 0 24 24"), h(t, "aria-hidden", "true"), h(t, "focusable", "false"), h(t, "fill", "#777"), h(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      k(r, t, i), D(t, n);
    },
    p: ne,
    i: ne,
    o: ne,
    d(r) {
      r && E(t);
    }
  };
}
class lE extends Ne {
  constructor(t) {
    super(), Me(this, t, null, aE, Ce, {});
  }
}
function uE(e) {
  let t, n;
  return {
    c() {
      t = yt("svg"), n = yt("path"), h(n, "d", "m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z"), h(n, "fill-rule", "nonzero"), h(t, "class", "svg-icon"), h(t, "role", "img"), h(t, "height", "24"), h(t, "width", "24"), h(t, "viewBox", "0 0 24 24"), h(t, "aria-hidden", "true"), h(t, "focusable", "false"), h(t, "clip-rule", "evenodd"), h(t, "fill-rule", "evenodd"), h(t, "fill", "#777"), h(t, "stroke-linejoin", "round"), h(t, "stroke-miterlimit", "2"), h(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      k(r, t, i), D(t, n);
    },
    p: ne,
    i: ne,
    o: ne,
    d(r) {
      r && E(t);
    }
  };
}
class fE extends Ne {
  constructor(t) {
    super(), Me(this, t, null, uE, Ce, {});
  }
}
function cE(e) {
  let t, n;
  return {
    c() {
      t = yt("svg"), n = yt("path"), h(n, "d", "m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291zm-7.564-.289h5.446l-2.718-3.522z"), h(n, "fill-rule", "nonzero"), h(t, "class", "svg-icon"), h(t, "role", "img"), h(t, "height", "24"), h(t, "width", "24"), h(t, "viewBox", "0 0 24 24"), h(t, "aria-hidden", "true"), h(t, "focusable", "false"), h(t, "clip-rule", "evenodd"), h(t, "fill-rule", "evenodd"), h(t, "fill", "#777"), h(t, "stroke-linejoin", "round"), h(t, "stroke-miterlimit", "2"), h(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      k(r, t, i), D(t, n);
    },
    p: ne,
    i: ne,
    o: ne,
    d(r) {
      r && E(t);
    }
  };
}
class dE extends Ne {
  constructor(t) {
    super(), Me(this, t, null, cE, Ce, {});
  }
}
const Ui = (e, t, n) => () => {
  t.pathChanged(t.path, [
    ...n || [],
    ca(e.items)
  ]);
}, pE = (e, t, n) => () => {
  const r = n || [];
  if (typeof e.minItems != "number" || r.length >= e.minItems)
    return;
  const i = new Array(e.minItems - r.length).fill(ca(e.items));
  t.pathChanged(t.path, [
    ...r,
    ...i
  ]);
}, Bi = (e, t, n) => () => {
  t.pathChanged(t.path, [
    ...n.slice(0, e),
    ...n.slice(e + 1)
  ], "delete", e.toString());
}, zi = (e, t, n) => () => {
  t.pathChanged(t.path, [
    ...n.slice(0, e),
    n[e],
    JSON.parse(JSON.stringify(n[e])),
    ...n.slice(e + 1)
  ], "duplicate", (e + 1).toString());
}, qi = (e, t, n) => () => {
  e > 0 && t.pathChanged(t.path, [
    ...n.slice(0, e - 1),
    n[e],
    n[e - 1],
    ...n.slice(e + 1)
  ], "up", (e - 1).toString());
}, Gi = (e, t, n) => () => {
  e < n.length - 1 && t.pathChanged(t.path, [
    ...n.slice(0, e),
    n[e + 1],
    n[e],
    ...n.slice(e + 2)
  ], "down", (e + 1).toString());
};
function mu(e, t, n) {
  const r = e.slice();
  return r[13] = t[n], r[15] = n, r;
}
function gu(e) {
  let t, n, r, i, o, s = (
    /*params*/
    (e[1].collapsible || /*legendText*/
    e[9]) && _u(e)
  ), a = (
    /*collapserOpenState*/
    e[3] === "open" && bu(e)
  );
  return {
    c() {
      s && s.c(), t = x(), n = I("fieldset"), a && a.c(), h(n, "name", r = /*params*/
      e[1].path.join(".")), h(n, "class", i = "col-span-2 array depth-" + /*params*/
      e[1].path.length);
    },
    m(l, u) {
      s && s.m(l, u), k(l, t, u), k(l, n, u), a && a.m(n, null), o = !0;
    },
    p(l, u) {
      /*params*/
      l[1].collapsible || /*legendText*/
      l[9] ? s ? (s.p(l, u), u & /*params, legendText*/
      514 && L(s, 1)) : (s = _u(l), s.c(), L(s, 1), s.m(t.parentNode, t)) : s && (we(), W(s, 1, 1, () => {
        s = null;
      }), $e()), /*collapserOpenState*/
      l[3] === "open" ? a ? (a.p(l, u), u & /*collapserOpenState*/
      8 && L(a, 1)) : (a = bu(l), a.c(), L(a, 1), a.m(n, null)) : a && (we(), W(a, 1, 1, () => {
        a = null;
      }), $e()), (!o || u & /*params*/
      2 && r !== (r = /*params*/
      l[1].path.join("."))) && h(n, "name", r), (!o || u & /*params*/
      2 && i !== (i = "col-span-2 array depth-" + /*params*/
      l[1].path.length)) && h(n, "class", i);
    },
    i(l) {
      o || (L(s), L(a), o = !0);
    },
    o(l) {
      W(s), W(a), o = !1;
    },
    d(l) {
      l && (E(t), E(n)), s && s.d(l), a && a.d();
    }
  };
}
function _u(e) {
  let t, n, r = It(
    /*legendText*/
    e[9]
  ) + "", i, o, s, a, l, u, f, c, d = (
    /*schema*/
    e[0].description && vu(e)
  );
  const g = [mE, hE], m = [];
  function _(v, A) {
    return A & /*controls, atMaxItems, params, collapserOpenState*/
    106 && (a = null), a == null && (a = !!/*controls*/
    (v[6].includes("add") && !/*atMaxItems*/
    v[5] && (!/*params*/
    v[1].collapsible || /*collapserOpenState*/
    v[3] === "open"))), a ? 0 : 1;
  }
  l = _(e, -1), u = m[l] = g[l](e);
  let b = (
    /*params*/
    e[1].collapsible && yu(e)
  );
  return {
    c() {
      t = I("legend"), n = I("h4"), i = x(), d && d.c(), o = x(), s = I("div"), u.c(), f = x(), b && b.c(), h(t, "class", "subset-label array-label"), h(s, "class", "inline-flex flex-nowrap justify-between");
    },
    m(v, A) {
      k(v, t, A), D(t, n), n.innerHTML = r, D(t, i), d && d.m(t, null), k(v, o, A), k(v, s, A), m[l].m(s, null), D(s, f), b && b.m(s, null), c = !0;
    },
    p(v, A) {
      (!c || A & /*legendText*/
      512) && r !== (r = It(
        /*legendText*/
        v[9]
      ) + "") && (n.innerHTML = r), /*schema*/
      v[0].description ? d ? d.p(v, A) : (d = vu(v), d.c(), d.m(t, null)) : d && (d.d(1), d = null);
      let F = l;
      l = _(v, A), l === F ? m[l].p(v, A) : (we(), W(m[F], 1, 1, () => {
        m[F] = null;
      }), $e(), u = m[l], u ? u.p(v, A) : (u = m[l] = g[l](v), u.c()), L(u, 1), u.m(s, f)), /*params*/
      v[1].collapsible ? b ? (b.p(v, A), A & /*params*/
      2 && L(b, 1)) : (b = yu(v), b.c(), L(b, 1), b.m(s, null)) : b && (we(), W(b, 1, 1, () => {
        b = null;
      }), $e());
    },
    i(v) {
      c || (L(u), L(b), c = !0);
    },
    o(v) {
      W(u), W(b), c = !1;
    },
    d(v) {
      v && (E(t), E(o), E(s)), d && d.d(), m[l].d(), b && b.d();
    }
  };
}
function vu(e) {
  let t, n = It(
    /*schema*/
    e[0].description
  ) + "";
  return {
    c() {
      t = I("span"), h(t, "class", "subset-label-description object-label-description");
    },
    m(r, i) {
      k(r, t, i), t.innerHTML = n;
    },
    p(r, i) {
      i & /*schema*/
      1 && n !== (n = It(
        /*schema*/
        r[0].description
      ) + "") && (t.innerHTML = n);
    },
    d(r) {
      r && E(t);
    }
  };
}
function hE(e) {
  let t;
  return {
    c() {
      t = I("span"), h(t, "class", "w-6");
    },
    m(n, r) {
      k(n, t, r);
    },
    p: ne,
    i: ne,
    o: ne,
    d(n) {
      n && E(t);
    }
  };
}
function mE(e) {
  let t, n, r, i, o;
  return n = new rE({}), {
    c() {
      t = I("button"), ve(n.$$.fragment), h(t, "type", "button"), h(t, "title", "add item");
    },
    m(s, a) {
      k(s, t, a), ge(n, t, null), r = !0, i || (o = Y(t, "click", function() {
        Ye(Ui(
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
      }), i = !0);
    },
    p(s, a) {
      e = s;
    },
    i(s) {
      r || (L(n.$$.fragment, s), r = !0);
    },
    o(s) {
      W(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(t), _e(n), i = !1, o();
    }
  };
}
function yu(e) {
  let t, n, r, i;
  const o = [_E, gE], s = [];
  function a(l, u) {
    return (
      /*collapserOpenState*/
      l[3] === "open" ? 0 : 1
    );
  }
  return t = a(e), n = s[t] = o[t](e), {
    c() {
      n.c(), r = Xe();
    },
    m(l, u) {
      s[t].m(l, u), k(l, r, u), i = !0;
    },
    p(l, u) {
      let f = t;
      t = a(l), t === f ? s[t].p(l, u) : (we(), W(s[f], 1, 1, () => {
        s[f] = null;
      }), $e(), n = s[t], n ? n.p(l, u) : (n = s[t] = o[t](l), n.c()), L(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      i || (L(n), i = !0);
    },
    o(l) {
      W(n), i = !1;
    },
    d(l) {
      l && E(r), s[t].d(l);
    }
  };
}
function gE(e) {
  let t, n, r, i, o;
  return n = new fE({}), {
    c() {
      t = I("button"), ve(n.$$.fragment), h(t, "type", "button"), h(t, "title", "Expand");
    },
    m(s, a) {
      k(s, t, a), ge(n, t, null), r = !0, i || (o = Y(
        t,
        "click",
        /*toggle*/
        e[10]
      ), i = !0);
    },
    p: ne,
    i(s) {
      r || (L(n.$$.fragment, s), r = !0);
    },
    o(s) {
      W(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(t), _e(n), i = !1, o();
    }
  };
}
function _E(e) {
  let t, n, r, i, o;
  return n = new cp({}), {
    c() {
      t = I("button"), ve(n.$$.fragment), h(t, "type", "button"), h(t, "title", "Collapse");
    },
    m(s, a) {
      k(s, t, a), ge(n, t, null), r = !0, i || (o = Y(
        t,
        "click",
        /*toggle*/
        e[10]
      ), i = !0);
    },
    p: ne,
    i(s) {
      r || (L(n.$$.fragment, s), r = !0);
    },
    o(s) {
      W(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(t), _e(n), i = !1, o();
    }
  };
}
function bu(e) {
  let t, n, r, i;
  const o = [yE, vE], s = [];
  function a(l, u) {
    return (
      /*emptyText*/
      l[7] ? 1 : 0
    );
  }
  return t = a(e), n = s[t] = o[t](e), {
    c() {
      n.c(), r = Xe();
    },
    m(l, u) {
      s[t].m(l, u), k(l, r, u), i = !0;
    },
    p(l, u) {
      let f = t;
      t = a(l), t === f ? s[t].p(l, u) : (we(), W(s[f], 1, 1, () => {
        s[f] = null;
      }), $e(), n = s[t], n ? n.p(l, u) : (n = s[t] = o[t](l), n.c()), L(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      i || (L(n), i = !0);
    },
    o(l) {
      W(n), i = !1;
    },
    d(l) {
      l && E(r), s[t].d(l);
    }
  };
}
function vE(e) {
  let t, n;
  return {
    c() {
      t = I("div"), n = lt(
        /*emptyText*/
        e[7]
      ), h(t, "class", "emptyText");
    },
    m(r, i) {
      k(r, t, i), D(t, n);
    },
    p(r, i) {
      i & /*emptyText*/
      128 && bt(
        n,
        /*emptyText*/
        r[7]
      );
    },
    i: ne,
    o: ne,
    d(r) {
      r && E(t);
    }
  };
}
function yE(e) {
  let t = [], n = /* @__PURE__ */ new Map(), r, i, o = Ve(
    /*value*/
    e[2] || []
  );
  const s = (a) => (
    /*idx*/
    a[15]
  );
  for (let a = 0; a < o.length; a += 1) {
    let l = mu(e, o, a), u = s(l);
    n.set(u, t[a] = Au(u, l));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      r = Xe();
    },
    m(a, l) {
      for (let u = 0; u < t.length; u += 1)
        t[u] && t[u].m(a, l);
      k(a, r, l), i = !0;
    },
    p(a, l) {
      l & /*params, value, schema, controls, atMaxItems, atMinItems*/
      119 && (o = Ve(
        /*value*/
        a[2] || []
      ), we(), t = ei(t, l, s, 1, a, o, n, r.parentNode, mf, Au, r, mu), $e());
    },
    i(a) {
      if (!i) {
        for (let l = 0; l < o.length; l += 1)
          L(t[l]);
        i = !0;
      }
    },
    o(a) {
      for (let l = 0; l < t.length; l += 1)
        W(t[l]);
      i = !1;
    },
    d(a) {
      a && E(r);
      for (let l = 0; l < t.length; l += 1)
        t[l].d(a);
    }
  };
}
function wu(e) {
  let t, n, r, i, o;
  return n = new sE({}), {
    c() {
      t = I("button"), ve(n.$$.fragment), h(t, "type", "button"), h(t, "title", "delete");
    },
    m(s, a) {
      k(s, t, a), ge(n, t, null), r = !0, i || (o = Y(t, "click", function() {
        Ye(Bi(
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
      }), i = !0);
    },
    p(s, a) {
      e = s;
    },
    i(s) {
      r || (L(n.$$.fragment, s), r = !0);
    },
    o(s) {
      W(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(t), _e(n), i = !1, o();
    }
  };
}
function $u(e) {
  let t, n, r, i, o;
  return n = new lE({}), {
    c() {
      t = I("button"), ve(n.$$.fragment), h(t, "type", "button"), h(t, "title", "duplicate");
    },
    m(s, a) {
      k(s, t, a), ge(n, t, null), r = !0, i || (o = Y(t, "click", function() {
        Ye(zi(
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
      }), i = !0);
    },
    p(s, a) {
      e = s;
    },
    i(s) {
      r || (L(n.$$.fragment, s), r = !0);
    },
    o(s) {
      W(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(t), _e(n), i = !1, o();
    }
  };
}
function bE(e) {
  let t;
  return {
    c() {
      t = I("span"), h(t, "class", "w-6");
    },
    m(n, r) {
      k(n, t, r);
    },
    p: ne,
    i: ne,
    o: ne,
    d(n) {
      n && E(t);
    }
  };
}
function wE(e) {
  let t, n, r, i, o;
  return n = new dE({}), {
    c() {
      t = I("button"), ve(n.$$.fragment), h(t, "type", "button"), h(t, "title", "move up");
    },
    m(s, a) {
      k(s, t, a), ge(n, t, null), r = !0, i || (o = Y(t, "click", function() {
        Ye(qi(
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
      }), i = !0);
    },
    p(s, a) {
      e = s;
    },
    i(s) {
      r || (L(n.$$.fragment, s), r = !0);
    },
    o(s) {
      W(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(t), _e(n), i = !1, o();
    }
  };
}
function $E(e) {
  let t;
  return {
    c() {
      t = I("span"), h(t, "class", "w-6");
    },
    m(n, r) {
      k(n, t, r);
    },
    p: ne,
    i: ne,
    o: ne,
    d(n) {
      n && E(t);
    }
  };
}
function AE(e) {
  let t, n, r, i, o;
  return n = new cp({}), {
    c() {
      t = I("button"), ve(n.$$.fragment), h(t, "type", "button"), h(t, "title", "move down");
    },
    m(s, a) {
      k(s, t, a), ge(n, t, null), r = !0, i || (o = Y(t, "click", function() {
        Ye(Gi(
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
      }), i = !0);
    },
    p(s, a) {
      e = s;
    },
    i(s) {
      r || (L(n.$$.fragment, s), r = !0);
    },
    o(s) {
      W(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(t), _e(n), i = !1, o();
    }
  };
}
function Au(e, t) {
  let n, r, i = (
    /*controls*/
    t[6].includes("delete") && !/*atMinItems*/
    t[4]
  ), o, s = (
    /*controls*/
    t[6].includes("duplicate") && !/*atMaxItems*/
    t[5]
  ), a, l, u, f, c, d, g, m, _, b, v, A, F, G, P = i && wu(t), N = s && $u(t);
  const U = [wE, bE], K = [];
  function M(J, ue) {
    return ue & /*controls, value*/
    68 && (l = null), l == null && (l = !!/*controls*/
    (J[6].includes("reorder") && /*idx*/
    J[15] > 0)), l ? 0 : 1;
  }
  u = M(t, -1), f = K[u] = U[u](t);
  const ie = [AE, $E], R = [];
  function Q(J, ue) {
    return ue & /*controls, value*/
    68 && (d = null), d == null && (d = !!/*controls*/
    (J[6].includes("reorder") && /*idx*/
    J[15] < /*value*/
    (J[2] || []).length - 1)), d ? 0 : 1;
  }
  g = Q(t, -1), m = R[g] = ie[g](t);
  function et(J) {
    t[12](J);
  }
  var pe = $r;
  function z(J, ue) {
    let ot = {
      params: {
        .../*params*/
        J[1],
        path: [
          .../*params*/
          J[1].path,
          /*idx*/
          J[15].toString()
        ],
        containerParent: "array",
        containerReadOnly: (
          /*params*/
          J[1].containerReadOnly || /*schema*/
          J[0].readOnly || !1
        )
      },
      value: (
        /*item*/
        J[13]
      )
    };
    return (
      /*schema*/
      J[0].items !== void 0 && (ot.schema = /*schema*/
      J[0].items), { props: ot }
    );
  }
  return pe && (v = qe(pe, z(t)), rt.push(() => Ut(v, "schema", et))), {
    key: e,
    first: null,
    c() {
      n = I("div"), r = I("div"), P && P.c(), o = x(), N && N.c(), a = x(), f.c(), c = x(), m.c(), _ = x(), b = I("div"), v && ve(v.$$.fragment), F = x(), h(r, "class", "list-controls inline-flex flex-nowrap"), h(n, "class", "py-0.5 grid grid-cols-[min-content_1fr]"), this.first = n;
    },
    m(J, ue) {
      k(J, n, ue), D(n, r), P && P.m(r, null), D(r, o), N && N.m(r, null), D(r, a), K[u].m(r, null), D(r, c), R[g].m(r, null), D(n, _), D(n, b), v && ge(v, b, null), D(n, F), G = !0;
    },
    p(J, ue) {
      t = J, ue & /*controls, atMinItems*/
      80 && (i = /*controls*/
      t[6].includes("delete") && !/*atMinItems*/
      t[4]), i ? P ? (P.p(t, ue), ue & /*controls, atMinItems*/
      80 && L(P, 1)) : (P = wu(t), P.c(), L(P, 1), P.m(r, o)) : P && (we(), W(P, 1, 1, () => {
        P = null;
      }), $e()), ue & /*controls, atMaxItems*/
      96 && (s = /*controls*/
      t[6].includes("duplicate") && !/*atMaxItems*/
      t[5]), s ? N ? (N.p(t, ue), ue & /*controls, atMaxItems*/
      96 && L(N, 1)) : (N = $u(t), N.c(), L(N, 1), N.m(r, a)) : N && (we(), W(N, 1, 1, () => {
        N = null;
      }), $e());
      let ot = u;
      u = M(t, ue), u === ot ? K[u].p(t, ue) : (we(), W(K[ot], 1, 1, () => {
        K[ot] = null;
      }), $e(), f = K[u], f ? f.p(t, ue) : (f = K[u] = U[u](t), f.c()), L(f, 1), f.m(r, c));
      let Ze = g;
      if (g = Q(t, ue), g === Ze ? R[g].p(t, ue) : (we(), W(R[Ze], 1, 1, () => {
        R[Ze] = null;
      }), $e(), m = R[g], m ? m.p(t, ue) : (m = R[g] = ie[g](t), m.c()), L(m, 1), m.m(r, null)), pe !== (pe = $r)) {
        if (v) {
          we();
          const tt = v;
          W(tt.$$.fragment, 1, 0, () => {
            _e(tt, 1);
          }), $e();
        }
        pe ? (v = qe(pe, z(t)), rt.push(() => Ut(v, "schema", et)), ve(v.$$.fragment), L(v.$$.fragment, 1), ge(v, b, null)) : v = null;
      } else if (pe) {
        const tt = {};
        ue & /*params, value, schema*/
        7 && (tt.params = {
          .../*params*/
          t[1],
          path: [
            .../*params*/
            t[1].path,
            /*idx*/
            t[15].toString()
          ],
          containerParent: "array",
          containerReadOnly: (
            /*params*/
            t[1].containerReadOnly || /*schema*/
            t[0].readOnly || !1
          )
        }), ue & /*value*/
        4 && (tt.value = /*item*/
        t[13]), !A && ue & /*schema*/
        1 && (A = !0, tt.schema = /*schema*/
        t[0].items, an(() => A = !1)), v.$set(tt);
      }
    },
    i(J) {
      G || (L(P), L(N), L(f), L(m), v && L(v.$$.fragment, J), G = !0);
    },
    o(J) {
      W(P), W(N), W(f), W(m), v && W(v.$$.fragment, J), G = !1;
    },
    d(J) {
      J && E(n), P && P.d(), N && N.d(), K[u].d(), R[g].d(), v && _e(v);
    }
  };
}
function OE(e) {
  let t, n, r = (
    /*showWrapper*/
    e[8] && gu(e)
  );
  return {
    c() {
      r && r.c(), t = Xe();
    },
    m(i, o) {
      r && r.m(i, o), k(i, t, o), n = !0;
    },
    p(i, [o]) {
      /*showWrapper*/
      i[8] ? r ? (r.p(i, o), o & /*showWrapper*/
      256 && L(r, 1)) : (r = gu(i), r.c(), L(r, 1), r.m(t.parentNode, t)) : r && (we(), W(r, 1, 1, () => {
        r = null;
      }), $e());
    },
    i(i) {
      n || (L(r), n = !0);
    },
    o(i) {
      W(r), n = !1;
    },
    d(i) {
      i && E(t), r && r.d(i);
    }
  };
}
function RE(e, t, n) {
  let r, i, o, s, a, l, u, { params: f } = t, { schema: c } = t, { value: d } = t, g = f.path.length === 0 || !f.collapsible ? "open" : "closed";
  const m = () => {
    n(3, g = g === "open" ? "closed" : "open");
  };
  function _(b) {
    e.$$.not_equal(c.items, b) && (c.items = b, n(0, c));
  }
  return e.$$set = (b) => {
    "params" in b && n(1, f = b.params), "schema" in b && n(0, c = b.schema), "value" in b && n(2, d = b.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema, params, value*/
    7 && pE(c, f, d)(), e.$$.dirty & /*schema, params*/
    3 && n(9, r = Jn(c, f.path)), e.$$.dirty & /*value, schema*/
    5 && n(8, i = d && d.length > 0 || c.emptyDisplay !== !1), e.$$.dirty & /*value, schema*/
    5 && n(7, o = (!d || d.length === 0) && typeof c.emptyDisplay == "string" && c.emptyDisplay), e.$$.dirty & /*params, schema*/
    3 && n(11, s = f.containerReadOnly || c.readOnly || !1), e.$$.dirty & /*schema, readOnly*/
    2049 && n(6, a = c.controls === void 0 ? s ? "" : "add, reorder, delete, duplicate" : c.controls), e.$$.dirty & /*schema, value*/
    5 && n(5, l = typeof c.maxItems == "number" && ((d == null ? void 0 : d.length) || 0) >= c.maxItems), e.$$.dirty & /*schema, value*/
    5 && n(4, u = typeof c.minItems == "number" && ((d == null ? void 0 : d.length) || 0) <= c.minItems);
  }, [
    c,
    f,
    d,
    g,
    u,
    l,
    a,
    o,
    i,
    r,
    m,
    s,
    _
  ];
}
let EE = class extends Ne {
  constructor(t) {
    super(), Me(this, t, RE, OE, Ce, { params: 1, schema: 0, value: 2 });
  }
};
function kE(e) {
  let t, n, r, i, o, s, a;
  return {
    c() {
      t = I("input"), h(t, "id", n = /*params*/
      e[0].path.join(".")), h(t, "name", r = /*params*/
      e[0].path.join(".")), h(t, "type", "checkbox"), t.checked = i = /*value*/
      e[2] || !1, t.disabled = o = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(l, u) {
      k(l, t, u), s || (a = Y(
        t,
        "change",
        /*change_handler*/
        e[3]
      ), s = !0);
    },
    p(l, u) {
      u & /*params*/
      1 && n !== (n = /*params*/
      l[0].path.join(".")) && h(t, "id", n), u & /*params*/
      1 && r !== (r = /*params*/
      l[0].path.join(".")) && h(t, "name", r), u & /*value*/
      4 && i !== (i = /*value*/
      l[2] || !1) && (t.checked = i), u & /*schema, params*/
      3 && o !== (o = /*schema*/
      l[1].readOnly || /*params*/
      l[0].containerReadOnly) && (t.disabled = o);
    },
    d(l) {
      l && E(t), s = !1, a();
    }
  };
}
function TE(e) {
  let t, n, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function o(s, a) {
    return {
      props: {
        params: (
          /*params*/
          s[0]
        ),
        schema: (
          /*schema*/
          s[1]
        ),
        $$slots: { default: [kE] },
        $$scope: { ctx: s }
      }
    };
  }
  return i && (t = qe(i, o(e))), {
    c() {
      t && ve(t.$$.fragment), n = Xe();
    },
    m(s, a) {
      t && ge(t, s, a), k(s, n, a), r = !0;
    },
    p(s, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      s[0].components.fieldWrapper)) {
        if (t) {
          we();
          const l = t;
          W(l.$$.fragment, 1, 0, () => {
            _e(l, 1);
          }), $e();
        }
        i ? (t = qe(i, o(s)), ve(t.$$.fragment), L(t.$$.fragment, 1), ge(t, n.parentNode, n)) : t = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        s[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        s[1]), a & /*$$scope, params, value, schema*/
        23 && (l.$$scope = { dirty: a, ctx: s }), t.$set(l);
      }
    },
    i(s) {
      r || (t && L(t.$$.fragment, s), r = !0);
    },
    o(s) {
      t && W(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(n), t && _e(t, s);
    }
  };
}
function SE(e, t, n) {
  let { params: r } = t, { schema: i } = t, { value: o } = t;
  const s = (a) => r.pathChanged(r.path, a.currentTarget.checked);
  return e.$$set = (a) => {
    "params" in a && n(0, r = a.params), "schema" in a && n(1, i = a.schema), "value" in a && n(2, o = a.value);
  }, [r, i, o, s];
}
let PE = class extends Ne {
  constructor(t) {
    super(), Me(this, t, SE, TE, Ce, { params: 0, schema: 1, value: 2 });
  }
};
function IE(e) {
  let t, n, r, i, o, s, a, l;
  return {
    c() {
      t = I("input"), h(t, "id", n = /*params*/
      e[0].path.join(".")), h(t, "name", r = /*params*/
      e[0].path.join(".")), h(t, "type", "number"), t.value = i = /*value*/
      e[2] || "", t.disabled = o = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly, h(t, "class", s = /*border*/
      e[3] + " w-full");
    },
    m(u, f) {
      k(u, t, f), a || (l = Y(
        t,
        "input",
        /*input_handler*/
        e[4]
      ), a = !0);
    },
    p(u, f) {
      f & /*params*/
      1 && n !== (n = /*params*/
      u[0].path.join(".")) && h(t, "id", n), f & /*params*/
      1 && r !== (r = /*params*/
      u[0].path.join(".")) && h(t, "name", r), f & /*value*/
      4 && i !== (i = /*value*/
      u[2] || "") && t.value !== i && (t.value = i), f & /*schema, params*/
      3 && o !== (o = /*schema*/
      u[1].readOnly || /*params*/
      u[0].containerReadOnly) && (t.disabled = o), f & /*border*/
      8 && s !== (s = /*border*/
      u[3] + " w-full") && h(t, "class", s);
    },
    d(u) {
      u && E(t), a = !1, l();
    }
  };
}
function jE(e) {
  let t, n, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function o(s, a) {
    return {
      props: {
        params: (
          /*params*/
          s[0]
        ),
        schema: (
          /*schema*/
          s[1]
        ),
        $$slots: { default: [IE] },
        $$scope: { ctx: s }
      }
    };
  }
  return i && (t = qe(i, o(e))), {
    c() {
      t && ve(t.$$.fragment), n = Xe();
    },
    m(s, a) {
      t && ge(t, s, a), k(s, n, a), r = !0;
    },
    p(s, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      s[0].components.fieldWrapper)) {
        if (t) {
          we();
          const l = t;
          W(l.$$.fragment, 1, 0, () => {
            _e(l, 1);
          }), $e();
        }
        i ? (t = qe(i, o(s)), ve(t.$$.fragment), L(t.$$.fragment, 1), ge(t, n.parentNode, n)) : t = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        s[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        s[1]), a & /*$$scope, params, value, schema, border*/
        47 && (l.$$scope = { dirty: a, ctx: s }), t.$set(l);
      }
    },
    i(s) {
      r || (t && L(t.$$.fragment, s), r = !0);
    },
    o(s) {
      t && W(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(n), t && _e(t, s);
    }
  };
}
function CE(e, t, n) {
  let r, { params: i } = t, { schema: o } = t, { value: s } = t;
  const a = (l) => {
    let u = parseFloat(l.currentTarget.value);
    i.pathChanged(i.path, isNaN(u) ? void 0 : u);
  };
  return e.$$set = (l) => {
    "params" in l && n(0, i = l.params), "schema" in l && n(1, o = l.schema), "value" in l && n(2, s = l.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*params*/
    1 && n(3, r = i.showErrors && i.path.join(".") in i.validationErrors ? "border border-red-600" : "border border-grey-200");
  }, [i, o, s, r, a];
}
let Ou = class extends Ne {
  constructor(t) {
    super(), Me(this, t, CE, jE, Ce, { params: 0, schema: 1, value: 2 });
  }
};
function LE(e, t, n, r) {
  const i = Fs(r), o = Xr(n, "/"), a = Fs(n).split(".").reduce((l, u) => l[u], e);
  switch (o) {
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
  return [i, `Fails to satisfy schema at ${Fs(n)}`];
}
function Ru(e, t, n) {
  const r = e.slice();
  return r[28] = t[n][0], r[29] = t[n][1], r;
}
function Eu(e) {
  let t;
  return {
    c() {
      t = I("div"), t.textContent = "Drop files or click to upload", h(t, "class", "sf-upload-caption");
    },
    m(n, r) {
      k(n, t, r);
    },
    d(n) {
      n && E(t);
    }
  };
}
function ku(e) {
  let t, n;
  return {
    c() {
      t = I("img"), h(t, "class", "sf-upload-thumb"), br(t.src, n = /*value*/
      e[0]) || h(t, "src", n), h(t, "alt", "upload file");
    },
    m(r, i) {
      k(r, t, i);
    },
    p(r, i) {
      i[0] & /*value*/
      1 && !br(t.src, n = /*value*/
      r[0]) && h(t, "src", n);
    },
    d(r) {
      r && E(t);
    }
  };
}
function Tu(e) {
  let t, n = Xr(
    /*value*/
    e[0],
    "."
  ) + "", r;
  return {
    c() {
      t = I("div"), r = lt(n), h(t, "class", "sf-upload-file"), h(
        t,
        "title",
        /*value*/
        e[0]
      );
    },
    m(i, o) {
      k(i, t, o), D(t, r);
    },
    p(i, o) {
      o[0] & /*value*/
      1 && n !== (n = Xr(
        /*value*/
        i[0],
        "."
      ) + "") && bt(r, n), o[0] & /*value*/
      1 && h(
        t,
        "title",
        /*value*/
        i[0]
      );
    },
    d(i) {
      i && E(t);
    }
  };
}
function Su(e) {
  let t, n, r, i, o, s;
  return {
    c() {
      t = I("input"), h(t, "type", "text"), h(t, "id", n = /*params*/
      e[2].path.join(".")), h(t, "name", r = /*params*/
      e[2].path.join(".")), t.disabled = /*readOnly*/
      e[8], h(t, "class", "sf-upload-input"), t.value = i = /*value*/
      e[0] || "";
    },
    m(a, l) {
      k(a, t, l), o || (s = [
        Y(t, "click", zt(FE)),
        Y(
          t,
          "input",
          /*input_handler*/
          e[22]
        )
      ], o = !0);
    },
    p(a, l) {
      l[0] & /*params*/
      4 && n !== (n = /*params*/
      a[2].path.join(".")) && h(t, "id", n), l[0] & /*params*/
      4 && r !== (r = /*params*/
      a[2].path.join(".")) && h(t, "name", r), l[0] & /*readOnly*/
      256 && (t.disabled = /*readOnly*/
      a[8]), l[0] & /*value*/
      1 && i !== (i = /*value*/
      a[0] || "") && t.value !== i && (t.value = i);
    },
    d(a) {
      a && E(t), o = !1, it(s);
    }
  };
}
function Pu(e) {
  let t, n, r;
  return {
    c() {
      t = I("button"), h(t, "type", "button"), h(t, "class", "sf-upload-deleter");
    },
    m(i, o) {
      k(i, t, o), n || (r = Y(
        t,
        "click",
        /*deleteUploads*/
        e[15]
      ), n = !0);
    },
    p: ne,
    d(i) {
      i && E(t), n = !1, r();
    }
  };
}
function Iu(e) {
  let t, n = Ve(Object.entries(
    /*progress*/
    e[6]
  )), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = ju(Ru(e, n, i));
  return {
    c() {
      t = I("div");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      h(t, "class", "sf-progress-bars");
    },
    m(i, o) {
      k(i, t, o);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(t, null);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      64) {
        n = Ve(Object.entries(
          /*progress*/
          i[6]
        ));
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = Ru(i, n, s);
          r[s] ? r[s].p(a, o) : (r[s] = ju(a), r[s].c(), r[s].m(t, null));
        }
        for (; s < r.length; s += 1)
          r[s].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && E(t), xr(r, i);
    }
  };
}
function ju(e) {
  let t, n, r, i = (
    /*name*/
    e[28] + ""
  ), o, s;
  return {
    c() {
      t = I("div"), n = I("div"), r = x(), o = lt(i), s = x(), h(n, "class", "sf-progress-done"), ut(
        n,
        "width",
        /*percent*/
        e[29] + "%"
      ), h(t, "class", "sf-progress-bar");
    },
    m(a, l) {
      k(a, t, l), D(t, n), D(t, r), D(t, o), D(t, s);
    },
    p(a, l) {
      l[0] & /*progress*/
      64 && ut(
        n,
        "width",
        /*percent*/
        a[29] + "%"
      ), l[0] & /*progress*/
      64 && i !== (i = /*name*/
      a[28] + "") && bt(o, i);
    },
    d(a) {
      a && E(t);
    }
  };
}
function ME(e) {
  let t, n, r, i, o, s, a = (
    /*value*/
    e[0] && /*isImage*/
    e[18](
      /*value*/
      e[0]
    ) && /*mode*/
    e[7] === "uploader"
  ), l, u = (
    /*value*/
    e[0] && !/*isImage*/
    e[18](
      /*value*/
      e[0]
    ) && /*mode*/
    e[7] === "uploader"
  ), f, c, d, g, m, _, b, v = Object.keys(
    /*progress*/
    e[6]
  ).length > 0, A, F, G, P = (
    /*mode*/
    e[7] === "uploader" && !/*readOnly*/
    e[8] && Eu()
  ), N = a && ku(e), U = u && Tu(e), K = (
    /*mode*/
    e[7] === "link" && Su(e)
  ), M = !/*readOnly*/
  e[8] && Pu(e), ie = v && Iu(e);
  return {
    c() {
      t = I("input"), i = x(), o = I("div"), P && P.c(), s = x(), N && N.c(), l = x(), U && U.c(), f = x(), K && K.c(), c = x(), d = I("div"), M && M.c(), g = x(), m = I("button"), m.innerHTML = "", b = x(), ie && ie.c(), A = Xe(), h(t, "id", n = /*params*/
      e[2].path.join(".")), h(t, "name", r = /*params*/
      e[2].path.join(".")), h(t, "type", "file"), t.readOnly = /*readOnly*/
      e[8], ut(t, "display", "none"), h(m, "type", "button"), We(
        m,
        "sf-upload-to-link",
        /*mode*/
        e[7] === "uploader"
      ), We(
        m,
        "sf-upload-to-uploader",
        /*mode*/
        e[7] === "link"
      ), h(d, "class", "sf-upload-controls"), h(o, "class", _ = "sf-drop-area " + /*mode*/
      e[7]), h(o, "tabindex", "0"), We(
        o,
        "highlight",
        /*highlight*/
        e[1]
      );
    },
    m(R, Q) {
      k(R, t, Q), e[21](t), k(R, i, Q), k(R, o, Q), P && P.m(o, null), D(o, s), N && N.m(o, null), D(o, l), U && U.m(o, null), D(o, f), K && K.m(o, null), D(o, c), D(o, d), M && M.m(d, null), D(d, g), D(d, m), e[23](o), k(R, b, Q), ie && ie.m(R, Q), k(R, A, Q), F || (G = [
        Y(
          t,
          "input",
          /*onInput*/
          e[10]
        ),
        Y(
          m,
          "click",
          /*changeMode*/
          e[16]
        ),
        Y(
          o,
          "dragenter",
          /*dragEnter*/
          e[11]
        ),
        Y(
          o,
          "dragover",
          /*dragOver*/
          e[12]
        ),
        Y(
          o,
          "dragleave",
          /*dragLeave*/
          e[13]
        ),
        Y(
          o,
          "drop",
          /*drop*/
          e[14]
        ),
        Y(
          o,
          "click",
          /*openFile*/
          e[17]
        )
      ], F = !0);
    },
    p(R, Q) {
      Q[0] & /*params*/
      4 && n !== (n = /*params*/
      R[2].path.join(".")) && h(t, "id", n), Q[0] & /*params*/
      4 && r !== (r = /*params*/
      R[2].path.join(".")) && h(t, "name", r), Q[0] & /*readOnly*/
      256 && (t.readOnly = /*readOnly*/
      R[8]), /*mode*/
      R[7] === "uploader" && !/*readOnly*/
      R[8] ? P || (P = Eu(), P.c(), P.m(o, s)) : P && (P.d(1), P = null), Q[0] & /*value, mode*/
      129 && (a = /*value*/
      R[0] && /*isImage*/
      R[18](
        /*value*/
        R[0]
      ) && /*mode*/
      R[7] === "uploader"), a ? N ? N.p(R, Q) : (N = ku(R), N.c(), N.m(o, l)) : N && (N.d(1), N = null), Q[0] & /*value, mode*/
      129 && (u = /*value*/
      R[0] && !/*isImage*/
      R[18](
        /*value*/
        R[0]
      ) && /*mode*/
      R[7] === "uploader"), u ? U ? U.p(R, Q) : (U = Tu(R), U.c(), U.m(o, f)) : U && (U.d(1), U = null), /*mode*/
      R[7] === "link" ? K ? K.p(R, Q) : (K = Su(R), K.c(), K.m(o, c)) : K && (K.d(1), K = null), /*readOnly*/
      R[8] ? M && (M.d(1), M = null) : M ? M.p(R, Q) : (M = Pu(R), M.c(), M.m(d, g)), Q[0] & /*mode*/
      128 && We(
        m,
        "sf-upload-to-link",
        /*mode*/
        R[7] === "uploader"
      ), Q[0] & /*mode*/
      128 && We(
        m,
        "sf-upload-to-uploader",
        /*mode*/
        R[7] === "link"
      ), Q[0] & /*mode*/
      128 && _ !== (_ = "sf-drop-area " + /*mode*/
      R[7]) && h(o, "class", _), Q[0] & /*mode, highlight*/
      130 && We(
        o,
        "highlight",
        /*highlight*/
        R[1]
      ), Q[0] & /*progress*/
      64 && (v = Object.keys(
        /*progress*/
        R[6]
      ).length > 0), v ? ie ? ie.p(R, Q) : (ie = Iu(R), ie.c(), ie.m(A.parentNode, A)) : ie && (ie.d(1), ie = null);
    },
    d(R) {
      R && (E(t), E(i), E(o), E(b), E(A)), e[21](null), P && P.d(), N && N.d(), U && U.d(), K && K.d(), M && M.d(), e[23](null), ie && ie.d(R), F = !1, it(G);
    }
  };
}
function NE(e) {
  let t, n, r;
  var i = (
    /*params*/
    e[2].components.fieldWrapper
  );
  function o(s, a) {
    return {
      props: {
        params: (
          /*params*/
          s[2]
        ),
        schema: (
          /*schema*/
          s[3]
        ),
        $$slots: { default: [ME] },
        $$scope: { ctx: s }
      }
    };
  }
  return i && (t = qe(i, o(e))), {
    c() {
      t && ve(t.$$.fragment), n = Xe();
    },
    m(s, a) {
      t && ge(t, s, a), k(s, n, a), r = !0;
    },
    p(s, a) {
      if (a[0] & /*params*/
      4 && i !== (i = /*params*/
      s[2].components.fieldWrapper)) {
        if (t) {
          we();
          const l = t;
          W(l.$$.fragment, 1, 0, () => {
            _e(l, 1);
          }), $e();
        }
        i ? (t = qe(i, o(s)), ve(t.$$.fragment), L(t.$$.fragment, 1), ge(t, n.parentNode, n)) : t = null;
      } else if (i) {
        const l = {};
        a[0] & /*params*/
        4 && (l.params = /*params*/
        s[2]), a[0] & /*schema*/
        8 && (l.schema = /*schema*/
        s[3]), a[0] & /*progress, mode, dropArea, highlight, readOnly, params, value, inp*/
        503 | a[1] & /*$$scope*/
        2 && (l.$$scope = { dirty: a, ctx: s }), t.$set(l);
      }
    },
    i(s) {
      r || (t && L(t.$$.fragment, s), r = !0);
    },
    o(s) {
      t && W(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(n), t && _e(t, s);
    }
  };
}
const FE = () => {
};
function WE(e, t, n) {
  let r, i, { params: o } = t, { schema: s } = t, { value: a } = t, { highlight: l = !1 } = t;
  const u = s.multiple || !1;
  let f, c, d = Kp(fp);
  ff(e, d, (z) => n(20, i = z));
  let g, m = [], _ = {}, b = "uploader";
  const v = () => {
    var z, J;
    if (!u) {
      if ((((z = f.files) == null ? void 0 : z.length) || 0) > 1) {
        alert("Please only upload one file"), n(4, f.files = null, f);
        return;
      }
      const ue = (J = f.files) == null ? void 0 : J.item(0);
      if (!ue)
        return;
      if (s.warningKb && ue.size > s.warningKb * 1024 && alert(`The file is larger than the recommended maximum size of ${s.warningKb}KB - consider compressing it`), s.maximumKb && ue.size > s.maximumKb * 1024) {
        alert(`The file is larger than the allowed maximum of ${s.maximumKb}KB - please compress it first`), n(4, f.files = null, f);
        return;
      }
      o.pathChanged(o.path, f.files), N(ue), _[ue.name] = { mimeType: ue.type, size: ue.size };
    }
  }, A = (z) => {
    v();
  }, F = (z) => {
    var J;
    r || ((J = z.dataTransfer) == null ? void 0 : J.types[0]) !== "Files" || (n(1, l = !0), z.preventDefault());
  }, G = (z) => {
    var J;
    r || ((J = z.dataTransfer) == null ? void 0 : J.types[0]) !== "Files" || z.preventDefault();
  }, P = (z) => {
    r || n(1, l = !1);
  }, N = (z) => {
    if (z.type.startsWith("image")) {
      const J = document.createElement("img");
      J.classList.add("sf-upload-thumb"), J.file = z, c.append(J), m.push(J);
      const ue = new FileReader();
      ue.onload = (ot) => {
        J.src = ot.target.result;
      }, ue.readAsDataURL(z);
    } else {
      const J = document.createElement("div");
      J.classList.add("sf-upload-file"), J.title = z.name, J.innerText = Xr(z.name, ".") || Dd(z.type, "/"), c.append(J), m.push(J);
    }
  }, U = (z) => {
    if (s.readOnly || (z.preventDefault(), n(1, l = !1), !z.dataTransfer))
      return;
    const { files: J } = z.dataTransfer;
    n(4, f.files = J, f), v();
  }, K = (z) => {
    z.stopPropagation(), n(4, f.files = null, f), m.forEach((J) => J.remove()), n(19, m = []), _ = {}, n(0, a = ""), o.pathChanged(o.path, up), o.pathChanged(o.path, a);
  }, M = (z) => {
    z.stopPropagation(), n(7, b = b === "uploader" ? "link" : "uploader");
  }, ie = () => {
    r || f.click();
  }, R = (z) => ["jpg", "jpeg", "png", "gif", "svg", "ico"].includes(Xr(z, ".").toLowerCase());
  function Q(z) {
    rt[z ? "unshift" : "push"](() => {
      f = z, n(4, f);
    });
  }
  const et = (z) => o.pathChanged(o.path, z.currentTarget.value || void 0);
  function pe(z) {
    rt[z ? "unshift" : "push"](() => {
      c = z, n(5, c);
    });
  }
  return e.$$set = (z) => {
    "params" in z && n(2, o = z.params), "schema" in z && n(3, s = z.schema), "value" in z && n(0, a = z.value), "highlight" in z && n(1, l = z.highlight);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$pathProgress, params*/
    1048580 && n(6, g = i[o.path.join(".")] || {}), e.$$.dirty[0] & /*value, renderedThumbnails*/
    524289 && a && (a.startsWith("http") || a.startsWith("/")) && m.length > 0 && (m.forEach((z) => z.remove()), n(19, m = [])), e.$$.dirty[0] & /*schema, params*/
    12 && n(8, r = s.readOnly || o.containerReadOnly || !1);
  }, [
    a,
    l,
    o,
    s,
    f,
    c,
    g,
    b,
    r,
    d,
    A,
    F,
    G,
    P,
    U,
    K,
    M,
    ie,
    R,
    m,
    i,
    Q,
    et,
    pe
  ];
}
class DE extends Ne {
  constructor(t) {
    super(), Me(
      this,
      t,
      WE,
      NE,
      Ce,
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
function UE(e) {
  let t, n, r, i, o, s, a;
  return {
    c() {
      t = I("textarea"), h(t, "id", n = /*params*/
      e[0].path.join(".")), h(t, "name", r = /*params*/
      e[0].path.join(".")), t.disabled = i = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly, h(t, "class", "border bg-white"), t.value = o = /*value*/
      e[2] || "";
    },
    m(l, u) {
      k(l, t, u), s || (a = Y(
        t,
        "input",
        /*input_handler*/
        e[3]
      ), s = !0);
    },
    p(l, u) {
      u & /*params*/
      1 && n !== (n = /*params*/
      l[0].path.join(".")) && h(t, "id", n), u & /*params*/
      1 && r !== (r = /*params*/
      l[0].path.join(".")) && h(t, "name", r), u & /*schema, params*/
      3 && i !== (i = /*schema*/
      l[1].readOnly || /*params*/
      l[0].containerReadOnly) && (t.disabled = i), u & /*value*/
      4 && o !== (o = /*value*/
      l[2] || "") && (t.value = o);
    },
    d(l) {
      l && E(t), s = !1, a();
    }
  };
}
function BE(e) {
  let t, n, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function o(s, a) {
    return {
      props: {
        params: (
          /*params*/
          s[0]
        ),
        schema: (
          /*schema*/
          s[1]
        ),
        $$slots: { default: [UE] },
        $$scope: { ctx: s }
      }
    };
  }
  return i && (t = qe(i, o(e))), {
    c() {
      t && ve(t.$$.fragment), n = Xe();
    },
    m(s, a) {
      t && ge(t, s, a), k(s, n, a), r = !0;
    },
    p(s, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      s[0].components.fieldWrapper)) {
        if (t) {
          we();
          const l = t;
          W(l.$$.fragment, 1, 0, () => {
            _e(l, 1);
          }), $e();
        }
        i ? (t = qe(i, o(s)), ve(t.$$.fragment), L(t.$$.fragment, 1), ge(t, n.parentNode, n)) : t = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        s[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        s[1]), a & /*$$scope, params, schema, value*/
        23 && (l.$$scope = { dirty: a, ctx: s }), t.$set(l);
      }
    },
    i(s) {
      r || (t && L(t.$$.fragment, s), r = !0);
    },
    o(s) {
      t && W(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(n), t && _e(t, s);
    }
  };
}
function zE(e, t, n) {
  let { params: r } = t, { schema: i } = t, { value: o } = t;
  const s = (a) => r.pathChanged(r.path, a.currentTarget.value || void 0);
  return e.$$set = (a) => {
    "params" in a && n(0, r = a.params), "schema" in a && n(1, i = a.schema), "value" in a && n(2, o = a.value);
  }, [r, i, o, s];
}
class qE extends Ne {
  constructor(t) {
    super(), Me(this, t, zE, BE, Ce, { params: 0, schema: 1, value: 2 });
  }
}
function Cu(e, t, n) {
  const r = e.slice();
  return r[24] = t[n], r[26] = n, r;
}
function Lu(e, t) {
  let n, r, i, o = (
    /*getName*/
    t[13](
      /*item*/
      t[24]
    ) + ""
  ), s, a, l, u, f, c, d, g, m, _;
  function b() {
    return (
      /*dragenter_handler*/
      t[16](
        /*idx*/
        t[26]
      )
    );
  }
  return {
    key: e,
    first: null,
    c() {
      n = I("li"), r = I("a"), i = I("h2"), s = lt(o), l = x(), u = I("div"), f = I("span"), c = x(), d = I("span"), h(r, "href", a = /*getUrl*/
      t[12](
        /*item*/
        t[24],
        /*idx*/
        t[26]
      )), h(f, "class", "duplicate"), h(f, "title", "Duplicate this"), h(d, "class", "delete"), h(d, "title", "Delete this"), h(u, "class", "actions"), h(n, "class", g = /*getArrayBlockClasses*/
      t[14](
        /*item*/
        t[24]
      )), h(n, "draggable", !0), We(
        n,
        "drag-over",
        /*hovering*/
        t[3] === /*idx*/
        t[26]
      ), ut(
        n,
        "background-image",
        /*item*/
        t[24].thumbnail ? `url('${/*item*/
        t[24].thumbnail}')` : ""
      ), this.first = n;
    },
    m(v, A) {
      k(v, n, A), D(n, r), D(r, i), D(i, s), D(n, l), D(n, u), D(u, f), D(u, c), D(u, d), m || (_ = [
        Y(f, "click", function() {
          Ye(
            /*onDuplicate*/
            t[9](
              /*idx*/
              t[26]
            )
          ) && t[9](
            /*idx*/
            t[26]
          ).apply(this, arguments);
        }),
        Y(d, "click", function() {
          Ye(
            /*onDelete*/
            t[8](
              /*idx*/
              t[26]
            )
          ) && t[8](
            /*idx*/
            t[26]
          ).apply(this, arguments);
        }),
        Y(n, "dragstart", function() {
          Ye(
            /*onDragstart*/
            t[10](
              /*idx*/
              t[26]
            )
          ) && t[10](
            /*idx*/
            t[26]
          ).apply(this, arguments);
        }),
        Y(n, "drop", gr(function() {
          Ye(
            /*onDrop*/
            t[11](
              /*idx*/
              t[26]
            )
          ) && t[11](
            /*idx*/
            t[26]
          ).apply(this, arguments);
        })),
        Y(n, "dragover", gr(HE)),
        Y(n, "dragenter", gr(b)),
        Y(
          n,
          "dragleave",
          /*dragleave_handler*/
          t[17]
        )
      ], m = !0);
    },
    p(v, A) {
      t = v, A & /*value*/
      1 && o !== (o = /*getName*/
      t[13](
        /*item*/
        t[24]
      ) + "") && bt(s, o), A & /*value*/
      1 && a !== (a = /*getUrl*/
      t[12](
        /*item*/
        t[24],
        /*idx*/
        t[26]
      )) && h(r, "href", a), A & /*value*/
      1 && g !== (g = /*getArrayBlockClasses*/
      t[14](
        /*item*/
        t[24]
      )) && h(n, "class", g), A & /*value, hovering, value*/
      9 && We(
        n,
        "drag-over",
        /*hovering*/
        t[3] === /*idx*/
        t[26]
      ), A & /*value*/
      1 && ut(
        n,
        "background-image",
        /*item*/
        t[24].thumbnail ? `url('${/*item*/
        t[24].thumbnail}')` : ""
      );
    },
    d(v) {
      v && E(n), m = !1, it(_);
    }
  };
}
function Mu(e) {
  let t, n, r;
  return {
    c() {
      t = I("li"), t.innerHTML = "", h(t, "class", "array-block add"), We(
        t,
        "drag-over",
        /*hovering*/
        e[3] === /*lastIdx*/
        e[5]
      );
    },
    m(i, o) {
      k(i, t, o), n || (r = [
        Y(
          t,
          "click",
          /*onAdd*/
          e[6]
        ),
        Y(t, "drop", gr(function() {
          Ye(
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
        Y(t, "dragover", gr(KE)),
        Y(t, "dragenter", gr(
          /*dragenter_handler_1*/
          e[18]
        )),
        Y(
          t,
          "dragleave",
          /*dragleave_handler_1*/
          e[19]
        )
      ], n = !0);
    },
    p(i, o) {
      e = i, o & /*hovering, lastIdx*/
      40 && We(
        t,
        "drag-over",
        /*hovering*/
        e[3] === /*lastIdx*/
        e[5]
      );
    },
    d(i) {
      i && E(t), n = !1, it(r);
    }
  };
}
function Nu(e) {
  let t, n, r, i, o, s, a;
  function l(f) {
    e[20](f);
  }
  let u = {
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
    e[4] !== void 0 && (u.schema = /*addItemSchema*/
    e[4]), t = new $r({ props: u }), rt.push(() => Ut(t, "schema", l)), {
      c() {
        ve(t.$$.fragment), r = x(), i = I("button"), i.textContent = "Add", h(i, "type", "button"), h(i, "class", "submit-button new-item-submit");
      },
      m(f, c) {
        ge(t, f, c), k(f, r, c), k(f, i, c), o = !0, s || (a = Y(
          i,
          "click",
          /*onAddUpdate*/
          e[7]
        ), s = !0);
      },
      p(f, c) {
        const d = {};
        c & /*params, value*/
        3 && (d.params = {
          .../*params*/
          f[1],
          path: [
            .../*params*/
            f[1].path,
            /*value*/
            (f[0].length - 1).toString()
          ],
          containerParent: "array"
        }), c & /*value*/
        1 && (d.value = /*value*/
        f[0][
          /*value*/
          f[0].length - 1
        ]), !n && c & /*addItemSchema*/
        16 && (n = !0, d.schema = /*addItemSchema*/
        f[4], an(() => n = !1)), t.$set(d);
      },
      i(f) {
        o || (L(t.$$.fragment, f), o = !0);
      },
      o(f) {
        W(t.$$.fragment, f), o = !1;
      },
      d(f) {
        f && (E(r), E(i)), _e(t, f), s = !1, a();
      }
    }
  );
}
function GE(e) {
  let t, n, r = [], i = /* @__PURE__ */ new Map(), o, s, a, l, u, f = Ve(
    /*value*/
    e[0] || []
  );
  const c = (m) => (
    /*item*/
    m[24]
  );
  for (let m = 0; m < f.length; m += 1) {
    let _ = Cu(e, f, m), b = c(_);
    i.set(b, r[m] = Lu(b, _));
  }
  let d = !/*adding*/
  e[2] && Mu(e), g = (
    /*adding*/
    e[2] && Nu(e)
  );
  return {
    c() {
      t = I("div"), n = I("ol");
      for (let m = 0; m < r.length; m += 1)
        r[m].c();
      o = x(), d && d.c(), s = x(), g && g.c(), h(t, "id", a = /*params*/
      e[1].path.join(".")), h(t, "class", l = "subset array-blocks depth-" + /*params*/
      e[1].path.length);
    },
    m(m, _) {
      k(m, t, _), D(t, n);
      for (let b = 0; b < r.length; b += 1)
        r[b] && r[b].m(n, null);
      D(n, o), d && d.m(n, null), D(t, s), g && g.m(t, null), u = !0;
    },
    p(m, [_]) {
      _ & /*getArrayBlockClasses, value, hovering, onDragstart, onDrop, onDelete, onDuplicate, getUrl, getName*/
      32521 && (f = Ve(
        /*value*/
        m[0] || []
      ), r = ei(r, _, c, 1, m, f, i, n, ho, Lu, o, Cu)), /*adding*/
      m[2] ? d && (d.d(1), d = null) : d ? d.p(m, _) : (d = Mu(m), d.c(), d.m(n, null)), /*adding*/
      m[2] ? g ? (g.p(m, _), _ & /*adding*/
      4 && L(g, 1)) : (g = Nu(m), g.c(), L(g, 1), g.m(t, null)) : g && (we(), W(g, 1, 1, () => {
        g = null;
      }), $e()), (!u || _ & /*params*/
      2 && a !== (a = /*params*/
      m[1].path.join("."))) && h(t, "id", a), (!u || _ & /*params*/
      2 && l !== (l = "subset array-blocks depth-" + /*params*/
      m[1].path.length)) && h(t, "class", l);
    },
    i(m) {
      u || (L(g), u = !0);
    },
    o(m) {
      W(g), u = !1;
    },
    d(m) {
      m && E(t);
      for (let _ = 0; _ < r.length; _ += 1)
        r[_].d();
      d && d.d(), g && g.d();
    }
  };
}
const HE = () => !1, KE = () => !1;
function YE(e, t, n) {
  let r, { params: i } = t, { schema: o } = t, { value: s } = t;
  if (o.type !== "array" || o.items.type !== "object")
    throw new Error("ArrayBlocks editor can only be used on an array with items of type=object");
  let a = !1, l = !1;
  const u = () => {
    i.pathChanged(i.path, [...s || [], ca(o.items)]), n(2, a = !0);
  }, f = async () => {
    var Q;
    const M = s.length - 1, ie = [...i.path, M.toString()], R = (Q = i.componentContext) == null ? void 0 : Q.doUploads;
    R && await R(ie.join(".")), i.pathChanged(ie, s[M]), n(2, a = !1);
  }, c = (M) => () => {
    i.pathChanged(i.path, [...s.slice(0, M), ...s.slice(M + 1)], "delete", M.toString());
  }, d = (M) => () => {
    i.pathChanged(
      i.path,
      [
        ...s.slice(0, M),
        s[M],
        JSON.parse(JSON.stringify(s[M])),
        ...s.slice(M + 1)
      ],
      "duplicate",
      (M + 1).toString()
    );
  }, g = (M) => (ie) => {
    ie.dataTransfer.effectAllowed = "move", ie.dataTransfer.dropEffect = "move", ie.dataTransfer.setData("text/plain", M.toString());
  }, m = (M) => (ie) => {
    ie.dataTransfer.dropEffect = "move";
    const R = parseInt(ie.dataTransfer.getData("text/plain"));
    R < M ? i.pathChanged(i.path, [
      ...s.slice(0, R),
      ...s.slice(R + 1, M),
      s[R],
      ...s.slice(M)
    ]) : M < R && i.pathChanged(i.path, [
      ...s.slice(0, M),
      s[R],
      ...s.slice(M, R),
      ...s.slice(R + 1)
    ]), n(3, l = !1);
  };
  let _ = o.effectiveUrl || location.href;
  _.includes("#") && (_ = _.split("#")[0]), _.includes("?") && (_ = _.split("?")[0]);
  const b = (M, ie) => {
    let R = "";
    return o.itemPathPattern && (R = o.itemPathPattern.replace(/\$\{([^}]*)\}/gi, (et, pe) => encodeURIComponent((pe === "" ? M : p.get(M, pe.split("."))) || ""))), R || (R = encodeURIComponent(M.name || M.title || "")), v9(_, R);
  }, v = (M) => M.name || M.title || "", A = (M) => {
    const R = v(M).split(" "), Q = R.reduce((pe, z) => z.length > pe ? z.length : pe, 0), et = R.length;
    return Q > 18 || et > 13 ? "array-block xlarge" : Q > 14 || et > 9 ? "array-block large" : Q > 10 || et > 6 ? "array-block medium" : "array-block small";
  };
  let F;
  const G = (M) => n(3, l = M), P = () => n(3, l = !1), N = () => n(3, l = r), U = () => n(3, l = !1);
  function K(M) {
    F = M, n(4, F), n(15, o);
  }
  return e.$$set = (M) => {
    "params" in M && n(1, i = M.params), "schema" in M && n(15, o = M.schema), "value" in M && n(0, s = M.value);
  }, e.$$.update = () => {
    var M;
    if (e.$$.dirty & /*value*/
    1 && n(0, s = s || []), e.$$.dirty & /*schema*/
    32768) {
      const ie = Object.fromEntries(Object.entries(o.items.properties).filter(([R, Q]) => Q.type !== "array"));
      n(4, F = {
        ...o.items,
        type: "object",
        properties: ie,
        required: ((M = o.items.required) == null ? void 0 : M.filter((R) => Object.keys(ie).includes(R))) || []
      });
    }
    e.$$.dirty & /*value*/
    1 && n(5, r = (s || []).length);
  }, [
    s,
    i,
    a,
    l,
    F,
    r,
    u,
    f,
    c,
    d,
    g,
    m,
    b,
    v,
    A,
    o,
    G,
    P,
    N,
    U,
    K
  ];
}
class JE extends Ne {
  constructor(t) {
    super(), Me(this, t, YE, GE, Ce, { params: 1, schema: 15, value: 0 });
  }
}
function Fu(e, t, n) {
  const r = e.slice();
  return r[18] = t[n], r;
}
function XE(e) {
  var o, s;
  let t, n = (
    /*selected*/
    (((o = e[4]) == null ? void 0 : o.text) || "") + ""
  ), r, i = (
    /*selected*/
    ((s = e[4]) == null ? void 0 : s.image) && Wu(e)
  );
  return {
    c() {
      i && i.c(), t = x(), r = lt(n);
    },
    m(a, l) {
      i && i.m(a, l), k(a, t, l), k(a, r, l);
    },
    p(a, l) {
      var u, f;
      /*selected*/
      (u = a[4]) != null && u.image ? i ? i.p(a, l) : (i = Wu(a), i.c(), i.m(t.parentNode, t)) : i && (i.d(1), i = null), l & /*selected*/
      16 && n !== (n = /*selected*/
      (((f = a[4]) == null ? void 0 : f.text) || "") + "") && bt(r, n);
    },
    d(a) {
      a && (E(t), E(r)), i && i.d(a);
    }
  };
}
function ZE(e) {
  let t, n, r;
  return {
    c() {
      t = I("input"), h(t, "type", "text");
    },
    m(i, o) {
      k(i, t, o), zr(
        t,
        /*match*/
        e[6]
      ), e[14](t), n || (r = [
        Y(
          t,
          "input",
          /*input_1_input_handler*/
          e[13]
        ),
        Y(
          t,
          "keyup",
          /*keyup*/
          e[12]
        )
      ], n = !0);
    },
    p(i, o) {
      o & /*match*/
      64 && t.value !== /*match*/
      i[6] && zr(
        t,
        /*match*/
        i[6]
      );
    },
    d(i) {
      i && E(t), e[14](null), n = !1, it(r);
    }
  };
}
function Wu(e) {
  let t, n, r;
  return {
    c() {
      t = I("img"), br(t.src, n = /*selected*/
      e[4].image) || h(t, "src", n), h(t, "alt", r = /*selected*/
      e[4].text);
    },
    m(i, o) {
      k(i, t, o);
    },
    p(i, o) {
      o & /*selected*/
      16 && !br(t.src, n = /*selected*/
      i[4].image) && h(t, "src", n), o & /*selected*/
      16 && r !== (r = /*selected*/
      i[4].text) && h(t, "alt", r);
    },
    d(i) {
      i && E(t);
    }
  };
}
function Du(e) {
  let t, n, r;
  return {
    c() {
      t = I("img"), br(t.src, n = /*item*/
      e[18].image) || h(t, "src", n), h(t, "alt", r = /*item*/
      e[18].text);
    },
    m(i, o) {
      k(i, t, o);
    },
    p(i, o) {
      o & /*options*/
      32 && !br(t.src, n = /*item*/
      i[18].image) && h(t, "src", n), o & /*options*/
      32 && r !== (r = /*item*/
      i[18].text) && h(t, "alt", r);
    },
    d(i) {
      i && E(t);
    }
  };
}
function Uu(e, t) {
  let n, r, i = (
    /*item*/
    t[18].text + ""
  ), o, s, a, l, u = (
    /*item*/
    t[18].image && Du(t)
  );
  return {
    key: e,
    first: null,
    c() {
      n = I("div"), u && u.c(), r = x(), o = lt(i), s = x(), We(
        n,
        "selected",
        /*value*/
        t[0] === /*item*/
        t[18].text
      ), this.first = n;
    },
    m(f, c) {
      k(f, n, c), u && u.m(n, null), D(n, r), D(n, o), D(n, s), a || (l = Y(n, "click", function() {
        Ye(
          /*handleSelect*/
          t[11](
            /*item*/
            t[18]
          )
        ) && t[11](
          /*item*/
          t[18]
        ).apply(this, arguments);
      }), a = !0);
    },
    p(f, c) {
      t = f, /*item*/
      t[18].image ? u ? u.p(t, c) : (u = Du(t), u.c(), u.m(n, r)) : u && (u.d(1), u = null), c & /*options*/
      32 && i !== (i = /*item*/
      t[18].text + "") && bt(o, i), c & /*value, options*/
      33 && We(
        n,
        "selected",
        /*value*/
        t[0] === /*item*/
        t[18].text
      );
    },
    d(f) {
      f && E(n), u && u.d(), a = !1, l();
    }
  };
}
function VE(e) {
  let t, n, r, i, o = [], s = /* @__PURE__ */ new Map(), a, l;
  function u(m, _) {
    return (
      /*inputState*/
      m[3] === "searching" ? ZE : XE
    );
  }
  let f = u(e), c = f(e), d = Ve(
    /*options*/
    e[5]
  );
  const g = (m) => (
    /*item*/
    m[18].id
  );
  for (let m = 0; m < d.length; m += 1) {
    let _ = Fu(e, d, m), b = g(_);
    s.set(b, o[m] = Uu(b, _));
  }
  return {
    c() {
      t = I("div"), n = I("div"), c.c(), r = x(), i = I("div");
      for (let m = 0; m < o.length; m += 1)
        o[m].c();
      h(n, "class", "sf-selected-item input"), h(i, "class", "sf-items"), ut(
        i,
        "display",
        /*dropdownState*/
        e[7] === "open" ? "block" : "none"
      ), h(t, "class", "sf-autocomplete"), We(
        t,
        "readonly",
        /*readOnly*/
        e[9]
      );
    },
    m(m, _) {
      k(m, t, _), D(t, n), c.m(n, null), D(t, r), D(t, i);
      for (let b = 0; b < o.length; b += 1)
        o[b] && o[b].m(i, null);
      a || (l = Y(
        n,
        "click",
        /*toggleDropDown*/
        e[10]
      ), a = !0);
    },
    p(m, _) {
      f === (f = u(m)) && c ? c.p(m, _) : (c.d(1), c = f(m), c && (c.c(), c.m(n, null))), _ & /*value, options, handleSelect*/
      2081 && (d = Ve(
        /*options*/
        m[5]
      ), o = ei(o, _, g, 1, m, d, s, i, ho, Uu, null, Fu)), _ & /*dropdownState*/
      128 && ut(
        i,
        "display",
        /*dropdownState*/
        m[7] === "open" ? "block" : "none"
      ), _ & /*readOnly*/
      512 && We(
        t,
        "readonly",
        /*readOnly*/
        m[9]
      );
    },
    d(m) {
      m && E(t), c.d();
      for (let _ = 0; _ < o.length; _ += 1)
        o[_].d();
      a = !1, l();
    }
  };
}
function QE(e) {
  let t, n, r;
  var i = (
    /*params*/
    e[1].components.fieldWrapper
  );
  function o(s, a) {
    return {
      props: {
        params: (
          /*params*/
          s[1]
        ),
        schema: (
          /*schema*/
          s[2]
        ),
        $$slots: { default: [VE] },
        $$scope: { ctx: s }
      }
    };
  }
  return i && (t = qe(i, o(e))), {
    c() {
      t && ve(t.$$.fragment), n = Xe();
    },
    m(s, a) {
      t && ge(t, s, a), k(s, n, a), r = !0;
    },
    p(s, [a]) {
      if (a & /*params*/
      2 && i !== (i = /*params*/
      s[1].components.fieldWrapper)) {
        if (t) {
          we();
          const l = t;
          W(l.$$.fragment, 1, 0, () => {
            _e(l, 1);
          }), $e();
        }
        i ? (t = qe(i, o(s)), ve(t.$$.fragment), L(t.$$.fragment, 1), ge(t, n.parentNode, n)) : t = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        2 && (l.params = /*params*/
        s[1]), a & /*schema*/
        4 && (l.schema = /*schema*/
        s[2]), a & /*$$scope, readOnly, dropdownState, options, value, match, input, inputState, selected*/
        2098169 && (l.$$scope = { dirty: a, ctx: s }), t.$set(l);
      }
    },
    i(s) {
      r || (t && L(t.$$.fragment, s), r = !0);
    },
    o(s) {
      t && W(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(n), t && _e(t, s);
    }
  };
}
function xE(e, t, n) {
  let r, { params: i } = t, { schema: o } = t, { value: s } = t, a = "showing-value", l = "", u = "closed", f, c = [], d, g = null, m;
  const _ = (P) => {
    if (d) {
      g && clearTimeout(g);
      const N = new URL(d, location.href);
      P && N.searchParams.append("match", P), g = setTimeout(
        () => fetch(N.toString(), { credentials: "include" }).then((U) => U.json()).then((U) => {
          U.length > 0 && typeof U[0] != "object" ? n(5, c = U.map((K) => ({ id: K, text: K, image: "" }))) : n(5, c = U), n(7, u = "open");
        }),
        100
      );
    }
  }, b = async () => {
    n(7, u = u === "open" ? "closed" : "open"), u === "open" && (n(3, a = "searching"), await Ei(), m.focus());
  }, v = (P) => () => {
    r || (n(0, s = P.id), i.pathChanged(i.path, P.id), n(3, a = "showing-value"), n(7, u = "closed"));
  }, A = (P) => {
    var N;
    _((N = P.currentTarget) == null ? void 0 : N.value);
  };
  function F() {
    l = this.value, n(6, l);
  }
  function G(P) {
    rt[P ? "unshift" : "push"](() => {
      m = P, n(8, m);
    });
  }
  return e.$$set = (P) => {
    "params" in P && n(1, i = P.params), "schema" in P && n(2, o = P.schema), "value" in P && n(0, s = P.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    4 && (d = o.url || ""), e.$$.dirty & /*params, schema*/
    6 && n(9, r = i.containerReadOnly || o.readOnly || !1), e.$$.dirty & /*options, value*/
    33 && n(4, f = c.find((P) => P.id === s)), e.$$.dirty & /*selected, inputState*/
    24 && n(3, a = f ? a : "searching");
  }, [
    s,
    i,
    o,
    a,
    f,
    c,
    l,
    u,
    m,
    r,
    b,
    v,
    A,
    F,
    G
  ];
}
class ek extends Ne {
  constructor(t) {
    super(), Me(this, t, xE, QE, Ce, { params: 1, schema: 2, value: 0 });
  }
}
function tk(e) {
  let t, n, r, i;
  return {
    c() {
      t = I("input"), h(t, "id", n = /*params*/
      e[0].path.join(".")), h(t, "name", r = /*params*/
      e[0].path.join(".")), h(t, "type", "hidden"), t.value = i = /*value*/
      e[1] || "";
    },
    m(o, s) {
      k(o, t, s);
    },
    p(o, [s]) {
      s & /*params*/
      1 && n !== (n = /*params*/
      o[0].path.join(".")) && h(t, "id", n), s & /*params*/
      1 && r !== (r = /*params*/
      o[0].path.join(".")) && h(t, "name", r), s & /*value*/
      2 && i !== (i = /*value*/
      o[1] || "") && (t.value = i);
    },
    i: ne,
    o: ne,
    d(o) {
      o && E(t);
    }
  };
}
function nk(e, t, n) {
  let { params: r } = t, { value: i } = t;
  return e.$$set = (o) => {
    "params" in o && n(0, r = o.params), "value" in o && n(1, i = o.value);
  }, [r, i];
}
class rk extends Ne {
  constructor(t) {
    super(), Me(this, t, nk, tk, Ce, { params: 0, value: 1 });
  }
}
function Bu(e, t, n) {
  const r = e.slice();
  return r[36] = t[n], r[38] = n, r;
}
function zu(e, t, n) {
  const r = e.slice();
  return r[39] = t[n], r;
}
function qu(e, t, n) {
  const r = e.slice();
  return r[42] = t[n], r[38] = n, r;
}
function Gu(e) {
  let t, n, r, i, o, s = (
    /*params*/
    (e[2].collapsible || /*legendText*/
    e[17]) && Hu(e)
  ), a = (
    /*collapserOpenState*/
    e[9] === "open" && Ju(e)
  );
  return {
    c() {
      t = I("fieldset"), s && s.c(), n = x(), a && a.c(), h(t, "name", r = /*params*/
      e[2].path.join(".")), h(t, "class", i = "subset array list-detail depth-" + /*params*/
      e[2].path.length);
    },
    m(l, u) {
      k(l, t, u), s && s.m(t, null), D(t, n), a && a.m(t, null), o = !0;
    },
    p(l, u) {
      /*params*/
      l[2].collapsible || /*legendText*/
      l[17] ? s ? s.p(l, u) : (s = Hu(l), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*collapserOpenState*/
      l[9] === "open" ? a ? (a.p(l, u), u[0] & /*collapserOpenState*/
      512 && L(a, 1)) : (a = Ju(l), a.c(), L(a, 1), a.m(t, null)) : a && (we(), W(a, 1, 1, () => {
        a = null;
      }), $e()), (!o || u[0] & /*params*/
      4 && r !== (r = /*params*/
      l[2].path.join("."))) && h(t, "name", r), (!o || u[0] & /*params*/
      4 && i !== (i = "subset array list-detail depth-" + /*params*/
      l[2].path.length)) && h(t, "class", i);
    },
    i(l) {
      o || (L(a), o = !0);
    },
    o(l) {
      W(a), o = !1;
    },
    d(l) {
      l && E(t), s && s.d(), a && a.d();
    }
  };
}
function Hu(e) {
  let t, n, r, i = It(
    /*legendText*/
    e[17]
  ) + "", o, s = (
    /*params*/
    e[2].collapsible && Ku(e)
  ), a = (
    /*schema*/
    e[0].description && Yu(e)
  );
  return {
    c() {
      t = I("legend"), s && s.c(), n = x(), r = I("span"), o = x(), a && a.c(), h(r, "class", "subset-label-title object-label-title"), h(t, "class", "subset-label array-label");
    },
    m(l, u) {
      k(l, t, u), s && s.m(t, null), D(t, n), D(t, r), r.innerHTML = i, D(t, o), a && a.m(t, null);
    },
    p(l, u) {
      /*params*/
      l[2].collapsible ? s ? s.p(l, u) : (s = Ku(l), s.c(), s.m(t, n)) : s && (s.d(1), s = null), u[0] & /*legendText*/
      131072 && i !== (i = It(
        /*legendText*/
        l[17]
      ) + "") && (r.innerHTML = i), /*schema*/
      l[0].description ? a ? a.p(l, u) : (a = Yu(l), a.c(), a.m(t, null)) : a && (a.d(1), a = null);
    },
    d(l) {
      l && E(t), s && s.d(), a && a.d();
    }
  };
}
function Ku(e) {
  let t, n, r, i;
  return {
    c() {
      t = I("span"), h(t, "class", n = "collapser " + /*collapserOpenState*/
      e[9]);
    },
    m(o, s) {
      k(o, t, s), r || (i = Y(
        t,
        "click",
        /*toggle*/
        e[18]
      ), r = !0);
    },
    p(o, s) {
      s[0] & /*collapserOpenState*/
      512 && n !== (n = "collapser " + /*collapserOpenState*/
      o[9]) && h(t, "class", n);
    },
    d(o) {
      o && E(t), r = !1, i();
    }
  };
}
function Yu(e) {
  let t, n = It(
    /*schema*/
    e[0].description
  ) + "";
  return {
    c() {
      t = I("span"), h(t, "class", "subset-label-description object-label-description");
    },
    m(r, i) {
      k(r, t, i), t.innerHTML = n;
    },
    p(r, i) {
      i[0] & /*schema*/
      1 && n !== (n = It(
        /*schema*/
        r[0].description
      ) + "") && (t.innerHTML = n);
    },
    d(r) {
      r && E(t);
    }
  };
}
function Ju(e) {
  let t, n, r, i = (
    /*controls*/
    e[14].includes("add")
  ), o, s;
  const a = [sk, ik], l = [];
  function u(c, d) {
    return (
      /*emptyText*/
      c[15] ? 1 : 0
    );
  }
  t = u(e), n = l[t] = a[t](e);
  let f = i && of(e);
  return {
    c() {
      n.c(), r = x(), f && f.c(), o = Xe();
    },
    m(c, d) {
      l[t].m(c, d), k(c, r, d), f && f.m(c, d), k(c, o, d), s = !0;
    },
    p(c, d) {
      let g = t;
      t = u(c), t === g ? l[t].p(c, d) : (we(), W(l[g], 1, 1, () => {
        l[g] = null;
      }), $e(), n = l[t], n ? n.p(c, d) : (n = l[t] = a[t](c), n.c()), L(n, 1), n.m(r.parentNode, r)), d[0] & /*controls*/
      16384 && (i = /*controls*/
      c[14].includes("add")), i ? f ? f.p(c, d) : (f = of(c), f.c(), f.m(o.parentNode, o)) : f && (f.d(1), f = null);
    },
    i(c) {
      s || (L(n), s = !0);
    },
    o(c) {
      W(n), s = !1;
    },
    d(c) {
      c && (E(r), E(o)), l[t].d(c), f && f.d(c);
    }
  };
}
function ik(e) {
  let t, n;
  return {
    c() {
      t = I("div"), n = lt(
        /*emptyText*/
        e[15]
      ), h(t, "class", "emptyText");
    },
    m(r, i) {
      k(r, t, i), D(t, n);
    },
    p(r, i) {
      i[0] & /*emptyText*/
      32768 && bt(
        n,
        /*emptyText*/
        r[15]
      );
    },
    i: ne,
    o: ne,
    d(r) {
      r && E(t);
    }
  };
}
function sk(e) {
  let t, n, r, i, o, s;
  const a = [ak, ok], l = [];
  function u(f, c) {
    return (
      /*mode*/
      f[3] === "list" ? 0 : 1
    );
  }
  return n = u(e), r = l[n] = a[n](e), {
    c() {
      t = I("div"), r.c(), h(t, "class", "table-container"), h(t, "tabindex", "0"), ut(
        t,
        "grid-template-columns",
        /*gridTemplateColumns*/
        e[13]
      );
    },
    m(f, c) {
      k(f, t, c), l[n].m(t, null), i = !0, o || (s = [
        Y(
          t,
          "keyup",
          /*onKey*/
          e[22]
        ),
        Y(
          t,
          "click",
          /*onClick*/
          e[23]
        )
      ], o = !0);
    },
    p(f, c) {
      let d = n;
      n = u(f), n === d ? l[n].p(f, c) : (we(), W(l[d], 1, 1, () => {
        l[d] = null;
      }), $e(), r = l[n], r ? r.p(f, c) : (r = l[n] = a[n](f), r.c()), L(r, 1), r.m(t, null)), c[0] & /*gridTemplateColumns*/
      8192 && ut(
        t,
        "grid-template-columns",
        /*gridTemplateColumns*/
        f[13]
      );
    },
    i(f) {
      i || (L(r), i = !0);
    },
    o(f) {
      W(r), i = !1;
    },
    d(f) {
      f && E(t), l[n].d(), o = !1, it(s);
    }
  };
}
function ok(e) {
  let t, n, r, i, o, s, a, l, u;
  function f(g) {
    e[33](g);
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
  e[0].items), i = new $r({ props: c }), rt.push(() => Ut(i, "schema", f));
  let d = (
    /*schema*/
    e[0].submit && Xu(e)
  );
  return {
    c() {
      t = I("button"), t.textContent = "List", n = x(), r = I("div"), ve(i.$$.fragment), s = x(), d && d.c(), h(t, "class", "to-list"), h(t, "type", "button"), h(r, "class", "element");
    },
    m(g, m) {
      k(g, t, m), e[32](t), k(g, n, m), k(g, r, m), ge(i, r, null), D(r, s), d && d.m(r, null), a = !0, l || (u = Y(
        t,
        "click",
        /*onModeList*/
        e[25]
      ), l = !0);
    },
    p(g, m) {
      const _ = {};
      m[0] & /*params, selectedIdx, schema*/
      1029 && (_.params = {
        .../*params*/
        g[2],
        path: [
          .../*params*/
          g[2].path,
          /*selectedIdx*/
          g[10].toString()
        ],
        containerParent: "array",
        containerReadOnly: (
          /*params*/
          g[2].containerReadOnly || /*schema*/
          g[0].readOnly || !1
        )
      }), m[0] & /*selectedValue*/
      4096 && (_.value = /*selectedValue*/
      g[12]), !o && m[0] & /*schema*/
      1 && (o = !0, _.schema = /*schema*/
      g[0].items, an(() => o = !1)), i.$set(_), /*schema*/
      g[0].submit ? d ? d.p(g, m) : (d = Xu(g), d.c(), d.m(r, null)) : d && (d.d(1), d = null);
    },
    i(g) {
      a || (L(i.$$.fragment, g), a = !0);
    },
    o(g) {
      W(i.$$.fragment, g), a = !1;
    },
    d(g) {
      g && (E(t), E(n), E(r)), e[32](null), _e(i), d && d.d(), l = !1, u();
    }
  };
}
function ak(e) {
  let t, n, r = [], i = /* @__PURE__ */ new Map(), o, s = Ve(
    /*listFields*/
    e[6]
  ), a = [];
  for (let c = 0; c < s.length; c += 1)
    a[c] = Zu(qu(e, s, c));
  let l = !/*readOnly*/
  e[7] && Vu(), u = Ve(
    /*rowView*/
    e[4]
  );
  const f = (c) => (
    /*idx*/
    c[38]
  );
  for (let c = 0; c < u.length; c += 1) {
    let d = Bu(e, u, c), g = f(d);
    i.set(g, r[c] = sf(g, d));
  }
  return {
    c() {
      for (let c = 0; c < a.length; c += 1)
        a[c].c();
      t = x(), l && l.c(), n = x();
      for (let c = 0; c < r.length; c += 1)
        r[c].c();
      o = Xe();
    },
    m(c, d) {
      for (let g = 0; g < a.length; g += 1)
        a[g] && a[g].m(c, d);
      k(c, t, d), l && l.m(c, d), k(c, n, d);
      for (let g = 0; g < r.length; g += 1)
        r[g] && r[g].m(c, d);
      k(c, o, d);
    },
    p(c, d) {
      if (d[0] & /*headingClass, sort, onSort, listProps, onSortKey, listFields*/
      70254944) {
        s = Ve(
          /*listFields*/
          c[6]
        );
        let g;
        for (g = 0; g < s.length; g += 1) {
          const m = qu(c, s, g);
          a[g] ? a[g].p(m, d) : (a[g] = Zu(m), a[g].c(), a[g].m(t.parentNode, t));
        }
        for (; g < a.length; g += 1)
          a[g].d(1);
        a.length = s.length;
      }
      /*readOnly*/
      c[7] ? l && (l.d(1), l = null) : l || (l = Vu(), l.c(), l.m(n.parentNode, n)), d[0] & /*rowView, params, value, controls, sort, readOnly, selectedIdx, onSelect, listProps*/
      542134 && (u = Ve(
        /*rowView*/
        c[4]
      ), r = ei(r, d, f, 1, c, u, i, o.parentNode, ho, sf, o, Bu));
    },
    i: ne,
    o: ne,
    d(c) {
      c && (E(t), E(n), E(o)), xr(a, c), l && l.d(c);
      for (let d = 0; d < r.length; d += 1)
        r[d].d(c);
    }
  };
}
function Xu(e) {
  let t, n = (
    /*schema*/
    e[0].submit + ""
  ), r, i, o;
  return {
    c() {
      t = I("button"), r = lt(n), h(t, "type", "button"), h(t, "class", "submit-button");
    },
    m(s, a) {
      k(s, t, a), D(t, r), i || (o = Y(
        t,
        "click",
        /*onSubmit*/
        e[24]
      ), i = !0);
    },
    p(s, a) {
      a[0] & /*schema*/
      1 && n !== (n = /*schema*/
      s[0].submit + "") && bt(r, n);
    },
    d(s) {
      s && E(t), i = !1, o();
    }
  };
}
function Zu(e) {
  let t, n = (
    /*fieldName*/
    e[42] + ""
  ), r, i, o, s;
  return {
    c() {
      t = I("div"), r = lt(n), h(t, "class", i = /*headingClass*/
      e[26](
        /*idx*/
        e[38],
        /*sort*/
        e[5]
      )), h(t, "tabindex", "0");
    },
    m(a, l) {
      k(a, t, l), D(t, r), o || (s = [
        Y(t, "click", zt(function() {
          Ye(
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
        Y(t, "keyup", zt(function() {
          Ye(
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
      ], o = !0);
    },
    p(a, l) {
      e = a, l[0] & /*listFields*/
      64 && n !== (n = /*fieldName*/
      e[42] + "") && bt(r, n), l[0] & /*sort*/
      32 && i !== (i = /*headingClass*/
      e[26](
        /*idx*/
        e[38],
        /*sort*/
        e[5]
      )) && h(t, "class", i);
    },
    d(a) {
      a && E(t), o = !1, it(s);
    }
  };
}
function Vu(e) {
  let t;
  return {
    c() {
      t = I("div"), t.textContent = " ", h(t, "class", "buttons-header");
    },
    m(n, r) {
      k(n, t, r);
    },
    d(n) {
      n && E(t);
    }
  };
}
function Qu(e) {
  let t, n = (
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
      t = I("div"), r = lt(n), h(t, "class", "item");
    },
    m(i, o) {
      k(i, t, o), D(t, r);
    },
    p(i, o) {
      o[0] & /*rowView, listProps*/
      272 && n !== (n = /*item*/
      (i[36][
        /*propName*/
        i[39]
      ] === void 0 ? " " : (
        /*item*/
        i[36][
          /*propName*/
          i[39]
        ]
      )) + "") && bt(r, n);
    },
    d(i) {
      i && E(t);
    }
  };
}
function xu(e) {
  let t, n, r = (
    /*controls*/
    e[14].includes("delete")
  ), i, o = (
    /*controls*/
    e[14].includes("duplicate")
  ), s, a = (
    /*controls*/
    e[14].includes("reorder") && /*sort*/
    e[5] === null && /*idx*/
    e[38] > 0
  ), l, u = (
    /*controls*/
    e[14].includes("reorder") && /*sort*/
    e[5] === null && /*idx*/
    e[38] < /*value*/
    (e[1] || []).length - 1
  ), f, c = r && ef(e), d = o && tf(e), g = a && nf(e), m = u && rf(e);
  return {
    c() {
      t = I("div"), n = I("div"), c && c.c(), i = x(), d && d.c(), s = x(), g && g.c(), l = x(), m && m.c(), f = x(), h(n, "class", "row-buttons"), h(t, "class", "array-buttons");
    },
    m(_, b) {
      k(_, t, b), D(t, n), c && c.m(n, null), D(n, i), d && d.m(n, null), D(n, s), g && g.m(n, null), D(n, l), m && m.m(n, null), D(t, f);
    },
    p(_, b) {
      b[0] & /*controls*/
      16384 && (r = /*controls*/
      _[14].includes("delete")), r ? c ? c.p(_, b) : (c = ef(_), c.c(), c.m(n, i)) : c && (c.d(1), c = null), b[0] & /*controls*/
      16384 && (o = /*controls*/
      _[14].includes("duplicate")), o ? d ? d.p(_, b) : (d = tf(_), d.c(), d.m(n, s)) : d && (d.d(1), d = null), b[0] & /*controls, sort, rowView*/
      16432 && (a = /*controls*/
      _[14].includes("reorder") && /*sort*/
      _[5] === null && /*idx*/
      _[38] > 0), a ? g ? g.p(_, b) : (g = nf(_), g.c(), g.m(n, l)) : g && (g.d(1), g = null), b[0] & /*controls, sort, rowView, value*/
      16434 && (u = /*controls*/
      _[14].includes("reorder") && /*sort*/
      _[5] === null && /*idx*/
      _[38] < /*value*/
      (_[1] || []).length - 1), u ? m ? m.p(_, b) : (m = rf(_), m.c(), m.m(n, null)) : m && (m.d(1), m = null);
    },
    d(_) {
      _ && E(t), c && c.d(), d && d.d(), g && g.d(), m && m.d();
    }
  };
}
function ef(e) {
  let t, n, r;
  return {
    c() {
      t = I("button"), h(t, "type", "button"), h(t, "class", "list-control delete"), h(t, "title", "delete");
    },
    m(i, o) {
      k(i, t, o), n || (r = [
        Y(t, "click", zt(function() {
          Ye(Bi(
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
        Y(t, "keyup", zt(
          /*keyup_handler*/
          e[31]
        ))
      ], n = !0);
    },
    p(i, o) {
      e = i;
    },
    d(i) {
      i && E(t), n = !1, it(r);
    }
  };
}
function tf(e) {
  let t, n, r;
  return {
    c() {
      t = I("button"), h(t, "type", "button"), h(t, "class", "list-control duplicate"), h(t, "title", "duplicate");
    },
    m(i, o) {
      k(i, t, o), n || (r = [
        Y(t, "click", zt(function() {
          Ye(zi(
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
        Y(t, "keyup", zt(
          /*keyup_handler_1*/
          e[30]
        ))
      ], n = !0);
    },
    p(i, o) {
      e = i;
    },
    d(i) {
      i && E(t), n = !1, it(r);
    }
  };
}
function nf(e) {
  let t, n, r;
  return {
    c() {
      t = I("button"), h(t, "type", "button"), h(t, "class", "list-control up"), h(t, "title", "move up");
    },
    m(i, o) {
      k(i, t, o), n || (r = [
        Y(t, "click", zt(function() {
          Ye(qi(
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
        Y(t, "keyup", zt(
          /*keyup_handler_2*/
          e[29]
        ))
      ], n = !0);
    },
    p(i, o) {
      e = i;
    },
    d(i) {
      i && E(t), n = !1, it(r);
    }
  };
}
function rf(e) {
  let t, n, r;
  return {
    c() {
      t = I("button"), h(t, "type", "button"), h(t, "class", "list-control down"), h(t, "title", "move down");
    },
    m(i, o) {
      k(i, t, o), n || (r = [
        Y(t, "click", zt(function() {
          Ye(Gi(
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
        Y(t, "keyup", zt(
          /*keyup_handler_3*/
          e[28]
        ))
      ], n = !0);
    },
    p(i, o) {
      e = i;
    },
    d(i) {
      i && E(t), n = !1, it(r);
    }
  };
}
function sf(e, t) {
  let n, r, i, o, s, a = Ve(
    /*listProps*/
    t[8]
  ), l = [];
  for (let f = 0; f < a.length; f += 1)
    l[f] = Qu(zu(t, a, f));
  let u = !/*readOnly*/
  t[7] && xu(t);
  return {
    key: e,
    first: null,
    c() {
      n = I("div");
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      r = x(), u && u.c(), i = Xe(), h(n, "class", "row-wrapper"), We(
        n,
        "selected",
        /*idx*/
        t[38] === /*selectedIdx*/
        t[10]
      ), this.first = n;
    },
    m(f, c) {
      k(f, n, c);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(n, null);
      k(f, r, c), u && u.m(f, c), k(f, i, c), o || (s = Y(n, "click", function() {
        Ye(
          /*onSelect*/
          t[19](
            /*idx*/
            t[38]
          )
        ) && t[19](
          /*idx*/
          t[38]
        ).apply(this, arguments);
      }), o = !0);
    },
    p(f, c) {
      if (t = f, c[0] & /*rowView, listProps*/
      272) {
        a = Ve(
          /*listProps*/
          t[8]
        );
        let d;
        for (d = 0; d < a.length; d += 1) {
          const g = zu(t, a, d);
          l[d] ? l[d].p(g, c) : (l[d] = Qu(g), l[d].c(), l[d].m(n, null));
        }
        for (; d < l.length; d += 1)
          l[d].d(1);
        l.length = a.length;
      }
      c[0] & /*rowView, selectedIdx*/
      1040 && We(
        n,
        "selected",
        /*idx*/
        t[38] === /*selectedIdx*/
        t[10]
      ), /*readOnly*/
      t[7] ? u && (u.d(1), u = null) : u ? u.p(t, c) : (u = xu(t), u.c(), u.m(i.parentNode, i));
    },
    d(f) {
      f && (E(n), E(r), E(i)), xr(l, f), u && u.d(f), o = !1, s();
    }
  };
}
function of(e) {
  let t, n, r;
  return {
    c() {
      t = I("button"), h(t, "type", "button"), h(t, "class", "list-control add"), h(t, "title", "add item");
    },
    m(i, o) {
      k(i, t, o), n || (r = Y(t, "click", function() {
        Ye(Ui(
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
      }), n = !0);
    },
    p(i, o) {
      e = i;
    },
    d(i) {
      i && E(t), n = !1, r();
    }
  };
}
function lk(e) {
  let t, n, r = (
    /*showWrapper*/
    e[16] && Gu(e)
  );
  return {
    c() {
      r && r.c(), t = Xe();
    },
    m(i, o) {
      r && r.m(i, o), k(i, t, o), n = !0;
    },
    p(i, o) {
      /*showWrapper*/
      i[16] ? r ? (r.p(i, o), o[0] & /*showWrapper*/
      65536 && L(r, 1)) : (r = Gu(i), r.c(), L(r, 1), r.m(t.parentNode, t)) : r && (we(), W(r, 1, 1, () => {
        r = null;
      }), $e());
    },
    i(i) {
      n || (L(r), n = !0);
    },
    o(i) {
      W(r), n = !1;
    },
    d(i) {
      i && E(t), r && r.d(i);
    }
  };
}
function uk(e, t, n) {
  let r, i, o, s, a, l, u, f, c, d, { params: g } = t, { schema: m } = t, { value: _ } = t, b = g.path.length === 0 || !g.collapsible ? "open" : "closed", v = -1, A = "list", F = [], G, P = !1, N = null;
  if (m.type !== "array" || m.items.type !== "object")
    throw new Error("ListDetail editor can only be used on an array with items of type=object");
  const U = () => {
    n(9, b = b === "open" ? "closed" : "open");
  }, K = (H) => async () => {
    n(3, A = "detail"), n(10, v = _.findIndex((Pe) => Pe === F[H])), n(12, N = _[v]), await Ei(), G == null || G.focus();
  }, M = (H) => () => {
    (s == null ? void 0 : s.field) === H && s.direction === "desc" ? n(5, s = null) : n(5, s = {
      field: H,
      direction: (s == null ? void 0 : s.field) === H ? "desc" : "asc"
    });
  }, ie = (H) => (Pe) => {
    Pe.key === "Enter" && ((s == null ? void 0 : s.field) === H && s.direction === "desc" ? n(5, s = null) : n(5, s = {
      field: H,
      direction: (s == null ? void 0 : s.field) === H ? "desc" : "asc"
    }));
  }, R = async (H) => {
    A === "list" && !P && (H.target, console.log(`key ${H.key} selectedIdx ${v} len ${_.length}`), H.key === "ArrowDown" && v + 1 < _.length ? (n(10, v += 1), await Ei()) : H.key === "ArrowUp" && v > 0 ? n(10, v -= 1) : H.key === "Enter" && K(v)()), P = !1;
  }, Q = (H) => {
    A === "list" && H.currentTarget.focus();
  }, et = () => {
    g.pathChanged([...g.path, v.toString()], N, "innerSubmit");
  }, pe = async () => {
    n(3, A = "list"), P = !0, await Ei(), n(10, v = F.findIndex((H) => H === N));
  }, z = (H) => (Pe, rn) => Pe[H.field] < rn[H.field] ? H.direction === "asc" ? -1 : 1 : Pe[H.field] > rn[H.field] ? H.direction === "desc" ? -1 : 1 : 0, J = (H, Pe) => "heading " + (i[H] !== (Pe == null ? void 0 : Pe.field) ? "" : Pe == null ? void 0 : Pe.direction);
  function ue(H) {
    vi.call(this, e, H);
  }
  function ot(H) {
    vi.call(this, e, H);
  }
  function Ze(H) {
    vi.call(this, e, H);
  }
  function tt(H) {
    vi.call(this, e, H);
  }
  function xn(H) {
    rt[H ? "unshift" : "push"](() => {
      G = H, n(11, G);
    });
  }
  function nn(H) {
    e.$$.not_equal(m.items, H) && (m.items = H, n(0, m));
  }
  return e.$$set = (H) => {
    "params" in H && n(2, g = H.params), "schema" in H && n(0, m = H.schema), "value" in H && n(1, _ = H.value);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*value*/
    2 && n(1, _ = _ || []), e.$$.dirty[0] & /*schema*/
    1 && n(27, r = m.items || {}), e.$$.dirty[0] & /*itemSchema*/
    134217728 && n(8, i = Array.isArray(r.headings) && typeof r.headings[0] == "string" && r.headings || Object.keys(r.properties)), e.$$.dirty[0] & /*listProps, itemSchema, params*/
    134217988 && n(6, o = i.map((H) => Jn(r.properties[H], [...g.path, "0", H]))), e.$$.dirty[0] & /*itemSchema*/
    134217728 && n(5, s = r.defaultSort || null), e.$$.dirty[0] & /*schema, params*/
    5 && n(17, a = Jn(m, g.path)), e.$$.dirty[0] & /*value, schema*/
    3 && n(16, l = _ && _.length > 0 || m.emptyDisplay !== !1), e.$$.dirty[0] & /*value, schema*/
    3 && n(15, u = (!_ || _.length === 0) && typeof m.emptyDisplay == "string" && m.emptyDisplay), e.$$.dirty[0] & /*params, schema*/
    5 && n(7, f = g.containerReadOnly || m.readOnly || !1), e.$$.dirty[0] & /*schema, readOnly*/
    129 && n(14, c = m.controls === void 0 ? f ? "" : "add, reorder, delete, duplicate" : m.controls), e.$$.dirty[0] & /*mode, listFields*/
    72 && n(13, d = A === "list" ? `repeat(${o.length}, auto) 50px` : null), e.$$.dirty[0] & /*value, sort, rowView*/
    50 && (n(4, F = [..._]), s && F.sort(z(s)));
  }, [
    m,
    _,
    g,
    A,
    F,
    s,
    o,
    f,
    i,
    b,
    v,
    G,
    N,
    d,
    c,
    u,
    l,
    a,
    U,
    K,
    M,
    ie,
    R,
    Q,
    et,
    pe,
    J,
    r,
    ue,
    ot,
    Ze,
    tt,
    xn,
    nn
  ];
}
class fk extends Ne {
  constructor(t) {
    super(), Me(this, t, uk, lk, Ce, { params: 2, schema: 0, value: 1 }, null, [-1, -1]);
  }
}
function ck(e) {
  let t, n, r, i, o, s;
  return {
    c() {
      t = I("input"), h(t, "id", n = /*params*/
      e[0].path.join(".")), h(t, "name", r = /*params*/
      e[0].path.join(".")), h(t, "class", "currency"), h(t, "type", pk), t.value = /*formattedString*/
      e[2], t.disabled = i = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(a, l) {
      k(a, t, l), o || (s = Y(
        t,
        "input",
        /*onInput*/
        e[3]
      ), o = !0);
    },
    p(a, l) {
      l & /*params*/
      1 && n !== (n = /*params*/
      a[0].path.join(".")) && h(t, "id", n), l & /*params*/
      1 && r !== (r = /*params*/
      a[0].path.join(".")) && h(t, "name", r), l & /*formattedString*/
      4 && t.value !== /*formattedString*/
      a[2] && (t.value = /*formattedString*/
      a[2]), l & /*schema, params*/
      3 && i !== (i = /*schema*/
      a[1].readOnly || /*params*/
      a[0].containerReadOnly) && (t.disabled = i);
    },
    d(a) {
      a && E(t), o = !1, s();
    }
  };
}
function dk(e) {
  let t, n, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function o(s, a) {
    return {
      props: {
        params: (
          /*params*/
          s[0]
        ),
        schema: (
          /*schema*/
          s[1]
        ),
        $$slots: { default: [ck] },
        $$scope: { ctx: s }
      }
    };
  }
  return i && (t = qe(i, o(e))), {
    c() {
      t && ve(t.$$.fragment), n = Xe();
    },
    m(s, a) {
      t && ge(t, s, a), k(s, n, a), r = !0;
    },
    p(s, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      s[0].components.fieldWrapper)) {
        if (t) {
          we();
          const l = t;
          W(l.$$.fragment, 1, 0, () => {
            _e(l, 1);
          }), $e();
        }
        i ? (t = qe(i, o(s)), ve(t.$$.fragment), L(t.$$.fragment, 1), ge(t, n.parentNode, n)) : t = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        s[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        s[1]), a & /*$$scope, params, formattedString, schema*/
        519 && (l.$$scope = { dirty: a, ctx: s }), t.$set(l);
      }
    },
    i(s) {
      r || (t && L(t.$$.fragment, s), r = !0);
    },
    o(s) {
      t && W(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(n), t && _e(t, s);
    }
  };
}
let pk = "text";
function hk(e, t, n) {
  let r, { params: i } = t, { schema: o } = t, { value: s } = t, a = i.componentContext;
  const l = a && a.currencySymbol || "$";
  let u;
  a && a.formatCurrency ? u = a.formatCurrency : u = (d) => !d && d !== 0 ? "" : d === Math.round(d) ? `${l}${d}` : `${l}${d.toFixed(2)}`;
  let f = "";
  const c = (d) => {
    let g = d.currentTarget.value;
    if (g === "" || g == l)
      n(6, f = ""), i.pathChanged(i.path, null);
    else {
      const m = g.replace(l, ""), _ = parseFloat(m), b = u(_), v = b.replace(l, "");
      n(6, f = b === g || v === g ? "" : g), isNaN(_) || i.pathChanged(i.path, _);
    }
  };
  return e.$$set = (d) => {
    "params" in d && n(0, i = d.params), "schema" in d && n(1, o = d.schema), "value" in d && n(4, s = d.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*holdString, formatCurrency, value*/
    112 && n(2, r = f || u(s || ""));
  }, [i, o, r, c, s, u, f];
}
class mk extends Ne {
  constructor(t) {
    super(), Me(this, t, hk, dk, Ce, { params: 0, schema: 1, value: 4 });
  }
}
function af(e, t, n) {
  const r = e.slice();
  return r[8] = t[n], r[10] = n, r;
}
function lf(e) {
  let t, n, r, i, o, s = (
    /*enumText*/
    (e[4] || [])[
      /*idx*/
      e[10]
    ] + ""
  ), a, l, u, f;
  return {
    c() {
      t = I("input"), i = x(), o = I("label"), a = lt(s), l = x(), h(t, "class", "sr-only"), h(t, "type", "radio"), h(t, "id", `${/*id*/
      e[6]}-${/*idx*/
      e[10]}`), t.value = n = /*enumVal*/
      e[8], h(
        t,
        "name",
        /*id*/
        e[6]
      ), t.checked = r = /*enumVal*/
      e[8] === /*value*/
      e[2], h(o, "for", `${/*id*/
      e[6]}-${/*idx*/
      e[10]}`);
    },
    m(c, d) {
      k(c, t, d), k(c, i, d), k(c, o, d), D(o, a), D(o, l), u || (f = Y(
        t,
        "change",
        /*change_handler*/
        e[7]
      ), u = !0);
    },
    p(c, d) {
      d & /*enumVals*/
      8 && n !== (n = /*enumVal*/
      c[8]) && (t.value = n), d & /*enumVals, value*/
      12 && r !== (r = /*enumVal*/
      c[8] === /*value*/
      c[2]) && (t.checked = r), d & /*enumText*/
      16 && s !== (s = /*enumText*/
      (c[4] || [])[
        /*idx*/
        c[10]
      ] + "") && bt(a, s);
    },
    d(c) {
      c && (E(t), E(i), E(o)), u = !1, f();
    }
  };
}
function gk(e) {
  let t, n = Ve(
    /*enumVals*/
    e[3]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = lf(af(e, n, i));
  return {
    c() {
      t = I("div");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      h(t, "role", "radiogroup"), h(t, "class", "group-container"), h(t, "aria-labelledby", `label-${/*id*/
      e[6]}`), ut(
        t,
        "flex-direction",
        /*flexDirection*/
        e[5]
      ), h(t, "id", `group-${/*id*/
      e[6]}`);
    },
    m(i, o) {
      k(i, t, o);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(t, null);
    },
    p(i, o) {
      if (o & /*id, enumText, enumVals, value, params, undefined*/
      93) {
        n = Ve(
          /*enumVals*/
          i[3]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = af(i, n, s);
          r[s] ? r[s].p(a, o) : (r[s] = lf(a), r[s].c(), r[s].m(t, null));
        }
        for (; s < r.length; s += 1)
          r[s].d(1);
        r.length = n.length;
      }
      o & /*flexDirection*/
      32 && ut(
        t,
        "flex-direction",
        /*flexDirection*/
        i[5]
      );
    },
    d(i) {
      i && E(t), xr(r, i);
    }
  };
}
function _k(e) {
  let t, n, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function o(s, a) {
    return {
      props: {
        params: (
          /*params*/
          s[0]
        ),
        schema: (
          /*schema*/
          s[1]
        ),
        $$slots: { default: [gk] },
        $$scope: { ctx: s }
      }
    };
  }
  return i && (t = qe(i, o(e))), {
    c() {
      t && ve(t.$$.fragment), n = Xe();
    },
    m(s, a) {
      t && ge(t, s, a), k(s, n, a), r = !0;
    },
    p(s, [a]) {
      if (a & /*params*/
      1 && i !== (i = /*params*/
      s[0].components.fieldWrapper)) {
        if (t) {
          we();
          const l = t;
          W(l.$$.fragment, 1, 0, () => {
            _e(l, 1);
          }), $e();
        }
        i ? (t = qe(i, o(s)), ve(t.$$.fragment), L(t.$$.fragment, 1), ge(t, n.parentNode, n)) : t = null;
      } else if (i) {
        const l = {};
        a & /*params*/
        1 && (l.params = /*params*/
        s[0]), a & /*schema*/
        2 && (l.schema = /*schema*/
        s[1]), a & /*$$scope, flexDirection, enumVals, enumText, value, params*/
        2109 && (l.$$scope = { dirty: a, ctx: s }), t.$set(l);
      }
    },
    i(s) {
      r || (t && L(t.$$.fragment, s), r = !0);
    },
    o(s) {
      t && W(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(n), t && _e(t, s);
    }
  };
}
function vk(e, t, n) {
  let r, { params: i } = t, { schema: o } = t, { value: s } = t, a, l, u = i.path.join(".");
  const f = (c) => i.pathChanged(i.path, c.currentTarget.value || void 0);
  return e.$$set = (c) => {
    "params" in c && n(0, i = c.params), "schema" in c && n(1, o = c.schema), "value" in c && n(2, s = c.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    2 && n(3, a = o.enum), e.$$.dirty & /*schema*/
    2 && n(4, l = o.enumText || o.enum), e.$$.dirty & /*schema*/
    2 && n(5, r = o.direction || "row");
  }, [i, o, s, a, l, r, u, f];
}
class yk extends Ne {
  constructor(t) {
    super(), Me(this, t, vk, _k, Ce, { params: 0, schema: 1, value: 2 });
  }
}
function bk(e) {
  let t, n, r;
  function i(s) {
    e[10](s);
  }
  let o = {
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
    e[0] !== void 0 && (o.schema = /*schema*/
    e[0]), t = new $r({ props: o }), rt.push(() => Ut(t, "schema", i)), {
      c() {
        ve(t.$$.fragment);
      },
      m(s, a) {
        ge(t, s, a), r = !0;
      },
      p(s, [a]) {
        const l = {};
        a & /*params*/
        4 && (l.params = /*params*/
        s[2]), a & /*value*/
        2 && (l.value = /*value*/
        s[1]), !n && a & /*schema*/
        1 && (n = !0, l.schema = /*schema*/
        s[0], an(() => n = !1)), t.$set(l);
      },
      i(s) {
        r || (L(t.$$.fragment, s), r = !0);
      },
      o(s) {
        W(t.$$.fragment, s), r = !1;
      },
      d(s) {
        _e(t, s);
      }
    }
  );
}
function wk(e, t, n) {
  let { schema: r } = t, { value: i } = t, { uploadFiles: o = {} } = t, { dirty: s = !1 } = t, { showErrors: a = !0 } = t, { collapsible: l = !1 } = t, { components: u = {} } = t, { componentContext: f = {} } = t;
  const c = df();
  let d = {};
  const g = (v) => {
    const A = VR.validator(p9(r), {
      includeErrors: !0,
      allErrors: !0,
      allowUnusedKeywords: !0
    });
    A(v || i), n(9, d = Object.fromEntries((A.errors || []).map((F) => LE(r, i, F.keywordLocation, F.instanceLocation))));
  };
  Gp(() => {
    g(), Object.keys(d).length > 0 && c("value", {
      path: [],
      value: i,
      errors: d
    });
  });
  let m;
  const _ = (v, A, F, G) => {
    if (A instanceof FileList)
      return n(3, o[v.join(".")] = A, o), n(4, s = !0), A;
    if (A === up)
      return delete o[v.join(".")], n(4, s = !0), A;
    const P = v.length === 0 ? m.value : wr(m.value, v);
    if (A === P && F !== "innerSubmit")
      return;
    let N = structuredClone(m.value);
    if (A === void 0 && v.length > 0) {
      const M = v.slice(0, -1).length ? wr(N, v.slice(0, -1)) : m.value;
      delete M[v[v.length - 1]];
    } else
      v.length === 0 ? N = A : sa(N, v, A);
    g(N);
    const U = c(
      "value",
      {
        path: v,
        pathValue: A,
        value: N,
        errors: d,
        op: F,
        subpath: G
      },
      { cancelable: !0 }
    );
    return console.log(`dispatch value path: ${v.join(".")} val: ${JSON.stringify(A)},${F ? " op: " + F : ""} errors: ${JSON.stringify(d)}, succeeded: ${U}`), U ? (n(2, m.value = N, m), n(1, i = m.value), n(4, s = !0)) : g(i), A;
  };
  function b(v) {
    r = v, n(0, r);
  }
  return e.$$set = (v) => {
    "schema" in v && n(0, r = v.schema), "value" in v && n(1, i = v.value), "uploadFiles" in v && n(3, o = v.uploadFiles), "dirty" in v && n(4, s = v.dirty), "showErrors" in v && n(5, a = v.showErrors), "collapsible" in v && n(6, l = v.collapsible), "components" in v && n(7, u = v.components), "componentContext" in v && n(8, f = v.componentContext);
  }, e.$$.update = () => {
    e.$$.dirty & /*value, uploadFiles, components, componentContext, validationErrors, schema, showErrors, collapsible*/
    1003 && n(2, m = {
      value: i,
      files: o,
      path: [],
      components: Object.assign(
        {
          string: Wn,
          password: Wn,
          email: Wn,
          time: Wn,
          "date-time": Wn,
          date: Wn,
          "string-ipv4": Wn,
          number: Ou,
          integer: Ou,
          boolean: PE,
          fieldWrapper: S9,
          object: j9,
          array: EE,
          enum: tE,
          upload: DE,
          textarea: qE,
          hidden: rk,
          blocks: JE,
          autocomplete: ek,
          "list-detail": fk,
          currency: mk,
          radio: yk
        },
        u
      ),
      componentContext: f,
      pathChanged: _,
      validationErrors: d,
      containerParent: "none",
      containerReadOnly: r.readOnly || !1,
      showErrors: a,
      collapsible: l,
      idx: m9()
    });
  }, [
    r,
    i,
    m,
    o,
    s,
    a,
    l,
    u,
    f,
    d,
    b
  ];
}
class $k extends Ne {
  constructor(t) {
    super(), Me(this, t, wk, bk, Ce, {
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
  set schema(t) {
    this.$$set({ schema: t }), ze();
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(t) {
    this.$$set({ value: t }), ze();
  }
  get uploadFiles() {
    return this.$$.ctx[3];
  }
  set uploadFiles(t) {
    this.$$set({ uploadFiles: t }), ze();
  }
  get dirty() {
    return this.$$.ctx[4];
  }
  set dirty(t) {
    this.$$set({ dirty: t }), ze();
  }
  get showErrors() {
    return this.$$.ctx[5];
  }
  set showErrors(t) {
    this.$$set({ showErrors: t }), ze();
  }
  get collapsible() {
    return this.$$.ctx[6];
  }
  set collapsible(t) {
    this.$$set({ collapsible: t }), ze();
  }
  get components() {
    return this.$$.ctx[7];
  }
  set components(t) {
    this.$$set({ components: t }), ze();
  }
  get componentContext() {
    return this.$$.ctx[8];
  }
  set componentContext(t) {
    this.$$set({ componentContext: t }), ze();
  }
}
const dr = [];
function Ak(e, t = ne) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (Ce(e, a) && (e = a, n)) {
      const l = !dr.length;
      for (const u of r)
        u[1](), dr.push(u, e);
      if (l) {
        for (let u = 0; u < dr.length; u += 2)
          dr[u][0](dr[u + 1]);
        dr.length = 0;
      }
    }
  }
  function o(a) {
    i(a(e));
  }
  function s(a, l = ne) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(i, o) || ne), a(e), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function Ok(e) {
  let t, n, r, i, o, s, a, l, u, f, c, d, g;
  function m(A) {
    e[16](A);
  }
  function _(A) {
    e[17](A);
  }
  function b(A) {
    e[18](A);
  }
  let v = {
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
    e[0] !== void 0 && (v.schema = /*schema*/
    e[0]), /*dirty*/
    e[3] !== void 0 && (v.dirty = /*dirty*/
    e[3]), /*uploadFiles*/
    e[2] !== void 0 && (v.uploadFiles = /*uploadFiles*/
    e[2]), n = new $k({ props: v }), rt.push(() => Ut(n, "schema", m)), rt.push(() => Ut(n, "dirty", _)), rt.push(() => Ut(n, "uploadFiles", b)), n.$on(
      "value",
      /*change*/
      e[11]
    ), {
      c() {
        t = I("form"), ve(n.$$.fragment), s = x(), a = I("div"), l = I("button"), u = lt(
          /*submitText*/
          e[8]
        ), h(l, "type", f = /*action*/
        e[5] ? "submit" : "button"), h(l, "class", "submit-button svelte-kto82o"), We(
          l,
          "dirty",
          /*dirty*/
          e[3]
        ), h(a, "class", "text-center"), h(
          t,
          "action",
          /*action*/
          e[5]
        ), We(
          t,
          "dirty",
          /*dirty*/
          e[3]
        );
      },
      m(A, F) {
        k(A, t, F), ge(n, t, null), D(t, s), D(t, a), D(a, l), D(l, u), c = !0, d || (g = Y(
          l,
          "click",
          /*submit*/
          e[12]
        ), d = !0);
      },
      p(A, [F]) {
        const G = {};
        F & /*value*/
        2 && (G.value = /*value*/
        A[1]), F & /*showErrors*/
        512 && (G.showErrors = /*showErrors*/
        A[9]), F & /*components*/
        64 && (G.components = /*components*/
        A[6]), F & /*collapsible*/
        128 && (G.collapsible = /*collapsible*/
        A[7]), F & /*componentContext*/
        16 && (G.componentContext = /*componentContext*/
        A[4]), !r && F & /*schema*/
        1 && (r = !0, G.schema = /*schema*/
        A[0], an(() => r = !1)), !i && F & /*dirty*/
        8 && (i = !0, G.dirty = /*dirty*/
        A[3], an(() => i = !1)), !o && F & /*uploadFiles*/
        4 && (o = !0, G.uploadFiles = /*uploadFiles*/
        A[2], an(() => o = !1)), n.$set(G), (!c || F & /*submitText*/
        256) && bt(
          u,
          /*submitText*/
          A[8]
        ), (!c || F & /*action*/
        32 && f !== (f = /*action*/
        A[5] ? "submit" : "button")) && h(l, "type", f), (!c || F & /*dirty*/
        8) && We(
          l,
          "dirty",
          /*dirty*/
          A[3]
        ), (!c || F & /*action*/
        32) && h(
          t,
          "action",
          /*action*/
          A[5]
        ), (!c || F & /*dirty*/
        8) && We(
          t,
          "dirty",
          /*dirty*/
          A[3]
        );
      },
      i(A) {
        c || (L(n.$$.fragment, A), c = !0);
      },
      o(A) {
        W(n.$$.fragment, A), c = !1;
      },
      d(A) {
        A && E(t), _e(n), d = !1, g();
      }
    }
  );
}
function Rk(e, t, n) {
  let r, { schema: i } = t, { value: o } = t, { uploadFiles: s = {} } = t, { uploadBaseUrl: a = "" } = t, { uploadNamePattern: l = "" } = t, { dirty: u = !1 } = t, { action: f = "" } = t, { components: c = {} } = t, { collapsible: d = !1 } = t, { submitText: g = "Submit" } = t, { submitRequiresDirty: m = !0 } = t, { componentContext: _ = {} } = t;
  const b = df();
  let v = Ak({});
  ff(e, v, (R) => n(20, r = R)), Hp(fp, v);
  let A = {}, F = !1;
  const G = (R) => {
    A = R.detail.errors, b("value", R.detail, { cancelable: !0 }) ? n(1, o = R.detail.value) : R.preventDefault();
  }, P = (R, Q, et) => {
    let pe;
    et === -1 ? (delete (r[R] || {})[Q], pe = { ...r[R] }) : pe = {
      ...r[R] || {},
      [Q]: et
    }, Bp(v, r = { ...r, [R]: pe }, r);
  }, N = async (R = "") => {
    if (Object.keys(s).length > 0 && a) {
      const Q = l || i.pathPattern;
      if (!Q) {
        alert("No uploadNamePattern given or pathPattern property on schema to determine file save url base");
        return;
      }
      const et = g9(Q, o), pe = Object.entries(s).filter(([z]) => z.startsWith(R)).flatMap(([z, J]) => {
        const ue = [];
        for (let ot = 0; ot < J.length; ot++) {
          const Ze = J[ot], tt = a + (a.endsWith("/") ? "" : "/") + et + "/" + z + "/" + Ze.name;
          console.log(`Uploading to ${tt}`);
          const xn = new Promise((nn, H) => {
            try {
              const Pe = new XMLHttpRequest();
              Pe.upload.onprogress = (rn) => P(z, Ze.name, rn.loaded / rn.total * 100), Pe.upload.onloadend = (rn) => {
                P(z, Ze.name, Pe.status === 200 || Pe.status === 0 ? -1 : -Pe.status), nn([z, tt]);
              }, Pe.withCredentials = !0, Pe.open("PUT", tt), Pe.send(Ze);
            } catch (Pe) {
              H(Pe);
            }
          }).then(([nn, H]) => {
            nn === "" ? n(1, o = H) : sa(o, nn.split("."), H), n(1, o), delete s[nn];
          });
          ue.push(xn);
        }
        return ue;
      });
      await Promise.all(pe);
    }
  }, U = async () => {
    (u || !m) && Object.keys(A).length === 0 && (await N(), b("submit", { value: o }), n(3, u = !1)), n(9, F = !0);
  };
  _.doUploads = N;
  function K(R) {
    i = R, n(0, i);
  }
  function M(R) {
    u = R, n(3, u);
  }
  function ie(R) {
    s = R, n(2, s);
  }
  return e.$$set = (R) => {
    "schema" in R && n(0, i = R.schema), "value" in R && n(1, o = R.value), "uploadFiles" in R && n(2, s = R.uploadFiles), "uploadBaseUrl" in R && n(13, a = R.uploadBaseUrl), "uploadNamePattern" in R && n(14, l = R.uploadNamePattern), "dirty" in R && n(3, u = R.dirty), "action" in R && n(5, f = R.action), "components" in R && n(6, c = R.components), "collapsible" in R && n(7, d = R.collapsible), "submitText" in R && n(8, g = R.submitText), "submitRequiresDirty" in R && n(15, m = R.submitRequiresDirty), "componentContext" in R && n(4, _ = R.componentContext);
  }, [
    i,
    o,
    s,
    u,
    _,
    f,
    c,
    d,
    g,
    F,
    v,
    G,
    U,
    a,
    l,
    m,
    K,
    M,
    ie
  ];
}
class Ik extends Ne {
  constructor(t) {
    super(), Me(this, t, Rk, Ok, Ce, {
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
  set schema(t) {
    this.$$set({ schema: t }), ze();
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(t) {
    this.$$set({ value: t }), ze();
  }
  get uploadFiles() {
    return this.$$.ctx[2];
  }
  set uploadFiles(t) {
    this.$$set({ uploadFiles: t }), ze();
  }
  get uploadBaseUrl() {
    return this.$$.ctx[13];
  }
  set uploadBaseUrl(t) {
    this.$$set({ uploadBaseUrl: t }), ze();
  }
  get uploadNamePattern() {
    return this.$$.ctx[14];
  }
  set uploadNamePattern(t) {
    this.$$set({ uploadNamePattern: t }), ze();
  }
  get dirty() {
    return this.$$.ctx[3];
  }
  set dirty(t) {
    this.$$set({ dirty: t }), ze();
  }
  get action() {
    return this.$$.ctx[5];
  }
  set action(t) {
    this.$$set({ action: t }), ze();
  }
  get components() {
    return this.$$.ctx[6];
  }
  set components(t) {
    this.$$set({ components: t }), ze();
  }
  get collapsible() {
    return this.$$.ctx[7];
  }
  set collapsible(t) {
    this.$$set({ collapsible: t }), ze();
  }
  get submitText() {
    return this.$$.ctx[8];
  }
  set submitText(t) {
    this.$$set({ submitText: t }), ze();
  }
  get submitRequiresDirty() {
    return this.$$.ctx[15];
  }
  set submitRequiresDirty(t) {
    this.$$set({ submitRequiresDirty: t }), ze();
  }
  get componentContext() {
    return this.$$.ctx[4];
  }
  set componentContext(t) {
    this.$$set({ componentContext: t }), ze();
  }
}
export {
  $k as SchemaForm,
  Ik as SubmitForm
};
