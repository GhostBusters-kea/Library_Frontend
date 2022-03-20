export function setActive(newActive) {
    const linkDivs = document.getElementById("navbar").querySelectorAll("a")
    linkDivs.forEach(div => {
        div.classList.remove("active")
    })
    if (newActive) {
        newActive.classList.add("active")
    }
}

export function renderTemplate(id) {
    const temp = document.querySelector(`[data-id=${id}]`)
    if (!temp) {
        return console.error(`No Template found for '${id}' `)
    }
    const clon = temp.content.cloneNode(true);
    document.getElementById("content").innerHTML = ""
    document.getElementById("content").appendChild(clon)
}

const clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true
});

export function showPage(pageId) {
    document.getElementById(pageId).dispatchEvent(clickEvent)
}