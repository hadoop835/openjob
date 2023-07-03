import{h as d,K as b,o as x,a9 as r,j as V,k as h,D as e,x as o}from"./vue.bd0669ce.js";const v={class:"form-rules-one-container"},w=d({name:"pagesFormRulesOne"}),k=d({...w,props:{data:{type:Object,default:()=>{}}},setup(p){const c=p,l=b({form:{name:"",email:"",autograph:"",occupation:""},rules:{name:{required:!0,message:"请输入姓名",trigger:"blur"},email:{required:!0,message:"请输入用户邮箱",trigger:"blur"},autograph:{required:!0,message:"请输入登陆账户名",trigger:"blur"},occupation:{required:!0,message:"请选择职务",trigger:"change"}}}),f=()=>{l.form=c.data};return x(()=>{f()}),(q,a)=>{const n=r("el-input"),m=r("el-form-item"),s=r("el-col"),u=r("el-option"),i=r("el-select"),_=r("el-row"),g=r("el-form");return V(),h("div",v,[e(g,{model:l.form,rules:l.rules,ref:"formRulesOneRef",size:"default","label-width":"100px",class:"mt35"},{default:o(()=>[e(_,{gutter:35},{default:o(()=>[e(s,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:o(()=>[e(m,{label:"姓名",prop:"name"},{default:o(()=>[e(n,{modelValue:l.form.name,"onUpdate:modelValue":a[0]||(a[0]=t=>l.form.name=t),placeholder:"请输入姓名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:o(()=>[e(m,{label:"邮箱",prop:"email"},{default:o(()=>[e(n,{modelValue:l.form.email,"onUpdate:modelValue":a[1]||(a[1]=t=>l.form.email=t),placeholder:"请输入用户邮箱",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:o(()=>[e(m,{label:"登陆账户名",prop:"autograph"},{default:o(()=>[e(n,{modelValue:l.form.autograph,"onUpdate:modelValue":a[2]||(a[2]=t=>l.form.autograph=t),placeholder:"请输入登陆账户名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:o(()=>[e(m,{label:"职务",prop:"occupation"},{default:o(()=>[e(i,{modelValue:l.form.occupation,"onUpdate:modelValue":a[3]||(a[3]=t=>l.form.occupation=t),placeholder:"请选择职务",clearable:"",class:"w100"},{default:o(()=>[e(u,{label:"计算机 / 互联网 / 通信",value:"1"}),e(u,{label:"生产 / 工艺 / 制造",value:"2"}),e(u,{label:"医疗 / 护理 / 制药",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}});export{k as default};
