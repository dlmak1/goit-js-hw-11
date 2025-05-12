import{a as n,S as u,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();n.defaults.baseURL="https://pixabay.com/api/";function f(i){return n("",{params:{q:i,key:"50246788-a6edd7baee942991099f119f0",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>t)}const c=document.querySelector(".js-gallery"),d=new u(".gallery a");function m(i){const t=i.map(s=>`
      <li class="image-item">
  <div>
    <a href="${largeImageURL}" class="image-link">
      <img src="${webformatURL}" alt="${tags}" class="image-thumbnail">
    </a>
  </div>
  <div>
    <ul class="info-box">
      <li class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-label" data-likes>${likes}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Views</p>
        <p class="info-label" data-views>${views}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-label" data-comments>${comments}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-label" data-downloads>${downloads}</p>
      </li>
    </ul>
  </div>
</li>`).join("");c.innerHTML=t,d.refresh()}function p(){c.innerHTML=""}function g(){document.querySelector(".js-loader").classList.remove("hidden")}function h(){document.querySelector(".js-loader").classList.add("hidden")}const y=document.querySelector(".js-form"),L=document.querySelector('input[name="search-text"]');y.addEventListener("submit",function(i){i.preventDefault();const t=L.value.trim();if(t===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}g(),p(),f(t).then(s=>{s.hits.length===0?a.error({title:"No images",message:"Sorry, there are no images matching your search query. Please try again!"}):m(s.hits)}).catch(s=>{a.error({position:"topCenter",title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{h()})});
//# sourceMappingURL=index.js.map
