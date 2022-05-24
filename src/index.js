import { dropdown } from "./dropdown";
//create dropdown menu
const drop=dropdown("Free","fives");
//add elements to page
document.body.appendChild(drop.dropdownUI);
//test show and hide
drop.show();
drop.hide();