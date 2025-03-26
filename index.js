import{a as p,i as a}from"./assets/vendor-X279WPgE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="49539042-7a7029324b91a0a3f345412f4";function d(i){return p(f,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery");function g(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:n,comments:c,downloads:u})=>`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${e}"
    />
      <div>
        <p>Likes: ${t}</p>
        <p>Views: ${n}</p>
        <p>Comments: ${c}</p>
        <p>Downloads: ${u}</p>
    </div>

  </a>
</li>
`).join("");l.insertAdjacentHTML("beforeend",o)}function y(){l.innerHTML=""}const h=document.querySelector(".form");h.addEventListener("submit",L);function L(i){i.preventDefault();const o=i.target.elements["search-text"].value.trim();if(!o){a.error({message:"Empty input, enter a search value!",position:"topRight"});return}d(o).then(({hits:r})=>{y(),r.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g(r)}).catch(r=>console.log(r))}console.log("Hello");
//# sourceMappingURL=index.js.map
