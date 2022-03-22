export function getLoanOnClick(){
    document.getElementById("btn-get").onclick = getAllLoansOnMember
}



/*
function getAllLoansOnMember() {
    console.log("called")
    const username = document.getElementById("input-id").value
    fetch("http://localhost:8080/api/loan/" + username)
        .then(res => {
            if (!res.ok) {
                return Promise.reject("Error:" + res.status)
            }
            return res.json()
        })
        .then(data=> {
            document.getElementById("id-username").innerText = data.username
            document.getElementById("id-checkoutdate").innerText = data.checkoutdate
        })
        .catch(err=> {
            document.getElementById("error").innerText = err
        })
        .finally(e => console.log("done"))
}

 */

async function getAllLoansOnMember(){
    const usernameId = document.getElementById("input-id").value
    const api_url = "http://localhost:8080/api/loan/"
    const response = await fetch(api_url)
    const data = await response.json()
    const{username, checkoutdate} = data

    document.getElementById("id-username").innerText = username
    document.getElementById("id-checkoutdate").innerText = checkoutdate
}


/*
const option = {
    method : "POST",
    headers : {
        "Content-type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(
    )
}

fetch("http://localhost:8080/api/loan/",option)
    .then(res =>{
        console.log(res.status)
        return res.json()
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
 */