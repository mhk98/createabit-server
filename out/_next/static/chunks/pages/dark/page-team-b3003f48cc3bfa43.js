(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7808],{87797:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dark/page-team",function(){return r(95503)}])},18918:function(e,s,r){"use strict";function l(e){let{preview:s,lightMode:r}=e,l=document.querySelector('link[href="/landing-preview/css/preview-style.css"]'),t=document.querySelector('link[href="/dark/assets/css/style.css"]'),i=document.querySelector('link[href="/light/assets/css/style.css"]'),c=document.querySelector('link[href="/dark/assets/css/plugins.css"]'),a=document.querySelector('link[href="/light/assets/css/plugins.css"]');if(r&&!s){document.querySelector("noscript").before(a),document.querySelector("noscript").before(i);let e=document.querySelectorAll('link[href="/light/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/light/assets/css/style.css"]');s.length>1&&s[0].remove()}if(!r&&!s){document.querySelector("noscript").before(c),document.querySelector("noscript").before(t);let e=document.querySelectorAll('link[href="/dark/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/dark/assets/css/style.css"]');s.length>1&&s[0].remove()}s&&l?(document.head.append(l),i&&i.remove(),a&&a.remove()):!s&&l&&l.remove()}r.d(s,{Z:function(){return l}})},83538:function(e,s,r){"use strict";var l=r(85893),t=r(67294);s.Z=function(){return(0,t.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),s=document.querySelector(".cursor"),r=function(e){let s=this.querySelector(".hover-anim"),{offsetX:r,offsetY:l}=e,{offsetWidth:t,offsetHeight:i}=this;s.style.transform="translate(".concat(r/t*50-25,"px, ").concat(l/i*50-25,"px)"),"mouseleave"===e.type&&(s.style.transform="")};e.forEach(e=>e.addEventListener("mousemove",r)),e.forEach(e=>e.addEventListener("mouseleave",r)),window.addEventListener("mousemove",e=>{let{clientX:r,clientY:l}=e;s.style.left=r+"px",s.style.top=l+"px"}),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{s.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("cursor-active")})})},[]),(0,l.jsx)("div",{className:"cursor"})}},98876:function(e,s,r){"use strict";var l=r(85893),t=r(67294);s.Z=function(){return(0,t.useEffect)(()=>{let e=document.getElementById("svg"),s=gsap.timeline();s.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),s.to(e,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),s.to(".loader-wrap",{y:-1500}),s.to(".loader-wrap",{zIndex:-1,display:"none"}),s.from("header",{y:200},"-=1.5"),s.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")},[]),(0,l.jsxs)("div",{className:"loader-wrap",children:[(0,l.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,l.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,l.jsx)("div",{className:"loader-wrap-heading",children:(0,l.jsx)("span",{children:(0,l.jsxs)("h2",{className:"load-text",children:[(0,l.jsx)("span",{children:"L"}),(0,l.jsx)("span",{children:"o"}),(0,l.jsx)("span",{children:"a"}),(0,l.jsx)("span",{children:"d"}),(0,l.jsx)("span",{children:"i"}),(0,l.jsx)("span",{children:"n"}),(0,l.jsx)("span",{children:"g"})]})})})]})}},42037:function(e,s,r){"use strict";r.d(s,{Z:function(){return c}});var l=r(85893),t=r(67294),i=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),r=s.getTotalLength(),l=()=>{let e=window.pageYOffset,l=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=r-e*r/l};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=r+" "+r,s.style.strokeDashoffset=r,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",l(),window.addEventListener("scroll",l),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},c=()=>((0,t.useEffect)(()=>{i()},[]),(0,l.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,l.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,l.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},51317:function(e,s,r){"use strict";var l=r(85893),t=r(37513),i=r(41664),c=r.n(i);s.Z=function(e){let{lightMode:s}=e;return(0,l.jsx)("footer",{className:"sub-bg",children:(0,l.jsxs)("div",{className:"footer-container",children:[(0,l.jsx)("div",{className:"container pb-80 pt-80 ontop",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-3",children:(0,l.jsxs)("div",{className:"colum md-mb50",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Address"})}),(0,l.jsx)("div",{className:"text",children:(0,l.jsx)("p",{children:"901 South Highland St, Suite # 301,Arlington, VA 22041"})})]})}),(0,l.jsx)("div",{className:"col-lg-3 offset-lg-1",children:(0,l.jsxs)("div",{className:"colum md-mb50",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Company"})}),(0,l.jsxs)("div",{className:"text",children:[(0,l.jsx)("p",{className:"mb-10",children:(0,l.jsx)("a",{href:"#0",children:"info@createabit.com"})}),(0,l.jsx)("h5",{children:(0,l.jsx)("a",{href:"#",children:"+703-347-6512"})})]})]})}),(0,l.jsxs)("div",{className:"col-lg-2 md-mb50",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Information"})}),(0,l.jsxs)("ul",{className:"rest social-text ",children:[(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"/".concat(s?"light":"dark","/page-team"),children:"Our Team"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"/".concat(s?"light":"dark","/page-team"),children:"Our Client"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"/".concat(s?"light":"dark","/blog-list/"),children:"Our Blog"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c(),{href:"/".concat(s?"light":"dark","/shop-list"),children:"Shop"})})]})]}),(0,l.jsxs)("div",{className:"col-lg-3",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Social"})}),(0,l.jsxs)("ul",{className:"rest social-text ",children:[(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"/".concat(s?"light":"dark","/page-team"),children:"Facebook"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"/".concat(s?"light":"dark","/page-team"),children:"Instagram"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"/".concat(s?"light":"dark","/blog-list/"),children:"Twitter"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c(),{href:"/".concat(s?"light":"dark","/shop-list"),children:"LInkedin"})})]})]})]})}),(0,l.jsx)("div",{className:"sub-footer pt-40 pb-40 bord-thin-top ontop",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("img",{src:"/dark/assets/imgs/logo-".concat(s?"dark":"light",".png"),alt:""})})})}),(0,l.jsx)("div",{className:"col-lg-8",children:(0,l.jsx)("div",{className:"copyright d-flex",children:(0,l.jsx)("div",{className:"ml-auto",children:(0,l.jsxs)("p",{className:"fz-13",children:["\xa9 2023 Geekfolio is Proudly Powered by"," ",(0,l.jsxs)("span",{className:"underline",children:[" ",(0,l.jsx)("a",{href:t.a,children:t.v})]})]})})})})]})})})]})})}},74537:function(e,s,r){"use strict";var l=r(85893);s.Z=function(){return(0,l.jsx)("header",{className:"page-header section-padding pb-0",children:(0,l.jsx)("div",{className:"container mt-80",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-lg-8",children:[(0,l.jsxs)("div",{className:"caption",children:[(0,l.jsx)("h6",{className:"sub-title",children:"Our Staff"}),(0,l.jsx)("h1",{className:"fz-80",children:"Talented team."})]}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-lg-9 offset-lg-1",children:(0,l.jsx)("div",{className:"text mt-30",children:(0,l.jsx)("p",{children:"We’re a diverse team that works as fancies attention to details, enjoys beers on Friday nights and aspires to design the dent in the universe."})})})})]}),(0,l.jsx)("div",{className:"col-lg-3 valign justify-end",children:(0,l.jsx)("div",{className:"ml-auto explore",children:(0,l.jsx)("a",{href:"#0",children:(0,l.jsxs)("div",{className:"circle-button",children:[(0,l.jsx)("div",{className:"rotate-circle fz-30 text-u",children:(0,l.jsxs)("svg",{className:"textcircle",viewBox:"0 0 500 500",children:[(0,l.jsx)("defs",{children:(0,l.jsx)("path",{id:"textcircle",d:"M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"})}),(0,l.jsx)("text",{children:(0,l.jsx)("textPath",{xlinkHref:"#textcircle",textLength:"900",children:"Join Our Team - Join Our Team -"})})]})}),(0,l.jsx)("div",{className:"arrow",children:(0,l.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})})})]})})})})]})})})}},28235:function(e,s,r){"use strict";var l=r(85893),t=r(67294),i=r(9008),c=r.n(i),a=r(18918),n=r(83538),d=r(42037);s.Z=e=>{let{children:s,lightMode:r}=e;return(0,t.useEffect)(()=>{(0,a.Z)({lightMode:r})},[r]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c(),{children:r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/plugins.css"}),(0,l.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/style.css"})]}):(0,l.jsx)("link",{rel:"stylesheet",href:"/dark/assets/css/base.css"})}),(0,l.jsx)(n.Z,{}),(0,l.jsx)(d.Z,{}),s]})}},64300:function(e,s,r){"use strict";r.r(s);var l=r(85893),t=r(37513),i=r(41664),c=r.n(i);s.default=function(){return(0,l.jsx)("footer",{className:"sub-bg dark-footer",children:(0,l.jsxs)("div",{className:"footer-container",children:[(0,l.jsx)("div",{className:"container pb-80 pt-80 ontop",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-lg-3",children:[(0,l.jsx)("div",{className:"logo",style:{marginBottom:"20px"},children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("img",{src:"/dark/assets/imgs/logo-light.png",alt:""})})}),(0,l.jsx)("small",{children:"We tend to believe we are not just a company. We are incorporated but for the sake of representation. However, our actual belief is far beyond incorporation, this is a concept. A concept which sees ‘design’ as a medium to trigger the undiscovered “seventh sense” of the human psychology"})]}),(0,l.jsx)("div",{className:"col-lg-3 offset-lg-1",children:(0,l.jsxs)("div",{className:"colum md-mb50",children:[(0,l.jsx)("div",{className:"mb-20 tit",children:(0,l.jsx)("h6",{children:"Company"})}),(0,l.jsxs)("div",{className:"text",children:[(0,l.jsx)("p",{className:"mb-10",children:(0,l.jsx)("a",{href:"#0",children:"info@createabit.com"})}),(0,l.jsx)("h5",{children:(0,l.jsx)("a",{href:"#",children:"+703-347-6512"})})]})]})}),(0,l.jsxs)("div",{className:"col-lg-3 md-mb50",children:[(0,l.jsx)("div",{className:"mb-20 tit",children:(0,l.jsx)("h6",{children:"Sitemap"})}),(0,l.jsxs)("ul",{className:"rest social-text ",children:[(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"/dark/page-team",children:"Our Team"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"/dark/page-team",children:"Our Client"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"/dark/blog-classic",children:"Our Blog"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c(),{href:"/dark/shop-list",children:"Shop"})})]})]}),(0,l.jsxs)("div",{className:"col-lg-2",children:[(0,l.jsx)("div",{className:"mb-20 tit",children:(0,l.jsx)("h6",{children:"Social"})}),(0,l.jsxs)("ul",{className:"rest social-text ",children:[(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"https://www.facebook.com/CreateAbitDesigns",children:"Facebook"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"",children:"Instagram"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(c(),{href:"",children:"Twitter"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c(),{href:"",children:"LInkedin"})})]})]})]})}),(0,l.jsx)("div",{className:"pt-40 pb-40 sub-footer bord-thin-top ontop",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-lg-8",children:(0,l.jsx)("div",{className:"copyright d-flex",children:(0,l.jsx)("div",{className:"ml-auto",children:(0,l.jsxs)("p",{className:"fz-13",children:["\xa9 2023 Geekfolio is Proudly Powered by"," ",(0,l.jsxs)("span",{className:"underline",children:[" ",(0,l.jsx)("a",{href:t.a,children:t.v})]})]})})})})})})})]})})}},95503:function(e,s,r){"use strict";r.r(s);var l=r(85893),t=r(67294),i=r(9008),c=r.n(i),a=r(28235),n=r(98876);r(51317);var d=r(74537),o=r(71915),h=r(21453),m=r(64300);function x(){return(0,t.useEffect)(()=>(document.body.classList.add("main-bg"),()=>document.body.classList.remove("main-bg")),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c(),{children:(0,l.jsx)("title",{children:"Createabit - Our Team"})}),(0,l.jsx)(n.Z,{}),(0,l.jsx)(h.default,{}),(0,l.jsxs)("main",{children:[(0,l.jsx)(d.Z,{}),(0,l.jsx)(o.Z,{})]}),(0,l.jsx)(m.default,{})]})}x.getLayout=e=>(0,l.jsx)(a.Z,{children:e}),s.default=x},11163:function(e,s,r){e.exports=r(57875)},37513:function(e){"use strict";e.exports=JSON.parse('{"v":"ThemesCamp","a":"https://themeforest.net/user/themescamp"}')}},function(e){e.O(0,[1664,5675,719,1453,1915,9774,2888,179],function(){return e(e.s=87797)}),_N_E=e.O()}]);