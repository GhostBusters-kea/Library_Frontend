// https://localhost:8080/api/libraries

document.getElementById("btn-get").onclick = getLibrary;
document.getElementById("btn-get-all").onclick = getAllLibraries;

function getAllLibraries(){
    fetch("http://localhost:8080/api/libraries")
    .then(res => res.json)
}
