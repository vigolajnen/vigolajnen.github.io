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

function pi(e, t) {
    const n = Object.create(null),
        s = e.split(",");
    for (let r = 0; r < s.length; r++) n[s[r]] = !0;
    return t ? r => !!n[r.toLowerCase()] : r => !!n[r]
}
const mu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    gu = pi(mu);

function za(e) { return !!e || e === "" }

function mi(e) {
    if (Y(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n],
                r = Oe(s) ? vu(s) : mi(s);
            if (r)
                for (const i in r) t[i] = r[i]
        }
        return t
    } else { if (Oe(e)) return e; if (de(e)) return e }
}
const Eu = /;(?![^(]*\))/g,
    bu = /:(.+)/;

function vu(e) {
    const t = {};
    return e.split(Eu).forEach(n => {
        if (n) {
            const s = n.split(bu);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }), t
}

function gi(e) {
    let t = "";
    if (Oe(e)) t = e;
    else if (Y(e))
        for (let n = 0; n < e.length; n++) {
            const s = gi(e[n]);
            s && (t += s + " ")
        } else if (de(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}
const Ve = e => Oe(e) ? e : e == null ? "" : Y(e) || de(e) && (e.toString === el || !z(e.toString)) ? JSON.stringify(e, Qa, 2) : String(e),
    Qa = (e, t) => t && t.__v_isRef ? Qa(e, t.value) : yn(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
    } : Ja(t) ? {
        [`Set(${t.size})`]: [...t.values()]
    } : de(t) && !Y(t) && !tl(t) ? String(t) : t,
    le = {},
    Tn = [],
    lt = () => {},
    Tu = () => !1,
    yu = /^on[^a-z]/,
    Ks = e => yu.test(e),
    Ei = e => e.startsWith("onUpdate:"),
    De = Object.assign,
    bi = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    Au = Object.prototype.hasOwnProperty,
    se = (e, t) => Au.call(e, t),
    Y = Array.isArray,
    yn = e => Ys(e) === "[object Map]",
    Ja = e => Ys(e) === "[object Set]",
    z = e => typeof e == "function",
    Oe = e => typeof e == "string",
    vi = e => typeof e == "symbol",
    de = e => e !== null && typeof e == "object",
    Za = e => de(e) && z(e.then) && z(e.catch),
    el = Object.prototype.toString,
    Ys = e => el.call(e),
    Cu = e => Ys(e).slice(8, -1),
    tl = e => Ys(e) === "[object Object]",
    Ti = e => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Ss = pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Gs = e => { const t = Object.create(null); return n => t[n] || (t[n] = e(n)) },
    Nu = /-(\w)/g,
    On = Gs(e => e.replace(Nu, (t, n) => n ? n.toUpperCase() : "")),
    Lu = /\B([A-Z])/g,
    Wn = Gs(e => e.replace(Lu, "-$1").toLowerCase()),
    nl = Gs(e => e.charAt(0).toUpperCase() + e.slice(1)),
    _r = Gs(e => e ? `on${nl(e)}` : ""),
    ns = (e, t) => !Object.is(e, t),
    pr = (e, t) => { for (let n = 0; n < e.length; n++) e[n](t) },
    Ms = (e, t, n) => { Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n }) },
    Ou = e => { const t = parseFloat(e); return isNaN(t) ? e : t };
let fo;
const wu = () => fo || (fo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let _t;
class sl {
    constructor(t = !1) { this.active = !0, this.effects = [], this.cleanups = [], !t && _t && (this.parent = _t, this.index = (_t.scopes || (_t.scopes = [])).push(this) - 1) }
    run(t) { if (this.active) { const n = _t; try { return _t = this, t() } finally { _t = n } } }
    on() { _t = this }
    off() { _t = this.parent }
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

function Iu(e) { return new sl(e) }

function Su(e, t = _t) { t && t.active && t.effects.push(e) }
const yi = e => { const t = new Set(e); return t.w = 0, t.n = 0, t },
    rl = e => (e.w & Vt) > 0,
    il = e => (e.n & Vt) > 0,
    Du = ({ deps: e }) => {
        if (e.length)
            for (let t = 0; t < e.length; t++) e[t].w |= Vt
    },
    Pu = e => {
        const { deps: t } = e;
        if (t.length) {
            let n = 0;
            for (let s = 0; s < t.length; s++) {
                const r = t[s];
                rl(r) && !il(r) ? r.delete(e) : t[n++] = r, r.w &= ~Vt, r.n &= ~Vt
            }
            t.length = n
        }
    },
    $r = new WeakMap;
let zn = 0,
    Vt = 1;
const Rr = 30;
let rt;
const sn = Symbol(""),
    Mr = Symbol("");
class Ai {
    constructor(t, n = null, s) { this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Su(this, s) }
    run() {
        if (!this.active) return this.fn();
        let t = rt,
            n = Ft;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try { return this.parent = rt, rt = this, Ft = !0, Vt = 1 << ++zn, zn <= Rr ? Du(this) : ho(this), this.fn() } finally { zn <= Rr && Pu(this), Vt = 1 << --zn, rt = this.parent, Ft = n, this.parent = void 0, this.deferStop && this.stop() }
    }
    stop() { rt === this ? this.deferStop = !0 : this.active && (ho(this), this.onStop && this.onStop(), this.active = !1) }
}

function ho(e) {
    const { deps: t } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}
let Ft = !0;
const ol = [];

function Vn() { ol.push(Ft), Ft = !1 }

function Hn() {
    const e = ol.pop();
    Ft = e === void 0 ? !0 : e
}

function Ye(e, t, n) {
    if (Ft && rt) {
        let s = $r.get(e);
        s || $r.set(e, s = new Map);
        let r = s.get(n);
        r || s.set(n, r = yi()), al(r)
    }
}

function al(e, t) {
    let n = !1;
    zn <= Rr ? il(e) || (e.n |= Vt, n = !rl(e)) : n = !e.has(rt), n && (e.add(rt), rt.deps.push(e))
}

function It(e, t, n, s, r, i) {
    const o = $r.get(e);
    if (!o) return;
    let a = [];
    if (t === "clear") a = [...o.values()];
    else if (n === "length" && Y(e)) o.forEach((u, f) => {
        (f === "length" || f >= s) && a.push(u)
    });
    else switch (n !== void 0 && a.push(o.get(n)), t) {
        case "add":
            Y(e) ? Ti(n) && a.push(o.get("length")) : (a.push(o.get(sn)), yn(e) && a.push(o.get(Mr)));
            break;
        case "delete":
            Y(e) || (a.push(o.get(sn)), yn(e) && a.push(o.get(Mr)));
            break;
        case "set":
            yn(e) && a.push(o.get(sn));
            break
    }
    if (a.length === 1) a[0] && xr(a[0]);
    else {
        const u = [];
        for (const f of a) f && u.push(...f);
        xr(yi(u))
    }
}

function xr(e, t) { const n = Y(e) ? e : [...e]; for (const s of n) s.computed && _o(s); for (const s of n) s.computed || _o(s) }

function _o(e, t) {
    (e !== rt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const ku = pi("__proto__,__v_isRef,__isVue"),
    ll = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(vi)),
    $u = Ci(),
    Ru = Ci(!1, !0),
    Mu = Ci(!0),
    po = xu();

function xu() { const e = {}; return ["includes", "indexOf", "lastIndexOf"].forEach(t => { e[t] = function(...n) { const s = ie(this); for (let i = 0, o = this.length; i < o; i++) Ye(s, "get", i + ""); const r = s[t](...n); return r === -1 || r === !1 ? s[t](...n.map(ie)) : r } }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => { e[t] = function(...n) { Vn(); const s = ie(this)[t].apply(this, n); return Hn(), s } }), e }

function Ci(e = !1, t = !1) { return function(s, r, i) { if (r === "__v_isReactive") return !e; if (r === "__v_isReadonly") return e; if (r === "__v_isShallow") return t; if (r === "__v_raw" && i === (e ? t ? Zu : hl : t ? dl : fl).get(s)) return s; const o = Y(s); if (!e && o && se(po, r)) return Reflect.get(po, r, i); const a = Reflect.get(s, r, i); return (vi(r) ? ll.has(r) : ku(r)) || (e || Ye(s, "get", r), t) ? a : Le(a) ? o && Ti(r) ? a : a.value : de(a) ? e ? _l(a) : Oi(a) : a } }
const Fu = cl(),
    Wu = cl(!0);

function cl(e = !1) {
    return function(n, s, r, i) {
        let o = n[s];
        if (wn(o) && Le(o) && !Le(r)) return !1;
        if (!e && (!xs(r) && !wn(r) && (o = ie(o), r = ie(r)), !Y(n) && Le(o) && !Le(r))) return o.value = r, !0;
        const a = Y(n) && Ti(s) ? Number(s) < n.length : se(n, s),
            u = Reflect.set(n, s, r, i);
        return n === ie(i) && (a ? ns(r, o) && It(n, "set", s, r) : It(n, "add", s, r)), u
    }
}

function Vu(e, t) {
    const n = se(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && n && It(e, "delete", t, void 0), s
}

function Hu(e, t) { const n = Reflect.has(e, t); return (!vi(t) || !ll.has(t)) && Ye(e, "has", t), n }

function Uu(e) { return Ye(e, "iterate", Y(e) ? "length" : sn), Reflect.ownKeys(e) }
const ul = { get: $u, set: Fu, deleteProperty: Vu, has: Hu, ownKeys: Uu },
    ju = { get: Mu, set(e, t) { return !0 }, deleteProperty(e, t) { return !0 } },
    Bu = De({}, ul, { get: Ru, set: Wu }),
    Ni = e => e,
    Xs = e => Reflect.getPrototypeOf(e);

function gs(e, t, n = !1, s = !1) {
    e = e.__v_raw;
    const r = ie(e),
        i = ie(t);
    n || (t !== i && Ye(r, "get", t), Ye(r, "get", i));
    const { has: o } = Xs(r), a = s ? Ni : n ? Ii : ss;
    if (o.call(r, t)) return a(e.get(t));
    if (o.call(r, i)) return a(e.get(i));
    e !== r && e.get(t)
}

function Es(e, t = !1) {
    const n = this.__v_raw,
        s = ie(n),
        r = ie(e);
    return t || (e !== r && Ye(s, "has", e), Ye(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r)
}

function bs(e, t = !1) { return e = e.__v_raw, !t && Ye(ie(e), "iterate", sn), Reflect.get(e, "size", e) }

function mo(e) { e = ie(e); const t = ie(this); return Xs(t).has.call(t, e) || (t.add(e), It(t, "add", e, e)), this }

function go(e, t) {
    t = ie(t);
    const n = ie(this),
        { has: s, get: r } = Xs(n);
    let i = s.call(n, e);
    i || (e = ie(e), i = s.call(n, e));
    const o = r.call(n, e);
    return n.set(e, t), i ? ns(t, o) && It(n, "set", e, t) : It(n, "add", e, t), this
}

function Eo(e) {
    const t = ie(this),
        { has: n, get: s } = Xs(t);
    let r = n.call(t, e);
    r || (e = ie(e), r = n.call(t, e)), s && s.call(t, e);
    const i = t.delete(e);
    return r && It(t, "delete", e, void 0), i
}

function bo() {
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
            u = t ? Ni : e ? Ii : ss;
        return !e && Ye(a, "iterate", sn), o.forEach((f, d) => s.call(r, u(f), u(d), i))
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
            d = n ? Ni : t ? Ii : ss;
        return !t && Ye(i, "iterate", u ? Mr : sn), { next() { const { value: g, done: m } = f.next(); return m ? { value: g, done: m } : { value: a ? [d(g[0]), d(g[1])] : d(g), done: m } }, [Symbol.iterator]() { return this } }
    }
}

function kt(e) { return function(...t) { return e === "delete" ? !1 : this } }

function Ku() {
    const e = {get(i) { return gs(this, i) }, get size() { return bs(this) }, has: Es, add: mo, set: go, delete: Eo, clear: bo, forEach: vs(!1, !1) },
        t = {get(i) { return gs(this, i, !1, !0) }, get size() { return bs(this) }, has: Es, add: mo, set: go, delete: Eo, clear: bo, forEach: vs(!1, !0) },
        n = {get(i) { return gs(this, i, !0) }, get size() { return bs(this, !0) }, has(i) { return Es.call(this, i, !0) }, add: kt("add"), set: kt("set"), delete: kt("delete"), clear: kt("clear"), forEach: vs(!0, !1) },
        s = {get(i) { return gs(this, i, !0, !0) }, get size() { return bs(this, !0) }, has(i) { return Es.call(this, i, !0) }, add: kt("add"), set: kt("set"), delete: kt("delete"), clear: kt("clear"), forEach: vs(!0, !0) };
    return ["keys", "values", "entries", Symbol.iterator].forEach(i => { e[i] = Ts(i, !1, !1), n[i] = Ts(i, !0, !1), t[i] = Ts(i, !1, !0), s[i] = Ts(i, !0, !0) }), [e, n, t, s]
}
const [Yu, Gu, Xu, qu] = Ku();

function Li(e, t) { const n = t ? e ? qu : Xu : e ? Gu : Yu; return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(se(n, r) && r in s ? n : s, r, i) }
const zu = { get: Li(!1, !1) },
    Qu = { get: Li(!1, !0) },
    Ju = { get: Li(!0, !1) },
    fl = new WeakMap,
    dl = new WeakMap,
    hl = new WeakMap,
    Zu = new WeakMap;

function ef(e) {
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

function tf(e) { return e.__v_skip || !Object.isExtensible(e) ? 0 : ef(Cu(e)) }

function Oi(e) { return wn(e) ? e : wi(e, !1, ul, zu, fl) }

function nf(e) { return wi(e, !1, Bu, Qu, dl) }

function _l(e) { return wi(e, !0, ju, Ju, hl) }

function wi(e, t, n, s, r) { if (!de(e) || e.__v_raw && !(t && e.__v_isReactive)) return e; const i = r.get(e); if (i) return i; const o = tf(e); if (o === 0) return e; const a = new Proxy(e, o === 2 ? s : n); return r.set(e, a), a }

function An(e) { return wn(e) ? An(e.__v_raw) : !!(e && e.__v_isReactive) }

function wn(e) { return !!(e && e.__v_isReadonly) }

function xs(e) { return !!(e && e.__v_isShallow) }

function pl(e) { return An(e) || wn(e) }

function ie(e) { const t = e && e.__v_raw; return t ? ie(t) : e }

function ml(e) { return Ms(e, "__v_skip", !0), e }
const ss = e => de(e) ? Oi(e) : e,
    Ii = e => de(e) ? _l(e) : e;

function gl(e) { Ft && rt && (e = ie(e), al(e.dep || (e.dep = yi()))) }

function El(e, t) { e = ie(e), e.dep && xr(e.dep) }

function Le(e) { return !!(e && e.__v_isRef === !0) }

function it(e) { return bl(e, !1) }

function sf(e) { return bl(e, !0) }

function bl(e, t) { return Le(e) ? e : new rf(e, t) }
class rf {
    constructor(t, n) { this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ie(t), this._value = n ? t : ss(t) }
    get value() { return gl(this), this._value }
    set value(t) {
        const n = this.__v_isShallow || xs(t) || wn(t);
        t = n ? t : ie(t), ns(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ss(t), El(this))
    }
}

function of(e) { return Le(e) ? e.value : e }
const af = { get: (e, t, n) => of(Reflect.get(e, t, n)), set: (e, t, n, s) => { const r = e[t]; return Le(r) && !Le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s) } };

function vl(e) { return An(e) ? e : new Proxy(e, af) }
var Tl;
class lf {
    constructor(t, n, s, r) { this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Tl] = !1, this._dirty = !0, this.effect = new Ai(t, () => { this._dirty || (this._dirty = !0, El(this)) }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s }
    get value() { const t = ie(this); return gl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value }
    set value(t) { this._setter(t) }
}
Tl = "__v_isReadonly";

function cf(e, t, n = !1) { let s, r; const i = z(e); return i ? (s = e, r = lt) : (s = e.get, r = e.set), new lf(s, r, i || !r, n) }

function Wt(e, t, n, s) { let r; try { r = s ? e(...s) : e() } catch (i) { qs(i, t, n) } return r }

function Qe(e, t, n, s) { if (z(e)) { const i = Wt(e, t, n, s); return i && Za(i) && i.catch(o => { qs(o, t, n) }), i } const r = []; for (let i = 0; i < e.length; i++) r.push(Qe(e[i], t, n, s)); return r }

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
    uf(e, n, r, s)
}

function uf(e, t, n, s = !0) { console.error(e) }
let rs = !1,
    Fr = !1;
const Se = [];
let gt = 0;
const Cn = [];
let At = null,
    en = 0;
const yl = Promise.resolve();
let Si = null;

function ff(e) { const t = Si || yl; return e ? t.then(this ? e.bind(this) : e) : t }

function df(e) {
    let t = gt + 1,
        n = Se.length;
    for (; t < n;) {
        const s = t + n >>> 1;
        is(Se[s]) < e ? t = s + 1 : n = s
    }
    return t
}

function Di(e) {
    (!Se.length || !Se.includes(e, rs && e.allowRecurse ? gt + 1 : gt)) && (e.id == null ? Se.push(e) : Se.splice(df(e.id), 0, e), Al())
}

function Al() {!rs && !Fr && (Fr = !0, Si = yl.then(Nl)) }

function hf(e) {
    const t = Se.indexOf(e);
    t > gt && Se.splice(t, 1)
}

function _f(e) { Y(e) ? Cn.push(...e) : (!At || !At.includes(e, e.allowRecurse ? en + 1 : en)) && Cn.push(e), Al() }

function vo(e, t = rs ? gt + 1 : 0) {
    for (; t < Se.length; t++) {
        const n = Se[t];
        n && n.pre && (Se.splice(t, 1), t--, n())
    }
}

function Cl(e) {
    if (Cn.length) {
        const t = [...new Set(Cn)];
        if (Cn.length = 0, At) { At.push(...t); return }
        for (At = t, At.sort((n, s) => is(n) - is(s)), en = 0; en < At.length; en++) At[en]();
        At = null, en = 0
    }
}
const is = e => e.id == null ? 1 / 0 : e.id,
    pf = (e, t) => { const n = is(e) - is(t); if (n === 0) { if (e.pre && !t.pre) return -1; if (t.pre && !e.pre) return 1 } return n };

function Nl(e) {
    Fr = !1, rs = !0, Se.sort(pf);
    const t = lt;
    try {
        for (gt = 0; gt < Se.length; gt++) {
            const n = Se[gt];
            n && n.active !== !1 && Wt(n, null, 14)
        }
    } finally { gt = 0, Se.length = 0, Cl(), rs = !1, Si = null, (Se.length || Cn.length) && Nl() }
}

function mf(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || le;
    let r = n;
    const i = t.startsWith("update:"),
        o = i && t.slice(7);
    if (o && o in s) {
        const d = `${o==="modelValue"?"model":o}Modifiers`,
            { number: g, trim: m } = s[d] || le;
        m && (r = n.map(v => v.trim())), g && (r = n.map(Ou))
    }
    let a, u = s[a = _r(t)] || s[a = _r(On(t))];
    !u && i && (u = s[a = _r(Wn(t))]), u && Qe(u, e, 6, r);
    const f = s[a + "Once"];
    if (f) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        e.emitted[a] = !0, Qe(f, e, 6, r)
    }
}

function Ll(e, t, n = !1) {
    const s = t.emitsCache,
        r = s.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let o = {},
        a = !1;
    if (!z(e)) {
        const u = f => {
            const d = Ll(f, t, !0);
            d && (a = !0, De(o, d))
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    return !i && !a ? (de(e) && s.set(e, null), null) : (Y(i) ? i.forEach(u => o[u] = null) : De(o, i), de(e) && s.set(e, o), o)
}

function zs(e, t) { return !e || !Ks(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, Wn(t)) || se(e, t)) }
let Et = null,
    Qs = null;

function Fs(e) { const t = Et; return Et = e, Qs = e && e.type.__scopeId || null, t }

function gf(e) { Qs = e }

function Ef() { Qs = null }

function bf(e, t = Et, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
        s._d && So(-1);
        const i = Fs(t),
            o = e(...r);
        return Fs(i), s._d && So(1), o
    };
    return s._n = !0, s._c = !0, s._d = !0, s
}

function mr(e) {
    const { type: t, vnode: n, proxy: s, withProxy: r, props: i, propsOptions: [o], slots: a, attrs: u, emit: f, render: d, renderCache: g, data: m, setupState: v, ctx: I, inheritAttrs: C } = e;
    let L, p;
    const N = Fs(e);
    try {
        if (n.shapeFlag & 4) {
            const b = r || s;
            L = pt(d.call(b, b, g, i, v, m, I)), p = u
        } else {
            const b = t;
            L = pt(b.length > 1 ? b(i, { attrs: u, slots: a, emit: f }) : b(i, null)), p = t.props ? u : vf(u)
        }
    } catch (b) { Qn.length = 0, qs(b, e, 1), L = Ke(Nt) }
    let O = L;
    if (p && C !== !1) {
        const b = Object.keys(p),
            { shapeFlag: T } = O;
        b.length && T & 7 && (o && b.some(Ei) && (p = Tf(p, o)), O = Ht(O, p))
    }
    return n.dirs && (O = Ht(O), O.dirs = O.dirs ? O.dirs.concat(n.dirs) : n.dirs), n.transition && (O.transition = n.transition), L = O, Fs(N), L
}
const vf = e => { let t; for (const n in e)(n === "class" || n === "style" || Ks(n)) && ((t || (t = {}))[n] = e[n]); return t },
    Tf = (e, t) => { const n = {}; for (const s in e)(!Ei(s) || !(s.slice(9) in t)) && (n[s] = e[s]); return n };

function yf(e, t, n) { const { props: s, children: r, component: i } = e, { props: o, children: a, patchFlag: u } = t, f = i.emitsOptions; if (t.dirs || t.transition) return !0; if (n && u >= 0) { if (u & 1024) return !0; if (u & 16) return s ? To(s, o, f) : !!o; if (u & 8) { const d = t.dynamicProps; for (let g = 0; g < d.length; g++) { const m = d[g]; if (o[m] !== s[m] && !zs(f, m)) return !0 } } } else return (r || a) && (!a || !a.$stable) ? !0 : s === o ? !1 : s ? o ? To(s, o, f) : !0 : !!o; return !1 }

function To(e, t, n) { const s = Object.keys(t); if (s.length !== Object.keys(e).length) return !0; for (let r = 0; r < s.length; r++) { const i = s[r]; if (t[i] !== e[i] && !zs(n, i)) return !0 } return !1 }

function Af({ vnode: e, parent: t }, n) { for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent }
const Cf = e => e.__isSuspense;

function Nf(e, t) { t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : _f(e) }

function Lf(e, t) {
    if (Ne) {
        let n = Ne.provides;
        const s = Ne.parent && Ne.parent.provides;
        s === n && (n = Ne.provides = Object.create(s)), n[e] = t
    }
}

function Ds(e, t, n = !1) { const s = Ne || Et; if (s) { const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides; if (r && e in r) return r[e]; if (arguments.length > 1) return n && z(t) ? t.call(s.proxy) : t } }
const yo = {};

function Nn(e, t, n) { return Ol(e, t, n) }

function Ol(e, t, { immediate: n, deep: s, flush: r, onTrack: i, onTrigger: o } = le) {
    const a = Ne;
    let u, f = !1,
        d = !1;
    if (Le(e) ? (u = () => e.value, f = xs(e)) : An(e) ? (u = () => e, s = !0) : Y(e) ? (d = !0, f = e.some(p => An(p) || xs(p)), u = () => e.map(p => { if (Le(p)) return p.value; if (An(p)) return gn(p); if (z(p)) return Wt(p, a, 2) })) : z(e) ? t ? u = () => Wt(e, a, 2) : u = () => { if (!(a && a.isUnmounted)) return g && g(), Qe(e, a, 3, [m]) } : u = lt, t && s) {
        const p = u;
        u = () => gn(p())
    }
    let g, m = p => { g = L.onStop = () => { Wt(p, a, 4) } };
    if (as) return m = lt, t ? n && Qe(t, a, 3, [u(), d ? [] : void 0, m]) : u(), lt;
    let v = d ? [] : yo;
    const I = () => {
        if (!!L.active)
            if (t) {
                const p = L.run();
                (s || f || (d ? p.some((N, O) => ns(N, v[O])) : ns(p, v))) && (g && g(), Qe(t, a, 3, [p, v === yo ? void 0 : v, m]), v = p)
            } else L.run()
    };
    I.allowRecurse = !!t;
    let C;
    r === "sync" ? C = I : r === "post" ? C = () => Ue(I, a && a.suspense) : (I.pre = !0, a && (I.id = a.uid), C = () => Di(I));
    const L = new Ai(u, C);
    return t ? n ? I() : v = L.run() : r === "post" ? Ue(L.run.bind(L), a && a.suspense) : L.run(), () => { L.stop(), a && a.scope && bi(a.scope.effects, L) }
}

function Of(e, t, n) {
    const s = this.proxy,
        r = Oe(e) ? e.includes(".") ? wl(s, e) : () => s[e] : e.bind(s, s);
    let i;
    z(t) ? i = t : (i = t.handler, n = t);
    const o = Ne;
    Sn(this);
    const a = Ol(r, i.bind(s), n);
    return o ? Sn(o) : rn(), a
}

function wl(e, t) { const n = t.split("."); return () => { let s = e; for (let r = 0; r < n.length && s; r++) s = s[n[r]]; return s } }

function gn(e, t) {
    if (!de(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), Le(e)) gn(e.value, t);
    else if (Y(e))
        for (let n = 0; n < e.length; n++) gn(e[n], t);
    else if (Ja(e) || yn(e)) e.forEach(n => { gn(n, t) });
    else if (tl(e))
        for (const n in e) gn(e[n], t);
    return e
}

function wf() { const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map }; return Pi(() => { e.isMounted = !0 }), kl(() => { e.isUnmounting = !0 }), e }
const ze = [Function, Array],
    If = {
        name: "BaseTransition",
        props: { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: ze, onEnter: ze, onAfterEnter: ze, onEnterCancelled: ze, onBeforeLeave: ze, onLeave: ze, onAfterLeave: ze, onLeaveCancelled: ze, onBeforeAppear: ze, onAppear: ze, onAfterAppear: ze, onAppearCancelled: ze },
        setup(e, { slots: t }) {
            const n = In(),
                s = wf();
            let r;
            return () => {
                const i = t.default && Sl(t.default(), !0);
                if (!i || !i.length) return;
                let o = i[0];
                if (i.length > 1) {
                    for (const C of i)
                        if (C.type !== Nt) { o = C; break }
                }
                const a = ie(e),
                    { mode: u } = a;
                if (s.isLeaving) return gr(o);
                const f = Ao(o);
                if (!f) return gr(o);
                const d = Wr(f, a, s, n);
                Vr(f, d);
                const g = n.subTree,
                    m = g && Ao(g);
                let v = !1;
                const { getTransitionKey: I } = f.type;
                if (I) {
                    const C = I();
                    r === void 0 ? r = C : C !== r && (r = C, v = !0)
                }
                if (m && m.type !== Nt && (!tn(f, m) || v)) {
                    const C = Wr(m, a, s, n);
                    if (Vr(m, C), u === "out-in") return s.isLeaving = !0, C.afterLeave = () => { s.isLeaving = !1, n.update() }, gr(o);
                    u === "in-out" && f.type !== Nt && (C.delayLeave = (L, p, N) => {
                        const O = Il(s, m);
                        O[String(m.key)] = m, L._leaveCb = () => { p(), L._leaveCb = void 0, delete d.delayedLeave }, d.delayedLeave = N
                    })
                }
                return o
            }
        }
    },
    Sf = If;

function Il(e, t) { const { leavingVNodes: n } = e; let s = n.get(t.type); return s || (s = Object.create(null), n.set(t.type, s)), s }

function Wr(e, t, n, s) {
    const { appear: r, mode: i, persisted: o = !1, onBeforeEnter: a, onEnter: u, onAfterEnter: f, onEnterCancelled: d, onBeforeLeave: g, onLeave: m, onAfterLeave: v, onLeaveCancelled: I, onBeforeAppear: C, onAppear: L, onAfterAppear: p, onAppearCancelled: N } = t, O = String(e.key), b = Il(n, e), T = (F, V) => { F && Qe(F, s, 9, V) }, P = (F, V) => {
        const H = V[1];
        T(F, V), Y(F) ? F.every(j => j.length <= 1) && H() : F.length <= 1 && H()
    }, $ = {
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
            let ne = !1;
            const q = F._enterCb = ge => { ne || (ne = !0, ge ? T(j, [F]) : T(H, [F]), $.delayedLeave && $.delayedLeave(), F._enterCb = void 0) };
            V ? P(V, [F, q]) : q()
        },
        leave(F, V) {
            const H = String(e.key);
            if (F._enterCb && F._enterCb(!0), n.isUnmounting) return V();
            T(g, [F]);
            let j = !1;
            const ne = F._leaveCb = q => { j || (j = !0, V(), q ? T(I, [F]) : T(v, [F]), F._leaveCb = void 0, b[H] === e && delete b[H]) };
            b[H] = e, m ? P(m, [F, ne]) : ne()
        },
        clone(F) { return Wr(F, t, n, s) }
    };
    return $
}

function gr(e) { if (Js(e)) return e = Ht(e), e.children = null, e }

function Ao(e) { return Js(e) ? e.children ? e.children[0] : void 0 : e }

function Vr(e, t) { e.shapeFlag & 6 && e.component ? Vr(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t }

function Sl(e, t = !1, n) {
    let s = [],
        r = 0;
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === st ? (o.patchFlag & 128 && r++, s = s.concat(Sl(o.children, t, a))) : (t || o.type !== Nt) && s.push(a != null ? Ht(o, { key: a }) : o)
    }
    if (r > 1)
        for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
    return s
}
const Ps = e => !!e.type.__asyncLoader,
    Js = e => e.type.__isKeepAlive;

function Df(e, t) { Dl(e, "a", t) }

function Pf(e, t) { Dl(e, "da", t) }

function Dl(e, t, n = Ne) {
    const s = e.__wdc || (e.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return e()
    });
    if (Zs(t, s, n), n) { let r = n.parent; for (; r && r.parent;) Js(r.parent.vnode) && kf(s, t, n, r), r = r.parent }
}

