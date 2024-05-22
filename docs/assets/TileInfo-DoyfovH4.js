import{C as b,w as v,d as C}from"./__uno-DeMoJ9bO.js";import{b as w,t as O,j as o,k as K,i as I,o as c,m as s,e as d,q as m}from"./game-DL8LDPfG.js";import{q as p}from"./QTable-Dwi4hISJ.js";import"./CTable-ChbrZXMN.js";import"./DataFilter-cUnYGuqM.js";import"./CPagination-B0mymP4W.js";import"./view-CYZcWMPk.js";var T=Object.defineProperty,y=Object.getOwnPropertyDescriptor,q=(t,e,i,r)=>{for(var n=r>1?void 0:r?y(e,i):e,h=t.length-1,a;h>=0;h--)(a=t[h])&&(n=(r?a(e,i,n):a(n))||n);return r&&n&&T(e,i,n),n};const l=new Map;for(const t of w)l.set(t.id,t);let _=class extends b{get terrain(){return O[o(this.selected)]||""}get vegetation(){const t=this.tile;if((t[0]&7)<2){const e=K[t[1]*3];return e&&O[e]||"无"}return"无"}get temperature(){return(this.tile[1]&15)*2.5-10+"℃"}get humidity(){return(this.tile[1]>>4)*6+5+"%"}get logCount(){const t=this.tile;if((t[0]&7)<2){const e=K[t[1]*3];return Math.max(0,e-10)}return 0}get canDig(){const t=o(this.selected);return t==0||t==1||t==5}get stoneCount(){const t=o(this.selected);return t>1&&t<5?t-1:0}get name(){return this.level?l.get(this.tile[2])?.name:""}get level(){return this.tile[3]&15}_selectKind=!1;get selectKind(){return this._selectKind}set selectKind(t){this._selectKind=t,t&&(this.selectOther=!1)}_selectOther=!1;get selectOther(){return this._selectOther}set selectOther(t){this._selectOther=t,t&&(this.selectKind=!1)}recipes=[];selected=-1;tile;connectedCallback(){v(this,function(){this.data.tile=I(this.selected)}),super.connectedCallback()}upgrade(){const t=this.tile[2];if(this.selectKind)for(let e=0;e<c;e++){const i=s[e*4+3]&15;i&&s[e*4+2]==t&&f(t,i,e)}if(this.selectOther)for(let e=0;e<c;e++){const i=s[e*4+3]&15;i&&s[e*4+2]!=t&&f(s[e*4+2],i,e)}!this.selectKind&&!this.selectOther&&f(t,this.level,this.selected)}downgrade(){const t=this.tile[2];if(this.selectKind)for(let e=0;e<c;e++){const i=s[e*4+3]&15;i&&s[e*4+2]==t&&u(t,i,e)}if(this.selectOther)for(let e=0;e<c;e++){const i=s[e*4+3]&15;i&&s[e*4+2]!=t&&u(s[e*4+2],i,e)}!this.selectKind&&!this.selectOther&&u(t,this.level,this.selected)}destroy(){const t=this.tile[2];if(this.selectKind)for(let e=0;e<c;e++)s[e*4+2]==t&&g(t,e);if(this.selectOther)for(let e=0;e<c;e++)s[e*4+3]&15&&s[e*4+2]!=t&&g(s[e*4+2],e);!this.selectKind&&!this.selectOther&&g(t,this.selected)}felling(){d("原木",this.logCount)}dig(){const t=o(this.selected);d(t==5?"沙子":t?"高岭土":"黏土",1)}quarry(){d("石头",this.stoneCount)}};_=q([C("tile-info")],_);function f(t,e,i){if(e>=10)return;const r=l.get(t),n=1<<e;p({name:"升级"+r.name,desc:"每秒消耗"+m(r.cost,n),slot:i,value:t|e+1<<8,recipeId:r.recipeId,k:n,remainTime:3+e})}function u(t,e,i){if(e<2)return;const r=l.get(t),n=-e;p({name:"降级"+r.name,desc:"每秒获得"+m(r.cost,-n),slot:i,value:t|e-1<<8,recipeId:r.recipeId,k:n,remainTime:2+e})}function g(t,e){const i=l.get(t);p({name:"拆除"+i.name,desc:"每秒获得"+m(i.cost,1),slot:e,value:0,recipeId:i.recipeId,k:-1,remainTime:2})}export{_ as TileInfo};