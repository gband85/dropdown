import { dropdown } from "./dropdown";
import './style.css'
//create dropdown menu
const drop=dropdown("FreeJS","Home","About");
//add elements to page
document.body.appendChild(drop.dropdownUI);
const navList=document.querySelector(".nav-list");
  const hamburger= document.querySelector(".hamburger");
  const navbar= document.querySelector(".navbar");
  const navButtons= document.querySelector(".nav-buttons");
  if (window.innerWidth >= 600) {
    hamburger.style.display = "none";
    navList.classList.add("desktop");
    navList.classList.remove("hide");
    navbar.style.backgroundColor="black";
    navButtons.style.backgroundColor="unset";
  } else {
    hamburger.style.display = "inline";
    navList.classList.remove("desktop")
    navList.classList.add("hide");
    navbar.style.backgroundColor="unset";
    navButtons.style.backgroundColor="black";
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 600) {
      hamburger.style.display = "none";
      navList.classList.remove("hide")
      navList.classList.add("desktop")
      //navList.style.display = "flex";
      navbar.style.backgroundColor="black";
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
      navbar.style.backgroundColor="unset";
      navButtons.style.backgroundColor="black";
    }
  });
hamburger.addEventListener("click", function () {
    navList.classList.toggle("hide");
    });
//test show and hide
drop.show();
drop.hide();