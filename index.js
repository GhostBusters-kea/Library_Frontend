import { renderTemplate, setActive, showPage } from "./utils.js"

function renderNavItems(evt){
    const element = evt.target
    setActive(element)
    const id = element.id
    renderTemplate(id)
    switch (id){
        case "front-page": {
            break
        }
    }
}