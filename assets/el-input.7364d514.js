import{H as e,bG as t,V as a,r as o,aI as n,E as l,az as s,F as r,N as i,al as u,d as p,an as d,b1 as c,U as f,aK as v,R as m,aY as y,bf as x,bH as b,bI as g,aU as h,v as w,M as S,aC as $,C as k,b6 as z,J as C,aF as I,aX as E,o as F,c as P,Y as j,$ as M,n as V,a as A,z as N,e as _,k as B,w as R,Z as H,P as O,X as K,g as T,ay as W,ar as L,ak as U,t as X,a0 as q,_ as Y,aj as Z,am as D,a1 as G}from"./index.23cec3b4.js";import{m as J}from"./typescript2.0a085a7f.js";import{U as Q}from"./event2.c09267d7.js";import{u as ee,a as te}from"./index2.890f85c7.js";import{i as ae}from"./el-popper.314ed8a7.js";const oe=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),ne=["class","style"],le=/^on[A-Z]/,se=(o={})=>{const{excludeListeners:n=!1,excludeKeys:l}=o,s=e((()=>((null==l?void 0:l.value)||[]).concat(ne))),r=a();return e(r?()=>{var e;return t(Object.entries(null==(e=r.proxy)?void 0:e.$attrs).filter((([e])=>!(s.value.includes(e)||n&&le.test(e)))))}:()=>({}))};let re;const ie=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function ue(e,t=1,a){var o;re||(re=document.createElement("textarea"),document.body.appendChild(re));const{paddingSize:l,borderSize:s,boxSizing:r,contextStyle:i}=function(e){const t=window.getComputedStyle(e),a=t.getPropertyValue("box-sizing"),o=Number.parseFloat(t.getPropertyValue("padding-bottom"))+Number.parseFloat(t.getPropertyValue("padding-top")),n=Number.parseFloat(t.getPropertyValue("border-bottom-width"))+Number.parseFloat(t.getPropertyValue("border-top-width"));return{contextStyle:ie.map((e=>`${e}:${t.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:n,boxSizing:a}}(e);re.setAttribute("style",`${i};\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`),re.value=e.value||e.placeholder||"";let u=re.scrollHeight;const p={};"border-box"===r?u+=s:"content-box"===r&&(u-=l),re.value="";const d=re.scrollHeight-l;if(n(t)){let e=d*t;"border-box"===r&&(e=e+l+s),u=Math.max(e,u),p.minHeight=`${e}px`}if(n(a)){let e=d*a;"border-box"===r&&(e=e+l+s),u=Math.min(e,u)}return p.height=`${u}px`,null==(o=re.parentNode)||o.removeChild(re),re=void 0,p}const pe=l({id:{type:String,default:void 0},size:s,disabled:Boolean,modelValue:{type:r([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:r([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:i,default:""},prefixIcon:{type:i,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:r([Object,Array,String]),default:()=>J({})}}),de=["role"],ce=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],fe=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"];const ve=G(Y(p({name:"ElInput",inheritAttrs:!1,props:pe,emits:{[Q]:e=>u(e),input:e=>u(e),change:e=>u(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},setup(t,{expose:n,emit:l}){const s=t,r={suffix:"append",prefix:"prepend"},i=a(),u=d(),p=c(),Y=e((()=>{const e={};return"combobox"===s.containerRole&&(e["aria-haspopup"]=u["aria-haspopup"],e["aria-owns"]=u["aria-owns"],e["aria-expanded"]=u["aria-expanded"]),e})),G=se({excludeKeys:e((()=>Object.keys(Y.value)))}),{form:J,formItem:ne}=ee(),{inputId:le}=te(s,{formItemContext:ne}),re=f(),ie=v(),pe=m("input"),ve=m("textarea"),me=y(),ye=y(),xe=o(!1),be=o(!1),ge=o(!1),he=o(!1),we=o(),Se=y(s.inputStyle),$e=e((()=>me.value||ye.value)),ke=e((()=>{var e;return null!=(e=null==J?void 0:J.statusIcon)&&e})),ze=e((()=>(null==ne?void 0:ne.validateState)||"")),Ce=e((()=>ze.value&&x[ze.value])),Ie=e((()=>he.value?b:g)),Ee=e((()=>[u.style,s.inputStyle])),Fe=e((()=>[s.inputStyle,Se.value,{resize:s.resize}])),Pe=e((()=>ae(s.modelValue)?"":String(s.modelValue))),je=e((()=>s.clearable&&!ie.value&&!s.readonly&&!!Pe.value&&(xe.value||be.value))),Me=e((()=>s.showPassword&&!ie.value&&!s.readonly&&!!Pe.value&&(!!Pe.value||xe.value))),Ve=e((()=>s.showWordLimit&&!!G.value.maxlength&&("text"===s.type||"textarea"===s.type)&&!ie.value&&!s.readonly&&!s.showPassword)),Ae=e((()=>Array.from(Pe.value).length)),Ne=e((()=>!!Ve.value&&Ae.value>Number(G.value.maxlength))),_e=e((()=>!!p.suffix||!!s.suffixIcon||je.value||s.showPassword||Ve.value||!!ze.value&&ke.value)),[Be,Re]=function(e){const t=o();return[function(){if(null==e.value)return;const{selectionStart:a,selectionEnd:o,value:n}=e.value;if(null==a||null==o)return;const l=n.slice(0,Math.max(0,a)),s=n.slice(Math.max(0,o));t.value={selectionStart:a,selectionEnd:o,value:n,beforeTxt:l,afterTxt:s}},function(){if(null==e.value||null==t.value)return;const{value:a}=e.value,{beforeTxt:o,afterTxt:n,selectionStart:l}=t.value;if(null==o||null==n||null==l)return;let s=a.length;if(a.endsWith(n))s=a.length-n.length;else if(a.startsWith(o))s=o.length;else{const e=o[l-1],t=a.indexOf(e,l-1);-1!==t&&(s=t+1)}e.value.setSelectionRange(s,s)}]}(me);h(ye,(e=>{if(!Ve.value||"both"!==s.resize)return;const t=e[0],{width:a}=t.contentRect;we.value={right:`calc(100% - ${a+15+6}px)`}}));const He=()=>{const{type:e,autosize:t}=s;if(Z&&"textarea"===e)if(t){const e=D(t)?t.minRows:void 0,a=D(t)?t.maxRows:void 0;Se.value={...ue(ye.value,e,a)}}else Se.value={minHeight:ue(ye.value).minHeight}},Oe=()=>{const e=$e.value;e&&e.value!==Pe.value&&(e.value=Pe.value)},Ke=e=>{const{el:t}=i.vnode;if(!t)return;const a=Array.from(t.querySelectorAll(`.${pe.e(e)}`)).find((e=>e.parentNode===t));if(!a)return;const o=r[e];p[o]?a.style.transform=`translateX(${"suffix"===e?"-":""}${t.querySelector(`.${pe.be("group",o)}`).offsetWidth}px)`:a.removeAttribute("style")},Te=()=>{Ke("prefix"),Ke("suffix")},We=async e=>{Be();let{value:t}=e.target;s.formatter&&(t=s.parser?s.parser(t):t,t=s.formatter(t)),ge.value||t!==Pe.value&&(l(Q,t),l("input",t),await S(),Oe(),Re())},Le=e=>{l("change",e.target.value)},Ue=e=>{l("compositionstart",e),ge.value=!0},Xe=e=>{var t;l("compositionupdate",e);const a=null==(t=e.target)?void 0:t.value,o=a[a.length-1]||"";ge.value=!oe(o)},qe=e=>{l("compositionend",e),ge.value&&(ge.value=!1,We(e))},Ye=()=>{he.value=!he.value,Ze()},Ze=async()=>{var e;await S(),null==(e=$e.value)||e.focus()},De=e=>{xe.value=!0,l("focus",e)},Ge=e=>{var t;xe.value=!1,l("blur",e),s.validateEvent&&(null==(t=null==ne?void 0:ne.validate)||t.call(ne,"blur").catch((e=>$())))},Je=e=>{be.value=!1,l("mouseleave",e)},Qe=e=>{be.value=!0,l("mouseenter",e)},et=e=>{l("keydown",e)},tt=()=>{l(Q,""),l("change",""),l("clear"),l("input","")};return w((()=>s.modelValue),(()=>{var e;S((()=>He())),s.validateEvent&&(null==(e=null==ne?void 0:ne.validate)||e.call(ne,"change").catch((e=>$())))})),w(Pe,(()=>Oe())),w((()=>s.type),(async()=>{await S(),Oe(),He(),Te()})),k((async()=>{!s.formatter&&s.parser,Oe(),Te(),await S(),He()})),z((async()=>{await S(),Te()})),n({input:me,textarea:ye,ref:$e,textareaStyle:Fe,autosize:C(s,"autosize"),focus:Ze,blur:()=>{var e;return null==(e=$e.value)?void 0:e.blur()},select:()=>{var e;null==(e=$e.value)||e.select()},clear:tt,resizeTextarea:He}),(e,t)=>I((F(),P("div",K(A(Y),{class:["textarea"===e.type?A(ve).b():A(pe).b(),A(pe).m(A(re)),A(pe).is("disabled",A(ie)),A(pe).is("exceed",A(Ne)),{[A(pe).b("group")]:e.$slots.prepend||e.$slots.append,[A(pe).bm("group","append")]:e.$slots.append,[A(pe).bm("group","prepend")]:e.$slots.prepend,[A(pe).m("prefix")]:e.$slots.prefix||e.prefixIcon,[A(pe).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[A(pe).bm("suffix","password-clear")]:A(je)&&A(Me)},e.$attrs.class],style:A(Ee),role:e.containerRole,onMouseenter:Qe,onMouseleave:Je}),[j(" input "),"textarea"!==e.type?(F(),P(M,{key:0},[j(" prepend slot "),e.$slots.prepend?(F(),P("div",{key:0,class:V(A(pe).be("group","prepend"))},[N(e.$slots,"prepend")],2)):j("v-if",!0),_("div",{class:V([A(pe).e("wrapper"),A(pe).is("focus",xe.value)])},[j(" prefix slot "),e.$slots.prefix||e.prefixIcon?(F(),P("span",{key:0,class:V(A(pe).e("prefix"))},[_("span",{class:V(A(pe).e("prefix-inner"))},[N(e.$slots,"prefix"),e.prefixIcon?(F(),B(A(O),{key:0,class:V(A(pe).e("icon"))},{default:R((()=>[(F(),B(H(e.prefixIcon)))])),_:1},8,["class"])):j("v-if",!0)],2)],2)):j("v-if",!0),_("input",K({id:A(le),ref_key:"input",ref:me,class:A(pe).e("inner")},A(G),{type:e.showPassword?he.value?"text":"password":e.type,disabled:A(ie),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:Ue,onCompositionupdate:Xe,onCompositionend:qe,onInput:We,onFocus:De,onBlur:Ge,onChange:Le,onKeydown:et}),null,16,ce),j(" suffix slot "),A(_e)?(F(),P("span",{key:1,class:V(A(pe).e("suffix"))},[_("span",{class:V(A(pe).e("suffix-inner"))},[A(je)&&A(Me)&&A(Ve)?j("v-if",!0):(F(),P(M,{key:0},[N(e.$slots,"suffix"),e.suffixIcon?(F(),B(A(O),{key:0,class:V(A(pe).e("icon"))},{default:R((()=>[(F(),B(H(e.suffixIcon)))])),_:1},8,["class"])):j("v-if",!0)],64)),A(je)?(F(),B(A(O),{key:1,class:V([A(pe).e("icon"),A(pe).e("clear")]),onMousedown:L(A(U),["prevent"]),onClick:tt},{default:R((()=>[T(A(W))])),_:1},8,["class","onMousedown"])):j("v-if",!0),A(Me)?(F(),B(A(O),{key:2,class:V([A(pe).e("icon"),A(pe).e("password")]),onClick:Ye},{default:R((()=>[(F(),B(H(A(Ie))))])),_:1},8,["class"])):j("v-if",!0),A(Ve)?(F(),P("span",{key:3,class:V(A(pe).e("count"))},[_("span",{class:V(A(pe).e("count-inner"))},X(A(Ae))+" / "+X(A(G).maxlength),3)],2)):j("v-if",!0),A(ze)&&A(Ce)&&A(ke)?(F(),B(A(O),{key:4,class:V([A(pe).e("icon"),A(pe).e("validateIcon"),A(pe).is("loading","validating"===A(ze))])},{default:R((()=>[(F(),B(H(A(Ce))))])),_:1},8,["class"])):j("v-if",!0)],2)],2)):j("v-if",!0)],2),j(" append slot "),e.$slots.append?(F(),P("div",{key:1,class:V(A(pe).be("group","append"))},[N(e.$slots,"append")],2)):j("v-if",!0)],64)):(F(),P(M,{key:1},[j(" textarea "),_("textarea",K({id:A(le),ref_key:"textarea",ref:ye,class:A(ve).e("inner")},A(G),{tabindex:e.tabindex,disabled:A(ie),readonly:e.readonly,autocomplete:e.autocomplete,style:A(Fe),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:Ue,onCompositionupdate:Xe,onCompositionend:qe,onInput:We,onFocus:De,onBlur:Ge,onChange:Le,onKeydown:et}),null,16,fe),A(Ve)?(F(),P("span",{key:0,style:q(we.value),class:V(A(pe).e("count"))},X(A(Ae))+" / "+X(A(G).maxlength),7)):j("v-if",!0)],64))],16,de)),[[E,"hidden"!==e.type]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{ve as E,oe as i,se as u};
