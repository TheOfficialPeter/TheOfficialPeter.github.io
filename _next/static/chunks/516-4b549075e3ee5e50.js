(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[516],{4232:function(e,t,i){"use strict";i.d(t,{default:function(){return r.a}});var n=i(4930),r=i.n(n)},4930:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=i(6921);i(3827),i(4090);let r=n._(i(4795));function o(e,t){let i={loading:e=>{let{error:t,isLoading:i,pastDelay:n}=e;return null}};return"function"==typeof e&&(i.loader=e),(0,r.default)({...i,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9721:function(e,t,i){"use strict";function n(e){let{reason:t,children:i}=e;return i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}}),i(9775)},4795:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=i(3827),r=i(4090),o=i(9721);function s(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let l={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},a=function(e){let t={...l,...e},i=(0,r.lazy)(()=>t.loader().then(s)),a=t.loading;function u(e){let s=a?(0,n.jsx)(a,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,n.jsx)(i,{...e}):(0,n.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(i,{...e})});return(0,n.jsx)(r.Suspense,{fallback:s,children:l})}return u.displayName="LoadableComponent",u}},4981:function(e,t,i){"use strict";e.exports=function(e,t){var i=function(){return(i=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function n(e,i,n){var r=t.useRef(i);t.useEffect(function(){r.current=i}),t.useEffect(function(){var t=void 0===n?window:n,i=function(e){return r.current(e)};return null==t||t.addEventListener(e,i),function(){null==t||t.removeEventListener(e,i)}},[e,n])}var r=function(){var e=t.useState({info:"",Android:function(){return null},BlackBerry:function(){return null},IEMobile:function(){return null},iOS:function(){return null},iPad:function(){return null},OperaMini:function(){return null},any:function(){return!1}}),n=e[0],r=e[1];return t.useEffect(function(){if("undefined"!=typeof navigator){var e=navigator.userAgent;r(function(t){return i(i({},t),{info:e,Android:function(){return e.match(/Android/i)},BlackBerry:function(){return e.match(/BlackBerry/i)},IEMobile:function(){return e.match(/IEMobile/i)},iOS:function(){return e.match(/iPhone|iPad|iPod/i)},iPad:function(){return!!(e.match(/Mac/)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)},OperaMini:function(){return e.match(/Opera Mini/i)},any:function(){var e,i,n,r,o;return!!((null===(e=t.Android())||void 0===e?void 0:e.length)||(null===(i=t.BlackBerry())||void 0===i?void 0:i.length)||(null===(n=t.iOS())||void 0===n?void 0:n.length)||t.iPad()||(null===(r=t.OperaMini())||void 0===r?void 0:r.length)||(null===(o=t.IEMobile())||void 0===o?void 0:o.length))}})})}},[]),n};function o(e,t){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];if("function"!=typeof t)throw TypeError("callback must be a function");for(var r=Object(e),o=r.length>>>0,s=i[2],l=0;l<o;l++){var a=r[l];if(t.call(s,a,l,r))return a}}function s(r){var s=r.clickables,l=void 0===s?["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]:s,a=r.children,u=r.color,c=void 0===u?"220, 90, 90":u,h=r.innerScale,f=void 0===h?.6:h,d=r.innerSize,p=void 0===d?8:d,v=r.innerStyle,m=r.outerAlpha,g=void 0===m?.4:m,y=r.outerScale,S=void 0===y?6:y,b=r.outerSize,w=void 0===b?8:b,E=r.outerStyle,k=r.showSystemCursor,z=void 0!==k&&k,x=r.trailingSpeed,O=void 0===x?8:x,C=t.useMemo(function(){return{children:a,color:c,innerScale:f,innerSize:p,innerStyle:v,outerAlpha:g,outerScale:S,outerSize:w,outerStyle:E}},[a,c,f,p,v,g,S,w,E]),T=t.useRef(null),M=t.useRef(null),j=t.useRef(null),R=t.useRef(null),P=t.useState({x:0,y:0}),L=P[0],_=P[1],A=t.useState(!1),W=A[0],N=A[1],I=t.useState(C),B=I[0],D=I[1],F=t.useState(!1),H=F[0],X=F[1],Y=t.useState(!1),q=Y[0],V=Y[1],U=t.useRef(0),J=t.useRef(0),K=t.useCallback(function(e){var t=e.clientX,i=e.clientY;_({x:t,y:i}),null!==M.current&&(M.current.style.top="".concat(i,"px"),M.current.style.left="".concat(t,"px")),U.current=t,J.current=i},[]),Z=t.useCallback(function(e){void 0!==R.current&&(L.x+=(U.current-L.x)/O,L.y+=(J.current-L.y)/O,null!==T.current&&(T.current.style.top="".concat(L.y,"px"),T.current.style.left="".concat(L.x,"px"))),R.current=e,j.current=requestAnimationFrame(Z)},[j]);t.useEffect(function(){return j.current=requestAnimationFrame(Z),function(){null!==j.current&&cancelAnimationFrame(j.current)}},[Z]);var G=function(e,t){return"".concat(parseInt(String(e*t)),"px")},Q=t.useCallback(function(e,t,i){e&&(e.style.height=G(t,i),e.style.width=G(t,i))},[]),$=t.useCallback(function(){return X(!0)},[]),ee=t.useCallback(function(){return X(!1)},[]),et=t.useCallback(function(){return N(!0)},[]),ei=t.useCallback(function(){return N(!1)},[]);n("mousemove",K),n("mousedown",$),n("mouseup",ee),n("mouseover",et),n("mouseout",ei),t.useEffect(function(){H?(Q(M.current,B.innerSize,B.innerScale),Q(T.current,B.outerSize,B.outerScale)):(Q(M.current,B.innerSize,1),Q(T.current,B.outerSize,1))},[B.innerSize,B.innerScale,B.outerSize,B.outerScale,Q,H]),t.useEffect(function(){q&&(Q(M.current,B.innerSize,1.2*B.innerScale),Q(T.current,B.outerSize,1.4*B.outerScale))},[B.innerSize,B.innerScale,B.outerSize,B.outerScale,Q,q]),t.useEffect(function(){null!=M.current&&null!=T.current&&(W?(M.current.style.opacity="1",T.current.style.opacity="1"):(M.current.style.opacity="0",T.current.style.opacity="0"))},[W]),t.useEffect(function(){var e=document.querySelectorAll(l.map(function(e){return"object"==typeof e&&(null==e?void 0:e.target)?e.target:null!=e?e:""}).join(","));return e.forEach(function(e){z||(e.style.cursor="none");var t="object"==typeof l?o(l,function(t){return"object"==typeof t&&e.matches(t.target)}):{},n=i(i({},C),t);e.addEventListener("mouseover",function(){X(!0),D(n)}),e.addEventListener("click",function(){X(!0),V(!1)}),e.addEventListener("mousedown",function(){V(!0)}),e.addEventListener("mouseup",function(){X(!0)}),e.addEventListener("mouseout",function(){X(!1),V(!1),D(C)})}),function(){e.forEach(function(e){var t="object"==typeof l?o(l,function(t){return"object"==typeof t&&e.matches(t.target)}):{},n=i(i({},C),t);e.removeEventListener("mouseover",function(){X(!0),D(n)}),e.removeEventListener("click",function(){X(!0),V(!1)}),e.removeEventListener("mousedown",function(){V(!0)}),e.removeEventListener("mouseup",function(){X(!0)}),e.removeEventListener("mouseout",function(){X(!1),V(!1),D(C)})})}},[H,l,z,C]),t.useEffect(function(){z||(document.body.style.cursor="none")},[z]);var en={zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",borderRadius:"50%",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:"opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"},er={cursorInner:i(i({width:B.children?"auto":B.innerSize,height:B.children?"auto":B.innerSize,backgroundColor:B.children?"transparent":"rgba(".concat(B.color,", 1)")},en),B.innerStyle&&B.innerStyle),cursorOuter:i(i({width:B.outerSize,height:B.outerSize,backgroundColor:"rgba(".concat(B.color,", ").concat(B.outerAlpha,")")},en),B.outerStyle&&B.outerStyle)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:T,style:er.cursorOuter}),e.jsx("div",i({ref:M,style:er.cursorInner},{children:e.jsx("div",i({style:{opacity:B.children?1:0,transition:"opacity 0.3s ease-in-out"}},{children:B.children}))}))]})}return function(t){var n=t.children,o=t.clickables,l=t.color,a=t.innerScale,u=t.innerSize,c=t.innerStyle,h=t.outerAlpha,f=t.outerScale,d=t.outerSize,p=t.outerStyle,v=t.showSystemCursor,m=t.trailingSpeed,g=r();return"undefined"!=typeof navigator&&g.any()?e.jsx(e.Fragment,{}):e.jsx(s,i({clickables:o,color:l,innerScale:a,innerSize:u,innerStyle:c,outerAlpha:h,outerScale:f,outerSize:d,outerStyle:p,showSystemCursor:v,trailingSpeed:m},{children:n}))}}(i(3827),i(4090))},699:function(e,t,i){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=i(4090),r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,s=n.useEffect,l=n.useLayoutEffect,a=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!r(e,i)}catch(e){return!0}}var c=void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var i=t(),n=o({inst:{value:i,getSnapshot:t}}),r=n[0].inst,c=n[1];return l(function(){r.value=i,r.getSnapshot=t,u(r)&&c({inst:r})},[e,i,t]),s(function(){return u(r)&&c({inst:r}),e(function(){u(r)&&c({inst:r})})},[e]),a(i),i};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},220:function(e,t,i){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=i(4090),r=i(2362),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useSyncExternalStore,l=n.useRef,a=n.useEffect,u=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,i,n,r){var h=l(null);if(null===h.current){var f={hasValue:!1,value:null};h.current=f}else f=h.current;var d=s(e,(h=u(function(){function e(e){if(!a){if(a=!0,s=e,e=n(e),void 0!==r&&f.hasValue){var t=f.value;if(r(t,e))return l=t}return l=e}if(t=l,o(s,e))return t;var i=n(e);return void 0!==r&&r(t,i)?t:(s=e,l=i)}var s,l,a=!1,u=void 0===i?null:i;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,i,n,r]))[0],h[1]);return a(function(){f.hasValue=!0,f.value=d},[d]),c(d),d}},2362:function(e,t,i){"use strict";e.exports=i(699)},9292:function(e,t,i){"use strict";e.exports=i(220)},6919:function(e){e.exports={style:{fontFamily:"'__Montserrat_af005a', '__Montserrat_Fallback_af005a'",fontWeight:300,fontStyle:"normal"},className:"__className_af005a"}},5217:function(e,t,i){"use strict";i.d(t,{pi:function(){return A},LZ:function(){return _}});var n,r,o,s,l=i(4090),a=new class{add(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.callbacks.push({callback:e,priority:t}),this.callbacks.sort((e,t)=>e.priority-t.priority),()=>this.remove(e)}remove(e){this.callbacks=this.callbacks.filter(t=>{let{callback:i}=t;return e!==i})}constructor(){this.raf=e=>{requestAnimationFrame(this.raf);let t=e-this.now;this.now=e;for(let i=0;i<this.callbacks.length;i++)this.callbacks[i].callback(e,t)},this.callbacks=[],this.now=performance.now(),requestAnimationFrame(this.raf)}},u=function(e,t,i){var n=null,r=null,o=function(){n&&(clearTimeout(n),r=null,n=null)},s=function(){if(!t)return e.apply(this,arguments);var s=this,l=arguments,a=i&&!n;if(o(),r=function(){e.apply(s,l)},n=setTimeout(function(){if(n=null,!a){var e=r;return r=null,e()}},t),a)return r()};return s.cancel=o,s.flush=function(){var e=r;o(),e&&e()},s};let c=e=>{let t;let i=new Set,n=(e,n)=>{let r="function"==typeof e?e(t):e;if(!Object.is(r,t)){let e=t;t=(null!=n?n:"object"!=typeof r||null===r)?r:Object.assign({},t,r),i.forEach(i=>i(t,e))}},r=()=>t,o={setState:n,getState:r,getInitialState:()=>s,subscribe:e=>(i.add(e),()=>i.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),i.clear()}},s=t=e(n,r,o);return o},h=e=>e?c(e):c;var f=i(9292);let{useDebugValue:d}=l,{useSyncExternalStoreWithSelector:p}=f,v=!1,m=e=>e,g=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?h(e):e,i=(e,i)=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,i=arguments.length>2?arguments[2]:void 0;i&&!v&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),v=!0);let n=p(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,i);return d(n),n})(t,e,i);return Object.assign(i,t),i},y=e=>e?g(e):g;function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}let b=y(e=>({elements:[],addElement:t=>{e(e=>({elements:[...e.elements,t]}))},removeElement:t=>{e(e=>({elements:e.elements.filter(e=>e!==t)}))}})),w={emit(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];for(let t=0,n=this.events[e]||[],r=n.length;t<r;t++)n[t](...i)},events:{},on(e,t){var i;return((i=this.events)[e]||(i[e]=[])).push(t),()=>{var i;this.events[e]=null===(i=this.events[e])||void 0===i?void 0:i.filter(e=>t!==e)}}};function E(){let{ignoreTransform:e=!1,ignoreSticky:t=!0,lazy:i=!1,debounce:n=500,callback:r=()=>{}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[o,s]=(0,l.useState)(),[a,c]=(0,l.useState)({}),h=(0,l.useRef)({}),f=(0,l.useCallback)(e=>{let t=e.borderBoxSize[0].blockSize;h.current.width=e.borderBoxSize[0].inlineSize,h.current.height=t,r(h.current),i||c(S({},h.current))},[i]),[d]=function(){let{lazy:e=!1,debounce:t=500,box:i="border-box",callback:n=()=>{}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=(0,l.useRef)({}),[s,a]=(0,l.useState)({}),[c,h]=(0,l.useState)();(0,l.useEffect)(()=>{if(!c)return;let r=u(t=>{let[i]=t;o.current=i,n(i),e||a(i)},t,!0),s=new ResizeObserver(r);return s.observe(c,{box:i}),()=>{s.disconnect(),r.cancel()}},[c,e,t,i,...r]);let f=(0,l.useCallback)(()=>o.current,[]);return[h,e?f:s]}({lazy:!0,debounce:n,callback:f},[n,f]),p=b(e=>{let{elements:t}=e;return t}),v=(0,l.useCallback)(()=>{let n,s;if(o){if(t&&function e(t){"sticky"===getComputedStyle(t).position&&(t.style.setProperty("position","static"),t.dataset.sticky="true"),t.offsetParent&&e(t.offsetParent)}(o),e)n=function e(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=i+t.offsetTop;return t.offsetParent?e(t.offsetParent,n):n}(o),s=function e(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=i+t.offsetLeft;return t.offsetParent?e(t.offsetParent,n):n}(o);else{let e=o.getBoundingClientRect();n=e.top+function e(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=i+t.scrollTop;return t.offsetParent?e(t.offsetParent,n):n+window.scrollY}(o),s=e.left+function e(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=i+t.scrollLeft;return t.offsetParent?e(t.offsetParent,n):n+window.scrollX}(o)}t&&function e(t){var i;"true"===(null==t||null==(i=t.dataset)?void 0:i.sticky)&&(t.style.removeProperty("position"),t.dataset.sticky="true",delete t.dataset.sticky),t.parentNode&&e(t.parentNode)}(o),h.current.top=n,h.current.left=s,r(h.current),i||c(S({},h.current))}},[e,t,i,o]);(0,l.useEffect)(()=>{let e=u(v,n,!0),t=new ResizeObserver(e);return t.observe(document.body),p.forEach(e=>{t.observe(e)}),()=>{t.disconnect(),e.cancel()}},[p,n,v]);let m=(0,l.useCallback)(()=>h.current,[]);return(0,l.useEffect)(()=>w.on("resize",function(){if(!o)return;let e=o.getBoundingClientRect();h.current.width=e.width,h.current.height=e.height,v()}),[o,v]),[e=>{s(e),d(e)},i?m:a]}function k(e,t,i,n){if("a"===i&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)}function z(e,t,i,n,r){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!r)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?r.call(e,i):r?r.value=i:t.set(e,i),i}function x(e,t,i){return Math.max(e,Math.min(t,i))}E.observe=function(e){b.getState().addElement(e)},E.unobserve=function(e){b.getState().removeElement(e)},E.resize=function(){w.emit("resize")},"function"==typeof SuppressedError&&SuppressedError;class O{advance(e){var t,i,n,r;if(!this.isRunning)return;let o=!1;if(this.lerp)this.value=(i=this.value,n=this.to,(1-(r=1-Math.exp(-(60*this.lerp)*e)))*i+r*n),Math.round(this.value)===this.to&&(this.value=this.to,o=!0);else{this.currentTime+=e;let t=x(0,this.currentTime/this.duration,1),i=(o=t>=1)?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}null===(t=this.onUpdate)||void 0===t||t.call(this,this.value,o),o&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,i){let{lerp:n=.1,duration:r=1,easing:o=e=>e,onStart:s,onUpdate:l}=i;this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=o,this.currentTime=0,this.isRunning=!0,null==s||s(),this.onUpdate=l}}class C{destroy(){var e,t;null===(e=this.wrapperResizeObserver)||void 0===e||e.disconnect(),null===(t=this.contentResizeObserver)||void 0===t||t.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}constructor({wrapper:e,content:t,autoResize:i=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=e,this.content=t,i){var n;let e;let t=(n=this.resize,function(){let t=arguments,i=this;clearTimeout(e),e=setTimeout(function(){n.apply(i,t)},250)});this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(t),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(t),this.contentResizeObserver.observe(this.content)}this.resize()}}class T{emit(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];let r=this.events[e]||[];for(let e=0,t=r.length;e<t;e++)r[e](...i)}on(e,t){var i;return(null===(i=this.events[e])||void 0===i?void 0:i.push(t))||(this.events[e]=[t]),()=>{var i;this.events[e]=null===(i=this.events[e])||void 0===i?void 0:i.filter(e=>t!==e)}}off(e,t){var i;this.events[e]=null===(i=this.events[e])||void 0===i?void 0:i.filter(e=>t!==e)}destroy(){this.events={}}constructor(){this.events={}}}class M{on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}constructor(e,{wheelMultiplier:t=1,touchMultiplier:i=2,normalizeWheel:n=!1}){this.onTouchStart=e=>{let{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})},this.onTouchMove=e=>{let{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.touchMultiplier,r=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:e})},this.onTouchEnd=e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})},this.onWheel=e=>{let{deltaX:t,deltaY:i}=e;this.normalizeWheel&&(t=x(-100,t,100),i=x(-100,i,100)),t*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})},this.element=e,this.wheelMultiplier=t,this.touchMultiplier=i,this.normalizeWheel=n,this.touchStart={x:null,y:null},this.emitter=new T,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}}class j{destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClass("lenis",!1),this.toggleClass("lenis-smooth",!1),this.toggleClass("lenis-scrolling",!1),this.toggleClass("lenis-stopped",!1),this.toggleClass("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(e){let t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e){let{offset:t=0,immediate:i=!1,lock:n=!1,duration:r=this.options.duration,easing:o=this.options.easing,lerp:s=!r&&this.options.lerp,onComplete:l,force:a=!1,programmatic:u=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isStopped&&!this.isLocked||a){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let i;if("string"==typeof e?i=document.querySelector(e):(null==e?void 0:e.nodeType)&&(i=e),i){if(this.options.wrapper!==window){let e=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?e.left:e.top}let n=i.getBoundingClientRect();e=(this.isHorizontal?n.left:n.top)+this.animatedScroll}}if("number"==typeof e){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=x(0,e,this.limit),i)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(null==l||l(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:r,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(e,t)=>{this.isScrolling=!0,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),u&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),null==l||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){var e;return this.options.infinite?(this.animatedScroll%(e=this.limit)+e)%e:this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isSmooth(){return k(this,n,"f")}set isSmooth(e){k(this,n,"f")!==e&&(z(this,n,e,"f"),this.toggleClass("lenis-smooth",e))}get isScrolling(){return k(this,r,"f")}set isScrolling(e){k(this,r,"f")!==e&&(z(this,r,e,"f"),this.toggleClass("lenis-scrolling",e))}get isStopped(){return k(this,o,"f")}set isStopped(e){k(this,o,"f")!==e&&(z(this,o,e,"f"),this.toggleClass("lenis-stopped",e))}get isLocked(){return k(this,s,"f")}set isLocked(e){k(this,s,"f")!==e&&(z(this,s,e,"f"),this.toggleClass("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClass(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:i=e,eventsTarget:l=i,smoothWheel:a=!0,syncTouch:u=!1,syncTouchLerp:c=.075,touchInertiaMultiplier:h=35,duration:f,easing:d=e=>Math.min(1,1.001-Math.pow(2,-10*e)),lerp:p=!f&&.1,infinite:v=!1,orientation:m="vertical",gestureOrientation:g="vertical",touchMultiplier:y=1,wheelMultiplier:S=1,normalizeWheel:b=!1,autoResize:w=!0}={}){n.set(this,!1),r.set(this,!1),o.set(this,!1),s.set(this,!1),this.onVirtualScroll=e=>{let{deltaX:t,deltaY:i,event:n}=e;if(n.ctrlKey)return;let r=n.type.includes("touch"),o=n.type.includes("wheel");if(this.options.syncTouch&&r&&"touchstart"===n.type)return void this.reset();let s="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===t;if(0===t&&0===i||s)return;let l=n.composedPath();if((l=l.slice(0,l.indexOf(this.rootElement))).find(e=>{var t,i,n,s;return(null===(t=e.hasAttribute)||void 0===t?void 0:t.call(e,"data-lenis-prevent"))||r&&(null===(i=e.hasAttribute)||void 0===i?void 0:i.call(e,"data-lenis-prevent-touch"))||o&&(null===(n=e.hasAttribute)||void 0===n?void 0:n.call(e,"data-lenis-prevent-wheel"))||(null===(s=e.classList)||void 0===s?void 0:s.contains("lenis"))}))return;if(this.isStopped||this.isLocked)return void n.preventDefault();if(this.isSmooth=this.options.syncTouch&&r||this.options.smoothWheel&&o,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();n.preventDefault();let a=i;"both"===this.options.gestureOrientation?a=Math.abs(i)>Math.abs(t)?i:t:"horizontal"===this.options.gestureOrientation&&(a=t);let u=r&&this.options.syncTouch,c=r&&"touchend"===n.type&&Math.abs(a)>5;c&&(a=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+a,Object.assign({programmatic:!1},u?{lerp:c?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-e),this.emit()}},window.lenisVersion="1.0.35",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:i,eventsTarget:l,smoothWheel:a,syncTouch:u,syncTouchLerp:c,touchInertiaMultiplier:h,duration:f,easing:d,lerp:p,infinite:v,gestureOrientation:g,orientation:m,touchMultiplier:y,wheelMultiplier:S,normalizeWheel:b,autoResize:w},this.animate=new O,this.emitter=new T,this.dimensions=new C({wrapper:e,content:t,autoResize:w}),this.toggleClass("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=u||a,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll=new M(l,{touchMultiplier:y,wheelMultiplier:S,normalizeWheel:b}),this.virtualScroll.on("scroll",this.onVirtualScroll)}}n=new WeakMap,r=new WeakMap,o=new WeakMap,s=new WeakMap;var R=function(){for(var e,t,i=0,n="",r=arguments.length;i<r;i++)(e=arguments[i])&&(t=function e(t){var i,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(i=0;i<o;i++)t[i]&&(n=e(t[i]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n)}return r}(e))&&(n&&(n+=" "),n+=t);return n};"function"==typeof SuppressedError&&SuppressedError;let P=(0,l.createContext)(),L=y(()=>({}));function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,{lenis:n,addCallback:r,removeCallback:o}=function(){let e=(0,l.useContext)(P),t=L();return null!=e?e:t}();return(0,l.useEffect)(()=>{if(e&&r&&o&&n)return r(e,i),e(n),()=>{o(e)}},[n,r,o,i,...t]),n}let A=(0,l.forwardRef)((e,t)=>{var{children:i,root:n=!1,options:r={},autoRaf:o=!0,rafPriority:s=0,className:u}=e,c=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}(e,["children","root","options","autoRaf","rafPriority","className"]);let h=(0,l.useRef)(),f=(0,l.useRef)(),[d,p]=(0,l.useState)(),v=(0,l.useRef)([]),m=(0,l.useCallback)((e,t)=>{v.current.push({callback:e,priority:t}),v.current.sort((e,t)=>e.priority-t.priority)},[]),g=(0,l.useCallback)(e=>{v.current=v.current.filter(t=>t.callback!==e)},[]);(0,l.useImperativeHandle)(t,()=>({wrapper:h.current,content:f.current,lenis:d}),[d]),(0,l.useEffect)(()=>{let e=new j(Object.assign(Object.assign({},r),!n&&{wrapper:h.current,content:f.current}));return p(e),()=>{e.destroy(),p(void 0)}},[n,JSON.stringify(r)]),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(0,l.useEffect)(()=>{if(e)return a.add(e,t),()=>a.remove(e)},[e,t])}(e=>{o&&(null==d||d.raf(e))},s),(0,l.useEffect)(()=>{n&&d&&L.setState({lenis:d,addCallback:m,removeCallback:g})},[n,d,m,g]);let y=(0,l.useCallback)(e=>{for(let t=0;t<v.current.length;t++)v.current[t].callback(e)},[]);(0,l.useEffect)(()=>(null==d||d.on("scroll",y),()=>{null==d||d.off("scroll",y)}),[d,y]);let S=(0,l.useCallback)(()=>{h.current&&(h.current.className=R(null==d?void 0:d.className,u))},[d,u]);return(0,l.useEffect)(()=>(S(),null==d||d.on("className change",S),()=>{null==d||d.off("className change",S)}),[d,S]),l.createElement(P.Provider,{value:{lenis:d,addCallback:m,removeCallback:g}},n?i:l.createElement("div",Object.assign({ref:h,className:R(null==d?void 0:d.className,u)},c),l.createElement("div",{ref:f},i)))})}}]);