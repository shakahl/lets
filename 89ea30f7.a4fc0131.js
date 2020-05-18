(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),l=(n(0),n(140)),o={id:"what_is_lets",title:"What is lets ?",sidebar_label:"What is lets ?"},i={id:"what_is_lets",title:"What is lets ?",description:"Lets is a task runner.",source:"@site/docs/what_is_lets.md",permalink:"/docs/what_is_lets",editUrl:"https://github.com/lets-cli/lets/edit/master/docs/docs/what_is_lets.md",sidebar_label:"What is lets ?",sidebar:"someSidebar",next:{title:"Installation",permalink:"/docs/installation"}},s=[],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Lets is a task runner."),Object(l.b)("p",null,"You can think of it as a tool with config where you can write tasks."),Object(l.b)("p",null,"Task is usually your set of commands which you can type ten times a day, for example you want to run tests in your project:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"pull latest master"),Object(l.b)("li",{parentName:"ul"},"spinup a database"),Object(l.b)("li",{parentName:"ul"},"run migrations"),Object(l.b)("li",{parentName:"ul"},"run tests (maybe run only one test file)")),Object(l.b)("p",null,"Or some initial setup script for your application:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docker build -t myapp -f Dockerfile.dev ."),Object(l.b)("li",{parentName:"ul"},"docker-compose up myapp postgres")),Object(l.b)("p",null,"This all can be represented in task."),Object(l.b)("p",null,"So is there are any of such tools out there ? Well, sure there are some."),Object(l.b)("p",null,"Many developers knows such tool called Make."),Object(l.b)("p",null,"So why not Make ?"),Object(l.b)("p",null,"Make is more like a build tool and was not intended to use as a task runner (but usually used because of lack of alternatives)."),Object(l.b)("p",null,"Make has some sort of things which are bad/hard/no convinient for developers which use task runners on a daily basis."),Object(l.b)("p",null,"Lets is a brand new task runner with a task-centric philosophy and written specifically to meet developers needs."),Object(l.b)("p",null,"Lets features:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"yaml-based config - humad-readable, recognisable and convenient format for such configs (also used by kubernetes, ansible and many others)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"has support for global env")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"has support for global computed env (known as ",Object(l.b)("inlineCode",{parentName:"p"},"eval_env"),")")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"has support for per-command env ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"has support for per-command computed env (known as ",Object(l.b)("inlineCode",{parentName:"p"},"eval_env"),")")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"has ",Object(l.b)("inlineCode",{parentName:"p"},"checksum")," support - a feature which helps to track file changes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"has checksum persistance")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"written in Go - which means its easy to read, write and test as well as contributing to project"))))}p.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||l;return n?a.a.createElement(d,i({ref:t},c,{components:n})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);