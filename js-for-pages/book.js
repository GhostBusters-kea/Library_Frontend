// https://localhost:8080/api/books

//import { SERVER } from "../settings.js"
const URL = "https://kealibrary.azurewebsites.net/api/books/"



export function setupBookHandlers(){
    document.getElementById("btn-get-all-books").onclick = getAllBooks;
    document.getElementById("btn-get-book").onclick =  getBook;
    document.getElementById("btn-create-book").onclick = createNewBook;
    document.getElementById("delete-book-btn").onclick = deleteBoook;

}

//
// function getSingleBook(){
//     const id = document.getElementById("input-book-id").value
//
//     fetch("https://kealibrary.azurewebsites.net/api/books/" + id)
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data)
//             const rows = data
//                 .map(u=> `
//             <tr data-id=${u.id}>
//
//                 <td class="td-id">${u.bookResponse.id}</td>
//                 <td>${u.id}</td>
//                 <td class="td-title">${u.title}</td>
//                 <td>${u.author}</td>
//                 <td class="td-publisher">${u.publisher}</td>
//                 <td class="td-publishYear">${u.publishYear}</td>
//                 <td class="td-isbn">${u.isbn}</td>
//                 <td><button id="delete-book-btn" class="btn btn-primary">Delete Book</button></td>
//                 <td><button id="edit-book-btn" class="btn-edit btn-primary">Edit Book</button></td>
//
//             </tr>`).join("\n")
//             document.getElementById("tbl-book-id").innerHTML=rows;
//         })
//         .catch(err => console.log("OOOPPs: " + err))
//         .finally(err => console.log("Done"))
// }


function deleteBk(){
    const id = document.getElementById("input-id-book").value
    console.log(id)


    fetch("https://kealibrary.azurewebsites.net/api/books/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: titleValue.value,
            authors: authorValue.value,
            publisher: publisherValue.value,
            publishYear: publisherYearValue.value,
            isbnNumber: isbn.value
        })
    })
        .then(res => res.json())
        .then(data=> {
            const dataArr = [];
            dataArr.push(data);
        })

        .then(res => res.json())
        .then(data => {
                console.log(data)
                document.getElementById("id-book-id").innerHTML = (data.id);
                document.getElementById("id-book-title").innerHTML = (data.title);
                document.getElementById("id-book-author").innerHTML = (data.authors);
                document.getElementById("id-book-publisher").innerHTML = (data.publisher);
                document.getElementById("id-book-publish-year").innerHTML = (data.publishYear);
                document.getElementById("id-book-isbn").innerHTML = (data.isbnNumber);
            }
        )
        .catch(err => console.error("Error: " + err))
        .finally(e => console.log("Done"))



}
function deleteBoook(){
    const addPostForm = document.querySelector(".book-tr")
    addPostForm.addEventListener("click", (e)=> {
        e.preventDefault();
        let deleteButtonPressed = e.target.id == "delete-book-btn"
        let id = e.target.parentElement.parentElement.dataset.id;
        const idd = document.getElementById("input-id-book").value
        console.log(idd)

        if (deleteButtonPressed) {
            fetch(URL + idd, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(()=> location.reload())
        }
})}

function deleteBook(){
    const idValue = document.getElementById("id-book-id").value
    const titleValue = document.getElementById("id-book-title")
    const authorsValue = document.getElementById("id-book-author")
    const publisherValue = document.getElementById("id-book-publisher")
    const publishYearValue = document.getElementById("id-book-publish-year")
    const isbnNumberValue = document.getElementById("id-book-isbn")

    const addPostForm = document.querySelector(".book-tr")
    addPostForm.addEventListener("click", (e)=> {
        e.preventDefault();
        let deleteButtonPressed = e.target.id == "delete-book-btn"
        let editButtonPressed = e.target.id == "edit-book-btn"
        let id = e.target.parentElement.parentElement.dataset.id;
        console.log(id)

        if (deleteButtonPressed) {
            fetch(URL + id, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(()=> location.reload())
        }
        if(editButtonPressed){
            const parent = e.target.parentElement.parentElement;
            let idContent = parent.querySelector(".td-id").textContent;
            let title = parent.querySelector(".td-title").textContent;
            let authors = parent.querySelector(".td-author").textContent;
            let publisher = parent.querySelector(".td-publisher").textContent;
            let publishYear = parent.querySelector(".td-publish-year").textContent;
            let isbnNumber = parent.querySelector(".td-isbn").textContent;
            idValue.value = idContent
        }
        const btn = document.querySelector(".btn-edit")
        btn.addEventListener("click", (e)=>{
            e.preventDefault()
            fetch(URL + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: idValue.value
                })
            })
                .then(res => res.json())
                .then(()=> location.reload())

        })





    })
}

function getBook() {

    const id = document.getElementById("input-id-book").value
    console.log(id)


    fetch("https://kealibrary.azurewebsites.net/api/books/" + id)
        .then(res => res.json())
        .then(data => {
                console.log(data)
            document.getElementById("id-book-id").innerHTML = (data.id);
            document.getElementById("id-book-title").innerHTML = (data.title);
            document.getElementById("id-book-author").innerHTML = (data.authors);
            document.getElementById("id-book-publisher").innerHTML = (data.publisher);
            document.getElementById("id-book-publish-year").innerHTML = (data.publishYear);
            document.getElementById("id-book-isbn").innerHTML = (data.isbnNumber);


            }
        )
        .catch(err => console.error("Error: " + err))
        .finally(e => console.log("Done"))

}



function getAllBooks(){
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const rows = data.map(u=>
                `
        <tr>
            <td>${u.id}</td>
            <td>${u.title}</td>
            <td>${u.authors}</td>
            <td>${u.publisher}</td>
            <td>${u.publishYear}</td> 
            <td>${u.isbnNumber}</td> 
        </tr>    
        `).join("\n")
            document.getElementById("tbl-id-book").innerHTML=rows;
        })

        .catch(err => console.log("OOOPPs: " + err))
        .finally(err => console.log("Done"))
}



 function createNewBook(){
    const addPostForm = document.querySelector(".add-post-form")
    const titleValue = document.getElementById("title")
    const authorValue = document.getElementById("authors")
    const publisherValue = document.getElementById("publisher")
    const publisherYearValue = document.getElementById("publishYear")
    const isbn = document.getElementById("isbn")
    // const url = "http://localhost:8080/api/book/"
    addPostForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        fetch("https://kealibrary.azurewebsites.net/api/books/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: titleValue.value,
                authors: authorValue.value,
                publisher: publisherValue.value,
                publishYear: publisherYearValue.value,
                isbnNumber: isbn.value
            })
        })
            .then(res => res.json())
            .then(data=> {
                const dataArr = [];
                dataArr.push(data);
            })
    })
}



// function getBook() {
//
//     const id = document.getElementById("input-id-book").value
//
//     fetch(URL+id)
//         .then(res => res.json())
//         .then(data => {
//                 document.getElementById("id-book-id").innerText = data.id
//                 document.getElementById("id-book-title").innerText = data.title
//
//             }
//         )
//         .catch(err => console.error("Error: " + err))
//         .finally(e => console.log("Done"))
//
// }
