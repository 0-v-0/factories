import{C as c,d as r}from"./__uno-D8LQNY-Y.js";var o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,p=(v,s,a,e)=>{for(var t=e>1?void 0:e?n(s,a):s,i=v.length-1,l;i>=0;i--)(l=v[i])&&(t=(e?l(s,a,t):l(t))||t);return e&&t&&o(s,a,t),t};let d=class extends c{techs=new Set;stats={};connectedCallback(){this.innerHTML='<div class="form-control justify-center"><div class="stats shadow overflow-hidden"><div class="stat place-items-center"><div class="stat-title">游戏时长(s)</div><div class="stat-value">$stats.playTime</div></div><div class="stat place-items-center"><div class="stat-title">已解锁科技</div><div class="stat-value text-primary">$techs.size</div></div><div class="stat place-items-center"><div class="stat-title">累计砍树/挖掘/采石次数</div><div class="stat-value text-info">$stats.totalCollect</div></div></div><div class="stats shadow overflow-hidden"><div class="stat place-items-center"><div class="stat-title">累计建造次数</div><div class="stat-value text-success">$stats.totalBuild</div></div><div class="stat place-items-center"><div class="stat-title">累计升级次数</div><div class="stat-value text-secondary">$stats.totalUpgrade</div></div><div class="stat place-items-center"><div class="stat-title">累计降级/拆除次数</div><div class="stat-value text-error">$stats.totalDestroy</div></div></div></div>',super.connectedCallback()}};d=p([r("game-stats")],d);export{d as GameStats};
