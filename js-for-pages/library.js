// https://localhost:8080/api/libraries

document.getElementById("btn-get-library").onclick = getLibrary;
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
