"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2453],{18918:function(e,s,i){i.d(s,{Z:function(){return t}});function t(e){let{preview:s,lightMode:i}=e,t=document.querySelector('link[href="/landing-preview/css/preview-style.css"]'),A=document.querySelector('link[href="/dark/assets/css/style.css"]'),l=document.querySelector('link[href="/light/assets/css/style.css"]'),c=document.querySelector('link[href="/dark/assets/css/plugins.css"]'),n=document.querySelector('link[href="/light/assets/css/plugins.css"]');if(i&&!s){document.querySelector("noscript").before(n),document.querySelector("noscript").before(l);let e=document.querySelectorAll('link[href="/light/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/light/assets/css/style.css"]');s.length>1&&s[0].remove()}if(!i&&!s){document.querySelector("noscript").before(c),document.querySelector("noscript").before(A);let e=document.querySelectorAll('link[href="/dark/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/dark/assets/css/style.css"]');s.length>1&&s[0].remove()}s&&t?(document.head.append(t),l&&l.remove(),n&&n.remove()):!s&&t&&t.remove()}},83538:function(e,s,i){var t=i(85893),A=i(67294);s.Z=function(){return(0,A.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),s=document.querySelector(".cursor"),i=function(e){let s=this.querySelector(".hover-anim"),{offsetX:i,offsetY:t}=e,{offsetWidth:A,offsetHeight:l}=this;s.style.transform="translate(".concat(i/A*50-25,"px, ").concat(t/l*50-25,"px)"),"mouseleave"===e.type&&(s.style.transform="")};e.forEach(e=>e.addEventListener("mousemove",i)),e.forEach(e=>e.addEventListener("mouseleave",i)),window.addEventListener("mousemove",e=>{let{clientX:i,clientY:t}=e;s.style.left=i+"px",s.style.top=t+"px"}),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{s.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("cursor-active")})})},[]),(0,t.jsx)("div",{className:"cursor"})}},98876:function(e,s,i){var t=i(85893),A=i(67294);s.Z=function(){return(0,A.useEffect)(()=>{let e=document.getElementById("svg"),s=gsap.timeline();s.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),s.to(e,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),s.to(".loader-wrap",{y:-1500}),s.to(".loader-wrap",{zIndex:-1,display:"none"}),s.from("header",{y:200},"-=1.5"),s.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")},[]),(0,t.jsxs)("div",{className:"loader-wrap",children:[(0,t.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,t.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,t.jsx)("div",{className:"loader-wrap-heading",children:(0,t.jsx)("span",{children:(0,t.jsxs)("h2",{className:"load-text",children:[(0,t.jsx)("span",{children:"L"}),(0,t.jsx)("span",{children:"o"}),(0,t.jsx)("span",{children:"a"}),(0,t.jsx)("span",{children:"d"}),(0,t.jsx)("span",{children:"i"}),(0,t.jsx)("span",{children:"n"}),(0,t.jsx)("span",{children:"g"})]})})})]})}},42037:function(e,s,i){i.d(s,{Z:function(){return c}});var t=i(85893),A=i(67294),l=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),i=s.getTotalLength(),t=()=>{let e=window.pageYOffset,t=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=i-e*i/t};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=i+" "+i,s.style.strokeDashoffset=i,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",t(),window.addEventListener("scroll",t),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},c=()=>((0,A.useEffect)(()=>{l()},[]),(0,t.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,t.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,t.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},28932:function(e,s,i){i.d(s,{Z:function(){return o}});var t=i(85893),A=i(59417),l=i(99603),c=i(25675),n=i.n(c),a={src:"/_next/static/media/51tO9J706CL._SY355_.4851c4e5.jpg",height:355,width:355,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGoB//EABYQAQEBAAAAAAAAAAAAAAAAAAMBEv/aAAgBAQABBQLTRf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABoQAAICAwAAAAAAAAAAAAAAAAERAAIDIUH/2gAIAQEABj8CLo8fC9z/xAAYEAEBAAMAAAAAAAAAAAAAAAABEQAhgf/aAAgBAQABPyEChIh01n//2gAMAwEAAgADAAAAEAP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAaEAEAAgMBAAAAAAAAAAAAAAABESEAMWFx/9oACAEBAAE/EAyxBrswdEK77n//2Q==",blurWidth:8,blurHeight:8},r={src:"/_next/static/media/61oEhC1IFYL._SX425_.037829ef.png",height:425,width:425,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVRV11gaGtOXGVkaGiCio9XaXEbGxsnJyddYGJzeHlzen0uKippcHYxMDAm0NgzAAAADXRSTlMBM1sVipSUdOObSTz2R6c75AAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUeJxjYEAFTExgipEVQrPwMIIoZhYOXnYGBgYuTkZuNmaQPIhABgANnQBtKCQnAAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},d={src:"/_next/static/media/B1158671887.7f6e9d91.jpg",height:360,width:360,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGtB//EABUQAQEAAAAAAAAAAAAAAAAAABIB/9oACAEBAAEFAqn/AP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAAMBAAAAAAAAAAAAAAAAAAABQVL/2gAIAQEABj8CWaf/xAAXEAADAQAAAAAAAAAAAAAAAAAAETGh/9oACAEBAAE/IYi2P//aAAwDAQACAAMAAAAQ8//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABoQAAICAwAAAAAAAAAAAAAAABEhAAFBUWH/2gAIAQEAAT8QsvdbF8DmzP/Z",blurWidth:8,blurHeight:8},o=()=>(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"productshop_banner ",children:(0,t.jsxs)("div",{className:"text-center productshop_banner_cont",children:[(0,t.jsx)("h1",{children:"“The Ultimate 3D Advertising"}),(0,t.jsx)("h1",{children:"Display Machine”"})]})}),(0,t.jsxs)("div",{className:"text-center mb-50 row ",children:[(0,t.jsxs)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:[(0,t.jsx)("h3",{children:"Grow your brand"}),(0,t.jsx)("h3",{children:"in the palm of"}),(0,t.jsx)("h3",{children:"your hand"})]}),(0,t.jsxs)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:[(0,t.jsx)(l.G,{style:{width:"20px",borderRadius:"100%",width:"80px",height:"80px"},icon:A.BC0}),(0,t.jsx)("h5",{children:"3D advertising"}),(0,t.jsx)("p",{children:"An open eye 3D experience"})]}),(0,t.jsxs)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:[(0,t.jsx)(l.G,{style:{width:"20px",borderRadius:"100%",width:"80px",height:"80px"},icon:A.BC0}),(0,t.jsx)("h5",{children:"3D advertising"}),(0,t.jsx)("p",{children:"An open eye 3D experience"})]}),(0,t.jsxs)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:[(0,t.jsx)(l.G,{style:{width:"20px",borderRadius:"100%",width:"80px",height:"80px"},icon:A.iGi}),(0,t.jsx)("h5",{children:"3D advertising"}),(0,t.jsx)("p",{children:"An open eye 3D experience"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"pb-40 pt-50",children:"Benefits of 3D holographic Sign"}),(0,t.jsxs)("div",{className:"justify-between gap-5 align-middle benefit_main row",style:{margin:"auto"},children:[(0,t.jsxs)("div",{className:"col-lg-3 col-md-12 col-sm-12",children:[(0,t.jsxs)("div",{className:"benefit",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{children:"Distinguish the Brand"}),(0,t.jsx)("p",{children:"Targeted product can make connection through vibrant place to the targeted crowd source"})]}),(0,t.jsx)(l.G,{style:{width:"50px"},icon:A.QGx})]}),(0,t.jsxs)("div",{className:"benefit",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{children:"Distinguish the Brand"}),(0,t.jsx)("p",{children:"Targeted product can make connection through vibrant place to the targeted crowd source"})]}),(0,t.jsx)(l.G,{style:{width:"50px"},icon:A.QGx})]}),(0,t.jsxs)("div",{className:"benefit",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{children:"Distinguish the Brand"}),(0,t.jsx)("p",{children:"Targeted product can make connection through vibrant place to the targeted crowd source"})]}),(0,t.jsx)(l.G,{style:{width:"50px"},icon:A.QGx})]})]}),(0,t.jsx)("div",{className:"col-lg-3 col-md-12 col-sm-12",children:(0,t.jsx)(n(),{src:r,alt:""})}),(0,t.jsxs)("div",{className:"col-lg-3 col-md-12 col-sm-12",children:[(0,t.jsxs)("div",{className:"benefit1",children:[(0,t.jsx)(l.G,{style:{width:"50px"},icon:A.QGx}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{children:"Distinguish the Brand"}),(0,t.jsx)("p",{children:"Targeted product can make connection through vibrant place to the targeted crowd source"})]})]}),(0,t.jsxs)("div",{className:"benefit1",children:[(0,t.jsx)(l.G,{style:{width:"50px"},icon:A.QGx}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{children:"Distinguish the Brand"}),(0,t.jsx)("p",{children:"Targeted product can make connection through vibrant place to the targeted crowd source"})]})]}),(0,t.jsxs)("div",{className:"benefit1",children:[(0,t.jsx)(l.G,{style:{width:"50px"},icon:A.QGx}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{children:"Distinguish the Brand"}),(0,t.jsx)("p",{children:"Targeted product can make connection through vibrant place to the targeted crowd source"})]})]})]})]})]}),(0,t.jsxs)("div",{style:{paddingBottom:"180px",paddingTop:"20px",textAlign:"center"},children:[(0,t.jsx)("h1",{children:"More About Our Products"}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,"}),(0,t.jsxs)("p",{style:{paddingBottom:"60px"},children:[" ","sed do eiusmod tempor incididunt ut labore."]}),(0,t.jsxs)("div",{className:"gap-5 product_review row",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12",style:{width:"550px"},children:(0,t.jsx)(n(),{src:a,alt:""})}),(0,t.jsxs)("div",{className:"col-lg-6 col-md-12 col-sm-12",style:{textAlign:"left"},children:[(0,t.jsx)("h2",{children:"42 cm (2 Blades)"}),(0,t.jsx)("p",{children:"Multi-functional - Use 42cm LED fan to have a 42 cm length holographic effect."}),(0,t.jsx)("p",{children:"Immediately attract people's attention."}),(0,t.jsx)("p",{style:{marginTop:"20px"},children:"Easy To Use -Easy to install, you can customize your video or pictures to display,"}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"it will bring a vivid 3d advertising display in the air."}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"Display Size - Displaying dimension: 16.53 inches;"}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"LED lamps: 224;"}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"Resolution(pixel):450*224."}),(0,t.jsx)("p",{children:"Display Support Format - mp4, avi, rmvb, mkv, gif, jpg, png with black background."})]})]}),(0,t.jsxs)("div",{className:"gap-5 product_review row",children:[(0,t.jsxs)("div",{style:{textAlign:"left"},className:"col-lg-6 col-md-12 col-sm-12",children:[(0,t.jsx)("h2",{children:"42 cm (2 Blades)"}),(0,t.jsx)("p",{children:"Multi-functional - Use 42cm LED fan to have a 42 cm length holographic effect."}),(0,t.jsx)("p",{children:"Immediately attract people's attention."}),(0,t.jsx)("p",{style:{marginTop:"20px"},children:"Easy To Use -Easy to install, you can customize your video or pictures to display,"}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"it will bring a vivid 3d advertising display in the air."}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"Display Size - Displaying dimension: 16.53 inches;"}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"LED lamps: 224;"}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"Resolution(pixel):450*224."}),(0,t.jsx)("p",{children:"Display Support Format - mp4, avi, rmvb, mkv, gif, jpg, png with black background."})]}),(0,t.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12",style:{width:"550px"},children:(0,t.jsx)(n(),{src:d,alt:""})})]}),(0,t.jsxs)("div",{className:"gap-5 product_review row",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12",style:{width:"550px"},children:(0,t.jsx)(n(),{src:a,alt:""})}),(0,t.jsxs)("div",{style:{textAlign:"left"},className:"col-lg-6 col-md-12 col-sm-12",children:[(0,t.jsx)("h2",{children:"42 cm (2 Blades)"}),(0,t.jsx)("p",{children:"Multi-functional - Use 42cm LED fan to have a 42 cm length holographic effect."}),(0,t.jsx)("p",{children:"Immediately attract people's attention."}),(0,t.jsx)("p",{style:{marginTop:"20px"},children:"Easy To Use -Easy to install, you can customize your video or pictures to display,"}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"it will bring a vivid 3d advertising display in the air."}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"Display Size - Displaying dimension: 16.53 inches;"}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"LED lamps: 224;"}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"Resolution(pixel):450*224."}),(0,t.jsx)("p",{children:"Display Support Format - mp4, avi, rmvb, mkv, gif, jpg, png with black background."})]})]})]}),(0,t.jsxs)("div",{className:"productshop_video",children:[(0,t.jsx)("h1",{children:"Watch The Video"}),(0,t.jsx)("p",{children:"Want a thrilling vision of your eye?"}),(0,t.jsx)("p",{children:"Have a look at the video that mesmerize your vision."})]}),(0,t.jsxs)("div",{style:{width:"100%",paddingTop:"20px"},children:[(0,t.jsx)("h1",{style:{textAlign:"center"},children:"FAQ"}),(0,t.jsx)("p",{style:{textAlign:"center"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,"}),(0,t.jsx)("p",{style:{textAlign:"center"},children:"sed do eiusmod tempor incididunt ut labore."}),(0,t.jsxs)("div",{className:"faq_content",children:[(0,t.jsx)("section",{class:"faq1",style:{marginBottom:"50px"},children:(0,t.jsxs)("div",{class:"faq-container",children:[(0,t.jsxs)("details",{class:"faq-box",open:!0,children:[(0,t.jsx)("summary",{class:"faq-header",children:"Sed accumsan nulla ut dui hendrerit?"}),(0,t.jsx)("div",{class:"faq-content",children:(0,t.jsx)("p",{children:"Nullam quis justo in lectus consequat facilisis ac et nibh. Fusce faucibus augue id nibh vestibulum nec."})})]}),(0,t.jsxs)("details",{class:"faq-box",children:[(0,t.jsx)("summary",{class:"faq-header",children:"Suspendisse volutpat nunc vestibulum?"}),(0,t.jsx)("div",{class:"faq-content",children:(0,t.jsx)("p",{children:"Sed accumsan nulla ut dui hendrerit, et cursus risus placerat. Praesent accumsan lectus vitae suscipit condimentum."})})]}),(0,t.jsxs)("details",{class:"faq-box",children:[(0,t.jsx)("summary",{class:"faq-header",children:"Mauris ultrices aliquam lacinia?"}),(0,t.jsx)("div",{class:"faq-content",children:(0,t.jsx)("p",{children:"Integer tristique augue diam, eget ultrices nisi vehicula a. Curabitur vulputate arcu nec orci laoreet iaculis."})})]}),(0,t.jsxs)("details",{class:"faq-box",open:!0,children:[(0,t.jsx)("summary",{class:"faq-header",children:"Sed accumsan nulla ut dui hendrerit?"}),(0,t.jsx)("div",{class:"faq-content",children:(0,t.jsx)("p",{children:"Nullam quis justo in lectus consequat facilisis ac et nibh. Fusce faucibus augue id nibh vestibulum nec."})})]}),(0,t.jsxs)("details",{class:"faq-box",children:[(0,t.jsx)("summary",{class:"faq-header",children:"Suspendisse volutpat nunc vestibulum?"}),(0,t.jsx)("div",{class:"faq-content",children:(0,t.jsx)("p",{children:"Sed accumsan nulla ut dui hendrerit, et cursus risus placerat. Praesent accumsan lectus vitae suscipit condimentum."})})]}),(0,t.jsxs)("details",{class:"faq-box",children:[(0,t.jsx)("summary",{class:"faq-header",children:"Mauris ultrices aliquam lacinia?"}),(0,t.jsx)("div",{class:"faq-content",children:(0,t.jsx)("p",{children:"Integer tristique augue diam, eget ultrices nisi vehicula a. Curabitur vulputate arcu nec orci laoreet iaculis."})})]}),(0,t.jsxs)("details",{class:"faq-box",open:!0,children:[(0,t.jsx)("summary",{class:"faq-header",children:"Sed accumsan nulla ut dui hendrerit?"}),(0,t.jsx)("div",{class:"faq-content",children:(0,t.jsx)("p",{children:"Nullam quis justo in lectus consequat facilisis ac et nibh. Fusce faucibus augue id nibh vestibulum nec."})})]}),(0,t.jsxs)("details",{class:"faq-box",children:[(0,t.jsx)("summary",{class:"faq-header",children:"Suspendisse volutpat nunc vestibulum?"}),(0,t.jsx)("div",{class:"faq-content",children:(0,t.jsx)("p",{children:"Sed accumsan nulla ut dui hendrerit, et cursus risus placerat. Praesent accumsan lectus vitae suscipit condimentum."})})]}),(0,t.jsxs)("details",{class:"faq-box",children:[(0,t.jsx)("summary",{class:"faq-header",children:"Mauris ultrices aliquam lacinia?"}),(0,t.jsx)("div",{class:"faq-content",children:(0,t.jsx)("p",{children:"Integer tristique augue diam, eget ultrices nisi vehicula a. Curabitur vulputate arcu nec orci laoreet iaculis."})})]})]})}),(0,t.jsx)("div",{className:" faq2",children:(0,t.jsx)(n(),{src:d,alt:""})})]})]})]})},28235:function(e,s,i){var t=i(85893),A=i(67294),l=i(9008),c=i.n(l),n=i(18918),a=i(83538),r=i(42037);s.Z=e=>{let{children:s,lightMode:i}=e;return(0,A.useEffect)(()=>{(0,n.Z)({lightMode:i})},[i]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c(),{children:i?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/plugins.css"}),(0,t.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/style.css"})]}):(0,t.jsx)("link",{rel:"stylesheet",href:"/dark/assets/css/base.css"})}),(0,t.jsx)(a.Z,{}),(0,t.jsx)(r.Z,{}),s]})}},37513:function(e){e.exports=JSON.parse('{"v":"ThemesCamp","a":"https://themeforest.net/user/themescamp"}')}}]);