import e from"./Write.9b8d1e17.js";import{_ as t}from"./ContentDetailWrap.b48a4c06.js";import{d as a,u as r,ct as i,r as o,o as s,k as p,w as m,a as l,l as d,g as c,y as n,t as u}from"./index.23cec3b4.js";import{E as j}from"./el-button.e5ca07de.js";import{a as f,s as b}from"./index.87b2a7d7.js";import{u as v}from"./useEmitt.d84e0ae7.js";import"./Form.bbfd6fad.js";import"./el-col.6e2d0468.js";import"./typescript2.0a085a7f.js";import"./el-popper.314ed8a7.js";import"./index2.710268bd.js";import"./el-input.7364d514.js";import"./event2.c09267d7.js";import"./index2.890f85c7.js";import"./el-tag.365c805e.js";import"./tsxHelper.9b943d36.js";import"./index2.5ceead26.js";import"./scroll2.020cc849.js";import"./debounce.59bf77c9.js";import"./validator2.a811c7fc.js";import"./el-input-number.b18a4f5e.js";import"./el-switch.0593e0cc.js";import"./el-divider.4dda1429.js";import"./InputPassword.34b74344.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.69d4697d.js";import"./aria2.dceaa135.js";import"./browser2.3783bf08.js";import"./useForm.b78652d4.js";import"./useValidator.d67e0e34.js";import"./el-card.6be1a945.js";import"./Sticky.f5f3be91.js";const x=a({__name:"ExampleEdit",setup(a){const{emitter:x}=v(),{push:w}=r(),{query:g}=i(),{t:y}=d(),_=o(null);(async()=>{const e=await f(g.id);e&&(_.value=e.data)})();const h=o(),k=o(!1),E=async()=>{var e,t;const a=l(h);if(await(null==(t=null==(e=null==a?void 0:a.elFormRef)?void 0:e.validate())?void 0:t.catch((()=>{})))){k.value=!0;const e=await(null==a?void 0:a.getFormData());await b(e).catch((()=>{})).finally((()=>{k.value=!1}))&&(x.emit("getList","edit"),w("/example/example-page"))}};return(a,r)=>(s(),p(l(t),{title:l(y)("exampleDemo.edit"),onBack:r[0]||(r[0]=e=>l(w)("/example/example-page"))},{right:m((()=>[c(l(j),{type:"primary",loading:k.value,onClick:E},{default:m((()=>[n(u(l(y)("exampleDemo.save")),1)])),_:1},8,["loading"])])),default:m((()=>[c(e,{ref_key:"writeRef",ref:h,"current-row":_.value},null,8,["current-row"])])),_:1},8,["title"]))}});export{x as default};
