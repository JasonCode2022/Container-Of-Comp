const t="login-form";let n=false;let e=false;const s=(t,n="")=>{{return()=>{}}};const o=(t,n)=>{{return()=>{}}};const l="{visibility:hidden}.hydrated{visibility:inherit}";const c={};const i=t=>{t=typeof t;return t==="object"||t==="function"};function f(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const r=(t,n,...e)=>{let s=null;let o=false;let l=false;const c=[];const f=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){f(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!i(s)){s=String(s)}if(o&&l){c[c.length-1].t+=s}else{c.push(o?u(null,s):s)}l=o}}};f(e);if(n){{const t=n.className||n.class;if(t){n.class=typeof t!=="object"?t:Object.keys(t).filter((n=>t[n])).join(" ")}}}const r=u(t,null);r.o=n;if(c.length>0){r.l=c}return r};const u=(t,n)=>{const e={i:0,u:t,t:n,$:null,l:null};{e.o=null}return e};const a={};const d=t=>t&&t.u===a;const $=(t,n)=>{if(t!=null&&!i(t)){return t}return t};const m=t=>Z(t).m;const p=(t,n,e)=>{const s=m(t);return{emit:t=>y(s,n,{bubbles:!!(e&4),composed:!!(e&2),cancelable:!!(e&1),detail:t})}};const y=(t,n,e)=>{const s=rt.ce(n,e);t.dispatchEvent(s);return s};const h=new WeakMap;const b=(t,n,e)=>{let s=ct.get(t);if(at&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}ct.set(t,s)};const w=(t,n,e)=>{var s;const o=v(n);const l=ct.get(o);t=t.nodeType===11?t:ft;if(l){if(typeof l==="string"){t=t.head||t;let n=h.get(t);let e;if(!n){h.set(t,n=new Set)}if(!n.has(o)){{e=ft.createElement("style");e.innerHTML=l;const n=(s=rt.p)!==null&&s!==void 0?s:f(ft);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(o)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return o};const S=t=>{const n=t.h;const e=t.m;const o=s("attachStyles",n.S);w(e.getRootNode(),n);o()};const v=(t,n)=>"sc-"+t.S;const g=(t,n,e,s,o,l)=>{if(e!==s){let c=et(t,n);let f=n.toLowerCase();if(n==="class"){const n=t.classList;const o=k(e);const l=k(s);n.remove(...o.filter((t=>t&&!l.includes(t))));n.add(...l.filter((t=>t&&!o.includes(t))))}else if(n==="ref"){if(s){s(t)}}else if(!c&&n[0]==="o"&&n[1]==="n"){if(n[2]==="-"){n=n.slice(3)}else if(et(it,f)){n=f.slice(2)}else{n=f[2]+n.slice(3)}if(e){rt.rel(t,n,e,false)}if(s){rt.ael(t,n,s,false)}}else{const f=i(s);if((c||f&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(n==="list"){c=false}else if(e==null||t[n]!=o){t[n]=o}}else{t[n]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(n)===""){{t.removeAttribute(n)}}}else if((!c||l&4||o)&&!f){s=s===true?"":s;{t.setAttribute(n,s)}}}}};const j=/\s/;const k=t=>!t?[]:t.split(j);const C=(t,n,e,s)=>{const o=n.$.nodeType===11&&n.$.host?n.$.host:n.$;const l=t&&t.o||c;const i=n.o||c;{for(s in l){if(!(s in i)){g(o,s,l[s],undefined,e,n.i)}}}for(s in i){g(o,s,l[s],i[s],e,n.i)}};const M=(t,e,s,o)=>{const l=e.l[s];let c=0;let i;let f;if(l.t!==null){i=l.$=ft.createTextNode(l.t)}else{i=l.$=ft.createElement(l.u);{C(null,l,n)}if(l.l){for(c=0;c<l.l.length;++c){f=M(t,l,c);if(f){i.appendChild(f)}}}}return i};const O=(t,n,e,s,o,l)=>{let c=t;let i;for(;o<=l;++o){if(s[o]){i=M(null,e,o);if(i){s[o].$=i;c.insertBefore(i,n)}}}};const P=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.$;N(n);if(t){t.remove()}}}};const U=(t,n,e,s)=>{let o=0;let l=0;let c=n.length-1;let i=n[0];let f=n[c];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=c&&l<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--c]}else if(u==null){u=s[++l]}else if(a==null){a=s[--r]}else if(x(i,u)){E(i,u);i=n[++o];u=s[++l]}else if(x(f,a)){E(f,a);f=n[--c];a=s[--r]}else if(x(i,a)){E(i,a);t.insertBefore(i.$,f.$.nextSibling);i=n[++o];a=s[--r]}else if(x(f,u)){E(f,u);t.insertBefore(f.$,i.$);f=n[--c];u=s[++l]}else{{d=M(n&&n[l],e,l);u=s[++l]}if(d){{i.$.parentNode.insertBefore(d,i.$)}}}}if(o>c){O(t,s[r+1]==null?null:s[r+1].$,e,s,l,r)}else if(l>r){P(n,o,c)}};const x=(t,n)=>{if(t.u===n.u){return true}return false};const E=(t,e)=>{const s=e.$=t.$;const o=t.l;const l=e.l;const c=e.t;if(c===null){{{C(t,e,n)}}if(o!==null&&l!==null){U(s,o,e,l)}else if(l!==null){if(t.t!==null){s.textContent=""}O(s,null,e,l,0,l.length-1)}else if(o!==null){P(o,0,o.length-1)}}else if(t.t!==c){s.data=c}};const N=t=>{{t.o&&t.o.ref&&t.o.ref(null);t.l&&t.l.map(N)}};const T=(t,n)=>{const e=t.m;const s=t.v||u(null,null);const o=d(n)?n:r(null,null,n);o.u=null;o.i|=4;t.v=o;o.$=s.$=e;E(s,o)};const A=(t,n)=>{if(n&&!t.g&&n["s-p"]){n["s-p"].push(new Promise((n=>t.g=n)))}};const L=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}A(t,t.j);const e=()=>R(t,n);return bt(e)};const R=(t,n)=>{const e=s("scheduleUpdate",t.h.S);const o=t.k;let l;e();return W(l,(()=>F(t,o,n)))};const W=(t,n)=>q(t)?t.then(n):n();const q=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const F=async(t,n,e)=>{var o;const l=t.m;const c=s("update",t.h.S);const i=l["s-rc"];if(e){S(t)}const f=s("render",t.h.S);{H(t,n)}if(i){i.map((t=>t()));l["s-rc"]=undefined}f();c();{const n=(o=l["s-p"])!==null&&o!==void 0?o:[];const e=()=>I(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const H=(t,n,e)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{T(t,n)}}}}catch(n){st(n,t.m)}return null};const I=t=>{const n=t.h.S;const e=t.m;const o=s("postUpdate",n);const l=t.j;if(!(t.i&64)){t.i|=64;{_(e)}o();{t.C(e);if(!l){V()}}}else{o()}{if(t.g){t.g();t.g=undefined}if(t.i&512){ht((()=>L(t,false)))}t.i&=~(4|512)}};const V=n=>{{_(ft.documentElement)}ht((()=>y(it,"appload",{detail:{namespace:t}})))};const _=t=>t.classList.add("hydrated");const z=(t,n)=>Z(t).M.get(n);const B=(t,n,e,s)=>{const o=Z(t);const l=o.M.get(n);const c=o.i;const i=o.k;e=$(e);const f=Number.isNaN(l)&&Number.isNaN(e);const r=e!==l&&!f;if((!(c&8)||l===undefined)&&r){o.M.set(n,e);if(i){if((c&(2|16))===2){L(o,false)}}}};const D=(t,n,e)=>{if(n.O){const s=Object.entries(n.O);const o=t.prototype;s.map((([t,[n]])=>{if(n&31||e&2&&n&32){Object.defineProperty(o,t,{get(){return z(this,t)},set(n){B(this,t,n)},configurable:true,enumerable:true})}}))}return t};const G=async(t,n,e,l,c)=>{if((n.i&32)===0){n.i|=32;{c=lt(e);if(c.then){const t=o();c=await c;t()}if(!c.isProxied){D(c,e,2);c.isProxied=true}const t=s("createInstance",e.S);{n.i|=8}try{new c(n)}catch(t){st(t)}{n.i&=~8}t()}if(c.style){let t=c.style;const n=v(e);if(!ct.has(n)){const o=s("registerStyles",e.S);b(n,t,!!(e.i&1));o()}}}const i=n.j;const f=()=>L(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const J=t=>{if((rt.i&1)===0){const n=Z(t);const e=n.h;const o=s("connectedCallback",e.S);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){A(n,n.j=e);break}}}{G(t,n,e)}}o()}};const K=t=>{if((rt.i&1)===0){Z(t)}};const Q=(t,n={})=>{var e;const o=s();const c=[];const i=n.exclude||[];const r=it.customElements;const u=ft.head;const a=u.querySelector("meta[charset]");const d=ft.createElement("style");const $=[];let m;let p=true;Object.assign(rt,n);rt.P=new URL(n.resourcesUrl||"./",ft.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],S:n[1],O:n[2],U:n[3]};{e.O=n[2]}const s=e.S;const o=class extends HTMLElement{constructor(t){super(t);t=this;nt(t,e)}connectedCallback(){if(m){clearTimeout(m);m=null}if(p){$.push(this)}else{rt.jmp((()=>J(this)))}}disconnectedCallback(){rt.jmp((()=>K(this)))}componentOnReady(){return Z(this).N}};e.T=t[0];if(!i.includes(s)&&!r.get(s)){c.push(s);r.define(s,D(o,e,1))}}))}));{d.innerHTML=c+l;d.setAttribute("data-styles","");const t=(e=rt.p)!==null&&e!==void 0?e:f(ft);if(t!=null){d.setAttribute("nonce",t)}u.insertBefore(d,a?a.nextSibling:u.firstChild)}p=false;if($.length){$.map((t=>t.connectedCallback()))}else{{rt.jmp((()=>m=setTimeout(V,30)))}}o()};const X=t=>rt.p=t;const Y=new WeakMap;const Z=t=>Y.get(t);const tt=(t,n)=>Y.set(n.k=t,n);const nt=(t,n)=>{const e={i:0,m:t,h:n,M:new Map};{e.N=new Promise((t=>e.C=t));t["s-p"]=[];t["s-rc"]=[]}return Y.set(t,e)};const et=(t,n)=>n in t;const st=(t,n)=>(0,console.error)(t,n);const ot=new Map;const lt=(t,n,e)=>{const s=t.S.replace(/-/g,"_");const o=t.T;const l=ot.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{ot.set(o,t)}return t[s]}),st)};const ct=new Map;const it=typeof window!=="undefined"?window:{};const ft=it.document||{head:{}};const rt={i:0,P:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const ut=t=>Promise.resolve(t);const at=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const dt=[];const $t=[];const mt=(t,n)=>s=>{t.push(s);if(!e){e=true;if(n&&rt.i&4){ht(yt)}else{rt.raf(yt)}}};const pt=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){st(t)}}t.length=0};const yt=()=>{pt(dt);{pt($t);if(e=dt.length>0){rt.raf(yt)}}};const ht=t=>ut().then(t);const bt=mt($t,true);export{Q as b,p as c,r as h,ut as p,tt as r,X as s};
//# sourceMappingURL=p-55b14084.js.map