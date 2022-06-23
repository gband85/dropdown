const navbar=(brandText,...links)=>{
    //accept any args
//first arg is logo text,1 to end is buttons text
let linksArr=links.slice(1);
const writeUI=()=>{
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
    const hamburger=document.createElement("svg")
    hamburger.className="hamburger";
    hamburger.style="width:24px;height:24px"
    hamburger.viewBox="0 0 24 24"
    hamburger.innerHTML="<path fill='currentColor' d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />"
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

return navbarUI;
}
    const show=()=>{
console.log("show")
    }
    const hide=()=>{
console.log("hide")
    }
    return { writeUI,show,hide }
}
export {dropdown}