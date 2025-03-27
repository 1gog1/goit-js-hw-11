import{a as f,S as m,i as a}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.getElementById("loader");function p(){l.classList.remove("is-hidden")}function g(){l.classList.add("is-hidden")}const y="https://pixabay.com/api/",h="49539042-7a7029324b91a0a3f345412f4";function L(i){const r={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return p(),f(y,{params:r}).then(o=>o.data).finally(()=>{g()})}const c=document.querySelector(".gallery");let b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function v(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:d})=>`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${e}"
    />
      <div>
        <p>Likes: ${t}</p>
        <p>Views: ${n}</p>
        <p>Comments: ${u}</p>
        <p>Downloads: ${d}</p>
    </div>

  </a>
</li>
`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}const $=document.querySelector(".form");$.addEventListener("submit",E);function E(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){a.error({message:"Empty input, enter a search value!",position:"topRight"});return}L(r).then(({hits:o})=>{S(),o.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),v(o)}).catch(o=>console.log(o))}
//# sourceMappingURL=index.js.map
