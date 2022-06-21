import * as User from "../models/UserModel.js";

profileView()

function profileView() {
    User.init()

    let profileDiv = document.querySelector(".profileDiv")
    let usernames = document.querySelectorAll(".username")
    let levels = document.querySelectorAll(".levelProfile")

    profileDiv?.addEventListener("click", () => {
        location.href = "./profile.html"
    });

    usernames.forEach(username => {
        username.innerHTML = User.getUserLogged().username
    });
    levels.forEach(level => {
        level.innerHTML = `Level ${User.getUserLogged().level}`
    });

    let totalCategoriesHtml = document.querySelectorAll(".categoryNotSelected")

    //Default
    totalCategoriesHtml[0].classList.replace("categoryNotSelected", "categorySelected")

    //Setup changing SubCategory and Category

    let totalSubCategories = document.querySelectorAll(".subCategoryNotSelected")


    totalSubCategories.forEach(subCategory => {
        //Cleaning prev selected subCategories


        subCategory?.addEventListener("click", () => {
            selectedCategory = categories.checkWhereSubCategoryIs(subCategory.innerHTML)
            if (selectedCategory.levelNeeded <= User.getUserLogged().level) {
                //Cleaning prev selected subCategories
                totalSubCategories.forEach(subCategorySelected => {

                    subCategorySelected.classList.replace("subCategorySelected", "subCategoryNotSelected")
                });
                totalCategoriesHtml.forEach(categorySelected => {

                    categorySelected.classList.replace("categorySelected", "categoryNotSelected")
                });
                //Find the subCategory object with the same title
                selectedSubCategory = categories.getSubCategoryByName(subCategory.innerHTML)
                categories.updateViewsSubCategories(selectedSubCategory)
                updateData()
                if (location.href.includes("wiki")) {
                    wikiView.updateData()
                } else {
                    location.href = "/html/wiki.html"
                }
                subCategory.classList.replace("subCategoryNotSelected", "subCategorySelected")
                totalCategoriesHtml.forEach(category => {
                    if (category.innerHTML == selectedCategory.title) {
                        category.classList.replace("categoryNotSelected", "categorySelected")
                    }
                });
            } else {

                // Get the modal
                let modal = document.getElementById("myModalLevel");

                // Get the <span> element that closes the modal
                let span = document.getElementsByClassName("closeLevel")[0];

                let results = document.querySelector(".levelNeededModal")

                results.innerHTML = `You need level ${selectedCategory.levelNeeded} to access this category`

                modal.style.display = "block";

                span.onclick = function () {
                    modal.style.display = "none";
                }

                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        });
    });


    //Profile Stuff

    //Settings

    let oldpassword = document.querySelector("#formLoginEmailOld")
    let newpassword = document.querySelector("#formLoginEmailNew")
    let confirmpassword = document.querySelector("#formLoginEmailConfirm")
    let submit = document.querySelector(".changePassword")
    let response = document.querySelector(".responseMessage")

    submit?.addEventListener("click", (event) => {
        event.preventDefault()
        if (oldpassword.value == User.getUserLogged().password && newpassword.value == confirmpassword.value) {
            User.changePassword(newpassword.value)
            response.innerHTML = "Password was changed successful"
            response.classList.toggle(".success")
        }
        else{
            response.innerHTML = "An error has ocurred"
            response.classList.toggle(".error")
        }
    });

    //Leaderboards

    let leaderBoards = document.querySelector(".leaderboardsInner")

    let users = User.getAllUsers()
    users = users.sort((a,b)=> (a.xp < b.xp ? 1 : -1))

    users.forEach(user => {
        if(user.rank != "admin")
        {    
            leaderBoards.innerHTML += `
            <div style="display: inline-flex;border: #101B3B 2px solid;position: relative;justify-content: space-around;width: 100%;">
            <div style="width:33.33%;display: flex;justify-content: center;">
            <p class="nameUser">${user.username}</p>
            </div>
            <div style="width:33.33%;display: flex;justify-content: center;">
            <p class="nameUser">${user.level}</p>
            </div>
            <div style="width:33.33%;display: flex;justify-content: center;">
            <p class="xpUser">${user.xp}</p>
            </div>
            </div>`
        }
    });










}