function kf(e, t, n, s) {
    const r = Zs(t, e, s, !0);
    ki(() => { bi(s[t], r) }, n)
}

function Zs(e, t, n = Ne, s = !1) {
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
const Dt = e => (t, n = Ne) => (!as || e === "sp") && Zs(e, t, n),
    Pl = Dt("bm"),
    Pi = Dt("m"),
    $f = Dt("bu"),
    Rf = Dt("u"),
    kl = Dt("bum"),
    ki = Dt("um"),
    Mf = Dt("sp"),
    xf = Dt("rtg"),
    Ff = Dt("rtc");

function Wf(e, t = Ne) { Zs("ec", e, t) }

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
const Vf = Symbol(),
    Hr = e => e ? Kl(e) ? xi(e) || e.proxy : Hr(e.parent) : null,
    Ws = De(Object.create(null), { $: e => e, $el: e => e.vnode.el, $data: e => e.data, $props: e => e.props, $attrs: e => e.attrs, $slots: e => e.slots, $refs: e => e.refs, $parent: e => Hr(e.parent), $root: e => Hr(e.root), $emit: e => e.emit, $options: e => $i(e), $forceUpdate: e => e.f || (e.f = () => Di(e.update)), $nextTick: e => e.n || (e.n = ff.bind(e.proxy)), $watch: e => Of.bind(e) }),
    Hf = {get({ _: e }, t) {
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
                    Ur && (o[t] = 0)
                }
            }
            const d = Ws[t];
            let g, m;
            if (d) return t === "$attrs" && Ye(e, "get", t), d(e);
            if ((g = a.__cssModules) && (g = g[t])) return g;
            if (n !== le && se(n, t)) return o[t] = 4, n[t];
            if (m = u.config.globalProperties, se(m, t)) return m[t]
        },
        set({ _: e }, t, n) { const { data: s, setupState: r, ctx: i } = e; return r !== le && se(r, t) ? (r[t] = n, !0) : s !== le && se(s, t) ? (s[t] = n, !0) : se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0) },
        has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i } }, o) { let a; return !!n[o] || e !== le && se(e, o) || t !== le && se(t, o) || (a = i[0]) && se(a, o) || se(s, o) || se(Ws, o) || se(r.config.globalProperties, o) },
        defineProperty(e, t, n) { return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n) }
    };
let Ur = !0;

function Uf(e) {
    const t = $i(e),
        n = e.proxy,
        s = e.ctx;
    Ur = !1, t.beforeCreate && Co(t.beforeCreate, e, "bc");
    const { data: r, computed: i, methods: o, watch: a, provide: u, inject: f, created: d, beforeMount: g, mounted: m, beforeUpdate: v, updated: I, activated: C, deactivated: L, beforeDestroy: p, beforeUnmount: N, destroyed: O, unmounted: b, render: T, renderTracked: P, renderTriggered: $, errorCaptured: F, serverPrefetch: V, expose: H, inheritAttrs: j, components: ne, directives: q, filters: ge } = t;
    if (f && jf(f, s, null, e.appContext.config.unwrapInjectedRef), o)
        for (const B in o) {
            const J = o[B];
            z(J) && (s[B] = J.bind(n))
        }
    if (r) {
        const B = r.call(n, n);
        de(B) && (e.data = Oi(B))
    }
    if (Ur = !0, i)
        for (const B in i) {
            const J = i[B],
                fe = z(J) ? J.bind(n, n) : z(J.get) ? J.get.bind(n, n) : lt,
                Fe = !z(J) && z(J.set) ? J.set.bind(n) : lt,
                Pe = ot({ get: fe, set: Fe });
            Object.defineProperty(s, B, { enumerable: !0, configurable: !0, get: () => Pe.value, set: ve => Pe.value = ve })
        }
    if (a)
        for (const B in a) $l(a[B], s, n, B);
    if (u) {
        const B = z(u) ? u.call(n) : u;
        Reflect.ownKeys(B).forEach(J => { Lf(J, B[J]) })
    }
    d && Co(d, e, "c");

    function X(B, J) { Y(J) ? J.forEach(fe => B(fe.bind(n))) : J && B(J.bind(n)) }
    if (X(Pl, g), X(Pi, m), X($f, v), X(Rf, I), X(Df, C), X(Pf, L), X(Wf, F), X(Ff, P), X(xf, $), X(kl, N), X(ki, b), X(Mf, V), Y(H))
        if (H.length) {
            const B = e.exposed || (e.exposed = {});
            H.forEach(J => { Object.defineProperty(B, J, { get: () => n[J], set: fe => n[J] = fe }) })
        } else e.exposed || (e.exposed = {});
    T && e.render === lt && (e.render = T), j != null && (e.inheritAttrs = j), ne && (e.components = ne), q && (e.directives = q)
}

function jf(e, t, n = lt, s = !1) {
    Y(e) && (e = jr(e));
    for (const r in e) {
        const i = e[r];
        let o;
        de(i) ? "default" in i ? o = Ds(i.from || r, i.default, !0) : o = Ds(i.from || r) : o = Ds(i), Le(o) && s ? Object.defineProperty(t, r, { enumerable: !0, configurable: !0, get: () => o.value, set: a => o.value = a }) : t[r] = o
    }
}

function Co(e, t, n) { Qe(Y(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n) }

function $l(e, t, n, s) {
    const r = s.includes(".") ? wl(n, s) : () => n[s];
    if (Oe(e)) {
        const i = t[e];
        z(i) && Nn(r, i)
    } else if (z(e)) Nn(r, e.bind(n));
    else if (de(e))
        if (Y(e)) e.forEach(i => $l(i, t, n, s));
        else {
            const i = z(e.handler) ? e.handler.bind(n) : t[e.handler];
            z(i) && Nn(r, i, e)
        }
}

function $i(e) {
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
            const a = Bf[o] || n && n[o];
            e[o] = a ? a(e[o], t[o]) : t[o]
        }
    return e
}
const Bf = { data: No, props: Zt, emits: Zt, methods: Zt, computed: Zt, beforeCreate: $e, created: $e, beforeMount: $e, mounted: $e, beforeUpdate: $e, updated: $e, beforeDestroy: $e, beforeUnmount: $e, destroyed: $e, unmounted: $e, activated: $e, deactivated: $e, errorCaptured: $e, serverPrefetch: $e, components: Zt, directives: Zt, watch: Yf, provide: No, inject: Kf };

function No(e, t) { return t ? e ? function() { return De(z(e) ? e.call(this, this) : e, z(t) ? t.call(this, this) : t) } : t : e }

function Kf(e, t) { return Zt(jr(e), jr(t)) }

function jr(e) { if (Y(e)) { const t = {}; for (let n = 0; n < e.length; n++) t[e[n]] = e[n]; return t } return e }

function $e(e, t) { return e ? [...new Set([].concat(e, t))] : t }

function Zt(e, t) { return e ? De(De(Object.create(null), e), t) : t }

function Yf(e, t) { if (!e) return t; if (!t) return e; const n = De(Object.create(null), e); for (const s in t) n[s] = $e(e[s], t[s]); return n }

function Gf(e, t, n, s = !1) {
    const r = {},
        i = {};
    Ms(i, tr, 1), e.propsDefaults = Object.create(null), Rl(e, t, r, i);
    for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
    n ? e.props = s ? r : nf(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i
}

function Xf(e, t, n, s) {
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
                        r[I] = Br(u, a, I, v, e, !1)
                    }
                else v !== i[m] && (i[m] = v, f = !0)
            }
        }
    } else {
        Rl(e, t, r, i) && (f = !0);
        let d;
        for (const g in a)(!t || !se(t, g) && ((d = Wn(g)) === g || !se(t, d))) && (u ? n && (n[g] !== void 0 || n[d] !== void 0) && (r[g] = Br(u, a, g, void 0, e, !0)) : delete r[g]);
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
            n[g] = Br(r, u, g, f[g], e, !se(f, g))
        }
    }
    return o
}

function Br(e, t, n, s, r, i) {
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
            Lo(g) && (o[g] = le)
        } else if (i)
            for (const d in i) {
                const g = On(d);
                if (Lo(g)) {
                    const m = i[d],
                        v = o[g] = Y(m) || z(m) ? { type: m } : m;
                    if (v) {
                        const I = Io(Boolean, v.type),
                            C = Io(String, v.type);
                        v[0] = I > -1, v[1] = C < 0 || I < C, (I > -1 || se(v, "default")) && a.push(g)
                    }
                }
            }
    const f = [o, a];
    return de(e) && s.set(e, f), f
}

function Lo(e) { return e[0] !== "$" }

function Oo(e) { const t = e && e.toString().match(/^\s*function (\w+)/); return t ? t[1] : e === null ? "null" : "" }

function wo(e, t) { return Oo(e) === Oo(t) }

function Io(e, t) { return Y(t) ? t.findIndex(n => wo(n, e)) : z(t) && wo(t, e) ? 0 : -1 }
const xl = e => e[0] === "_" || e === "$stable",
    Ri = e => Y(e) ? e.map(pt) : [pt(e)],
    qf = (e, t, n) => { if (t._n) return t; const s = bf((...r) => Ri(t(...r)), n); return s._c = !1, s },
    Fl = (e, t, n) => {
        const s = e._ctx;
        for (const r in e) {
            if (xl(r)) continue;
            const i = e[r];
            if (z(i)) t[r] = qf(r, i, s);
            else if (i != null) {
                const o = Ri(i);
                t[r] = () => o
            }
        }
    },
    Wl = (e, t) => {
        const n = Ri(t);
        e.slots.default = () => n
    },
    zf = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? (e.slots = ie(t), Ms(t, "_", n)) : Fl(t, e.slots = {})
        } else e.slots = {}, t && Wl(e, t);
        Ms(e.slots, tr, 1)
    },
    Qf = (e, t, n) => {
        const { vnode: s, slots: r } = e;
        let i = !0,
            o = le;
        if (s.shapeFlag & 32) {
            const a = t._;
            a ? n && a === 1 ? i = !1 : (De(r, t), !n && a === 1 && delete r._) : (i = !t.$stable, Fl(t, r)), o = t
        } else t && (Wl(e, t), o = { default: 1 });
        if (i)
            for (const a in r) !xl(a) && !(a in o) && delete r[a]
    };

function Vl() { return { app: null, config: { isNativeTag: Tu, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: Object.create(null), optionsCache: new WeakMap, propsCache: new WeakMap, emitsCache: new WeakMap } }
let Jf = 0;

function Zf(e, t) {
    return function(s, r = null) {
        z(s) || (s = Object.assign({}, s)), r != null && !de(r) && (r = null);
        const i = Vl(),
            o = new Set;
        let a = !1;
        const u = i.app = { _uid: Jf++, _component: s, _props: r, _container: null, _context: i, _instance: null, version: gd, get config() { return i.config }, set config(f) {}, use(f, ...d) { return o.has(f) || (f && z(f.install) ? (o.add(f), f.install(u, ...d)) : z(f) && (o.add(f), f(u, ...d))), u }, mixin(f) { return i.mixins.includes(f) || i.mixins.push(f), u }, component(f, d) { return d ? (i.components[f] = d, u) : i.components[f] }, directive(f, d) { return d ? (i.directives[f] = d, u) : i.directives[f] }, mount(f, d, g) { if (!a) { const m = Ke(s, r); return m.appContext = i, d && t ? t(m, f) : e(m, f, g), a = !0, u._container = f, f.__vue_app__ = u, xi(m.component) || m.component.proxy } }, unmount() { a && (e(null, u._container), delete u._container.__vue_app__) }, provide(f, d) { return i.provides[f] = d, u } };
        return u
    }
}

function Kr(e, t, n, s, r = !1) {
    if (Y(e)) { e.forEach((m, v) => Kr(m, t && (Y(t) ? t[v] : t), n, s, r)); return }
    if (Ps(s) && !r) return;
    const i = s.shapeFlag & 4 ? xi(s.component) || s.component.proxy : s.el,
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
                    r ? Y(C) && bi(C, i) : Y(C) ? C.includes(i) || C.push(i) : m ? (d[u] = [i], se(g, u) && (g[u] = d[u])) : (u.value = [i], e.k && (d[e.k] = u.value))
                } else m ? (d[u] = o, se(g, u) && (g[u] = o)) : v && (u.value = o, e.k && (d[e.k] = o))
            };
            o ? (I.id = -1, Ue(I, n)) : I()
        }
    }
}
const Ue = Nf;

function ed(e) { return td(e) }

