(function() { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => { for (const s of l)
            if (s.type === "childList")
                for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o) }).observe(document, { childList: !0, subtree: !0 });

    function n(l) { const s = {}; return l.integrity && (s.integrity = l.integrity), l.referrerpolicy && (s.referrerPolicy = l.referrerpolicy), l.crossorigin === "use-credentials" ? s.credentials = "include" : l.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s }

    function r(l) { if (l.ep) return;
        l.ep = !0; const s = n(l);
        fetch(l.href, s) } })();

function pr(e, t) { const n = Object.create(null),
        r = e.split(","); for (let l = 0; l < r.length; l++) n[r[l]] = !0; return t ? l => !!n[l.toLowerCase()] : l => !!n[l] }
const hi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    pi = pr(hi);

function Zs(e) { return !!e || e === "" }

function br(e) { if (j(e)) { const t = {}; for (let n = 0; n < e.length; n++) { const r = e[n],
                l = pe(r) ? Li(r) : br(r); if (l)
                for (const s in l) t[s] = l[s] } return t } else { if (pe(e)) return e; if (ae(e)) return e } }
const bi = /;(?![^(]*\))/g,
    Ei = /:(.+)/;

function Li(e) { const t = {}; return e.split(bi).forEach(n => { if (n) { const r = n.split(Ei);
            r.length > 1 && (t[r[0].trim()] = r[1].trim()) } }), t }

function Er(e) { let t = ""; if (pe(e)) t = e;
    else if (j(e))
        for (let n = 0; n < e.length; n++) { const r = Er(e[n]);
            r && (t += r + " ") } else if (ae(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim() }
const ve = e => pe(e) ? e : e == null ? "" : j(e) || ae(e) && (e.toString === nl || !B(e.toString)) ? JSON.stringify(e, zs, 2) : String(e),
    zs = (e, t) => t && t.__v_isRef ? zs(e, t.value) : wt(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, l]) => (n[`${r} =>`] = l, n), {}) } : el(t) ? {
        [`Set(${t.size})`]: [...t.values()] } : ae(t) && !j(t) && !rl(t) ? String(t) : t,
    re = {},
    St = [],
    Be = () => {},
    Ti = () => !1,
    Ii = /^on[^a-z]/,
    Nn = e => Ii.test(e),
    Lr = e => e.startsWith("onUpdate:"),
    Le = Object.assign,
    Tr = (e, t) => { const n = e.indexOf(t);
        n > -1 && e.splice(n, 1) },
    yi = Object.prototype.hasOwnProperty,
    q = (e, t) => yi.call(e, t),
    j = Array.isArray,
    wt = e => vn(e) === "[object Map]",
    el = e => vn(e) === "[object Set]",
    B = e => typeof e == "function",
    pe = e => typeof e == "string",
    Ir = e => typeof e == "symbol",
    ae = e => e !== null && typeof e == "object",
    tl = e => ae(e) && B(e.then) && B(e.catch),
    nl = Object.prototype.toString,
    vn = e => nl.call(e),
    Ni = e => vn(e).slice(8, -1),
    rl = e => vn(e) === "[object Object]",
    yr = e => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    gn = pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Cn = e => { const t = Object.create(null); return n => t[n] || (t[n] = e(n)) },
    vi = /-(\w)/g,
    $t = Cn(e => e.replace(vi, (t, n) => n ? n.toUpperCase() : "")),
    Ci = /\B([A-Z])/g,
    Bt = Cn(e => e.replace(Ci, "-$1").toLowerCase()),
    sl = Cn(e => e.charAt(0).toUpperCase() + e.slice(1)),
    Un = Cn(e => e ? `on${sl(e)}` : ""),
    zt = (e, t) => !Object.is(e, t),
    $n = (e, t) => { for (let n = 0; n < e.length; n++) e[n](t) },
    En = (e, t, n) => { Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n }) },
    Oi = e => { const t = parseFloat(e); return isNaN(t) ? e : t };
let Jr;
const Ai = () => Jr || (Jr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let qe;
class ll { constructor(t = !1) { this.active = !0, this.effects = [], this.cleanups = [], !t && qe && (this.parent = qe, this.index = (qe.scopes || (qe.scopes = [])).push(this) - 1) }
    run(t) { if (this.active) { const n = qe; try { return qe = this, t() } finally { qe = n } } }
    on() { qe = this }
    off() { qe = this.parent }
    stop(t) { if (this.active) { let n, r; for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop(); for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n](); if (this.scopes)
                for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0); if (this.parent && !t) { const l = this.parent.scopes.pop();
                l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index) }
            this.active = !1 } } }

function Fi(e) { return new ll(e) }

function ki(e, t = qe) { t && t.active && t.effects.push(e) }
const Nr = e => { const t = new Set(e); return t.w = 0, t.n = 0, t },
    il = e => (e.w & gt) > 0,
    al = e => (e.n & gt) > 0,
    Pi = ({ deps: e }) => { if (e.length)
            for (let t = 0; t < e.length; t++) e[t].w |= gt },
    Ri = e => { const { deps: t } = e; if (t.length) { let n = 0; for (let r = 0; r < t.length; r++) { const l = t[r];
                il(l) && !al(l) ? l.delete(e) : t[n++] = l, l.w &= ~gt, l.n &= ~gt }
            t.length = n } },
    Kn = new WeakMap;
let Jt = 0,
    gt = 1;
const Yn = 30;
let He;
const At = Symbol(""),
    Xn = Symbol("");
class vr { constructor(t, n = null, r) { this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ki(this, r) }
    run() { if (!this.active) return this.fn(); let t = He,
            n = mt; for (; t;) { if (t === this) return;
            t = t.parent } try { return this.parent = He, He = this, mt = !0, gt = 1 << ++Jt, Jt <= Yn ? Pi(this) : qr(this), this.fn() } finally { Jt <= Yn && Ri(this), gt = 1 << --Jt, He = this.parent, mt = n, this.parent = void 0, this.deferStop && this.stop() } }
    stop() { He === this ? this.deferStop = !0 : this.active && (qr(this), this.onStop && this.onStop(), this.active = !1) } }

function qr(e) { const { deps: t } = e; if (t.length) { for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0 } }
let mt = !0;
const ol = [];

function Kt() { ol.push(mt), mt = !1 }

function Yt() { const e = ol.pop();
    mt = e === void 0 ? !0 : e }

function ke(e, t, n) { if (mt && He) { let r = Kn.get(e);
        r || Kn.set(e, r = new Map); let l = r.get(n);
        l || r.set(n, l = Nr()), cl(l) } }

function cl(e, t) { let n = !1;
    Jt <= Yn ? al(e) || (e.n |= gt, n = !il(e)) : n = !e.has(He), n && (e.add(He), He.deps.push(e)) }

function ot(e, t, n, r, l, s) { const o = Kn.get(e); if (!o) return; let c = []; if (t === "clear") c = [...o.values()];
    else if (n === "length" && j(e)) o.forEach((u, d) => {
        (d === "length" || d >= r) && c.push(u) });
    else switch (n !== void 0 && c.push(o.get(n)), t) {
        case "add":
            j(e) ? yr(n) && c.push(o.get("length")) : (c.push(o.get(At)), wt(e) && c.push(o.get(Xn))); break;
        case "delete":
            j(e) || (c.push(o.get(At)), wt(e) && c.push(o.get(Xn))); break;
        case "set":
            wt(e) && c.push(o.get(At)); break }
    if (c.length === 1) c[0] && Gn(c[0]);
    else { const u = []; for (const d of c) d && u.push(...d);
        Gn(Nr(u)) } }

function Gn(e, t) { const n = j(e) ? e : [...e]; for (const r of n) r.computed && Qr(r); for (const r of n) r.computed || Qr(r) }

function Qr(e, t) {
    (e !== He || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run()) }
const Mi = pr("__proto__,__v_isRef,__isVue"),
    ul = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ir)),
    Si = Cr(),
    wi = Cr(!1, !0),
    Di = Cr(!0),
    Zr = xi();

function xi() { const e = {}; return ["includes", "indexOf", "lastIndexOf"].forEach(t => { e[t] = function(...n) { const r = z(this); for (let s = 0, o = this.length; s < o; s++) ke(r, "get", s + ""); const l = r[t](...n); return l === -1 || l === !1 ? r[t](...n.map(z)) : l } }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => { e[t] = function(...n) { Kt(); const r = z(this)[t].apply(this, n); return Yt(), r } }), e }

function Cr(e = !1, t = !1) { return function(r, l, s) { if (l === "__v_isReactive") return !e; if (l === "__v_isReadonly") return e; if (l === "__v_isShallow") return t; if (l === "__v_raw" && s === (e ? t ? zi : gl : t ? _l : ml).get(r)) return r; const o = j(r); if (!e && o && q(Zr, l)) return Reflect.get(Zr, l, s); const c = Reflect.get(r, l, s); return (Ir(l) ? ul.has(l) : Mi(l)) || (e || ke(r, "get", l), t) ? c : he(c) ? o && yr(l) ? c : c.value : ae(c) ? e ? hl(c) : Fr(c) : c } }
const Ui = fl(),
    $i = fl(!0);

function fl(e = !1) { return function(n, r, l, s) { let o = n[r]; if (Wt(o) && he(o) && !he(l)) return !1; if (!e && (!Ln(l) && !Wt(l) && (o = z(o), l = z(l)), !j(n) && he(o) && !he(l))) return o.value = l, !0; const c = j(n) && yr(r) ? Number(r) < n.length : q(n, r),
            u = Reflect.set(n, r, l, s); return n === z(s) && (c ? zt(l, o) && ot(n, "set", r, l) : ot(n, "add", r, l)), u } }

function Wi(e, t) { const n = q(e, t);
    e[t]; const r = Reflect.deleteProperty(e, t); return r && n && ot(e, "delete", t, void 0), r }

function Hi(e, t) { const n = Reflect.has(e, t); return (!Ir(t) || !ul.has(t)) && ke(e, "has", t), n }

function ji(e) { return ke(e, "iterate", j(e) ? "length" : At), Reflect.ownKeys(e) }
const dl = { get: Si, set: Ui, deleteProperty: Wi, has: Hi, ownKeys: ji },
    Vi = { get: Di, set(e, t) { return !0 }, deleteProperty(e, t) { return !0 } },
    Bi = Le({}, dl, { get: wi, set: $i }),
    Or = e => e,
    On = e => Reflect.getPrototypeOf(e);

function cn(e, t, n = !1, r = !1) { e = e.__v_raw; const l = z(e),
        s = z(t);
    n || (t !== s && ke(l, "get", t), ke(l, "get", s)); const { has: o } = On(l), c = r ? Or : n ? Pr : en; if (o.call(l, t)) return c(e.get(t)); if (o.call(l, s)) return c(e.get(s));
    e !== l && e.get(t) }

function un(e, t = !1) { const n = this.__v_raw,
        r = z(n),
        l = z(e); return t || (e !== l && ke(r, "has", e), ke(r, "has", l)), e === l ? n.has(e) : n.has(e) || n.has(l) }

function fn(e, t = !1) { return e = e.__v_raw, !t && ke(z(e), "iterate", At), Reflect.get(e, "size", e) }

function zr(e) { e = z(e); const t = z(this); return On(t).has.call(t, e) || (t.add(e), ot(t, "add", e, e)), this }

function es(e, t) { t = z(t); const n = z(this),
        { has: r, get: l } = On(n); let s = r.call(n, e);
    s || (e = z(e), s = r.call(n, e)); const o = l.call(n, e); return n.set(e, t), s ? zt(t, o) && ot(n, "set", e, t) : ot(n, "add", e, t), this }

function ts(e) { const t = z(this),
        { has: n, get: r } = On(t); let l = n.call(t, e);
    l || (e = z(e), l = n.call(t, e)), r && r.call(t, e); const s = t.delete(e); return l && ot(t, "delete", e, void 0), s }

function ns() { const e = z(this),
        t = e.size !== 0,
        n = e.clear(); return t && ot(e, "clear", void 0, void 0), n }

function dn(e, t) { return function(r, l) { const s = this,
            o = s.__v_raw,
            c = z(o),
            u = t ? Or : e ? Pr : en; return !e && ke(c, "iterate", At), o.forEach((d, g) => r.call(l, u(d), u(g), s)) } }

function mn(e, t, n) { return function(...r) { const l = this.__v_raw,
            s = z(l),
            o = wt(s),
            c = e === "entries" || e === Symbol.iterator && o,
            u = e === "keys" && o,
            d = l[e](...r),
            g = n ? Or : t ? Pr : en; return !t && ke(s, "iterate", u ? Xn : At), { next() { const { value: b, done: p } = d.next(); return p ? { value: b, done: p } : { value: c ? [g(b[0]), g(b[1])] : g(b), done: p } }, [Symbol.iterator]() { return this } } } }

function ut(e) { return function(...t) { return e === "delete" ? !1 : this } }

function Ki() { const e = {get(s) { return cn(this, s) }, get size() { return fn(this) }, has: un, add: zr, set: es, delete: ts, clear: ns, forEach: dn(!1, !1) },
        t = {get(s) { return cn(this, s, !1, !0) }, get size() { return fn(this) }, has: un, add: zr, set: es, delete: ts, clear: ns, forEach: dn(!1, !0) },
        n = {get(s) { return cn(this, s, !0) }, get size() { return fn(this, !0) }, has(s) { return un.call(this, s, !0) }, add: ut("add"), set: ut("set"), delete: ut("delete"), clear: ut("clear"), forEach: dn(!0, !1) },
        r = {get(s) { return cn(this, s, !0, !0) }, get size() { return fn(this, !0) }, has(s) { return un.call(this, s, !0) }, add: ut("add"), set: ut("set"), delete: ut("delete"), clear: ut("clear"), forEach: dn(!0, !0) }; return ["keys", "values", "entries", Symbol.iterator].forEach(s => { e[s] = mn(s, !1, !1), n[s] = mn(s, !0, !1), t[s] = mn(s, !1, !0), r[s] = mn(s, !0, !0) }), [e, n, t, r] }
const [Yi, Xi, Gi, Ji] = Ki();

function Ar(e, t) { const n = t ? e ? Ji : Gi : e ? Xi : Yi; return (r, l, s) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? r : Reflect.get(q(n, l) && l in r ? n : r, l, s) }
const qi = { get: Ar(!1, !1) },
    Qi = { get: Ar(!1, !0) },
    Zi = { get: Ar(!0, !1) },
    ml = new WeakMap,
    _l = new WeakMap,
    gl = new WeakMap,
    zi = new WeakMap;

function ea(e) { switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0 } }

function ta(e) { return e.__v_skip || !Object.isExtensible(e) ? 0 : ea(Ni(e)) }

function Fr(e) { return Wt(e) ? e : kr(e, !1, dl, qi, ml) }

function na(e) { return kr(e, !1, Bi, Qi, _l) }

function hl(e) { return kr(e, !0, Vi, Zi, gl) }

function kr(e, t, n, r, l) { if (!ae(e) || e.__v_raw && !(t && e.__v_isReactive)) return e; const s = l.get(e); if (s) return s; const o = ta(e); if (o === 0) return e; const c = new Proxy(e, o === 2 ? r : n); return l.set(e, c), c }

function Dt(e) { return Wt(e) ? Dt(e.__v_raw) : !!(e && e.__v_isReactive) }

function Wt(e) { return !!(e && e.__v_isReadonly) }

function Ln(e) { return !!(e && e.__v_isShallow) }

function pl(e) { return Dt(e) || Wt(e) }

function z(e) { const t = e && e.__v_raw; return t ? z(t) : e }

function bl(e) { return En(e, "__v_skip", !0), e }
const en = e => ae(e) ? Fr(e) : e,
    Pr = e => ae(e) ? hl(e) : e;

function El(e) { mt && He && (e = z(e), cl(e.dep || (e.dep = Nr()))) }

function Ll(e, t) { e = z(e), e.dep && Gn(e.dep) }

function he(e) { return !!(e && e.__v_isRef === !0) }

function ze(e) { return Tl(e, !1) }

function ra(e) { return Tl(e, !0) }

function Tl(e, t) { return he(e) ? e : new sa(e, t) }
class sa { constructor(t, n) { this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : z(t), this._value = n ? t : en(t) }
    get value() { return El(this), this._value }
    set value(t) { const n = this.__v_isShallow || Ln(t) || Wt(t);
        t = n ? t : z(t), zt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : en(t), Ll(this)) } }

function la(e) { return he(e) ? e.value : e }
const ia = { get: (e, t, n) => la(Reflect.get(e, t, n)), set: (e, t, n, r) => { const l = e[t]; return he(l) && !he(n) ? (l.value = n, !0) : Reflect.set(e, t, n, r) } };

function Il(e) { return Dt(e) ? e : new Proxy(e, ia) }
var yl;
class aa { constructor(t, n, r, l) { this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[yl] = !1, this._dirty = !0, this.effect = new vr(t, () => { this._dirty || (this._dirty = !0, Ll(this)) }), this.effect.computed = this, this.effect.active = this._cacheable = !l, this.__v_isReadonly = r }
    get value() { const t = z(this); return El(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value }
    set value(t) { this._setter(t) } }
yl = "__v_isReadonly";

function oa(e, t, n = !1) { let r, l; const s = B(e); return s ? (r = e, l = Be) : (r = e.get, l = e.set), new aa(r, l, s || !l, n) }

function _t(e, t, n, r) { let l; try { l = r ? e(...r) : e() } catch (s) { An(s, t, n) } return l }

function De(e, t, n, r) { if (B(e)) { const s = _t(e, t, n, r); return s && tl(s) && s.catch(o => { An(o, t, n) }), s } const l = []; for (let s = 0; s < e.length; s++) l.push(De(e[s], t, n, r)); return l }

function An(e, t, n, r = !0) { const l = t ? t.vnode : null; if (t) { let s = t.parent; const o = t.proxy,
            c = n; for (; s;) { const d = s.ec; if (d) { for (let g = 0; g < d.length; g++)
                    if (d[g](e, o, c) === !1) return }
            s = s.parent } const u = t.appContext.config.errorHandler; if (u) { _t(u, null, 10, [e, o, c]); return } }
    ca(e, n, l, r) }

function ca(e, t, n, r = !0) { console.error(e) }
let tn = !1,
    Jn = !1;
const Ee = [];
let et = 0;
const xt = [];
let it = null,
    vt = 0;
const Nl = Promise.resolve();
let Rr = null;

function ua(e) { const t = Rr || Nl; return e ? t.then(this ? e.bind(this) : e) : t }

function fa(e) { let t = et + 1,
        n = Ee.length; for (; t < n;) { const r = t + n >>> 1;
        nn(Ee[r]) < e ? t = r + 1 : n = r } return t }

function Mr(e) {
    (!Ee.length || !Ee.includes(e, tn && e.allowRecurse ? et + 1 : et)) && (e.id == null ? Ee.push(e) : Ee.splice(fa(e.id), 0, e), vl()) }

function vl() {!tn && !Jn && (Jn = !0, Rr = Nl.then(Ol)) }

function da(e) { const t = Ee.indexOf(e);
    t > et && Ee.splice(t, 1) }

function ma(e) { j(e) ? xt.push(...e) : (!it || !it.includes(e, e.allowRecurse ? vt + 1 : vt)) && xt.push(e), vl() }

function rs(e, t = tn ? et + 1 : 0) { for (; t < Ee.length; t++) { const n = Ee[t];
        n && n.pre && (Ee.splice(t, 1), t--, n()) } }

function Cl(e) { if (xt.length) { const t = [...new Set(xt)]; if (xt.length = 0, it) { it.push(...t); return } for (it = t, it.sort((n, r) => nn(n) - nn(r)), vt = 0; vt < it.length; vt++) it[vt]();
        it = null, vt = 0 } }
const nn = e => e.id == null ? 1 / 0 : e.id,
    _a = (e, t) => { const n = nn(e) - nn(t); if (n === 0) { if (e.pre && !t.pre) return -1; if (t.pre && !e.pre) return 1 } return n };

function Ol(e) { Jn = !1, tn = !0, Ee.sort(_a); const t = Be; try { for (et = 0; et < Ee.length; et++) { const n = Ee[et];
            n && n.active !== !1 && _t(n, null, 14) } } finally { et = 0, Ee.length = 0, Cl(), tn = !1, Rr = null, (Ee.length || xt.length) && Ol() } }

function ga(e, t, ...n) { if (e.isUnmounted) return; const r = e.vnode.props || re; let l = n; const s = t.startsWith("update:"),
        o = s && t.slice(7); if (o && o in r) { const g = `${o==="modelValue"?"model":o}Modifiers`,
            { number: b, trim: p } = r[g] || re;
        p && (l = n.map(N => N.trim())), b && (l = n.map(Oi)) } let c, u = r[c = Un(t)] || r[c = Un($t(t))];!u && s && (u = r[c = Un(Bt(t))]), u && De(u, e, 6, l); const d = r[c + "Once"]; if (d) { if (!e.emitted) e.emitted = {};
        else if (e.emitted[c]) return;
        e.emitted[c] = !0, De(d, e, 6, l) } }

function Al(e, t, n = !1) { const r = t.emitsCache,
        l = r.get(e); if (l !== void 0) return l; const s = e.emits; let o = {},
        c = !1; if (!B(e)) { const u = d => { const g = Al(d, t, !0);
            g && (c = !0, Le(o, g)) };!n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u) } return !s && !c ? (ae(e) && r.set(e, null), null) : (j(s) ? s.forEach(u => o[u] = null) : Le(o, s), ae(e) && r.set(e, o), o) }

