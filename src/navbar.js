import './style.css'

const navbar=(brandText,...links)=>{
    //accept any args
//first arg is logo text,1 to end is buttons text
let linksArr=links.slice(0);
const init=()=>{
//create div
    const navbarUI=document.createElement("nav");
    navbarUI.className="navbar"
    //create navbuttons
    const navButtons=document.createElement("div");
    navButtons.className="nav-buttons";
    const brand=document.createElement("a")
    brand.className="logo"
    brand.href="index.html"
    brand.textContent=brandText;
    // const hamburger=document.createElement("svg")
    const hamburger = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const hamburgerPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
    hamburger.classList.add("hamburger");
    hamburger.style.width="24px"
    hamburger.style.height="24px"
    hamburger.setAttribute("viewBox","0 0 24 24");
    hamburgerPath.setAttribute('d','M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z')
    hamburgerPath.setAttribute("fill","currentColor");
    hamburger.appendChild(hamburgerPath);
    navButtons.appendChild(brand);
    navButtons.appendChild(hamburger)  
  const navList=document.createElement("ul");
  navList.className="nav-list";
  //iterate through args,create li with button with arg
    linksArr.forEach(function(item){
const listItem=document.createElement("li");
listItem.className="menu-item";
listItem.innerHTML=`<button class="btn">${item}</button>`;
navList.appendChild(listItem);
    })
    navbarUI.appendChild(navButtons);
navbarUI.appendChild(navList);
if (window.innerWidth >= 600) {
    hamburger.style.display = "none";
    navList.classList.add("desktop");
    navList.classList.remove("hide");
    navbarUI.style.backgroundColor="black";
    navButtons.style.backgroundColor="unset";
  } else {
    hamburger.style.display = "inline";
    navList.classList.remove("desktop")
    navList.classList.add("hide");
    navbarUI.style.backgroundColor="unset";
    navButtons.style.backgroundColor="black";
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 600) {
      hamburger.style.display = "none";
      navList.classList.remove("hide")
      navList.classList.add("desktop")
      //navList.style.display = "flex";
      navbarUI.style.backgroundColor="black";
      navButtons.style.backgroundColor="unset"
    } else {
      hamburger.style.display = "inline";
      //unset transition, hide menu,set transition
      navList.style.transition="unset";
      setTimeout(function(){
  navList.style.transition="all .5s ease-in-out"
      },100)
      navList.classList.add("hide")
      navList.classList.remove("desktop")
      navbarUI.style.backgroundColor="unset";
      navButtons.style.backgroundColor="black";
    }
  });
hamburger.addEventListener("click", function () {
    navList.classList.toggle("hide");
    });
    document.body.appendChild(navbarUI)
//return navbarUI;
}
    return { init }
}
export {navbar}