import{S as b,N as q}from"./assets/vendor-476291dd.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();document.querySelector(".menu");const g=document.querySelector(".menu-title"),m=document.querySelector(".menu-list"),v=document.querySelector(".open-mobile-menu"),u=document.querySelector(".mobile-menu"),L=document.querySelector(".header-nav");document.querySelectorAll(".menu-list-item");u.addEventListener("click",k);L.addEventListener("click",A);function k(e){e.target.nodeName==="BUTTON"&&u.classList.remove("is-open")}function A(e){e.target===g||e.target.parentNode===g?m.classList.toggle("visually-hidden-menu"):e.target===v||e.target.parentNode===v?u.classList.add("is-open"):m.contains(e.target)&&(m.classList.toggle("visually-hidden-menu"),u.classList.remove("is-open"))}const C=document.querySelectorAll(".accordion");C.forEach(e=>{new Accordion(e)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".about-con-list-iteam");function n(){this.classList.toggle("active");const t=this.querySelector(".about-con-list-iteam-id");t.style.display==="block"?t.style.display="none":t.style.display="block",this.querySelector(".arrow-up").classList.toggle("arrow-down")}e.forEach(t=>{t.addEventListener("click",n)});for(let t=1;t<e.length;t++){const l=e[t].querySelector(".about-con-list-iteam-id");l.style.display="none"}});const O=document.querySelector(".about-skills-list-svg"),a=document.querySelectorAll(".about-skills-list-div");let s=0;a[s].style.backgroundColor="#ed3b44";O.addEventListener("click",()=>{a[s].style.backgroundColor="",s=(s+1)%a.length,a[s].style.backgroundColor="#ed3b44"});new b(".swiper",{modules:[q],direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new b(".swiper",{modules:[q],direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const N=document.querySelectorAll(".accordion");N.forEach(e=>{new Accordion(e)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".faq-ac");for(let t=1;t<e.length;t++){const l=e[t].querySelector(".faq-ac-panel");l.style.display="none"}e.forEach(t=>{t.addEventListener("click",n)});function n(){this.classList.toggle("active");const t=this.querySelector(".faq-ac-panel"),l=this.querySelector(".faq-arrow-down");t.style.display==="block"?(t.style.display="none",l.style.transform="none"):(t.style.display="block",l.style.transform="rotate(0.5turn)")}});const S=document.querySelectorAll(".CoversImgContainer"),M=document.querySelector(".CoverBgContainer");window.addEventListener("scroll",I);function I(){B(M)?S.forEach(e=>e.classList.add("AnimationOn")):S.forEach(e=>e.classList.remove("AnimationOn"))}function B(e){const n=e.getBoundingClientRect();return n.bottom>0&&n.right>0&&n.top<(window.innerHeight||document.documentElement.clientHeight)&&n.left<(window.innerWidth||document.documentElement.clientWidth)}const E=document.querySelector(".work-form"),i=document.querySelector(".work-form input[name=email]"),h=document.querySelector(".work-form input[name=comment]"),y=document.querySelector(".work-form-succes"),f=document.querySelector(".work-form-invalid");y.style.display="none";f.style.display="none";const p="work-form-state";let c={};x();E.addEventListener("input",e=>{c[e.target.name]=e.target.value,localStorage.setItem(p,JSON.stringify(c)),i.validity.valid?(y.style.display="block",f.style.display="none",i.style.borderColor="#3CBC81"):(y.style.display="none",f.style.display="block",i.style.borderColor="#E74A3B")});E.addEventListener("submit",e=>{if(e.preventDefault(),i.value!==""&&h.value!==""){console.log(c),localStorage.removeItem(p),e.currentTarget.reset();return}alert("All fields must be filled!")});function x(){const e=localStorage.getItem(p);e&&(c=JSON.parse(e),i.value=c.email||"",h.value=c.comment||"")}const F=document.querySelector(".open-mobile-menu"),D=document.querySelector(".close-menu"),w=document.querySelector(".mobile-menu");F.addEventListener("click",P);D.addEventListener("click",T);function P(){w.classList.add("is-open")}function T(){w.classList.remove("is-open")}
//# sourceMappingURL=commonHelpers.js.map