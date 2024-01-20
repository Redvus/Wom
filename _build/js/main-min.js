const navButtonMobile=document.getElementById("navButtonMobile"),navMainMobile=document.getElementById("navMobile"),navButtonLineTop=document.querySelector(".nav-button-line__top"),navButtonLineMiddle=document.querySelector(".nav-button-line__middle"),navButtonLineBottom=document.querySelector(".nav-button-line__bottom"),headerBack=document.getElementById("headerBack");function navMenuOpenMobile(){let e=new gsap.timeline({reversed:!0});e.to(headerBack,{duration:.4,delay:-1,autoAlpha:1,visibility:"visible",ease:"power1"}).to(navMainMobile,{duration:.4,delay:-1.2,x:0,visibility:"visible",ease:"power2"}).to(navButtonLineMiddle,{duration:.3,delay:-.6,rotation:"180deg",ease:"power2"}).to(navButtonLineTop,{duration:.3,delay:-.6,rotation:"135deg",x:"30%",y:"200%",scaleX:.6,ease:"power2"}).to(navButtonLineBottom,{duration:.3,delay:-.6,rotation:"-135deg",x:"30%",y:"-200%",scaleX:.6,ease:"power2"}),navButtonMobile.addEventListener("click",(function(){e.reversed()?e.restart():e.reverse()})),headerBack.addEventListener("click",(function(){e.reverse()}))}$(".item-has-children").children("a").on("click",(function(e){e.preventDefault(),$(this).toggleClass("submenu-open").next(".submenu").slideToggle(200).end().parent(".item-has-children").siblings(".item-has-children").children("a").removeClass("submenu-open").next(".submenu").slideUp(200)}));const searchButtonMobile=document.getElementById("headerButtonSearch"),sidebarLogoMobile=document.querySelector(".sidebar__logo"),sidebarSearchMobile=document.querySelector(".sidebar__search"),sidebarSearchWrapper=document.querySelector(".wrapper"),searchBack=document.getElementById("searchBack");function searchOpenMobile(){var e=new gsap.timeline({reversed:!0});e.to([sidebarLogoMobile,navButtonMobile,searchButtonMobile],{duration:.1,delay:-1,autoAlpha:0,visibility:"hidden",ease:"power1"}).to(sidebarSearchMobile,{duration:.3,delay:-.7,y:"0%",visibility:"visible",autoAlpha:1,ease:"power2"}).to(searchBack,{duration:.3,delay:-.6,autoAlpha:1,visibility:"visible",ease:"power1"}),searchButtonMobile.addEventListener("click",(function(){e.reversed()?e.restart():e.reverse()})),searchBack.addEventListener("click",(function(){e.reverse()}))}class InfoImage{infoImageStory(e,t){const o=document.createElement("div"),n=document.querySelector(".post-gallery"),a=document.querySelector(".post-gallery__images"),i=(document.createElement("iframe"),document.createElement("a")),r=document.querySelector(".post__top_buttons");document.querySelector(".wrapper");!function(){let l=gsap.timeline({reversed:!0,onStart:()=>{n.appendChild(o),r.appendChild(i),i.innerHTML='<i class="fa-solid fa-close"></i>',o.className="post-gallery__description",i.className="post__top_close",o.innerHTML=t}});l.to(a,{duration:.3,delay:"-0.3",display:"none",autoAlpha:0}).to(o,{duration:.3,delay:"-0.1",display:"flex",autoAlpha:1}),e.addEventListener("click",(()=>{l.reversed()?l.restart():l.reverse();let e=window.pageYOffset;localStorage.setItem("windowPositionY",JSON.stringify(e)),window.scroll(0,0)})),i.addEventListener("click",(()=>{l.reverse(),r.removeChild(i),o.innerHTML="",n.removeChild(o);let e=JSON.parse(localStorage.getItem("windowPositionY"));console.log(e),window.pageYOffset=e}))}()}}!function(e){jQuery(".wrapper").imagesLoaded({background:!0}),gsap.registerPlugin(ScrollTrigger);document.querySelector(".wrapper-line");const t=document.getElementById("postButtonInfo"),o=document.querySelector(".post-gallery__description"),n=document.querySelector(".post-gallery__images"),a=document.getElementById("postButtonInfoIcon");window.pageYOffset;function i(){let e=gsap.timeline({reversed:!0,onComplete:()=>{t.className="active",a.className="fa-solid fa-close fa-active"}});e.to(n,{duration:.3,delay:"-0.3",display:"none",autoAlpha:0}).to(o,{duration:.3,delay:"-0.1",display:"block",autoAlpha:1}),t.addEventListener("click",(()=>{e.reversed()?e.restart():e.reverse(),t.className="",a.className="fa-solid fa-info",window.scroll(0,0)}))}document.body.clientWidth>768||screen.width>768?(document.body.removeChild(headerBack),document.body.removeChild(searchBack),t&&i()):(navMenuOpenMobile(),searchOpenMobile(),t&&i())}();