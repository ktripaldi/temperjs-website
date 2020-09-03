(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return h}));var a=n(2),r=n(6),c=n(0),o=n.n(c),i=n(76),p=n(110);var s=function(){const[e,t]=Object(p.b)("counter.count"),n=Object(p.c)("counter.isTargetReached");return o.a.createElement("div",null,o.a.createElement("p",null,e," ",n&&o.a.createElement("span",null,"You've reached the target!")),o.a.createElement("button",{onClick:function(){t(({value:e})=>e+1)}},"Increment"),"\xa0",o.a.createElement("button",{onClick:function(){t(({value:e})=>e-1)}},"Decrement"))};var u=Object(p.d)((function(){return Object(p.a)("counter",{count:0,isTargetReached:function(e){return(0,e.get)("counter.count")>=5}}),o.a.createElement(s,null)}),{debug:!1}),l={id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},b={unversionedId:"getting_started",id:"getting_started",isDocsHomePage:!1,title:"Getting Started",description:"This section is meant to get you familiar with the Temper way of doing things.",source:"@site/docs/getting_started.md",slug:"/getting_started",permalink:"/docs/getting_started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting_started.md",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",previous:{title:"Core Concepts",permalink:"/docs/core_concepts"},next:{title:"API Documentation",permalink:"/docs/api_documentation"}},m=[{value:"Create React App",id:"create-react-app",children:[]},{value:"Installation",id:"installation",children:[]},{value:"withTemper",id:"withtemper",children:[]},{value:"Traits",id:"traits",children:[]},{value:"Selectors",id:"selectors",children:[]},{value:"Nested Traits",id:"nested-traits",children:[]},{value:"Wrapping things up",id:"wrapping-things-up",children:[]}],d={rightToc:m};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section is meant to get you familiar with the Temper way of doing things.\nIf you're looking for something specific, please read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"api_documentation"}),"API Documentation"),". If you're just starting out with Temper, read on!"),Object(i.b)("p",null,"For the purpose of this guide, we'll create a simple counter that prints ",Object(i.b)("em",{parentName:"p"},"You've reached the target!")," when you get to the value of 5."),Object(i.b)("h2",{id:"create-react-app"},"Create React App"),Object(i.b)("p",null,"Temper is a state management library for React, so you need to have React installed and running to use Temper. The easiest and recommended way for bootstrapping a React application is to use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app#creating-an-app"}),"Create React App"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npx create-react-app my-app\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),"npx")," is a package runner tool that comes with npm 5.2+ and higher, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"}),"instructions for older npm versions"),".")),Object(i.b)("p",null,"For more ways to install Create React App, see the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app#creating-an-app"}),"official documentation"),"."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/get-npm"}),"npm"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm install temperjs\n")),Object(i.b)("p",null,"Using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://classic.yarnpkg.com/en/docs/install/"}),"yarn"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"yarn add temperjs\n")),Object(i.b)("h2",{id:"withtemper"},"withTemper"),Object(i.b)("p",null,"If you want to use Temper states, you need to wrap your component (preferably the root component) with the hoc ",Object(i.b)("inlineCode",{parentName:"p"},"withTemper"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{8}","{8}":!0}),"import React from 'react';\nimport { withTemper } from 'temperjs';\n\nfunction App() {\n  return <Counter />\n}\n\nexport default withTemper(App);\n")),Object(i.b)("p",null,"We'll implement the ",Object(i.b)("inlineCode",{parentName:"p"},"Counter")," component in the following section."),Object(i.b)("h2",{id:"traits"},"Traits"),Object(i.b)("p",null,"Temper states are called ",Object(i.b)("strong",{parentName:"p"},"Traits"),".\nTraits are globally shared units of state that components can subscribe to.\n",Object(i.b)("strong",{parentName:"p"},"Traits can be read and written from any component in the application tree."),"\nSubscribed components will rerender everytime the Trait value changes."),Object(i.b)("p",null,"If you want to set a Trait, use can use the action ",Object(i.b)("inlineCode",{parentName:"p"},"setTrait"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5}","{5}":!0}),"import React from 'react';\nimport { withTemper, setTrait } from 'temperjs';\n\nfunction App() {\n  setTrait('count', 0);\n  return <Counter />\n}\n\nexport default withTemper(App);\n")),Object(i.b)("p",null,"If you need to read from ",Object(i.b)("strong",{parentName:"p"},"and write to")," a Trait, you can use the hook ",Object(i.b)("inlineCode",{parentName:"p"},"useTrait"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5}","{5}":!0}),"import React from 'react';\nimport { useTrait } from 'temperjs';\n\nfunction Counter() {\n  const [count, setCount] = useTrait('count');\n\n  function incrementCounter() {\n    setCount(({ value }) => value + 1);\n  }\n  function decrementCounter() {\n    setCount(({ value }) => value - 1);\n  }\n\n  return (\n    <div>\n      <p>{count}</p>\n      <button onClick={incrementCounter}>Increment</button>\n      <button onClick={decrementCounter}>Decrement</button>\n    </div>\n  );\n}\n\nexport default Counter;\n\n")),Object(i.b)("h2",{id:"selectors"},"Selectors"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Selectors are derived Traits"),". You can think of selectors as the output of passing a state to a pure function that executes some logic based on that state."),Object(i.b)("p",null,"If you want to create a selector, you can use the following syntax:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{8}","{8}":!0}),"import React from 'react';\nimport { withTemper, setTrait } from 'temperjs';\n\nfunction App() {\n  // This is a simple Trait\n  setTrait('count', 0);\n  // This is a selector Trait\n  setTrait('isTargetReached', ({ get }) => get('count') >= 5);\n\n  return <Counter />\n}\n\nexport default withTemper(App);\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Selectors ",Object(i.b)("strong",{parentName:"p"},"permanently")," depend on their reference Trait.\nWhen the reference Trait changes, the selector value is updated ",Object(i.b)("strong",{parentName:"p"},"automatically"),"."))),Object(i.b)("h2",{id:"nested-traits"},"Nested Traits"),Object(i.b)("p",null,"Temper encourages you to wrap related Traits in a single object.\n",Object(i.b)("strong",{parentName:"p"},"When a Trait is an object, each attribute will become a new Trait that is individually updatable and subscribable"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5-8}","{5-8}":!0}),"import React from 'react';\nimport { withTemper, setTrait } from 'temperjs';\n\nfunction App() {\n  setTrait('counter', {\n    count: 0,\n    isTargetReached: ({ get }) => get('counter.count') >= 5\n  });\n\n  return <Counter />\n}\n\nexport default withTemper(App);\n")),Object(i.b)("p",null,"If you just need to read a Trait, you can use the hook ",Object(i.b)("inlineCode",{parentName:"p"},"useTraitValue")," (nested Traits are referenced with the dot notation.):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{6}","{6}":!0}),"import React from 'react';\nimport { useTrait, useTraitValue } from 'temperjs';\n\nfunction Counter() {\n  const [count, setCount] = useTrait('counter.count');\n  const isTargetReached = useTraitValue('counter.isTargetReached');\n\n  function incrementCounter() {\n    setCount(({ value }) => value + 1);\n  }\n  function decrementCounter() {\n    setCount(({ value }) => value - 1);\n  }\n\n  return (\n    <div>\n      <p>{count} { isTargetReached && (<span>You've reached the target!</span>)}</p>\n      <button onClick={incrementCounter}>Increment</button>\n      <button onClick={decrementCounter}>Decrement</button>\n    </div>\n  );\n}\n\nexport default Counter;\n\n")),Object(i.b)("h2",{id:"wrapping-things-up"},"Wrapping things up"),Object(i.b)("p",null,"The result of the above code is:"),Object(i.b)(u,{mdxType:"App"}))}h.isMDXComponent=!0}}]);