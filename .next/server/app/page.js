(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9209:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>u,routeModule:()=>m,tree:()=>d});var s=r(3137),i=r(4647),n=r(4183),o=r.n(n),a=r(1775),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=s.AppPageRouteModule,d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,210)),"/workspaces/hacktober2023/app/page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9270)),"/workspaces/hacktober2023/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/workspaces/hacktober2023/app/page.js"],p="/page",x={require:r,loadChunk:()=>Promise.resolve()},m=new c({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5294:(e,t,r)=>{Promise.resolve().then(r.bind(r,3919)),Promise.resolve().then(r.bind(r,3385))},3919:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(80),i=r(9885),n=r(930),o=r(7935);let a=({isOpen:e,headerText:t="Close",toggle:r,children:i})=>s.jsx("div",{className:`fixed left-0 top-0 z-50 w-full h-screen overflow-x-auto flex-col justify-center items-center bg-white/20 backdrop-blur-xl  ${e?"flex":"hidden"}`,children:(0,s.jsxs)("div",{className:"w-[90%] sm:max-w-sm md:max-w-md  border border-black/10 rounded-xl bg-white p-4",children:[(0,s.jsxs)("button",{className:"w-fit border border-none bg-black text-white py-1 px-2 text-sm font-bold rounded-md cursor-pointer flex flex-row items-center gap-2 mr-0 ml-auto",onClick:r,children:[s.jsx(o.toq,{size:"1rem"})," ",t]}),i]})}),l=function(){let[e,t]=(0,i.useState)(!1),r=()=>{t(!e)};return(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center py-[10vh]",children:[s.jsx("div",{className:"text-2xl font-semibold text-center",children:"Contributor Profiles"}),(0,s.jsxs)("div",{className:"text-base mt-2 text-center",children:["We ❤️ Open Source, Let's make your first contribution today! ",s.jsx("br",{})," "]}),(0,s.jsxs)("button",{className:"flex flex-row justify-center items-center mt-2 gap-2 py-1 px-3 rounded-lg bg-sky-300 outline-2 outline-sky-600 border-none text-sky-950 font-semibold transition-all",onClick:r,children:[s.jsx(n.Hfo,{})," HOW"]}),(0,s.jsxs)(a,{toggle:r,isOpen:e,children:[s.jsx("div",{className:"text-lg font-bold",children:"What's Purpose of this repo?"}),(0,s.jsxs)("p",{children:["This is a repository to help beginners get started with Open Source during"," ",s.jsx("a",{href:"https://hacktoberfest.com/",className:"underline underline-offset-2 text-sky-600",target:"_blank",rel:"noopener noreferrer",children:"Hacktoberfest"}),". PS: Hacktoberfest is a month-long celebration of open source software in partnership with Github ."]}),s.jsx("div",{className:"text-lg mt-4 font-bold",children:"How can I contribute?"}),(0,s.jsxs)("p",{children:["This is a beginner-friendly repo, we've made a simple website where you can add your profile card and make your first contribution to open source and GitHub.",s.jsx("br",{}),"Go to"," ",s.jsx("a",{href:"https://github.com/gdsc-kits/hacktober2023",className:"underline underline-offset-2 text-sky-600",target:"_blank",rel:"noopener noreferrer",children:"@gdsc-kits/hacktober2023"})," ","and make a small change adding your profile into contributors/profiles.json and make a PR.",s.jsx("br",{}),"You will find all the instructions there itself into README.md file."]})]})]})}},3385:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(80);r(9885);var i=r(5816),n=r(2279);let o=function(e){return s.jsx("a",{href:`${e.href}?ref=hacktober2023.vercel.app`,rel:"noopener noreferrer",className:`no-underline text-inherit transition-all ${e.className}`,target:"_blank",children:e.children})},a=function({profileData:e}){return s.jsx("div",{className:"pb-8",children:(0,s.jsxs)("div",{className:"relative pt-10 pb-2 px-2 bg-gray-950 text-white rounded-md",children:[s.jsx("img",{src:`https://github.com/${e?.github?e?.github:"ghost"}.png`,alt:"profile",className:"absolute ring-4 ring-gray-950 -top-8 h-16  rounded-full left-1/2 -translate-x-1/2"}),(0,s.jsxs)("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-semibold",children:e.name}),s.jsx("div",{className:"text-sm font-medium",children:e?.description?e?.description:"</>"}),(0,s.jsxs)("div",{className:"flex justify-center items-center gap-2 text-2xl my-2",children:[e?.github&&e?.github.trim()!=""&&s.jsx(o,{href:`https://github.com/${e?.github}`,children:s.jsx(i.RrF,{})}),e?.linkedin&&e?.linkedin.trim()!=""&&s.jsx(o,{href:`https://linkedin.com/in/${e?.linkedin}`,children:s.jsx(i._iD,{})}),e?.twitter&&e?.twitter.trim()!=""&&s.jsx(o,{href:`https://twitter.com/${e?.twitter}`,children:s.jsx(i.JMB,{})}),e?.portfolio&&e?.portfolio.trim()!=""&&s.jsx(o,{href:e?.portfolio,children:s.jsx(n.q13,{})})]})]})]})})},l=JSON.parse('[{"name":"GDSC Karunya","github":"gdsc-kits","linkedin":"gdsc-kits","description":"Hello Open Source Contributors"},{"name":"Renuka Rajpuria","github":"renuka-rajpuria","linkedin":"renukarajpuria","description":"Web-App Dev | UI/UX"},{"name":"Bewin Felix","github":"Bewin007","linkedin":"bewin-felix","description":"Web Developer"}]');function c(){return s.jsx("div",{children:s.jsx("div",{className:"grid grid-cols-1 max-w-xs mx-auto sm:max-w-full sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",children:l.map((e,t)=>s.jsx(a,{profileData:e},t))})})}},210:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(8144),i=r(7536);let n=(0,i.createProxy)(String.raw`/workspaces/hacktober2023/components/Home/Header.jsx`),{__esModule:o,$$typeof:a}=n,l=n.default,c=(0,i.createProxy)(String.raw`/workspaces/hacktober2023/components/Home/RenderProfiles.jsx`),{__esModule:d,$$typeof:u}=c,p=c.default;function x(){return(0,s.jsxs)("main",{className:"p-4",children:[s.jsx(l,{}),s.jsx(p,{})]})}},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(6885);let i=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"32x32",url:t+""}]}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[385,495,598],()=>r(9209));module.exports=s})();