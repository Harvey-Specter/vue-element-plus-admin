import{d as a,a7 as t,s as l,J as e,C as r,H as n,v as s,a as i,o,c as u,t as c,n as p,j as m,bV as V}from"./index.23cec3b4.js";const d=a({__name:"CountTo",props:{startVal:t.number.def(0),endVal:t.number.def(2021),duration:t.number.def(3e3),autoplay:t.bool.def(!0),decimals:t.number.validate((a=>a>=0)).def(0),decimal:t.string.def("."),separator:t.string.def(","),prefix:t.string.def(""),suffix:t.string.def(""),useEasing:t.bool.def(!0),easingFn:{type:Function,default:(a,t,l,e)=>l*(1-Math.pow(2,-10*a/e))*1024/1023+t}},emits:["mounted","callback"],setup(a,{expose:t,emit:d}){const f=a,{getPrefixCls:F}=m(),g=F("count-to"),b=a=>{const{decimals:t,decimal:l,separator:e,suffix:r,prefix:n}=f;a=Number(a).toFixed(t);const s=(a+="").split(".");let i=s[0];const o=s.length>1?l+s[1]:"",u=/(\d+)(\d{3})/;if(e&&!V(e))for(;u.test(i);)i=i.replace(u,"$1"+e+"$2");return n+i+o+r},S=l({localStartVal:f.startVal,displayValue:b(f.startVal),printVal:null,paused:!1,localDuration:f.duration,startTime:null,timestamp:null,remaining:null,rAF:null}),A=e(S,"displayValue");r((()=>{f.autoplay&&D(),d("mounted")}));const x=n((()=>f.startVal>f.endVal));s([()=>f.startVal,()=>f.endVal],(()=>{f.autoplay&&D()}));const D=()=>{const{startVal:a,duration:t}=f;S.localStartVal=a,S.startTime=null,S.localDuration=t,S.paused=!1,S.rAF=requestAnimationFrame(q)},y=()=>{cancelAnimationFrame(S.rAF)},T=()=>{S.startTime=null,S.localDuration=+S.remaining,S.localStartVal=+S.printVal,requestAnimationFrame(q)},q=a=>{const{useEasing:t,easingFn:l,endVal:e}=f;S.startTime||(S.startTime=a),S.timestamp=a;const r=a-S.startTime;S.remaining=S.localDuration-r,t?i(x)?S.printVal=S.localStartVal-l(r,0,S.localStartVal-e,S.localDuration):S.printVal=l(r,S.localStartVal,e-S.localStartVal,S.localDuration):i(x)?S.printVal=S.localStartVal-(S.localStartVal-e)*(r/S.localDuration):S.printVal=S.localStartVal+(e-S.localStartVal)*(r/S.localDuration),i(x)?S.printVal=S.printVal<e?e:S.printVal:S.printVal=S.printVal>e?e:S.printVal,S.displayValue=b(S.printVal),r<S.localDuration?S.rAF=requestAnimationFrame(q):d("callback")};return t({pauseResume:()=>{S.paused?(T(),S.paused=!1):(y(),S.paused=!0)},reset:()=>{S.startTime=null,cancelAnimationFrame(S.rAF),S.displayValue=b(f.startVal)},start:D,pause:y}),(a,t)=>(o(),u("span",{class:p(i(g))},c(i(A)),3))}});export{d as _};
