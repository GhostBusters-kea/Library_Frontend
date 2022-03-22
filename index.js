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


// Library page
//document.getElementById("btn-get-library").onclick = getLibrary;

document.getElementById("btn-get-all-libraries").onclick = getAllLibraries;

function getAllLibraries(){
    fetch("http://localhost:8080/api/libraries")
    .then(res => res.json())
    .then(data => {
        console-log(data)
        const rows = data.map(u=>
        `
        <tr>
            <td>${u.id}</td>
            <td>${u.name}
        </tr>    
        `).join("\n")
        document.getElementById("tbl-id").innerHTML=rows;
    })

    .catch(err => console.log("OOOPPs: " + err))
    .finally(err => console.log("Done"))
}