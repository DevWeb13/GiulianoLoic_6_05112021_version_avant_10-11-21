(()=>{"use strict";class t{constructor(t,n){this.DOM=t,this.className=n,this.render()}render(){this.DOM.innerHTML=`\n\t\t<header class="${this.className}">\n\t\t\t<button class="logo" title="logo" >\n\t\t\t\t<img src=" ./img/logo/logo.svg" alt="logo">\n\t\t\t</button>\n\t\t\t<button href="#" class="photographersLink">Nos photographes</button>\n\t\t\t<nav class="indexNav">\n\t\t\t\t<button href="#" class="tags tags-link">#Art</button>\n\t\t\t\t<button href="#" class="tags tags-link">#Fashion</button>\n\t\t\t\t<button href="#" class="tags tags-link">#Architecture</button>\n\t\t\t\t<button href="#" class="tags tags-link">#Travel</button>\n\t\t\t\t<button href="#" class="tags tags-link">#Sport</button>\n\t\t\t\t<button href="#" class="tags tags-link">#Animals</button>\n\t\t\t\t<button href="#" class="tags tags-link">#Events</button>\n\t\t\t\t<button href="#" class="tags tags-link">#Portrait</button>\n\t\t\t</nav>\n\t\t</header>\n  `}}class n{constructor(t,n){this.DOM=t,this.tag=n,this.render()}render(){const t=document.createElement("button");t.className="tags",this.DOM.appendChild(t),t.innerHTML+=`\n        #${this.tag}\n    `}}class a{constructor(t,n){this.DOM=t,this.articleClassName=n.articleClassName,this.btClassName=n.btClassName,this.imgLink="./img/PhotographersIDPhotos/"+n.portrait,this.nom=n.name,this.location=n.city+", "+n.country,this.tagline=n.tagline,this.price=n.price+"€/jour",this.tags=n.tags,this.id=n.id,this.render()}async render(){const t=document.createElement("article");t.className=this.articleClassName,this.DOM.appendChild(t),t.innerHTML+=`\n      <button class="${this.btClassName}" onclick="views.photographer"> \n        <div class="photographer-card-link-imgContainer">\n          <img src="${this.imgLink}"  alt="" cover width="208px" height="208px"/>\n        </div>\n        <h2>\n          ${this.nom}\n        </h2>\n      </button>\n\n      <p class="location">\n        ${this.location}\n      </p>\n      <p class="tagline tagline_photographerPages">\n        ${this.tagline}\n      </p>\n      <p class="price">\n        ${this.price}\n      </p>\n    `;const a=document.createElement("nav");a.className="nav-card",this.tags.forEach((t=>{new n(a,t)})),t.appendChild(a)}}let s;const e=document.body,o={lobby:async function(){new t(e,"header"),await async function(){const t=await async function(){const t=await fetch("./data/FishEyeData.json");return s=await t.json(),s.photographers}(),n=document.createElement("main");document.body.appendChild(n),t.forEach((t=>{new a(n,{...t,articleClassName:"photographer-card",btClassName:"photographer-card-link"})}))}(),function(t,n){t.forEach((t=>{t.addEventListener("click",n)}))}(document.querySelectorAll(".photographer-card-link"),o.photographer)},photographer:async function(){new t(e,"header header-photographer");let n=document.querySelector(".logo");var a,s;a=n,s=o.lobby,a.addEventListener("click",s)},lightbox:function(){},formModal:function(){}};o.lobby()})();