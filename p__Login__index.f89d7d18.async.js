"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[739],{51950:function(P,h,s){s.r(h),s.d(h,{default:function(){return R}});var C=s(15009),f=s.n(C),m=s(97857),p=s.n(m),S=s(99289),E=s.n(S),B=s(5574),r=s.n(B),e=s(67294),a=s(12805),i=s(1414),u=s(96365),o=s(15867),l=s(67862),n=s(96245),c=s(73935),v=s(99982),t=s(85893),U=function(){var g=(0,a.useModel)("@@initialState"),N=g.initialState,q=g.loading,_=g.refresh,X=g.setInitialState,w=(0,v.useNavigate)(),G=(0,e.useState)(1),Z=r()(G,2),H=Z[0],W=Z[1],K=(0,e.useState)(),A=r()(K,2),Q=A[0],z=A[1];(0,e.useEffect)(function(){console.log(N)},[]);var J=function(){var O=E()(f()().mark(function x(F){var T,D,L,b,M,I,$,y,j;return f()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return T=F.account,D=F.password,d.next=3,(0,l.TD)(T,D);case 3:if(L=d.sent,b=L.data,M=b.success,I=b.message,console.log(M),M!==-1){d.next=11;break}W(M),z(I),d.next=22;break;case 11:return $=L.data.token,console.log("\u767B\u5165\u6210\u529F"),console.log($),d.next=16,localStorage.setItem("token",$);case 16:y=(0,n.Z)($),console.log(y),j=y.user_type,console.log(j),(0,c.flushSync)(function(){X(function(Y){return p()(p()({},Y),{},{user:y})})}),j==="0"?(console.log("\u8DF3\u8F49 \u4E00\u822C\u4F7F\u7528\u8005"),w("/user")):j==="1"&&(console.log("\u8DF3\u8F49 \u9AD8\u7D1A\u4F7F\u7528\u8005"),w("/admin"));case 22:case"end":return d.stop()}},x)}));return function(F){return O.apply(this,arguments)}}(),V=function(x){console.log("Failed:",x)};return(0,t.jsx)("div",{className:"MyPage",children:(0,t.jsx)("div",{className:"wrap_content",children:(0,t.jsxs)("div",{className:"LoginContent",children:[(0,t.jsx)("h1",{style:{marginBottom:"30px",textAlign:"center"},children:"\u5BA2\u6236\u95DC\u4FC2\u7BA1\u7406\u7CFB\u7D71"}),H!==1&&(0,t.jsx)("div",{style:{textAlign:"center",marginBottom:"10px"},children:(0,t.jsx)("span",{style:{color:"red"},children:Q})}),(0,t.jsxs)(i.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},onFinish:J,onFinishFailed:V,autoComplete:"off",children:[(0,t.jsx)(i.Z.Item,{label:"\u5E33\u865F",wrapperCol:{offset:2},name:"account",rules:[{required:!0,message:"\u8ACB\u8F38\u5165\u4F60\u7684\u5E33\u865F"}],children:(0,t.jsx)(u.Z,{})}),(0,t.jsx)(i.Z.Item,{label:"\u5BC6\u78BC",name:"password",wrapperCol:{offset:2},rules:[{required:!0,message:"\u8ACB\u8F38\u5165\u4F60\u7684\u5BC6\u78BC"}],children:(0,t.jsx)(u.Z.Password,{})}),(0,t.jsx)(i.Z.Item,{wrapperCol:{offset:8},children:(0,t.jsx)(o.ZP,{type:"primary",htmlType:"submit",className:"submit_button",children:"\u767B\u5165"})})]})]})})})},R=U},74443:function(P,h,s){s.d(h,{ZP:function(){return E},c4:function(){return m},m9:function(){return B}});var C=s(67294),f=s(29691);const m=["xxl","xl","lg","md","sm","xs"],p=r=>({xs:`(max-width: ${r.screenXSMax}px)`,sm:`(min-width: ${r.screenSM}px)`,md:`(min-width: ${r.screenMD}px)`,lg:`(min-width: ${r.screenLG}px)`,xl:`(min-width: ${r.screenXL}px)`,xxl:`(min-width: ${r.screenXXL}px)`}),S=r=>{const e=r,a=[].concat(m).reverse();return a.forEach((i,u)=>{const o=i.toUpperCase(),l=`screen${o}Min`,n=`screen${o}`;if(!(e[l]<=e[n]))throw new Error(`${l}<=${n} fails : !(${e[l]}<=${e[n]})`);if(u<a.length-1){const c=`screen${o}Max`;if(!(e[n]<=e[c]))throw new Error(`${n}<=${c} fails : !(${e[n]}<=${e[c]})`);const t=`screen${a[u+1].toUpperCase()}Min`;if(!(e[c]<=e[t]))throw new Error(`${c}<=${t} fails : !(${e[c]}<=${e[t]})`)}}),r};function E(){const[,r]=(0,f.Z)(),e=p(S(r));return C.useMemo(()=>{const a=new Map;let i=-1,u={};return{matchHandlers:{},dispatch(o){return u=o,a.forEach(l=>l(u)),a.size>=1},subscribe(o){return a.size||this.register(),i+=1,a.set(i,o),o(u),i},unsubscribe(o){a.delete(o),a.size||this.unregister()},unregister(){Object.keys(e).forEach(o=>{const l=e[o],n=this.matchHandlers[l];n==null||n.mql.removeListener(n==null?void 0:n.listener)}),a.clear()},register(){Object.keys(e).forEach(o=>{const l=e[o],n=v=>{let{matches:t}=v;this.dispatch(Object.assign(Object.assign({},u),{[o]:t}))},c=window.matchMedia(l);c.addListener(n),this.matchHandlers[l]={mql:c,listener:n},n(c)})},responsiveMap:e}},[r])}const B=(r,e)=>{if(e&&typeof e=="object")for(let a=0;a<m.length;a++){const i=m[a];if(r[i]&&e[i]!==void 0)return e[i]}}}}]);
