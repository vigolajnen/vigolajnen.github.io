(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver(r => {
        for (const i of r)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }).observe(document, { childList: !0, subtree: !0 });

    function n(r) { const i = {}; return r.integrity && (i.integrity = r.integrity), r.referrerpolicy && (i.referrerPolicy = r.referrerpolicy), r.crossorigin === "use-credentials" ? i.credentials = "include" : r.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i }

    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const i = n(r);
        fetch(r.href, i)
    }
})();

function hi(e, t) {
    const n = Object.create(null),
        s = e.split(",");
    for (let r = 0; r < s.length; r++) n[s[r]] = !0;
    return t ? r => !!n[r.toLowerCase()] : r => !!n[r]
}
const du = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    hu = hi(du);

function Xa(e) { return !!e || e === "" }

function _i(e) {
    if (Y(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n],
                r = Oe(s) ? mu(s) : _i(s);
            if (r)
                for (const i in r) t[i] = r[i]
        }
        return t
    } else { if (Oe(e)) return e; if (de(e)) return e }
}
const _u = /;(?![^(]*\))/g,
    pu = /:(.+)/;

function mu(e) {
    const t = {};
    return e.split(_u).forEach(n => {
        if (n) {
            const s = n.split(pu);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }), t
}

function pi(e) {
    let t = "";
    if (Oe(e)) t = e;
    else if (Y(e))
        for (let n = 0; n < e.length; n++) {
            const s = pi(e[n]);
            s && (t += s + " ")
        } else if (de(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}
const Ve = e => Oe(e) ? e : e == null ? "" : Y(e) || de(e) && (e.toString === Ja || !z(e.toString)) ? JSON.stringify(e, qa, 2) : String(e),
    qa = (e, t) => t && t.__v_isRef ? qa(e, t.value) : yn(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
    } : za(t) ? {
        [`Set(${t.size})`]: [...t.values()]
    } : de(t) && !Y(t) && !Za(t) ? String(t) : t,
    le = {},
    Tn = [],
    at = () => {},
    gu = () => !1,
    Eu = /^on[^a-z]/,
    Ks = e => Eu.test(e),
    mi = e => e.startsWith("onUpdate:"),
    De = Object.assign,
    gi = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    bu = Object.prototype.hasOwnProperty,
    se = (e, t) => bu.call(e, t),
    Y = Array.isArray,
    yn = e => Ys(e) === "[object Map]",
    za = e => Ys(e) === "[object Set]",
    z = e => typeof e == "function",
    Oe = e => typeof e == "string",
    Ei = e => typeof e == "symbol",
    de = e => e !== null && typeof e == "object",
    Qa = e => de(e) && z(e.then) && z(e.catch),
    Ja = Object.prototype.toString,
    Ys = e => Ja.call(e),
    vu = e => Ys(e).slice(8, -1),
    Za = e => Ys(e) === "[object Object]",
    bi = e => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Ss = hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Gs = e => { const t = Object.create(null); return n => t[n] || (t[n] = e(n)) },
    Tu = /-(\w)/g,
    On = Gs(e => e.replace(Tu, (t, n) => n ? n.toUpperCase() : "")),
    yu = /\B([A-Z])/g,
    Wn = Gs(e => e.replace(yu, "-$1").toLowerCase()),
    el = Gs(e => e.charAt(0).toUpperCase() + e.slice(1)),
    hr = Gs(e => e ? `on${el(e)}` : ""),
    ns = (e, t) => !Object.is(e, t),
    _r = (e, t) => { for (let n = 0; n < e.length; n++) e[n](t) },
    $s = (e, t, n) => { Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n }) },
    Au = e => { const t = parseFloat(e); return isNaN(t) ? e : t };
let co;
const Cu = () => co || (co = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let ht;
class tl {
    constructor(t = !1) { this.active = !0, this.effects = [], this.cleanups = [], !t && ht && (this.parent = ht, this.index = (ht.scopes || (ht.scopes = [])).push(this) - 1) }
    run(t) { if (this.active) { const n = ht; try { return ht = this, t() } finally { ht = n } } }
    on() { ht = this }
    off() { ht = this.parent }
    stop(t) {
        if (this.active) {
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
            for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
            if (this.scopes)
                for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
            if (this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.active = !1
        }
    }
}

function Nu(e) { return new tl(e) }

function Lu(e, t = ht) { t && t.active && t.effects.push(e) }
const vi = e => { const t = new Set(e); return t.w = 0, t.n = 0, t },
    nl = e => (e.w & Vt) > 0,
    sl = e => (e.n & Vt) > 0,
    Ou = ({ deps: e }) => {
        if (e.length)
            for (let t = 0; t < e.length; t++) e[t].w |= Vt
    },
    wu = e => {
        const { deps: t } = e;
        if (t.length) {
            let n = 0;
            for (let s = 0; s < t.length; s++) {
                const r = t[s];
                nl(r) && !sl(r) ? r.delete(e) : t[n++] = r, r.w &= ~Vt, r.n &= ~Vt
            }
            t.length = n
        }
    },
    kr = new WeakMap;
let zn = 0,
    Vt = 1;
const Rr = 30;
let rt;
const sn = Symbol(""),
    Mr = Symbol("");
class Ti {
    constructor(t, n = null, s) { this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Lu(this, s) }
    run() {
        if (!this.active) return this.fn();
        let t = rt,
            n = Ft;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try { return this.parent = rt, rt = this, Ft = !0, Vt = 1 << ++zn, zn <= Rr ? Ou(this) : uo(this), this.fn() } finally { zn <= Rr && wu(this), Vt = 1 << --zn, rt = this.parent, Ft = n, this.parent = void 0, this.deferStop && this.stop() }
    }
    stop() { rt === this ? this.deferStop = !0 : this.active && (uo(this), this.onStop && this.onStop(), this.active = !1) }
}

function uo(e) {
    const { deps: t } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}
let Ft = !0;
const rl = [];

function Vn() { rl.push(Ft), Ft = !1 }

function Hn() {
    const e = rl.pop();
    Ft = e === void 0 ? !0 : e
}

function Ke(e, t, n) {
    if (Ft && rt) {
        let s = kr.get(e);
        s || kr.set(e, s = new Map);
        let r = s.get(n);
        r || s.set(n, r = vi()), il(r)
    }
}

function il(e, t) {
    let n = !1;
    zn <= Rr ? sl(e) || (e.n |= Vt, n = !nl(e)) : n = !e.has(rt), n && (e.add(rt), rt.deps.push(e))
}

function It(e, t, n, s, r, i) {
    const o = kr.get(e);
    if (!o) return;
    let a = [];
    if (t === "clear") a = [...o.values()];
    else if (n === "length" && Y(e)) o.forEach((u, f) => {
        (f === "length" || f >= s) && a.push(u)
    });
    else switch (n !== void 0 && a.push(o.get(n)), t) {
        case "add":
            Y(e) ? bi(n) && a.push(o.get("length")) : (a.push(o.get(sn)), yn(e) && a.push(o.get(Mr)));
            break;
        case "delete":
            Y(e) || (a.push(o.get(sn)), yn(e) && a.push(o.get(Mr)));
            break;
        case "set":
            yn(e) && a.push(o.get(sn));
            break
    }
    if (a.length === 1) a[0] && $r(a[0]);
    else {
        const u = [];
        for (const f of a) f && u.push(...f);
        $r(vi(u))
    }
}

function $r(e, t) { const n = Y(e) ? e : [...e]; for (const s of n) s.computed && fo(s); for (const s of n) s.computed || fo(s) }

function fo(e, t) {
    (e !== rt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const Iu = hi("__proto__,__v_isRef,__isVue"),
    ol = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ei)),
    Su = yi(),
    Du = yi(!1, !0),
    Pu = yi(!0),
    ho = ku();

function ku() { const e = {}; return ["includes", "indexOf", "lastIndexOf"].forEach(t => { e[t] = function(...n) { const s = ie(this); for (let i = 0, o = this.length; i < o; i++) Ke(s, "get", i + ""); const r = s[t](...n); return r === -1 || r === !1 ? s[t](...n.map(ie)) : r } }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => { e[t] = function(...n) { Vn(); const s = ie(this)[t].apply(this, n); return Hn(), s } }), e }

function yi(e = !1, t = !1) { return function(s, r, i) { if (r === "__v_isReactive") return !e; if (r === "__v_isReadonly") return e; if (r === "__v_isShallow") return t; if (r === "__v_raw" && i === (e ? t ? qu : fl : t ? ul : cl).get(s)) return s; const o = Y(s); if (!e && o && se(ho, r)) return Reflect.get(ho, r, i); const a = Reflect.get(s, r, i); return (Ei(r) ? ol.has(r) : Iu(r)) || (e || Ke(s, "get", r), t) ? a : Le(a) ? o && bi(r) ? a : a.value : de(a) ? e ? dl(a) : Ni(a) : a } }
const Ru = al(),
    Mu = al(!0);

function al(e = !1) {
    return function(n, s, r, i) {
        let o = n[s];
        if (wn(o) && Le(o) && !Le(r)) return !1;
        if (!e && (!xs(r) && !wn(r) && (o = ie(o), r = ie(r)), !Y(n) && Le(o) && !Le(r))) return o.value = r, !0;
        const a = Y(n) && bi(s) ? Number(s) < n.length : se(n, s),
            u = Reflect.set(n, s, r, i);
        return n === ie(i) && (a ? ns(r, o) && It(n, "set", s, r) : It(n, "add", s, r)), u
    }
}

function $u(e, t) {
    const n = se(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && n && It(e, "delete", t, void 0), s
}

function xu(e, t) { const n = Reflect.has(e, t); return (!Ei(t) || !ol.has(t)) && Ke(e, "has", t), n }

function Fu(e) { return Ke(e, "iterate", Y(e) ? "length" : sn), Reflect.ownKeys(e) }
const ll = { get: Su, set: Ru, deleteProperty: $u, has: xu, ownKeys: Fu },
    Wu = { get: Pu, set(e, t) { return !0 }, deleteProperty(e, t) { return !0 } },
    Vu = De({}, ll, { get: Du, set: Mu }),
    Ai = e => e,
    Xs = e => Reflect.getPrototypeOf(e);

function gs(e, t, n = !1, s = !1) {
    e = e.__v_raw;
    const r = ie(e),
        i = ie(t);
    n || (t !== i && Ke(r, "get", t), Ke(r, "get", i));
    const { has: o } = Xs(r), a = s ? Ai : n ? Oi : ss;
    if (o.call(r, t)) return a(e.get(t));
    if (o.call(r, i)) return a(e.get(i));
    e !== r && e.get(t)
}

function Es(e, t = !1) {
    const n = this.__v_raw,
        s = ie(n),
        r = ie(e);
    return t || (e !== r && Ke(s, "has", e), Ke(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r)
}

function bs(e, t = !1) { return e = e.__v_raw, !t && Ke(ie(e), "iterate", sn), Reflect.get(e, "size", e) }

function _o(e) { e = ie(e); const t = ie(this); return Xs(t).has.call(t, e) || (t.add(e), It(t, "add", e, e)), this }

function po(e, t) {
    t = ie(t);
    const n = ie(this),
        { has: s, get: r } = Xs(n);
    let i = s.call(n, e);
    i || (e = ie(e), i = s.call(n, e));
    const o = r.call(n, e);
    return n.set(e, t), i ? ns(t, o) && It(n, "set", e, t) : It(n, "add", e, t), this
}

function mo(e) {
    const t = ie(this),
        { has: n, get: s } = Xs(t);
    let r = n.call(t, e);
    r || (e = ie(e), r = n.call(t, e)), s && s.call(t, e);
    const i = t.delete(e);
    return r && It(t, "delete", e, void 0), i
}

function go() {
    const e = ie(this),
        t = e.size !== 0,
        n = e.clear();
    return t && It(e, "clear", void 0, void 0), n
}

function vs(e, t) {
    return function(s, r) {
        const i = this,
            o = i.__v_raw,
            a = ie(o),
            u = t ? Ai : e ? Oi : ss;
        return !e && Ke(a, "iterate", sn), o.forEach((f, d) => s.call(r, u(f), u(d), i))
    }
}

function Ts(e, t, n) {
    return function(...s) {
        const r = this.__v_raw,
            i = ie(r),
            o = yn(i),
            a = e === "entries" || e === Symbol.iterator && o,
            u = e === "keys" && o,
            f = r[e](...s),
            d = n ? Ai : t ? Oi : ss;
        return !t && Ke(i, "iterate", u ? Mr : sn), { next() { const { value: g, done: m } = f.next(); return m ? { value: g, done: m } : { value: a ? [d(g[0]), d(g[1])] : d(g), done: m } }, [Symbol.iterator]() { return this } }
    }
}

function kt(e) { return function(...t) { return e === "delete" ? !1 : this } }

function Hu() {
    const e = {get(i) { return gs(this, i) }, get size() { return bs(this) }, has: Es, add: _o, set: po, delete: mo, clear: go, forEach: vs(!1, !1) },
        t = {get(i) { return gs(this, i, !1, !0) }, get size() { return bs(this) }, has: Es, add: _o, set: po, delete: mo, clear: go, forEach: vs(!1, !0) },
        n = {get(i) { return gs(this, i, !0) }, get size() { return bs(this, !0) }, has(i) { return Es.call(this, i, !0) }, add: kt("add"), set: kt("set"), delete: kt("delete"), clear: kt("clear"), forEach: vs(!0, !1) },
        s = {get(i) { return gs(this, i, !0, !0) }, get size() { return bs(this, !0) }, has(i) { return Es.call(this, i, !0) }, add: kt("add"), set: kt("set"), delete: kt("delete"), clear: kt("clear"), forEach: vs(!0, !0) };
    return ["keys", "values", "entries", Symbol.iterator].forEach(i => { e[i] = Ts(i, !1, !1), n[i] = Ts(i, !0, !1), t[i] = Ts(i, !1, !0), s[i] = Ts(i, !0, !0) }), [e, n, t, s]
}
const [Uu, ju, Bu, Ku] = Hu();

function Ci(e, t) { const n = t ? e ? Ku : Bu : e ? ju : Uu; return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(se(n, r) && r in s ? n : s, r, i) }
const Yu = { get: Ci(!1, !1) },
    Gu = { get: Ci(!1, !0) },
    Xu = { get: Ci(!0, !1) },
    cl = new WeakMap,
    ul = new WeakMap,
    fl = new WeakMap,
    qu = new WeakMap;

function zu(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function Qu(e) { return e.__v_skip || !Object.isExtensible(e) ? 0 : zu(vu(e)) }

function Ni(e) { return wn(e) ? e : Li(e, !1, ll, Yu, cl) }

function Ju(e) { return Li(e, !1, Vu, Gu, ul) }

function dl(e) { return Li(e, !0, Wu, Xu, fl) }

function Li(e, t, n, s, r) { if (!de(e) || e.__v_raw && !(t && e.__v_isReactive)) return e; const i = r.get(e); if (i) return i; const o = Qu(e); if (o === 0) return e; const a = new Proxy(e, o === 2 ? s : n); return r.set(e, a), a }

function An(e) { return wn(e) ? An(e.__v_raw) : !!(e && e.__v_isReactive) }

function wn(e) { return !!(e && e.__v_isReadonly) }

function xs(e) { return !!(e && e.__v_isShallow) }

function hl(e) { return An(e) || wn(e) }

function ie(e) { const t = e && e.__v_raw; return t ? ie(t) : e }

function _l(e) { return $s(e, "__v_skip", !0), e }
const ss = e => de(e) ? Ni(e) : e,
    Oi = e => de(e) ? dl(e) : e;

function pl(e) { Ft && rt && (e = ie(e), il(e.dep || (e.dep = vi()))) }

function ml(e, t) { e = ie(e), e.dep && $r(e.dep) }

function Le(e) { return !!(e && e.__v_isRef === !0) }

function mt(e) { return gl(e, !1) }

function Zu(e) { return gl(e, !0) }

function gl(e, t) { return Le(e) ? e : new ef(e, t) }
class ef {
    constructor(t, n) { this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ie(t), this._value = n ? t : ss(t) }
    get value() { return pl(this), this._value }
    set value(t) {
        const n = this.__v_isShallow || xs(t) || wn(t);
        t = n ? t : ie(t), ns(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ss(t), ml(this))
    }
}

function tf(e) { return Le(e) ? e.value : e }
const nf = { get: (e, t, n) => tf(Reflect.get(e, t, n)), set: (e, t, n, s) => { const r = e[t]; return Le(r) && !Le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s) } };

function El(e) { return An(e) ? e : new Proxy(e, nf) }
var bl;
class sf {
    constructor(t, n, s, r) { this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[bl] = !1, this._dirty = !0, this.effect = new Ti(t, () => { this._dirty || (this._dirty = !0, ml(this)) }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s }
    get value() { const t = ie(this); return pl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value }
    set value(t) { this._setter(t) }
}
bl = "__v_isReadonly";

function rf(e, t, n = !1) { let s, r; const i = z(e); return i ? (s = e, r = at) : (s = e.get, r = e.set), new sf(s, r, i || !r, n) }

function Wt(e, t, n, s) { let r; try { r = s ? e(...s) : e() } catch (i) { qs(i, t, n) } return r }

function Qe(e, t, n, s) { if (z(e)) { const i = Wt(e, t, n, s); return i && Qa(i) && i.catch(o => { qs(o, t, n) }), i } const r = []; for (let i = 0; i < e.length; i++) r.push(Qe(e[i], t, n, s)); return r }

function qs(e, t, n, s = !0) {
    const r = t ? t.vnode : null;
    if (t) {
        let i = t.parent;
        const o = t.proxy,
            a = n;
        for (; i;) {
            const f = i.ec;
            if (f) {
                for (let d = 0; d < f.length; d++)
                    if (f[d](e, o, a) === !1) return
            }
            i = i.parent
        }
        const u = t.appContext.config.errorHandler;
        if (u) { Wt(u, null, 10, [e, o, a]); return }
    }
    of(e, n, r, s)
}

function of(e, t, n, s = !0) { console.error(e) }
let rs = !1,
    xr = !1;
const Se = [];
let gt = 0;
const Cn = [];
let At = null,
    en = 0;
const vl = Promise.resolve();
let wi = null;

function af(e) { const t = wi || vl; return e ? t.then(this ? e.bind(this) : e) : t }

function lf(e) {
    let t = gt + 1,
        n = Se.length;
    for (; t < n;) {
        const s = t + n >>> 1;
        is(Se[s]) < e ? t = s + 1 : n = s
    }
    return t
}

function Ii(e) {
    (!Se.length || !Se.includes(e, rs && e.allowRecurse ? gt + 1 : gt)) && (e.id == null ? Se.push(e) : Se.splice(lf(e.id), 0, e), Tl())
}

function Tl() {!rs && !xr && (xr = !0, wi = vl.then(Al)) }

function cf(e) {
    const t = Se.indexOf(e);
    t > gt && Se.splice(t, 1)
}

function uf(e) { Y(e) ? Cn.push(...e) : (!At || !At.includes(e, e.allowRecurse ? en + 1 : en)) && Cn.push(e), Tl() }

function Eo(e, t = rs ? gt + 1 : 0) {
    for (; t < Se.length; t++) {
        const n = Se[t];
        n && n.pre && (Se.splice(t, 1), t--, n())
    }
}

function yl(e) {
    if (Cn.length) {
        const t = [...new Set(Cn)];
        if (Cn.length = 0, At) { At.push(...t); return }
        for (At = t, At.sort((n, s) => is(n) - is(s)), en = 0; en < At.length; en++) At[en]();
        At = null, en = 0
    }
}
const is = e => e.id == null ? 1 / 0 : e.id,
    ff = (e, t) => { const n = is(e) - is(t); if (n === 0) { if (e.pre && !t.pre) return -1; if (t.pre && !e.pre) return 1 } return n };

function Al(e) {
    xr = !1, rs = !0, Se.sort(ff);
    const t = at;
    try {
        for (gt = 0; gt < Se.length; gt++) {
            const n = Se[gt];
            n && n.active !== !1 && Wt(n, null, 14)
        }
    } finally { gt = 0, Se.length = 0, yl(), rs = !1, wi = null, (Se.length || Cn.length) && Al() }
}

function df(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || le;
    let r = n;
    const i = t.startsWith("update:"),
        o = i && t.slice(7);
    if (o && o in s) {
        const d = `${o==="modelValue"?"model":o}Modifiers`,
            { number: g, trim: m } = s[d] || le;
        m && (r = n.map(v => v.trim())), g && (r = n.map(Au))
    }
    let a, u = s[a = hr(t)] || s[a = hr(On(t))];
    !u && i && (u = s[a = hr(Wn(t))]), u && Qe(u, e, 6, r);
    const f = s[a + "Once"];
    if (f) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        e.emitted[a] = !0, Qe(f, e, 6, r)
    }
}

function Cl(e, t, n = !1) {
    const s = t.emitsCache,
        r = s.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let o = {},
        a = !1;
    if (!z(e)) {
        const u = f => {
            const d = Cl(f, t, !0);
            d && (a = !0, De(o, d))
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    return !i && !a ? (de(e) && s.set(e, null), null) : (Y(i) ? i.forEach(u => o[u] = null) : De(o, i), de(e) && s.set(e, o), o)
}

function zs(e, t) { return !e || !Ks(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, Wn(t)) || se(e, t)) }
let Et = null,
    Nl = null;

function Fs(e) { const t = Et; return Et = e, Nl = e && e.type.__scopeId || null, t }

function hf(e, t = Et, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
        s._d && wo(-1);
        const i = Fs(t),
            o = e(...r);
        return Fs(i), s._d && wo(1), o
    };
    return s._n = !0, s._c = !0, s._d = !0, s
}

function pr(e) {
    const { type: t, vnode: n, proxy: s, withProxy: r, props: i, propsOptions: [o], slots: a, attrs: u, emit: f, render: d, renderCache: g, data: m, setupState: v, ctx: I, inheritAttrs: C } = e;
    let L, p;
    const N = Fs(e);
    try {
        if (n.shapeFlag & 4) {
            const b = r || s;
            L = _t(d.call(b, b, g, i, v, m, I)), p = u
        } else {
            const b = t;
            L = _t(b.length > 1 ? b(i, { attrs: u, slots: a, emit: f }) : b(i, null)), p = t.props ? u : _f(u)
        }
    } catch (b) { Qn.length = 0, qs(b, e, 1), L = ze(Nt) }
    let O = L;
    if (p && C !== !1) {
        const b = Object.keys(p),
            { shapeFlag: T } = O;
        b.length && T & 7 && (o && b.some(mi) && (p = pf(p, o)), O = Ht(O, p))
    }
    return n.dirs && (O = Ht(O), O.dirs = O.dirs ? O.dirs.concat(n.dirs) : n.dirs), n.transition && (O.transition = n.transition), L = O, Fs(N), L
}
const _f = e => { let t; for (const n in e)(n === "class" || n === "style" || Ks(n)) && ((t || (t = {}))[n] = e[n]); return t },
    pf = (e, t) => { const n = {}; for (const s in e)(!mi(s) || !(s.slice(9) in t)) && (n[s] = e[s]); return n };

function mf(e, t, n) { const { props: s, children: r, component: i } = e, { props: o, children: a, patchFlag: u } = t, f = i.emitsOptions; if (t.dirs || t.transition) return !0; if (n && u >= 0) { if (u & 1024) return !0; if (u & 16) return s ? bo(s, o, f) : !!o; if (u & 8) { const d = t.dynamicProps; for (let g = 0; g < d.length; g++) { const m = d[g]; if (o[m] !== s[m] && !zs(f, m)) return !0 } } } else return (r || a) && (!a || !a.$stable) ? !0 : s === o ? !1 : s ? o ? bo(s, o, f) : !0 : !!o; return !1 }

function bo(e, t, n) { const s = Object.keys(t); if (s.length !== Object.keys(e).length) return !0; for (let r = 0; r < s.length; r++) { const i = s[r]; if (t[i] !== e[i] && !zs(n, i)) return !0 } return !1 }

function gf({ vnode: e, parent: t }, n) { for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent }
const Ef = e => e.__isSuspense;

function bf(e, t) { t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : uf(e) }

function vf(e, t) {
    if (Ne) {
        let n = Ne.provides;
        const s = Ne.parent && Ne.parent.provides;
        s === n && (n = Ne.provides = Object.create(s)), n[e] = t
    }
}

function Ds(e, t, n = !1) { const s = Ne || Et; if (s) { const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides; if (r && e in r) return r[e]; if (arguments.length > 1) return n && z(t) ? t.call(s.proxy) : t } }
const vo = {};

function Nn(e, t, n) { return Ll(e, t, n) }

function Ll(e, t, { immediate: n, deep: s, flush: r, onTrack: i, onTrigger: o } = le) {
    const a = Ne;
    let u, f = !1,
        d = !1;
    if (Le(e) ? (u = () => e.value, f = xs(e)) : An(e) ? (u = () => e, s = !0) : Y(e) ? (d = !0, f = e.some(p => An(p) || xs(p)), u = () => e.map(p => { if (Le(p)) return p.value; if (An(p)) return gn(p); if (z(p)) return Wt(p, a, 2) })) : z(e) ? t ? u = () => Wt(e, a, 2) : u = () => { if (!(a && a.isUnmounted)) return g && g(), Qe(e, a, 3, [m]) } : u = at, t && s) {
        const p = u;
        u = () => gn(p())
    }
    let g, m = p => { g = L.onStop = () => { Wt(p, a, 4) } };
    if (as) return m = at, t ? n && Qe(t, a, 3, [u(), d ? [] : void 0, m]) : u(), at;
    let v = d ? [] : vo;
    const I = () => {
        if (!!L.active)
            if (t) {
                const p = L.run();
                (s || f || (d ? p.some((N, O) => ns(N, v[O])) : ns(p, v))) && (g && g(), Qe(t, a, 3, [p, v === vo ? void 0 : v, m]), v = p)
            } else L.run()
    };
    I.allowRecurse = !!t;
    let C;
    r === "sync" ? C = I : r === "post" ? C = () => Ue(I, a && a.suspense) : (I.pre = !0, a && (I.id = a.uid), C = () => Ii(I));
    const L = new Ti(u, C);
    return t ? n ? I() : v = L.run() : r === "post" ? Ue(L.run.bind(L), a && a.suspense) : L.run(), () => { L.stop(), a && a.scope && gi(a.scope.effects, L) }
}

function Tf(e, t, n) {
    const s = this.proxy,
        r = Oe(e) ? e.includes(".") ? Ol(s, e) : () => s[e] : e.bind(s, s);
    let i;
    z(t) ? i = t : (i = t.handler, n = t);
    const o = Ne;
    Sn(this);
    const a = Ll(r, i.bind(s), n);
    return o ? Sn(o) : rn(), a
}

function Ol(e, t) { const n = t.split("."); return () => { let s = e; for (let r = 0; r < n.length && s; r++) s = s[n[r]]; return s } }

function gn(e, t) {
    if (!de(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), Le(e)) gn(e.value, t);
    else if (Y(e))
        for (let n = 0; n < e.length; n++) gn(e[n], t);
    else if (za(e) || yn(e)) e.forEach(n => { gn(n, t) });
    else if (Za(e))
        for (const n in e) gn(e[n], t);
    return e
}

function yf() { const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map }; return Si(() => { e.isMounted = !0 }), Pl(() => { e.isUnmounting = !0 }), e }
const qe = [Function, Array],
    Af = {
        name: "BaseTransition",
        props: { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: qe, onEnter: qe, onAfterEnter: qe, onEnterCancelled: qe, onBeforeLeave: qe, onLeave: qe, onAfterLeave: qe, onLeaveCancelled: qe, onBeforeAppear: qe, onAppear: qe, onAfterAppear: qe, onAppearCancelled: qe },
        setup(e, { slots: t }) {
            const n = In(),
                s = yf();
            let r;
            return () => {
                const i = t.default && Il(t.default(), !0);
                if (!i || !i.length) return;
                let o = i[0];
                if (i.length > 1) {
                    for (const C of i)
                        if (C.type !== Nt) { o = C; break }
                }
                const a = ie(e),
                    { mode: u } = a;
                if (s.isLeaving) return mr(o);
                const f = To(o);
                if (!f) return mr(o);
                const d = Fr(f, a, s, n);
                Wr(f, d);
                const g = n.subTree,
                    m = g && To(g);
                let v = !1;
                const { getTransitionKey: I } = f.type;
                if (I) {
                    const C = I();
                    r === void 0 ? r = C : C !== r && (r = C, v = !0)
                }
                if (m && m.type !== Nt && (!tn(f, m) || v)) {
                    const C = Fr(m, a, s, n);
                    if (Wr(m, C), u === "out-in") return s.isLeaving = !0, C.afterLeave = () => { s.isLeaving = !1, n.update() }, mr(o);
                    u === "in-out" && f.type !== Nt && (C.delayLeave = (L, p, N) => {
                        const O = wl(s, m);
                        O[String(m.key)] = m, L._leaveCb = () => { p(), L._leaveCb = void 0, delete d.delayedLeave }, d.delayedLeave = N
                    })
                }
                return o
            }
        }
    },
    Cf = Af;

function wl(e, t) { const { leavingVNodes: n } = e; let s = n.get(t.type); return s || (s = Object.create(null), n.set(t.type, s)), s }

function Fr(e, t, n, s) {
    const { appear: r, mode: i, persisted: o = !1, onBeforeEnter: a, onEnter: u, onAfterEnter: f, onEnterCancelled: d, onBeforeLeave: g, onLeave: m, onAfterLeave: v, onLeaveCancelled: I, onBeforeAppear: C, onAppear: L, onAfterAppear: p, onAppearCancelled: N } = t, O = String(e.key), b = wl(n, e), T = (F, V) => { F && Qe(F, s, 9, V) }, P = (F, V) => {
        const H = V[1];
        T(F, V), Y(F) ? F.every(j => j.length <= 1) && H() : F.length <= 1 && H()
    }, R = {
        mode: i,
        persisted: o,
        beforeEnter(F) {
            let V = a;
            if (!n.isMounted)
                if (r) V = C || a;
                else return;
            F._leaveCb && F._leaveCb(!0);
            const H = b[O];
            H && tn(e, H) && H.el._leaveCb && H.el._leaveCb(), T(V, [F])
        },
        enter(F) {
            let V = u,
                H = f,
                j = d;
            if (!n.isMounted)
                if (r) V = L || u, H = p || f, j = N || d;
                else return;
            let te = !1;
            const q = F._enterCb = ge => { te || (te = !0, ge ? T(j, [F]) : T(H, [F]), R.delayedLeave && R.delayedLeave(), F._enterCb = void 0) };
            V ? P(V, [F, q]) : q()
        },
        leave(F, V) {
            const H = String(e.key);
            if (F._enterCb && F._enterCb(!0), n.isUnmounting) return V();
            T(g, [F]);
            let j = !1;
            const te = F._leaveCb = q => { j || (j = !0, V(), q ? T(I, [F]) : T(v, [F]), F._leaveCb = void 0, b[H] === e && delete b[H]) };
            b[H] = e, m ? P(m, [F, te]) : te()
        },
        clone(F) { return Fr(F, t, n, s) }
    };
    return R
}

function mr(e) { if (Qs(e)) return e = Ht(e), e.children = null, e }

function To(e) { return Qs(e) ? e.children ? e.children[0] : void 0 : e }

function Wr(e, t) { e.shapeFlag & 6 && e.component ? Wr(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t }

function Il(e, t = !1, n) {
    let s = [],
        r = 0;
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === st ? (o.patchFlag & 128 && r++, s = s.concat(Il(o.children, t, a))) : (t || o.type !== Nt) && s.push(a != null ? Ht(o, { key: a }) : o)
    }
    if (r > 1)
        for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
    return s
}
const Ps = e => !!e.type.__asyncLoader,
    Qs = e => e.type.__isKeepAlive;

function Nf(e, t) { Sl(e, "a", t) }

function Lf(e, t) { Sl(e, "da", t) }

function Sl(e, t, n = Ne) {
    const s = e.__wdc || (e.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return e()
    });
    if (Js(t, s, n), n) { let r = n.parent; for (; r && r.parent;) Qs(r.parent.vnode) && Of(s, t, n, r), r = r.parent }
}

function Of(e, t, n, s) {
    const r = Js(t, e, s, !0);
    Di(() => { gi(s[t], r) }, n)
}

function Js(e, t, n = Ne, s = !1) {
    if (n) {
        const r = n[e] || (n[e] = []),
            i = t.__weh || (t.__weh = (...o) => {
                if (n.isUnmounted) return;
                Vn(), Sn(n);
                const a = Qe(t, n, e, o);
                return rn(), Hn(), a
            });
        return s ? r.unshift(i) : r.push(i), i
    }
}
const Dt = e => (t, n = Ne) => (!as || e === "sp") && Js(e, t, n),
    Dl = Dt("bm"),
    Si = Dt("m"),
    wf = Dt("bu"),
    If = Dt("u"),
    Pl = Dt("bum"),
    Di = Dt("um"),
    Sf = Dt("sp"),
    Df = Dt("rtg"),
    Pf = Dt("rtc");

function kf(e, t = Ne) { Js("ec", e, t) }

function Qt(e, t, n, s) {
    const r = e.dirs,
        i = t && t.dirs;
    for (let o = 0; o < r.length; o++) {
        const a = r[o];
        i && (a.oldValue = i[o].value);
        let u = a.dir[s];
        u && (Vn(), Qe(u, n, 8, [e.el, a, e, t]), Hn())
    }
}
const Rf = Symbol(),
    Vr = e => e ? Ul(e) ? Mi(e) || e.proxy : Vr(e.parent) : null,
    Ws = De(Object.create(null), { $: e => e, $el: e => e.vnode.el, $data: e => e.data, $props: e => e.props, $attrs: e => e.attrs, $slots: e => e.slots, $refs: e => e.refs, $parent: e => Vr(e.parent), $root: e => Vr(e.root), $emit: e => e.emit, $options: e => Pi(e), $forceUpdate: e => e.f || (e.f = () => Ii(e.update)), $nextTick: e => e.n || (e.n = af.bind(e.proxy)), $watch: e => Tf.bind(e) }),
    Mf = {get({ _: e }, t) {
            const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: a, appContext: u } = e;
            let f;
            if (t[0] !== "$") {
                const v = o[t];
                if (v !== void 0) switch (v) {
                    case 1:
                        return s[t];
                    case 2:
                        return r[t];
                    case 4:
                        return n[t];
                    case 3:
                        return i[t]
                } else {
                    if (s !== le && se(s, t)) return o[t] = 1, s[t];
                    if (r !== le && se(r, t)) return o[t] = 2, r[t];
                    if ((f = e.propsOptions[0]) && se(f, t)) return o[t] = 3, i[t];
                    if (n !== le && se(n, t)) return o[t] = 4, n[t];
                    Hr && (o[t] = 0)
                }
            }
            const d = Ws[t];
            let g, m;
            if (d) return t === "$attrs" && Ke(e, "get", t), d(e);
            if ((g = a.__cssModules) && (g = g[t])) return g;
            if (n !== le && se(n, t)) return o[t] = 4, n[t];
            if (m = u.config.globalProperties, se(m, t)) return m[t]
        },
        set({ _: e }, t, n) { const { data: s, setupState: r, ctx: i } = e; return r !== le && se(r, t) ? (r[t] = n, !0) : s !== le && se(s, t) ? (s[t] = n, !0) : se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0) },
        has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i } }, o) { let a; return !!n[o] || e !== le && se(e, o) || t !== le && se(t, o) || (a = i[0]) && se(a, o) || se(s, o) || se(Ws, o) || se(r.config.globalProperties, o) },
        defineProperty(e, t, n) { return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n) }
    };
