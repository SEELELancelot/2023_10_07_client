"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[982],{99982:function(_t,Ee,e){e.d(Ee,{NavLink:function(){return Te.OL},useModel:function(){return Ct},useNavigate:function(){return re.s0},useParams:function(){return re.UO}});var Te=e(13854),re=e(20057),en=e(36138),Ae=e(52677),ie=e.n(Ae),Me=e(97857),L=e.n(Me),Ne,_="/";function tn(a){var t;return a.type==="hash"?t=createHashHistory():a.type==="memory"?t=createMemoryHistory(a):t=createBrowserHistory(),a.basename&&(_=a.basename),Ne=_objectSpread(_objectSpread({},t),{},{push:function(n,l){t.push(se(n,t),l)},replace:function(n,l){t.replace(se(n,t),l)},get location(){return t.location},get action(){return t.action}}),t}function se(a,t){if(typeof a=="string")return"".concat(ue(_)).concat(a);if(_typeof(a)==="object"){var o=t.location.pathname;return _objectSpread(_objectSpread({},a),{},{pathname:a.pathname?"".concat(ue(_)).concat(a.pathname):o})}else throw new Error("Unexpected to: ".concat(a))}function ue(a){return a.slice(-1)==="/"?a.slice(0,-1):a}var nn=0,Q=0;function V(a,t){if(!1)var o}function ze(a){return JSON.stringify(a,null,2)}function Y(a){var t=a.length>1?a.map($e).join(" "):a[0];return ie()(t)==="object"?"".concat(ze(t)):t.toString()}function $e(a){return ie()(a)==="object"?"".concat(JSON.stringify(a)):a.toString()}var an={log:function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];V("log",Y(o))},info:function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];V("info",Y(o))},warn:function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];V("warn",Y(o))},error:function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];V("error",Y(o))},group:function(){Q++},groupCollapsed:function(){Q++},groupEnd:function(){Q&&--Q},clear:function(){V("clear")},trace:function(){var t;(t=console).trace.apply(t,arguments)},profile:function(){var t;(t=console).profile.apply(t,arguments)},profileEnd:function(){var t;(t=console).profileEnd.apply(t,arguments)}},Be=e(15009),X=e.n(Be),De=e(99289),ce=e.n(De),be=e(5574),de=e.n(be),M=e(67294),on=e(12805),Ue=e(16055),ln=e(69951),rn=e(44886),sn=null,un=e(85893);function Ke(a){var t=useModel("@@initialState"),o=t.initialState,n=React.useMemo(function(){return accessFactory(o)},[o]);return _jsx(AccessContext.Provider,{value:n,children:a.children})}function cn(a){return _jsx(Ke,{children:a})}var dn=e(13769),Oe=null,ee=null,Fe=function(){return ee||(ee=getPluginManager().applyPlugins({key:"antd",type:ApplyPluginsType.modify,initialValue:_objectSpread({},{theme:{token:{fontSize:18}}})})),ee};function fn(a){var t=Fe(),o=t.appConfig,n=_objectWithoutProperties(t,Oe),l=a;return n.prefixCls&&(Modal.config({rootPrefixCls:n.prefixCls}),message.config({prefixCls:"".concat(n.prefixCls,"-message")}),notification.config({prefixCls:"".concat(n.prefixCls,"-notification")})),n.iconPrefixCls&&ConfigProvider.config({iconPrefixCls:n.iconPrefixCls}),n.theme&&ConfigProvider.config({theme:n.theme}),l=_jsx(ConfigProvider,_objectSpread(_objectSpread({},n),{},{children:l})),l}function He(){return _jsx("div",{})}function vn(a){var t=React.useRef(!1),o=useModel("@@initialState")||{},n=o.loading,l=n===void 0?!1:n;return React.useEffect(function(){l||(t.current=!0)},[l]),l&&!t.current?_jsx(He,{}):a.children}function gn(a){return _jsx(Provider,{children:a})}var hn={};function We(a){return a.replace(a[0],a[0].toUpperCase()).replace(/-(w)/g,function(t,o){return o.toUpperCase()})}function mn(a){var t=a.routes;Object.keys(t).forEach(function(o){var n=t[o].icon;if(n&&typeof n=="string"){var l=We(n);(icons[l]||icons[l+"Outlined"])&&(t[o].icon=React.createElement(icons[l]||icons[l+"Outlined"]))}})}var pn=e(27484),yn=e(54067),Cn=e(25054),Ln=e(96953),Sn=e(83783),Rn=e(76831),Pn=e(57548),In=e(33852),jn=e(43901),Ge=e(48370),Ve=e.n(Ge),xn=e(42473),Ze=e(94355),Je=e(37947),Qe=e(40378),Ye=e(17014),Xe=e(36061),we=e(27282),ke=e(42575),qe=e(95962),_e=e(17239),et=e(26099),tt=e(83258),nt=e(22717),at=e.n(nt),ot=e(37029),lt=e(11542),rt=e(25802),it=e(61709),st=e.n(it),ut=null,Z,fe=!0,ve=new(Ve()),ge=Symbol("LANG_CHANGE"),B={"bn-BD":{messages:L()({},Je.Z),locale:"bn-BD",antd:L()({},Ze.Z),momentLocale:"bn-bd"},"en-US":{messages:L()({},Ye.Z),locale:"en-US",antd:L()({},Qe.Z),momentLocale:"en"},"fa-IR":{messages:L()({},we.Z),locale:"fa-IR",antd:L()({},Xe.Z),momentLocale:"fa"},"id-ID":{messages:L()({},qe.Z),locale:"id-ID",antd:L()({},ke.Z),momentLocale:"id"},"ja-JP":{messages:L()({},et.Z),locale:"ja-JP",antd:L()({},_e.Z),momentLocale:"ja"},"pt-BR":{messages:L()({},at()),locale:"pt-BR",antd:L()({},tt.Z),momentLocale:"pt-br"},"zh-CN":{messages:L()({},lt.Z),locale:"zh-CN",antd:L()({},ot.Z),momentLocale:"zh-cn"},"zh-TW":{messages:L()({},st()),locale:"zh-TW",antd:L()({},rt.Z),momentLocale:"zh-tw"}},En=function(t,o,n){var l,i,r,d;if(t){var u=(l=B[t])!==null&&l!==void 0&&l.messages?Object.assign({},B[t].messages,o):o,s=n||{},c=s.momentLocale,f=c===void 0?(i=B[t])===null||i===void 0?void 0:i.momentLocale:c,g=s.antd,m=g===void 0?(r=B[t])===null||r===void 0?void 0:r.antd:g,v=(d=t.split("-"))===null||d===void 0?void 0:d.join("-");B[t]={messages:u,locale:v,momentLocale:f,antd:m},v===J()&&ve.emit(ge,v)}},he=function(t){return getPluginManager().applyPlugins({key:"locale",type:"modify",initialValue:t})},me=function(t){var o=he(B[t]),n=o.cache,l=_objectWithoutProperties(o,ut);return createIntl(l,n)},ct=function(t,o){return Z&&!o&&!t?Z:(t||(t=J()),t&&B[t]?me(t):(warning(!t||!!B[t],"The current popular language does not exist, please check the locales folder!"),B["zh-TW"]?me("zh-TW"):createIntl({locale:"zh-TW",messages:{}})))},pe=function(t){Z=ct(t,!0)},J=function(){var t=he({});if(typeof(t==null?void 0:t.getLocale)=="function")return t.getLocale();var o=navigator.cookieEnabled&&typeof localStorage!="undefined"&&fe?window.localStorage.getItem("umi_locale"):"",n;return o||n||"zh-TW"},Tn=function(){var t=J(),o=["he","ar","fa","ku"],n=o.filter(function(l){return t.startsWith(l)}).length?"rtl":"ltr";return n},An=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,n=function(){if(J()!==t){if(navigator.cookieEnabled&&typeof window.localStorage!="undefined"&&fe&&window.localStorage.setItem("umi_locale",t||""),pe(t),o)window.location.reload();else if(ve.emit(ge,t),window.dispatchEvent){var i=new Event("languagechange");window.dispatchEvent(i)}}};n()},ye=!0,Mn=function(t,o){return ye&&(warning(!1,`Using this API will cause automatic refresh when switching languages, please use useIntl or injectIntl.

