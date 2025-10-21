(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.14 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:border-1{border-style:var(--tw-border-style);border-width:1px}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media(min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media(prefers-color-scheme:dark){.tw\\:dark\\:border-white{border-color:var(--tw-color-white)}.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_pb0r4_1,._controlPanel_pb0r4_8{display:block;line-height:0;box-sizing:border-box}._displayPanel_pb0r4_1>canvas,._displayPanel_pb0r4_1>svg,._controlPanel_pb0r4_8>svg,._controlPanel_pb0r4_8>canvas{display:block;box-sizing:border-box}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const ul = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: "tw:border-1 tw-border-black tw:dark:border-white tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function yn(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ll(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ha(t) {
  let e, n, r;
  t.length !== 2 ? (e = yn, n = (s, l) => yn(t(s), l), r = (s, l) => t(s) - l) : (e = t === yn || t === ll ? t : cl, n = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (e(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        n(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (e(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        n(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function cl() {
  return 0;
}
function fl(t) {
  return t === null ? NaN : +t;
}
const hl = Ha(yn), pl = hl.right;
Ha(fl).center;
class Ji extends Map {
  constructor(e, n = yl) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null) for (const [r, i] of e) this.set(r, i);
  }
  get(e) {
    return super.get(Qi(this, e));
  }
  has(e) {
    return super.has(Qi(this, e));
  }
  set(e, n) {
    return super.set(dl(this, e), n);
  }
  delete(e) {
    return super.delete(gl(this, e));
  }
}
function Qi({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function dl({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function gl({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function yl(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const _l = Math.sqrt(50), vl = Math.sqrt(10), ml = Math.sqrt(2);
function An(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= _l ? 10 : o >= vl ? 5 : o >= ml ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(e * u), s / u < t && ++s, l / u > e && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(e / u), s * u < t && ++s, l * u > e && --l), l < s && 0.5 <= n && n < 2 ? An(t, e, n * 2) : [s, l, u];
}
function wl(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, o, a] = r ? An(e, t, n) : An(t, e, n);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function zr(t, e, n) {
  return e = +e, t = +t, n = +n, An(t, e, n)[2];
}
function bl(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? zr(e, t, n) : zr(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var xl = { value: () => {
} };
function Xa() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new _n(n);
}
function _n(t) {
  this._ = t;
}
function Ml(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
_n.prototype = Xa.prototype = {
  constructor: _n,
  on: function(t, e) {
    var n = this._, r = Ml(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Al(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = to(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = to(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new _n(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
  }
};
function Al(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function to(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = xl, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Cr = "http://www.w3.org/1999/xhtml";
const eo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Cr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Kn(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), eo.hasOwnProperty(e) ? { space: eo[e], local: t } : t;
}
function $l(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Cr && e.documentElement.namespaceURI === Cr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Pl(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ua(t) {
  var e = Kn(t);
  return (e.local ? Pl : $l)(e);
}
function Nl() {
}
function hi(t) {
  return t == null ? Nl : function() {
    return this.querySelector(t);
  };
}
function Sl(t) {
  typeof t != "function" && (t = hi(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = o[c]) && (u = t.call(l, l.__data__, c, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new q(r, this._parents);
}
function Tl(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function kl() {
  return [];
}
function Ga(t) {
  return t == null ? kl : function() {
    return this.querySelectorAll(t);
  };
}
function El(t) {
  return function() {
    return Tl(t.apply(this, arguments));
  };
}
function Ol(t) {
  typeof t == "function" ? t = El(t) : t = Ga(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new q(r, i);
}
function Ya(t) {
  return function() {
    return this.matches(t);
  };
}
function Va(t) {
  return function(e) {
    return e.matches(t);
  };
}
var zl = Array.prototype.find;
function Cl(t) {
  return function() {
    return zl.call(this.children, t);
  };
}
function Il() {
  return this.firstElementChild;
}
function Rl(t) {
  return this.select(t == null ? Il : Cl(typeof t == "function" ? t : Va(t)));
}
var jl = Array.prototype.filter;
function Fl() {
  return Array.from(this.children);
}
function Ll(t) {
  return function() {
    return jl.call(this.children, t);
  };
}
function Dl(t) {
  return this.selectAll(t == null ? Fl : Ll(typeof t == "function" ? t : Va(t)));
}
function ql(t) {
  typeof t != "function" && (t = Ya(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new q(r, this._parents);
}
function Ka(t) {
  return new Array(t.length);
}
function Bl() {
  return new q(this._enter || this._groups.map(Ka), this._parents);
}
function $n(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
$n.prototype = {
  constructor: $n,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Hl(t) {
  return function() {
    return t;
  };
}
function Xl(t, e, n, r, i, o) {
  for (var a = 0, s, l = e.length, u = o.length; a < u; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new $n(t, o[a]);
  for (; a < l; ++a)
    (s = e[a]) && (i[a] = s);
}
function Ul(t, e, n, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = e.length, h = o.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = e[s]) && (f[s] = p = a.call(l, l.__data__, s, e) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = a.call(t, o[s], s, o) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = o[s], u.delete(p)) : n[s] = new $n(t, o[s]);
  for (s = 0; s < c; ++s)
    (l = e[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Gl(t) {
  return t.__data__;
}
function Yl(t, e) {
  if (!arguments.length) return Array.from(this, Gl);
  var n = e ? Ul : Xl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Hl(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Vl(t.call(c, c && c.__data__, u, r)), g = p.length, _ = s[u] = new Array(g), w = a[u] = new Array(g), x = l[u] = new Array(f);
    n(c, h, _, w, x, p, e);
    for (var d = 0, A = 0, y, m; d < g; ++d)
      if (y = _[d]) {
        for (d >= A && (A = d + 1); !(m = w[A]) && ++A < g; ) ;
        y._next = m || null;
      }
  }
  return a = new q(a, r), a._enter = s, a._exit = l, a;
}
function Vl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Kl() {
  return new q(this._exit || this._groups.map(Ka), this._parents);
}
function Wl(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Zl(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, g = 0; g < h; ++g)
      (p = u[g] || c[g]) && (f[g] = p);
  for (; l < i; ++l)
    s[l] = n[l];
  return new q(s, this._parents);
}
function Jl() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Ql(t) {
  t || (t = tc);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, l = i[o] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(e);
  }
  return new q(i, this._parents).order();
}
function tc(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ec() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function nc() {
  return Array.from(this);
}
function rc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function ic() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function oc() {
  return !this.node();
}
function ac(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function sc(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function uc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function lc(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function cc(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function fc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function hc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function pc(t, e) {
  var n = Kn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? uc : sc : typeof e == "function" ? n.local ? hc : fc : n.local ? cc : lc)(n, e));
}
function Wa(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function dc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function gc(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function yc(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function _c(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? dc : typeof e == "function" ? yc : gc)(t, e, n ?? "")) : te(this.node(), t);
}
function te(t, e) {
  return t.style.getPropertyValue(e) || Wa(t).getComputedStyle(t, null).getPropertyValue(e);
}
function vc(t) {
  return function() {
    delete this[t];
  };
}
function mc(t, e) {
  return function() {
    this[t] = e;
  };
}
function wc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function bc(t, e) {
  return arguments.length > 1 ? this.each((e == null ? vc : typeof e == "function" ? wc : mc)(t, e)) : this.node()[t];
}
function Za(t) {
  return t.trim().split(/^|\s+/);
}
function pi(t) {
  return t.classList || new Ja(t);
}
function Ja(t) {
  this._node = t, this._names = Za(t.getAttribute("class") || "");
}
Ja.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Qa(t, e) {
  for (var n = pi(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function ts(t, e) {
  for (var n = pi(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function xc(t) {
  return function() {
    Qa(this, t);
  };
}
function Mc(t) {
  return function() {
    ts(this, t);
  };
}
function Ac(t, e) {
  return function() {
    (e.apply(this, arguments) ? Qa : ts)(this, t);
  };
}
function $c(t, e) {
  var n = Za(t + "");
  if (arguments.length < 2) {
    for (var r = pi(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Ac : e ? xc : Mc)(n, e));
}
function Pc() {
  this.textContent = "";
}
function Nc(t) {
  return function() {
    this.textContent = t;
  };
}
function Sc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Tc(t) {
  return arguments.length ? this.each(t == null ? Pc : (typeof t == "function" ? Sc : Nc)(t)) : this.node().textContent;
}
function kc() {
  this.innerHTML = "";
}
function Ec(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Oc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function zc(t) {
  return arguments.length ? this.each(t == null ? kc : (typeof t == "function" ? Oc : Ec)(t)) : this.node().innerHTML;
}
function Cc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ic() {
  return this.each(Cc);
}
function Rc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function jc() {
  return this.each(Rc);
}
function Fc(t) {
  var e = typeof t == "function" ? t : Ua(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Lc() {
  return null;
}
function Dc(t, e) {
  var n = typeof t == "function" ? t : Ua(t), r = e == null ? Lc : typeof e == "function" ? e : hi(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function qc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Bc() {
  return this.each(qc);
}
function Hc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Xc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Uc(t) {
  return this.select(t ? Xc : Hc);
}
function Gc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Yc(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Vc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Kc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Wc(t, e, n) {
  return function() {
    var r = this.__on, i, o = Yc(e);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Zc(t, e, n) {
  var r = Vc(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = e ? Wc : Kc, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function es(t, e, n) {
  var r = Wa(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Jc(t, e) {
  return function() {
    return es(this, t, e);
  };
}
function Qc(t, e) {
  return function() {
    return es(this, t, e.apply(this, arguments));
  };
}
function tf(t, e) {
  return this.each((typeof e == "function" ? Qc : Jc)(t, e));
}
function* ef() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ns = [null];
function q(t, e) {
  this._groups = t, this._parents = e;
}
function Ue() {
  return new q([[document.documentElement]], ns);
}
function nf() {
  return this;
}
q.prototype = Ue.prototype = {
  constructor: q,
  select: Sl,
  selectAll: Ol,
  selectChild: Rl,
  selectChildren: Dl,
  filter: ql,
  data: Yl,
  enter: Bl,
  exit: Kl,
  join: Wl,
  merge: Zl,
  selection: nf,
  order: Jl,
  sort: Ql,
  call: ec,
  nodes: nc,
  node: rc,
  size: ic,
  empty: oc,
  each: ac,
  attr: pc,
  style: _c,
  property: bc,
  classed: $c,
  text: Tc,
  html: zc,
  raise: Ic,
  lower: jc,
  append: Fc,
  insert: Dc,
  remove: Bc,
  clone: Uc,
  datum: Gc,
  on: Zc,
  dispatch: tf,
  [Symbol.iterator]: ef
};
function rf(t) {
  return typeof t == "string" ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], ns);
}
function di(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function rs(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ge() {
}
var Se = 0.7, Pn = 1 / Se, Zt = "\\s*([+-]?\\d+)\\s*", Te = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", of = /^#([0-9a-f]{3,8})$/, af = new RegExp(`^rgb\\(${Zt},${Zt},${Zt}\\)$`), sf = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`), uf = new RegExp(`^rgba\\(${Zt},${Zt},${Zt},${Te}\\)$`), lf = new RegExp(`^rgba\\(${ot},${ot},${ot},${Te}\\)$`), cf = new RegExp(`^hsl\\(${Te},${ot},${ot}\\)$`), ff = new RegExp(`^hsla\\(${Te},${ot},${ot},${Te}\\)$`), no = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
di(Ge, Lt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ro,
  // Deprecated! Use color.formatHex.
  formatHex: ro,
  formatHex8: hf,
  formatHsl: pf,
  formatRgb: io,
  toString: io
});
function ro() {
  return this.rgb().formatHex();
}
function hf() {
  return this.rgb().formatHex8();
}
function pf() {
  return is(this).formatHsl();
}
function io() {
  return this.rgb().formatRgb();
}
function Lt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = of.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? oo(e) : n === 3 ? new j(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? en(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? en(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = af.exec(t)) ? new j(e[1], e[2], e[3], 1) : (e = sf.exec(t)) ? new j(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = uf.exec(t)) ? en(e[1], e[2], e[3], e[4]) : (e = lf.exec(t)) ? en(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = cf.exec(t)) ? uo(e[1], e[2] / 100, e[3] / 100, 1) : (e = ff.exec(t)) ? uo(e[1], e[2] / 100, e[3] / 100, e[4]) : no.hasOwnProperty(t) ? oo(no[t]) : t === "transparent" ? new j(NaN, NaN, NaN, 0) : null;
}
function oo(t) {
  return new j(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function en(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new j(t, e, n, r);
}
function df(t) {
  return t instanceof Ge || (t = Lt(t)), t ? (t = t.rgb(), new j(t.r, t.g, t.b, t.opacity)) : new j();
}
function Ir(t, e, n, r) {
  return arguments.length === 1 ? df(t) : new j(t, e, n, r ?? 1);
}
function j(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
di(j, Ir, rs(Ge, {
  brighter(t) {
    return t = t == null ? Pn : Math.pow(Pn, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Se : Math.pow(Se, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new j(Rt(this.r), Rt(this.g), Rt(this.b), Nn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ao,
  // Deprecated! Use color.formatHex.
  formatHex: ao,
  formatHex8: gf,
  formatRgb: so,
  toString: so
}));
function ao() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}`;
}
function gf() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}${Ct((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function so() {
  const t = Nn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Rt(this.r)}, ${Rt(this.g)}, ${Rt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Nn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Rt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ct(t) {
  return t = Rt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function uo(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new W(t, e, n, r);
}
function is(t) {
  if (t instanceof W) return new W(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ge || (t = Lt(t)), !t) return new W();
  if (t instanceof W) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new W(a, s, l, t.opacity);
}
function yf(t, e, n, r) {
  return arguments.length === 1 ? is(t) : new W(t, e, n, r ?? 1);
}
function W(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
di(W, yf, rs(Ge, {
  brighter(t) {
    return t = t == null ? Pn : Math.pow(Pn, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Se : Math.pow(Se, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new j(
      vr(t >= 240 ? t - 240 : t + 120, i, r),
      vr(t, i, r),
      vr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new W(lo(this.h), nn(this.s), nn(this.l), Nn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Nn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${lo(this.h)}, ${nn(this.s) * 100}%, ${nn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function lo(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function nn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function vr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const gi = (t) => () => t;
function _f(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function vf(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function mf(t) {
  return (t = +t) == 1 ? os : function(e, n) {
    return n - e ? vf(e, n, t) : gi(isNaN(e) ? n : e);
  };
}
function os(t, e) {
  var n = e - t;
  return n ? _f(t, n) : gi(isNaN(t) ? e : t);
}
const Sn = (function t(e) {
  var n = mf(e);
  function r(i, o) {
    var a = n((i = Ir(i)).r, (o = Ir(o)).r), s = n(i.g, o.g), l = n(i.b, o.b), u = os(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function wf(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function bf(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function xf(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = yi(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Mf(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function V(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Af(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = yi(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var Rr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, mr = new RegExp(Rr.source, "g");
function $f(t) {
  return function() {
    return t;
  };
}
function Pf(t) {
  return function(e) {
    return t(e) + "";
  };
}
function as(t, e) {
  var n = Rr.lastIndex = mr.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", e = e + ""; (r = Rr.exec(t)) && (i = mr.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: V(r, i) })), n = mr.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? Pf(l[0].x) : $f(e) : (e = l.length, function(u) {
    for (var c = 0, h; c < e; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function yi(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? gi(e) : (n === "number" ? V : n === "string" ? (r = Lt(e)) ? (e = r, Sn) : as : e instanceof Lt ? Sn : e instanceof Date ? Mf : bf(e) ? wf : Array.isArray(e) ? xf : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Af : V)(t, e);
}
function Nf(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var co = 180 / Math.PI, jr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ss(t, e, n, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * co,
    skewX: Math.atan(l) * co,
    scaleX: a,
    scaleY: s
  };
}
var rn;
function Sf(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? jr : ss(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Tf(t) {
  return t == null || (rn || (rn = document.createElementNS("http://www.w3.org/2000/svg", "g")), rn.setAttribute("transform", t), !(t = rn.transform.baseVal.consolidate())) ? jr : (t = t.matrix, ss(t.a, t.b, t.c, t.d, t.e, t.f));
}
function us(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, c, h, f, p, g) {
    if (u !== h || c !== f) {
      var _ = p.push("translate(", null, e, null, n);
      g.push({ i: _ - 4, x: V(u, h) }, { i: _ - 2, x: V(c, f) });
    } else (h || f) && p.push("translate(" + h + e + f + n);
  }
  function a(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: V(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: V(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, g) {
    if (u !== h || c !== f) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: _ - 4, x: V(u, h) }, { i: _ - 2, x: V(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), o(u.translateX, u.translateY, c.translateX, c.translateY, h, f), a(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var g = -1, _ = f.length, w; ++g < _; ) h[(w = f[g]).i] = w.x(p);
      return h.join("");
    };
  };
}
var kf = us(Sf, "px, ", "px)", "deg)"), Ef = us(Tf, ", ", ")", ")"), ee = 0, _e = 0, pe = 0, ls = 1e3, Tn, ve, kn = 0, Dt = 0, Wn = 0, ke = typeof performance == "object" && performance.now ? performance : Date, cs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Zn() {
  return Dt || (cs(Of), Dt = ke.now() + Wn);
}
function Of() {
  Dt = 0;
}
function Ee() {
  this._call = this._time = this._next = null;
}
Ee.prototype = fs.prototype = {
  constructor: Ee,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Zn() : +n) + (e == null ? 0 : +e), !this._next && ve !== this && (ve ? ve._next = this : Tn = this, ve = this), this._call = t, this._time = n, Fr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Fr());
  }
};
function fs(t, e, n) {
  var r = new Ee();
  return r.restart(t, e, n), r;
}
function zf() {
  Zn(), ++ee;
  for (var t = Tn, e; t; )
    (e = Dt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --ee;
}
function fo() {
  Dt = (kn = ke.now()) + Wn, ee = _e = 0;
  try {
    zf();
  } finally {
    ee = 0, If(), Dt = 0;
  }
}
function Cf() {
  var t = ke.now(), e = t - kn;
  e > ls && (Wn -= e, kn = t);
}
function If() {
  for (var t, e = Tn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Tn = n);
  ve = t, Fr(r);
}
function Fr(t) {
  if (!ee) {
    _e && (_e = clearTimeout(_e));
    var e = t - Dt;
    e > 24 ? (t < 1 / 0 && (_e = setTimeout(fo, t - ke.now() - Wn)), pe && (pe = clearInterval(pe))) : (pe || (kn = ke.now(), pe = setInterval(Cf, ls)), ee = 1, cs(fo));
  }
}
function ho(t, e, n) {
  var r = new Ee();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function Rf(t, e, n) {
  var r = new Ee(), i = e;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Zn() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += a, s), o(u);
    }, a, s);
  }, r.restart(t, e, n), r;
}
var jf = Xa("start", "end", "cancel", "interrupt"), Ff = [], hs = 0, po = 1, Lr = 2, vn = 3, go = 4, Dr = 5, mn = 6;
function Jn(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Lf(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: jf,
    tween: Ff,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: hs
  });
}
function _i(t, e) {
  var n = tt(t, e);
  if (n.state > hs) throw new Error("too late; already scheduled");
  return n;
}
function ut(t, e) {
  var n = tt(t, e);
  if (n.state > vn) throw new Error("too late; already running");
  return n;
}
function tt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Lf(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = fs(o, 0, n.time);
  function o(u) {
    n.state = po, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, h, f, p;
    if (n.state !== po) return l();
    for (c in r)
      if (p = r[c], p.name === n.name) {
        if (p.state === vn) return ho(a);
        p.state === go ? (p.state = mn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < e && (p.state = mn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (ho(function() {
      n.state === vn && (n.state = go, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Lr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Lr) {
      for (n.state = vn, i = new Array(f = n.tween.length), c = 0, h = -1; c < f; ++c)
        (p = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Dr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    n.state === Dr && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = mn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Df(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > Lr && r.state < Dr, r.state = mn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function qf(t) {
  return this.each(function() {
    Df(this, t);
  });
}
function Bf(t, e) {
  var n, r;
  return function() {
    var i = ut(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Hf(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = ut(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: e, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === e) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function Xf(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = tt(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Bf : Hf)(n, t, e));
}
function vi(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = ut(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return tt(i, r).value[e];
  };
}
function ps(t, e) {
  var n;
  return (typeof e == "number" ? V : e instanceof Lt ? Sn : (n = Lt(e)) ? (e = n, Sn) : as)(t, e);
}
function Uf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Gf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Yf(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Vf(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Kf(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = e(r = a, s)));
  };
}
function Wf(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = e(r = a, s)));
  };
}
function Zf(t, e) {
  var n = Kn(t), r = n === "transform" ? Ef : ps;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Wf : Kf)(n, r, vi(this, "attr." + t, e)) : e == null ? (n.local ? Gf : Uf)(n) : (n.local ? Vf : Yf)(n, r, e));
}
function Jf(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Qf(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function th(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Qf(t, o)), n;
  }
  return i._value = e, i;
}
function eh(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Jf(t, o)), n;
  }
  return i._value = e, i;
}
function nh(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Kn(t);
  return this.tween(n, (r.local ? th : eh)(r, e));
}
function rh(t, e) {
  return function() {
    _i(this, t).delay = +e.apply(this, arguments);
  };
}
function ih(t, e) {
  return e = +e, function() {
    _i(this, t).delay = e;
  };
}
function oh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rh : ih)(e, t)) : tt(this.node(), e).delay;
}
function ah(t, e) {
  return function() {
    ut(this, t).duration = +e.apply(this, arguments);
  };
}
function sh(t, e) {
  return e = +e, function() {
    ut(this, t).duration = e;
  };
}
function uh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ah : sh)(e, t)) : tt(this.node(), e).duration;
}
function lh(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    ut(this, t).ease = e;
  };
}
function ch(t) {
  var e = this._id;
  return arguments.length ? this.each(lh(e, t)) : tt(this.node(), e).ease;
}
function fh(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ut(this, t).ease = n;
  };
}
function hh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(fh(this._id, t));
}
function ph(t) {
  typeof t != "function" && (t = Ya(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new gt(r, this._parents, this._name, this._id);
}
function dh(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = e[s], u = n[s], c = l.length, h = a[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    a[s] = e[s];
  return new gt(a, this._parents, this._name, this._id);
}
function gh(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function yh(t, e, n) {
  var r, i, o = gh(e) ? _i : ut;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function _h(t, e) {
  var n = this._id;
  return arguments.length < 2 ? tt(this.node(), n).on.on(t) : this.each(yh(n, t, e));
}
function vh(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function mh() {
  return this.on("end.remove", vh(this._id));
}
function wh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = hi(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Jn(u[f], e, n, f, u, tt(c, n)));
  return new gt(o, this._parents, e, n);
}
function bh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ga(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, g = tt(c, n), _ = 0, w = f.length; _ < w; ++_)
          (p = f[_]) && Jn(p, e, n, _, f, g);
        o.push(f), a.push(c);
      }
  return new gt(o, a, e, n);
}
var xh = Ue.prototype.constructor;
function Mh() {
  return new xh(this._groups, this._parents);
}
function Ah(t, e) {
  var n, r, i;
  return function() {
    var o = te(this, t), a = (this.style.removeProperty(t), te(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function ds(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function $h(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = te(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Ph(t, e, n) {
  var r, i, o;
  return function() {
    var a = te(this, t), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), te(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = e(r = a, s));
  };
}
function Nh(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var l = ut(this, t), u = l.on, c = l.value[o] == null ? s || (s = ds(e)) : void 0;
    (u !== n || i !== c) && (r = (n = u).copy()).on(a, i = c), l.on = r;
  };
}
function Sh(t, e, n) {
  var r = (t += "") == "transform" ? kf : ps;
  return e == null ? this.styleTween(t, Ah(t, r)).on("end.style." + t, ds(t)) : typeof e == "function" ? this.styleTween(t, Ph(t, r, vi(this, "style." + t, e))).each(Nh(this._id, t)) : this.styleTween(t, $h(t, r, e), n).on("end.style." + t, null);
}
function Th(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function kh(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Th(t, a, n)), r;
  }
  return o._value = e, o;
}
function Eh(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, kh(t, e, n ?? ""));
}
function Oh(t) {
  return function() {
    this.textContent = t;
  };
}
function zh(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Ch(t) {
  return this.tween("text", typeof t == "function" ? zh(vi(this, "text", t)) : Oh(t == null ? "" : t + ""));
}
function Ih(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Rh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Ih(i)), e;
  }
  return r._value = t, r;
}
function jh(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Rh(t));
}
function Fh() {
  for (var t = this._name, e = this._id, n = gs(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = tt(l, e);
        Jn(l, t, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new gt(r, this._parents, t, n);
}
function Lh() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var u = ut(this, r), c = u.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), u.on = e;
    }), i === 0 && o();
  });
}
var Dh = 0;
function gt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function gs() {
  return ++Dh;
}
var ct = Ue.prototype;
gt.prototype = {
  constructor: gt,
  select: wh,
  selectAll: bh,
  selectChild: ct.selectChild,
  selectChildren: ct.selectChildren,
  filter: ph,
  merge: dh,
  selection: Mh,
  transition: Fh,
  call: ct.call,
  nodes: ct.nodes,
  node: ct.node,
  size: ct.size,
  empty: ct.empty,
  each: ct.each,
  on: _h,
  attr: Zf,
  attrTween: nh,
  style: Sh,
  styleTween: Eh,
  text: Ch,
  textTween: jh,
  remove: mh,
  tween: Xf,
  delay: oh,
  duration: uh,
  ease: ch,
  easeVarying: hh,
  end: Lh,
  [Symbol.iterator]: ct[Symbol.iterator]
};
function qh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Bh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: qh
};
function Hh(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Xh(t) {
  var e, n;
  t instanceof gt ? (e = t._id, t = t._name) : (e = gs(), (n = Bh).time = Zn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Jn(l, t, e, u, a, n || Hh(l, e));
  return new gt(r, this._parents, t, e);
}
Ue.prototype.interrupt = qf;
Ue.prototype.transition = Xh;
function Uh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function En(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function ne(t) {
  return t = En(Math.abs(t)), t ? t[1] : NaN;
}
function Gh(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(n.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function Yh(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Vh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function On(t) {
  if (!(e = Vh.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new mi({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
On.prototype = mi.prototype;
function mi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
mi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Kh(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var ys;
function Wh(t, e) {
  var n = En(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], o = i - (ys = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + En(t, Math.max(0, e + o - 1))[0];
}
function yo(t, e) {
  var n = En(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const _o = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Uh,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => yo(t * 100, e),
  r: yo,
  s: Wh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function vo(t) {
  return t;
}
var mo = Array.prototype.map, wo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Zh(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? vo : Gh(mo.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? vo : Yh(mo.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = On(h);
    var f = h.fill, p = h.align, g = h.sign, _ = h.symbol, w = h.zero, x = h.width, d = h.comma, A = h.precision, y = h.trim, m = h.type;
    m === "n" ? (d = !0, m = "g") : _o[m] || (A === void 0 && (A = 12), y = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var S = _ === "$" ? n : _ === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", T = _ === "$" ? r : /[%p]/.test(m) ? a : "", E = _o[m], X = /[defgprs%]/.test(m);
    A = A === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function U(v) {
      var O = S, $ = T, z, Et, L;
      if (m === "c")
        $ = E(v) + $, v = "";
      else {
        v = +v;
        var G = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : E(Math.abs(v), A), y && (v = Kh(v)), G && +v == 0 && g !== "+" && (G = !1), O = (G ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + O, $ = (m === "s" ? wo[8 + ys / 3] : "") + $ + (G && g === "(" ? ")" : ""), X) {
          for (z = -1, Et = v.length; ++z < Et; )
            if (L = v.charCodeAt(z), 48 > L || L > 57) {
              $ = (L === 46 ? i + v.slice(z + 1) : v.slice(z)) + $, v = v.slice(0, z);
              break;
            }
        }
      }
      d && !w && (v = e(v, 1 / 0));
      var Y = O.length + v.length + $.length, k = Y < x ? new Array(x - Y + 1).join(f) : "";
      switch (d && w && (v = e(k + v, k.length ? x - $.length : 1 / 0), k = ""), p) {
        case "<":
          v = O + v + $ + k;
          break;
        case "=":
          v = O + k + v + $;
          break;
        case "^":
          v = k.slice(0, Y = k.length >> 1) + O + v + $ + k.slice(Y);
          break;
        default:
          v = k + O + v + $;
          break;
      }
      return o(v);
    }
    return U.toString = function() {
      return h + "";
    }, U;
  }
  function c(h, f) {
    var p = u((h = On(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(ne(f) / 3))) * 3, _ = Math.pow(10, -g), w = wo[8 + g / 3];
    return function(x) {
      return p(_ * x) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var on, _s, vs;
Jh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Jh(t) {
  return on = Zh(t), _s = on.format, vs = on.formatPrefix, on;
}
function Qh(t) {
  return Math.max(0, -ne(Math.abs(t)));
}
function tp(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ne(e) / 3))) * 3 - ne(Math.abs(t)));
}
function ep(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, ne(e) - ne(t)) + 1;
}
function wi(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
const bo = Symbol("implicit");
function bi() {
  var t = new Ji(), e = [], n = [], r = bo;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== bo) return r;
      t.set(o, a = e.push(o) - 1);
    }
    return n[a % n.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [], t = new Ji();
    for (const a of o)
      t.has(a) || t.set(a, e.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (n = Array.from(o), i) : n.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return bi(e, n).unknown(r);
  }, wi.apply(i, arguments), i;
}
function np(t) {
  return function() {
    return t;
  };
}
function rp(t) {
  return +t;
}
var xo = [0, 1];
function rt(t) {
  return t;
}
function qr(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : np(isNaN(e) ? NaN : 0.5);
}
function ip(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function op(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = qr(i, r), o = n(a, o)) : (r = qr(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function ap(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = qr(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var l = pl(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function ms(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ws() {
  var t = xo, e = xo, n = yi, r, i, o, a = rt, s, l, u;
  function c() {
    var f = Math.min(t.length, e.length);
    return a !== rt && (a = ip(t[0], t[f - 1])), s = f > 2 ? ap : op, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (l || (l = s(t.map(r), e, n)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = s(e, t.map(r), V)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, rp), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), c()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = Nf, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : rt, c()) : a !== rt;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, c()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function sp() {
  return ws()(rt, rt);
}
function up(t, e, n, r) {
  var i = bl(t, e, n), o;
  switch (r = On(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = tp(i, a)) && (r.precision = o), vs(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = ep(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Qh(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return _s(r);
}
function bs(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return wl(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return up(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, c = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); c-- > 0; ) {
      if (u = zr(a, s, n), u === l)
        return r[i] = a, r[o] = s, e(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function Ye() {
  var t = sp();
  return t.copy = function() {
    return ms(t, Ye());
  }, wi.apply(t, arguments), bs(t);
}
function Mo(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function lp(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function cp(t) {
  return t < 0 ? -t * t : t * t;
}
function fp(t) {
  var e = t(rt, rt), n = 1;
  function r() {
    return n === 1 ? t(rt, rt) : n === 0.5 ? t(lp, cp) : t(Mo(n), Mo(1 / n));
  }
  return e.exponent = function(i) {
    return arguments.length ? (n = +i, r()) : n;
  }, bs(e);
}
function xs() {
  var t = fp(ws());
  return t.copy = function() {
    return ms(t, xs()).exponent(t.exponent());
  }, wi.apply(t, arguments), t;
}
function hp() {
  return xs.apply(null, arguments).exponent(0.5);
}
function me(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
me.prototype = {
  constructor: me,
  scale: function(t) {
    return t === 1 ? this : new me(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new me(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
me.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;--dw-font-size: 16px;--dw-line-height: 1.25;font-size:var(--dw-font-size);line-height:var(--dw-line-height);font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_9wct0_49{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_9wct0_49 ._title_9wct0_61{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_9wct0_49 ._label_9wct0_69{fill:var(--color-text);stroke:none}._widget_9wct0_49 ._lit_9wct0_74{fill:var(--color-lit)}._button_9wct0_78>._symbol_9wct0_78,._radio_9wct0_79>._radiobutton_9wct0_79>._symbol_9wct0_78{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85,._toggle_9wct0_86._selected_9wct0_85,._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85._lit_9wct0_74{fill:var(--color-selected)}._widget_9wct0_49 ._symbol_9wct0_78._lit_9wct0_74{fill:var(--color-lit-symbol)}._slider_9wct0_95>._track_9wct0_95,._toggle_9wct0_86>._track_9wct0_95{pointer-events:none}._slider_9wct0_95>._track_overlay_9wct0_100,._toggle_9wct0_86>._track_overlay_9wct0_100{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_9wct0_95>._handle_9wct0_108,._toggle_9wct0_86>._handle_9wct0_108{fill:var(--color-handle)}")), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function wn(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function pp(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ms(t) {
  let e, n, r;
  t.length !== 2 ? (e = wn, n = (s, l) => wn(t(s), l), r = (s, l) => t(s) - l) : (e = t === wn || t === pp ? t : dp, n = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (e(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        n(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (e(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        n(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function dp() {
  return 0;
}
function gp(t) {
  return t === null ? NaN : +t;
}
const yp = Ms(wn), _p = yp.right;
Ms(gp).center;
const vp = Math.sqrt(50), mp = Math.sqrt(10), wp = Math.sqrt(2);
function zn(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= vp ? 10 : o >= mp ? 5 : o >= wp ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(e * u), s / u < t && ++s, l / u > e && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(e / u), s * u < t && ++s, l * u > e && --l), l < s && 0.5 <= n && n < 2 ? zn(t, e, n * 2) : [s, l, u];
}
function bp(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, o, a] = r ? zn(e, t, n) : zn(t, e, n);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function Br(t, e, n) {
  return e = +e, t = +t, n = +n, zn(t, e, n)[2];
}
function xp(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Br(e, t, n) : Br(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function an(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function Mp(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
var Ap = { value: () => {
} };
function xi() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new bn(n);
}
function bn(t) {
  this._ = t;
}
function $p(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
bn.prototype = xi.prototype = {
  constructor: bn,
  on: function(t, e) {
    var n = this._, r = $p(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Pp(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = Ao(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Ao(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new bn(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
  }
};
function Pp(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Ao(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Ap, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Hr = "http://www.w3.org/1999/xhtml";
const $o = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Hr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Qn(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), $o.hasOwnProperty(e) ? { space: $o[e], local: t } : t;
}
function Np(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Hr && e.documentElement.namespaceURI === Hr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Sp(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function As(t) {
  var e = Qn(t);
  return (e.local ? Sp : Np)(e);
}
function Tp() {
}
function Mi(t) {
  return t == null ? Tp : function() {
    return this.querySelector(t);
  };
}
function kp(t) {
  typeof t != "function" && (t = Mi(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = o[c]) && (u = t.call(l, l.__data__, c, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new B(r, this._parents);
}
function Ep(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Op() {
  return [];
}
function $s(t) {
  return t == null ? Op : function() {
    return this.querySelectorAll(t);
  };
}
function zp(t) {
  return function() {
    return Ep(t.apply(this, arguments));
  };
}
function Cp(t) {
  typeof t == "function" ? t = zp(t) : t = $s(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new B(r, i);
}
function Ps(t) {
  return function() {
    return this.matches(t);
  };
}
function Ns(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Ip = Array.prototype.find;
function Rp(t) {
  return function() {
    return Ip.call(this.children, t);
  };
}
function jp() {
  return this.firstElementChild;
}
function Fp(t) {
  return this.select(t == null ? jp : Rp(typeof t == "function" ? t : Ns(t)));
}
var Lp = Array.prototype.filter;
function Dp() {
  return Array.from(this.children);
}
function qp(t) {
  return function() {
    return Lp.call(this.children, t);
  };
}
function Bp(t) {
  return this.selectAll(t == null ? Dp : qp(typeof t == "function" ? t : Ns(t)));
}
function Hp(t) {
  typeof t != "function" && (t = Ps(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new B(r, this._parents);
}
function Ss(t) {
  return new Array(t.length);
}
function Xp() {
  return new B(this._enter || this._groups.map(Ss), this._parents);
}
function Cn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Cn.prototype = {
  constructor: Cn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Up(t) {
  return function() {
    return t;
  };
}
function Gp(t, e, n, r, i, o) {
  for (var a = 0, s, l = e.length, u = o.length; a < u; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new Cn(t, o[a]);
  for (; a < l; ++a)
    (s = e[a]) && (i[a] = s);
}
function Yp(t, e, n, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = e.length, h = o.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = e[s]) && (f[s] = p = a.call(l, l.__data__, s, e) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = a.call(t, o[s], s, o) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = o[s], u.delete(p)) : n[s] = new Cn(t, o[s]);
  for (s = 0; s < c; ++s)
    (l = e[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Vp(t) {
  return t.__data__;
}
function Kp(t, e) {
  if (!arguments.length) return Array.from(this, Vp);
  var n = e ? Yp : Gp, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Up(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Wp(t.call(c, c && c.__data__, u, r)), g = p.length, _ = s[u] = new Array(g), w = a[u] = new Array(g), x = l[u] = new Array(f);
    n(c, h, _, w, x, p, e);
    for (var d = 0, A = 0, y, m; d < g; ++d)
      if (y = _[d]) {
        for (d >= A && (A = d + 1); !(m = w[A]) && ++A < g; ) ;
        y._next = m || null;
      }
  }
  return a = new B(a, r), a._enter = s, a._exit = l, a;
}
function Wp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Zp() {
  return new B(this._exit || this._groups.map(Ss), this._parents);
}
function Jp(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Qp(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, g = 0; g < h; ++g)
      (p = u[g] || c[g]) && (f[g] = p);
  for (; l < i; ++l)
    s[l] = n[l];
  return new B(s, this._parents);
}
function td() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function ed(t) {
  t || (t = nd);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, l = i[o] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(e);
  }
  return new B(i, this._parents).order();
}
function nd(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function rd() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function id() {
  return Array.from(this);
}
function od() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function ad() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function sd() {
  return !this.node();
}
function ud(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function ld(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function cd(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function fd(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function hd(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function pd(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function dd(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function gd(t, e) {
  var n = Qn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? cd : ld : typeof e == "function" ? n.local ? dd : pd : n.local ? hd : fd)(n, e));
}
function Ts(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function yd(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function _d(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function vd(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function md(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? yd : typeof e == "function" ? vd : _d)(t, e, n ?? "")) : re(this.node(), t);
}
function re(t, e) {
  return t.style.getPropertyValue(e) || Ts(t).getComputedStyle(t, null).getPropertyValue(e);
}
function wd(t) {
  return function() {
    delete this[t];
  };
}
function bd(t, e) {
  return function() {
    this[t] = e;
  };
}
function xd(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Md(t, e) {
  return arguments.length > 1 ? this.each((e == null ? wd : typeof e == "function" ? xd : bd)(t, e)) : this.node()[t];
}
function ks(t) {
  return t.trim().split(/^|\s+/);
}
function Ai(t) {
  return t.classList || new Es(t);
}
function Es(t) {
  this._node = t, this._names = ks(t.getAttribute("class") || "");
}
Es.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Os(t, e) {
  for (var n = Ai(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function zs(t, e) {
  for (var n = Ai(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Ad(t) {
  return function() {
    Os(this, t);
  };
}
function $d(t) {
  return function() {
    zs(this, t);
  };
}
function Pd(t, e) {
  return function() {
    (e.apply(this, arguments) ? Os : zs)(this, t);
  };
}
function Nd(t, e) {
  var n = ks(t + "");
  if (arguments.length < 2) {
    for (var r = Ai(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Pd : e ? Ad : $d)(n, e));
}
function Sd() {
  this.textContent = "";
}
function Td(t) {
  return function() {
    this.textContent = t;
  };
}
function kd(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Ed(t) {
  return arguments.length ? this.each(t == null ? Sd : (typeof t == "function" ? kd : Td)(t)) : this.node().textContent;
}
function Od() {
  this.innerHTML = "";
}
function zd(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Cd(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Id(t) {
  return arguments.length ? this.each(t == null ? Od : (typeof t == "function" ? Cd : zd)(t)) : this.node().innerHTML;
}
function Rd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function jd() {
  return this.each(Rd);
}
function Fd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ld() {
  return this.each(Fd);
}
function Dd(t) {
  var e = typeof t == "function" ? t : As(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function qd() {
  return null;
}
function Bd(t, e) {
  var n = typeof t == "function" ? t : As(t), r = e == null ? qd : typeof e == "function" ? e : Mi(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Hd() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Xd() {
  return this.each(Hd);
}
function Ud() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Gd() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Yd(t) {
  return this.select(t ? Gd : Ud);
}
function Vd(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Kd(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Wd(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Zd(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Jd(t, e, n) {
  return function() {
    var r = this.__on, i, o = Kd(e);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Qd(t, e, n) {
  var r = Wd(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = e ? Jd : Zd, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function Cs(t, e, n) {
  var r = Ts(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function t0(t, e) {
  return function() {
    return Cs(this, t, e);
  };
}
function e0(t, e) {
  return function() {
    return Cs(this, t, e.apply(this, arguments));
  };
}
function n0(t, e) {
  return this.each((typeof e == "function" ? e0 : t0)(t, e));
}
function* r0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Is = [null];
function B(t, e) {
  this._groups = t, this._parents = e;
}
function Ve() {
  return new B([[document.documentElement]], Is);
}
function i0() {
  return this;
}
B.prototype = Ve.prototype = {
  constructor: B,
  select: kp,
  selectAll: Cp,
  selectChild: Fp,
  selectChildren: Bp,
  filter: Hp,
  data: Kp,
  enter: Xp,
  exit: Zp,
  join: Jp,
  merge: Qp,
  selection: i0,
  order: td,
  sort: ed,
  call: rd,
  nodes: id,
  node: od,
  size: ad,
  empty: sd,
  each: ud,
  attr: gd,
  style: md,
  property: Md,
  classed: Nd,
  text: Ed,
  html: Id,
  raise: jd,
  lower: Ld,
  append: Dd,
  insert: Bd,
  remove: Xd,
  clone: Yd,
  datum: Vd,
  on: Qd,
  dispatch: n0,
  [Symbol.iterator]: r0
};
function C(t) {
  return typeof t == "string" ? new B([[document.querySelector(t)]], [document.documentElement]) : new B([[t]], Is);
}
function o0(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Po(t, e) {
  if (t = o0(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const a0 = { passive: !1 }, Oe = { capture: !0, passive: !1 };
function wr(t) {
  t.stopImmediatePropagation();
}
function Jt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function s0(t) {
  var e = t.document.documentElement, n = C(t).on("dragstart.drag", Jt, Oe);
  "onselectstart" in e ? n.on("selectstart.drag", Jt, Oe) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function u0(t, e) {
  var n = t.document.documentElement, r = C(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Jt, Oe), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const sn = (t) => () => t;
function Xr(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: l,
  dy: u,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Xr.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function l0(t) {
  return !t.ctrlKey && !t.button;
}
function c0() {
  return this.parentNode;
}
function f0(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function h0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function p0() {
  var t = l0, e = c0, n = f0, r = h0, i = {}, o = xi("start", "drag", "end"), a = 0, s, l, u, c, h = 0;
  function f(y) {
    y.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", x, a0).on("touchend.drag touchcancel.drag", d).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(y, m) {
    if (!(c || !t.call(this, y, m))) {
      var S = A(this, e.call(this, y, m), y, m, "mouse");
      S && (C(y.view).on("mousemove.drag", g, Oe).on("mouseup.drag", _, Oe), s0(y.view), wr(y), u = !1, s = y.clientX, l = y.clientY, S("start", y));
    }
  }
  function g(y) {
    if (Jt(y), !u) {
      var m = y.clientX - s, S = y.clientY - l;
      u = m * m + S * S > h;
    }
    i.mouse("drag", y);
  }
  function _(y) {
    C(y.view).on("mousemove.drag mouseup.drag", null), u0(y.view, u), Jt(y), i.mouse("end", y);
  }
  function w(y, m) {
    if (t.call(this, y, m)) {
      var S = y.changedTouches, T = e.call(this, y, m), E = S.length, X, U;
      for (X = 0; X < E; ++X)
        (U = A(this, T, y, m, S[X].identifier, S[X])) && (wr(y), U("start", y, S[X]));
    }
  }
  function x(y) {
    var m = y.changedTouches, S = m.length, T, E;
    for (T = 0; T < S; ++T)
      (E = i[m[T].identifier]) && (Jt(y), E("drag", y, m[T]));
  }
  function d(y) {
    var m = y.changedTouches, S = m.length, T, E;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), T = 0; T < S; ++T)
      (E = i[m[T].identifier]) && (wr(y), E("end", y, m[T]));
  }
  function A(y, m, S, T, E, X) {
    var U = o.copy(), v = Po(X || S, m), O, $, z;
    if ((z = n.call(y, new Xr("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: E,
      active: a,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: U
    }), T)) != null)
      return O = z.x - v[0] || 0, $ = z.y - v[1] || 0, function Et(L, G, Y) {
        var k = v, _r;
        switch (L) {
          case "start":
            i[E] = Et, _r = a++;
            break;
          case "end":
            delete i[E], --a;
          // falls through
          case "drag":
            v = Po(Y || G, m), _r = a;
            break;
        }
        U.call(
          L,
          y,
          new Xr(L, {
            sourceEvent: G,
            subject: z,
            target: f,
            identifier: E,
            active: _r,
            x: v[0] + O,
            y: v[1] + $,
            dx: v[0] - k[0],
            dy: v[1] - k[1],
            dispatch: U
          }),
          T
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : sn(!!y), f) : t;
  }, f.container = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : sn(y), f) : e;
  }, f.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : sn(y), f) : n;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : sn(!!y), f) : r;
  }, f.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (h = (y = +y) * y, f) : Math.sqrt(h);
  }, f;
}
function $i(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Rs(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ke() {
}
var ze = 0.7, In = 1 / ze, Qt = "\\s*([+-]?\\d+)\\s*", Ce = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", at = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", d0 = /^#([0-9a-f]{3,8})$/, g0 = new RegExp(`^rgb\\(${Qt},${Qt},${Qt}\\)$`), y0 = new RegExp(`^rgb\\(${at},${at},${at}\\)$`), _0 = new RegExp(`^rgba\\(${Qt},${Qt},${Qt},${Ce}\\)$`), v0 = new RegExp(`^rgba\\(${at},${at},${at},${Ce}\\)$`), m0 = new RegExp(`^hsl\\(${Ce},${at},${at}\\)$`), w0 = new RegExp(`^hsla\\(${Ce},${at},${at},${Ce}\\)$`), No = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
$i(Ke, qt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: So,
  // Deprecated! Use color.formatHex.
  formatHex: So,
  formatHex8: b0,
  formatHsl: x0,
  formatRgb: To,
  toString: To
});
function So() {
  return this.rgb().formatHex();
}
function b0() {
  return this.rgb().formatHex8();
}
function x0() {
  return js(this).formatHsl();
}
function To() {
  return this.rgb().formatRgb();
}
function qt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = d0.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? ko(e) : n === 3 ? new F(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? un(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? un(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = g0.exec(t)) ? new F(e[1], e[2], e[3], 1) : (e = y0.exec(t)) ? new F(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = _0.exec(t)) ? un(e[1], e[2], e[3], e[4]) : (e = v0.exec(t)) ? un(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = m0.exec(t)) ? zo(e[1], e[2] / 100, e[3] / 100, 1) : (e = w0.exec(t)) ? zo(e[1], e[2] / 100, e[3] / 100, e[4]) : No.hasOwnProperty(t) ? ko(No[t]) : t === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function ko(t) {
  return new F(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function un(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new F(t, e, n, r);
}
function M0(t) {
  return t instanceof Ke || (t = qt(t)), t ? (t = t.rgb(), new F(t.r, t.g, t.b, t.opacity)) : new F();
}
function Ur(t, e, n, r) {
  return arguments.length === 1 ? M0(t) : new F(t, e, n, r ?? 1);
}
function F(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
$i(F, Ur, Rs(Ke, {
  brighter(t) {
    return t = t == null ? In : Math.pow(In, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ze : Math.pow(ze, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new F(jt(this.r), jt(this.g), jt(this.b), Rn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Eo,
  // Deprecated! Use color.formatHex.
  formatHex: Eo,
  formatHex8: A0,
  formatRgb: Oo,
  toString: Oo
}));
function Eo() {
  return `#${It(this.r)}${It(this.g)}${It(this.b)}`;
}
function A0() {
  return `#${It(this.r)}${It(this.g)}${It(this.b)}${It((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Oo() {
  const t = Rn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${jt(this.r)}, ${jt(this.g)}, ${jt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Rn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function jt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function It(t) {
  return t = jt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function zo(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Z(t, e, n, r);
}
function js(t) {
  if (t instanceof Z) return new Z(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ke || (t = qt(t)), !t) return new Z();
  if (t instanceof Z) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new Z(a, s, l, t.opacity);
}
function $0(t, e, n, r) {
  return arguments.length === 1 ? js(t) : new Z(t, e, n, r ?? 1);
}
function Z(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
$i(Z, $0, Rs(Ke, {
  brighter(t) {
    return t = t == null ? In : Math.pow(In, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ze : Math.pow(ze, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new F(
      br(t >= 240 ? t - 240 : t + 120, i, r),
      br(t, i, r),
      br(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Z(Co(this.h), ln(this.s), ln(this.l), Rn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Rn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Co(this.h)}, ${ln(this.s) * 100}%, ${ln(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Co(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ln(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function br(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Pi = (t) => () => t;
function P0(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function N0(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function S0(t) {
  return (t = +t) == 1 ? Fs : function(e, n) {
    return n - e ? N0(e, n, t) : Pi(isNaN(e) ? n : e);
  };
}
function Fs(t, e) {
  var n = e - t;
  return n ? P0(t, n) : Pi(isNaN(t) ? e : t);
}
const jn = (function t(e) {
  var n = S0(e);
  function r(i, o) {
    var a = n((i = Ur(i)).r, (o = Ur(o)).r), s = n(i.g, o.g), l = n(i.b, o.b), u = Fs(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function T0(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function k0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function E0(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Ni(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function O0(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function K(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function z0(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Ni(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var Gr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, xr = new RegExp(Gr.source, "g");
function C0(t) {
  return function() {
    return t;
  };
}
function I0(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ls(t, e) {
  var n = Gr.lastIndex = xr.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", e = e + ""; (r = Gr.exec(t)) && (i = xr.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: K(r, i) })), n = xr.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? I0(l[0].x) : C0(e) : (e = l.length, function(u) {
    for (var c = 0, h; c < e; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function Ni(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Pi(e) : (n === "number" ? K : n === "string" ? (r = qt(e)) ? (e = r, jn) : Ls : e instanceof qt ? jn : e instanceof Date ? O0 : k0(e) ? T0 : Array.isArray(e) ? E0 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? z0 : K)(t, e);
}
function R0(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Io = 180 / Math.PI, Ds = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function qs(t, e, n, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * Io,
    skewX: Math.atan(l) * Io,
    scaleX: a,
    scaleY: s
  };
}
var cn;
function j0(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Ds : qs(e.a, e.b, e.c, e.d, e.e, e.f);
}
function F0(t) {
  return t == null || (cn || (cn = document.createElementNS("http://www.w3.org/2000/svg", "g")), cn.setAttribute("transform", t), !(t = cn.transform.baseVal.consolidate())) ? Ds : (t = t.matrix, qs(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Bs(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, c, h, f, p, g) {
    if (u !== h || c !== f) {
      var _ = p.push("translate(", null, e, null, n);
      g.push({ i: _ - 4, x: K(u, h) }, { i: _ - 2, x: K(c, f) });
    } else (h || f) && p.push("translate(" + h + e + f + n);
  }
  function a(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: K(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: K(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, g) {
    if (u !== h || c !== f) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: _ - 4, x: K(u, h) }, { i: _ - 2, x: K(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), o(u.translateX, u.translateY, c.translateX, c.translateY, h, f), a(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var g = -1, _ = f.length, w; ++g < _; ) h[(w = f[g]).i] = w.x(p);
      return h.join("");
    };
  };
}
var L0 = Bs(j0, "px, ", "px)", "deg)"), D0 = Bs(F0, ", ", ")", ")"), ie = 0, we = 0, de = 0, Hs = 1e3, Fn, be, Ln = 0, Bt = 0, tr = 0, Ie = typeof performance == "object" && performance.now ? performance : Date, Xs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Si() {
  return Bt || (Xs(q0), Bt = Ie.now() + tr);
}
function q0() {
  Bt = 0;
}
function Dn() {
  this._call = this._time = this._next = null;
}
Dn.prototype = Us.prototype = {
  constructor: Dn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Si() : +n) + (e == null ? 0 : +e), !this._next && be !== this && (be ? be._next = this : Fn = this, be = this), this._call = t, this._time = n, Yr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Yr());
  }
};
function Us(t, e, n) {
  var r = new Dn();
  return r.restart(t, e, n), r;
}
function B0() {
  Si(), ++ie;
  for (var t = Fn, e; t; )
    (e = Bt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --ie;
}
function Ro() {
  Bt = (Ln = Ie.now()) + tr, ie = we = 0;
  try {
    B0();
  } finally {
    ie = 0, X0(), Bt = 0;
  }
}
function H0() {
  var t = Ie.now(), e = t - Ln;
  e > Hs && (tr -= e, Ln = t);
}
function X0() {
  for (var t, e = Fn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Fn = n);
  be = t, Yr(r);
}
function Yr(t) {
  if (!ie) {
    we && (we = clearTimeout(we));
    var e = t - Bt;
    e > 24 ? (t < 1 / 0 && (we = setTimeout(Ro, t - Ie.now() - tr)), de && (de = clearInterval(de))) : (de || (Ln = Ie.now(), de = setInterval(H0, Hs)), ie = 1, Xs(Ro));
  }
}
function jo(t, e, n) {
  var r = new Dn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var U0 = xi("start", "end", "cancel", "interrupt"), G0 = [], Gs = 0, Fo = 1, Vr = 2, xn = 3, Lo = 4, Kr = 5, Mn = 6;
function er(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Y0(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: U0,
    tween: G0,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Gs
  });
}
function Ti(t, e) {
  var n = et(t, e);
  if (n.state > Gs) throw new Error("too late; already scheduled");
  return n;
}
function lt(t, e) {
  var n = et(t, e);
  if (n.state > xn) throw new Error("too late; already running");
  return n;
}
function et(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Y0(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Us(o, 0, n.time);
  function o(u) {
    n.state = Fo, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, h, f, p;
    if (n.state !== Fo) return l();
    for (c in r)
      if (p = r[c], p.name === n.name) {
        if (p.state === xn) return jo(a);
        p.state === Lo ? (p.state = Mn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < e && (p.state = Mn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (jo(function() {
      n.state === xn && (n.state = Lo, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Vr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Vr) {
      for (n.state = xn, i = new Array(f = n.tween.length), c = 0, h = -1; c < f; ++c)
        (p = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Kr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    n.state === Kr && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Mn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function V0(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > Vr && r.state < Kr, r.state = Mn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function K0(t) {
  return this.each(function() {
    V0(this, t);
  });
}
function W0(t, e) {
  var n, r;
  return function() {
    var i = lt(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Z0(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = lt(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: e, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === e) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function J0(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = et(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? W0 : Z0)(n, t, e));
}
function ki(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = lt(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return et(i, r).value[e];
  };
}
function Ys(t, e) {
  var n;
  return (typeof e == "number" ? K : e instanceof qt ? jn : (n = qt(e)) ? (e = n, jn) : Ls)(t, e);
}
function Q0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function tg(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function eg(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function ng(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function rg(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = e(r = a, s)));
  };
}
function ig(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = e(r = a, s)));
  };
}
function og(t, e) {
  var n = Qn(t), r = n === "transform" ? D0 : Ys;
  return this.attrTween(t, typeof e == "function" ? (n.local ? ig : rg)(n, r, ki(this, "attr." + t, e)) : e == null ? (n.local ? tg : Q0)(n) : (n.local ? ng : eg)(n, r, e));
}
function ag(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function sg(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function ug(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && sg(t, o)), n;
  }
  return i._value = e, i;
}
function lg(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && ag(t, o)), n;
  }
  return i._value = e, i;
}
function cg(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Qn(t);
  return this.tween(n, (r.local ? ug : lg)(r, e));
}
function fg(t, e) {
  return function() {
    Ti(this, t).delay = +e.apply(this, arguments);
  };
}
function hg(t, e) {
  return e = +e, function() {
    Ti(this, t).delay = e;
  };
}
function pg(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? fg : hg)(e, t)) : et(this.node(), e).delay;
}
function dg(t, e) {
  return function() {
    lt(this, t).duration = +e.apply(this, arguments);
  };
}
function gg(t, e) {
  return e = +e, function() {
    lt(this, t).duration = e;
  };
}
function yg(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? dg : gg)(e, t)) : et(this.node(), e).duration;
}
function _g(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    lt(this, t).ease = e;
  };
}
function vg(t) {
  var e = this._id;
  return arguments.length ? this.each(_g(e, t)) : et(this.node(), e).ease;
}
function mg(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    lt(this, t).ease = n;
  };
}
function wg(t) {
  if (typeof t != "function") throw new Error();
  return this.each(mg(this._id, t));
}
function bg(t) {
  typeof t != "function" && (t = Ps(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new yt(r, this._parents, this._name, this._id);
}
function xg(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = e[s], u = n[s], c = l.length, h = a[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    a[s] = e[s];
  return new yt(a, this._parents, this._name, this._id);
}
function Mg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Ag(t, e, n) {
  var r, i, o = Mg(e) ? Ti : lt;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function $g(t, e) {
  var n = this._id;
  return arguments.length < 2 ? et(this.node(), n).on.on(t) : this.each(Ag(n, t, e));
}
function Pg(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Ng() {
  return this.on("end.remove", Pg(this._id));
}
function Sg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Mi(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, er(u[f], e, n, f, u, et(c, n)));
  return new yt(o, this._parents, e, n);
}
function Tg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = $s(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, g = et(c, n), _ = 0, w = f.length; _ < w; ++_)
          (p = f[_]) && er(p, e, n, _, f, g);
        o.push(f), a.push(c);
      }
  return new yt(o, a, e, n);
}
var kg = Ve.prototype.constructor;
function Eg() {
  return new kg(this._groups, this._parents);
}
function Og(t, e) {
  var n, r, i;
  return function() {
    var o = re(this, t), a = (this.style.removeProperty(t), re(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function Vs(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function zg(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = re(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Cg(t, e, n) {
  var r, i, o;
  return function() {
    var a = re(this, t), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), re(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = e(r = a, s));
  };
}
function Ig(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var l = lt(this, t), u = l.on, c = l.value[o] == null ? s || (s = Vs(e)) : void 0;
    (u !== n || i !== c) && (r = (n = u).copy()).on(a, i = c), l.on = r;
  };
}
function Rg(t, e, n) {
  var r = (t += "") == "transform" ? L0 : Ys;
  return e == null ? this.styleTween(t, Og(t, r)).on("end.style." + t, Vs(t)) : typeof e == "function" ? this.styleTween(t, Cg(t, r, ki(this, "style." + t, e))).each(Ig(this._id, t)) : this.styleTween(t, zg(t, r, e), n).on("end.style." + t, null);
}
function jg(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Fg(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && jg(t, a, n)), r;
  }
  return o._value = e, o;
}
function Lg(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Fg(t, e, n ?? ""));
}
function Dg(t) {
  return function() {
    this.textContent = t;
  };
}
function qg(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Bg(t) {
  return this.tween("text", typeof t == "function" ? qg(ki(this, "text", t)) : Dg(t == null ? "" : t + ""));
}
function Hg(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Xg(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Hg(i)), e;
  }
  return r._value = t, r;
}
function Ug(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Xg(t));
}
function Gg() {
  for (var t = this._name, e = this._id, n = Ks(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = et(l, e);
        er(l, t, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new yt(r, this._parents, t, n);
}
function Yg() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var u = lt(this, r), c = u.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), u.on = e;
    }), i === 0 && o();
  });
}
var Vg = 0;
function yt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Ks() {
  return ++Vg;
}
var ft = Ve.prototype;
yt.prototype = {
  constructor: yt,
  select: Sg,
  selectAll: Tg,
  selectChild: ft.selectChild,
  selectChildren: ft.selectChildren,
  filter: bg,
  merge: xg,
  selection: Eg,
  transition: Gg,
  call: ft.call,
  nodes: ft.nodes,
  node: ft.node,
  size: ft.size,
  empty: ft.empty,
  each: ft.each,
  on: $g,
  attr: og,
  attrTween: cg,
  style: Rg,
  styleTween: Lg,
  text: Bg,
  textTween: Ug,
  remove: Ng,
  tween: J0,
  delay: pg,
  duration: yg,
  ease: vg,
  easeVarying: wg,
  end: Yg,
  [Symbol.iterator]: ft[Symbol.iterator]
};
function Kg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Wg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Kg
};
function Zg(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Jg(t) {
  var e, n;
  t instanceof yt ? (e = t._id, t = t._name) : (e = Ks(), (n = Wg).time = Si(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && er(l, t, e, u, a, n || Zg(l, e));
  return new yt(r, this._parents, t, e);
}
Ve.prototype.interrupt = K0;
Ve.prototype.transition = Jg;
const Wr = Math.PI, Zr = 2 * Wr, Ot = 1e-6, Qg = Zr - Ot;
function Ws(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function ty(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Ws;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Zs {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Ws : ty(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, o, a) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(e, n, r, i, o) {
    if (e = +e, n = +n, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, l = r - e, u = i - n, c = a - e, h = s - n, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (f > Ot) if (!(Math.abs(h * l - u * c) > Ot) || !o)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - a, g = i - s, _ = l * l + u * u, w = p * p + g * g, x = Math.sqrt(_), d = Math.sqrt(f), A = o * Math.tan((Wr - Math.acos((_ + f - w) / (2 * x * d))) / 2), y = A / d, m = A / x;
      Math.abs(y - 1) > Ot && this._append`L${e + y * c},${n + y * h}`, this._append`A${o},${o},0,0,${+(h * p > c * g)},${this._x1 = e + m * l},${this._y1 = n + m * u}`;
    }
  }
  arc(e, n, r, i, o, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = e + s, c = n + l, h = 1 ^ a, f = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Ot || Math.abs(this._y1 - c) > Ot) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Zr + Zr), f > Qg ? this._append`A${r},${r},0,1,${h},${e - s},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Ot && this._append`A${r},${r},0,${+(f >= Wr)},${h},${this._x1 = e + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function nt() {
  return new Zs();
}
nt.prototype = Zs.prototype;
function ey(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function qn(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function oe(t) {
  return t = qn(Math.abs(t)), t ? t[1] : NaN;
}
function ny(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(n.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function ry(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var iy = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Bn(t) {
  if (!(e = iy.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new Ei({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Bn.prototype = Ei.prototype;
function Ei(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ei.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function oy(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Js;
function ay(t, e) {
  var n = qn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], o = i - (Js = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + qn(t, Math.max(0, e + o - 1))[0];
}
function Do(t, e) {
  var n = qn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const qo = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: ey,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Do(t * 100, e),
  r: Do,
  s: ay,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Bo(t) {
  return t;
}
var Ho = Array.prototype.map, Xo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function sy(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Bo : ny(Ho.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Bo : ry(Ho.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Bn(h);
    var f = h.fill, p = h.align, g = h.sign, _ = h.symbol, w = h.zero, x = h.width, d = h.comma, A = h.precision, y = h.trim, m = h.type;
    m === "n" ? (d = !0, m = "g") : qo[m] || (A === void 0 && (A = 12), y = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var S = _ === "$" ? n : _ === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", T = _ === "$" ? r : /[%p]/.test(m) ? a : "", E = qo[m], X = /[defgprs%]/.test(m);
    A = A === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function U(v) {
      var O = S, $ = T, z, Et, L;
      if (m === "c")
        $ = E(v) + $, v = "";
      else {
        v = +v;
        var G = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : E(Math.abs(v), A), y && (v = oy(v)), G && +v == 0 && g !== "+" && (G = !1), O = (G ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + O, $ = (m === "s" ? Xo[8 + Js / 3] : "") + $ + (G && g === "(" ? ")" : ""), X) {
          for (z = -1, Et = v.length; ++z < Et; )
            if (L = v.charCodeAt(z), 48 > L || L > 57) {
              $ = (L === 46 ? i + v.slice(z + 1) : v.slice(z)) + $, v = v.slice(0, z);
              break;
            }
        }
      }
      d && !w && (v = e(v, 1 / 0));
      var Y = O.length + v.length + $.length, k = Y < x ? new Array(x - Y + 1).join(f) : "";
      switch (d && w && (v = e(k + v, k.length ? x - $.length : 1 / 0), k = ""), p) {
        case "<":
          v = O + v + $ + k;
          break;
        case "=":
          v = O + k + v + $;
          break;
        case "^":
          v = k.slice(0, Y = k.length >> 1) + O + v + $ + k.slice(Y);
          break;
        default:
          v = k + O + v + $;
          break;
      }
      return o(v);
    }
    return U.toString = function() {
      return h + "";
    }, U;
  }
  function c(h, f) {
    var p = u((h = Bn(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(oe(f) / 3))) * 3, _ = Math.pow(10, -g), w = Xo[8 + g / 3];
    return function(x) {
      return p(_ * x) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var fn, nr, Qs;
uy({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function uy(t) {
  return fn = sy(t), nr = fn.format, Qs = fn.formatPrefix, fn;
}
function ly(t) {
  return Math.max(0, -oe(Math.abs(t)));
}
function cy(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(oe(e) / 3))) * 3 - oe(Math.abs(t)));
}
function fy(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, oe(e) - oe(t)) + 1;
}
function hy(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function py(t) {
  return function() {
    return t;
  };
}
function dy(t) {
  return +t;
}
var Uo = [0, 1];
function Wt(t) {
  return t;
}
function Jr(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : py(isNaN(e) ? NaN : 0.5);
}
function gy(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function yy(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = Jr(i, r), o = n(a, o)) : (r = Jr(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function _y(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = Jr(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var l = _p(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function vy(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function my() {
  var t = Uo, e = Uo, n = Ni, r, i, o, a = Wt, s, l, u;
  function c() {
    var f = Math.min(t.length, e.length);
    return a !== Wt && (a = gy(t[0], t[f - 1])), s = f > 2 ? _y : yy, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (l || (l = s(t.map(r), e, n)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = s(e, t.map(r), K)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, dy), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), c()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = R0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Wt, c()) : a !== Wt;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, c()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function wy() {
  return my()(Wt, Wt);
}
function by(t, e, n, r) {
  var i = xp(t, e, n), o;
  switch (r = Bn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = cy(i, a)) && (r.precision = o), Qs(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = fy(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = ly(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return nr(r);
}
function xy(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return bp(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return by(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, c = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); c-- > 0; ) {
      if (u = Br(a, s, n), u === l)
        return r[i] = a, r[o] = s, e(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function ae() {
  var t = wy();
  return t.copy = function() {
    return vy(t, ae());
  }, hy.apply(t, arguments), xy(t);
}
function xe(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
xe.prototype = {
  constructor: xe,
  scale: function(t) {
    return t === 1 ? this : new xe(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new xe(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
xe.prototype;
var tu = typeof global == "object" && global && global.Object === Object && global, My = typeof self == "object" && self && self.Object === Object && self, mt = tu || My || Function("return this")(), st = mt.Symbol, eu = Object.prototype, Ay = eu.hasOwnProperty, $y = eu.toString, ge = st ? st.toStringTag : void 0;
function Py(t) {
  var e = Ay.call(t, ge), n = t[ge];
  try {
    t[ge] = void 0;
    var r = !0;
  } catch {
  }
  var i = $y.call(t);
  return r && (e ? t[ge] = n : delete t[ge]), i;
}
var Ny = Object.prototype, Sy = Ny.toString;
function Ty(t) {
  return Sy.call(t);
}
var ky = "[object Null]", Ey = "[object Undefined]", Go = st ? st.toStringTag : void 0;
function le(t) {
  return t == null ? t === void 0 ? Ey : ky : Go && Go in Object(t) ? Py(t) : Ty(t);
}
function se(t) {
  return t != null && typeof t == "object";
}
var Oy = "[object Symbol]";
function rr(t) {
  return typeof t == "symbol" || se(t) && le(t) == Oy;
}
function nu(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var J = Array.isArray, Yo = st ? st.prototype : void 0, Vo = Yo ? Yo.toString : void 0;
function ru(t) {
  if (typeof t == "string")
    return t;
  if (J(t))
    return nu(t, ru) + "";
  if (rr(t))
    return Vo ? Vo.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var zy = /\s/;
function Cy(t) {
  for (var e = t.length; e-- && zy.test(t.charAt(e)); )
    ;
  return e;
}
var Iy = /^\s+/;
function Ry(t) {
  return t && t.slice(0, Cy(t) + 1).replace(Iy, "");
}
function ue(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ko = NaN, jy = /^[-+]0x[0-9a-f]+$/i, Fy = /^0b[01]+$/i, Ly = /^0o[0-7]+$/i, Dy = parseInt;
function qy(t) {
  if (typeof t == "number")
    return t;
  if (rr(t))
    return Ko;
  if (ue(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ue(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ry(t);
  var n = Fy.test(t);
  return n || Ly.test(t) ? Dy(t.slice(2), n ? 2 : 8) : jy.test(t) ? Ko : +t;
}
var By = 1 / 0, Hy = 17976931348623157e292;
function Mr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = qy(t), t === By || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * Hy;
  }
  return t === t ? t : 0;
}
function Xy(t) {
  return t;
}
var Uy = "[object AsyncFunction]", Gy = "[object Function]", Yy = "[object GeneratorFunction]", Vy = "[object Proxy]";
function iu(t) {
  if (!ue(t))
    return !1;
  var e = le(t);
  return e == Gy || e == Yy || e == Uy || e == Vy;
}
var Ar = mt["__core-js_shared__"], Wo = (function() {
  var t = /[^.]+$/.exec(Ar && Ar.keys && Ar.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Ky(t) {
  return !!Wo && Wo in t;
}
var Wy = Function.prototype, Zy = Wy.toString;
function Ut(t) {
  if (t != null) {
    try {
      return Zy.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Jy = /[\\^$.*+?()[\]{}|]/g, Qy = /^\[object .+?Constructor\]$/, t_ = Function.prototype, e_ = Object.prototype, n_ = t_.toString, r_ = e_.hasOwnProperty, i_ = RegExp(
  "^" + n_.call(r_).replace(Jy, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function o_(t) {
  if (!ue(t) || Ky(t))
    return !1;
  var e = iu(t) ? i_ : Qy;
  return e.test(Ut(t));
}
function a_(t, e) {
  return t == null ? void 0 : t[e];
}
function ce(t, e) {
  var n = a_(t, e);
  return o_(n) ? n : void 0;
}
var Qr = ce(mt, "WeakMap"), s_ = 9007199254740991, u_ = /^(?:0|[1-9]\d*)$/;
function Oi(t, e) {
  var n = typeof t;
  return e = e ?? s_, !!e && (n == "number" || n != "symbol" && u_.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function zi(t, e) {
  return t === e || t !== t && e !== e;
}
var l_ = 9007199254740991;
function Ci(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= l_;
}
function ir(t) {
  return t != null && Ci(t.length) && !iu(t);
}
function c_(t, e, n) {
  if (!ue(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? ir(n) && Oi(e, n.length) : r == "string" && e in n) ? zi(n[e], t) : !1;
}
var f_ = Object.prototype;
function h_(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || f_;
  return t === n;
}
function p_(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var d_ = "[object Arguments]";
function Zo(t) {
  return se(t) && le(t) == d_;
}
var ou = Object.prototype, g_ = ou.hasOwnProperty, y_ = ou.propertyIsEnumerable, Ii = Zo(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Zo : function(t) {
  return se(t) && g_.call(t, "callee") && !y_.call(t, "callee");
};
function __() {
  return !1;
}
var au = typeof exports == "object" && exports && !exports.nodeType && exports, Jo = au && typeof module == "object" && module && !module.nodeType && module, v_ = Jo && Jo.exports === au, Qo = v_ ? mt.Buffer : void 0, m_ = Qo ? Qo.isBuffer : void 0, ti = m_ || __, w_ = "[object Arguments]", b_ = "[object Array]", x_ = "[object Boolean]", M_ = "[object Date]", A_ = "[object Error]", $_ = "[object Function]", P_ = "[object Map]", N_ = "[object Number]", S_ = "[object Object]", T_ = "[object RegExp]", k_ = "[object Set]", E_ = "[object String]", O_ = "[object WeakMap]", z_ = "[object ArrayBuffer]", C_ = "[object DataView]", I_ = "[object Float32Array]", R_ = "[object Float64Array]", j_ = "[object Int8Array]", F_ = "[object Int16Array]", L_ = "[object Int32Array]", D_ = "[object Uint8Array]", q_ = "[object Uint8ClampedArray]", B_ = "[object Uint16Array]", H_ = "[object Uint32Array]", P = {};
P[I_] = P[R_] = P[j_] = P[F_] = P[L_] = P[D_] = P[q_] = P[B_] = P[H_] = !0;
P[w_] = P[b_] = P[z_] = P[x_] = P[C_] = P[M_] = P[A_] = P[$_] = P[P_] = P[N_] = P[S_] = P[T_] = P[k_] = P[E_] = P[O_] = !1;
function X_(t) {
  return se(t) && Ci(t.length) && !!P[le(t)];
}
function U_(t) {
  return function(e) {
    return t(e);
  };
}
var su = typeof exports == "object" && exports && !exports.nodeType && exports, Me = su && typeof module == "object" && module && !module.nodeType && module, G_ = Me && Me.exports === su, $r = G_ && tu.process, ta = (function() {
  try {
    var t = Me && Me.require && Me.require("util").types;
    return t || $r && $r.binding && $r.binding("util");
  } catch {
  }
})(), ea = ta && ta.isTypedArray, uu = ea ? U_(ea) : X_, Y_ = Object.prototype, V_ = Y_.hasOwnProperty;
function K_(t, e) {
  var n = J(t), r = !n && Ii(t), i = !n && !r && ti(t), o = !n && !r && !i && uu(t), a = n || r || i || o, s = a ? p_(t.length, String) : [], l = s.length;
  for (var u in t)
    V_.call(t, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Oi(u, l))) && s.push(u);
  return s;
}
function W_(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Z_ = W_(Object.keys, Object), J_ = Object.prototype, Q_ = J_.hasOwnProperty;
function tv(t) {
  if (!h_(t))
    return Z_(t);
  var e = [];
  for (var n in Object(t))
    Q_.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Ri(t) {
  return ir(t) ? K_(t) : tv(t);
}
var ev = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, nv = /^\w*$/;
function ji(t, e) {
  if (J(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || rr(t) ? !0 : nv.test(t) || !ev.test(t) || e != null && t in Object(e);
}
var Re = ce(Object, "create");
function rv() {
  this.__data__ = Re ? Re(null) : {}, this.size = 0;
}
function iv(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var ov = "__lodash_hash_undefined__", av = Object.prototype, sv = av.hasOwnProperty;
function uv(t) {
  var e = this.__data__;
  if (Re) {
    var n = e[t];
    return n === ov ? void 0 : n;
  }
  return sv.call(e, t) ? e[t] : void 0;
}
var lv = Object.prototype, cv = lv.hasOwnProperty;
function fv(t) {
  var e = this.__data__;
  return Re ? e[t] !== void 0 : cv.call(e, t);
}
var hv = "__lodash_hash_undefined__";
function pv(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Re && e === void 0 ? hv : e, this;
}
function Ht(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Ht.prototype.clear = rv;
Ht.prototype.delete = iv;
Ht.prototype.get = uv;
Ht.prototype.has = fv;
Ht.prototype.set = pv;
function dv() {
  this.__data__ = [], this.size = 0;
}
function or(t, e) {
  for (var n = t.length; n--; )
    if (zi(t[n][0], e))
      return n;
  return -1;
}
var gv = Array.prototype, yv = gv.splice;
function _v(t) {
  var e = this.__data__, n = or(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : yv.call(e, n, 1), --this.size, !0;
}
function vv(t) {
  var e = this.__data__, n = or(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function mv(t) {
  return or(this.__data__, t) > -1;
}
function wv(t, e) {
  var n = this.__data__, r = or(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function wt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
wt.prototype.clear = dv;
wt.prototype.delete = _v;
wt.prototype.get = vv;
wt.prototype.has = mv;
wt.prototype.set = wv;
var je = ce(mt, "Map");
function bv() {
  this.size = 0, this.__data__ = {
    hash: new Ht(),
    map: new (je || wt)(),
    string: new Ht()
  };
}
function xv(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ar(t, e) {
  var n = t.__data__;
  return xv(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Mv(t) {
  var e = ar(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Av(t) {
  return ar(this, t).get(t);
}
function $v(t) {
  return ar(this, t).has(t);
}
function Pv(t, e) {
  var n = ar(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function bt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = bv;
bt.prototype.delete = Mv;
bt.prototype.get = Av;
bt.prototype.has = $v;
bt.prototype.set = Pv;
var Nv = "Expected a function";
function Fi(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Nv);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return n.cache = o.set(i, a) || o, a;
  };
  return n.cache = new (Fi.Cache || bt)(), n;
}
Fi.Cache = bt;
var Sv = 500;
function Tv(t) {
  var e = Fi(t, function(r) {
    return n.size === Sv && n.clear(), r;
  }), n = e.cache;
  return e;
}
var kv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ev = /\\(\\)?/g, Ov = Tv(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(kv, function(n, r, i, o) {
    e.push(i ? o.replace(Ev, "$1") : r || n);
  }), e;
});
function zv(t) {
  return t == null ? "" : ru(t);
}
function lu(t, e) {
  return J(t) ? t : ji(t, e) ? [t] : Ov(zv(t));
}
function sr(t) {
  if (typeof t == "string" || rr(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function cu(t, e) {
  e = lu(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[sr(e[n++])];
  return n && n == r ? t : void 0;
}
function Cv(t, e, n) {
  var r = t == null ? void 0 : cu(t, e);
  return r === void 0 ? n : r;
}
function fu(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var na = st ? st.isConcatSpreadable : void 0;
function Iv(t) {
  return J(t) || Ii(t) || !!(na && t && t[na]);
}
function Rv(t, e, n, r, i) {
  var o = -1, a = t.length;
  for (n || (n = Iv), i || (i = []); ++o < a; ) {
    var s = t[o];
    n(s) ? fu(i, s) : i[i.length] = s;
  }
  return i;
}
function jv(t) {
  var e = t == null ? 0 : t.length;
  return e ? Rv(t) : [];
}
function Fv() {
  this.__data__ = new wt(), this.size = 0;
}
function Lv(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Dv(t) {
  return this.__data__.get(t);
}
function qv(t) {
  return this.__data__.has(t);
}
var Bv = 200;
function Hv(t, e) {
  var n = this.__data__;
  if (n instanceof wt) {
    var r = n.__data__;
    if (!je || r.length < Bv - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new bt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function pt(t) {
  var e = this.__data__ = new wt(t);
  this.size = e.size;
}
pt.prototype.clear = Fv;
pt.prototype.delete = Lv;
pt.prototype.get = Dv;
pt.prototype.has = qv;
pt.prototype.set = Hv;
function Xv(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (o[i++] = a);
  }
  return o;
}
function Uv() {
  return [];
}
var Gv = Object.prototype, Yv = Gv.propertyIsEnumerable, ra = Object.getOwnPropertySymbols, Vv = ra ? function(t) {
  return t == null ? [] : (t = Object(t), Xv(ra(t), function(e) {
    return Yv.call(t, e);
  }));
} : Uv;
function Kv(t, e, n) {
  var r = e(t);
  return J(t) ? r : fu(r, n(t));
}
function ia(t) {
  return Kv(t, Ri, Vv);
}
var ei = ce(mt, "DataView"), ni = ce(mt, "Promise"), ri = ce(mt, "Set"), oa = "[object Map]", Wv = "[object Object]", aa = "[object Promise]", sa = "[object Set]", ua = "[object WeakMap]", la = "[object DataView]", Zv = Ut(ei), Jv = Ut(je), Qv = Ut(ni), tm = Ut(ri), em = Ut(Qr), $t = le;
(ei && $t(new ei(new ArrayBuffer(1))) != la || je && $t(new je()) != oa || ni && $t(ni.resolve()) != aa || ri && $t(new ri()) != sa || Qr && $t(new Qr()) != ua) && ($t = function(t) {
  var e = le(t), n = e == Wv ? t.constructor : void 0, r = n ? Ut(n) : "";
  if (r)
    switch (r) {
      case Zv:
        return la;
      case Jv:
        return oa;
      case Qv:
        return aa;
      case tm:
        return sa;
      case em:
        return ua;
    }
  return e;
});
var ca = mt.Uint8Array, nm = "__lodash_hash_undefined__";
function rm(t) {
  return this.__data__.set(t, nm), this;
}
function im(t) {
  return this.__data__.has(t);
}
function Hn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new bt(); ++e < n; )
    this.add(t[e]);
}
Hn.prototype.add = Hn.prototype.push = rm;
Hn.prototype.has = im;
function om(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function am(t, e) {
  return t.has(e);
}
var sm = 1, um = 2;
function hu(t, e, n, r, i, o) {
  var a = n & sm, s = t.length, l = e.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), c = o.get(e);
  if (u && c)
    return u == e && c == t;
  var h = -1, f = !0, p = n & um ? new Hn() : void 0;
  for (o.set(t, e), o.set(e, t); ++h < s; ) {
    var g = t[h], _ = e[h];
    if (r)
      var w = a ? r(_, g, h, e, t, o) : r(g, _, h, t, e, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!om(e, function(x, d) {
        if (!am(p, d) && (g === x || i(g, x, n, r, o)))
          return p.push(d);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === _ || i(g, _, n, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), f;
}
function lm(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function cm(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var fm = 1, hm = 2, pm = "[object Boolean]", dm = "[object Date]", gm = "[object Error]", ym = "[object Map]", _m = "[object Number]", vm = "[object RegExp]", mm = "[object Set]", wm = "[object String]", bm = "[object Symbol]", xm = "[object ArrayBuffer]", Mm = "[object DataView]", fa = st ? st.prototype : void 0, Pr = fa ? fa.valueOf : void 0;
function Am(t, e, n, r, i, o, a) {
  switch (n) {
    case Mm:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case xm:
      return !(t.byteLength != e.byteLength || !o(new ca(t), new ca(e)));
    case pm:
    case dm:
    case _m:
      return zi(+t, +e);
    case gm:
      return t.name == e.name && t.message == e.message;
    case vm:
    case wm:
      return t == e + "";
    case ym:
      var s = lm;
    case mm:
      var l = r & fm;
      if (s || (s = cm), t.size != e.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == e;
      r |= hm, a.set(t, e);
      var c = hu(s(t), s(e), r, i, o, a);
      return a.delete(t), c;
    case bm:
      if (Pr)
        return Pr.call(t) == Pr.call(e);
  }
  return !1;
}
var $m = 1, Pm = Object.prototype, Nm = Pm.hasOwnProperty;
function Sm(t, e, n, r, i, o) {
  var a = n & $m, s = ia(t), l = s.length, u = ia(e), c = u.length;
  if (l != c && !a)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(a ? f in e : Nm.call(e, f)))
      return !1;
  }
  var p = o.get(t), g = o.get(e);
  if (p && g)
    return p == e && g == t;
  var _ = !0;
  o.set(t, e), o.set(e, t);
  for (var w = a; ++h < l; ) {
    f = s[h];
    var x = t[f], d = e[f];
    if (r)
      var A = a ? r(d, x, f, e, t, o) : r(x, d, f, t, e, o);
    if (!(A === void 0 ? x === d || i(x, d, n, r, o) : A)) {
      _ = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (_ && !w) {
    var y = t.constructor, m = e.constructor;
    y != m && "constructor" in t && "constructor" in e && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (_ = !1);
  }
  return o.delete(t), o.delete(e), _;
}
var Tm = 1, ha = "[object Arguments]", pa = "[object Array]", hn = "[object Object]", km = Object.prototype, da = km.hasOwnProperty;
function Em(t, e, n, r, i, o) {
  var a = J(t), s = J(e), l = a ? pa : $t(t), u = s ? pa : $t(e);
  l = l == ha ? hn : l, u = u == ha ? hn : u;
  var c = l == hn, h = u == hn, f = l == u;
  if (f && ti(t)) {
    if (!ti(e))
      return !1;
    a = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new pt()), a || uu(t) ? hu(t, e, n, r, i, o) : Am(t, e, l, n, r, i, o);
  if (!(n & Tm)) {
    var p = c && da.call(t, "__wrapped__"), g = h && da.call(e, "__wrapped__");
    if (p || g) {
      var _ = p ? t.value() : t, w = g ? e.value() : e;
      return o || (o = new pt()), i(_, w, n, r, o);
    }
  }
  return f ? (o || (o = new pt()), Sm(t, e, n, r, i, o)) : !1;
}
function Li(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !se(t) && !se(e) ? t !== t && e !== e : Em(t, e, n, r, Li, i);
}
var Om = 1, zm = 2;
function Cm(t, e, n, r) {
  var i = n.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = n[i];
    var s = a[0], l = t[s], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new pt(), h;
      if (!(h === void 0 ? Li(u, l, Om | zm, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function pu(t) {
  return t === t && !ue(t);
}
function Im(t) {
  for (var e = Ri(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, pu(i)];
  }
  return e;
}
function du(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function Rm(t) {
  var e = Im(t);
  return e.length == 1 && e[0][2] ? du(e[0][0], e[0][1]) : function(n) {
    return n === t || Cm(n, t, e);
  };
}
function jm(t, e) {
  return t != null && e in Object(t);
}
function Fm(t, e, n) {
  e = lu(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var a = sr(e[r]);
    if (!(o = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Ci(i) && Oi(a, i) && (J(t) || Ii(t)));
}
function Lm(t, e) {
  return t != null && Fm(t, e, jm);
}
var Dm = 1, qm = 2;
function Bm(t, e) {
  return ji(t) && pu(e) ? du(sr(t), e) : function(n) {
    var r = Cv(n, t);
    return r === void 0 && r === e ? Lm(n, t) : Li(e, r, Dm | qm);
  };
}
function Hm(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Xm(t) {
  return function(e) {
    return cu(e, t);
  };
}
function Um(t) {
  return ji(t) ? Hm(sr(t)) : Xm(t);
}
function Gm(t) {
  return typeof t == "function" ? t : t == null ? Xy : typeof t == "object" ? J(t) ? Bm(t[0], t[1]) : Rm(t) : Um(t);
}
function Ym(t) {
  return function(e, n, r) {
    for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
      var l = a[++i];
      if (n(o[l], l, o) === !1)
        break;
    }
    return e;
  };
}
var Vm = Ym();
function Km(t, e) {
  return t && Vm(t, e, Ri);
}
function Wm(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!ir(n))
      return t(n, r);
    for (var i = n.length, o = -1, a = Object(n); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return n;
  };
}
var Zm = Wm(Km);
function Jm(t, e) {
  var n = -1, r = ir(t) ? Array(t.length) : [];
  return Zm(t, function(i, o, a) {
    r[++n] = e(i, o, a);
  }), r;
}
function ga(t, e) {
  var n = J(t) ? nu : Jm;
  return n(t, Gm(e));
}
var Qm = Math.ceil, t1 = Math.max;
function e1(t, e, n, r) {
  for (var i = -1, o = t1(Qm((e - t) / (n || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += n;
  return a;
}
function n1(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && c_(e, n, r) && (n = r = void 0), e = Mr(e), n === void 0 ? (n = e, e = 0) : n = Mr(n), r = r === void 0 ? e < n ? 1 : -1 : Mr(r), e1(e, n, r);
  };
}
var r1 = n1();
const i1 = (t, e, n = 12, r = 12) => {
  const i = ae().domain([0, n]).range([0, t]), o = ae().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return r1((n + 1) * (r + 1)).map(function(a) {
        return { m: a % (n + 1), n: Math.floor(a / (n + 1)), x: i(a % (n + 1)), y: o(Math.floor(a / (n + 1))) };
      });
    },
    position: function(a, s) {
      typeof a == "number" && (a = [a]), typeof s == "number" && (s = [s]);
      const l = jv(ga(s, function(u) {
        return ga(
          a,
          function(c) {
            return { x: i(c), y: o(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, o1 = "_widget_9wct0_49", a1 = "_label_9wct0_69", s1 = "_lit_9wct0_74", u1 = "_button_9wct0_78", l1 = "_symbol_9wct0_78", c1 = "_radio_9wct0_79", f1 = "_radiobutton_9wct0_79", h1 = "_selected_9wct0_85", p1 = "_toggle_9wct0_86", d1 = "_slider_9wct0_95", g1 = "_track_9wct0_95", y1 = "_track_overlay_9wct0_100", _1 = "_handle_9wct0_108", M = {
  widget: o1,
  label: a1,
  lit: s1,
  button: u1,
  symbol: l1,
  radio: c1,
  radiobutton: f1,
  selected: h1,
  toggle: p1,
  slider: d1,
  track: g1,
  track_overlay: y1,
  handle: _1
}, Di = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = t.length;
  let n = "";
  for (let r = 0; r < 10; ++r)
    n += t[Math.floor(Math.random() * e)];
  return n;
}, qi = (t, e, n) => {
  var r, i, o, a;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, v1 = (t = 1) => {
  const e = nt();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, m1 = (t = 1) => {
  const e = nt(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, w1 = (t = 1) => {
  const e = nt();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, b1 = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = nt();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, x1 = (t = 1) => {
  const e = nt(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, o = 0.5, a = 0.6, s = 0.6, l = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), e.arc(0, 0, t * (1 - o), r, i, !1), e.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), e.lineTo(l[0] + u[0], l[1] + u[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), e.closePath(), e.toString();
}, M1 = (t = 1) => {
  const e = nt(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, o = n, a = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, a), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, o, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, A1 = (t = 1) => {
  const e = nt(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), e.arc(0, 0, t * (1 - o), i, r, !0), e.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var l = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(l[0] + u[0], l[1] + u[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), e.closePath(), e.toString();
}, $1 = (t = 1) => {
  var e = nt(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, P1 = (t = 1) => {
  const e = nt(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, ii = (t) => {
  switch (t) {
    case "play":
      return v1;
    case "forward":
      return m1;
    case "back":
      return w1;
    case "pause":
      return b1;
    case "reload":
      return x1;
    case "capture":
      return M1;
    case "rewind":
      return A1;
    case "stop":
      return $1;
    case "push":
      return P1;
  }
}, Bi = () => {
  const t = "button";
  var e = Di(), n = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", l = null, u = function(f) {
  }, c = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    symbolsize: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    shape: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? o.x : (o.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? o.y : (o.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? s : (s = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? l : (l = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return u = f, this;
      u(f);
    },
    actions: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    value: function(f) {
      return typeof f > "u" ? h : (h = f, this);
    },
    click: function() {
      h = (h + 1) % c.length, u(), C(this.parentNode).select("." + M.symbol).attr("d", ii(c[h])(r * n));
    },
    press: function(f) {
      h = (h + 1) % c.length, u(), f.select("#button_" + e).select("." + M.symbol).attr("d", ii(c[h])(r * n));
    }
  };
}, N1 = () => {
  const t = "slider", e = nr(".3f");
  var n = Di(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, l = "top-left", u = 4, c = null, h = function(d) {
  }, f = function(d) {
  }, p = [0, 1], g = 0, _ = null, w = ae().domain(p).range([0, r]).clamp(!0);
  const x = function(d, A, y = p) {
    const m = d.select("#slider_" + n);
    w.domain(y), g = A, m.selectAll("." + M.handle).transition().attr("cx", w(A)), a && m.select("." + M.label).text(_ + " = " + e(g)), h(), f();
  };
  return {
    type: t,
    scale: w,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? _ : (_ = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    girth: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    knob: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    show: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? s.x : (s.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? s.y : (s.y = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    labelpadding: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return h = d, this;
      h(d);
    },
    update_end: function(d) {
      if (typeof d == "function")
        return f = d, this;
      f(d);
    },
    range: function(d) {
      return typeof d > "u" ? p : (p = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? g : (g = d, this);
    },
    reset: x,
    click: x
  };
}, S1 = () => {
  const t = "toggle";
  var e = Di(), n = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(u) {
  }, l = 0;
  return {
    type: t,
    id: function(u) {
      return typeof u > "u" ? e : (e = u, this);
    },
    size: function(u) {
      return typeof u > "u" ? n : (n = u, this);
    },
    position: function(u) {
      return typeof u > "u" ? r : (r = u, this);
    },
    x: function(u) {
      return typeof u > "u" ? r.x : (r.x = u, this);
    },
    y: function(u) {
      return typeof u > "u" ? r.y : (r.y = u, this);
    },
    label: function(u) {
      return typeof u > "u" ? i : (i = u, this);
    },
    labelposition: function(u) {
      return typeof u > "u" ? o : (o = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? a : (a = u, this);
    },
    update: function(u) {
      if (typeof u == "function")
        return s = u, this;
      s(u);
    },
    value: function(u) {
      return typeof u > "u" ? l : (l = u, this);
    },
    click: function() {
      l = !l;
      const u = C(this.parentNode);
      u.select("." + M.handle).transition().attr("cx", l ? 2 * n : 0), u.classed(M.selected, l), s();
    },
    reset: function(u, c) {
      l = c;
      const h = u.select("#toggle_" + e);
      h.selectAll("." + M.handle).transition().attr("cx", l ? 2 * n : 0), h.classed(M.selected, l), s();
    }
  };
}, T1 = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = C(o).attr("class", M.widget + " " + M.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", M.background).on("click", t.click).on("mouseover", function() {
    C(this).classed(M.lit, !0), C(this.parentNode).select("." + M.symbol).classed(M.lit, !0);
  }).on("mouseout", function() {
    C(this).classed(M.lit, !1), C(this.parentNode).select("." + M.symbol).classed(M.lit, !1);
  }), a.append("path").attr("d", ii(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", M.symbol), r) {
    const l = qi(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", M.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return o;
}, gu = (t, e) => {
  const n = nt();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, k1 = (t, e) => {
  const n = nr(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = C(l).attr("class", M.widget + " " + M.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2, c = (x) => {
    const d = x && x.sourceEvent ? x.sourceEvent : x;
    return d ? d.clientX != null ? d.clientX : d.touches && d.touches.length ? d.touches[0].clientX : d.changedTouches && d.changedTouches.length ? d.changedTouches[0].clientX : null : null;
  }, h = (x, d) => {
    const A = c(x);
    if (A == null) return null;
    const y = d.getBoundingClientRect(), m = A - y.left, S = d.width && d.width.baseVal ? d.width.baseVal.value : y.width, T = y.width ? S / y.width : 1;
    return m * T - u;
  };
  s.append("path").attr("d", gu(t.size(), t.girth())).attr("class", M.track), s.append("circle").attr("class", M.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", M.track_overlay).on("click", function(x) {
    const d = h(x, this);
    if (d == null) return;
    const A = Math.max(0, Math.min(t.size(), d));
    t.value(a.invert(A)), t.update(), t.update_end(), s.selectAll("." + M.handle).attr("cx", a(t.value())), t.show() && s.select("." + M.label).text(t.label() + " = " + n(t.value()));
  }).call(
    p0().on("drag", function(x) {
      const d = h(x, this);
      if (d == null) return;
      const A = Math.max(0, Math.min(t.size(), d));
      t.value(a.invert(A)), t.update(), s.selectAll("." + M.handle).attr("cx", a(t.value())), t.show() && s.select("." + M.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(x) {
      t.update_end();
    })
  );
  var f, p, g, _ = "bottom";
  const w = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? p = t.labelposition().match(/bottom/i) != null ? an([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + w : -an([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - w : p = t.labelposition().match(/bottom/i) != null ? an([t.girth() / 2, t.knob()]) + 7 + w : -an([t.girth() / 2, t.knob()]) - 7 - w, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, g = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", _ = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", M.label).style("text-anchor", g).style("alignment-baseline", _).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + p + ")"), l;
}, E1 = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = C(a).attr("class", M.widget + " " + M.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(M.selected, t.value() == 1);
  if (s.append("path").attr("d", gu(2 * t.size(), 2 * t.size())).attr("class", M.track), s.append("circle").attr("class", M.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", M.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = qi(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", M.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return a;
}, O1 = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = Mp(a), l = ae().domain([0, a - 1]).range([0, t.size()]), u = ae().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = C(c).attr("class", M.widget + " " + M.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + M.radiobutton).data(s).enter().append("g").attr("class", M.radiobutton).attr("id", (_) => "b" + _).attr("transform", (_) => t.orientation() == "vertical" ? "translate(0," + u(_) + ")" : "translate(" + l(_) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", o / 2)), f.attr("class", M.background).on("mouseover", function() {
    C(this).classed(M.lit, !0), C(this.parentNode).select("." + M.symbol).classed(M.lit, !0);
  }).on("mouseout", function() {
    C(this).classed(M.lit, !1), C(this.parentNode).select("." + M.symbol).classed(M.lit, !1);
  }), p.attr("class", M.symbol), p.filter((_) => _ == t.value()).classed(M.selected, !0), h.on("click", t.click);
  const g = qi(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", M.label).text(function(_, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), c;
}, Nr = (t, e) => {
  switch (t.type) {
    case "button":
      return T1(t);
    case "slider":
      return k1(t);
    case "radio":
      return O1(t);
    case "toggle":
      return E1(t);
  }
}, z1 = "_displayPanel_pb0r4_1", C1 = "_controlPanel_pb0r4_8", ya = {
  displayPanel: z1,
  controlPanel: C1
}, I1 = (t, e) => {
  const n = i1(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = rf("#" + t).classed(t + " " + e.container_class, !0), i = t + "_display", o = t + "_controls", a = r.append("div").attr("id", i).attr("class", ya.displayPanel).classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), s = r.append("div").attr("id", o).attr("class", "d3-widgets " + ya.controlPanel).classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height).style("width", "100%").style("height", "100%");
  return e.debug && s.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").style("fill", "black"), { display: a, controls: s, grid: n };
};
var yu = typeof global == "object" && global && global.Object === Object && global, R1 = typeof self == "object" && self && self.Object === Object && self, xt = yu || R1 || Function("return this")(), St = xt.Symbol, _u = Object.prototype, j1 = _u.hasOwnProperty, F1 = _u.toString, ye = St ? St.toStringTag : void 0;
function L1(t) {
  var e = j1.call(t, ye), n = t[ye];
  try {
    t[ye] = void 0;
    var r = !0;
  } catch {
  }
  var i = F1.call(t);
  return r && (e ? t[ye] = n : delete t[ye]), i;
}
var D1 = Object.prototype, q1 = D1.toString;
function B1(t) {
  return q1.call(t);
}
var H1 = "[object Null]", X1 = "[object Undefined]", _a = St ? St.toStringTag : void 0;
function Gt(t) {
  return t == null ? t === void 0 ? X1 : H1 : _a && _a in Object(t) ? L1(t) : B1(t);
}
function Tt(t) {
  return t != null && typeof t == "object";
}
var U1 = "[object Symbol]";
function We(t) {
  return typeof t == "symbol" || Tt(t) && Gt(t) == U1;
}
function fe(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var H = Array.isArray, va = St ? St.prototype : void 0, ma = va ? va.toString : void 0;
function vu(t) {
  if (typeof t == "string")
    return t;
  if (H(t))
    return fe(t, vu) + "";
  if (We(t))
    return ma ? ma.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var G1 = /\s/;
function Y1(t) {
  for (var e = t.length; e-- && G1.test(t.charAt(e)); )
    ;
  return e;
}
var V1 = /^\s+/;
function K1(t) {
  return t && t.slice(0, Y1(t) + 1).replace(V1, "");
}
function _t(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var wa = NaN, W1 = /^[-+]0x[0-9a-f]+$/i, Z1 = /^0b[01]+$/i, J1 = /^0o[0-7]+$/i, Q1 = parseInt;
function tw(t) {
  if (typeof t == "number")
    return t;
  if (We(t))
    return wa;
  if (_t(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = _t(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = K1(t);
  var n = Z1.test(t);
  return n || J1.test(t) ? Q1(t.slice(2), n ? 2 : 8) : W1.test(t) ? wa : +t;
}
var ba = 1 / 0, ew = 17976931348623157e292;
function Sr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = tw(t), t === ba || t === -ba) {
    var e = t < 0 ? -1 : 1;
    return e * ew;
  }
  return t === t ? t : 0;
}
function ur(t) {
  return t;
}
var nw = "[object AsyncFunction]", rw = "[object Function]", iw = "[object GeneratorFunction]", ow = "[object Proxy]";
function mu(t) {
  if (!_t(t))
    return !1;
  var e = Gt(t);
  return e == rw || e == iw || e == nw || e == ow;
}
var Tr = xt["__core-js_shared__"], xa = (function() {
  var t = /[^.]+$/.exec(Tr && Tr.keys && Tr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function aw(t) {
  return !!xa && xa in t;
}
var sw = Function.prototype, uw = sw.toString;
function Yt(t) {
  if (t != null) {
    try {
      return uw.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var lw = /[\\^$.*+?()[\]{}|]/g, cw = /^\[object .+?Constructor\]$/, fw = Function.prototype, hw = Object.prototype, pw = fw.toString, dw = hw.hasOwnProperty, gw = RegExp(
  "^" + pw.call(dw).replace(lw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yw(t) {
  if (!_t(t) || aw(t))
    return !1;
  var e = mu(t) ? gw : cw;
  return e.test(Yt(t));
}
function _w(t, e) {
  return t == null ? void 0 : t[e];
}
function Vt(t, e) {
  var n = _w(t, e);
  return yw(n) ? n : void 0;
}
var oi = Vt(xt, "WeakMap");
function vw(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
function mw(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var ww = 800, bw = 16, xw = Date.now;
function Mw(t) {
  var e = 0, n = 0;
  return function() {
    var r = xw(), i = bw - (r - n);
    if (n = r, i > 0) {
      if (++e >= ww)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function Aw(t) {
  return function() {
    return t;
  };
}
var Xn = (function() {
  try {
    var t = Vt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), $w = Xn ? function(t, e) {
  return Xn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Aw(e),
    writable: !0
  });
} : ur, Pw = Mw($w);
function Nw(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var Sw = 9007199254740991, Tw = /^(?:0|[1-9]\d*)$/;
function lr(t, e) {
  var n = typeof t;
  return e = e ?? Sw, !!e && (n == "number" || n != "symbol" && Tw.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function kw(t, e, n) {
  e == "__proto__" && Xn ? Xn(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function cr(t, e) {
  return t === e || t !== t && e !== e;
}
var Ew = Object.prototype, Ow = Ew.hasOwnProperty;
function zw(t, e, n) {
  var r = t[e];
  (!(Ow.call(t, e) && cr(r, n)) || n === void 0 && !(e in t)) && kw(t, e, n);
}
var Ma = Math.max;
function Cw(t, e, n) {
  return e = Ma(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, o = Ma(r.length - e, 0), a = Array(o); ++i < o; )
      a[i] = r[e + i];
    i = -1;
    for (var s = Array(e + 1); ++i < e; )
      s[i] = r[i];
    return s[e] = n(a), vw(t, this, s);
  };
}
function Iw(t, e) {
  return Pw(Cw(t, e, ur), t + "");
}
var Rw = 9007199254740991;
function Hi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Rw;
}
function he(t) {
  return t != null && Hi(t.length) && !mu(t);
}
function jw(t, e, n) {
  if (!_t(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? he(n) && lr(e, n.length) : r == "string" && e in n) ? cr(n[e], t) : !1;
}
var Fw = Object.prototype;
function wu(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Fw;
  return t === n;
}
function bu(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Lw = "[object Arguments]";
function Aa(t) {
  return Tt(t) && Gt(t) == Lw;
}
var xu = Object.prototype, Dw = xu.hasOwnProperty, qw = xu.propertyIsEnumerable, Mu = Aa(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Aa : function(t) {
  return Tt(t) && Dw.call(t, "callee") && !qw.call(t, "callee");
};
function Bw() {
  return !1;
}
var Au = typeof exports == "object" && exports && !exports.nodeType && exports, $a = Au && typeof module == "object" && module && !module.nodeType && module, Hw = $a && $a.exports === Au, Pa = Hw ? xt.Buffer : void 0, Xw = Pa ? Pa.isBuffer : void 0, ai = Xw || Bw, Uw = "[object Arguments]", Gw = "[object Array]", Yw = "[object Boolean]", Vw = "[object Date]", Kw = "[object Error]", Ww = "[object Function]", Zw = "[object Map]", Jw = "[object Number]", Qw = "[object Object]", tb = "[object RegExp]", eb = "[object Set]", nb = "[object String]", rb = "[object WeakMap]", ib = "[object ArrayBuffer]", ob = "[object DataView]", ab = "[object Float32Array]", sb = "[object Float64Array]", ub = "[object Int8Array]", lb = "[object Int16Array]", cb = "[object Int32Array]", fb = "[object Uint8Array]", hb = "[object Uint8ClampedArray]", pb = "[object Uint16Array]", db = "[object Uint32Array]", N = {};
N[ab] = N[sb] = N[ub] = N[lb] = N[cb] = N[fb] = N[hb] = N[pb] = N[db] = !0;
N[Uw] = N[Gw] = N[ib] = N[Yw] = N[ob] = N[Vw] = N[Kw] = N[Ww] = N[Zw] = N[Jw] = N[Qw] = N[tb] = N[eb] = N[nb] = N[rb] = !1;
function gb(t) {
  return Tt(t) && Hi(t.length) && !!N[Gt(t)];
}
function yb(t) {
  return function(e) {
    return t(e);
  };
}
var $u = typeof exports == "object" && exports && !exports.nodeType && exports, Ae = $u && typeof module == "object" && module && !module.nodeType && module, _b = Ae && Ae.exports === $u, kr = _b && yu.process, Na = (function() {
  try {
    var t = Ae && Ae.require && Ae.require("util").types;
    return t || kr && kr.binding && kr.binding("util");
  } catch {
  }
})(), Sa = Na && Na.isTypedArray, Pu = Sa ? yb(Sa) : gb, vb = Object.prototype, mb = vb.hasOwnProperty;
function Nu(t, e) {
  var n = H(t), r = !n && Mu(t), i = !n && !r && ai(t), o = !n && !r && !i && Pu(t), a = n || r || i || o, s = a ? bu(t.length, String) : [], l = s.length;
  for (var u in t)
    (e || mb.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    lr(u, l))) && s.push(u);
  return s;
}
function Su(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var wb = Su(Object.keys, Object), bb = Object.prototype, xb = bb.hasOwnProperty;
function Mb(t) {
  if (!wu(t))
    return wb(t);
  var e = [];
  for (var n in Object(t))
    xb.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Ze(t) {
  return he(t) ? Nu(t) : Mb(t);
}
function Ab(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var $b = Object.prototype, Pb = $b.hasOwnProperty;
function Nb(t) {
  if (!_t(t))
    return Ab(t);
  var e = wu(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !Pb.call(t, r)) || n.push(r);
  return n;
}
function Sb(t) {
  return he(t) ? Nu(t, !0) : Nb(t);
}
var Tb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kb = /^\w*$/;
function Xi(t, e) {
  if (H(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || We(t) ? !0 : kb.test(t) || !Tb.test(t) || e != null && t in Object(e);
}
var Fe = Vt(Object, "create");
function Eb() {
  this.__data__ = Fe ? Fe(null) : {}, this.size = 0;
}
function Ob(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var zb = "__lodash_hash_undefined__", Cb = Object.prototype, Ib = Cb.hasOwnProperty;
function Rb(t) {
  var e = this.__data__;
  if (Fe) {
    var n = e[t];
    return n === zb ? void 0 : n;
  }
  return Ib.call(e, t) ? e[t] : void 0;
}
var jb = Object.prototype, Fb = jb.hasOwnProperty;
function Lb(t) {
  var e = this.__data__;
  return Fe ? e[t] !== void 0 : Fb.call(e, t);
}
var Db = "__lodash_hash_undefined__";
function qb(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Fe && e === void 0 ? Db : e, this;
}
function Xt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Xt.prototype.clear = Eb;
Xt.prototype.delete = Ob;
Xt.prototype.get = Rb;
Xt.prototype.has = Lb;
Xt.prototype.set = qb;
function Bb() {
  this.__data__ = [], this.size = 0;
}
function fr(t, e) {
  for (var n = t.length; n--; )
    if (cr(t[n][0], e))
      return n;
  return -1;
}
var Hb = Array.prototype, Xb = Hb.splice;
function Ub(t) {
  var e = this.__data__, n = fr(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Xb.call(e, n, 1), --this.size, !0;
}
function Gb(t) {
  var e = this.__data__, n = fr(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Yb(t) {
  return fr(this.__data__, t) > -1;
}
function Vb(t, e) {
  var n = this.__data__, r = fr(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function Mt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Mt.prototype.clear = Bb;
Mt.prototype.delete = Ub;
Mt.prototype.get = Gb;
Mt.prototype.has = Yb;
Mt.prototype.set = Vb;
var Le = Vt(xt, "Map");
function Kb() {
  this.size = 0, this.__data__ = {
    hash: new Xt(),
    map: new (Le || Mt)(),
    string: new Xt()
  };
}
function Wb(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function hr(t, e) {
  var n = t.__data__;
  return Wb(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Zb(t) {
  var e = hr(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Jb(t) {
  return hr(this, t).get(t);
}
function Qb(t) {
  return hr(this, t).has(t);
}
function tx(t, e) {
  var n = hr(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function At(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
At.prototype.clear = Kb;
At.prototype.delete = Zb;
At.prototype.get = Jb;
At.prototype.has = Qb;
At.prototype.set = tx;
var ex = "Expected a function";
function Ui(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(ex);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return n.cache = o.set(i, a) || o, a;
  };
  return n.cache = new (Ui.Cache || At)(), n;
}
Ui.Cache = At;
var nx = 500;
function rx(t) {
  var e = Ui(t, function(r) {
    return n.size === nx && n.clear(), r;
  }), n = e.cache;
  return e;
}
var ix = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ox = /\\(\\)?/g, ax = rx(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(ix, function(n, r, i, o) {
    e.push(i ? o.replace(ox, "$1") : r || n);
  }), e;
});
function pr(t) {
  return t == null ? "" : vu(t);
}
function dr(t, e) {
  return H(t) ? t : Xi(t, e) ? [t] : ax(pr(t));
}
function Je(t) {
  if (typeof t == "string" || We(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Gi(t, e) {
  e = dr(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Je(e[n++])];
  return n && n == r ? t : void 0;
}
function sx(t, e, n) {
  var r = t == null ? void 0 : Gi(t, e);
  return r === void 0 ? n : r;
}
function Tu(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var ux = Su(Object.getPrototypeOf, Object);
function lx(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + e];
  return o;
}
function cx(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, !e && n >= r ? t : lx(t, e, n);
}
var fx = "\\ud800-\\udfff", hx = "\\u0300-\\u036f", px = "\\ufe20-\\ufe2f", dx = "\\u20d0-\\u20ff", gx = hx + px + dx, yx = "\\ufe0e\\ufe0f", _x = "\\u200d", vx = RegExp("[" + _x + fx + gx + yx + "]");
function ku(t) {
  return vx.test(t);
}
function mx(t) {
  return t.split("");
}
var Eu = "\\ud800-\\udfff", wx = "\\u0300-\\u036f", bx = "\\ufe20-\\ufe2f", xx = "\\u20d0-\\u20ff", Mx = wx + bx + xx, Ax = "\\ufe0e\\ufe0f", $x = "[" + Eu + "]", si = "[" + Mx + "]", ui = "\\ud83c[\\udffb-\\udfff]", Px = "(?:" + si + "|" + ui + ")", Ou = "[^" + Eu + "]", zu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Cu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Nx = "\\u200d", Iu = Px + "?", Ru = "[" + Ax + "]?", Sx = "(?:" + Nx + "(?:" + [Ou, zu, Cu].join("|") + ")" + Ru + Iu + ")*", Tx = Ru + Iu + Sx, kx = "(?:" + [Ou + si + "?", si, zu, Cu, $x].join("|") + ")", Ex = RegExp(ui + "(?=" + ui + ")|" + kx + Tx, "g");
function Ox(t) {
  return t.match(Ex) || [];
}
function zx(t) {
  return ku(t) ? Ox(t) : mx(t);
}
function Cx(t) {
  return function(e) {
    e = pr(e);
    var n = ku(e) ? zx(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? cx(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var Ix = Cx("toUpperCase");
function Rx(t) {
  return Ix(pr(t).toLowerCase());
}
function jx() {
  this.__data__ = new Mt(), this.size = 0;
}
function Fx(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Lx(t) {
  return this.__data__.get(t);
}
function Dx(t) {
  return this.__data__.has(t);
}
var qx = 200;
function Bx(t, e) {
  var n = this.__data__;
  if (n instanceof Mt) {
    var r = n.__data__;
    if (!Le || r.length < qx - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new At(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function dt(t) {
  var e = this.__data__ = new Mt(t);
  this.size = e.size;
}
dt.prototype.clear = jx;
dt.prototype.delete = Fx;
dt.prototype.get = Lx;
dt.prototype.has = Dx;
dt.prototype.set = Bx;
function Yi(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (o[i++] = a);
  }
  return o;
}
function ju() {
  return [];
}
var Hx = Object.prototype, Xx = Hx.propertyIsEnumerable, Ta = Object.getOwnPropertySymbols, Fu = Ta ? function(t) {
  return t == null ? [] : (t = Object(t), Yi(Ta(t), function(e) {
    return Xx.call(t, e);
  }));
} : ju, Ux = Object.getOwnPropertySymbols, Gx = Ux ? function(t) {
  for (var e = []; t; )
    Tu(e, Fu(t)), t = ux(t);
  return e;
} : ju;
function Lu(t, e, n) {
  var r = e(t);
  return H(t) ? r : Tu(r, n(t));
}
function ka(t) {
  return Lu(t, Ze, Fu);
}
function Yx(t) {
  return Lu(t, Sb, Gx);
}
var li = Vt(xt, "DataView"), ci = Vt(xt, "Promise"), fi = Vt(xt, "Set"), Ea = "[object Map]", Vx = "[object Object]", Oa = "[object Promise]", za = "[object Set]", Ca = "[object WeakMap]", Ia = "[object DataView]", Kx = Yt(li), Wx = Yt(Le), Zx = Yt(ci), Jx = Yt(fi), Qx = Yt(oi), ht = Gt;
(li && ht(new li(new ArrayBuffer(1))) != Ia || Le && ht(new Le()) != Ea || ci && ht(ci.resolve()) != Oa || fi && ht(new fi()) != za || oi && ht(new oi()) != Ca) && (ht = function(t) {
  var e = Gt(t), n = e == Vx ? t.constructor : void 0, r = n ? Yt(n) : "";
  if (r)
    switch (r) {
      case Kx:
        return Ia;
      case Wx:
        return Ea;
      case Zx:
        return Oa;
      case Jx:
        return za;
      case Qx:
        return Ca;
    }
  return e;
});
var Ra = xt.Uint8Array, t2 = "__lodash_hash_undefined__";
function e2(t) {
  return this.__data__.set(t, t2), this;
}
function n2(t) {
  return this.__data__.has(t);
}
function Un(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new At(); ++e < n; )
    this.add(t[e]);
}
Un.prototype.add = Un.prototype.push = e2;
Un.prototype.has = n2;
function r2(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function i2(t, e) {
  return t.has(e);
}
var o2 = 1, a2 = 2;
function Du(t, e, n, r, i, o) {
  var a = n & o2, s = t.length, l = e.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), c = o.get(e);
  if (u && c)
    return u == e && c == t;
  var h = -1, f = !0, p = n & a2 ? new Un() : void 0;
  for (o.set(t, e), o.set(e, t); ++h < s; ) {
    var g = t[h], _ = e[h];
    if (r)
      var w = a ? r(_, g, h, e, t, o) : r(g, _, h, t, e, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!r2(e, function(x, d) {
        if (!i2(p, d) && (g === x || i(g, x, n, r, o)))
          return p.push(d);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === _ || i(g, _, n, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), f;
}
function qu(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function s2(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var u2 = 1, l2 = 2, c2 = "[object Boolean]", f2 = "[object Date]", h2 = "[object Error]", p2 = "[object Map]", d2 = "[object Number]", g2 = "[object RegExp]", y2 = "[object Set]", _2 = "[object String]", v2 = "[object Symbol]", m2 = "[object ArrayBuffer]", w2 = "[object DataView]", ja = St ? St.prototype : void 0, Er = ja ? ja.valueOf : void 0;
function b2(t, e, n, r, i, o, a) {
  switch (n) {
    case w2:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case m2:
      return !(t.byteLength != e.byteLength || !o(new Ra(t), new Ra(e)));
    case c2:
    case f2:
    case d2:
      return cr(+t, +e);
    case h2:
      return t.name == e.name && t.message == e.message;
    case g2:
    case _2:
      return t == e + "";
    case p2:
      var s = qu;
    case y2:
      var l = r & u2;
      if (s || (s = s2), t.size != e.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == e;
      r |= l2, a.set(t, e);
      var c = Du(s(t), s(e), r, i, o, a);
      return a.delete(t), c;
    case v2:
      if (Er)
        return Er.call(t) == Er.call(e);
  }
  return !1;
}
var x2 = 1, M2 = Object.prototype, A2 = M2.hasOwnProperty;
function $2(t, e, n, r, i, o) {
  var a = n & x2, s = ka(t), l = s.length, u = ka(e), c = u.length;
  if (l != c && !a)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(a ? f in e : A2.call(e, f)))
      return !1;
  }
  var p = o.get(t), g = o.get(e);
  if (p && g)
    return p == e && g == t;
  var _ = !0;
  o.set(t, e), o.set(e, t);
  for (var w = a; ++h < l; ) {
    f = s[h];
    var x = t[f], d = e[f];
    if (r)
      var A = a ? r(d, x, f, e, t, o) : r(x, d, f, t, e, o);
    if (!(A === void 0 ? x === d || i(x, d, n, r, o) : A)) {
      _ = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (_ && !w) {
    var y = t.constructor, m = e.constructor;
    y != m && "constructor" in t && "constructor" in e && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (_ = !1);
  }
  return o.delete(t), o.delete(e), _;
}
var P2 = 1, Fa = "[object Arguments]", La = "[object Array]", pn = "[object Object]", N2 = Object.prototype, Da = N2.hasOwnProperty;
function S2(t, e, n, r, i, o) {
  var a = H(t), s = H(e), l = a ? La : ht(t), u = s ? La : ht(e);
  l = l == Fa ? pn : l, u = u == Fa ? pn : u;
  var c = l == pn, h = u == pn, f = l == u;
  if (f && ai(t)) {
    if (!ai(e))
      return !1;
    a = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new dt()), a || Pu(t) ? Du(t, e, n, r, i, o) : b2(t, e, l, n, r, i, o);
  if (!(n & P2)) {
    var p = c && Da.call(t, "__wrapped__"), g = h && Da.call(e, "__wrapped__");
    if (p || g) {
      var _ = p ? t.value() : t, w = g ? e.value() : e;
      return o || (o = new dt()), i(_, w, n, r, o);
    }
  }
  return f ? (o || (o = new dt()), $2(t, e, n, r, i, o)) : !1;
}
function Vi(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !Tt(t) && !Tt(e) ? t !== t && e !== e : S2(t, e, n, r, Vi, i);
}
var T2 = 1, k2 = 2;
function E2(t, e, n, r) {
  var i = n.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = n[i];
    var s = a[0], l = t[s], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new dt(), h;
      if (!(h === void 0 ? Vi(u, l, T2 | k2, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Bu(t) {
  return t === t && !_t(t);
}
function O2(t) {
  for (var e = Ze(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Bu(i)];
  }
  return e;
}
function Hu(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function z2(t) {
  var e = O2(t);
  return e.length == 1 && e[0][2] ? Hu(e[0][0], e[0][1]) : function(n) {
    return n === t || E2(n, t, e);
  };
}
function C2(t, e) {
  return t != null && e in Object(t);
}
function Xu(t, e, n) {
  e = dr(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var a = Je(e[r]);
    if (!(o = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Hi(i) && lr(a, i) && (H(t) || Mu(t)));
}
function I2(t, e) {
  return t != null && Xu(t, e, C2);
}
var R2 = 1, j2 = 2;
function F2(t, e) {
  return Xi(t) && Bu(e) ? Hu(Je(t), e) : function(n) {
    var r = sx(n, t);
    return r === void 0 && r === e ? I2(n, t) : Vi(e, r, R2 | j2);
  };
}
function Uu(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function L2(t) {
  return function(e) {
    return Gi(e, t);
  };
}
function D2(t) {
  return Xi(t) ? Uu(Je(t)) : L2(t);
}
function Qe(t) {
  return typeof t == "function" ? t : t == null ? ur : typeof t == "object" ? H(t) ? F2(t[0], t[1]) : z2(t) : D2(t);
}
function q2(t) {
  return function(e, n, r) {
    for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
      var l = a[++i];
      if (n(o[l], l, o) === !1)
        break;
    }
    return e;
  };
}
var B2 = q2();
function H2(t, e) {
  return t && B2(t, e, Ze);
}
function X2(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!he(n))
      return t(n, r);
    for (var i = n.length, o = -1, a = Object(n); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return n;
  };
}
var Ki = X2(H2);
function U2(t) {
  return Tt(t) && he(t);
}
function G2(t) {
  return typeof t == "function" ? t : ur;
}
function R(t, e) {
  var n = H(t) ? Nw : Ki;
  return n(t, G2(e));
}
function Y2(t, e) {
  return fe(e, function(n) {
    return [n, t[n]];
  });
}
function V2(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var K2 = "[object Map]", W2 = "[object Set]";
function Z2(t) {
  return function(e) {
    var n = ht(e);
    return n == K2 ? qu(e) : n == W2 ? V2(e) : Y2(e, t(e));
  };
}
var Gu = Z2(Ze);
function J2(t, e) {
  var n = [];
  return Ki(t, function(r, i, o) {
    e(r, i, o) && n.push(r);
  }), n;
}
function Kt(t, e) {
  var n = H(t) ? Yi : J2;
  return n(t, Qe(e));
}
function Q2(t, e) {
  var n = -1, r = he(t) ? Array(t.length) : [];
  return Ki(t, function(i, o, a) {
    r[++n] = e(i, o, a);
  }), r;
}
function tn(t, e) {
  var n = H(t) ? fe : Q2;
  return n(t, Qe(e));
}
function tM(t, e) {
  return t > e;
}
var eM = Object.prototype, nM = eM.hasOwnProperty;
function rM(t, e) {
  return t != null && nM.call(t, e);
}
function iM(t, e) {
  return t != null && Xu(t, e, rM);
}
function oM(t, e) {
  return fe(e, function(n) {
    return t[n];
  });
}
function aM(t) {
  return t == null ? [] : oM(t, Ze(t));
}
var sM = "[object Boolean]";
function uM(t) {
  return t === !0 || t === !1 || Tt(t) && Gt(t) == sM;
}
function lM(t, e, n) {
  for (var r = -1, i = t.length; ++r < i; ) {
    var o = t[r], a = e(o);
    if (a != null && (s === void 0 ? a === a && !We(a) : n(a, s)))
      var s = a, l = o;
  }
  return l;
}
function cM(t, e) {
  return t && t.length ? lM(t, Qe(e), tM) : void 0;
}
function fM(t, e) {
  for (var n, r = -1, i = t.length; ++r < i; ) {
    var o = e(t[r]);
    o !== void 0 && (n = n === void 0 ? o : n + o);
  }
  return n;
}
function hM(t, e, n, r) {
  if (!_t(t))
    return t;
  e = dr(e, t);
  for (var i = -1, o = e.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var l = Je(e[i]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var c = s[l];
      u = void 0, u === void 0 && (u = _t(c) ? c : lr(e[i + 1]) ? [] : {});
    }
    zw(s, l, u), s = s[l];
  }
  return t;
}
function pM(t, e, n) {
  for (var r = -1, i = e.length, o = {}; ++r < i; ) {
    var a = e[r], s = Gi(t, a);
    n(s, a) && hM(o, dr(a, t), s);
  }
  return o;
}
function Yu(t, e) {
  if (t == null)
    return {};
  var n = fe(Yx(t), function(r) {
    return [r];
  });
  return e = Qe(e), pM(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var dM = Math.floor, gM = Math.random;
function yM(t, e) {
  return t + dM(gM() * (e - t + 1));
}
var _M = Math.ceil, vM = Math.max;
function mM(t, e, n, r) {
  for (var i = -1, o = vM(_M((e - t) / (n || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += n;
  return a;
}
function wM(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && jw(e, n, r) && (n = r = void 0), e = Sr(e), n === void 0 ? (n = e, e = 0) : n = Sr(n), r = r === void 0 ? e < n ? 1 : -1 : Sr(r), mM(e, n, r);
  };
}
var Gn = wM();
function bM() {
  var t = arguments, e = pr(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
function Vu(t, e) {
  var n = -1, r = t.length, i = r - 1;
  for (e = e === void 0 ? r : e; ++n < e; ) {
    var o = yM(n, i), a = t[o];
    t[o] = t[n], t[n] = a;
  }
  return t.length = e, t;
}
function xM(t) {
  return Vu(mw(t));
}
function MM(t) {
  return Vu(aM(t));
}
function AM(t) {
  var e = H(t) ? xM : MM;
  return e(t);
}
function $M(t, e) {
  return t && t.length ? fM(t, Qe(e)) : 0;
}
var PM = Math.max;
function NM(t) {
  if (!(t && t.length))
    return [];
  var e = 0;
  return t = Yi(t, function(n) {
    if (U2(n))
      return e = PM(n.length, e), !0;
  }), bu(e, function(n) {
    return fe(t, Uu(n));
  });
}
var Yn = Iw(NM);
const I = {
  widgets: {
    slider_size: 220,
    slider_gap: 1.5,
    slider_anchor: { x: 6, y: 1 },
    toggle_anchor: { x: 1, y: 7 },
    toggle_label_pos: "right",
    toggle_gap: 1,
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 }
  },
  simulation: {
    delay: 10
  }
}, b = {
  N: 4e3,
  M: 40,
  L: 81,
  agentsize: 2,
  dt: 0.1,
  responsiveness: {
    range: [0.1, 0.5],
    default: 0.3
  },
  random_movement: {
    range: [0, 0.5],
    default: 0.1
  },
  recovery_time: {
    range: [10, 40],
    default: 20
  },
  cAMP_pulse_strength: {
    range: [100, 300],
    default: 200
  },
  cAMP_life_time: {
    range: [0, -2],
    default: -1.13
  },
  cAMP_diffusion: {
    range: [0, 1],
    default: 0.64
  },
  activation_threshold: {
    range: [2, 10],
    default: 9.15
  },
  movement_threshold: {
    range: [2, 20],
    default: 15
  },
  hide_cells: {
    default: !1
  },
  hide_cAMP: {
    default: !1
  },
  show_cell_state: {
    default: !1
  },
  switch_off_pacemaker: {
    default: !1
  },
  advanced_settings: {
    default: !1
  }
}, Ku = (t) => {
  b.advanced_settings.widget.value() == !0 ? (t.select("#slider_" + b.cAMP_life_time.widget.id()).transition().style("opacity", null), t.select("#slider_" + b.cAMP_life_time.widget.id()).selectAll("*").style("pointer-events", null), t.select("#slider_" + b.cAMP_diffusion.widget.id()).transition().style("opacity", null), t.select("#slider_" + b.cAMP_diffusion.widget.id()).selectAll("*").style("pointer-events", null), t.select("#slider_" + b.activation_threshold.widget.id()).transition().style("opacity", null), t.select("#slider_" + b.activation_threshold.widget.id()).selectAll("*").style("pointer-events", null), t.select("#slider_" + b.movement_threshold.widget.id()).transition().style("opacity", null), t.select("#slider_" + b.movement_threshold.widget.id()).selectAll("*").style("pointer-events", null)) : (t.select("#slider_" + b.cAMP_life_time.widget.id()).transition().style("opacity", 0), t.select("#slider_" + b.cAMP_life_time.widget.id()).selectAll("*").style("pointer-events", "none"), t.select("#slider_" + b.cAMP_diffusion.widget.id()).transition().style("opacity", 0), t.select("#slider_" + b.cAMP_diffusion.widget.id()).selectAll("*").style("pointer-events", "none"), t.select("#slider_" + b.activation_threshold.widget.id()).transition().style("opacity", 0), t.select("#slider_" + b.activation_threshold.widget.id()).selectAll("*").style("pointer-events", "none"), t.select("#slider_" + b.movement_threshold.widget.id()).transition().style("opacity", 0), t.select("#slider_" + b.movement_threshold.widget.id()).selectAll("*").style("pointer-events", "none"));
}, Wu = (t) => tn(Gu(t), (e) => {
  e[1].id = e[0], e[1].label = e[1].label || bM(Rx(e[0]), /_/g, " ");
}), Zu = (t) => tn(Gu(t), (e) => e[1]), Ju = (t, e) => R(t, (n, r) => n.widget = e[r]), SM = (t) => Yu(t, (e) => iM(e, "range")), TM = (t) => Yu(t, (e) => uM(e.default));
Ye().domain([0, 360]).range([0, 2 * Math.PI]);
Ye().range([0, 360]).domain([0, 2 * Math.PI]);
const Wi = SM(b), Zi = TM(b);
Wu(Wi);
Wu(Zi);
const Qu = Zu(Wi), tl = Zu(Zi), Ft = tn(
  Qu,
  (t) => N1().id(t.id).label(t.label).range(t.range).value(t.default).size(I.widgets.slider_size)
);
Ft[3].label("cAMP Pulse Strength");
Ft[4].label("cAMP Life Time");
Ft[5].label("cAMP Diffusion");
const $e = tn(
  tl,
  (t) => S1().id(t.id).label(t.label).value(t.default)
);
$e[1].label("Hide cAMP");
Ju(tl, $e);
Ju(Qu, Ft);
const Nt = Bi().actions(["play", "pause"]), gr = Bi().actions(["back"]), yr = Bi().actions(["rewind"]), kM = [Nt, gr, yr], EM = (t, e) => {
  const n = e.position(I.widgets.slider_anchor.x, Gn(Ft.length).map((i) => I.widgets.slider_anchor.y + I.widgets.slider_gap * i)), r = e.position(I.widgets.toggle_anchor.x, Gn($e.length).map((i) => I.widgets.toggle_anchor.y + I.widgets.toggle_gap * i));
  Ft.forEach((i, o) => i.position(n[o])), $e.forEach((i, o) => i.position(r[o]).labelposition(I.widgets.toggle_label_pos)), Nt.position(e.position(I.widgets.playbutton_anchor.x, I.widgets.playbutton_anchor.y)).size(I.widgets.playbutton_size), yr.position(e.position(I.widgets.backbutton_anchor.x, I.widgets.backbutton_anchor.y)), gr.position(e.position(I.widgets.resetbutton_anchor.x, I.widgets.resetbutton_anchor.y)), t.selectAll(null).data(Ft).enter().append(Nr), t.selectAll(null).data($e).enter().append(Nr), t.selectAll(null).data(kM).enter().append(Nr), Ku(t);
}, OM = (t) => {
  R(Wi, (e) => e.widget.reset(t, e.default)), R(Zi, (e) => e.widget.reset(t, e.default));
};
function el(t, e) {
  return [t % e, Math.floor(t / e)];
}
const zM = {
  n4: Yn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: Yn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function Or(t, e, n = "periodic", r = "n8") {
  const i = [];
  return zM[r].forEach((o) => {
    var a = o[1], s = o[0];
    const l = el(t, e), u = l[0], c = l[1], h = u + s, f = c + a;
    (n == "dirichlet" ? !(a == 0 && s == 0) && h < e && f < e && h >= 0 && f >= 0 : !(a == 0 && s == 0)) && i.push(e * ((f + e) % e) + (h + e) % e);
  }), i;
}
const CM = function(t) {
  var e = "periodic", n = 1, r = "n8";
  const i = 2 * t + 1;
  var o = n / i, a = o;
  const s = Gn(i * i).map(function(f) {
    const p = el(f, i);
    return {
      m: p[0],
      n: p[1],
      x: o * (p[0] + 0.5) - n / 2,
      y: a * (p[1] + 0.5) - n / 2
    };
  });
  s.forEach(function(f, p) {
    f.neighbors = Or(p, i, e, r).map((g) => s[g]), f.cell = () => [
      { x: f.x + o / 2, y: f.y + a / 2 },
      { x: f.x - o / 2, y: f.y + a / 2 },
      { x: f.x - o / 2, y: f.y - a / 2 },
      { x: f.x + o / 2, y: f.y - a / 2 },
      { x: f.x + o / 2, y: f.y + a / 2 }
    ], f.random_interior_point = () => ({
      x: f.x + o * (Math.random() - 0.5),
      y: f.y + a * (Math.random() - 0.5)
    });
  });
  const l = function(f) {
    return typeof f < "u" ? (s.forEach(function(p) {
      p.x = (p.m + 0.5) * f / i - f / 2, p.y = (p.n + 0.5) * f / i - f / 2;
    }), n = f, o = n / i, a = n / i, this.L = n, this) : n;
  }, u = function(f) {
    return typeof f < "u" ? (s.forEach(function(p, g) {
      p.neighbors = Or(g, i, f, r).map((_) => s[_]);
    }), e = f, s.forEach((p) => {
      p.is_boundary = e == "dirichlet" && (p.n == 0 || p.n == 2 * t || p.m == 0 || p.m == 2 * t);
    }), this) : e;
  }, c = function(f) {
    return typeof f < "u" ? (s.forEach(function(p, g) {
      p.neighbors = Or(g, i, e, f).map((_) => s[_]);
    }), r = f, this) : r;
  }, h = function() {
    return e === "periodic" ? null : Kt(s, (f) => f.n == 0 || f.n == 2 * t || f.m == 0 || f.m == 2 * t);
  };
  return {
    type: "square",
    L: n,
    N: t,
    size: i * i,
    hood: c,
    nodes: s,
    scale: l,
    boundary: u,
    boundary_cells: h
  };
};
Yn([-1, 1, 0, 0], [0, 0, -1, 1]), Yn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const it = b.L, IM = b.dt, kt = b.M, zt = b.N;
var Q = [];
const RM = CM(kt).boundary("dirichlet").scale(b.L), vt = RM.nodes, De = it / (2 * kt + 1), qe = it / (2 * kt + 1), Be = -it / 2, He = -it / 2, Xe = (t, e, n, r, i, o, a) => {
  const s = Math.floor((t - n) / i);
  return Math.floor((e - r) / o) * (2 * a + 1) + s;
};
console.log(Xe(-12.3, 5.67, Be, He, De, qe, kt));
const jM = () => {
  R(Q, (t) => {
    var e = Math.random() * 2 * Math.PI, n = b.random_movement.widget.value() * Math.cos(e), r = b.random_movement.widget.value() * Math.sin(e), i = t.x + n, o = t.y + r;
    (i < -it / 2 || i > it / 2) && (n *= -1), (o < -it / 2 || o > it / 2) && (r *= -1), t.x += n, t.y += r;
  });
}, FM = () => {
  let t = Kt(Q, (e) => e.state == 0 && e.type == "normal");
  R(t, (e) => {
    let n = Xe(e.x, e.y, Be, He, De, qe, kt);
    vt[n].cAMP > b.activation_threshold.widget.value() && (e.state = 1, e.stepped = !1);
  });
}, LM = () => {
  let t = Kt(Q, (e) => e.state == 1);
  R(t, (e) => {
    e.clock > 10 && (e.state = 2);
  });
}, DM = () => {
  let t = Kt(Q, (e) => e.state == 2);
  R(t, (e) => {
    e.clock > b.recovery_time.widget.value() && (e.state = e.type == "pacemaker" ? 1 : 0, e.clock = 0);
  });
}, nl = () => {
  b.switch_off_pacemaker.widget.value() == !0 ? Q.forEach(function(t) {
    t.type = "normal";
  }) : Q.forEach(function(t, e) {
    t.type = e == zt - 1 ? "pacemaker" : "normal", e == zt - 1 && (t.state = 1);
  });
}, qM = () => {
  let t = Kt(Q, (e) => e.state == 1);
  R(t, (e) => {
    let n = Xe(e.x, e.y, Be, He, De, qe, kt);
    vt[n].cAMP = b.cAMP_pulse_strength.widget.value();
  });
}, dn = () => {
  R(vt, (t) => {
    t.dcAMP = b.cAMP_diffusion.widget.value() * IM * (-t.neighbors.length * t.cAMP + $M(t.neighbors, (e) => e.cAMP));
  }), R(vt, (t) => {
    t.cAMP += t.dcAMP, t.cAMP = t.cAMP < 0 ? 0 : t.cAMP, t.cAMP = t.cAMP * (1 - Math.pow(10, b.cAMP_life_time.widget.value()));
  });
}, BM = () => {
  dn(), dn(), dn(), dn(), R(vt, (t) => {
    t.cAMP = t.cAMP * (1 - Math.pow(10, b.cAMP_life_time.widget.value()));
  });
}, HM = () => {
  const t = Kt(Q, (e) => {
    let n = Xe(e.x, e.y, Be, He, De, qe, kt);
    return vt[n].cAMP > b.movement_threshold.widget.value() && e.stepped == !1 && e.state == 1;
  });
  R(t, (e) => {
    const n = Xe(e.x, e.y, Be, He, De, qe, kt), r = vt[n].neighbors;
    AM(r);
    const i = cM(r, (s) => s.cAMP), o = i.x - e.x, a = i.y - e.y;
    e.x += b.responsiveness.widget.value() * o, e.y += b.responsiveness.widget.value() * a, e.stepped = !0;
  });
}, XM = () => {
  b.timer = {}, b.tick = 0, R(vt, (t) => {
    t.cAMP = 0;
  }), Q = tn(Gn(zt), (t) => ({
    type: t == zt - 1 ? "pacemaker" : "normal",
    index: t,
    x: t == zt - 1 ? 0 : it * (Math.random() - 0.5),
    y: t == zt - 1 ? 0 : it * (Math.random() - 0.5),
    state: t == zt - 1 ? 1 : 0,
    clock: 0
  })), nl();
}, UM = () => {
  b.tick++, jM(), FM(), LM(), DM(), R(Kt(Q, (t) => t.state > 0), (t) => {
    t.clock += 1;
  }), qM(), BM(), HM();
}, GM = () => {
  nl();
}, Vn = b.L;
b.M;
b.N;
const YM = b.cAMP_pulse_strength.widget.value(), Pt = Ye().domain([-Vn / 2, Vn / 2]), rl = Ye().domain([-Vn / 2, Vn / 2]), qa = hp().domain([0, YM]).range(["#F6FFFE", "rgb(0,0,255)"]), VM = ["rgb(100,100,100,0.7)", "rgba(100,100,100,0.7)", "rgba(100,100,100,0.7)"], KM = ["rgba(150,150,150,.7)", "darkred", "rgba(100,100,100,0.7)"], WM = bi().domain([0, 1, 2]).range(VM), ZM = bi().domain([0, 1, 2]).range(KM);
var Pe, Ne, D;
const il = () => {
  D.clearRect(0, 0, Pe, Ne), R(vt, (t) => {
    const e = t.cell();
    D.fillStyle = qa(t.cAMP), D.strokeStyle = qa(t.cAMP), D.lineWidth = 0, D.fillRect(Pt(e[0].x), Pt(e[0].y), Pt(e[2].x) - Pt(e[0].x) - 2, Pt(e[2].y) - Pt(e[0].y) - 2);
  });
}, ol = () => {
  R(Q, (t) => {
    D.beginPath(), D.fillStyle = t.type == "pacemaker" ? "red" : b.show_cell_state.widget.value() ? ZM(t.state) : WM(t.state);
    const e = t.type == "pacemaker" && t.state == 1 ? 2 : 1;
    D.arc(Pt(t.x), rl(t.y), e * b.agentsize, 0, 2 * Math.PI), D.fill(), D.closePath();
  });
}, JM = (t, e) => {
  Pe = e.display_size.width, Ne = e.display_size.height, Pt.range([0, Pe]), rl.range([0, Ne]), D = t.node().getContext("2d"), D.clearRect(0, 0, Pe, Ne), b.hide_cAMP.widget.value() || il(), b.hide_cells.widget.value() || ol();
}, al = (t, e) => {
  D.clearRect(0, 0, Pe, Ne), b.hide_cAMP.widget.value() || il(), b.hide_cells.widget.value() || ol();
}, QM = al;
function tA(t, e) {
  UM(), al();
}
function sl(t, e) {
  XM(), JM(t, e);
}
function gn(t, e) {
  GM(), QM();
}
var Ba = {};
const eA = (t, e) => {
  Nt.value() == 1 ? Ba = Rf(() => tA(), I.simulation.delay) : Ba.stop();
}, nA = (t, e, n) => {
  yr.update(() => OM(e)), Nt.update(() => eA()), gr.update(() => sl(t, n)), b.advanced_settings.widget.update(() => {
    Ku(e);
  }), b.hide_cAMP.widget.update(() => gn()), b.hide_cells.widget.update(() => gn()), b.show_cell_state.widget.update(() => gn()), b.switch_off_pacemaker.widget.update(() => gn());
}, rA = {
  name: "@explorables/come_together",
  title: "Come Together",
  subtitle: "Chemotaxis in Dictyostelium discoideum",
  description: "A model for cell aggregation by diffusing signal molecules.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function iA(t, e = ul) {
  const n = I1(t, e), r = n.display, i = n.controls, o = n.grid;
  return EM(i, o), nA(r, i, e), sl(r, e), {
    halt() {
      Nt.value() === 1 && Nt.press(i);
    },
    reset() {
      Nt.value() === 1 && Nt.press(i), yr.press(i), gr.press(i);
    },
    config: e,
    meta: rA
  };
}
export {
  ul as config,
  iA as default,
  iA as load,
  rA as meta
};
