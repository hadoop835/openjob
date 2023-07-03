import{_ as G}from"./preload-helper.101896b7.js";import{u as J}from"./vue-i18n.cjs.2a00fe88.js";import{u as Q}from"./index.ecee1b36.js";import{b as T}from"./formatTime.057ac5b9.js";import{L as X}from"./storage.b628b270.js";import{u as Y}from"./index.3f2ce315.js";import{h as N,r as S,ap as ee,o as x,K as y,a9 as s,ac as ae,j as u,k as C,l as I,D as a,x as l,u as n,F as te,Z as oe,B as c,C as _,y as le,v as f}from"./vue.bd0669ce.js";import{_ as se}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";import"./request.386cf962.js";import"./index.c3b4fd97.js";import"./index.aa7cec2e.js";import"./themeConfig.cb88f033.js";import"./index.f64fca3a.js";import"./index.e8f4f9cf.js";import"./index.ee56f1f7.js";const re={class:"system-role-container layout-padding"},ne={class:"system-role-padding layout-padding-auto layout-padding-view"},pe={class:"system-user-search mb15"},me=N({name:"systemRole"}),ie=N({...me,setup(de){const{t:p}=J(),R=Q(),B=Y(),g=S(),V=ee(()=>G(()=>import("./dialog.d4b69b79.js"),["assets/dialog.d4b69b79.js","assets/vue-i18n.cjs.2a00fe88.js","assets/_commonjsHelpers.35101cd5.js","assets/vue.bd0669ce.js","assets/index.dbe87b05.js","assets/request.386cf962.js","assets/storage.b628b270.js","assets/index.c3b4fd97.js","assets/index.aa7cec2e.js","assets/themeConfig.cb88f033.js","assets/index.f64fca3a.js","assets/index.e8f4f9cf.js","assets/index.ee56f1f7.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/dialog.cf0d5064.css"])),A=S();x(()=>{L()});const b=y({list:[]}),m=y({form:{namespaceId:X.get("nid"),appId:"",address:""},rules:{}}),t=y({tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10}}}),L=async()=>{let r=await B.getList({namespaceId:m.form.namespaceId,page:1,size:30});b.list=[],r.list.forEach(function(e){b.list.push({id:e.id,label:e.name})})},d=async()=>{t.tableData.loading=!0;let r=await R.getWorkerList({namespaceId:m.form.namespaceId,appId:m.form.appId,address:m.form.address,page:t.tableData.param.pageNum,size:t.tableData.param.pageSize});t.tableData.data=[],r.list.forEach(function(e){t.tableData.data.push({appName:e.appName,address:e.address,status:e.status===1,protocolType:e.protocolType,version:e.version,lastHeartbeatTime:T(e.lastHeartbeatTime),createTime:T(e.createTime)})}),t.tableData.total=r.total,setTimeout(()=>{t.tableData.loading=!1},500)},w=r=>{!r||r.validate(e=>{if(e)d();else return!1})},H=()=>{m.form.address="",m.form.appId="",d()},$=r=>{t.tableData.param.pageSize=r,d()},E=r=>{t.tableData.param.pageNum=r,d()};return x(()=>{d()}),(r,e)=>{const U=s("el-option"),j=s("el-select"),D=s("el-form-item"),v=s("el-col"),F=s("el-input"),M=s("ele-Search"),h=s("el-icon"),k=s("el-button"),P=s("ele-RefreshRight"),q=s("el-row"),K=s("el-form"),i=s("el-table-column"),z=s("el-tag"),O=s("el-table"),W=s("el-pagination"),Z=ae("loading");return u(),C("div",re,[I("div",ne,[I("div",pe,[a(K,{ref_key:"tableSearchRef",ref:g,model:m.form,rules:m.rules},{default:l(()=>[a(q,null,{default:l(()=>[a(v,{xs:8,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:l(()=>[a(D,{label:n(p)("message.app.name"),prop:"appName"},{default:l(()=>[a(j,{modelValue:m.form.appId,"onUpdate:modelValue":e[1]||(e[1]=o=>m.form.appId=o),filterable:"",placeholder:n(p)("message.commonMsg.all"),size:"default",style:{width:"90%"}},{default:l(()=>[(u(!0),C(te,null,oe(b.list,o=>(u(),f(U,{key:o.id,label:o.label,value:o.id,onClick:e[0]||(e[0]=ue=>w(g.value))},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(v,{xs:8,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:l(()=>[a(D,{label:n(p)("message.server.worker.address"),prop:"address"},{default:l(()=>[a(F,{modelValue:m.form.address,"onUpdate:modelValue":e[2]||(e[2]=o=>m.form.address=o),size:"default",style:{width:"95%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),a(v,{xs:8,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:l(()=>[a(k,{size:"default",type:"primary",class:"ml10",onClick:e[3]||(e[3]=o=>w(g.value))},{default:l(()=>[a(h,null,{default:l(()=>[a(M)]),_:1}),c(" "+_(r.$t("message.commonBtn.query")),1)]),_:1}),a(k,{size:"default",type:"primary",class:"ml10",onClick:e[4]||(e[4]=o=>H())},{default:l(()=>[a(h,null,{default:l(()=>[a(P)]),_:1}),c(" "+_(r.$t("message.commonBtn.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),le((u(),f(O,{data:t.tableData.data,style:{width:"100%"}},{default:l(()=>[a(i,{prop:"appName",label:n(p)("message.server.worker.appName"),"show-overflow-tooltip":""},null,8,["label"]),a(i,{prop:"address",label:n(p)("message.server.worker.address"),"show-overflow-tooltip":""},null,8,["label"]),a(i,{prop:"protocolType",label:n(p)("message.server.worker.protocolType"),"show-overflow-tooltip":""},null,8,["label"]),a(i,{prop:"version",label:n(p)("message.server.worker.version"),"show-overflow-tooltip":""},null,8,["label"]),a(i,{prop:"status",label:n(p)("message.server.worker.status"),"show-overflow-tooltip":""},{default:l(o=>[o.row.status?(u(),f(z,{key:0,type:"success"},{default:l(()=>[c(_(n(p)("message.commonBtn.online")),1)]),_:1})):(u(),f(z,{key:1,type:"info"},{default:l(()=>[c(_(n(p)("message.commonBtn.offline")),1)]),_:1}))]),_:1},8,["label"]),a(i,{prop:"lastHeartbeatTime",label:n(p)("message.server.worker.lastHeartbeatTime"),"show-overflow-tooltip":""},null,8,["label"]),a(i,{prop:"createTime",label:n(p)("message.server.worker.createTime"),"show-overflow-tooltip":""},null,8,["label"])]),_:1},8,["data"])),[[Z,t.tableData.loading]]),a(W,{onSizeChange:$,onCurrentChange:E,class:"mt15","pager-count":5,"page-sizes":[10,20,30],"current-page":t.tableData.param.pageNum,"onUpdate:current-page":e[5]||(e[5]=o=>t.tableData.param.pageNum=o),background:"","page-size":t.tableData.param.pageSize,"onUpdate:page-size":e[6]||(e[6]=o=>t.tableData.param.pageSize=o),layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},null,8,["current-page","page-size","total"])]),a(n(V),{ref_key:"nsDialogRef",ref:A,onRefresh:e[7]||(e[7]=o=>d())},null,512)])}}});const Ie=se(ie,[["__scopeId","data-v-018b8a53"]]);export{Ie as default};