\u4F7F\u7528\u6B64 api \u4F1A\u9020\u6210\u5207\u6362\u8BED\u8A00\u7684\u65F6\u5019\u65E0\u6CD5\u81EA\u52A8\u5237\u65B0\uFF0C\u8BF7\u4F7F\u7528 useIntl \u6216 injectIntl\u3002

http://j.mp/37Fkd5Q
      `),ye=!1),Z||pe(J()),Z.formatMessage(t,o)},Nn=function(){return Object.keys(B)};function zn(){var a=getLocale();if(moment!=null&&moment.locale){var t;moment.locale(((t=localeInfo[a])===null||t===void 0?void 0:t.momentLocale)||"")}setIntl(a)}var dt=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?M.useLayoutEffect:M.useEffect,$n=function(t){var o,n=getLocale(),l=React.useState(n),i=_slicedToArray(l,2),r=i[0],d=i[1],u=React.useState(function(){return getIntl(r,!0)}),s=_slicedToArray(u,2),c=s[0],f=s[1],g=function(y){if(moment!=null&&moment.locale){var E;moment.locale(((E=localeInfo[y])===null||E===void 0?void 0:E.momentLocale)||"en")}d(y),f(getIntl(y))};dt(function(){return event.on(LANG_CHANGE_EVENT,g),function(){event.off(LANG_CHANGE_EVENT,g)}},[]);var m={},v=getDirection();return _jsx(ConfigProvider,{direction:v,locale:((o=localeInfo[r])===null||o===void 0?void 0:o.antd)||m,children:_jsx(RawIntlProvider,{value:c,children:t.children})})};function Bn(a){return React.createElement(_LocaleContainer,null,a)}var ft=e(72004),Ce=e.n(ft),vt=e(12444),Le=e.n(vt),gt=e(9783),H=e.n(gt),ht=e(64063),mt=e.n(ht),Se=M.createContext(null),pt=Ce()(function a(){var t=this;Le()(this,a),H()(this,"callbacks",{}),H()(this,"data",{}),H()(this,"update",function(o){t.callbacks[o]&&t.callbacks[o].forEach(function(n){try{var l=t.data[o];n(l)}catch(i){n(void 0)}})})});function yt(a){var t=a.hook,o=a.onUpdate,n=a.namespace,l=useRef(o),i=useRef(!1),r;try{r=t()}catch(d){console.error("plugin-model: Invoking '".concat(n||"unknown","' model failed:"),d)}return useMemo(function(){l.current(r)},[]),useEffect(function(){i.current?l.current(r):i.current=!0}),null}var te=new pt;function Dn(a){return _jsxs(Se.Provider,{value:{dispatcher:te},children:[Object.keys(a.models).map(function(t){return _jsx(yt,{hook:a.models[t],namespace:t,onUpdate:function(n){te.data[t]=n,te.update(t)}},t)}),a.children]})}function Ct(a,t){var o=(0,M.useContext)(Se),n=o.dispatcher,l=(0,M.useRef)(t);l.current=t;var i=(0,M.useState)(function(){return l.current?l.current(n.data[a]):n.data[a]}),r=de()(i,2),d=r[0],u=r[1],s=(0,M.useRef)(d);s.current=d;var c=(0,M.useRef)(!1);return(0,M.useEffect)(function(){return c.current=!0,function(){c.current=!1}},[]),(0,M.useEffect)(function(){var f,g=function(v){if(!c.current)setTimeout(function(){n.data[a]=v,n.update(a)});else{var P=l.current?l.current(v):v,y=s.current;mt()(P,y)||(s.current=P,u(P))}};return(f=n.callbacks)[a]||(f[a]=new Set),n.callbacks[a].add(g),n.update(a),function(){n.callbacks[a].delete(g)}},[a]),d}var Lt={initialState:void 0,loading:!0,error:void 0},St=function(){var a=(0,M.useState)(Lt),t=de()(a,2),o=t[0],n=t[1],l=(0,M.useCallback)(ce()(X()().mark(function r(){var d;return X()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n(function(c){return L()(L()({},c),{},{loading:!0,error:void 0})}),s.prev=1,s.next=4,(0,Ue.getInitialState)();case 4:d=s.sent,n(function(c){return L()(L()({},c),{},{initialState:d,loading:!1})}),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(1),n(function(c){return L()(L()({},c),{},{error:s.t0,loading:!1})});case 11:case"end":return s.stop()}},r,null,[[1,8]])})),[]),i=(0,M.useCallback)(function(){var r=ce()(X()().mark(function d(u){return X()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:n(function(f){return typeof u=="function"?L()(L()({},f),{},{initialState:u(f.initialState),loading:!1}):L()(L()({},f),{},{initialState:u,loading:!1})});case 1:case"end":return c.stop()}},d)}));return function(d){return r.apply(this,arguments)}}(),[]);return(0,M.useEffect)(function(){l()},[]),L()(L()({},o),{},{refresh:l,setInitialState:i})},bn={model_1:{namespace:"@@initialState",model:St}};function Rt(a){var t=React.useMemo(function(){return Object.keys(rawModels).reduce(function(o,n){return o[rawModels[n].namespace]=rawModels[n].model,o},{})},[]);return _jsx(Provider,_objectSpread(_objectSpread({models:t},a),{},{children:a.children}))}function Un(a,t){return _jsx(Rt,_objectSpread(_objectSpread({},t),{},{children:a}))}var Pt=e(96695),It=e.n(Pt),jt=null,xt=null,Et=M.createContext({}),Tt=Ce()(function a(){var t=this;Le()(this,a),H()(this,"subscriptions",new Set),H()(this,"emit",function(o){var n=It()(t.subscriptions),l;try{for(n.s();!(l=n.n()).done;){var i=l.value;i(o)}}catch(r){n.e(r)}finally{n.f()}}),H()(this,"useSubscription",function(o){function n(l){o&&o(l)}t.subscriptions.add(n)})}),w=new Tt,Re=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t.startsWith("/")?t:"".concat(o.replace(/\/$/,""),"/").concat(t)},At=function(t,o){var n={},l=function i(r,d){for(var u=0;u<r.length;u++){var s=r[u],c=Re(s.path,d);if(matchPath(c==null?void 0:c.toLowerCase(),t==null?void 0:t.toLowerCase())&&!s.isLayout&&s.path!=="*"){n=s;break}s.children&&i(s.children,c)}};return l(o),n},Mt=function(t,o,n){var l=!1;return t.map(function(i){i===o&&(l=!0),i instanceof RegExp&&i.test(o)&&(l=!0),typeof i=="string"&&(i==null?void 0:i.toLowerCase())===(o==null?void 0:o.toLowerCase())&&(l=!0)}),l===!1&&(l=!!n.isKeepalive),n!=null&&n.redirect&&(console.log("redirect"),l=!1),l},Pe=function(t){for(var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Object.entries(o),l=t,i=0,r=n;i<r.length;i++){var d=_slicedToArray(r[i],2),u=d[0],s=d[1];if(matchPath(u==null?void 0:u.toLowerCase(),t==null?void 0:t.toLowerCase())&&u!=="/*"){l=s;break}}return l},Nt=function(t,o){var n={local:{},icon:{}},l=function i(r,d){r.forEach(function(u){var s,c=Re((s=u.path)===null||s===void 0?void 0:s.toLowerCase(),d==null?void 0:d.toLowerCase());if(u.routes)i(u.routes,c);else{var f=_objectSpread(_objectSpread({},u),o[u==null?void 0:u.id]||{});n.local[c]=f.name,n.icon[c]=f.icon}})};return l(t,""),n},Ie="";function Kn(){var a,t,o,n,l,i,r=useLocation();Ie=(a=r.pathname)===null||a===void 0?void 0:a.toLowerCase();var d=useOutlet(),u=useIntl(),s=useModel("@@initialState"),c=s.initialState,f=useAppData(),g=f.clientRoutes,m=f.routes,v=At((t=r.pathname)===null||t===void 0?void 0:t.toLowerCase(),g),P=_objectSpread(_objectSpread({},v),m[v==null?void 0:v.id]||{}),y=function(R){var C,p=Object.keys(j.current);if(p.length===1){message.info("\u81F3\u5C11\u8981\u4FDD\u7559\u4E00\u4E2A\u7A97\u53E3");return}if(D(R==null?void 0:R.toLowerCase()),(R==null?void 0:R.toLowerCase())===((C=Ie)===null||C===void 0?void 0:C.toLowerCase())){var A=p.indexOf(R==null?void 0:R.toLowerCase());E(p[A===0?A+1:A-1])}},E=useNavigate(),U=React.useMemo(function(){var T=getPluginManager().applyPlugins({key:"tabsLayout",type:"modify",initialValue:{initialState:c}});return T!=null&&T.local?T:Nt(g,m)},[c]),$=React.useCallback(function(T){var R,C,p,A,O=T.key;switch(O){case"left":Zt((R=r.pathname)===null||R===void 0?void 0:R.toLowerCase());break;case"right":Jt((C=r.pathname)===null||C===void 0?void 0:C.toLowerCase());break;case"others":Qt((p=r.pathname)===null||p===void 0?void 0:p.toLowerCase());break;case"refresh":Yt((A=r.pathname)===null||A===void 0?void 0:A.toLowerCase());break;default:break}},[r.pathname]),K=U.icon,I=U.local,N=U.initialState,h=_objectWithoutProperties(U,jt),S=React.useContext(Et),x=S.cacheKeyMap,j=S.keepElements,z=S.keepalive,D=S.dropByCacheKey,W=S.tabNameMap,Zt=S.dropLeftTabs,Jt=S.dropRightTabs,Qt=S.dropOtherTabs,Yt=S.refreshTab,aa=S.updateTab;useEffect(function(){var T;w==null||(T=w.useSubscription)===null||T===void 0||T.call(w,function(R){var C,p,A=R.type,O=A===void 0?"":A,G=R.payload,F=G===void 0?{}:G;switch(O){case"dropByCacheKey":D(F==null||(C=F.path)===null||C===void 0?void 0:C.toLowerCase());break;case"closeTab":y(F==null||(p=F.path)===null||p===void 0?void 0:p.toLowerCase());break;default:break}})},[]);var q=Mt(z,(o=r.pathname)===null||o===void 0?void 0:o.toLowerCase(),P);if(q&&!j.current[(n=r.pathname)===null||n===void 0?void 0:n.toLowerCase()]){var oe,Xt=Object.keys(j.current).length,le=Pe(r.pathname,K);typeof le=="string"&&(le="");var wt=Pe(r.pathname,I),kt=u.formatMessage({id:"menu".concat(r.pathname.replaceAll("/",".")),defaultMessage:wt});j.current[(oe=r.pathname)===null||oe===void 0?void 0:oe.toLowerCase()]={children:d,index:Xt,name:kt,icon:le,closable:!0,location:r}}var oa=[{label:u.formatMessage({id:"tabs.close.left",defaultMessage:"\u5173\u95ED\u5DE6\u4FA7"}),icon:_jsx(VerticalRightOutlined,{}),key:"left"},{label:u.formatMessage({id:"tabs.close.right",defaultMessage:"\u5173\u95ED\u53F3\u4FA7"}),icon:_jsx(VerticalLeftOutlined,{}),key:"right"},{label:u.formatMessage({id:"tabs.close.others",defaultMessage:"\u5173\u95ED\u5176\u4ED6"}),icon:_jsx(CloseOutlined,{}),key:"others"},{type:"divider"},{label:u.formatMessage({id:"tabs.refresh",defaultMessage:"\u5237\u65B0"}),icon:_jsx(ReloadOutlined,{}),key:"refresh"}];return _jsxs(_Fragment,{children:[_jsx("div",{className:"runtime-keep-alive-tabs-layout",hidden:!q,children:_jsx(Tabs,_objectSpread(_objectSpread({hideAdd:!0,onChange:function(R){var C=R.split("::")[0],p=j.current[C==null?void 0:C.toLowerCase()].location,A=p.pathname,O=p.hash,G=p.search;E("".concat(A).concat(G).concat(O))},activeKey:"".concat((l=r.pathname)===null||l===void 0?void 0:l.toLowerCase(),"::").concat(W[(i=r.pathname)===null||i===void 0?void 0:i.toLowerCase()]),type:"editable-card",onEdit:function(R){var C=R.split("::")[0];y(C==null?void 0:C.toLowerCase())}},h),{},{items:Object.entries(j.current).map(function(T){var R=_slicedToArray(T,2),C=R[0],p=R[1],A=p.name,O=p.icon,G=p.closable,F=p.children,qt=_objectWithoutProperties(p,xt);return _objectSpread({label:_jsxs(_Fragment,{children:[O,A]}),key:"".concat(C==null?void 0:C.toLowerCase(),"::").concat(W[C==null?void 0:C.toLowerCase()]),closable:Object.entries(j.current).length===1?!1:G},qt)})}))}),Object.entries(j.current).map(function(T){var R,C=_slicedToArray(T,2),p=C[0],A=C[1].children;return _jsx("div",{className:"runtime-keep-alive-layout",style:{height:"100%",width:"100%",position:"relative",overflow:"hidden auto"},hidden:!matchPath((R=r.pathname)===null||R===void 0?void 0:R.toLowerCase(),p==null?void 0:p.toLowerCase()),children:A},"".concat(p==null?void 0:p.toLowerCase(),":").concat(x[p==null?void 0:p.toLowerCase()]||"_"))}),_jsx("div",{hidden:q,style:{height:"100%",width:"100%",position:"relative",overflow:"hidden auto"},className:"runtime-keep-alive-layout-no",children:!q&&d})]})}var zt=function(t){var o=React.useRef({}),n=React.useState({}),l=_slicedToArray(n,2),i=l[0],r=l[1],d=React.useState({}),u=_slicedToArray(d,2),s=u[0],c=u[1],f=React.useState([/user\/insertaccount/,/user\/updatecustomerdata$/,/user\/selectcustomerdata$/,/interview\/inserinterview/,/interview\/updateinterview$/,/interview\/outputrecord$/,/gift\/selectgiftdata$/,/gift\/sendgiftflow$/,/admin\/.+/]),g=_slicedToArray(f,2),m=g[0],v=g[1];function P(I){o.current[I.toLowerCase()]&&(delete o.current[I.toLowerCase()],r(function(N){return _objectSpread(_objectSpread({},N),{},_defineProperty({},I.toLowerCase(),Math.random()))}))}function y(I){var N=o.current[I.toLowerCase()].index,h=Object.entries(o.current).filter(function(S){var x=_slicedToArray(S,2),j=x[0],z=x[1],D=z.index,W=z.closable;return D<N&W});h.forEach(function(S){var x=_slicedToArray(S,1),j=x[0];P(j)}),Object.entries(o.current).forEach(function(S){var x=_slicedToArray(S,2),j=x[0],z=x[1];z.index=z.index-h.length})}function E(I){var N=o.current[I.toLowerCase()].index,h=Object.entries(o.current).filter(function(S){var x=_slicedToArray(S,2),j=x[0],z=x[1],D=z.index,W=z.closable;return D>N&W});h.forEach(function(S){var x=_slicedToArray(S,1),j=x[0];P(j)}),Object.entries(o.current).forEach(function(S,x){var j=_slicedToArray(S,2),z=j[0],D=j[1];D.index=x})}function U(I){var N=o.current[I.toLowerCase()].index;Object.entries(o.current).forEach(function(h){var S=_slicedToArray(h,2),x=S[0],j=S[1],z=j.index,D=j.closable;z!=N&D&&P(x)}),o.current[I.toLowerCase()].index=0}function $(I){r(function(N){return _objectSpread(_objectSpread({},N),{},_defineProperty({},I.toLowerCase(),Math.random()))})}function K(I,N){o.current[I.toLowerCase()]&&(o.current[I.toLowerCase()]=_objectSpread(_objectSpread({},o.current[I.toLowerCase()]),N),c(function(h){return _objectSpread(_objectSpread({},h),{},_defineProperty({},I.toLowerCase(),Math.random()))}))}return _jsx(KeepAliveContext.Provider,_objectSpread({value:{keepalive:m,setKeepalive:v,keepElements:o,cacheKeyMap:i,dropByCacheKey:P,tabNameMap:s,dropLeftTabs:y,dropRightTabs:E,dropOtherTabs:U,refreshTab:$,updateTab:K}},t))};function On(a){return React.createElement(zt,null,a)}function $t(a){return a.default?typeof a.default=="function"?a.default():a.default:a}function Bt(){return[{apply:$t(Plugin_0),path:void 0},{apply:Plugin_1,path:void 0},{apply:Plugin_2,path:void 0},{apply:Plugin_3,path:void 0},{apply:Plugin_4,path:void 0},{apply:Plugin_5,path:void 0},{apply:Plugin_6,path:void 0},{apply:Plugin_7,path:void 0},{apply:Plugin_8,path:void 0}]}function Dt(){return["patchRoutes","patchClientRoutes","modifyContextOpts","modifyClientRenderOpts","rootContainer","innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","render","onRouteChange","antd","getInitialState","layout","locale","qiankun","request","getKeepAlive","tabsLayout","getCustomTabs"]}var ne=null;function Fn(){return ne=PluginManager.create({plugins:Bt(),validKeys:Dt()}),ne}function Hn(){return ne}function Wn(){return ae.apply(this,arguments)}function ae(){return ae=_asyncToGenerator(_regeneratorRuntime().mark(function a(){var t;return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t={1:{path:"/login",name:"login",layout:!1,id:"1"},2:{path:"/user",name:"\u5BA2\u6236\u8CC7\u6599",access:"isUser",layout:!0,parentId:"max-tabs",id:"2"},3:{path:"/user",redirect:"/user/insertAccount",parentId:"2",id:"3"},4:{path:"/user/insertAccount",name:"\u65B0\u589E\u5BA2\u6236\u8CC7\u6599",parentId:"2",id:"4"},5:{path:"/user/UpdateCustomerData",name:"\u4FEE\u6539\u5BA2\u6236\u8CC7\u6599",parentId:"2",id:"5"},6:{path:"/user/selectCustomerData",name:"\u67E5\u8A62\u5BA2\u6236\u8CC7\u6599",parentId:"2",id:"6"},7:{path:"/user/selectCustomerData/:id",parentId:"2",id:"7"},8:{path:"/user/UpdateCustomerData/:id",parentId:"2",id:"8"},9:{path:"/interview",name:"\u5BA2\u6236\u8A2A\u8AC7",access:"isUser",layout:!0,parentId:"max-tabs",id:"9"},10:{path:"/interview/inserInterview",name:"\u65B0\u589E\u8A2A\u8AC7\u8CC7\u6599",parentId:"9",id:"10"},11:{path:"/interview/updateInterview",name:"\u4FEE\u6539\u8A2A\u8AC7\u8CC7\u6599",parentId:"9",id:"11"},12:{path:"/interview/updateInterview/:id",parentId:"9",id:"12"},13:{path:"/interview/outPutRecord",name:"\u7D71\u8A08",parentId:"9",id:"13"},14:{path:"/gift",name:"\u5BA2\u6236\u9001\u79AE",access:"isUser",layout:!0,parentId:"max-tabs",id:"14"},15:{path:"/gift/SelectGiftData",name:"\u67E5\u8A62\u9001\u79AE",parentId:"14",id:"15"},16:{path:"/gift/SendGiftFlow",name:"\u9001\u79AE\u6D41\u7A0B",parentId:"14",id:"16"},17:{path:"/admin",access:"isAdmin",name:"\u7BA1\u7406\u8005",layout:!0,parentId:"max-tabs",id:"17"},18:{path:"/",layout:!1,id:"18"},19:{path:"*",layout:!1,id:"19"},"max-tabs":{id:"max-tabs",path:"/",parentId:"ant-design-pro-layout",isLayout:!0},"ant-design-pro-layout":{id:"ant-design-pro-layout",path:"/",isLayout:!0}},n.abrupt("return",{routes:t,routeComponents:{1:React.lazy(function(){return Promise.all([e.e(366),e.e(414),e.e(862),e.e(982),e.e(739)]).then(e.bind(e,51950))}),2:React.lazy(function(){return e.e(964).then(e.bind(e,30964))}),3:React.lazy(function(){return e.e(964).then(e.bind(e,30964))}),4:React.lazy(function(){return Promise.all([e.e(813),e.e(366),e.e(14),e.e(787),e.e(414),e.e(905),e.e(921),e.e(322),e.e(482),e.e(324),e.e(862),e.e(712)]).then(e.bind(e,32909))}),5:React.lazy(function(){return Promise.all([e.e(813),e.e(366),e.e(14),e.e(787),e.e(414),e.e(905),e.e(921),e.e(322),e.e(482),e.e(862),e.e(526)]).then(e.bind(e,36655))}),6:React.lazy(function(){return Promise.all([e.e(813),e.e(366),e.e(14),e.e(787),e.e(414),e.e(905),e.e(921),e.e(322),e.e(482),e.e(862),e.e(982),e.e(640)]).then(e.bind(e,47498))}),7:React.lazy(function(){return Promise.all([e.e(813),e.e(366),e.e(14),e.e(787),e.e(322),e.e(862),e.e(982),e.e(447)]).then(e.bind(e,19349))}),8:React.lazy(function(){return Promise.all([e.e(813),e.e(366),e.e(14),e.e(787),e.e(414),e.e(905),e.e(921),e.e(322),e.e(482),e.e(554),e.e(324),e.e(862),e.e(982),e.e(816)]).then(e.bind(e,60838))}),9:React.lazy(function(){return e.e(964).then(e.bind(e,30964))}),10:React.lazy(function(){return Promise.all([e.e(813),e.e(366),e.e(14),e.e(787),e.e(414),e.e(905),e.e(921),e.e(322),e.e(482),e.e(862),e.e(982),e.e(323)]).then(e.bind(e,28198))}),11:React.lazy(function(){return Promise.all([e.e(813),e.e(366),e.e(14),e.e(787),e.e(414),e.e(905),e.e(921),e.e(322),e.e(482),e.e(444),e.e(862),e.e(982),e.e(272)]).then(e.bind(e,27913))}),12:React.lazy(function(){return Promise.all([e.e(813),e.e(366),e.e(14),e.e(787),e.e(414),e.e(905),e.e(921),e.e(322),e.e(482),e.e(554),e.e(862),e.e(982),e.e(487)]).then(e.bind(e,42637))}),13:React.lazy(function(){return Promise.all([e.e(813),e.e(366),e.e(14),e.e(787),e.e(414),e.e(905),e.e(921),e.e(322),e.e(482),e.e(444),e.e(252),e.e(862),e.e(515)]).then(e.bind(e,19866))}),14:React.lazy(function(){return e.e(964).then(e.bind(e,30964))}),15:React.lazy(function(){return Promise.all([e.e(813),e.e(366),e.e(14),e.e(414),e.e(862),e.e(83)]).then(e.bind(e,43325))}),16:React.lazy(function(){return Promise.all([e.e(813),e.e(366),e.e(14),e.e(414),e.e(862),e.e(144)]).then(e.bind(e,76363))}),17:React.lazy(function(){return e.e(964).then(e.bind(e,30964))}),18:React.lazy(function(){return Promise.all([e.e(982),e.e(163)]).then(e.bind(e,92750))}),19:React.lazy(function(){return Promise.all([e.e(905),e.e(571)]).then(e.bind(e,9826))}),"max-tabs":React.lazy(function(){return e.e(430).then(e.bind(e,12238))}),"ant-design-pro-layout":React.lazy(function(){return Promise.all([e.e(813),e.e(787),e.e(905),e.e(921),e.e(655),e.e(18)]).then(e.bind(e,64926))})}});case 2:case"end":return n.stop()}},a)})),ae.apply(this,arguments)}var Gn=e(50960),Vn=e(34137),Zn=e(79398),bt="/",Ut=!1;function Jn(a){var t=createPluginManager(),o=useState(void 0),n=_slicedToArray(o,2),l=n[0],i=n[1];if(useEffect(function(){var d=function(){var u=_asyncToGenerator(_regeneratorRuntime().mark(function s(){var c,f,g,m,v,P,y,E;return _regeneratorRuntime().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,getRoutes(t);case 2:return c=$.sent,f=c.routes,g=c.routeComponents,$.next=7,t.applyPlugins({key:"patchRoutes",type:ApplyPluginsType.event,args:{routes:f,routeComponents:g}});case 7:return m=t.applyPlugins({key:"modifyContextOpts",type:ApplyPluginsType.modify,initialValue:{}}),v=m.basename||"/",P=createHistory({type:"memory",basename:v}),y={routes:f,routeComponents:g,pluginManager:t,rootElement:m.rootElement||document.getElementById("root"),publicPath:bt,runtimePublicPath:Ut,history:P,basename:v,components:!0},E=t.applyPlugins({key:"modifyClientRenderOpts",type:ApplyPluginsType.modify,initialValue:y}),$.abrupt("return",E);case 13:case"end":return $.stop()}},s)}));return function(){return u.apply(this,arguments)}}();d().then(function(u){if(i(u),a.location){var s;u==null||(s=u.history)===null||s===void 0||s.push(a.location)}a.historyRef&&(a.historyRef.current=u==null?void 0:u.history)})},[]),l===void 0)return _jsx("div",{id:"loading"});var r=renderClient(l);return _jsx(React.Fragment,{children:_jsx(r,{})})}var Kt=function(){return React.useContext(AccessContext)},Qn=function(t){return _jsx(_Fragment,{children:t.accessible?t.children:t.fallback})},Yn=function(t){var o=Kt(),n=React.useMemo(function(){var l=function i(r,d,u){var s,c,f=r.access,g=r;if(!f&&d&&(f=d,g=u),r.unaccessible=!1,typeof f=="string"){var m=o[f];typeof m=="function"?r.unaccessible=!m(g):typeof m=="boolean"?r.unaccessible=!m:typeof m=="undefined"&&(r.unaccessible=!0)}if((s=r.children)!==null&&s!==void 0&&s.length){var v=!r.children.reduce(function(y,E){return i(E,f,r),y||!E.unaccessible},!1);v&&(r.unaccessible=!0)}if((c=r.routes)!==null&&c!==void 0&&c.length){var P=!r.routes.reduce(function(y,E){return i(E,f,r),y||!E.unaccessible},!1);P&&(r.unaccessible=!0)}return r};return t.map(function(i){return l(i)})},[t.length,o]);return n};function Xn(a){keepaliveEmitter.emit({type:"dropByCacheKey",payload:{path:a}})}function wn(a){keepaliveEmitter.emit({type:"closeTab",payload:{path:a}})}var Ot=null,Ft=null,Ht=function(t){var o=t.overlayClassName,n=_objectWithoutProperties(t,Ot);return _jsx(Dropdown,_objectSpread({overlayClassName:o},n))},kn=function(t){return t.reduce(function(o,n){return n.lang?_objectSpread(_objectSpread({},o),{},_defineProperty({},n.lang,n)):o},{})},Wt={"ar-EG":{lang:"ar-EG",label:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629",icon:"\u{1F1EA}\u{1F1EC}",title:"\u0644\u063A\u0629"},"az-AZ":{lang:"az-AZ",label:"Az\u0259rbaycan dili",icon:"\u{1F1E6}\u{1F1FF}",title:"Dil"},"bg-BG":{lang:"bg-BG",label:"\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0435\u0437\u0438\u043A",icon:"\u{1F1E7}\u{1F1EC}",title:"\u0435\u0437\u0438\u043A"},"bn-BD":{lang:"bn-BD",label:"\u09AC\u09BE\u0982\u09B2\u09BE",icon:"\u{1F1E7}\u{1F1E9}",title:"\u09AD\u09BE\u09B7\u09BE"},"ca-ES":{lang:"ca-ES",label:"Catal\xE1",icon:"\u{1F1E8}\u{1F1E6}",title:"llengua"},"cs-CZ":{lang:"cs-CZ",label:"\u010Ce\u0161tina",icon:"\u{1F1E8}\u{1F1FF}",title:"Jazyk"},"da-DK":{lang:"da-DK",label:"Dansk",icon:"\u{1F1E9}\u{1F1F0}",title:"Sprog"},"de-DE":{lang:"de-DE",label:"Deutsch",icon:"\u{1F1E9}\u{1F1EA}",title:"Sprache"},"el-GR":{lang:"el-GR",label:"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",icon:"\u{1F1EC}\u{1F1F7}",title:"\u0393\u03BB\u03CE\u03C3\u03C3\u03B1"},"en-GB":{lang:"en-GB",label:"English",icon:"\u{1F1EC}\u{1F1E7}",title:"Language"},"en-US":{lang:"en-US",label:"English",icon:"\u{1F1FA}\u{1F1F8}",title:"Language"},"es-ES":{lang:"es-ES",label:"Espa\xF1ol",icon:"\u{1F1EA}\u{1F1F8}",title:"Idioma"},"et-EE":{lang:"et-EE",label:"Eesti",icon:"\u{1F1EA}\u{1F1EA}",title:"Keel"},"fa-IR":{lang:"fa-IR",label:"\u0641\u0627\u0631\u0633\u06CC",icon:"\u{1F1EE}\u{1F1F7}",title:"\u0632\u0628\u0627\u0646"},"fi-FI":{lang:"fi-FI",label:"Suomi",icon:"\u{1F1EB}\u{1F1EE}",title:"Kieli"},"fr-BE":{lang:"fr-BE",label:"Fran\xE7ais",icon:"\u{1F1E7}\u{1F1EA}",title:"Langue"},"fr-FR":{lang:"fr-FR",label:"Fran\xE7ais",icon:"\u{1F1EB}\u{1F1F7}",title:"Langue"},"ga-IE":{lang:"ga-IE",label:"Gaeilge",icon:"\u{1F1EE}\u{1F1EA}",title:"Teanga"},"he-IL":{lang:"he-IL",label:"\u05E2\u05D1\u05E8\u05D9\u05EA",icon:"\u{1F1EE}\u{1F1F1}",title:"\u05E9\u05E4\u05D4"},"hi-IN":{lang:"hi-IN",label:"\u0939\u093F\u0928\u094D\u0926\u0940, \u0939\u093F\u0902\u0926\u0940",icon:"\u{1F1EE}\u{1F1F3}",title:"\u092D\u093E\u0937\u093E: \u0939\u093F\u0928\u094D\u0926\u0940"},"hr-HR":{lang:"hr-HR",label:"Hrvatski jezik",icon:"\u{1F1ED}\u{1F1F7}",title:"Jezik"},"hu-HU":{lang:"hu-HU",label:"Magyar",icon:"\u{1F1ED}\u{1F1FA}",title:"Nyelv"},"hy-AM":{lang:"hu-HU",label:"\u0540\u0561\u0575\u0565\u0580\u0565\u0576",icon:"\u{1F1E6}\u{1F1F2}",title:"\u053C\u0565\u0566\u0578\u0582"},"id-ID":{lang:"id-ID",label:"Bahasa Indonesia",icon:"\u{1F1EE}\u{1F1E9}",title:"Bahasa"},"it-IT":{lang:"it-IT",label:"Italiano",icon:"\u{1F1EE}\u{1F1F9}",title:"Linguaggio"},"is-IS":{lang:"is-IS",label:"\xCDslenska",icon:"\u{1F1EE}\u{1F1F8}",title:"Tungum\xE1l"},"ja-JP":{lang:"ja-JP",label:"\u65E5\u672C\u8A9E",icon:"\u{1F1EF}\u{1F1F5}",title:"\u8A00\u8A9E"},"ku-IQ":{lang:"ku-IQ",label:"\u06A9\u0648\u0631\u062F\u06CC",icon:"\u{1F1EE}\u{1F1F6}",title:"Ziman"},"kn-IN":{lang:"kn-IN",label:"\u0C95\u0CA8\u0CCD\u0CA8\u0CA1",icon:"\u{1F1EE}\u{1F1F3}",title:"\u0CAD\u0CBE\u0CB7\u0CC6"},"ko-KR":{lang:"ko-KR",label:"\uD55C\uAD6D\uC5B4",icon:"\u{1F1F0}\u{1F1F7}",title:"\uC5B8\uC5B4"},"lv-LV":{lang:"lv-LV",label:"Latvie\u0161u valoda",icon:"\u{1F1F1}\u{1F1EE}",title:"Kalba"},"mk-MK":{lang:"mk-MK",label:"\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 \u0458\u0430\u0437\u0438\u043A",icon:"\u{1F1F2}\u{1F1F0}",title:"\u0408\u0430\u0437\u0438\u043A"},"mn-MN":{lang:"mn-MN",label:"\u041C\u043E\u043D\u0433\u043E\u043B \u0445\u044D\u043B",icon:"\u{1F1F2}\u{1F1F3}",title:"\u0425\u044D\u043B"},"ms-MY":{lang:"ms-MY",label:"\u0628\u0647\u0627\u0633 \u0645\u0644\u0627\u064A\u0648\u200E",icon:"\u{1F1F2}\u{1F1FE}",title:"Bahasa"},"nb-NO":{lang:"nb-NO",label:"Norsk",icon:"\u{1F1F3}\u{1F1F4}",title:"Spr\xE5k"},"ne-NP":{lang:"ne-NP",label:"\u0928\u0947\u092A\u093E\u0932\u0940",icon:"\u{1F1F3}\u{1F1F5}",title:"\u092D\u093E\u0937\u093E"},"nl-BE":{lang:"nl-BE",label:"Vlaams",icon:"\u{1F1E7}\u{1F1EA}",title:"Taal"},"nl-NL":{lang:"nl-NL",label:"Vlaams",icon:"\u{1F1F3}\u{1F1F1}",title:"Taal"},"pl-PL":{lang:"pl-PL",label:"Polski",icon:"\u{1F1F5}\u{1F1F1}",title:"J\u0119zyk"},"pt-BR":{lang:"pt-BR",label:"Portugu\xEAs",icon:"\u{1F1E7}\u{1F1F7}",title:"Idiomas"},"pt-PT":{lang:"pt-PT",label:"Portugu\xEAs",icon:"\u{1F1F5}\u{1F1F9}",title:"Idiomas"},"ro-RO":{lang:"ro-RO",label:"Rom\xE2n\u0103",icon:"\u{1F1F7}\u{1F1F4}",title:"Limba"},"ru-RU":{lang:"ru-RU",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",icon:"\u{1F1F7}\u{1F1FA}",title:"\u044F\u0437\u044B\u043A"},"sk-SK":{lang:"sk-SK",label:"Sloven\u010Dina",icon:"\u{1F1F8}\u{1F1F0}",title:"Jazyk"},"sr-RS":{lang:"sr-RS",label:"\u0441\u0440\u043F\u0441\u043A\u0438 \u0458\u0435\u0437\u0438\u043A",icon:"\u{1F1F8}\u{1F1F7}",title:"\u0408\u0435\u0437\u0438\u043A"},"sl-SI":{lang:"sl-SI",label:"Sloven\u0161\u010Dina",icon:"\u{1F1F8}\u{1F1F1}",title:"Jezik"},"sv-SE":{lang:"sv-SE",label:"Svenska",icon:"\u{1F1F8}\u{1F1EA}",title:"Spr\xE5k"},"ta-IN":{lang:"ta-IN",label:"\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",icon:"\u{1F1EE}\u{1F1F3}",title:"\u0BAE\u0BCA\u0BB4\u0BBF"},"th-TH":{lang:"th-TH",label:"\u0E44\u0E17\u0E22",icon:"\u{1F1F9}\u{1F1ED}",title:"\u0E20\u0E32\u0E29\u0E32"},"tr-TR":{lang:"tr-TR",label:"T\xFCrk\xE7e",icon:"\u{1F1F9}\u{1F1F7}",title:"Dil"},"uk-UA":{lang:"uk-UA",label:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",icon:"\u{1F1FA}\u{1F1F0}",title:"\u041C\u043E\u0432\u0430"},"vi-VN":{lang:"vi-VN",label:"Ti\u1EBFng Vi\u1EC7t",icon:"\u{1F1FB}\u{1F1F3}",title:"Ng\xF4n ng\u1EEF"},"zh-CN":{lang:"zh-CN",label:"\u7B80\u4F53\u4E2D\u6587",icon:"\u{1F1E8}\u{1F1F3}",title:"\u8BED\u8A00"},"zh-TW":{lang:"zh-TW",label:"\u7E41\u9AD4\u4E2D\u6587",icon:"\u{1F1ED}\u{1F1F0}",title:"\u8A9E\u8A00"}},qn=function(t){var o,n=t.globalIconClassName,l=t.postLocalesData,i=t.onItemClick,r=t.icon,d=t.style,u=t.reload,s=_objectWithoutProperties(t,Ft),c=useState(function(){return getLocale()}),f=_slicedToArray(c,2),g=f[0],m=f[1],v=function(S){var x=S.key;setLocale(x,u),m(getLocale())},P=getAllLocales().map(function(h){return Wt[h]||{lang:h,label:h,icon:"\u{1F310}",title:h}}),y=(l==null?void 0:l(P))||P,E=i?function(h){return i(h)}:v,U={minWidth:"160px"},$={marginRight:"8px"},K={selectedKeys:[g],onClick:E,items:y.map(function(h){return{key:h.lang||h.key,style:U,label:_jsxs(_Fragment,{children:[_jsx("span",{role:"img","aria-label":(h==null?void 0:h.label)||"en-US",style:$,children:(h==null?void 0:h.icon)||"\u{1F310}"}),(h==null?void 0:h.label)||"en-US"]})}})},I;version.startsWith("5.")||version.startsWith("4.24.")?I={menu:K}:version.startsWith("3.")?I={overlay:_jsx(Menu,{children:K.items.map(function(h){return _jsx(Menu.Item,{onClick:h.onClick,children:h.label},h.key)})})}:I={overlay:_jsx(Menu,_objectSpread({},K))};var N=_objectSpread({cursor:"pointer",padding:"12px",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:18,verticalAlign:"middle"},d);return _jsx(Ht,_objectSpread(_objectSpread(_objectSpread({},I),{},{placement:"bottomRight"},s),{},{children:_jsx("span",{className:n,style:N,children:_jsx("i",{className:"anticon",title:(o=y[g])===null||o===void 0?void 0:o.title,children:r||_jsxs("svg",{viewBox:"0 0 24 24",focusable:"false",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:[_jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),_jsx("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",className:"css-c4d79v"})]})})})}))},_n=e(9669),ea=e(71117),Gt=null;function ta(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return useUmiRequest(a,_objectSpread({formatResult:function(n){return n==null?void 0:n.data},requestMethod:function(n){if(typeof n=="string")return xe(n);if(_typeof(n)==="object"){var l=n.url,i=_objectWithoutProperties(n,Gt);return xe(l,i)}throw new Error("request options error")}},t))}var b,k,je=function(){return k||(k=getPluginManager().applyPlugins({key:"request",type:ApplyPluginsType.modify,initialValue:{}}),k)},Vt=function(){var t,o;if(b)return b;var n=je();return b=axios.create(n),n==null||(t=n.requestInterceptors)===null||t===void 0||t.forEach(function(l){l instanceof Array?b.interceptors.request.use(function(i){var r=i.url;if(l[0].length===2){var d=l[0](r,i),u=d.url,s=d.options;return _objectSpread(_objectSpread({},s),{},{url:u})}return l[0](i)},l[1]):b.interceptors.request.use(function(i){var r=i.url;if(l.length===2){var d=l(r,i),u=d.url,s=d.options;return _objectSpread(_objectSpread({},s),{},{url:u})}return l(i)})}),n==null||(o=n.responseInterceptors)===null||o===void 0||o.forEach(function(l){l instanceof Array?b.interceptors.response.use(l[0],l[1]):b.interceptors.response.use(l)}),b.interceptors.response.use(function(l){var i,r=l.data;return(r==null?void 0:r.success)===!1&&n!==null&&n!==void 0&&(i=n.errorConfig)!==null&&i!==void 0&&i.errorThrower&&n.errorConfig.errorThrower(r),l}),b},xe=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{method:"GET"},n=Vt(),l=je(),i=o.getResponse,r=i===void 0?!1:i,d=o.requestInterceptors,u=o.responseInterceptors,s=d==null?void 0:d.map(function(f){return f instanceof Array?n.interceptors.request.use(function(g){var m=g.url;if(f[0].length===2){var v=f[0](m,g),P=v.url,y=v.options;return _objectSpread(_objectSpread({},y),{},{url:P})}return f[0](g)},f[1]):n.interceptors.request.use(function(g){var m=g.url;if(f.length===2){var v=f(m,g),P=v.url,y=v.options;return _objectSpread(_objectSpread({},y),{},{url:P})}return f(g)})}),c=u==null?void 0:u.map(function(f){return f instanceof Array?n.interceptors.response.use(f[0],f[1]):n.interceptors.response.use(f)});return new Promise(function(f,g){n.request(_objectSpread(_objectSpread({},o),{},{url:t})).then(function(m){s==null||s.forEach(function(v){n.interceptors.request.eject(v)}),c==null||c.forEach(function(v){n.interceptors.response.eject(v)}),f(r?m:m.data)}).catch(function(m){s==null||s.forEach(function(y){n.interceptors.request.eject(y)}),c==null||c.forEach(function(y){n.interceptors.response.eject(y)});try{var v,P=l==null||(v=l.errorConfig)===null||v===void 0?void 0:v.errorHandler;P&&P(m,o,l)}catch(y){g(y)}g(m)})})},na=function(){}}}]);
