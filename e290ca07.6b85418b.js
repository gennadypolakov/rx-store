(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(124)),c={id:"store",title:"store()"},i={id:"react/api-reference/store",isDocsHomePage:!1,title:"store()",description:"Args:",source:"@site/docs/react/api-reference/store.md",permalink:"/rx-store/docs/react/api-reference/store",editUrl:"https://github.com/rx-store/rx-store/edit/master/website/docs/react/api-reference/store.md",sidebar:"someSidebar",previous:{title:"Usage with React",permalink:"/rx-store/docs/react/react"},next:{title:"<Manager />",permalink:"/rx-store/docs/react/api-reference/manager"}},s=[],b={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Args"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"value"),": {}",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The store value is a plain javascript object (containing ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../../basics/subjects"}),"RxJs subjects")," & ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../../basics/observables"}),"observables"),")."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"effect"),": ",Object(o.b)("inlineCode",{parentName:"li"},"() => () => void"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"A function that when called, subscribes to the streams in your store value, runs side effects for the duration it is subscribed. The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../../basics/effects"}),"effect function")," should return another function that calls unsubscribe on it's RxJs subscription(s) to tear down any effects once the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"./manager"}),"Manager unmounts"),".")))),Object(o.b)("p",null,"You create your store value, which is a plain old javascript object (containing ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../basics/subjects"}),"RxJs subjects")," & ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../basics/observables"}),"observables"),"), then use ",Object(o.b)("inlineCode",{parentName:"p"},"createStore()")," passing in the store value, and the optional root effect."),Object(o.b)("p",null,"You get back a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./manager"}),"<","Manager /",">")," component, for providing the store and it's context, and you also get back the React context itself, for conuming from and emitting to the store."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import { Provider } from "@rx-store/react-rx-store";\n\nconst storeValue = { count$: new Subject() };\nconst { Manager, context } = store(value, appRootEffect);\nexport const rootContext = context;\n')))}l.isMDXComponent=!0},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?a.a.createElement(m,i(i({ref:t},b),{},{components:r})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);