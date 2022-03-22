export function getLoanOnClick(){
    document.getElementById("btn-get-loan").onclick = getAllMembers
}

function getAllMembers(){
    const username = document.getElementById("input-loan-id").value
    fetch("http://localhost:8080/api/loan/" + username)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const rows = data.map(u=>
                `
            <tr>
                <td>${u.checkoutdate}</td>
                <td>${u.memberResponse.username}</td>
            </tr>`).join("\n")
            document.getElementById("tbl-loan-id").innerHTML=rows;
        })
        .catch(err => console.log("OOOPPs: " + err))
        .finally(err => console.log("Done"))
}



/*
async function getAllLoansOnMember() {
    const usernameId = document.getElementById("input-loan-id").value
    const api_url = "http://localhost:8080/api/loan/"
    const response = await fetch(api_url)
    const data = await response.json()
    const {username, checkoutdate} = data

    document.getElementById("id-username").innerText = username
    document.getElementById("id-checkoutdate").innerText = checkoutdate
}

 */