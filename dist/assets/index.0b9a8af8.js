const s=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}};s();(function(){document.querySelector("html").setAttribute("data-js",""),document.querySelector("html").removeAttribute("data-no-js")})();class i{constructor(){this.init(),this.cursorFollow(),this.cursorExpand()}init(){console.log("Website by Paper Krane (https://paperkrane.io)"),console.log("Paper Krane boiler plate scripts initialized... Beep boop bop beep boop!"),this.navToggleInit(),this.mobileHeadroom(),this.desktopHeadroom(),this.parallaxScroll(),this.parallaxMouseListener(),this.trustBar(),this.heroReveal()}navToggleInit(){const t=document.querySelectorAll(".bp__toggle, #hg__nav-filter"),o=document.querySelectorAll("[data-nav]");for(let r of t)this.navToggle(r,o,"click"),this.navToggle(r,o,"keyup")}navToggle(t,o,r){t.addEventListener(r,e=>{if(e.keyCode===13||e.type==="click"){e.preventDefault(),e.stopPropagation();for(let a of o)a.classList.toggle("bp__active")}},!1)}mobileHeadroom(){ScrollTrigger.create({start:"top -54",end:9999999,toggleClass:{className:"bp__background",targets:"#bp__mobile-navbar"}})}desktopHeadroom(){const t=gsap.from("#bp__navbar",{yPercent:-100,paused:!0,duration:.4}).progress(1);ScrollTrigger.create({start:()=>window.innerWidth>=992?"top -78":"top -99999",end:9999999,toggleClass:{className:"bp__background",targets:"#bp__navbar"},onUpdate:o=>{o.direction===-1?t.play():t.reverse()}})}cursorFollow(){const t=document.querySelector(".cursor.stylus");document.addEventListener("mousemove",o=>{if(window.innerWidth>1280){var r=o.clientX,e=o.clientY;gsap.to(t,{duration:1,x:r,y:e,opacity:1,ease:Expo.easeOut})}else t.style.opacity=0},!1)}cursorExpand(){const t=document.querySelectorAll("a, [data-toggle], button, input, textarea, select, .bp__checkbox"),o=document.querySelector("#bp__cursor");for(var r=0;r<t.length;r++)t[r].addEventListener("mouseover",e=>{gsap.to(o,.5,{width:"108px",height:"108px",marginLeft:"-54px",marginTop:"-54px",opacity:.35,background:"transparent",ease:Expo.easeOut})},!1),t[r].addEventListener("mouseout",e=>{gsap.to(o,.5,{width:"12px",height:"12px",marginLeft:"-6px",marginTop:"-6px",opacity:.75,background:"#00dba4",ease:Expo.easeOut})},!1)}heroReveal(){const t=document.querySelectorAll("[data-js] #bp__index #bp__mobile-navbar > *, [data-js] #bp__index #bp__navbar > *"),o=document.querySelector("[data-js] #bp__hero-video-container"),r=document.querySelectorAll("[data-js] #bp__hero-banner h1 span"),e=document.querySelectorAll("[data-js] #bp__hero-banner .bp__written-content > *"),a=document.querySelector("[data-js] #bp__scroll");r.length>0&&e.length>0&&(ScrollTrigger.batch(o,{onEnter:l=>{gsap.to(l,{opacity:1,ease:"power3",duration:2})}}),ScrollTrigger.batch(r,{onEnter:l=>{gsap.to(l,{y:0,rotate:0,opacity:1,ease:"power3",duration:2,stagger:.15,delay:.75})}}),ScrollTrigger.batch(e,{onEnter:l=>{gsap.to(l,{y:0,rotate:0,opacity:1,ease:"power3",duration:2,stagger:.25,delay:1.5})}}),ScrollTrigger.batch(t,{onEnter:l=>{gsap.to(l,{opacity:1,ease:"power3",duration:2,delay:2.5})}}),ScrollTrigger.batch(a,{onEnter:l=>{gsap.to(l,{opacity:.3,ease:"power3",duration:2,delay:2.75})}}))}parallaxScroll(){document.querySelectorAll("[data-parallax-scroll-container]").length>0&&gsap.utils.toArray("[data-parallax-scroll-container] [data-parallax-background]").forEach((o,r)=>{const e=o.offsetHeight-o.parentElement.offsetHeight;gsap.fromTo(o,{y:-e*parseFloat(o.dataset.parallaxScrollSpeed),scale:1},{scrollTrigger:{trigger:o,scrub:2},y:0,scale:1,ease:"none"})})}parallaxMouseListener(){const t=document.querySelectorAll("[data-parallax-mouse-container]"),o=document.querySelectorAll("[data-mouse-parallax]"),r={x:0,y:0,moved:!1};for(let e of t){const a=e.getBoundingClientRect();e.addEventListener("mousemove",function(l){r.moved=!0,r.x=l.clientX-a.left,r.y=l.clientY-a.top}),gsap.ticker.add(()=>{if(r.moved)for(let l of o)this.parallaxMove(r,a,l,parseInt(`-${l.dataset.parallaxSpeed}`));r.moved=!1})}window.addEventListener("resize",function(){if(window.innerWidth<992)for(let e of o)e.removeAttribute("style")},!1)}parallaxMove(t,o,r,e){window.innerWidth>=992?gsap.to(r,.5,{x:(t.x-o.width/2)/o.width*e,y:(t.y-o.height/2)/o.height*e,scrub:2}):r.removeAttribute("style")}trustBar(){const t=document.querySelector("#bp__trustbar");t&&(t.style.display="block",t.style.margin="0",tns({container:t,items:1,draggable:!0,autoplay:!0,controls:!1,nav:!1,autoplayButtonOutput:!1,preventScrollOnTouch:"force",speed:800,responsive:{260:{items:1},360:{items:3},600:{items:4},992:{items:5},1280:{items:6},1600:{items:7},2e3:{items:8}}}))}}window.onload=()=>{new i};
