import{_ as G}from"./preload-helper.101896b7.js";import{h as w,ap as H,r as Q,K as W,a9 as m,j as u,k as c,D as l,x as o,l as X,B as f,C as _,u as s,F as y,Z as b,y as j,E as I,v as g}from"./vue.543fafcc.js";import{u as Y}from"./vue-i18n.cjs.f888bd5c.js";import{c as ee}from"./data.4fb22732.js";import{a as le}from"./index.e43cf833.js";import{_ as oe}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";import"./index.628584d6.js";import"./request.7fb0c72a.js";import"./storage.b628b270.js";import"./index.40b52e29.js";import"./index.18e5bded.js";import"./themeConfig.ab165958.js";import"./index.4ac74e37.js";import"./index.070d5527.js";import"./index.3b68140d.js";import"./header.9390c1c5.js";const ae={class:"system-role-dialog-container"},te={class:"dialog-footer"},re=w({name:"systemRoleDialog"}),se=w({...re,emits:["refresh"],setup(ne,{expose:C,emit:k}){const x=H(()=>G(()=>import("./monaco.da9167a8.js").then(a=>a.a),["assets/monaco.da9167a8.js","assets/preload-helper.101896b7.js","assets/vue.543fafcc.js","assets/monaco.82344604.css"])),{t:n}=Y(),D=le(),h=Q(),e=W({rowState:{inputProcessor:!0,shellProcessor:!1},syncEditor:!1,shellEditor:{editorStyle:"width: 95%;height: 260px;",language:"shell"},paramsEditor:{editorStyle:"width: 95%;height: 260px;"},paramsExtEditor:{editorStyle:"width: 95%;height: 120px;"},processorType:[{value:"processor",label:"processor"},{value:"shell",label:"shell"},{value:"http",label:"http"}],contentType:[{value:"plaintext",label:"plaintext"},{value:"json",label:"json"},{value:"yaml",label:"yaml"},{value:"properties",label:"properties"}],fromRules:{},appList:[],ruleForm:{id:0,appId:0,processorType:"java",processorInfo:"",shellProcessorInfo:"",paramsType:"text",params:"",extendParamsType:"text",extendParams:"",id:0,name:""},menuData:[],menuProps:{children:"children",label:"label"},dialog:{isShowDialog:!1,type:"",title:""}}),U=async a=>{var r;(r=h.value)==null||r.clearValidate(),await A(a),e.syncEditor=!0,await O(a),e.syncEditor=!1,a.processorType=="shell"?(e.paramsEditor.editorStyle="width: 95%;height: 60px;",e.paramsExtEditor.editorStyle="width: 95%;height: 60px;"):(e.paramsEditor.editorStyle="width: 95%;height: 260px;",e.paramsExtEditor.editorStyle="width: 95%;height: 120px;"),e.dialog.title=n("message.job.job.executeJobTitle"),e.dialog.isShowDialog=!0},A=async a=>{e.appList=await ee(),e.ruleForm.appId=a.appId},v=()=>{e.dialog.isShowDialog=!1},B=()=>{v()},L=async a=>{!a||await a.validate(r=>{if(r)M();else return!1})},M=async()=>{await D.execute({id:e.ruleForm.id,params:e.ruleForm.params,extendParams:e.ruleForm.extendParams}),v(),k("refresh")},R=a=>{e.ruleForm.paramsType=a},J=a=>{e.ruleForm.extendParamsType=a},z=a=>{e.ruleForm.shellProcessorInfo=a},N=a=>{e.ruleForm.params=a},$=a=>{e.ruleForm.extendParams=a},O=async a=>{e.ruleForm.id=a.id,e.ruleForm.appId=a.appId,e.ruleForm.name=a.name,e.ruleForm.processorType=a.processorType,e.ruleForm.processorInfo=a.processorInfo,e.ruleForm.paramsType=a.paramsType,e.ruleForm.params=a.params,e.ruleForm.extendParamsType=a.extendParamsType,e.ruleForm.extendParams=a.extendParams,a.processorType=="shell"?(e.rowState.inputProcessor=!1,e.rowState.shellProcessor=!0,e.ruleForm.shellProcessorInfo=a.processorInfo):(e.rowState.inputProcessor=!0,e.rowState.shellProcessor=!1)};return C({openDialog:U}),(a,r)=>{const F=m("el-input"),p=m("el-form-item"),d=m("el-col"),i=m("el-row"),P=m("el-option"),T=m("el-select"),S=m("el-radio"),E=m("el-radio-group"),K=m("el-form"),V=m("el-button"),Z=m("el-dialog");return u(),c("div",ae,[l(Z,{title:e.dialog.title,modelValue:e.dialog.isShowDialog,"onUpdate:modelValue":r[7]||(r[7]=t=>e.dialog.isShowDialog=t),width:"800"},{footer:o(()=>[X("span",te,[l(V,{onClick:B,size:"default"},{default:o(()=>[f(_(s(n)("message.commonBtn.cancel")),1)]),_:1}),l(V,{type:"primary",onClick:r[6]||(r[6]=t=>L(h.value)),size:"default"},{default:o(()=>[f(_(s(n)("message.commonBtn.confirm")),1)]),_:1})])]),default:o(()=>[l(K,{ref_key:"appDialogFormRef",ref:h,model:e.ruleForm,"label-width":"100px",rules:e.fromRules,size:"default"},{default:o(()=>[l(i,null,{default:o(()=>[l(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(p,{label:s(n)("message.job.job.name"),prop:"name"},{default:o(()=>[l(F,{modelValue:e.ruleForm.name,"onUpdate:modelValue":r[0]||(r[0]=t=>e.ruleForm.name=t),clearable:"",disabled:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(i,null,{default:o(()=>[l(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(p,{label:s(n)("message.job.job.application"),prop:"appId"},{default:o(()=>[l(T,{modelValue:e.ruleForm.appId,"onUpdate:modelValue":r[1]||(r[1]=t=>e.ruleForm.appId=t),class:"m-2",filterable:"",placeholder:s(n)("message.commonMsg.emptySelect"),style:{width:"100%"},disabled:""},{default:o(()=>[(u(!0),c(y,null,b(e.appList,t=>(u(),g(P,{key:t.id,label:t.label,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(p,{label:s(n)("message.job.job.processorType"),prop:"processorType"},{default:o(()=>[l(T,{modelValue:e.ruleForm.processorType,"onUpdate:modelValue":r[2]||(r[2]=t=>e.ruleForm.processorType=t),class:"m-2",placeholder:s(n)("message.commonMsg.emptySelect"),style:{width:"100%"},disabled:""},{default:o(()=>[(u(!0),c(y,null,b(e.processorType,t=>(u(),g(P,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),j(l(i,null,{default:o(()=>[l(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(p,{label:s(n)("message.job.job.processorInfo"),prop:"processorInfo"},{default:o(()=>[l(F,{modelValue:e.ruleForm.processorInfo,"onUpdate:modelValue":r[3]||(r[3]=t=>e.ruleForm.processorInfo=t),disabled:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},512),[[I,e.rowState.inputProcessor]]),j(l(i,null,{default:o(()=>[l(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(p,{label:s(n)("message.job.job.processorInfo"),prop:"shellProcessorInfo"},{default:o(()=>[l(s(x),{ref:"shellProcessorMonacoEditor",editorStyle:e.shellEditor.editorStyle,language:e.shellEditor.language,value:e.ruleForm.shellProcessorInfo,syncValue:e.syncEditor,readOnly:!0,onUpdateContent:z},null,8,["editorStyle","language","value","syncValue"])]),_:1},8,["label"])]),_:1})]),_:1},512),[[I,e.rowState.shellProcessor]]),l(i,null,{default:o(()=>[l(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(p,{label:s(n)("message.job.job.paramsType"),prop:"paramsType"},{default:o(()=>[l(E,{modelValue:e.ruleForm.paramsType,"onUpdate:modelValue":r[4]||(r[4]=t=>e.ruleForm.paramsType=t)},{default:o(()=>[(u(!0),c(y,null,b(e.contentType,t=>(u(),g(S,{key:t.value,label:t.label,onClick:q=>R(t.value)},{default:o(()=>[f(_(t.value),1)]),_:2},1032,["label","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(i,null,{default:o(()=>[l(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(p,{label:s(n)("message.job.job.params"),prop:"params"},{default:o(()=>[l(s(x),{ref:"JobExecuteParamsMonacoEditor",editorStyle:e.paramsEditor.editorStyle,language:e.ruleForm.paramsType,value:e.ruleForm.params,syncValue:e.syncEditor,onUpdateContent:N},null,8,["editorStyle","language","value","syncValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(i,null,{default:o(()=>[l(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(p,{label:s(n)("message.job.job.extendParamsType"),prop:"extendParamsType"},{default:o(()=>[l(E,{modelValue:e.ruleForm.extendParamsType,"onUpdate:modelValue":r[5]||(r[5]=t=>e.ruleForm.extendParamsType=t)},{default:o(()=>[(u(!0),c(y,null,b(e.contentType,t=>(u(),g(S,{key:t.value,label:t.label,onClick:q=>J(t.value)},{default:o(()=>[f(_(t.value),1)]),_:2},1032,["label","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(i,null,{default:o(()=>[l(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(p,{label:s(n)("message.job.job.extendParams"),prop:"extendParams"},{default:o(()=>[l(s(x),{ref:"JobExecuteExtParamsMonacoEditor",editorStyle:e.paramsExtEditor.editorStyle,language:e.ruleForm.extendParamsType,value:e.ruleForm.extendParams,syncValue:e.syncEditor,onUpdateContent:$},null,8,["editorStyle","language","value","syncValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});const Se=oe(se,[["__scopeId","data-v-e2d1b529"]]);export{Se as default};