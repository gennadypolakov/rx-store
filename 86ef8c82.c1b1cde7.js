(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(2),s=r(6),o=(r(0),r(124)),c={id:"subjects",title:"Subjects"},a={id:"basics/subjects",isDocsHomePage:!1,title:"Subjects",description:"There are different types of subjects in Rxjs. Subjects should be a single source of truth in your Rx Store,",source:"@site/docs/basics/subjects.md",permalink:"/rx-store/docs/basics/subjects",editUrl:"https://github.com/rx-store/rx-store/edit/master/website/docs/basics/subjects.md",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/rx-store/docs/introduction/installation"},next:{title:"Observables",permalink:"/rx-store/docs/basics/observables"}},i=[{value:"Subjects",id:"subjects",children:[]},{value:"Behavior Subject",id:"behavior-subject",children:[]},{value:"Replay Subject",id:"replay-subject",children:[]}],u={rightToc:i};function b(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are different types of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rxjs-dev.firebaseapp.com/guide/subject"}),"subjects in Rxjs"),". Subjects should be a single source of truth in your ",Object(o.b)("inlineCode",{parentName:"p"},"Rx Store"),",\nyou emit values onto them which are then multi-cast to all subscribers."),Object(o.b)("h3",{id:"subjects"},"Subjects"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"store.count$.subscribe((x) => console.log(`subscriber A ${x}`));\nstore.count$.next(1);\nstore.count$.subscribe((x) => console.log(`subscriber B ${x}`));\nstore.count$.next(2);\nstore.count$.next(3);\n\n// subscriber A 1\n// subscriber A 2\n// subscriber B 2\n// subscriber A 3\n// subscriber B 3\n")),Object(o.b)("p",null,"Notice that only ",Object(o.b)("inlineCode",{parentName:"p"},"subscriber A")," received the first value, but after ",Object(o.b)("inlineCode",{parentName:"p"},"subscriber B")," subscribed, both subscribers received the following values."),Object(o.b)("h2",{id:"behavior-subject"},"Behavior Subject"),Object(o.b)("p",null,"A behavior subject should be used when you want subscribers to get the latest value when they first subscribe. If your subject models a stream of the latest state of something, you probably want a ",Object(o.b)("inlineCode",{parentName:"p"},"behavior subject"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const store = {\n    // doesn't emit any value upon subscription,\n    // until user acts, producing the next value.\n  counterChange$: new Subject();\n\n  // emits the latest value on initial subscription,\n  // rather than waiting for next value.\n  count$: new BehaviorSubject(0);\n};\n\n// emits the last [initital] value on subscribe (outputs 0!)\nstore.count$.subscribe(value => console.log(value));\n\n// does not emit anything, yet.\nstore.counterChange$.subscribe(value => console.log(value));\n")),Object(o.b)("h2",{id:"replay-subject"},"Replay Subject"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rxjs-dev.firebaseapp.com/guide/subject#replaysubject"}),"ReplaySubject")," records multiple values from the Observable execution and replays them to new subscribers."))}b.isMDXComponent=!0},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return j}));var n=r(0),s=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=s.a.createContext({}),b=function(e){var t=s.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=b(e.components);return s.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=b(r),d=n,j=l["".concat(c,".").concat(d)]||l[d]||p[d]||o;return r?s.a.createElement(j,a(a({ref:t},u),{},{components:r})):s.a.createElement(j,a({ref:t},u))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);