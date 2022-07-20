"use strict";(self.webpackChunkslimmom_front_end=self.webpackChunkslimmom_front_end||[]).push([[102],{6893:function(n,t,e){e.d(t,{o:function(){return u}});var i=e(9439),r=e(5708),o=e(2791),a=e(1642),d=e(3767),l=e(6174),c=e(184),u=function(n){var t=n.hideMobileModal,e=n.children;(0,r.oS)();var u=(0,o.useState)(!1),s=(0,i.Z)(u,2),p=s[0],h=s[1];(0,r.Dj)(t,h);var m=(0,o.useState)(!1),f=(0,i.Z)(m,2),x=f[0],g=f[1],v=(0,o.useCallback)((function(){t(),g(!1)}),[t]);(0,o.useEffect)((function(){return g(!0)}),[]),(0,o.useEffect)((function(){return v}),[v]);var b=p?"":"isHidden";return(0,c.jsx)(d.Z,{onClickAway:v,children:(0,c.jsx)("div",{children:x?(0,c.jsx)(l.Z,{children:(0,c.jsx)(a.hZ,{className:b,children:(0,c.jsx)(a.dX,{children:e})})}):null})})}},8449:function(n,t,e){e.r(t),e.d(t,{default:function(){return Xn}});var i,r,o,a,d,l,c,u,s,p,h=e(623),m=e(366),f=e(9439),x=e(2791),g=e(3452),v=e(890),b=e(9823),w=e(541),Z=e(168),y=e(7939),j=e(5473),k=y.ZP.li(i||(i=(0,Z.Z)(["\n  display: flex;\n  &:not(:first-child) {\n    padding-top: ",";\n  }\n"])),(function(n){return(0,n.theme.spacing)(4)})),P=y.ZP.div(r||(r=(0,Z.Z)(["\n  position: relative;\n  border-bottom: 1px solid ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  &:not(:first-child) {\n    text-align: right;\n  }\n\n  &:first-child {\n    width: 130px;\n    margin-right: 8px;\n\n    @media (min-width: ",") {\n      width: 240px;\n      margin-right: 22px;\n    }\n  }\n\n  &:nth-child(2) {\n    width: 49px;\n    margin-right: 8px;\n    @media (min-width: ",") {\n      width: 106px;\n      margin-right: 46px;\n    }\n\n    @media (min-width: ",") {\n      width: 106px;\n      margin-right: 48px;\n    }\n  }\n\n  &:nth-child(3) {\n    width: 65px;\n    @media (min-width: ",") {\n      width: 106px;\n      margin-right: 26px;\n    }\n  }\n\n  @media (min-width: ",") {\n    padding-bottom: ",";\n  }\n"])),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return(0,n.theme.spacing)(5)})),M=y.ZP.span(o||(o=(0,Z.Z)(["\n  margin-right: ",";\n"])),(function(n){return(0,n.theme.spacing)(1)})),D=y.ZP.span(a||(a=(0,Z.Z)(["\n  font-size: 10px;\n\n  @media (min-width: ",") {\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),C=y.ZP.div(d||(d=(0,Z.Z)(["\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: ",";\n"])),(function(n){return(0,n.theme.spacing)(1)})),I=(0,y.ZP)(j.ZP)(l||(l=(0,Z.Z)(["\n  & .MuiPaper-root {\n    background-color: ",";\n  }\n\n  & .MuiTypography-root {\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.colors.$lightGrey})),O=e(2020),_=e(184),S=function(n){var t=n.title,e=n.weight,i=n.kcal,r=n.currentDate,o=n.productId,a=n.disabled,d=n.getNotifyData,l=(0,O.$)().t,c=(0,x.useState)(null),u=(0,f.Z)(c,2),s=u[0],p=u[1],h=g.Am.useDeleteProductFromDateMutation(),m=(0,f.Z)(h,2),Z=m[0],y=m[1].isLoading,j=y||(a||!1),S=Boolean(s),A=S?"simple-popover":void 0;return(0,_.jsxs)(k,{children:[(0,_.jsx)(P,{onClick:function(n){p(n.currentTarget)},children:t}),(0,_.jsx)(I,{id:A,open:S,anchorEl:s,onClose:function(){p(null)},anchorOrigin:{vertical:"center",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"},children:(0,_.jsx)(v.Z,{sx:{p:1},children:t})}),(0,_.jsxs)(P,{children:[(0,_.jsx)(M,{children:e}),(0,_.jsx)(D,{children:l("g")})]}),(0,_.jsxs)(P,{children:[(0,_.jsx)(M,{children:i}),(0,_.jsx)(D,{children:l("kcal")})]}),(0,_.jsx)(C,{children:(0,_.jsx)(w.Z,{icon:(0,_.jsx)(b.Z,{}),onClick:function(){d({title:t,deleteProduct:Z,deletingInfo:{currentDate:r,productId:o}})},disabled:j,iconColor:"$grey",hoverIconColor:"$grey"})})]})},A=y.ZP.ul(c||(c=(0,Z.Z)(["\n  //Scrollbar variables\n  --mask-height: 40px;\n  --padding-right: 40px;\n  --mask-image-content: linear-gradient(\n    to bottom,\n    white var(--mask-height),\n    white calc(100% - var(--mask-height)),\n    transparent\n  );\n  --mask-size-content: calc(100% - var(--scrollbar-width));\n  //end variables\n\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  height: 220px;\n  margin-top: ",";\n  margin-right: 5%;\n  font-size: 14px;\n  overflow-y: auto;\n\n  ::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ",";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ",";\n  }\n\n  mask-size: var(--mask-size-content);\n  mask-image: var(--mask-image-content);\n  mask-position: bottom 40px;\n  mask-repeat: no-repeat;\n\n  @media (min-width: 768px) {\n    width: 610px;\n    height: 260px;\n    padding-right: 32px;\n    margin-right: 0;\n  }\n\n  @media (min-width: 1280px) {\n    width: 623px;\n    height: 306px;\n  }\n"])),(function(n){return(0,n.theme.spacing)(8)}),(function(n){return n.theme.colors.$lightGrey}),(function(n){return n.theme.colors.$blue})),z=function(n){var t=n.products,e=n.currentDate,i=n.disabled,r=n.getNotifyData,o=n.onOpenModal;return(0,_.jsx)(A,{children:t.map((function(n){var t=n._id,a=n.title.ua,d=n.weight,l=n.kcal;return(0,_.jsx)(S,{title:a,weight:d,kcal:l,currentDate:e,productId:t,disabled:i,getNotifyData:r,onOpenModa:o},t)}))})},B=e(7325),E=(y.ZP.div.withConfig({displayName:"DiaryPageContentstyled__DiaryPageContentStyled",componentId:"sc-7qo01r-0"})(["display:flex;flex-direction:column;justify-content:center;width:320px;height:460px;height:100%;padding:40px 20px 60px 20px;margin:0 auto;@media (min-width:","){padding:180px 32px 55px 32px;width:768px;min-height:594px;}@media (min-width:","){align-items:center;justify-content:center;width:763px;min-height:850px;padding:294px 32px 112px 32px;}"],(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop})),y.ZP.div.withConfig({displayName:"DiaryPageContentstyled__DiaryPageStyled",componentId:"sc-7qo01r-1"})(["display:flex;flex-direction:column;gap:20px;"])),F=e(5048),N=e(4690),T=e(7582),$=y.ZP.p(u||(u=(0,Z.Z)(["\n  position: relative;\n  margin-top: 20px;\n  font-weight: 700;\n  font-size: 18px;\n  animation-name: appearence;\n  animation-duration: ",";\n  animation-timing-function: ",";\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 6px;\n    height: 100%;\n    background-color: ",";\n    opacity: 0.5;\n    transform: translateX(-50px) skewX(-45deg);\n    animation-name: blink;\n    animation-duration: 750ms;\n    animation-timing-function: ease-out;\n    animation-delay: 500ms;\n  }\n\n  @keyframes blink {\n    from {\n      transform: translateX(-50px) skewX(-45deg);\n    }\n\n    to {\n      transform: translateX(5000%) skewX(-45deg);\n    }\n  }\n\n  @keyframes appearence {\n    from {\n      font-size: 0px;\n      margin-top: 0px;\n    }\n\n    to {\n      opacity: 1;\n      font-size: 18px;\n      margin-top: 20px;\n    }\n  }\n"])),(function(n){return n.theme.options.time}),(function(n){return n.theme.options.cubic}),(function(n){return n.theme.colors.$white})),V=function(){var n=(0,O.$)().t;return(0,_.jsx)($,{children:n("empty")})},H=e(1413),q=e(5739),L=e(6571),X=e(1112),R=e(3466),G=e(3400),W=["title","titleId"];function K(){return K=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},K.apply(this,arguments)}function Q(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}function U(n,t){var e=n.title,i=n.titleId,r=Q(n,W);return x.createElement("svg",K({width:20,height:20,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",ref:t,"aria-labelledby":i},r),e?x.createElement("title",{id:i},e):null,s||(s=x.createElement("path",{fill:"#9B9FAA",d:"M15 9h-2v2h2V9Zm-4 0H9v2h2V9ZM7 9H5v2h2V9Z"})),p||(p=x.createElement("path",{fill:"#9B9FAA",d:"M17 2h-1V0h-2v2H6V0H4v2H3a2 2 0 0 0-1.99 2L1 18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 16H3V7h14v11Z"})))}var J,Y,nn,tn,en,rn,on,an,dn=x.forwardRef(U),ln=(e.p,e(7391)),cn=e(7630),un=(0,cn.ZP)(ln.Z)(J||(J=(0,Z.Z)(["\n  && {\n    max-width: 116px;\n    height: 20px;\n    font-family: ",";\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: ",";\n    color: ",";\n\n    border: none;\n\n    @media screen and (min-width: ",") {\n      font-size: 34px;\n      height: 38px;\n      max-width: 220px;\n    }\n  }\n"])),(function(n){return n.theme.fonts.verdanaBold}),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$black}),(function(n){return n.theme.breakpoints.tablet})),sn=(0,cn.ZP)(dn)(Y||(Y=(0,Z.Z)([""]))),pn=(0,cn.ZP)("div")(nn||(nn=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n\n  max-width: 160;\n\n  @media screen and (min-width: ",") {\n    max-width: 300px;\n  }\n\n  .react-datepicker__input-container {\n    width: unset;\n  }\n\n  .react-datepicker-wrapper {\n    width: unset;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),hn=e(8558),mn=e(1014),fn=function(){var n=(0,F.I0)(),t=(0,F.v9)(T.cc),e=(0,x.useState)(t),i=(0,f.Z)(e,2),r=i[0],o=i[1],a=(0,F.v9)(mn.M7),d=(0,x.useState)(!1),l=(0,f.Z)(d,2),c=l[0],u=l[1],s=(0,x.useCallback)((function(){return u((function(n){return!n}))}),[]);return(0,x.useEffect)((function(){!function(){try{if(!((e=r)&&!isNaN(new Date(e).getTime())))return;var t=(0,hn.Z)(r,{representation:"date"});n((0,T.lc)(t))}catch(i){console.log(i)}var e}()}),[n,r]),(0,x.useEffect)((function(){return function(){a||n((0,T.lc)((0,hn.Z)(new Date,{representation:"date"})))}}),[n,a]),(0,_.jsx)(pn,{children:(0,_.jsx)(L._,{dateAdapter:q.Z,children:(0,_.jsx)(X.M,{inputFormat:"dd.MM.yyyy",maxDate:new Date,value:r,onChange:function(n){o(n)},open:c,onOpen:s,onClose:s,renderInput:function(n){var t=n.inputRef,e=n.inputProps,i=n.InputProps;return(0,_.jsx)(un,(0,H.Z)((0,H.Z)({ref:t},e),{},{variant:"standard",InputProps:(0,H.Z)((0,H.Z)({},i),{},{endAdornment:(0,_.jsx)(R.Z,{position:"end",children:(0,_.jsx)(G.Z,{edge:"end",onClick:s,children:(0,_.jsx)(sn,{})})})})}))}})})})},xn=function(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(fn,{}),(0,_.jsx)("ul",{})]})},gn=(0,x.memo)(xn),vn=e(4165),bn=e(5861),wn=e(5985),Zn=y.ZP.form.withConfig({displayName:"DiaryAddProductFormstyled__DiaryAddProductFormStyled",componentId:"sc-1ghxj2p-0"})(["display:flex;flex-direction:column;gap:32px;align-items:center;@media screen and (min-width:","){flex-direction:row;align-items:center;gap:40px;}@media screen and (min-width:","){gap:60px;}"],(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop})),yn=y.ZP.div.withConfig({displayName:"DiaryAddProductFormstyled__FlexWrapper",componentId:"sc-1ghxj2p-1"})(["display:flex;flex-direction:column;gap:4px;"]),jn=e(6151),kn=e(5763),Pn=(0,y.ZP)(ln.Z)(tn||(tn=(0,Z.Z)(["\n  & {\n    // marginBottom: '20px',\n    min-width: 240px;\n  }\n\n  & label {\n    color: #9b9faa;\n    font-family: ",";\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 1.2;\n    letter-spacing: 0.04em;\n  }\n\n  & label.Mui-focused {\n    color: #fc842d;\n  }\n\n  & .MuiInput-underline:before {\n    border-bottom: 1px solid #e0e0e0;\n  }\n\n  & .MuiInput-underline:after {\n    border-bottom-color: #fc842d;\n  }\n"])),(function(n){return n.theme.fonts.verdanaBold})),Mn=(0,y.ZP)(jn.Z)(en||(en=(0,Z.Z)(["\n  && {\n    align-self: center;\n\n    min-width: 48px;\n    height: 48px;\n    padding: 17px;\n\n    font-family: ",";\n    font-size: 14px;\n    font-weight: 700;\n    text-transform: none;\n\n    background: #fc842d;\n    border-radius: 30px;\n    box-shadow: 0 4px 10px rgba(252, 132, 45, 0.5);\n\n    &:hover {\n      background: #e76000;\n      transform: scale(1.1);\n    }\n\n    @media screen and (min-width: 768px) {\n      /* margin: 60px 0 0; */\n    }\n  }\n"])),(function(n){return n.theme.fonts.verdanaBold})),Dn=(0,y.ZP)(kn.ueT)(rn||(rn=(0,Z.Z)([""]))),Cn=y.ZP.div(on||(on=(0,Z.Z)(["\n  margin: 60px auto;\n"]))),In=e(7227),On=e(3329),_n=function(n){var t=n.items,e=n.setProductId,i=n.inputValue,r=n.onInputChange,o=(0,O.$)().t,a=t.map((function(n){var t=n.title.ua[0].toUpperCase();return(0,H.Z)({firstLetter:/[0-9]/.test(t)?"0-9":t},n)}));return(0,_.jsx)(In.Z,{id:"possible_products",getOptionLabel:function(n){var t,e,i;return null!==(t=(null===(e=n.title)||void 0===e?void 0:e.ua)||(null===(i=n.title)||void 0===i?void 0:i.ru))&&void 0!==t?t:""},isOptionEqualToValue:function(n,t){return n._id===t._id},options:null===a||void 0===a?void 0:a.sort((function(n,t){var e;return-(null===(e=t.firstLetter)||void 0===e?void 0:e.localeCompare(n.firstLetter))})),sx:{width:300},noOptionsText:o("noMatch"),renderOption:function(n,t){var e,i;return(0,x.createElement)(On.Z,(0,H.Z)((0,H.Z)({component:"li"},n),{},{key:t._id}),(null===(e=t.title)||void 0===e?void 0:e.ua)||(null===(i=t.title)||void 0===i?void 0:i.ru))},renderInput:function(n){return(0,_.jsx)(ln.Z,(0,H.Z)((0,H.Z)({variant:"standard"},n),{},{label:o("enter")}))},onChange:function(n,t){e(null===t||void 0===t?void 0:t._id)},inputValue:i,onInputChange:r,filterOptions:function(n){return n},groupBy:function(n){return n.firstLetter},clearOnBlur:!1,selectOnFocus:!0,handleHomeEndKeys:!0,autoHighlight:!0})},Sn=e(8573),An=e.n(Sn),zn=e(7942),Bn=(0,zn.Ry)({weight:(0,zn.Rx)().min(1,"min 1 gram").max(1e4,"max 10,000 grams").positive("expects positive number").integer("expects integer (no dot)").required("Weight required"),id:(0,zn.Z_)().min(1,"id min 1 char").max(1024,"id max 1024 char").required("Product id (name) required"),date:(0,zn.hT)().min(new Date(2e3,0,1),"min 2000 year").default((function(){return(0,hn.Z)(new Date,{representation:"date"})}))}),En=e(5708),Fn=function(n){var t=n.addProduct,e=n.isMobile,i=(0,O.$)().t,r=(0,x.useState)(""),o=(0,f.Z)(r,2),a=o[0],d=o[1],l=(0,x.useState)(""),c=(0,f.Z)(l,2),u=c[0],s=c[1],p=(0,En.jo)(),h=(0,f.Z)(p,3)[2],m=(0,g.jM)(),v=(0,f.Z)(m,2),b=v[0],w=v[1].data,Z=(w=void 0===w?{}:w).data,y=void 0===Z?[]:Z,j=(0,F.v9)(T.cc),k=(0,hn.Z)(j,{representation:"date"}),P=function(){var n=(0,bn.Z)((0,vn.Z)().mark((function n(i){var r,o,a,d;return(0,vn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i.preventDefault(),r=i.target,o=new FormData(r),a=Number(o.get("weight").trim()),k&&u&&a){n.next=6;break}return n.abrupt("return",(0,wn.Am)("Please fill date, productName and weight"));case 6:return d={date:k,id:u,weight:a},n.prev=7,n.next=10,Bn.validate(d);case 10:return n.next=12,t(d);case 12:(0,wn.Am)(d),r.reset(),e&&h(),n.next=21;break;case 17:n.prev=17,n.t0=n.catch(7),(0,wn.Am)("Not added: ".concat(n.t0.message)),console.log(n.t0);case 21:case"end":return n.stop()}}),n,null,[[7,17]])})));return function(t){return n.apply(this,arguments)}}(),M=(0,x.useMemo)((function(){return An()(b,500)}),[b]);return(0,x.useEffect)((function(){a.length&&M({title:a,limit:10})}),[M,b,a]),(0,_.jsxs)(Zn,{onSubmit:P,children:[(0,_.jsx)(_n,{items:y,setProductId:s,inputValue:a,onInputChange:function(n,t){return d(t)}}),(0,_.jsx)(yn,{children:(0,_.jsx)(Pn,{variant:"standard",name:"weight",label:i("grams"),type:"text",title:"min 1, max 6 digits",inputProps:{inputMode:"numeric",pattern:"[0-9]{1,6}"},required:!0})}),(0,_.jsx)(Mn,{color:"primary",variant:"contained",type:"submit",children:e?"Add":(0,_.jsx)(Dn,{})})]})},Nn=e(6893),Tn=y.ZP.div(an||(an=(0,Z.Z)([""]))),$n=function(n){var t=n.addProduct,e=n.shouldShowForm,i=n.isMobile,r=(0,En.jo)(),o=(0,f.Z)(r,3),a=o[0],d=o[2];return(0,_.jsxs)(Tn,{children:[(0,_.jsx)(gn,{}),e&&!i&&(0,_.jsx)(Fn,{addProduct:t,hideMobileModal:d}),e&&i&&a&&(0,_.jsx)(Nn.o,{hideMobileModal:d,children:(0,_.jsx)(Fn,{addProduct:t,hideMobileModal:d,isMobile:i})})]})},Vn=e(2051),Hn=e.n(Vn),qn=e(8877),Ln=function(){var n=(0,O.$)().t,t=(0,x.useState)(!1),e=(0,f.Z)(t,2),i=e[0],r=e[1],o=function(){var n=(0,F.v9)(T.cc);return(0,x.useMemo)((function(){var t=new Date(n).getTime(),e=(new Date).getTime();return t<=e||(0,N.Z)(t,e)}),[n])}(),a=(0,F.v9)((function(n){return n.calendar.activeDate})),d=(0,x.useState)({}),l=(0,f.Z)(d,2),c=l[0],u=l[1],s=c.title,p=void 0===s?"":s,h=c.deleteProduct,v=void 0===h?function(){}:h,b=c.deletingInfo,w=void 0===b?{}:b,Z=g.Am.useAddProductMutation(),y=(0,f.Z)(Z,1)[0],j=g.Am.useGetProductsByDateQuery(a),k=j.data,P=void 0===k?{}:k,M=j.isLoading,D=P.data,C=(D=void 0===D?{}:D).consumedProducts,I=void 0===C?[]:C,S=function(){return r(!i)},A=Hn()(),$=(0,f.Z)(A,2),H=$[0],q=$[1].width<768,L=(0,En.jo)(),X=(0,f.Z)(L,2)[1];return(0,_.jsxs)(m.qm,{children:[H,(0,_.jsxs)(E,{children:[(0,_.jsx)($n,{addProduct:y,shouldShowForm:o,isMobile:q}),M?(0,_.jsx)(B.$,{}):Boolean(I.length)?(0,_.jsx)(z,{products:I,currentDate:a,disabled:!o,getNotifyData:function(n){var t=n.title,e=n.deleteProduct,i=n.deletingInfo;u({title:t,deleteProduct:e,deletingInfo:i}),S()},onOpenModal:r}):(0,_.jsx)(V,{children:n("noFood")}),q&&o&&(0,_.jsx)(Cn,{children:(0,_.jsx)(Mn,{color:"primary",variant:"contained",type:"button",onClick:X,children:(0,_.jsx)(Dn,{})})})]}),(0,_.jsx)(qn.V,{leftBtnText:n("no"),rightBtnText:n("yes"),open:i,onClick:function(){v(w),r(!i)},setOpen:r,dialogTitle:n("delete"),contentText:p})]})},Xn=function(){return(0,_.jsxs)(m._z,{children:[(0,_.jsx)(Ln,{}),(0,_.jsx)(h.m,{})]})}}}]);
//# sourceMappingURL=102.6299e7b2.chunk.js.map