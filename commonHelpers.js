import{S as b,N as g,i as B}from"./assets/vendor-b5d83026.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();document.querySelector(".menu");const S=document.querySelector(".menu-title"),u=document.querySelector(".menu-list"),E=document.querySelector(".open-mobile-menu"),c=document.querySelector(".mobile-menu"),N=document.querySelector(".header-nav");document.querySelectorAll(".menu-list-item");c.addEventListener("click",M);N.addEventListener("click",j);function M(e){e.target.nodeName==="BUTTON"&&c.classList.remove("is-open")}function j(e){e.target===S||e.target.parentNode===S?u.classList.toggle("visually-hidden-menu"):e.target===E||e.target.parentNode===E?c.classList.add("is-open"):u.contains(e.target)&&(u.classList.toggle("visually-hidden-menu"),c.classList.remove("is-open"))}const I=document.querySelectorAll(".accordion");I.forEach(e=>{new Accordion(e)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".about-con-list-iteam");function o(){this.classList.toggle("active");const t=this.querySelector(".about-con-list-iteam-id");t.style.display==="block"?t.style.display="none":t.style.display="block";const s=this.querySelector(".arrow-up");s.classList.toggle("arrow-down"),s.style.transition="transform 250ms cubic-bezier(0.4, 0, 0.2, 1)"}e.forEach(t=>{t.addEventListener("click",o)});for(let t=1;t<e.length;t++){const s=e[t].querySelector(".about-con-list-iteam-id");s.style.display="none"}});new b(".swiper-container",{modules:[g],direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){const e=document.querySelectorAll(".about-skills-list-div");e.forEach(t=>{t.style.backgroundColor=""});const o=e[this.activeIndex];o.style.backgroundColor="#ed3b44"}}});const q=document.querySelector(".swiper-button-next-proj-btn"),m=document.querySelector(".swiper-button-prev-proj-btn");new b(".swiper-proj",{modules:[g],direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next-proj-btn",prevEl:".swiper-button-prev-proj-btn"},on:{slideChangeTransitionEnd:function(){const e=this.isBeginning,o=this.isEnd;e?m.disabled=!0:m.disabled=!1,o?q.disabled=!0:q.disabled=!1}}});m.disabled=!0;const x=document.querySelectorAll(".accordion");x.forEach(e=>{new Accordion(e)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".faq-ac");for(let t=1;t<e.length;t++){const s=e[t].querySelector(".faq-ac-panel");s.style.display="none",s.style.transition="transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"}e.forEach(t=>{t.addEventListener("click",o)});function o(){this.classList.toggle("active");const t=this.querySelector(".faq-ac-panel"),s=this.querySelector(".faq-arrow-down");t.style.display==="block"?(t.style.display="none",s.style.transform="none"):(t.style.display="block",s.style.transform="rotate(0.5turn)",s.style.transition="transform 500ms cubic-bezier(0.4, 0, 0.2, 1)")}});const L=document.querySelectorAll(".CoversImgContainer"),T=document.querySelector(".CoverBgContainer");window.addEventListener("scroll",z);function z(){P(T)?L.forEach(e=>e.classList.add("AnimationOn")):L.forEach(e=>e.classList.remove("AnimationOn"))}function P(e){const o=e.getBoundingClientRect();return o.bottom>0&&o.right>0&&o.top<(window.innerHeight||document.documentElement.clientHeight)&&o.left<(window.innerWidth||document.documentElement.clientWidth)}const k=document.querySelector(".swiper-button-next-rev-btn"),f=document.querySelector(".swiper-button-prev-rev-btn"),F="https://portfolio-js.b.goit.study/api/reviews",V=document.querySelector(".cards-list");fetch(F).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{V.innerHTML=e.map(o=>`
    <li class="swiper-slide swiper-slide-rev cards-item-natalia">
            <img
              src=${o.avatar_url}
              alt="student"
              width="48"
              height="48"
              loading="lazy"
            />
          <div class="info">
            <h3 class="name">${o.author}</h3>
            <p class="text">
              ${o.review}
            </p>
          </div>
        </li>
    `).join("")}).catch(e=>console.log(e));new b(".swiper-reviews",{modules:[g],direction:"horizontal",centeredSlides:!1,slidesPerView:4,navigation:{nextEl:".swiper-button-next-rev-btn",prevEl:".swiper-button-prev-rev-btn"},on:{resize:function(){const e=window.innerWidth;e<=768?this.params.slidesPerView=1:e<=1440?this.params.slidesPerView=2:this.params.slidesPerView=4,this.update()},slideChangeTransitionEnd:function(){const e=this.isBeginning,o=this.isEnd;e?f.disabled=!0:f.disabled=!1,o?k.disabled=!0:k.disabled=!1}}});f.disabled=!0;const y=document.querySelector(".work-form"),l=document.querySelector(".work-form input[name=email]"),p=document.querySelector(".work-form input[name=comment]"),a=document.querySelector(".work-form-succes"),h=document.querySelector(".work-form-invalid"),C=document.querySelector("body");a.style.display="none";h.style.display="none";const $="https://portfolio-js.b.goit.study/api/requests",v="work-form-state";let r={};D();y.addEventListener("input",e=>{r[e.target.name]=e.target.value,localStorage.setItem(v,JSON.stringify(r)),l.validity.valid?(a.style.display="block",h.style.display="none",l.style.borderColor="#3CBC81"):(a.style.display="none",h.style.display="block",l.style.borderColor="#E74A3B")});y.addEventListener("submit",e=>{if(e.preventDefault(),a.style.display="none",l.style.borderColor="#1c1d20",l.value!==""&&p.value!==""){const o={method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(r)};fetch($,o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{B.show({class:"work-modal",id:"custom-modal",title:t.title,theme:"dark",message:t.message,position:"center",timeout:!1,overlay:!0,close:!0,closeOnEscape:!0,closeOnClick:!1,onOpened:()=>{C.style.overflow="hidden"},onClosed:()=>{C.style.overflow="scroll"}}),y.reset()}).catch(t=>{alert(t),l.value=r.email,p.value=r.comment}),localStorage.removeItem(v);return}alert("All fields must be filled!")});function D(){const e=localStorage.getItem(v);e&&(r=JSON.parse(e),l.value=r.email||"",p.value=r.comment||"")}const R=document.querySelector(".open-mobile-menu"),U=document.querySelector(".close-menu"),A=document.querySelector(".mobile-menu"),O=document.querySelectorAll(".mobile-menu-item"),W=document.querySelector(".order-project-mobm");R.addEventListener("click",_);U.addEventListener("click",w);W.addEventListener("click",w);O.forEach(e=>e.addEventListener("click",w));function _(){A.classList.add("is-open")}function w(){console.log(O),A.classList.remove("is-open")}
//# sourceMappingURL=commonHelpers.js.map
