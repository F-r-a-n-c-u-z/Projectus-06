(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const s=document.querySelectorAll(".accordion");s.forEach(c=>{new Accordion(c)});document.addEventListener("DOMContentLoaded",function(){const c=document.querySelectorAll(".about-con-list-iteam");function r(){this.classList.toggle("active");const t=this.querySelector(".about-con-list-iteam-id");t.style.display==="block"?t.style.display="none":t.style.display="block",this.querySelector(".about-con-list-iteam-sec-icon svg path").classList.toggle("rotate")}c.forEach(t=>{t.addEventListener("click",r)});for(let t=1;t<c.length;t++){const n=c[t].querySelector(".about-con-list-iteam-id");n.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
