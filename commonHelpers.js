import{S as L,N as k}from"./assets/vendor-476291dd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();document.querySelector(".menu");const g=document.querySelector(".menu-title"),m=document.querySelector(".menu-list"),S=document.querySelector(".open-mobile-menu"),a=document.querySelector(".mobile-menu"),A=document.querySelector(".header-nav");document.querySelectorAll(".menu-list-item");a.addEventListener("click",C);A.addEventListener("click",O);function C(e){e.target.nodeName==="BUTTON"&&a.classList.remove("is-open")}function O(e){e.target===g||e.target.parentNode===g?m.classList.toggle("visually-hidden-menu"):e.target===S||e.target.parentNode===S?a.classList.add("is-open"):m.contains(e.target)&&(m.classList.toggle("visually-hidden-menu"),a.classList.remove("is-open"))}const M=document.querySelectorAll(".accordion");M.forEach(e=>{new Accordion(e)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".about-con-list-iteam");function o(){this.classList.toggle("active");const t=this.querySelector(".about-con-list-iteam-id");t.style.display==="block"?t.style.display="none":t.style.display="block",this.querySelector(".arrow-up").classList.toggle("arrow-down")}e.forEach(t=>{t.addEventListener("click",o)});for(let t=1;t<e.length;t++){const r=e[t].querySelector(".about-con-list-iteam-id");r.style.display="none"}});document.querySelector(".about-skills-list-svg");const N=document.querySelectorAll(".about-skills-list-div");let I=0;N[I].style.backgroundColor="#ed3b44";new L(".swiper",{modules:[k],direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const B=document.querySelectorAll(".accordion");B.forEach(e=>{new Accordion(e)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".faq-ac");for(let t=1;t<e.length;t++){const r=e[t].querySelector(".faq-ac-panel");r.style.display="none"}e.forEach(t=>{t.addEventListener("click",o)});function o(){this.classList.toggle("active");const t=this.querySelector(".faq-ac-panel"),r=this.querySelector(".faq-arrow-down");t.style.display==="block"?(t.style.display="none",r.style.transform="none"):(t.style.display="block",r.style.transform="rotate(0.5turn)")}});const v=document.querySelectorAll(".CoversImgContainer"),T=document.querySelector(".CoverBgContainer");window.addEventListener("scroll",D);function D(){F(T)?v.forEach(e=>e.classList.add("AnimationOn")):v.forEach(e=>e.classList.remove("AnimationOn"))}function F(e){const o=e.getBoundingClientRect();return o.bottom>0&&o.right>0&&o.top<(window.innerHeight||document.documentElement.clientHeight)&&o.left<(window.innerWidth||document.documentElement.clientWidth)}const q=document.querySelector(".work-form"),s=document.querySelector(".work-form input[name=email]"),h=document.querySelector(".work-form input[name=comment]"),d=document.querySelector(".work-form-succes"),y=document.querySelector(".work-form-invalid"),x=document.querySelector(".work-form-btn-ellipse"),c=document.querySelector("#work-modal"),E=document.querySelector("#work-modal-close"),P=document.querySelector("#work-modal-title"),j=document.querySelector("#work-modal-message");d.style.display="none";y.style.display="none";const J="https://portfolio-js.b.goit.study/api/requests",f="work-form-state";let i={};U();q.addEventListener("input",e=>{i[e.target.name]=e.target.value,localStorage.setItem(f,JSON.stringify(i)),s.validity.valid?(d.style.display="block",y.style.display="none",s.style.borderColor="#3CBC81"):(d.style.display="none",y.style.display="block",s.style.borderColor="#E74A3B")});function R(e,o){P.innerText=e,j.innerText=o,c.style.display="block",document.addEventListener("DOMContentLoaded",()=>{E.onclick=function(){c.style.display="none"},window.onclick=function(t){c.style.display="none"}})}document.addEventListener("DOMContentLoaded",()=>{E.onclick=function(){c.style.display="none"},window.onclick=function(e){console.log(e.target),console.log(c),e.target===c&&(c.style.display="none")}});q.addEventListener("submit",e=>{if(e.preventDefault(),x.setAttribute("fill","#e0373f"),d.style.display="none",s.style.borderColor="#1c1d20",s.value!==""&&h.value!==""){const o={method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(i)};fetch(J,o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>R(t.title,t.message)).catch(t=>console.log(t)),localStorage.removeItem(f),e.currentTarget.reset();return}alert("All fields must be filled!")});function U(){const e=localStorage.getItem(f);e&&(i=JSON.parse(e),s.value=i.email||"",h.value=i.comment||"")}const G=document.querySelector(".open-mobile-menu"),H=document.querySelector(".close-menu"),w=document.querySelector(".mobile-menu"),b=document.querySelectorAll(".mobile-menu-item"),K=document.querySelector(".order-project-mobm");G.addEventListener("click",W);H.addEventListener("click",p);K.addEventListener("click",p);b.forEach(e=>e.addEventListener("click",p));function W(){w.classList.add("is-open")}function p(){console.log(b),w.classList.remove("is-open")}
//# sourceMappingURL=commonHelpers.js.map