let Hr = !0;

function $f(e) {
    const t = Pi(e),
        n = e.proxy,
        s = e.ctx;
    Hr = !1, t.beforeCreate && yo(t.beforeCreate, e, "bc");
    const { data: r, computed: i, methods: o, watch: a, provide: u, inject: f, created: d, beforeMount: g, mounted: m, beforeUpdate: v, updated: I, activated: C, deactivated: L, beforeDestroy: p, beforeUnmount: N, destroyed: O, unmounted: b, render: T, renderTracked: P, renderTriggered: R, errorCaptured: F, serverPrefetch: V, expose: H, inheritAttrs: j, components: te, directives: q, filters: ge } = t;
    if (f && xf(f, s, null, e.appContext.config.unwrapInjectedRef), o)
        for (const B in o) {
            const J = o[B];
            z(J) && (s[B] = J.bind(n))
        }
    if (r) {
        const B = r.call(n, n);
        de(B) && (e.data = Ni(B))
    }
    if (Hr = !0, i)
        for (const B in i) {
            const J = i[B],
                fe = z(J) ? J.bind(n, n) : z(J.get) ? J.get.bind(n, n) : at,
                Fe = !z(J) && z(J.set) ? J.set.bind(n) : at,
                Pe = it({ get: fe, set: Fe });
            Object.defineProperty(s, B, { enumerable: !0, configurable: !0, get: () => Pe.value, set: ve => Pe.value = ve })
        }
    if (a)
        for (const B in a) kl(a[B], s, n, B);
    if (u) {
        const B = z(u) ? u.call(n) : u;
        Reflect.ownKeys(B).forEach(J => { vf(J, B[J]) })
    }
    d && yo(d, e, "c");

    function X(B, J) { Y(J) ? J.forEach(fe => B(fe.bind(n))) : J && B(J.bind(n)) }
    if (X(Dl, g), X(Si, m), X(wf, v), X(If, I), X(Nf, C), X(Lf, L), X(kf, F), X(Pf, P), X(Df, R), X(Pl, N), X(Di, b), X(Sf, V), Y(H))
        if (H.length) {
            const B = e.exposed || (e.exposed = {});
            H.forEach(J => { Object.defineProperty(B, J, { get: () => n[J], set: fe => n[J] = fe }) })
        } else e.exposed || (e.exposed = {});
    T && e.render === at && (e.render = T), j != null && (e.inheritAttrs = j), te && (e.components = te), q && (e.directives = q)
}

function xf(e, t, n = at, s = !1) {
    Y(e) && (e = Ur(e));
    for (const r in e) {
        const i = e[r];
        let o;
        de(i) ? "default" in i ? o = Ds(i.from || r, i.default, !0) : o = Ds(i.from || r) : o = Ds(i), Le(o) && s ? Object.defineProperty(t, r, { enumerable: !0, configurable: !0, get: () => o.value, set: a => o.value = a }) : t[r] = o
    }
}

function yo(e, t, n) { Qe(Y(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n) }

function kl(e, t, n, s) {
    const r = s.includes(".") ? Ol(n, s) : () => n[s];
    if (Oe(e)) {
        const i = t[e];
        z(i) && Nn(r, i)
    } else if (z(e)) Nn(r, e.bind(n));
    else if (de(e))
        if (Y(e)) e.forEach(i => kl(i, t, n, s));
        else {
            const i = z(e.handler) ? e.handler.bind(n) : t[e.handler];
            z(i) && Nn(r, i, e)
        }
}

function Pi(e) {
    const t = e.type,
        { mixins: n, extends: s } = t,
        { mixins: r, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext,
        a = i.get(t);
    let u;
    return a ? u = a : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach(f => Vs(u, f, o, !0)), Vs(u, t, o)), de(t) && i.set(t, u), u
}

function Vs(e, t, n, s = !1) {
    const { mixins: r, extends: i } = t;
    i && Vs(e, i, n, !0), r && r.forEach(o => Vs(e, o, n, !0));
    for (const o in t)
        if (!(s && o === "expose")) {
            const a = Ff[o] || n && n[o];
            e[o] = a ? a(e[o], t[o]) : t[o]
        }
    return e
}
const Ff = { data: Ao, props: Zt, emits: Zt, methods: Zt, computed: Zt, beforeCreate: Re, created: Re, beforeMount: Re, mounted: Re, beforeUpdate: Re, updated: Re, beforeDestroy: Re, beforeUnmount: Re, destroyed: Re, unmounted: Re, activated: Re, deactivated: Re, errorCaptured: Re, serverPrefetch: Re, components: Zt, directives: Zt, watch: Vf, provide: Ao, inject: Wf };

function Ao(e, t) { return t ? e ? function() { return De(z(e) ? e.call(this, this) : e, z(t) ? t.call(this, this) : t) } : t : e }

function Wf(e, t) { return Zt(Ur(e), Ur(t)) }

function Ur(e) { if (Y(e)) { const t = {}; for (let n = 0; n < e.length; n++) t[e[n]] = e[n]; return t } return e }

function Re(e, t) { return e ? [...new Set([].concat(e, t))] : t }

function Zt(e, t) { return e ? De(De(Object.create(null), e), t) : t }

function Vf(e, t) { if (!e) return t; if (!t) return e; const n = De(Object.create(null), e); for (const s in t) n[s] = Re(e[s], t[s]); return n }

function Hf(e, t, n, s = !1) {
    const r = {},
        i = {};
    $s(i, er, 1), e.propsDefaults = Object.create(null), Rl(e, t, r, i);
    for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
    n ? e.props = s ? r : Ju(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i
}

function Uf(e, t, n, s) {
    const { props: r, attrs: i, vnode: { patchFlag: o } } = e, a = ie(r), [u] = e.propsOptions;
    let f = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const d = e.vnode.dynamicProps;
            for (let g = 0; g < d.length; g++) {
                let m = d[g];
                if (zs(e.emitsOptions, m)) continue;
                const v = t[m];
                if (u)
                    if (se(i, m)) v !== i[m] && (i[m] = v, f = !0);
                    else {
                        const I = On(m);
                        r[I] = jr(u, a, I, v, e, !1)
                    }
                else v !== i[m] && (i[m] = v, f = !0)
            }
        }
    } else {
        Rl(e, t, r, i) && (f = !0);
        let d;
        for (const g in a)(!t || !se(t, g) && ((d = Wn(g)) === g || !se(t, d))) && (u ? n && (n[g] !== void 0 || n[d] !== void 0) && (r[g] = jr(u, a, g, void 0, e, !0)) : delete r[g]);
        if (i !== a)
            for (const g in i)(!t || !se(t, g) && !0) && (delete i[g], f = !0)
    }
    f && It(e, "set", "$attrs")
}

function Rl(e, t, n, s) {
    const [r, i] = e.propsOptions;
    let o = !1,
        a;
    if (t)
        for (let u in t) {
            if (Ss(u)) continue;
            const f = t[u];
            let d;
            r && se(r, d = On(u)) ? !i || !i.includes(d) ? n[d] = f : (a || (a = {}))[d] = f : zs(e.emitsOptions, u) || (!(u in s) || f !== s[u]) && (s[u] = f, o = !0)
        }
    if (i) {
        const u = ie(n),
            f = a || le;
        for (let d = 0; d < i.length; d++) {
            const g = i[d];
            n[g] = jr(r, u, g, f[g], e, !se(f, g))
        }
    }
    return o
}

function jr(e, t, n, s, r, i) {
    const o = e[n];
    if (o != null) {
        const a = se(o, "default");
        if (a && s === void 0) {
            const u = o.default;
            if (o.type !== Function && z(u)) {
                const { propsDefaults: f } = r;
                n in f ? s = f[n] : (Sn(r), s = f[n] = u.call(null, t), rn())
            } else s = u
        }
        o[0] && (i && !a ? s = !1 : o[1] && (s === "" || s === Wn(n)) && (s = !0))
    }
    return s
}

function Ml(e, t, n = !1) {
    const s = t.propsCache,
        r = s.get(e);
    if (r) return r;
    const i = e.props,
        o = {},
        a = [];
    let u = !1;
    if (!z(e)) {
        const d = g => {
            u = !0;
            const [m, v] = Ml(g, t, !0);
            De(o, m), v && a.push(...v)
        };
        !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d)
    }
    if (!i && !u) return de(e) && s.set(e, Tn), Tn;
    if (Y(i))
        for (let d = 0; d < i.length; d++) {
            const g = On(i[d]);
            Co(g) && (o[g] = le)
        } else if (i)
            for (const d in i) {
                const g = On(d);
                if (Co(g)) {
                    const m = i[d],
                        v = o[g] = Y(m) || z(m) ? { type: m } : m;
                    if (v) {
                        const I = Oo(Boolean, v.type),
                            C = Oo(String, v.type);
                        v[0] = I > -1, v[1] = C < 0 || I < C, (I > -1 || se(v, "default")) && a.push(g)
                    }
                }
            }
    const f = [o, a];
    return de(e) && s.set(e, f), f
}

function Co(e) { return e[0] !== "$" }

function No(e) { const t = e && e.toString().match(/^\s*function (\w+)/); return t ? t[1] : e === null ? "null" : "" }

function Lo(e, t) { return No(e) === No(t) }

function Oo(e, t) { return Y(t) ? t.findIndex(n => Lo(n, e)) : z(t) && Lo(t, e) ? 0 : -1 }
const $l = e => e[0] === "_" || e === "$stable",
    ki = e => Y(e) ? e.map(_t) : [_t(e)],
    jf = (e, t, n) => { if (t._n) return t; const s = hf((...r) => ki(t(...r)), n); return s._c = !1, s },
    xl = (e, t, n) => {
        const s = e._ctx;
        for (const r in e) {
            if ($l(r)) continue;
            const i = e[r];
            if (z(i)) t[r] = jf(r, i, s);
            else if (i != null) {
                const o = ki(i);
                t[r] = () => o
            }
        }
    },
    Fl = (e, t) => {
        const n = ki(t);
        e.slots.default = () => n
    },
    Bf = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? (e.slots = ie(t), $s(t, "_", n)) : xl(t, e.slots = {})
        } else e.slots = {}, t && Fl(e, t);
        $s(e.slots, er, 1)
    },
    Kf = (e, t, n) => {
        const { vnode: s, slots: r } = e;
        let i = !0,
            o = le;
        if (s.shapeFlag & 32) {
            const a = t._;
            a ? n && a === 1 ? i = !1 : (De(r, t), !n && a === 1 && delete r._) : (i = !t.$stable, xl(t, r)), o = t
        } else t && (Fl(e, t), o = { default: 1 });
        if (i)
            for (const a in r) !$l(a) && !(a in o) && delete r[a]
    };

