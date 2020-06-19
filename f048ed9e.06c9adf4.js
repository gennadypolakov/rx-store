(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(6),s=(n(0),n(118)),r={id:"getting-started",title:"Getting Started"},c={id:"introduction/getting-started",isDocsHomePage:!0,title:"Getting Started",description:"Reactive store for frontend UI libraries, like React, using Rxjs. If you are not yet familiar with Rxjs, go watch this video & then come back.",source:"@site/docs/introduction/getting-started.md",permalink:"/rx-store/docs/",editUrl:"https://github.com/rx-store/rx-store/edit/master/website/docs/introduction/getting-started.md",sidebar:"someSidebar",next:{title:"Installation",permalink:"/rx-store/docs/introduction/installation"}},i=[{value:"Subjects",id:"subjects",children:[{value:"Provider",id:"provider",children:[]},{value:"Observables",id:"observables",children:[]}]},{value:"Subscriptions",id:"subscriptions",children:[]},{value:"Effects",id:"effects",children:[]},{value:"State vs Streams",id:"state-vs-streams",children:[{value:"Subject",id:"subject",children:[]},{value:"Behavior Subject",id:"behavior-subject",children:[]}]},{value:"Deriving state &quot;up&quot;",id:"deriving-state-up",children:[]},{value:"React Example app",id:"react-example-app",children:[]}],b={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Reactive store for frontend UI libraries, like React, using Rxjs. If you are not yet familiar with Rxjs, ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=ewcoEYS85Co"}),"go watch this video")," & then come back."),Object(s.b)("h1",{id:"concepts"},"Concepts"),Object(s.b)("p",null,"Let's walk through the Rx Store concepts using a counter app."),Object(s.b)("h2",{id:"subjects"},"Subjects"),Object(s.b)("p",null,'These "subjects" are closest to what you\'re used to calling your app\'s "state". Instead of state, they are event emitters.'),Object(s.b)("p",null,"Our counter app will use an event bus where we will emit values, in this case a ",Object(s.b)("inlineCode",{parentName:"p"},"count"),"!"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import { Subject } from "rxjs";\n\nconst store = {\n  count$: new Subject(),\n};\n')),Object(s.b)("p",null,"Subjects should be a single source of truth,\nthey are multi-cast, both read & write. That is, you can subscribe to them, and emit values on them which will be multi-cast to all the subscribers."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"store.subscribe((x) => console.log(`subscriber A ${x}`));\nstore.count$.next(1);\nstore.subscribe((x) => console.log(`subscriber B ${x}`));\nstore.count$.next(2);\nstore.count$.next(3);\n\n// subscriber A 1\n// subscriber A 2\n// subscriber B 2\n// subscriber A 3\n// subscriber B 3\n")),Object(s.b)("p",null,"Notice that only ",Object(s.b)("inlineCode",{parentName:"p"},"subscriber A")," received the first value, but after ",Object(s.b)("inlineCode",{parentName:"p"},"subscriber B")," subscribed, both subscribers received all subsequent events. This is all just core RxJS so far, you can run the example code here:"),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackblitz.com/edit/rxjs-szr5f9"}),"https://stackblitz.com/edit/rxjs-szr5f9")),Object(s.b)("h3",{id:"provider"},"Provider"),Object(s.b)("p",null,"You wrap your app in the provider like so, and pass in the store from the previous step:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import { Provider } from "@rx-store/react-rx-store";\n\n<Provider value={store}>\n  <App />\n</Provider>;\n')),Object(s.b)("h3",{id:"observables"},"Observables"),Object(s.b)("p",null,'These "observables" are your app\'s "selectors".'),Object(s.b)("p",null,"They derive state, manipulate time, are lazy &\nuni-cast, and are read only."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"count$ = new Subject();\n\nconst store = {\n  $count,\n\n  evenCount$: count$.pipe(\n    delay(500),\n    filter((x: number) => x % 2 === 0)\n  ),\n\n  oddCount$: count$.pipe(\n    delay(500),\n    filter((x: number) => x % 2 !== 0)\n  ),\n};\n")),Object(s.b)("p",null,"Observables (here ",Object(s.b)("inlineCode",{parentName:"p"},"eventCount$")," and ",Object(s.b)("inlineCode",{parentName:"p"},"oddCount"),"), just like subjects, can be subscribed to, however they are uni-cast & lazy, meaning the timer for the ",Object(s.b)("inlineCode",{parentName:"p"},"delay")," will not start a timer until something subscribes, and each subscriber will get its own timer."),Object(s.b)("h2",{id:"subscriptions"},"Subscriptions"),Object(s.b)("p",null,"In your components, you can subscribe to & consume data from any observable or subject in your store, using the provided hooks:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import { useRxStore, useSubscription } from "@rx-store/react-rx-store";\n\nfunction Component() {\n  const store = useRxStore();\n\n  // consume just the value(s)\n  const [count] = useSubscription(store.count$);\n\n  // or also render error / completion information\n  const [next, error, complete] = useSubscription(store.websocketMessage$);\n\n  return (\n    <>\n      Counter: {count}\n      Websockets value: {next}\n      Websockets error: {error}\n      Websockets complete: {complete}\n    </>\n  );\n}\n')),Object(s.b)("p",null,"Your component will re-render whenever the stream emits, errors, or completes."),Object(s.b)("h2",{id:"effects"},"Effects"),Object(s.b)("p",null,"Effects are global subscriptions, normally producing side effects, or handling some cross cutting concerns."),Object(s.b)("p",null,"We can subscribe directly to our subjects (event emitters), subscribe directly to observables, or create combos and higher order streams using RxJs creation operators such as ",Object(s.b)("inlineCode",{parentName:"p"},"merge()"),", ",Object(s.b)("inlineCode",{parentName:"p"},"combineLatest()"),", ",Object(s.b)("inlineCode",{parentName:"p"},"bufferWhen()")," etc."),Object(s.b)("p",null,"Here is an effect that subscribes to the ",Object(s.b)("inlineCode",{parentName:"p"},"count$")," stream, it delays each value by one second, and logs them to console. In this example, we have a global effect that runs as soon as the app boots, waits until the ",Object(s.b)("inlineCode",{parentName:"p"},"count$")," subject emits, then waits 1s, logs the values, and resets the count back to 1 with a 50% probability. Be careful not to create an infinite loop by having a stream recursively emit back onto itself with 100% probability!"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"export const effect = (store) => {\n  const subscription = store.count$.pipe(delay(1000)).subscribe((count) => {\n    console.log({ count });\n    if (Math.random() > 0.5) {\n      store.count$.next(1);\n    }\n  });\n  return () => subscription.unsubscribe();\n};\n")),Object(s.b)("p",null,"Pass your effect(s) to the ",Object(s.b)("inlineCode",{parentName:"p"},"Provider")," at the top level of your app:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import { Provider } from "@rx-store/react-rx-store";\n\n<Provider value={store} rootEffect={effect}>\n  <App />\n</Provider>;\n')),Object(s.b)("p",null,"If you want multiple effects & subscriptions, it is up to you to nest them like so:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"export const effect = (store) => {\n  const subscriptions = []\n  subscriptions.push(\n    store.count$.subscribe((count) => console.log({ count })),\n    store.count$.subscribe((count) => console.log({ count })),\n    store.count$.subscribe((count) => console.log({ count })),\n  });\n  return () => subscriptions.forEach(s => s.unsubscribe());\n};\n")),Object(s.b)("p",null,"Your subscription will more commonly emit onto some other subject, for example you might often subscribe to a subject, and for each value emitted on that subject you might send a network request, and you might emit the network responses back onto some other subject."),Object(s.b)("p",null,'As another example, in a social network app you may have "refetch news feed" effect, which may subscribe to a ',Object(s.b)("inlineCode",{parentName:"p"},"refetchNewsFeed$")," subject, which emits ",Object(s.b)("inlineCode",{parentName:"p"},"true")," when the user scrolls up, to trigger a global effect that fetched the latest news feed posts & emitted them onto a ",Object(s.b)("inlineCode",{parentName:"p"},"newsFeedPost$")," subject."),Object(s.b)("p",null,'In a video game, you might have a "game loop" effect wherein you subscribe to the latest ',Object(s.b)("inlineCode",{parentName:"p"},"x$"),", ",Object(s.b)("inlineCode",{parentName:"p"},"y$")," mouse position, and a stream of the latest ",Object(s.b)("inlineCode",{parentName:"p"},"click$"),". You might emit onto a stream of ",Object(s.b)("inlineCode",{parentName:"p"},"hit$")," & ",Object(s.b)("inlineCode",{parentName:"p"},"miss$")," depending on if the latest values on the ",Object(s.b)("inlineCode",{parentName:"p"},"x$"),", ",Object(s.b)("inlineCode",{parentName:"p"},"y$")," streams collide with any enemy positions."),Object(s.b)("h2",{id:"state-vs-streams"},"State vs Streams"),Object(s.b)("h3",{id:"subject"},"Subject"),Object(s.b)("p",null,"Let's rename our ",Object(s.b)("inlineCode",{parentName:"p"},"count$")," subject to ",Object(s.b)("inlineCode",{parentName:"p"},"counterChange$"),". We're going to switch our thinking from state to streams. No longer will this be a stream of state, it will be a stream of changes!"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const store = {\n  counterChange$: new Subject(),\n};\n")),Object(s.b)("h3",{id:"behavior-subject"},"Behavior Subject"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const store = {\n  counterChange$: new Subject()\n  count$: new BehaviorSubject(0)\n};\n\n// emits the last [initital] value on subscribe\nappSubjects.count$.subscribe(value => console.log(value));\n")),Object(s.b)("p",null,"Lastly, we add an effect that subscribes to the ",Object(s.b)("inlineCode",{parentName:"p"},"counterChange$"),", each time it emits ",Object(s.b)("inlineCode",{parentName:"p"},"1")," or ",Object(s.b)("inlineCode",{parentName:"p"},"-1"),", we'll add that to an accumulator with a ",Object(s.b)("inlineCode",{parentName:"p"},"scan()")," operator, and emit the running total back onto ",Object(s.b)("inlineCode",{parentName:"p"},"count$")," subject:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"export const appRootEffect = (store) => {\n  const subscription = store.counterChange$\n    .pipe(scan((acc, val) => acc + val, 0))\n    .subscribe((count) => store.count$.next(count));\n  return () => subscription.unsubscribe();\n};\n")),Object(s.b)("h2",{id:"deriving-state-up"},'Deriving state "up"'),Object(s.b)("p",null,'In a traditional Redux app, you may be used to paring down the state using selectors, or deriving state "down".'),Object(s.b)("p",null,'When thinking & working reactively, first think about the stream you want, and work backwards from that. The result is you write code that builds the state "up".'),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const allClick$ = merge(myClick$, yourClick$);\n")),Object(s.b)("p",null,'In this example we\'re working backwards, we wanted a stream of all the clicks, so we defined it. Then we assigned the result of merging two other streams. This merge operator builds "up" the state.'),Object(s.b)("p",null,"Compare this to Redux change detection:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const mapStateToProps = (state) => ({\n  user: state.user,\n  page: state.page,\n});\n")),Object(s.b)("p",null,'With Redux, you start out with the top level state, and pared it "down" to the subset of state you wanted. This works fine until you have a larger app where running all ',Object(s.b)("inlineCode",{parentName:"p"},"mapStateToProps")," on every state change in the entire app becomes unwieldy. It is also prone to unwanted renders, imagine the ",Object(s.b)("inlineCode",{parentName:"p"},"page")," state looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"{\n    name: 'Test',\n    url: '/test',\n}\n")),Object(s.b)("p",null,"Now imagine someone comes along & adds the current time to this object, in a manner where it updates every 100ms (10x a second):"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"{\n    name: 'Test',\n    url: '/test',\n    time: 1592539673319\n}\n")),Object(s.b)("p",null,"With the naive ",Object(s.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function above, your component would re-render with a new ",Object(s.b)("inlineCode",{parentName:"p"},"page")," object 10x a second, even if all the component actually renders is the page's ",Object(s.b)("inlineCode",{parentName:"p"},"name"),"."),Object(s.b)("p",null,"With ",Object(s.b)("inlineCode",{parentName:"p"},"Rx Store"),", we do not have 1 top level state object that is always changing, which we have to pare down & memoize. Instead, we have many low level things updating independantly, and we must subscribe to, merge, or combine them individually, allowing fine grained control of what updates."),Object(s.b)("h2",{id:"react-example-app"},"React Example app"),Object(s.b)("p",null,"Check out the full ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rx-store/rx-store/tree/master/packages/react-rx-store-example-counter"}),"example counter app")))}l.isMDXComponent=!0}}]);