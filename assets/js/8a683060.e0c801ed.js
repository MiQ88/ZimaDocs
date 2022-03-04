"use strict";(self.webpackChunkzimadocs=self.webpackChunkzimadocs||[]).push([[1216],{3905:function(e,t,A){A.d(t,{Zo:function(){return c},kt:function(){return m}});var a=A(7294);function n(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function r(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,a)}return A}function o(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?r(Object(A),!0).forEach((function(t){n(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function i(e,t){if(null==e)return{};var A,a,n=function(e,t){if(null==e)return{};var A,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)A=r[a],t.indexOf(A)>=0||(n[A]=e[A]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)A=r[a],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),A=t;return e&&(A="function"==typeof e?e(t):o(o({},t),e)),A},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var A=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=l(A),m=n,p=g["".concat(s,".").concat(m)]||g[m]||d[m]||r;return A?a.createElement(p,o(o({ref:t},c),{},{components:A})):a.createElement(p,o({ref:t},c))}));function m(e,t){var A=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=A.length,o=new Array(r);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<r;l++)o[l]=A[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,A)}g.displayName="MDXCreateElement"},3551:function(e,t,A){A.r(t),A.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return g}});var a=A(7462),n=A(3366),r=(A(7294),A(3905)),o=["components"],i={sidebar_label:"Accessing Shared Folders",title:"Accessing Shared Folders | Get Started | ZimaBoard"},s="Accessing Shared Folders",l={unversionedId:"get-started/shared-folders",id:"get-started/shared-folders",title:"Accessing Shared Folders | Get Started | ZimaBoard",description:"Brief",source:"@site/zimaboard/02-get-started/04-shared-folders.md",sourceDirName:"02-get-started",slug:"/get-started/shared-folders",permalink:"/zimaboard/get-started/shared-folders",editUrl:"https://github.com/IceWhaleTech/ZimaDocs/edit/main/zimaboard/zimaboard/02-get-started/04-shared-folders.md",tags:[],version:"current",lastUpdatedBy:"John Guan",lastUpdatedAt:1646390728,formattedLastUpdatedAt:"3/4/2022",sidebarPosition:4,frontMatter:{sidebar_label:"Accessing Shared Folders",title:"Accessing Shared Folders | Get Started | ZimaBoard"},sidebar:"tutorialSidebar",previous:{title:"Setup CasaOS",permalink:"/zimaboard/get-started/setup-casaos"},next:{title:"Watching Videos",permalink:"/zimaboard/get-started/hands-on-jellyfin"}},c=[{value:"Brief",id:"brief",children:[],level:2},{value:"Accessing from macOS",id:"accessing-from-macos",children:[],level:2},{value:"Accessing from Windows",id:"accessing-from-windows",children:[],level:2},{value:"Accessing from iOS",id:"accessing-from-ios",children:[],level:2},{value:"Accessing from Android",id:"accessing-from-android",children:[],level:2}],d={toc:c};function g(e){var t=e.components,i=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"accessing-shared-folders"},"Accessing Shared Folders"),(0,r.kt)("h2",{id:"brief"},"Brief"),(0,r.kt)("p",null,"ZimaBoard comes pre-installed with Samba, a common communication protocol for sharing files and printers over a LAN."),(0,r.kt)("p",null,"So, once ZimaBoard is started, the shared folders created by Samba will be automatically discovered on the LAN, whether it's your home laptop, cell phone, router, or big TV."),(0,r.kt)("p",null,"Of course, all the pre-made scripts are simply configuring some shared areas in the ZimaBoard file system. If you need advanced requirements, you can check Samba extended configuration information"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'All devices on the local network can use these shared folders as "',(0,r.kt)("strong",{parentName:"p"},"guest"),'".'))),(0,r.kt)("h2",{id:"accessing-from-macos"},"Accessing from macOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Finder menu, click Go > Connect to Server...")),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(5148).Z,alt:"finder-go",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"smb://casaos.local")," and click on ",(0,r.kt)("strong",{parentName:"li"},'"Connect"'))),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(9446).Z,alt:"mac connect to casaos",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the connection identity, here we directly select ",(0,r.kt)("strong",{parentName:"li"},'"Guest"'),", then click ",(0,r.kt)("strong",{parentName:"li"},'"Connect"'))),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(4880).Z,alt:"mac guest",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Select the folder you want to connect to Data")),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(5462).Z,alt:"connect to data",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"When you enter and see")),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(1283).Z,alt:"see data file",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("h2",{id:"accessing-from-windows"},"Accessing from Windows"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open File Manager and type ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"\\\\casaos"))," in the address bar")),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(3834).Z,alt:"win file manager",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Press Enter and you will see the shared files on your ZimaBoard")),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(8637).Z,alt:"win see data",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("h2",{id:"accessing-from-ios"},"Accessing from iOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the Files app that comes with iOS")),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(1723).Z,alt:"search files ios",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click the button in the upper right corner, and select ",(0,r.kt)("strong",{parentName:"li"},'"Connect to Server"'))),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(5690).Z,alt:"connect to server ios",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"casaos.local")),", or Use router to see the IP address of ZimaBoard (Knowledge Base Tutorial)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(8260).Z,alt:"connect server ios",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Login in with guest mode (default Samba configuration)")),(0,r.kt)("img",{src:A(1706).Z,alt:"connect to server guest ios",style:{maxWidth:"80%",display:"block",margin:"auto"}}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Successfully log in and access all files and media content")),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(7492).Z,alt:"see data",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(9537).Z,alt:"see data file ios",style:{maxWidth:"80%",display:"block",margin:"auto"}})),(0,r.kt)("h2",{id:"accessing-from-android"},"Accessing from Android"),(0,r.kt)("p",null,"In Android phones, we tested several file managers (ES File Explorer, Xiaomi File Explorer, File Geek, CX File Manager, etc.)."),(0,r.kt)("p",null,'We recommend "',(0,r.kt)("strong",{parentName:"p"},"CX File Manager"),'", which is a small, beautiful, ad-free file manager that can easily connect to many types of shared drives.'),(0,r.kt)("p",null,"Download CX File Manager\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.cxinventor.file.explorer"},"Download via Google Play"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://www.apkmirror.com/apk/cx-file-explorer/"},"Download APK"),"\uff0c"),(0,r.kt)("p",null,"See it all in one picture:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(8126).Z,alt:"android-get",style:{maxWidth:"80%",display:"block",margin:"auto"}})))}g.isMDXComponent=!0},8126:function(e,t,A){t.Z=A.p+"assets/images/android-get-44000abad50edd1d6c6f719dd1b04886.gif"},8260:function(e,t,A){t.Z=A.p+"assets/images/connect-server-ios-99bd3246079a1e1e55ad2771ab2216c0.jpg"},5462:function(e,t,A){t.Z=A.p+"assets/images/connect-to-data-cf4e957a28a74a4f1ae1b5b2595b826d.png"},1706:function(e,t,A){t.Z=A.p+"assets/images/connect-to-server-guest-ios-021929a0a5c51dde9008a8d042d1e747.jpg"},5690:function(e,t,A){t.Z=A.p+"assets/images/connect-to-server-ios-8ec00900e716c5ee37f87d0921c32e84.png"},5148:function(e,t,A){t.Z=A.p+"assets/images/finder-go-71b9fd1d0241da47a2dfc06c499cc159.png"},9446:function(e,t,A){t.Z=A.p+"assets/images/mac-connect-to-casaos-mac-c6ee5a50cef27ad49cf85776c72d303b.png"},4880:function(e,t,A){t.Z=A.p+"assets/images/mac-guest-5b14e1bc23bf0592a6d3439b1262b088.png"},1723:function(e,t,A){t.Z=A.p+"assets/images/search-files-ios-c94e36e95df65fb867b7263b85b54643.jpg"},9537:function(e,t,A){t.Z=A.p+"assets/images/see-data-file-ios-88b6499d2fa7e974a240e83c0768ba29.jpg"},1283:function(e,t,A){t.Z=A.p+"assets/images/see-data-file-04c0e745b8b510eb058f88accf7bd232.png"},7492:function(e,t,A){t.Z=A.p+"assets/images/see-data-66c4f5694db0fea566f3ba9ec1326026.jpg"},3834:function(e,t){t.Z="data:image/png;base64,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"},8637:function(e,t){t.Z="data:image/png;base64,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"}}]);