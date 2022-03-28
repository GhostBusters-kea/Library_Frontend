//import { SERVER } from "../settings.js"
const URL = "https://kealibrary.azurewebsites.net/api/members/"

export function setupMemberHandlers() {
    document.getElementById("btn-get-all-members").onclick = (e) => {
        e.preventDefault()
        getAllMembers();
    }
    document.getElementById("btn-createNemUser").onclick = (e) => {
        e.preventDefault()
        createNewUser();
    }
}

function deleteMember(id) {
    fetch(URL + id, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(()=> location.reload())

}

function getAllMembers(){
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const rows = data.map(u=>
                `
        <tr>
            <td>${u.username}</td>
            <td>${u.firstName}</td>
            <td>${u.lastName}</td>
            <td>${u.email}</td>
            <td>${u.street}</td>
            <td>${u.city}</td>
            <td>${u.zip}</td>
            <td><button id="btn-edit-member" type="button" class="btn btn-primary">Edit</button></td>
            <td><button id="btn-delete-member" type="button" class="btn btn-primary">Delete</button></td>
            
        </tr>    
        `).join("\n")
            document.getElementById("allUsers").innerHTML=rows;
        })

        .catch(err => console.log("OOOPPs: " + err))
        .finally(err => console.log("Done"))
}

function createNewUser(){
    const addPostForm = document.querySelector(".add-user-form")
    const firstNameValue = document.getElementById("first-name")
    const lastNameValue = document.getElementById("last-name")
    const emailValue = document.getElementById("add-email")
    const addUsernameValue = document.getElementById("add-username")
    const addPasswordValue = document.getElementById("add-password")
    const streetValue = document.getElementById("street")
    const cityValue = document.getElementById("city")
    const zipValue = document.getElementById("zip")
    // const url = "http://localhost:8080/api/members/"
    addPostForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: addUsernameValue.value,
                password: addPasswordValue.value,
                email: emailValue.value,
                firstName: firstNameValue.value,
                lastName: lastNameValue.value,
                street: streetValue.value,
                city: cityValue.value,
                zip: zipValue.value
            })
        })
            .then(res => res.json())
            .then(data=> {
                const dataArr = [];
                dataArr.push(data);
            })
        addUsernameValue.value =""
        addPasswordValue.value=""
        emailValue.value=""
        firstNameValue.value=""
        lastNameValue.value=""
        streetValue.value=""
        cityValue.value=""
        zipValue.value=""
    })
}

function fetchLoginInfo(){
    const loginPostForm = document.querySelector(".login-post-form")
    const loginUsernameValue = document.getElementById("login-username")
    const loginPasswordValue = document.getElementById("login-password")
    // const url = "http://localhost:8080/api/members/"
    const dataArr = [];
    loginPostForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: loginUsernameValue.value,
                password: loginPasswordValue.value,

            })
        })
            .then(res => res.json())
            .then(data=> {

                dataArr.push(data);
            })
    })
    return dataArr
}