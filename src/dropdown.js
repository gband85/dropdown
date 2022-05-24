const dropdown=(...theItems)=>{
    //accept any args
//first arg is logo text,1 to end is buttons text
let itemsArr=theItems.slice(1);
//create div
    const dropdownUI=document.createElement("div");
    //create navbuttons
    const navButtons=document.createElement("div");
    navButtons.className="nav-buttons";
    navButtons.innerHTML=`<a href="index.html" class="logo">${theItems[0]}</a>
  <i id="hamburger" class="fa-solid fa-bars"></i>`
  dropdownUI.appendChild(navButtons);
  const navList=document.createElement("ul");
  navList.className="nav-list";
  //iterate through args,create li with button with arg
    itemsArr.forEach(function(item){
const listItem=document.createElement("li");
listItem.innerHTML=`<button class="btn">${item}</button>`
navList.appendChild(listItem);
    })
dropdownUI.appendChild(navList);
    const show=()=>{
console.log("show")
    }
    const hide=()=>{
console.log("hide")
    }
    return { dropdownUI,show,hide }
}
export {dropdown}