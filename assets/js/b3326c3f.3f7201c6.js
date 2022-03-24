"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[2118],{876:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1361:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(7896),a=t(1461),o=(t(2784),t(876)),l=["components"],i={id:"analyzing-the-bundle-size",title:"Analyzing the Bundle Size",sidebar_label:"Analyzing Bundle Size"},p=void 0,c={unversionedId:"analyzing-the-bundle-size",id:"analyzing-the-bundle-size",title:"Analyzing the Bundle Size",description:"Source map explorer analyzes",source:"@site/../docs/analyzing-the-bundle-size.md",sourceDirName:".",slug:"/analyzing-the-bundle-size",permalink:"/docs/analyzing-the-bundle-size",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/analyzing-the-bundle-size.md",tags:[],version:"current",lastUpdatedBy:"Ioannis Cherouvim",lastUpdatedAt:1550812593,formattedLastUpdatedAt:"2/21/2019",frontMatter:{id:"analyzing-the-bundle-size",title:"Analyzing the Bundle Size",sidebar_label:"Analyzing Bundle Size"},sidebar:"docs",previous:{title:"Developing Components in Isolation",permalink:"/docs/developing-components-in-isolation"},next:{title:"HTTPS in Development",permalink:"/docs/using-https-in-development"}},u=[],s={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/source-map-explorer"},"Source map explorer")," analyzes\nJavaScript bundles using the source maps. This helps you understand where code\nbloat is coming from."),(0,o.kt)("p",null,"To add Source map explorer to a Create React App project, follow these steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save source-map-explorer\n")),(0,o.kt)("p",null,"Alternatively you may use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add source-map-explorer\n")),(0,o.kt)("p",null,"Then in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", add the following line to ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'   "scripts": {\n+    "analyze": "source-map-explorer \'build/static/js/*.js\'",\n     "start": "react-scripts start",\n     "build": "react-scripts build",\n     "test": "react-scripts test",\n')),(0,o.kt)("p",null,"Then to analyze the bundle run the production build then run the analyze\nscript."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\nnpm run analyze\n")))}d.isMDXComponent=!0}}]);