function td(e, t) {
    const n = wu();
    n.__VUE__ = !0;
    const { insert: s, remove: r, patchProp: i, createElement: o, createText: a, createComment: u, setText: f, setElementText: d, parentNode: g, nextSibling: m, setScopeId: v = lt, cloneNode: I, insertStaticContent: C } = e, L = (c, l, h, E = null, y = null, w = null, R = !1, S = null, D = !!l.dynamicChildren) => {
        if (c === l) return;
        c && !tn(c, l) && (E = pe(c), Te(c, y, w, !0), c = null), l.patchFlag === -2 && (D = !1, l.dynamicChildren = null);
        const { type: _, ref: A, shapeFlag: M } = l;
        switch (_) {
            case er:
                p(c, l, h, E);
                break;
            case Nt:
                N(c, l, h, E);
                break;
            case Er:
                c == null && O(l, h, E, R);
                break;
            case st:
                q(c, l, h, E, y, w, R, S, D);
                break;
            default:
                M & 1 ? P(c, l, h, E, y, w, R, S, D) : M & 6 ? ge(c, l, h, E, y, w, R, S, D) : (M & 64 || M & 128) && _.process(c, l, h, E, y, w, R, S, D, Ce)
        }
        A != null && y && Kr(A, c && c.ref, w, l || c, !l)
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
    }, P = (c, l, h, E, y, w, R, S, D) => { R = R || l.type === "svg", c == null ? $(l, h, E, y, w, R, S, D) : H(c, l, y, w, R, S, D) }, $ = (c, l, h, E, y, w, R, S) => {
        let D, _;
        const { type: A, props: M, shapeFlag: W, transition: U, patchFlag: G, dirs: Z } = c;
        if (c.el && I !== void 0 && G === -1) D = c.el = I(c.el);
        else {
            if (D = c.el = o(c.type, w, M && M.is, M), W & 8 ? d(D, c.children) : W & 16 && V(c.children, D, null, E, y, w && A !== "foreignObject", R, S), Z && Qt(c, null, E, "created"), M) { for (const ae in M) ae !== "value" && !Ss(ae) && i(D, ae, null, M[ae], w, c.children, E, y, _e); "value" in M && i(D, "value", null, M.value), (_ = M.onVnodeBeforeMount) && dt(_, E, c) }
            F(D, c, c.scopeId, R, E)
        }
        Z && Qt(c, null, E, "beforeMount");
        const oe = (!y || y && !y.pendingBranch) && U && !U.persisted;
        oe && U.beforeEnter(D), s(D, l, h), ((_ = M && M.onVnodeMounted) || oe || Z) && Ue(() => { _ && dt(_, E, c), oe && U.enter(D), Z && Qt(c, null, E, "mounted") }, y)
    }, F = (c, l, h, E, y) => {
        if (h && v(c, h), E)
            for (let w = 0; w < E.length; w++) v(c, E[w]);
        if (y) {
            let w = y.subTree;
            if (l === w) {
                const R = y.vnode;
                F(c, R, R.scopeId, R.slotScopeIds, y.parent)
            }
        }
    }, V = (c, l, h, E, y, w, R, S, D = 0) => {
        for (let _ = D; _ < c.length; _++) {
            const A = c[_] = S ? Mt(c[_]) : pt(c[_]);
            L(null, A, l, h, E, y, w, R, S)
        }
    }, H = (c, l, h, E, y, w, R) => {
        const S = l.el = c.el;
        let { patchFlag: D, dynamicChildren: _, dirs: A } = l;
        D |= c.patchFlag & 16;
        const M = c.props || le,
            W = l.props || le;
        let U;
        h && Jt(h, !1), (U = W.onVnodeBeforeUpdate) && dt(U, h, l, c), A && Qt(l, c, h, "beforeUpdate"), h && Jt(h, !0);
        const G = y && l.type !== "foreignObject";
        if (_ ? j(c.dynamicChildren, _, S, h, E, G, w) : R || fe(c, l, S, null, h, E, G, w, !1), D > 0) {
            if (D & 16) ne(S, l, M, W, h, E, y);
            else if (D & 2 && M.class !== W.class && i(S, "class", null, W.class, y), D & 4 && i(S, "style", M.style, W.style, y), D & 8) {
                const Z = l.dynamicProps;
                for (let oe = 0; oe < Z.length; oe++) {
                    const ae = Z[oe],
                        nt = M[ae],
                        fn = W[ae];
                    (fn !== nt || ae === "value") && i(S, ae, nt, fn, y, c.children, h, E, _e)
                }
            }
            D & 1 && c.children !== l.children && d(S, l.children)
        } else !R && _ == null && ne(S, l, M, W, h, E, y);
        ((U = W.onVnodeUpdated) || A) && Ue(() => { U && dt(U, h, l, c), A && Qt(l, c, h, "updated") }, E)
    }, j = (c, l, h, E, y, w, R) => {
        for (let S = 0; S < l.length; S++) {
            const D = c[S],
                _ = l[S],
                A = D.el && (D.type === st || !tn(D, _) || D.shapeFlag & 70) ? g(D.el) : h;
            L(D, _, A, null, E, y, w, R, !0)
        }
    }, ne = (c, l, h, E, y, w, R) => {
        if (h !== E) {
            for (const S in E) {
                if (Ss(S)) continue;
                const D = E[S],
                    _ = h[S];
                D !== _ && S !== "value" && i(c, S, _, D, R, l.children, y, w, _e)
            }
            if (h !== le)
                for (const S in h) !Ss(S) && !(S in E) && i(c, S, h[S], null, R, l.children, y, w, _e);
            "value" in E && i(c, "value", h.value, E.value)
        }
    }, q = (c, l, h, E, y, w, R, S, D) => {
        const _ = l.el = c ? c.el : a(""),
            A = l.anchor = c ? c.anchor : a("");
        let { patchFlag: M, dynamicChildren: W, slotScopeIds: U } = l;
        U && (S = S ? S.concat(U) : U), c == null ? (s(_, h, E), s(A, h, E), V(l.children, h, A, y, w, R, S, D)) : M > 0 && M & 64 && W && c.dynamicChildren ? (j(c.dynamicChildren, W, h, y, w, R, S), (l.key != null || y && l === y.subTree) && Hl(c, l, !0)) : fe(c, l, h, A, y, w, R, S, D)
    }, ge = (c, l, h, E, y, w, R, S, D) => { l.slotScopeIds = S, c == null ? l.shapeFlag & 512 ? y.ctx.activate(l, h, E, R, D) : Ae(l, h, E, y, w, R, D) : X(c, l, D) }, Ae = (c, l, h, E, y, w, R) => {
        const S = c.component = fd(c, E, y);
        if (Js(c) && (S.ctx.renderer = Ce), dd(S), S.asyncDep) {
            if (y && y.registerDep(S, B), !c.el) {
                const D = S.subTree = Ke(Nt);
                N(null, D, l, h)
            }
            return
        }
        B(S, c, l, h, y, w, R)
    }, X = (c, l, h) => {
        const E = l.component = c.component;
        if (yf(c, l, h))
            if (E.asyncDep && !E.asyncResolved) { J(E, l, h); return } else E.next = l, hf(E.update), E.update();
        else l.el = c.el, E.vnode = l
    }, B = (c, l, h, E, y, w, R) => {
        const S = () => {
                if (c.isMounted) {
                    let { next: A, bu: M, u: W, parent: U, vnode: G } = c, Z = A, oe;
                    Jt(c, !1), A ? (A.el = G.el, J(c, A, R)) : A = G, M && pr(M), (oe = A.props && A.props.onVnodeBeforeUpdate) && dt(oe, U, A, G), Jt(c, !0);
                    const ae = mr(c),
                        nt = c.subTree;
                    c.subTree = ae, L(nt, ae, g(nt.el), pe(nt), c, y, w), A.el = ae.el, Z === null && Af(c, ae.el), W && Ue(W, y), (oe = A.props && A.props.onVnodeUpdated) && Ue(() => dt(oe, U, A, G), y)
                } else {
                    let A;
                    const { el: M, props: W } = l, { bm: U, m: G, parent: Z } = c, oe = Ps(l);
                    if (Jt(c, !1), U && pr(U), !oe && (A = W && W.onVnodeBeforeMount) && dt(A, Z, l), Jt(c, !0), M && qe) {
                        const ae = () => { c.subTree = mr(c), qe(M, c.subTree, c, y, null) };
                        oe ? l.type.__asyncLoader().then(() => !c.isUnmounted && ae()) : ae()
                    } else {
                        const ae = c.subTree = mr(c);
                        L(null, ae, h, E, c, y, w), l.el = ae.el
                    }
                    if (G && Ue(G, y), !oe && (A = W && W.onVnodeMounted)) {
                        const ae = l;
                        Ue(() => dt(A, Z, ae), y)
                    }(l.shapeFlag & 256 || Z && Ps(Z.vnode) && Z.vnode.shapeFlag & 256) && c.a && Ue(c.a, y), c.isMounted = !0, l = h = E = null
                }
            },
            D = c.effect = new Ai(S, () => Di(_), c.scope),
            _ = c.update = () => D.run();
        _.id = c.uid, Jt(c, !0), _()
    }, J = (c, l, h) => {
        l.component = c;
        const E = c.vnode.props;
        c.vnode = l, c.next = null, Xf(c, l.props, E, h), Qf(c, l.children, h), Vn(), vo(), Hn()
    }, fe = (c, l, h, E, y, w, R, S, D = !1) => {
        const _ = c && c.children,
            A = c ? c.shapeFlag : 0,
            M = l.children,
            { patchFlag: W, shapeFlag: U } = l;
        if (W > 0) { if (W & 128) { Pe(_, M, h, E, y, w, R, S, D); return } else if (W & 256) { Fe(_, M, h, E, y, w, R, S, D); return } }
        U & 8 ? (A & 16 && _e(_, y, w), M !== _ && d(h, M)) : A & 16 ? U & 16 ? Pe(_, M, h, E, y, w, R, S, D) : _e(_, y, w, !0) : (A & 8 && d(h, ""), U & 16 && V(M, h, E, y, w, R, S, D))
    }, Fe = (c, l, h, E, y, w, R, S, D) => {
        c = c || Tn, l = l || Tn;
        const _ = c.length,
            A = l.length,
            M = Math.min(_, A);
        let W;
        for (W = 0; W < M; W++) {
            const U = l[W] = D ? Mt(l[W]) : pt(l[W]);
            L(c[W], U, h, null, y, w, R, S, D)
        }
        _ > A ? _e(c, y, w, !0, !1, M) : V(l, h, E, y, w, R, S, D, M)
    }, Pe = (c, l, h, E, y, w, R, S, D) => {
        let _ = 0;
        const A = l.length;
        let M = c.length - 1,
            W = A - 1;
        for (; _ <= M && _ <= W;) {
            const U = c[_],
                G = l[_] = D ? Mt(l[_]) : pt(l[_]);
            if (tn(U, G)) L(U, G, h, null, y, w, R, S, D);
            else break;
            _++
        }
        for (; _ <= M && _ <= W;) {
            const U = c[M],
                G = l[W] = D ? Mt(l[W]) : pt(l[W]);
            if (tn(U, G)) L(U, G, h, null, y, w, R, S, D);
            else break;
            M--, W--
        }
        if (_ > M) {
            if (_ <= W) {
                const U = W + 1,
                    G = U < A ? l[U].el : E;
                for (; _ <= W;) L(null, l[_] = D ? Mt(l[_]) : pt(l[_]), h, G, y, w, R, S, D), _++
            }
        } else if (_ > W)
            for (; _ <= M;) Te(c[_], y, w, !0), _++;
        else {
            const U = _,
                G = _,
                Z = new Map;
            for (_ = G; _ <= W; _++) {
                const Be = l[_] = D ? Mt(l[_]) : pt(l[_]);
                Be.key != null && Z.set(Be.key, _)
            }
            let oe, ae = 0;
            const nt = W - G + 1;
            let fn = !1,
                lo = 0;
            const Yn = new Array(nt);
            for (_ = 0; _ < nt; _++) Yn[_] = 0;
            for (_ = U; _ <= M; _++) {
                const Be = c[_];
                if (ae >= nt) { Te(Be, y, w, !0); continue }
                let ft;
                if (Be.key != null) ft = Z.get(Be.key);
                else
                    for (oe = G; oe <= W; oe++)
                        if (Yn[oe - G] === 0 && tn(Be, l[oe])) { ft = oe; break }
                ft === void 0 ? Te(Be, y, w, !0) : (Yn[ft - G] = _ + 1, ft >= lo ? lo = ft : fn = !0, L(Be, l[ft], h, null, y, w, R, S, D), ae++)
            }
            const co = fn ? nd(Yn) : Tn;
            for (oe = co.length - 1, _ = nt - 1; _ >= 0; _--) {
                const Be = G + _,
                    ft = l[Be],
                    uo = Be + 1 < A ? l[Be + 1].el : E;
                Yn[_] === 0 ? L(null, ft, h, uo, y, w, R, S, D) : fn && (oe < 0 || _ !== co[oe] ? ve(ft, h, uo, 2) : oe--)
            }
        }
    }, ve = (c, l, h, E, y = null) => {
        const { el: w, type: R, transition: S, children: D, shapeFlag: _ } = c;
        if (_ & 6) { ve(c.component.subTree, l, h, E); return }
        if (_ & 128) { c.suspense.move(l, h, E); return }
        if (_ & 64) { R.move(c, l, h, Ce); return }
        if (R === st) {
            s(w, l, h);
            for (let M = 0; M < D.length; M++) ve(D[M], l, h, E);
            s(c.anchor, l, h);
            return
        }
        if (R === Er) { b(c, l, h); return }
        if (E !== 2 && _ & 1 && S)
            if (E === 0) S.beforeEnter(w), s(w, l, h), Ue(() => S.enter(w), y);
            else {
                const { leave: M, delayLeave: W, afterLeave: U } = S, G = () => s(w, l, h), Z = () => { M(w, () => { G(), U && U() }) };
                W ? W(w, G, Z) : Z()
            }
        else s(w, l, h)
    }, Te = (c, l, h, E = !1, y = !1) => {
        const { type: w, props: R, ref: S, children: D, dynamicChildren: _, shapeFlag: A, patchFlag: M, dirs: W } = c;
        if (S != null && Kr(S, null, h, c, !0), A & 256) { l.ctx.deactivate(c); return }
        const U = A & 1 && W,
            G = !Ps(c);
        let Z;
        if (G && (Z = R && R.onVnodeBeforeUnmount) && dt(Z, l, c), A & 6) je(c.component, h, E);
        else {
            if (A & 128) { c.suspense.unmount(h, E); return }
            U && Qt(c, null, l, "beforeUnmount"), A & 64 ? c.type.remove(c, l, h, y, Ce, E) : _ && (w !== st || M > 0 && M & 64) ? _e(_, l, h, !1, !0) : (w === st && M & 384 || !y && A & 16) && _e(D, l, h), E && we(c)
        }(G && (Z = R && R.onVnodeUnmounted) || U) && Ue(() => { Z && dt(Z, l, c), U && Qt(c, null, l, "unmounted") }, h)
    }, we = c => {
        const { type: l, el: h, anchor: E, transition: y } = c;
        if (l === st) { Ie(h, E); return }
        if (l === Er) { T(c); return }
        const w = () => { r(h), y && !y.persisted && y.afterLeave && y.afterLeave() };
        if (c.shapeFlag & 1 && y && !y.persisted) {
            const { leave: R, delayLeave: S } = y, D = () => R(h, w);
            S ? S(c.el, w, D) : D()
        } else w()
    }, Ie = (c, l) => {
        let h;
        for (; c !== l;) h = m(c), r(c), c = h;
        r(l)
    }, je = (c, l, h) => {
        const { bum: E, scope: y, update: w, subTree: R, um: S } = c;
        E && pr(E), y.stop(), w && (w.active = !1, Te(R, c, l, h)), S && Ue(S, l), Ue(() => { c.isUnmounted = !0 }, l), l && l.pendingBranch && !l.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === l.pendingId && (l.deps--, l.deps === 0 && l.resolve())
    }, _e = (c, l, h, E = !1, y = !1, w = 0) => { for (let R = w; R < c.length; R++) Te(c[R], l, h, E, y) }, pe = c => c.shapeFlag & 6 ? pe(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : m(c.anchor || c.el), We = (c, l, h) => { c == null ? l._vnode && Te(l._vnode, null, null, !0) : L(l._vnode || null, c, l, null, null, null, h), vo(), Cl(), l._vnode = c }, Ce = { p: L, um: Te, m: ve, r: we, mt: Ae, mc: V, pc: fe, pbc: j, n: pe, o: e };
    let ke, qe;
    return t && ([ke, qe] = t(Ce)), { render: We, hydrate: ke, createApp: Zf(We, ke) }
}

function Jt({ effect: e, update: t }, n) { e.allowRecurse = t.allowRecurse = n }

function Hl(e, t, n = !1) {
    const s = e.children,
        r = t.children;
    if (Y(s) && Y(r))
        for (let i = 0; i < s.length; i++) {
            const o = s[i];
            let a = r[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = Mt(r[i]), a.el = o.el), n || Hl(o, a))
        }
}

