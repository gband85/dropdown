const dropdown=(...theItems)=>{
    //accept any args
//first arg is logo text,1 to end is buttons text
let itemsArr=theItems.slice(1);
const writeUI=()=>{
//create div
    const dropdownUI=document.createElement("nav");
    dropdownUI.className="navbar"
    //create navbuttons
    const navButtons=document.createElement("div");
    navButtons.className="nav-buttons";
    navButtons.innerHTML=`<a href="index.html" class="logo">${theItems[0]}</a>
    <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="hamburger">
    <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
</svg>`
  dropdownUI.appendChild(navButtons);
  const navList=document.createElement("ul");
  navList.className="nav-list";
  //iterate through args,create li with button with arg
    itemsArr.forEach(function(item){
const listItem=document.createElement("li");
listItem.className="menu-item";
listItem.innerHTML=`<button class="btn">${item}</button>`;
navList.appendChild(listItem);
    })
dropdownUI.appendChild(navList);
return dropdownUI;
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