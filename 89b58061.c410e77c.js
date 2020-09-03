(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),i=(r(0),r(76)),o={id:"useTrait",title:"useTrait",sidebar_label:"useTrait"},u={unversionedId:"useTrait",id:"useTrait",isDocsHomePage:!1,title:"useTrait",description:"useTrait returns an array of two elements:",source:"@site/docs/useTrait.md",slug:"/useTrait",permalink:"/docs/useTrait",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/useTrait.md",version:"current",sidebar_label:"useTrait",sidebar:"someSidebar",previous:{title:"useTraitValue",permalink:"/docs/useTraitValue"},next:{title:"getTrait",permalink:"/docs/getTrait"}},c=[],s={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"useTrait")," returns an array of two elements:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the result of ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"useTraitValue"}),Object(i.b)("inlineCode",{parentName:"a"},"useTraitValue")),";"),Object(i.b)("li",{parentName:"ul"},"a memoized reference to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"setTrait"}),Object(i.b)("inlineCode",{parentName:"a"},"setTrait")),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{7}","{7}":!0}),"// using ES6 modules\nimport { useTrait } from 'temperjs';\n\n// using CommonJS modules\nconst useTrait = require('temperjs').useTrait;\n\nconst [count, setCount] = useTrait('count');\n\nfunction increaseCount() {\n  setCount(({ value }) => value += 1);\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"useTrait")," accepts the same subscription configuration options of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"useTraitValue"}),Object(i.b)("inlineCode",{parentName:"a"},"useTraitValue")),"."))}l.isMDXComponent=!0},76:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return r?a.a.createElement(f,u(u({ref:t},s),{},{components:r})):a.a.createElement(f,u({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);