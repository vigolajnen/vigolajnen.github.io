import{c as X,o as ce,l as I,a as ae,q as ye,b as Qe,s as we,d as ee}from"./dom-helpers-8NB3xFiQ.js";import{r as i,j as x}from"./react-IgOIl9ry.js";import{$ as Ze}from"./@react-aria-AQHRbwmN.js";import{R as De}from"./react-dom-KbPXDqFo.js";import{d as et}from"./dequal-vEqHzq4I.js";import{p as tt,h as nt,a as ot,c as rt,e as st,o as it,f as ut,b as ct,d as at}from"./@popperjs-u7bcf535.js";import{w as lt}from"./warning-A3mB0AEe.js";function dt(e,t,n){const o=i.useRef(e!==void 0),[r,s]=i.useState(t),c=e!==void 0,d=o.current;return o.current=c,!c&&d&&r!==t&&s(t),[c?e:r,i.useCallback((...f)=>{const[u,...l]=f;let a=n==null?void 0:n(u,...l);return s(u),a},[n])]}function Te(e){const t=i.useRef(null);return i.useEffect(()=>{t.current=e}),t.current}function ft(){const[,e]=i.useReducer(t=>!t,!1);return e}function pt(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e},[e]),t}function R(e){const t=pt(e);return i.useCallback(function(...n){return t.current&&t.current(...n)},[t])}function mt(e,t,n,o=!1){const r=R(n);i.useEffect(()=>{const s=typeof e=="function"?e():e;return s.addEventListener(t,r,o),()=>s.removeEventListener(t,r,o)},[e])}const gt=i.createContext(null),le=gt;function oe(){return i.useState(null)}function de(){const e=i.useRef(!0),t=i.useRef(()=>e.current);return i.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function bt(e){const t=de();return[e[0],i.useCallback(n=>{if(t())return e[1](n)},[t,e[1]])]}const ht=tt({defaultModifiers:[nt,ot,rt,st,it,ut,ct,at]}),vt=["enabled","placement","strategy","modifiers"];function yt(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,s;for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}const wt={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Et={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:n}=e.elements;if("removeAttribute"in t){const o=(t.getAttribute("aria-describedby")||"").split(",").filter(r=>r.trim()!==n.id);o.length?t.setAttribute("aria-describedby",o.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:n,reference:o}=e.elements,r=(t=n.getAttribute("role"))==null?void 0:t.toLowerCase();if(n.id&&r==="tooltip"&&"setAttribute"in o){const s=o.getAttribute("aria-describedby");if(s&&s.split(",").indexOf(n.id)!==-1)return;o.setAttribute("aria-describedby",s?`${s},${n.id}`:n.id)}}},xt=[];function Se(e,t,n={}){let{enabled:o=!0,placement:r="bottom",strategy:s="absolute",modifiers:c=xt}=n,d=yt(n,vt);const f=i.useRef(c),u=i.useRef(),l=i.useCallback(()=>{var p;(p=u.current)==null||p.update()},[]),a=i.useCallback(()=>{var p;(p=u.current)==null||p.forceUpdate()},[]),[g,h]=bt(i.useState({placement:r,update:l,forceUpdate:a,attributes:{},styles:{popper:{},arrow:{}}})),m=i.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:p})=>{const k={},b={};Object.keys(p.elements).forEach(w=>{k[w]=p.styles[w],b[w]=p.attributes[w]}),h({state:p,styles:k,attributes:b,update:l,forceUpdate:a,placement:p.placement})}}),[l,a,h]),C=i.useMemo(()=>(et(f.current,c)||(f.current=c),f.current),[c]);return i.useEffect(()=>{!u.current||!o||u.current.setOptions({placement:r,strategy:s,modifiers:[...C,m,wt]})},[s,r,m,o,C]),i.useEffect(()=>{if(!(!o||e==null||t==null))return u.current=ht(e,t,Object.assign({},d,{placement:r,strategy:s,modifiers:[...C,Et,m]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,h(p=>Object.assign({},p,{attributes:{},styles:{popper:{}}})))}},[o,e,t]),g}const Ee=()=>{};function Ot(e){return e.button===0}function Rt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const q=e=>e&&("current"in e?e.current:e),xe={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function $e(e,t=Ee,{disabled:n,clickTrigger:o="click"}={}){const r=i.useRef(!1),s=i.useRef(!1),c=i.useCallback(u=>{const l=q(e);lt(!!l,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),r.current=!l||Rt(u)||!Ot(u)||!!X(l,u.target)||s.current,s.current=!1},[e]),d=R(u=>{const l=q(e);l&&X(l,u.target)&&(s.current=!0)}),f=R(u=>{r.current||t(u)});i.useEffect(()=>{var u,l;if(n||e==null)return;const a=ce(q(e)),g=a.defaultView||window;let h=(u=g.event)!=null?u:(l=g.parent)==null?void 0:l.event,m=null;xe[o]&&(m=I(a,xe[o],d,!0));const C=I(a,o,c,!0),p=I(a,o,b=>{if(b===h){h=void 0;return}f(b)});let k=[];return"ontouchstart"in a.documentElement&&(k=[].slice.call(a.body.children).map(b=>I(b,"mousemove",Ee))),()=>{m==null||m(),C(),p(),k.forEach(b=>b())}},[e,n,o,c,d,f])}function Ct(e){const t={};return Array.isArray(e)?(e==null||e.forEach(n=>{t[n.name]=n}),t):e||t}function kt(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function Ae({enabled:e,enableEvents:t,placement:n,flip:o,offset:r,fixed:s,containerPadding:c,arrowElement:d,popperConfig:f={}}){var u,l,a,g,h;const m=Ct(f.modifiers);return Object.assign({},f,{placement:n,enabled:e,strategy:s?"fixed":f.strategy,modifiers:kt(Object.assign({},m,{eventListeners:{enabled:t,options:(u=m.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},m.preventOverflow,{options:c?Object.assign({padding:c},(l=m.preventOverflow)==null?void 0:l.options):(a=m.preventOverflow)==null?void 0:a.options}),offset:{options:Object.assign({offset:r},(g=m.offset)==null?void 0:g.options)},arrow:Object.assign({},m.arrow,{enabled:!!d,options:Object.assign({},(h=m.arrow)==null?void 0:h.options,{element:d})}),flip:Object.assign({enabled:!!o},m.flip)}))})}const Mt=["children"];function jt(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,s;for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}const Dt=()=>{};function Tt(e={}){const t=i.useContext(le),[n,o]=oe(),r=i.useRef(!1),{flip:s,offset:c,rootCloseEvent:d,fixed:f=!1,placement:u,popperConfig:l={},enableEventListeners:a=!0,usePopper:g=!!t}=e,h=(t==null?void 0:t.show)==null?!!e.show:t.show;h&&!r.current&&(r.current=!0);const m=L=>{t==null||t.toggle(!1,L)},{placement:C,setMenu:p,menuElement:k,toggleElement:b}=t||{},w=Se(b,k,Ae({placement:u||C||"bottom-start",enabled:g,enableEvents:a??h,offset:c,flip:s,fixed:f,arrowElement:n,popperConfig:l})),P=Object.assign({ref:p||Dt,"aria-labelledby":b==null?void 0:b.id},w.attributes.popper,{style:w.styles.popper}),T={show:h,placement:C,hasShown:r.current,toggle:t==null?void 0:t.toggle,popper:g?w:null,arrowProps:g?Object.assign({ref:o},w.attributes.arrow,{style:w.styles.arrow}):{}};return $e(k,m,{clickTrigger:d,disabled:!h}),[P,T]}const St={usePopper:!0};function fe(e){let{children:t}=e,n=jt(e,Mt);const[o,r]=Tt(n);return x.jsx(x.Fragment,{children:t(o,r)})}fe.displayName="DropdownMenu";fe.defaultProps=St;const Pe=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},Oe=()=>{};function $t(){const e=Ze(),{show:t=!1,toggle:n=Oe,setToggle:o,menuElement:r}=i.useContext(le)||{},s=i.useCallback(d=>{n(!t,d)},[t,n]),c={id:e,ref:o||Oe,onClick:s,"aria-expanded":!!t};return r&&Pe(r)&&(c["aria-haspopup"]=!0),[c,{show:t,toggle:n}]}function Le({children:e}){const[t,n]=$t();return x.jsx(x.Fragment,{children:e(t,n)})}Le.displayName="DropdownToggle";const At=i.createContext(null),Re=(e,t=null)=>e!=null?String(e):t||null,re=At,Ke=i.createContext(null);Ke.displayName="NavContext";const Pt=Ke,Lt=["as","disabled"];function Kt(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,s;for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function It(e){return!e||e.trim()==="#"}function Ie({tagName:e,disabled:t,href:n,target:o,rel:r,role:s,onClick:c,tabIndex:d=0,type:f}){e||(n!=null||o!=null||r!=null?e="a":e="button");const u={tagName:e};if(e==="button")return[{type:f||"button",disabled:t},u];const l=g=>{if((t||e==="a"&&It(n))&&g.preventDefault(),t){g.stopPropagation();return}c==null||c(g)},a=g=>{g.key===" "&&(g.preventDefault(),l(g))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:t?void 0:d,href:n,target:e==="a"?o:void 0,"aria-disabled":t||void 0,rel:e==="a"?r:void 0,onClick:l,onKeyDown:a},u]}const We=i.forwardRef((e,t)=>{let{as:n,disabled:o}=e,r=Kt(e,Lt);const[s,{tagName:c}]=Ie(Object.assign({tagName:n,disabled:o},r));return x.jsx(c,Object.assign({},r,s,{ref:t}))});We.displayName="Button";const Wt="data-rr-ui-";function pe(e){return`${Wt}${e}`}const _t=["eventKey","disabled","onClick","active","as"];function Bt(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,s;for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Ft({key:e,href:t,active:n,disabled:o,onClick:r}){const s=i.useContext(re),c=i.useContext(Pt),{activeKey:d}=c||{},f=Re(e,t),u=n==null&&e!=null?Re(d)===f:n;return[{onClick:R(a=>{o||(r==null||r(a),s&&!a.isPropagationStopped()&&s(f,a))}),"aria-disabled":o||void 0,"aria-selected":u,[pe("dropdown-item")]:""},{isActive:u}]}const _e=i.forwardRef((e,t)=>{let{eventKey:n,disabled:o,onClick:r,active:s,as:c=We}=e,d=Bt(e,_t);const[f]=Ft({key:n,href:d.href,disabled:o,onClick:r,active:s});return x.jsx(c,Object.assign({},d,{ref:t},f))});_e.displayName="DropdownItem";const Be=i.createContext(ae?window:void 0);Be.Provider;function Y(){return i.useContext(Be)}function Ce(){const e=ft(),t=i.useRef(null),n=i.useCallback(o=>{t.current=o,e()},[e]);return[t,n]}function G({defaultShow:e,show:t,onSelect:n,onToggle:o,itemSelector:r=`* [${pe("dropdown-item")}]`,focusFirstItemOnShow:s,placement:c="bottom-start",children:d}){const f=Y(),[u,l]=dt(t,e,o),[a,g]=Ce(),h=a.current,[m,C]=Ce(),p=m.current,k=Te(u),b=i.useRef(null),w=i.useRef(!1),P=i.useContext(re),T=i.useCallback((v,E,M=E==null?void 0:E.type)=>{l(v,{originalEvent:E,source:M})},[l]),L=R((v,E)=>{n==null||n(v,E),T(!1,E,"select"),E.isPropagationStopped()||P==null||P(v,E)}),W=i.useMemo(()=>({toggle:T,placement:c,show:u,menuElement:h,toggleElement:p,setMenu:g,setToggle:C}),[T,c,u,h,p,g,C]);h&&k&&!u&&(w.current=h.contains(h.ownerDocument.activeElement));const K=R(()=>{p&&p.focus&&p.focus()}),_=R(()=>{const v=b.current;let E=s;if(E==null&&(E=a.current&&Pe(a.current)?"keyboard":!1),E===!1||E==="keyboard"&&!/^key.+$/.test(v))return;const M=ye(a.current,r)[0];M&&M.focus&&M.focus()});i.useEffect(()=>{u?_():w.current&&(w.current=!1,K())},[u,w,K,_]),i.useEffect(()=>{b.current=null});const S=(v,E)=>{if(!a.current)return null;const M=ye(a.current,r);let D=M.indexOf(v)+E;return D=Math.max(0,Math.min(D,M.length)),M[D]};return mt(i.useCallback(()=>f.document,[f]),"keydown",v=>{var E,M;const{key:D}=v,$=v.target,A=(E=a.current)==null?void 0:E.contains($),B=(M=m.current)==null?void 0:M.contains($);if(/input|textarea/i.test($.tagName)&&(D===" "||D!=="Escape"&&A||D==="Escape"&&$.type==="search")||!A&&!B||D==="Tab"&&(!a.current||!u))return;b.current=v.type;const N={originalEvent:v,source:v.type};switch(D){case"ArrowUp":{const j=S($,-1);j&&j.focus&&j.focus(),v.preventDefault();return}case"ArrowDown":if(v.preventDefault(),!u)l(!0,N);else{const j=S($,1);j&&j.focus&&j.focus()}return;case"Tab":Qe($.ownerDocument,"keyup",j=>{var F;(j.key==="Tab"&&!j.target||!((F=a.current)!=null&&F.contains(j.target)))&&l(!1,N)},{once:!0});break;case"Escape":D==="Escape"&&(v.preventDefault(),v.stopPropagation()),l(!1,N);break}}),x.jsx(re.Provider,{value:L,children:x.jsx(le.Provider,{value:W,children:d})})}G.displayName="Dropdown";G.Menu=fe;G.Toggle=Le;G.Item=_e;const Nt=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Ut=typeof document<"u",ke=Ut||Nt?i.useLayoutEffect:i.useEffect,Ht=["onKeyDown"];function qt(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,s;for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Xt(e){return!e||e.trim()==="#"}const Fe=i.forwardRef((e,t)=>{let{onKeyDown:n}=e,o=qt(e,Ht);const[r]=Ie(Object.assign({tagName:"a"},o)),s=R(c=>{r.onKeyDown(c),n==null||n(c)});return Xt(o.href)||o.role==="button"?x.jsx("a",Object.assign({ref:t},o,r,{onKeyDown:s})):x.jsx("a",Object.assign({ref:t},o,{onKeyDown:n}))});Fe.displayName="Anchor";const mn=Fe,Me=e=>!e||typeof e=="function"?e:t=>{e.current=t};function Yt(e,t){const n=Me(e),o=Me(t);return r=>{n&&n(r),o&&o(r)}}function me(e,t){return i.useMemo(()=>Yt(e,t),[e,t])}function Gt(e){const t=i.useRef(e);return t.current=e,t}function Ne(e){const t=Gt(e);i.useEffect(()=>()=>t.current(),[])}const se=2**31-1;function Ue(e,t,n){const o=n-Date.now();e.current=o<=se?setTimeout(t,o):setTimeout(()=>Ue(e,t,n),se)}function gn(){const e=de(),t=i.useRef();return Ne(()=>clearTimeout(t.current)),i.useMemo(()=>{const n=()=>clearTimeout(t.current);function o(r,s=0){e()&&(n(),s<=se?t.current=setTimeout(r,s):Ue(t,r,Date.now()+s))}return{set:o,clear:n,handleRef:t}},[])}function He(e){return e.code==="Escape"||e.keyCode===27}const Vt=()=>{};function zt(e,t,{disabled:n,clickTrigger:o}={}){const r=t||Vt;$e(e,r,{disabled:n,clickTrigger:o});const s=R(c=>{He(c)&&r(c)});i.useEffect(()=>{if(n||e==null)return;const c=ce(q(e));let d=(c.defaultView||window).event;const f=I(c,"keyup",u=>{if(u===d){d=void 0;return}s(u)});return()=>{f()}},[e,n,s])}const te=(e,t)=>ae?e==null?(t||ce()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function ie(e,t){const n=Y(),[o,r]=i.useState(()=>te(e,n==null?void 0:n.document));if(!o){const s=te(e);s&&r(s)}return i.useEffect(()=>{t&&o&&t(o)},[t,o]),i.useEffect(()=>{const s=te(e);s!==o&&r(s)},[e,o]),o}function Jt({children:e,in:t,onExited:n,mountOnEnter:o,unmountOnExit:r}){const s=i.useRef(null),c=i.useRef(t),d=R(n);i.useEffect(()=>{t?c.current=!0:d(s.current)},[t,d]);const f=me(s,e.ref),u=i.cloneElement(e,{ref:f});return t?u:r||!c.current&&o?null:u}function Qt({in:e,onTransition:t}){const n=i.useRef(null),o=i.useRef(!0),r=R(t);return ke(()=>{if(!n.current)return;let s=!1;return r({in:e,element:n.current,initial:o.current,isStale:()=>s}),()=>{s=!0}},[e,r]),ke(()=>(o.current=!1,()=>{o.current=!0}),[]),n}function Zt({children:e,in:t,onExited:n,onEntered:o,transition:r}){const[s,c]=i.useState(!t);t&&s&&c(!1);const d=Qt({in:!!t,onTransition:u=>{const l=()=>{u.isStale()||(u.in?o==null||o(u.element,u.initial):(c(!0),n==null||n(u.element)))};Promise.resolve(r(u)).then(l,a=>{throw u.in||c(!0),a})}}),f=me(d,e.ref);return s&&!t?null:i.cloneElement(e,{ref:f})}function ue(e,t,n){return e?x.jsx(e,Object.assign({},n)):t?x.jsx(Zt,Object.assign({},n,{transition:t})):x.jsx(Jt,Object.assign({},n))}const qe=i.forwardRef((e,t)=>{const{flip:n,offset:o,placement:r,containerPadding:s,popperConfig:c={},transition:d,runTransition:f}=e,[u,l]=oe(),[a,g]=oe(),h=me(l,t),m=ie(e.container),C=ie(e.target),[p,k]=i.useState(!e.show),b=Se(C,u,Ae({placement:r,enableEvents:!!e.show,containerPadding:s||5,flip:n,offset:o,arrowElement:a,popperConfig:c}));e.show&&p&&k(!1);const w=(...v)=>{k(!0),e.onExited&&e.onExited(...v)},P=e.show||!p;if(zt(u,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!P)return null;const{onExit:T,onExiting:L,onEnter:W,onEntering:K,onEntered:_}=e;let S=e.children(Object.assign({},b.attributes.popper,{style:b.styles.popper,ref:h}),{popper:b,placement:r,show:!!e.show,arrowProps:Object.assign({},b.attributes.arrow,{style:b.styles.arrow,ref:g})});return S=ue(d,f,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:S,onExit:T,onExiting:L,onExited:w,onEnter:W,onEntering:K,onEntered:_}),m?De.createPortal(S,m):null});qe.displayName="Overlay";const bn=qe;function en(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const je=pe("modal-open");class tn{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:o=!1}={}){this.handleContainerOverflow=n,this.isRTL=o,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return en(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();t.style={overflow:r.style.overflow,[o]:r.style[o]},t.scrollBarWidth&&(n[o]=`${parseInt(we(r,o)||"0",10)+t.scrollBarWidth}px`),r.setAttribute(je,""),we(r,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(je),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Xe=tn,nn=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function on(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,s;for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}let ne;function rn(e){return ne||(ne=new Xe({ownerDocument:e==null?void 0:e.document})),ne}function sn(e){const t=Y(),n=e||rn(t),o=i.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:i.useCallback(r=>{o.current.dialog=r},[]),setBackdropRef:i.useCallback(r=>{o.current.backdrop=r},[])})}const Ye=i.forwardRef((e,t)=>{let{show:n=!1,role:o="dialog",className:r,style:s,children:c,backdrop:d=!0,keyboard:f=!0,onBackdropClick:u,onEscapeKeyDown:l,transition:a,runTransition:g,backdropTransition:h,runBackdropTransition:m,autoFocus:C=!0,enforceFocus:p=!0,restoreFocus:k=!0,restoreFocusOptions:b,renderDialog:w,renderBackdrop:P=y=>x.jsx("div",Object.assign({},y)),manager:T,container:L,onShow:W,onHide:K=()=>{},onExit:_,onExited:S,onExiting:v,onEnter:E,onEntering:M,onEntered:D}=e,$=on(e,nn);const A=Y(),B=ie(L),O=sn(T),N=de(),j=Te(n),[F,ge]=i.useState(!n),U=i.useRef(null);i.useImperativeHandle(t,()=>O,[O]),ae&&!j&&n&&(U.current=ee(A==null?void 0:A.document)),n&&F&&ge(!1);const be=R(()=>{if(O.add(),J.current=I(document,"keydown",ze),z.current=I(document,"focus",()=>setTimeout(Ge),!0),W&&W(),C){var y,ve;const Z=ee((y=(ve=O.dialog)==null?void 0:ve.ownerDocument)!=null?y:A==null?void 0:A.document);O.dialog&&Z&&!X(O.dialog,Z)&&(U.current=Z,O.dialog.focus())}}),V=R(()=>{if(O.remove(),J.current==null||J.current(),z.current==null||z.current(),k){var y;(y=U.current)==null||y.focus==null||y.focus(b),U.current=null}});i.useEffect(()=>{!n||!B||be()},[n,B,be]),i.useEffect(()=>{F&&V()},[F,V]),Ne(()=>{V()});const Ge=R(()=>{if(!p||!N()||!O.isTopModal())return;const y=ee(A==null?void 0:A.document);O.dialog&&y&&!X(O.dialog,y)&&O.dialog.focus()}),Ve=R(y=>{y.target===y.currentTarget&&(u==null||u(y),d===!0&&K())}),ze=R(y=>{f&&He(y)&&O.isTopModal()&&(l==null||l(y),y.defaultPrevented||K())}),z=i.useRef(),J=i.useRef(),Je=(...y)=>{ge(!0),S==null||S(...y)};if(!B)return null;const he=Object.assign({role:o,ref:O.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},$,{style:s,className:r,tabIndex:-1});let Q=w?w(he):x.jsx("div",Object.assign({},he,{children:i.cloneElement(c,{role:"document"})}));Q=ue(a,g,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:_,onExiting:v,onExited:Je,onEnter:E,onEntering:M,onEntered:D,children:Q});let H=null;return d&&(H=P({ref:O.setBackdropRef,onClick:Ve}),H=ue(h,m,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:H})),x.jsx(x.Fragment,{children:De.createPortal(x.jsxs(x.Fragment,{children:[H,Q]}),B)})});Ye.displayName="Modal";const hn=Object.assign(Ye,{Manager:Xe});export{mn as A,bn as B,le as D,Xe as M,Tt as a,me as b,ke as c,Ie as d,$t as e,R as f,G as g,gn as h,oe as i,Ne as j,hn as k,Ft as u};
