const __vite__fileDeps=["./BuildingTable-DB0FOSXT.js","./CTable-DTKQdRkb.js","./DataFilter-CFOyiOHr.js","./CPagination-DHKQ7_D7.js","./QTable-BNSEf_qu.js","./game-Dc4kIq-d.js","./view-Cj0vNHUu.js","./ItemTable-BdF_1hyw.js","./RecipeInfo-CB9dO2to.js","./TileInfo-DZSpWpUx.js","./WorldList-U2zt6P3Z.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
const Q=Object.create(null),v=t=>Q[t]||(Q[t]=Function("$e",`with(this){${t}}`)),fe=(t,e)=>n=>customElements.define(t,n,e);function pe(t,e,n=t){const o=t.bindNode(n,{deps:new Set,f:e});return()=>t.$targets.delete(o)}function G(t,e=""){const n=t.split(/\$([_a-z][\w.]*|\{.+?})/is);if(n.length<2)return null;let o="",s=0;for(const r of n)r&&(o+=s?r[0]=="{"?"$"+r:"${this."+r+"}":r),s^=1;return{a:e,deps:new Set,f:v("return`"+o.replace(/\\|`/g,"\\$&")+"`")}}const O=22;let D=new Map;function A(t,e,n,o=0,s){let r;if(o>>>O){const a=e.getAttributeNames?.();if(a){const l=e.getAttribute("c-for");if(l!=null){if(l){const[u,d]=l.split(";"),h=[];A(h,e.content,n,0,e.parentNode),h.e=[d.trim(),...u.split(/\s*,\s*/)],t.push(o,h)}return}t:for(const u of a){const d=e.getAttribute(u);for(const g of n){const w=g(u,d,e,D,s);if(w){D.set(u,w),w.keep||e.removeAttribute(u);continue t}}const h=G(d,u);h&&D.set(u,h)}D.size&&(t.push(o,r=D),D=new Map);const f=e.localName;if(f=="textarea"||customElements.get(f)?.prototype.updateValue)return}}const i=e.shadowRoot;if(i){const a=[];A(a,i,n,0,s),a.s=i,t.push(o,r=a)}let c=e.firstChild;for(c&&!r&&t.push(o),o+=1<<O,o&=-1<<O;c;c=c.nextSibling){if(c.nodeType==1&&A(t,c,n,o,s),c.nodeType==3){const a=G(c.data);a&&t.push(o,a)}o++}}const S=new Map,P=Symbol(),W=new Map,yt=t=>{const e=W.get(t.type);if(e)for(let n=t.target;n instanceof Node;n=n.parentNode){const o=n[e];if(o){o.call(n[P],t);break}}},bt=(t,e,n,o,s)=>{if(t[0]=="@"){t=t.substring(1);const[r,...i]=t.split("."),c=new Set(i),a=c.has("capture"),l=c.has("once"),f={capture:a,once:l,passive:c.has("passive")},u=c.has("away");let d;if(!a&&!l&&s&&r[0]!="$"){d=W.get(r),d||W.set(r,d=Symbol());let h=S.get(t);h||S.set(t,h=new WeakSet);const g=s.getRootNode();h.has(g)||(g.addEventListener(r,yt,f),h.add(g))}return{f(h){const g=this[e]??v(e);d?(h[d]=g,h[P]=this):h.addEventListener(r[0]=="$"?this[r.substring(1)]:r,u?w=>{w.target!=h&&!h.contains(w.target)&&g.call(this,w)}:g.bind(this),f)}}}},R=new WeakSet,wt=(t,e,n,o)=>{if(t=="c-model"||t=="c-model.lazy"){e=e.trim(),o.set(Symbol(),{f(l){l[P]=this}});const s=n.tagName=="SELECT",r=t!="c-model"||s||n.type=="radio"||n.type=="checkbox"?"change":"input";let i=S.get(r);i||S.set(r,i=new WeakSet);const c=v("return "+e),a=Function("$e,$val",`with(this)${e}=$val`);return{deps:new Set,f(l){i.has(l)||(r=="input"&&(l.addEventListener("compositionstart",u=>R.add(u.target)),l.addEventListener("compositionend",u=>R.delete(u.target))),l.addEventListener(r,()=>{if(!R.has(l)){const u=s&&l.multiple?[...l.selectedOptions].map(d=>d.value||d.text):l.type=="checkbox"?l.checked:l.value;a.call(l[P],l,typeof c.call(this,l)=="number"?+u:u)}}),i.add(l));const f=c.call(this,l);if(l.type=="radio")l.checked=f==l.value;else if(l.type=="checkbox")l.checked=f;else if(s)if(l.multiple)for(const u of l.options)u.selected=f.includes(u.value||u.text);else queueMicrotask(()=>l.value=f);else l.value=f}}}},X=Symbol("lastValue"),Et=[wt,(t,e,n)=>{if(t=="c-if"){const o=v("return "+e),s={deps:new Set,f(r){const i=r.parentElement,c=new Comment;i.insertBefore(c,r),(s.f=function(a){const l=o.call(this,a);l!=a[X]&&(a[X]=l,l?(this.mount?.(a),a.isConnected||c.replaceWith(a)):(this.unmount?.(a),a.replaceWith(c)))}).call(this,r)}};return s}if(t=="c-show"){const o=v("return "+e),s=n.style.display;return{deps:new Set,f(r){r.style.display=o.call(this,r)?s:"none"}}}if(t=="c-cloak")return{keep:!0,f(o){o.removeAttribute(t)}};if(t=="c-tp")return{f(o){const s=e&&(e in this?this[e]:o.getRootNode().querySelector(e));s?(s.appendChild(o.content),o.remove()):o.replaceWith(o.content)}}}];function _t(t,e,n){const[o,s,r]=n.e,i=t.$data;let c=i[o];if(!Array.isArray(c))return;const a=e.parentNode,l=e.content,f=l.childNodes.length;e.remove();const u={set:(m,p,y)=>(m[p]=y,t.updateValue(s),t.updateValue(o),!0)},d=[],h=m=>{const p=d[m],y=c[m];typeof y=="object"?p[s]?Object.assign(p[s],y):p[s]=new Proxy({...y},u):(p[s]=y,t.updateValue(s),t.updateValue(o))},g=m=>{if(m){let p=a.childNodes.length/f|0;for(;p<m;++p){const y=document.importNode(l,!0),_=d[p]=Object.create(t);ut(_,_,i),r&&(_[r]=p),h(p),_.bind(n,y),a.appendChild(y)}if(p>m){for(p=(p-m)*f;p--;)a.lastChild.remove();requestIdleCallback(()=>t.unmount(null))}}else a.textContent="",requestIdleCallback(()=>t.unmount(null));d.length=m},w={get:(m,p)=>typeof p=="string"&&+p==p&&d[p]?.[s]||m[p],set(m,p,y){if(p=="length")g(m.length=+y);else if(m[p]=y,typeof p=="string"){const _=+p;_==p&&(_>=d.length?g(_+1):h(_))}return t.updateValue(o),!0}};let $=new Proxy(c,w);Object.defineProperty(t,o,{get:()=>$,set(m){if(m!=$){const p=Math.min(c.length,m.length);c=m;for(let y=0;y<p;y++)$[y]!=m[y]&&h(y);$=new Proxy(c,w),$.length=m.length}},configurable:!0}),g(c.length)}const lt=[bt,(t,e)=>{if(t=="ref")return{f(n){this.$data[e]=n}};if(t[0]=="$"){t=t.substring(1);let n;return{deps:new Set,f(o){if(n){const s=this.data[t];s!=n&&(o.removeAttribute(n),s&&o.setAttribute(s,e))}else n=this.data[t],o.setAttribute(n,e)}}}if(t[0]=="."){t=t.substring(1);const n=v("return "+e);return{deps:new Set,f(o){o[t]=n.call(this,o),o.updateValue?.(t)}}}},(t,e,n,o)=>{if(t[0]==":"){if(t=t.substring(1),!t)return{deps:new Set,f:v(e)};n.removeAttribute(":"+t);let s=`let $v="${n.getAttribute(t)??""}";`;for(const i of e.split(";")){let c=i,a=i;const l=i.indexOf(":");~l&&(c=i.substring(0,l),a=i.substring(l+1)),s+=`if(${a.trim()})$v+=" ${c.trim()}";`}let r=o.get(t);r||o.set(t,r={a:t,deps:new Set}),r.f=v(s+"return $v")}}];globalThis.CYDON_NO_EXTRA||lt.push(...Et);function Y({a:t,n:e,x:n,f:o}){let s;return e.nodeType==3?(s=o.call(n,e.parentNode),s!=e.data&&(e.data=s,!0)):(s=o.call(n,e),t&&s!=e.getAttribute(t)&&!e.setAttribute(t,s))}const T=new WeakMap;function ut(t,e=t,n){let o=T.get(n);o||(o={get:(s,r)=>s[r],set(s,r,i,c){const a=Object.hasOwn(s,r);if(a&&i===s[r])return!0;const l=!a&&n?Reflect.set(n,r,i):Reflect.set(s,r,i,c);return t.updateValue(r),l}},n&&T.set(n,o)),t.data=new Proxy(t.$data=e,o)}const vt=(t=Object)=>{class e extends t{$data;data;$queue=new Map;$targets=new Set;$limits=new Map;$directives=lt;constructor(o,...s){super(...s),ut(this,o)}bind(o,s=this){let r=s,i=0,c=0,a=[];for(let l=1,f=o.length;l<f;++l){let u=o[l];if(typeof u=="object")if(Array.isArray(u))if(u.s){let d=r.shadowRoot;d||(d=r.attachShadow({mode:"open"}),u.s.childNodes.forEach(h=>d.append(h.cloneNode(!0)))),this.bind(u,d)}else{const d=r.parentNode;_t(this,r,u),r=d,c=a.pop(),i--}else if(u.f)this.bindNode(r,u);else for(const[,d]of u)this.bindNode(r,d);else{const d=u>>>22;if(u&=4194303,d>i)a.push(c),c=0,r=r.firstChild,i=d;else for(;d<i;i--)r=r.parentNode,c=a.pop();for(;c<u;c++)r=r.nextSibling}}}bindNode(o,s){const r=Object.create(s);r.n=o;let i;const c=s.deps;return c&&(i=T.get(c),i||T.set(c,i={get(a,l,f){return typeof l=="string"&&c.add(l),Reflect.get(a,l,f)}}),this.$targets.add(r)),r.x=c?new Proxy(this.$data,i):this.data,Y(r),r}mount(o=this){const s=[];A(s,o,this.$directives),this.bind(s,o)}unmount(o=this){const s=this.$targets;for(const r of s){const i=r.n;(o?o.contains(i):!i.isConnected)&&s.delete(r)}}updateValue(o){this.$queue.size||queueMicrotask(()=>this.commit()),this.$queue.set(o,1)}commit(){const o=this.$queue;for(const s of this.$targets)for(const r of s.deps){const i=o.get(r);if(i){Y(s)&&(i==this.$limits.get(r)?o.delete(r):o.set(r,i+1));break}}o.clear()}connectedCallback(){this instanceof Element&&(super.connectedCallback?.(),this.mount())}}return e},he=vt(HTMLElement);class dt extends HTMLElement{timer;messageType;constructor(){super(),this.attachShadow({mode:"open"}).innerHTML=`
		<style>
		:host{
			display:flex;
			visibility:hidden;
			opacity:0;
			pointer-events:all;
			transform: translate(-50%,-100%);
		}
		:host([open]){
			opacity:1;
			visibility:visible;
			transform: translate(-50%,0);
		}
		</style>
		<slot></slot>
		`}get open(){return this.hasAttribute("open")}set open(e){this.toggleAttribute("open",e)}get type(){return this.getAttribute("type")}set type(e){this.setAttribute("type",e)}connectedCallback(){this.messageType=null,this.addEventListener("transitionend",e=>{e.propertyName=="transform"&&!this.open&&(this.remove(),this.dispatchEvent(new CustomEvent("close")))}),this.addEventListener("click",()=>this.open=!1)}}customElements.define("c-message",dt);let I=document.getElementById("message-content");I||(I=document.createElement("div"),I.id="message-content",I.style.cssText="position:fixed; pointer-events:none; left:50%; top:1em; z-index:9999;",document.body.appendChild(I));const xt=()=>{let t;for(const e of I.children){const n=e;if(!n.open){t=n;break}}return t||(t=I.appendChild(new dt)),t.open=!0,t},me=(t="",e=3e3)=>{const n=xt();return n.type="error",n.textContent=t,n.clientWidth,e>=0&&(n.timer=setTimeout(()=>n.open=!1,e)),n},It=function(){const e=typeof document<"u"&&document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Dt=function(t,e){return new URL(t,e).href},J={},b=function(e,n,o){let s=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),c=i?.nonce||i?.getAttribute("nonce");s=Promise.all(n.map(a=>{if(a=Dt(a,o),a in J)return;J[a]=!0;const l=a.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!o)for(let h=r.length-1;h>=0;h--){const g=r[h];if(g.href===a&&(!l||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${f}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":It,l||(d.as="script",d.crossOrigin=""),d.href=a,c&&d.setAttribute("nonce",c),document.head.appendChild(d),l)return new Promise((h,g)=>{d.addEventListener("load",h),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},q=(t,e)=>e.some(n=>t instanceof n);let Z,tt;function Ct(){return Z||(Z=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lt(){return tt||(tt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const F=new WeakMap,V=new WeakMap,N=new WeakMap;function Mt(t){const e=new Promise((n,o)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{n(x(t.result)),s()},i=()=>{o(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)});return N.set(e,t),e}function $t(t){if(F.has(t))return;const e=new Promise((n,o)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{n(),s()},i=()=>{o(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)});F.set(t,e)}let z={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return F.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return x(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ft(t){z=t(z)}function kt(t){return Lt().includes(t)?function(...e){return t.apply(K(this),e),x(this.request)}:function(...e){return x(t.apply(K(this),e))}}function At(t){return typeof t=="function"?kt(t):(t instanceof IDBTransaction&&$t(t),q(t,Ct())?new Proxy(t,z):t)}function x(t){if(t instanceof IDBRequest)return Mt(t);if(V.has(t))return V.get(t);const e=At(t);return e!==t&&(V.set(t,e),N.set(e,t)),e}const K=t=>N.get(t);function St(t,e,{blocked:n,upgrade:o,blocking:s,terminated:r}={}){const i=indexedDB.open(t,e),c=x(i);return o&&i.addEventListener("upgradeneeded",a=>{o(x(i.result),a.oldVersion,a.newVersion,x(i.transaction),a)}),n&&i.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}function Pt(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",o=>e(o.oldVersion,o)),x(n).then(()=>{})}const Tt=["get","getKey","getAll","getAllKeys","count"],Nt=["put","add","delete","clear"],B=new Map;function et(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(B.get(e))return B.get(e);const n=e.replace(/FromIndex$/,""),o=e!==n,s=Nt.includes(n);if(!(n in(o?IDBIndex:IDBObjectStore).prototype)||!(s||Tt.includes(n)))return;const r=async function(i,...c){const a=this.transaction(i,s?"readwrite":"readonly");let l=a.store;return o&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return B.set(e,r),r}ft(t=>({...t,get:(e,n,o)=>et(e,n)||t.get(e,n,o),has:(e,n)=>!!et(e,n)||t.has(e,n)}));const Ot=["continue","continuePrimaryKey","advance"],nt={},U=new WeakMap,pt=new WeakMap,Rt={get(t,e){if(!Ot.includes(e))return t[e];let n=nt[e];return n||(n=nt[e]=function(...o){U.set(this,pt.get(this)[e](...o))}),n}};async function*Vt(...t){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...t)),!e)return;e=e;const n=new Proxy(e,Rt);for(pt.set(n,e),N.set(n,K(e));e;)yield n,e=await(U.get(n)||e.continue()),U.delete(n)}function ot(t,e){return e===Symbol.asyncIterator&&q(t,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&q(t,[IDBIndex,IDBObjectStore])}ft(t=>({...t,get(e,n,o){return ot(e,n)?Vt:t.get(e,n,o)},has(e,n){return ot(e,n)||t.has(e,n)}}));const H="factories",M="saves";let L=await St(H,1,{upgrade(t,e){e<1&&t.createObjectStore(M)}}),ht;function ge(t=!0){return t?(L.close(),Pt(H,{blocked(){console.log(H+": db is in use")}})):L.clear(M)}async function ye(t){ht=await L.get(M,t)}function be(t=10){return L.getAll(M,null,t).catch(()=>[])}async function we(t=ht){const{save:e}=await b(async()=>{const{save:o}=await import("./game-Dc4kIq-d.js").then(s=>s.D);return{save:o}},[],import.meta.url);e&&(t.data.length=0,e());const n={...t};if(t.map){const o=t.mapSize**2;n.map=new Uint8Array(o*2);for(let s=0;s<o;s++)n.map[s<<1]=t.map[s*4+2],n.map[s<<1|1]=t.map[s*4+3]}return n.updated=+new Date,L.put(M,n,t.name)}function Ee(t){return L.delete(M,t)}const Bt=(t,e,n)=>{const o=t[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((s,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})};function mt(t,e){const n=t.shadowRoot;n&&e(n);for(const o of t.children)mt(o,e)}function gt(t,e,n=!0,o=!0){const s=[];return function r(i){for(const c of i.children)r(c);if(i.nodeType==1&&i.matches(":not(:defined)")&&s.push(e(jt(i.getAttribute("is")||i.tagName))),n&&mt(i,r),o)for(const c of i.querySelectorAll("import-html"))c.addEventListener("frag-replace",a=>gt(a.detail,e,n,!0),{once:!0})}(t),Promise.all(s)}const jt=t=>t.replace(/([^-]+)-?/g,(e,n)=>n[0].toUpperCase()+n.substring(1).toLowerCase()),j={common:1,uncommon:.35,rare:.15,epic:.075,legendary:.03,mythic:.012,exotic:.005},Wt=["长生","玉清","清微","元始","上清","禹余","灵宝","太清","大赤","道德","兜率","紫微","太微","禹余","洞玄","大赤","内景","混世","合欢","极乐","欢喜","慈悲","大品","真武","灵宝","神照","星枢","神宝","禅音","异相","巨阙","玲珑","罗烟","如意","太祖","罗汉","大衍","中孚","无色","菩提","普贤","莲华","心意","静禅","光相","达摩","般若","涅槃","灵武","灵悟","坐忘","不念","百合","芙蓉","宝色","灵枢","素问","云环","玉虚","归藏","连山","奇经","奇门","遁甲","霸王","守拙","若愚","太保","璇玑","神机","昆吾","金刚","罗刹","修罗","如意","周天","轮回","潇湘","轩辕","枯荣","雌雄","子母"],qt=["天罡","天师","天府","天照","天仙","天宫","天雷","天火","天宝","天兵","天枢","天魔","天地","地煞","地仙","地宝","幽冥","冥河","日月","古仙","古佛","火焰","火元","神火","烈火","青焰","焰光","寒冰","玄冰","光明","雷电","水火","风雷","雷火","风火","冰火","晶炎"],Ft=["金童","玉女","帝女","素女","星女","游龙","蟠龙","神龙","天龙","火龙","毒龙","狂龙","烛龙","应龙","龙虎","老虎","狮子","狮吼","狮啸","苍狼","野熊","仙鹤","灵鹤","神龟","灵龟","玄龟","灵鳌","灵蛇","金蛇","灵猴","灵猿","仙猿","灵兔","飞燕","麒麟","凤凰","孔雀","鴛鴦","蝴蝶","螳螂","天蝉","燕子","青龙","白虎","朱雀"],zt=["紫云","紫霄","紫府","黄泉","黄竹","金阙","金玉","金身","金砂","青莲","青竹","青花","白云","白虹","白玉","白眉","朱砂","玄武","玄门","玄女","玄天","玄都","黑木","黑石","风雨","花雨","烟雨","霹雳","幻梦","灵丹","莲花","梅花","琼花","梨花","桃花","飞云","柔云","青云","彩云","阴风","寒风","罡风","流星","长风","长春","昇阳","残魂","残虹"],Kt=["素心","素银","紫霞","素光","金霞","金光","赤霄","玄阴","玄冥","玄微","青面"],Ut=["少林","武当","峨眉","昆仑","崆峒","点苍","终南","武夷","哀牢","太行","华山","泰山","嵩山","天山","衡山","恒山","须弥","蓬莱","东海","东华","南海","南华","南斗","西海","西域","北海","北斗"],Ht=["通天","通臂","通身","一字","大力","迷踪","沛然","清净","逍遥","缥缈"],Qt=["无常","无相","无量","无极","无上","无形","无影","无妄","无定","无踪","无为","无涯","无终","无根","虚空","空冥","先天","希夷","混沌","混天","混元","浑元","大荒","大成","太极","太元","太乙","太一","太初","太始","太玄","正气","朝元","归元","归一","一元","一气","一阳","阴阳","紫阳","太阳","纯阳","少阳","太阴","纯阴","少阴","寒阴","二气","两仪","两界","三清","三昧","三生","三世","三才","三元","三危","三尸","四方","四海","四象","五行","五光","五气","五色","五彩","五火","五龙","五阴","五阳","五花","五鬼","五毒","五雷","六合","六弦","六阴","六阳","六丁","六甲","六虚","七星","七宝","七彩","七香","七巧","七弦","七杀","七煞","八卦","八门","八方","八级","八目","八脉","九龙","九天","九转","九阴","九阳","九幽","九宫","九炼","九华","九鼎","九曜","九曲","十方","百花","百灵","百毒","百魔","百仙","百里","百丈","百兽","百鬼","百炼","千机","千钧","千里","万花","万剑","万刃","万仙","万魂","万里"],Gt=["别离","离别","开阖","离合","穿梭","纵横","来去","连环","参合"],Xt=["抱元","守一","炼气","筑基","结丹","分神","合体","炼虚","洞真","洞虚","凌虚","易筋","洗髓","养志","散势","照神","照天","照妖","降魔","驱魔","荡魔","度难","度厄","辟邪","灭神","灭魔","伏虎","吞象","吞星","吸星","移星","摘星","问天","拂云","浮光","浮花","分花","掠影","化影","游身","拂柳","凌云","飞渡","追风","扫霞","听雨","听雪","踏雪","寻梅","葬花","望月","掷灵","缠丝","扫尘","离尘","御风","乘风","弄雾","兴云","消冰","陨玉","碎玉","斩铁","控鹤","定海","定风","定慧","定影","开碑","开弓","开天","开山","劈地","震岳","震山","担山","架海","养气","摧心","炼血","化血","化骨","化脉","化煞","化功","落阳","离梦","绝情","问情","诛佛","戮佛","困佛","泣灵","化灵","叱灵","斩妖","诛妖","戮妖","困妖","锁妖","还魂","化魂","落魂","噬魂","失魂","追魂","断魂","摄魂","勾魂","戮魂","锁魂","封魂","养魂","荡魔","镇魔","伏魔","诛魔","戮魔","困魔","绝魔","锁魔","封魔","养魔","护魔","守魔","伏天","诛天","戮天","困天","绝天","锁天","封天","养天","护天","守天","伏神","诛神","戮神","困神","绝神","锁神","封神","养神","护神","守神","迷仙","伏仙","诛仙","戮仙","困仙","绝仙","锁仙","封仙","养仙","护仙","守仙","擒龙","乘龙","御龙","降龙","伏龙","诛龙","戮龙","困龙","绝龙","锁龙","封龙","养龙","护龙","守龙"],E={dao:Wt,element:qt,creature:Ft,thing:zt,color:Kt,place:Ut,adj:Ht,number:Qt,gesture:Gt,action:Xt},st=["招摇","堂庭","祝余","宪翼","陵居","留牛","箕尾","诸毗","长右","丹粟","尧光","瞿父","句余","浮玉","会稽","列涂","仆勾","咸阴","荆杞","区吴","鹿吴","蛊雕","漆吴","天虞","瞿如","丹穴","发爽","育遗","阳夹","灌湘","仑者","南禺","太华","符禺","大时","嶓冡","皋涂","无条","数斯","泰冒","数历","鹿台","龙首","鸟危","崇吾","博望","不周","蠃母","长留","积石","翼望","上申","诸次","白于","申首","中曲","单狐","肥遗","谯明","涿光","诸怀","领胡","求如","丹熏","边春","单张","灌题","潘侯","浑夕","狐岐","诸余","钩吾","梁渠","姑灌","敦题","龙侯","马成","天池","王屋","孟门","虫尾","彭毗","泰头","发鸠","题首","敦与","维龙","碣石","雁门","卢其","姑射","姑逢","空桑","诸钩","中父","胡射","宜苏","犀渠","蒙木","帝休","嘉荣","马嵬","敖岸","熊耳","鹿蹄","成侯","朝歌","长石","阳华","放皋","婴梁","宜诸","仁举","隅阳","支离","瑶碧","高前","乐马","虎首","丑阳","结匈","厌火","周饶","祝融","灭蒙","奇肱","柔利","勾芒","苍梧","高柳","服常","凤尾","凤麟","聚窟","鲜虞","义渠","陆浑"],Yt=["子","道人"],Jt=["真人","法师"],Zt=["上人","洞主"],te=["教主","真君"],ee=["仙","仙人","仙师","仙翁"],ne=["天尊"],k={uncommon:Yt,rare:Jt,epic:Zt,legendary:te,mythic:ee,exotic:ne},oe=["子","道姑"],se=["真人","法师"],re=["公主","洞主"],ie=["教母","圣女"],ce=["仙","仙子","仙女","圣母"],ae=["娘娘"],C={uncommon:oe,rare:se,epic:re,legendary:ie,mythic:ce,exotic:ae},rt=["景","葛","岐","历","文","岷","涿","盂","崂","申","莱","渤","夷","羽","青","成","渭","竹","浮","英","时","咸","鲜","单","雍","瀛","苗","狄","炎","玄","长","元","晋","越","燕","蓟","安","定","虹","浦","万","朔","兴","宿","亳","池","宣","福","泉","德","宁","景","吉","抚","济","泰","聊","滨","焦","鄂","随","常","淮","惠","梅","潮","柳","钦","贺","琼","泸","乐","眉","丽","庆","夏","栾","广","满","涿","雄","顺","易","容","赤","丰","广","固","冀","平","云","灵","潞","滁","霸","应","洪","蒲","交","岚","扬","荆","凉","益","幽","并","襄","永","辽","巴","清","明","义","梁","信"],it=["阴","阳","东","西","南","北","中","安","平","昌","宁","庆"],ct=["州","县","市","郡","乡","道","府","城","堡","镇","村","庄","驿","营","寨","山","峰","岭","坪","崖","谷","岗","洞","川","坡","观","寺","宫","原","岛","屿","渚","汀","湾","港","渡","津","坞","关","林","湖","潭","池","泊","泽","河","海","江","水"];[...new Set([...k.uncommon,...k.epic,...k.legendary,...k.mythic,...k.exotic,...C.uncommon,...C.rare,...C.epic,...C.legendary,...C.mythic,...C.exotic])];const at=[...E.dao,...E.element,...E.creature,...E.thing,...E.color,...E.place,...E.adj,...E.number,...E.gesture,...E.action];function le(t,e){let n=[];for(let o=0;o<t;++o){let s="",r="",i="common",c=Math.random();if(c<j.rare)s=st[Math.floor(Math.random()*st.length)],i="rare";else if(c<j.uncommon)s=at[Math.floor(Math.random()*at.length)],i="uncommon";else{let a=Math.floor(Math.random()*rt.length),l="";if(Math.random()<j.uncommon){let f=Math.floor(Math.random()*it.length);l=it[f]}s=rt[a]+l}r=ct[Math.floor(Math.random()*ct.length)],n.push({name:s+r,rarity:i})}return n}const _e=(t=document.body)=>gt(t,e=>Bt(Object.assign({"./components/BuildingTable.ts":()=>b(()=>import("./BuildingTable-DB0FOSXT.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./components/CPagination.ts":()=>b(()=>import("./CPagination-DHKQ7_D7.js"),[],import.meta.url),"./components/CTable.ts":()=>b(()=>import("./CTable-DTKQdRkb.js"),__vite__mapDeps([1,2,3]),import.meta.url),"./components/DataFilter.ts":()=>b(()=>import("./DataFilter-CFOyiOHr.js"),[],import.meta.url),"./components/GameStats.ts":()=>b(()=>import("./GameStats-Ccir3fWi.js"),[],import.meta.url),"./components/ItemTable.ts":()=>b(()=>import("./ItemTable-BdF_1hyw.js"),__vite__mapDeps([7,1,2,3,5]),import.meta.url),"./components/QTable.ts":()=>b(()=>import("./QTable-BNSEf_qu.js").then(n=>n.Q),__vite__mapDeps([4,1,2,3,5,6]),import.meta.url),"./components/RecipeInfo.ts":()=>b(()=>import("./RecipeInfo-CB9dO2to.js"),__vite__mapDeps([8,5]),import.meta.url),"./components/TechTree.ts":()=>b(()=>import("./QTable-BNSEf_qu.js").then(n=>n.T),__vite__mapDeps([4,1,2,3,5,6]),import.meta.url),"./components/TileInfo.ts":()=>b(()=>import("./TileInfo-DZSpWpUx.js"),__vite__mapDeps([9,5,4,1,2,3,6]),import.meta.url),"./components/WorldList.ts":()=>b(()=>import("./WorldList-U2zt6P3Z.js"),__vite__mapDeps([10,1,2,3]),import.meta.url),"./components/WorldSettings.ts":()=>b(()=>import("./WorldSettings-DBMp3yLE.js"),[],import.meta.url)}),`./components/${e}.ts`,3)).catch(e=>{console.error(e)}),ve=()=>le(1)[0].name,xe=t=>Math.max(0,t),Ie=t=>t.map(e=>(e*255|0).toString(16).padStart(2,"0")).join("");function ue(t,e){return t.filters?.length&&(e=e.filter(n=>de(t.filters,n))),t.sortKeys.length&&(e=e.sort((n,o)=>{let s=0;for(const{index:r,dir:i}of t.sortKeys){if(i==5)s=Math.random()-.5;else{const c=n[t.keys[r]],a=o[t.keys[r]];s=i>2?a.length-c.length:a-c,i&1&&(s=-s)}if(s)break}return s})),e}function De(t,e,n){n&&(t=ue(n,t)),e.data.total=t.length;const o=e.pageNum-1,s=e.perPage;return t.slice(o*s,o*s+s)}function de(t,e){let n=+!t.length,o=3;for(const s of t){const{key:r,op:i,value:c,conj:a,valid:l}=s;if(l){const f=e[r],u=+(i<2?f+""==c:i<4?typeof f=="number"?f>+c:c.localeCompare(f)<0:i<6?typeof f=="number"?f>=+c:c.localeCompare(f)<=0:i<8?(f+"").includes(c):RegExp(c).test(f))^i&1;o>2?n=u:o==0?n&=u:o==1?n|=u:n^=u}o=a}return n}export{he as C,_e as a,pe as b,ve as c,fe as d,me as e,Ee as f,ge as g,Ie as h,be as i,vt as j,ye as l,De as p,we as s,xe as u,ht as w};