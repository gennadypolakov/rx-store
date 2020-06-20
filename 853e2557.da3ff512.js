(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{108:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),c=(r(0),r(118)),a={id:"react",title:"Usage with React"},i={id:"react/react",isDocsHomePage:!1,title:"Usage with React",description:"Subscribing",source:"@site/docs/react/react.md",permalink:"/rx-store/docs/react/react",editUrl:"https://github.com/rx-store/rx-store/edit/master/website/docs/react/react.md",sidebar:"someSidebar",previous:{title:"Effects",permalink:"/rx-store/docs/basics/effects"},next:{title:"FAQ",permalink:"/rx-store/docs/faq"}},s=[{value:"Subscribing",id:"subscribing",children:[{value:"useSubscription hook",id:"usesubscription-hook",children:[]},{value:"withSubscription HOC",id:"withsubscription-hoc",children:[]}]},{value:"Provider",id:"provider",children:[]},{value:"Effects",id:"effects",children:[]},{value:"React Example app",id:"react-example-app",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"subscribing"},"Subscribing"),Object(c.b)("h3",{id:"usesubscription-hook"},"useSubscription hook"),Object(c.b)("p",null,"In your components, you can access the store, and subscribe to any observable or subject in your store, using the provided hooks:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import { useRxStore, useSubscription } from "@rx-store/react-rx-store";\n\nfunction Component() {\n  const store = useRxStore();\n\n  // consume just the value(s)\n  const [count] = useSubscription(store.count$);\n\n  // or also render error / completion information\n  const [next, error, complete] = useSubscription(store.websocketMessage$);\n\n  return (\n    <>\n      Counter: {count}\n      Websockets value: {next}\n      Websockets error: {error}\n      Websockets complete: {complete}\n    </>\n  );\n}\n')),Object(c.b)("p",null,"Your component will re-render whenever each stream emits, errors, or completes."),Object(c.b)("p",null,"You can also modify observables inline with ",Object(c.b)("inlineCode",{parentName:"p"},".pipe()"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import { useRxStore, useSubscription } from "@rx-store/react-rx-store";\n\nfunction Component() {\n  const store = useRxStore();\n\n  // create an observable inline, just memoize it otherwise\n  // useSubscription() hook will re-subscribe on every render!\n  const allClick$ = useMemo(() => merge(store.myClick$, store.yourClick$), [\n    store.myClick$,\n    store.yourClick$,\n  ]);\n\n  // consume the inline observable\n  const [click] = useSubscription(allClick$);\n  console.log(click);\n\n  return null;\n}\n')),Object(c.b)("h3",{id:"withsubscription-hoc"},"withSubscription HOC"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"const WrappedComponent = withSubscription(MyComponent, store.count$)\n")),Object(c.b)("p",null,"Your component will be rendered with ",Object(c.b)("inlineCode",{parentName:"p"},"next"),", ",Object(c.b)("inlineCode",{parentName:"p"},"error")," & ",Object(c.b)("inlineCode",{parentName:"p"},"complete")," props:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<WrappedComponent\n  next={next}\n  error={error}\n  complete={complete}\n></WrappedComponent>\n")),Object(c.b)("h2",{id:"provider"},"Provider"),Object(c.b)("p",null,"You wrap your app at the top level using the ",Object(c.b)("inlineCode",{parentName:"p"},"Provider")," as shown here, passing in the store, which is a plain old javascript object:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import { Provider } from "@rx-store/react-rx-store";\n\nconst store = {};\n\n<Provider value={store}>\n  <App />\n</Provider>;\n')),Object(c.b)("h2",{id:"effects"},"Effects"),Object(c.b)("p",null,"Pass your effect(s) to the ",Object(c.b)("inlineCode",{parentName:"p"},"Provider")," at the top level of your app:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import { Provider } from "@rx-store/react-rx-store";\n\n<Provider value={store} rootEffect={effect}>\n  <App />\n</Provider>;\n')),Object(c.b)("h2",{id:"react-example-app"},"React Example app"),Object(c.b)("p",null,"Check out the full ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rx-store/rx-store/tree/master/packages/react-rx-store-example-counter"}),"example counter app")))}l.isMDXComponent=!0},118:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(a,".").concat(m)]||u[m]||b[m]||c;return r?o.a.createElement(d,i(i({ref:t},p),{},{components:r})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);