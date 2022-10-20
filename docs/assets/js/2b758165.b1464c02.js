"use strict";(self.webpackChunkmedia_processor_docs=self.webpackChunkmedia_processor_docs||[]).push([[387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=i,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(f,p(p({ref:t},d),{},{components:r})):n.createElement(f,p({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={id:"PipelineInfoData",title:"Enumeration: PipelineInfoData",sidebar_label:"PipelineInfoData",sidebar_position:0,custom_edit_url:null},p=void 0,l={unversionedId:"api/enums/PipelineInfoData",id:"api/enums/PipelineInfoData",title:"Enumeration: PipelineInfoData",description:"PipelineInfolData. Life cycle information of insertable streams pipeline.",source:"@site/docs/api/enums/PipelineInfoData.md",sourceDirName:"api/enums",slug:"/api/enums/PipelineInfoData",permalink:"/ml-transformers-docs/docs/api/enums/PipelineInfoData",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PipelineInfoData",title:"Enumeration: PipelineInfoData",sidebar_label:"PipelineInfoData",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ErrorFunction",permalink:"/ml-transformers-docs/docs/api/enums/ErrorFunction"},next:{title:"SelfieSegmentationType",permalink:"/ml-transformers-docs/docs/api/enums/SelfieSegmentationType"}},o={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"pipeline_ended",id:"pipeline_ended",level:3},{value:"pipeline_ended_with_error",id:"pipeline_ended_with_error",level:3},{value:"pipeline_started",id:"pipeline_started",level:3},{value:"pipeline_started_with_error",id:"pipeline_started_with_error",level:3},{value:"pipeline_restarted",id:"pipeline_restarted",level:3},{value:"pipeline_restarted_with_error",id:"pipeline_restarted_with_error",level:3}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"PipelineInfolData. Life cycle information of insertable streams pipeline."),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"pipeline_ended"},"pipeline","_","ended"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"pipeline","_","ended")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"pipeline_ended"')),(0,i.kt)("p",null,"Notify the app that the pipeline has ended."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pipeline_ended_with_error"},"pipeline","_","ended","_","with","_","error"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"pipeline","_","ended","_","with","_","error")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"pipeline_ended_with_error"')),(0,i.kt)("p",null,"Notify the app that the pipeline has ended with an error."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pipeline_started"},"pipeline","_","started"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"pipeline","_","started")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"pipeline_started"')),(0,i.kt)("p",null,"Notify the app that the pipeline has started."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pipeline_started_with_error"},"pipeline","_","started","_","with","_","error"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"pipeline","_","started","_","with","_","error")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"pipeline_started_with_error"')),(0,i.kt)("p",null,"Notify the app that the pipeline has started with an error."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pipeline_restarted"},"pipeline","_","restarted"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"pipeline","_","restarted")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"pipeline_restarted"')),(0,i.kt)("p",null,"Notify the app that the pipeline has restarted.\nThis message is fired after changing track in the middle of the process.\nFor example switching camera source."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pipeline_restarted_with_error"},"pipeline","_","restarted","_","with","_","error"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"pipeline","_","restarted","_","with","_","error")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"pipeline_restarted_with_error"')),(0,i.kt)("p",null,"Notify the app that the pipeline has restarted with an error.\nThis message is fired after changing track in the middle of the process.\nFor example switching camera source."))}u.isMDXComponent=!0}}]);