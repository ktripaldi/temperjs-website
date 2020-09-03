(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{53:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),i=(a(0),a(76)),o={id:"setTrait",title:"setTrait",sidebar_label:"setTrait"},s={unversionedId:"setTrait",id:"setTrait",isDocsHomePage:!1,title:"setTrait",description:"setTrait creates or updates a Trait.",source:"@site/docs/setTrait.md",slug:"/setTrait",permalink:"/docs/setTrait",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/setTrait.md",version:"current",sidebar_label:"setTrait",sidebar:"someSidebar",previous:{title:"withTemper",permalink:"/docs/withTemper"},next:{title:"useTraitValue",permalink:"/docs/useTraitValue"}},c=[{value:"Selectors",id:"selectors",children:[]}],l={rightToc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"setTrait")," creates or updates a Trait."),Object(i.b)("p",null,"Temper encourages you to wrap related Traits in a single object.\n",Object(i.b)("strong",{parentName:"p"},"When a Trait is an object, each attribute will become a new Trait that is individually updatable and subscribable"),".\nYou'll be able to reference nested Traits with the dot notation."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{8,10,12}","{8,10,12}":!0}),"// using ES6 modules\nimport { setTrait } from 'temperjs'\n\n// using CommonJS modules\nconst setTrait = require('temperjs').setTrait\n\n// to create a new Trait\nsetTrait('titles', { mainTitle: \"Lorem ipsum\", subTitle: 'Aliquam suscipit'});\n// to update a Trait\nsetTrait('titles.mainTitle', 'Lorem ipsum dolor sit amet');\n// to update a Trait using the current value\nsetTrait('title.subTitle', ({ value }) => value.toLowerCase());\n")),Object(i.b)("p",null,"Traits are type safe. Once set, a Trait type cannot change.\nYou can however unset a Trait by passing an ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," value."),Object(i.b)("h2",{id:"selectors"},"Selectors"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Selectors are derived Traits"),". You can think of selectors as the output of passing a state to a pure function that executes some logic based on that state."),Object(i.b)("p",null,"In Temper selectors are Traits whose value is a callback that uses the ",Object(i.b)("inlineCode",{parentName:"p"},"get")," helper method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4}","{4}":!0}),"// This is a simple Trait\nsetTrait('radius', 5);\n// This is a selector Trait\nsetTrait('circleArea', ({ get }) => Math.pow(get('radius'), 2) * Math.PI);\n}\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Selectors ",Object(i.b)("strong",{parentName:"p"},"permanently")," depend on their reference Trait.\nWhen the reference Trait changes, the selector value is updated ",Object(i.b)("strong",{parentName:"p"},"automatically"),"."))),Object(i.b)("p",null,"Selectors can also have multiple reference Traits."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{2}","{2}":!0}),"setTrait('triangle', { base: 10, height: 5});\nsetTrait('triangleArea', ({ get }) => get('triangle.base') * get('triangle.height') / 2);\n}\n")))}u.isMDXComponent=!0},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return a?n.a.createElement(d,s(s({ref:t},l),{},{components:a})):n.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);