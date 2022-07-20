"use strict";(self.webpackChunkslimmom_front_end=self.webpackChunkslimmom_front_end||[]).push([[260],{4941:function(n,e,t){t.d(e,{Z:function(){return B}});var i,r,o=t(4165),a=t(1413),d=t(5861),l=t(9439),u=t(2506),s=t(7939),h=s.ZP.form.withConfig({displayName:"CalculatoralorieFormstyled__Form",componentId:"sc-oqpy5b-0"})(["min-width:280px;display:flex;flex-direction:column;@media (min-width:","){align-items:flex-start;}"],(function(n){return n.theme.breakpoints.tablet})),c=s.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__Block",componentId:"sc-oqpy5b-1"})(["margin-top:19px;"]),m=s.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__InputContainer",componentId:"sc-oqpy5b-2"})(["@media (min-width:","){display:flex;width:510px;}@media (min-width:","){align-items:flex-start;}"],(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop})),g=s.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__Wrapper",componentId:"sc-oqpy5b-3"})([""]),p=s.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__BoxButton",componentId:"sc-oqpy5b-4"})(["margin:auto;margin-top:40px;@media (min-width:","){margin:28px 0 0;}@media (min-width:","){margin-left:auto;margin-right:0;}"],(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop})),f=t(168),x=t(7630),b=t(4479),v=t(7133),y=t(5523),Z=(0,x.ZP)(b.Z)({color:"#E0E0E0","&.Mui-checked":{color:" #fc842d"}}),w=(0,x.ZP)(v.Z)(i||(i=(0,f.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.2;\n  letter-spacing: 0.04em;\n  margin-bottom: 8.5px;\n  color: #9b9faa;\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 11px;\n    border-bottom: 1px solid #e0e0e0;\n    display: block;\n  }\n"]))),j=(0,x.ZP)(y.Z)(r||(r=(0,f.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.2;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n"]))),C=t(765),P=t(2791),k=t(5048),W=t(1014),M=t(2020),T=t(7942),q=T.Ry({height:T.Rx().typeError("Height must be a number").min(100,"Height should be of min 100").max(250,"Height should be of max 250").required("Height is required"),age:T.Rx().typeError("Age must be a number").min(18,"Age should be of min 18").max(100,"Age should be of max 100").required("Age is required"),currentWeight:T.Rx().typeError("CurrentWeight must be a number").min(20,"CurrentWeight should be of min 20").max(500,"CurrentWeight should be of max 500").required("CurrentWeight is required"),desiredWeight:T.Rx().typeError("DesiredWeight must be a number").min(20,"DesiredWeight should be of min 20").max(500,"DesiredWeight should be of max 500").required("DesiredWeight is required")}),z=t(3541),H=function(n){var e={};return null!==n&&void 0!==n&&n.age&&Object.keys(n).forEach((function(t){return e[t]=Number(n[t])})),e},$=t(5708),I=t(2051),S=t.n(I),_=t(8747),E=t(3979),F=t(184),N=[1,2,3,4],B=function(n){var e=n.openModal,t=n.getPrivatDailyNorma,i=(0,M.$)().t,r=(0,P.useState)(1),s=(0,l.Z)(r,2),f=s[0],x=s[1],b=S()(),v=(0,l.Z)(b,2),y=v[0],T=v[1].width,I=(0,k.I0)(),B=(0,k.v9)(W.M7),D=T<=767,A=(0,$.jo)(),R=(0,l.Z)(A,2)[1],V=(0,u.TA)({initialValues:{height:"",age:"",currentWeight:"",desiredWeight:""},validationSchema:q,onSubmit:function(){var n=(0,d.Z)((0,o.Z)().mark((function n(i,r){var d,l;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(d=r.resetForm,l=(0,a.Z)((0,a.Z)({},i),{},{bloodType:f}),I((0,z.M)(H(l))),!B){n.next=6;break}return n.next=6,t(l);case 6:if(!V.dirty||B||D){n.next=9;break}return n.next=9,e();case 9:if(!V.dirty||B||!D){n.next=12;break}return n.next=12,R();case 12:d();case 13:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()});return(0,F.jsxs)(h,{onSubmit:V.handleSubmit,children:[y,(0,F.jsxs)(m,{children:[(0,F.jsxs)(g,{children:[(0,F.jsx)(E.I,{name:"height",label:i("height"),value:V.values.height,onChange:V.handleChange,error:V.touched.height&&Boolean(V.errors.height),helperText:V.touched.height&&V.errors.height}),(0,F.jsx)(E.I,{name:"age",label:i("age"),value:V.values.age,onChange:V.handleChange,error:V.touched.age&&Boolean(V.errors.age),helperText:V.touched.age&&V.errors.age}),(0,F.jsx)(E.I,{name:"currentWeight",label:i("weight"),type:"currentWeight",value:V.values.currentWeight,onChange:V.handleChange,error:V.touched.currentWeight&&Boolean(V.errors.currentWeight),helperText:V.touched.currentWeight&&V.errors.currentWeight})]}),(0,F.jsxs)(g,{children:[(0,F.jsx)(E.I,{name:"desiredWeight",label:i("desiredWeight"),value:V.values.desiredWeight,onChange:V.handleChange,error:V.touched.desiredWeight&&Boolean(V.errors.desiredWeight),helperText:V.touched.desiredWeight&&V.errors.desiredWeight}),(0,F.jsxs)(c,{children:[(0,F.jsx)(w,{id:"demo-row-radio-buttons-group-label",children:i("bloodType")}),(0,F.jsx)(C.Z,{id:"bloodType",row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",onChange:function(n){return x(n.target.value)},children:N.map((function(n){return(0,F.jsx)(j,{value:n,control:(0,F.jsx)(Z,{}),label:n,checked:n===Number(f)},n)}))})]})]})]}),(0,F.jsx)(p,{children:(0,F.jsx)(_.z,{type:"submit",text:i("start")})})]})}},3979:function(n,e,t){t.d(e,{I:function(){return u}});var i,r=t(168),o=t(7630),a=t(7391),d=(0,o.ZP)(a.Z)(i||(i=(0,r.Z)(["\n  & {\n    margin-bottom: 20px;\n    min-width: 240px;\n  }\n  & label {\n    color: ",";\n    font-family: ",";\n    font-weight: 700;\n    font-size: 14px;\n    line-height: ",";\n    letter-spacing: 0.04em;\n  }\n  & label.Mui-focused {\n    color: ",";\n  }\n  & .MuiInput-underline:before {\n    border-bottom: 1px solid ",";\n  }\n\n  & .MuiInput-underline:after {\n    border-bottom-color: ",";\n  }\n"])),(function(n){return n.theme.colors.$grey}),(function(n){return n.theme.fonts.verdana}),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$orange}),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.colors.$orange})),l=t(184),u=function(n){var e=n.variant,t=void 0===e?"standard":e,i=n.name,r=void 0===i?"":i,o=n.type,a=void 0===o?"text":o,u=n.label,s=void 0===u?"":u,h=n.value,c=void 0===h?"":h,m=n.onChange,g=void 0===m?function(){}:m,p=n.error,f=void 0===p?"":p,x=n.helperText,b=void 0===x?"":x,v=n.autoComplete,y=void 0===v?"":v;return(0,l.jsx)(d,{variant:t,id:r,name:r,type:a,label:s,value:c,onChange:g,error:f,helperText:b,autoComplete:y})}},6893:function(n,e,t){t.d(e,{o:function(){return s}});var i=t(9439),r=t(5708),o=t(2791),a=t(1642),d=t(3767),l=t(6174),u=t(184),s=function(n){var e=n.hideMobileModal,t=n.children;(0,r.oS)();var s=(0,o.useState)(!1),h=(0,i.Z)(s,2),c=h[0],m=h[1];(0,r.Dj)(e,m);var g=(0,o.useState)(!1),p=(0,i.Z)(g,2),f=p[0],x=p[1],b=(0,o.useCallback)((function(){e(),x(!1)}),[e]);(0,o.useEffect)((function(){return x(!0)}),[]),(0,o.useEffect)((function(){return b}),[b]);var v=c?"":"isHidden";return(0,u.jsx)(d.Z,{onClickAway:b,children:(0,u.jsx)("div",{children:f?(0,u.jsx)(l.Z,{children:(0,u.jsx)(a.hZ,{className:v,children:(0,u.jsx)(a.dX,{children:t})})}):null})})}},3287:function(n,e,t){t.d(e,{Z:function(){return d}});var i,r=t(168),o=t(7939).ZP.h1(i||(i=(0,r.Z)(["\n  width: 280px;\n  font-size: 18px;\n  font-weight: 700;\n  font-family: 'Verdana Bold';\n  line-height: ",";\n\n  @media (min-width: ",") {\n    width: 550px;\n    font-size: 34px;\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.lineHeight.pageTitleHeight}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.lineHeight.verdanaHeight})),a=t(184),d=function(n){var e=n.title;return(0,a.jsx)(o,{children:e})}},4260:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var i,r,o,a,d,l,u,s,h,c,m,g,p=t(9439),f=t(2791),x=t(3287),b=t(168),v=t(7939),y=v.ZP.div(i||(i=(0,b.Z)(["\n  height: 100%;\n  padding-top: ",";\n\n  @media (min-width: ",") {\n    padding-top: ",";\n    padding-bottom: ",";\n\n    @media (max-width: 1279px) and (orientation: landscape) {\n      padding-bottom: ",";\n    }\n  }\n\n  @media (min-width: ",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(n){return(0,n.theme.spacing)(8)}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return(0,n.theme.spacing)(25)}),(function(n){return(0,n.theme.spacing)(99)}),(function(n){return(0,n.theme.spacing)(28)}),(function(n){return n.theme.breakpoints.desktop}),(function(n){return(0,n.theme.spacing)(36)}),(function(n){return(0,n.theme.spacing)(28)})),Z=v.ZP.div(r||(r=(0,b.Z)(["\n  width: 100%;\n  margin-top: 32px;\n  @media (min-width: ",") {\n    margin-top: 62px;\n    width: 512px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),w=t(366),j=t(7630),C=t(5574),P=t(9157),k=t(6871),W=t(8747),M=t(5048),T=v.ZP.h2(o||(o=(0,b.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 26px;\n  line-height: ",";\n  width: 390px;\n  color: ",";\n  margin-bottom: ",";\n\n  @media screen and (max-width: 767px) {\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 26px;\n    max-width: 280px;\n    text-align: start;\n  }\n"])),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$black}),(function(n){return(0,n.theme.spacing)(5)})),q=v.ZP.p(a||(a=(0,b.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 58px;\n  text-align: center;\n  letter-spacing: 0.04em;\n  margin-bottom: 32px;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.$blue})),z=v.ZP.span(d||(d=(0,b.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  letter-spacing: 0.04em;\n  margin-bottom: 16px;\n\n  color: ",";\n\n  @media screen and (max-width: 767px) {\n  }\n"])),(function(n){return n.theme.colors.$blue})),H=v.ZP.div(l||(l=(0,b.Z)(["\n  min-height: 300px;\n"]))),$=t(8380),I=t(7325),S=v.ZP.div(u||(u=(0,b.Z)(["\n  min-height: 220px;\n  text-align: start;\n"]))),_=v.ZP.ol(s||(s=(0,b.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  text-align: start;\n  padding: 20px;\n\n  color: ",";\n  @media screen and (max-width: 767px) {\n    text-align: start;\n  }\n"])),(function(n){return n.theme.colors.$grey})),E=v.ZP.li(h||(h=(0,b.Z)(["\n  margin-bottom: 10px;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.$grey})),F=v.ZP.h3(c||(c=(0,b.Z)(["\n  text-align: start;\n  ::before {\n    content: '';\n    width: 330px;\n    margin-bottom: 20px;\n\n    display: flex;\n    flex-direction: row;\n    border: 1px solid ",";\n    @media screen and (max-width: 767px) {\n      width: 280px;\n    }\n  }\n  @media screen and (max-width: 767px) {\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n  }\n"])),(function(n){return n.theme.colors.$lightGrey})),N=t(2020),B=t(184),D=function(n){n.user;var e,t,i=n.data,r=(n.isLoading,(0,N.$)().t),o=i&&Object.keys(null===i||void 0===i||null===(e=i.results)||void 0===e||null===(t=e.bannedProducts)||void 0===t?void 0:t.categories);return(0,B.jsxs)(S,{children:[o&&(0,B.jsx)(F,{children:r("bannedFood")}),(0,B.jsx)(_,{children:o&&o.map((function(n){return(0,B.jsx)(E,{children:n},n)}))})]})},A=t(1014),R=function(){var n,e=(0,N.$)().t,t=(0,M.v9)(A.is),i=(0,$.b)(),r=(0,p.Z)(i,2),o=r[0],a=r[1],d=a.data,l=a.isLoading;(0,f.useEffect)((function(){if(t){var n=t.height,e=t.age,i=t.currentWeight,r=t.desiredWeight,a=t.bloodType;o({currentWeight:i,height:n,age:e,desiredWeight:r,bloodType:a})}}),[o,t]);var u=null===d||void 0===d||null===(n=d.results)||void 0===n?void 0:n.dailyRate;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(T,{children:e("recommendation")}),(0,B.jsx)(H,{children:l?(0,B.jsx)(I.$,{}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(q,{children:[u," ",(0,B.jsx)(z,{children:e("kcal")})]}),(0,B.jsx)(D,{user:t,data:d,isLoading:l})]})})]})},V=t(6856),O=v.ZP.div(m||(m=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: ",";\n  text-align: center;\n  font-family: 'Verdana';\n  margin: auto;\n  margin-top: 64px;\n\n  color: ",";\n"])),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$black})),G=(0,v.ZP)(V.FU5)(g||(g=(0,b.Z)(["\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  z-index: 10;\n\n  @media screen and (max-width: 767px) {\n    display: none;\n  }\n"]))),L=function(n){var e=n.handleClose,t=(0,k.s0)();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(O,{children:[(0,B.jsx)(R,{}),(0,B.jsx)(W.z,{autoFocus:!0,text:"Start losing weight",onClick:function(){return t("/signup")}})]}),(0,B.jsx)(G,{"aria-label":"Close modal",onClick:e})]})},X=t(2051),U=t.n(X),J=t(6893),K=t(5708),Q=(0,j.ZP)(C.Z)((function(n){n.theme;return{"& .MuiDialogContent-root":{width:672,height:560}}})),Y=function(n){var e=n.showModal,t=n.setShowModal,i=U()(),r=(0,p.Z)(i,2),o=r[0],a=r[1].width<=767,d=(0,K.jo)(),l=(0,p.Z)(d,3),u=l[0],s=l[2],h=function(){t((function(n){return!n})),u&&s()};return(0,B.jsxs)("div",{children:[o,a?(0,B.jsx)(J.o,{hideMobileModal:s,children:(0,B.jsx)(L,{})}):(0,B.jsx)("div",{children:(0,B.jsx)(Q,{onClose:h,"aria-labelledby":"customized-dialog-title",open:e||u,maxWidth:!1,children:(0,B.jsx)(P.Z,{children:(0,B.jsx)(L,{handleClose:h})})})})]})},nn=t(4941),en=function(){var n=U()(),e=(0,p.Z)(n,1)[0],t=(0,f.useState)(!1),i=(0,p.Z)(t,2),r=i[0],o=i[1],a=(0,K.jo)(),d=(0,p.Z)(a,3),l=d[0],u=d[2];(0,f.useEffect)((function(){return function(){(r||l)&&(u(),o(!1))}}),[u,l,r]);var s=(0,N.$)().t;return(0,B.jsx)(w.ZP,{children:(0,B.jsxs)(y,{children:[e,(0,B.jsx)(x.Z,{title:s("title")}),(0,B.jsx)(Z,{children:(0,B.jsx)(nn.Z,{openModal:function(){return o((function(n){return!n}))}})}),(r||l)&&(0,B.jsx)(Y,{showModal:r,setShowModal:o})]})})}},8380:function(n,e,t){t.d(e,{X:function(){return r},b:function(){return o}});var i=t(5066).baseApi.injectEndpoints({endpoints:function(n){return{getPrivateDailyNorma:n.mutation({query:function(n){return{url:"/users/daily-norma/private",method:"POST",body:n}},invalidatesTags:["PrivatDailyNorma"]}),getBannedProducts:n.mutation({query:function(n){return{url:"/users/daily-norma/public",method:"POST",body:n}},invalidatesTags:["BannedProducts"]})}}}),r=i.useGetPrivateDailyNormaMutation,o=i.useGetBannedProductsMutation}}]);
//# sourceMappingURL=260.46ea1ef0.chunk.js.map