function Wl() { return { app: null, config: { isNativeTag: gu, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: Object.create(null), optionsCache: new WeakMap, propsCache: new WeakMap, emitsCache: new WeakMap } }
let Yf = 0;

function Gf(e, t) {
    return function(s, r = null) {
        z(s) || (s = Object.assign({}, s)), r != null && !de(r) && (r = null);
        const i = Wl(),
            o = new Set;
        let a = !1;
        const u = i.app = { _uid: Yf++, _component: s, _props: r, _container: null, _context: i, _instance: null, version: hd, get config() { return i.config }, set config(f) {}, use(f, ...d) { return o.has(f) || (f && z(f.install) ? (o.add(f), f.install(u, ...d)) : z(f) && (o.add(f), f(u, ...d))), u }, mixin(f) { return i.mixins.includes(f) || i.mixins.push(f), u }, component(f, d) { return d ? (i.components[f] = d, u) : i.components[f] }, directive(f, d) { return d ? (i.directives[f] = d, u) : i.directives[f] }, mount(f, d, g) { if (!a) { const m = ze(s, r); return m.appContext = i, d && t ? t(m, f) : e(m, f, g), a = !0, u._container = f, f.__vue_app__ = u, Mi(m.component) || m.component.proxy } }, unmount() { a && (e(null, u._container), delete u._container.__vue_app__) }, provide(f, d) { return i.provides[f] = d, u } };
        return u
    }
}

function Br(e, t, n, s, r = !1) {
    if (Y(e)) { e.forEach((m, v) => Br(m, t && (Y(t) ? t[v] : t), n, s, r)); return }
    if (Ps(s) && !r) return;
    const i = s.shapeFlag & 4 ? Mi(s.component) || s.component.proxy : s.el,
        o = r ? null : i,
        { i: a, r: u } = e,
        f = t && t.r,
        d = a.refs === le ? a.refs = {} : a.refs,
        g = a.setupState;
    if (f != null && f !== u && (Oe(f) ? (d[f] = null, se(g, f) && (g[f] = null)) : Le(f) && (f.value = null)), z(u)) Wt(u, a, 12, [o, d]);
    else {
        const m = Oe(u),
            v = Le(u);
        if (m || v) {
            const I = () => {
                if (e.f) {
                    const C = m ? d[u] : u.value;
                    r ? Y(C) && gi(C, i) : Y(C) ? C.includes(i) || C.push(i) : m ? (d[u] = [i], se(g, u) && (g[u] = d[u])) : (u.value = [i], e.k && (d[e.k] = u.value))
                } else m ? (d[u] = o, se(g, u) && (g[u] = o)) : v && (u.value = o, e.k && (d[e.k] = o))
            };
            o ? (I.id = -1, Ue(I, n)) : I()
        }
    }
}
const Ue = bf;

function Xf(e) { return qf(e) }

function qf(e, t) {
    const n = Cu();
    n.__VUE__ = !0;
    const { insert: s, remove: r, patchProp: i, createElement: o, createText: a, createComment: u, setText: f, setElementText: d, parentNode: g, nextSibling: m, setScopeId: v = at, cloneNode: I, insertStaticContent: C } = e, L = (c, l, h, E = null, y = null, w = null, M = !1, S = null, D = !!l.dynamicChildren) => {
        if (c === l) return;
        c && !tn(c, l) && (E = pe(c), Te(c, y, w, !0), c = null), l.patchFlag === -2 && (D = !1, l.dynamicChildren = null);
        const { type: _, ref: A, shapeFlag: $ } = l;
        switch (_) {
            case Zs:
                p(c, l, h, E);
                break;
            case Nt:
                N(c, l, h, E);
                break;
            case gr:
                c == null && O(l, h, E, M);
                break;
            case st:
                q(c, l, h, E, y, w, M, S, D);
                break;
            default:
                $ & 1 ? P(c, l, h, E, y, w, M, S, D) : $ & 6 ? ge(c, l, h, E, y, w, M, S, D) : ($ & 64 || $ & 128) && _.process(c, l, h, E, y, w, M, S, D, Ce)
        }
        A != null && y && Br(A, c && c.ref, w, l || c, !l)
    }, p = (c, l, h, E) => {
        if (c == null) s(l.el = a(l.children), h, E);
        else {
            const y = l.el = c.el;
            l.children !== c.children && f(y, l.children)
        }
    }, N = (c, l, h, E) => { c == null ? s(l.el = u(l.children || ""), h, E) : l.el = c.el }, O = (c, l, h, E) => {
        [c.el, c.anchor] = C(c.children, l, h, E, c.el, c.anchor)
    }, b = ({ el: c, anchor: l }, h, E) => {
        let y;
        for (; c && c !== l;) y = m(c), s(c, h, E), c = y;
        s(l, h, E)
    }, T = ({ el: c, anchor: l }) => {
        let h;
        for (; c && c !== l;) h = m(c), r(c), c = h;
        r(l)
    }, P = (c, l, h, E, y, w, M, S, D) => { M = M || l.type === "svg", c == null ? R(l, h, E, y, w, M, S, D) : H(c, l, y, w, M, S, D) }, R = (c, l, h, E, y, w, M, S) => {
        let D, _;
        const { type: A, props: $, shapeFlag: W, transition: U, patchFlag: G, dirs: Z } = c;
        if (c.el && I !== void 0 && G === -1) D = c.el = I(c.el);
        else {
            if (D = c.el = o(c.type, w, $ && $.is, $), W & 8 ? d(D, c.children) : W & 16 && V(c.children, D, null, E, y, w && A !== "foreignObject", M, S), Z && Qt(c, null, E, "created"), $) { for (const ae in $) ae !== "value" && !Ss(ae) && i(D, ae, null, $[ae], w, c.children, E, y, _e); "value" in $ && i(D, "value", null, $.value), (_ = $.onVnodeBeforeMount) && ft(_, E, c) }
            F(D, c, c.scopeId, M, E)
        }
        Z && Qt(c, null, E, "beforeMount");
        const oe = (!y || y && !y.pendingBranch) && U && !U.persisted;
        oe && U.beforeEnter(D), s(D, l, h), ((_ = $ && $.onVnodeMounted) || oe || Z) && Ue(() => { _ && ft(_, E, c), oe && U.enter(D), Z && Qt(c, null, E, "mounted") }, y)
    }, F = (c, l, h, E, y) => {
        if (h && v(c, h), E)
            for (let w = 0; w < E.length; w++) v(c, E[w]);
        if (y) {
            let w = y.subTree;
            if (l === w) {
                const M = y.vnode;
                F(c, M, M.scopeId, M.slotScopeIds, y.parent)
            }
        }
    }, V = (c, l, h, E, y, w, M, S, D = 0) => {
        for (let _ = D; _ < c.length; _++) {
            const A = c[_] = S ? $t(c[_]) : _t(c[_]);
            L(null, A, l, h, E, y, w, M, S)
        }
    }, H = (c, l, h, E, y, w, M) => {
        const S = l.el = c.el;
        let { patchFlag: D, dynamicChildren: _, dirs: A } = l;
        D |= c.patchFlag & 16;
        const $ = c.props || le,
            W = l.props || le;
        let U;
        h && Jt(h, !1), (U = W.onVnodeBeforeUpdate) && ft(U, h, l, c), A && Qt(l, c, h, "beforeUpdate"), h && Jt(h, !0);
        const G = y && l.type !== "foreignObject";
        if (_ ? j(c.dynamicChildren, _, S, h, E, G, w) : M || fe(c, l, S, null, h, E, G, w, !1), D > 0) {
            if (D & 16) te(S, l, $, W, h, E, y);
            else if (D & 2 && $.class !== W.class && i(S, "class", null, W.class, y), D & 4 && i(S, "style", $.style, W.style, y), D & 8) {
                const Z = l.dynamicProps;
                for (let oe = 0; oe < Z.length; oe++) {
                    const ae = Z[oe],
                        nt = $[ae],
                        fn = W[ae];
                    (fn !== nt || ae === "value") && i(S, ae, nt, fn, y, c.children, h, E, _e)
                }
            }
            D & 1 && c.children !== l.children && d(S, l.children)
        } else !M && _ == null && te(S, l, $, W, h, E, y);
        ((U = W.onVnodeUpdated) || A) && Ue(() => { U && ft(U, h, l, c), A && Qt(l, c, h, "updated") }, E)
    }, j = (c, l, h, E, y, w, M) => {
        for (let S = 0; S < l.length; S++) {
            const D = c[S],
                _ = l[S],
                A = D.el && (D.type === st || !tn(D, _) || D.shapeFlag & 70) ? g(D.el) : h;
            L(D, _, A, null, E, y, w, M, !0)
        }
    }, te = (c, l, h, E, y, w, M) => {
        if (h !== E) {
            for (const S in E) {
                if (Ss(S)) continue;
                const D = E[S],
                    _ = h[S];
                D !== _ && S !== "value" && i(c, S, _, D, M, l.children, y, w, _e)
            }
            if (h !== le)
                for (const S in h) !Ss(S) && !(S in E) && i(c, S, h[S], null, M, l.children, y, w, _e);
            "value" in E && i(c, "value", h.value, E.value)
        }
    }, q = (c, l, h, E, y, w, M, S, D) => {
        const _ = l.el = c ? c.el : a(""),
            A = l.anchor = c ? c.anchor : a("");
        let { patchFlag: $, dynamicChildren: W, slotScopeIds: U } = l;
        U && (S = S ? S.concat(U) : U), c == null ? (s(_, h, E), s(A, h, E), V(l.children, h, A, y, w, M, S, D)) : $ > 0 && $ & 64 && W && c.dynamicChildren ? (j(c.dynamicChildren, W, h, y, w, M, S), (l.key != null || y && l === y.subTree) && Vl(c, l, !0)) : fe(c, l, h, A, y, w, M, S, D)
    }, ge = (c, l, h, E, y, w, M, S, D) => { l.slotScopeIds = S, c == null ? l.shapeFlag & 512 ? y.ctx.activate(l, h, E, M, D) : Ae(l, h, E, y, w, M, D) : X(c, l, D) }, Ae = (c, l, h, E, y, w, M) => {
        const S = c.component = ad(c, E, y);
        if (Qs(c) && (S.ctx.renderer = Ce), ld(S), S.asyncDep) {
            if (y && y.registerDep(S, B), !c.el) {
                const D = S.subTree = ze(Nt);
                N(null, D, l, h)
            }
            return
        }
        B(S, c, l, h, y, w, M)
    }, X = (c, l, h) => {
        const E = l.component = c.component;
        if (mf(c, l, h))
            if (E.asyncDep && !E.asyncResolved) { J(E, l, h); return } else E.next = l, cf(E.update), E.update();
        else l.el = c.el, E.vnode = l
    }, B = (c, l, h, E, y, w, M) => {
        const S = () => {
                if (c.isMounted) {
                    let { next: A, bu: $, u: W, parent: U, vnode: G } = c, Z = A, oe;
                    Jt(c, !1), A ? (A.el = G.el, J(c, A, M)) : A = G, $ && _r($), (oe = A.props && A.props.onVnodeBeforeUpdate) && ft(oe, U, A, G), Jt(c, !0);
                    const ae = pr(c),
                        nt = c.subTree;
                    c.subTree = ae, L(nt, ae, g(nt.el), pe(nt), c, y, w), A.el = ae.el, Z === null && gf(c, ae.el), W && Ue(W, y), (oe = A.props && A.props.onVnodeUpdated) && Ue(() => ft(oe, U, A, G), y)
                } else {
                    let A;
                    const { el: $, props: W } = l, { bm: U, m: G, parent: Z } = c, oe = Ps(l);
                    if (Jt(c, !1), U && _r(U), !oe && (A = W && W.onVnodeBeforeMount) && ft(A, Z, l), Jt(c, !0), $ && Xe) {
                        const ae = () => { c.subTree = pr(c), Xe($, c.subTree, c, y, null) };
                        oe ? l.type.__asyncLoader().then(() => !c.isUnmounted && ae()) : ae()
                    } else {
                        const ae = c.subTree = pr(c);
                        L(null, ae, h, E, c, y, w), l.el = ae.el
                    }
                    if (G && Ue(G, y), !oe && (A = W && W.onVnodeMounted)) {
                        const ae = l;
                        Ue(() => ft(A, Z, ae), y)
                    }(l.shapeFlag & 256 || Z && Ps(Z.vnode) && Z.vnode.shapeFlag & 256) && c.a && Ue(c.a, y), c.isMounted = !0, l = h = E = null
                }
            },
            D = c.effect = new Ti(S, () => Ii(_), c.scope),
            _ = c.update = () => D.run();
        _.id = c.uid, Jt(c, !0), _()
    }, J = (c, l, h) => {
        l.component = c;
        const E = c.vnode.props;
        c.vnode = l, c.next = null, Uf(c, l.props, E, h), Kf(c, l.children, h), Vn(), Eo(), Hn()
    }, fe = (c, l, h, E, y, w, M, S, D = !1) => {
        const _ = c && c.children,
            A = c ? c.shapeFlag : 0,
            $ = l.children,
            { patchFlag: W, shapeFlag: U } = l;
        if (W > 0) { if (W & 128) { Pe(_, $, h, E, y, w, M, S, D); return } else if (W & 256) { Fe(_, $, h, E, y, w, M, S, D); return } }
        U & 8 ? (A & 16 && _e(_, y, w), $ !== _ && d(h, $)) : A & 16 ? U & 16 ? Pe(_, $, h, E, y, w, M, S, D) : _e(_, y, w, !0) : (A & 8 && d(h, ""), U & 16 && V($, h, E, y, w, M, S, D))
    }, Fe = (c, l, h, E, y, w, M, S, D) => {
        c = c || Tn, l = l || Tn;
        const _ = c.length,
            A = l.length,
            $ = Math.min(_, A);
        let W;
        for (W = 0; W < $; W++) {
            const U = l[W] = D ? $t(l[W]) : _t(l[W]);
            L(c[W], U, h, null, y, w, M, S, D)
        }
        _ > A ? _e(c, y, w, !0, !1, $) : V(l, h, E, y, w, M, S, D, $)
    }, Pe = (c, l, h, E, y, w, M, S, D) => {
        let _ = 0;
        const A = l.length;
        let $ = c.length - 1,
            W = A - 1;
        for (; _ <= $ && _ <= W;) {
            const U = c[_],
                G = l[_] = D ? $t(l[_]) : _t(l[_]);
            if (tn(U, G)) L(U, G, h, null, y, w, M, S, D);
            else break;
            _++
        }
        for (; _ <= $ && _ <= W;) {
            const U = c[$],
                G = l[W] = D ? $t(l[W]) : _t(l[W]);
            if (tn(U, G)) L(U, G, h, null, y, w, M, S, D);
            else break;
            $--, W--
        }
        if (_ > $) {
            if (_ <= W) {
                const U = W + 1,
                    G = U < A ? l[U].el : E;
                for (; _ <= W;) L(null, l[_] = D ? $t(l[_]) : _t(l[_]), h, G, y, w, M, S, D), _++
            }
        } else if (_ > W)
            for (; _ <= $;) Te(c[_], y, w, !0), _++;
        else {
            const U = _,
                G = _,
                Z = new Map;
            for (_ = G; _ <= W; _++) {
                const Be = l[_] = D ? $t(l[_]) : _t(l[_]);
                Be.key != null && Z.set(Be.key, _)
            }
            let oe, ae = 0;
            const nt = W - G + 1;
            let fn = !1,
                oo = 0;
            const Yn = new Array(nt);
            for (_ = 0; _ < nt; _++) Yn[_] = 0;
            for (_ = U; _ <= $; _++) {
                const Be = c[_];
                if (ae >= nt) { Te(Be, y, w, !0); continue }
                let ut;
                if (Be.key != null) ut = Z.get(Be.key);
                else
                    for (oe = G; oe <= W; oe++)
                        if (Yn[oe - G] === 0 && tn(Be, l[oe])) { ut = oe; break }
                ut === void 0 ? Te(Be, y, w, !0) : (Yn[ut - G] = _ + 1, ut >= oo ? oo = ut : fn = !0, L(Be, l[ut], h, null, y, w, M, S, D), ae++)
            }
            const ao = fn ? zf(Yn) : Tn;
            for (oe = ao.length - 1, _ = nt - 1; _ >= 0; _--) {
                const Be = G + _,
                    ut = l[Be],
                    lo = Be + 1 < A ? l[Be + 1].el : E;
                Yn[_] === 0 ? L(null, ut, h, lo, y, w, M, S, D) : fn && (oe < 0 || _ !== ao[oe] ? ve(ut, h, lo, 2) : oe--)
            }
        }
    }, ve = (c, l, h, E, y = null) => {
        const { el: w, type: M, transition: S, children: D, shapeFlag: _ } = c;
        if (_ & 6) { ve(c.component.subTree, l, h, E); return }
        if (_ & 128) { c.suspense.move(l, h, E); return }
        if (_ & 64) { M.move(c, l, h, Ce); return }
        if (M === st) {
            s(w, l, h);
            for (let $ = 0; $ < D.length; $++) ve(D[$], l, h, E);
            s(c.anchor, l, h);
            return
        }
        if (M === gr) { b(c, l, h); return }
        if (E !== 2 && _ & 1 && S)
            if (E === 0) S.beforeEnter(w), s(w, l, h), Ue(() => S.enter(w), y);
            else {
                const { leave: $, delayLeave: W, afterLeave: U } = S, G = () => s(w, l, h), Z = () => { $(w, () => { G(), U && U() }) };
                W ? W(w, G, Z) : Z()
            }
        else s(w, l, h)
    }, Te = (c, l, h, E = !1, y = !1) => {
        const { type: w, props: M, ref: S, children: D, dynamicChildren: _, shapeFlag: A, patchFlag: $, dirs: W } = c;
        if (S != null && Br(S, null, h, c, !0), A & 256) { l.ctx.deactivate(c); return }
        const U = A & 1 && W,
            G = !Ps(c);
        let Z;
        if (G && (Z = M && M.onVnodeBeforeUnmount) && ft(Z, l, c), A & 6) je(c.component, h, E);
        else {
            if (A & 128) { c.suspense.unmount(h, E); return }
            U && Qt(c, null, l, "beforeUnmount"), A & 64 ? c.type.remove(c, l, h, y, Ce, E) : _ && (w !== st || $ > 0 && $ & 64) ? _e(_, l, h, !1, !0) : (w === st && $ & 384 || !y && A & 16) && _e(D, l, h), E && we(c)
        }(G && (Z = M && M.onVnodeUnmounted) || U) && Ue(() => { Z && ft(Z, l, c), U && Qt(c, null, l, "unmounted") }, h)
    }, we = c => {
        const { type: l, el: h, anchor: E, transition: y } = c;
        if (l === st) { Ie(h, E); return }
        if (l === gr) { T(c); return }
        const w = () => { r(h), y && !y.persisted && y.afterLeave && y.afterLeave() };
        if (c.shapeFlag & 1 && y && !y.persisted) {
            const { leave: M, delayLeave: S } = y, D = () => M(h, w);
            S ? S(c.el, w, D) : D()
        } else w()
    }, Ie = (c, l) => {
        let h;
        for (; c !== l;) h = m(c), r(c), c = h;
        r(l)
    }, je = (c, l, h) => {
        const { bum: E, scope: y, update: w, subTree: M, um: S } = c;
        E && _r(E), y.stop(), w && (w.active = !1, Te(M, c, l, h)), S && Ue(S, l), Ue(() => { c.isUnmounted = !0 }, l), l && l.pendingBranch && !l.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === l.pendingId && (l.deps--, l.deps === 0 && l.resolve())
    }, _e = (c, l, h, E = !1, y = !1, w = 0) => { for (let M = w; M < c.length; M++) Te(c[M], l, h, E, y) }, pe = c => c.shapeFlag & 6 ? pe(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : m(c.anchor || c.el), We = (c, l, h) => { c == null ? l._vnode && Te(l._vnode, null, null, !0) : L(l._vnode || null, c, l, null, null, null, h), Eo(), yl(), l._vnode = c }, Ce = { p: L, um: Te, m: ve, r: we, mt: Ae, mc: V, pc: fe, pbc: j, n: pe, o: e };
    let ke, Xe;
    return t && ([ke, Xe] = t(Ce)), { render: We, hydrate: ke, createApp: Gf(We, ke) }
}

function Jt({ effect: e, update: t }, n) { e.allowRecurse = t.allowRecurse = n }

function Vl(e, t, n = !1) {
    const s = e.children,
        r = t.children;
    if (Y(s) && Y(r))
        for (let i = 0; i < s.length; i++) {
            const o = s[i];
            let a = r[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = $t(r[i]), a.el = o.el), n || Vl(o, a))
        }
}

function zf(e) {
    const t = e.slice(),
        n = [0];
    let s, r, i, o, a;
    const u = e.length;
    for (s = 0; s < u; s++) {
        const f = e[s];
        if (f !== 0) {
            if (r = n[n.length - 1], e[r] < f) { t[s] = r, n.push(s); continue }
            for (i = 0, o = n.length - 1; i < o;) a = i + o >> 1, e[n[a]] < f ? i = a + 1 : o = a;
            f < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s)
        }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0;) n[i] = o, o = t[o];
    return n
}
const Qf = e => e.__isTeleport,
    st = Symbol(void 0),
    Zs = Symbol(void 0),
    Nt = Symbol(void 0),
    gr = Symbol(void 0),
    Qn = [];
let ot = null;

function Jf(e = !1) { Qn.push(ot = e ? null : []) }

function Zf() { Qn.pop(), ot = Qn[Qn.length - 1] || null }
let os = 1;

function wo(e) { os += e }

function ed(e) { return e.dynamicChildren = os > 0 ? ot || Tn : null, Zf(), os > 0 && ot && ot.push(e), e }

function td(e, t, n, s, r, i) { return ed(ne(e, t, n, s, r, i, !0)) }

function Kr(e) { return e ? e.__v_isVNode === !0 : !1 }

function tn(e, t) { return e.type === t.type && e.key === t.key }
const er = "__vInternal",
    Hl = ({ key: e }) => e != null ? e : null,
    ks = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Oe(e) || Le(e) || z(e) ? { i: Et, r: e, k: t, f: !!n } : e : null;

function ne(e, t = null, n = null, s = 0, r = null, i = e === st ? 0 : 1, o = !1, a = !1) { const u = { __v_isVNode: !0, __v_skip: !0, type: e, props: t, key: t && Hl(t), ref: t && ks(t), scopeId: Nl, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: s, dynamicProps: r, dynamicChildren: null, appContext: null }; return a ? (Ri(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= Oe(n) ? 8 : 16), os > 0 && !o && ot && (u.patchFlag > 0 || i & 6) && u.patchFlag !== 32 && ot.push(u), u }
const ze = nd;

function nd(e, t = null, n = null, s = 0, r = null, i = !1) {
    if ((!e || e === Rf) && (e = Nt), Kr(e)) { const a = Ht(e, t, !0); return n && Ri(a, n), os > 0 && !i && ot && (a.shapeFlag & 6 ? ot[ot.indexOf(e)] = a : ot.push(a)), a.patchFlag |= -2, a }
    if (dd(e) && (e = e.__vccOpts), t) {
        t = sd(t);
        let { class: a, style: u } = t;
        a && !Oe(a) && (t.class = pi(a)), de(u) && (hl(u) && !Y(u) && (u = De({}, u)), t.style = _i(u))
    }
    const o = Oe(e) ? 1 : Ef(e) ? 128 : Qf(e) ? 64 : de(e) ? 4 : z(e) ? 2 : 0;
    return ne(e, t, n, s, r, o, i, !0)
}

function sd(e) { return e ? hl(e) || er in e ? De({}, e) : e : null }

function Ht(e, t, n = !1) { const { props: s, ref: r, patchFlag: i, children: o } = e, a = t ? rd(s || {}, t) : s; return { __v_isVNode: !0, __v_skip: !0, type: e.type, props: a, key: a && Hl(a), ref: t && t.ref ? n && r ? Y(r) ? r.concat(ks(t)) : [r, ks(t)] : ks(t) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: o, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== st ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Ht(e.ssContent), ssFallback: e.ssFallback && Ht(e.ssFallback), el: e.el, anchor: e.anchor } }

function Yr(e = " ", t = 0) { return ze(Zs, null, e, t) }

function _t(e) { return e == null || typeof e == "boolean" ? ze(Nt) : Y(e) ? ze(st, null, e.slice()) : typeof e == "object" ? $t(e) : ze(Zs, null, String(e)) }

function $t(e) { return e.el === null || e.memo ? e : Ht(e) }

function Ri(e, t) {
    let n = 0;
    const { shapeFlag: s } = e;
    if (t == null) t = null;
    else if (Y(t)) n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), Ri(e, r()), r._c && (r._d = !0));
            return
        } else { n = 32; const r = t._;!r && !(er in t) ? t._ctx = Et : r === 3 && Et && (Et.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) }
    else z(t) ? (t = { default: t, _ctx: Et }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Yr(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function rd(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === "class") t.class !== s.class && (t.class = pi([t.class, s.class]));
            else if (r === "style") t.style = _i([t.style, s.style]);
        else if (Ks(r)) {
            const i = t[r],
                o = s[r];
            o && i !== o && !(Y(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
        } else r !== "" && (t[r] = s[r])
    }
    return t
}

function ft(e, t, n, s = null) { Qe(e, t, 7, [n, s]) }
const id = Wl();
let od = 0;

function ad(e, t, n) {
    const s = e.type,
        r = (t ? t.appContext : e.appContext) || id,
        i = { uid: od++, vnode: e, type: s, parent: t, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, scope: new tl(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(r.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Ml(s, r), emitsOptions: Cl(s, r), emit: null, emitted: null, propsDefaults: le, inheritAttrs: s.inheritAttrs, ctx: le, data: le, props: le, attrs: le, slots: le, refs: le, setupState: le, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
    return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = df.bind(null, i), e.ce && e.ce(i), i
}
let Ne = null;
const In = () => Ne || Et,
    Sn = e => { Ne = e, e.scope.on() },
    rn = () => { Ne && Ne.scope.off(), Ne = null };

function Ul(e) { return e.vnode.shapeFlag & 4 }
let as = !1;

function ld(e, t = !1) {
    as = t;
    const { props: n, children: s } = e.vnode, r = Ul(e);
    Hf(e, n, r, t), Bf(e, s);
    const i = r ? cd(e, t) : void 0;
    return as = !1, i
}

function cd(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = _l(new Proxy(e.ctx, Mf));
    const { setup: s } = n;
    if (s) {
        const r = e.setupContext = s.length > 1 ? fd(e) : null;
        Sn(e), Vn();
        const i = Wt(s, e, 0, [e.props, r]);
        if (Hn(), rn(), Qa(i)) {
            if (i.then(rn, rn), t) return i.then(o => { Io(e, o, t) }).catch(o => { qs(o, e, 0) });
            e.asyncDep = i
        } else Io(e, i, t)
    } else jl(e, t)
}

function Io(e, t, n) { z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = El(t)), jl(e, n) }
let So;

function jl(e, t, n) {
    const s = e.type;
    if (!e.render) {
        if (!t && So && !s.render) {
            const r = s.template || Pi(e).template;
            if (r) {
                const { isCustomElement: i, compilerOptions: o } = e.appContext.config, { delimiters: a, compilerOptions: u } = s, f = De(De({ isCustomElement: i, delimiters: a }, o), u);
                s.render = So(r, f)
            }
        }
        e.render = s.render || at
    }
    Sn(e), Vn(), $f(e), Hn(), rn()
}

function ud(e) { return new Proxy(e.attrs, {get(t, n) { return Ke(e, "get", "$attrs"), t[n] } }) }

function fd(e) { const t = s => { e.exposed = s || {} }; let n; return {get attrs() { return n || (n = ud(e)) }, slots: e.slots, emit: e.emit, expose: t } }

function Mi(e) { if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(El(_l(e.exposed)), {get(t, n) { if (n in t) return t[n]; if (n in Ws) return Ws[n](e) } })) }

function dd(e) { return z(e) && "__vccOpts" in e }
const it = (e, t) => rf(e, t, as);

function Bl(e, t, n) { const s = arguments.length; return s === 2 ? de(t) && !Y(t) ? Kr(t) ? ze(e, null, [t]) : ze(e, t) : ze(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Kr(n) && (n = [n]), ze(e, t, n)) }
const hd = "3.2.39",
    _d = "http://www.w3.org/2000/svg",
    nn = typeof document < "u" ? document : null,
    Do = nn && nn.createElement("template"),
    pd = {
        insert: (e, t, n) => { t.insertBefore(e, n || null) },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, s) => { const r = t ? nn.createElementNS(_d, e) : nn.createElement(e, n ? { is: n } : void 0); return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r },
        createText: e => nn.createTextNode(e),
        createComment: e => nn.createComment(e),
        setText: (e, t) => { e.nodeValue = t },
        setElementText: (e, t) => { e.textContent = t },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => nn.querySelector(e),
        setScopeId(e, t) { e.setAttribute(t, "") },
        cloneNode(e) { const t = e.cloneNode(!0); return "_value" in e && (t._value = e._value), t },
        insertStaticContent(e, t, n, s, r, i) {
            const o = n ? n.previousSibling : t.lastChild;
            if (r && (r === i || r.nextSibling))
                for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)););
            else {
                Do.innerHTML = s ? `<svg>${e}</svg>` : e;
                const a = Do.content;
                if (s) {
                    const u = a.firstChild;
                    for (; u.firstChild;) a.appendChild(u.firstChild);
                    a.removeChild(u)
                }
                t.insertBefore(a, n)
            }
            return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    };

function md(e, t, n) {
    const s = e._vtc;
    s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

function gd(e, t, n) {
    const s = e.style,
        r = Oe(n);
    if (n && !r) {
        for (const i in n) Gr(s, i, n[i]);
        if (t && !Oe(t))
            for (const i in t) n[i] == null && Gr(s, i, "")
    } else {
        const i = s.display;
        r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = i)
    }
}
const Po = /\s*!important$/;

function Gr(e, t, n) {
    if (Y(n)) n.forEach(s => Gr(e, t, s));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const s = Ed(e, t);
        Po.test(n) ? e.setProperty(Wn(s), n.replace(Po, ""), "important") : e[s] = n
    }
}
const ko = ["Webkit", "Moz", "ms"],
    Er = {};

function Ed(e, t) {
    const n = Er[t];
    if (n) return n;
    let s = On(t);
    if (s !== "filter" && s in e) return Er[t] = s;
    s = el(s);
    for (let r = 0; r < ko.length; r++) { const i = ko[r] + s; if (i in e) return Er[t] = i }
    return t
}
const Ro = "http://www.w3.org/1999/xlink";

function bd(e, t, n, s, r) {
    if (s && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(Ro, t.slice(6, t.length)) : e.setAttributeNS(Ro, t, n);
    else {
        const i = hu(t);
        n == null || i && !Xa(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n)
    }
}

function vd(e, t, n, s, r, i, o) {
    if (t === "innerHTML" || t === "textContent") { s && o(s, r, i), e[t] = n == null ? "" : n; return }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
        e._value = n;
        const u = n == null ? "" : n;
        (e.value !== u || e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
        return
    }
    let a = !1;
    if (n === "" || n == null) {
        const u = typeof e[t];
        u === "boolean" ? n = Xa(n) : n == null && u === "string" ? (n = "", a = !0) : u === "number" && (n = 0, a = !0)
    }
    try { e[t] = n } catch {}
    a && e.removeAttribute(t)
}
const [Kl, Td] = (() => {
    let e = Date.now,
        t = !1;
    if (typeof window < "u") {
        Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
        const n = navigator.userAgent.match(/firefox\/(\d+)/i);
        t = !!(n && Number(n[1]) <= 53)
    }
    return [e, t]
})();
let Xr = 0;
const yd = Promise.resolve(),
    Ad = () => { Xr = 0 },
    Cd = () => Xr || (yd.then(Ad), Xr = Kl());

function Nd(e, t, n, s) { e.addEventListener(t, n, s) }

function Ld(e, t, n, s) { e.removeEventListener(t, n, s) }

function Od(e, t, n, s, r = null) {
    const i = e._vei || (e._vei = {}),
        o = i[t];
    if (s && o) o.value = s;
    else {
        const [a, u] = wd(t);
        if (s) {
            const f = i[t] = Id(s, r);
            Nd(e, a, f, u)
        } else o && (Ld(e, a, o, u), i[t] = void 0)
    }
}
const Mo = /(?:Once|Passive|Capture)$/;

function wd(e) { let t; if (Mo.test(e)) { t = {}; let s; for (; s = e.match(Mo);) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0 } return [e[2] === ":" ? e.slice(3) : Wn(e.slice(2)), t] }

function Id(e, t) {
    const n = s => {
        const r = s.timeStamp || Kl();
        (Td || r >= n.attached - 1) && Qe(Sd(s, n.value), t, 5, [s])
    };
    return n.value = e, n.attached = Cd(), n
}

function Sd(e, t) { if (Y(t)) { const n = e.stopImmediatePropagation; return e.stopImmediatePropagation = () => { n.call(e), e._stopped = !0 }, t.map(s => r => !r._stopped && s && s(r)) } else return t }
const $o = /^on[a-z]/,
    Dd = (e, t, n, s, r = !1, i, o, a, u) => { t === "class" ? md(e, s, r) : t === "style" ? gd(e, n, s) : Ks(t) ? mi(t) || Od(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Pd(e, t, s, r)) ? vd(e, t, s, i, o, a, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), bd(e, t, s, r)) };