function Fn(e, t) { return !e || !Nn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Bt(t)) || q(e, t)) }
let tt = null,
    Fl = null;

function Tn(e) { const t = tt; return tt = e, Fl = e && e.type.__scopeId || null, t }

function ha(e, t = tt, n) { if (!t || e._n) return e; const r = (...l) => { r._d && ms(-1); const s = Tn(t),
            o = e(...l); return Tn(s), r._d && ms(1), o }; return r._n = !0, r._c = !0, r._d = !0, r }

function Wn(e) { const { type: t, vnode: n, proxy: r, withProxy: l, props: s, propsOptions: [o], slots: c, attrs: u, emit: d, render: g, renderCache: b, data: p, setupState: N, ctx: P, inheritAttrs: A } = e; let O, _; const v = Tn(e); try { if (n.shapeFlag & 4) { const T = l || r;
            O = Qe(g.call(T, T, b, s, N, p, P)), _ = u } else { const T = t;
            O = Qe(T.length > 1 ? T(s, { attrs: u, slots: c, emit: d }) : T(s, null)), _ = t.props ? u : pa(u) } } catch (T) { qt.length = 0, An(T, e, 1), O = we(at) } let F = O; if (_ && A !== !1) { const T = Object.keys(_),
            { shapeFlag: I } = F;
        T.length && I & 7 && (o && T.some(Lr) && (_ = ba(_, o)), F = ht(F, _)) } return n.dirs && (F = ht(F), F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs), n.transition && (F.transition = n.transition), O = F, Tn(v), O }
const pa = e => { let t; for (const n in e)(n === "class" || n === "style" || Nn(n)) && ((t || (t = {}))[n] = e[n]); return t },
    ba = (e, t) => { const n = {}; for (const r in e)(!Lr(r) || !(r.slice(9) in t)) && (n[r] = e[r]); return n };

function Ea(e, t, n) { const { props: r, children: l, component: s } = e, { props: o, children: c, patchFlag: u } = t, d = s.emitsOptions; if (t.dirs || t.transition) return !0; if (n && u >= 0) { if (u & 1024) return !0; if (u & 16) return r ? ss(r, o, d) : !!o; if (u & 8) { const g = t.dynamicProps; for (let b = 0; b < g.length; b++) { const p = g[b]; if (o[p] !== r[p] && !Fn(d, p)) return !0 } } } else return (l || c) && (!c || !c.$stable) ? !0 : r === o ? !1 : r ? o ? ss(r, o, d) : !0 : !!o; return !1 }

function ss(e, t, n) { const r = Object.keys(t); if (r.length !== Object.keys(e).length) return !0; for (let l = 0; l < r.length; l++) { const s = r[l]; if (t[s] !== e[s] && !Fn(n, s)) return !0 } return !1 }

function La({ vnode: e, parent: t }, n) { for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent }
const Ta = e => e.__isSuspense;

function Ia(e, t) { t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : ma(e) }

function ya(e, t) { if (ge) { let n = ge.provides; const r = ge.parent && ge.parent.provides;
        r === n && (n = ge.provides = Object.create(r)), n[e] = t } }

function hn(e, t, n = !1) { const r = ge || tt; if (r) { const l = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides; if (l && e in l) return l[e]; if (arguments.length > 1) return n && B(t) ? t.call(r.proxy) : t } }
const ls = {};

function Ut(e, t, n) { return kl(e, t, n) }

function kl(e, t, { immediate: n, deep: r, flush: l, onTrack: s, onTrigger: o } = re) { const c = ge; let u, d = !1,
        g = !1; if (he(e) ? (u = () => e.value, d = Ln(e)) : Dt(e) ? (u = () => e, r = !0) : j(e) ? (g = !0, d = e.some(_ => Dt(_) || Ln(_)), u = () => e.map(_ => { if (he(_)) return _.value; if (Dt(_)) return Pt(_); if (B(_)) return _t(_, c, 2) })) : B(e) ? t ? u = () => _t(e, c, 2) : u = () => { if (!(c && c.isUnmounted)) return b && b(), De(e, c, 3, [p]) } : u = Be, t && r) { const _ = u;
        u = () => Pt(_()) } let b, p = _ => { b = O.onStop = () => { _t(_, c, 4) } }; if (sn) return p = Be, t ? n && De(t, c, 3, [u(), g ? [] : void 0, p]) : u(), Be; let N = g ? [] : ls; const P = () => { if (!!O.active)
            if (t) { const _ = O.run();
                (r || d || (g ? _.some((v, F) => zt(v, N[F])) : zt(_, N))) && (b && b(), De(t, c, 3, [_, N === ls ? void 0 : N, p]), N = _) } else O.run() };
    P.allowRecurse = !!t; let A;
    l === "sync" ? A = P : l === "post" ? A = () => Oe(P, c && c.suspense) : (P.pre = !0, c && (P.id = c.uid), A = () => Mr(P)); const O = new vr(u, A); return t ? n ? P() : N = O.run() : l === "post" ? Oe(O.run.bind(O), c && c.suspense) : O.run(), () => { O.stop(), c && c.scope && Tr(c.scope.effects, O) } }

function Na(e, t, n) { const r = this.proxy,
        l = pe(e) ? e.includes(".") ? Pl(r, e) : () => r[e] : e.bind(r, r); let s;
    B(t) ? s = t : (s = t.handler, n = t); const o = ge;
    jt(this); const c = kl(l, s.bind(r), n); return o ? jt(o) : Ft(), c }

function Pl(e, t) { const n = t.split("."); return () => { let r = e; for (let l = 0; l < n.length && r; l++) r = r[n[l]]; return r } }

function Pt(e, t) { if (!ae(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e; if (t.add(e), he(e)) Pt(e.value, t);
    else if (j(e))
        for (let n = 0; n < e.length; n++) Pt(e[n], t);
    else if (el(e) || wt(e)) e.forEach(n => { Pt(n, t) });
    else if (rl(e))
        for (const n in e) Pt(e[n], t); return e }

function va() { const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map }; return Sr(() => { e.isMounted = !0 }), Dl(() => { e.isUnmounting = !0 }), e }
const Me = [Function, Array],
    Ca = { name: "BaseTransition", props: { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Me, onEnter: Me, onAfterEnter: Me, onEnterCancelled: Me, onBeforeLeave: Me, onLeave: Me, onAfterLeave: Me, onLeaveCancelled: Me, onBeforeAppear: Me, onAppear: Me, onAfterAppear: Me, onAppearCancelled: Me }, setup(e, { slots: t }) { const n = Ht(),
                r = va(); let l; return () => { const s = t.default && Ml(t.default(), !0); if (!s || !s.length) return; let o = s[0]; if (s.length > 1) { for (const A of s)
                        if (A.type !== at) { o = A; break } } const c = z(e),
                    { mode: u } = c; if (r.isLeaving) return Hn(o); const d = is(o); if (!d) return Hn(o); const g = qn(d, c, r, n);
                Qn(d, g); const b = n.subTree,
                    p = b && is(b); let N = !1; const { getTransitionKey: P } = d.type; if (P) { const A = P();
                    l === void 0 ? l = A : A !== l && (l = A, N = !0) } if (p && p.type !== at && (!Ct(d, p) || N)) { const A = qn(p, c, r, n); if (Qn(p, A), u === "out-in") return r.isLeaving = !0, A.afterLeave = () => { r.isLeaving = !1, n.update() }, Hn(o);
                    u === "in-out" && d.type !== at && (A.delayLeave = (O, _, v) => { const F = Rl(r, p);
                        F[String(p.key)] = p, O._leaveCb = () => { _(), O._leaveCb = void 0, delete g.delayedLeave }, g.delayedLeave = v }) } return o } } },
    Oa = Ca;

function Rl(e, t) { const { leavingVNodes: n } = e; let r = n.get(t.type); return r || (r = Object.create(null), n.set(t.type, r)), r }

function qn(e, t, n, r) { const { appear: l, mode: s, persisted: o = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: d, onEnterCancelled: g, onBeforeLeave: b, onLeave: p, onAfterLeave: N, onLeaveCancelled: P, onBeforeAppear: A, onAppear: O, onAfterAppear: _, onAppearCancelled: v } = t, F = String(e.key), T = Rl(n, e), I = (U, $) => { U && De(U, r, 9, $) }, S = (U, $) => { const K = $[1];
        I(U, $), j(U) ? U.every(ee => ee.length <= 1) && K() : U.length <= 1 && K() }, x = { mode: s, persisted: o, beforeEnter(U) { let $ = c; if (!n.isMounted)
                if (l) $ = A || c;
                else return;
            U._leaveCb && U._leaveCb(!0); const K = T[F];
            K && Ct(e, K) && K.el._leaveCb && K.el._leaveCb(), I($, [U]) }, enter(U) { let $ = u,
                K = d,
                ee = g; if (!n.isMounted)
                if (l) $ = O || u, K = _ || d, ee = v || g;
                else return;
            let oe = !1; const ce = U._enterCb = xe => { oe || (oe = !0, xe ? I(ee, [U]) : I(K, [U]), x.delayedLeave && x.delayedLeave(), U._enterCb = void 0) };
            $ ? S($, [U, ce]) : ce() }, leave(U, $) { const K = String(e.key); if (U._enterCb && U._enterCb(!0), n.isUnmounting) return $();
            I(b, [U]); let ee = !1; const oe = U._leaveCb = ce => { ee || (ee = !0, $(), ce ? I(P, [U]) : I(N, [U]), U._leaveCb = void 0, T[K] === e && delete T[K]) };
            T[K] = e, p ? S(p, [U, oe]) : oe() }, clone(U) { return qn(U, t, n, r) } }; return x }

function Hn(e) { if (kn(e)) return e = ht(e), e.children = null, e }

function is(e) { return kn(e) ? e.children ? e.children[0] : void 0 : e }

function Qn(e, t) { e.shapeFlag & 6 && e.component ? Qn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t }

function Ml(e, t = !1, n) { let r = [],
        l = 0; for (let s = 0; s < e.length; s++) { let o = e[s]; const c = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
        o.type === Se ? (o.patchFlag & 128 && l++, r = r.concat(Ml(o.children, t, c))) : (t || o.type !== at) && r.push(c != null ? ht(o, { key: c }) : o) } if (l > 1)
        for (let s = 0; s < r.length; s++) r[s].patchFlag = -2; return r }
const pn = e => !!e.type.__asyncLoader,
    kn = e => e.type.__isKeepAlive;

function Aa(e, t) { Sl(e, "a", t) }

function Fa(e, t) { Sl(e, "da", t) }

function Sl(e, t, n = ge) { const r = e.__wdc || (e.__wdc = () => { let l = n; for (; l;) { if (l.isDeactivated) return;
            l = l.parent } return e() }); if (Pn(t, r, n), n) { let l = n.parent; for (; l && l.parent;) kn(l.parent.vnode) && ka(r, t, n, l), l = l.parent } }

function ka(e, t, n, r) { const l = Pn(t, e, r, !0);
    wr(() => { Tr(r[t], l) }, n) }

function Pn(e, t, n = ge, r = !1) { if (n) { const l = n[e] || (n[e] = []),
            s = t.__weh || (t.__weh = (...o) => { if (n.isUnmounted) return;
                Kt(), jt(n); const c = De(t, n, e, o); return Ft(), Yt(), c }); return r ? l.unshift(s) : l.push(s), s } }
const ct = e => (t, n = ge) => (!sn || e === "sp") && Pn(e, t, n),
    wl = ct("bm"),
    Sr = ct("m"),
    Pa = ct("bu"),
    Ra = ct("u"),
    Dl = ct("bum"),
    wr = ct("um"),
    Ma = ct("sp"),
    Sa = ct("rtg"),
    wa = ct("rtc");

function Da(e, t = ge) { Pn("ec", e, t) }

function It(e, t, n, r) { const l = e.dirs,
        s = t && t.dirs; for (let o = 0; o < l.length; o++) { const c = l[o];
        s && (c.oldValue = s[o].value); let u = c.dir[r];
        u && (Kt(), De(u, n, 8, [e.el, c, e, t]), Yt()) } }
const xa = Symbol(),
    Zn = e => e ? Yl(e) ? $r(e) || e.proxy : Zn(e.parent) : null,
    In = Le(Object.create(null), { $: e => e, $el: e => e.vnode.el, $data: e => e.data, $props: e => e.props, $attrs: e => e.attrs, $slots: e => e.slots, $refs: e => e.refs, $parent: e => Zn(e.parent), $root: e => Zn(e.root), $emit: e => e.emit, $options: e => Dr(e), $forceUpdate: e => e.f || (e.f = () => Mr(e.update)), $nextTick: e => e.n || (e.n = ua.bind(e.proxy)), $watch: e => Na.bind(e) }),
    Ua = {get({ _: e }, t) { const { ctx: n, setupState: r, data: l, props: s, accessCache: o, type: c, appContext: u } = e; let d; if (t[0] !== "$") { const N = o[t]; if (N !== void 0) switch (N) {
                    case 1:
                        return r[t];
                    case 2:
                        return l[t];
                    case 4:
                        return n[t];
                    case 3:
                        return s[t] } else { if (r !== re && q(r, t)) return o[t] = 1, r[t]; if (l !== re && q(l, t)) return o[t] = 2, l[t]; if ((d = e.propsOptions[0]) && q(d, t)) return o[t] = 3, s[t]; if (n !== re && q(n, t)) return o[t] = 4, n[t];
                    zn && (o[t] = 0) } } const g = In[t]; let b, p; if (g) return t === "$attrs" && ke(e, "get", t), g(e); if ((b = c.__cssModules) && (b = b[t])) return b; if (n !== re && q(n, t)) return o[t] = 4, n[t]; if (p = u.config.globalProperties, q(p, t)) return p[t] }, set({ _: e }, t, n) { const { data: r, setupState: l, ctx: s } = e; return l !== re && q(l, t) ? (l[t] = n, !0) : r !== re && q(r, t) ? (r[t] = n, !0) : q(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0) }, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: l, propsOptions: s } }, o) { let c; return !!n[o] || e !== re && q(e, o) || t !== re && q(t, o) || (c = s[0]) && q(c, o) || q(r, o) || q(In, o) || q(l.config.globalProperties, o) }, defineProperty(e, t, n) { return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n) } };
let zn = !0;

function $a(e) { const t = Dr(e),
        n = e.proxy,
        r = e.ctx;
    zn = !1, t.beforeCreate && as(t.beforeCreate, e, "bc"); const { data: l, computed: s, methods: o, watch: c, provide: u, inject: d, created: g, beforeMount: b, mounted: p, beforeUpdate: N, updated: P, activated: A, deactivated: O, beforeDestroy: _, beforeUnmount: v, destroyed: F, unmounted: T, render: I, renderTracked: S, renderTriggered: x, errorCaptured: U, serverPrefetch: $, expose: K, inheritAttrs: ee, components: oe, directives: ce, filters: xe } = t; if (d && Wa(d, r, null, e.appContext.config.unwrapInjectedRef), o)
        for (const X in o) { const Q = o[X];
            B(Q) && (r[X] = Q.bind(n)) }
    if (l) { const X = l.call(n, n);
        ae(X) && (e.data = Fr(X)) } if (zn = !0, s)
        for (const X in s) { const Q = s[X],
                be = B(Q) ? Q.bind(n, n) : B(Q.get) ? Q.get.bind(n, n) : Be,
                rt = !B(Q) && B(Q.set) ? Q.set.bind(n) : Be,
                Ue = je({ get: be, set: rt });
            Object.defineProperty(r, X, { enumerable: !0, configurable: !0, get: () => Ue.value, set: Pe => Ue.value = Pe }) }
    if (c)
        for (const X in c) xl(c[X], r, n, X); if (u) { const X = B(u) ? u.call(n) : u;
        Reflect.ownKeys(X).forEach(Q => { ya(Q, X[Q]) }) }
    g && as(g, e, "c");

    function ie(X, Q) { j(Q) ? Q.forEach(be => X(be.bind(n))) : Q && X(Q.bind(n)) } if (ie(wl, b), ie(Sr, p), ie(Pa, N), ie(Ra, P), ie(Aa, A), ie(Fa, O), ie(Da, U), ie(wa, S), ie(Sa, x), ie(Dl, v), ie(wr, T), ie(Ma, $), j(K))
        if (K.length) { const X = e.exposed || (e.exposed = {});
            K.forEach(Q => { Object.defineProperty(X, Q, { get: () => n[Q], set: be => n[Q] = be }) }) } else e.exposed || (e.exposed = {});
    I && e.render === Be && (e.render = I), ee != null && (e.inheritAttrs = ee), oe && (e.components = oe), ce && (e.directives = ce) }

function Wa(e, t, n = Be, r = !1) { j(e) && (e = er(e)); for (const l in e) { const s = e[l]; let o;
        ae(s) ? "default" in s ? o = hn(s.from || l, s.default, !0) : o = hn(s.from || l) : o = hn(s), he(o) && r ? Object.defineProperty(t, l, { enumerable: !0, configurable: !0, get: () => o.value, set: c => o.value = c }) : t[l] = o } }

