import{bF as a}from"./index.23cec3b4.js";const t=a(),s=async a=>{const s=await t.get({url:"/example/list",params:a});return s&&s.data},e=async a=>{const s=await t.post({url:"/example/save",data:a});return s&&s.data},r=async a=>{const s=await t.get({url:"/example/detail",params:{id:a}});return s&&s.data},n=async a=>{const s=await t.post({url:"/example/delete",data:{ids:a}});return s&&s.data};export{r as a,n as d,s as g,e as s};
