import{bF as e,d as t,l as s,r as a,s as l,x as i,o as n,k as o,w as d,g as r,a as c,e as x,n as u,t as m,j as _}from"./index.23cec3b4.js";import{E as p,a as f}from"./el-col.6e2d0468.js";import{E as g}from"./el-card.6be1a945.js";import{E as v}from"./el-skeleton-item.173e5f24.js";import{_ as y}from"./CountTo.1657b476.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const w=e(),h=async()=>{const e=await w.get({url:"/analysis/userAccessSource"});return e&&e.data},j=async()=>{const e=await w.get({url:"/analysis/weeklyUserActivity"});return e&&e.data},$=async()=>{const e=await w.get({url:"/analysis/monthlySales"});return e&&e.data};const k={class:"flex flex-col justify-between"},z={class:"flex flex-col justify-between"},S={class:"flex flex-col justify-between"},P={class:"flex flex-col justify-between"};var A=b(t({__name:"PanelGroup",setup(e){const{t:t}=s(),{getPrefixCls:b}=_(),h=b("panel"),j=a(!0);let $=l({users:0,messages:0,moneys:0,shoppings:0});return(async()=>{const e=await(async()=>{const e=await w.get({url:"/analysis/total"});return e&&e.data})().catch((()=>{})).finally((()=>{j.value=!1}));$=Object.assign($,(null==e?void 0:e.data)||{})})(),(e,s)=>{const a=i("Icon");return n(),o(c(f),{gutter:20,justify:"space-between",class:u(c(h))},{default:d((()=>[r(c(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:d((()=>[r(c(g),{shadow:"hover",class:"mb-20px"},{default:d((()=>[r(c(v),{loading:j.value,animated:"",rows:2},{default:d((()=>[x("div",{class:u(`${c(h)}__item flex justify-between`)},[x("div",null,[x("div",{class:u(`${c(h)}__item--icon ${c(h)}__item--peoples p-16px inline-block rounded-6px`)},[r(a,{icon:"svg-icon:peoples",size:40})],2)]),x("div",k,[x("div",{class:u(`${c(h)}__item--text text-16px text-gray-500 text-right`)},m(c(t)("analysis.newUser")),3),r(c(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":102400,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),r(c(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:d((()=>[r(c(g),{shadow:"hover",class:"mb-20px"},{default:d((()=>[r(c(v),{loading:j.value,animated:"",rows:2},{default:d((()=>[x("div",{class:u(`${c(h)}__item flex justify-between`)},[x("div",null,[x("div",{class:u(`${c(h)}__item--icon ${c(h)}__item--message p-16px inline-block rounded-6px`)},[r(a,{icon:"svg-icon:message",size:40})],2)]),x("div",z,[x("div",{class:u(`${c(h)}__item--text text-16px text-gray-500 text-right`)},m(c(t)("analysis.unreadInformation")),3),r(c(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":81212,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),r(c(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:d((()=>[r(c(g),{shadow:"hover",class:"mb-20px"},{default:d((()=>[r(c(v),{loading:j.value,animated:"",rows:2},{default:d((()=>[x("div",{class:u(`${c(h)}__item flex justify-between`)},[x("div",null,[x("div",{class:u(`${c(h)}__item--icon ${c(h)}__item--money p-16px inline-block rounded-6px`)},[r(a,{icon:"svg-icon:money",size:40})],2)]),x("div",S,[x("div",{class:u(`${c(h)}__item--text text-16px text-gray-500 text-right`)},m(c(t)("analysis.transactionAmount")),3),r(c(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":9280,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),r(c(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:d((()=>[r(c(g),{shadow:"hover",class:"mb-20px"},{default:d((()=>[r(c(v),{loading:j.value,animated:"",rows:2},{default:d((()=>[x("div",{class:u(`${c(h)}__item flex justify-between`)},[x("div",null,[x("div",{class:u(`${c(h)}__item--icon ${c(h)}__item--shopping p-16px inline-block rounded-6px`)},[r(a,{icon:"svg-icon:shopping",size:40})],2)]),x("div",P,[x("div",{class:u(`${c(h)}__item--text text-16px text-gray-500 text-right`)},m(c(t)("analysis.totalShopping")),3),r(c(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":13600,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-11dbf752"]]),E=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{A as P,j as a,$ as b,E as c,h as g};