function as(e, t, n) { De(j(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n) }

function xl(e, t, n, r) { const l = r.includes(".") ? Pl(n, r) : () => n[r]; if (pe(e)) { const s = t[e];
        B(s) && Ut(l, s) } else if (B(e)) Ut(l, e.bind(n));
    else if (ae(e))
        if (j(e)) e.forEach(s => xl(s, t, n, r));
        else { const s = B(e.handler) ? e.handler.bind(n) : t[e.handler];
            B(s) && Ut(l, s, e) } }

function Dr(e) { const t = e.type,
        { mixins: n, extends: r } = t,
        { mixins: l, optionsCache: s, config: { optionMergeStrategies: o } } = e.appContext,
        c = s.get(t); let u; return c ? u = c : !l.length && !n && !r ? u = t : (u = {}, l.length && l.forEach(d => yn(u, d, o, !0)), yn(u, t, o)), ae(t) && s.set(t, u), u }

function yn(e, t, n, r = !1) { const { mixins: l, extends: s } = t;
    s && yn(e, s, n, !0), l && l.forEach(o => yn(e, o, n, !0)); for (const o in t)
        if (!(r && o === "expose")) { const c = Ha[o] || n && n[o];
            e[o] = c ? c(e[o], t[o]) : t[o] }
    return e }
const Ha = { data: os, props: Nt, emits: Nt, methods: Nt, computed: Nt, beforeCreate: ye, created: ye, beforeMount: ye, mounted: ye, beforeUpdate: ye, updated: ye, beforeDestroy: ye, beforeUnmount: ye, destroyed: ye, unmounted: ye, activated: ye, deactivated: ye, errorCaptured: ye, serverPrefetch: ye, components: Nt, directives: Nt, watch: Va, provide: os, inject: ja };

function os(e, t) { return t ? e ? function() { return Le(B(e) ? e.call(this, this) : e, B(t) ? t.call(this, this) : t) } : t : e }

function ja(e, t) { return Nt(er(e), er(t)) }

function er(e) { if (j(e)) { const t = {}; for (let n = 0; n < e.length; n++) t[e[n]] = e[n]; return t } return e }

function ye(e, t) { return e ? [...new Set([].concat(e, t))] : t }

function Nt(e, t) { return e ? Le(Le(Object.create(null), e), t) : t }

function Va(e, t) { if (!e) return t; if (!t) return e; const n = Le(Object.create(null), e); for (const r in t) n[r] = ye(e[r], t[r]); return n }

function Ba(e, t, n, r = !1) { const l = {},
        s = {};
    En(s, Mn, 1), e.propsDefaults = Object.create(null), Ul(e, t, l, s); for (const o in e.propsOptions[0]) o in l || (l[o] = void 0);
    n ? e.props = r ? l : na(l) : e.type.props ? e.props = l : e.props = s, e.attrs = s }

function Ka(e, t, n, r) { const { props: l, attrs: s, vnode: { patchFlag: o } } = e, c = z(l), [u] = e.propsOptions; let d = !1; if ((r || o > 0) && !(o & 16)) { if (o & 8) { const g = e.vnode.dynamicProps; for (let b = 0; b < g.length; b++) { let p = g[b]; if (Fn(e.emitsOptions, p)) continue; const N = t[p]; if (u)
                    if (q(s, p)) N !== s[p] && (s[p] = N, d = !0);
                    else { const P = $t(p);
                        l[P] = tr(u, c, P, N, e, !1) }
                else N !== s[p] && (s[p] = N, d = !0) } } } else { Ul(e, t, l, s) && (d = !0); let g; for (const b in c)(!t || !q(t, b) && ((g = Bt(b)) === b || !q(t, g))) && (u ? n && (n[b] !== void 0 || n[g] !== void 0) && (l[b] = tr(u, c, b, void 0, e, !0)) : delete l[b]); if (s !== c)
            for (const b in s)(!t || !q(t, b) && !0) && (delete s[b], d = !0) }
    d && ot(e, "set", "$attrs") }

function Ul(e, t, n, r) { const [l, s] = e.propsOptions; let o = !1,
        c; if (t)
        for (let u in t) { if (gn(u)) continue; const d = t[u]; let g;
            l && q(l, g = $t(u)) ? !s || !s.includes(g) ? n[g] = d : (c || (c = {}))[g] = d : Fn(e.emitsOptions, u) || (!(u in r) || d !== r[u]) && (r[u] = d, o = !0) }
    if (s) { const u = z(n),
            d = c || re; for (let g = 0; g < s.length; g++) { const b = s[g];
            n[b] = tr(l, u, b, d[b], e, !q(d, b)) } } return o }

function tr(e, t, n, r, l, s) { const o = e[n]; if (o != null) { const c = q(o, "default"); if (c && r === void 0) { const u = o.default; if (o.type !== Function && B(u)) { const { propsDefaults: d } = l;
                n in d ? r = d[n] : (jt(l), r = d[n] = u.call(null, t), Ft()) } else r = u }
        o[0] && (s && !c ? r = !1 : o[1] && (r === "" || r === Bt(n)) && (r = !0)) } return r }

function $l(e, t, n = !1) { const r = t.propsCache,
        l = r.get(e); if (l) return l; const s = e.props,
        o = {},
        c = []; let u = !1; if (!B(e)) { const g = b => { u = !0; const [p, N] = $l(b, t, !0);
            Le(o, p), N && c.push(...N) };!n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g) } if (!s && !u) return ae(e) && r.set(e, St), St; if (j(s))
        for (let g = 0; g < s.length; g++) { const b = $t(s[g]);
            cs(b) && (o[b] = re) } else if (s)
            for (const g in s) { const b = $t(g); if (cs(b)) { const p = s[g],
                        N = o[b] = j(p) || B(p) ? { type: p } : p; if (N) { const P = ds(Boolean, N.type),
                            A = ds(String, N.type);
                        N[0] = P > -1, N[1] = A < 0 || P < A, (P > -1 || q(N, "default")) && c.push(b) } } }
        const d = [o, c];
    return ae(e) && r.set(e, d), d }

function cs(e) { return e[0] !== "$" }

function us(e) { const t = e && e.toString().match(/^\s*function (\w+)/); return t ? t[1] : e === null ? "null" : "" }

function fs(e, t) { return us(e) === us(t) }

function ds(e, t) { return j(t) ? t.findIndex(n => fs(n, e)) : B(t) && fs(t, e) ? 0 : -1 }
const Wl = e => e[0] === "_" || e === "$stable",
    xr = e => j(e) ? e.map(Qe) : [Qe(e)],
    Ya = (e, t, n) => { if (t._n) return t; const r = ha((...l) => xr(t(...l)), n); return r._c = !1, r },
    Hl = (e, t, n) => { const r = e._ctx; for (const l in e) { if (Wl(l)) continue; const s = e[l]; if (B(s)) t[l] = Ya(l, s, r);
            else if (s != null) { const o = xr(s);
                t[l] = () => o } } },
    jl = (e, t) => { const n = xr(t);
        e.slots.default = () => n },
    Xa = (e, t) => { if (e.vnode.shapeFlag & 32) { const n = t._;
            n ? (e.slots = z(t), En(t, "_", n)) : Hl(t, e.slots = {}) } else e.slots = {}, t && jl(e, t);
        En(e.slots, Mn, 1) },
    Ga = (e, t, n) => { const { vnode: r, slots: l } = e; let s = !0,
            o = re; if (r.shapeFlag & 32) { const c = t._;
            c ? n && c === 1 ? s = !1 : (Le(l, t), !n && c === 1 && delete l._) : (s = !t.$stable, Hl(t, l)), o = t } else t && (jl(e, t), o = { default: 1 }); if (s)
            for (const c in l) !Wl(c) && !(c in o) && delete l[c] };

function Vl() { return { app: null, config: { isNativeTag: Ti, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: Object.create(null), optionsCache: new WeakMap, propsCache: new WeakMap, emitsCache: new WeakMap } }
let Ja = 0;

function qa(e, t) { return function(r, l = null) { B(r) || (r = Object.assign({}, r)), l != null && !ae(l) && (l = null); const s = Vl(),
            o = new Set; let c = !1; const u = s.app = { _uid: Ja++, _component: r, _props: l, _container: null, _context: s, _instance: null, version: po, get config() { return s.config }, set config(d) {}, use(d, ...g) { return o.has(d) || (d && B(d.install) ? (o.add(d), d.install(u, ...g)) : B(d) && (o.add(d), d(u, ...g))), u }, mixin(d) { return s.mixins.includes(d) || s.mixins.push(d), u }, component(d, g) { return g ? (s.components[d] = g, u) : s.components[d] }, directive(d, g) { return g ? (s.directives[d] = g, u) : s.directives[d] }, mount(d, g, b) { if (!c) { const p = we(r, l); return p.appContext = s, g && t ? t(p, d) : e(p, d, b), c = !0, u._container = d, d.__vue_app__ = u, $r(p.component) || p.component.proxy } }, unmount() { c && (e(null, u._container), delete u._container.__vue_app__) }, provide(d, g) { return s.provides[d] = g, u } }; return u } }

function nr(e, t, n, r, l = !1) { if (j(e)) { e.forEach((p, N) => nr(p, t && (j(t) ? t[N] : t), n, r, l)); return } if (pn(r) && !l) return; const s = r.shapeFlag & 4 ? $r(r.component) || r.component.proxy : r.el,
        o = l ? null : s,
        { i: c, r: u } = e,
        d = t && t.r,
        g = c.refs === re ? c.refs = {} : c.refs,
        b = c.setupState; if (d != null && d !== u && (pe(d) ? (g[d] = null, q(b, d) && (b[d] = null)) : he(d) && (d.value = null)), B(u)) _t(u, c, 12, [o, g]);
    else { const p = pe(u),
            N = he(u); if (p || N) { const P = () => { if (e.f) { const A = p ? g[u] : u.value;
                    l ? j(A) && Tr(A, s) : j(A) ? A.includes(s) || A.push(s) : p ? (g[u] = [s], q(b, u) && (b[u] = g[u])) : (u.value = [s], e.k && (g[e.k] = u.value)) } else p ? (g[u] = o, q(b, u) && (b[u] = o)) : N && (u.value = o, e.k && (g[e.k] = o)) };
            o ? (P.id = -1, Oe(P, n)) : P() } } }
const Oe = Ia;

function Qa(e) { return Za(e) }

function Za(e, t) { const n = Ai();
    n.__VUE__ = !0; const { insert: r, remove: l, patchProp: s, createElement: o, createText: c, createComment: u, setText: d, setElementText: g, parentNode: b, nextSibling: p, setScopeId: N = Be, cloneNode: P, insertStaticContent: A } = e, O = (a, i, f, h = null, E = null, y = null, R = !1, k = null, C = !!i.dynamicChildren) => { if (a === i) return;
        a && !Ct(a, i) && (h = Re(a), Ae(a, E, y, !0), a = null), i.patchFlag === -2 && (C = !1, i.dynamicChildren = null); const { type: m, ref: L, shapeFlag: w } = i; switch (m) {
            case Rn:
                _(a, i, f, h); break;
            case at:
                v(a, i, f, h); break;
            case jn:
                a == null && F(i, f, h, R); break;
            case Se:
                ce(a, i, f, h, E, y, R, k, C); break;
            default:
                w & 1 ? S(a, i, f, h, E, y, R, k, C) : w & 6 ? xe(a, i, f, h, E, y, R, k, C) : (w & 64 || w & 128) && m.process(a, i, f, h, E, y, R, k, C, Ie) }
        L != null && E && nr(L, a && a.ref, y, i || a, !i) }, _ = (a, i, f, h) => { if (a == null) r(i.el = c(i.children), f, h);
        else { const E = i.el = a.el;
            i.children !== a.children && d(E, i.children) } }, v = (a, i, f, h) => { a == null ? r(i.el = u(i.children || ""), f, h) : i.el = a.el }, F = (a, i, f, h) => {
        [a.el, a.anchor] = A(a.children, i, f, h, a.el, a.anchor) }, T = ({ el: a, anchor: i }, f, h) => { let E; for (; a && a !== i;) E = p(a), r(a, f, h), a = E;
        r(i, f, h) }, I = ({ el: a, anchor: i }) => { let f; for (; a && a !== i;) f = p(a), l(a), a = f;
        l(i) }, S = (a, i, f, h, E, y, R, k, C) => { R = R || i.type === "svg", a == null ? x(i, f, h, E, y, R, k, C) : K(a, i, E, y, R, k, C) }, x = (a, i, f, h, E, y, R, k) => { let C, m; const { type: L, props: w, shapeFlag: D, transition: W, patchFlag: V, dirs: G } = a; if (a.el && P !== void 0 && V === -1) C = a.el = P(a.el);
        else { if (C = a.el = o(a.type, y, w && w.is, w), D & 8 ? g(C, a.children) : D & 16 && $(a.children, C, null, h, E, y && L !== "foreignObject", R, k), G && It(a, null, h, "created"), w) { for (const ne in w) ne !== "value" && !gn(ne) && s(C, ne, null, w[ne], y, a.children, h, E, Te); "value" in w && s(C, "value", null, w.value), (m = w.onVnodeBeforeMount) && Ge(m, h, a) }
            U(C, a, a.scopeId, R, h) }
        G && It(a, null, h, "beforeMount"); const te = (!E || E && !E.pendingBranch) && W && !W.persisted;
        te && W.beforeEnter(C), r(C, i, f), ((m = w && w.onVnodeMounted) || te || G) && Oe(() => { m && Ge(m, h, a), te && W.enter(C), G && It(a, null, h, "mounted") }, E) }, U = (a, i, f, h, E) => { if (f && N(a, f), h)
            for (let y = 0; y < h.length; y++) N(a, h[y]); if (E) { let y = E.subTree; if (i === y) { const R = E.vnode;
                U(a, R, R.scopeId, R.slotScopeIds, E.parent) } } }, $ = (a, i, f, h, E, y, R, k, C = 0) => { for (let m = C; m < a.length; m++) { const L = a[m] = k ? dt(a[m]) : Qe(a[m]);
            O(null, L, i, f, h, E, y, R, k) } }, K = (a, i, f, h, E, y, R) => { const k = i.el = a.el; let { patchFlag: C, dynamicChildren: m, dirs: L } = i;
        C |= a.patchFlag & 16; const w = a.props || re,
            D = i.props || re; let W;
        f && yt(f, !1), (W = D.onVnodeBeforeUpdate) && Ge(W, f, i, a), L && It(i, a, f, "beforeUpdate"), f && yt(f, !0); const V = E && i.type !== "foreignObject"; if (m ? ee(a.dynamicChildren, m, k, f, h, V, y) : R || be(a, i, k, null, f, h, V, y, !1), C > 0) { if (C & 16) oe(k, i, w, D, f, h, E);
            else if (C & 2 && w.class !== D.class && s(k, "class", null, D.class, E), C & 4 && s(k, "style", w.style, D.style, E), C & 8) { const G = i.dynamicProps; for (let te = 0; te < G.length; te++) { const ne = G[te],
                        We = w[ne],
                        kt = D[ne];
                    (kt !== We || ne === "value") && s(k, ne, We, kt, E, a.children, f, h, Te) } }
            C & 1 && a.children !== i.children && g(k, i.children) } else !R && m == null && oe(k, i, w, D, f, h, E);
        ((W = D.onVnodeUpdated) || L) && Oe(() => { W && Ge(W, f, i, a), L && It(i, a, f, "updated") }, h) }, ee = (a, i, f, h, E, y, R) => { for (let k = 0; k < i.length; k++) { const C = a[k],
                m = i[k],
                L = C.el && (C.type === Se || !Ct(C, m) || C.shapeFlag & 70) ? b(C.el) : f;
            O(C, m, L, null, h, E, y, R, !0) } }, oe = (a, i, f, h, E, y, R) => { if (f !== h) { for (const k in h) { if (gn(k)) continue; const C = h[k],
                    m = f[k];
                C !== m && k !== "value" && s(a, k, m, C, R, i.children, E, y, Te) } if (f !== re)
                for (const k in f) !gn(k) && !(k in h) && s(a, k, f[k], null, R, i.children, E, y, Te); "value" in h && s(a, "value", f.value, h.value) } }, ce = (a, i, f, h, E, y, R, k, C) => { const m = i.el = a ? a.el : c(""),
            L = i.anchor = a ? a.anchor : c(""); let { patchFlag: w, dynamicChildren: D, slotScopeIds: W } = i;
        W && (k = k ? k.concat(W) : W), a == null ? (r(m, f, h), r(L, f, h), $(i.children, f, L, E, y, R, k, C)) : w > 0 && w & 64 && D && a.dynamicChildren ? (ee(a.dynamicChildren, D, f, E, y, R, k), (i.key != null || E && i === E.subTree) && Bl(a, i, !0)) : be(a, i, f, L, E, y, R, k, C) }, xe = (a, i, f, h, E, y, R, k, C) => { i.slotScopeIds = k, a == null ? i.shapeFlag & 512 ? E.ctx.activate(i, f, h, R, C) : nt(i, f, h, E, y, R, C) : ie(a, i, C) }, nt = (a, i, f, h, E, y, R) => { const k = a.component = uo(a, h, E); if (kn(a) && (k.ctx.renderer = Ie), fo(k), k.asyncDep) { if (E && E.registerDep(k, X), !a.el) { const C = k.subTree = we(at);
                v(null, C, i, f) } return }
        X(k, a, i, f, E, y, R) }, ie = (a, i, f) => { const h = i.component = a.component; if (Ea(a, i, f))
            if (h.asyncDep && !h.asyncResolved) { Q(h, i, f); return } else h.next = i, da(h.update), h.update();
        else i.el = a.el, h.vnode = i }, X = (a, i, f, h, E, y, R) => { const k = () => { if (a.isMounted) { let { next: L, bu: w, u: D, parent: W, vnode: V } = a, G = L, te;
                    yt(a, !1), L ? (L.el = V.el, Q(a, L, R)) : L = V, w && $n(w), (te = L.props && L.props.onVnodeBeforeUpdate) && Ge(te, W, L, V), yt(a, !0); const ne = Wn(a),
                        We = a.subTree;
                    a.subTree = ne, O(We, ne, b(We.el), Re(We), a, E, y), L.el = ne.el, G === null && La(a, ne.el), D && Oe(D, E), (te = L.props && L.props.onVnodeUpdated) && Oe(() => Ge(te, W, L, V), E) } else { let L; const { el: w, props: D } = i, { bm: W, m: V, parent: G } = a, te = pn(i); if (yt(a, !1), W && $n(W), !te && (L = D && D.onVnodeBeforeMount) && Ge(L, G, i), yt(a, !0), w && Ye) { const ne = () => { a.subTree = Wn(a), Ye(w, a.subTree, a, E, null) };
                        te ? i.type.__asyncLoader().then(() => !a.isUnmounted && ne()) : ne() } else { const ne = a.subTree = Wn(a);
                        O(null, ne, f, h, a, E, y), i.el = ne.el } if (V && Oe(V, E), !te && (L = D && D.onVnodeMounted)) { const ne = i;
                        Oe(() => Ge(L, G, ne), E) }(i.shapeFlag & 256 || G && pn(G.vnode) && G.vnode.shapeFlag & 256) && a.a && Oe(a.a, E), a.isMounted = !0, i = f = h = null } },
            C = a.effect = new vr(k, () => Mr(m), a.scope),
            m = a.update = () => C.run();
        m.id = a.uid, yt(a, !0), m() }, Q = (a, i, f) => { i.component = a; const h = a.vnode.props;
        a.vnode = i, a.next = null, Ka(a, i.props, h, f), Ga(a, i.children, f), Kt(), rs(), Yt() }, be = (a, i, f, h, E, y, R, k, C = !1) => { const m = a && a.children,
            L = a ? a.shapeFlag : 0,
            w = i.children,
            { patchFlag: D, shapeFlag: W } = i; if (D > 0) { if (D & 128) { Ue(m, w, f, h, E, y, R, k, C); return } else if (D & 256) { rt(m, w, f, h, E, y, R, k, C); return } }
        W & 8 ? (L & 16 && Te(m, E, y), w !== m && g(f, w)) : L & 16 ? W & 16 ? Ue(m, w, f, h, E, y, R, k, C) : Te(m, E, y, !0) : (L & 8 && g(f, ""), W & 16 && $(w, f, h, E, y, R, k, C)) }, rt = (a, i, f, h, E, y, R, k, C) => { a = a || St, i = i || St; const m = a.length,
            L = i.length,
            w = Math.min(m, L); let D; for (D = 0; D < w; D++) { const W = i[D] = C ? dt(i[D]) : Qe(i[D]);
            O(a[D], W, f, null, E, y, R, k, C) }
        m > L ? Te(a, E, y, !0, !1, w) : $(i, f, h, E, y, R, k, C, w) }, Ue = (a, i, f, h, E, y, R, k, C) => { let m = 0; const L = i.length; let w = a.length - 1,
            D = L - 1; for (; m <= w && m <= D;) { const W = a[m],
                V = i[m] = C ? dt(i[m]) : Qe(i[m]); if (Ct(W, V)) O(W, V, f, null, E, y, R, k, C);
            else break;
            m++ } for (; m <= w && m <= D;) { const W = a[w],
                V = i[D] = C ? dt(i[D]) : Qe(i[D]); if (Ct(W, V)) O(W, V, f, null, E, y, R, k, C);
            else break;
            w--, D-- } if (m > w) { if (m <= D) { const W = D + 1,
                    V = W < L ? i[W].el : h; for (; m <= D;) O(null, i[m] = C ? dt(i[m]) : Qe(i[m]), f, V, E, y, R, k, C), m++ } } else if (m > D)
            for (; m <= w;) Ae(a[m], E, y, !0), m++;
        else { const W = m,
                V = m,
                G = new Map; for (m = V; m <= D; m++) { const Fe = i[m] = C ? dt(i[m]) : Qe(i[m]);
                Fe.key != null && G.set(Fe.key, m) } let te, ne = 0; const We = D - V + 1; let kt = !1,
                Yr = 0; const Xt = new Array(We); for (m = 0; m < We; m++) Xt[m] = 0; for (m = W; m <= w; m++) { const Fe = a[m]; if (ne >= We) { Ae(Fe, E, y, !0); continue } let Xe; if (Fe.key != null) Xe = G.get(Fe.key);
                else
                    for (te = V; te <= D; te++)
                        if (Xt[te - V] === 0 && Ct(Fe, i[te])) { Xe = te; break }
                Xe === void 0 ? Ae(Fe, E, y, !0) : (Xt[Xe - V] = m + 1, Xe >= Yr ? Yr = Xe : kt = !0, O(Fe, i[Xe], f, null, E, y, R, k, C), ne++) } const Xr = kt ? za(Xt) : St; for (te = Xr.length - 1, m = We - 1; m >= 0; m--) { const Fe = V + m,
                    Xe = i[Fe],
                    Gr = Fe + 1 < L ? i[Fe + 1].el : h;
                Xt[m] === 0 ? O(null, Xe, f, Gr, E, y, R, k, C) : kt && (te < 0 || m !== Xr[te] ? Pe(Xe, f, Gr, 2) : te--) } } }, Pe = (a, i, f, h, E = null) => { const { el: y, type: R, transition: k, children: C, shapeFlag: m } = a; if (m & 6) { Pe(a.component.subTree, i, f, h); return } if (m & 128) { a.suspense.move(i, f, h); return } if (m & 64) { R.move(a, i, f, Ie); return } if (R === Se) { r(y, i, f); for (let w = 0; w < C.length; w++) Pe(C[w], i, f, h);
            r(a.anchor, i, f); return } if (R === jn) { T(a, i, f); return } if (h !== 2 && m & 1 && k)
            if (h === 0) k.beforeEnter(y), r(y, i, f), Oe(() => k.enter(y), E);
            else { const { leave: w, delayLeave: D, afterLeave: W } = k, V = () => r(y, i, f), G = () => { w(y, () => { V(), W && W() }) };
                D ? D(y, V, G) : G() }
        else r(y, i, f) }, Ae = (a, i, f, h = !1, E = !1) => { const { type: y, props: R, ref: k, children: C, dynamicChildren: m, shapeFlag: L, patchFlag: w, dirs: D } = a; if (k != null && nr(k, null, f, a, !0), L & 256) { i.ctx.deactivate(a); return } const W = L & 1 && D,
            V = !pn(a); let G; if (V && (G = R && R.onVnodeBeforeUnmount) && Ge(G, i, a), L & 6) Tt(a.component, f, h);
        else { if (L & 128) { a.suspense.unmount(f, h); return }
            W && It(a, null, i, "beforeUnmount"), L & 64 ? a.type.remove(a, i, f, E, Ie, h) : m && (y !== Se || w > 0 && w & 64) ? Te(m, i, f, !1, !0) : (y === Se && w & 384 || !E && L & 16) && Te(C, i, f), h && st(a) }(V && (G = R && R.onVnodeUnmounted) || W) && Oe(() => { G && Ge(G, i, a), W && It(a, null, i, "unmounted") }, f) }, st = a => { const { type: i, el: f, anchor: h, transition: E } = a; if (i === Se) { Lt(f, h); return } if (i === jn) { I(a); return } const y = () => { l(f), E && !E.persisted && E.afterLeave && E.afterLeave() }; if (a.shapeFlag & 1 && E && !E.persisted) { const { leave: R, delayLeave: k } = E, C = () => R(f, y);
            k ? k(a.el, y, C) : C() } else y() }, Lt = (a, i) => { let f; for (; a !== i;) f = p(a), l(a), a = f;
        l(i) }, Tt = (a, i, f) => { const { bum: h, scope: E, update: y, subTree: R, um: k } = a;
        h && $n(h), E.stop(), y && (y.active = !1, Ae(R, a, i, f)), k && Oe(k, i), Oe(() => { a.isUnmounted = !0 }, i), i && i.pendingBranch && !i.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === i.pendingId && (i.deps--, i.deps === 0 && i.resolve()) }, Te = (a, i, f, h = !1, E = !1, y = 0) => { for (let R = y; R < a.length; R++) Ae(a[R], i, f, h, E) }, Re = a => a.shapeFlag & 6 ? Re(a.component.subTree) : a.shapeFlag & 128 ? a.suspense.next() : p(a.anchor || a.el), Ke = (a, i, f) => { a == null ? i._vnode && Ae(i._vnode, null, null, !0) : O(i._vnode || null, a, i, null, null, null, f), rs(), Cl(), i._vnode = a }, Ie = { p: O, um: Ae, m: Pe, r: st, mt: nt, mc: $, pc: be, pbc: ee, n: Re, o: e }; let $e, Ye; return t && ([$e, Ye] = t(Ie)), { render: Ke, hydrate: $e, createApp: qa(Ke, $e) } }

function yt({ effect: e, update: t }, n) { e.allowRecurse = t.allowRecurse = n }

function Bl(e, t, n = !1) { const r = e.children,
        l = t.children; if (j(r) && j(l))
        for (let s = 0; s < r.length; s++) { const o = r[s]; let c = l[s];
            c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = l[s] = dt(l[s]), c.el = o.el), n || Bl(o, c)) } }

