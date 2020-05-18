(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(140)),c={id:"example_js",title:"Example for JavaScript/Node.js"},p={id:"example_js",title:"Example for JavaScript/Node.js",description:"**`lets.yaml`**",source:"@site/docs/example_js.md",permalink:"/docs/example_js",editUrl:"https://github.com/lets-cli/lets/edit/master/docs/docs/example_js.md",sidebar:"someSidebar",previous:{title:"Examples",permalink:"/docs/examples"},next:{title:"Best practices",permalink:"/docs/best_practices"}},i=[],l={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"lets.yaml"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"shell: bash\n\ncommands:\n  run:\n    description: Run node server\n    cmd: npm run server\n\n  webpack:\n    description: Run webpack\n    cmd: \n      - npm \n      - run \n      - webpack  \n      \n  tests:\n    cmd: \n      - npm \n      - run \n      - test\n")),Object(o.b)("p",null,"Examples of usage:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"lets run")," - run server\n",Object(o.b)("inlineCode",{parentName:"p"},"lets webpack -w")," - cmd is an array so all arguments will be appended to that array\n",Object(o.b)("inlineCode",{parentName:"p"},"lets test")," - run all tests\n",Object(o.b)("inlineCode",{parentName:"p"},"lets test src/server/__tests__")," - run only tests in particular directory"))}s.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,p({ref:t},l,{components:n})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);