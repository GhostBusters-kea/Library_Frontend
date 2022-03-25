export function getLoanOnClick(){
    document.getElementById("btn-get-loan").onclick = getAllMembers
}



//Get members on loan
function getAllMembers(){
    const username = document.getElementById("input-loan-id").value
    fetch("http://localhost:8080/api/loan/" + username)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const rows = data.map(u=>
                `
            <tr data-id=${u.id}>
                <td>${u.id}</td>
                <td class="td-username">${u.memberResponse.username}</td>
                <td class="td-book">${u.bookId}</td>
                <td>${u.checkoutdate}</td>
                <td class="td-duedate">${u.duedate}</td>
                <td class="td-returneddate">${u.returneddate}</td>
                <td><button id="delete-loan-btn" class="btn btn-primary">Delete Loan</button></td>
                <td><button id="edit-loan-btn" class="btn-edit btn-primary">Edit Loan</button></td>
                
            </tr>`).join("\n")
            document.getElementById("tbl-loan-id").innerHTML=rows;
        })
        .catch(err => console.log("OOOPPs: " + err))
        .finally(err => console.log("Done"))
}

//Create new loan

export function createNewLoan(){
    const addPostForm = document.querySelector(".add-post-form")
    const usernameValue = document.getElementById("username")
    const dueDateValue = document.getElementById("due-date")
    const returnedDateValue = document.getElementById("returned-date")
    const url = "http://localhost:8080/api/loan/"
    addPostForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: usernameValue.value,
                duedate: dueDateValue.value,
                returneddate: returnedDateValue.value
            })
        })
            .then(res => res.json())
            .then(data=> {
                const dataArr = [];
                dataArr.push(data);
            })
        //reset
        usernameValue.value = ""
        dueDateValue.value = ""
        returnedDateValue.value = ""


    })
}

export function deleteLoan(){
    const usernameValue = document.getElementById("username")
    const bookValue = document.getElementById("book")
    const dueDateValue = document.getElementById("due-date")
    const returneddateValue = document.getElementById("returned-date")

    const addPostForm = document.querySelector(".loan-tr")
    addPostForm.addEventListener("click", (e)=> {
        e.preventDefault();
        let deleteButtonPressed = e.target.id == "delete-loan-btn"
        let editButtonPressed = e.target.id == "edit-loan-btn"
        let id = e.target.parentElement.parentElement.dataset.id;


        if (deleteButtonPressed) {
            fetch("http://localhost:8080/api/loan/" + id, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(()=> location.reload())
        }
        if(editButtonPressed){
            const parent = e.target.parentElement.parentElement;
            let usernameContent = parent.querySelector(".td-username").textContent;
            let book = parent.querySelector(".td-book").textContent;
            let dueDateContent = parent.querySelector(".td-duedate").textContent;
            let returnedDateContent = parent.querySelector(".td-returneddate").textContent;
            usernameValue.value = usernameContent
        }
        const btn = document.querySelector(".btn-buttom")
        btn.addEventListener("click", (e)=>{
            e.preventDefault()
            fetch("http://localhost:8080/api/loan/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: usernameValue.value
                })
            })
                .then(res => res.json())
                .then(()=> location.reload())

        })





    })
}