function nd(e) {
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
const sd = e => e.__isTeleport,
    st = Symbol(void 0),
    er = Symbol(void 0),
    Nt = Symbol(void 0),
    Er = Symbol(void 0),
    Qn = [];
let at = null;

function Yr(e = !1) { Qn.push(at = e ? null : []) }

function rd() { Qn.pop(), at = Qn[Qn.length - 1] || null }
let os = 1;

function So(e) { os += e }

function Ul(e) { return e.dynamicChildren = os > 0 ? at || Tn : null, rd(), os > 0 && at && at.push(e), e }

function jl(e, t, n, s, r, i) { return Ul(ee(e, t, n, s, r, i, !0)) }

function id(e, t, n, s, r) { return Ul(Ke(e, t, n, s, r, !0)) }

function Gr(e) { return e ? e.__v_isVNode === !0 : !1 }

function tn(e, t) { return e.type === t.type && e.key === t.key }
const tr = "__vInternal",
    Bl = ({ key: e }) => e != null ? e : null,
    ks = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Oe(e) || Le(e) || z(e) ? { i: Et, r: e, k: t, f: !!n } : e : null;

function ee(e, t = null, n = null, s = 0, r = null, i = e === st ? 0 : 1, o = !1, a = !1) { const u = { __v_isVNode: !0, __v_skip: !0, type: e, props: t, key: t && Bl(t), ref: t && ks(t), scopeId: Qs, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: s, dynamicProps: r, dynamicChildren: null, appContext: null }; return a ? (Mi(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= Oe(n) ? 8 : 16), os > 0 && !o && at && (u.patchFlag > 0 || i & 6) && u.patchFlag !== 32 && at.push(u), u }
const Ke = od;

function od(e, t = null, n = null, s = 0, r = null, i = !1) {
    if ((!e || e === Vf) && (e = Nt), Gr(e)) { const a = Ht(e, t, !0); return n && Mi(a, n), os > 0 && !i && at && (a.shapeFlag & 6 ? at[at.indexOf(e)] = a : at.push(a)), a.patchFlag |= -2, a }
    if (md(e) && (e = e.__vccOpts), t) {
        t = ad(t);
        let { class: a, style: u } = t;
        a && !Oe(a) && (t.class = gi(a)), de(u) && (pl(u) && !Y(u) && (u = De({}, u)), t.style = mi(u))
    }
    const o = Oe(e) ? 1 : Cf(e) ? 128 : sd(e) ? 64 : de(e) ? 4 : z(e) ? 2 : 0;
    return ee(e, t, n, s, r, o, i, !0)
}

function ad(e) { return e ? pl(e) || tr in e ? De({}, e) : e : null }

function Ht(e, t, n = !1) { const { props: s, ref: r, patchFlag: i, children: o } = e, a = t ? ld(s || {}, t) : s; return { __v_isVNode: !0, __v_skip: !0, type: e.type, props: a, key: a && Bl(a), ref: t && t.ref ? n && r ? Y(r) ? r.concat(ks(t)) : [r, ks(t)] : ks(t) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: o, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== st ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Ht(e.ssContent), ssFallback: e.ssFallback && Ht(e.ssFallback), el: e.el, anchor: e.anchor } }

function Xr(e = " ", t = 0) { return Ke(er, null, e, t) }

function pt(e) { return e == null || typeof e == "boolean" ? Ke(Nt) : Y(e) ? Ke(st, null, e.slice()) : typeof e == "object" ? Mt(e) : Ke(er, null, String(e)) }

function Mt(e) { return e.el === null || e.memo ? e : Ht(e) }

function Mi(e, t) {
    let n = 0;
    const { shapeFlag: s } = e;
    if (t == null) t = null;
    else if (Y(t)) n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), Mi(e, r()), r._c && (r._d = !0));
            return
        } else { n = 32; const r = t._;!r && !(tr in t) ? t._ctx = Et : r === 3 && Et && (Et.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) }
    else z(t) ? (t = { default: t, _ctx: Et }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Xr(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function ld(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === "class") t.class !== s.class && (t.class = gi([t.class, s.class]));
            else if (r === "style") t.style = mi([t.style, s.style]);
        else if (Ks(r)) {
            const i = t[r],
                o = s[r];
            o && i !== o && !(Y(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
        } else r !== "" && (t[r] = s[r])
    }
    return t
}

function dt(e, t, n, s = null) { Qe(e, t, 7, [n, s]) }
const cd = Vl();
let ud = 0;

function fd(e, t, n) {
    const s = e.type,
        r = (t ? t.appContext : e.appContext) || cd,
        i = { uid: ud++, vnode: e, type: s, parent: t, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, scope: new sl(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(r.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Ml(s, r), emitsOptions: Ll(s, r), emit: null, emitted: null, propsDefaults: le, inheritAttrs: s.inheritAttrs, ctx: le, data: le, props: le, attrs: le, slots: le, refs: le, setupState: le, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
    return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = mf.bind(null, i), e.ce && e.ce(i), i
}
let Ne = null;
const In = () => Ne || Et,
    Sn = e => { Ne = e, e.scope.on() },
    rn = () => { Ne && Ne.scope.off(), Ne = null };

function Kl(e) { return e.vnode.shapeFlag & 4 }
let as = !1;

function dd(e, t = !1) {
    as = t;
    const { props: n, children: s } = e.vnode, r = Kl(e);
    Gf(e, n, r, t), zf(e, s);
    const i = r ? hd(e, t) : void 0;
    return as = !1, i
}

function hd(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = ml(new Proxy(e.ctx, Hf));
    const { setup: s } = n;
    if (s) {
        const r = e.setupContext = s.length > 1 ? pd(e) : null;
        Sn(e), Vn();
        const i = Wt(s, e, 0, [e.props, r]);
        if (Hn(), rn(), Za(i)) {
            if (i.then(rn, rn), t) return i.then(o => { Do(e, o, t) }).catch(o => { qs(o, e, 0) });
            e.asyncDep = i
        } else Do(e, i, t)
    } else Yl(e, t)
}

function Do(e, t, n) { z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = vl(t)), Yl(e, n) }
let Po;

function Yl(e, t, n) {
    const s = e.type;
    if (!e.render) {
        if (!t && Po && !s.render) {
            const r = s.template || $i(e).template;
            if (r) {
                const { isCustomElement: i, compilerOptions: o } = e.appContext.config, { delimiters: a, compilerOptions: u } = s, f = De(De({ isCustomElement: i, delimiters: a }, o), u);
                s.render = Po(r, f)
            }
        }
        e.render = s.render || lt
    }
    Sn(e), Vn(), Uf(e), Hn(), rn()
}

function _d(e) { return new Proxy(e.attrs, {get(t, n) { return Ye(e, "get", "$attrs"), t[n] } }) }

function pd(e) { const t = s => { e.exposed = s || {} }; let n; return {get attrs() { return n || (n = _d(e)) }, slots: e.slots, emit: e.emit, expose: t } }

function xi(e) { if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(vl(ml(e.exposed)), {get(t, n) { if (n in t) return t[n]; if (n in Ws) return Ws[n](e) } })) }

function md(e) { return z(e) && "__vccOpts" in e }
const ot = (e, t) => cf(e, t, as);

function Gl(e, t, n) { const s = arguments.length; return s === 2 ? de(t) && !Y(t) ? Gr(t) ? Ke(e, null, [t]) : Ke(e, t) : Ke(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Gr(n) && (n = [n]), Ke(e, t, n)) }
const gd = "3.2.39",
    Ed = "http://www.w3.org/2000/svg",
    nn = typeof document < "u" ? document : null,
    ko = nn && nn.createElement("template"),
    bd = {
        insert: (e, t, n) => { t.insertBefore(e, n || null) },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, s) => { const r = t ? nn.createElementNS(Ed, e) : nn.createElement(e, n ? { is: n } : void 0); return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r },
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
                ko.innerHTML = s ? `<svg>${e}</svg>` : e;
                const a = ko.content;
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

function vd(e, t, n) {
    const s = e._vtc;
    s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

function Td(e, t, n) {
    const s = e.style,
        r = Oe(n);
    if (n && !r) {
        for (const i in n) qr(s, i, n[i]);
        if (t && !Oe(t))
            for (const i in t) n[i] == null && qr(s, i, "")
    } else {
        const i = s.display;
        r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = i)
    }
}
const $o = /\s*!important$/;

function qr(e, t, n) {
    if (Y(n)) n.forEach(s => qr(e, t, s));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const s = yd(e, t);
        $o.test(n) ? e.setProperty(Wn(s), n.replace($o, ""), "important") : e[s] = n
    }
}
const Ro = ["Webkit", "Moz", "ms"],
    br = {};

function yd(e, t) {
    const n = br[t];
    if (n) return n;
    let s = On(t);
    if (s !== "filter" && s in e) return br[t] = s;
    s = nl(s);
    for (let r = 0; r < Ro.length; r++) { const i = Ro[r] + s; if (i in e) return br[t] = i }
    return t
}
const Mo = "http://www.w3.org/1999/xlink";

function Ad(e, t, n, s, r) {
    if (s && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(Mo, t.slice(6, t.length)) : e.setAttributeNS(Mo, t, n);
    else {
        const i = gu(t);
        n == null || i && !za(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n)
    }
}

function Cd(e, t, n, s, r, i, o) {
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
        u === "boolean" ? n = za(n) : n == null && u === "string" ? (n = "", a = !0) : u === "number" && (n = 0, a = !0)
    }
    try { e[t] = n } catch {}
    a && e.removeAttribute(t)
}
const [Xl, Nd] = (() => {
    let e = Date.now,
        t = !1;
    if (typeof window < "u") {
        Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
        const n = navigator.userAgent.match(/firefox\/(\d+)/i);
        t = !!(n && Number(n[1]) <= 53)
    }
    return [e, t]
})();
let zr = 0;
const Ld = Promise.resolve(),
    Od = () => { zr = 0 },
    wd = () => zr || (Ld.then(Od), zr = Xl());

function Id(e, t, n, s) { e.addEventListener(t, n, s) }

function Sd(e, t, n, s) { e.removeEventListener(t, n, s) }

function Dd(e, t, n, s, r = null) {
    const i = e._vei || (e._vei = {}),
        o = i[t];
    if (s && o) o.value = s;
    else {
        const [a, u] = Pd(t);
        if (s) {
            const f = i[t] = kd(s, r);
            Id(e, a, f, u)
        } else o && (Sd(e, a, o, u), i[t] = void 0)
    }
}
const xo = /(?:Once|Passive|Capture)$/;

function Pd(e) { let t; if (xo.test(e)) { t = {}; let s; for (; s = e.match(xo);) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0 } return [e[2] === ":" ? e.slice(3) : Wn(e.slice(2)), t] }

function kd(e, t) {
    const n = s => {
        const r = s.timeStamp || Xl();
        (Nd || r >= n.attached - 1) && Qe($d(s, n.value), t, 5, [s])
    };
    return n.value = e, n.attached = wd(), n
}

function $d(e, t) { if (Y(t)) { const n = e.stopImmediatePropagation; return e.stopImmediatePropagation = () => { n.call(e), e._stopped = !0 }, t.map(s => r => !r._stopped && s && s(r)) } else return t }
const Fo = /^on[a-z]/,
    Rd = (e, t, n, s, r = !1, i, o, a, u) => { t === "class" ? vd(e, s, r) : t === "style" ? Td(e, n, s) : Ks(t) ? Ei(t) || Dd(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Md(e, t, s, r)) ? Cd(e, t, s, i, o, a, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ad(e, t, s, r)) };

function Md(e, t, n, s) { return s ? !!(t === "innerHTML" || t === "textContent" || t in e && Fo.test(t) && z(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Fo.test(t) && Oe(n) ? !1 : t in e }
const xd = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
Sf.props;
const Fd = De({ patchProp: Rd }, bd);
let Wo;

function Wd() { return Wo || (Wo = ed(Fd)) }
const Vd = (...e) => {
    const t = Wd().createApp(...e),
        { mount: n } = t;
    return t.mount = s => { const r = Hd(s); if (!r) return; const i = t._component;!z(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = ""; const o = n(r, !1, r instanceof SVGElement); return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o }, t
};

function Hd(e) { return Oe(e) ? document.querySelector(e) : e }
const ql = "./assets/1.f06e828c.png";
const Ud = (e, t) => { const n = e.__vccOpts || e; for (const [s, r] of t) n[s] = r; return n },
    jd = { name: "VPreloader", emits: ["update:clicked"], props: { clicked: { type: Boolean, default: !1, require: !0 } } },
    Bd = e => (gf("data-v-14da30c0"), e = e(), Ef(), e),
    Kd = { class: "preloader" },
    Yd = { class: "preloader__info" },
    Gd = Bd(() => ee("img", { src: ql, alt: "logo", class: "preloader__pic" }, null, -1)),
    Xd = ["clicked"];

function qd(e, t, n, s, r, i) { return Yr(), jl("div", Kd, [ee("div", Yd, [Gd, ee("button", { clicked: n.clicked, onClick: t[0] || (t[0] = o => e.$emit("update:clicked", o.target.clicked = !0)), type: "button", class: "preloader__btn", "aria-label": "\u041A\u043D\u043E\u043F\u043A\u0430 \u0432\u043D\u0438\u0437" }, null, 8, Xd)])]) }
const zd = Ud(jd, [
    ["render", qd],
    ["__scopeId", "data-v-14da30c0"]
]);
/*!
 * shared v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const Qr = typeof window < "u",
    Qd = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    Yt = e => Qd ? Symbol(e) : e,
    Jd = (e, t, n) => Zd({ l: e, k: t, s: n }),
    Zd = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    Ee = e => typeof e == "number" && isFinite(e),
    eh = e => Wi(e) === "[object Date]",
    Ut = e => Wi(e) === "[object RegExp]",
    nr = e => K(e) && Object.keys(e).length === 0;

function th(e, t) { typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack)) }
const ye = Object.assign;
let Vo;
const Jn = () => Vo || (Vo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ho(e) { return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") }
const nh = Object.prototype.hasOwnProperty;

function Fi(e, t) { return nh.call(e, t) }
const ce = Array.isArray,
    he = e => typeof e == "function",
    x = e => typeof e == "string",
    te = e => typeof e == "boolean",
    ue = e => e !== null && typeof e == "object",
    zl = Object.prototype.toString,
    Wi = e => zl.call(e),
    K = e => Wi(e) === "[object Object]",
    sh = e => e == null ? "" : ce(e) || K(e) && e.toString === zl ? JSON.stringify(e, null, 2) : String(e);
/*!
 * message-compiler v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const re = { EXPECTED_TOKEN: 1, INVALID_TOKEN_IN_PLACEHOLDER: 2, UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3, UNKNOWN_ESCAPE_SEQUENCE: 4, INVALID_UNICODE_ESCAPE_SEQUENCE: 5, UNBALANCED_CLOSING_BRACE: 6, UNTERMINATED_CLOSING_BRACE: 7, EMPTY_PLACEHOLDER: 8, NOT_ALLOW_NEST_PLACEHOLDER: 9, INVALID_LINKED_FORMAT: 10, MUST_HAVE_MESSAGES_IN_PLURAL: 11, UNEXPECTED_EMPTY_LINKED_MODIFIER: 12, UNEXPECTED_EMPTY_LINKED_KEY: 13, UNEXPECTED_LEXICAL_ANALYSIS: 14, __EXTEND_POINT__: 15 };

function sr(e, t, n = {}) { const { domain: s, messages: r, args: i } = n, o = e, a = new SyntaxError(String(o)); return a.code = e, t && (a.location = t), a.domain = s, a }

function rh(e) { throw e }

function ih(e, t, n) { return { line: e, column: t, offset: n } }

function Jr(e, t, n) { const s = { start: e, end: t }; return n != null && (s.source = n), s }
const yt = " ",
    oh = "\r",
    Re = `
`,
    ah = String.fromCharCode(8232),
    lh = String.fromCharCode(8233);

function ch(e) {
    const t = e;
    let n = 0,
        s = 1,
        r = 1,
        i = 0;
    const o = $ => t[$] === oh && t[$ + 1] === Re,
        a = $ => t[$] === Re,
        u = $ => t[$] === lh,
        f = $ => t[$] === ah,
        d = $ => o($) || a($) || u($) || f($),
        g = () => n,
        m = () => s,
        v = () => r,
        I = () => i,
        C = $ => o($) || u($) || f($) ? Re : t[$],
        L = () => C(n),
        p = () => C(n + i);

    function N() { return i = 0, d(n) && (s++, r = 0), o(n) && n++, n++, r++, t[n] }

    function O() { return o(n + i) && i++, i++, t[n + i] }

    function b() { n = 0, s = 1, r = 1, i = 0 }

    function T($ = 0) { i = $ }

    function P() {
        const $ = n + i;
        for (; $ !== n;) N();
        i = 0
    }
    return { index: g, line: m, column: v, peekOffset: I, charAt: C, currentChar: L, currentPeek: p, next: N, peek: O, reset: b, resetPeek: T, skipToPeek: P }
}
const $t = void 0,
    Uo = "'",
    uh = "tokenizer";

function fh(e, t = {}) {
    const n = t.location !== !1,
        s = ch(e),
        r = () => s.index(),
        i = () => ih(s.line(), s.column(), s.index()),
        o = i(),
        a = r(),
        u = { currentType: 14, offset: a, startLoc: o, endLoc: o, lastType: 14, lastOffset: a, lastStartLoc: o, lastEndLoc: o, braceNest: 0, inLinked: !1, text: "" },
        f = () => u,
        { onError: d } = t;

    function g(c, l, h, ...E) {
        const y = f();
        if (l.column += h, l.offset += h, d) {
            const w = Jr(y.startLoc, l),
                R = sr(c, w, { domain: uh, args: E });
            d(R)
        }
    }

    function m(c, l, h) { c.endLoc = i(), c.currentType = l; const E = { type: l }; return n && (E.loc = Jr(c.startLoc, c.endLoc)), h != null && (E.value = h), E }
    const v = c => m(c, 14);

    function I(c, l) { return c.currentChar() === l ? (c.next(), l) : (g(re.EXPECTED_TOKEN, i(), 0, l), "") }

    function C(c) { let l = ""; for (; c.currentPeek() === yt || c.currentPeek() === Re;) l += c.currentPeek(), c.peek(); return l }

    function L(c) { const l = C(c); return c.skipToPeek(), l }

    function p(c) { if (c === $t) return !1; const l = c.charCodeAt(0); return l >= 97 && l <= 122 || l >= 65 && l <= 90 || l === 95 }

    function N(c) { if (c === $t) return !1; const l = c.charCodeAt(0); return l >= 48 && l <= 57 }

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
        const E = c.currentPeek() === Uo;
        return c.resetPeek(), E
    }

    function P(c, l) {
        const { currentType: h } = l;
        if (h !== 8) return !1;
        C(c);
        const E = c.currentPeek() === ".";
        return c.resetPeek(), E
    }

    function $(c, l) {
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
        const E = () => { const w = c.currentPeek(); return w === "{" ? p(c.peek()) : w === "@" || w === "%" || w === "|" || w === ":" || w === "." || w === yt || !w ? !1 : w === Re ? (c.peek(), E()) : p(w) },
            y = E();
        return c.resetPeek(), y
    }

    function H(c) { C(c); const l = c.currentPeek() === "|"; return c.resetPeek(), l }

    function j(c) {
        const l = C(c),
            h = c.currentPeek() === "%" && c.peek() === "{";
        return c.resetPeek(), { isModulo: h, hasSpace: l.length > 0 }
    }

    function ne(c, l = !0) {
        const h = (y = !1, w = "", R = !1) => { const S = c.currentPeek(); return S === "{" ? w === "%" ? !1 : y : S === "@" || !S ? w === "%" ? !0 : y : S === "%" ? (c.peek(), h(y, "%", !0)) : S === "|" ? w === "%" || R ? !0 : !(w === yt || w === Re) : S === yt ? (c.peek(), h(!0, yt, R)) : S === Re ? (c.peek(), h(!0, Re, R)) : !0 },
            E = h();
        return l && c.resetPeek(), E
    }

    function q(c, l) { const h = c.currentChar(); return h === $t ? $t : l(h) ? (c.next(), h) : null }

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
                if (ne(c)) l += h, c.next();
                else break;
            else if (h === yt || h === Re)
                if (ne(c)) l += h, c.next();
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
        return c.currentChar() === $t && g(re.UNTERMINATED_CLOSING_BRACE, i(), 0), h
    }

    function Pe(c) { L(c); let l = ""; return c.currentChar() === "-" ? (c.next(), l += `-${B(c)}`) : l += B(c), c.currentChar() === $t && g(re.UNTERMINATED_CLOSING_BRACE, i(), 0), l }

    function ve(c) {
        L(c), I(c, "'");
        let l = "",
            h = "";
        const E = w => w !== Uo && w !== Re;
        for (; l = q(c, E);) l === "\\" ? h += Te(c) : h += l;
        const y = c.currentChar();
        return y === Re || y === $t ? (g(re.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), y === Re && (c.next(), I(c, "'")), h) : (I(c, "'"), h)
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
        const E = y => y !== "{" && y !== "}" && y !== yt && y !== Re;
        for (; l = q(c, E);) h += l;
        return h
    }

    function je(c) {
        let l = "",
            h = "";
        for (; l = ge(c);) h += l;
        return h
    }

    function _e(c) { const l = (h = !1, E) => { const y = c.currentChar(); return y === "{" || y === "%" || y === "@" || y === "|" || !y || y === yt ? E : y === Re ? (E += y, c.next(), l(h, E)) : (E += y, c.next(), l(!0, E)) }; return l(!1, "") }

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
                    R = !0;
                if (H(c)) return l.braceNest > 0 && g(re.UNTERMINATED_CLOSING_BRACE, i(), 0), h = m(l, 1, pe(c)), l.braceNest = 0, l.inLinked = !1, h;
                if (l.braceNest > 0 && (l.currentType === 5 || l.currentType === 6 || l.currentType === 7)) return g(re.UNTERMINATED_CLOSING_BRACE, i(), 0), l.braceNest = 0, ke(c, l);
                if (y = O(c, l)) return h = m(l, 5, Fe(c)), L(c), h;
                if (w = b(c, l)) return h = m(l, 6, Pe(c)), L(c), h;
                if (R = T(c, l)) return h = m(l, 7, ve(c)), L(c), h;
                if (!y && !w && !R) return h = m(l, 13, Ie(c)), g(re.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, h.value), L(c), h;
                break
        }
        return h
    }

    function Ce(c, l) {
        const { currentType: h } = l;
        let E = null;
        const y = c.currentChar();
        switch ((h === 8 || h === 9 || h === 12 || h === 10) && (y === Re || y === yt) && g(re.INVALID_LINKED_FORMAT, i(), 0), y) {
            case "@":
                return c.next(), E = m(l, 8, "@"), l.inLinked = !0, E;
            case ".":
                return L(c), c.next(), m(l, 9, ".");
            case ":":
                return L(c), c.next(), m(l, 10, ":");
            default:
                return H(c) ? (E = m(l, 1, pe(c)), l.braceNest = 0, l.inLinked = !1, E) : P(c, l) || F(c, l) ? (L(c), Ce(c, l)) : $(c, l) ? (L(c), m(l, 12, je(c))) : V(c, l) ? (L(c), y === "{" ? We(c, l) || E : m(l, 11, _e(c))) : (h === 8 && g(re.INVALID_LINKED_FORMAT, i(), 0), l.braceNest = 0, l.inLinked = !1, ke(c, l))
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
                if (ne(c)) return m(l, 0, fe(c));
                break
        }
        return h
    }

    function qe() { const { currentType: c, offset: l, startLoc: h, endLoc: E } = u; return u.lastType = c, u.lastOffset = l, u.lastStartLoc = h, u.lastEndLoc = E, u.offset = r(), u.startLoc = i(), s.currentChar() === $t ? m(u, 14) : ke(s, u) }
    return { nextToken: qe, currentOffset: r, currentPosition: i, context: f }
}
const dh = "parser",
    hh = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function _h(e, t, n) {
    switch (e) {
        case "\\\\":
            return "\\";
        case "\\'":
            return "'";
        default:
            { const s = parseInt(t || n, 16); return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "\uFFFD" }
    }
}

function ph(e = {}) {
    const t = e.location !== !1,
        { onError: n } = e;

    function s(p, N, O, b, ...T) {
        const P = p.currentPosition();
        if (P.offset += b, P.column += b, n) {
            const $ = Jr(O, P),
                F = sr(N, $, { domain: dh, args: T });
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
        return P.value = N.replace(hh, _h), p.nextToken(), i(P, p.currentOffset(), p.currentPosition()), P
    }

    function d(p) {
        const N = p.nextToken(),
            O = p.context(),
            { lastOffset: b, lastStartLoc: T } = O,
            P = r(8, b, T);
        return N.type !== 12 ? (s(p, re.UNEXPECTED_EMPTY_LINKED_MODIFIER, O.lastStartLoc, 0), P.value = "", i(P, b, T), { nextConsumeToken: N, node: P }) : (N.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, ht(N)), P.value = N.value || "", i(P, p.currentOffset(), p.currentPosition()), { node: P })
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
        switch (b.type !== 10 && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, ht(b)), b = p.nextToken(), b.type === 2 && (b = p.nextToken()), b.type) {
            case 11:
                b.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, ht(b)), O.key = g(p, b.value || "");
                break;
            case 5:
                b.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, ht(b)), O.key = u(p, b.value || "");
                break;
            case 6:
                b.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, ht(b)), O.key = a(p, b.value || "");
                break;
            case 7:
                b.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, ht(b)), O.key = f(p, b.value || "");
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
                    V.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, ht(V)), T.items.push(o(p, V.value || ""));
                    break;
                case 6:
                    V.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, ht(V)), T.items.push(a(p, V.value || ""));
                    break;
                case 5:
                    V.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, ht(V)), T.items.push(u(p, V.value || ""));
                    break;
                case 7:
                    V.value == null && s(p, re.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, ht(V)), T.items.push(f(p, V.value || ""));
                    break;
                case 8:
                    const H = m(p);
                    T.items.push(H.node), P = H.nextConsumeToken || null;
                    break
            }
        } while (N.currentType !== 14 && N.currentType !== 1);
        const $ = N.currentType === 1 ? N.lastOffset : p.currentOffset(),
            F = N.currentType === 1 ? N.lastEndLoc : p.currentPosition();
        return i(T, $, F), T
    }

    function I(p, N, O, b) {
        const T = p.context();
        let P = b.items.length === 0;
        const $ = r(1, N, O);
        $.cases = [], $.cases.push(b);
        do {
            const F = v(p);
            P || (P = F.items.length === 0), $.cases.push(F)
        } while (T.currentType !== 14);
        return P && s(p, re.MUST_HAVE_MESSAGES_IN_PLURAL, O, 0), i($, p.currentOffset(), p.currentPosition()), $
    }

    function C(p) {
        const N = p.context(),
            { offset: O, startLoc: b } = N,
            T = v(p);
        return N.currentType === 14 ? T : I(p, O, b, T)
    }

    function L(p) {
        const N = fh(p, ye({}, e)),
            O = N.context(),
            b = r(0, O.offset, O.startLoc);
        return t && b.loc && (b.loc.source = p), b.body = C(N), O.currentType !== 14 && s(N, re.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, p[O.offset] || ""), i(b, N.currentOffset(), N.currentPosition()), b
    }
    return { parse: L }
}

function ht(e) { if (e.type === 14) return "EOF"; const t = (e.value || "").replace(/\r?\n/gu, "\\n"); return t.length > 10 ? t.slice(0, 9) + "\u2026" : t }

function mh(e, t = {}) { const n = { ast: e, helpers: new Set }; return { context: () => n, helper: i => (n.helpers.add(i), i) } }

function jo(e, t) { for (let n = 0; n < e.length; n++) Vi(e[n], t) }

function Vi(e, t) {
    switch (e.type) {
        case 1:
            jo(e.cases, t), t.helper("plural");
            break;
        case 2:
            jo(e.items, t);
            break;
        case 6:
            Vi(e.key, t), t.helper("linked"), t.helper("type");
            break;
        case 5:
            t.helper("interpolate"), t.helper("list");
            break;
        case 4:
            t.helper("interpolate"), t.helper("named");
            break
    }
}

function gh(e, t = {}) {
    const n = mh(e);
    n.helper("normalize"), e.body && Vi(e.body, n);
    const s = n.context();
    e.helpers = Array.from(s.helpers)
}

function Eh(e, t) {
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

function bh(e, t) {
    const { helper: n } = e;
    e.push(`${n("linked")}(`), Dn(e, t.key), t.modifier ? (e.push(", "), Dn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function vh(e, t) {
    const { helper: n, needIndent: s } = e;
    e.push(`${n("normalize")}([`), e.indent(s());
    const r = t.items.length;
    for (let i = 0; i < r && (Dn(e, t.items[i]), i !== r - 1); i++) e.push(", ");
    e.deindent(s()), e.push("])")
}

function Th(e, t) {
    const { helper: n, needIndent: s } = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`), e.indent(s());
        const r = t.cases.length;
        for (let i = 0; i < r && (Dn(e, t.cases[i]), i !== r - 1); i++) e.push(", ");
        e.deindent(s()), e.push("])")
    }
}

function yh(e, t) { t.body ? Dn(e, t.body) : e.push("null") }

function Dn(e, t) {
    const { helper: n } = e;
    switch (t.type) {
        case 0:
            yh(e, t);
            break;
        case 1:
            Th(e, t);
            break;
        case 2:
            vh(e, t);
            break;
        case 6:
            bh(e, t);
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
const Ah = (e, t = {}) => {
        const n = x(t.mode) ? t.mode : "normal",
            s = x(t.filename) ? t.filename : "message.intl",
            r = !!t.sourceMap,
            i = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
            o = t.needIndent ? t.needIndent : n !== "arrow",
            a = e.helpers || [],
            u = Eh(e, { mode: n, filename: s, sourceMap: r, breakLineCode: i, needIndent: o });
        u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(o), a.length > 0 && (u.push(`const { ${a.map(g=>`${g}: _${g}`).join(", ")} } = ctx`),u.newline()),u.push("return "),Dn(u,e),u.deindent(o),u.push("}");const{code:f,map:d}=u.context();return{ast:e,code:f,map:d?d.toJSON():void 0}};function Ch(e,t={}){const n=ye({},t),r=ph(n).parse(e);return gh(r,n),Ah(r,n)}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Ql={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Gt=[];Gt[0]={w:[0],i:[3,0],["["]:[4],o:[7]};Gt[1]={w:[1],["."]:[2],["["]:[4],o:[7]};Gt[2]={w:[2],i:[3,0],[0]:[3,0]};Gt[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};Gt[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};Gt[5]={["'"]:[4,0],o:8,l:[5,0]};Gt[6]={['"']:[4,0],o:8,l:[6,0]};const Nh=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Lh(e){return Nh.test(e)}function Oh(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function wh(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Ih(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Lh(t)?Oh(t):"*"+t}function Sh(e){const t=[];let n=-1,s=0,r=0,i,o,a,u,f,d,g;const m=[];m[0]=()=>{o===void 0?o=a:o+=a},m[1]=()=>{o!==void 0&&(t.push(o),o=void 0)},m[2]=()=>{m[0](),r++},m[3]=()=>{if(r>0)r--,s=4,m[0]();else{if(r=0,o===void 0||(o=Ih(o),o===!1))return!1;m[1]()}};function v(){const I=e[n+1];if(s===5&&I==="'"||s===6&&I==='"')return n++,a="\\"+I,m[0](),!0}for(;s!==null;)if(n++,i=e[n],!(i==="\\"&&v())){if(u=wh(i),g=Gt[s],f=g[u]||g.l||8,f===8||(s=f[0],f[1]!==void 0&&(d=m[f[1]],d&&(a=i,d()===!1))))return;if(s===7)return t}}const Bo=new Map;function Dh(e,t){return ue(e)?e[t]:null}function Ph(e,t){if(!ue(e))return null;let n=Bo.get(t);if(n||(n=Sh(t),n&&Bo.set(t,n)),!n)return null;const s=n.length;let r=e,i=0;for(;i<s;){const o=r[n[i]];if(o===void 0)return null;r=o,i++}return r}const kh=e=>e,$h=e=>"",Rh="text",Mh=e=>e.length===0?"":e.join(""),xh=sh;function Ko(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Fh(e){const t=Ee(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(Ee(e.named.count)||Ee(e.named.n))?Ee(e.named.count)?e.named.count:Ee(e.named.n)?e.named.n:t:t}function Wh(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Vh(e={}){const t=e.locale,n=Fh(e),s=ue(e.pluralRules)&&x(t)&&he(e.pluralRules[t])?e.pluralRules[t]:Ko,r=ue(e.pluralRules)&&x(t)&&he(e.pluralRules[t])?Ko:void 0,i=p=>p[s(n,p.length,r)],o=e.list||[],a=p=>o[p],u=e.named||{};Ee(e.pluralIndex)&&Wh(n,u);const f=p=>u[p];function d(p){const N=he(e.messages)?e.messages(p):ue(e.messages)?e.messages[p]:!1;return N||(e.parent?e.parent.message(p):$h)}const g=p=>e.modifiers?e.modifiers[p]:kh,m=K(e.processor)&&he(e.processor.normalize)?e.processor.normalize:Mh,v=K(e.processor)&&he(e.processor.interpolate)?e.processor.interpolate:xh,I=K(e.processor)&&x(e.processor.type)?e.processor.type:Rh,L={list:a,named:f,plural:i,linked:(p,...N)=>{const[O,b]=N;let T="text",P="";N.length===1?ue(O)?(P=O.modifier||P,T=O.type||T):x(O)&&(P=O||P):N.length===2&&(x(O)&&(P=O||P),x(b)&&(T=b||T));let $=d(p)(L);return T==="vnode"&&ce($)&&P&&($=$[0]),P?g(P)($,T):$},message:d,type:I,interpolate:v,normalize:m};return L}let ls=null;function Hh(e){ls=e}function Uh(e,t,n){ls&&ls.emit(Ql.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const jh=Bh(Ql.FunctionTranslate);function Bh(e){return t=>ls&&ls.emit(e,t)}const Kh={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function Yh(e,t,n){return[...new Set([n,...ce(t)?t:ue(t)?Object.keys(t):x(t)?[t]:[n]])]}function Jl(e,t,n){const s=x(n)?n:us,r=e;r.__localeChainCache||(r.__localeChainCache=new Map);let i=r.__localeChainCache.get(s);if(!i){i=[];let o=[n];for(;ce(o);)o=Yo(i,o,t);const a=ce(t)||!K(t)?t:t.default?t.default:null;o=x(a)?[a]:a,ce(o)&&Yo(i,o,!1),r.__localeChainCache.set(s,i)}return i}function Yo(e,t,n){let s=!0;for(let r=0;r<t.length&&te(s);r++){const i=t[r];x(i)&&(s=Gh(e,t[r],n))}return s}function Gh(e,t,n){let s;const r=t.split("-");do{const i=r.join("-");s=Xh(e,i,n),r.splice(-1,1)}while(r.length&&s===!0);return s}function Xh(e,t,n){let s=!1;if(!e.includes(t)&&(s=!0,t)){s=t[t.length-1]!=="!";const r=t.replace(/!/g,"");e.push(r),(ce(n)||K(n))&&n[r]&&(s=n[r])}return s}const qh="9.2.2",rr=-1,us="en-US",Go="",Xo=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function zh(){return{upper:(e,t)=>t==="text"&&x(e)?e.toUpperCase():t==="vnode"&&ue(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&x(e)?e.toLowerCase():t==="vnode"&&ue(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&x(e)?Xo(e):t==="vnode"&&ue(e)&&"__v_isVNode"in e?Xo(e.children):e}}let Zl;function Qh(e){Zl=e}let ec;function Jh(e){ec=e}let tc;function Zh(e){tc=e}let nc=null;const qo=e=>{nc=e},e_=()=>nc;let sc=null;const zo=e=>{sc=e},t_=()=>sc;let Qo=0;function n_(e={}){const t=x(e.version)?e.version:qh,n=x(e.locale)?e.locale:us,s=ce(e.fallbackLocale)||K(e.fallbackLocale)||x(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,r=K(e.messages)?e.messages:{[n]:{}},i=K(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},o=K(e.numberFormats)?e.numberFormats:{[n]:{}},a=ye({},e.modifiers||{},zh()),u=e.pluralRules||{},f=he(e.missing)?e.missing:null,d=te(e.missingWarn)||Ut(e.missingWarn)?e.missingWarn:!0,g=te(e.fallbackWarn)||Ut(e.fallbackWarn)?e.fallbackWarn:!0,m=!!e.fallbackFormat,v=!!e.unresolving,I=he(e.postTranslation)?e.postTranslation:null,C=K(e.processor)?e.processor:null,L=te(e.warnHtmlMessage)?e.warnHtmlMessage:!0,p=!!e.escapeParameter,N=he(e.messageCompiler)?e.messageCompiler:Zl,O=he(e.messageResolver)?e.messageResolver:ec||Dh,b=he(e.localeFallbacker)?e.localeFallbacker:tc||Yh,T=ue(e.fallbackContext)?e.fallbackContext:void 0,P=he(e.onWarn)?e.onWarn:th,$=e,F=ue($.__datetimeFormatters)?$.__datetimeFormatters:new Map,V=ue($.__numberFormatters)?$.__numberFormatters:new Map,H=ue($.__meta)?$.__meta:{};Qo++;const j={version:t,cid:Qo,locale:n,fallbackLocale:s,messages:r,modifiers:a,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:g,fallbackFormat:m,unresolving:v,postTranslation:I,processor:C,warnHtmlMessage:L,escapeParameter:p,messageCompiler:N,messageResolver:O,localeFallbacker:b,fallbackContext:T,onWarn:P,__meta:H};return j.datetimeFormats=i,j.numberFormats=o,j.__datetimeFormatters=F,j.__numberFormatters=V,__INTLIFY_PROD_DEVTOOLS__&&Uh(j,t,H),j}function Hi(e,t,n,s,r){const{missing:i,onWarn:o}=e;if(i!==null){const a=i(e,n,t,r);return x(a)?a:t}else return t}function Gn(e,t,n){const s=e;s.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}const s_=e=>e;let Jo=Object.create(null);function r_(e,t={}){{const s=(t.onCacheKey||s_)(e),r=Jo[s];if(r)return r;let i=!1;const o=t.onError||rh;t.onError=f=>{i=!0,o(f)};const{code:a}=Ch(e,t),u=new Function(`return ${a}`)();return i?u:Jo[s]=u}}let rc=re.__EXTEND_POINT__;const vr=()=>++rc,En={INVALID_ARGUMENT:rc,INVALID_DATE_ARGUMENT:vr(),INVALID_ISO_DATE_ARGUMENT:vr(),__EXTEND_POINT__:vr()};function bn(e){return sr(e,null,void 0)}const Zo=()=>"",mt=e=>he(e);function ea(e,...t){const{fallbackFormat:n,postTranslation:s,unresolving:r,messageCompiler:i,fallbackLocale:o,messages:a}=e,[u,f]=Zr(...t),d=te(f.missingWarn)?f.missingWarn:e.missingWarn,g=te(f.fallbackWarn)?f.fallbackWarn:e.fallbackWarn,m=te(f.escapeParameter)?f.escapeParameter:e.escapeParameter,v=!!f.resolvedMessage,I=x(f.default)||te(f.default)?te(f.default)?i?u:()=>u:f.default:n?i?u:()=>u:"",C=n||I!=="",L=x(f.locale)?f.locale:e.locale;m&&i_(f);let[p,N,O]=v?[u,L,a[L]||{}]:ic(e,u,L,o,g,d),b=p,T=u;if(!v&&!(x(b)||mt(b))&&C&&(b=I,T=b),!v&&(!(x(b)||mt(b))||!x(N)))return r?rr:u;let P=!1;const $=()=>{P=!0},F=mt(b)?b:oc(e,u,N,b,T,$);if(P)return b;const V=l_(e,N,O,f),H=Vh(V),j=o_(e,F,H),ne=s?s(j,u):j;if(__INTLIFY_PROD_DEVTOOLS__){const q={timestamp:Date.now(),key:x(u)?u:mt(b)?b.key:"",locale:N||(mt(b)?b.locale:""),format:x(b)?b:mt(b)?b.source:"",message:ne};q.meta=ye({},e.__meta,e_()||{}),jh(q)}return ne}function i_(e){ce(e.list)?e.list=e.list.map(t=>x(t)?Ho(t):t):ue(e.named)&&Object.keys(e.named).forEach(t=>{x(e.named[t])&&(e.named[t]=Ho(e.named[t]))})}function ic(e,t,n,s,r,i){const{messages:o,onWarn:a,messageResolver:u,localeFallbacker:f}=e,d=f(e,s,n);let g={},m,v=null;const I="translate";for(let C=0;C<d.length&&(m=d[C],g=o[m]||{},(v=u(g,t))===null&&(v=g[t]),!(x(v)||he(v)));C++){const L=Hi(e,t,m,i,I);L!==t&&(v=L)}return[v,m,g]}function oc(e,t,n,s,r,i){const{messageCompiler:o,warnHtmlMessage:a}=e;if(mt(s)){const f=s;return f.locale=f.locale||n,f.key=f.key||t,f}if(o==null){const f=()=>s;return f.locale=n,f.key=t,f}const u=o(s,a_(e,n,r,s,a,i));return u.locale=n,u.key=t,u.source=s,u}function o_(e,t,n){return t(n)}function Zr(...e){const[t,n,s]=e,r={};if(!x(t)&&!Ee(t)&&!mt(t))throw bn(En.INVALID_ARGUMENT);const i=Ee(t)?String(t):(mt(t),t);return Ee(n)?r.plural=n:x(n)?r.default=n:K(n)&&!nr(n)?r.named=n:ce(n)&&(r.list=n),Ee(s)?r.plural=s:x(s)?r.default=s:K(s)&&ye(r,s),[i,r]}function a_(e,t,n,s,r,i){return{warnHtmlMessage:r,onError:o=>{throw i&&i(o),o},onCacheKey:o=>Jd(t,n,o)}}function l_(e,t,n,s){const{modifiers:r,pluralRules:i,messageResolver:o,fallbackLocale:a,fallbackWarn:u,missingWarn:f,fallbackContext:d}=e,m={locale:t,modifiers:r,pluralRules:i,messages:v=>{let I=o(n,v);if(I==null&&d){const[,,C]=ic(d,v,t,a,u,f);I=o(C,v)}if(x(I)){let C=!1;const p=oc(e,v,t,I,v,()=>{C=!0});return C?Zo:p}else return mt(I)?I:Zo}};return e.processor&&(m.processor=e.processor),s.list&&(m.list=s.list),s.named&&(m.named=s.named),Ee(s.plural)&&(m.pluralIndex=s.plural),m}function ta(e,...t){const{datetimeFormats:n,unresolving:s,fallbackLocale:r,onWarn:i,localeFallbacker:o}=e,{__datetimeFormatters:a}=e,[u,f,d,g]=ei(...t),m=te(d.missingWarn)?d.missingWarn:e.missingWarn;te(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const v=!!d.part,I=x(d.locale)?d.locale:e.locale,C=o(e,r,I);if(!x(u)||u==="")return new Intl.DateTimeFormat(I,g).format(f);let L={},p,N=null;const O="datetime format";for(let P=0;P<C.length&&(p=C[P],L=n[p]||{},N=L[u],!K(N));P++)Hi(e,u,p,m,O);if(!K(N)||!x(p))return s?rr:u;let b=`${p}__${u}`;nr(g)||(b=`${b}__${JSON.stringify(g)}`);let T=a.get(b);return T||(T=new Intl.DateTimeFormat(p,ye({},N,g)),a.set(b,T)),v?T.formatToParts(f):T.format(f)}const ac=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function ei(...e){const[t,n,s,r]=e,i={};let o={},a;if(x(t)){const u=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!u)throw bn(En.INVALID_ISO_DATE_ARGUMENT);const f=u[3]?u[3].trim().startsWith("T")?`${u[1].trim()}${u[3].trim()}`:`${u[1].trim()}T${u[3].trim()}`:u[1].trim();a=new Date(f);try{a.toISOString()}catch{throw bn(En.INVALID_ISO_DATE_ARGUMENT)}}else if(eh(t)){if(isNaN(t.getTime()))throw bn(En.INVALID_DATE_ARGUMENT);a=t}else if(Ee(t))a=t;else throw bn(En.INVALID_ARGUMENT);return x(n)?i.key=n:K(n)&&Object.keys(n).forEach(u=>{ac.includes(u)?o[u]=n[u]:i[u]=n[u]}),x(s)?i.locale=s:K(s)&&(o=s),K(r)&&(o=r),[i.key||"",a,i,o]}function na(e,t,n){const s=e;for(const r in n){const i=`${t}__${r}`;!s.__datetimeFormatters.has(i)||s.__datetimeFormatters.delete(i)}}function sa(e,...t){const{numberFormats:n,unresolving:s,fallbackLocale:r,onWarn:i,localeFallbacker:o}=e,{__numberFormatters:a}=e,[u,f,d,g]=ti(...t),m=te(d.missingWarn)?d.missingWarn:e.missingWarn;te(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const v=!!d.part,I=x(d.locale)?d.locale:e.locale,C=o(e,r,I);if(!x(u)||u==="")return new Intl.NumberFormat(I,g).format(f);let L={},p,N=null;const O="number format";for(let P=0;P<C.length&&(p=C[P],L=n[p]||{},N=L[u],!K(N));P++)Hi(e,u,p,m,O);if(!K(N)||!x(p))return s?rr:u;let b=`${p}__${u}`;nr(g)||(b=`${b}__${JSON.stringify(g)}`);let T=a.get(b);return T||(T=new Intl.NumberFormat(p,ye({},N,g)),a.set(b,T)),v?T.formatToParts(f):T.format(f)}const lc=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function ti(...e){const[t,n,s,r]=e,i={};let o={};if(!Ee(t))throw bn(En.INVALID_ARGUMENT);const a=t;return x(n)?i.key=n:K(n)&&Object.keys(n).forEach(u=>{lc.includes(u)?o[u]=n[u]:i[u]=n[u]}),x(s)?i.locale=s:K(s)&&(o=s),K(r)&&(o=r),[i.key||"",a,i,o]}function ra(e,t,n){const s=e;for(const r in n){const i=`${t}__${r}`;!s.__numberFormatters.has(i)||s.__numberFormatters.delete(i)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Jn().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const c_="9.2.2";function u_(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Jn().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Jn().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Jn().__INTLIFY_PROD_DEVTOOLS__=!1)}Kh.__EXTEND_POINT__;let cc=re.__EXTEND_POINT__;const He=()=>++cc,me={UNEXPECTED_RETURN_TYPE:cc,INVALID_ARGUMENT:He(),MUST_BE_CALL_SETUP_TOP:He(),NOT_INSLALLED:He(),NOT_AVAILABLE_IN_LEGACY_MODE:He(),REQUIRED_VALUE:He(),INVALID_VALUE:He(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:He(),NOT_INSLALLED_WITH_PROVIDE:He(),UNEXPECTED_ERROR:He(),NOT_COMPATIBLE_LEGACY_VUE_I18N:He(),BRIDGE_SUPPORT_VUE_2_ONLY:He(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:He(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:He(),__EXTEND_POINT__:He()};function be(e,...t){return sr(e,null,void 0)}const ni=Yt("__transrateVNode"),si=Yt("__datetimeParts"),ri=Yt("__numberParts"),uc=Yt("__setPluralRules");Yt("__intlifyMeta");const fc=Yt("__injectWithOption");function ii(e){if(!ue(e))return e;for(const t in e)if(!!Fi(e,t))if(!t.includes("."))ue(e[t])&&ii(e[t]);else{const n=t.split("."),s=n.length-1;let r=e;for(let i=0;i<s;i++)n[i]in r||(r[n[i]]={}),r=r[n[i]];r[n[s]]=e[t],delete e[t],ue(r[n[s]])&&ii(r[n[s]])}return e}function ir(e,t){const{messages:n,__i18n:s,messageResolver:r,flatJson:i}=t,o=K(n)?n:ce(s)?{}:{[e]:{}};if(ce(s)&&s.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:u,resource:f}=a;u?(o[u]=o[u]||{},Zn(f,o[u])):Zn(f,o)}else x(a)&&Zn(JSON.parse(a),o)}),r==null&&i)for(const a in o)Fi(o,a)&&ii(o[a]);return o}const ys=e=>!ue(e)||ce(e);function Zn(e,t){if(ys(e)||ys(t))throw be(me.INVALID_VALUE);for(const n in e)Fi(e,n)&&(ys(e[n])||ys(t[n])?t[n]=e[n]:Zn(e[n],t[n]))}function dc(e){return e.type}function hc(e,t,n){let s=ue(t.messages)?t.messages:{};"__i18nGlobal"in n&&(s=ir(e.locale.value,{messages:s,__i18n:n.__i18nGlobal}));const r=Object.keys(s);r.length&&r.forEach(i=>{e.mergeLocaleMessage(i,s[i])});{if(ue(t.datetimeFormats)){const i=Object.keys(t.datetimeFormats);i.length&&i.forEach(o=>{e.mergeDateTimeFormat(o,t.datetimeFormats[o])})}if(ue(t.numberFormats)){const i=Object.keys(t.numberFormats);i.length&&i.forEach(o=>{e.mergeNumberFormat(o,t.numberFormats[o])})}}}function ia(e){return Ke(er,null,e,0)}const oa="__INTLIFY_META__";let aa=0;function la(e){return(t,n,s,r)=>e(n,s,In()||void 0,r)}const f_=()=>{const e=In();let t=null;return e&&(t=dc(e)[oa])?{[oa]:t}:null};function Ui(e={},t){const{__root:n}=e,s=n===void 0;let r=te(e.inheritLocale)?e.inheritLocale:!0;const i=it(n&&r?n.locale.value:x(e.locale)?e.locale:us),o=it(n&&r?n.fallbackLocale.value:x(e.fallbackLocale)||ce(e.fallbackLocale)||K(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:i.value),a=it(ir(i.value,e)),u=it(K(e.datetimeFormats)?e.datetimeFormats:{[i.value]:{}}),f=it(K(e.numberFormats)?e.numberFormats:{[i.value]:{}});let d=n?n.missingWarn:te(e.missingWarn)||Ut(e.missingWarn)?e.missingWarn:!0,g=n?n.fallbackWarn:te(e.fallbackWarn)||Ut(e.fallbackWarn)?e.fallbackWarn:!0,m=n?n.fallbackRoot:te(e.fallbackRoot)?e.fallbackRoot:!0,v=!!e.fallbackFormat,I=he(e.missing)?e.missing:null,C=he(e.missing)?la(e.missing):null,L=he(e.postTranslation)?e.postTranslation:null,p=n?n.warnHtmlMessage:te(e.warnHtmlMessage)?e.warnHtmlMessage:!0,N=!!e.escapeParameter;const O=n?n.modifiers:K(e.modifiers)?e.modifiers:{};let b=e.pluralRules||n&&n.pluralRules,T;T=(()=>{s&&zo(null);const _={version:c_,locale:i.value,fallbackLocale:o.value,messages:a.value,modifiers:O,pluralRules:b,missing:C===null?void 0:C,missingWarn:d,fallbackWarn:g,fallbackFormat:v,unresolving:!0,postTranslation:L===null?void 0:L,warnHtmlMessage:p,escapeParameter:N,messageResolver:e.messageResolver,__meta:{framework:"vue"}};_.datetimeFormats=u.value,_.numberFormats=f.value,_.__datetimeFormatters=K(T)?T.__datetimeFormatters:void 0,_.__numberFormatters=K(T)?T.__numberFormatters:void 0;const A=n_(_);return s&&zo(A),A})(),Gn(T,i.value,o.value);function $(){return[i.value,o.value,a.value,u.value,f.value]}const F=ot({get:()=>i.value,set:_=>{i.value=_,T.locale=i.value}}),V=ot({get:()=>o.value,set:_=>{o.value=_,T.fallbackLocale=o.value,Gn(T,i.value,_)}}),H=ot(()=>a.value),j=ot(()=>u.value),ne=ot(()=>f.value);function q(){return he(L)?L:null}function ge(_){L=_,T.postTranslation=_}function Ae(){return I}function X(_){_!==null&&(C=la(_)),I=_,T.missing=C}const B=(_,A,M,W,U,G)=>{$();let Z;if(__INTLIFY_PROD_DEVTOOLS__)try{qo(f_()),s||(T.fallbackContext=n?t_():void 0),Z=_(T)}finally{qo(null),s||(T.fallbackContext=void 0)}else Z=_(T);if(Ee(Z)&&Z===rr){const[oe,ae]=A();return n&&m?W(n):U(oe)}else{if(G(Z))return Z;throw be(me.UNEXPECTED_RETURN_TYPE)}};function J(..._){return B(A=>Reflect.apply(ea,null,[A,..._]),()=>Zr(..._),"translate",A=>Reflect.apply(A.t,A,[..._]),A=>A,A=>x(A))}function fe(..._){const[A,M,W]=_;if(W&&!ue(W))throw be(me.INVALID_ARGUMENT);return J(A,M,ye({resolvedMessage:!0},W||{}))}function Fe(..._){return B(A=>Reflect.apply(ta,null,[A,..._]),()=>ei(..._),"datetime format",A=>Reflect.apply(A.d,A,[..._]),()=>Go,A=>x(A))}function Pe(..._){return B(A=>Reflect.apply(sa,null,[A,..._]),()=>ti(..._),"number format",A=>Reflect.apply(A.n,A,[..._]),()=>Go,A=>x(A))}function ve(_){return _.map(A=>x(A)||Ee(A)||te(A)?ia(String(A)):A)}const we={normalize:ve,interpolate:_=>_,type:"vnode"};function Ie(..._){return B(A=>{let M;const W=A;try{W.processor=we,M=Reflect.apply(ea,null,[W,..._])}finally{W.processor=null}return M},()=>Zr(..._),"translate",A=>A[ni](..._),A=>[ia(A)],A=>ce(A))}function je(..._){return B(A=>Reflect.apply(sa,null,[A,..._]),()=>ti(..._),"number format",A=>A[ri](..._),()=>[],A=>x(A)||ce(A))}function _e(..._){return B(A=>Reflect.apply(ta,null,[A,..._]),()=>ei(..._),"datetime format",A=>A[si](..._),()=>[],A=>x(A)||ce(A))}function pe(_){b=_,T.pluralRules=b}function We(_,A){const M=x(A)?A:i.value,W=qe(M);return T.messageResolver(W,_)!==null}function Ce(_){let A=null;const M=Jl(T,o.value,i.value);for(let W=0;W<M.length;W++){const U=a.value[M[W]]||{},G=T.messageResolver(U,_);if(G!=null){A=G;break}}return A}function ke(_){const A=Ce(_);return A!=null?A:n?n.tm(_)||{}:{}}function qe(_){return a.value[_]||{}}function c(_,A){a.value[_]=A,T.messages=a.value}function l(_,A){a.value[_]=a.value[_]||{},Zn(A,a.value[_]),T.messages=a.value}function h(_){return u.value[_]||{}}function E(_,A){u.value[_]=A,T.datetimeFormats=u.value,na(T,_,A)}function y(_,A){u.value[_]=ye(u.value[_]||{},A),T.datetimeFormats=u.value,na(T,_,A)}function w(_){return f.value[_]||{}}function R(_,A){f.value[_]=A,T.numberFormats=f.value,ra(T,_,A)}function S(_,A){f.value[_]=ye(f.value[_]||{},A),T.numberFormats=f.value,ra(T,_,A)}aa++,n&&Qr&&(Nn(n.locale,_=>{r&&(i.value=_,T.locale=_,Gn(T,i.value,o.value))}),Nn(n.fallbackLocale,_=>{r&&(o.value=_,T.fallbackLocale=_,Gn(T,i.value,o.value))}));const D={id:aa,locale:F,fallbackLocale:V,get inheritLocale(){return r},set inheritLocale(_){r=_,_&&n&&(i.value=n.locale.value,o.value=n.fallbackLocale.value,Gn(T,i.value,o.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:H,get modifiers(){return O},get pluralRules(){return b||{}},get isGlobal(){return s},get missingWarn(){return d},set missingWarn(_){d=_,T.missingWarn=d},get fallbackWarn(){return g},set fallbackWarn(_){g=_,T.fallbackWarn=g},get fallbackRoot(){return m},set fallbackRoot(_){m=_},get fallbackFormat(){return v},set fallbackFormat(_){v=_,T.fallbackFormat=v},get warnHtmlMessage(){return p},set warnHtmlMessage(_){p=_,T.warnHtmlMessage=_},get escapeParameter(){return N},set escapeParameter(_){N=_,T.escapeParameter=_},t:J,getLocaleMessage:qe,setLocaleMessage:c,mergeLocaleMessage:l,getPostTranslationHandler:q,setPostTranslationHandler:ge,getMissingHandler:Ae,setMissingHandler:X,[uc]:pe};return D.datetimeFormats=j,D.numberFormats=ne,D.rt=fe,D.te=We,D.tm=ke,D.d=Fe,D.n=Pe,D.getDateTimeFormat=h,D.setDateTimeFormat=E,D.mergeDateTimeFormat=y,D.getNumberFormat=w,D.setNumberFormat=R,D.mergeNumberFormat=S,D[fc]=e.__injectWithOption,D[ni]=Ie,D[si]=_e,D[ri]=je,D}function d_(e){const t=x(e.locale)?e.locale:us,n=x(e.fallbackLocale)||ce(e.fallbackLocale)||K(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,s=he(e.missing)?e.missing:void 0,r=te(e.silentTranslationWarn)||Ut(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,i=te(e.silentFallbackWarn)||Ut(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,o=te(e.fallbackRoot)?e.fallbackRoot:!0,a=!!e.formatFallbackMessages,u=K(e.modifiers)?e.modifiers:{},f=e.pluralizationRules,d=he(e.postTranslation)?e.postTranslation:void 0,g=x(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,m=!!e.escapeParameterHtml,v=te(e.sync)?e.sync:!0;let I=e.messages;if(K(e.sharedMessages)){const T=e.sharedMessages;I=Object.keys(T).reduce(($,F)=>{const V=$[F]||($[F]={});return ye(V,T[F]),$},I||{})}const{__i18n:C,__root:L,__injectWithOption:p}=e,N=e.datetimeFormats,O=e.numberFormats,b=e.flatJson;return{locale:t,fallbackLocale:n,messages:I,flatJson:b,datetimeFormats:N,numberFormats:O,missing:s,missingWarn:r,fallbackWarn:i,fallbackRoot:o,fallbackFormat:a,modifiers:u,pluralRules:f,postTranslation:d,warnHtmlMessage:g,escapeParameter:m,messageResolver:e.messageResolver,inheritLocale:v,__i18n:C,__root:L,__injectWithOption:p}}function oi(e={},t){{const n=Ui(d_(e)),s={id:n.id,get locale(){return n.locale.value},set locale(r){n.locale.value=r},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(r){n.fallbackLocale.value=r},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(r){},get missing(){return n.getMissingHandler()},set missing(r){n.setMissingHandler(r)},get silentTranslationWarn(){return te(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(r){n.missingWarn=te(r)?!r:r},get silentFallbackWarn(){return te(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(r){n.fallbackWarn=te(r)?!r:r},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(r){n.fallbackFormat=r},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(r){n.setPostTranslationHandler(r)},get sync(){return n.inheritLocale},set sync(r){n.inheritLocale=r},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){n.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(r){n.escapeParameter=r},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(r){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...r){const[i,o,a]=r,u={};let f=null,d=null;if(!x(i))throw be(me.INVALID_ARGUMENT);const g=i;return x(o)?u.locale=o:ce(o)?f=o:K(o)&&(d=o),ce(a)?f=a:K(a)&&(d=a),Reflect.apply(n.t,n,[g,f||d||{},u])},rt(...r){return Reflect.apply(n.rt,n,[...r])},tc(...r){const[i,o,a]=r,u={plural:1};let f=null,d=null;if(!x(i))throw be(me.INVALID_ARGUMENT);const g=i;return x(o)?u.locale=o:Ee(o)?u.plural=o:ce(o)?f=o:K(o)&&(d=o),x(a)?u.locale=a:ce(a)?f=a:K(a)&&(d=a),Reflect.apply(n.t,n,[g,f||d||{},u])},te(r,i){return n.te(r,i)},tm(r){return n.tm(r)},getLocaleMessage(r){return n.getLocaleMessage(r)},setLocaleMessage(r,i){n.setLocaleMessage(r,i)},mergeLocaleMessage(r,i){n.mergeLocaleMessage(r,i)},d(...r){return Reflect.apply(n.d,n,[...r])},getDateTimeFormat(r){return n.getDateTimeFormat(r)},setDateTimeFormat(r,i){n.setDateTimeFormat(r,i)},mergeDateTimeFormat(r,i){n.mergeDateTimeFormat(r,i)},n(...r){return Reflect.apply(n.n,n,[...r])},getNumberFormat(r){return n.getNumberFormat(r)},setNumberFormat(r,i){n.setNumberFormat(r,i)},mergeNumberFormat(r,i){n.mergeNumberFormat(r,i)},getChoiceIndex(r,i){return-1},__onComponentInstanceCreated(r){const{componentInstanceCreatedListener:i}=e;i&&i(r,s)}};return s}}const ji={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function h_({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((s,r)=>s=[...s,...ce(r.children)?r.children:[r]],[]):t.reduce((n,s)=>{const r=e[s];return r&&(n[s]=r()),n},{})}function _c(e){return st}const ca={name:"i18n-t",props:ye({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>Ee(e)||!isNaN(e)}},ji),setup(e,t){const{slots:n,attrs:s}=t,r=e.i18n||fs({useScope:e.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(g=>g!=="_"),o={};e.locale&&(o.locale=e.locale),e.plural!==void 0&&(o.plural=x(e.plural)?+e.plural:e.plural);const a=h_(t,i),u=r[ni](e.keypath,a,o),f=ye({},s),d=x(e.tag)||ue(e.tag)?e.tag:_c();return Gl(d,f,u)}}};function __(e){return ce(e)&&!x(e[0])}function pc(e,t,n,s){const{slots:r,attrs:i}=t;return()=>{const o={part:!0};let a={};e.locale&&(o.locale=e.locale),x(e.format)?o.key=e.format:ue(e.format)&&(x(e.format.key)&&(o.key=e.format.key),a=Object.keys(e.format).reduce((m,v)=>n.includes(v)?ye({},m,{[v]:e.format[v]}):m,{}));const u=s(e.value,o,a);let f=[o.key];ce(u)?f=u.map((m,v)=>{const I=r[m.type],C=I?I({[m.type]:m.value,index:v,parts:u}):[m.value];return __(C)&&(C[0].key=`${m.type}-${v}`),C}):x(u)&&(f=[u]);const d=ye({},i),g=x(e.tag)||ue(e.tag)?e.tag:_c();return Gl(g,d,f)}}const ua={name:"i18n-n",props:ye({value:{type:Number,required:!0},format:{type:[String,Object]}},ji),setup(e,t){const n=e.i18n||fs({useScope:"parent",__useComponent:!0});return pc(e,t,lc,(...s)=>n[ri](...s))}},fa={name:"i18n-d",props:ye({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},ji),setup(e,t){const n=e.i18n||fs({useScope:"parent",__useComponent:!0});return pc(e,t,ac,(...s)=>n[si](...s))}};function p_(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const s=n.__getInstance(t);return s!=null?s.__composer:e.global.__composer}}function m_(e){const t=o=>{const{instance:a,modifiers:u,value:f}=o;if(!a||!a.$)throw be(me.UNEXPECTED_ERROR);const d=p_(e,a.$),g=da(f);return[Reflect.apply(d.t,d,[...ha(g)]),d]};return{created:(o,a)=>{const[u,f]=t(a);Qr&&e.global===f&&(o.__i18nWatcher=Nn(f.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=f,o.textContent=u},unmounted:o=>{Qr&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const u=o.__composer,f=da(a);o.textContent=Reflect.apply(u.t,u,[...ha(f)])}},getSSRProps:o=>{const[a]=t(o);return{textContent:a}}}}function da(e){if(x(e))return{path:e};if(K(e)){if(!("path"in e))throw be(me.REQUIRED_VALUE,"path");return e}else throw be(me.INVALID_VALUE)}function ha(e){const{path:t,locale:n,args:s,choice:r,plural:i}=e,o={},a=s||{};return x(n)&&(o.locale=n),Ee(r)&&(o.plural=r),Ee(i)&&(o.plural=i),[t,a,o]}function g_(e,t,...n){const s=K(n[0])?n[0]:{},r=!!s.useI18nComponentName;(te(s.globalInstall)?s.globalInstall:!0)&&(e.component(r?"i18n":ca.name,ca),e.component(ua.name,ua),e.component(fa.name,fa)),e.directive("t",m_(t))}function E_(e,t,n){return{beforeCreate(){const s=In();if(!s)throw be(me.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const i=r.i18n;r.__i18n&&(i.__i18n=r.__i18n),i.__root=t,this===this.$root?this.$i18n=_a(e,i):(i.__injectWithOption=!0,this.$i18n=oi(i))}else r.__i18n?this===this.$root?this.$i18n=_a(e,r):this.$i18n=oi({__i18n:r.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;r.__i18nGlobal&&hc(t,r,r),e.__onComponentInstanceCreated(this.$i18n),n.__setInstance(s,this.$i18n),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i)},mounted(){},unmounted(){const s=In();if(!s)throw be(me.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,n.__deleteInstance(s),delete this.$i18n}}}function _a(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[uc](t.pluralizationRules||e.pluralizationRules);const n=ir(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach(s=>e.mergeLocaleMessage(s,n[s])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(s=>e.mergeDateTimeFormat(s,t.datetimeFormats[s])),t.numberFormats&&Object.keys(t.numberFormats).forEach(s=>e.mergeNumberFormat(s,t.numberFormats[s])),e}const b_=Yt("global-vue-i18n");function v_(e={},t){const n=__VUE_I18N_LEGACY_API__&&te(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,s=te(e.globalInjection)?e.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&n?!!e.allowComposition:!0,i=new Map,[o,a]=T_(e,n),u=Yt("");function f(m){return i.get(m)||null}function d(m,v){i.set(m,v)}function g(m){i.delete(m)}{const m={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return r},async install(v,...I){v.__VUE_I18N_SYMBOL__=u,v.provide(v.__VUE_I18N_SYMBOL__,m),!n&&s&&S_(v,m.global),__VUE_I18N_FULL_INSTALL__&&g_(v,m,...I),__VUE_I18N_LEGACY_API__&&n&&v.mixin(E_(a,a.__composer,m));const C=v.unmount;v.unmount=()=>{m.dispose(),C()}},get global(){return a},dispose(){o.stop()},__instances:i,__getInstance:f,__setInstance:d,__deleteInstance:g};return m}}function fs(e={}){const t=In();if(t==null)throw be(me.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw be(me.NOT_INSLALLED);const n=y_(t),s=C_(n),r=dc(t),i=A_(e,r);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!e.__useComponent){if(!n.allowComposition)throw be(me.NOT_AVAILABLE_IN_LEGACY_MODE);return O_(t,i,s,e)}if(i==="global")return hc(s,e,r),s;if(i==="parent"){let u=N_(n,t,e.__useComponent);return u==null&&(u=s),u}const o=n;let a=o.__getInstance(t);if(a==null){const u=ye({},e);"__i18n"in r&&(u.__i18n=r.__i18n),s&&(u.__root=s),a=Ui(u),L_(o,t),o.__setInstance(t,a)}return a}function T_(e,t,n){const s=Iu();{const r=__VUE_I18N_LEGACY_API__&&t?s.run(()=>oi(e)):s.run(()=>Ui(e));if(r==null)throw be(me.UNEXPECTED_ERROR);return[s,r]}}function y_(e){{const t=Ds(e.isCE?b_:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw be(e.isCE?me.NOT_INSLALLED_WITH_PROVIDE:me.UNEXPECTED_ERROR);return t}}function A_(e,t){return nr(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function C_(e){return e.mode==="composition"?e.global:e.global.__composer}function N_(e,t,n=!1){let s=null;const r=t.root;let i=t.parent;for(;i!=null;){const o=e;if(e.mode==="composition")s=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(i);a!=null&&(s=a.__composer,n&&s&&!s[fc]&&(s=null))}if(s!=null||r===i)break;i=i.parent}return s}function L_(e,t,n){Pi(()=>{},t),ki(()=>{e.__deleteInstance(t)},t)}function O_(e,t,n,s={}){const r=t==="local",i=sf(null);if(r&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw be(me.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=te(s.inheritLocale)?s.inheritLocale:!0,a=it(r&&o?n.locale.value:x(s.locale)?s.locale:us),u=it(r&&o?n.fallbackLocale.value:x(s.fallbackLocale)||ce(s.fallbackLocale)||K(s.fallbackLocale)||s.fallbackLocale===!1?s.fallbackLocale:a.value),f=it(ir(a.value,s)),d=it(K(s.datetimeFormats)?s.datetimeFormats:{[a.value]:{}}),g=it(K(s.numberFormats)?s.numberFormats:{[a.value]:{}}),m=r?n.missingWarn:te(s.missingWarn)||Ut(s.missingWarn)?s.missingWarn:!0,v=r?n.fallbackWarn:te(s.fallbackWarn)||Ut(s.fallbackWarn)?s.fallbackWarn:!0,I=r?n.fallbackRoot:te(s.fallbackRoot)?s.fallbackRoot:!0,C=!!s.fallbackFormat,L=he(s.missing)?s.missing:null,p=he(s.postTranslation)?s.postTranslation:null,N=r?n.warnHtmlMessage:te(s.warnHtmlMessage)?s.warnHtmlMessage:!0,O=!!s.escapeParameter,b=r?n.modifiers:K(s.modifiers)?s.modifiers:{},T=s.pluralRules||r&&n.pluralRules;function P(){return[a.value,u.value,f.value,d.value,g.value]}const $=ot({get:()=>i.value?i.value.locale.value:a.value,set:l=>{i.value&&(i.value.locale.value=l),a.value=l}}),F=ot({get:()=>i.value?i.value.fallbackLocale.value:u.value,set:l=>{i.value&&(i.value.fallbackLocale.value=l),u.value=l}}),V=ot(()=>i.value?i.value.messages.value:f.value),H=ot(()=>d.value),j=ot(()=>g.value);function ne(){return i.value?i.value.getPostTranslationHandler():p}function q(l){i.value&&i.value.setPostTranslationHandler(l)}function ge(){return i.value?i.value.getMissingHandler():L}function Ae(l){i.value&&i.value.setMissingHandler(l)}function X(l){return P(),l()}function B(...l){return i.value?X(()=>Reflect.apply(i.value.t,null,[...l])):X(()=>"")}function J(...l){return i.value?Reflect.apply(i.value.rt,null,[...l]):""}function fe(...l){return i.value?X(()=>Reflect.apply(i.value.d,null,[...l])):X(()=>"")}function Fe(...l){return i.value?X(()=>Reflect.apply(i.value.n,null,[...l])):X(()=>"")}function Pe(l){return i.value?i.value.tm(l):{}}function ve(l,h){return i.value?i.value.te(l,h):!1}function Te(l){return i.value?i.value.getLocaleMessage(l):{}}function we(l,h){i.value&&(i.value.setLocaleMessage(l,h),f.value[l]=h)}function Ie(l,h){i.value&&i.value.mergeLocaleMessage(l,h)}function je(l){return i.value?i.value.getDateTimeFormat(l):{}}function _e(l,h){i.value&&(i.value.setDateTimeFormat(l,h),d.value[l]=h)}function pe(l,h){i.value&&i.value.mergeDateTimeFormat(l,h)}function We(l){return i.value?i.value.getNumberFormat(l):{}}function Ce(l,h){i.value&&(i.value.setNumberFormat(l,h),g.value[l]=h)}function ke(l,h){i.value&&i.value.mergeNumberFormat(l,h)}const qe={get id(){return i.value?i.value.id:-1},locale:$,fallbackLocale:F,messages:V,datetimeFormats:H,numberFormats:j,get inheritLocale(){return i.value?i.value.inheritLocale:o},set inheritLocale(l){i.value&&(i.value.inheritLocale=l)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(f.value)},get modifiers(){return i.value?i.value.modifiers:b},get pluralRules(){return i.value?i.value.pluralRules:T},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:m},set missingWarn(l){i.value&&(i.value.missingWarn=l)},get fallbackWarn(){return i.value?i.value.fallbackWarn:v},set fallbackWarn(l){i.value&&(i.value.missingWarn=l)},get fallbackRoot(){return i.value?i.value.fallbackRoot:I},set fallbackRoot(l){i.value&&(i.value.fallbackRoot=l)},get fallbackFormat(){return i.value?i.value.fallbackFormat:C},set fallbackFormat(l){i.value&&(i.value.fallbackFormat=l)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:N},set warnHtmlMessage(l){i.value&&(i.value.warnHtmlMessage=l)},get escapeParameter(){return i.value?i.value.escapeParameter:O},set escapeParameter(l){i.value&&(i.value.escapeParameter=l)},t:B,getPostTranslationHandler:ne,setPostTranslationHandler:q,getMissingHandler:ge,setMissingHandler:Ae,rt:J,d:fe,n:Fe,tm:Pe,te:ve,getLocaleMessage:Te,setLocaleMessage:we,mergeLocaleMessage:Ie,getDateTimeFormat:je,setDateTimeFormat:_e,mergeDateTimeFormat:pe,getNumberFormat:We,setNumberFormat:Ce,mergeNumberFormat:ke};function c(l){l.locale.value=a.value,l.fallbackLocale.value=u.value,Object.keys(f.value).forEach(h=>{l.mergeLocaleMessage(h,f.value[h])}),Object.keys(d.value).forEach(h=>{l.mergeDateTimeFormat(h,d.value[h])}),Object.keys(g.value).forEach(h=>{l.mergeNumberFormat(h,g.value[h])}),l.escapeParameter=O,l.fallbackFormat=C,l.fallbackRoot=I,l.fallbackWarn=v,l.missingWarn=m,l.warnHtmlMessage=N}return Pl(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw be(me.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const l=i.value=e.proxy.$i18n.__composer;t==="global"?(a.value=l.locale.value,u.value=l.fallbackLocale.value,f.value=l.messages.value,d.value=l.datetimeFormats.value,g.value=l.numberFormats.value):r&&c(l)}),qe}const w_=["locale","fallbackLocale","availableLocales"],I_=["t","rt","d","n","tm"];function S_(e,t){const n=Object.create(null);w_.forEach(s=>{const r=Object.getOwnPropertyDescriptor(t,s);if(!r)throw be(me.UNEXPECTED_ERROR);const i=Le(r.value)?{get(){return r.value.value},set(o){r.value.value=o}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,s,i)}),e.config.globalProperties.$i18n=n,I_.forEach(s=>{const r=Object.getOwnPropertyDescriptor(t,s);if(!r||!r.value)throw be(me.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${s}`,r)})}Qh(r_);Jh(Ph);Zh(Jl);u_();if(__INTLIFY_PROD_DEVTOOLS__){const e=Jn();e.__INTLIFY__=!0,Hh(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const D_={key:1},P_={class:"page-header"},k_={class:"container navbar d-flex pb-4 justify-content-between align-items-start border-bottom"},$_=ee("a",{class:"navbar-brand",href:"#"},[ee("img",{src:ql,alt:"logo",width:"100",height:"90",class:"img-fluid"})],-1),R_={class:"navbar-title h3 pt-4 mr-auto ml-0"},M_={class:"langs mt-4"},x_={class:"container content py-4 text-break"},F_={class:"my-4"},W_={class:"my-2"},V_={class:"my-2"},H_={class:"my-4"},U_=ee("a",{href:"mailto:78@otdel-k.spb.ru"},"78@otdel-k.spb.ru",-1),j_={class:"my-4"},B_=ee("a",{href:"mvd.ru",target:"_blank"},"mvd.ru",-1),K_={__name:"App",setup(e){const{t,locale:n}=fs({useScope:"global"}),s=i=>{event.target.innerText===i&&(n.value=i,localStorage.setItem("lang",n.value))},r=it(!1);return(i,o)=>r.value?(Yr(),jl("div",D_,[ee("header",P_,[ee("nav",k_,[$_,ee("h1",R_,Ve(i.$t("title")),1),ee("div",M_,[ee("button",{type:"button",class:"langs__btn",onClick:o[1]||(o[1]=a=>s("rus"))}," rus "),ee("button",{type:"button",class:"langs__btn",onClick:o[2]||(o[2]=a=>s("eng"))}," eng ")])])]),ee("main",x_,[ee("p",F_,Ve(i.$t("content.p-1")),1),ee("ol",null,[ee("li",null,[ee("span",null,Ve(i.$t("content.li-1")),1),ee("ul",W_,[ee("li",null,Ve(i.$t("content.li-1-1")),1),ee("li",null,Ve(i.$t("content.li-1-2")),1),ee("li",null,Ve(i.$t("content.li-1-3")),1),ee("li",null,Ve(i.$t("content.li-1-4")),1)])]),ee("li",null,[ee("span",null,Ve(i.$t("content.li-2")),1),ee("ul",V_,[ee("li",null,Ve(i.$t("content.li-2-1")),1),ee("li",null,Ve(i.$t("content.li-2-2")),1)])]),ee("li",null,[ee("span",null,Ve(i.$t("content.li-3")),1)]),ee("li",null,[ee("span",null,Ve(i.$t("content.li-4")),1)])]),ee("p",H_,[Xr(Ve(i.$t("content.p-2"))+" ",1),U_]),ee("p",j_,[Xr(Ve(i.$t("content.p-3"))+" ",1),B_])])])):(Yr(),id(zd,{key:0,clicked:r.value,"onUpdate:clicked":o[0]||(o[0]=a=>r.value=a)},null,8,["clicked"]))}};var Me="top",Ge="bottom",Xe="right",xe="left",or="auto",Un=[Me,Ge,Xe,xe],an="start",Pn="end",mc="clippingParents",Bi="viewport",_n="popper",gc="reference",ai=Un.reduce(function(e,t){return e.concat([t+"-"+an,t+"-"+Pn])},[]),Ki=[].concat(Un,[or]).reduce(function(e,t){return e.concat([t,t+"-"+an,t+"-"+Pn])},[]),Ec="beforeRead",bc="read",vc="afterRead",Tc="beforeMain",yc="main",Ac="afterMain",Cc="beforeWrite",Nc="write",Lc="afterWrite",Oc=[Ec,bc,vc,Tc,yc,Ac,Cc,Nc,Lc];function Tt(e){return e?(e.nodeName||"").toLowerCase():null}function et(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ln(e){var t=et(e).Element;return e instanceof t||e instanceof Element}function Je(e){var t=et(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Yi(e){if(typeof ShadowRoot>"u")return!1;var t=et(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Y_(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var s=t.styles[n]||{},r=t.attributes[n]||{},i=t.elements[n];!Je(i)||!Tt(i)||(Object.assign(i.style,s),Object.keys(r).forEach(function(o){var a=r[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function G_(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(s){var r=t.elements[s],i=t.attributes[s]||{},o=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:n[s]),a=o.reduce(function(u,f){return u[f]="",u},{});!Je(r)||!Tt(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(u){r.removeAttribute(u)}))})}}const Gi={name:"applyStyles",enabled:!0,phase:"write",fn:Y_,effect:G_,requires:["computeStyles"]};function bt(e){return e.split("-")[0]}var on=Math.max,Hs=Math.min,kn=Math.round;function li(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function wc(){return!/^((?!chrome|android).)*safari/i.test(li())}function $n(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var s=e.getBoundingClientRect(),r=1,i=1;t&&Je(e)&&(r=e.offsetWidth>0&&kn(s.width)/e.offsetWidth||1,i=e.offsetHeight>0&&kn(s.height)/e.offsetHeight||1);var o=ln(e)?et(e):window,a=o.visualViewport,u=!wc()&&n,f=(s.left+(u&&a?a.offsetLeft:0))/r,d=(s.top+(u&&a?a.offsetTop:0))/i,g=s.width/r,m=s.height/i;return{width:g,height:m,top:d,right:f+g,bottom:d+m,left:f,x:f,y:d}}function Xi(e){var t=$n(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}}function Ic(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Yi(n)){var s=t;do{if(s&&e.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function St(e){return et(e).getComputedStyle(e)}function X_(e){return["table","td","th"].indexOf(Tt(e))>=0}function Xt(e){return((ln(e)?e.ownerDocument:e.document)||window.document).documentElement}function ar(e){return Tt(e)==="html"?e:e.assignedSlot||e.parentNode||(Yi(e)?e.host:null)||Xt(e)}function pa(e){return!Je(e)||St(e).position==="fixed"?null:e.offsetParent}function q_(e){var t=/firefox/i.test(li()),n=/Trident/i.test(li());if(n&&Je(e)){var s=St(e);if(s.position==="fixed")return null}var r=ar(e);for(Yi(r)&&(r=r.host);Je(r)&&["html","body"].indexOf(Tt(r))<0;){var i=St(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function ds(e){for(var t=et(e),n=pa(e);n&&X_(n)&&St(n).position==="static";)n=pa(n);return n&&(Tt(n)==="html"||Tt(n)==="body"&&St(n).position==="static")?t:n||q_(e)||t}function qi(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function es(e,t,n){return on(e,Hs(t,n))}function z_(e,t,n){var s=es(e,t,n);return s>n?n:s}function Sc(){return{top:0,right:0,bottom:0,left:0}}function Dc(e){return Object.assign({},Sc(),e)}function Pc(e,t){return t.reduce(function(n,s){return n[s]=e,n},{})}var Q_=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Dc(typeof t!="number"?t:Pc(t,Un))};function J_(e){var t,n=e.state,s=e.name,r=e.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=bt(n.placement),u=qi(a),f=[xe,Xe].indexOf(a)>=0,d=f?"height":"width";if(!(!i||!o)){var g=Q_(r.padding,n),m=Xi(i),v=u==="y"?Me:xe,I=u==="y"?Ge:Xe,C=n.rects.reference[d]+n.rects.reference[u]-o[u]-n.rects.popper[d],L=o[u]-n.rects.reference[u],p=ds(i),N=p?u==="y"?p.clientHeight||0:p.clientWidth||0:0,O=C/2-L/2,b=g[v],T=N-m[d]-g[I],P=N/2-m[d]/2+O,$=es(b,P,T),F=u;n.modifiersData[s]=(t={},t[F]=$,t.centerOffset=$-P,t)}}function Z_(e){var t=e.state,n=e.options,s=n.element,r=s===void 0?"[data-popper-arrow]":s;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Ic(t.elements.popper,r)||(t.elements.arrow=r))}const kc={name:"arrow",enabled:!0,phase:"main",fn:J_,effect:Z_,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Rn(e){return e.split("-")[1]}var ep={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tp(e){var t=e.x,n=e.y,s=window,r=s.devicePixelRatio||1;return{x:kn(t*r)/r||0,y:kn(n*r)/r||0}}function ma(e){var t,n=e.popper,s=e.popperRect,r=e.placement,i=e.variation,o=e.offsets,a=e.position,u=e.gpuAcceleration,f=e.adaptive,d=e.roundOffsets,g=e.isFixed,m=o.x,v=m===void 0?0:m,I=o.y,C=I===void 0?0:I,L=typeof d=="function"?d({x:v,y:C}):{x:v,y:C};v=L.x,C=L.y;var p=o.hasOwnProperty("x"),N=o.hasOwnProperty("y"),O=xe,b=Me,T=window;if(f){var P=ds(n),$="clientHeight",F="clientWidth";if(P===et(n)&&(P=Xt(n),St(P).position!=="static"&&a==="absolute"&&($="scrollHeight",F="scrollWidth")),P=P,r===Me||(r===xe||r===Xe)&&i===Pn){b=Ge;var V=g&&P===T&&T.visualViewport?T.visualViewport.height:P[$];C-=V-s.height,C*=u?1:-1}if(r===xe||(r===Me||r===Ge)&&i===Pn){O=Xe;var H=g&&P===T&&T.visualViewport?T.visualViewport.width:P[F];v-=H-s.width,v*=u?1:-1}}var j=Object.assign({position:a},f&&ep),ne=d===!0?tp({x:v,y:C}):{x:v,y:C};if(v=ne.x,C=ne.y,u){var q;return Object.assign({},j,(q={},q[b]=N?"0":"",q[O]=p?"0":"",q.transform=(T.devicePixelRatio||1)<=1?"translate("+v+"px, "+C+"px)":"translate3d("+v+"px, "+C+"px, 0)",q))}return Object.assign({},j,(t={},t[b]=N?C+"px":"",t[O]=p?v+"px":"",t.transform="",t))}function np(e){var t=e.state,n=e.options,s=n.gpuAcceleration,r=s===void 0?!0:s,i=n.adaptive,o=i===void 0?!0:i,a=n.roundOffsets,u=a===void 0?!0:a,f={placement:bt(t.placement),variation:Rn(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ma(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ma(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const zi={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:np,data:{}};var As={passive:!0};function sp(e){var t=e.state,n=e.instance,s=e.options,r=s.scroll,i=r===void 0?!0:r,o=s.resize,a=o===void 0?!0:o,u=et(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach(function(d){d.addEventListener("scroll",n.update,As)}),a&&u.addEventListener("resize",n.update,As),function(){i&&f.forEach(function(d){d.removeEventListener("scroll",n.update,As)}),a&&u.removeEventListener("resize",n.update,As)}}const Qi={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:sp,data:{}};var rp={left:"right",right:"left",bottom:"top",top:"bottom"};function $s(e){return e.replace(/left|right|bottom|top/g,function(t){return rp[t]})}var ip={start:"end",end:"start"};function ga(e){return e.replace(/start|end/g,function(t){return ip[t]})}function Ji(e){var t=et(e),n=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Zi(e){return $n(Xt(e)).left+Ji(e).scrollLeft}function op(e,t){var n=et(e),s=Xt(e),r=n.visualViewport,i=s.clientWidth,o=s.clientHeight,a=0,u=0;if(r){i=r.width,o=r.height;var f=wc();(f||!f&&t==="fixed")&&(a=r.offsetLeft,u=r.offsetTop)}return{width:i,height:o,x:a+Zi(e),y:u}}function ap(e){var t,n=Xt(e),s=Ji(e),r=(t=e.ownerDocument)==null?void 0:t.body,i=on(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=on(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-s.scrollLeft+Zi(e),u=-s.scrollTop;return St(r||n).direction==="rtl"&&(a+=on(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:o,x:a,y:u}}function eo(e){var t=St(e),n=t.overflow,s=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+s)}function $c(e){return["html","body","#document"].indexOf(Tt(e))>=0?e.ownerDocument.body:Je(e)&&eo(e)?e:$c(ar(e))}function ts(e,t){var n;t===void 0&&(t=[]);var s=$c(e),r=s===((n=e.ownerDocument)==null?void 0:n.body),i=et(s),o=r?[i].concat(i.visualViewport||[],eo(s)?s:[]):s,a=t.concat(o);return r?a:a.concat(ts(ar(o)))}function ci(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function lp(e,t){var n=$n(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ea(e,t,n){return t===Bi?ci(op(e,n)):ln(t)?lp(t,n):ci(ap(Xt(e)))}function cp(e){var t=ts(ar(e)),n=["absolute","fixed"].indexOf(St(e).position)>=0,s=n&&Je(e)?ds(e):e;return ln(s)?t.filter(function(r){return ln(r)&&Ic(r,s)&&Tt(r)!=="body"}):[]}function up(e,t,n,s){var r=t==="clippingParents"?cp(e):[].concat(t),i=[].concat(r,[n]),o=i[0],a=i.reduce(function(u,f){var d=Ea(e,f,s);return u.top=on(d.top,u.top),u.right=Hs(d.right,u.right),u.bottom=Hs(d.bottom,u.bottom),u.left=on(d.left,u.left),u},Ea(e,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Rc(e){var t=e.reference,n=e.element,s=e.placement,r=s?bt(s):null,i=s?Rn(s):null,o=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,u;switch(r){case Me:u={x:o,y:t.y-n.height};break;case Ge:u={x:o,y:t.y+t.height};break;case Xe:u={x:t.x+t.width,y:a};break;case xe:u={x:t.x-n.width,y:a};break;default:u={x:t.x,y:t.y}}var f=r?qi(r):null;if(f!=null){var d=f==="y"?"height":"width";switch(i){case an:u[f]=u[f]-(t[d]/2-n[d]/2);break;case Pn:u[f]=u[f]+(t[d]/2-n[d]/2);break}}return u}function Mn(e,t){t===void 0&&(t={});var n=t,s=n.placement,r=s===void 0?e.placement:s,i=n.strategy,o=i===void 0?e.strategy:i,a=n.boundary,u=a===void 0?mc:a,f=n.rootBoundary,d=f===void 0?Bi:f,g=n.elementContext,m=g===void 0?_n:g,v=n.altBoundary,I=v===void 0?!1:v,C=n.padding,L=C===void 0?0:C,p=Dc(typeof L!="number"?L:Pc(L,Un)),N=m===_n?gc:_n,O=e.rects.popper,b=e.elements[I?N:m],T=up(ln(b)?b:b.contextElement||Xt(e.elements.popper),u,d,o),P=$n(e.elements.reference),$=Rc({reference:P,element:O,strategy:"absolute",placement:r}),F=ci(Object.assign({},O,$)),V=m===_n?F:P,H={top:T.top-V.top+p.top,bottom:V.bottom-T.bottom+p.bottom,left:T.left-V.left+p.left,right:V.right-T.right+p.right},j=e.modifiersData.offset;if(m===_n&&j){var ne=j[r];Object.keys(H).forEach(function(q){var ge=[Xe,Ge].indexOf(q)>=0?1:-1,Ae=[Me,Ge].indexOf(q)>=0?"y":"x";H[q]+=ne[Ae]*ge})}return H}function fp(e,t){t===void 0&&(t={});var n=t,s=n.placement,r=n.boundary,i=n.rootBoundary,o=n.padding,a=n.flipVariations,u=n.allowedAutoPlacements,f=u===void 0?Ki:u,d=Rn(s),g=d?a?ai:ai.filter(function(I){return Rn(I)===d}):Un,m=g.filter(function(I){return f.indexOf(I)>=0});m.length===0&&(m=g);var v=m.reduce(function(I,C){return I[C]=Mn(e,{placement:C,boundary:r,rootBoundary:i,padding:o})[bt(C)],I},{});return Object.keys(v).sort(function(I,C){return v[I]-v[C]})}function dp(e){if(bt(e)===or)return[];var t=$s(e);return[ga(e),t,ga(t)]}function hp(e){var t=e.state,n=e.options,s=e.name;if(!t.modifiersData[s]._skip){for(var r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!0:o,u=n.fallbackPlacements,f=n.padding,d=n.boundary,g=n.rootBoundary,m=n.altBoundary,v=n.flipVariations,I=v===void 0?!0:v,C=n.allowedAutoPlacements,L=t.options.placement,p=bt(L),N=p===L,O=u||(N||!I?[$s(L)]:dp(L)),b=[L].concat(O).reduce(function(we,Ie){return we.concat(bt(Ie)===or?fp(t,{placement:Ie,boundary:d,rootBoundary:g,padding:f,flipVariations:I,allowedAutoPlacements:C}):Ie)},[]),T=t.rects.reference,P=t.rects.popper,$=new Map,F=!0,V=b[0],H=0;H<b.length;H++){var j=b[H],ne=bt(j),q=Rn(j)===an,ge=[Me,Ge].indexOf(ne)>=0,Ae=ge?"width":"height",X=Mn(t,{placement:j,boundary:d,rootBoundary:g,altBoundary:m,padding:f}),B=ge?q?Xe:xe:q?Ge:Me;T[Ae]>P[Ae]&&(B=$s(B));var J=$s(B),fe=[];if(i&&fe.push(X[ne]<=0),a&&fe.push(X[B]<=0,X[J]<=0),fe.every(function(we){return we})){V=j,F=!1;break}$.set(j,fe)}if(F)for(var Fe=I?3:1,Pe=function(Ie){var je=b.find(function(_e){var pe=$.get(_e);if(pe)return pe.slice(0,Ie).every(function(We){return We})});if(je)return V=je,"break"},ve=Fe;ve>0;ve--){var Te=Pe(ve);if(Te==="break")break}t.placement!==V&&(t.modifiersData[s]._skip=!0,t.placement=V,t.reset=!0)}}const Mc={name:"flip",enabled:!0,phase:"main",fn:hp,requiresIfExists:["offset"],data:{_skip:!1}};function ba(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function va(e){return[Me,Xe,Ge,xe].some(function(t){return e[t]>=0})}function _p(e){var t=e.state,n=e.name,s=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,o=Mn(t,{elementContext:"reference"}),a=Mn(t,{altBoundary:!0}),u=ba(o,s),f=ba(a,r,i),d=va(u),g=va(f);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:f,isReferenceHidden:d,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":g})}const xc={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:_p};function pp(e,t,n){var s=bt(e),r=[xe,Me].indexOf(s)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=i[0],a=i[1];return o=o||0,a=(a||0)*r,[xe,Xe].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function mp(e){var t=e.state,n=e.options,s=e.name,r=n.offset,i=r===void 0?[0,0]:r,o=Ki.reduce(function(d,g){return d[g]=pp(g,t.rects,i),d},{}),a=o[t.placement],u=a.x,f=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=f),t.modifiersData[s]=o}const Fc={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:mp};function gp(e){var t=e.state,n=e.name;t.modifiersData[n]=Rc({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const to={name:"popperOffsets",enabled:!0,phase:"read",fn:gp,data:{}};function Ep(e){return e==="x"?"y":"x"}function bp(e){var t=e.state,n=e.options,s=e.name,r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!1:o,u=n.boundary,f=n.rootBoundary,d=n.altBoundary,g=n.padding,m=n.tether,v=m===void 0?!0:m,I=n.tetherOffset,C=I===void 0?0:I,L=Mn(t,{boundary:u,rootBoundary:f,padding:g,altBoundary:d}),p=bt(t.placement),N=Rn(t.placement),O=!N,b=qi(p),T=Ep(b),P=t.modifiersData.popperOffsets,$=t.rects.reference,F=t.rects.popper,V=typeof C=="function"?C(Object.assign({},t.rects,{placement:t.placement})):C,H=typeof V=="number"?{mainAxis:V,altAxis:V}:Object.assign({mainAxis:0,altAxis:0},V),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,ne={x:0,y:0};if(!!P){if(i){var q,ge=b==="y"?Me:xe,Ae=b==="y"?Ge:Xe,X=b==="y"?"height":"width",B=P[b],J=B+L[ge],fe=B-L[Ae],Fe=v?-F[X]/2:0,Pe=N===an?$[X]:F[X],ve=N===an?-F[X]:-$[X],Te=t.elements.arrow,we=v&&Te?Xi(Te):{width:0,height:0},Ie=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Sc(),je=Ie[ge],_e=Ie[Ae],pe=es(0,$[X],we[X]),We=O?$[X]/2-Fe-pe-je-H.mainAxis:Pe-pe-je-H.mainAxis,Ce=O?-$[X]/2+Fe+pe+_e+H.mainAxis:ve+pe+_e+H.mainAxis,ke=t.elements.arrow&&ds(t.elements.arrow),qe=ke?b==="y"?ke.clientTop||0:ke.clientLeft||0:0,c=(q=j==null?void 0:j[b])!=null?q:0,l=B+We-c-qe,h=B+Ce-c,E=es(v?Hs(J,l):J,B,v?on(fe,h):fe);P[b]=E,ne[b]=E-B}if(a){var y,w=b==="x"?Me:xe,R=b==="x"?Ge:Xe,S=P[T],D=T==="y"?"height":"width",_=S+L[w],A=S-L[R],M=[Me,xe].indexOf(p)!==-1,W=(y=j==null?void 0:j[T])!=null?y:0,U=M?_:S-$[D]-F[D]-W+H.altAxis,G=M?S+$[D]+F[D]-W-H.altAxis:A,Z=v&&M?z_(U,S,G):es(v?U:_,S,v?G:A);P[T]=Z,ne[T]=Z-S}t.modifiersData[s]=ne}}const Wc={name:"preventOverflow",enabled:!0,phase:"main",fn:bp,requiresIfExists:["offset"]};function vp(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Tp(e){return e===et(e)||!Je(e)?Ji(e):vp(e)}function yp(e){var t=e.getBoundingClientRect(),n=kn(t.width)/e.offsetWidth||1,s=kn(t.height)/e.offsetHeight||1;return n!==1||s!==1}function Ap(e,t,n){n===void 0&&(n=!1);var s=Je(t),r=Je(t)&&yp(t),i=Xt(t),o=$n(e,r,n),a={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(s||!s&&!n)&&((Tt(t)!=="body"||eo(i))&&(a=Tp(t)),Je(t)?(u=$n(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=Zi(i))),{x:o.left+a.scrollLeft-u.x,y:o.top+a.scrollTop-u.y,width:o.width,height:o.height}}function Cp(e){var t=new Map,n=new Set,s=[];e.forEach(function(i){t.set(i.name,i)});function r(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var u=t.get(a);u&&r(u)}}),s.push(i)}return e.forEach(function(i){n.has(i.name)||r(i)}),s}function Np(e){var t=Cp(e);return Oc.reduce(function(n,s){return n.concat(t.filter(function(r){return r.phase===s}))},[])}function Lp(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Op(e){var t=e.reduce(function(n,s){var r=n[s.name];return n[s.name]=r?Object.assign({},r,s,{options:Object.assign({},r.options,s.options),data:Object.assign({},r.data,s.data)}):s,n},{});return Object.keys(t).map(function(n){return t[n]})}var Ta={placement:"bottom",modifiers:[],strategy:"absolute"};function ya(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function lr(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,s=n===void 0?[]:n,r=t.defaultOptions,i=r===void 0?Ta:r;return function(a,u,f){f===void 0&&(f=i);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ta,i),modifiersData:{},elements:{reference:a,popper:u},attributes:{},styles:{}},g=[],m=!1,v={state:d,setOptions:function(p){var N=typeof p=="function"?p(d.options):p;C(),d.options=Object.assign({},i,d.options,N),d.scrollParents={reference:ln(a)?ts(a):a.contextElement?ts(a.contextElement):[],popper:ts(u)};var O=Np(Op([].concat(s,d.options.modifiers)));return d.orderedModifiers=O.filter(function(b){return b.enabled}),I(),v.update()},forceUpdate:function(){if(!m){var p=d.elements,N=p.reference,O=p.popper;if(!!ya(N,O)){d.rects={reference:Ap(N,ds(O),d.options.strategy==="fixed"),popper:Xi(O)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(H){return d.modifiersData[H.name]=Object.assign({},H.data)});for(var b=0;b<d.orderedModifiers.length;b++){if(d.reset===!0){d.reset=!1,b=-1;continue}var T=d.orderedModifiers[b],P=T.fn,$=T.options,F=$===void 0?{}:$,V=T.name;typeof P=="function"&&(d=P({state:d,options:F,name:V,instance:v})||d)}}}},update:Lp(function(){return new Promise(function(L){v.forceUpdate(),L(d)})}),destroy:function(){C(),m=!0}};if(!ya(a,u))return v;v.setOptions(f).then(function(L){!m&&f.onFirstUpdate&&f.onFirstUpdate(L)});function I(){d.orderedModifiers.forEach(function(L){var p=L.name,N=L.options,O=N===void 0?{}:N,b=L.effect;if(typeof b=="function"){var T=b({state:d,name:p,instance:v,options:O}),P=function(){};g.push(T||P)}})}function C(){g.forEach(function(L){return L()}),g=[]}return v}}var wp=lr(),Ip=[Qi,to,zi,Gi],Sp=lr({defaultModifiers:Ip}),Dp=[Qi,to,zi,Gi,Fc,Mc,Wc,kc,xc],no=lr({defaultModifiers:Dp});const Vc=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:lr,detectOverflow:Mn,createPopperBase:wp,createPopper:no,createPopperLite:Sp,top:Me,bottom:Ge,right:Xe,left:xe,auto:or,basePlacements:Un,start:an,end:Pn,clippingParents:mc,viewport:Bi,popper:_n,reference:gc,variationPlacements:ai,placements:Ki,beforeRead:Ec,read:bc,afterRead:vc,beforeMain:Tc,main:yc,afterMain:Ac,beforeWrite:Cc,write:Nc,afterWrite:Lc,modifierPhases:Oc,applyStyles:Gi,arrow:kc,computeStyles:zi,eventListeners:Qi,flip:Mc,hide:xc,offset:Fc,popperOffsets:to,preventOverflow:Wc},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Pp=1e6,kp=1e3,ui="transitionend",$p=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),Rp=e=>{do e+=Math.floor(Math.random()*Pp);while(document.getElementById(e));return e},Hc=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t},Uc=e=>{const t=Hc(e);return t&&document.querySelector(t)?t:null},Lt=e=>{const t=Hc(e);return t?document.querySelector(t):null},Mp=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),r=Number.parseFloat(n);return!s&&!r?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*kp)},jc=e=>{e.dispatchEvent(new Event(ui))},Ot=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),jt=e=>Ot(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(e):null,jn=e=>{if(!Ot(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const s=e.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return t},Bt=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",Bc=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Bc(e.parentNode):null},Us=()=>{},hs=e=>{e.offsetHeight},Kc=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Tr=[],xp=e=>{document.readyState==="loading"?(Tr.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Tr)t()}),Tr.push(e)):e()},Ze=()=>document.documentElement.dir==="rtl",tt=e=>{xp(()=>{const t=Kc();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},Ct=e=>{typeof e=="function"&&e()},Yc=(e,t,n=!0)=>{if(!n){Ct(e);return}const s=5,r=Mp(t)+s;let i=!1;const o=({target:a})=>{a===t&&(i=!0,t.removeEventListener(ui,o),Ct(e))};t.addEventListener(ui,o),setTimeout(()=>{i||jc(t)},r)},so=(e,t,n,s)=>{const r=e.length;let i=e.indexOf(t);return i===-1?!n&&s?e[r-1]:e[0]:(i+=n?1:-1,s&&(i=(i+r)%r),e[Math.max(0,Math.min(i,r-1))])},Fp=/[^.]*(?=\..*)\.|.*/,Wp=/\..*/,Vp=/::\d+$/,yr={};let Aa=1;const Gc={mouseenter:"mouseover",mouseleave:"mouseout"},Hp=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Xc(e,t){return t&&`${t}::${Aa++}`||e.uidEvent||Aa++}function qc(e){const t=Xc(e);return e.uidEvent=t,yr[t]=yr[t]||{},yr[t]}function Up(e,t){return function n(s){return ro(s,{delegateTarget:e}),n.oneOff&&k.off(e,s.type,t),t.apply(e,[s])}}function jp(e,t,n){return function s(r){const i=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of i)if(a===o)return ro(r,{delegateTarget:o}),s.oneOff&&k.off(e,r.type,t,n),n.apply(o,[r])}}function zc(e,t,n=null){return Object.values(e).find(s=>s.callable===t&&s.delegationSelector===n)}function Qc(e,t,n){const s=typeof t=="string",r=s?n:t||n;let i=Jc(e);return Hp.has(i)||(i=e),[s,r,i]}function Ca(e,t,n,s,r){if(typeof t!="string"||!e)return;let[i,o,a]=Qc(t,n,s);t in Gc&&(o=(I=>function(C){if(!C.relatedTarget||C.relatedTarget!==C.delegateTarget&&!C.delegateTarget.contains(C.relatedTarget))return I.call(this,C)})(o));const u=qc(e),f=u[a]||(u[a]={}),d=zc(f,o,i?n:null);if(d){d.oneOff=d.oneOff&&r;return}const g=Xc(o,t.replace(Fp,"")),m=i?jp(e,n,o):Up(e,o);m.delegationSelector=i?n:null,m.callable=o,m.oneOff=r,m.uidEvent=g,f[g]=m,e.addEventListener(a,m,i)}function fi(e,t,n,s,r){const i=zc(t[n],s,r);!i||(e.removeEventListener(n,i,Boolean(r)),delete t[n][i.uidEvent])}function Bp(e,t,n,s){const r=t[n]||{};for(const i of Object.keys(r))if(i.includes(s)){const o=r[i];fi(e,t,n,o.callable,o.delegationSelector)}}function Jc(e){return e=e.replace(Wp,""),Gc[e]||e}const k={on(e,t,n,s){Ca(e,t,n,s,!1)},one(e,t,n,s){Ca(e,t,n,s,!0)},off(e,t,n,s){if(typeof t!="string"||!e)return;const[r,i,o]=Qc(t,n,s),a=o!==t,u=qc(e),f=u[o]||{},d=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(f).length)return;fi(e,u,o,i,r?n:null);return}if(d)for(const g of Object.keys(u))Bp(e,u,g,t.slice(1));for(const g of Object.keys(f)){const m=g.replace(Vp,"");if(!a||t.includes(m)){const v=f[g];fi(e,u,o,v.callable,v.delegationSelector)}}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const s=Kc(),r=Jc(t),i=t!==r;let o=null,a=!0,u=!0,f=!1;i&&s&&(o=s.Event(t,n),s(e).trigger(o),a=!o.isPropagationStopped(),u=!o.isImmediatePropagationStopped(),f=o.isDefaultPrevented());let d=new Event(t,{bubbles:a,cancelable:!0});return d=ro(d,n),f&&d.preventDefault(),u&&e.dispatchEvent(d),d.defaultPrevented&&o&&o.preventDefault(),d}};function ro(e,t){for(const[n,s]of Object.entries(t||{}))try{e[n]=s}catch{Object.defineProperty(e,n,{configurable:!0,get(){return s}})}return e}const Rt=new Map,Ar={set(e,t,n){Rt.has(e)||Rt.set(e,new Map);const s=Rt.get(e);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,n)},get(e,t){return Rt.has(e)&&Rt.get(e).get(t)||null},remove(e,t){if(!Rt.has(e))return;const n=Rt.get(e);n.delete(t),n.size===0&&Rt.delete(e)}};function Na(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Cr(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const wt={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Cr(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Cr(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let r=s.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=Na(e.dataset[s])}return t},getDataAttribute(e,t){return Na(e.getAttribute(`data-bs-${Cr(t)}`))}};class _s{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const s=Ot(n)?wt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...Ot(n)?wt.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const r=n[s],i=t[s],o=Ot(i)?"element":$p(i);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${r}".`)}}}const Kp="5.2.1";class ct extends _s{constructor(t,n){super(),t=jt(t),t&&(this._element=t,this._config=this._getConfig(n),Ar.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Ar.remove(this._element,this.constructor.DATA_KEY),k.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,s=!0){Yc(t,n,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Ar.get(jt(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return Kp}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const cr=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,s=e.NAME;k.on(document,n,`[data-bs-dismiss="${s}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),Bt(this))return;const i=Lt(this)||this.closest(`.${s}`);e.getOrCreateInstance(i)[t]()})},Yp="alert",Gp="bs.alert",Zc=`.${Gp}`,Xp=`close${Zc}`,qp=`closed${Zc}`,zp="fade",Qp="show";class ur extends ct{static get NAME(){return Yp}close(){if(k.trigger(this._element,Xp).defaultPrevented)return;this._element.classList.remove(Qp);const n=this._element.classList.contains(zp);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),k.trigger(this._element,qp),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=ur.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}cr(ur,"close");tt(ur);const Jp="button",Zp="bs.button",em=`.${Zp}`,tm=".data-api",nm="active",La='[data-bs-toggle="button"]',sm=`click${em}${tm}`;class fr extends ct{static get NAME(){return Jp}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(nm))}static jQueryInterface(t){return this.each(function(){const n=fr.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}k.on(document,sm,La,e=>{e.preventDefault();const t=e.target.closest(La);fr.getOrCreateInstance(t).toggle()});tt(fr);const Q={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let s=e.parentNode.closest(t);for(;s;)n.push(s),s=s.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!Bt(n)&&jn(n))}},rm="swipe",Bn=".bs.swipe",im=`touchstart${Bn}`,om=`touchmove${Bn}`,am=`touchend${Bn}`,lm=`pointerdown${Bn}`,cm=`pointerup${Bn}`,um="touch",fm="pen",dm="pointer-event",hm=40,_m={endCallback:null,leftCallback:null,rightCallback:null},pm={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class js extends _s{constructor(t,n){super(),this._element=t,!(!t||!js.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return _m}static get DefaultType(){return pm}static get NAME(){return rm}dispose(){k.off(this._element,Bn)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Ct(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=hm)return;const n=t/this._deltaX;this._deltaX=0,n&&Ct(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(k.on(this._element,lm,t=>this._start(t)),k.on(this._element,cm,t=>this._end(t)),this._element.classList.add(dm)):(k.on(this._element,im,t=>this._start(t)),k.on(this._element,om,t=>this._move(t)),k.on(this._element,am,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===fm||t.pointerType===um)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const mm="carousel",gm="bs.carousel",qt=`.${gm}`,eu=".data-api",Em="ArrowLeft",bm="ArrowRight",vm=500,Xn="next",dn="prev",pn="left",Rs="right",Tm=`slide${qt}`,Nr=`slid${qt}`,ym=`keydown${qt}`,Am=`mouseenter${qt}`,Cm=`mouseleave${qt}`,Nm=`dragstart${qt}`,Lm=`load${qt}${eu}`,Om=`click${qt}${eu}`,tu="carousel",Cs="active",wm="slide",Im="carousel-item-end",Sm="carousel-item-start",Dm="carousel-item-next",Pm="carousel-item-prev",nu=".active",su=".carousel-item",km=nu+su,$m=".carousel-item img",Rm=".carousel-indicators",Mm="[data-bs-slide], [data-bs-slide-to]",xm='[data-bs-ride="carousel"]',Fm={[Em]:Rs,[bm]:pn},Wm={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Vm={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ps extends ct{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(Rm,this._element),this._addEventListeners(),this._config.ride===tu&&this.cycle()}static get Default(){return Wm}static get DefaultType(){return Vm}static get NAME(){return mm}next(){this._slide(Xn)}nextWhenVisible(){!document.hidden&&jn(this._element)&&this.next()}prev(){this._slide(dn)}pause(){this._isSliding&&jc(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(!!this._config.ride){if(this._isSliding){k.one(this._element,Nr,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){k.one(this._element,Nr,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const r=t>s?Xn:dn;this._slide(r,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&k.on(this._element,ym,t=>this._keydown(t)),this._config.pause==="hover"&&(k.on(this._element,Am,()=>this.pause()),k.on(this._element,Cm,()=>this._maybeEnableCycle())),this._config.touch&&js.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of Q.find($m,this._element))k.on(s,Nm,r=>r.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(pn)),rightCallback:()=>this._slide(this._directionToOrder(Rs)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),vm+this._config.interval))}};this._swipeHelper=new js(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=Fm[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=Q.findOne(nu,this._indicatorsElement);n.classList.remove(Cs),n.removeAttribute("aria-current");const s=Q.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(Cs),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const s=this._getActive(),r=t===Xn,i=n||so(this._getItems(),s,r,this._config.wrap);if(i===s)return;const o=this._getItemIndex(i),a=v=>k.trigger(this._element,v,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:o});if(a(Tm).defaultPrevented||!s||!i)return;const f=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=i;const d=r?Sm:Im,g=r?Dm:Pm;i.classList.add(g),hs(i),s.classList.add(d),i.classList.add(d);const m=()=>{i.classList.remove(d,g),i.classList.add(Cs),s.classList.remove(Cs,g,d),this._isSliding=!1,a(Nr)};this._queueCallback(m,s,this._isAnimated()),f&&this.cycle()}_isAnimated(){return this._element.classList.contains(wm)}_getActive(){return Q.findOne(km,this._element)}_getItems(){return Q.find(su,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Ze()?t===pn?dn:Xn:t===pn?Xn:dn}_orderToDirection(t){return Ze()?t===dn?pn:Rs:t===dn?Rs:pn}static jQueryInterface(t){return this.each(function(){const n=ps.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}k.on(document,Om,Mm,function(e){const t=Lt(this);if(!t||!t.classList.contains(tu))return;e.preventDefault();const n=ps.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(wt.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});k.on(window,Lm,()=>{const e=Q.find(xm);for(const t of e)ps.getOrCreateInstance(t)});tt(ps);const Hm="collapse",Um="bs.collapse",ms=`.${Um}`,jm=".data-api",Bm=`show${ms}`,Km=`shown${ms}`,Ym=`hide${ms}`,Gm=`hidden${ms}`,Xm=`click${ms}${jm}`,Lr="show",vn="collapse",Ns="collapsing",qm="collapsed",zm=`:scope .${vn} .${vn}`,Qm="collapse-horizontal",Jm="width",Zm="height",eg=".collapse.show, .collapse.collapsing",di='[data-bs-toggle="collapse"]',tg={parent:null,toggle:!0},ng={parent:"(null|element)",toggle:"boolean"};class cs extends ct{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const s=Q.find(di);for(const r of s){const i=Uc(r),o=Q.find(i).filter(a=>a===this._element);i!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return tg}static get DefaultType(){return ng}static get NAME(){return Hm}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(eg).filter(a=>a!==this._element).map(a=>cs.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||k.trigger(this._element,Bm).defaultPrevented)return;for(const a of t)a.hide();const s=this._getDimension();this._element.classList.remove(vn),this._element.classList.add(Ns),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Ns),this._element.classList.add(vn,Lr),this._element.style[s]="",k.trigger(this._element,Km)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||k.trigger(this._element,Ym).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,hs(this._element),this._element.classList.add(Ns),this._element.classList.remove(vn,Lr);for(const r of this._triggerArray){const i=Lt(r);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Ns),this._element.classList.add(vn),k.trigger(this._element,Gm)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Lr)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=jt(t.parent),t}_getDimension(){return this._element.classList.contains(Qm)?Jm:Zm}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(di);for(const n of t){const s=Lt(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(t){const n=Q.find(zm,this._config.parent);return Q.find(t,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(t,n){if(!!t.length)for(const s of t)s.classList.toggle(qm,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const s=cs.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}k.on(document,Xm,di,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();const t=Uc(this),n=Q.find(t);for(const s of n)cs.getOrCreateInstance(s,{toggle:!1}).toggle()});tt(cs);const Oa="dropdown",sg="bs.dropdown",cn=`.${sg}`,io=".data-api",rg="Escape",wa="Tab",ig="ArrowUp",Ia="ArrowDown",og=2,ag=`hide${cn}`,lg=`hidden${cn}`,cg=`show${cn}`,ug=`shown${cn}`,ru=`click${cn}${io}`,iu=`keydown${cn}${io}`,fg=`keyup${cn}${io}`,mn="show",dg="dropup",hg="dropend",_g="dropstart",pg="dropup-center",mg="dropdown-center",Ln='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',gg=`${Ln}.${mn}`,hi=".dropdown-menu",Eg=".navbar",bg=".navbar-nav",vg=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Tg=Ze()?"top-end":"top-start",yg=Ze()?"top-start":"top-end",Ag=Ze()?"bottom-end":"bottom-start",Cg=Ze()?"bottom-start":"bottom-end",Ng=Ze()?"left-start":"right-start",Lg=Ze()?"right-start":"left-start",Og="top",wg="bottom",Ig={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Sg={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class vt extends ct{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.next(this._element,hi)[0]||Q.prev(this._element,hi)[0],this._inNavbar=this._detectNavbar()}static get Default(){return Ig}static get DefaultType(){return Sg}static get NAME(){return Oa}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Bt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!k.trigger(this._element,cg,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(bg))for(const s of[].concat(...document.body.children))k.on(s,"mouseover",Us);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(mn),this._element.classList.add(mn),k.trigger(this._element,ug,t)}}hide(){if(Bt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!k.trigger(this._element,ag,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))k.off(s,"mouseover",Us);this._popper&&this._popper.destroy(),this._menu.classList.remove(mn),this._element.classList.remove(mn),this._element.setAttribute("aria-expanded","false"),wt.removeDataAttribute(this._menu,"popper"),k.trigger(this._element,lg,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Ot(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Oa.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Vc>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:Ot(this._config.reference)?t=jt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=no(t,this._menu,n)}_isShown(){return this._menu.classList.contains(mn)}_getPlacement(){const t=this._parent;if(t.classList.contains(hg))return Ng;if(t.classList.contains(_g))return Lg;if(t.classList.contains(pg))return Og;if(t.classList.contains(mg))return wg;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(dg)?n?yg:Tg:n?Cg:Ag}_detectNavbar(){return this._element.closest(Eg)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(wt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:n}){const s=Q.find(vg,this._menu).filter(r=>jn(r));!s.length||so(s,n,t===Ia,!s.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=vt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===og||t.type==="keyup"&&t.key!==wa)return;const n=Q.find(gg);for(const s of n){const r=vt.getInstance(s);if(!r||r._config.autoClose===!1)continue;const i=t.composedPath(),o=i.includes(r._menu);if(i.includes(r._element)||r._config.autoClose==="inside"&&!o||r._config.autoClose==="outside"&&o||r._menu.contains(t.target)&&(t.type==="keyup"&&t.key===wa||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:r._element};t.type==="click"&&(a.clickEvent=t),r._completeHide(a)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),s=t.key===rg,r=[ig,Ia].includes(t.key);if(!r&&!s||n&&!s)return;t.preventDefault();const i=this.matches(Ln)?this:Q.prev(this,Ln)[0]||Q.next(this,Ln)[0],o=vt.getOrCreateInstance(i);if(r){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),i.focus())}}k.on(document,iu,Ln,vt.dataApiKeydownHandler);k.on(document,iu,hi,vt.dataApiKeydownHandler);k.on(document,ru,vt.clearMenus);k.on(document,fg,vt.clearMenus);k.on(document,ru,Ln,function(e){e.preventDefault(),vt.getOrCreateInstance(this).toggle()});tt(vt);const Sa=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Da=".sticky-top",Ls="padding-right",Pa="margin-right";class _i{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ls,n=>n+t),this._setElementAttributes(Sa,Ls,n=>n+t),this._setElementAttributes(Da,Pa,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ls),this._resetElementAttributes(Sa,Ls),this._resetElementAttributes(Da,Pa)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,s){const r=this.getWidth(),i=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+r)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,n){const s=t.style.getPropertyValue(n);s&&wt.setDataAttribute(t,n,s)}_resetElementAttributes(t,n){const s=r=>{const i=wt.getDataAttribute(r,n);if(i===null){r.style.removeProperty(n);return}wt.removeDataAttribute(r,n),r.style.setProperty(n,i)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,n){if(Ot(t)){n(t);return}for(const s of Q.find(t,this._element))n(s)}}const ou="backdrop",Dg="fade",ka="show",$a=`mousedown.bs.${ou}`,Pg={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},kg={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class au extends _s{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Pg}static get DefaultType(){return kg}static get NAME(){return ou}show(t){if(!this._config.isVisible){Ct(t);return}this._append();const n=this._getElement();this._config.isAnimated&&hs(n),n.classList.add(ka),this._emulateAnimation(()=>{Ct(t)})}hide(t){if(!this._config.isVisible){Ct(t);return}this._getElement().classList.remove(ka),this._emulateAnimation(()=>{this.dispose(),Ct(t)})}dispose(){!this._isAppended||(k.off(this._element,$a),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Dg),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=jt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),k.on(t,$a,()=>{Ct(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Yc(t,this._getElement(),this._config.isAnimated)}}const $g="focustrap",Rg="bs.focustrap",Bs=`.${Rg}`,Mg=`focusin${Bs}`,xg=`keydown.tab${Bs}`,Fg="Tab",Wg="forward",Ra="backward",Vg={autofocus:!0,trapElement:null},Hg={autofocus:"boolean",trapElement:"element"};class lu extends _s{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Vg}static get DefaultType(){return Hg}static get NAME(){return $g}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),k.off(document,Bs),k.on(document,Mg,t=>this._handleFocusin(t)),k.on(document,xg,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,k.off(document,Bs))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const s=Q.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===Ra?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===Fg&&(this._lastTabNavDirection=t.shiftKey?Ra:Wg)}}const Ug="modal",jg="bs.modal",ut=`.${jg}`,Bg=".data-api",Kg="Escape",Yg=`hide${ut}`,Gg=`hidePrevented${ut}`,cu=`hidden${ut}`,uu=`show${ut}`,Xg=`shown${ut}`,qg=`resize${ut}`,zg=`click.dismiss${ut}`,Qg=`mousedown.dismiss${ut}`,Jg=`keydown.dismiss${ut}`,Zg=`click${ut}${Bg}`,Ma="modal-open",eE="fade",xa="show",Or="modal-static",tE=".modal.show",nE=".modal-dialog",sE=".modal-body",rE='[data-bs-toggle="modal"]',iE={backdrop:!0,focus:!0,keyboard:!0},oE={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class xn extends ct{constructor(t,n){super(t,n),this._dialog=Q.findOne(nE,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new _i,this._addEventListeners()}static get Default(){return iE}static get DefaultType(){return oE}static get NAME(){return Ug}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||k.trigger(this._element,uu,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ma),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||k.trigger(this._element,Yg).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(xa),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])k.off(t,ut);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new au({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new lu({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=Q.findOne(sE,this._dialog);n&&(n.scrollTop=0),hs(this._element),this._element.classList.add(xa);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,k.trigger(this._element,Xg,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){k.on(this._element,Jg,t=>{if(t.key===Kg){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),k.on(window,qg,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),k.on(this._element,Qg,t=>{k.one(this._element,zg,n=>{if(!(this._dialog.contains(t.target)||this._dialog.contains(n.target))){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ma),this._resetAdjustments(),this._scrollBar.reset(),k.trigger(this._element,cu)})}_isAnimated(){return this._element.classList.contains(eE)}_triggerBackdropTransition(){if(k.trigger(this._element,Gg).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Or)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Or),this._queueCallback(()=>{this._element.classList.remove(Or),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!t){const r=Ze()?"paddingLeft":"paddingRight";this._element.style[r]=`${n}px`}if(!s&&t){const r=Ze()?"paddingRight":"paddingLeft";this._element.style[r]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const s=xn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](n)}})}}k.on(document,Zg,rE,function(e){const t=Lt(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),k.one(t,uu,r=>{r.defaultPrevented||k.one(t,cu,()=>{jn(this)&&this.focus()})});const n=Q.findOne(tE);n&&xn.getInstance(n).hide(),xn.getOrCreateInstance(t).toggle(this)});cr(xn);tt(xn);const aE="offcanvas",lE="bs.offcanvas",Pt=`.${lE}`,fu=".data-api",cE=`load${Pt}${fu}`,uE="Escape",Fa="show",Wa="showing",Va="hiding",fE="offcanvas-backdrop",du=".offcanvas.show",dE=`show${Pt}`,hE=`shown${Pt}`,_E=`hide${Pt}`,Ha=`hidePrevented${Pt}`,hu=`hidden${Pt}`,pE=`resize${Pt}`,mE=`click${Pt}${fu}`,gE=`keydown.dismiss${Pt}`,EE='[data-bs-toggle="offcanvas"]',bE={backdrop:!0,keyboard:!0,scroll:!1},vE={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Kt extends ct{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return bE}static get DefaultType(){return vE}static get NAME(){return aE}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||k.trigger(this._element,dE,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new _i().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Wa);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Fa),this._element.classList.remove(Wa),k.trigger(this._element,hE,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||k.trigger(this._element,_E).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Va),this._backdrop.hide();const n=()=>{this._element.classList.remove(Fa,Va),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new _i().reset(),k.trigger(this._element,hu)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){k.trigger(this._element,Ha);return}this.hide()},n=Boolean(this._config.backdrop);return new au({className:fE,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new lu({trapElement:this._element})}_addEventListeners(){k.on(this._element,gE,t=>{if(t.key===uE){if(!this._config.keyboard){k.trigger(this._element,Ha);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const n=Kt.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}k.on(document,mE,EE,function(e){const t=Lt(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Bt(this))return;k.one(t,hu,()=>{jn(this)&&this.focus()});const n=Q.findOne(du);n&&n!==t&&Kt.getInstance(n).hide(),Kt.getOrCreateInstance(t).toggle(this)});k.on(window,cE,()=>{for(const e of Q.find(du))Kt.getOrCreateInstance(e).show()});k.on(window,pE,()=>{for(const e of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&Kt.getOrCreateInstance(e).hide()});cr(Kt);tt(Kt);const TE=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),yE=/^aria-[\w-]*$/i,AE=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,CE=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,NE=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?TE.has(n)?Boolean(AE.test(e.nodeValue)||CE.test(e.nodeValue)):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(n))},_u={"*":["class","dir","id","lang","role",yE],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function LE(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const r=new window.DOMParser().parseFromString(e,"text/html"),i=[].concat(...r.body.querySelectorAll("*"));for(const o of i){const a=o.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){o.remove();continue}const u=[].concat(...o.attributes),f=[].concat(t["*"]||[],t[a]||[]);for(const d of u)NE(d,f)||o.removeAttribute(d.nodeName)}return r.body.innerHTML}const OE="TemplateFactory",wE={allowList:_u,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},IE={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},SE={entry:"(string|element|function|null)",selector:"(string|element)"};class DE extends _s{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return wE}static get DefaultType(){return IE}static get NAME(){return OE}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(t,i,r);const n=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,s]of Object.entries(t))super._typeCheckConfig({selector:n,entry:s},SE)}_setContent(t,n,s){const r=Q.findOne(s,t);if(!!r){if(n=this._resolvePossibleFunction(n),!n){r.remove();return}if(Ot(n)){this._putElementInTemplate(jt(n),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(n);return}r.textContent=n}}_maybeSanitize(t){return this._config.sanitize?LE(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return typeof t=="function"?t(this):t}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const PE="tooltip",kE=new Set(["sanitize","allowList","sanitizeFn"]),wr="fade",$E="modal",Os="show",RE=".tooltip-inner",Ua=`.${$E}`,ja="hide.bs.modal",qn="hover",Ir="focus",ME="click",xE="manual",FE="hide",WE="hidden",VE="show",HE="shown",UE="inserted",jE="click",BE="focusin",KE="focusout",YE="mouseenter",GE="mouseleave",XE={AUTO:"auto",TOP:"top",RIGHT:Ze()?"left":"right",BOTTOM:"bottom",LEFT:Ze()?"right":"left"},qE={allowList:_u,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},zE={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Kn extends ct{constructor(t,n){if(typeof Vc>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return qE}static get DefaultType(){return zE}static get NAME(){return PE}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(!!this._isEnabled){if(t){const n=this._initializeOnDelegatedTarget(t);n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter():n._leave();return}if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),k.off(this._element.closest(Ua),ja,this._hideModalHandler),this.tip&&this.tip.remove(),this._config.originalTitle&&this._element.setAttribute("title",this._config.originalTitle),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=k.trigger(this._element,this.constructor.eventName(VE)),s=(Bc(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s)return;this.tip&&(this.tip.remove(),this.tip=null);const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),k.trigger(this._element,this.constructor.eventName(UE))),this._popper?this._popper.update():this._popper=this._createPopper(r),r.classList.add(Os),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))k.on(a,"mouseover",Us);const o=()=>{k.trigger(this._element,this.constructor.eventName(HE)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||k.trigger(this._element,this.constructor.eventName(FE)).defaultPrevented)return;const n=this._getTipElement();if(n.classList.remove(Os),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))k.off(r,"mouseover",Us);this._activeTrigger[ME]=!1,this._activeTrigger[Ir]=!1,this._activeTrigger[qn]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||n.remove(),this._element.removeAttribute("aria-describedby"),k.trigger(this._element,this.constructor.eventName(WE)),this._disposePopper())};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(wr,Os),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=Rp(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(wr),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new DE({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[RE]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(wr)}_isShown(){return this.tip&&this.tip.classList.contains(Os)}_createPopper(t){const n=typeof this._config.placement=="function"?this._config.placement.call(this,t,this._element):this._config.placement,s=XE[n.toUpperCase()];return no(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return typeof t=="function"?t.call(this._element):t}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")k.on(this._element,this.constructor.eventName(jE),this._config.selector,s=>this.toggle(s));else if(n!==xE){const s=n===qn?this.constructor.eventName(YE):this.constructor.eventName(BE),r=n===qn?this.constructor.eventName(GE):this.constructor.eventName(KE);k.on(this._element,s,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusin"?Ir:qn]=!0,o._enter()}),k.on(this._element,r,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusout"?Ir:qn]=o._element.contains(i.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},k.on(this._element.closest(Ua),ja,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._config.originalTitle;!t||(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=wt.getDataAttributes(this._element);for(const s of Object.keys(n))kE.has(s)&&delete n[s];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:jt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t.originalTitle=this._element.getAttribute("title")||"",typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(t[n]=this._config[n]);return t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each(function(){const n=Kn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}tt(Kn);const QE="popover",JE=".popover-header",ZE=".popover-body",eb={...Kn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},tb={...Kn.DefaultType,content:"(null|string|element|function)"};class oo extends Kn{static get Default(){return eb}static get DefaultType(){return tb}static get NAME(){return QE}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[JE]:this._getTitle(),[ZE]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=oo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}tt(oo);const nb="scrollspy",sb="bs.scrollspy",ao=`.${sb}`,rb=".data-api",ib=`activate${ao}`,Ba=`click${ao}`,ob=`load${ao}${rb}`,ab="dropdown-item",hn="active",lb='[data-bs-spy="scroll"]',Sr="[href]",cb=".nav, .list-group",Ka=".nav-link",ub=".nav-item",fb=".list-group-item",db=`${Ka}, ${ub} > ${Ka}, ${fb}`,hb=".dropdown",_b=".dropdown-toggle",pb={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},mb={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class dr extends ct{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return pb}static get DefaultType(){return mb}static get NAME(){return nb}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=jt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){!this._config.smoothScroll||(k.off(this._config.target,Ba),k.on(this._config.target,Ba,Sr,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const s=this._rootElement||window,r=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:r,behavior:"smooth"});return}s.scrollTop=r}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&a){if(s(o),!r)return;continue}!i&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Q.find(Sr,this._config.target);for(const n of t){if(!n.hash||Bt(n))continue;const s=Q.findOne(n.hash,this._element);jn(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(hn),this._activateParents(t),k.trigger(this._element,ib,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(ab)){Q.findOne(_b,t.closest(hb)).classList.add(hn);return}for(const n of Q.parents(t,cb))for(const s of Q.prev(n,db))s.classList.add(hn)}_clearActiveClass(t){t.classList.remove(hn);const n=Q.find(`${Sr}.${hn}`,t);for(const s of n)s.classList.remove(hn)}static jQueryInterface(t){return this.each(function(){const n=dr.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}k.on(window,ob,()=>{for(const e of Q.find(lb))dr.getOrCreateInstance(e)});tt(dr);const gb="tab",Eb="bs.tab",un=`.${Eb}`,bb=`hide${un}`,vb=`hidden${un}`,Tb=`show${un}`,yb=`shown${un}`,Ab=`click${un}`,Cb=`keydown${un}`,Nb=`load${un}`,Lb="ArrowLeft",Ya="ArrowRight",Ob="ArrowUp",Ga="ArrowDown",xt="active",Xa="fade",Dr="show",wb="dropdown",Ib=".dropdown-toggle",Sb=".dropdown-menu",Db=".dropdown-item",Pr=":not(.dropdown-toggle)",Pb='.list-group, .nav, [role="tablist"]',kb=".nav-item, .list-group-item",$b=`.nav-link${Pr}, .list-group-item${Pr}, [role="tab"]${Pr}`,pu='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',kr=`${$b}, ${pu}`,Rb=`.${xt}[data-bs-toggle="tab"], .${xt}[data-bs-toggle="pill"], .${xt}[data-bs-toggle="list"]`;class Fn extends ct{constructor(t){super(t),this._parent=this._element.closest(Pb),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),k.on(this._element,Cb,n=>this._keydown(n)))}static get NAME(){return gb}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),s=n?k.trigger(n,bb,{relatedTarget:t}):null;k.trigger(t,Tb,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(xt),this._activate(Lt(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Dr);return}t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),k.trigger(t,yb,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Xa))}_deactivate(t,n){if(!t)return;t.classList.remove(xt),t.blur(),this._deactivate(Lt(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Dr);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),k.trigger(t,vb,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Xa))}_keydown(t){if(![Lb,Ya,Ob,Ga].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=[Ya,Ga].includes(t.key),s=so(this._getChildren().filter(r=>!Bt(r)),t.target,n,!0);s&&Fn.getOrCreateInstance(s).show()}_getChildren(){return Q.find(kr,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",n),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=Lt(t);!n||(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,n){const s=this._getOuterElement(t);if(!s.classList.contains(wb))return;const r=(i,o)=>{const a=Q.findOne(i,s);a&&a.classList.toggle(o,n)};r(Ib,xt),r(Sb,Dr),r(Db,xt),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,s){t.hasAttribute(n)||t.setAttribute(n,s)}_elemIsActive(t){return t.classList.contains(xt)}_getInnerElement(t){return t.matches(kr)?t:Q.findOne(kr,t)}_getOuterElement(t){return t.closest(kb)||t}static jQueryInterface(t){return this.each(function(){const n=Fn.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}k.on(document,Ab,pu,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!Bt(this)&&Fn.getOrCreateInstance(this).show()});k.on(window,Nb,()=>{for(const e of Q.find(Rb))Fn.getOrCreateInstance(e)});tt(Fn);const Mb="toast",xb="bs.toast",zt=`.${xb}`,Fb=`mouseover${zt}`,Wb=`mouseout${zt}`,Vb=`focusin${zt}`,Hb=`focusout${zt}`,Ub=`hide${zt}`,jb=`hidden${zt}`,Bb=`show${zt}`,Kb=`shown${zt}`,Yb="fade",qa="hide",ws="show",Is="showing",Gb={animation:"boolean",autohide:"boolean",delay:"number"},Xb={animation:!0,autohide:!0,delay:5e3};class hr extends ct{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Xb}static get DefaultType(){return Gb}static get NAME(){return Mb}show(){if(k.trigger(this._element,Bb).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Yb);const n=()=>{this._element.classList.remove(Is),k.trigger(this._element,Kb),this._maybeScheduleHide()};this._element.classList.remove(qa),hs(this._element),this._element.classList.add(ws,Is),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||k.trigger(this._element,Ub).defaultPrevented)return;const n=()=>{this._element.classList.add(qa),this._element.classList.remove(Is,ws),k.trigger(this._element,jb)};this._element.classList.add(Is),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ws),super.dispose()}isShown(){return this._element.classList.contains(ws)}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=n;break;case"focusin":case"focusout":this._hasKeyboardInteraction=n;break}if(n){this._clearTimeout();return}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){k.on(this._element,Fb,t=>this._onInteraction(t,!0)),k.on(this._element,Wb,t=>this._onInteraction(t,!1)),k.on(this._element,Vb,t=>this._onInteraction(t,!0)),k.on(this._element,Hb,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=hr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}cr(hr);tt(hr);const qb="\u041E\u0442\u0434\u0435\u043B \xAB\u041A\xBB \u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u0434\u0435\u043B \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u043E \u0433. \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0443 \u0438 \u041B\u0435\u043D\u0438\u043D\u0433\u0440\u0430\u0434\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",zb={"p-1":"\u041E\u0442\u0434\u0435\u043B \xAB\u041A\xBB \u041C\u0412\u0414 \u0420\u043E\u0441\u0441\u0438\u0438 \u043F\u043E \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0443 \u0438 \u041B\u041E \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0441\u0432\u043E\u0435\u0439 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0438 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u0435, \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435, \u043F\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u0438\u0435","li-1":"\u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438:","li-1-1":"- \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0439 \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438;","li-1-2":"- \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0432\u0440\u0435\u0434\u043E\u043D\u043E\u0441\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C;","li-1-3":"- \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043B\u0438\u0431\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439;","li-1-4":"- \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432 \u0441\u0444\u0435\u0440\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.","li-2":"\u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439, \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u043C\u044B\u0445 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439 (\u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0441\u0435\u0442\u044C \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442) \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0442\u0438\u0432 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F \u043D\u0435\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043B\u0435\u0442\u043D\u0438\u0445 \u0438 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043D\u0440\u0430\u0432\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438:","li-2-1":"- \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432 \u0441 \u043F\u043E\u0440\u043D\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u043D\u0435\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043B\u0435\u0442\u043D\u0438\u0445;","li-2-2":"- \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0435\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043B\u0435\u0442\u043D\u0435\u0433\u043E \u0432 \u0446\u0435\u043B\u044F\u0445 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u043D\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432.","li-3":"\u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u043C \u043E\u0431\u043E\u0440\u043E\u0442\u043E\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043D\u0435\u0433\u043B\u0430\u0441\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.","li-4":"\u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0438\u043B\u0438 \u0441\u043C\u0435\u0436\u043D\u044B\u0445 \u043F\u0440\u0430\u0432.","p-2":"\u041F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u0432 \u043D\u0430\u0448 \u0430\u0434\u0440\u0435\u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u043E \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0432 \u0435\u0435 \u043D\u0430 \u044D\u043B. \u043F\u043E\u0447\u0442\u0443","p-3":"\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u043C\u0435\u044E\u0449\u0438\u0445\u0441\u044F \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0433\u043E\u0442\u043E\u0432\u044F\u0449\u0438\u0445\u0441\u044F \u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043E\u0442\u0434\u0435\u043B \u043F\u043E\u043B\u0438\u0446\u0438\u0438 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435"},Qb={title:qb,content:zb},Jb="Department K of the Ministry of Internal Affairs of the Russian Federation for St. Petersburg and the Leningrad Region",Zb={"p-1":"Department 'K' of the Ministry of Internal Affairs of Russia for St. Petersburg and the Leningrad Region, within its competence, detection, prevention, suppression and detection","li-1":"crimes in the field of computer information:","li-1-1":"- illegal access to legally protected computer information;","li-1-2":"- creation, use and distribution of malicious computer programs;","li-1-3":"- violation of the rules for the operation of means of storage, processing or transmission of computer information or information and telecommunication networks;","li-1-4":"- computer information fraud.","li-2":"crimes committed using information and telecommunication networks (including the Internet) and directed against the health of minors and public morality:","li-2-1":"- production and distribution of materials or objects with pornographic images of minors;","li-2-2":"- use of a minor for the purpose of making pornographic materials or items.","li-3":"crimes related to the illegal circulation of special technical means designed to secretly obtain information.","li-4":"crimes related to the illegal use of objects of copyright or related rights.","p-2":"You can send information anonymously to us by sending it to e-mail","p-3":"If there is information about committed or upcoming crimes, you must contact the nearest police department or write a corresponding statement on the website"},ev={title:Jb,content:Zb},tv="rus",nv={rus:Qb,eng:ev},sv=localStorage.getItem("lang"),rv=Object.assign(nv),iv=v_({legacy:!1,locale:sv||tv,fallbackLocale:"rus",messages:rv});Vd(K_,{setup(){const{t:e}=fs();return{t:e}}}).use(iv).mount("#app");