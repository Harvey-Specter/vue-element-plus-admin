import{d as e,a7 as r,o as s,c as t,e as o,t as a,g as n,w as i,a as l,l as c,y as m}from"./index.23cec3b4.js";import{E as u}from"./el-button.e5ca07de.js";const p={class:"flex justify-center"},d={class:"text-center"},x=["src"],g={class:"text-14px text-[var(--el-color-info)]"},f={class:"mt-20px"},v=e({__name:"Error",props:{type:r.string.validate((e=>["404","500","403"].includes(e))).def("404")},emits:["errorClick"],setup(e,{emit:r}){const v=e,{t:y}=c(),T={404:{url:"/assets/404.904e236c.svg",message:y("error.pageError"),buttonText:y("error.returnToHome")},500:{url:"/assets/500.40f0978f.svg",message:y("error.networkError"),buttonText:y("error.returnToHome")},403:{url:"/assets/403.7832526d.svg",message:y("error.noPermission"),buttonText:y("error.returnToHome")}},b=()=>{r("errorClick",v.type)};return(r,c)=>(s(),t("div",p,[o("div",d,[o("img",{width:"350",src:T[e.type].url,alt:""},null,8,x),o("div",g,a(T[e.type].message),1),o("div",f,[n(l(u),{type:"primary",onClick:b},{default:i((()=>[m(a(T[e.type].buttonText),1)])),_:1})])])]))}});export{v as _};
