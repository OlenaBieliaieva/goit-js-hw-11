import{i as n,S as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:h})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${r}"
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
              <p class="amount">${h}</p>
            </div>
          </div>
        </li>`).join("")}function f(o){const r="https://pixabay.com/api/",s="42359389-3e7836390f428de58440ba614";o.includes(" ")&&o.replace(/\s+/g,"+");const i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const d=document.querySelector(".js-search"),c=document.querySelector(".input-search"),u=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";d.addEventListener("submit",y);function y(o){o.preventDefault(),u.innerHTML="",l.style.display="block",c.value.trim()===""&&n.error({position:"topRight",message:"Please fill in the form",messageColor:"white"});const r=c.value;f(r).then(s=>{l.style.display="none",s.hits.length||n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white"}),u.insertAdjacentHTML("beforeend",m(s.hits)),new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),d.reset()}).catch(s=>{l.style.display="none",console.log(s)})}
//# sourceMappingURL=commonHelpers.js.map
