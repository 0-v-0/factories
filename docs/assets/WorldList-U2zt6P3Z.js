import{d,a as m,c as f,s as p,f as r,g as h,p as u,i as w}from"./__uno-B1MfMtFg.js";import{CTable as g}from"./CTable-DTKQdRkb.js";import"./DataFilter-CFOyiOHr.js";import"./CPagination-DHKQ7_D7.js";var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,D=(e,t,o,a)=>{for(var i=a>1?void 0:a?v(t,o):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(i=(a?n(t,o,i):n(i))||i);return a&&i&&y(t,o,i),i};const s=document.querySelector("[is=world-settings]");let c=class extends g{get selectAll(){return this.items.length>0&&this.items.every(e=>e.selected)}set selectAll(e){this.items.forEach(t=>t.selected=e)}get selectedCount(){return this.items.filter(e=>e.selected).length}async connectedCallback(){await m(),super.connectedCallback()}time(e){return new Date(e).toLocaleString()}async create(){const e={name:f(),mode:1,difficulty:1,created:+new Date,updated:0,opts:12,data:[],tasks:[],techs:new Set,stats:{playTime:0,totalCollect:0,totalBuild:0,totalUpgrade:0,totalDestroy:0}};await this.modify(e)&&(this.items.push(e),await p(e),this.load(e))}load(e){sessionStorage.setItem("world",e.name),location.href="./game.html"}modify(e){let t;const o=new Promise(a=>t=a);return Object.assign(s.data,e),s.addEventListener("close",()=>{if(s.name){const a=+new Date;e.name=s.name,e.mode=s.mode,e.difficulty=s.difficulty,e.seed=s.seed,e.mapSize=s.mapSize,e.updated=a}t(s.name)},{once:!0}),s.showModal(),o}del(){if(confirm("确定要删除选中的存档吗？")){for(let e=this.items.length;--e>=0;){const t=this.items[e];t.selected&&(this.items.splice(e,1),r(t.name))}location.reload()}}delPage(){if(confirm("确定要删除当前页的所有存档吗？")){for(const e of this.items)r(e.name);location.reload()}}delAll(){confirm("确定要删除所有存档吗？")&&h().then(()=>{location.reload()})}async updateContents(e,t){this.items=u(await w(),e,t)}};c=D([d("world-list")],c);export{c as WorldList,s as settings};
