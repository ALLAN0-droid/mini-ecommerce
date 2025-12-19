let cartCount=0;
function addToCart(){cartCount++;document.getElementById("cartCount").textContent=cartCount;}
const g=document.getElementById("greeting");
if(g){let h=new Date().getHours();let m=h<12?"Good morning":h<18?"Good afternoon":"Good evening";
g.textContent=m+"! Today is "+new Date().toDateString();}
const f=document.getElementById("contactForm");
if(f){f.addEventListener("submit",e=>{if(!email.value.includes("@")){alert("Invalid email");e.preventDefault();}});}
const t=document.getElementById("themeToggle");
if(t){t.onclick=()=>document.body.classList.toggle("dark-mode");}
