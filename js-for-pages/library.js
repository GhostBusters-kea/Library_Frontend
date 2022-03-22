// https://localhost:8080/api/libraries




export function setupLibraryHandlers(){
    document.getElementById("btn-get-all-libraries").onclick = getAllLibraries;
    document.getElementById("btn-get-library").onclick = getLibrary;
}

function getAllLibraries(){
    fetch("http://localhost:8080/api/libraries/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const rows = data.map(u=>
        `
        <tr>
            <td>${u.id}</td>
            <td>${u.name}</td>
        </tr>    
        `).join("\n")
        document.getElementById("tbl-id").innerHTML=rows;
    })

    .catch(err => console.log("OOOPPs: " + err))
    .finally(err => console.log("Done"))
}


function getLibrary() {

    const id = document.getElementById("input-id-library").value

    fetch("http://localhost:8080/api/libraries/"+id)
.then(res => res.json())
  .then(data => {
      document.getElementById("id-library-id").innerText = data.id
      document.getElementById("id-library-name").innerText = data.name
      
  }
    )
  .catch(err => console.error("UPPPPPS: " + err))
  .finally(e => console.log("Finally Done"))

}
