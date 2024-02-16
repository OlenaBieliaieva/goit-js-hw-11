import{i as h,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(r){return r.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${a}"
             
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
              <p class="amount">${i}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${u}</p>
            </div>
          </div>
        </li>`).join("")}function f(r){const o="https://pixabay.com/api/",s="42359389-3e7836390f428de58440ba614";r.includes(" ")&&r.replace(/\s+/g,"+");const a=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const c=document.querySelector(".js-search"),m=document.querySelector(".input-search"),n=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";c.addEventListener("submit",y);function y(r){if(r.preventDefault(),n.innerHTML="",l.style.display="block",m.value==="")return alert`Please fill in the form`;const o=r.target.elements.search.value;f(o).then(s=>{l.style.display="none",s.hits.length||h.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white"}),n.innerHTML=p(s.hits),new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),c.reset()}).catch(s=>{l.style.display="none",console.log(s)})}
//# sourceMappingURL=commonHelpers.js.map
