import{g as a,S as r,V as s,_ as l,r as _,o as i,f as p,w as u,d,M as m}from"./app.22a8c146.js";const $=a({setup(){return{open:()=>{r.alert("This is a message","Title",{confirmButtonText:"OK",callback:t=>{s({type:"info",message:`action: ${t}`})}})}}}}),C=d("Click to open the Message Box");function b(e,t,o,c,f,g){const n=_("el-button");return i(),p(n,{type:"text",onClick:e.open},{default:u(()=>[C]),_:1},8,["onClick"])}var h=l($,[["render",b]]),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:h});const y=a({setup(){return{open:()=>{r.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",center:!0}).then(()=>{s({type:"success",message:"Delete completed"})}).catch(()=>{s({type:"info",message:"Delete canceled"})})}}}}),x=d("Click to open Message Box");function T(e,t,o,c,f,g){const n=_("el-button");return i(),p(n,{type:"text",onClick:e.open},{default:u(()=>[x]),_:1},8,["onClick"])}var B=l(y,[["render",T]]),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const k=a({setup(){return{open:()=>{r.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{s({type:"success",message:"Delete completed"})}).catch(()=>{s({type:"info",message:"Delete canceled"})})}}}}),M=d("Click to open the Message Box");function v(e,t,o,c,f,g){const n=_("el-button");return i(),p(n,{type:"text",onClick:e.open},{default:u(()=>[M]),_:1},8,["onClick"])}var S=l(k,[["render",v]]),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const w=a({setup(){return{open:()=>{r({title:"Message",message:m("p",null,[m("span",null,"Message can be "),m("i",{style:"color: teal"},"VNode")]),showCancelButton:!0,confirmButtonText:"OK",cancelButtonText:"Cancel",beforeClose:(t,o,c)=>{t==="confirm"?(o.confirmButtonLoading=!0,o.confirmButtonText="Loading...",setTimeout(()=>{c(),setTimeout(()=>{o.confirmButtonLoading=!1},300)},3e3)):c()}}).then(t=>{s({type:"info",message:`action: ${t}`})})}}}}),O=d("Click to open Message Box");function j(e,t,o,c,f,g){const n=_("el-button");return i(),p(n,{type:"text",onClick:e.open},{default:u(()=>[O]),_:1},8,["onClick"])}var z=l(w,[["render",j]]),J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});const L=a({setup(){return{open:()=>{r.confirm("You have unsaved changes, save and proceed?","Confirm",{distinguishCancelAndClose:!0,confirmButtonText:"Save",cancelButtonText:"Discard Changes"}).then(()=>{s({type:"info",message:"Changes saved. Proceeding to a new route."})}).catch(t=>{s({type:"info",message:t==="cancel"?"Changes discarded. Proceeding to a new route.":"Stay in the current route"})})}}}}),D=d("Click to open Message Box");function K(e,t,o,c,f,g){const n=_("el-button");return i(),p(n,{type:"text",onClick:e.open},{default:u(()=>[D]),_:1},8,["onClick"])}var E=l(L,[["render",K]]),Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const H=a({setup(){return{open:()=>{r.prompt("Please input your e-mail","Tip",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"Invalid Email"}).then(({value:t})=>{s({type:"success",message:`Your email is:${t}`})}).catch(()=>{s({type:"info",message:"Input canceled"})})}}}}),P=d("Click to open Message Box");function V(e,t,o,c,f,g){const n=_("el-button");return i(),p(n,{type:"text",onClick:e.open},{default:u(()=>[P]),_:1},8,["onClick"])}var I=l(H,[["render",V]]),R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const N=a({setup(){return{open:()=>{r.alert("<strong>proxy is <i>HTML</i> string</strong>","HTML String",{dangerouslyUseHTMLString:!0})}}}}),W=d("Click to open Message Box");function Y(e,t,o,c,f,g){const n=_("el-button");return i(),p(n,{type:"text",onClick:e.open},{default:u(()=>[W]),_:1},8,["onClick"])}var A=l(N,[["render",Y]]),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});export{q as _,F as a,G as b,J as c,Q as d,R as e,X as f};