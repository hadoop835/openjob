import{_ as t}from"./preload-helper.101896b7.js";import{h as p,ap as r,r as _,aq as b,ar as C,o as L,w as i,a9 as f,j as k,v as w,x as n,D as e,u as s,J as x}from"./vue.bd0669ce.js";import{u as E}from"./themeConfig.cb88f033.js";import{N as M}from"./loading.3e617409.js";const S=p({name:"layoutDefaults"}),N=p({...S,setup(g){const m=r(()=>t(()=>import("./aside.aa1159e5.js"),["assets/aside.aa1159e5.js","assets/preload-helper.101896b7.js","assets/vue.bd0669ce.js","assets/index.aa7cec2e.js","assets/routesList.32d6bb58.js","assets/themeConfig.cb88f033.js","assets/tagsViewRoutes.054c4a6f.js","assets/storage.b628b270.js","assets/mitt.7f99bbc0.js"])),d=r(()=>t(()=>import("./header.52106c52.js"),["assets/header.52106c52.js","assets/preload-helper.101896b7.js","assets/vue.bd0669ce.js","assets/tagsViewRoutes.054c4a6f.js","assets/storage.b628b270.js"])),y=r(()=>t(()=>import("./main.b18eb16d.js"),["assets/main.b18eb16d.js","assets/preload-helper.101896b7.js","assets/vue.bd0669ce.js","assets/tagsViewRoutes.054c4a6f.js","assets/storage.b628b270.js","assets/themeConfig.cb88f033.js","assets/loading.3e617409.js","assets/loading.70fbfd85.css"])),o=_(""),a=_(),R=b(),v=E(),{themeConfig:h}=C(v),l=()=>{o.value.update(),a.value.layoutMainScrollbarRef.update()},c=()=>{x(()=>{setTimeout(()=>{l(),o.value.wrapRef.scrollTop=0,a.value.layoutMainScrollbarRef.wrapRef.scrollTop=0},500)})};return L(()=>{c(),M.done(600)}),i(()=>R.path,()=>{c()}),i(h,()=>{l()},{deep:!0}),(A,D)=>{const T=f("el-scrollbar"),u=f("el-container");return k(),w(u,{class:"layout-container"},{default:n(()=>[e(s(m)),e(u,{class:"layout-container-view h100"},{default:n(()=>[e(T,{ref_key:"layoutScrollbarRef",ref:o,class:"layout-backtop"},{default:n(()=>[e(s(d)),e(s(y),{ref_key:"layoutMainRef",ref:a},null,512)]),_:1},512)]),_:1})]),_:1})}}});export{N as default};
