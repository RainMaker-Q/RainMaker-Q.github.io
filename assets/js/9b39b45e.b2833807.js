"use strict";(self.webpackChunkblog_generator=self.webpackChunkblog_generator||[]).push([[2346],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,y=u["".concat(p,".").concat(g)]||u[g]||m[g]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6384:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(8168),o=(n(6540),n(5680));const a={title:"lc:45\u8d2a\u5fc3",tags:["leetcode"]},i=void 0,l={unversionedId:"algorithm/45\u8d2a\u5fc3",id:"algorithm/45\u8d2a\u5fc3",isDocsHomePage:!1,title:"lc:45\u8d2a\u5fc3",description:"\u8d2a\u5fc3\u7b97\u6cd5",source:"@site/docs/algorithm/45\u8d2a\u5fc3.md",sourceDirName:"algorithm",slug:"/algorithm/45\u8d2a\u5fc3",permalink:"/docs/algorithm/45\u8d2a\u5fc3",tags:[{label:"leetcode",permalink:"/docs/tags/leetcode"}],version:"current",frontMatter:{title:"lc:45\u8d2a\u5fc3",tags:["leetcode"]},sidebar:"tutorialSidebar",previous:{title:"\u5f15\u8a00",permalink:"/docs/algorithm/index"},next:{title:"lc:\u7b2c3\u9898",permalink:"/docs/algorithm/leetcode\u7b2c3\u9898"}},p=[],c={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u8d2a\u5fc3\u7b97\u6cd5")),(0,o.yg)("p",null,"\u7b2c45\u9898"),(0,o.yg)("p",null,"\u7ed9\u4e00\u4e2a\u6570\u7ec4\uff0c\u4ece\u5934\u8df3\u5230\u5c3e\uff0c\u6570\u7ec4\u5185\u7684\u503c\u4ee3\u8868\u5f53\u524d\u80fd\u8df3\u7684\u6b65\u6570\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const jump = function(nums) {\n    let maxPosition = 0;    // \u672a\u5230\u8fb9\u754c\u524d\uff0c\u4e0b\u4e00\u6b65\u80fd\u5230\u7684\u6700\u8fdc\u4f4d\u7f6e\n  let end = 0;  // \u5f53\u524d\u80fd\u8df3\u7684\u8fb9\u754c  \n  let steps = 0;\n  \n  for(let i=0; i<nums.length-1; i++) {\n    maxPosition = Math.max(maxPosition, i+nums[i]);\n    if(i===end) {   \n            end = maxPosition;  // \u5230\u8fb9\u754c\u540e\uff0c\u66f4\u65b0\u4e0b\u4e00\u6b65\u7684\u8fb9\u754c\u4e3a\u80fd\u8df3\u5230\u7684\u6700\u8fdc\u4f4d\u7f6e\n      steps += 1;\n    }\n  }\n  return steps;\n}\n")),(0,o.yg)("p",null,"\u6bcf\u6b21\u90fd\u8df3\u80fd\u8df3\u7684\u6700\u8fdc\u4f4d\u7f6e\uff0c\u8d2a\u5fc3\u7b97\u6cd5\uff0c\u4e00\u76f4\u5230\u6700\u540e\u3002"),(0,o.yg)("p",null,"\u8fd9\u91cc\u6709\u4e00\u5904\u5de7\u5999\u7684\u5730\u65b9\uff0cfor\u5faa\u73af\u4e2d\u7684\u5224\u65ad\u6761\u4ef6\uff0c\u662f\u5c0f\u4e8e",(0,o.yg)("inlineCode",{parentName:"p"},"nums.length-1"),"\u7684,\u4e5f\u5c31\u662f\u8bf4",(0,o.yg)("inlineCode",{parentName:"p"},"i"),"\u662f\u6c38\u8fdc\u5230\u4e0d\u4e86\u6570\u7ec4\u4e2d\u6700\u540e\u90a3\u4e2a\u4f4d\u7f6e\u7684\uff0c\u800c\u6700\u540e\u4e00\u6b21\u7684",(0,o.yg)("inlineCode",{parentName:"p"},"end"),"\u5fc5\u7136\u4f1a\u5927\u4e8e\u7b49\u4e8e\u6570\u7ec4\u6700\u540e\u7684\u4f4d\u7f6e\uff0c\u6240\u4ee5",(0,o.yg)("inlineCode",{parentName:"p"},"step"),"\u5c31\u5c11\u4e00\u6b21\u589e\u52a0\u3002\u56e0\u4e3a\u5728\u592a\u521d\u4e4b\u65f6\uff0c\u76d8\u53e4\u5f00\u5929\u8f9f\u5730\u7684\u65f6\u5019\uff0c\u6211\u4eec\u7ed9",(0,o.yg)("inlineCode",{parentName:"p"},"end"),"\u8d4b\u503c\u4e3a0\uff0c\u4e5f\u5c31\u662f\u8bf4\u7b2c\u4e00\u6b21\u521a\u8fdb\u5165\u7a0b\u5e8f\u6267\u884c\u7684\u65f6\u5019",(0,o.yg)("inlineCode",{parentName:"p"},"step"),"\u5c31\u5df2\u7ecf\u52a0\u4e00\u4e86\uff0c\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u4e00\u54c8\u3002"),(0,o.yg)("hr",null),(0,o.yg)("p",null,"2020.6.19",(0,o.yg)("br",{parentName:"p"}),"\n","written by Rain."))}u.isMDXComponent=!0}}]);