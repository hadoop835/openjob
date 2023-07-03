import{h as R,K,a as b,a9 as l,ac as P,j as o,k as w,y as W,v as s,x as i,D as g,A as p,F as v,Z,u as z,B as f,C as y,R as q,l as G}from"./vue.bd0669ce.js";import{_ as J}from"./_plugin-vue_export-helper.c27b6911.js";const M={class:"table-container"},Q=["src","width","height"],X={class:"table-footer mt15"},Y=R({name:"netxTable"}),ee=R({...Y,props:{data:{default:()=>[],type:Array},header:{default:()=>[],type:Array},config:{type:Object,default:()=>{}}},emits:["delRow","updateRow","viewRow","switchCol","pageChange","sortHeader"],setup(n,{expose:S,emit:c}){const k=n,a=K({page:{pageNum:1,pageSize:1},selectlist:[],checkListAll:!0,checkListIndeterminate:!1}),B=b(()=>!!k.config.isBorder),N=b(()=>k.header.filter(e=>e.isCheck)),V=e=>{a.selectlist=e},D=e=>{c("delRow",e)},x=e=>{c("updateRow",e)},$=(e,r,d)=>{c("switchCol",e,r,d)},U=e=>{c("viewRow",e)},O=e=>{a.page.pageSize=e,c("pageChange",a.page)},A=e=>{a.page.pageNum=e,c("pageChange",a.page)};return S({pageReset:()=>{a.page.pageNum=1,a.page.pageSize=10,c("pageChange",a.page)}}),(e,r)=>{const d=l("el-table-column"),H=l("el-switch"),_=l("el-button"),j=l("ele-Edit"),C=l("el-icon"),E=l("ele-Delete"),I=l("el-empty"),L=l("el-table"),T=l("el-pagination"),F=P("loading");return o(),w("div",M,[W((o(),s(L,q({data:n.data,border:z(B)},e.$attrs,{"row-key":"id",stripe:"",style:{width:"100%"},onSelectionChange:V}),{empty:i(()=>[g(I,{description:"暂无数据"})]),default:i(()=>[n.config.isSelection?(o(),s(d,{key:0,type:"selection","reserve-selection":!0,width:"30"})):p("",!0),n.config.isSerialNo?(o(),s(d,{key:1,type:"index",label:"ID",width:"60"})):p("",!0),(o(!0),w(v,null,Z(z(N),(t,h)=>(o(),s(d,{key:h,"show-overflow-tooltip":"",prop:t.key,width:t.colWidth,label:t.title},{default:i(u=>[t.type==="image"?(o(),w("img",{key:0,src:u.row[t.key],width:t.width,height:t.height},null,8,Q)):t.type==="switch"?(o(),s(H,{key:1,modelValue:u.row[t.key],"onUpdate:modelValue":m=>u.row[t.key]=m,class:"ml-2",size:"default",onChange:m=>$(m,u.row,t.key),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue","onUpdate:modelValue","onChange"])):(o(),w(v,{key:2},[f(y(u.row[t.key]),1)],64))]),_:2},1032,["prop","width","label"]))),128)),n.config.isOperate?(o(),s(d,{key:2,label:"操作",width:"300"},{default:i(t=>[n.config.isOpView?(o(),s(_,{key:0,type:"info",size:"default",onClick:h=>U(t.row)},{default:i(()=>[f(y(e.$t("message.commonBtn.view")),1)]),_:2},1032,["onClick"])):p("",!0),n.config.isOpUpdate?(o(),s(_,{key:1,type:"primary",size:"default",onClick:h=>x(t.row)},{default:i(()=>[g(C,null,{default:i(()=>[g(j)]),_:1}),f(" "+y(e.$t("message.commonBtn.update")),1)]),_:2},1032,["onClick"])):p("",!0),n.config.isOpDelete?(o(),s(_,{key:2,type:"danger",size:"default",onClick:h=>D(t.row)},{default:i(()=>[g(C,null,{default:i(()=>[g(E)]),_:1}),f(" "+y(e.$t("message.commonBtn.delete")),1)]),_:2},1032,["onClick"])):p("",!0)]),_:1})):p("",!0)]),_:1},16,["data","border"])),[[F,n.config.loading]]),G("div",X,[g(T,{"current-page":a.page.pageNum,"onUpdate:current-page":r[0]||(r[0]=t=>a.page.pageNum=t),"page-size":a.page.pageSize,"onUpdate:page-size":r[1]||(r[1]=t=>a.page.pageSize=t),total:n.config.total,layout:"total, prev, pager, next, jumper",background:"",onSizeChange:O,onCurrentChange:A},null,8,["current-page","page-size","total"])])])}}});const ne=J(ee,[["__scopeId","data-v-2bb88925"]]);export{ne as default};
