"use strict";(self.webpackChunkblog_generator=self.webpackChunkblog_generator||[]).push([[739],{273:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var t=r(8168),a=(r(6540),r(5680));const c={title:"\u51fd\u6570\u67ef\u91cc\u5316",tags:["\u51fd\u6570\u5f0f"]},o=void 0,u={unversionedId:"fe_tech/\u67ef\u91cc\u5316",id:"fe_tech/\u67ef\u91cc\u5316",isDocsHomePage:!1,title:"\u51fd\u6570\u67ef\u91cc\u5316",description:"\u6982\u5ff5",source:"@site/docs/fe_tech/\u67ef\u91cc\u5316.md",sourceDirName:"fe_tech",slug:"/fe_tech/\u67ef\u91cc\u5316",permalink:"/en/docs/fe_tech/\u67ef\u91cc\u5316",tags:[{label:"\u51fd\u6570\u5f0f",permalink:"/en/docs/tags/\u51fd\u6570\u5f0f"}],version:"current",frontMatter:{title:"\u51fd\u6570\u67ef\u91cc\u5316",tags:["\u51fd\u6570\u5f0f"]},sidebar:"tutorialSidebar",previous:{title:"bind\u8be6\u89e3",permalink:"/en/docs/fe_tech/js\u4e2d\u7684bind\u8be6\u89e3"},next:{title:"\u6d45\u62f7\u8d1d\u4e0e\u6df1\u62f7\u8d1d",permalink:"/en/docs/fe_tech/\u6d45\u62f7\u8d1d\u4e0e\u6df1\u62f7\u8d1d"}},l=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u611f\u60f3",id:"\u611f\u60f3",children:[]}],i={toc:l},p="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.A)({},i,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,a.yg)("p",null,"\u67ef\u91cc\u5316\u7684\u4f5c\u7528\uff0c\u662f\u5c06\u4e00\u4e2a\u6709\u591a\u4e2a\u8f93\u5165\u53c2\u6570\u7684\u51fd\u6570\uff0c\u8f6c\u6362\u4e3a\u53ea\u6709\u4e00\u4e2a\u8f93\u5165\u53c2\u6570\u7684\u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u51fd\u6570\uff1a\u4ee5\u540c\u6837\u7684\u65b9\u6cd5\uff0c\u5904\u7406\u5269\u4f59\u7684\u53c2\u6570\u3002  "),(0,a.yg)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"function curry(fn, ...args) {\n  if(fn.length > args.length) { // \u4f20\u5165\u53c2\u6570\u8fd8\u672a\u5230\u8fbe\n    return function(...arguments) {  // \u8fd4\u56de\u51fd\u6570\n      return curry(fn, ...args, ...arguments); // \u9012\u5f52\u8c03\u7528\u81ea\u5df1\n    }\n  } else {\n    return fn(...args); // \u7b26\u5408\u6761\u4ef6\uff0c\u8fd4\u56de\u6700\u7ec8\u51fd\u6570\n  }\n}\n\n\n// demo\nconst add = (a, b, c) => a + b + c; // \u2460\nconst curryAdd = curry(add);    // \u2461\ncurryAdd(1)(2)(3);  // 6\ncurryAdd(1, 2)(3);  // 6\ncurryAdd(1, 2, 3);  // 6\n")),(0,a.yg)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.yg)("p",null,"\u770b\u4e0a\u9762\u7684demo\u4ee3\u7801\uff0c\u7b2c\u2460\u6b65\uff0c\u4f20\u5165\u7684\u51fd\u6570\u6709\u4e09\u4e2a\u53c2\u6570\uff0c\u800c\u5bf9\u51fd\u6570\u67ef\u91cc\u5316\u540e\uff0ccurryAdd\u4f20\u5165\u7684\u53c2\u6570\u53ef\u4ee5\u6bcf\u6b21\u4f20\u4e00\u4e2a\uff0c\u4e00\u5171\u4f20\u4e09\u6b21\uff1b\u4e5f\u53ef\u4ee5\u7b2c\u4e00\u6b21\u4f20\u4e24\u4e2a\uff0c\u7b2c\u4e8c\u6b21\u4f20\u4e00\u4e2a\uff1b\u53ea\u8981\u4f20\u9012\u53c2\u6570\u603b\u957f\u5ea6\u662fadd\u7684\u603b\u957f\u5ea6\u5373\u53ef\u3002",(0,a.yg)("br",{parentName:"p"}),"\n","\u7b2c\u2461\u6b65\uff0c\u5bf9\u51fd\u6570\u67ef\u91cc\u5316\u540e\uff0c\u5b9e\u9645\u4e0acurryAdd\u7684\u503c\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5982\u4e0b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"function(...arguments) {\n  return curry(fn, ...args, ...arguments);\n}\n")),(0,a.yg)("p",null,"\u6b64\u5904\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"...args"),"\u662f\u7a7a\u7684\uff0c\u4ec0\u4e48\u90fd\u6ca1\u6709\uff0c\u56e0\u4e3acurry\u4f20\u5165\u7684\u53c2\u6570\u53ea\u6709\u4e00\u4e2aadd\u51fd\u6570\u3002",(0,a.yg)("br",{parentName:"p"}),"\n","\u5f53\u8c03\u7528\u5230",(0,a.yg)("inlineCode",{parentName:"p"},"curryAdd(1)(2)(3)"),"\u65f6\uff0c\u8fd4\u56de\u503c\u5206\u522b\u662f\u4ee5\u4e0b\u51fd\u6570"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"function(...arguments) {\n  return curry(fn, 1, ...arguments);\n}\n\nfunction(...arguments) {\n  return curry(fn, 1, 2, ...arguments);\n}\n\nfunction(...arguments) {\n  return curry(fn, 1, 2, 3 ...arguments);\n}\n\nadd(1, 2, 3);\n")),(0,a.yg)("p",null,"\u5230\u7b2c\u4e09\u4e2a\u51fd\u6570\u5c31\u4f1a\u8fd4\u56de\uff0c\u6b64\u65f6\u53c2\u6570\u7684\u957f\u5ea6\u5df2\u7ecf\u548cadd\u51fd\u6570\u7684\u8f93\u5165\u53c2\u6570\u5bf9\u9f50\uff0c\u6b64\u65f6\u8c03\u7528add\u51fd\u6570\uff0c\u8fd4\u56de\u7ed3\u679c\u3002"),(0,a.yg)("h3",{id:"\u611f\u60f3"},"\u611f\u60f3"),(0,a.yg)("p",null,"\u4ee5\u524d\u4e5f\u89c1\u8fc7\u67ef\u91cc\u5316\u7684\u4e00\u4e9b\u4e1c\u897f\uff0c\u9759\u4e0d\u4e0b\u5fc3\u53bb\u5206\u6790\u3002\u6700\u8fd1\u770b\u4e86\u4e00\u4e9b\u6e90\u7801\uff0c\u89c9\u5f97\u8fd9\u79cd\u51fd\u6570\u5f0f\u7f16\u7a0b\u5728js\u4e2d\u8fd8\u662f\u6bd4\u8f83\u5e38\u89c1\u7684\u3002\u6700\u8fd1\u770b\u5230\u4e00\u7bc7\u6587\u7ae0\uff0c\u8bb2koa\u7684\u6d0b\u8471\u5708\u6a21\u578b\uff0credux\u7684\u5b9e\u73b0\uff0c\u90fd\u662f\u7c7b\u4f3c\u8fd9\u79cd\u4e00\u5c42\u5305\u4e00\u5c42\u7684\u51fd\u6570\uff0c\u5c06\u8fd9\u4e9b\u8054\u7cfb\u8d77\u6765\u89c9\u5f97\u8fd8\u597d\u7406\u89e3\u4e00\u4e9b\u3002  "),(0,a.yg)("p",null,"written by rain.",(0,a.yg)("br",{parentName:"p"}),"\n","20.08.04"))}d.isMDXComponent=!0},5680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>y});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),i=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=i(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=i(r),g=a,y=d["".concat(l,".").concat(g)]||d[g]||s[g]||c;return r?t.createElement(y,o(o({ref:n},p),{},{components:r})):t.createElement(y,o({ref:n},p))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=g;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[d]="string"==typeof e?e:a,o[1]=u;for(var i=2;i<c;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);