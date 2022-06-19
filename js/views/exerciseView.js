import * as categories from "../models/CategoryModel.js";
import * as User from "../models/UserModel.js";

exerciseView()

function exerciseView() {
    categories.init();
    User.init()

    updateData()
}

function updateData() {

    let xpPerLevel = JSON.parse(localStorage.getItem("xpPerLevel"));

    //Setup the categories
    let selectedSubCategory = JSON.parse(sessionStorage.getItem("selectedSubCategory"));
    let currentUser = User.getUserLogged()

    let username = document.querySelector(".userName")
    username.innerHTML = currentUser.username

    let level = document.querySelector(".level")
    level.innerHTML = `Level: ${currentUser.level}`

    let xpForNextLevel = document.querySelector(".pointsUntilNextLevel")
    let xpNextLevel = xpPerLevel[currentUser.level] - currentUser.xp

    xpForNextLevel.innerHTML = `Points needed for next level: ${xpNextLevel}`






}   