import{_ as x}from"./preload-helper.101896b7.js";import{h as D,ap as L,aH as le,ar as M,r as re,K as N,a as ae,o as O,a9 as g,j as T,k as A,D as n,x as o,F as ie,Z as ce,v as ue,B as d,C as p,l as i,u as w,n as P,q as de}from"./vue.bd0669ce.js";import{u as me}from"./vue-i18n.cjs.2a00fe88.js";import{u as fe}from"./userInfo.f7c9dd73.js";import{u as ge}from"./themeConfig.cb88f033.js";import{o as pe}from"./other.e9eeae65.js";import{e as _e}from"./mitt.7f99bbc0.js";import{L as f,S as be}from"./storage.b628b270.js";import{u as he}from"./index.c41e61d7.js";import{f as we}from"./index.ee56f1f7.js";import{u as ve}from"./index.dbe87b05.js";import{ay as Ce}from"./index.e8f4f9cf.js";import{J as Se}from"./index.f64fca3a.js";import{_ as Ee}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";import"./index.2f1ef0a5.js";import"./index.aa7cec2e.js";import"./keepAliveNames.f05bad75.js";import"./routesList.32d6bb58.js";import"./loading.3e617409.js";import"./tagsViewRoutes.054c4a6f.js";import"./request.386cf962.js";import"./index.c3b4fd97.js";import"./toolsValidate.7cb139e2.js";const q=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],_=(()=>{if(typeof document>"u")return!1;const l=q[0],r={};for(const s of q)if((s==null?void 0:s[1])in document){for(const[h,v]of s.entries())r[l[h]]=v;return r}return!1})(),R={change:_.fullscreenchange,error:_.fullscreenerror};let c={request(l=document.documentElement,r){return new Promise((s,b)=>{const h=()=>{c.off("change",h),s()};c.on("change",h);const v=l[_.requestFullscreen](r);v instanceof Promise&&v.then(h).catch(b)})},exit(){return new Promise((l,r)=>{if(!c.isFullscreen){l();return}const s=()=>{c.off("change",s),l()};c.on("change",s);const b=document[_.exitFullscreen]();b instanceof Promise&&b.then(s).catch(r)})},toggle(l,r){return c.isFullscreen?c.exit():c.request(l,r)},onchange(l){c.on("change",l)},onerror(l){c.on("error",l)},on(l,r){const s=R[l];s&&document.addEventListener(s,r,!1)},off(l,r){const s=R[l];s&&document.removeEventListener(s,r,!1)},raw:_};Object.defineProperties(c,{isFullscreen:{get:()=>Boolean(document[_.fullscreenElement])},element:{enumerable:!0,get:()=>document[_.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[_.fullscreenEnabled])}});_||(c={isEnabled:!1});const z=c,ke={class:"layout-navbars-breadcrumb-user-icon"},Fe={class:"layout-navbars-breadcrumb-user-icon"},ye=["title"],ze={class:"layout-navbars-breadcrumb-user-icon"},Ie=["title"],Be=["title"],Te={class:"layout-navbars-breadcrumb-user-icon"},$e=["title"],xe={class:"layout-navbars-breadcrumb-user-link"},Le=["src"],Me=D({name:"layoutBreadcrumbUser"}),Ne=D({...Me,setup(l){const r=he(),s=ve(),b=L(()=>x(()=>import("./userNews.95bf4b7f.js"),["assets/userNews.95bf4b7f.js","assets/vue.bd0669ce.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/userNews.a45651b4.css"])),h=L(()=>x(()=>import("./search.b0510d95.js"),["assets/search.b0510d95.js","assets/vue.bd0669ce.js","assets/vue-i18n.cjs.2a00fe88.js","assets/_commonjsHelpers.35101cd5.js","assets/tagsViewRoutes.054c4a6f.js","assets/storage.b628b270.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/search.3305851d.css"])),{locale:v,t:S}=me(),V=le(),j=fe(),H=ge(),{userInfos:I}=M(j),{themeConfig:E}=M(H),$=re(),C=N({current:"default",list:[]}),u=N({isScreenfull:!1,disabledI18n:"zh-cn",disabledSize:"large"}),U=ae(()=>{let e="";const{layout:m,isClassicSplitMenu:a}=E.value;return["defaults","columns"].includes(m)||m==="classic"&&!a?e="1":e="",e});O(()=>{Q()});const J=()=>{if(!z.isEnabled)return Ce.warning("暂不不支持全屏"),!1;z.toggle(),z.on("change",()=>{z.isFullscreen?u.isScreenfull=!0:u.isScreenfull=!1})},K=()=>{_e.emit("openSetingsDrawer")},Z=e=>{e==="logOut"?Se({closeOnClickModal:!1,closeOnPressEscape:!1,title:S("message.user.logOutTitle"),message:S("message.user.logOutMessage"),showCancelButton:!0,confirmButtonText:S("message.user.logOutConfirm"),cancelButtonText:S("message.user.logOutCancel"),buttonSize:"default",beforeClose:(m,a,t)=>{m==="confirm"?(a.confirmButtonLoading=!0,a.confirmButtonText=S("message.user.logOutExit"),setTimeout(()=>{t(),setTimeout(()=>{a.confirmButtonLoading=!1},300)},700)):t()}}).then(async()=>{await r.logout(),be.clear(),window.location.reload()}).catch(()=>{}):e==="wareHouse"?window.open("https://github.com/open-job/openjob"):V.push(e)},G=()=>{$.value.openSearch()},Q=async()=>{let e=await s.getList({page:1,size:30});C.list=[];let m=0,a=f.get("nid");e.list.forEach(function(t){m===0&&a==null&&(C.current=t.name,f.set("nid",t.id)),C.list.push({id:t.id,name:t.name,status:t.status===1,uniqueId:t.uuid,createTime:t.createTime}),a!=null&&a===t.id&&(C.current=t.name),m++})},W=e=>{f.remove("nid"),f.set("nid",e),window.location.reload()},X=e=>{f.remove("themeConfig"),E.value.globalComponentSize=e,f.set("themeConfig",E.value),k("globalComponentSize","disabledSize"),window.location.reload()},Y=e=>{f.remove("themeConfig"),E.value.globalI18n=e,f.set("themeConfig",E.value),v.value=e,pe.useTitle(),k("globalI18n","disabledI18n")},k=(e,m)=>{u[m]=f.get("themeConfig")[e]};return O(()=>{f.get("themeConfig")&&(k("globalComponentSize","disabledSize"),k("globalI18n","disabledI18n"))}),(e,m)=>{const a=g("el-icon"),t=g("el-dropdown-item"),F=g("el-dropdown-menu"),y=g("el-dropdown"),ee=g("ele-Search"),ne=g("ele-Bell"),oe=g("el-badge"),te=g("el-popover"),se=g("ele-ArrowDown");return T(),A("div",{class:"layout-navbars-breadcrumb-user pr15",style:de({flex:w(U)})},[n(y,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:W},{dropdown:o(()=>[n(F,null,{default:o(()=>[(T(!0),A(ie,null,ce(C.list,B=>(T(),ue(t,{key:B.id,command:B.id},{default:o(()=>[d(p(B.name),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:o(()=>[i("div",ke,[d(p(C.current)+" ",1),n(a,{class:"el-icon--right"},{default:o(()=>[n(w(we))]),_:1})])]),_:1}),n(y,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:X},{dropdown:o(()=>[n(F,null,{default:o(()=>[n(t,{command:"large",disabled:u.disabledSize==="large"},{default:o(()=>[d(p(e.$t("message.user.dropdownLarge")),1)]),_:1},8,["disabled"]),n(t,{command:"default",disabled:u.disabledSize==="default"},{default:o(()=>[d(p(e.$t("message.user.dropdownDefault")),1)]),_:1},8,["disabled"]),n(t,{command:"small",disabled:u.disabledSize==="small"},{default:o(()=>[d(p(e.$t("message.user.dropdownSmall")),1)]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[i("div",Fe,[i("i",{class:"iconfont icon-ziti",title:e.$t("message.user.title0")},null,8,ye)])]),_:1}),n(y,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:Y},{dropdown:o(()=>[n(F,null,{default:o(()=>[n(t,{command:"zh-cn",disabled:u.disabledI18n==="zh-cn"},{default:o(()=>[d("简体中文")]),_:1},8,["disabled"]),n(t,{command:"en",disabled:u.disabledI18n==="en"},{default:o(()=>[d("English")]),_:1},8,["disabled"]),n(t,{command:"zh-tw",disabled:u.disabledI18n==="zh-tw"},{default:o(()=>[d("繁體中文")]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[i("div",ze,[i("i",{class:P(["iconfont",u.disabledI18n==="en"?"icon-fuhao-yingwen":"icon-fuhao-zhongwen"]),title:e.$t("message.user.title1")},null,10,Ie)])]),_:1}),i("div",{class:"layout-navbars-breadcrumb-user-icon",onClick:G},[n(a,{title:e.$t("message.user.title2")},{default:o(()=>[n(ee)]),_:1},8,["title"])]),i("div",{class:"layout-navbars-breadcrumb-user-icon",onClick:K},[i("i",{class:"icon-skin iconfont",title:e.$t("message.user.title3")},null,8,Be)]),i("div",Te,[n(te,{placement:"bottom",trigger:"click",transition:"el-zoom-in-top",width:300,persistent:!1},{reference:o(()=>[n(oe,{"is-dot":!0},{default:o(()=>[n(a,{title:e.$t("message.user.title4")},{default:o(()=>[n(ne)]),_:1},8,["title"])]),_:1})]),default:o(()=>[n(w(b))]),_:1})]),i("div",{class:"layout-navbars-breadcrumb-user-icon mr10",onClick:J},[i("i",{class:P(["iconfont",u.isScreenfull?"icon-tuichuquanping":"icon-fullscreen"]),title:u.isScreenfull?e.$t("message.user.title6"):e.$t("message.user.title5")},null,10,$e)]),n(y,{"show-timeout":70,"hide-timeout":50,onCommand:Z},{dropdown:o(()=>[n(F,null,{default:o(()=>[n(t,{command:"/home"},{default:o(()=>[d(p(e.$t("message.user.dropdown1")),1)]),_:1}),n(t,{command:"wareHouse"},{default:o(()=>[d(p(e.$t("message.user.dropdown6")),1)]),_:1}),n(t,{divided:"",command:"logOut"},{default:o(()=>[d(p(e.$t("message.user.dropdown5")),1)]),_:1})]),_:1})]),default:o(()=>[i("span",xe,[i("img",{src:w(I).photo,class:"layout-navbars-breadcrumb-user-link-photo mr5"},null,8,Le),d(" "+p(w(I).userName===""?"common":w(I).userName)+" ",1),n(a,{class:"el-icon--right"},{default:o(()=>[n(se)]),_:1})])]),_:1}),n(w(h),{ref_key:"searchRef",ref:$},null,512)],4)}}});const rn=Ee(Ne,[["__scopeId","data-v-3b91567c"]]);export{rn as default};
