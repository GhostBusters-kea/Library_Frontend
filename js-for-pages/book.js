// https://localhost:8080/api/books




export function setupBookHandlers(){
    document.getElementById("btn-get-all-books").onclick = getAllBooks;
    document.getElementById("btn-get-book").onclick = getBook();
    document.getElementById("btn-create-book").onclick = createNewBook();
}

function getAllBooks(){
    fetch("http://localhost:8080/api/books/")
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
    const authorValue = document.getElementById("author")
    const publisherValue = document.getElementById("publisher")
    const publisherYearValue = document.getElementById("publishYear")
    const isbn = document.getElementById("isbn")
    const url = "http://localhost:8080/api/book/"
    addPostForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: titleValue.value,
                author: authorValue.value,
                publisher: publisherValue.value,
                publishYear: publisherYearValue.value,
                isbn: isbn.value
            })
        })
            .then(res => res.json())
            .then(data=> {
                const dataArr = [];
                dataArr.push(data);
            })
    })
}



function getBook() {

    const id = document.getElementById("input-id-book").value

    fetch("http://localhost:8080/api/books/"+id)
        .then(res => res.json())
        .then(data => {
                document.getElementById("id-book-id").innerText = data.id
                document.getElementById("id-book-title").innerText = data.title

            }
        )
        .catch(err => console.error("Error: " + err))
        .finally(e => console.log("Done"))

}
