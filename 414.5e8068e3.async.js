"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[414],{1414:function(Ct,lt,a){a.d(lt,{Z:function(){return kt}});var A=a(74902),Ge=a(94184),B=a.n(Ge),fe=a(82225),o=a(67294),We=a(33603),I=a(65223);function Fe(e){const[t,n]=o.useState(e);return o.useEffect(()=>{const r=setTimeout(()=>{n(e)},e.length?0:10);return()=>{clearTimeout(r)}},[e]),t}var s=a(14747),f=a(50438),T=a(33507),K=a(45503),w=a(67968),Q=e=>{const{componentCls:t}=e,n=`${t}-show-help`,r=`${t}-show-help-item`;return{[n]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,["&-active"]:{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}};const M=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},label:{fontSize:e.fontSize},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},[`input[type='file']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus`]:{outline:0,boxShadow:`0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),X=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},Ze=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},(0,s.Wf)(e)),M(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},X(e,e.controlHeightSM)),"&-large":Object.assign({},X(e,e.controlHeightLG))})}},it=e=>{const{formItemCls:t,iconCls:n,componentCls:r,rootPrefixCls:l,labelRequiredMarkColor:i,labelColor:c,labelFontSize:h,labelHeight:m,labelColonMarginInlineStart:u,labelColonMarginInlineEnd:v,itemMarginBottom:g}=e;return{[t]:Object.assign(Object.assign({},(0,s.Wf)(e)),{marginBottom:g,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden.${l}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:`${e.lineHeight} - 0.25em`,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:m,color:c,fontSize:h,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:i,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:u,marginInlineEnd:v},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{["--ant-display"]:"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${l}-col-'"]):not([class*="' ${l}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:f.kr,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},at=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},Ke=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:0,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,
        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},U=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),D=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:U(e),[t]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},ge=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${t}-vertical`]:{[n]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${t}-item-control`]:{width:"100%"}}},[`${t}-vertical ${n}-label,
      .${r}-col-24${n}-label,
      .${r}-col-xl-24${n}-label`]:U(e),[`@media (max-width: ${e.screenXSMax}px)`]:[D(e),{[t]:{[`.${r}-col-xs-24${n}-label`]:U(e)}}],[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{[`.${r}-col-sm-24${n}-label`]:U(e)}},[`@media (max-width: ${e.screenMDMax}px)`]:{[t]:{[`.${r}-col-md-24${n}-label`]:U(e)}},[`@media (max-width: ${e.screenLGMax}px)`]:{[t]:{[`.${r}-col-lg-24${n}-label`]:U(e)}}}},ce=(e,t)=>(0,K.TS)(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t});var le=(0,w.Z)("Form",(e,t)=>{let{rootPrefixCls:n}=t;const r=ce(e,n);return[Ze(r),it(r),Q(r),at(r),Ke(r),ge(r),(0,T.Z)(r),f.kr]},e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0}),{order:-1e3});const de=[];function ie(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${r}`,error:e,errorStatus:n}}var he=e=>{let{help:t,helpStatus:n,errors:r=de,warnings:l=de,className:i,fieldId:c,onVisibleChanged:h}=e;const{prefixCls:m}=o.useContext(I.Rk),u=`${m}-item-explain`,[,v]=le(m),g=(0,o.useMemo)(()=>(0,We.Z)(m),[m]),N=Fe(r),F=Fe(l),P=o.useMemo(()=>t!=null?[ie(t,"help",n)]:[].concat((0,A.Z)(N.map((R,$)=>ie(R,"error","error",$))),(0,A.Z)(F.map((R,$)=>ie(R,"warning","warning",$)))),[t,n,N,F]),j={};return c&&(j.id=`${c}_help`),o.createElement(fe.ZP,{motionDeadline:g.motionDeadline,motionName:`${m}-show-help`,visible:!!P.length,onVisibleChanged:h},R=>{const{className:$,style:d}=R;return o.createElement("div",Object.assign({},j,{className:B()(u,$,i,v),style:d,role:"alert"}),o.createElement(fe.V4,Object.assign({keys:P},(0,We.Z)(m),{motionName:`${m}-show-help-item`,component:!1}),C=>{const{key:S,error:y,errorStatus:x,className:W,style:Z}=C;return o.createElement("div",{key:S,className:B()(W,{[`${u}-${x}`]:x}),style:Z},y)}))})},J=a(43589),pe=a(53124),be=a(98866),Qe=a(97647),Ye=a(98675),Ue=a(17423);const Je=["parentNode"],q="form_item";function V(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Oe(e,t){if(!e.length)return;const n=e.join("_");return t?`${t}_${n}`:Je.includes(n)?`${q}_${n}`:n}function ee(e,t,n,r,l,i){let c=r;return i!==void 0?c=i:n.validating?c="validating":e.length?c="error":t.length?c="warning":(n.touched||l&&n.validated)&&(c="success"),c}function b(e){return V(e).join("_")}function ve(e){const[t]=(0,J.cI)(),n=o.useRef({}),r=o.useMemo(()=>e!=null?e:Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:l=>i=>{const c=b(l);i?n.current[c]=i:delete n.current[c]}},scrollToField:function(l){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const c=V(l),h=Oe(c,r.__INTERNAL__.name),m=h?document.getElementById(h):null;m&&(0,Ue.Z)(m,Object.assign({scrollMode:"if-needed",block:"nearest"},i))},getFieldInstance:l=>{const i=b(l);return n.current[i]}}),[e,t]);return[r]}var Me=a(37920),Ne=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};const ze=(e,t)=>{const n=o.useContext(be.Z),{getPrefixCls:r,direction:l,form:i}=o.useContext(pe.E_),{prefixCls:c,className:h,rootClassName:m,size:u,disabled:v=n,form:g,colon:N,labelAlign:F,labelWrap:P,labelCol:j,wrapperCol:R,hideRequiredMark:$,layout:d="horizontal",scrollToFirstError:C,requiredMark:S,onFinishFailed:y,name:x,style:W,feedbackIcons:Z}=e,se=Ne(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons"]),Y=(0,Ye.Z)(u),$e=o.useContext(Me.Z),_=(0,o.useMemo)(()=>S!==void 0?S:i&&i.requiredMark!==void 0?i.requiredMark:!$,[$,S,i]),me=N!=null?N:i==null?void 0:i.colon,O=r("form",c),[De,z]=le(O),Be=B()(O,`${O}-${d}`,{[`${O}-hide-required-mark`]:_===!1,[`${O}-rtl`]:l==="rtl",[`${O}-${Y}`]:Y},z,i==null?void 0:i.className,h,m),[ne]=ve(g),{__INTERNAL__:tt}=ne;tt.name=x;const Se=(0,o.useMemo)(()=>({name:x,labelAlign:F,labelCol:j,labelWrap:P,wrapperCol:R,vertical:d==="vertical",colon:me,requiredMark:_,itemRef:tt.itemRef,form:ne,feedbackIcons:Z}),[x,F,j,R,d,me,_,ne,Z]);o.useImperativeHandle(t,()=>ne);const Ve=(re,oe)=>{if(re){let E={block:"nearest"};typeof re=="object"&&(E=re),ne.scrollToField(oe,E)}},st=re=>{if(y==null||y(re),re.errorFields.length){const oe=re.errorFields[0].name;if(C!==void 0){Ve(C,oe);return}i&&i.scrollToFirstError!==void 0&&Ve(i.scrollToFirstError,oe)}};return De(o.createElement(be.n,{disabled:v},o.createElement(Qe.q,{size:Y},o.createElement(I.RV,{validateMessages:$e},o.createElement(I.q3.Provider,{value:Se},o.createElement(J.ZP,Object.assign({id:x},se,{name:x,onFinishFailed:st,form:ne,style:Object.assign(Object.assign({},i==null?void 0:i.style),W),className:Be})))))))};var Pe=o.forwardRef(ze),je=a(30470),ye=a(42550),Ce=a(96159),Re=a(27288),Le=a(50344);function te(e){if(typeof e=="function")return e;const t=(0,Le.Z)(e);return t.length<=1?t[0]:t}const k=()=>{const{status:e,errors:t=[],warnings:n=[]}=(0,o.useContext)(I.aM);return{status:e,errors:t,warnings:n}};k.Context=I.aM;var Te=k,xe=a(75164);function He(e){const[t,n]=o.useState(e),r=(0,o.useRef)(null),l=(0,o.useRef)([]),i=(0,o.useRef)(!1);o.useEffect(()=>(i.current=!1,()=>{i.current=!0,xe.Z.cancel(r.current),r.current=null}),[]);function c(h){i.current||(r.current===null&&(l.current=[],r.current=(0,xe.Z)(()=>{r.current=null,n(m=>{let u=m;return l.current.forEach(v=>{u=v(u)}),u})})),l.current.push(h))}return[t,c]}function Ae(){const{itemRef:e}=o.useContext(I.q3),t=o.useRef({});function n(r,l){const i=l&&typeof l=="object"&&l.ref,c=r.join("_");return(t.current.name!==c||t.current.originRef!==i)&&(t.current.name=c,t.current.originRef=i,t.current.ref=(0,ye.sQ)(e(r),i)),t.current.ref}return n}var _e=a(5110),et=a(8410),xt=a(98423),$t=a(92820),ut=a(21584);const St=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}};var It=(0,w.b)(["Form","item-item"],(e,t)=>{let{rootPrefixCls:n}=t;const r=ce(e,n);return[St(r)]}),Et=e=>{const{prefixCls:t,status:n,wrapperCol:r,children:l,errors:i,warnings:c,_internalItemRender:h,extra:m,help:u,fieldId:v,marginBottom:g,onErrorVisibleChanged:N}=e,F=`${t}-item`,P=o.useContext(I.q3),j=r||P.wrapperCol||{},R=B()(`${F}-control`,j.className),$=o.useMemo(()=>Object.assign({},P),[P]);delete $.labelCol,delete $.wrapperCol;const d=o.createElement("div",{className:`${F}-control-input`},o.createElement("div",{className:`${F}-control-input-content`},l)),C=o.useMemo(()=>({prefixCls:t,status:n}),[t,n]),S=g!==null||i.length||c.length?o.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},o.createElement(I.Rk.Provider,{value:C},o.createElement(he,{fieldId:v,errors:i,warnings:c,help:u,helpStatus:n,className:`${F}-explain-connected`,onVisibleChanged:N})),!!g&&o.createElement("div",{style:{width:0,height:g}})):null,y={};v&&(y.id=`${v}_extra`);const x=m?o.createElement("div",Object.assign({},y,{className:`${F}-extra`}),m):null,W=h&&h.mark==="pro_table_render"&&h.render?h.render(e,{input:d,errorList:S,extra:x}):o.createElement(o.Fragment,null,d,S,x);return o.createElement(I.q3.Provider,{value:$},o.createElement(ut.Z,Object.assign({},j,{className:R}),W),o.createElement(It,{prefixCls:t}))},Ft=a(87462),wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},Ot=wt,Mt=a(93771),Nt=function(t,n){return o.createElement(Mt.Z,(0,Ft.Z)({},t,{ref:n,icon:Ot}))},Pt=o.forwardRef(Nt),jt=a(40378),Rt=a(10110),Lt=a(83062),Tt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function Vt(e){return e?typeof e=="object"&&!o.isValidElement(e)?e:{title:e}:null}var Wt=e=>{let{prefixCls:t,label:n,htmlFor:r,labelCol:l,labelAlign:i,colon:c,required:h,requiredMark:m,tooltip:u}=e;var v;const[g]=(0,Rt.Z)("Form"),{vertical:N,labelAlign:F,labelCol:P,labelWrap:j,colon:R}=o.useContext(I.q3);if(!n)return null;const $=l||P||{},d=i||F,C=`${t}-item-label`,S=B()(C,d==="left"&&`${C}-left`,$.className,{[`${C}-wrap`]:!!j});let y=n;const x=c===!0||R!==!1&&c!==!1;x&&!N&&typeof n=="string"&&n.trim()!==""&&(y=n.replace(/[:|：]\s*$/,""));const Z=Vt(u);if(Z){const{icon:_=o.createElement(Pt,null)}=Z,me=Tt(Z,["icon"]),O=o.createElement(Lt.Z,Object.assign({},me),o.cloneElement(_,{className:`${t}-item-tooltip`,title:""}));y=o.createElement(o.Fragment,null,y,O)}const se=m==="optional",Y=typeof m=="function";Y?y=m(y,{required:!!h}):se&&!h&&(y=o.createElement(o.Fragment,null,y,o.createElement("span",{className:`${t}-item-optional`,title:""},(g==null?void 0:g.optional)||((v=jt.Z.Form)===null||v===void 0?void 0:v.optional))));const $e=B()({[`${t}-item-required`]:h,[`${t}-item-required-mark-optional`]:se||Y,[`${t}-item-no-colon`]:!x});return o.createElement(ut.Z,Object.assign({},$,{className:S}),o.createElement("label",{htmlFor:r,className:$e,title:typeof n=="string"?n:""},y))},Zt=a(76278),zt=a(17012),Ht=a(26702),At=a(19267);const Dt={success:Zt.Z,warning:Ht.Z,error:zt.Z,validating:At.Z};function ft(e){let{children:t,errors:n,warnings:r,hasFeedback:l,validateStatus:i,prefixCls:c,meta:h,noStyle:m}=e;const u=`${c}-item`,{feedbackIcons:v}=o.useContext(I.q3),g=ee(n,r,h,null,!!l,i),{isFormItemInput:N,status:F,hasFeedback:P,feedbackIcon:j}=o.useContext(I.aM),R=o.useMemo(()=>{var $;let d;if(l){const S=l!==!0&&l.icons||v,y=g&&(($=S==null?void 0:S({status:g,errors:n,warnings:r}))===null||$===void 0?void 0:$[g]),x=g&&Dt[g];d=y!==!1&&x?o.createElement("span",{className:B()(`${u}-feedback-icon`,`${u}-feedback-icon-${g}`)},y||o.createElement(x,null)):null}const C={status:g||"",errors:n,warnings:r,hasFeedback:!!l,feedbackIcon:d,isFormItemInput:!0};return m&&(C.status=(g!=null?g:F)||"",C.isFormItemInput=N,C.hasFeedback=!!(l!=null?l:P),C.feedbackIcon=l!==void 0?C.feedbackIcon:j),C},[g,l,m,N,F]);return o.createElement(I.aM.Provider,{value:R},t)}var Bt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function Xt(e){const{prefixCls:t,className:n,rootClassName:r,style:l,help:i,errors:c,warnings:h,validateStatus:m,meta:u,hasFeedback:v,hidden:g,children:N,fieldId:F,required:P,isRequired:j,onSubItemMetaChange:R}=e,$=Bt(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),d=`${t}-item`,{requiredMark:C}=o.useContext(I.q3),S=o.useRef(null),y=Fe(c),x=Fe(h),W=i!=null,Z=!!(W||c.length||h.length),se=!!S.current&&(0,_e.Z)(S.current),[Y,$e]=o.useState(null);(0,et.Z)(()=>{if(Z&&S.current){const z=getComputedStyle(S.current);$e(parseInt(z.marginBottom,10))}},[Z,se]);const _=z=>{z||$e(null)},O=function(){let z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const Be=z?y:u.errors,ne=z?x:u.warnings;return ee(Be,ne,u,"",!!v,m)}(),De=B()(d,n,r,{[`${d}-with-help`]:W||y.length||x.length,[`${d}-has-feedback`]:O&&v,[`${d}-has-success`]:O==="success",[`${d}-has-warning`]:O==="warning",[`${d}-has-error`]:O==="error",[`${d}-is-validating`]:O==="validating",[`${d}-hidden`]:g});return o.createElement("div",{className:De,style:l,ref:S},o.createElement($t.Z,Object.assign({className:`${d}-row`},(0,xt.Z)($,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),o.createElement(Wt,Object.assign({htmlFor:F},e,{requiredMark:C,required:P!=null?P:j,prefixCls:t})),o.createElement(Et,Object.assign({},e,u,{errors:y,warnings:x,prefixCls:t,status:O,help:i,marginBottom:Y,onErrorVisibleChanged:_}),o.createElement(I.qI.Provider,{value:R},o.createElement(ft,{prefixCls:t,meta:u,errors:u.errors,warnings:u.warnings,hasFeedback:v,validateStatus:O},N)))),!!Y&&o.createElement("div",{className:`${d}-margin-offset`,style:{marginBottom:-Y}}))}const qt="__SPLIT__",nn=null,Gt=o.memo(e=>{let{children:t}=e;return t},(e,t)=>e.value===t.value&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((n,r)=>n===t.childProps[r]));function gt(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function Kt(e){const{name:t,noStyle:n,className:r,dependencies:l,prefixCls:i,shouldUpdate:c,rules:h,children:m,required:u,label:v,messageVariables:g,trigger:N="onChange",validateTrigger:F,hidden:P,help:j}=e,{getPrefixCls:R}=o.useContext(pe.E_),{name:$}=o.useContext(I.q3),d=te(m),C=typeof d=="function",S=o.useContext(I.qI),{validateTrigger:y}=o.useContext(J.zb),x=F!==void 0?F:y,W=t!=null,Z=R("form",i),[se,Y]=le(Z),$e=(0,Re.ln)("Form.Item"),_=o.useContext(J.ZM),me=o.useRef(),[O,De]=He({}),[z,Be]=(0,je.Z)(()=>gt()),ne=E=>{const G=_==null?void 0:_.getKey(E.name);if(Be(E.destroy?gt():E,!0),n&&j!==!1&&S){let H=E.name;if(E.destroy)H=me.current||H;else if(G!==void 0){const[ue,Ie]=G;H=[ue].concat((0,A.Z)(Ie)),me.current=H}S(E,H)}},tt=(E,G)=>{De(H=>{const ue=Object.assign({},H),Xe=[].concat((0,A.Z)(E.name.slice(0,-1)),(0,A.Z)(G)).join(qt);return E.destroy?delete ue[Xe]:ue[Xe]=E,ue})},[Se,Ve]=o.useMemo(()=>{const E=(0,A.Z)(z.errors),G=(0,A.Z)(z.warnings);return Object.values(O).forEach(H=>{E.push.apply(E,(0,A.Z)(H.errors||[])),G.push.apply(G,(0,A.Z)(H.warnings||[]))}),[E,G]},[O,z.errors,z.warnings]),st=Ae();function re(E,G,H){return n&&!P?o.createElement(ft,{prefixCls:Z,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:z,errors:Se,warnings:Ve,noStyle:!0},E):o.createElement(Xt,Object.assign({key:"row"},e,{className:B()(r,Y),prefixCls:Z,fieldId:G,isRequired:H,errors:Se,warnings:Ve,meta:z,onSubItemMetaChange:tt}),E)}if(!W&&!C&&!l)return se(re(d));let oe={};return typeof v=="string"?oe.label=v:t&&(oe.label=String(t)),g&&(oe=Object.assign(Object.assign({},oe),g)),se(o.createElement(J.gN,Object.assign({},e,{messageVariables:oe,trigger:N,validateTrigger:x,onMetaChange:ne}),(E,G,H)=>{const ue=V(t).length&&G?G.name:[],Ie=Oe(ue,$),Xe=u!==void 0?u:!!(h&&h.some(L=>{if(L&&typeof L=="object"&&L.required&&!L.warningOnly)return!0;if(typeof L=="function"){const rt=L(H);return rt&&rt.required&&!rt.warningOnly}return!1})),nt=Object.assign({},E);let qe=null;if(Array.isArray(d)&&W)qe=d;else if(!(C&&(!(c||l)||W))){if(!(l&&!C&&!W))if((0,Ce.l$)(d)){const L=Object.assign(Object.assign({},d.props),nt);if(L.id||(L.id=Ie),j||Se.length>0||Ve.length>0||e.extra){const Ee=[];(j||Se.length>0)&&Ee.push(`${Ie}_help`),e.extra&&Ee.push(`${Ie}_extra`),L["aria-describedby"]=Ee.join(" ")}Se.length>0&&(L["aria-invalid"]="true"),Xe&&(L["aria-required"]="true"),(0,ye.Yr)(d)&&(L.ref=st(ue,d)),new Set([].concat((0,A.Z)(V(N)),(0,A.Z)(V(x)))).forEach(Ee=>{L[Ee]=function(){for(var pt,bt,ct,vt,dt,yt=arguments.length,mt=new Array(yt),ot=0;ot<yt;ot++)mt[ot]=arguments[ot];(ct=nt[Ee])===null||ct===void 0||(pt=ct).call.apply(pt,[nt].concat(mt)),(dt=(vt=d.props)[Ee])===null||dt===void 0||(bt=dt).call.apply(bt,[vt].concat(mt))}});const _t=[L["aria-required"],L["aria-invalid"],L["aria-describedby"]];qe=o.createElement(Gt,{value:nt[e.valuePropName||"value"],update:d,childProps:_t},(0,Ce.Tm)(d,L))}else C&&(c||l)&&!W?qe=d(H):qe=d}return re(qe,Ie,Xe)}))}const ht=Kt;ht.useStatus=Te;var Qt=ht,Yt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n},Ut=e=>{var{prefixCls:t,children:n}=e,r=Yt(e,["prefixCls","children"]);const{getPrefixCls:l}=o.useContext(pe.E_),i=l("form",t),c=o.useMemo(()=>({prefixCls:i,status:"error"}),[i]);return o.createElement(J.aV,Object.assign({},r),(h,m,u)=>o.createElement(I.Rk.Provider,{value:c},n(h.map(v=>Object.assign(Object.assign({},v),{fieldKey:v.key})),m,{errors:u.errors,warnings:u.warnings})))};function Jt(){const{form:e}=(0,o.useContext)(I.q3);return e}const ae=Pe;ae.Item=Qt,ae.List=Ut,ae.ErrorList=he,ae.useForm=ve,ae.useFormInstance=Jt,ae.useWatch=J.qo,ae.Provider=I.RV,ae.create=()=>{};var kt=ae},17423:function(Ct,lt,a){a.d(lt,{Z:function(){return Fe}});const A=s=>typeof s=="object"&&s!=null&&s.nodeType===1,Ge=(s,f)=>(!f||s!=="hidden")&&s!=="visible"&&s!=="clip",B=(s,f)=>{if(s.clientHeight<s.scrollHeight||s.clientWidth<s.scrollWidth){const T=getComputedStyle(s,null);return Ge(T.overflowY,f)||Ge(T.overflowX,f)||(K=>{const w=(p=>{if(!p.ownerDocument||!p.ownerDocument.defaultView)return null;try{return p.ownerDocument.defaultView.frameElement}catch(Q){return null}})(K);return!!w&&(w.clientHeight<K.scrollHeight||w.clientWidth<K.scrollWidth)})(s)}return!1},fe=(s,f,T,K,w,p,Q,M)=>p<s&&Q>f||p>s&&Q<f?0:p<=s&&M<=T||Q>=f&&M>=T?p-s-K:Q>f&&M<T||p<s&&M>T?Q-f+w:0,o=s=>{const f=s.parentElement;return f==null?s.getRootNode().host||null:f},We=(s,f)=>{var T,K,w,p;if(typeof document=="undefined")return[];const{scrollMode:Q,block:M,inline:X,boundary:Ze,skipOverflowHiddenElements:it}=f,at=typeof Ze=="function"?Ze:ee=>ee!==Ze;if(!A(s))throw new TypeError("Invalid target");const Ke=document.scrollingElement||document.documentElement,U=[];let D=s;for(;A(D)&&at(D);){if(D=o(D),D===Ke){U.push(D);break}D!=null&&D===document.body&&B(D)&&!B(document.documentElement)||D!=null&&B(D,it)&&U.push(D)}const ge=(K=(T=window.visualViewport)==null?void 0:T.width)!=null?K:innerWidth,ce=(p=(w=window.visualViewport)==null?void 0:w.height)!=null?p:innerHeight,{scrollX:le,scrollY:de}=window,{height:ie,width:we,top:he,right:J,bottom:pe,left:be}=s.getBoundingClientRect(),{top:Qe,right:Ye,bottom:Ue,left:Je}=(ee=>{const b=window.getComputedStyle(ee);return{top:parseFloat(b.scrollMarginTop)||0,right:parseFloat(b.scrollMarginRight)||0,bottom:parseFloat(b.scrollMarginBottom)||0,left:parseFloat(b.scrollMarginLeft)||0}})(s);let q=M==="start"||M==="nearest"?he-Qe:M==="end"?pe+Ue:he+ie/2-Qe+Ue,V=X==="center"?be+we/2-Je+Ye:X==="end"?J+Ye:be-Je;const Oe=[];for(let ee=0;ee<U.length;ee++){const b=U[ee],{height:ve,width:Me,top:Ne,right:ze,bottom:ke,left:Pe}=b.getBoundingClientRect();if(Q==="if-needed"&&he>=0&&be>=0&&pe<=ce&&J<=ge&&he>=Ne&&pe<=ke&&be>=Pe&&J<=ze)return Oe;const je=getComputedStyle(b),ye=parseInt(je.borderLeftWidth,10),Ce=parseInt(je.borderTopWidth,10),Re=parseInt(je.borderRightWidth,10),Le=parseInt(je.borderBottomWidth,10);let te=0,k=0;const Te="offsetWidth"in b?b.offsetWidth-b.clientWidth-ye-Re:0,xe="offsetHeight"in b?b.offsetHeight-b.clientHeight-Ce-Le:0,He="offsetWidth"in b?b.offsetWidth===0?0:Me/b.offsetWidth:0,Ae="offsetHeight"in b?b.offsetHeight===0?0:ve/b.offsetHeight:0;if(Ke===b)te=M==="start"?q:M==="end"?q-ce:M==="nearest"?fe(de,de+ce,ce,Ce,Le,de+q,de+q+ie,ie):q-ce/2,k=X==="start"?V:X==="center"?V-ge/2:X==="end"?V-ge:fe(le,le+ge,ge,ye,Re,le+V,le+V+we,we),te=Math.max(0,te+de),k=Math.max(0,k+le);else{te=M==="start"?q-Ne-Ce:M==="end"?q-ke+Le+xe:M==="nearest"?fe(Ne,ke,ve,Ce,Le+xe,q,q+ie,ie):q-(Ne+ve/2)+xe/2,k=X==="start"?V-Pe-ye:X==="center"?V-(Pe+Me/2)+Te/2:X==="end"?V-ze+Re+Te:fe(Pe,ze,Me,ye,Re+Te,V,V+we,we);const{scrollLeft:_e,scrollTop:et}=b;te=Ae===0?0:Math.max(0,Math.min(et+te/Ae,b.scrollHeight-ve/Ae+xe)),k=He===0?0:Math.max(0,Math.min(_e+k/He,b.scrollWidth-Me/He+Te)),q+=et-te,V+=_e-k}Oe.push({el:b,top:te,left:k})}return Oe},I=s=>s===!1?{block:"end",inline:"nearest"}:(f=>f===Object(f)&&Object.keys(f).length!==0)(s)?s:{block:"start",inline:"nearest"};function Fe(s,f){if(!s.isConnected||!(w=>{let p=w;for(;p&&p.parentNode;){if(p.parentNode===document)return!0;p=p.parentNode instanceof ShadowRoot?p.parentNode.host:p.parentNode}return!1})(s))return;const T=(w=>{const p=window.getComputedStyle(w);return{top:parseFloat(p.scrollMarginTop)||0,right:parseFloat(p.scrollMarginRight)||0,bottom:parseFloat(p.scrollMarginBottom)||0,left:parseFloat(p.scrollMarginLeft)||0}})(s);if((w=>typeof w=="object"&&typeof w.behavior=="function")(f))return f.behavior(We(s,f));const K=typeof f=="boolean"||f==null?void 0:f.behavior;for(const{el:w,top:p,left:Q}of We(s,I(f))){const M=p-T.top+T.bottom,X=Q-T.left+T.right;w.scroll({top:M,left:X,behavior:K})}}}}]);
