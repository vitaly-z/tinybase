"use strict";(()=>{var c="v5.2.2";var i=document,a=()=>{d(),addEventListener("load",()=>{let t=o("#version");t.innerText=c,t.style.width=t.scrollWidth+"px"})},o=t=>i.querySelector(t);var n="dark",r="light",l="auto",d=()=>{let t=matchMedia("(prefers-color-scheme: dark)"),s=()=>{let e=localStorage.getItem(n)??l;o("#dark")?.setAttribute("class",e),o("html").className=e==n||e==l&&t.matches?n:r};t.addEventListener("change",s),window.addEventListener("storage",e=>{e.storageArea==localStorage&&e.key==n&&s()}),addEventListener("load",()=>{o("#dark").addEventListener("click",()=>{let e=localStorage.getItem(n);localStorage.setItem(n,e==n?r:e==r?l:n),s()}),s()}),s()};a();})();
