import{S as p,i as l}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(o){return o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${i}"
             
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${d}</p>
            </div>
          </div>
        </li>`).join("")}function m(o){const s="https://pixabay.com/api/",r="42359389-3e7836390f428de58440ba614";o.includes(" ")&&o.replace(/\s+/g,"+");const i=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const u=document.querySelector(".js-search"),f=document.querySelector(".input-search"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});n.style.display="none";u.addEventListener("submit",g);function g(o){o.preventDefault(),c.innerHTML="";const s=f.value;if(s.trim()==="")return l.error({position:"topRight",message:"Please fill in the form",messageColor:"white"});n.style.display="block",m(s).then(r=>{n.style.display="none",r.hits.length||l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white"}),c.insertAdjacentHTML("beforeend",h(r.hits)),y.refresh(),u.reset()}).catch(r=>{n.style.display="none",console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
