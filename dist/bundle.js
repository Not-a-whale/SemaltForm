!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){document.querySelector(".filters__date"),document.querySelector(".date__selected-date"),document.querySelector("#firstMonth"),document.querySelector("#secondMonth"),document.querySelector(".month-1 .mnt"),document.querySelector(".month-2 .mnt"),document.querySelector(".month-1 .next-mnt"),document.querySelector(".month-1 .prev-mnt"),document.querySelector(".month-2 .next-mnt"),document.querySelector(".month-2 .prev-mnt");const n=document.querySelector("#firstMonth .days"),r=document.querySelector("#secondMonth .days");let l=new Date,o=(l.getDate(),l.getMonth()),c=l.getFullYear();function s(e){e.innerHTML=" ";let t=31;switch(o){case 1:t=2020==c||2024==c||2028==c?29:28;break;case 3:case 5:case 8:case 10:t=30;break;default:t=31}for(let n=0;n<t;n++){const t=document.createElement("div");t.classList.add("day"),t.textContent=n+1,e.appendChild(t)}}s(n),s(r)},function(e,t,n){"use strict";n.r(t),n.d(t,"statusElements",(function(){return d})),n.d(t,"tableBody",(function(){return f}));n(2),n(0);function r(e){let t=new Date(e);let n=t.getFullYear(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],l=t.getDate();return t=`${r} ${l},<br>${n}`,t}(async function(e){try{const t=await fetch(e);return(await t.json()).result}catch{alert(error)}})("https://semalt.net/dev/api/v1/example/test/").then(e=>{let t=function(e){const t=[];for(let n=0;n<e.length;n++){let l=r(e[n].lastCheck),o=r(e[n].lastSubmitted);const c=`<tr class="table__row" id=tableRow-${n+1}>\n        <td>\n          <input\n            class="tableCheckbox"\n            type="checkbox"\n            name="tableSitemapsCheckbox-${n+1}"\n            id="tableSitemapsCheckbox-${n+1}"\n          />\n          <label for="tableSitemapsCheckbox-${n+1}"></label>\n        </td>\n        <td class="linked__element">\n          <a href="${e[n].path}"\n            >/sitemap.xml <i class="fas fa-external-link-alt"></i\n          ></a>\n        </td>\n        <td>${e[n].isSitemapsIndex?"Sitemap Index":"Other"}</td>\n        <td>${l}</td>\n        <td>${o}</td>\n        <td class="status" style="color: ${e[n].errors?"#FB6868":"#2AC9A1"}; white-space: nowrap; width: 60px">${e[n].errors?e[n].errors:"Success"} ${e[n].errors?"errors":""}</td>\n        <td>${e[n].urls}</td>\n        <td>\n          <button class="button__recrewl" id="tableButtonRecrewl-1">\n            Recrewl\n          </button>\n        </td>\n        <td class="remove__button"><i class="fas fa-trash"></i></td>\n        </tr>`;t.push(c)}return t}(e.sitemap);for(let e=0;e<t.length;e++){let n=t[e];f.insertAdjacentHTML("afterbegin",n)}}),console.log(void 0);const l=document.querySelectorAll(".filters__select"),o=document.querySelectorAll(".filters__list"),c=document.getElementById("filtersInput"),s=document.querySelectorAll(".fliters__list--checkbox"),i=document.getElementById("sitemapSelectReset"),u=document.getElementById("sitemapSelectApply"),a=(document.getElementById(".filters__types"),document.getElementById(".filters__submited"),document.getElementById(".filters__sitemaps"),document.querySelector(".date__selected-date")),d=document.querySelectorAll(".status"),f=document.getElementById("tableBody");!function(){let e=null;c.addEventListener("click",(function(){o[0].style.display="block"})),i.addEventListener("click",(function(){for(let e=0;e<s.length;e++)s[e].checked=!1;o[0].style.display="none"})),u.addEventListener("click",(function(){o[0].style.display="none"}));for(let t=0;t<l.length;t++)l[t].addEventListener("click",(function(){this.classList.contains("filters__date")?this.classList.toggle("filter-date__focus"):(this.classList.toggle("filter-input__focus"),e=this)}));var t,n;document.addEventListener("click",(function(t){if(t.target==e&&e.children[0])for(let t=0;t<e.children[0].children.length;t++)e.children[0].children[t].addEventListener("click",(function(){e.textContent=this.textContent}))})),a.textContent=(t=a.textContent,n=14,t.length<=n?t:t.slice(0,n)+"...")}()},function(e,t){}]);