function za(e) { const t = e.slice(),
        n = [0]; let r, l, s, o, c; const u = e.length; for (r = 0; r < u; r++) { const d = e[r]; if (d !== 0) { if (l = n[n.length - 1], e[l] < d) { t[r] = l, n.push(r); continue } for (s = 0, o = n.length - 1; s < o;) c = s + o >> 1, e[n[c]] < d ? s = c + 1 : o = c;
            d < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r) } } for (s = n.length, o = n[s - 1]; s-- > 0;) n[s] = o, o = t[o]; return n }
const eo = e => e.__isTeleport,
    Se = Symbol(void 0),
    Rn = Symbol(void 0),
    at = Symbol(void 0),
    jn = Symbol(void 0),
    qt = [];
let Ve = null;

function to(e = !1) { qt.push(Ve = e ? null : []) }

function no() { qt.pop(), Ve = qt[qt.length - 1] || null }
let rn = 1;

function ms(e) { rn += e }

function ro(e) { return e.dynamicChildren = rn > 0 ? Ve || St : null, no(), rn > 0 && Ve && Ve.push(e), e }

function so(e, t, n, r, l, s) { return ro(J(e, t, n, r, l, s, !0)) }

function rr(e) { return e ? e.__v_isVNode === !0 : !1 }

function Ct(e, t) { return e.type === t.type && e.key === t.key }
const Mn = "__vInternal",
    Kl = ({ key: e }) => e != null ? e : null,
    bn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? pe(e) || he(e) || B(e) ? { i: tt, r: e, k: t, f: !!n } : e : null;

function J(e, t = null, n = null, r = 0, l = null, s = e === Se ? 0 : 1, o = !1, c = !1) { const u = { __v_isVNode: !0, __v_skip: !0, type: e, props: t, key: t && Kl(t), ref: t && bn(t), scopeId: Fl, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: r, dynamicProps: l, dynamicChildren: null, appContext: null }; return c ? (Ur(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= pe(n) ? 8 : 16), rn > 0 && !o && Ve && (u.patchFlag > 0 || s & 6) && u.patchFlag !== 32 && Ve.push(u), u }
const we = lo;

function lo(e, t = null, n = null, r = 0, l = null, s = !1) { if ((!e || e === xa) && (e = at), rr(e)) { const c = ht(e, t, !0); return n && Ur(c, n), rn > 0 && !s && Ve && (c.shapeFlag & 6 ? Ve[Ve.indexOf(e)] = c : Ve.push(c)), c.patchFlag |= -2, c } if (ho(e) && (e = e.__vccOpts), t) { t = io(t); let { class: c, style: u } = t;
        c && !pe(c) && (t.class = Er(c)), ae(u) && (pl(u) && !j(u) && (u = Le({}, u)), t.style = br(u)) } const o = pe(e) ? 1 : Ta(e) ? 128 : eo(e) ? 64 : ae(e) ? 4 : B(e) ? 2 : 0; return J(e, t, n, r, l, o, s, !0) }

function io(e) { return e ? pl(e) || Mn in e ? Le({}, e) : e : null }

function ht(e, t, n = !1) { const { props: r, ref: l, patchFlag: s, children: o } = e, c = t ? ao(r || {}, t) : r; return { __v_isVNode: !0, __v_skip: !0, type: e.type, props: c, key: c && Kl(c), ref: t && t.ref ? n && l ? j(l) ? l.concat(bn(t)) : [l, bn(t)] : bn(t) : l, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: o, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== Se ? s === -1 ? 16 : s | 16 : s, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && ht(e.ssContent), ssFallback: e.ssFallback && ht(e.ssFallback), el: e.el, anchor: e.anchor } }

function sr(e = " ", t = 0) { return we(Rn, null, e, t) }

function Qe(e) { return e == null || typeof e == "boolean" ? we(at) : j(e) ? we(Se, null, e.slice()) : typeof e == "object" ? dt(e) : we(Rn, null, String(e)) }

function dt(e) { return e.el === null || e.memo ? e : ht(e) }

function Ur(e, t) { let n = 0; const { shapeFlag: r } = e; if (t == null) t = null;
    else if (j(t)) n = 16;
    else if (typeof t == "object")
        if (r & 65) { const l = t.default;
            l && (l._c && (l._d = !1), Ur(e, l()), l._c && (l._d = !0)); return } else { n = 32; const l = t._;!l && !(Mn in t) ? t._ctx = tt : l === 3 && tt && (tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) }
    else B(t) ? (t = { default: t, _ctx: tt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [sr(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n }

function ao(...e) { const t = {}; for (let n = 0; n < e.length; n++) { const r = e[n]; for (const l in r)
            if (l === "class") t.class !== r.class && (t.class = Er([t.class, r.class]));
            else if (l === "style") t.style = br([t.style, r.style]);
        else if (Nn(l)) { const s = t[l],
                o = r[l];
            o && s !== o && !(j(s) && s.includes(o)) && (t[l] = s ? [].concat(s, o) : o) } else l !== "" && (t[l] = r[l]) } return t }

function Ge(e, t, n, r = null) { De(e, t, 7, [n, r]) }
const oo = Vl();
let co = 0;

function uo(e, t, n) { const r = e.type,
        l = (t ? t.appContext : e.appContext) || oo,
        s = { uid: co++, vnode: e, type: r, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, scope: new ll(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: $l(r, l), emitsOptions: Al(r, l), emit: null, emitted: null, propsDefaults: re, inheritAttrs: r.inheritAttrs, ctx: re, data: re, props: re, attrs: re, slots: re, refs: re, setupState: re, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null }; return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = ga.bind(null, s), e.ce && e.ce(s), s }
let ge = null;
const Ht = () => ge || tt,
    jt = e => { ge = e, e.scope.on() },
    Ft = () => { ge && ge.scope.off(), ge = null };

function Yl(e) { return e.vnode.shapeFlag & 4 }
let sn = !1;

function fo(e, t = !1) { sn = t; const { props: n, children: r } = e.vnode, l = Yl(e);
    Ba(e, n, l, t), Xa(e, r); const s = l ? mo(e, t) : void 0; return sn = !1, s }

function mo(e, t) { const n = e.type;
    e.accessCache = Object.create(null), e.proxy = bl(new Proxy(e.ctx, Ua)); const { setup: r } = n; if (r) { const l = e.setupContext = r.length > 1 ? go(e) : null;
        jt(e), Kt(); const s = _t(r, e, 0, [e.props, l]); if (Yt(), Ft(), tl(s)) { if (s.then(Ft, Ft), t) return s.then(o => { _s(e, o, t) }).catch(o => { An(o, e, 0) });
            e.asyncDep = s } else _s(e, s, t) } else Xl(e, t) }

function _s(e, t, n) { B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = Il(t)), Xl(e, n) }
let gs;

function Xl(e, t, n) { const r = e.type; if (!e.render) { if (!t && gs && !r.render) { const l = r.template || Dr(e).template; if (l) { const { isCustomElement: s, compilerOptions: o } = e.appContext.config, { delimiters: c, compilerOptions: u } = r, d = Le(Le({ isCustomElement: s, delimiters: c }, o), u);
                r.render = gs(l, d) } }
        e.render = r.render || Be }
    jt(e), Kt(), $a(e), Yt(), Ft() }

function _o(e) { return new Proxy(e.attrs, {get(t, n) { return ke(e, "get", "$attrs"), t[n] } }) }

function go(e) { const t = r => { e.exposed = r || {} }; let n; return {get attrs() { return n || (n = _o(e)) }, slots: e.slots, emit: e.emit, expose: t } }

function $r(e) { if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Il(bl(e.exposed)), {get(t, n) { if (n in t) return t[n]; if (n in In) return In[n](e) } })) }

function ho(e) { return B(e) && "__vccOpts" in e }
const je = (e, t) => oa(e, t, sn);

function Gl(e, t, n) { const r = arguments.length; return r === 2 ? ae(t) && !j(t) ? rr(t) ? we(e, null, [t]) : we(e, t) : we(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && rr(n) && (n = [n]), we(e, t, n)) }
const po = "3.2.39",
    bo = "http://www.w3.org/2000/svg",
    Ot = typeof document < "u" ? document : null,
    hs = Ot && Ot.createElement("template"),
    Eo = { insert: (e, t, n) => { t.insertBefore(e, n || null) }, remove: e => { const t = e.parentNode;
            t && t.removeChild(e) }, createElement: (e, t, n, r) => { const l = t ? Ot.createElementNS(bo, e) : Ot.createElement(e, n ? { is: n } : void 0); return e === "select" && r && r.multiple != null && l.setAttribute("multiple", r.multiple), l }, createText: e => Ot.createTextNode(e), createComment: e => Ot.createComment(e), setText: (e, t) => { e.nodeValue = t }, setElementText: (e, t) => { e.textContent = t }, parentNode: e => e.parentNode, nextSibling: e => e.nextSibling, querySelector: e => Ot.querySelector(e), setScopeId(e, t) { e.setAttribute(t, "") }, cloneNode(e) { const t = e.cloneNode(!0); return "_value" in e && (t._value = e._value), t }, insertStaticContent(e, t, n, r, l, s) { const o = n ? n.previousSibling : t.lastChild; if (l && (l === s || l.nextSibling))
                for (; t.insertBefore(l.cloneNode(!0), n), !(l === s || !(l = l.nextSibling)););
            else { hs.innerHTML = r ? `<svg>${e}</svg>` : e; const c = hs.content; if (r) { const u = c.firstChild; for (; u.firstChild;) c.appendChild(u.firstChild);
                    c.removeChild(u) }
                t.insertBefore(c, n) } return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild] } };

function Lo(e, t, n) { const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t }

function To(e, t, n) { const r = e.style,
        l = pe(n); if (n && !l) { for (const s in n) lr(r, s, n[s]); if (t && !pe(t))
            for (const s in t) n[s] == null && lr(r, s, "") } else { const s = r.display;
        l ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = s) } }
const ps = /\s*!important$/;

function lr(e, t, n) { if (j(n)) n.forEach(r => lr(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else { const r = Io(e, t);
        ps.test(n) ? e.setProperty(Bt(r), n.replace(ps, ""), "important") : e[r] = n } }
const bs = ["Webkit", "Moz", "ms"],
    Vn = {};

function Io(e, t) { const n = Vn[t]; if (n) return n; let r = $t(t); if (r !== "filter" && r in e) return Vn[t] = r;
    r = sl(r); for (let l = 0; l < bs.length; l++) { const s = bs[l] + r; if (s in e) return Vn[t] = s } return t }
const Es = "http://www.w3.org/1999/xlink";

function yo(e, t, n, r, l) { if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(Es, t.slice(6, t.length)) : e.setAttributeNS(Es, t, n);
    else { const s = pi(t);
        n == null || s && !Zs(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n) } }

function No(e, t, n, r, l, s, o) { if (t === "innerHTML" || t === "textContent") { r && o(r, l, s), e[t] = n == null ? "" : n; return } if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) { e._value = n; const u = n == null ? "" : n;
        (e.value !== u || e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t); return } let c = !1; if (n === "" || n == null) { const u = typeof e[t];
        u === "boolean" ? n = Zs(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0) } try { e[t] = n } catch {}
    c && e.removeAttribute(t) }
const [Jl, vo] = (() => { let e = Date.now,
        t = !1; if (typeof window < "u") { Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance)); const n = navigator.userAgent.match(/firefox\/(\d+)/i);
        t = !!(n && Number(n[1]) <= 53) } return [e, t] })();
let ir = 0;
const Co = Promise.resolve(),
    Oo = () => { ir = 0 },
    Ao = () => ir || (Co.then(Oo), ir = Jl());

function Fo(e, t, n, r) { e.addEventListener(t, n, r) }

function ko(e, t, n, r) { e.removeEventListener(t, n, r) }

function Po(e, t, n, r, l = null) { const s = e._vei || (e._vei = {}),
        o = s[t]; if (r && o) o.value = r;
    else { const [c, u] = Ro(t); if (r) { const d = s[t] = Mo(r, l);
            Fo(e, c, d, u) } else o && (ko(e, c, o, u), s[t] = void 0) } }
const Ls = /(?:Once|Passive|Capture)$/;

