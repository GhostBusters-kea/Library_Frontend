import { renderTemplate, setActive, showPage } from "./utils.js";
import {getLoanOnClick} from "./js-for-pages/loan.js";
function renderNavItems(evt){
    const element = evt.target
    setActive(element)
    const id = element.id
    renderTemplate(id)
    switch (id){
        case "front-page": {
            break
        }
        case "loan-page":{
            getLoanOnClick()
            break
        }
    }
}

document.getElementById("navbar").onclick= renderNavItems;
showPage("front-page")