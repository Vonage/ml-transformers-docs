"use strict";(self.webpackChunkmedia_processor_docs=self.webpackChunkmedia_processor_docs||[]).push([[665],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={id:"FaceMeshOptions",title:"Interface: FaceMeshOptions",sidebar_label:"FaceMeshOptions",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"api/interfaces/FaceMeshOptions",id:"api/interfaces/FaceMeshOptions",title:"Interface: FaceMeshOptions",description:"Configurable options for FaceMesh.",source:"@site/docs/api/interfaces/FaceMeshOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/FaceMeshOptions",permalink:"/ml-transformers-docs/docs/api/interfaces/FaceMeshOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"FaceMeshOptions",title:"Interface: FaceMeshOptions",sidebar_label:"FaceMeshOptions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"FaceDetectionResults",permalink:"/ml-transformers-docs/docs/api/interfaces/FaceDetectionResults"},next:{title:"FaceMeshResults",permalink:"/ml-transformers-docs/docs/api/interfaces/FaceMeshResults"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"cameraNear",id:"cameranear",level:3},{value:"cameraFar",id:"camerafar",level:3},{value:"cameraVerticalFovDegrees",id:"cameraverticalfovdegrees",level:3},{value:"enableFaceGeometry",id:"enablefacegeometry",level:3},{value:"selfieMode",id:"selfiemode",level:3},{value:"maxNumFaces",id:"maxnumfaces",level:3},{value:"refineLandmarks",id:"refinelandmarks",level:3},{value:"minDetectionConfidence",id:"mindetectionconfidence",level:3},{value:"minTrackingConfidence",id:"mintrackingconfidence",level:3}],s={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Configurable options for FaceMesh."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cameranear"},"cameraNear"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cameraNear"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"camerafar"},"cameraFar"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cameraFar"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cameraverticalfovdegrees"},"cameraVerticalFovDegrees"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cameraVerticalFovDegrees"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enablefacegeometry"},"enableFaceGeometry"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"enableFaceGeometry"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"selfiemode"},"selfieMode"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"selfieMode"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxnumfaces"},"maxNumFaces"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"maxNumFaces"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"refinelandmarks"},"refineLandmarks"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"refineLandmarks"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mindetectionconfidence"},"minDetectionConfidence"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"minDetectionConfidence"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mintrackingconfidence"},"minTrackingConfidence"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"minTrackingConfidence"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")))}d.isMDXComponent=!0}}]);