function Ro(e) { let t; if (Ls.test(e)) { t = {}; let r; for (; r = e.match(Ls);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0 } return [e[2] === ":" ? e.slice(3) : Bt(e.slice(2)), t] }

function Mo(e, t) { const n = r => { const l = r.timeStamp || Jl();
        (vo || l >= n.attached - 1) && De(So(r, n.value), t, 5, [r]) }; return n.value = e, n.attached = Ao(), n }

function So(e, t) { if (j(t)) { const n = e.stopImmediatePropagation; return e.stopImmediatePropagation = () => { n.call(e), e._stopped = !0 }, t.map(r => l => !l._stopped && r && r(l)) } else return t }
const Ts = /^on[a-z]/,
    wo = (e, t, n, r, l = !1, s, o, c, u) => { t === "class" ? Lo(e, r, l) : t === "style" ? To(e, n, r) : Nn(t) ? Lr(t) || Po(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Do(e, t, r, l)) ? No(e, t, r, s, o, c, u) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), yo(e, t, r, l)) };

function Do(e, t, n, r) { return r ? !!(t === "innerHTML" || t === "textContent" || t in e && Ts.test(t) && B(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Ts.test(t) && pe(n) ? !1 : t in e }
const xo = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
Oa.props;
const Uo = Le({ patchProp: wo }, Eo);
let Is;

function $o() { return Is || (Is = Qa(Uo)) }
const Wo = (...e) => { const t = $o().createApp(...e),
        { mount: n } = t; return t.mount = r => { const l = Ho(r); if (!l) return; const s = t._component;!B(s) && !s.render && !s.template && (s.template = l.innerHTML), l.innerHTML = ""; const o = n(l, !1, l instanceof SVGElement); return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), o }, t };

function Ho(e) { return pe(e) ? document.querySelector(e) : e }
const jo = "./assets/1.f06e828c.png",
    Vo = "./assets/2.dcd85395.png";
/*!
 * shared v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const ar = typeof window < "u",
    Bo = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    bt = e => Bo ? Symbol(e) : e,
    Ko = (e, t, n) => Yo({ l: e, k: t, s: n }),
    Yo = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    de = e => typeof e == "number" && isFinite(e),
    Xo = e => Hr(e) === "[object Date]",
    pt = e => Hr(e) === "[object RegExp]",
    Sn = e => H(e) && Object.keys(e).length === 0;

function Go(e, t) { typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack)) }
const _e = Object.assign;
let ys;
const Qt = () => ys || (ys = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ns(e) { return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") }
const Jo = Object.prototype.hasOwnProperty;

function Wr(e, t) { return Jo.call(e, t) }
const se = Array.isArray,
    ue = e => typeof e == "function",
    M = e => typeof e == "string",
    Y = e => typeof e == "boolean",
    le = e => e !== null && typeof e == "object",
    ql = Object.prototype.toString,
    Hr = e => ql.call(e),
    H = e => Hr(e) === "[object Object]",
    qo = e => e == null ? "" : se(e) || H(e) && e.toString === ql ? JSON.stringify(e, null, 2) : String(e);
/*!
 * message-compiler v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const Z = { EXPECTED_TOKEN: 1, INVALID_TOKEN_IN_PLACEHOLDER: 2, UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3, UNKNOWN_ESCAPE_SEQUENCE: 4, INVALID_UNICODE_ESCAPE_SEQUENCE: 5, UNBALANCED_CLOSING_BRACE: 6, UNTERMINATED_CLOSING_BRACE: 7, EMPTY_PLACEHOLDER: 8, NOT_ALLOW_NEST_PLACEHOLDER: 9, INVALID_LINKED_FORMAT: 10, MUST_HAVE_MESSAGES_IN_PLURAL: 11, UNEXPECTED_EMPTY_LINKED_MODIFIER: 12, UNEXPECTED_EMPTY_LINKED_KEY: 13, UNEXPECTED_LEXICAL_ANALYSIS: 14, __EXTEND_POINT__: 15 };

function wn(e, t, n = {}) { const { domain: r, messages: l, args: s } = n, o = e, c = new SyntaxError(String(o)); return c.code = e, t && (c.location = t), c.domain = r, c }

function Qo(e) { throw e }

function Zo(e, t, n) { return { line: e, column: t, offset: n } }

function or(e, t, n) { const r = { start: e, end: t }; return n != null && (r.source = n), r }
const lt = " ",
    zo = "\r",
    Ne = `
`,
    ec = String.fromCharCode(8232),
    tc = String.fromCharCode(8233);

function nc(e) { const t = e; let n = 0,
        r = 1,
        l = 1,
        s = 0; const o = x => t[x] === zo && t[x + 1] === Ne,
        c = x => t[x] === Ne,
        u = x => t[x] === tc,
        d = x => t[x] === ec,
        g = x => o(x) || c(x) || u(x) || d(x),
        b = () => n,
        p = () => r,
        N = () => l,
        P = () => s,
        A = x => o(x) || u(x) || d(x) ? Ne : t[x],
        O = () => A(n),
        _ = () => A(n + s);

    function v() { return s = 0, g(n) && (r++, l = 0), o(n) && n++, n++, l++, t[n] }

    function F() { return o(n + s) && s++, s++, t[n + s] }

    function T() { n = 0, r = 1, l = 1, s = 0 }

    function I(x = 0) { s = x }

    function S() { const x = n + s; for (; x !== n;) v();
        s = 0 } return { index: b, line: p, column: N, peekOffset: P, charAt: A, currentChar: O, currentPeek: _, next: v, peek: F, reset: T, resetPeek: I, skipToPeek: S } }
const ft = void 0,
    vs = "'",
    rc = "tokenizer";

function sc(e, t = {}) { const n = t.location !== !1,
        r = nc(e),
        l = () => r.index(),
        s = () => Zo(r.line(), r.column(), r.index()),
        o = s(),
        c = l(),
        u = { currentType: 14, offset: c, startLoc: o, endLoc: o, lastType: 14, lastOffset: c, lastStartLoc: o, lastEndLoc: o, braceNest: 0, inLinked: !1, text: "" },
        d = () => u,
        { onError: g } = t;

    function b(a, i, f, ...h) { const E = d(); if (i.column += f, i.offset += f, g) { const y = or(E.startLoc, i),
                R = wn(a, y, { domain: rc, args: h });
            g(R) } }

    function p(a, i, f) { a.endLoc = s(), a.currentType = i; const h = { type: i }; return n && (h.loc = or(a.startLoc, a.endLoc)), f != null && (h.value = f), h } const N = a => p(a, 14);

    function P(a, i) { return a.currentChar() === i ? (a.next(), i) : (b(Z.EXPECTED_TOKEN, s(), 0, i), "") }

    function A(a) { let i = ""; for (; a.currentPeek() === lt || a.currentPeek() === Ne;) i += a.currentPeek(), a.peek(); return i }

    function O(a) { const i = A(a); return a.skipToPeek(), i }

    function _(a) { if (a === ft) return !1; const i = a.charCodeAt(0); return i >= 97 && i <= 122 || i >= 65 && i <= 90 || i === 95 }

    function v(a) { if (a === ft) return !1; const i = a.charCodeAt(0); return i >= 48 && i <= 57 }

    function F(a, i) { const { currentType: f } = i; if (f !== 2) return !1;
        A(a); const h = _(a.currentPeek()); return a.resetPeek(), h }

    function T(a, i) { const { currentType: f } = i; if (f !== 2) return !1;
        A(a); const h = a.currentPeek() === "-" ? a.peek() : a.currentPeek(),
            E = v(h); return a.resetPeek(), E }

    function I(a, i) { const { currentType: f } = i; if (f !== 2) return !1;
        A(a); const h = a.currentPeek() === vs; return a.resetPeek(), h }

    function S(a, i) { const { currentType: f } = i; if (f !== 8) return !1;
        A(a); const h = a.currentPeek() === "."; return a.resetPeek(), h }

    function x(a, i) { const { currentType: f } = i; if (f !== 9) return !1;
        A(a); const h = _(a.currentPeek()); return a.resetPeek(), h }

    function U(a, i) { const { currentType: f } = i; if (!(f === 8 || f === 12)) return !1;
        A(a); const h = a.currentPeek() === ":"; return a.resetPeek(), h }

    function $(a, i) { const { currentType: f } = i; if (f !== 10) return !1; const h = () => { const y = a.currentPeek(); return y === "{" ? _(a.peek()) : y === "@" || y === "%" || y === "|" || y === ":" || y === "." || y === lt || !y ? !1 : y === Ne ? (a.peek(), h()) : _(y) },
            E = h(); return a.resetPeek(), E }

    function K(a) { A(a); const i = a.currentPeek() === "|"; return a.resetPeek(), i }

    function ee(a) { const i = A(a),
            f = a.currentPeek() === "%" && a.peek() === "{"; return a.resetPeek(), { isModulo: f, hasSpace: i.length > 0 } }

    function oe(a, i = !0) { const f = (E = !1, y = "", R = !1) => { const k = a.currentPeek(); return k === "{" ? y === "%" ? !1 : E : k === "@" || !k ? y === "%" ? !0 : E : k === "%" ? (a.peek(), f(E, "%", !0)) : k === "|" ? y === "%" || R ? !0 : !(y === lt || y === Ne) : k === lt ? (a.peek(), f(!0, lt, R)) : k === Ne ? (a.peek(), f(!0, Ne, R)) : !0 },
            h = f(); return i && a.resetPeek(), h }

    function ce(a, i) { const f = a.currentChar(); return f === ft ? ft : i(f) ? (a.next(), f) : null }

    function xe(a) { return ce(a, f => { const h = f.charCodeAt(0); return h >= 97 && h <= 122 || h >= 65 && h <= 90 || h >= 48 && h <= 57 || h === 95 || h === 36 }) }

    function nt(a) { return ce(a, f => { const h = f.charCodeAt(0); return h >= 48 && h <= 57 }) }

    function ie(a) { return ce(a, f => { const h = f.charCodeAt(0); return h >= 48 && h <= 57 || h >= 65 && h <= 70 || h >= 97 && h <= 102 }) }

    function X(a) { let i = "",
            f = ""; for (; i = nt(a);) f += i; return f }

    function Q(a) { O(a); const i = a.currentChar(); return i !== "%" && b(Z.EXPECTED_TOKEN, s(), 0, i), a.next(), "%" }

    function be(a) { let i = ""; for (;;) { const f = a.currentChar(); if (f === "{" || f === "}" || f === "@" || f === "|" || !f) break; if (f === "%")
                if (oe(a)) i += f, a.next();
                else break;
            else if (f === lt || f === Ne)
                if (oe(a)) i += f, a.next();
                else { if (K(a)) break;
                    i += f, a.next() }
            else i += f, a.next() } return i }

    function rt(a) { O(a); let i = "",
            f = ""; for (; i = xe(a);) f += i; return a.currentChar() === ft && b(Z.UNTERMINATED_CLOSING_BRACE, s(), 0), f }

    function Ue(a) { O(a); let i = ""; return a.currentChar() === "-" ? (a.next(), i += `-${X(a)}`) : i += X(a), a.currentChar() === ft && b(Z.UNTERMINATED_CLOSING_BRACE, s(), 0), i }

    function Pe(a) { O(a), P(a, "'"); let i = "",
            f = ""; const h = y => y !== vs && y !== Ne; for (; i = ce(a, h);) i === "\\" ? f += Ae(a) : f += i; const E = a.currentChar(); return E === Ne || E === ft ? (b(Z.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), E === Ne && (a.next(), P(a, "'")), f) : (P(a, "'"), f) }

    function Ae(a) { const i = a.currentChar(); switch (i) {
            case "\\":
            case "'":
                return a.next(), `\\${i}`;
            case "u":
                return st(a, i, 4);
            case "U":
                return st(a, i, 6);
            default:
                return b(Z.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, i), "" } }

    function st(a, i, f) { P(a, i); let h = ""; for (let E = 0; E < f; E++) { const y = ie(a); if (!y) { b(Z.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${i}${h}${a.currentChar()}`); break }
            h += y } return `\\${i}${h}` }

    function Lt(a) { O(a); let i = "",
            f = ""; const h = E => E !== "{" && E !== "}" && E !== lt && E !== Ne; for (; i = ce(a, h);) f += i; return f }

    function Tt(a) { let i = "",
            f = ""; for (; i = xe(a);) f += i; return f }

    function Te(a) { const i = (f = !1, h) => { const E = a.currentChar(); return E === "{" || E === "%" || E === "@" || E === "|" || !E || E === lt ? h : E === Ne ? (h += E, a.next(), i(f, h)) : (h += E, a.next(), i(!0, h)) }; return i(!1, "") }

    function Re(a) { O(a); const i = P(a, "|"); return O(a), i }

    function Ke(a, i) { let f = null; switch (a.currentChar()) {
            case "{":
                return i.braceNest >= 1 && b(Z.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), a.next(), f = p(i, 2, "{"), O(a), i.braceNest++, f;
            case "}":
                return i.braceNest > 0 && i.currentType === 2 && b(Z.EMPTY_PLACEHOLDER, s(), 0), a.next(), f = p(i, 3, "}"), i.braceNest--, i.braceNest > 0 && O(a), i.inLinked && i.braceNest === 0 && (i.inLinked = !1), f;
            case "@":
                return i.braceNest > 0 && b(Z.UNTERMINATED_CLOSING_BRACE, s(), 0), f = Ie(a, i) || N(i), i.braceNest = 0, f;
            default:
                let E = !0,
                    y = !0,
                    R = !0; if (K(a)) return i.braceNest > 0 && b(Z.UNTERMINATED_CLOSING_BRACE, s(), 0), f = p(i, 1, Re(a)), i.braceNest = 0, i.inLinked = !1, f; if (i.braceNest > 0 && (i.currentType === 5 || i.currentType === 6 || i.currentType === 7)) return b(Z.UNTERMINATED_CLOSING_BRACE, s(), 0), i.braceNest = 0, $e(a, i); if (E = F(a, i)) return f = p(i, 5, rt(a)), O(a), f; if (y = T(a, i)) return f = p(i, 6, Ue(a)), O(a), f; if (R = I(a, i)) return f = p(i, 7, Pe(a)), O(a), f; if (!E && !y && !R) return f = p(i, 13, Lt(a)), b(Z.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, f.value), O(a), f; break } return f }

    function Ie(a, i) { const { currentType: f } = i; let h = null; const E = a.currentChar(); switch ((f === 8 || f === 9 || f === 12 || f === 10) && (E === Ne || E === lt) && b(Z.INVALID_LINKED_FORMAT, s(), 0), E) {
            case "@":
                return a.next(), h = p(i, 8, "@"), i.inLinked = !0, h;
            case ".":
                return O(a), a.next(), p(i, 9, ".");
            case ":":
                return O(a), a.next(), p(i, 10, ":");
            default:
                return K(a) ? (h = p(i, 1, Re(a)), i.braceNest = 0, i.inLinked = !1, h) : S(a, i) || U(a, i) ? (O(a), Ie(a, i)) : x(a, i) ? (O(a), p(i, 12, Tt(a))) : $(a, i) ? (O(a), E === "{" ? Ke(a, i) || h : p(i, 11, Te(a))) : (f === 8 && b(Z.INVALID_LINKED_FORMAT, s(), 0), i.braceNest = 0, i.inLinked = !1, $e(a, i)) } }

    function $e(a, i) { let f = { type: 14 }; if (i.braceNest > 0) return Ke(a, i) || N(i); if (i.inLinked) return Ie(a, i) || N(i); switch (a.currentChar()) {
            case "{":
                return Ke(a, i) || N(i);
            case "}":
                return b(Z.UNBALANCED_CLOSING_BRACE, s(), 0), a.next(), p(i, 3, "}");
            case "@":
                return Ie(a, i) || N(i);
            default:
                if (K(a)) return f = p(i, 1, Re(a)), i.braceNest = 0, i.inLinked = !1, f; const { isModulo: E, hasSpace: y } = ee(a); if (E) return y ? p(i, 0, be(a)) : p(i, 4, Q(a)); if (oe(a)) return p(i, 0, be(a)); break } return f }

    function Ye() { const { currentType: a, offset: i, startLoc: f, endLoc: h } = u; return u.lastType = a, u.lastOffset = i, u.lastStartLoc = f, u.lastEndLoc = h, u.offset = l(), u.startLoc = s(), r.currentChar() === ft ? p(u, 14) : $e(r, u) } return { nextToken: Ye, currentOffset: l, currentPosition: s, context: d } }
const lc = "parser",
    ic = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function ac(e, t, n) { switch (e) {
        case "\\\\":
            return "\\";
        case "\\'":
            return "'";
        default:
            { const r = parseInt(t || n, 16); return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "\uFFFD" } } }

function oc(e = {}) { const t = e.location !== !1,
        { onError: n } = e;

    function r(_, v, F, T, ...I) { const S = _.currentPosition(); if (S.offset += T, S.column += T, n) { const x = or(F, S),
                U = wn(v, x, { domain: lc, args: I });
            n(U) } }

    function l(_, v, F) { const T = { type: _, start: v, end: v }; return t && (T.loc = { start: F, end: F }), T }

    function s(_, v, F, T) { _.end = v, T && (_.type = T), t && _.loc && (_.loc.end = F) }

    function o(_, v) { const F = _.context(),
            T = l(3, F.offset, F.startLoc); return T.value = v, s(T, _.currentOffset(), _.currentPosition()), T }

    function c(_, v) { const F = _.context(),
            { lastOffset: T, lastStartLoc: I } = F,
            S = l(5, T, I); return S.index = parseInt(v, 10), _.nextToken(), s(S, _.currentOffset(), _.currentPosition()), S }

    function u(_, v) { const F = _.context(),
            { lastOffset: T, lastStartLoc: I } = F,
            S = l(4, T, I); return S.key = v, _.nextToken(), s(S, _.currentOffset(), _.currentPosition()), S }

    function d(_, v) { const F = _.context(),
            { lastOffset: T, lastStartLoc: I } = F,
            S = l(9, T, I); return S.value = v.replace(ic, ac), _.nextToken(), s(S, _.currentOffset(), _.currentPosition()), S }

    function g(_) { const v = _.nextToken(),
            F = _.context(),
            { lastOffset: T, lastStartLoc: I } = F,
            S = l(8, T, I); return v.type !== 12 ? (r(_, Z.UNEXPECTED_EMPTY_LINKED_MODIFIER, F.lastStartLoc, 0), S.value = "", s(S, T, I), { nextConsumeToken: v, node: S }) : (v.value == null && r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, F.lastStartLoc, 0, Je(v)), S.value = v.value || "", s(S, _.currentOffset(), _.currentPosition()), { node: S }) }

    function b(_, v) { const F = _.context(),
            T = l(7, F.offset, F.startLoc); return T.value = v, s(T, _.currentOffset(), _.currentPosition()), T }

    function p(_) { const v = _.context(),
            F = l(6, v.offset, v.startLoc); let T = _.nextToken(); if (T.type === 9) { const I = g(_);
            F.modifier = I.node, T = I.nextConsumeToken || _.nextToken() } switch (T.type !== 10 && r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Je(T)), T = _.nextToken(), T.type === 2 && (T = _.nextToken()), T.type) {
            case 11:
                T.value == null && r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Je(T)), F.key = b(_, T.value || ""); break;
            case 5:
                T.value == null && r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Je(T)), F.key = u(_, T.value || ""); break;
            case 6:
                T.value == null && r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Je(T)), F.key = c(_, T.value || ""); break;
            case 7:
                T.value == null && r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Je(T)), F.key = d(_, T.value || ""); break;
            default:
                r(_, Z.UNEXPECTED_EMPTY_LINKED_KEY, v.lastStartLoc, 0); const I = _.context(),
                    S = l(7, I.offset, I.startLoc); return S.value = "", s(S, I.offset, I.startLoc), F.key = S, s(F, I.offset, I.startLoc), { nextConsumeToken: T, node: F } } return s(F, _.currentOffset(), _.currentPosition()), { node: F } }

    function N(_) { const v = _.context(),
            F = v.currentType === 1 ? _.currentOffset() : v.offset,
            T = v.currentType === 1 ? v.endLoc : v.startLoc,
            I = l(2, F, T);
        I.items = []; let S = null;
        do { const $ = S || _.nextToken(); switch (S = null, $.type) {
                case 0:
                    $.value == null && r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Je($)), I.items.push(o(_, $.value || "")); break;
                case 6:
                    $.value == null && r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Je($)), I.items.push(c(_, $.value || "")); break;
                case 5:
                    $.value == null && r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Je($)), I.items.push(u(_, $.value || "")); break;
                case 7:
                    $.value == null && r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Je($)), I.items.push(d(_, $.value || "")); break;
                case 8:
                    const K = p(_);
                    I.items.push(K.node), S = K.nextConsumeToken || null; break } } while (v.currentType !== 14 && v.currentType !== 1); const x = v.currentType === 1 ? v.lastOffset : _.currentOffset(),
            U = v.currentType === 1 ? v.lastEndLoc : _.currentPosition(); return s(I, x, U), I }

    function P(_, v, F, T) { const I = _.context(); let S = T.items.length === 0; const x = l(1, v, F);
        x.cases = [], x.cases.push(T);
        do { const U = N(_);
            S || (S = U.items.length === 0), x.cases.push(U) } while (I.currentType !== 14); return S && r(_, Z.MUST_HAVE_MESSAGES_IN_PLURAL, F, 0), s(x, _.currentOffset(), _.currentPosition()), x }

    function A(_) { const v = _.context(),
            { offset: F, startLoc: T } = v,
            I = N(_); return v.currentType === 14 ? I : P(_, F, T, I) }

    function O(_) { const v = sc(_, _e({}, e)),
            F = v.context(),
            T = l(0, F.offset, F.startLoc); return t && T.loc && (T.loc.source = _), T.body = A(v), F.currentType !== 14 && r(v, Z.UNEXPECTED_LEXICAL_ANALYSIS, F.lastStartLoc, 0, _[F.offset] || ""), s(T, v.currentOffset(), v.currentPosition()), T } return { parse: O } }

function Je(e) { if (e.type === 14) return "EOF"; const t = (e.value || "").replace(/\r?\n/gu, "\\n"); return t.length > 10 ? t.slice(0, 9) + "\u2026" : t }

function cc(e, t = {}) { const n = { ast: e, helpers: new Set }; return { context: () => n, helper: s => (n.helpers.add(s), s) } }

function Cs(e, t) { for (let n = 0; n < e.length; n++) jr(e[n], t) }

function jr(e, t) { switch (e.type) {
        case 1:
            Cs(e.cases, t), t.helper("plural"); break;
        case 2:
            Cs(e.items, t); break;
        case 6:
            jr(e.key, t), t.helper("linked"), t.helper("type"); break;
        case 5:
            t.helper("interpolate"), t.helper("list"); break;
        case 4:
            t.helper("interpolate"), t.helper("named"); break } }

function uc(e, t = {}) { const n = cc(e);
    n.helper("normalize"), e.body && jr(e.body, n); const r = n.context();
    e.helpers = Array.from(r.helpers) }

function fc(e, t) { const { sourceMap: n, filename: r, breakLineCode: l, needIndent: s } = t, o = { source: e.loc.source, filename: r, code: "", column: 1, line: 1, offset: 0, map: void 0, breakLineCode: l, needIndent: s, indentLevel: 0 }, c = () => o;

    function u(A, O) { o.code += A }

    function d(A, O = !0) { const _ = O ? l : "";
        u(s ? _ + "  ".repeat(A) : _) }

    function g(A = !0) { const O = ++o.indentLevel;
        A && d(O) }

    function b(A = !0) { const O = --o.indentLevel;
        A && d(O) }

    function p() { d(o.indentLevel) } return { context: c, push: u, indent: g, deindent: b, newline: p, helper: A => `_${A}`, needIndent: () => o.needIndent } }

function dc(e, t) { const { helper: n } = e;
    e.push(`${n("linked")}(`), Vt(e, t.key), t.modifier ? (e.push(", "), Vt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")") }

function mc(e, t) { const { helper: n, needIndent: r } = e;
    e.push(`${n("normalize")}([`), e.indent(r()); const l = t.items.length; for (let s = 0; s < l && (Vt(e, t.items[s]), s !== l - 1); s++) e.push(", ");
    e.deindent(r()), e.push("])") }

function _c(e, t) { const { helper: n, needIndent: r } = e; if (t.cases.length > 1) { e.push(`${n("plural")}([`), e.indent(r()); const l = t.cases.length; for (let s = 0; s < l && (Vt(e, t.cases[s]), s !== l - 1); s++) e.push(", ");
        e.deindent(r()), e.push("])") } }

function gc(e, t) { t.body ? Vt(e, t.body) : e.push("null") }

function Vt(e, t) { const { helper: n } = e; switch (t.type) {
        case 0:
            gc(e, t); break;
        case 1:
            _c(e, t); break;
        case 2:
            mc(e, t); break;
        case 6:
            dc(e, t); break;
        case 8:
            e.push(JSON.stringify(t.value), t); break;
        case 7:
            e.push(JSON.stringify(t.value), t); break;
        case 5:
            e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t); break;
        case 4:
            e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t); break;
        case 9:
            e.push(JSON.stringify(t.value), t); break;
        case 3:
            e.push(JSON.stringify(t.value), t); break } }
const hc = (e, t = {}) => { const n = M(t.mode) ? t.mode : "normal",
            r = M(t.filename) ? t.filename : "message.intl",
            l = !!t.sourceMap,
            s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
            o = t.needIndent ? t.needIndent : n !== "arrow",
            c = e.helpers || [],
            u = fc(e, { mode: n, filename: r, sourceMap: l, breakLineCode: s, needIndent: o });
        u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(o), c.length > 0 && (u.push(`const { ${c.map(b=>`${b}: _${b}`).join(", ")} } = ctx`),u.newline()),u.push("return "),Vt(u,e),u.deindent(o),u.push("}");const{code:d,map:g}=u.context();return{ast:e,code:d,map:g?g.toJSON():void 0}};function pc(e,t={}){const n=_e({},t),l=oc(n).parse(e);return uc(l,n),hc(l,n)}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Ql={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Et=[];Et[0]={w:[0],i:[3,0],["["]:[4],o:[7]};Et[1]={w:[1],["."]:[2],["["]:[4],o:[7]};Et[2]={w:[2],i:[3,0],[0]:[3,0]};Et[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};Et[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};Et[5]={["'"]:[4,0],o:8,l:[5,0]};Et[6]={['"']:[4,0],o:8,l:[6,0]};const bc=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Ec(e){return bc.test(e)}function Lc(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function Tc(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Ic(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Ec(t)?Lc(t):"*"+t}function yc(e){const t=[];let n=-1,r=0,l=0,s,o,c,u,d,g,b;const p=[];p[0]=()=>{o===void 0?o=c:o+=c},p[1]=()=>{o!==void 0&&(t.push(o),o=void 0)},p[2]=()=>{p[0](),l++},p[3]=()=>{if(l>0)l--,r=4,p[0]();else{if(l=0,o===void 0||(o=Ic(o),o===!1))return!1;p[1]()}};function N(){const P=e[n+1];if(r===5&&P==="'"||r===6&&P==='"')return n++,c="\\"+P,p[0](),!0}for(;r!==null;)if(n++,s=e[n],!(s==="\\"&&N())){if(u=Tc(s),b=Et[r],d=b[u]||b.l||8,d===8||(r=d[0],d[1]!==void 0&&(g=p[d[1]],g&&(c=s,g()===!1))))return;if(r===7)return t}}const Os=new Map;function Nc(e,t){return le(e)?e[t]:null}function vc(e,t){if(!le(e))return null;let n=Os.get(t);if(n||(n=yc(t),n&&Os.set(t,n)),!n)return null;const r=n.length;let l=e,s=0;for(;s<r;){const o=l[n[s]];if(o===void 0)return null;l=o,s++}return l}const Cc=e=>e,Oc=e=>"",Ac="text",Fc=e=>e.length===0?"":e.join(""),kc=qo;function As(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Pc(e){const t=de(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(de(e.named.count)||de(e.named.n))?de(e.named.count)?e.named.count:de(e.named.n)?e.named.n:t:t}function Rc(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Mc(e={}){const t=e.locale,n=Pc(e),r=le(e.pluralRules)&&M(t)&&ue(e.pluralRules[t])?e.pluralRules[t]:As,l=le(e.pluralRules)&&M(t)&&ue(e.pluralRules[t])?As:void 0,s=_=>_[r(n,_.length,l)],o=e.list||[],c=_=>o[_],u=e.named||{};de(e.pluralIndex)&&Rc(n,u);const d=_=>u[_];function g(_){const v=ue(e.messages)?e.messages(_):le(e.messages)?e.messages[_]:!1;return v||(e.parent?e.parent.message(_):Oc)}const b=_=>e.modifiers?e.modifiers[_]:Cc,p=H(e.processor)&&ue(e.processor.normalize)?e.processor.normalize:Fc,N=H(e.processor)&&ue(e.processor.interpolate)?e.processor.interpolate:kc,P=H(e.processor)&&M(e.processor.type)?e.processor.type:Ac,O={list:c,named:d,plural:s,linked:(_,...v)=>{const[F,T]=v;let I="text",S="";v.length===1?le(F)?(S=F.modifier||S,I=F.type||I):M(F)&&(S=F||S):v.length===2&&(M(F)&&(S=F||S),M(T)&&(I=T||I));let x=g(_)(O);return I==="vnode"&&se(x)&&S&&(x=x[0]),S?b(S)(x,I):x},message:g,type:P,interpolate:N,normalize:p};return O}let ln=null;function Sc(e){ln=e}function wc(e,t,n){ln&&ln.emit(Ql.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const Dc=xc(Ql.FunctionTranslate);function xc(e){return t=>ln&&ln.emit(e,t)}const Uc={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function $c(e,t,n){return[...new Set([n,...se(t)?t:le(t)?Object.keys(t):M(t)?[t]:[n]])]}function Zl(e,t,n){const r=M(n)?n:an,l=e;l.__localeChainCache||(l.__localeChainCache=new Map);let s=l.__localeChainCache.get(r);if(!s){s=[];let o=[n];for(;se(o);)o=Fs(s,o,t);const c=se(t)||!H(t)?t:t.default?t.default:null;o=M(c)?[c]:c,se(o)&&Fs(s,o,!1),l.__localeChainCache.set(r,s)}return s}function Fs(e,t,n){let r=!0;for(let l=0;l<t.length&&Y(r);l++){const s=t[l];M(s)&&(r=Wc(e,t[l],n))}return r}function Wc(e,t,n){let r;const l=t.split("-");do{const s=l.join("-");r=Hc(e,s,n),l.splice(-1,1)}while(l.length&&r===!0);return r}function Hc(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r=t[t.length-1]!=="!";const l=t.replace(/!/g,"");e.push(l),(se(n)||H(n))&&n[l]&&(r=n[l])}return r}const jc="9.2.2",Dn=-1,an="en-US",ks="",Ps=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function Vc(){return{upper:(e,t)=>t==="text"&&M(e)?e.toUpperCase():t==="vnode"&&le(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&M(e)?e.toLowerCase():t==="vnode"&&le(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&M(e)?Ps(e):t==="vnode"&&le(e)&&"__v_isVNode"in e?Ps(e.children):e}}let zl;function Bc(e){zl=e}let ei;function Kc(e){ei=e}let ti;function Yc(e){ti=e}let ni=null;const Rs=e=>{ni=e},Xc=()=>ni;let ri=null;const Ms=e=>{ri=e},Gc=()=>ri;let Ss=0;function Jc(e={}){const t=M(e.version)?e.version:jc,n=M(e.locale)?e.locale:an,r=se(e.fallbackLocale)||H(e.fallbackLocale)||M(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,l=H(e.messages)?e.messages:{[n]:{}},s=H(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},o=H(e.numberFormats)?e.numberFormats:{[n]:{}},c=_e({},e.modifiers||{},Vc()),u=e.pluralRules||{},d=ue(e.missing)?e.missing:null,g=Y(e.missingWarn)||pt(e.missingWarn)?e.missingWarn:!0,b=Y(e.fallbackWarn)||pt(e.fallbackWarn)?e.fallbackWarn:!0,p=!!e.fallbackFormat,N=!!e.unresolving,P=ue(e.postTranslation)?e.postTranslation:null,A=H(e.processor)?e.processor:null,O=Y(e.warnHtmlMessage)?e.warnHtmlMessage:!0,_=!!e.escapeParameter,v=ue(e.messageCompiler)?e.messageCompiler:zl,F=ue(e.messageResolver)?e.messageResolver:ei||Nc,T=ue(e.localeFallbacker)?e.localeFallbacker:ti||$c,I=le(e.fallbackContext)?e.fallbackContext:void 0,S=ue(e.onWarn)?e.onWarn:Go,x=e,U=le(x.__datetimeFormatters)?x.__datetimeFormatters:new Map,$=le(x.__numberFormatters)?x.__numberFormatters:new Map,K=le(x.__meta)?x.__meta:{};Ss++;const ee={version:t,cid:Ss,locale:n,fallbackLocale:r,messages:l,modifiers:c,pluralRules:u,missing:d,missingWarn:g,fallbackWarn:b,fallbackFormat:p,unresolving:N,postTranslation:P,processor:A,warnHtmlMessage:O,escapeParameter:_,messageCompiler:v,messageResolver:F,localeFallbacker:T,fallbackContext:I,onWarn:S,__meta:K};return ee.datetimeFormats=s,ee.numberFormats=o,ee.__datetimeFormatters=U,ee.__numberFormatters=$,__INTLIFY_PROD_DEVTOOLS__&&wc(ee,t,K),ee}function Vr(e,t,n,r,l){const{missing:s,onWarn:o}=e;if(s!==null){const c=s(e,n,t,l);return M(c)?c:t}else return t}function Gt(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}const qc=e=>e;let ws=Object.create(null);function Qc(e,t={}){{const r=(t.onCacheKey||qc)(e),l=ws[r];if(l)return l;let s=!1;const o=t.onError||Qo;t.onError=d=>{s=!0,o(d)};const{code:c}=pc(e,t),u=new Function(`return ${c}`)();return s?u:ws[r]=u}}let si=Z.__EXTEND_POINT__;const Bn=()=>++si,Rt={INVALID_ARGUMENT:si,INVALID_DATE_ARGUMENT:Bn(),INVALID_ISO_DATE_ARGUMENT:Bn(),__EXTEND_POINT__:Bn()};function Mt(e){return wn(e,null,void 0)}const Ds=()=>"",Ze=e=>ue(e);function xs(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:l,messageCompiler:s,fallbackLocale:o,messages:c}=e,[u,d]=cr(...t),g=Y(d.missingWarn)?d.missingWarn:e.missingWarn,b=Y(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn,p=Y(d.escapeParameter)?d.escapeParameter:e.escapeParameter,N=!!d.resolvedMessage,P=M(d.default)||Y(d.default)?Y(d.default)?s?u:()=>u:d.default:n?s?u:()=>u:"",A=n||P!=="",O=M(d.locale)?d.locale:e.locale;p&&Zc(d);let[_,v,F]=N?[u,O,c[O]||{}]:li(e,u,O,o,b,g),T=_,I=u;if(!N&&!(M(T)||Ze(T))&&A&&(T=P,I=T),!N&&(!(M(T)||Ze(T))||!M(v)))return l?Dn:u;let S=!1;const x=()=>{S=!0},U=Ze(T)?T:ii(e,u,v,T,I,x);if(S)return T;const $=tu(e,v,F,d),K=Mc($),ee=zc(e,U,K),oe=r?r(ee,u):ee;if(__INTLIFY_PROD_DEVTOOLS__){const ce={timestamp:Date.now(),key:M(u)?u:Ze(T)?T.key:"",locale:v||(Ze(T)?T.locale:""),format:M(T)?T:Ze(T)?T.source:"",message:oe};ce.meta=_e({},e.__meta,Xc()||{}),Dc(ce)}return oe}function Zc(e){se(e.list)?e.list=e.list.map(t=>M(t)?Ns(t):t):le(e.named)&&Object.keys(e.named).forEach(t=>{M(e.named[t])&&(e.named[t]=Ns(e.named[t]))})}function li(e,t,n,r,l,s){const{messages:o,onWarn:c,messageResolver:u,localeFallbacker:d}=e,g=d(e,r,n);let b={},p,N=null;const P="translate";for(let A=0;A<g.length&&(p=g[A],b=o[p]||{},(N=u(b,t))===null&&(N=b[t]),!(M(N)||ue(N)));A++){const O=Vr(e,t,p,s,P);O!==t&&(N=O)}return[N,p,b]}function ii(e,t,n,r,l,s){const{messageCompiler:o,warnHtmlMessage:c}=e;if(Ze(r)){const d=r;return d.locale=d.locale||n,d.key=d.key||t,d}if(o==null){const d=()=>r;return d.locale=n,d.key=t,d}const u=o(r,eu(e,n,l,r,c,s));return u.locale=n,u.key=t,u.source=r,u}function zc(e,t,n){return t(n)}function cr(...e){const[t,n,r]=e,l={};if(!M(t)&&!de(t)&&!Ze(t))throw Mt(Rt.INVALID_ARGUMENT);const s=de(t)?String(t):(Ze(t),t);return de(n)?l.plural=n:M(n)?l.default=n:H(n)&&!Sn(n)?l.named=n:se(n)&&(l.list=n),de(r)?l.plural=r:M(r)?l.default=r:H(r)&&_e(l,r),[s,l]}function eu(e,t,n,r,l,s){return{warnHtmlMessage:l,onError:o=>{throw s&&s(o),o},onCacheKey:o=>Ko(t,n,o)}}function tu(e,t,n,r){const{modifiers:l,pluralRules:s,messageResolver:o,fallbackLocale:c,fallbackWarn:u,missingWarn:d,fallbackContext:g}=e,p={locale:t,modifiers:l,pluralRules:s,messages:N=>{let P=o(n,N);if(P==null&&g){const[,,A]=li(g,N,t,c,u,d);P=o(A,N)}if(M(P)){let A=!1;const _=ii(e,N,t,P,N,()=>{A=!0});return A?Ds:_}else return Ze(P)?P:Ds}};return e.processor&&(p.processor=e.processor),r.list&&(p.list=r.list),r.named&&(p.named=r.named),de(r.plural)&&(p.pluralIndex=r.plural),p}function Us(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:l,onWarn:s,localeFallbacker:o}=e,{__datetimeFormatters:c}=e,[u,d,g,b]=ur(...t),p=Y(g.missingWarn)?g.missingWarn:e.missingWarn;Y(g.fallbackWarn)?g.fallbackWarn:e.fallbackWarn;const N=!!g.part,P=M(g.locale)?g.locale:e.locale,A=o(e,l,P);if(!M(u)||u==="")return new Intl.DateTimeFormat(P,b).format(d);let O={},_,v=null;const F="datetime format";for(let S=0;S<A.length&&(_=A[S],O=n[_]||{},v=O[u],!H(v));S++)Vr(e,u,_,p,F);if(!H(v)||!M(_))return r?Dn:u;let T=`${_}__${u}`;Sn(b)||(T=`${T}__${JSON.stringify(b)}`);let I=c.get(T);return I||(I=new Intl.DateTimeFormat(_,_e({},v,b)),c.set(T,I)),N?I.formatToParts(d):I.format(d)}const ai=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function ur(...e){const[t,n,r,l]=e,s={};let o={},c;if(M(t)){const u=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!u)throw Mt(Rt.INVALID_ISO_DATE_ARGUMENT);const d=u[3]?u[3].trim().startsWith("T")?`${u[1].trim()}${u[3].trim()}`:`${u[1].trim()}T${u[3].trim()}`:u[1].trim();c=new Date(d);try{c.toISOString()}catch{throw Mt(Rt.INVALID_ISO_DATE_ARGUMENT)}}else if(Xo(t)){if(isNaN(t.getTime()))throw Mt(Rt.INVALID_DATE_ARGUMENT);c=t}else if(de(t))c=t;else throw Mt(Rt.INVALID_ARGUMENT);return M(n)?s.key=n:H(n)&&Object.keys(n).forEach(u=>{ai.includes(u)?o[u]=n[u]:s[u]=n[u]}),M(r)?s.locale=r:H(r)&&(o=r),H(l)&&(o=l),[s.key||"",c,s,o]}function $s(e,t,n){const r=e;for(const l in n){const s=`${t}__${l}`;!r.__datetimeFormatters.has(s)||r.__datetimeFormatters.delete(s)}}function Ws(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:l,onWarn:s,localeFallbacker:o}=e,{__numberFormatters:c}=e,[u,d,g,b]=fr(...t),p=Y(g.missingWarn)?g.missingWarn:e.missingWarn;Y(g.fallbackWarn)?g.fallbackWarn:e.fallbackWarn;const N=!!g.part,P=M(g.locale)?g.locale:e.locale,A=o(e,l,P);if(!M(u)||u==="")return new Intl.NumberFormat(P,b).format(d);let O={},_,v=null;const F="number format";for(let S=0;S<A.length&&(_=A[S],O=n[_]||{},v=O[u],!H(v));S++)Vr(e,u,_,p,F);if(!H(v)||!M(_))return r?Dn:u;let T=`${_}__${u}`;Sn(b)||(T=`${T}__${JSON.stringify(b)}`);let I=c.get(T);return I||(I=new Intl.NumberFormat(_,_e({},v,b)),c.set(T,I)),N?I.formatToParts(d):I.format(d)}const oi=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function fr(...e){const[t,n,r,l]=e,s={};let o={};if(!de(t))throw Mt(Rt.INVALID_ARGUMENT);const c=t;return M(n)?s.key=n:H(n)&&Object.keys(n).forEach(u=>{oi.includes(u)?o[u]=n[u]:s[u]=n[u]}),M(r)?s.locale=r:H(r)&&(o=r),H(l)&&(o=l),[s.key||"",c,s,o]}function Hs(e,t,n){const r=e;for(const l in n){const s=`${t}__${l}`;!r.__numberFormatters.has(s)||r.__numberFormatters.delete(s)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Qt().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const nu="9.2.2";function ru(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Qt().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Qt().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Qt().__INTLIFY_PROD_DEVTOOLS__=!1)}Uc.__EXTEND_POINT__;let ci=Z.__EXTEND_POINT__;const Ce=()=>++ci,fe={UNEXPECTED_RETURN_TYPE:ci,INVALID_ARGUMENT:Ce(),MUST_BE_CALL_SETUP_TOP:Ce(),NOT_INSLALLED:Ce(),NOT_AVAILABLE_IN_LEGACY_MODE:Ce(),REQUIRED_VALUE:Ce(),INVALID_VALUE:Ce(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Ce(),NOT_INSLALLED_WITH_PROVIDE:Ce(),UNEXPECTED_ERROR:Ce(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Ce(),BRIDGE_SUPPORT_VUE_2_ONLY:Ce(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Ce(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Ce(),__EXTEND_POINT__:Ce()};function me(e,...t){return wn(e,null,void 0)}const dr=bt("__transrateVNode"),mr=bt("__datetimeParts"),_r=bt("__numberParts"),ui=bt("__setPluralRules");bt("__intlifyMeta");const fi=bt("__injectWithOption");function gr(e){if(!le(e))return e;for(const t in e)if(!!Wr(e,t))if(!t.includes("."))le(e[t])&&gr(e[t]);else{const n=t.split("."),r=n.length-1;let l=e;for(let s=0;s<r;s++)n[s]in l||(l[n[s]]={}),l=l[n[s]];l[n[r]]=e[t],delete e[t],le(l[n[r]])&&gr(l[n[r]])}return e}function xn(e,t){const{messages:n,__i18n:r,messageResolver:l,flatJson:s}=t,o=H(n)?n:se(r)?{}:{[e]:{}};if(se(r)&&r.forEach(c=>{if("locale"in c&&"resource"in c){const{locale:u,resource:d}=c;u?(o[u]=o[u]||{},Zt(d,o[u])):Zt(d,o)}else M(c)&&Zt(JSON.parse(c),o)}),l==null&&s)for(const c in o)Wr(o,c)&&gr(o[c]);return o}const _n=e=>!le(e)||se(e);function Zt(e,t){if(_n(e)||_n(t))throw me(fe.INVALID_VALUE);for(const n in e)Wr(e,n)&&(_n(e[n])||_n(t[n])?t[n]=e[n]:Zt(e[n],t[n]))}function di(e){return e.type}function mi(e,t,n){let r=le(t.messages)?t.messages:{};"__i18nGlobal"in n&&(r=xn(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const l=Object.keys(r);l.length&&l.forEach(s=>{e.mergeLocaleMessage(s,r[s])});{if(le(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(o=>{e.mergeDateTimeFormat(o,t.datetimeFormats[o])})}if(le(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(o=>{e.mergeNumberFormat(o,t.numberFormats[o])})}}}function js(e){return we(Rn,null,e,0)}const Vs="__INTLIFY_META__";let Bs=0;function Ks(e){return(t,n,r,l)=>e(n,r,Ht()||void 0,l)}const su=()=>{const e=Ht();let t=null;return e&&(t=di(e)[Vs])?{[Vs]:t}:null};function Br(e={},t){const{__root:n}=e,r=n===void 0;let l=Y(e.inheritLocale)?e.inheritLocale:!0;const s=ze(n&&l?n.locale.value:M(e.locale)?e.locale:an),o=ze(n&&l?n.fallbackLocale.value:M(e.fallbackLocale)||se(e.fallbackLocale)||H(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s.value),c=ze(xn(s.value,e)),u=ze(H(e.datetimeFormats)?e.datetimeFormats:{[s.value]:{}}),d=ze(H(e.numberFormats)?e.numberFormats:{[s.value]:{}});let g=n?n.missingWarn:Y(e.missingWarn)||pt(e.missingWarn)?e.missingWarn:!0,b=n?n.fallbackWarn:Y(e.fallbackWarn)||pt(e.fallbackWarn)?e.fallbackWarn:!0,p=n?n.fallbackRoot:Y(e.fallbackRoot)?e.fallbackRoot:!0,N=!!e.fallbackFormat,P=ue(e.missing)?e.missing:null,A=ue(e.missing)?Ks(e.missing):null,O=ue(e.postTranslation)?e.postTranslation:null,_=n?n.warnHtmlMessage:Y(e.warnHtmlMessage)?e.warnHtmlMessage:!0,v=!!e.escapeParameter;const F=n?n.modifiers:H(e.modifiers)?e.modifiers:{};let T=e.pluralRules||n&&n.pluralRules,I;I=(()=>{r&&Ms(null);const m={version:nu,locale:s.value,fallbackLocale:o.value,messages:c.value,modifiers:F,pluralRules:T,missing:A===null?void 0:A,missingWarn:g,fallbackWarn:b,fallbackFormat:N,unresolving:!0,postTranslation:O===null?void 0:O,warnHtmlMessage:_,escapeParameter:v,messageResolver:e.messageResolver,__meta:{framework:"vue"}};m.datetimeFormats=u.value,m.numberFormats=d.value,m.__datetimeFormatters=H(I)?I.__datetimeFormatters:void 0,m.__numberFormatters=H(I)?I.__numberFormatters:void 0;const L=Jc(m);return r&&Ms(L),L})(),Gt(I,s.value,o.value);function x(){return[s.value,o.value,c.value,u.value,d.value]}const U=je({get:()=>s.value,set:m=>{s.value=m,I.locale=s.value}}),$=je({get:()=>o.value,set:m=>{o.value=m,I.fallbackLocale=o.value,Gt(I,s.value,m)}}),K=je(()=>c.value),ee=je(()=>u.value),oe=je(()=>d.value);function ce(){return ue(O)?O:null}function xe(m){O=m,I.postTranslation=m}function nt(){return P}function ie(m){m!==null&&(A=Ks(m)),P=m,I.missing=A}const X=(m,L,w,D,W,V)=>{x();let G;if(__INTLIFY_PROD_DEVTOOLS__)try{Rs(su()),r||(I.fallbackContext=n?Gc():void 0),G=m(I)}finally{Rs(null),r||(I.fallbackContext=void 0)}else G=m(I);if(de(G)&&G===Dn){const[te,ne]=L();return n&&p?D(n):W(te)}else{if(V(G))return G;throw me(fe.UNEXPECTED_RETURN_TYPE)}};function Q(...m){return X(L=>Reflect.apply(xs,null,[L,...m]),()=>cr(...m),"translate",L=>Reflect.apply(L.t,L,[...m]),L=>L,L=>M(L))}function be(...m){const[L,w,D]=m;if(D&&!le(D))throw me(fe.INVALID_ARGUMENT);return Q(L,w,_e({resolvedMessage:!0},D||{}))}function rt(...m){return X(L=>Reflect.apply(Us,null,[L,...m]),()=>ur(...m),"datetime format",L=>Reflect.apply(L.d,L,[...m]),()=>ks,L=>M(L))}function Ue(...m){return X(L=>Reflect.apply(Ws,null,[L,...m]),()=>fr(...m),"number format",L=>Reflect.apply(L.n,L,[...m]),()=>ks,L=>M(L))}function Pe(m){return m.map(L=>M(L)||de(L)||Y(L)?js(String(L)):L)}const st={normalize:Pe,interpolate:m=>m,type:"vnode"};function Lt(...m){return X(L=>{let w;const D=L;try{D.processor=st,w=Reflect.apply(xs,null,[D,...m])}finally{D.processor=null}return w},()=>cr(...m),"translate",L=>L[dr](...m),L=>[js(L)],L=>se(L))}function Tt(...m){return X(L=>Reflect.apply(Ws,null,[L,...m]),()=>fr(...m),"number format",L=>L[_r](...m),()=>[],L=>M(L)||se(L))}function Te(...m){return X(L=>Reflect.apply(Us,null,[L,...m]),()=>ur(...m),"datetime format",L=>L[mr](...m),()=>[],L=>M(L)||se(L))}function Re(m){T=m,I.pluralRules=T}function Ke(m,L){const w=M(L)?L:s.value,D=Ye(w);return I.messageResolver(D,m)!==null}function Ie(m){let L=null;const w=Zl(I,o.value,s.value);for(let D=0;D<w.length;D++){const W=c.value[w[D]]||{},V=I.messageResolver(W,m);if(V!=null){L=V;break}}return L}function $e(m){const L=Ie(m);return L!=null?L:n?n.tm(m)||{}:{}}function Ye(m){return c.value[m]||{}}function a(m,L){c.value[m]=L,I.messages=c.value}function i(m,L){c.value[m]=c.value[m]||{},Zt(L,c.value[m]),I.messages=c.value}function f(m){return u.value[m]||{}}function h(m,L){u.value[m]=L,I.datetimeFormats=u.value,$s(I,m,L)}function E(m,L){u.value[m]=_e(u.value[m]||{},L),I.datetimeFormats=u.value,$s(I,m,L)}function y(m){return d.value[m]||{}}function R(m,L){d.value[m]=L,I.numberFormats=d.value,Hs(I,m,L)}function k(m,L){d.value[m]=_e(d.value[m]||{},L),I.numberFormats=d.value,Hs(I,m,L)}Bs++,n&&ar&&(Ut(n.locale,m=>{l&&(s.value=m,I.locale=m,Gt(I,s.value,o.value))}),Ut(n.fallbackLocale,m=>{l&&(o.value=m,I.fallbackLocale=m,Gt(I,s.value,o.value))}));const C={id:Bs,locale:U,fallbackLocale:$,get inheritLocale(){return l},set inheritLocale(m){l=m,m&&n&&(s.value=n.locale.value,o.value=n.fallbackLocale.value,Gt(I,s.value,o.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:K,get modifiers(){return F},get pluralRules(){return T||{}},get isGlobal(){return r},get missingWarn(){return g},set missingWarn(m){g=m,I.missingWarn=g},get fallbackWarn(){return b},set fallbackWarn(m){b=m,I.fallbackWarn=b},get fallbackRoot(){return p},set fallbackRoot(m){p=m},get fallbackFormat(){return N},set fallbackFormat(m){N=m,I.fallbackFormat=N},get warnHtmlMessage(){return _},set warnHtmlMessage(m){_=m,I.warnHtmlMessage=m},get escapeParameter(){return v},set escapeParameter(m){v=m,I.escapeParameter=m},t:Q,getLocaleMessage:Ye,setLocaleMessage:a,mergeLocaleMessage:i,getPostTranslationHandler:ce,setPostTranslationHandler:xe,getMissingHandler:nt,setMissingHandler:ie,[ui]:Re};return C.datetimeFormats=ee,C.numberFormats=oe,C.rt=be,C.te=Ke,C.tm=$e,C.d=rt,C.n=Ue,C.getDateTimeFormat=f,C.setDateTimeFormat=h,C.mergeDateTimeFormat=E,C.getNumberFormat=y,C.setNumberFormat=R,C.mergeNumberFormat=k,C[fi]=e.__injectWithOption,C[dr]=Lt,C[mr]=Te,C[_r]=Tt,C}function lu(e){const t=M(e.locale)?e.locale:an,n=M(e.fallbackLocale)||se(e.fallbackLocale)||H(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,r=ue(e.missing)?e.missing:void 0,l=Y(e.silentTranslationWarn)||pt(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,s=Y(e.silentFallbackWarn)||pt(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,o=Y(e.fallbackRoot)?e.fallbackRoot:!0,c=!!e.formatFallbackMessages,u=H(e.modifiers)?e.modifiers:{},d=e.pluralizationRules,g=ue(e.postTranslation)?e.postTranslation:void 0,b=M(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,p=!!e.escapeParameterHtml,N=Y(e.sync)?e.sync:!0;let P=e.messages;if(H(e.sharedMessages)){const I=e.sharedMessages;P=Object.keys(I).reduce((x,U)=>{const $=x[U]||(x[U]={});return _e($,I[U]),x},P||{})}const{__i18n:A,__root:O,__injectWithOption:_}=e,v=e.datetimeFormats,F=e.numberFormats,T=e.flatJson;return{locale:t,fallbackLocale:n,messages:P,flatJson:T,datetimeFormats:v,numberFormats:F,missing:r,missingWarn:l,fallbackWarn:s,fallbackRoot:o,fallbackFormat:c,modifiers:u,pluralRules:d,postTranslation:g,warnHtmlMessage:b,escapeParameter:p,messageResolver:e.messageResolver,inheritLocale:N,__i18n:A,__root:O,__injectWithOption:_}}function hr(e={},t){{const n=Br(lu(e)),r={id:n.id,get locale(){return n.locale.value},set locale(l){n.locale.value=l},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(l){n.fallbackLocale.value=l},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(l){},get missing(){return n.getMissingHandler()},set missing(l){n.setMissingHandler(l)},get silentTranslationWarn(){return Y(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(l){n.missingWarn=Y(l)?!l:l},get silentFallbackWarn(){return Y(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(l){n.fallbackWarn=Y(l)?!l:l},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(l){n.fallbackFormat=l},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(l){n.setPostTranslationHandler(l)},get sync(){return n.inheritLocale},set sync(l){n.inheritLocale=l},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(l){n.warnHtmlMessage=l!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(l){n.escapeParameter=l},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(l){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...l){const[s,o,c]=l,u={};let d=null,g=null;if(!M(s))throw me(fe.INVALID_ARGUMENT);const b=s;return M(o)?u.locale=o:se(o)?d=o:H(o)&&(g=o),se(c)?d=c:H(c)&&(g=c),Reflect.apply(n.t,n,[b,d||g||{},u])},rt(...l){return Reflect.apply(n.rt,n,[...l])},tc(...l){const[s,o,c]=l,u={plural:1};let d=null,g=null;if(!M(s))throw me(fe.INVALID_ARGUMENT);const b=s;return M(o)?u.locale=o:de(o)?u.plural=o:se(o)?d=o:H(o)&&(g=o),M(c)?u.locale=c:se(c)?d=c:H(c)&&(g=c),Reflect.apply(n.t,n,[b,d||g||{},u])},te(l,s){return n.te(l,s)},tm(l){return n.tm(l)},getLocaleMessage(l){return n.getLocaleMessage(l)},setLocaleMessage(l,s){n.setLocaleMessage(l,s)},mergeLocaleMessage(l,s){n.mergeLocaleMessage(l,s)},d(...l){return Reflect.apply(n.d,n,[...l])},getDateTimeFormat(l){return n.getDateTimeFormat(l)},setDateTimeFormat(l,s){n.setDateTimeFormat(l,s)},mergeDateTimeFormat(l,s){n.mergeDateTimeFormat(l,s)},n(...l){return Reflect.apply(n.n,n,[...l])},getNumberFormat(l){return n.getNumberFormat(l)},setNumberFormat(l,s){n.setNumberFormat(l,s)},mergeNumberFormat(l,s){n.mergeNumberFormat(l,s)},getChoiceIndex(l,s){return-1},__onComponentInstanceCreated(l){const{componentInstanceCreatedListener:s}=e;s&&s(l,r)}};return r}}const Kr={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function iu({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((r,l)=>r=[...r,...se(l.children)?l.children:[l]],[]):t.reduce((n,r)=>{const l=e[r];return l&&(n[r]=l()),n},{})}function _i(e){return Se}const Ys={name:"i18n-t",props:_e({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>de(e)||!isNaN(e)}},Kr),setup(e,t){const{slots:n,attrs:r}=t,l=e.i18n||on({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(b=>b!=="_"),o={};e.locale&&(o.locale=e.locale),e.plural!==void 0&&(o.plural=M(e.plural)?+e.plural:e.plural);const c=iu(t,s),u=l[dr](e.keypath,c,o),d=_e({},r),g=M(e.tag)||le(e.tag)?e.tag:_i();return Gl(g,d,u)}}};function au(e){return se(e)&&!M(e[0])}function gi(e,t,n,r){const{slots:l,attrs:s}=t;return()=>{const o={part:!0};let c={};e.locale&&(o.locale=e.locale),M(e.format)?o.key=e.format:le(e.format)&&(M(e.format.key)&&(o.key=e.format.key),c=Object.keys(e.format).reduce((p,N)=>n.includes(N)?_e({},p,{[N]:e.format[N]}):p,{}));const u=r(e.value,o,c);let d=[o.key];se(u)?d=u.map((p,N)=>{const P=l[p.type],A=P?P({[p.type]:p.value,index:N,parts:u}):[p.value];return au(A)&&(A[0].key=`${p.type}-${N}`),A}):M(u)&&(d=[u]);const g=_e({},s),b=M(e.tag)||le(e.tag)?e.tag:_i();return Gl(b,g,d)}}const Xs={name:"i18n-n",props:_e({value:{type:Number,required:!0},format:{type:[String,Object]}},Kr),setup(e,t){const n=e.i18n||on({useScope:"parent",__useComponent:!0});return gi(e,t,oi,(...r)=>n[_r](...r))}},Gs={name:"i18n-d",props:_e({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Kr),setup(e,t){const n=e.i18n||on({useScope:"parent",__useComponent:!0});return gi(e,t,ai,(...r)=>n[mr](...r))}};function ou(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return r!=null?r.__composer:e.global.__composer}}function cu(e){const t=o=>{const{instance:c,modifiers:u,value:d}=o;if(!c||!c.$)throw me(fe.UNEXPECTED_ERROR);const g=ou(e,c.$),b=Js(d);return[Reflect.apply(g.t,g,[...qs(b)]),g]};return{created:(o,c)=>{const[u,d]=t(c);ar&&e.global===d&&(o.__i18nWatcher=Ut(d.locale,()=>{c.instance&&c.instance.$forceUpdate()})),o.__composer=d,o.textContent=u},unmounted:o=>{ar&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:c})=>{if(o.__composer){const u=o.__composer,d=Js(c);o.textContent=Reflect.apply(u.t,u,[...qs(d)])}},getSSRProps:o=>{const[c]=t(o);return{textContent:c}}}}function Js(e){if(M(e))return{path:e};if(H(e)){if(!("path"in e))throw me(fe.REQUIRED_VALUE,"path");return e}else throw me(fe.INVALID_VALUE)}function qs(e){const{path:t,locale:n,args:r,choice:l,plural:s}=e,o={},c=r||{};return M(n)&&(o.locale=n),de(l)&&(o.plural=l),de(s)&&(o.plural=s),[t,c,o]}function uu(e,t,...n){const r=H(n[0])?n[0]:{},l=!!r.useI18nComponentName;(Y(r.globalInstall)?r.globalInstall:!0)&&(e.component(l?"i18n":Ys.name,Ys),e.component(Xs.name,Xs),e.component(Gs.name,Gs)),e.directive("t",cu(t))}function fu(e,t,n){return{beforeCreate(){const r=Ht();if(!r)throw me(fe.UNEXPECTED_ERROR);const l=this.$options;if(l.i18n){const s=l.i18n;l.__i18n&&(s.__i18n=l.__i18n),s.__root=t,this===this.$root?this.$i18n=Qs(e,s):(s.__injectWithOption=!0,this.$i18n=hr(s))}else l.__i18n?this===this.$root?this.$i18n=Qs(e,l):this.$i18n=hr({__i18n:l.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;l.__i18nGlobal&&mi(t,l,l),e.__onComponentInstanceCreated(this.$i18n),n.__setInstance(r,this.$i18n),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s)},mounted(){},unmounted(){const r=Ht();if(!r)throw me(fe.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,n.__deleteInstance(r),delete this.$i18n}}}function Qs(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[ui](t.pluralizationRules||e.pluralizationRules);const n=xn(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach(r=>e.mergeLocaleMessage(r,n[r])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(r=>e.mergeDateTimeFormat(r,t.datetimeFormats[r])),t.numberFormats&&Object.keys(t.numberFormats).forEach(r=>e.mergeNumberFormat(r,t.numberFormats[r])),e}const du=bt("global-vue-i18n");function mu(e={},t){const n=__VUE_I18N_LEGACY_API__&&Y(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,r=Y(e.globalInjection)?e.globalInjection:!0,l=__VUE_I18N_LEGACY_API__&&n?!!e.allowComposition:!0,s=new Map,[o,c]=_u(e,n),u=bt("");function d(p){return s.get(p)||null}function g(p,N){s.set(p,N)}function b(p){s.delete(p)}{const p={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return l},async install(N,...P){N.__VUE_I18N_SYMBOL__=u,N.provide(N.__VUE_I18N_SYMBOL__,p),!n&&r&&yu(N,p.global),__VUE_I18N_FULL_INSTALL__&&uu(N,p,...P),__VUE_I18N_LEGACY_API__&&n&&N.mixin(fu(c,c.__composer,p));const A=N.unmount;N.unmount=()=>{p.dispose(),A()}},get global(){return c},dispose(){o.stop()},__instances:s,__getInstance:d,__setInstance:g,__deleteInstance:b};return p}}function on(e={}){const t=Ht();if(t==null)throw me(fe.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw me(fe.NOT_INSLALLED);const n=gu(t),r=pu(n),l=di(t),s=hu(e,l);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!e.__useComponent){if(!n.allowComposition)throw me(fe.NOT_AVAILABLE_IN_LEGACY_MODE);return Lu(t,s,r,e)}if(s==="global")return mi(r,e,l),r;if(s==="parent"){let u=bu(n,t,e.__useComponent);return u==null&&(u=r),u}const o=n;let c=o.__getInstance(t);if(c==null){const u=_e({},e);"__i18n"in l&&(u.__i18n=l.__i18n),r&&(u.__root=r),c=Br(u),Eu(o,t),o.__setInstance(t,c)}return c}function _u(e,t,n){const r=Fi();{const l=__VUE_I18N_LEGACY_API__&&t?r.run(()=>hr(e)):r.run(()=>Br(e));if(l==null)throw me(fe.UNEXPECTED_ERROR);return[r,l]}}function gu(e){{const t=hn(e.isCE?du:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw me(e.isCE?fe.NOT_INSLALLED_WITH_PROVIDE:fe.UNEXPECTED_ERROR);return t}}function hu(e,t){return Sn(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function pu(e){return e.mode==="composition"?e.global:e.global.__composer}function bu(e,t,n=!1){let r=null;const l=t.root;let s=t.parent;for(;s!=null;){const o=e;if(e.mode==="composition")r=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const c=o.__getInstance(s);c!=null&&(r=c.__composer,n&&r&&!r[fi]&&(r=null))}if(r!=null||l===s)break;s=s.parent}return r}function Eu(e,t,n){Sr(()=>{},t),wr(()=>{e.__deleteInstance(t)},t)}function Lu(e,t,n,r={}){const l=t==="local",s=ra(null);if(l&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw me(fe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=Y(r.inheritLocale)?r.inheritLocale:!0,c=ze(l&&o?n.locale.value:M(r.locale)?r.locale:an),u=ze(l&&o?n.fallbackLocale.value:M(r.fallbackLocale)||se(r.fallbackLocale)||H(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:c.value),d=ze(xn(c.value,r)),g=ze(H(r.datetimeFormats)?r.datetimeFormats:{[c.value]:{}}),b=ze(H(r.numberFormats)?r.numberFormats:{[c.value]:{}}),p=l?n.missingWarn:Y(r.missingWarn)||pt(r.missingWarn)?r.missingWarn:!0,N=l?n.fallbackWarn:Y(r.fallbackWarn)||pt(r.fallbackWarn)?r.fallbackWarn:!0,P=l?n.fallbackRoot:Y(r.fallbackRoot)?r.fallbackRoot:!0,A=!!r.fallbackFormat,O=ue(r.missing)?r.missing:null,_=ue(r.postTranslation)?r.postTranslation:null,v=l?n.warnHtmlMessage:Y(r.warnHtmlMessage)?r.warnHtmlMessage:!0,F=!!r.escapeParameter,T=l?n.modifiers:H(r.modifiers)?r.modifiers:{},I=r.pluralRules||l&&n.pluralRules;function S(){return[c.value,u.value,d.value,g.value,b.value]}const x=je({get:()=>s.value?s.value.locale.value:c.value,set:i=>{s.value&&(s.value.locale.value=i),c.value=i}}),U=je({get:()=>s.value?s.value.fallbackLocale.value:u.value,set:i=>{s.value&&(s.value.fallbackLocale.value=i),u.value=i}}),$=je(()=>s.value?s.value.messages.value:d.value),K=je(()=>g.value),ee=je(()=>b.value);function oe(){return s.value?s.value.getPostTranslationHandler():_}function ce(i){s.value&&s.value.setPostTranslationHandler(i)}function xe(){return s.value?s.value.getMissingHandler():O}function nt(i){s.value&&s.value.setMissingHandler(i)}function ie(i){return S(),i()}function X(...i){return s.value?ie(()=>Reflect.apply(s.value.t,null,[...i])):ie(()=>"")}function Q(...i){return s.value?Reflect.apply(s.value.rt,null,[...i]):""}function be(...i){return s.value?ie(()=>Reflect.apply(s.value.d,null,[...i])):ie(()=>"")}function rt(...i){return s.value?ie(()=>Reflect.apply(s.value.n,null,[...i])):ie(()=>"")}function Ue(i){return s.value?s.value.tm(i):{}}function Pe(i,f){return s.value?s.value.te(i,f):!1}function Ae(i){return s.value?s.value.getLocaleMessage(i):{}}function st(i,f){s.value&&(s.value.setLocaleMessage(i,f),d.value[i]=f)}function Lt(i,f){s.value&&s.value.mergeLocaleMessage(i,f)}function Tt(i){return s.value?s.value.getDateTimeFormat(i):{}}function Te(i,f){s.value&&(s.value.setDateTimeFormat(i,f),g.value[i]=f)}function Re(i,f){s.value&&s.value.mergeDateTimeFormat(i,f)}function Ke(i){return s.value?s.value.getNumberFormat(i):{}}function Ie(i,f){s.value&&(s.value.setNumberFormat(i,f),b.value[i]=f)}function $e(i,f){s.value&&s.value.mergeNumberFormat(i,f)}const Ye={get id(){return s.value?s.value.id:-1},locale:x,fallbackLocale:U,messages:$,datetimeFormats:K,numberFormats:ee,get inheritLocale(){return s.value?s.value.inheritLocale:o},set inheritLocale(i){s.value&&(s.value.inheritLocale=i)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(d.value)},get modifiers(){return s.value?s.value.modifiers:T},get pluralRules(){return s.value?s.value.pluralRules:I},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:p},set missingWarn(i){s.value&&(s.value.missingWarn=i)},get fallbackWarn(){return s.value?s.value.fallbackWarn:N},set fallbackWarn(i){s.value&&(s.value.missingWarn=i)},get fallbackRoot(){return s.value?s.value.fallbackRoot:P},set fallbackRoot(i){s.value&&(s.value.fallbackRoot=i)},get fallbackFormat(){return s.value?s.value.fallbackFormat:A},set fallbackFormat(i){s.value&&(s.value.fallbackFormat=i)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:v},set warnHtmlMessage(i){s.value&&(s.value.warnHtmlMessage=i)},get escapeParameter(){return s.value?s.value.escapeParameter:F},set escapeParameter(i){s.value&&(s.value.escapeParameter=i)},t:X,getPostTranslationHandler:oe,setPostTranslationHandler:ce,getMissingHandler:xe,setMissingHandler:nt,rt:Q,d:be,n:rt,tm:Ue,te:Pe,getLocaleMessage:Ae,setLocaleMessage:st,mergeLocaleMessage:Lt,getDateTimeFormat:Tt,setDateTimeFormat:Te,mergeDateTimeFormat:Re,getNumberFormat:Ke,setNumberFormat:Ie,mergeNumberFormat:$e};function a(i){i.locale.value=c.value,i.fallbackLocale.value=u.value,Object.keys(d.value).forEach(f=>{i.mergeLocaleMessage(f,d.value[f])}),Object.keys(g.value).forEach(f=>{i.mergeDateTimeFormat(f,g.value[f])}),Object.keys(b.value).forEach(f=>{i.mergeNumberFormat(f,b.value[f])}),i.escapeParameter=F,i.fallbackFormat=A,i.fallbackRoot=P,i.fallbackWarn=N,i.missingWarn=p,i.warnHtmlMessage=v}return wl(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw me(fe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const i=s.value=e.proxy.$i18n.__composer;t==="global"?(c.value=i.locale.value,u.value=i.fallbackLocale.value,d.value=i.messages.value,g.value=i.datetimeFormats.value,b.value=i.numberFormats.value):l&&a(i)}),Ye}const Tu=["locale","fallbackLocale","availableLocales"],Iu=["t","rt","d","n","tm"];function yu(e,t){const n=Object.create(null);Tu.forEach(r=>{const l=Object.getOwnPropertyDescriptor(t,r);if(!l)throw me(fe.UNEXPECTED_ERROR);const s=he(l.value)?{get(){return l.value.value},set(o){l.value.value=o}}:{get(){return l.get&&l.get()}};Object.defineProperty(n,r,s)}),e.config.globalProperties.$i18n=n,Iu.forEach(r=>{const l=Object.getOwnPropertyDescriptor(t,r);if(!l||!l.value)throw me(fe.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${r}`,l)})}Bc(Qc);Kc(vc);Yc(Zl);ru();if(__INTLIFY_PROD_DEVTOOLS__){const e=Qt();e.__INTLIFY__=!0,Sc(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const Nu={class:"page__header"},vu=J("a",{href:"/",class:"flex"},[J("img",{src:jo,width:"130",height:"113",class:"w-20 md:w-40 xl:w-auto h-20 md:h-40 xl:h-auto",alt:"\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u0434\u0435\u043B"})],-1),Cu={class:"page__title text-lg lg:text-xl"},Ou={class:"flex flex-col items-end"},Au=J("img",{src:Vo,width:"300",height:"91",class:"hidden md:flex",alt:"\u0424\u043B\u0430\u0433 \u0420\u0424"},null,-1),Fu={class:"langs flex mt-4 rounded"},ku={class:"page__content text-md"},Pu=J("a",{href:"mailto:78@otdel-k.spb.ru"},"78@otdel-k.spb.ru",-1),Ru=J("a",{href:"mvd.ru",target:"_blank"},"mvd.ru",-1),Mu={__name:"App",setup(e){const{t,locale:n}=on({useScope:"global"}),r=l=>{event.target.innerText===l&&(n.value=l,localStorage.setItem("lang",n.value))};return(l,s)=>(to(),so(Se,null,[J("header",Nu,[vu,J("h1",Cu,ve(l.$t("title")),1),J("div",Ou,[Au,J("div",Fu,[J("button",{type:"button",onClick:s[0]||(s[0]=o=>r("rus")),class:"langs__button button"}," rus "),J("button",{type:"button",onClick:s[1]||(s[1]=o=>r("eng")),class:"langs__button button"}," eng ")])])]),J("main",ku,[J("p",null,ve(l.$t("content.p-1")),1),J("ul",null,[J("li",null,[J("span",null,ve(l.$t("content.li-1")),1),J("ul",null,[J("li",null,ve(l.$t("content.li-1-1")),1),J("li",null,ve(l.$t("content.li-1-2")),1),J("li",null,ve(l.$t("content.li-1-3")),1),J("li",null,ve(l.$t("content.li-1-4")),1)])]),J("li",null,[J("span",null,ve(l.$t("content.li-2")),1),J("ul",null,[J("li",null,ve(l.$t("content.li-2-1")),1),J("li",null,ve(l.$t("content.li-2-2")),1)])]),J("li",null,[J("span",null,ve(l.$t("content.li-3")),1)]),J("li",null,[J("span",null,ve(l.$t("content.li-4")),1)])]),J("p",null,[sr(ve(l.$t("content.p-2"))+" ",1),Pu]),J("p",null,[sr(ve(l.$t("content.p-3"))+" ",1),Ru])])],64))}},Su="\u041E\u0442\u0434\u0435\u043B \u041A \u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u0434\u0435\u043B \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u043E \u0433. \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0443 \u0438 \u041B\u0435\u043D\u0438\u043D\u0433\u0440\u0430\u0434\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",wu={"p-1":"\u041E\u0442\u0434\u0435\u043B \xAB\u041A\xBB \u041C\u0412\u0414 \u0420\u043E\u0441\u0441\u0438\u0438 \u043F\u043E \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0443 \u0438 \u041B\u041E \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0441\u0432\u043E\u0435\u0439 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0438 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u0435, \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435, \u043F\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u0438\u0435","li-1":"1. \u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438:","li-1-1":"- \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0439 \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438;","li-1-2":"- \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0432\u0440\u0435\u0434\u043E\u043D\u043E\u0441\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C;","li-1-3":"- \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043B\u0438\u0431\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439;","li-1-4":"- \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432 \u0441\u0444\u0435\u0440\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.","li-2":"2. \u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439, \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u043C\u044B\u0445 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439 (\u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0441\u0435\u0442\u044C \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442) \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0442\u0438\u0432 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F \u043D\u0435\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043B\u0435\u0442\u043D\u0438\u0445 \u0438 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043D\u0440\u0430\u0432\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438:","li-2-1":"- \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432 \u0441 \u043F\u043E\u0440\u043D\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u043D\u0435\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043B\u0435\u0442\u043D\u0438\u0445;","li-2-2":"- \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0435\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043B\u0435\u0442\u043D\u0435\u0433\u043E \u0432 \u0446\u0435\u043B\u044F\u0445 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u043D\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432.","li-3":"3. \u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u043C \u043E\u0431\u043E\u0440\u043E\u0442\u043E\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043D\u0435\u0433\u043B\u0430\u0441\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.","li-4":"4. \u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0438\u043B\u0438 \u0441\u043C\u0435\u0436\u043D\u044B\u0445 \u043F\u0440\u0430\u0432.","p-2":"\u041F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u0432 \u043D\u0430\u0448 \u0430\u0434\u0440\u0435\u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u043E \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0432 \u0435\u0435 \u043D\u0430 \u044D\u043B. \u043F\u043E\u0447\u0442\u0443","p-3":"\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u043C\u0435\u044E\u0449\u0438\u0445\u0441\u044F \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0433\u043E\u0442\u043E\u0432\u044F\u0449\u0438\u0445\u0441\u044F \u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043E\u0442\u0434\u0435\u043B \u043F\u043E\u043B\u0438\u0446\u0438\u0438 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435"},Du={title:Su,content:wu},xu="Department K of the Ministry of Internal Affairs of the Russian Federation for St. Petersburg and the Leningrad Region",Uu={"p-1":"Department 'K' of the Ministry of Internal Affairs of Russia for St. Petersburg and the Leningrad Region, within its competence, detection, prevention, suppression and detection","li-1":"1. crimes in the field of computer information:","li-1-1":"- illegal access to legally protected computer information;","li-1-2":"- creation, use and distribution of malicious computer programs;","li-1-3":"- violation of the rules for the operation of means of storage, processing or transmission of computer information or information and telecommunication networks;","li-1-4":"- computer information fraud.","li-2":"2. crimes committed using information and telecommunication networks (including the Internet) and directed against the health of minors and public morality:","li-2-1":"- production and distribution of materials or objects with pornographic images of minors;","li-2-2":"- use of a minor for the purpose of making pornographic materials or items.","li-3":"3. crimes related to the illegal circulation of special technical means designed to secretly obtain information.","li-4":"4. crimes related to the illegal use of objects of copyright or related rights.","p-2":"You can send information anonymously to us by sending it to e-mail","p-3":"If there is information about committed or upcoming crimes, you must contact the nearest police department or write a corresponding statement on the website"},$u={title:xu,content:Uu},Wu="rus",Hu={rus:Du,eng:$u},ju=localStorage.getItem("lang"),Vu=Object.assign(Hu),Bu=mu({legacy:!1,locale:ju||Wu,fallbackLocale:"rus",messages:Vu});Wo(Mu,{setup(){const{t:e}=on();return{t:e}}}).use(Bu).mount("#app");