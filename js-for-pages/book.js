// https://localhost:8080/api/books




export function setupBookHandlers(){
    document.getElementById("btn-get-all-books").onclick = getAllBooks;
    document.getElementById("btn-get-book").onclick = getBook();
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
            <td>${u.name}</td>
        </tr>    
        `).join("\n")
            document.getElementById("tbl-id").innerHTML=rows;
        })

        .catch(err => console.log("OOOPPs: " + err))
        .finally(err => console.log("Done"))
}


function getBook() {

    const id = document.getElementById("input-id-book").value

    fetch("http://localhost:8080/api/books/"+id)
        .then(res => res.json())
        .then(data => {
                document.getElementById("id-book-id").innerText = data.id
                document.getElementById("id-book-name").innerText = data.name

            }
        )
        .catch(err => console.error("Error: " + err))
        .finally(e => console.log("Done"))

}
