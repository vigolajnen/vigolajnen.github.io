import{j as e,r as g}from"./react-IgOIl9ry.js";import{g as v}from"./react-router-nW7sZ5EC.js";import{u as x,a as F,F as D}from"./react-hook-form-2OOmt7Sb.js";import{c as m}from"./classnames-TNdf9gv5.js";import{F as a,R as T,a as y,S as L}from"./react-bootstrap-M_3qvaXL.js";import{R as q}from"./react-input-mask-qEPAazdk.js";import{L as u}from"./react-router-dom-u1qxhDCI.js";import"./@remix-run-R0A6g4pJ.js";import"./@restart-qa6dQ-ng.js";import"./dom-helpers-8NB3xFiQ.js";import"./@react-aria-AQHRbwmN.js";import"./react-dom-KbPXDqFo.js";import"./scheduler-iwWdm5Ml.js";import"./dequal-vEqHzq4I.js";import"./@popperjs-u7bcf535.js";import"./warning-A3mB0AEe.js";import"./uncontrollable-pCYDPJxe.js";import"./@babel-o_ZSNJgm.js";import"./prop-types-owtuOFwk.js";import"./react-transition-group-ZcXJ-rOp.js";const P="_label_1va20_5",I="_control_1va20_12",R="_stepper_1va20_23",G="_stepperItem_1va20_44",O="_active_1va20_68",E="_labelCheck_1va20_76",M="_link_1va20_80",Y="_buttonNext_1va20_88",n={label:P,control:I,stepper:R,stepperItem:G,active:O,labelCheck:E,link:M,buttonNext:Y},V=(t,r)=>({first_name:t.firstName,last_name:r.lastName,middle_name:"",birth_day:r.birth_day,phone:J(t.phone),email:r.email}),B=(t,r,s)=>(console.log(r,t),[{name:s.title,price:s.price,price_id:r.club_id},{name:r.product_name,price:r.product_price,price_id:r.product_id}]),A=(t,r,s)=>({customer:V(t,r),products:B(t,r,s),recurrentable:!0}),H=t=>{var r=new Date,s=new Date(r.getFullYear(),r.getMonth(),r.getDate()),o=new Date(t),i=new Date(s.getFullYear(),o.getMonth(),o.getDate()),l;return l=s.getFullYear()-o.getFullYear(),s<i&&(l=l-1),l},$=()=>{const t=new Date().toLocaleDateString(),r=t.slice(3,5),s=t.slice(0,2);return new Date().getFullYear()-14+"-"+r+"-"+s},J=t=>t.replace(/[^0-9]/g,"").slice(1).trim(),K=t=>Array.from(t.split("").reduce((r,s)=>(r.set(s,(r.get(s)||0)+1),r),new Map)),U=t=>{const r=t.replace(/[^+\d]/g,"").slice(2);return r.length===10&&K(r)[0][1]<10},W=t=>t&&t.indexOf("_")===-1&&U(t)?void 0:"Phone number is required.",z=t=>H(t)>=14,Q=()=>{const{register:t,formState:{errors:r}}=x();return e.jsxs(e.Fragment,{children:[e.jsxs(a.Group,{className:"mb-3",children:[e.jsx(a.Label,{className:n.label,children:"Имя"}),e.jsx(a.Control,{type:"text",id:"first_name",placeholder:"Имя",className:n.control,...t("firstName",{required:!0})}),r.firstName&&e.jsx(a.Text,{className:"text-danger",children:"error firstName"})]}),e.jsxs(a.Group,{className:"mb-3",children:[e.jsx(a.Label,{className:n.label,children:"Номер телефона"}),e.jsx(q,{id:"phone",type:"tel",className:m(n.control,"form-control"),mask:"+7(999) 999-99-99",alwaysShowMask:!0,...t("phone",{validate:{inputTelRequired:W}})}),r.phone&&e.jsx(a.Text,{className:"text-danger",children:"error phone"})]})]})},X=({data:t,item:r})=>{const s=$().toString(),{register:o,formState:{errors:i}}=x();return e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:[e.jsx(y,{xs:12,sm:6,children:e.jsxs(a.Group,{className:"mb-3",children:[e.jsx(a.Label,{className:n.label,children:"Имя"}),e.jsx(a.Control,{type:"text",name:"first_name",placeholder:"Имя",id:"firstName",value:t.firstName,readOnly:!0,className:n.control})]})}),e.jsx(y,{xs:12,sm:6,children:e.jsxs(a.Group,{className:"mb-3",children:[e.jsx(a.Label,{className:n.label,children:"Фамилия"}),e.jsx(a.Control,{type:"text",placeholder:"Фамилия",className:n.control,id:"lastName",...o("lastName",{required:!0})}),i.lastName&&e.jsx(a.Text,{className:"text-danger",children:"error lastName"})]})})]}),e.jsxs(a.Group,{className:"mb-3",children:[e.jsx(a.Label,{className:n.label,children:"Выберите клуб"}),e.jsxs(a.Select,{"aria-label":"Выберите клуб",className:n.control,...o("club_id",{required:!0}),children:[e.jsx("option",{disabled:!0,value:"",children:"Выберете клуб"}),(r==null?void 0:r.clubs.length)>0?[...r.clubs].map(l=>e.jsx("option",{value:l.id,children:l.address},l.address)):null]})]}),e.jsxs(a.Group,{className:"mb-3",children:[e.jsx(a.Label,{className:n.label,children:"Номер телефона"}),e.jsx(a.Control,{type:"tel",name:"phone",className:n.control,id:"phone",value:t.phone,readOnly:!0})]}),e.jsxs(a.Group,{className:"mb-3",children:[e.jsx(a.Label,{className:n.label,children:"Дата рождения"}),e.jsx(a.Control,{type:"date",className:n.control,id:"customer_birth_day",min:"1900-01-01",max:s,onKeyDown:l=>l.preventDefault(),...o("birth_day",{required:!0,validate:{inputBirthDayRequired:z}})}),i.birth_day&&e.jsx(a.Text,{className:"text-danger",children:"error birth_day"})]}),e.jsxs(a.Group,{className:"mb-3",children:[e.jsx(a.Label,{className:n.label,children:"Email"}),e.jsx(a.Control,{type:"email",placeholder:"Email",className:n.control,id:"email",...o("email",{required:!0})}),i.email&&e.jsx(a.Text,{className:"text-danger",children:"error email"})]})]})};function Z(){return e.jsx("div",{className:"d-flex justify-content-center py-4",children:e.jsx(L,{})})}const ee=()=>{const{register:t,formState:{errors:r}}=x();return e.jsx(e.Fragment,{children:e.jsxs(a.Check,{type:"checkbox",id:"checkbox",children:[e.jsx(a.Check.Input,{type:"checkbox",...t("isCheck",{required:!0})}),e.jsxs(a.Check.Label,{className:n.labelCheck,children:["Я ознакомлен(-на) и согласен(-на) с условиями"," ",e.jsx(u,{to:"/",className:n.link,target:"_blank",rel:"noreferrer",children:"Договора Оферты"}),","," ",e.jsx(u,{to:"/",className:n.link,target:"_blank",rel:"noreferrer",children:"Правилами Клуба"})," ","и даю своё согласие на"," ",e.jsx(u,{to:"/",className:n.link,target:"_blank",rel:"noreferrer",children:"обработку персональных данных"}),"."]}),r.isCheck&&e.jsx(a.Text,{className:"text-danger",children:"error isCheck "})]})})},te=t=>t.ok?t.json():Promise.reject(`${t.status}`),re=t=>t&&t.success?t:Promise.reject(`Ответ не success: ${t}`),se=(t,r)=>{let s;return window.location.hostname==="localhost"?s="http://127.0.0.1:8000/payments/"+t+"/":s=window.location.origin+"/payments/"+t+"/",fetch(s,r).then(te).then(re)},k=new Headers;k.append("Content-Type","application/json");const ae=t=>({method:"POST",headers:k,body:JSON.stringify(t),redirect:"follow"}),h={firstName:"",lastName:"",phone:"",email:"",birth_day:"",club_id:"",isCheck:!1},ne=({item:t})=>{const r=[1,2,3],[s,o]=g.useState(1),[i,l]=g.useState(h),b=F({mode:"onChange",defaultValues:{loadState:"unloaded",initialState:[h]}}),{formState:{isValid:j},watch:p,reset:S}=b,N=()=>{o(c=>c+1)},w=c=>{c=p(),l(c),N(),console.log("values",p())},_=c=>{c=p();const f=A(i,c,t);console.log(f),se("orders",ae(f)).then(d=>{d.pay_url&&(window.location=d.pay_url)}).catch(d=>console.log("error",d)),S(),l(h),N()},C=()=>s>2?null:s===2?e.jsx("button",{type:"button",className:m(n.buttonNext,"w-100 my-2 mb-4 p-3"),onClick:_,disabled:!j,children:"Оплатить"}):e.jsx("button",{type:"button",onClick:w,className:m(n.buttonNext,"w-100 my-2 mb-4 p-3"),disabled:!j,children:"Далее"});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:n.stepper,children:r.map(c=>e.jsx("div",{className:c<=s?m(n.stepperItem,n.active):n.stepperItem,children:e.jsx("span",{children:c})},c))}),e.jsx(D,{...b,children:e.jsxs(a,{noValidate:!0,onSubmit:_,children:[s>=1&&e.jsx("div",{className:s===1?"":"d-none",children:e.jsx(Q,{})}),s>=2&&e.jsx("div",{className:s===2?"":"d-none",children:e.jsx(X,{data:i,item:t})}),s>=3&&e.jsx("div",{className:s===3?"":"d-none",children:e.jsx(Z,{})}),C(),s<=2&&e.jsx("div",{className:s===2||s===1?"":"d-none",children:e.jsx(ee,{})})]})})]})},Ce=()=>{const t=v(),r=[{id:1,price:2e3,type:"full",isPool:!0,clubs:[{address:"1"}]},{id:2,price:1e3,type:"morning",isPool:!0,clubs:[{address:"1"}]},{id:3,price:1e3,type:"mc_full",isPool:!0,clubs:[{address:"1"}]}],s=()=>r==null?void 0:r.find(o=>o.id===Number(t.id));return e.jsx(ne,{item:s()})};export{Ce as default};
