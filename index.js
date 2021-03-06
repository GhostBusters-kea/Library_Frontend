import { renderTemplate, setActive, showPage } from "./utils.js";
import {getLoanOnClick, createNewLoan, deleteLoan} from "../js-for-pages/loan.js";
import {setupLibraryHandlers} from "../js-for-pages/library.js"
import { setupMemberHandlers} from "./js-for-pages/member.js";
import {setupBookHandlers} from "../js-for-pages/book.js";

function renderNavItems(evt){
    const element = evt.target
    setActive(element)
    const id = element.id
    renderTemplate(id)
    switch (id){
        case "front-page": {
            break
        }
        case "library-page":{
            setupLibraryHandlers()
            break
        }
        case "loan-page":{
            getLoanOnClick()
            createNewLoan()
            deleteLoan()
            break
        }
        case "login-page":{
            let loginInfo = fetchLoginInfo()
            break
        }
        case "signup-page":{
            setupMemberHandlers()
        }
        case "book-page":{
            setupBookHandlers()



            break
        }
    }
}

document.getElementById("navbar").onclick= renderNavItems;
showPage("front-page")


// Library page
//document.getElementById("btn-get-library").onclick = getLibrary;


//document.getElementById("btn-get-all-libraries").onclick = getAllLibraries;
/*document.getElementById("btn-get-all-libraries").onclick = getAllLibraries;


function getAllLibraries(){
    fetch("http://localhost:8080/api/libraries")
    .then(res => res.json())
    .then(data => {
        console.log(data)
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
*/

