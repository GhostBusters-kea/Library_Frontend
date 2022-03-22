export function setupReservationHandlers(){
    document.getElementById("btn-get-all-reservations").onclick = getReservations;
    document.getElementById("btn-get-library").onclick = getLibrary;
}

function getReservations(){
    fetch("http://localhost:8080/api/reservations/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const rows = data.map(u=>
        `
        <tr>
            <td>${u.id}</td>
            <td>${u.reservationDate}</td>
        </tr>    
        `).join("\n")
        document.getElementById("tbl-id-reservation").innerHTML=rows;
    })

    .catch(err => console.log("OOOPPs: " + err))
    .finally(err => console.log("Done"))
}