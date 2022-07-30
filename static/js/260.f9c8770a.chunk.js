"use strict";(self.webpackChunkslimmom_front_end=self.webpackChunkslimmom_front_end||[]).push([[260],{6874:function(n,e,t){t.d(e,{Z:function(){return B}});var i,r,o=t(4165),a=t(1413),d=t(5861),l=t(9439),u=t(2506),s=t(7939),c=s.ZP.form.withConfig({displayName:"CalculatoralorieFormstyled__Form",componentId:"sc-oqpy5b-0"})(["min-width:280px;display:flex;flex-direction:column;@media (min-width:","){align-items:flex-start;}"],(function(n){return n.theme.breakpoints.tablet})),h=s.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__Block",componentId:"sc-oqpy5b-1"})(["margin-top:19px;"]),m=s.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__InputContainer",componentId:"sc-oqpy5b-2"})(["@media (min-width:","){display:flex;width:510px;}@media (min-width:","){align-items:flex-start;}"],(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop})),g=s.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__Wrapper",componentId:"sc-oqpy5b-3"})([""]),p=s.ZP.div.withConfig({displayName:"CalculatoralorieFormstyled__BoxButton",componentId:"sc-oqpy5b-4"})(["margin:auto;margin-top:40px;@media (min-width:","){margin:28px 0 0;}@media (min-width:","){margin-left:auto;margin-right:0;}"],(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop})),f=t(168),x=t(7630),v=t(4479),b=t(7133),y=t(5523),Z=(0,x.ZP)(v.Z)({color:"#E0E0E0","&.Mui-checked":{color:" #fc842d"}}),w=(0,x.ZP)(b.Z)(i||(i=(0,f.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.2;\n  letter-spacing: 0.04em;\n  margin-bottom: 8.5px;\n  color: #9b9faa;\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 11px;\n    border-bottom: 1px solid #e0e0e0;\n    display: block;\n  }\n"]))),j=(0,x.ZP)(y.Z)(r||(r=(0,f.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.2;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n"]))),C=t(765),P=t(2791),W=t(5048),k=t(1014),M=t(2020),T=t(3541),E=function(n){var e={};return null!==n&&void 0!==n&&n.age&&Object.keys(n).forEach((function(t){return e[t]=Number(n[t])})),e},$=t(5708),z=t(2051),N=t.n(z),F=t(8747),I=t(1729),_=t(7942),S=t(184),q=[1,2,3,4],B=function(n){var e=n.openModal,t=n.getPrivatDailyNorma,i=(0,M.$)().t,r=(0,P.useState)(1),s=(0,l.Z)(r,2),f=s[0],x=s[1],v=N()(),b=(0,l.Z)(v,2),y=b[0],z=b[1].width,B=(0,W.I0)(),H=(0,W.v9)(k.M7),D=z<=767,R=(0,$.jo)(),V=(0,l.Z)(R,2)[1],A=_.Ry({height:_.Rx().typeError(i("validation.heightTypeError")).min(100,i("validation.heightMin")).max(250,i("validation.heightMax")).required(i("validation.height")),age:_.Rx(i("validation.ageNumber")).typeError(i("validation.ageTypeError")).min(18,i("validation.ageMin")).max(100,i("validation.ageMax")).required(i("validation.age")),currentWeight:_.Rx(i("validation.currentWeightNumber")).typeError(i("validation.currentWeightTypeError")).min(20,i("validation.currentWeightMin")).max(500,i("validation.currentWeightMax")).required(i("validation.currentWeight")),desiredWeight:_.Rx(i("validation.desiredWeightNumber")).typeError(i("validation.desiredWeightTypeError")).min(20,i("validation.desiredWeightMin")).max(500,i("validation.desiredWeightMax")).required(i("validation.desiredWeight"))}),O=(0,u.TA)({initialValues:{height:"",age:"",currentWeight:"",desiredWeight:""},validationSchema:A,onSubmit:function(){var n=(0,d.Z)((0,o.Z)().mark((function n(i,r){var d,l;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(d=r.resetForm,l=(0,a.Z)((0,a.Z)({},i),{},{bloodType:f}),B((0,T.M)(E(l))),!H){n.next=6;break}return n.next=6,t(l);case 6:if(!O.dirty||H||D){n.next=9;break}return n.next=9,e();case 9:if(!O.dirty||H||!D){n.next=12;break}return n.next=12,V();case 12:d();case 13:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()});return(0,S.jsxs)(c,{onSubmit:O.handleSubmit,children:[y,(0,S.jsxs)(m,{children:[(0,S.jsxs)(g,{children:[(0,S.jsx)(I.I,{name:"height",label:i("height"),value:O.values.height,onChange:O.handleChange,error:O.touched.height&&Boolean(O.errors.height),helperText:O.touched.height&&O.errors.height}),(0,S.jsx)(I.I,{name:"age",label:i("age"),value:O.values.age,onChange:O.handleChange,error:O.touched.age&&Boolean(O.errors.age),helperText:O.touched.age&&O.errors.age}),(0,S.jsx)(I.I,{name:"currentWeight",label:i("weight"),type:"currentWeight",value:O.values.currentWeight,onChange:O.handleChange,error:O.touched.currentWeight&&Boolean(O.errors.currentWeight),helperText:O.touched.currentWeight&&O.errors.currentWeight})]}),(0,S.jsxs)(g,{children:[(0,S.jsx)(I.I,{name:"desiredWeight",label:i("desiredWeight"),value:O.values.desiredWeight,onChange:O.handleChange,error:O.touched.desiredWeight&&Boolean(O.errors.desiredWeight),helperText:O.touched.desiredWeight&&O.errors.desiredWeight}),(0,S.jsxs)(h,{children:[(0,S.jsx)(w,{id:"demo-row-radio-buttons-group-label",children:i("bloodType")}),(0,S.jsx)(C.Z,{id:"bloodType",row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",onChange:function(n){return x(n.target.value)},children:q.map((function(n){return(0,S.jsx)(j,{value:n,control:(0,S.jsx)(Z,{}),label:n,checked:n===Number(f)},n)}))})]})]})]}),(0,S.jsx)(p,{children:(0,S.jsx)(F.z,{type:"submit",text:i("start")})})]})}},3183:function(n,e,t){t.d(e,{L:function(){return d}});var i,r=t(168),o=t(7630),a=t(7391),d=(0,o.ZP)(a.Z)(i||(i=(0,r.Z)(["\n  & {\n    margin-bottom: 20px;\n    min-width: 240px;\n  }\n  & label {\n    color: ",";\n    font-family: ",";\n    font-weight: 700;\n    font-size: 14px;\n    line-height: ",";\n    letter-spacing: 0.04em;\n  }\n  & label.Mui-focused {\n    color: ",";\n  }\n  & .MuiInput-underline:before {\n    border-bottom: 1px solid ",";\n  }\n\n  & .MuiInput-underline:after {\n    border-bottom-color: ",";\n  }\n"])),(function(n){return n.theme.colors.$grey}),(function(n){return n.theme.fonts.verdana}),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$orange}),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.colors.$orange}))},1729:function(n,e,t){t.d(e,{I:function(){return o}});var i=t(3183),r=t(184),o=function(n){var e=n.variant,t=void 0===e?"standard":e,o=n.name,a=void 0===o?"":o,d=n.type,l=void 0===d?"text":d,u=n.label,s=void 0===u?"":u,c=n.value,h=void 0===c?"":c,m=n.onChange,g=void 0===m?function(){}:m,p=n.error,f=void 0!==p&&p,x=n.helperText,v=void 0===x?"":x,b=n.autoComplete,y=void 0===b?"":b;return(0,r.jsx)(i.L,{variant:t,id:a,name:a,type:l,label:s,value:h,onChange:g,error:f,helperText:v,autoComplete:y})}},6893:function(n,e,t){t.d(e,{o:function(){return s}});var i=t(9439),r=t(5708),o=t(2791),a=t(1642),d=t(3767),l=t(6174),u=t(184),s=function(n){var e=n.hideMobileModal,t=n.children;(0,r.oS)();var s=(0,o.useState)(!1),c=(0,i.Z)(s,2),h=c[0],m=c[1];(0,r.Dj)(e,m);var g=(0,o.useState)(!1),p=(0,i.Z)(g,2),f=p[0],x=p[1],v=(0,o.useCallback)((function(){e(),x(!1)}),[e]);(0,o.useEffect)((function(){return x(!0)}),[]),(0,o.useEffect)((function(){return v}),[v]);var b=h?"":"isHidden";return(0,u.jsx)(d.Z,{onClickAway:v,children:(0,u.jsx)("div",{children:f?(0,u.jsx)(l.Z,{children:(0,u.jsx)(a.hZ,{className:b,children:(0,u.jsx)(a.dX,{children:t})})}):null})})}},3287:function(n,e,t){t.d(e,{Z:function(){return d}});var i,r=t(168),o=t(7939).ZP.h1(i||(i=(0,r.Z)(["\n  width: 280px;\n  font-size: 18px;\n  font-weight: 700;\n  font-family: 'Verdana Bold';\n  line-height: ",";\n\n  @media (min-width: ",") {\n    width: 550px;\n    font-size: 34px;\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.lineHeight.pageTitleHeight}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.lineHeight.verdanaHeight})),a=t(184),d=function(n){var e=n.title;return(0,a.jsx)(o,{children:e})}},3683:function(n,e,t){t.d(e,{t:function(){return r}});var i=t(7084).useTranslation,r=function(){var n=i().t;return{translateCategory:function(e){switch(e){case"\u044f\u0439\u0446\u0430":return n("eggs");case"\u0437\u0435\u0440\u043d\u043e\u0432\u044b\u0435":return n("crops");case"\u043c\u0443\u0447\u043d\u044b\u0435":return n("flour");case"\u043c\u043e\u043b\u043e\u0447\u043d\u044b\u0435":return n("dairy");case"\u0440\u044b\u0431\u0430":return n("fish");case"\u043c\u044f\u0441\u043e":return n("meat");case"\u044f\u0433\u043e\u0434\u044b":return n("berries");case"\u043a\u043e\u043b\u0431\u0430\u0441\u0430":return n("sausage");case"\u043c\u0430\u0441\u043b\u0430 \u0438 \u0436\u0438\u0440\u044b":return n("oils");case"\u0444\u0440\u0443\u043a\u0442\u044b":return n("fruit");case"\u0433\u0440\u0438\u0431\u044b":return n("mushrooms");case"\u043e\u0432\u043e\u0449\u0438 \u0438 \u0437\u0435\u043b\u0435\u043d\u044c":return n("vegetables");case"\u043e\u0440\u0435\u0445\u0438":return n("nuts");case"\u0441\u0435\u043c\u0435\u043d\u0430":return n("seeds");case"\u0441\u0443\u0445\u043e\u0444\u0440\u0443\u043a\u0442\u044b":return n("driedFruits");case"\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438":return n("alcoholic");case"\u0431\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438":return n("nonAlcoholic");case"\u043c\u0430\u043a":return n("poppy");case"\u043a\u0443\u043d\u0436\u0443\u0442":return n("sesame")}}}}},4260:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var i,r,o,a,d,l,u,s,c,h,m,g,p=t(9439),f=t(2791),x=t(3287),v=t(168),b=t(7939),y=b.ZP.div(i||(i=(0,v.Z)(["\n  height: 100%;\n  padding-top: ",";\n\n  @media (min-width: ",") {\n    padding-top: ",";\n    padding-bottom: ",";\n\n    @media (max-width: 1279px) and (orientation: landscape) {\n      padding-bottom: ",";\n    }\n  }\n\n  @media (min-width: ",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(n){return(0,n.theme.spacing)(8)}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return(0,n.theme.spacing)(25)}),(function(n){return(0,n.theme.spacing)(99)}),(function(n){return(0,n.theme.spacing)(28)}),(function(n){return n.theme.breakpoints.desktop}),(function(n){return(0,n.theme.spacing)(36)}),(function(n){return(0,n.theme.spacing)(28)})),Z=b.ZP.div(r||(r=(0,v.Z)(["\n  width: 100%;\n  margin-top: 32px;\n  @media (min-width: ",") {\n    margin-top: 62px;\n    width: 512px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),w=t(366),j=t(7630),C=t(5574),P=t(9157),W=t(6871),k=t(2020),M=t(8747),T=t(5048),E=b.ZP.h2(o||(o=(0,v.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 26px;\n  line-height: ",";\n  width: 390px;\n  color: ",";\n  margin-bottom: ",";\n\n  @media screen and (max-width: 767px) {\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 26px;\n    max-width: 280px;\n    text-align: start;\n  }\n"])),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$black}),(function(n){return(0,n.theme.spacing)(5)})),$=b.ZP.p(a||(a=(0,v.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 58px;\n  text-align: center;\n  letter-spacing: 0.04em;\n  margin-bottom: 32px;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.$blue})),z=b.ZP.span(d||(d=(0,v.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  letter-spacing: 0.04em;\n  margin-bottom: 16px;\n\n  color: ",";\n\n  @media screen and (max-width: 767px) {\n  }\n"])),(function(n){return n.theme.colors.$blue})),N=b.ZP.div(l||(l=(0,v.Z)(["\n  min-height: 300px;\n"]))),F=t(8380),I=t(7325),_=b.ZP.div(u||(u=(0,v.Z)(["\n  min-height: 220px;\n  text-align: start;\n"]))),S=b.ZP.ol(s||(s=(0,v.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  text-align: start;\n  padding: 20px;\n\n  color: ",";\n  @media screen and (max-width: 767px) {\n    text-align: start;\n  }\n"])),(function(n){return n.theme.colors.$grey})),q=b.ZP.li(c||(c=(0,v.Z)(["\n  margin-bottom: 10px;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.$grey})),B=b.ZP.h3(h||(h=(0,v.Z)(["\n  text-align: start;\n  ::before {\n    content: '';\n    width: 330px;\n    margin-bottom: 20px;\n\n    display: flex;\n    flex-direction: row;\n    border: 1px solid ",";\n    @media screen and (max-width: 767px) {\n      width: 280px;\n    }\n  }\n  @media screen and (max-width: 767px) {\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n  }\n"])),(function(n){return n.theme.colors.$lightGrey})),H=t(3683),D=t(184),R=function(n){var e,t,i=n.data,r=(0,k.$)().t,o=(0,H.t)().translateCategory,a=i&&Object.keys(null===i||void 0===i||null===(e=i.results)||void 0===e||null===(t=e.bannedProducts)||void 0===t?void 0:t.categories);return(0,D.jsxs)(_,{children:[a&&(0,D.jsx)(B,{children:r("bannedFood")}),(0,D.jsx)(S,{children:a&&(null===a||void 0===a?void 0:a.map((function(n,e){return(0,D.jsx)(q,{children:o(n)},e)})))})]})},V=t(1014),A=function(){var n,e=(0,k.$)().t,t=(0,T.v9)(V.is),i=(0,F.b)(),r=(0,p.Z)(i,2),o=r[0],a=r[1],d=a.data,l=a.isLoading;(0,f.useEffect)((function(){if(t){var n=t.height,e=t.age,i=t.currentWeight,r=t.desiredWeight,a=t.bloodType;o({currentWeight:i,height:n,age:e,desiredWeight:r,bloodType:a})}}),[o,t]);var u=null===d||void 0===d||null===(n=d.results)||void 0===n?void 0:n.dailyRate;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(E,{children:e("recommendation")}),(0,D.jsx)(N,{children:l?(0,D.jsx)(I.$,{}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)($,{children:[u," ",(0,D.jsx)(z,{children:e("kcal")})]}),(0,D.jsx)(R,{data:d})]})})]})},O=t(6856),G=b.ZP.div(m||(m=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: ",";\n  text-align: center;\n  font-family: 'Verdana';\n  margin: auto;\n  margin-top: 64px;\n\n  color: ",";\n"])),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$black})),L=(0,b.ZP)(O.FU5)(g||(g=(0,v.Z)(["\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  z-index: 10;\n\n  @media screen and (max-width: 767px) {\n    display: none;\n  }\n"]))),X=function(n){var e=n.handleClose,t=(0,W.s0)(),i=(0,k.$)().t;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(G,{children:[(0,D.jsx)(A,{}),(0,D.jsx)(M.z,{autoFocus:!0,text:i("start"),onClick:function(){return t("/signup")}})]}),(0,D.jsx)(L,{"aria-label":"Close modal",onClick:e})]})},U=t(2051),J=t.n(U),K=t(6893),Q=t(5708),Y=(0,j.ZP)(C.Z)((function(n){n.theme;return{"& .MuiDialogContent-root":{width:672,height:560}}})),nn=function(n){var e=n.showModal,t=n.setShowModal,i=J()(),r=(0,p.Z)(i,2),o=r[0],a=r[1].width<=767,d=(0,Q.jo)(),l=(0,p.Z)(d,3),u=l[0],s=l[2],c=function(){t((function(n){return!n})),u&&s()};return(0,D.jsxs)("div",{children:[o,a?(0,D.jsx)(K.o,{hideMobileModal:s,children:(0,D.jsx)(X,{})}):(0,D.jsx)("div",{children:(0,D.jsx)(Y,{onClose:c,"aria-labelledby":"customized-dialog-title",open:e||u,maxWidth:!1,children:(0,D.jsx)(P.Z,{children:(0,D.jsx)(X,{handleClose:c})})})})]})},en=t(6874),tn=function(){var n=J()(),e=(0,p.Z)(n,1)[0],t=(0,f.useState)(!1),i=(0,p.Z)(t,2),r=i[0],o=i[1],a=(0,Q.jo)(),d=(0,p.Z)(a,3),l=d[0],u=d[2];(0,f.useEffect)((function(){return function(){(r||l)&&(u(),o(!1))}}),[u,l,r]);var s=(0,k.$)().t;return(0,D.jsx)(w.ZP,{children:(0,D.jsxs)(y,{children:[e,(0,D.jsx)(x.Z,{title:s("title")}),(0,D.jsx)(Z,{children:(0,D.jsx)(en.Z,{openModal:function(){return o((function(n){return!n}))}})}),(r||l)&&(0,D.jsx)(nn,{showModal:r,setShowModal:o})]})})}},8380:function(n,e,t){t.d(e,{X:function(){return r},b:function(){return o}});var i=t(5066).baseApi.injectEndpoints({endpoints:function(n){return{getPrivateDailyNorma:n.mutation({query:function(n){return{url:"/users/daily-norma/private",method:"POST",body:n}},invalidatesTags:["PrivatDailyNorma"]}),getBannedProducts:n.mutation({query:function(n){return{url:"/users/daily-norma/public",method:"POST",body:n}},invalidatesTags:["BannedProducts"]})}}}),r=i.useGetPrivateDailyNormaMutation,o=i.useGetBannedProductsMutation}}]);
//# sourceMappingURL=260.f9c8770a.chunk.js.map