function Pd(e, t, n, s) { return s ? !!(t === "innerHTML" || t === "textContent" || t in e && $o.test(t) && z(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || $o.test(t) && Oe(n) ? !1 : t in e }
const kd = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
Cf.props;
const Rd = De({ patchProp: Dd }, pd);
let xo;

function Md() { return xo || (xo = Xf(Rd)) }
const $d = (...e) => {
    const t = Md().createApp(...e),
        { mount: n } = t;
    return t.mount = s => { const r = xd(s); if (!r) return; const i = t._component;!z(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = ""; const o = n(r, !1, r instanceof SVGElement); return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o }, t
};

function xd(e) { return Oe(e) ? document.querySelector(e) : e }
const Fd = "./assets/1.f06e828c.png",
    Wd = "./assets/2.dcd85395.png";
/*!
 * shared v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const qr = typeof window < "u",
    Vd = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    Yt = e => Vd ? Symbol(e) : e,
    Hd = (e, t, n) => Ud({ l: e, k: t, s: n }),
    Ud = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    Ee = e => typeof e == "number" && isFinite(e),
    jd = e => xi(e) === "[object Date]",
    Ut = e => xi(e) === "[object RegExp]",
    tr = e => K(e) && Object.keys(e).length === 0;

function Bd(e, t) { typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack)) }
const ye = Object.assign;
let Fo;
const Jn = () => Fo || (Fo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Wo(e) { return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") }
const Kd = Object.prototype.hasOwnProperty;

function $i(e, t) { return Kd.call(e, t) }
const ce = Array.isArray,
    he = e => typeof e == "function",
    x = e => typeof e == "string",
    ee = e => typeof e == "boolean",
    ue = e => e !== null && typeof e == "object",
    Yl = Object.prototype.toString,
    xi = e => Yl.call(e),
    K = e => xi(e) === "[object Object]",
    Yd = e => e == null ? "" : ce(e) || K(e) && e.toString === Yl ? JSON.stringify(e, null, 2) : String(e);
/*!
 * message-compiler v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const re = { EXPECTED_TOKEN: 1, INVALID_TOKEN_IN_PLACEHOLDER: 2, UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3, UNKNOWN_ESCAPE_SEQUENCE: 4, INVALID_UNICODE_ESCAPE_SEQUENCE: 5, UNBALANCED_CLOSING_BRACE: 6, UNTERMINATED_CLOSING_BRACE: 7, EMPTY_PLACEHOLDER: 8, NOT_ALLOW_NEST_PLACEHOLDER: 9, INVALID_LINKED_FORMAT: 10, MUST_HAVE_MESSAGES_IN_PLURAL: 11, UNEXPECTED_EMPTY_LINKED_MODIFIER: 12, UNEXPECTED_EMPTY_LINKED_KEY: 13, UNEXPECTED_LEXICAL_ANALYSIS: 14, __EXTEND_POINT__: 15 };

function nr(e, t, n = {}) { const { domain: s, messages: r, args: i } = n, o = e, a = new SyntaxError(String(o)); return a.code = e, t && (a.location = t), a.domain = s, a }

function Gd(e) { throw e }

function Xd(e, t, n) { return { line: e, column: t, offset: n } }

function zr(e, t, n) { const s = { start: e, end: t }; return n != null && (s.source = n), s }
const yt = " ",
    qd = "\r",
    Me = `
`,
    zd = String.fromCharCode(8232),
    Qd = String.fromCharCode(8233);

function Jd(e) {
    const t = e;
    let n = 0,
        s = 1,
        r = 1,
        i = 0;
    const o = R => t[R] === qd && t[R + 1] === Me,
        a = R => t[R] === Me,
        u = R => t[R] === Qd,
        f = R => t[R] === zd,
        d = R => o(R) || a(R) || u(R) || f(R),
        g = () => n,
        m = () => s,
        v = () => r,
        I = () => i,
        C = R => o(R) || u(R) || f(R) ? Me : t[R],
        L = () => C(n),
        p = () => C(n + i);

    function N() { return i = 0, d(n) && (s++, r = 0), o(n) && n++, n++, r++, t[n] }

    function O() { return o(n + i) && i++, i++, t[n + i] }

    function b() { n = 0, s = 1, r = 1, i = 0 }

    function T(R = 0) { i = R }

    function P() {
        const R = n + i;
        for (; R !== n;) N();
        i = 0
    }
    return { index: g, line: m, column: v, peekOffset: I, charAt: C, currentChar: L, currentPeek: p, next: N, peek: O, reset: b, resetPeek: T, skipToPeek: P }
}
const Rt = void 0,
    Vo = "'",
    Zd = "tokenizer";

function eh(e, t = {}) {
    const n = t.location !== !1,
        s = Jd(e),
        r = () => s.index(),
        i = () => Xd(s.line(), s.column(), s.index()),
        o = i(),
        a = r(),
        u = { currentType: 14, offset: a, startLoc: o, endLoc: o, lastType: 14, lastOffset: a, lastStartLoc: o, lastEndLoc: o, braceNest: 0, inLinked: !1, text: "" },
        f = () => u,
        { onError: d } = t;

    function g(c, l, h, ...E) {
        const y = f();
        if (l.column += h, l.offset += h, d) {
            const w = zr(y.startLoc, l),
                M = nr(c, w, { domain: Zd, args: E });
            d(M)
        }
    }

    function m(c, l, h) { c.endLoc = i(), c.currentType = l; const E = { type: l }; return n && (E.loc = zr(c.startLoc, c.endLoc)), h != null && (E.value = h), E }
    const v = c => m(c, 14);

    function I(c, l) { return c.currentChar() === l ? (c.next(), l) : (g(re.EXPECTED_TOKEN, i(), 0, l), "") }

    function C(c) { let l = ""; for (; c.currentPeek() === yt || c.currentPeek() === Me;) l += c.currentPeek(), c.peek(); return l }

    function L(c) { const l = C(c); return c.skipToPeek(), l }

    function p(c) { if (c === Rt) return !1; const l = c.charCodeAt(0); return l >= 97 && l <= 122 || l >= 65 && l <= 90 || l === 95 }

    function N(c) { if (c === Rt) return !1; const l = c.charCodeAt(0); return l >= 48 && l <= 57 }

    function O(c, l) {
        const { currentType: h } = l;
        if (h !== 2) return !1;
        C(c);
        const E = p(c.currentPeek());
        return c.resetPeek(), E
    }

    function b(c, l) {
        const { currentType: h } = l;
        if (h !== 2) return !1;
        C(c);
        const E = c.currentPeek() === "-" ? c.peek() : c.currentPeek(),
            y = N(E);
        return c.resetPeek(), y
    }

    function T(c, l) {
        const { currentType: h } = l;
        if (h !== 2) return !1;
        C(c);
        const E = c.currentPeek() === Vo;
        return c.resetPeek(), E
    }

    function P(c, l) {
        const { currentType: h } = l;
        if (h !== 8) return !1;
        C(c);
        const E = c.currentPeek() === ".";
        return c.resetPeek(), E
    }

    function R(c, l) {
        const { currentType: h } = l;
        if (h !== 9) return !1;
        C(c);
        const E = p(c.currentPeek());
        return c.resetPeek(), E
    }

    function F(c, l) {
        const { currentType: h } = l;
        if (!(h === 8 || h === 12)) return !1;
        C(c);
        const E = c.currentPeek() === ":";
        return c.resetPeek(), E
    }

    function V(c, l) {
        const { currentType: h } = l;
        if (h !== 10) return !1;
        const E = () => { const w = c.currentPeek(); return w === "{" ? p(c.peek()) : w === "@" || w === "%" || w === "|" || w === ":" || w === "." || w === yt || !w ? !1 : w === Me ? (c.peek(), E()) : p(w) },
            y = E();
        return c.resetPeek(), y
    }

    function H(c) { C(c); const l = c.currentPeek() === "|"; return c.resetPeek(), l }

    function j(c) {
        const l = C(c),
            h = c.currentPeek() === "%" && c.peek() === "{";
        return c.resetPeek(), { isModulo: h, hasSpace: l.length > 0 }
    }

    function te(c, l = !0) {
        const h = (y = !1, w = "", M = !1) => { const S = c.currentPeek(); return S === "{" ? w === "%" ? !1 : y : S === "@" || !S ? w === "%" ? !0 : y : S === "%" ? (c.peek(), h(y, "%", !0)) : S === "|" ? w === "%" || M ? !0 : !(w === yt || w === Me) : S === yt ? (c.peek(), h(!0, yt, M)) : S === Me ? (c.peek(), h(!0, Me, M)) : !0 },
            E = h();
        return l && c.resetPeek(), E
    }

    function q(c, l) { const h = c.currentChar(); return h === Rt ? Rt : l(h) ? (c.next(), h) : null }

    function ge(c) { return q(c, h => { const E = h.charCodeAt(0); return E >= 97 && E <= 122 || E >= 65 && E <= 90 || E >= 48 && E <= 57 || E === 95 || E === 36 }) }

    function Ae(c) { return q(c, h => { const E = h.charCodeAt(0); return E >= 48 && E <= 57 }) }

    function X(c) { return q(c, h => { const E = h.charCodeAt(0); return E >= 48 && E <= 57 || E >= 65 && E <= 70 || E >= 97 && E <= 102 }) }

    function B(c) {
        let l = "",
            h = "";
        for (; l = Ae(c);) h += l;
        return h
    }

    function J(c) { L(c); const l = c.currentChar(); return l !== "%" && g(re.EXPECTED_TOKEN, i(), 0, l), c.next(), "%" }

    function fe(c) {
        let l = "";
        for (;;) {
            const h = c.currentChar();
            if (h === "{" || h === "}" || h === "@" || h === "|" || !h) break;
            if (h === "%")
                if (te(c)) l += h, c.next();
                else break;
            else if (h === yt || h === Me)
                if (te(c)) l += h, c.next();
                else {
                    if (H(c)) break;
                    l += h, c.next()
                }
            else l += h, c.next()
        }
        return l
    }

    function Fe(c) {
        L(c);
        let l = "",
            h = "";
        for (; l = ge(c);) h += l;
        return c.currentChar() === Rt && g(re.UNTERMINATED_CLOSING_BRACE, i(), 0), h
    }

    function Pe(c) { L(c); let l = ""; return c.currentChar() === "-" ? (c.next(), l += `-${B(c)}`) : l += B(c), c.currentChar() === Rt && g(re.UNTERMINATED_CLOSING_BRACE, i(), 0), l }

    function ve(c) {
        L(c), I(c, "'");
        let l = "",
            h = "";
        const E = w => w !== Vo && w !== Me;
        for (; l = q(c, E);) l === "\\" ? h += Te(c) : h += l;
        const y = c.currentChar();
        return y === Me || y === Rt ? (g(re.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), y === Me && (c.next(), I(c, "'")), h) : (I(c, "'"), h)
    }

    function Te(c) {
        const l = c.currentChar();
        switch (l) {
            case "\\":
            case "'":
                return c.next(), `\\${l}`;
            case "u":
                return we(c, l, 4);
            case "U":
                return we(c, l, 6);
            default:
                return g(re.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, l), ""
        }
    }

    function we(c, l, h) {
        I(c, l);
        let E = "";
        for (let y = 0; y < h; y++) {
            const w = X(c);
            if (!w) { g(re.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${l}${E}${c.currentChar()}`); break }
            E += w
        }
        return `\\${l}${E}`
    }

    function Ie(c) {
        L(c);
        let l = "",
            h = "";
        const E = y => y !== "{" && y !== "}" && y !== yt && y !== Me;
        for (; l = q(c, E);) h += l;
        return h
    }

    function je(c) {
        let l = "",
            h = "";
        for (; l = ge(c);) h += l;
        return h
    }

    function _e(c) { const l = (h = !1, E) => { const y = c.currentChar(); return y === "{" || y === "%" || y === "@" || y === "|" || !y || y === yt ? E : y === Me ? (E += y, c.next(), l(h, E)) : (E += y, c.next(), l(!0, E)) }; return l(!1, "") }

    function pe(c) { L(c); const l = I(c, "|"); return L(c), l }

    function We(c, l) {
        let h = null;
        switch (c.currentChar()) {
            case "{":
                return l.braceNest >= 1 && g(re.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), c.next(), h = m(l, 2, "{"), L(c), l.braceNest++, h;
            case "}":
                return l.braceNest > 0 && l.currentType === 2 && g(re.EMPTY_PLACEHOLDER, i(), 0), c.next(), h = m(l, 3, "}"), l.braceNest--, l.braceNest > 0 && L(c), l.inLinked && l.braceNest === 0 && (l.inLinked = !1), h;
            case "@":
                return l.braceNest > 0 && g(re.UNTERMINATED_CLOSING_BRACE, i(), 0), h = Ce(c, l) || v(l), l.braceNest = 0, h;
            default:
                let y = !0,
                    w = !0,
                    M = !0;
                if (H(c)) return l.braceNest > 0 && g(re.UNTERMINATED_CLOSING_BRACE, i(), 0), h = m(l, 1, pe(c)), l.braceNest = 0, l.inLinked = !1, h;
                if (l.braceNest > 0 && (l.currentType === 5 || l.currentType === 6 || l.currentType === 7)) return g(re.UNTERMINATED_CLOSING_BRACE, i(), 0), l.braceNest = 0, ke(c, l);
                if (y = O(c, l)) return h = m(l, 5, Fe(c)), L(c), h;
                if (w = b(c, l)) return h = m(l, 6, Pe(c)), L(c), h;
                if (M = T(c, l)) return h = m(l, 7, ve(c)), L(c), h;
                if (!y && !w && !M) return h = m(l, 13, Ie(c)), g(re.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, h.value), L(c), h;
                break
        }
        return h
    }

    function Ce(c, l) {
        const { currentType: h } = l;
        let E = null;
        const y = c.currentChar();
        switch ((h === 8 || h === 9 || h === 12 || h === 10) && (y === Me || y === yt) && g(re.INVALID_LINKED_FORMAT, i(), 0), y) {
            case "@":
                return c.next(), E = m(l, 8, "@"), l.inLinked = !0, E;
            case ".":
                return L(c), c.next(), m(l, 9, ".");
            case ":":
                return L(c), c.next(), m(l, 10, ":");
            default:
                return H(c) ? (E = m(l, 1, pe(c)), l.braceNest = 0, l.inLinked = !1, E) : P(c, l) || F(c, l) ? (L(c), Ce(c, l)) : R(c, l) ? (L(c), m(l, 12, je(c))) : V(c, l) ? (L(c), y === "{" ? We(c, l) || E : m(l, 11, _e(c))) : (h === 8 && g(re.INVALID_LINKED_FORMAT, i(), 0), l.braceNest = 0, l.inLinked = !1, ke(c, l))
        }
    }

    function ke(c, l) {
        let h = { type: 14 };
        if (l.braceNest > 0) return We(c, l) || v(l);
        if (l.inLinked) return Ce(c, l) || v(l);
        switch (c.currentChar()) {
            case "{":
                return We(c, l) || v(l);
            case "}":
                return g(re.UNBALANCED_CLOSING_BRACE, i(), 0), c.next(), m(l, 3, "}");
            case "@":
                return Ce(c, l) || v(l);
            default:
                if (H(c)) return h = m(l, 1, pe(c)), l.braceNest = 0, l.inLinked = !1, h;
                const { isModulo: y, hasSpace: w } = j(c);
                if (y) return w ? m(l, 0, fe(c)) : m(l, 4, J(c));
                if (te(c)) return m(l, 0, fe(c));
                break
        }
        return h
    }

    function Xe() { const { currentType: c, offset: l, startLoc: h, endLoc: E } = u; return u.lastType = c, u.lastOffset = l, u.lastStartLoc = h, u.lastEndLoc = E, u.offset = r(), u.startLoc = i(), s.currentChar() === Rt ? m(u, 14) : ke(s, u) }
    return { nextToken: Xe, currentOffset: r, currentPosition: i, context: f }
}
const th = "parser",
    nh = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function sh(e, t, n) {
    switch (e) {
        case "\\\\":
            return "\\";
        case "\\'":
            return "'";
        default:
            { const s = parseInt(t || n, 16); return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "\uFFFD" }
    }
}

function rh(e = {}) {
    const t = e.location !== !1,
        { onError: n } = e;

    function s(p, N, O, b, ...T) {
        const P = p.currentPosition();
        if (P.offset += b, P.column += b, n) {
            const R = zr(O, P),
                F = nr(N, R, { domain: th, args: T });
            n(F)
        }
    }

    function r(p, N, O) { const b = { type: p, start: N, end: N }; return t && (b.loc = { start: O, end: O }), b }

    function i(p, N, O, b) { p.end = N, b && (p.type = b), t && p.loc && (p.loc.end = O) }

    function o(p, N) {
        const O = p.context(),
            b = r(3, O.offset, O.startLoc);
        return b.value = N, i(b, p.currentOffset(), p.currentPosition()), b
    }

    function a(p, N) {
        const O = p.context(),
            { lastOffset: b, lastStartLoc: T } = O,
            P = r(5, b, T);
        return P.index = parseInt(N, 10), p.nextToken(), i(P, p.currentOffset(), p.currentPosition()), P
    }

    function u(p, N) {
        const O = p.context(),
            { lastOffset: b, lastStartLoc: T } = O,
            P = r(4, b, T);
        return P.key = N, p.nextToken(), i(P, p.currentOffset(), p.currentPosition()), P
    }

    function f(p, N) {
        const O = p.context(),
            { lastOffset: b, lastStartLoc: T } = O,
            P = r(9, b, T);
        return P.value = N.replace(nh, sh), p.nextToken(), i(P, p.currentOffset(), p.currentPosition()), P
    }

    function d(p) {
        const N = p.nextToken(),
            O = p.context(),
            { lastOffset: b, lastStartLoc: T } = O,
            P = r(8, b, T);
        return N.type !== 12 ? (s(p, re.UNEXPECTED_EMPTY_LINKED_MODIFIER, O.lastStartLoc, 0), P.value = "", i(P, b, T), { nextConsumeToken: N, node: P }) : (N.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, dt(N)), P.value = N.value || "", i(P, p.currentOffset(), p.currentPosition()), { node: P })
    }

    function g(p, N) {
        const O = p.context(),
            b = r(7, O.offset, O.startLoc);
        return b.value = N, i(b, p.currentOffset(), p.currentPosition()), b
    }

    function m(p) {
        const N = p.context(),
            O = r(6, N.offset, N.startLoc);
        let b = p.nextToken();
        if (b.type === 9) {
            const T = d(p);
            O.modifier = T.node, b = T.nextConsumeToken || p.nextToken()
        }
        switch (b.type !== 10 && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, dt(b)), b = p.nextToken(), b.type === 2 && (b = p.nextToken()), b.type) {
            case 11:
                b.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, dt(b)), O.key = g(p, b.value || "");
                break;
            case 5:
                b.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, dt(b)), O.key = u(p, b.value || "");
                break;
            case 6:
                b.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, dt(b)), O.key = a(p, b.value || "");
                break;
            case 7:
                b.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, dt(b)), O.key = f(p, b.value || "");
                break;
            default:
                s(p, re.UNEXPECTED_EMPTY_LINKED_KEY, N.lastStartLoc, 0);
                const T = p.context(),
                    P = r(7, T.offset, T.startLoc);
                return P.value = "", i(P, T.offset, T.startLoc), O.key = P, i(O, T.offset, T.startLoc), { nextConsumeToken: b, node: O }
        }
        return i(O, p.currentOffset(), p.currentPosition()), { node: O }
    }

    function v(p) {
        const N = p.context(),
            O = N.currentType === 1 ? p.currentOffset() : N.offset,
            b = N.currentType === 1 ? N.endLoc : N.startLoc,
            T = r(2, O, b);
        T.items = [];
        let P = null;
        do {
            const V = P || p.nextToken();
            switch (P = null, V.type) {
                case 0:
                    V.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, dt(V)), T.items.push(o(p, V.value || ""));
                    break;
                case 6:
                    V.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, dt(V)), T.items.push(a(p, V.value || ""));
                    break;
                case 5:
                    V.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, dt(V)), T.items.push(u(p, V.value || ""));
                    break;
                case 7:
                    V.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, dt(V)), T.items.push(f(p, V.value || ""));
                    break;
                case 8:
                    const H = m(p);
                    T.items.push(H.node), P = H.nextConsumeToken || null;
                    break
            }
        } while (N.currentType !== 14 && N.currentType !== 1);
        const R = N.currentType === 1 ? N.lastOffset : p.currentOffset(),
            F = N.currentType === 1 ? N.lastEndLoc : p.currentPosition();
        return i(T, R, F), T
    }

    function I(p, N, O, b) {
        const T = p.context();
        let P = b.items.length === 0;
        const R = r(1, N, O);
        R.cases = [], R.cases.push(b);
        do {
            const F = v(p);
            P || (P = F.items.length === 0), R.cases.push(F)
        } while (T.currentType !== 14);
        return P && s(p, re.MUST_HAVE_MESSAGES_IN_PLURAL, O, 0), i(R, p.currentOffset(), p.currentPosition()), R
    }

    function C(p) {
        const N = p.context(),
            { offset: O, startLoc: b } = N,
            T = v(p);
        return N.currentType === 14 ? T : I(p, O, b, T)
    }

    function L(p) {
        const N = eh(p, ye({}, e)),
            O = N.context(),
            b = r(0, O.offset, O.startLoc);
        return t && b.loc && (b.loc.source = p), b.body = C(N), O.currentType !== 14 && s(N, re.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, p[O.offset] || ""), i(b, N.currentOffset(), N.currentPosition()), b
    }
    return { parse: L }
}

function dt(e) { if (e.type === 14) return "EOF"; const t = (e.value || "").replace(/\r?\n/gu, "\\n"); return t.length > 10 ? t.slice(0, 9) + "\u2026" : t }

function ih(e, t = {}) { const n = { ast: e, helpers: new Set }; return { context: () => n, helper: i => (n.helpers.add(i), i) } }

function Ho(e, t) { for (let n = 0; n < e.length; n++) Fi(e[n], t) }

function Fi(e, t) {
    switch (e.type) {
        case 1:
            Ho(e.cases, t), t.helper("plural");
            break;
        case 2:
            Ho(e.items, t);
            break;
        case 6:
            Fi(e.key, t), t.helper("linked"), t.helper("type");
            break;
        case 5:
            t.helper("interpolate"), t.helper("list");
            break;
        case 4:
            t.helper("interpolate"), t.helper("named");
            break
    }
}

function oh(e, t = {}) {
    const n = ih(e);
    n.helper("normalize"), e.body && Fi(e.body, n);
    const s = n.context();
    e.helpers = Array.from(s.helpers)
}

function ah(e, t) {
    const { sourceMap: n, filename: s, breakLineCode: r, needIndent: i } = t, o = { source: e.loc.source, filename: s, code: "", column: 1, line: 1, offset: 0, map: void 0, breakLineCode: r, needIndent: i, indentLevel: 0 }, a = () => o;

    function u(C, L) { o.code += C }

    function f(C, L = !0) {
        const p = L ? r : "";
        u(i ? p + "  ".repeat(C) : p)
    }

    function d(C = !0) {
        const L = ++o.indentLevel;
        C && f(L)
    }

    function g(C = !0) {
        const L = --o.indentLevel;
        C && f(L)
    }

    function m() { f(o.indentLevel) }
    return { context: a, push: u, indent: d, deindent: g, newline: m, helper: C => `_${C}`, needIndent: () => o.needIndent }
}

function lh(e, t) {
    const { helper: n } = e;
    e.push(`${n("linked")}(`), Dn(e, t.key), t.modifier ? (e.push(", "), Dn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function ch(e, t) {
    const { helper: n, needIndent: s } = e;
    e.push(`${n("normalize")}([`), e.indent(s());
    const r = t.items.length;
    for (let i = 0; i < r && (Dn(e, t.items[i]), i !== r - 1); i++) e.push(", ");
    e.deindent(s()), e.push("])")
}

function uh(e, t) {
    const { helper: n, needIndent: s } = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`), e.indent(s());
        const r = t.cases.length;
        for (let i = 0; i < r && (Dn(e, t.cases[i]), i !== r - 1); i++) e.push(", ");
        e.deindent(s()), e.push("])")
    }
}

function fh(e, t) { t.body ? Dn(e, t.body) : e.push("null") }

function Dn(e, t) {
    const { helper: n } = e;
    switch (t.type) {
        case 0:
            fh(e, t);
            break;
        case 1:
            uh(e, t);
            break;
        case 2:
            ch(e, t);
            break;
        case 6:
            lh(e, t);
            break;
        case 8:
            e.push(JSON.stringify(t.value), t);
            break;
        case 7:
            e.push(JSON.stringify(t.value), t);
            break;
        case 5:
            e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
            break;
        case 4:
            e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
            break;
        case 9:
            e.push(JSON.stringify(t.value), t);
            break;
        case 3:
            e.push(JSON.stringify(t.value), t);
            break
    }
}
const dh = (e, t = {}) => {
        const n = x(t.mode) ? t.mode : "normal",
            s = x(t.filename) ? t.filename : "message.intl",
            r = !!t.sourceMap,
            i = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
            o = t.needIndent ? t.needIndent : n !== "arrow",
            a = e.helpers || [],
            u = ah(e, { mode: n, filename: s, sourceMap: r, breakLineCode: i, needIndent: o });
        u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(o), a.length > 0 && (u.push(`const { ${a.map(g=>`${g}: _${g}`).join(", ")} } = ctx`),u.newline()),u.push("return "),Dn(u,e),u.deindent(o),u.push("}");const{code:f,map:d}=u.context();return{ast:e,code:f,map:d?d.toJSON():void 0}};function hh(e,t={}){const n=ye({},t),r=rh(n).parse(e);return oh(r,n),dh(r,n)}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Gl={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Gt=[];Gt[0]={w:[0],i:[3,0],["["]:[4],o:[7]};Gt[1]={w:[1],["."]:[2],["["]:[4],o:[7]};Gt[2]={w:[2],i:[3,0],[0]:[3,0]};Gt[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};Gt[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};Gt[5]={["'"]:[4,0],o:8,l:[5,0]};Gt[6]={['"']:[4,0],o:8,l:[6,0]};const _h=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function ph(e){return _h.test(e)}function mh(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function gh(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Eh(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:ph(t)?mh(t):"*"+t}function bh(e){const t=[];let n=-1,s=0,r=0,i,o,a,u,f,d,g;const m=[];m[0]=()=>{o===void 0?o=a:o+=a},m[1]=()=>{o!==void 0&&(t.push(o),o=void 0)},m[2]=()=>{m[0](),r++},m[3]=()=>{if(r>0)r--,s=4,m[0]();else{if(r=0,o===void 0||(o=Eh(o),o===!1))return!1;m[1]()}};function v(){const I=e[n+1];if(s===5&&I==="'"||s===6&&I==='"')return n++,a="\\"+I,m[0](),!0}for(;s!==null;)if(n++,i=e[n],!(i==="\\"&&v())){if(u=gh(i),g=Gt[s],f=g[u]||g.l||8,f===8||(s=f[0],f[1]!==void 0&&(d=m[f[1]],d&&(a=i,d()===!1))))return;if(s===7)return t}}const Uo=new Map;function vh(e,t){return ue(e)?e[t]:null}function Th(e,t){if(!ue(e))return null;let n=Uo.get(t);if(n||(n=bh(t),n&&Uo.set(t,n)),!n)return null;const s=n.length;let r=e,i=0;for(;i<s;){const o=r[n[i]];if(o===void 0)return null;r=o,i++}return r}const yh=e=>e,Ah=e=>"",Ch="text",Nh=e=>e.length===0?"":e.join(""),Lh=Yd;function jo(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Oh(e){const t=Ee(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(Ee(e.named.count)||Ee(e.named.n))?Ee(e.named.count)?e.named.count:Ee(e.named.n)?e.named.n:t:t}function wh(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Ih(e={}){const t=e.locale,n=Oh(e),s=ue(e.pluralRules)&&x(t)&&he(e.pluralRules[t])?e.pluralRules[t]:jo,r=ue(e.pluralRules)&&x(t)&&he(e.pluralRules[t])?jo:void 0,i=p=>p[s(n,p.length,r)],o=e.list||[],a=p=>o[p],u=e.named||{};Ee(e.pluralIndex)&&wh(n,u);const f=p=>u[p];function d(p){const N=he(e.messages)?e.messages(p):ue(e.messages)?e.messages[p]:!1;return N||(e.parent?e.parent.message(p):Ah)}const g=p=>e.modifiers?e.modifiers[p]:yh,m=K(e.processor)&&he(e.processor.normalize)?e.processor.normalize:Nh,v=K(e.processor)&&he(e.processor.interpolate)?e.processor.interpolate:Lh,I=K(e.processor)&&x(e.processor.type)?e.processor.type:Ch,L={list:a,named:f,plural:i,linked:(p,...N)=>{const[O,b]=N;let T="text",P="";N.length===1?ue(O)?(P=O.modifier||P,T=O.type||T):x(O)&&(P=O||P):N.length===2&&(x(O)&&(P=O||P),x(b)&&(T=b||T));let R=d(p)(L);return T==="vnode"&&ce(R)&&P&&(R=R[0]),P?g(P)(R,T):R},message:d,type:I,interpolate:v,normalize:m};return L}let ls=null;function Sh(e){ls=e}function Dh(e,t,n){ls&&ls.emit(Gl.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const Ph=kh(Gl.FunctionTranslate);function kh(e){return t=>ls&&ls.emit(e,t)}const Rh={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function Mh(e,t,n){return[...new Set([n,...ce(t)?t:ue(t)?Object.keys(t):x(t)?[t]:[n]])]}function Xl(e,t,n){const s=x(n)?n:us,r=e;r.__localeChainCache||(r.__localeChainCache=new Map);let i=r.__localeChainCache.get(s);if(!i){i=[];let o=[n];for(;ce(o);)o=Bo(i,o,t);const a=ce(t)||!K(t)?t:t.default?t.default:null;o=x(a)?[a]:a,ce(o)&&Bo(i,o,!1),r.__localeChainCache.set(s,i)}return i}function Bo(e,t,n){let s=!0;for(let r=0;r<t.length&&ee(s);r++){const i=t[r];x(i)&&(s=$h(e,t[r],n))}return s}function $h(e,t,n){let s;const r=t.split("-");do{const i=r.join("-");s=xh(e,i,n),r.splice(-1,1)}while(r.length&&s===!0);return s}function xh(e,t,n){let s=!1;if(!e.includes(t)&&(s=!0,t)){s=t[t.length-1]!=="!";const r=t.replace(/!/g,"");e.push(r),(ce(n)||K(n))&&n[r]&&(s=n[r])}return s}const Fh="9.2.2",sr=-1,us="en-US",Ko="",Yo=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function Wh(){return{upper:(e,t)=>t==="text"&&x(e)?e.toUpperCase():t==="vnode"&&ue(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&x(e)?e.toLowerCase():t==="vnode"&&ue(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&x(e)?Yo(e):t==="vnode"&&ue(e)&&"__v_isVNode"in e?Yo(e.children):e}}let ql;function Vh(e){ql=e}let zl;function Hh(e){zl=e}let Ql;function Uh(e){Ql=e}let Jl=null;const Go=e=>{Jl=e},jh=()=>Jl;let Zl=null;const Xo=e=>{Zl=e},Bh=()=>Zl;let qo=0;function Kh(e={}){const t=x(e.version)?e.version:Fh,n=x(e.locale)?e.locale:us,s=ce(e.fallbackLocale)||K(e.fallbackLocale)||x(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,r=K(e.messages)?e.messages:{[n]:{}},i=K(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},o=K(e.numberFormats)?e.numberFormats:{[n]:{}},a=ye({},e.modifiers||{},Wh()),u=e.pluralRules||{},f=he(e.missing)?e.missing:null,d=ee(e.missingWarn)||Ut(e.missingWarn)?e.missingWarn:!0,g=ee(e.fallbackWarn)||Ut(e.fallbackWarn)?e.fallbackWarn:!0,m=!!e.fallbackFormat,v=!!e.unresolving,I=he(e.postTranslation)?e.postTranslation:null,C=K(e.processor)?e.processor:null,L=ee(e.warnHtmlMessage)?e.warnHtmlMessage:!0,p=!!e.escapeParameter,N=he(e.messageCompiler)?e.messageCompiler:ql,O=he(e.messageResolver)?e.messageResolver:zl||vh,b=he(e.localeFallbacker)?e.localeFallbacker:Ql||Mh,T=ue(e.fallbackContext)?e.fallbackContext:void 0,P=he(e.onWarn)?e.onWarn:Bd,R=e,F=ue(R.__datetimeFormatters)?R.__datetimeFormatters:new Map,V=ue(R.__numberFormatters)?R.__numberFormatters:new Map,H=ue(R.__meta)?R.__meta:{};qo++;const j={version:t,cid:qo,locale:n,fallbackLocale:s,messages:r,modifiers:a,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:g,fallbackFormat:m,unresolving:v,postTranslation:I,processor:C,warnHtmlMessage:L,escapeParameter:p,messageCompiler:N,messageResolver:O,localeFallbacker:b,fallbackContext:T,onWarn:P,__meta:H};return j.datetimeFormats=i,j.numberFormats=o,j.__datetimeFormatters=F,j.__numberFormatters=V,__INTLIFY_PROD_DEVTOOLS__&&Dh(j,t,H),j}function Wi(e,t,n,s,r){const{missing:i,onWarn:o}=e;if(i!==null){const a=i(e,n,t,r);return x(a)?a:t}else return t}function Gn(e,t,n){const s=e;s.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}const Yh=e=>e;let zo=Object.create(null);function Gh(e,t={}){{const s=(t.onCacheKey||Yh)(e),r=zo[s];if(r)return r;let i=!1;const o=t.onError||Gd;t.onError=f=>{i=!0,o(f)};const{code:a}=hh(e,t),u=new Function(`return ${a}`)();return i?u:zo[s]=u}}let ec=re.__EXTEND_POINT__;const br=()=>++ec,En={INVALID_ARGUMENT:ec,INVALID_DATE_ARGUMENT:br(),INVALID_ISO_DATE_ARGUMENT:br(),__EXTEND_POINT__:br()};function bn(e){return nr(e,null,void 0)}const Qo=()=>"",pt=e=>he(e);function Jo(e,...t){const{fallbackFormat:n,postTranslation:s,unresolving:r,messageCompiler:i,fallbackLocale:o,messages:a}=e,[u,f]=Qr(...t),d=ee(f.missingWarn)?f.missingWarn:e.missingWarn,g=ee(f.fallbackWarn)?f.fallbackWarn:e.fallbackWarn,m=ee(f.escapeParameter)?f.escapeParameter:e.escapeParameter,v=!!f.resolvedMessage,I=x(f.default)||ee(f.default)?ee(f.default)?i?u:()=>u:f.default:n?i?u:()=>u:"",C=n||I!=="",L=x(f.locale)?f.locale:e.locale;m&&Xh(f);let[p,N,O]=v?[u,L,a[L]||{}]:tc(e,u,L,o,g,d),b=p,T=u;if(!v&&!(x(b)||pt(b))&&C&&(b=I,T=b),!v&&(!(x(b)||pt(b))||!x(N)))return r?sr:u;let P=!1;const R=()=>{P=!0},F=pt(b)?b:nc(e,u,N,b,T,R);if(P)return b;const V=Qh(e,N,O,f),H=Ih(V),j=qh(e,F,H),te=s?s(j,u):j;if(__INTLIFY_PROD_DEVTOOLS__){const q={timestamp:Date.now(),key:x(u)?u:pt(b)?b.key:"",locale:N||(pt(b)?b.locale:""),format:x(b)?b:pt(b)?b.source:"",message:te};q.meta=ye({},e.__meta,jh()||{}),Ph(q)}return te}function Xh(e){ce(e.list)?e.list=e.list.map(t=>x(t)?Wo(t):t):ue(e.named)&&Object.keys(e.named).forEach(t=>{x(e.named[t])&&(e.named[t]=Wo(e.named[t]))})}function tc(e,t,n,s,r,i){const{messages:o,onWarn:a,messageResolver:u,localeFallbacker:f}=e,d=f(e,s,n);let g={},m,v=null;const I="translate";for(let C=0;C<d.length&&(m=d[C],g=o[m]||{},(v=u(g,t))===null&&(v=g[t]),!(x(v)||he(v)));C++){const L=Wi(e,t,m,i,I);L!==t&&(v=L)}return[v,m,g]}function nc(e,t,n,s,r,i){const{messageCompiler:o,warnHtmlMessage:a}=e;if(pt(s)){const f=s;return f.locale=f.locale||n,f.key=f.key||t,f}if(o==null){const f=()=>s;return f.locale=n,f.key=t,f}const u=o(s,zh(e,n,r,s,a,i));return u.locale=n,u.key=t,u.source=s,u}function qh(e,t,n){return t(n)}function Qr(...e){const[t,n,s]=e,r={};if(!x(t)&&!Ee(t)&&!pt(t))throw bn(En.INVALID_ARGUMENT);const i=Ee(t)?String(t):(pt(t),t);return Ee(n)?r.plural=n:x(n)?r.default=n:K(n)&&!tr(n)?r.named=n:ce(n)&&(r.list=n),Ee(s)?r.plural=s:x(s)?r.default=s:K(s)&&ye(r,s),[i,r]}function zh(e,t,n,s,r,i){return{warnHtmlMessage:r,onError:o=>{throw i&&i(o),o},onCacheKey:o=>Hd(t,n,o)}}function Qh(e,t,n,s){const{modifiers:r,pluralRules:i,messageResolver:o,fallbackLocale:a,fallbackWarn:u,missingWarn:f,fallbackContext:d}=e,m={locale:t,modifiers:r,pluralRules:i,messages:v=>{let I=o(n,v);if(I==null&&d){const[,,C]=tc(d,v,t,a,u,f);I=o(C,v)}if(x(I)){let C=!1;const p=nc(e,v,t,I,v,()=>{C=!0});return C?Qo:p}else return pt(I)?I:Qo}};return e.processor&&(m.processor=e.processor),s.list&&(m.list=s.list),s.named&&(m.named=s.named),Ee(s.plural)&&(m.pluralIndex=s.plural),m}function Zo(e,...t){const{datetimeFormats:n,unresolving:s,fallbackLocale:r,onWarn:i,localeFallbacker:o}=e,{__datetimeFormatters:a}=e,[u,f,d,g]=Jr(...t),m=ee(d.missingWarn)?d.missingWarn:e.missingWarn;ee(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const v=!!d.part,I=x(d.locale)?d.locale:e.locale,C=o(e,r,I);if(!x(u)||u==="")return new Intl.DateTimeFormat(I,g).format(f);let L={},p,N=null;const O="datetime format";for(let P=0;P<C.length&&(p=C[P],L=n[p]||{},N=L[u],!K(N));P++)Wi(e,u,p,m,O);if(!K(N)||!x(p))return s?sr:u;let b=`${p}__${u}`;tr(g)||(b=`${b}__${JSON.stringify(g)}`);let T=a.get(b);return T||(T=new Intl.DateTimeFormat(p,ye({},N,g)),a.set(b,T)),v?T.formatToParts(f):T.format(f)}const sc=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Jr(...e){const[t,n,s,r]=e,i={};let o={},a;if(x(t)){const u=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!u)throw bn(En.INVALID_ISO_DATE_ARGUMENT);const f=u[3]?u[3].trim().startsWith("T")?`${u[1].trim()}${u[3].trim()}`:`${u[1].trim()}T${u[3].trim()}`:u[1].trim();a=new Date(f);try{a.toISOString()}catch{throw bn(En.INVALID_ISO_DATE_ARGUMENT)}}else if(jd(t)){if(isNaN(t.getTime()))throw bn(En.INVALID_DATE_ARGUMENT);a=t}else if(Ee(t))a=t;else throw bn(En.INVALID_ARGUMENT);return x(n)?i.key=n:K(n)&&Object.keys(n).forEach(u=>{sc.includes(u)?o[u]=n[u]:i[u]=n[u]}),x(s)?i.locale=s:K(s)&&(o=s),K(r)&&(o=r),[i.key||"",a,i,o]}function ea(e,t,n){const s=e;for(const r in n){const i=`${t}__${r}`;!s.__datetimeFormatters.has(i)||s.__datetimeFormatters.delete(i)}}function ta(e,...t){const{numberFormats:n,unresolving:s,fallbackLocale:r,onWarn:i,localeFallbacker:o}=e,{__numberFormatters:a}=e,[u,f,d,g]=Zr(...t),m=ee(d.missingWarn)?d.missingWarn:e.missingWarn;ee(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const v=!!d.part,I=x(d.locale)?d.locale:e.locale,C=o(e,r,I);if(!x(u)||u==="")return new Intl.NumberFormat(I,g).format(f);let L={},p,N=null;const O="number format";for(let P=0;P<C.length&&(p=C[P],L=n[p]||{},N=L[u],!K(N));P++)Wi(e,u,p,m,O);if(!K(N)||!x(p))return s?sr:u;let b=`${p}__${u}`;tr(g)||(b=`${b}__${JSON.stringify(g)}`);let T=a.get(b);return T||(T=new Intl.NumberFormat(p,ye({},N,g)),a.set(b,T)),v?T.formatToParts(f):T.format(f)}const rc=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Zr(...e){const[t,n,s,r]=e,i={};let o={};if(!Ee(t))throw bn(En.INVALID_ARGUMENT);const a=t;return x(n)?i.key=n:K(n)&&Object.keys(n).forEach(u=>{rc.includes(u)?o[u]=n[u]:i[u]=n[u]}),x(s)?i.locale=s:K(s)&&(o=s),K(r)&&(o=r),[i.key||"",a,i,o]}function na(e,t,n){const s=e;for(const r in n){const i=`${t}__${r}`;!s.__numberFormatters.has(i)||s.__numberFormatters.delete(i)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Jn().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Jh="9.2.2";function Zh(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Jn().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Jn().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Jn().__INTLIFY_PROD_DEVTOOLS__=!1)}Rh.__EXTEND_POINT__;let ic=re.__EXTEND_POINT__;const He=()=>++ic,me={UNEXPECTED_RETURN_TYPE:ic,INVALID_ARGUMENT:He(),MUST_BE_CALL_SETUP_TOP:He(),NOT_INSLALLED:He(),NOT_AVAILABLE_IN_LEGACY_MODE:He(),REQUIRED_VALUE:He(),INVALID_VALUE:He(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:He(),NOT_INSLALLED_WITH_PROVIDE:He(),UNEXPECTED_ERROR:He(),NOT_COMPATIBLE_LEGACY_VUE_I18N:He(),BRIDGE_SUPPORT_VUE_2_ONLY:He(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:He(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:He(),__EXTEND_POINT__:He()};function be(e,...t){return nr(e,null,void 0)}const ei=Yt("__transrateVNode"),ti=Yt("__datetimeParts"),ni=Yt("__numberParts"),oc=Yt("__setPluralRules");Yt("__intlifyMeta");const ac=Yt("__injectWithOption");function si(e){if(!ue(e))return e;for(const t in e)if(!!$i(e,t))if(!t.includes("."))ue(e[t])&&si(e[t]);else{const n=t.split("."),s=n.length-1;let r=e;for(let i=0;i<s;i++)n[i]in r||(r[n[i]]={}),r=r[n[i]];r[n[s]]=e[t],delete e[t],ue(r[n[s]])&&si(r[n[s]])}return e}function rr(e,t){const{messages:n,__i18n:s,messageResolver:r,flatJson:i}=t,o=K(n)?n:ce(s)?{}:{[e]:{}};if(ce(s)&&s.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:u,resource:f}=a;u?(o[u]=o[u]||{},Zn(f,o[u])):Zn(f,o)}else x(a)&&Zn(JSON.parse(a),o)}),r==null&&i)for(const a in o)$i(o,a)&&si(o[a]);return o}const ys=e=>!ue(e)||ce(e);function Zn(e,t){if(ys(e)||ys(t))throw be(me.INVALID_VALUE);for(const n in e)$i(e,n)&&(ys(e[n])||ys(t[n])?t[n]=e[n]:Zn(e[n],t[n]))}function lc(e){return e.type}function cc(e,t,n){let s=ue(t.messages)?t.messages:{};"__i18nGlobal"in n&&(s=rr(e.locale.value,{messages:s,__i18n:n.__i18nGlobal}));const r=Object.keys(s);r.length&&r.forEach(i=>{e.mergeLocaleMessage(i,s[i])});{if(ue(t.datetimeFormats)){const i=Object.keys(t.datetimeFormats);i.length&&i.forEach(o=>{e.mergeDateTimeFormat(o,t.datetimeFormats[o])})}if(ue(t.numberFormats)){const i=Object.keys(t.numberFormats);i.length&&i.forEach(o=>{e.mergeNumberFormat(o,t.numberFormats[o])})}}}function sa(e){return ze(Zs,null,e,0)}const ra="__INTLIFY_META__";let ia=0;function oa(e){return(t,n,s,r)=>e(n,s,In()||void 0,r)}const e_=()=>{const e=In();let t=null;return e&&(t=lc(e)[ra])?{[ra]:t}:null};function Vi(e={},t){const{__root:n}=e,s=n===void 0;let r=ee(e.inheritLocale)?e.inheritLocale:!0;const i=mt(n&&r?n.locale.value:x(e.locale)?e.locale:us),o=mt(n&&r?n.fallbackLocale.value:x(e.fallbackLocale)||ce(e.fallbackLocale)||K(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:i.value),a=mt(rr(i.value,e)),u=mt(K(e.datetimeFormats)?e.datetimeFormats:{[i.value]:{}}),f=mt(K(e.numberFormats)?e.numberFormats:{[i.value]:{}});let d=n?n.missingWarn:ee(e.missingWarn)||Ut(e.missingWarn)?e.missingWarn:!0,g=n?n.fallbackWarn:ee(e.fallbackWarn)||Ut(e.fallbackWarn)?e.fallbackWarn:!0,m=n?n.fallbackRoot:ee(e.fallbackRoot)?e.fallbackRoot:!0,v=!!e.fallbackFormat,I=he(e.missing)?e.missing:null,C=he(e.missing)?oa(e.missing):null,L=he(e.postTranslation)?e.postTranslation:null,p=n?n.warnHtmlMessage:ee(e.warnHtmlMessage)?e.warnHtmlMessage:!0,N=!!e.escapeParameter;const O=n?n.modifiers:K(e.modifiers)?e.modifiers:{};let b=e.pluralRules||n&&n.pluralRules,T;T=(()=>{s&&Xo(null);const _={version:Jh,locale:i.value,fallbackLocale:o.value,messages:a.value,modifiers:O,pluralRules:b,missing:C===null?void 0:C,missingWarn:d,fallbackWarn:g,fallbackFormat:v,unresolving:!0,postTranslation:L===null?void 0:L,warnHtmlMessage:p,escapeParameter:N,messageResolver:e.messageResolver,__meta:{framework:"vue"}};_.datetimeFormats=u.value,_.numberFormats=f.value,_.__datetimeFormatters=K(T)?T.__datetimeFormatters:void 0,_.__numberFormatters=K(T)?T.__numberFormatters:void 0;const A=Kh(_);return s&&Xo(A),A})(),Gn(T,i.value,o.value);function R(){return[i.value,o.value,a.value,u.value,f.value]}const F=it({get:()=>i.value,set:_=>{i.value=_,T.locale=i.value}}),V=it({get:()=>o.value,set:_=>{o.value=_,T.fallbackLocale=o.value,Gn(T,i.value,_)}}),H=it(()=>a.value),j=it(()=>u.value),te=it(()=>f.value);function q(){return he(L)?L:null}function ge(_){L=_,T.postTranslation=_}function Ae(){return I}function X(_){_!==null&&(C=oa(_)),I=_,T.missing=C}const B=(_,A,$,W,U,G)=>{R();let Z;if(__INTLIFY_PROD_DEVTOOLS__)try{Go(e_()),s||(T.fallbackContext=n?Bh():void 0),Z=_(T)}finally{Go(null),s||(T.fallbackContext=void 0)}else Z=_(T);if(Ee(Z)&&Z===sr){const[oe,ae]=A();return n&&m?W(n):U(oe)}else{if(G(Z))return Z;throw be(me.UNEXPECTED_RETURN_TYPE)}};function J(..._){return B(A=>Reflect.apply(Jo,null,[A,..._]),()=>Qr(..._),"translate",A=>Reflect.apply(A.t,A,[..._]),A=>A,A=>x(A))}function fe(..._){const[A,$,W]=_;if(W&&!ue(W))throw be(me.INVALID_ARGUMENT);return J(A,$,ye({resolvedMessage:!0},W||{}))}function Fe(..._){return B(A=>Reflect.apply(Zo,null,[A,..._]),()=>Jr(..._),"datetime format",A=>Reflect.apply(A.d,A,[..._]),()=>Ko,A=>x(A))}function Pe(..._){return B(A=>Reflect.apply(ta,null,[A,..._]),()=>Zr(..._),"number format",A=>Reflect.apply(A.n,A,[..._]),()=>Ko,A=>x(A))}function ve(_){return _.map(A=>x(A)||Ee(A)||ee(A)?sa(String(A)):A)}const we={normalize:ve,interpolate:_=>_,type:"vnode"};function Ie(..._){return B(A=>{let $;const W=A;try{W.processor=we,$=Reflect.apply(Jo,null,[W,..._])}finally{W.processor=null}return $},()=>Qr(..._),"translate",A=>A[ei](..._),A=>[sa(A)],A=>ce(A))}function je(..._){return B(A=>Reflect.apply(ta,null,[A,..._]),()=>Zr(..._),"number format",A=>A[ni](..._),()=>[],A=>x(A)||ce(A))}function _e(..._){return B(A=>Reflect.apply(Zo,null,[A,..._]),()=>Jr(..._),"datetime format",A=>A[ti](..._),()=>[],A=>x(A)||ce(A))}function pe(_){b=_,T.pluralRules=b}function We(_,A){const $=x(A)?A:i.value,W=Xe($);return T.messageResolver(W,_)!==null}function Ce(_){let A=null;const $=Xl(T,o.value,i.value);for(let W=0;W<$.length;W++){const U=a.value[$[W]]||{},G=T.messageResolver(U,_);if(G!=null){A=G;break}}return A}function ke(_){const A=Ce(_);return A!=null?A:n?n.tm(_)||{}:{}}function Xe(_){return a.value[_]||{}}function c(_,A){a.value[_]=A,T.messages=a.value}function l(_,A){a.value[_]=a.value[_]||{},Zn(A,a.value[_]),T.messages=a.value}function h(_){return u.value[_]||{}}function E(_,A){u.value[_]=A,T.datetimeFormats=u.value,ea(T,_,A)}function y(_,A){u.value[_]=ye(u.value[_]||{},A),T.datetimeFormats=u.value,ea(T,_,A)}function w(_){return f.value[_]||{}}function M(_,A){f.value[_]=A,T.numberFormats=f.value,na(T,_,A)}function S(_,A){f.value[_]=ye(f.value[_]||{},A),T.numberFormats=f.value,na(T,_,A)}ia++,n&&qr&&(Nn(n.locale,_=>{r&&(i.value=_,T.locale=_,Gn(T,i.value,o.value))}),Nn(n.fallbackLocale,_=>{r&&(o.value=_,T.fallbackLocale=_,Gn(T,i.value,o.value))}));const D={id:ia,locale:F,fallbackLocale:V,get inheritLocale(){return r},set inheritLocale(_){r=_,_&&n&&(i.value=n.locale.value,o.value=n.fallbackLocale.value,Gn(T,i.value,o.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:H,get modifiers(){return O},get pluralRules(){return b||{}},get isGlobal(){return s},get missingWarn(){return d},set missingWarn(_){d=_,T.missingWarn=d},get fallbackWarn(){return g},set fallbackWarn(_){g=_,T.fallbackWarn=g},get fallbackRoot(){return m},set fallbackRoot(_){m=_},get fallbackFormat(){return v},set fallbackFormat(_){v=_,T.fallbackFormat=v},get warnHtmlMessage(){return p},set warnHtmlMessage(_){p=_,T.warnHtmlMessage=_},get escapeParameter(){return N},set escapeParameter(_){N=_,T.escapeParameter=_},t:J,getLocaleMessage:Xe,setLocaleMessage:c,mergeLocaleMessage:l,getPostTranslationHandler:q,setPostTranslationHandler:ge,getMissingHandler:Ae,setMissingHandler:X,[oc]:pe};return D.datetimeFormats=j,D.numberFormats=te,D.rt=fe,D.te=We,D.tm=ke,D.d=Fe,D.n=Pe,D.getDateTimeFormat=h,D.setDateTimeFormat=E,D.mergeDateTimeFormat=y,D.getNumberFormat=w,D.setNumberFormat=M,D.mergeNumberFormat=S,D[ac]=e.__injectWithOption,D[ei]=Ie,D[ti]=_e,D[ni]=je,D}function t_(e){const t=x(e.locale)?e.locale:us,n=x(e.fallbackLocale)||ce(e.fallbackLocale)||K(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,s=he(e.missing)?e.missing:void 0,r=ee(e.silentTranslationWarn)||Ut(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,i=ee(e.silentFallbackWarn)||Ut(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,o=ee(e.fallbackRoot)?e.fallbackRoot:!0,a=!!e.formatFallbackMessages,u=K(e.modifiers)?e.modifiers:{},f=e.pluralizationRules,d=he(e.postTranslation)?e.postTranslation:void 0,g=x(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,m=!!e.escapeParameterHtml,v=ee(e.sync)?e.sync:!0;let I=e.messages;if(K(e.sharedMessages)){const T=e.sharedMessages;I=Object.keys(T).reduce((R,F)=>{const V=R[F]||(R[F]={});return ye(V,T[F]),R},I||{})}const{__i18n:C,__root:L,__injectWithOption:p}=e,N=e.datetimeFormats,O=e.numberFormats,b=e.flatJson;return{locale:t,fallbackLocale:n,messages:I,flatJson:b,datetimeFormats:N,numberFormats:O,missing:s,missingWarn:r,fallbackWarn:i,fallbackRoot:o,fallbackFormat:a,modifiers:u,pluralRules:f,postTranslation:d,warnHtmlMessage:g,escapeParameter:m,messageResolver:e.messageResolver,inheritLocale:v,__i18n:C,__root:L,__injectWithOption:p}}function ri(e={},t){{const n=Vi(t_(e)),s={id:n.id,get locale(){return n.locale.value},set locale(r){n.locale.value=r},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(r){n.fallbackLocale.value=r},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(r){},get missing(){return n.getMissingHandler()},set missing(r){n.setMissingHandler(r)},get silentTranslationWarn(){return ee(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(r){n.missingWarn=ee(r)?!r:r},get silentFallbackWarn(){return ee(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(r){n.fallbackWarn=ee(r)?!r:r},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(r){n.fallbackFormat=r},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(r){n.setPostTranslationHandler(r)},get sync(){return n.inheritLocale},set sync(r){n.inheritLocale=r},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){n.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(r){n.escapeParameter=r},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(r){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...r){const[i,o,a]=r,u={};let f=null,d=null;if(!x(i))throw be(me.INVALID_ARGUMENT);const g=i;return x(o)?u.locale=o:ce(o)?f=o:K(o)&&(d=o),ce(a)?f=a:K(a)&&(d=a),Reflect.apply(n.t,n,[g,f||d||{},u])},rt(...r){return Reflect.apply(n.rt,n,[...r])},tc(...r){const[i,o,a]=r,u={plural:1};let f=null,d=null;if(!x(i))throw be(me.INVALID_ARGUMENT);const g=i;return x(o)?u.locale=o:Ee(o)?u.plural=o:ce(o)?f=o:K(o)&&(d=o),x(a)?u.locale=a:ce(a)?f=a:K(a)&&(d=a),Reflect.apply(n.t,n,[g,f||d||{},u])},te(r,i){return n.te(r,i)},tm(r){return n.tm(r)},getLocaleMessage(r){return n.getLocaleMessage(r)},setLocaleMessage(r,i){n.setLocaleMessage(r,i)},mergeLocaleMessage(r,i){n.mergeLocaleMessage(r,i)},d(...r){return Reflect.apply(n.d,n,[...r])},getDateTimeFormat(r){return n.getDateTimeFormat(r)},setDateTimeFormat(r,i){n.setDateTimeFormat(r,i)},mergeDateTimeFormat(r,i){n.mergeDateTimeFormat(r,i)},n(...r){return Reflect.apply(n.n,n,[...r])},getNumberFormat(r){return n.getNumberFormat(r)},setNumberFormat(r,i){n.setNumberFormat(r,i)},mergeNumberFormat(r,i){n.mergeNumberFormat(r,i)},getChoiceIndex(r,i){return-1},__onComponentInstanceCreated(r){const{componentInstanceCreatedListener:i}=e;i&&i(r,s)}};return s}}const Hi={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function n_({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((s,r)=>s=[...s,...ce(r.children)?r.children:[r]],[]):t.reduce((n,s)=>{const r=e[s];return r&&(n[s]=r()),n},{})}function uc(e){return st}const aa={name:"i18n-t",props:ye({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>Ee(e)||!isNaN(e)}},Hi),setup(e,t){const{slots:n,attrs:s}=t,r=e.i18n||fs({useScope:e.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(g=>g!=="_"),o={};e.locale&&(o.locale=e.locale),e.plural!==void 0&&(o.plural=x(e.plural)?+e.plural:e.plural);const a=n_(t,i),u=r[ei](e.keypath,a,o),f=ye({},s),d=x(e.tag)||ue(e.tag)?e.tag:uc();return Bl(d,f,u)}}};function s_(e){return ce(e)&&!x(e[0])}function fc(e,t,n,s){const{slots:r,attrs:i}=t;return()=>{const o={part:!0};let a={};e.locale&&(o.locale=e.locale),x(e.format)?o.key=e.format:ue(e.format)&&(x(e.format.key)&&(o.key=e.format.key),a=Object.keys(e.format).reduce((m,v)=>n.includes(v)?ye({},m,{[v]:e.format[v]}):m,{}));const u=s(e.value,o,a);let f=[o.key];ce(u)?f=u.map((m,v)=>{const I=r[m.type],C=I?I({[m.type]:m.value,index:v,parts:u}):[m.value];return s_(C)&&(C[0].key=`${m.type}-${v}`),C}):x(u)&&(f=[u]);const d=ye({},i),g=x(e.tag)||ue(e.tag)?e.tag:uc();return Bl(g,d,f)}}const la={name:"i18n-n",props:ye({value:{type:Number,required:!0},format:{type:[String,Object]}},Hi),setup(e,t){const n=e.i18n||fs({useScope:"parent",__useComponent:!0});return fc(e,t,rc,(...s)=>n[ni](...s))}},ca={name:"i18n-d",props:ye({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Hi),setup(e,t){const n=e.i18n||fs({useScope:"parent",__useComponent:!0});return fc(e,t,sc,(...s)=>n[ti](...s))}};function r_(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const s=n.__getInstance(t);return s!=null?s.__composer:e.global.__composer}}function i_(e){const t=o=>{const{instance:a,modifiers:u,value:f}=o;if(!a||!a.$)throw be(me.UNEXPECTED_ERROR);const d=r_(e,a.$),g=ua(f);return[Reflect.apply(d.t,d,[...fa(g)]),d]};return{created:(o,a)=>{const[u,f]=t(a);qr&&e.global===f&&(o.__i18nWatcher=Nn(f.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=f,o.textContent=u},unmounted:o=>{qr&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const u=o.__composer,f=ua(a);o.textContent=Reflect.apply(u.t,u,[...fa(f)])}},getSSRProps:o=>{const[a]=t(o);return{textContent:a}}}}function ua(e){if(x(e))return{path:e};if(K(e)){if(!("path"in e))throw be(me.REQUIRED_VALUE,"path");return e}else throw be(me.INVALID_VALUE)}function fa(e){const{path:t,locale:n,args:s,choice:r,plural:i}=e,o={},a=s||{};return x(n)&&(o.locale=n),Ee(r)&&(o.plural=r),Ee(i)&&(o.plural=i),[t,a,o]}function o_(e,t,...n){const s=K(n[0])?n[0]:{},r=!!s.useI18nComponentName;(ee(s.globalInstall)?s.globalInstall:!0)&&(e.component(r?"i18n":aa.name,aa),e.component(la.name,la),e.component(ca.name,ca)),e.directive("t",i_(t))}function a_(e,t,n){return{beforeCreate(){const s=In();if(!s)throw be(me.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const i=r.i18n;r.__i18n&&(i.__i18n=r.__i18n),i.__root=t,this===this.$root?this.$i18n=da(e,i):(i.__injectWithOption=!0,this.$i18n=ri(i))}else r.__i18n?this===this.$root?this.$i18n=da(e,r):this.$i18n=ri({__i18n:r.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;r.__i18nGlobal&&cc(t,r,r),e.__onComponentInstanceCreated(this.$i18n),n.__setInstance(s,this.$i18n),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i)},mounted(){},unmounted(){const s=In();if(!s)throw be(me.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,n.__deleteInstance(s),delete this.$i18n}}}function da(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[oc](t.pluralizationRules||e.pluralizationRules);const n=rr(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach(s=>e.mergeLocaleMessage(s,n[s])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(s=>e.mergeDateTimeFormat(s,t.datetimeFormats[s])),t.numberFormats&&Object.keys(t.numberFormats).forEach(s=>e.mergeNumberFormat(s,t.numberFormats[s])),e}const l_=Yt("global-vue-i18n");function c_(e={},t){const n=__VUE_I18N_LEGACY_API__&&ee(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,s=ee(e.globalInjection)?e.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&n?!!e.allowComposition:!0,i=new Map,[o,a]=u_(e,n),u=Yt("");function f(m){return i.get(m)||null}function d(m,v){i.set(m,v)}function g(m){i.delete(m)}{const m={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return r},async install(v,...I){v.__VUE_I18N_SYMBOL__=u,v.provide(v.__VUE_I18N_SYMBOL__,m),!n&&s&&b_(v,m.global),__VUE_I18N_FULL_INSTALL__&&o_(v,m,...I),__VUE_I18N_LEGACY_API__&&n&&v.mixin(a_(a,a.__composer,m));const C=v.unmount;v.unmount=()=>{m.dispose(),C()}},get global(){return a},dispose(){o.stop()},__instances:i,__getInstance:f,__setInstance:d,__deleteInstance:g};return m}}function fs(e={}){const t=In();if(t==null)throw be(me.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw be(me.NOT_INSLALLED);const n=f_(t),s=h_(n),r=lc(t),i=d_(e,r);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!e.__useComponent){if(!n.allowComposition)throw be(me.NOT_AVAILABLE_IN_LEGACY_MODE);return m_(t,i,s,e)}if(i==="global")return cc(s,e,r),s;if(i==="parent"){let u=__(n,t,e.__useComponent);return u==null&&(u=s),u}const o=n;let a=o.__getInstance(t);if(a==null){const u=ye({},e);"__i18n"in r&&(u.__i18n=r.__i18n),s&&(u.__root=s),a=Vi(u),p_(o,t),o.__setInstance(t,a)}return a}function u_(e,t,n){const s=Nu();{const r=__VUE_I18N_LEGACY_API__&&t?s.run(()=>ri(e)):s.run(()=>Vi(e));if(r==null)throw be(me.UNEXPECTED_ERROR);return[s,r]}}function f_(e){{const t=Ds(e.isCE?l_:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw be(e.isCE?me.NOT_INSLALLED_WITH_PROVIDE:me.UNEXPECTED_ERROR);return t}}function d_(e,t){return tr(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function h_(e){return e.mode==="composition"?e.global:e.global.__composer}function __(e,t,n=!1){let s=null;const r=t.root;let i=t.parent;for(;i!=null;){const o=e;if(e.mode==="composition")s=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(i);a!=null&&(s=a.__composer,n&&s&&!s[ac]&&(s=null))}if(s!=null||r===i)break;i=i.parent}return s}function p_(e,t,n){Si(()=>{},t),Di(()=>{e.__deleteInstance(t)},t)}function m_(e,t,n,s={}){const r=t==="local",i=Zu(null);if(r&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw be(me.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=ee(s.inheritLocale)?s.inheritLocale:!0,a=mt(r&&o?n.locale.value:x(s.locale)?s.locale:us),u=mt(r&&o?n.fallbackLocale.value:x(s.fallbackLocale)||ce(s.fallbackLocale)||K(s.fallbackLocale)||s.fallbackLocale===!1?s.fallbackLocale:a.value),f=mt(rr(a.value,s)),d=mt(K(s.datetimeFormats)?s.datetimeFormats:{[a.value]:{}}),g=mt(K(s.numberFormats)?s.numberFormats:{[a.value]:{}}),m=r?n.missingWarn:ee(s.missingWarn)||Ut(s.missingWarn)?s.missingWarn:!0,v=r?n.fallbackWarn:ee(s.fallbackWarn)||Ut(s.fallbackWarn)?s.fallbackWarn:!0,I=r?n.fallbackRoot:ee(s.fallbackRoot)?s.fallbackRoot:!0,C=!!s.fallbackFormat,L=he(s.missing)?s.missing:null,p=he(s.postTranslation)?s.postTranslation:null,N=r?n.warnHtmlMessage:ee(s.warnHtmlMessage)?s.warnHtmlMessage:!0,O=!!s.escapeParameter,b=r?n.modifiers:K(s.modifiers)?s.modifiers:{},T=s.pluralRules||r&&n.pluralRules;function P(){return[a.value,u.value,f.value,d.value,g.value]}const R=it({get:()=>i.value?i.value.locale.value:a.value,set:l=>{i.value&&(i.value.locale.value=l),a.value=l}}),F=it({get:()=>i.value?i.value.fallbackLocale.value:u.value,set:l=>{i.value&&(i.value.fallbackLocale.value=l),u.value=l}}),V=it(()=>i.value?i.value.messages.value:f.value),H=it(()=>d.value),j=it(()=>g.value);function te(){return i.value?i.value.getPostTranslationHandler():p}function q(l){i.value&&i.value.setPostTranslationHandler(l)}function ge(){return i.value?i.value.getMissingHandler():L}function Ae(l){i.value&&i.value.setMissingHandler(l)}function X(l){return P(),l()}function B(...l){return i.value?X(()=>Reflect.apply(i.value.t,null,[...l])):X(()=>"")}function J(...l){return i.value?Reflect.apply(i.value.rt,null,[...l]):""}function fe(...l){return i.value?X(()=>Reflect.apply(i.value.d,null,[...l])):X(()=>"")}function Fe(...l){return i.value?X(()=>Reflect.apply(i.value.n,null,[...l])):X(()=>"")}function Pe(l){return i.value?i.value.tm(l):{}}function ve(l,h){return i.value?i.value.te(l,h):!1}function Te(l){return i.value?i.value.getLocaleMessage(l):{}}function we(l,h){i.value&&(i.value.setLocaleMessage(l,h),f.value[l]=h)}function Ie(l,h){i.value&&i.value.mergeLocaleMessage(l,h)}function je(l){return i.value?i.value.getDateTimeFormat(l):{}}function _e(l,h){i.value&&(i.value.setDateTimeFormat(l,h),d.value[l]=h)}function pe(l,h){i.value&&i.value.mergeDateTimeFormat(l,h)}function We(l){return i.value?i.value.getNumberFormat(l):{}}function Ce(l,h){i.value&&(i.value.setNumberFormat(l,h),g.value[l]=h)}function ke(l,h){i.value&&i.value.mergeNumberFormat(l,h)}const Xe={get id(){return i.value?i.value.id:-1},locale:R,fallbackLocale:F,messages:V,datetimeFormats:H,numberFormats:j,get inheritLocale(){return i.value?i.value.inheritLocale:o},set inheritLocale(l){i.value&&(i.value.inheritLocale=l)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(f.value)},get modifiers(){return i.value?i.value.modifiers:b},get pluralRules(){return i.value?i.value.pluralRules:T},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:m},set missingWarn(l){i.value&&(i.value.missingWarn=l)},get fallbackWarn(){return i.value?i.value.fallbackWarn:v},set fallbackWarn(l){i.value&&(i.value.missingWarn=l)},get fallbackRoot(){return i.value?i.value.fallbackRoot:I},set fallbackRoot(l){i.value&&(i.value.fallbackRoot=l)},get fallbackFormat(){return i.value?i.value.fallbackFormat:C},set fallbackFormat(l){i.value&&(i.value.fallbackFormat=l)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:N},set warnHtmlMessage(l){i.value&&(i.value.warnHtmlMessage=l)},get escapeParameter(){return i.value?i.value.escapeParameter:O},set escapeParameter(l){i.value&&(i.value.escapeParameter=l)},t:B,getPostTranslationHandler:te,setPostTranslationHandler:q,getMissingHandler:ge,setMissingHandler:Ae,rt:J,d:fe,n:Fe,tm:Pe,te:ve,getLocaleMessage:Te,setLocaleMessage:we,mergeLocaleMessage:Ie,getDateTimeFormat:je,setDateTimeFormat:_e,mergeDateTimeFormat:pe,getNumberFormat:We,setNumberFormat:Ce,mergeNumberFormat:ke};function c(l){l.locale.value=a.value,l.fallbackLocale.value=u.value,Object.keys(f.value).forEach(h=>{l.mergeLocaleMessage(h,f.value[h])}),Object.keys(d.value).forEach(h=>{l.mergeDateTimeFormat(h,d.value[h])}),Object.keys(g.value).forEach(h=>{l.mergeNumberFormat(h,g.value[h])}),l.escapeParameter=O,l.fallbackFormat=C,l.fallbackRoot=I,l.fallbackWarn=v,l.missingWarn=m,l.warnHtmlMessage=N}return Dl(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw be(me.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const l=i.value=e.proxy.$i18n.__composer;t==="global"?(a.value=l.locale.value,u.value=l.fallbackLocale.value,f.value=l.messages.value,d.value=l.datetimeFormats.value,g.value=l.numberFormats.value):r&&c(l)}),Xe}const g_=["locale","fallbackLocale","availableLocales"],E_=["t","rt","d","n","tm"];function b_(e,t){const n=Object.create(null);g_.forEach(s=>{const r=Object.getOwnPropertyDescriptor(t,s);if(!r)throw be(me.UNEXPECTED_ERROR);const i=Le(r.value)?{get(){return r.value.value},set(o){r.value.value=o}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,s,i)}),e.config.globalProperties.$i18n=n,E_.forEach(s=>{const r=Object.getOwnPropertyDescriptor(t,s);if(!r||!r.value)throw be(me.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${s}`,r)})}Vh(Gh);Hh(Th);Uh(Xl);Zh();if(__INTLIFY_PROD_DEVTOOLS__){const e=Jn();e.__INTLIFY__=!0,Sh(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const v_={class:"container-lg py-4 px-3 mx-auto"},T_={class:"navbar d-flex pb-4 justify-content-between align-items-start border-bottom"},y_=ne("a",{class:"navbar-brand",href:"#"},[ne("img",{src:Fd,alt:"logo",width:"100",height:"90",class:"img-fluid"})],-1),A_={class:"navbar-title h3 pt-4 mr-auto ml-0"},C_={class:"navbar-lang-and-pic d-flex flex-column justify-content-end align-items-end"},N_=ne("img",{src:Wd,alt:"pic",width:"300",height:"150",class:"img-fluid"},null,-1),L_={class:"langs mt-4"},O_={class:"content py-4 text-break"},w_={class:"my-4"},I_={class:"my-2"},S_={class:"my-2"},D_={class:"my-4"},P_=ne("a",{href:"mailto:78@otdel-k.spb.ru"},"78@otdel-k.spb.ru",-1),k_={class:"my-4"},R_=ne("a",{href:"mvd.ru",target:"_blank"},"mvd.ru",-1),M_={__name:"App",setup(e){const{t,locale:n}=fs({useScope:"global"}),s=r=>{event.target.innerText===r&&(n.value=r,localStorage.setItem("lang",n.value))};return(r,i)=>(Jf(),td("div",v_,[ne("nav",T_,[y_,ne("h1",A_,Ve(r.$t("title")),1),ne("div",C_,[N_,ne("div",L_,[ne("button",{type:"button",class:"btn border",onClick:i[0]||(i[0]=o=>s("rus"))},"rus"),ne("button",{type:"button",class:"btn border",onClick:i[1]||(i[1]=o=>s("eng"))},"eng")])])]),ne("main",O_,[ne("p",w_,Ve(r.$t("content.p-1")),1),ne("ol",null,[ne("li",null,[ne("span",null,Ve(r.$t("content.li-1")),1),ne("ul",I_,[ne("li",null,Ve(r.$t("content.li-1-1")),1),ne("li",null,Ve(r.$t("content.li-1-2")),1),ne("li",null,Ve(r.$t("content.li-1-3")),1),ne("li",null,Ve(r.$t("content.li-1-4")),1)])]),ne("li",null,[ne("span",null,Ve(r.$t("content.li-2")),1),ne("ul",S_,[ne("li",null,Ve(r.$t("content.li-2-1")),1),ne("li",null,Ve(r.$t("content.li-2-2")),1)])]),ne("li",null,[ne("span",null,Ve(r.$t("content.li-3")),1)]),ne("li",null,[ne("span",null,Ve(r.$t("content.li-4")),1)])]),ne("p",D_,[Yr(Ve(r.$t("content.p-2"))+" ",1),P_]),ne("p",k_,[Yr(Ve(r.$t("content.p-3"))+" ",1),R_])])]))}};var $e="top",Ye="bottom",Ge="right",xe="left",ir="auto",Un=[$e,Ye,Ge,xe],an="start",Pn="end",dc="clippingParents",Ui="viewport",_n="popper",hc="reference",ii=Un.reduce(function(e,t){return e.concat([t+"-"+an,t+"-"+Pn])},[]),ji=[].concat(Un,[ir]).reduce(function(e,t){return e.concat([t,t+"-"+an,t+"-"+Pn])},[]),_c="beforeRead",pc="read",mc="afterRead",gc="beforeMain",Ec="main",bc="afterMain",vc="beforeWrite",Tc="write",yc="afterWrite",Ac=[_c,pc,mc,gc,Ec,bc,vc,Tc,yc];function Tt(e){return e?(e.nodeName||"").toLowerCase():null}function et(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ln(e){var t=et(e).Element;return e instanceof t||e instanceof Element}function Je(e){var t=et(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Bi(e){if(typeof ShadowRoot>"u")return!1;var t=et(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function $_(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var s=t.styles[n]||{},r=t.attributes[n]||{},i=t.elements[n];!Je(i)||!Tt(i)||(Object.assign(i.style,s),Object.keys(r).forEach(function(o){var a=r[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function x_(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(s){var r=t.elements[s],i=t.attributes[s]||{},o=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:n[s]),a=o.reduce(function(u,f){return u[f]="",u},{});!Je(r)||!Tt(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(u){r.removeAttribute(u)}))})}}const Ki={name:"applyStyles",enabled:!0,phase:"write",fn:$_,effect:x_,requires:["computeStyles"]};function bt(e){return e.split("-")[0]}var on=Math.max,Hs=Math.min,kn=Math.round;function oi(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Cc(){return!/^((?!chrome|android).)*safari/i.test(oi())}function Rn(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var s=e.getBoundingClientRect(),r=1,i=1;t&&Je(e)&&(r=e.offsetWidth>0&&kn(s.width)/e.offsetWidth||1,i=e.offsetHeight>0&&kn(s.height)/e.offsetHeight||1);var o=ln(e)?et(e):window,a=o.visualViewport,u=!Cc()&&n,f=(s.left+(u&&a?a.offsetLeft:0))/r,d=(s.top+(u&&a?a.offsetTop:0))/i,g=s.width/r,m=s.height/i;return{width:g,height:m,top:d,right:f+g,bottom:d+m,left:f,x:f,y:d}}function Yi(e){var t=Rn(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}}function Nc(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Bi(n)){var s=t;do{if(s&&e.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function St(e){return et(e).getComputedStyle(e)}function F_(e){return["table","td","th"].indexOf(Tt(e))>=0}function Xt(e){return((ln(e)?e.ownerDocument:e.document)||window.document).documentElement}function or(e){return Tt(e)==="html"?e:e.assignedSlot||e.parentNode||(Bi(e)?e.host:null)||Xt(e)}function ha(e){return!Je(e)||St(e).position==="fixed"?null:e.offsetParent}function W_(e){var t=/firefox/i.test(oi()),n=/Trident/i.test(oi());if(n&&Je(e)){var s=St(e);if(s.position==="fixed")return null}var r=or(e);for(Bi(r)&&(r=r.host);Je(r)&&["html","body"].indexOf(Tt(r))<0;){var i=St(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function ds(e){for(var t=et(e),n=ha(e);n&&F_(n)&&St(n).position==="static";)n=ha(n);return n&&(Tt(n)==="html"||Tt(n)==="body"&&St(n).position==="static")?t:n||W_(e)||t}function Gi(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function es(e,t,n){return on(e,Hs(t,n))}function V_(e,t,n){var s=es(e,t,n);return s>n?n:s}function Lc(){return{top:0,right:0,bottom:0,left:0}}function Oc(e){return Object.assign({},Lc(),e)}function wc(e,t){return t.reduce(function(n,s){return n[s]=e,n},{})}var H_=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Oc(typeof t!="number"?t:wc(t,Un))};function U_(e){var t,n=e.state,s=e.name,r=e.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=bt(n.placement),u=Gi(a),f=[xe,Ge].indexOf(a)>=0,d=f?"height":"width";if(!(!i||!o)){var g=H_(r.padding,n),m=Yi(i),v=u==="y"?$e:xe,I=u==="y"?Ye:Ge,C=n.rects.reference[d]+n.rects.reference[u]-o[u]-n.rects.popper[d],L=o[u]-n.rects.reference[u],p=ds(i),N=p?u==="y"?p.clientHeight||0:p.clientWidth||0:0,O=C/2-L/2,b=g[v],T=N-m[d]-g[I],P=N/2-m[d]/2+O,R=es(b,P,T),F=u;n.modifiersData[s]=(t={},t[F]=R,t.centerOffset=R-P,t)}}function j_(e){var t=e.state,n=e.options,s=n.element,r=s===void 0?"[data-popper-arrow]":s;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Nc(t.elements.popper,r)||(t.elements.arrow=r))}const Ic={name:"arrow",enabled:!0,phase:"main",fn:U_,effect:j_,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Mn(e){return e.split("-")[1]}var B_={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K_(e){var t=e.x,n=e.y,s=window,r=s.devicePixelRatio||1;return{x:kn(t*r)/r||0,y:kn(n*r)/r||0}}function _a(e){var t,n=e.popper,s=e.popperRect,r=e.placement,i=e.variation,o=e.offsets,a=e.position,u=e.gpuAcceleration,f=e.adaptive,d=e.roundOffsets,g=e.isFixed,m=o.x,v=m===void 0?0:m,I=o.y,C=I===void 0?0:I,L=typeof d=="function"?d({x:v,y:C}):{x:v,y:C};v=L.x,C=L.y;var p=o.hasOwnProperty("x"),N=o.hasOwnProperty("y"),O=xe,b=$e,T=window;if(f){var P=ds(n),R="clientHeight",F="clientWidth";if(P===et(n)&&(P=Xt(n),St(P).position!=="static"&&a==="absolute"&&(R="scrollHeight",F="scrollWidth")),P=P,r===$e||(r===xe||r===Ge)&&i===Pn){b=Ye;var V=g&&P===T&&T.visualViewport?T.visualViewport.height:P[R];C-=V-s.height,C*=u?1:-1}if(r===xe||(r===$e||r===Ye)&&i===Pn){O=Ge;var H=g&&P===T&&T.visualViewport?T.visualViewport.width:P[F];v-=H-s.width,v*=u?1:-1}}var j=Object.assign({position:a},f&&B_),te=d===!0?K_({x:v,y:C}):{x:v,y:C};if(v=te.x,C=te.y,u){var q;return Object.assign({},j,(q={},q[b]=N?"0":"",q[O]=p?"0":"",q.transform=(T.devicePixelRatio||1)<=1?"translate("+v+"px, "+C+"px)":"translate3d("+v+"px, "+C+"px, 0)",q))}return Object.assign({},j,(t={},t[b]=N?C+"px":"",t[O]=p?v+"px":"",t.transform="",t))}function Y_(e){var t=e.state,n=e.options,s=n.gpuAcceleration,r=s===void 0?!0:s,i=n.adaptive,o=i===void 0?!0:i,a=n.roundOffsets,u=a===void 0?!0:a,f={placement:bt(t.placement),variation:Mn(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,_a(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,_a(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Xi={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Y_,data:{}};var As={passive:!0};function G_(e){var t=e.state,n=e.instance,s=e.options,r=s.scroll,i=r===void 0?!0:r,o=s.resize,a=o===void 0?!0:o,u=et(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach(function(d){d.addEventListener("scroll",n.update,As)}),a&&u.addEventListener("resize",n.update,As),function(){i&&f.forEach(function(d){d.removeEventListener("scroll",n.update,As)}),a&&u.removeEventListener("resize",n.update,As)}}const qi={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:G_,data:{}};var X_={left:"right",right:"left",bottom:"top",top:"bottom"};function Rs(e){return e.replace(/left|right|bottom|top/g,function(t){return X_[t]})}var q_={start:"end",end:"start"};function pa(e){return e.replace(/start|end/g,function(t){return q_[t]})}function zi(e){var t=et(e),n=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Qi(e){return Rn(Xt(e)).left+zi(e).scrollLeft}function z_(e,t){var n=et(e),s=Xt(e),r=n.visualViewport,i=s.clientWidth,o=s.clientHeight,a=0,u=0;if(r){i=r.width,o=r.height;var f=Cc();(f||!f&&t==="fixed")&&(a=r.offsetLeft,u=r.offsetTop)}return{width:i,height:o,x:a+Qi(e),y:u}}function Q_(e){var t,n=Xt(e),s=zi(e),r=(t=e.ownerDocument)==null?void 0:t.body,i=on(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=on(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-s.scrollLeft+Qi(e),u=-s.scrollTop;return St(r||n).direction==="rtl"&&(a+=on(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:o,x:a,y:u}}function Ji(e){var t=St(e),n=t.overflow,s=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+s)}function Sc(e){return["html","body","#document"].indexOf(Tt(e))>=0?e.ownerDocument.body:Je(e)&&Ji(e)?e:Sc(or(e))}function ts(e,t){var n;t===void 0&&(t=[]);var s=Sc(e),r=s===((n=e.ownerDocument)==null?void 0:n.body),i=et(s),o=r?[i].concat(i.visualViewport||[],Ji(s)?s:[]):s,a=t.concat(o);return r?a:a.concat(ts(or(o)))}function ai(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function J_(e,t){var n=Rn(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function ma(e,t,n){return t===Ui?ai(z_(e,n)):ln(t)?J_(t,n):ai(Q_(Xt(e)))}function Z_(e){var t=ts(or(e)),n=["absolute","fixed"].indexOf(St(e).position)>=0,s=n&&Je(e)?ds(e):e;return ln(s)?t.filter(function(r){return ln(r)&&Nc(r,s)&&Tt(r)!=="body"}):[]}function ep(e,t,n,s){var r=t==="clippingParents"?Z_(e):[].concat(t),i=[].concat(r,[n]),o=i[0],a=i.reduce(function(u,f){var d=ma(e,f,s);return u.top=on(d.top,u.top),u.right=Hs(d.right,u.right),u.bottom=Hs(d.bottom,u.bottom),u.left=on(d.left,u.left),u},ma(e,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Dc(e){var t=e.reference,n=e.element,s=e.placement,r=s?bt(s):null,i=s?Mn(s):null,o=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,u;switch(r){case $e:u={x:o,y:t.y-n.height};break;case Ye:u={x:o,y:t.y+t.height};break;case Ge:u={x:t.x+t.width,y:a};break;case xe:u={x:t.x-n.width,y:a};break;default:u={x:t.x,y:t.y}}var f=r?Gi(r):null;if(f!=null){var d=f==="y"?"height":"width";switch(i){case an:u[f]=u[f]-(t[d]/2-n[d]/2);break;case Pn:u[f]=u[f]+(t[d]/2-n[d]/2);break}}return u}function $n(e,t){t===void 0&&(t={});var n=t,s=n.placement,r=s===void 0?e.placement:s,i=n.strategy,o=i===void 0?e.strategy:i,a=n.boundary,u=a===void 0?dc:a,f=n.rootBoundary,d=f===void 0?Ui:f,g=n.elementContext,m=g===void 0?_n:g,v=n.altBoundary,I=v===void 0?!1:v,C=n.padding,L=C===void 0?0:C,p=Oc(typeof L!="number"?L:wc(L,Un)),N=m===_n?hc:_n,O=e.rects.popper,b=e.elements[I?N:m],T=ep(ln(b)?b:b.contextElement||Xt(e.elements.popper),u,d,o),P=Rn(e.elements.reference),R=Dc({reference:P,element:O,strategy:"absolute",placement:r}),F=ai(Object.assign({},O,R)),V=m===_n?F:P,H={top:T.top-V.top+p.top,bottom:V.bottom-T.bottom+p.bottom,left:T.left-V.left+p.left,right:V.right-T.right+p.right},j=e.modifiersData.offset;if(m===_n&&j){var te=j[r];Object.keys(H).forEach(function(q){var ge=[Ge,Ye].indexOf(q)>=0?1:-1,Ae=[$e,Ye].indexOf(q)>=0?"y":"x";H[q]+=te[Ae]*ge})}return H}function tp(e,t){t===void 0&&(t={});var n=t,s=n.placement,r=n.boundary,i=n.rootBoundary,o=n.padding,a=n.flipVariations,u=n.allowedAutoPlacements,f=u===void 0?ji:u,d=Mn(s),g=d?a?ii:ii.filter(function(I){return Mn(I)===d}):Un,m=g.filter(function(I){return f.indexOf(I)>=0});m.length===0&&(m=g);var v=m.reduce(function(I,C){return I[C]=$n(e,{placement:C,boundary:r,rootBoundary:i,padding:o})[bt(C)],I},{});return Object.keys(v).sort(function(I,C){return v[I]-v[C]})}function np(e){if(bt(e)===ir)return[];var t=Rs(e);return[pa(e),t,pa(t)]}function sp(e){var t=e.state,n=e.options,s=e.name;if(!t.modifiersData[s]._skip){for(var r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!0:o,u=n.fallbackPlacements,f=n.padding,d=n.boundary,g=n.rootBoundary,m=n.altBoundary,v=n.flipVariations,I=v===void 0?!0:v,C=n.allowedAutoPlacements,L=t.options.placement,p=bt(L),N=p===L,O=u||(N||!I?[Rs(L)]:np(L)),b=[L].concat(O).reduce(function(we,Ie){return we.concat(bt(Ie)===ir?tp(t,{placement:Ie,boundary:d,rootBoundary:g,padding:f,flipVariations:I,allowedAutoPlacements:C}):Ie)},[]),T=t.rects.reference,P=t.rects.popper,R=new Map,F=!0,V=b[0],H=0;H<b.length;H++){var j=b[H],te=bt(j),q=Mn(j)===an,ge=[$e,Ye].indexOf(te)>=0,Ae=ge?"width":"height",X=$n(t,{placement:j,boundary:d,rootBoundary:g,altBoundary:m,padding:f}),B=ge?q?Ge:xe:q?Ye:$e;T[Ae]>P[Ae]&&(B=Rs(B));var J=Rs(B),fe=[];if(i&&fe.push(X[te]<=0),a&&fe.push(X[B]<=0,X[J]<=0),fe.every(function(we){return we})){V=j,F=!1;break}R.set(j,fe)}if(F)for(var Fe=I?3:1,Pe=function(Ie){var je=b.find(function(_e){var pe=R.get(_e);if(pe)return pe.slice(0,Ie).every(function(We){return We})});if(je)return V=je,"break"},ve=Fe;ve>0;ve--){var Te=Pe(ve);if(Te==="break")break}t.placement!==V&&(t.modifiersData[s]._skip=!0,t.placement=V,t.reset=!0)}}const Pc={name:"flip",enabled:!0,phase:"main",fn:sp,requiresIfExists:["offset"],data:{_skip:!1}};function ga(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ea(e){return[$e,Ge,Ye,xe].some(function(t){return e[t]>=0})}function rp(e){var t=e.state,n=e.name,s=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,o=$n(t,{elementContext:"reference"}),a=$n(t,{altBoundary:!0}),u=ga(o,s),f=ga(a,r,i),d=Ea(u),g=Ea(f);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:f,isReferenceHidden:d,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":g})}const kc={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:rp};function ip(e,t,n){var s=bt(e),r=[xe,$e].indexOf(s)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=i[0],a=i[1];return o=o||0,a=(a||0)*r,[xe,Ge].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function op(e){var t=e.state,n=e.options,s=e.name,r=n.offset,i=r===void 0?[0,0]:r,o=ji.reduce(function(d,g){return d[g]=ip(g,t.rects,i),d},{}),a=o[t.placement],u=a.x,f=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=f),t.modifiersData[s]=o}const Rc={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:op};function ap(e){var t=e.state,n=e.name;t.modifiersData[n]=Dc({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Zi={name:"popperOffsets",enabled:!0,phase:"read",fn:ap,data:{}};function lp(e){return e==="x"?"y":"x"}function cp(e){var t=e.state,n=e.options,s=e.name,r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!1:o,u=n.boundary,f=n.rootBoundary,d=n.altBoundary,g=n.padding,m=n.tether,v=m===void 0?!0:m,I=n.tetherOffset,C=I===void 0?0:I,L=$n(t,{boundary:u,rootBoundary:f,padding:g,altBoundary:d}),p=bt(t.placement),N=Mn(t.placement),O=!N,b=Gi(p),T=lp(b),P=t.modifiersData.popperOffsets,R=t.rects.reference,F=t.rects.popper,V=typeof C=="function"?C(Object.assign({},t.rects,{placement:t.placement})):C,H=typeof V=="number"?{mainAxis:V,altAxis:V}:Object.assign({mainAxis:0,altAxis:0},V),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,te={x:0,y:0};if(!!P){if(i){var q,ge=b==="y"?$e:xe,Ae=b==="y"?Ye:Ge,X=b==="y"?"height":"width",B=P[b],J=B+L[ge],fe=B-L[Ae],Fe=v?-F[X]/2:0,Pe=N===an?R[X]:F[X],ve=N===an?-F[X]:-R[X],Te=t.elements.arrow,we=v&&Te?Yi(Te):{width:0,height:0},Ie=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Lc(),je=Ie[ge],_e=Ie[Ae],pe=es(0,R[X],we[X]),We=O?R[X]/2-Fe-pe-je-H.mainAxis:Pe-pe-je-H.mainAxis,Ce=O?-R[X]/2+Fe+pe+_e+H.mainAxis:ve+pe+_e+H.mainAxis,ke=t.elements.arrow&&ds(t.elements.arrow),Xe=ke?b==="y"?ke.clientTop||0:ke.clientLeft||0:0,c=(q=j==null?void 0:j[b])!=null?q:0,l=B+We-c-Xe,h=B+Ce-c,E=es(v?Hs(J,l):J,B,v?on(fe,h):fe);P[b]=E,te[b]=E-B}if(a){var y,w=b==="x"?$e:xe,M=b==="x"?Ye:Ge,S=P[T],D=T==="y"?"height":"width",_=S+L[w],A=S-L[M],$=[$e,xe].indexOf(p)!==-1,W=(y=j==null?void 0:j[T])!=null?y:0,U=$?_:S-R[D]-F[D]-W+H.altAxis,G=$?S+R[D]+F[D]-W-H.altAxis:A,Z=v&&$?V_(U,S,G):es(v?U:_,S,v?G:A);P[T]=Z,te[T]=Z-S}t.modifiersData[s]=te}}const Mc={name:"preventOverflow",enabled:!0,phase:"main",fn:cp,requiresIfExists:["offset"]};function up(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function fp(e){return e===et(e)||!Je(e)?zi(e):up(e)}function dp(e){var t=e.getBoundingClientRect(),n=kn(t.width)/e.offsetWidth||1,s=kn(t.height)/e.offsetHeight||1;return n!==1||s!==1}function hp(e,t,n){n===void 0&&(n=!1);var s=Je(t),r=Je(t)&&dp(t),i=Xt(t),o=Rn(e,r,n),a={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(s||!s&&!n)&&((Tt(t)!=="body"||Ji(i))&&(a=fp(t)),Je(t)?(u=Rn(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=Qi(i))),{x:o.left+a.scrollLeft-u.x,y:o.top+a.scrollTop-u.y,width:o.width,height:o.height}}function _p(e){var t=new Map,n=new Set,s=[];e.forEach(function(i){t.set(i.name,i)});function r(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var u=t.get(a);u&&r(u)}}),s.push(i)}return e.forEach(function(i){n.has(i.name)||r(i)}),s}function pp(e){var t=_p(e);return Ac.reduce(function(n,s){return n.concat(t.filter(function(r){return r.phase===s}))},[])}function mp(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function gp(e){var t=e.reduce(function(n,s){var r=n[s.name];return n[s.name]=r?Object.assign({},r,s,{options:Object.assign({},r.options,s.options),data:Object.assign({},r.data,s.data)}):s,n},{});return Object.keys(t).map(function(n){return t[n]})}var ba={placement:"bottom",modifiers:[],strategy:"absolute"};function va(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function ar(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,s=n===void 0?[]:n,r=t.defaultOptions,i=r===void 0?ba:r;return function(a,u,f){f===void 0&&(f=i);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},ba,i),modifiersData:{},elements:{reference:a,popper:u},attributes:{},styles:{}},g=[],m=!1,v={state:d,setOptions:function(p){var N=typeof p=="function"?p(d.options):p;C(),d.options=Object.assign({},i,d.options,N),d.scrollParents={reference:ln(a)?ts(a):a.contextElement?ts(a.contextElement):[],popper:ts(u)};var O=pp(gp([].concat(s,d.options.modifiers)));return d.orderedModifiers=O.filter(function(b){return b.enabled}),I(),v.update()},forceUpdate:function(){if(!m){var p=d.elements,N=p.reference,O=p.popper;if(!!va(N,O)){d.rects={reference:hp(N,ds(O),d.options.strategy==="fixed"),popper:Yi(O)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(H){return d.modifiersData[H.name]=Object.assign({},H.data)});for(var b=0;b<d.orderedModifiers.length;b++){if(d.reset===!0){d.reset=!1,b=-1;continue}var T=d.orderedModifiers[b],P=T.fn,R=T.options,F=R===void 0?{}:R,V=T.name;typeof P=="function"&&(d=P({state:d,options:F,name:V,instance:v})||d)}}}},update:mp(function(){return new Promise(function(L){v.forceUpdate(),L(d)})}),destroy:function(){C(),m=!0}};if(!va(a,u))return v;v.setOptions(f).then(function(L){!m&&f.onFirstUpdate&&f.onFirstUpdate(L)});function I(){d.orderedModifiers.forEach(function(L){var p=L.name,N=L.options,O=N===void 0?{}:N,b=L.effect;if(typeof b=="function"){var T=b({state:d,name:p,instance:v,options:O}),P=function(){};g.push(T||P)}})}function C(){g.forEach(function(L){return L()}),g=[]}return v}}var Ep=ar(),bp=[qi,Zi,Xi,Ki],vp=ar({defaultModifiers:bp}),Tp=[qi,Zi,Xi,Ki,Rc,Pc,Mc,Ic,kc],eo=ar({defaultModifiers:Tp});const $c=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:ar,detectOverflow:$n,createPopperBase:Ep,createPopper:eo,createPopperLite:vp,top:$e,bottom:Ye,right:Ge,left:xe,auto:ir,basePlacements:Un,start:an,end:Pn,clippingParents:dc,viewport:Ui,popper:_n,reference:hc,variationPlacements:ii,placements:ji,beforeRead:_c,read:pc,afterRead:mc,beforeMain:gc,main:Ec,afterMain:bc,beforeWrite:vc,write:Tc,afterWrite:yc,modifierPhases:Ac,applyStyles:Ki,arrow:Ic,computeStyles:Xi,eventListeners:qi,flip:Pc,hide:kc,offset:Rc,popperOffsets:Zi,preventOverflow:Mc},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const yp=1e6,Ap=1e3,li="transitionend",Cp=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),Np=e=>{do e+=Math.floor(Math.random()*yp);while(document.getElementById(e));return e},xc=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t},Fc=e=>{const t=xc(e);return t&&document.querySelector(t)?t:null},Lt=e=>{const t=xc(e);return t?document.querySelector(t):null},Lp=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),r=Number.parseFloat(n);return!s&&!r?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*Ap)},Wc=e=>{e.dispatchEvent(new Event(li))},Ot=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),jt=e=>Ot(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(e):null,jn=e=>{if(!Ot(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const s=e.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return t},Bt=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",Vc=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Vc(e.parentNode):null},Us=()=>{},hs=e=>{e.offsetHeight},Hc=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,vr=[],Op=e=>{document.readyState==="loading"?(vr.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of vr)t()}),vr.push(e)):e()},Ze=()=>document.documentElement.dir==="rtl",tt=e=>{Op(()=>{const t=Hc();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},Ct=e=>{typeof e=="function"&&e()},Uc=(e,t,n=!0)=>{if(!n){Ct(e);return}const s=5,r=Lp(t)+s;let i=!1;const o=({target:a})=>{a===t&&(i=!0,t.removeEventListener(li,o),Ct(e))};t.addEventListener(li,o),setTimeout(()=>{i||Wc(t)},r)},to=(e,t,n,s)=>{const r=e.length;let i=e.indexOf(t);return i===-1?!n&&s?e[r-1]:e[0]:(i+=n?1:-1,s&&(i=(i+r)%r),e[Math.max(0,Math.min(i,r-1))])},wp=/[^.]*(?=\..*)\.|.*/,Ip=/\..*/,Sp=/::\d+$/,Tr={};let Ta=1;const jc={mouseenter:"mouseover",mouseleave:"mouseout"},Dp=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Bc(e,t){return t&&`${t}::${Ta++}`||e.uidEvent||Ta++}function Kc(e){const t=Bc(e);return e.uidEvent=t,Tr[t]=Tr[t]||{},Tr[t]}function Pp(e,t){return function n(s){return no(s,{delegateTarget:e}),n.oneOff&&k.off(e,s.type,t),t.apply(e,[s])}}function kp(e,t,n){return function s(r){const i=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of i)if(a===o)return no(r,{delegateTarget:o}),s.oneOff&&k.off(e,r.type,t,n),n.apply(o,[r])}}function Yc(e,t,n=null){return Object.values(e).find(s=>s.callable===t&&s.delegationSelector===n)}function Gc(e,t,n){const s=typeof t=="string",r=s?n:t||n;let i=Xc(e);return Dp.has(i)||(i=e),[s,r,i]}function ya(e,t,n,s,r){if(typeof t!="string"||!e)return;let[i,o,a]=Gc(t,n,s);t in jc&&(o=(I=>function(C){if(!C.relatedTarget||C.relatedTarget!==C.delegateTarget&&!C.delegateTarget.contains(C.relatedTarget))return I.call(this,C)})(o));const u=Kc(e),f=u[a]||(u[a]={}),d=Yc(f,o,i?n:null);if(d){d.oneOff=d.oneOff&&r;return}const g=Bc(o,t.replace(wp,"")),m=i?kp(e,n,o):Pp(e,o);m.delegationSelector=i?n:null,m.callable=o,m.oneOff=r,m.uidEvent=g,f[g]=m,e.addEventListener(a,m,i)}function ci(e,t,n,s,r){const i=Yc(t[n],s,r);!i||(e.removeEventListener(n,i,Boolean(r)),delete t[n][i.uidEvent])}function Rp(e,t,n,s){const r=t[n]||{};for(const i of Object.keys(r))if(i.includes(s)){const o=r[i];ci(e,t,n,o.callable,o.delegationSelector)}}function Xc(e){return e=e.replace(Ip,""),jc[e]||e}const k={on(e,t,n,s){ya(e,t,n,s,!1)},one(e,t,n,s){ya(e,t,n,s,!0)},off(e,t,n,s){if(typeof t!="string"||!e)return;const[r,i,o]=Gc(t,n,s),a=o!==t,u=Kc(e),f=u[o]||{},d=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(f).length)return;ci(e,u,o,i,r?n:null);return}if(d)for(const g of Object.keys(u))Rp(e,u,g,t.slice(1));for(const g of Object.keys(f)){const m=g.replace(Sp,"");if(!a||t.includes(m)){const v=f[g];ci(e,u,o,v.callable,v.delegationSelector)}}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const s=Hc(),r=Xc(t),i=t!==r;let o=null,a=!0,u=!0,f=!1;i&&s&&(o=s.Event(t,n),s(e).trigger(o),a=!o.isPropagationStopped(),u=!o.isImmediatePropagationStopped(),f=o.isDefaultPrevented());let d=new Event(t,{bubbles:a,cancelable:!0});return d=no(d,n),f&&d.preventDefault(),u&&e.dispatchEvent(d),d.defaultPrevented&&o&&o.preventDefault(),d}};function no(e,t){for(const[n,s]of Object.entries(t||{}))try{e[n]=s}catch{Object.defineProperty(e,n,{configurable:!0,get(){return s}})}return e}const Mt=new Map,yr={set(e,t,n){Mt.has(e)||Mt.set(e,new Map);const s=Mt.get(e);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,n)},get(e,t){return Mt.has(e)&&Mt.get(e).get(t)||null},remove(e,t){if(!Mt.has(e))return;const n=Mt.get(e);n.delete(t),n.size===0&&Mt.delete(e)}};function Aa(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Ar(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const wt={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Ar(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Ar(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let r=s.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=Aa(e.dataset[s])}return t},getDataAttribute(e,t){return Aa(e.getAttribute(`data-bs-${Ar(t)}`))}};class _s{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const s=Ot(n)?wt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...Ot(n)?wt.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const r=n[s],i=t[s],o=Ot(i)?"element":Cp(i);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${r}".`)}}}const Mp="5.2.1";class lt extends _s{constructor(t,n){super(),t=jt(t),t&&(this._element=t,this._config=this._getConfig(n),yr.set(this._element,this.constructor.DATA_KEY,this))}dispose(){yr.remove(this._element,this.constructor.DATA_KEY),k.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,s=!0){Uc(t,n,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return yr.get(jt(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return Mp}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const lr=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,s=e.NAME;k.on(document,n,`[data-bs-dismiss="${s}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),Bt(this))return;const i=Lt(this)||this.closest(`.${s}`);e.getOrCreateInstance(i)[t]()})},$p="alert",xp="bs.alert",qc=`.${xp}`,Fp=`close${qc}`,Wp=`closed${qc}`,Vp="fade",Hp="show";class cr extends lt{static get NAME(){return $p}close(){if(k.trigger(this._element,Fp).defaultPrevented)return;this._element.classList.remove(Hp);const n=this._element.classList.contains(Vp);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),k.trigger(this._element,Wp),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=cr.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}lr(cr,"close");tt(cr);const Up="button",jp="bs.button",Bp=`.${jp}`,Kp=".data-api",Yp="active",Ca='[data-bs-toggle="button"]',Gp=`click${Bp}${Kp}`;class ur extends lt{static get NAME(){return Up}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Yp))}static jQueryInterface(t){return this.each(function(){const n=ur.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}k.on(document,Gp,Ca,e=>{e.preventDefault();const t=e.target.closest(Ca);ur.getOrCreateInstance(t).toggle()});tt(ur);const Q={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let s=e.parentNode.closest(t);for(;s;)n.push(s),s=s.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!Bt(n)&&jn(n))}},Xp="swipe",Bn=".bs.swipe",qp=`touchstart${Bn}`,zp=`touchmove${Bn}`,Qp=`touchend${Bn}`,Jp=`pointerdown${Bn}`,Zp=`pointerup${Bn}`,em="touch",tm="pen",nm="pointer-event",sm=40,rm={endCallback:null,leftCallback:null,rightCallback:null},im={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class js extends _s{constructor(t,n){super(),this._element=t,!(!t||!js.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return rm}static get DefaultType(){return im}static get NAME(){return Xp}dispose(){k.off(this._element,Bn)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Ct(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=sm)return;const n=t/this._deltaX;this._deltaX=0,n&&Ct(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(k.on(this._element,Jp,t=>this._start(t)),k.on(this._element,Zp,t=>this._end(t)),this._element.classList.add(nm)):(k.on(this._element,qp,t=>this._start(t)),k.on(this._element,zp,t=>this._move(t)),k.on(this._element,Qp,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===tm||t.pointerType===em)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const om="carousel",am="bs.carousel",qt=`.${am}`,zc=".data-api",lm="ArrowLeft",cm="ArrowRight",um=500,Xn="next",dn="prev",pn="left",Ms="right",fm=`slide${qt}`,Cr=`slid${qt}`,dm=`keydown${qt}`,hm=`mouseenter${qt}`,_m=`mouseleave${qt}`,pm=`dragstart${qt}`,mm=`load${qt}${zc}`,gm=`click${qt}${zc}`,Qc="carousel",Cs="active",Em="slide",bm="carousel-item-end",vm="carousel-item-start",Tm="carousel-item-next",ym="carousel-item-prev",Jc=".active",Zc=".carousel-item",Am=Jc+Zc,Cm=".carousel-item img",Nm=".carousel-indicators",Lm="[data-bs-slide], [data-bs-slide-to]",Om='[data-bs-ride="carousel"]',wm={[lm]:Ms,[cm]:pn},Im={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Sm={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ps extends lt{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(Nm,this._element),this._addEventListeners(),this._config.ride===Qc&&this.cycle()}static get Default(){return Im}static get DefaultType(){return Sm}static get NAME(){return om}next(){this._slide(Xn)}nextWhenVisible(){!document.hidden&&jn(this._element)&&this.next()}prev(){this._slide(dn)}pause(){this._isSliding&&Wc(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(!!this._config.ride){if(this._isSliding){k.one(this._element,Cr,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){k.one(this._element,Cr,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const r=t>s?Xn:dn;this._slide(r,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&k.on(this._element,dm,t=>this._keydown(t)),this._config.pause==="hover"&&(k.on(this._element,hm,()=>this.pause()),k.on(this._element,_m,()=>this._maybeEnableCycle())),this._config.touch&&js.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of Q.find(Cm,this._element))k.on(s,pm,r=>r.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(pn)),rightCallback:()=>this._slide(this._directionToOrder(Ms)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),um+this._config.interval))}};this._swipeHelper=new js(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=wm[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=Q.findOne(Jc,this._indicatorsElement);n.classList.remove(Cs),n.removeAttribute("aria-current");const s=Q.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(Cs),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const s=this._getActive(),r=t===Xn,i=n||to(this._getItems(),s,r,this._config.wrap);if(i===s)return;const o=this._getItemIndex(i),a=v=>k.trigger(this._element,v,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:o});if(a(fm).defaultPrevented||!s||!i)return;const f=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=i;const d=r?vm:bm,g=r?Tm:ym;i.classList.add(g),hs(i),s.classList.add(d),i.classList.add(d);const m=()=>{i.classList.remove(d,g),i.classList.add(Cs),s.classList.remove(Cs,g,d),this._isSliding=!1,a(Cr)};this._queueCallback(m,s,this._isAnimated()),f&&this.cycle()}_isAnimated(){return this._element.classList.contains(Em)}_getActive(){return Q.findOne(Am,this._element)}_getItems(){return Q.find(Zc,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Ze()?t===pn?dn:Xn:t===pn?Xn:dn}_orderToDirection(t){return Ze()?t===dn?pn:Ms:t===dn?Ms:pn}static jQueryInterface(t){return this.each(function(){const n=ps.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}k.on(document,gm,Lm,function(e){const t=Lt(this);if(!t||!t.classList.contains(Qc))return;e.preventDefault();const n=ps.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(wt.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});k.on(window,mm,()=>{const e=Q.find(Om);for(const t of e)ps.getOrCreateInstance(t)});tt(ps);const Dm="collapse",Pm="bs.collapse",ms=`.${Pm}`,km=".data-api",Rm=`show${ms}`,Mm=`shown${ms}`,$m=`hide${ms}`,xm=`hidden${ms}`,Fm=`click${ms}${km}`,Nr="show",vn="collapse",Ns="collapsing",Wm="collapsed",Vm=`:scope .${vn} .${vn}`,Hm="collapse-horizontal",Um="width",jm="height",Bm=".collapse.show, .collapse.collapsing",ui='[data-bs-toggle="collapse"]',Km={parent:null,toggle:!0},Ym={parent:"(null|element)",toggle:"boolean"};class cs extends lt{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const s=Q.find(ui);for(const r of s){const i=Fc(r),o=Q.find(i).filter(a=>a===this._element);i!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Km}static get DefaultType(){return Ym}static get NAME(){return Dm}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Bm).filter(a=>a!==this._element).map(a=>cs.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||k.trigger(this._element,Rm).defaultPrevented)return;for(const a of t)a.hide();const s=this._getDimension();this._element.classList.remove(vn),this._element.classList.add(Ns),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Ns),this._element.classList.add(vn,Nr),this._element.style[s]="",k.trigger(this._element,Mm)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||k.trigger(this._element,$m).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,hs(this._element),this._element.classList.add(Ns),this._element.classList.remove(vn,Nr);for(const r of this._triggerArray){const i=Lt(r);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Ns),this._element.classList.add(vn),k.trigger(this._element,xm)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Nr)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=jt(t.parent),t}_getDimension(){return this._element.classList.contains(Hm)?Um:jm}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(ui);for(const n of t){const s=Lt(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(t){const n=Q.find(Vm,this._config.parent);return Q.find(t,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(t,n){if(!!t.length)for(const s of t)s.classList.toggle(Wm,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const s=cs.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}k.on(document,Fm,ui,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();const t=Fc(this),n=Q.find(t);for(const s of n)cs.getOrCreateInstance(s,{toggle:!1}).toggle()});tt(cs);const Na="dropdown",Gm="bs.dropdown",cn=`.${Gm}`,so=".data-api",Xm="Escape",La="Tab",qm="ArrowUp",Oa="ArrowDown",zm=2,Qm=`hide${cn}`,Jm=`hidden${cn}`,Zm=`show${cn}`,eg=`shown${cn}`,eu=`click${cn}${so}`,tu=`keydown${cn}${so}`,tg=`keyup${cn}${so}`,mn="show",ng="dropup",sg="dropend",rg="dropstart",ig="dropup-center",og="dropdown-center",Ln='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ag=`${Ln}.${mn}`,fi=".dropdown-menu",lg=".navbar",cg=".navbar-nav",ug=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",fg=Ze()?"top-end":"top-start",dg=Ze()?"top-start":"top-end",hg=Ze()?"bottom-end":"bottom-start",_g=Ze()?"bottom-start":"bottom-end",pg=Ze()?"left-start":"right-start",mg=Ze()?"right-start":"left-start",gg="top",Eg="bottom",bg={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},vg={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class vt extends lt{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.next(this._element,fi)[0]||Q.prev(this._element,fi)[0],this._inNavbar=this._detectNavbar()}static get Default(){return bg}static get DefaultType(){return vg}static get NAME(){return Na}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Bt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!k.trigger(this._element,Zm,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(cg))for(const s of[].concat(...document.body.children))k.on(s,"mouseover",Us);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(mn),this._element.classList.add(mn),k.trigger(this._element,eg,t)}}hide(){if(Bt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!k.trigger(this._element,Qm,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))k.off(s,"mouseover",Us);this._popper&&this._popper.destroy(),this._menu.classList.remove(mn),this._element.classList.remove(mn),this._element.setAttribute("aria-expanded","false"),wt.removeDataAttribute(this._menu,"popper"),k.trigger(this._element,Jm,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Ot(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Na.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof $c>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:Ot(this._config.reference)?t=jt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=eo(t,this._menu,n)}_isShown(){return this._menu.classList.contains(mn)}_getPlacement(){const t=this._parent;if(t.classList.contains(sg))return pg;if(t.classList.contains(rg))return mg;if(t.classList.contains(ig))return gg;if(t.classList.contains(og))return Eg;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(ng)?n?dg:fg:n?_g:hg}_detectNavbar(){return this._element.closest(lg)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(wt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:n}){const s=Q.find(ug,this._menu).filter(r=>jn(r));!s.length||to(s,n,t===Oa,!s.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=vt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===zm||t.type==="keyup"&&t.key!==La)return;const n=Q.find(ag);for(const s of n){const r=vt.getInstance(s);if(!r||r._config.autoClose===!1)continue;const i=t.composedPath(),o=i.includes(r._menu);if(i.includes(r._element)||r._config.autoClose==="inside"&&!o||r._config.autoClose==="outside"&&o||r._menu.contains(t.target)&&(t.type==="keyup"&&t.key===La||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:r._element};t.type==="click"&&(a.clickEvent=t),r._completeHide(a)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),s=t.key===Xm,r=[qm,Oa].includes(t.key);if(!r&&!s||n&&!s)return;t.preventDefault();const i=this.matches(Ln)?this:Q.prev(this,Ln)[0]||Q.next(this,Ln)[0],o=vt.getOrCreateInstance(i);if(r){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),i.focus())}}k.on(document,tu,Ln,vt.dataApiKeydownHandler);k.on(document,tu,fi,vt.dataApiKeydownHandler);k.on(document,eu,vt.clearMenus);k.on(document,tg,vt.clearMenus);k.on(document,eu,Ln,function(e){e.preventDefault(),vt.getOrCreateInstance(this).toggle()});tt(vt);const wa=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ia=".sticky-top",Ls="padding-right",Sa="margin-right";class di{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ls,n=>n+t),this._setElementAttributes(wa,Ls,n=>n+t),this._setElementAttributes(Ia,Sa,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ls),this._resetElementAttributes(wa,Ls),this._resetElementAttributes(Ia,Sa)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,s){const r=this.getWidth(),i=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+r)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,n){const s=t.style.getPropertyValue(n);s&&wt.setDataAttribute(t,n,s)}_resetElementAttributes(t,n){const s=r=>{const i=wt.getDataAttribute(r,n);if(i===null){r.style.removeProperty(n);return}wt.removeDataAttribute(r,n),r.style.setProperty(n,i)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,n){if(Ot(t)){n(t);return}for(const s of Q.find(t,this._element))n(s)}}const nu="backdrop",Tg="fade",Da="show",Pa=`mousedown.bs.${nu}`,yg={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ag={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class su extends _s{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return yg}static get DefaultType(){return Ag}static get NAME(){return nu}show(t){if(!this._config.isVisible){Ct(t);return}this._append();const n=this._getElement();this._config.isAnimated&&hs(n),n.classList.add(Da),this._emulateAnimation(()=>{Ct(t)})}hide(t){if(!this._config.isVisible){Ct(t);return}this._getElement().classList.remove(Da),this._emulateAnimation(()=>{this.dispose(),Ct(t)})}dispose(){!this._isAppended||(k.off(this._element,Pa),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Tg),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=jt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),k.on(t,Pa,()=>{Ct(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Uc(t,this._getElement(),this._config.isAnimated)}}const Cg="focustrap",Ng="bs.focustrap",Bs=`.${Ng}`,Lg=`focusin${Bs}`,Og=`keydown.tab${Bs}`,wg="Tab",Ig="forward",ka="backward",Sg={autofocus:!0,trapElement:null},Dg={autofocus:"boolean",trapElement:"element"};class ru extends _s{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Sg}static get DefaultType(){return Dg}static get NAME(){return Cg}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),k.off(document,Bs),k.on(document,Lg,t=>this._handleFocusin(t)),k.on(document,Og,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,k.off(document,Bs))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const s=Q.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===ka?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===wg&&(this._lastTabNavDirection=t.shiftKey?ka:Ig)}}const Pg="modal",kg="bs.modal",ct=`.${kg}`,Rg=".data-api",Mg="Escape",$g=`hide${ct}`,xg=`hidePrevented${ct}`,iu=`hidden${ct}`,ou=`show${ct}`,Fg=`shown${ct}`,Wg=`resize${ct}`,Vg=`click.dismiss${ct}`,Hg=`mousedown.dismiss${ct}`,Ug=`keydown.dismiss${ct}`,jg=`click${ct}${Rg}`,Ra="modal-open",Bg="fade",Ma="show",Lr="modal-static",Kg=".modal.show",Yg=".modal-dialog",Gg=".modal-body",Xg='[data-bs-toggle="modal"]',qg={backdrop:!0,focus:!0,keyboard:!0},zg={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class xn extends lt{constructor(t,n){super(t,n),this._dialog=Q.findOne(Yg,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new di,this._addEventListeners()}static get Default(){return qg}static get DefaultType(){return zg}static get NAME(){return Pg}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||k.trigger(this._element,ou,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ra),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||k.trigger(this._element,$g).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ma),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])k.off(t,ct);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new su({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ru({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=Q.findOne(Gg,this._dialog);n&&(n.scrollTop=0),hs(this._element),this._element.classList.add(Ma);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,k.trigger(this._element,Fg,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){k.on(this._element,Ug,t=>{if(t.key===Mg){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),k.on(window,Wg,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),k.on(this._element,Hg,t=>{k.one(this._element,Vg,n=>{if(!(this._dialog.contains(t.target)||this._dialog.contains(n.target))){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ra),this._resetAdjustments(),this._scrollBar.reset(),k.trigger(this._element,iu)})}_isAnimated(){return this._element.classList.contains(Bg)}_triggerBackdropTransition(){if(k.trigger(this._element,xg).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Lr)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Lr),this._queueCallback(()=>{this._element.classList.remove(Lr),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!t){const r=Ze()?"paddingLeft":"paddingRight";this._element.style[r]=`${n}px`}if(!s&&t){const r=Ze()?"paddingRight":"paddingLeft";this._element.style[r]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const s=xn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](n)}})}}k.on(document,jg,Xg,function(e){const t=Lt(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),k.one(t,ou,r=>{r.defaultPrevented||k.one(t,iu,()=>{jn(this)&&this.focus()})});const n=Q.findOne(Kg);n&&xn.getInstance(n).hide(),xn.getOrCreateInstance(t).toggle(this)});lr(xn);tt(xn);const Qg="offcanvas",Jg="bs.offcanvas",Pt=`.${Jg}`,au=".data-api",Zg=`load${Pt}${au}`,eE="Escape",$a="show",xa="showing",Fa="hiding",tE="offcanvas-backdrop",lu=".offcanvas.show",nE=`show${Pt}`,sE=`shown${Pt}`,rE=`hide${Pt}`,Wa=`hidePrevented${Pt}`,cu=`hidden${Pt}`,iE=`resize${Pt}`,oE=`click${Pt}${au}`,aE=`keydown.dismiss${Pt}`,lE='[data-bs-toggle="offcanvas"]',cE={backdrop:!0,keyboard:!0,scroll:!1},uE={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Kt extends lt{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return cE}static get DefaultType(){return uE}static get NAME(){return Qg}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||k.trigger(this._element,nE,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new di().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(xa);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add($a),this._element.classList.remove(xa),k.trigger(this._element,sE,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||k.trigger(this._element,rE).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Fa),this._backdrop.hide();const n=()=>{this._element.classList.remove($a,Fa),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new di().reset(),k.trigger(this._element,cu)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){k.trigger(this._element,Wa);return}this.hide()},n=Boolean(this._config.backdrop);return new su({className:tE,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new ru({trapElement:this._element})}_addEventListeners(){k.on(this._element,aE,t=>{if(t.key===eE){if(!this._config.keyboard){k.trigger(this._element,Wa);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const n=Kt.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}k.on(document,oE,lE,function(e){const t=Lt(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Bt(this))return;k.one(t,cu,()=>{jn(this)&&this.focus()});const n=Q.findOne(lu);n&&n!==t&&Kt.getInstance(n).hide(),Kt.getOrCreateInstance(t).toggle(this)});k.on(window,Zg,()=>{for(const e of Q.find(lu))Kt.getOrCreateInstance(e).show()});k.on(window,iE,()=>{for(const e of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&Kt.getOrCreateInstance(e).hide()});lr(Kt);tt(Kt);const fE=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),dE=/^aria-[\w-]*$/i,hE=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,_E=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,pE=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?fE.has(n)?Boolean(hE.test(e.nodeValue)||_E.test(e.nodeValue)):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(n))},uu={"*":["class","dir","id","lang","role",dE],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function mE(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const r=new window.DOMParser().parseFromString(e,"text/html"),i=[].concat(...r.body.querySelectorAll("*"));for(const o of i){const a=o.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){o.remove();continue}const u=[].concat(...o.attributes),f=[].concat(t["*"]||[],t[a]||[]);for(const d of u)pE(d,f)||o.removeAttribute(d.nodeName)}return r.body.innerHTML}const gE="TemplateFactory",EE={allowList:uu,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},bE={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},vE={entry:"(string|element|function|null)",selector:"(string|element)"};class TE extends _s{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return EE}static get DefaultType(){return bE}static get NAME(){return gE}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(t,i,r);const n=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,s]of Object.entries(t))super._typeCheckConfig({selector:n,entry:s},vE)}_setContent(t,n,s){const r=Q.findOne(s,t);if(!!r){if(n=this._resolvePossibleFunction(n),!n){r.remove();return}if(Ot(n)){this._putElementInTemplate(jt(n),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(n);return}r.textContent=n}}_maybeSanitize(t){return this._config.sanitize?mE(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return typeof t=="function"?t(this):t}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const yE="tooltip",AE=new Set(["sanitize","allowList","sanitizeFn"]),Or="fade",CE="modal",Os="show",NE=".tooltip-inner",Va=`.${CE}`,Ha="hide.bs.modal",qn="hover",wr="focus",LE="click",OE="manual",wE="hide",IE="hidden",SE="show",DE="shown",PE="inserted",kE="click",RE="focusin",ME="focusout",$E="mouseenter",xE="mouseleave",FE={AUTO:"auto",TOP:"top",RIGHT:Ze()?"left":"right",BOTTOM:"bottom",LEFT:Ze()?"right":"left"},WE={allowList:uu,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},VE={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Kn extends lt{constructor(t,n){if(typeof $c>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return WE}static get DefaultType(){return VE}static get NAME(){return yE}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(!!this._isEnabled){if(t){const n=this._initializeOnDelegatedTarget(t);n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter():n._leave();return}if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),k.off(this._element.closest(Va),Ha,this._hideModalHandler),this.tip&&this.tip.remove(),this._config.originalTitle&&this._element.setAttribute("title",this._config.originalTitle),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=k.trigger(this._element,this.constructor.eventName(SE)),s=(Vc(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s)return;this.tip&&(this.tip.remove(),this.tip=null);const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),k.trigger(this._element,this.constructor.eventName(PE))),this._popper?this._popper.update():this._popper=this._createPopper(r),r.classList.add(Os),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))k.on(a,"mouseover",Us);const o=()=>{k.trigger(this._element,this.constructor.eventName(DE)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||k.trigger(this._element,this.constructor.eventName(wE)).defaultPrevented)return;const n=this._getTipElement();if(n.classList.remove(Os),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))k.off(r,"mouseover",Us);this._activeTrigger[LE]=!1,this._activeTrigger[wr]=!1,this._activeTrigger[qn]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||n.remove(),this._element.removeAttribute("aria-describedby"),k.trigger(this._element,this.constructor.eventName(IE)),this._disposePopper())};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(Or,Os),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=Np(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(Or),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new TE({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[NE]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Or)}_isShown(){return this.tip&&this.tip.classList.contains(Os)}_createPopper(t){const n=typeof this._config.placement=="function"?this._config.placement.call(this,t,this._element):this._config.placement,s=FE[n.toUpperCase()];return eo(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return typeof t=="function"?t.call(this._element):t}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")k.on(this._element,this.constructor.eventName(kE),this._config.selector,s=>this.toggle(s));else if(n!==OE){const s=n===qn?this.constructor.eventName($E):this.constructor.eventName(RE),r=n===qn?this.constructor.eventName(xE):this.constructor.eventName(ME);k.on(this._element,s,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusin"?wr:qn]=!0,o._enter()}),k.on(this._element,r,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusout"?wr:qn]=o._element.contains(i.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},k.on(this._element.closest(Va),Ha,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._config.originalTitle;!t||(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=wt.getDataAttributes(this._element);for(const s of Object.keys(n))AE.has(s)&&delete n[s];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:jt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t.originalTitle=this._element.getAttribute("title")||"",typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(t[n]=this._config[n]);return t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each(function(){const n=Kn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}tt(Kn);const HE="popover",UE=".popover-header",jE=".popover-body",BE={...Kn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},KE={...Kn.DefaultType,content:"(null|string|element|function)"};class ro extends Kn{static get Default(){return BE}static get DefaultType(){return KE}static get NAME(){return HE}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[UE]:this._getTitle(),[jE]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=ro.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}tt(ro);const YE="scrollspy",GE="bs.scrollspy",io=`.${GE}`,XE=".data-api",qE=`activate${io}`,Ua=`click${io}`,zE=`load${io}${XE}`,QE="dropdown-item",hn="active",JE='[data-bs-spy="scroll"]',Ir="[href]",ZE=".nav, .list-group",ja=".nav-link",eb=".nav-item",tb=".list-group-item",nb=`${ja}, ${eb} > ${ja}, ${tb}`,sb=".dropdown",rb=".dropdown-toggle",ib={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},ob={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class fr extends lt{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ib}static get DefaultType(){return ob}static get NAME(){return YE}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=jt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){!this._config.smoothScroll||(k.off(this._config.target,Ua),k.on(this._config.target,Ua,Ir,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const s=this._rootElement||window,r=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:r,behavior:"smooth"});return}s.scrollTop=r}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&a){if(s(o),!r)return;continue}!i&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Q.find(Ir,this._config.target);for(const n of t){if(!n.hash||Bt(n))continue;const s=Q.findOne(n.hash,this._element);jn(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(hn),this._activateParents(t),k.trigger(this._element,qE,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(QE)){Q.findOne(rb,t.closest(sb)).classList.add(hn);return}for(const n of Q.parents(t,ZE))for(const s of Q.prev(n,nb))s.classList.add(hn)}_clearActiveClass(t){t.classList.remove(hn);const n=Q.find(`${Ir}.${hn}`,t);for(const s of n)s.classList.remove(hn)}static jQueryInterface(t){return this.each(function(){const n=fr.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}k.on(window,zE,()=>{for(const e of Q.find(JE))fr.getOrCreateInstance(e)});tt(fr);const ab="tab",lb="bs.tab",un=`.${lb}`,cb=`hide${un}`,ub=`hidden${un}`,fb=`show${un}`,db=`shown${un}`,hb=`click${un}`,_b=`keydown${un}`,pb=`load${un}`,mb="ArrowLeft",Ba="ArrowRight",gb="ArrowUp",Ka="ArrowDown",xt="active",Ya="fade",Sr="show",Eb="dropdown",bb=".dropdown-toggle",vb=".dropdown-menu",Tb=".dropdown-item",Dr=":not(.dropdown-toggle)",yb='.list-group, .nav, [role="tablist"]',Ab=".nav-item, .list-group-item",Cb=`.nav-link${Dr}, .list-group-item${Dr}, [role="tab"]${Dr}`,fu='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Pr=`${Cb}, ${fu}`,Nb=`.${xt}[data-bs-toggle="tab"], .${xt}[data-bs-toggle="pill"], .${xt}[data-bs-toggle="list"]`;class Fn extends lt{constructor(t){super(t),this._parent=this._element.closest(yb),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),k.on(this._element,_b,n=>this._keydown(n)))}static get NAME(){return ab}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),s=n?k.trigger(n,cb,{relatedTarget:t}):null;k.trigger(t,fb,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(xt),this._activate(Lt(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Sr);return}t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),k.trigger(t,db,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Ya))}_deactivate(t,n){if(!t)return;t.classList.remove(xt),t.blur(),this._deactivate(Lt(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Sr);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),k.trigger(t,ub,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Ya))}_keydown(t){if(![mb,Ba,gb,Ka].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=[Ba,Ka].includes(t.key),s=to(this._getChildren().filter(r=>!Bt(r)),t.target,n,!0);s&&Fn.getOrCreateInstance(s).show()}_getChildren(){return Q.find(Pr,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",n),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=Lt(t);!n||(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,n){const s=this._getOuterElement(t);if(!s.classList.contains(Eb))return;const r=(i,o)=>{const a=Q.findOne(i,s);a&&a.classList.toggle(o,n)};r(bb,xt),r(vb,Sr),r(Tb,xt),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,s){t.hasAttribute(n)||t.setAttribute(n,s)}_elemIsActive(t){return t.classList.contains(xt)}_getInnerElement(t){return t.matches(Pr)?t:Q.findOne(Pr,t)}_getOuterElement(t){return t.closest(Ab)||t}static jQueryInterface(t){return this.each(function(){const n=Fn.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}k.on(document,hb,fu,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!Bt(this)&&Fn.getOrCreateInstance(this).show()});k.on(window,pb,()=>{for(const e of Q.find(Nb))Fn.getOrCreateInstance(e)});tt(Fn);const Lb="toast",Ob="bs.toast",zt=`.${Ob}`,wb=`mouseover${zt}`,Ib=`mouseout${zt}`,Sb=`focusin${zt}`,Db=`focusout${zt}`,Pb=`hide${zt}`,kb=`hidden${zt}`,Rb=`show${zt}`,Mb=`shown${zt}`,$b="fade",Ga="hide",ws="show",Is="showing",xb={animation:"boolean",autohide:"boolean",delay:"number"},Fb={animation:!0,autohide:!0,delay:5e3};class dr extends lt{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Fb}static get DefaultType(){return xb}static get NAME(){return Lb}show(){if(k.trigger(this._element,Rb).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add($b);const n=()=>{this._element.classList.remove(Is),k.trigger(this._element,Mb),this._maybeScheduleHide()};this._element.classList.remove(Ga),hs(this._element),this._element.classList.add(ws,Is),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||k.trigger(this._element,Pb).defaultPrevented)return;const n=()=>{this._element.classList.add(Ga),this._element.classList.remove(Is,ws),k.trigger(this._element,kb)};this._element.classList.add(Is),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ws),super.dispose()}isShown(){return this._element.classList.contains(ws)}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=n;break;case"focusin":case"focusout":this._hasKeyboardInteraction=n;break}if(n){this._clearTimeout();return}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){k.on(this._element,wb,t=>this._onInteraction(t,!0)),k.on(this._element,Ib,t=>this._onInteraction(t,!1)),k.on(this._element,Sb,t=>this._onInteraction(t,!0)),k.on(this._element,Db,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=dr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}lr(dr);tt(dr);const Wb="\u041E\u0442\u0434\u0435\u043B \xAB\u041A\xBB \u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u0434\u0435\u043B \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u043E \u0433. \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0443 \u0438 \u041B\u0435\u043D\u0438\u043D\u0433\u0440\u0430\u0434\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",Vb={"p-1":"\u041E\u0442\u0434\u0435\u043B \xAB\u041A\xBB \u041C\u0412\u0414 \u0420\u043E\u0441\u0441\u0438\u0438 \u043F\u043E \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0443 \u0438 \u041B\u041E \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0441\u0432\u043E\u0435\u0439 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0438 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u0435, \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435, \u043F\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u0438\u0435","li-1":"\u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438:","li-1-1":"- \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0439 \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438;","li-1-2":"- \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0432\u0440\u0435\u0434\u043E\u043D\u043E\u0441\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C;","li-1-3":"- \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043B\u0438\u0431\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439;","li-1-4":"- \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432 \u0441\u0444\u0435\u0440\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.","li-2":"\u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439, \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u043C\u044B\u0445 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439 (\u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0441\u0435\u0442\u044C \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442) \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0442\u0438\u0432 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F \u043D\u0435\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043B\u0435\u0442\u043D\u0438\u0445 \u0438 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043D\u0440\u0430\u0432\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438:","li-2-1":"- \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432 \u0441 \u043F\u043E\u0440\u043D\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u043D\u0435\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043B\u0435\u0442\u043D\u0438\u0445;","li-2-2":"- \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0435\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043B\u0435\u0442\u043D\u0435\u0433\u043E \u0432 \u0446\u0435\u043B\u044F\u0445 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u043D\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432.","li-3":"\u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u043C \u043E\u0431\u043E\u0440\u043E\u0442\u043E\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043D\u0435\u0433\u043B\u0430\u0441\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.","li-4":"\u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0438\u043B\u0438 \u0441\u043C\u0435\u0436\u043D\u044B\u0445 \u043F\u0440\u0430\u0432.","p-2":"\u041F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u0432 \u043D\u0430\u0448 \u0430\u0434\u0440\u0435\u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u043E \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0432 \u0435\u0435 \u043D\u0430 \u044D\u043B. \u043F\u043E\u0447\u0442\u0443","p-3":"\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u043C\u0435\u044E\u0449\u0438\u0445\u0441\u044F \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0433\u043E\u0442\u043E\u0432\u044F\u0449\u0438\u0445\u0441\u044F \u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043E\u0442\u0434\u0435\u043B \u043F\u043E\u043B\u0438\u0446\u0438\u0438 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435"},Hb={title:Wb,content:Vb},Ub="Department K of the Ministry of Internal Affairs of the Russian Federation for St. Petersburg and the Leningrad Region",jb={"p-1":"Department 'K' of the Ministry of Internal Affairs of Russia for St. Petersburg and the Leningrad Region, within its competence, detection, prevention, suppression and detection","li-1":"crimes in the field of computer information:","li-1-1":"- illegal access to legally protected computer information;","li-1-2":"- creation, use and distribution of malicious computer programs;","li-1-3":"- violation of the rules for the operation of means of storage, processing or transmission of computer information or information and telecommunication networks;","li-1-4":"- computer information fraud.","li-2":"crimes committed using information and telecommunication networks (including the Internet) and directed against the health of minors and public morality:","li-2-1":"- production and distribution of materials or objects with pornographic images of minors;","li-2-2":"- use of a minor for the purpose of making pornographic materials or items.","li-3":"crimes related to the illegal circulation of special technical means designed to secretly obtain information.","li-4":"crimes related to the illegal use of objects of copyright or related rights.","p-2":"You can send information anonymously to us by sending it to e-mail","p-3":"If there is information about committed or upcoming crimes, you must contact the nearest police department or write a corresponding statement on the website"},Bb={title:Ub,content:jb},Kb="rus",Yb={rus:Hb,eng:Bb},Gb=localStorage.getItem("lang"),Xb=Object.assign(Yb),qb=c_({legacy:!1,locale:Gb||Kb,fallbackLocale:"rus",messages:Xb});$d(M_,{setup(){const{t:e}=fs();return{t:e}}}).use(qb).mount("#app");