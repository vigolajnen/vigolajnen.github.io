var C="top",L="bottom",W="right",$="left",Pt="auto",ft=[C,L,W,$],Q="start",it="end",ue="clippingParents",Kt="viewport",nt="popper",le="reference",Ft=ft.reduce(function(t,e){return t.concat([e+"-"+Q,e+"-"+it])},[]),Qt=[].concat(ft,[Pt]).reduce(function(t,e){return t.concat([e,e+"-"+Q,e+"-"+it])},[]),ve="beforeRead",de="read",he="afterRead",me="beforeMain",ge="main",ye="afterMain",we="beforeWrite",be="write",xe="afterWrite",Oe=[ve,de,he,me,ge,ye,we,be,xe];function S(t){return t.split("-")[0]}function T(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function J(t){var e=T(t).Element;return t instanceof e||t instanceof Element}function H(t){var e=T(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Dt(t){if(typeof ShadowRoot>"u")return!1;var e=T(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var G=Math.max,gt=Math.min,Z=Math.round;function At(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Zt(){return!/^((?!chrome|android).)*safari/i.test(At())}function _(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),a=1,i=1;e&&H(t)&&(a=t.offsetWidth>0&&Z(n.width)/t.offsetWidth||1,i=t.offsetHeight>0&&Z(n.height)/t.offsetHeight||1);var p=J(t)?T(t):window,s=p.visualViewport,o=!Zt()&&r,c=(n.left+(o&&s?s.offsetLeft:0))/a,f=(n.top+(o&&s?s.offsetTop:0))/i,h=n.width/a,y=n.height/i;return{width:h,height:y,top:f,right:c+h,bottom:f+y,left:c,x:c,y:f}}function Rt(t){var e=_(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function _t(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Dt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function F(t){return t?(t.nodeName||"").toLowerCase():null}function V(t){return T(t).getComputedStyle(t)}function Ae(t){return["table","td","th"].indexOf(F(t))>=0}function q(t){return((J(t)?t.ownerDocument:t.document)||window.document).documentElement}function yt(t){return F(t)==="html"?t:t.assignedSlot||t.parentNode||(Dt(t)?t.host:null)||q(t)}function qt(t){return!H(t)||V(t).position==="fixed"?null:t.offsetParent}function Ee(t){var e=/firefox/i.test(At()),r=/Trident/i.test(At());if(r&&H(t)){var n=V(t);if(n.position==="fixed")return null}var a=yt(t);for(Dt(a)&&(a=a.host);H(a)&&["html","body"].indexOf(F(a))<0;){var i=V(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return a;a=a.parentNode}return null}function pt(t){for(var e=T(t),r=qt(t);r&&Ae(r)&&V(r).position==="static";)r=qt(r);return r&&(F(r)==="html"||F(r)==="body"&&V(r).position==="static")?e:r||Ee(t)||e}function Bt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function at(t,e,r){return G(t,gt(e,r))}function Pe(t,e,r){var n=at(t,e,r);return n>r?r:n}function te(){return{top:0,right:0,bottom:0,left:0}}function ee(t){return Object.assign({},te(),t)}function re(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var De=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,ee(typeof e!="number"?e:re(e,ft))};function Re(t){var e,r=t.state,n=t.name,a=t.options,i=r.elements.arrow,p=r.modifiersData.popperOffsets,s=S(r.placement),o=Bt(s),c=[$,W].indexOf(s)>=0,f=c?"height":"width";if(!(!i||!p)){var h=De(a.padding,r),y=Rt(i),u=o==="y"?C:$,b=o==="y"?L:W,d=r.rects.reference[f]+r.rects.reference[o]-p[o]-r.rects.popper[f],v=p[o]-r.rects.reference[o],w=pt(i),O=w?o==="y"?w.clientHeight||0:w.clientWidth||0:0,A=d/2-v/2,l=h[u],m=O-y[f]-h[b],g=O/2-y[f]/2+A,x=at(l,g,m),D=o;r.modifiersData[n]=(e={},e[D]=x,e.centerOffset=x-g,e)}}function Be(t){var e=t.state,r=t.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||_t(e.elements.popper,a)&&(e.elements.arrow=a))}const nr={name:"arrow",enabled:!0,phase:"main",fn:Re,effect:Be,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function tt(t){return t.split("-")[1]}var Ce={top:"auto",right:"auto",bottom:"auto",left:"auto"};function $e(t,e){var r=t.x,n=t.y,a=e.devicePixelRatio||1;return{x:Z(r*a)/a||0,y:Z(n*a)/a||0}}function Xt(t){var e,r=t.popper,n=t.popperRect,a=t.placement,i=t.variation,p=t.offsets,s=t.position,o=t.gpuAcceleration,c=t.adaptive,f=t.roundOffsets,h=t.isFixed,y=p.x,u=y===void 0?0:y,b=p.y,d=b===void 0?0:b,v=typeof f=="function"?f({x:u,y:d}):{x:u,y:d};u=v.x,d=v.y;var w=p.hasOwnProperty("x"),O=p.hasOwnProperty("y"),A=$,l=C,m=window;if(c){var g=pt(r),x="clientHeight",D="clientWidth";if(g===T(r)&&(g=q(r),V(g).position!=="static"&&s==="absolute"&&(x="scrollHeight",D="scrollWidth")),g=g,a===C||(a===$||a===W)&&i===it){l=L;var P=h&&g===m&&m.visualViewport?m.visualViewport.height:g[x];d-=P-n.height,d*=o?1:-1}if(a===$||(a===C||a===L)&&i===it){A=W;var E=h&&g===m&&m.visualViewport?m.visualViewport.width:g[D];u-=E-n.width,u*=o?1:-1}}var R=Object.assign({position:s},c&&Ce),k=f===!0?$e({x:u,y:d},T(r)):{x:u,y:d};if(u=k.x,d=k.y,o){var B;return Object.assign({},R,(B={},B[l]=O?"0":"",B[A]=w?"0":"",B.transform=(m.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",B))}return Object.assign({},R,(e={},e[l]=O?d+"px":"",e[A]=w?u+"px":"",e.transform="",e))}function je(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,i=r.adaptive,p=i===void 0?!0:i,s=r.roundOffsets,o=s===void 0?!0:s,c={placement:S(e.placement),variation:tt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Xt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:p,roundOffsets:o})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Xt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const ar={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:je,data:{}};var ht={passive:!0};function Te(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,i=a===void 0?!0:a,p=n.resize,s=p===void 0?!0:p,o=T(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach(function(f){f.addEventListener("scroll",r.update,ht)}),s&&o.addEventListener("resize",r.update,ht),function(){i&&c.forEach(function(f){f.removeEventListener("scroll",r.update,ht)}),s&&o.removeEventListener("resize",r.update,ht)}}const or={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Te,data:{}};var Le={left:"right",right:"left",bottom:"top",top:"bottom"};function mt(t){return t.replace(/left|right|bottom|top/g,function(e){return Le[e]})}var We={start:"end",end:"start"};function It(t){return t.replace(/start|end/g,function(e){return We[e]})}function Ct(t){var e=T(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function $t(t){return _(q(t)).left+Ct(t).scrollLeft}function ke(t,e){var r=T(t),n=q(t),a=r.visualViewport,i=n.clientWidth,p=n.clientHeight,s=0,o=0;if(a){i=a.width,p=a.height;var c=Zt();(c||!c&&e==="fixed")&&(s=a.offsetLeft,o=a.offsetTop)}return{width:i,height:p,x:s+$t(t),y:o}}function Me(t){var e,r=q(t),n=Ct(t),a=(e=t.ownerDocument)==null?void 0:e.body,i=G(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),p=G(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-n.scrollLeft+$t(t),o=-n.scrollTop;return V(a||r).direction==="rtl"&&(s+=G(r.clientWidth,a?a.clientWidth:0)-i),{width:i,height:p,x:s,y:o}}function jt(t){var e=V(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function ne(t){return["html","body","#document"].indexOf(F(t))>=0?t.ownerDocument.body:H(t)&&jt(t)?t:ne(yt(t))}function ot(t,e){var r;e===void 0&&(e=[]);var n=ne(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),i=T(n),p=a?[i].concat(i.visualViewport||[],jt(n)?n:[]):n,s=e.concat(p);return a?s:s.concat(ot(yt(p)))}function Et(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Se(t,e){var r=_(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Yt(t,e,r){return e===Kt?Et(ke(t,r)):J(e)?Se(e,r):Et(Me(q(t)))}function He(t){var e=ot(yt(t)),r=["absolute","fixed"].indexOf(V(t).position)>=0,n=r&&H(t)?pt(t):t;return J(n)?e.filter(function(a){return J(a)&&_t(a,n)&&F(a)!=="body"}):[]}function Ve(t,e,r,n){var a=e==="clippingParents"?He(t):[].concat(e),i=[].concat(a,[r]),p=i[0],s=i.reduce(function(o,c){var f=Yt(t,c,n);return o.top=G(f.top,o.top),o.right=gt(f.right,o.right),o.bottom=gt(f.bottom,o.bottom),o.left=G(f.left,o.left),o},Yt(t,p,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ae(t){var e=t.reference,r=t.element,n=t.placement,a=n?S(n):null,i=n?tt(n):null,p=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,o;switch(a){case C:o={x:p,y:e.y-r.height};break;case L:o={x:p,y:e.y+e.height};break;case W:o={x:e.x+e.width,y:s};break;case $:o={x:e.x-r.width,y:s};break;default:o={x:e.x,y:e.y}}var c=a?Bt(a):null;if(c!=null){var f=c==="y"?"height":"width";switch(i){case Q:o[c]=o[c]-(e[f]/2-r[f]/2);break;case it:o[c]=o[c]+(e[f]/2-r[f]/2);break}}return o}function st(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,i=r.strategy,p=i===void 0?t.strategy:i,s=r.boundary,o=s===void 0?ue:s,c=r.rootBoundary,f=c===void 0?Kt:c,h=r.elementContext,y=h===void 0?nt:h,u=r.altBoundary,b=u===void 0?!1:u,d=r.padding,v=d===void 0?0:d,w=ee(typeof v!="number"?v:re(v,ft)),O=y===nt?le:nt,A=t.rects.popper,l=t.elements[b?O:y],m=Ve(J(l)?l:l.contextElement||q(t.elements.popper),o,f,p),g=_(t.elements.reference),x=ae({reference:g,element:A,strategy:"absolute",placement:a}),D=Et(Object.assign({},A,x)),P=y===nt?D:g,E={top:m.top-P.top+w.top,bottom:P.bottom-m.bottom+w.bottom,left:m.left-P.left+w.left,right:P.right-m.right+w.right},R=t.modifiersData.offset;if(y===nt&&R){var k=R[a];Object.keys(E).forEach(function(B){var X=[W,L].indexOf(B)>=0?1:-1,I=[C,L].indexOf(B)>=0?"y":"x";E[B]+=k[I]*X})}return E}function Ne(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,i=r.rootBoundary,p=r.padding,s=r.flipVariations,o=r.allowedAutoPlacements,c=o===void 0?Qt:o,f=tt(n),h=f?s?Ft:Ft.filter(function(b){return tt(b)===f}):ft,y=h.filter(function(b){return c.indexOf(b)>=0});y.length===0&&(y=h);var u=y.reduce(function(b,d){return b[d]=st(t,{placement:d,boundary:a,rootBoundary:i,padding:p})[S(d)],b},{});return Object.keys(u).sort(function(b,d){return u[b]-u[d]})}function Fe(t){if(S(t)===Pt)return[];var e=mt(t);return[It(t),e,It(e)]}function qe(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,i=a===void 0?!0:a,p=r.altAxis,s=p===void 0?!0:p,o=r.fallbackPlacements,c=r.padding,f=r.boundary,h=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,b=u===void 0?!0:u,d=r.allowedAutoPlacements,v=e.options.placement,w=S(v),O=w===v,A=o||(O||!b?[mt(v)]:Fe(v)),l=[v].concat(A).reduce(function(K,N){return K.concat(S(N)===Pt?Ne(e,{placement:N,boundary:f,rootBoundary:h,padding:c,flipVariations:b,allowedAutoPlacements:d}):N)},[]),m=e.rects.reference,g=e.rects.popper,x=new Map,D=!0,P=l[0],E=0;E<l.length;E++){var R=l[E],k=S(R),B=tt(R)===Q,X=[C,L].indexOf(k)>=0,I=X?"width":"height",j=st(e,{placement:R,boundary:f,rootBoundary:h,altBoundary:y,padding:c}),M=X?B?W:$:B?L:C;m[I]>g[I]&&(M=mt(M));var ct=mt(M),Y=[];if(i&&Y.push(j[k]<=0),s&&Y.push(j[M]<=0,j[ct]<=0),Y.every(function(K){return K})){P=R,D=!1;break}x.set(R,Y)}if(D)for(var ut=b?3:1,wt=function(N){var rt=l.find(function(vt){var z=x.get(vt);if(z)return z.slice(0,N).every(function(bt){return bt})});if(rt)return P=rt,"break"},et=ut;et>0;et--){var lt=wt(et);if(lt==="break")break}e.placement!==P&&(e.modifiersData[n]._skip=!0,e.placement=P,e.reset=!0)}}const ir={name:"flip",enabled:!0,phase:"main",fn:qe,requiresIfExists:["offset"],data:{_skip:!1}};function zt(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Ut(t){return[C,W,L,$].some(function(e){return t[e]>=0})}function Xe(t){var e=t.state,r=t.name,n=e.rects.reference,a=e.rects.popper,i=e.modifiersData.preventOverflow,p=st(e,{elementContext:"reference"}),s=st(e,{altBoundary:!0}),o=zt(p,n),c=zt(s,a,i),f=Ut(o),h=Ut(c);e.modifiersData[r]={referenceClippingOffsets:o,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":h})}const sr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Xe};function Ie(t,e,r){var n=S(t),a=[$,C].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,p=i[0],s=i[1];return p=p||0,s=(s||0)*a,[$,W].indexOf(n)>=0?{x:s,y:p}:{x:p,y:s}}function Ye(t){var e=t.state,r=t.options,n=t.name,a=r.offset,i=a===void 0?[0,0]:a,p=Qt.reduce(function(f,h){return f[h]=Ie(h,e.rects,i),f},{}),s=p[e.placement],o=s.x,c=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=o,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=p}const fr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ye};function ze(t){var e=t.state,r=t.name;e.modifiersData[r]=ae({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const pr={name:"popperOffsets",enabled:!0,phase:"read",fn:ze,data:{}};function Ue(t){return t==="x"?"y":"x"}function Ge(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,i=a===void 0?!0:a,p=r.altAxis,s=p===void 0?!1:p,o=r.boundary,c=r.rootBoundary,f=r.altBoundary,h=r.padding,y=r.tether,u=y===void 0?!0:y,b=r.tetherOffset,d=b===void 0?0:b,v=st(e,{boundary:o,rootBoundary:c,padding:h,altBoundary:f}),w=S(e.placement),O=tt(e.placement),A=!O,l=Bt(w),m=Ue(l),g=e.modifiersData.popperOffsets,x=e.rects.reference,D=e.rects.popper,P=typeof d=="function"?d(Object.assign({},e.rects,{placement:e.placement})):d,E=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),R=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(g){if(i){var B,X=l==="y"?C:$,I=l==="y"?L:W,j=l==="y"?"height":"width",M=g[l],ct=M+v[X],Y=M-v[I],ut=u?-D[j]/2:0,wt=O===Q?x[j]:D[j],et=O===Q?-D[j]:-x[j],lt=e.elements.arrow,K=u&&lt?Rt(lt):{width:0,height:0},N=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:te(),rt=N[X],vt=N[I],z=at(0,x[j],K[j]),bt=A?x[j]/2-ut-z-rt-E.mainAxis:wt-z-rt-E.mainAxis,oe=A?-x[j]/2+ut+z+vt+E.mainAxis:et+z+vt+E.mainAxis,xt=e.elements.arrow&&pt(e.elements.arrow),ie=xt?l==="y"?xt.clientTop||0:xt.clientLeft||0:0,Tt=(B=R==null?void 0:R[l])!=null?B:0,se=M+bt-Tt-ie,fe=M+oe-Tt,Lt=at(u?gt(ct,se):ct,M,u?G(Y,fe):Y);g[l]=Lt,k[l]=Lt-M}if(s){var Wt,pe=l==="x"?C:$,ce=l==="x"?L:W,U=g[m],dt=m==="y"?"height":"width",kt=U+v[pe],Mt=U-v[ce],Ot=[C,$].indexOf(w)!==-1,St=(Wt=R==null?void 0:R[m])!=null?Wt:0,Ht=Ot?kt:U-x[dt]-D[dt]-St+E.altAxis,Vt=Ot?U+x[dt]+D[dt]-St-E.altAxis:Mt,Nt=u&&Ot?Pe(Ht,U,Vt):at(u?Ht:kt,U,u?Vt:Mt);g[m]=Nt,k[m]=Nt-U}e.modifiersData[n]=k}}const cr={name:"preventOverflow",enabled:!0,phase:"main",fn:Ge,requiresIfExists:["offset"]};function Je(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Ke(t){return t===T(t)||!H(t)?Ct(t):Je(t)}function Qe(t){var e=t.getBoundingClientRect(),r=Z(e.width)/t.offsetWidth||1,n=Z(e.height)/t.offsetHeight||1;return r!==1||n!==1}function Ze(t,e,r){r===void 0&&(r=!1);var n=H(e),a=H(e)&&Qe(e),i=q(e),p=_(t,a,r),s={scrollLeft:0,scrollTop:0},o={x:0,y:0};return(n||!n&&!r)&&((F(e)!=="body"||jt(i))&&(s=Ke(e)),H(e)?(o=_(e,!0),o.x+=e.clientLeft,o.y+=e.clientTop):i&&(o.x=$t(i))),{x:p.left+s.scrollLeft-o.x,y:p.top+s.scrollTop-o.y,width:p.width,height:p.height}}function _e(t){var e=new Map,r=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function a(i){r.add(i.name);var p=[].concat(i.requires||[],i.requiresIfExists||[]);p.forEach(function(s){if(!r.has(s)){var o=e.get(s);o&&a(o)}}),n.push(i)}return t.forEach(function(i){r.has(i.name)||a(i)}),n}function tr(t){var e=_e(t);return Oe.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function er(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function rr(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var Gt={placement:"bottom",modifiers:[],strategy:"absolute"};function Jt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function ur(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,i=a===void 0?Gt:a;return function(s,o,c){c===void 0&&(c=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Gt,i),modifiersData:{},elements:{reference:s,popper:o},attributes:{},styles:{}},h=[],y=!1,u={state:f,setOptions:function(w){var O=typeof w=="function"?w(f.options):w;d(),f.options=Object.assign({},i,f.options,O),f.scrollParents={reference:J(s)?ot(s):s.contextElement?ot(s.contextElement):[],popper:ot(o)};var A=tr(rr([].concat(n,f.options.modifiers)));return f.orderedModifiers=A.filter(function(l){return l.enabled}),b(),u.update()},forceUpdate:function(){if(!y){var w=f.elements,O=w.reference,A=w.popper;if(Jt(O,A)){f.rects={reference:Ze(O,pt(A),f.options.strategy==="fixed"),popper:Rt(A)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(E){return f.modifiersData[E.name]=Object.assign({},E.data)});for(var l=0;l<f.orderedModifiers.length;l++){if(f.reset===!0){f.reset=!1,l=-1;continue}var m=f.orderedModifiers[l],g=m.fn,x=m.options,D=x===void 0?{}:x,P=m.name;typeof g=="function"&&(f=g({state:f,options:D,name:P,instance:u})||f)}}}},update:er(function(){return new Promise(function(v){u.forceUpdate(),v(f)})}),destroy:function(){d(),y=!0}};if(!Jt(s,o))return u;u.setOptions(c).then(function(v){!y&&c.onFirstUpdate&&c.onFirstUpdate(v)});function b(){f.orderedModifiers.forEach(function(v){var w=v.name,O=v.options,A=O===void 0?{}:O,l=v.effect;if(typeof l=="function"){var m=l({state:f,name:w,instance:u,options:A}),g=function(){};h.push(m||g)}})}function d(){h.forEach(function(v){return v()}),h=[]}return u}}export{pr as a,cr as b,ar as c,nr as d,or as e,ir as f,sr as h,fr as o,ur as p};
