"use strict";(self.webpackChunkslimmom_front_end=self.webpackChunkslimmom_front_end||[]).push([[521],{3767:function(e,n,t){var r=t(2791),u=t(7563),c=t(8956),o=t(9723),i=t(184);function f(e){return e.substring(2).toLowerCase()}n.Z=function(e){var n=e.children,t=e.disableReactTree,a=void 0!==t&&t,s=e.mouseEvent,v=void 0===s?"onClick":s,d=e.onClickAway,l=e.touchEvent,m=void 0===l?"onTouchEnd":l,h=r.useRef(!1),E=r.useRef(null),g=r.useRef(!1),p=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){g.current=!0}),0),function(){g.current=!1}}),[]);var L=(0,u.Z)(n.ref,E),k=(0,c.Z)((function(e){var n=p.current;p.current=!1;var t=(0,o.Z)(E.current);!g.current||!E.current||"clientX"in e&&function(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}(e,t)||(h.current?h.current=!1:(e.composedPath?e.composedPath().indexOf(E.current)>-1:!t.documentElement.contains(e.target)||E.current.contains(e.target))||!a&&n||d(e))})),w=function(e){return function(t){p.current=!0;var r=n.props[e];r&&r(t)}},Z={ref:L};return!1!==m&&(Z[m]=w(m)),r.useEffect((function(){if(!1!==m){var e=f(m),n=(0,o.Z)(E.current),t=function(){h.current=!0};return n.addEventListener(e,k),n.addEventListener("touchmove",t),function(){n.removeEventListener(e,k),n.removeEventListener("touchmove",t)}}}),[k,m]),!1!==v&&(Z[v]=w(v)),r.useEffect((function(){if(!1!==v){var e=f(v),n=(0,o.Z)(E.current);return n.addEventListener(e,k),function(){n.removeEventListener(e,k)}}}),[k,v]),(0,i.jsx)(r.Fragment,{children:r.cloneElement(n,Z)})}},6856:function(e,n,t){t.d(n,{FU5:function(){return u}});var r=t(9983);function u(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(e)}}}]);
//# sourceMappingURL=521.0bff6869.chunk.js.map