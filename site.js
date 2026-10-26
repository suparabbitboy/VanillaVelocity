// Shared header, footer and image lightbox
(function(){
const pages=[["index.html","Home"],["browse.html","Mod Browser"],["download.html","Download"],["about.html","About"]];
const cur=document.body.dataset.page;
const f=document.createElement("link");f.rel="stylesheet";
f.href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@600;700&family=Instrument+Sans:wght@400;600;700&display=swap";document.head.appendChild(f);
const ic=document.createElement("link");ic.rel="icon";ic.href="icon1_1024x1024.png";document.head.appendChild(ic);
document.body.insertAdjacentHTML("afterbegin",
`<header class="nav"><div class="wrap"><a class="brand" href="index.html"><img src="icon1_1024x1024.png" alt="" onerror="this.style.display='none'"><span>Vanilla Velocity</span></a>
<nav aria-label="Main">${pages.map(p=>`<a href="${p[0]}" class="${p[0]===cur?"on":""}">${p[1]}</a>`).join("")}</nav></div></header>`);
document.body.insertAdjacentHTML("beforeend",
`<footer><div class="wrap"><a class="by" href="about.html"><img src="suparabbitboy.png" alt="suparabbitboy" onerror="this.style.display='none'"><span>Website made by suparabbitboy</span></a>
<p style="margin:0 auto">Vanilla Velocity v1.0 · Fabric 26.2 · Website and modpack created by suparabbitboy. Not affiliated with Mojang, Microsoft, Modrinth, CurseForge or Lunar Client.</p></div></footer><div id="lb"><img alt=""></div>`);
const lb=document.getElementById("lb");
document.querySelectorAll(".gallery img").forEach(i=>i.onclick=()=>{lb.firstChild.src=i.src;lb.classList.add("open")});
lb.onclick=()=>lb.classList.remove("open");
document.addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("open")});
})();
