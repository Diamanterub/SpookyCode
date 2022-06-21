import * as usersHandler from "../models/UserModel.js"

function searchUser(username) {

    usersHandler.init()
    const users = usersHandler.getUserByUsername(username)

    loadTable(users)

}


function deleteUser(index) {

    usersHandler.init()
    usersHandler.deleteUser(index)

    alert("User deleted!")

    loadTable()
}



function getUsers() {
    usersHandler.init()
    return usersHandler.getUsers()
}


function loadTable(users = getUsers()) {

    var allUsers = getUsers()
    var table = document.getElementById("usersTable")
    table.innerHTML = ""

    for (let user of users) {
        let pos = allUsers.map(function(e) { return e.email; }).indexOf(user.email);

        var tr = document.createElement("tr")
        var tdUsername = document.createElement("td")
        var tdEmail = document.createElement("td")
        var tdButton = document.createElement("td")

        tdUsername.innerHTML = user.username
        tr.appendChild(tdUsername)
        tdEmail.innerHTML = user.email
        tr.appendChild(tdEmail)
        tdButton.innerHTML = `<button class="btn btn-primary" type="submit" onclick="deleteUser(${pos});">Delete</button>`
        tr.appendChild(tdButton)

        table.appendChild(tr)
    }

}


loadTable()

window.searchUser = searchUser
window.deleteUser = deleteUser
window.loadTable = loadTable