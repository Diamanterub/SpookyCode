import * as categoriesHandler from "../models/CategoryModel.js"

function addCategory(title) {

    categoriesHandler.init()
    categoriesHandler.add(title, 0, [])

    alert(`Category ${title} created!`)

    loadTable()

}


function deleteCategory(index) {

    categoriesHandler.init()
    categoriesHandler.deleteCategory(index)

    alert("Category deleted!")

    loadTable()
}


function loadTable() {

    categoriesHandler.init()
    var categories = categoriesHandler.getCategories()
    var table = document.getElementById("categoriesTable")
    table.innerHTML = ""

    let i = 0
    for (let category of categories) {
        var tr = document.createElement("tr")
        var tdTitle = document.createElement("td")
        var tdButton = document.createElement("td")

        tdTitle.innerHTML = category.title
        tr.appendChild(tdTitle)
        tdButton.innerHTML = `<button class="btn btn-primary" type="submit" onclick="deleteCategory(${i});">Delete</button>`
        tr.appendChild(tdButton)

        table.appendChild(tr)

        i++
    }

}


loadTable()

window.addCategory = addCategory
window.deleteCategory = deleteCategory
window.loadTable = loadTable