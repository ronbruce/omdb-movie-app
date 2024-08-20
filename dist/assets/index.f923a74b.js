(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();document.querySelector("#app").innerHTML=`
<style>
      .movies-area {
        justify-content: space-around;
        align-items: flex-start;
      }

#results {
  column-count: 3;
}

    </style>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Movie App</a>
</nav>
<main class="container mt-2">
<form>
<fieldset class="form-group">
<label for="search">Search</label>
<input type="text" class="form-control" id="searchTerm" placeholder="Enter movie title">
</fieldset>
<button type="submit" class="btn btn-primary">Go</button>
</form>
<section class="row">
<section id="results">

</section>
<section class="mt-2 col-3 row">

<h3>Favorites</h3>

<section id="favorites">

</section>
</section>
</section>

<section>
<div class="comment-display">

</div>
</section>
</main>
`;const d=document.querySelector("form"),l=document.querySelector("#searchTerm"),i=document.querySelector("#results"),f=document.querySelector("#favorites"),m="f08d33dc",p=`http://www.omdbapi.com/?apikey=${m}&type=movie&s=`,a={searchTerm:"",results:[],favorites:[]};l.addEventListener("keyup",()=>{a.searchTerm=l.value,console.log(a)});d.addEventListener("submit",v);async function v(e){e.preventDefault();try{a.results=await y(a.searchTerm),b()}catch(t){w(t)}}async function y(e){const t=`${p}${e}`,s=await(await fetch(t)).json();if(s.Error)throw new Error(s.Error);return s.Search}function b(){i.innerHTML="";let e=a.results.reduce((t,n)=>t+u(n,4),"");i.innerHTML=e,h()}function h(){document.querySelectorAll(".favorites-button").forEach(t=>{t.addEventListener("click",g)})}function g(e){const{id:t}=e.target.dataset,n=a.results.find(s=>s.imdbID===t);a.favorites.push(n),L()}function L(){f.innerHTML=a.favorites.reduce((e,t)=>e+u(t,12,!1),"")}function u(e,t,n,s=!0){return`<div class="card ${t-4}">
  <img class="card-img-top" src="${e.Poster}" alt="${e.Title}">
  <div class="card-body">
    <h5 class="card-title">${e.Title}</h5>
    <p class="card-text">${e.Year}</p>
    <textarea type="text" id=${n} rows="4" cols="40"></textarea>
    ${s?` <button data-id="${e.imdbID}" type="button" class="btn btn-danger favorites-button">Favorites</button>`:""}
</div>`}function w(e){i.innerHTML=`<div class="alert alert-danger col" role="alert">
  ${e.message}
</div>
`}
